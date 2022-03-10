<?php

function getParameterFromLines($lines, $parameterIndex) {
    $line = trim($lines[$parameterIndex], "\r\n");
    return substr($line, strpos($line, ":") + 2);
}

header("Content-Type: text/plain");
if (!is_dir("data"))
{
    mkdir("data");
}
$email = getGetParameter('email');
if ($email)
{
    $lines = [];
     $fullPath = "data/" . $email . '.txt';
    if (file_exists($fullPath))
    {
      $lines = file($fullPath);
    }
    $firstName = isset($_GET['first_name']) ? $_GET['first_name'] : getParameterFromLines($lines, 0);
    $lastName = isset($_GET['last_name']) ? $_GET['last_name'] : getParameterFromLines($lines, 1);
    $age = isset($_GET['age']) ? $_GET['age'] : getParameterFromLines($lines, 3);
    $outEmail = "Email: $email" . "\r\n";
    $outFirstName = "First name: " . $firstName . "\r\n";
    $outLastName = "Last name: " . $lastName . "\r\n";
    $outAge = "Age: " . $age . "\r\n";
    $data = ($outFirstName .  $outLastName . $outEmail  . $outAge);
    $file = fopen($fullPath, 'w+');
    fwrite($file, $data);
    fclose($file);

    if ($fullPath)
        echo "Saved successful: $fullPath";
    else
        echo "Saved ERROR. Check spelling email";
}

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}