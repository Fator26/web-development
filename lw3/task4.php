<?php
header("Content-Type: text/plain");
if (!is_dir("data"))
{
    mkdir("data");
}
$firstName = getGetParameter('first_name');
$lastName = getGetParameter('last_name');
$email = getGetParameter('email');
$age = getGetParameter('age');
$fullPath = null;
{
    $fullPath = "data/" . $email . '.txt';
    $email = "Email: $email" . "\r\n";
    $firstName = "First name: " . setParameter($firstName, $fullPath, 0);
    $lastName = "Last name: " . setParameter($lastName, $fullPath, 1);
    $age = "Age: " . setParameter($age, $fullPath, 3);
    $data = ($firstName .  $lastName . $email  . $age);
    $file = fopen($fullPath, 'w+');
    fwrite($file, $data);
    fclose($file);
}
if ($fullPath)
    echo "Saved successful: $fullPath";
else
    echo "Saved ERROR. Check spelling email";

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}


function setParameter($firstName, $fullPath, $numLine): string
{
  if ($firstName)
  {
    $firstName = "$firstName" . "\r\n";
  }
  else
  {
    if (file_exists($fullPath))
    {   
      $lines = file($fullPath);
      if ($lines)
      {
        $firstName = $lines[$numLine];
      }
    }                            
    else
    {
    $firstName = "\r\n";
    }
  }
  return $firstName;
}

