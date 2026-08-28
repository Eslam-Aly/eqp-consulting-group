<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function headerValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

function readSmtpResponse($socket, array $acceptedCodes): string
{
    $response = '';

    while (($line = fgets($socket, 1024)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $acceptedCodes, true)) {
        throw new RuntimeException('SMTP rejected the request with code ' . $code);
    }

    return $response;
}

function smtpCommand($socket, string $command, array $acceptedCodes): void
{
    if (fwrite($socket, $command . "\r\n") === false) {
        throw new RuntimeException('Unable to write to the SMTP connection');
    }

    readSmtpResponse($socket, $acceptedCodes);
}

function encodeHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function sendWithSmtp(array $config, array $message): void
{
    $host = (string) $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $timeout = 15;
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'peer_name' => $host,
            'SNI_enabled' => true,
        ],
    ]);

    $socket = @stream_socket_client(
        'ssl://' . $host . ':' . $port,
        $errorNumber,
        $errorMessage,
        $timeout,
        STREAM_CLIENT_CONNECT,
        $context,
    );

    if ($socket === false) {
        throw new RuntimeException('Unable to connect to SMTP: ' . $errorNumber);
    }

    stream_set_timeout($socket, $timeout);

    try {
        readSmtpResponse($socket, [220]);
        smtpCommand($socket, 'EHLO forms.eqpconsulting.com', [250]);
        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode((string) $config['smtp_username']), [334]);
        smtpCommand($socket, base64_encode((string) $config['smtp_password']), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . $config['from_email'] . '>', [250]);
        smtpCommand($socket, 'RCPT TO:<' . $config['to_email'] . '>', [250, 251]);
        smtpCommand($socket, 'DATA', [354]);

        $subject = encodeHeader('Nueva consulta web de ' . $message['nombre']);
        $fromName = encodeHeader((string) $config['from_name']);
        $replyName = encodeHeader($message['nombre']);
        $messageId = sprintf(
            '<%s@eqpconsulting.com>',
            bin2hex(random_bytes(16)),
        );

        $plainText = implode("\r\n", [
            'Nueva consulta desde el sitio web de EQP Consulting',
            '',
            'Nombre: ' . $message['nombre'],
            'Empresa: ' . ($message['empresa'] !== '' ? $message['empresa'] : 'No indicada'),
            'Email: ' . $message['email'],
            'Servicio: ' . $message['servicio'],
            '',
            'Mensaje:',
            $message['mensaje'],
            '',
            'Enviado: ' . gmdate('Y-m-d H:i:s') . ' UTC',
        ]);

        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . $fromName . ' <' . $config['from_email'] . '>',
            'To: <' . $config['to_email'] . '>',
            'Reply-To: ' . $replyName . ' <' . $message['email'] . '>',
            'Subject: ' . $subject,
            'Message-ID: ' . $messageId,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ];

        $payload = implode("\r\n", $headers)
            . "\r\n\r\n"
            . rtrim(chunk_split(base64_encode($plainText), 76, "\r\n"));
        $payload = preg_replace('/(?m)^\./', '..', $payload) ?? $payload;

        if (fwrite($socket, $payload . "\r\n.\r\n") === false) {
            throw new RuntimeException('Unable to send SMTP data');
        }

        readSmtpResponse($socket, [250]);
        smtpCommand($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

$configPath = dirname(__DIR__, 2) . '/eqp-private/contact-config.php';
if (!is_file($configPath)) {
    error_log('EQP contact form configuration is missing');
    respond(503, ['message' => 'El formulario todavía no está disponible.']);
}

$config = require $configPath;
if (!is_array($config)) {
    error_log('EQP contact form configuration is invalid');
    respond(503, ['message' => 'El formulario todavía no está disponible.']);
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = $config['allowed_origins'] ?? [];
if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 600');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if ($origin === '' || !in_array($origin, $allowedOrigins, true)) {
        respond(403, ['message' => 'Origen no autorizado.']);
    }
    respond(204, []);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    respond(200, ['ok' => true, 'service' => 'eqp-contact-form']);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: GET, POST, OPTIONS');
    respond(405, ['message' => 'Método no permitido.']);
}

if ($origin === '' || !in_array($origin, $allowedOrigins, true)) {
    respond(403, ['message' => 'Origen no autorizado.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 16384) {
    respond(413, ['message' => 'La solicitud es demasiado grande.']);
}

$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) {
    respond(400, ['message' => 'La solicitud no es válida.']);
}

if (trim((string) ($input['website'] ?? '')) !== '') {
    respond(200, ['message' => 'Tu consulta fue enviada.']);
}

$startedAt = filter_var($input['startedAt'] ?? null, FILTER_VALIDATE_INT);
$elapsed = $startedAt !== false ? ((int) round(microtime(true) * 1000) - $startedAt) : 0;
if ($elapsed < 2500 || $elapsed > 7200000) {
    respond(400, ['message' => 'Actualiza la página e inténtalo nuevamente.']);
}

$nombre = trim((string) ($input['nombre'] ?? ''));
$empresa = trim((string) ($input['empresa'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$servicio = trim((string) ($input['servicio'] ?? ''));
$mensaje = trim((string) ($input['mensaje'] ?? ''));

$length = static fn (string $value): int => function_exists('mb_strlen')
    ? mb_strlen($value, 'UTF-8')
    : strlen($value);

$validServices = [
    'Consultoría ISO',
    'Capacitación',
    'Gestión y productividad',
    'Otro',
];

if ($length($nombre) < 2 || $length($nombre) > 100) {
    respond(422, ['message' => 'Introduce un nombre válido.']);
}
if ($length($empresa) > 120) {
    respond(422, ['message' => 'El nombre de la empresa es demasiado largo.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $length($email) > 180) {
    respond(422, ['message' => 'Introduce un email válido.']);
}
if (!in_array($servicio, $validServices, true)) {
    respond(422, ['message' => 'Selecciona un servicio válido.']);
}
if ($length($mensaje) < 10 || $length($mensaje) > 3000) {
    respond(422, ['message' => 'El mensaje debe tener entre 10 y 3000 caracteres.']);
}

$rateLimitKey = hash('sha256', (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$rateLimitFile = sys_get_temp_dir() . '/eqp-contact-' . $rateLimitKey;
$now = time();
if (is_file($rateLimitFile)) {
    $lastSubmission = (int) file_get_contents($rateLimitFile);
    if ($lastSubmission > 0 && ($now - $lastSubmission) < 60) {
        respond(429, ['message' => 'Espera un minuto antes de enviar otra consulta.']);
    }
}

$requiredConfig = [
    'smtp_host',
    'smtp_port',
    'smtp_username',
    'smtp_password',
    'from_email',
    'from_name',
    'to_email',
];
foreach ($requiredConfig as $key) {
    if (!isset($config[$key]) || $config[$key] === '') {
        error_log('EQP contact form configuration key is missing: ' . $key);
        respond(503, ['message' => 'El formulario todavía no está disponible.']);
    }
}

try {
    sendWithSmtp($config, [
        'nombre' => headerValue($nombre),
        'empresa' => headerValue($empresa),
        'email' => headerValue($email),
        'servicio' => headerValue($servicio),
        'mensaje' => $mensaje,
    ]);
    file_put_contents($rateLimitFile, (string) $now, LOCK_EX);
    respond(200, [
        'message' => 'Tu consulta fue enviada. Nuestro equipo se pondrá en contacto contigo.',
    ]);
} catch (Throwable $error) {
    error_log('EQP contact form SMTP failure: ' . $error->getMessage());
    respond(502, ['message' => 'No pudimos enviar tu consulta. Inténtalo nuevamente.']);
}
