<?php
header("Content-Type: text/plain");
$identifierValue = getGetParameter('identifier');
if (is_null($identifierValue))
{
     echo "No identifier";
}
else
{
    $isSR3 = isIdentifier($identifierValue);
    if ($isSR3)
        echo "test on SR3 successful";
    else
        echo "test on SR3 failed";
}

function isIdentifier($identifier): bool
{

    $strLength = strlen($identifier);
    $firstSymbol = $identifier{0};
    if (!(ctype_alpha($firstSymbol)))
        return false;
    for ($i = 1; $i < $strLength; $i++)
        if ((!ctype_alpha($identifier{$i})) && (!is_numeric($identifier{$i})))
            return false;
    return true;
}

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}
?>