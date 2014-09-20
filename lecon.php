<?php
$query = $_GET["q"];
switch ($query) {
    case "channels":
        $q = "http://tvhackday.api.lab.watchmi.tv/documentstore/sources?filter={%22term%22:%22assetTypes%22,%22value%22:%22broadcast%22}";
        break;
}

$response = file_get_contents($q);
echo($response);
?>