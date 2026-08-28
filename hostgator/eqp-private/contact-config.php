<?php

return [
    'smtp_host' => 'mail.eqpconsulting.com',
    'smtp_port' => 465,
    'smtp_username' => 'website@eqpconsulting.com',
    'smtp_password' => <<<'SMTP_PASSWORD'
REPLACE_WITH_THE_MAILBOX_PASSWORD
SMTP_PASSWORD,
    'from_email' => 'website@eqpconsulting.com',
    'from_name' => 'EQP Consulting Website',
    'to_email' => 'info@eqpconsulting.com',
    'allowed_origins' => [
        'https://eqp-consulting-group.eslam-mahmud18.chatgpt.site',
        'https://eqp-consulting-group.vercel.app',
        'https://eqpconsulting.com',
        'https://www.eqpconsulting.com',
    ],
];
