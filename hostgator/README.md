# EQP contact endpoint — HostGator upload

Upload and extract the contents of this folder in the cPanel account home directory.

The final server paths must be:

- `/home/CPANEL_USERNAME/public_html/forms/contact.php`
- `/home/CPANEL_USERNAME/public_html/forms/.htaccess`
- `/home/CPANEL_USERNAME/eqp-private/contact-config.php`

After extraction, edit `eqp-private/contact-config.php` in cPanel and replace
only the `REPLACE_WITH_THE_MAILBOX_PASSWORD` line with the password for
`website@eqpconsulting.com`. Keep the `SMTP_PASSWORD` lines above and below it
unchanged. Do not add that password to GitHub.

Set permissions to `644` for the PHP files and `755` for the two directories.

Verify the health endpoint at:

`https://forms.eqpconsulting.com/contact.php`

It should return:

`{"ok":true,"service":"eqp-contact-form"}`
