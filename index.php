<?php
//header("Location:genre.php");
if(!empty($_GET['r'])){
    if($_GET['r']=="Astra" && $_GET['hbbtv']=="y"){
    //header("Location:http://tv.mytvscout.de/potsdamtv_hbbtv");
    }
}
header("Cache-Control: no-cache");

//require_once("../lib/TVDetector/class.TVDetector.php");
//$detector = new TVDetector();

$type="";
$showPointer=false;//$detector->isPointerAvailable();
$hbbtv=true;

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
        <script language="javascript" type="text/javascript" src="app/javascript/index.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/keycodes.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/MEN.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/events.js"></script>
        <script language="javascript" type="text/javascript" src="app/javascript/general.js"></script>
        
	<script type="text/javascript" >
	/* <![CDATA[ */
        var cehtml  = true;
            <?php if ($hbbtv==true) {?>
        var channel = <?php echo $_GET['ch']; ?>;
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
        

    <div id="rating"></div>
    <div id="mustache"><img src="img/mustache.png" border="0"/></div>
    <div id="merci">Merci !<br/><img src="img/logo.png" border="0"/></div>
        
        
        
        
        
        
        
        
        
        
        
	<div id="preloader"     class="preloader"><img src="img/preloader/loader.gif" border="0" alt=""/></div>
    <div id="preloaderAjax" class="preloader"><img src="img/preloader/loader.gif" border="0" alt=""/></div>
	<div id="trace"></div>
        
        
	<?php if ($hbbtv==true) { ?>
            <div style="visibility:hidden;">
                    <object type="application/oipfApplicationManager"></object>
                    <object type="application/oipfConfiguration"></object>
            </div>
	<?php } ?>
        
        <?php if ($showPointer) { ?>
        <object id="nettvobjectfactory" type="application/NetTV_objectFactory" style="visibility:hidden"></object>
        <?php } ?>
</body>

</html>