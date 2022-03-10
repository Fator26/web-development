<?php
header("Content-Type: text/plain");
if ($_GET['password'])
{
    $passwordValue = $_GET['password'];
    echo PasswordStrength($passwordValue);
}
else
     echo "No password";

function addPasswordLength($passwordValue)
{
    return 4 * strlen($passwordValue);
}

function addPasswordsNumeric($passwordValue)
{
    $numericCounter = 0;
    for ($i = 0; $i < strlen($passwordValue); $i++)
    {
        if (is_numeric($passwordValue{$i}))
            $numericCounter += 4;
    }
    return $numericCounter;
}

function addPasswordUpper($passwordValue)
{
    $upperCounter = 0;
    for ($i = 0; $i < strlen($passwordValue); $i++)
    {
        if (ctype_upper($passwordValue{$i}))
            $upperCounter += 1;
    }
    if ($upperCounter != 0)
        return (strlen($passwordValue) - $upperCounter) * 2;
    return $upperCounter;
}

function addPasswordLower($passwordValue)
{
    $lowerCounter = 0;
    for ($i = 0; $i < strlen($passwordValue); $i++)
    {
        if (ctype_lower($passwordValue{$i}))
            $lowerCounter += 1;
    }
    if ($lowerCounter != 0)
        return (strlen($passwordValue) - $lowerCounter) * 2;
    return $lowerCounter;
}

function subIfOnlySymbols($passwordValue)
{
    if (ctype_alpha($passwordValue))
        return strlen($passwordValue);
    else
        return 0;
}

function subIfOnlyDigit($passwordValue)
{
    if (ctype_digit($passwordValue))
        return strlen($passwordValue);
    else
        return 0;
}

function subRepeats($passwordValue)
{
    $count = 0;
    foreach (count_chars($passwordValue, 1) as $i => $val)
    {
     $n = $val;
     if ($n > 1)
         $count += $n;
     }
    return $count;
}

function PasswordStrength($passwordValue)
{
    $passwordStrength = 0;
    $passwordStrength += addPasswordLength($passwordValue);
    $passwordStrength += addPasswordsNumeric($passwordValue);
    $passwordStrength += addPasswordUpper($passwordValue);
    $passwordStrength += addPasswordLower($passwordValue);
    $passwordStrength -= subIfOnlySymbols($passwordValue);
    $passwordStrength -= subIfOnlyDigit($passwordValue);
    $passwordStrength -= subRepeats($passwordValue);
    return $passwordStrength;
}
?>




