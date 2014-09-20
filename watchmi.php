<?php
header("Content-type: application/json");

$API = "http://tvhackday.api.lab.watchmi.tv";
$CHANNELS = array(100,104,115,138,139,146,175,194,266,275,276,277,39,40,402,41,42,43,44,453,46,47,471,472,475,48,49,507,51,52,54,544,55,56,57,58,587,589,59,60,610,613,618,64,65,659,66,660,666,694,774,38);

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
        return json_decode(file_get_contents($url));
    } else {
        return $url;
    }
}

switch ($_SERVER["PATH_INFO"]) {

    case "/channels":
        $query = array(
            'filter' => array('term' => 'assetTypes', 'value' => 'broadcast')
        );
        $response = watchmi("/documentstore/sources", $query);
        break;

    case "/nownext":
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

    case "/recommend":
        $query = array(
            'context' => 'simDefault',
            'seed' => $_GET["seed"],
            'adHocContext' => array(
                'rules' => array(
                    array('then' => array('global' => array(
                        'numberOfItems' => 10,
                        'windowOfAvailabilityStart' => '2014-09-21T10:45:00Z',
                        'windowOfAvailabilityEnd'   => '2014-09-22T02:10:00Z',
                        'annotation' => 'full',
                        'filter' => array('term' => 'sourceId', 'operator' => 'in', 'values' => $CHANNELS),
                    )))
                )
            ),
        );
        $response = watchmi("/recommendations", $query);
        break;

    case "/test":
        $response = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        break;
}

echo(json_encode($response));