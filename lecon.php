<?php
header("Content-type: application/json");
$API = "http://tvhackday.api.lab.watchmi.tv";

define("TIMESPAN", 60*60*2);

$CHANNELS = array(71, 40, 58, 694, 37, 64, 589);

function now () {
	return than(0);
}

function than ($delay) {
	return date("Y-m-d\\TH:i:s", time() + $delay)."+02:00";
}

function watchmi($service, $obj) {
    global $API;
    $url = $API.$service."?";
    foreach ($obj as $key => $value) {
        if(gettype($value) == "array") {
            $url .= $key."=".urlencode(json_encode($value))."&";
        } else {
            $url .= $key."=".urlencode($value)."&";
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
    	$response = json_encode(nowNext($_GET["ch"]));
        break;
        
    case "epg":
        foreach ($CHANNELS as $channel) {
        	$array[] = nowNext($channel);
        }
        $response = json_encode($array);
    	break;

    case "test":
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        $response = json_encode($arr);
        break;
}

function nowNext ($channel) {
	$query = array(
			'numberOfItems' => 10,
			'sorting' => 'multi',
			'multiSorting' => array(
					array('criterion' => 'byTime')
			),
			'filter' => array('term' => 'sourceId', 'value' => $channel),
			'annotation' => 'full',
			'windowOfAvailabilityType' => 'strictStart',
			'descendingDefaultByTime' => 'true',
			'windowOfAvailabilityStart' => now(),
			'windowOfAvailabilityEnd' => than(TIMESPAN)
	);
	$response = watchmi("/asset", $query);
	return filter($response);
}

function filter ($jsonString) {
	$input = json_decode($jsonString);
	
	foreach ($input as $elem) {
		$elem = array(
				"title" => $elem->asset->titles->deu,
				"start" => $elem->asset->availabilityStartTime,
				"end" => $elem->asset->availabilityEndTime,
				"assetId" => $elem->asset->assetId,
				"sourceId" => $elem->asset->sourceId,
				"sourceName" => $elem->asset->sourceNames->long->deu,
				"imageURL" => $elem->asset->imageUrl[1]);
		$output[] = $elem;
	}
	
	if (!isset($output)) {
		$output = array();
	}
	
	if(true) {
		return $output;
	} else {
		return $input;
	}
	
}

echo($response);
