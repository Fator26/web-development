<?php
header("Content-Type: text/plain");
$textValue = getGetParameter('text');
if ($textValue)
{
    $textValue = trim($textValue, ' ');
    while(strpos($textValue,"  ")!==false)
    {
        $textValue = str_replace("  ", " ", $textValue);
    }
    echo $textValue;
}
else
    echo "No text";
function getGetParameter(string $name): ?string
{
  return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}
?>