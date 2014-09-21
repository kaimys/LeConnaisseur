<?php
header("Content-type: application/json");

$API = "http://tvhackday.api.lab.watchmi.tv";
//$CHANNELS = array(100,104,115,138,139,146,175,194,266,275,276,277,39,40,402,41,42,43,44,453,46,47,471,472,475,48,49,507,51,52,54,544,55,56,57,58,587,589,59,60,610,613,618,64,65,659,66,660,666,694,774,38);
$CHANNELS = array(71, 40, 58, 694);
$SUBSCRIBER = 'c16a4004-e5df-4f30-9ba8-f4222f64b98f';
$PROFILES = array(
    'sport'         => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_sports_1",
    'entertainment' => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_entertainment_1",
    'series'        => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_series_1",
    'movie'         => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_movie_1",
    'kids'          => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_kids_1",
    'various'       => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_VARIOUS_1",
    'info'          => "c16a4004-e5df-4f30-9ba8-f4222f64b98f_dd677004-e5df-4f30-9ba8-f4222f64b98f_info_1"
);

date_default_timezone_set('Europe/Berlin');

function format_time($t) {
    return date("Y-m-d\\TH:i:sP", $t);
    //return date("Y-m-d\\TH:i:s\\Z", $t-7200);
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
        return json_decode(file_get_contents($url));
    } else {
        return $url;
    }
}

function post_watchmi($service, $data) {
    global $API;
    $url = $API.$service;
    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'method'  => 'POST',
            'header'  => "Content-type: application/json\r\n",
            'content' => json_encode($data),
        ),
    );
    $context = stream_context_create($options);
    return json_decode(file_get_contents($url, false, $context));
}

function condenseAsset($asset) {
    return array(
        'title' => $asset->titles->deu,
        'start' => $asset->availabilityStartTime,
        'end' => $asset->availabilityEndTime,
        'assetId' => $asset->assetId,
        'sourceId' => $asset->sourceId,
        'sourceNameLong' => $asset->sourceNames->long->deu,
        'sourceNameShort' => $asset->sourceNames->short->deu,
        'imageURL' => $asset->imageUrl[1]
    );
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
            'filter' => array('term' => 'sourceId', 'value' => floor($_GET["ch"])),
            'annotation' => 'full',
            'windowOfAvailabilityType' => 'strictStart',
            'descendingDefaultByTime' => 'true',
            'windowOfAvailabilityStart' => format_time(time()-7200),
            'windowOfAvailabilityEnd' => format_time(time()+7200)
        );
        //print_r($query);exit();
        $res = watchmi("/asset", $query);
        $response = array();
        foreach($res as $rec) {
            $response[] = condenseAsset($rec->asset);
        }
        break;

    case "/recommendForItem":
        $query = array(
            'context' => 'simDefault',
            'seed' => $_GET["item"],
            'adHocContext' => array(
                'rules' => array(
                    array('then' => array('global' => array(
                        'numberOfItems' => 10,
                        'windowOfAvailabilityStart' => format_time(time()),
                        'windowOfAvailabilityEnd'   => format_time(time()+7200),
                        'annotation' => 'full',
                        'filter' => array('term' => 'sourceId', 'operator' => 'in', 'values' => $CHANNELS),
                    )))
                )
            ),
        );
        //print_r($query);exit();
        $res = watchmi("/recommendations", $query);
        $response = array();
        foreach($res->recommendations as $rec) {
            $response[] = condenseAsset($rec->asset);
        }
        break;

    case "/recommendForUser":
        $query = array(
            'context' => 'prefDefault',
            'subscriber' => $SUBSCRIBER,
            'profile' => $PROFILES[$_GET['profile']],
            'adHocContext' => array(
                'rules' => array(
                    array('then' => array(
                        'preferenceEngines' => array( array('name' => 'prefEngine1')),
                        'global' => array(
                            'numberOfItems' => 10,
                            'windowOfAvailabilityStart' => format_time(time()),
                            'windowOfAvailabilityEnd'   => format_time(time()+3600*12),
                            'annotation' => 'full',
                            'filter' => array('term' => 'sourceId', 'operator' => 'in', 'values' => $CHANNELS),
                        )
                    ))
                )
            )
        );
        $res = watchmi("/recommendations", $query);
        $response = array();
        foreach($res->recommendations as $rec) {
            $response[] = condenseAsset($rec->asset);
        }
        break;

    case "/rate":
        // watchmi.php/rate?asset=86336205&rating=1&profile=various
        $url = "/profile/".$PROFILES[$_GET['profile']]."/scorer?errorTolerant=true&recordingSuggestion=false";
        $data = array(
            'assetId' => floor($_GET['asset']),
            'rating' => (floor($_GET['rating']) - 1.0) / 2.0 - 1.0,
            'subscriber' => $SUBSCRIBER
        );
        //$response = array($url, $data); break;
        $response = post_watchmi($url, $data);
        break;

    case "/createUser":
        $newUser = md5(rand());
        $newUser = "ff617004-c5df-4f30-9ba8-f4222f64b98f";
        $newUser = "ff611029-c5df-4f30-9ba8-f8733f64b98f";
        $url = "/subscriber/".$newUser;
        $data = array(
            'template' => "dd677004-e5df-4f30-9ba8-f4222f64b98f"
        );
        //$response = array($url, $data); break;
        $response = post_watchmi($url, $data);
        break;

    case "/test":
        $response = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        break;
}

echo(json_encode($response));