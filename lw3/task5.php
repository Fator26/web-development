<?php
header('Content-Type: text/plain');

$email = getGetParameter('email');
$fullPath = "data/" . $email . '.txt';

if (file_exists($fullPath))
{
  $lines = file($fullPath);
}

if ($lines)
{
  foreach ($lines as $line)
  {
   echo $line;
  }
}

function getGetParameter(string $name): ?string
{
  return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}