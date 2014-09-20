
	window.onload           = onl;
       // var cehtml            see index.html or .php;
        // var hbbtv            see index.html or .php;
	//var gyroscope           = false;
        
        //var                 channel = "";

	var NAVIGATOR;
	var myVideo; 
	
	var intro               = false;
	var introUrl            = "http://tv.mytvscout.de/m4tv/intro/Opener_M4_TV_SD.mp4";
	
	var logo                = true;
	var logoURL             = "img/tv_logo.png";
	
	var timeout;

	var blocked             = false;
	var visible             = true;
	var liveDataHolder      = {};
	var dataHolder          = {};
	
	var currentCategory     = "";
	var currentPlayCategory = "";
	var currentPlaystate    = "";
	var currentSubmenuId    = 0;
	
	var data                = {};
	var playlist            = {};
	var necessaryData       = 2;
	
	var lastArea            = "";
	
        var deviceuiobject   = null;
        var USERPOINTERMODE  = 0;
        var pointer;

        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);


        function empty(id){
            NAVIGATOR.getCurrentArea().metadata.clickedId = id+(NAVIGATOR.getCurrentArea().metadata.page*NAVIGATOR.getCurrentArea().metadata.maxItemsPerPage);//id;
            setVisited(id);
            
            // setActive();
        }
        
        
        
        function initGyroscope(){
		if(gyroscope==true){
			try{
                            deviceUiObject = document.getElementById('nettvobjectfactory').createDeviceUIObject();

                            if(deviceUiObject.userPointerMode==0){
                                    deviceUiObject.userPointerMode = NetTV_DeviceUI.USERPOINTERMODE_OFF; 
                            }else{
                                    deviceUiObject.userPointerMode = NetTV_DeviceUI.USERPOINTERMODE_AUTO; 
                            }
			}catch(e){
                           //trace(e);
			}
		}
        }


        function blockNavigation(param){
           blocked = param;
           
           if(param){
              document.getElementById("preloaderAjax").style.display="block";
           }else{
              document.getElementById("preloaderAjax").style.display="none";
           }
        }
        
        function checkPhilipsPointer(){
            if(gyroscope==true){
                togglePointer();
            }
        }
        
	function togglePointer() { 
                
		try{
                    if(USERPOINTERMODE==1){
                        
                        if (document.getElementById("container").style.display=="none") { 
                            if(pointer!="off"){
                                deviceUiObject.userPointerMode = NetTV_DeviceUI.USERPOINTERMODE_OFF;
                                pointer = "off";
                            }
                            
                        }else{ 
                            if (document.getElementById("container").style.display=="block"){
                                if(pointer!="on"){
                                    deviceUiObject.userPointerMode = NetTV_DeviceUI.USERPOINTERMODE_AUTO; 
                                    pointer = "on";
                                }
                             }
                        } 
                    }   
		}catch(e){}
	}
        
        
        
        function goUp(){
            if(!blocked){
                NAVIGATOR.navigate("up");
            }
	}
	
	function goDown(){
            if(!blocked){
                NAVIGATOR.navigate("down");
            }
	}
	
	function goLeft(){
            if(!blocked){
                NAVIGATOR.navigate("left");
            }
	}
	
	function goRight(){
            if(!blocked){
                NAVIGATOR.navigate("right");
            }
	}
	
	function enter(){
            if(!blocked){
                    var id      = NAVIGATOR.getCurrentArea().metadata.currentId
                    var action  = NAVIGATOR.getCurrentArea().getButtonByIndex(id).getAction();
                    eval(action);
            }
	}
	
	function setVisited(id){
            var name             = NAVIGATOR.getCurrentAreaName();
            var btnName          = name+"_"+id;
            //var classNameVisited = NAVIGATOR.getAreaByName(name).getCssClass("visited");
            setInactive(name);

            NAVIGATOR.getCurrentArea().metadata.currentId = id;
            setActive();
	}
	
	function setActive(){
            var name            = NAVIGATOR.getCurrentAreaName();
            var id              = NAVIGATOR.getCurrentArea().metadata.currentId;
            var btnName         = name+"_"+id;
            var classNameActive = NAVIGATOR.getAreaByName(name).getCssClass("active");

            addClass(btnName, classNameActive);
	}
	
	function setInactive(areaName){
            var id               = NAVIGATOR.getAreaByName(areaName).metadata.currentId;
            var btnName          = areaName+"_"+id;
            var classNameActive  = NAVIGATOR.getAreaByName(areaName).getCssClass("active");
            var classNameVisited = NAVIGATOR.getAreaByName(areaName).getCssClass("visited");
            var metadata         = NAVIGATOR.getAreaByName(areaName).metadata;

            removeClass(btnName, classNameActive);

            for(var i=0; i< NAVIGATOR.getAreaByName(areaName).buttons.length; i++){
                    if(metadata.clickedId!=(i+(metadata.page*metadata.maxItemsPerPage))){
                            removeClass(areaName+"_"+i, classNameVisited);
                    }else{
                            addClass(areaName+"_"+i, classNameVisited);
                    }
            }
	}


	function onMouseOverPlus(areaName,id) {
            var className = "active";
            addClass(areaName+"_"+id,className);
	}
	
	function onMouseOutPlus(areaName,id) {
		var className = "active";
		removeClass(areaName+"_"+id,className);
	}
	
	function onMouseOver(areaName,id) {
            var className = NAVIGATOR.getAreaByName(areaName).getCssClass("mouseOver");
            addClass(areaName+"_"+id,className);
	}
	
	function onMouseOut(areaName,id) {
            var className = NAVIGATOR.getAreaByName(areaName).getCssClass("mouseOver");
            removeClass(areaName+"_"+id,className);
	}
	
	function onClick(areaName,id){ 
            if(!blocked){
                NAVIGATOR.setNextAreaByName(areaName);
                var action  = NAVIGATOR.getAreaByName(areaName).getButtonByIndex(id).getAction();
                eval(action);
                setActive();
            }
	}
	
	
	function addClass(objId, inClassName) {
	    obj = document.getElementById(objId.toString());
	    var hasClassName = obj.className.toString();
	
	    if (hasClassName.indexOf(inClassName) > -1) {
	    } else {
	    	obj.className += ' ' + inClassName;
	    }
	}
	
	function removeClass(objId, inClassName) {
	    obj = document.getElementById(objId);
	    
	    if(obj!=null){
		    var classNames =    obj.className.toString();
		    var thisClassName = inClassName.toString();
		
		    if (classNames.indexOf(thisClassName) > -1) {
		    	classNames = classNames.replace(thisClassName, '');
		    }
		    obj.className = classNames;
	    }
	}
	
	function cutByWordEnd(textIn, cutLength){
		
		var text = textIn.substr(0,cutLength);
		var points="";
		
		if(text!="" && text!=undefined && text.length>0){
			while(true){
				if(text.charAt(text.length-1)!=" " && text.length>0 && textIn.length>cutLength){
					text = text.substr(0, text.length-1);
				}else{
					textIn.length!=text.length?points=" ...":points="";
					return text+points;
				}
			}
		}else{
			return "";
		}
	}
        
	function trace(param){
              document.getElementById("trace").style.display="block";
	      document.getElementById("trace").innerHTML=param;
	}
        
        
        

        function goRed(){

            MEN.closeApp();

        }


           function goYellow(){
                //case VK_YELLOW:
               //e.preventDefault();
                //window.location.reload(true);
                window.location.href = window.location.href.split('?')[0] + "?v=" + Math.round(Math.random()*1000000);
           }
           
           
           

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
 // alert('Query Variable ' + variable + ' not found');
}