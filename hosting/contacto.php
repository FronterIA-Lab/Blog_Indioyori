<?php
/**
 * Endpoint de contacto para Namecheap (u otro hosting con PHP).
 * Sube este archivo a tu hosting, p. ej.:
 *   https://fronteria-lab.com/contacto.php
 * Luego en Ghost → Design → Customize → Contact endpoint:
 *   https://fronteria-lab.com/contacto.php
 *
 * Ajusta $TO si tu correo es otro.
 */

header('Content-Type: application/json; charset=utf-8');

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$allowed = [
  'https://indioyori.ghost.io',
  'https://indioyori.fronteria-lab.com',
  'https://fronteria-lab.com',
  'https://www.fronteria-lab.com',
];
if ($origin && in_array($origin, $allowed, true)) {
  header('Access-Control-Allow-Origin: ' . $origin);
  header('Vary: Origin');
} else {
  // Permite el sitio Ghost aunque el Origin varíe un poco
  header('Access-Control-Allow-Origin: *');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Accept, Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Solo POST']);
  exit;
}

// Honeypot: si viene lleno, fingimos éxito (bots)
if (!empty($_POST['_gotcha'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$TO = 'indioyori@fronteria-lab.com'; // ← tu correo

$name = trim((string)($_POST['name'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($message) < 5) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Datos incompletos']);
  exit;
}

$subject = 'Contacto · IndioYori · ' . $name;
$body = "Nombre: {$name}\nCorreo: {$email}\n\n{$message}\n";
$headers = [
  'From: contacto@' . ($_SERVER['SERVER_NAME'] ?? 'fronteria-lab.com'),
  'Reply-To: ' . $email,
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode([
    'ok' => false,
    'error' => 'El hosting no pudo enviar el correo. Activa mail() o SMTP en Namecheap, o usa mailto vacío en Ghost.',
  ]);
  exit;
}

echo json_encode(['ok' => true]);
