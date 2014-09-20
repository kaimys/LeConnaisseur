<?php
if(!empty($_GET['r'])){
    if($_GET['r']=="Astra" && $_GET['hbbtv']=="y"){
    header("Location:http://tv.mytvscout.de/potsdamtv_hbbtv");
    }
}
header("Cache-Control: no-cache");

require_once("../lib/TVDetector/class.TVDetector.php");
$detector = new TVDetector();

$type="";
$showPointer=$detector->isPointerAvailable();
$hbbtv=false;

if($showPointer==true){
    header("Content-type:application/ce-html+xml; charset='UTF-8'; supportspointer=true");
    $type="ce-html+xml";

}else{
    if($hbbtv){
        header("Content-Type: application/vnd.hbbtv.xhtml+xml; charset='UTF-8' ");
        $type="application/vnd.hbbtv.xhtml+xml";
    }else{
        header("Content-type:application/ce-html+xml; charset='UTF-8' ");
        $type="ce-html+xml";
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "ce-html-1.0-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
<head> 
        <meta http-equiv="Content-Type" content="<?php echo $type; ?>; charset=utf-8" />
        <link   rel='stylesheet' href='http://fonts.googleapis.com/css?family=Carrois+Gothic'  type='text/css'/>
        <link   rel='stylesheet' href='app/stylesheets/style.css'                              type="text/css" media="screen"/>
        <script language="javascript" type="text/javascript" src="app/javascript/ajax.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/NAVIGATOR.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/addFunctions.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/genre.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/keycodes.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/MEN.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/events.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/general.js"></script>
        
	<script type="text/javascript" >
	/* <![CDATA[ */
        var cehtml  = true;
            <?php if ($hbbtv==true) {?>
        var hbbtv = true;
            <?php }else{ ?>
        var hbbtv = false;       
            <?php } ?>
                
            <?php if ($showPointer==true) {?>
        var gyroscope = true;
            <?php }else{ ?>
        var gyroscope = false;    
            <?php } ?>
	/* ]]> */
	</script>
        
        <?php if ($hbbtv==true) {?>
            <script type="text/javascript" src="app/javascript/hbbtvlib.js"></script>
        <?php } ?>  
</head>

<body onload="javascript:onl()">
        <object id='videoObj' class='video' type='video/mpeg4' width='1280' height='720' ></object>
        
	<div id="container">
            <div id="menu"></div>
            <div id="bigGrid"></div>
            <div id="fullGrid"></div>
            <div id="fullInfo">
                <div id="fullInfoImage"></div>
                <div id="fullInfoContainer"></div>
            </div>

            <object id='videoObj' class='video' type='video/mpeg4' width='1280' height='720' ></object>
            <div id="controlbarView">
                <div id="controlbarBg"/>
                    <div id="buttons">
                            <div id="controlbarText" class="controlbarBtn">00:00:00</div>
                            <div class="controlbarPlaceholer"></div>
                            <div class="controlbarBtn" id="controlbarView_0"><img src="img/controlbar/pause.png" alt=""/></div>
                            <div class="controlbarPlaceholer"></div>
                            <div id="controlbarTime" class="controlbarBtn">00:00:00</div>
                            <div id="progressbar"><div id="bar"></div>
                    </div>
                </div>
                <div id="info"></div>
            </div>
        </div>
        

	<div id="preloader"     class="preloader"><img src="img/preloader/loader.gif" border="0" alt=""/></div>
        <div id="preloaderAjax" class="preloader"><img src="img/preloader/loader.gif" border="0" alt=""/></div>
	<div id="trace"></div>
        
        
	<? if ($hbbtv==true) {?>
            <div style="visibility:hidden;">
                    <object type="application/oipfApplicationManager"></object>
                    <object type="application/oipfConfiguration"></object>
            </div>
	<?} ?>
        
        <? if ($showPointer) {?>
        <object id="nettvobjectfactory" type="application/NetTV_objectFactory" style="visibility:hidden"></object>
        <?} ?>
</body>

</html>