<?php
header("Content-type: application/json");
$API = "http://tvhackday.api.lab.watchmi.tv";

function now () {
	return date("Y-m-d")."T".date("H:i:s", time()-60*60*2);
}

function than ($delay) {
	$offset=time()-60*60*2+$delay;
	return date("Y-m-d", $offset)."T".date("H:i:s", $offset);
}

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
            'filter' => array('term' => 'sourceId', 'value' => $_GET["ch"]),
            'annotation' => 'full',
            'windowOfAvailabilityType' => 'strictStart',
            'descendingDefaultByTime' => 'true',
            'windowOfAvailabilityStart' => now(),
            'windowOfAvailabilityEnd' => than(60*60*2)
        );
        $response = watchmi("/asset", $query);
        $response = filter($response);
        break;

    case "test":
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        $response = json_encode($arr);
        break;
}

function filter ($jsonString) {
	$response = json_decode($jsonString);
	
	foreach ($response as $elem) {
		$elem = array(
				"title" => $elem->asset->titles->deu,
				"assetId" => $elem->asset->assetId,
				"sourceId" => $elem->asset->sourceId,
				"imageURL" => $elem->asset->imageUrl[0]);
		$array[] = $elem;
	}
	
	$response = json_encode($array);
	
	if(false) {
		return $response;
	} else {
		return $jsonString;
	}
	
}

echo($response);
