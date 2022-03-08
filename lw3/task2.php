<?php
header("Content-Type: text/plain");
$identifierValue = getGetParameter('identifier');
if ($identifierValue)
{
    $isSR3 = true;
    $strLength = strlen($identifierValue);
    $firstSymbol = $identifierValue{0};
    if (!(ctype_alpha($firstSymbol)))
        $isSR3 = false;
    for ($i = 1; $i < $strLength; $i++)
        if ((!ctype_alpha($identifierValue{$i})) && (!is_numeric($identifierValue{$i})))
            $isSR3 = false;
    if ($isSR3)
        echo "test on SR3 successful";
    else
        echo "test on SR3 failed";
}
else
     echo "No identifier";

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}
?>