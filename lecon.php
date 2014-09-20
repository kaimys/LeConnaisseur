<?php
header("Content-type: application/json");
$API = "http://tvhackday.api.lab.watchmi.tv";

function watchmi($service, $obj) {
    global $API;
    $url = $API.$service."?";
    foreach ($obj as $key => $value) {
        if(gettype($value) == "array") {
            $url .= $key."=".urlencode(json_encode($value))."&";
        } else {
            $url .= $key."=".$value."&";
        }
    }
    if(true) {
        return file_get_contents($url);
    } else {
        return $url;
    }
}

switch ($_GET["q"]) {

    case "channels":
        $query = array(
            'filter' => array('term' => 'assetTypes', 'value' => 'broadcast')
        );
        $response = watchmi("/documentstore/sources", $query);
        break;

    case "nownext":
        $query = array(
            'numberOfItems' => 10,
            'sorting' => 'multi',
            'multiSorting' => array(
                array('criterion' => 'byTime')
            ),
            'filter' => array('term' => 'sourceId', 'value' => 774),
            'annotation' => 'full',
            'windowOfAvailabilityType' => 'strictStart',
            'descendingDefaultByTime' => 'true',
            'windowOfAvailabilityStart' => '2014-09-20T13:00:00Z',
            'windowOfAvailabilityEnd' => '2014-09-20T15:45:00Z'
        );
        $response = watchmi("/asset", $query);
        break;

    case "test":
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        $response = json_encode($arr);
        break;
}

echo($response);
