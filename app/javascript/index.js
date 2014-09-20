

	function onl(){
            
		NAVIGATOR = new Navigator();
		MEN.onLoad();
                
		myVideo = document.getElementById("videoObj");
                
                
               // if(filename=="genre.php"){
                    
                //}else{
                //    addBigFeatureMenu();
               // }
                
                addRating();
               // addGrid();
                
                setActive();
                document.getElementById("preloader").style.display="none";
                document.getElementById("preloaderAjax").style.display="none";

                /*
		addEvents();
		getMenu();
		getLive();
                */
                
                //initGyroscope();

	}
	

	function refresh(type){
            
                /*
		necessaryData--;
		
		switch(type){
                    case "getMenu":
                    break;
                    
                    case "getSubmenu":
                        addSubmenu();
                        NAVIGATOR.setNextAreaByName("subMenu");
                        NAVIGATOR.getCurrentArea().metadata.clickedId = 0;
                        setActive();
                    break;
                    case "getLive":
                        //liveObj
                        currentCategory="live";
                        currentPlayCategory = "live";
                    break;
                    case "getNews":
                        //newsObj
                        dataHolder	={};
                        dataHolder.currentId=0;
                        currentCategory="news";
                        updateContentArrows();
                        updateArrowUp();
                    break;
                    case "getBroadcast":
                        //broadcastObj
                        dataHolder ={};
                        dataHolder.currentId=0;
                        currentCategory="broadcast";
                        updateContentArrows();
                        updateArrowUp();
                    break;	
                    case "getBroadcastFromArchive":
                        //broadcastObj
                        dataHolder ={};
                        dataHolder.currentId=0;
                        currentCategory="broadcast";
                        updateContentArrows();
                        clickPlayPause();
                        goDown();
                    break;
                    case "getArchive":
                        //broadcastArchiveObj
                        document.getElementById("broadcastArchive").style.display="block";
                        addBroadcastArchive();

                        NAVIGATOR.setNextAreaByName("broadcastArchive");
                        NAVIGATOR.getCurrentArea().metadata.clickedId = 0;
                        setActive();
                        updateArrows("broadcastArchiveArrow");
                    break;

                    case "getImprint":
                        document.getElementById("popupContent").innerHTML="";
                        lastArea = NAVIGATOR.getCurrentAreaName();
                        setPopupSize("full");
                        document.getElementById("popupWindow").style.display="block";

                        addPopup("imprint");
                        NAVIGATOR.setNextAreaByName("popup");
                        setActive();
                        document.getElementById("popupContent").innerHTML=imprintObj;
                        try{
                            trackingObj.trackEvent("imprint","",""); 
                        }catch(e){}
                    break;
		}
		
		if(necessaryData==0){
                    if(!intro){
                        startApp();
                    }
                } 
            
            */
	}
	
        
        
        
	function startApp(){
                /*
		addMenu();
		addContent();
		addLive();
		
		setActive();
		checkExceptionAfter();


                try{
                    trackingObj.trackEvent("start","",""); 
                }catch(e){}
                
                if(gyroscope){
                    pointer          = "on";
                    USERPOINTERMODE  = deviceUiObject.userPointerMode;
                    setInterval("checkPhilipsPointer()", 1000);
                }       
            */
	}

	
	
        
        


 
	function checkExceptionBefore(direction){
            
            /*
		var name            = NAVIGATOR.getCurrentAreaName();
		//var id              = NAVIGATOR.getCurrentArea().metadata.currentId;
		
		switch(name){
			
			case "menu":
				switch(direction){		
					case "down":
						setVisibilityStatus(false);
					break;
				}
			break;
			
			case "liveContainer":
				switch(direction){		
						
					case "down":
						document.getElementById("liveContainer").style.display="none";
					break
					
					case "right":
					case "left":
						direction=="right"?liveDataHolder.currentId++:liveDataHolder.currentId--;
						liveDataHolder.currentId<0?liveDataHolder.currentId=0:liveDataHolder.currentId;
					    liveDataHolder.currentId>liveObj.length-1?liveDataHolder.currentId=liveObj.length-1:liveDataHolder.currentId;

						updateLiveArrows();
					break; 
				}
				
			break;
			
			case "contentContainer":
				switch(direction){
					case "up":
						addArchive(currentCategory);
					break;
					
					case "down":
						document.getElementById("contentContainer").style.display="none";
					break
					
					case "right":
					case "left":
						direction=="right"?dataHolder.currentId++:dataHolder.currentId--;
						dataHolder.currentId<0?dataHolder.currentId=0:dataHolder.currentId;
					    dataHolder.currentId>data.length-1?dataHolder.currentId=data.length-1:dataHolder.currentId;

						updateContentArrows();			
					break;
				}
			break;
		}
            */
	}

	function checkExceptionAfter(direction){
            
            /*
		var name            = NAVIGATOR.getCurrentAreaName();
		//var id              = NAVIGATOR.getCurrentArea().metadata.currentId;
            switch(name){
                case "menu":
                        switch(direction){
                                case "down":
                                        checkArea("subMenu");
                                break;

                                case "up":
                                        enter();
                                break;
                        }
                break;

                case "subMenu":
                        switch(direction){
                                case "up":
                                        enter();
                                break;
                        }
                break

                case "contentContainer":
                        switch(direction){
                                case "down":
                                        document.getElementById("newsArchive").style.display="none";
                                        document.getElementById("broadcastArchive").style.display="none";
                                break;
                        }
                break

                case "newsArchive":
                        switch(direction){			
                                case "right":
                                case "left":
                                        updateArrows("archiveArrow");
                                break;
                        }
                break;

                case "broadcastArchive":
                        switch(direction){			
                                case "right":
                                case "left":
                                        updateArrows("broadcastArchiveArrow");
                                break;
                        }
                break;
            }
            */
	}
	

	function goBack(param){
            /*
            if(NAVIGATOR.getCurrentAreaName()=="popup"){
               closePopup();
            }
            
            lastArea = NAVIGATOR.getCurrentAreaName();
            
            if(!param && lastArea!="popup"){
                setPopupSize("small");
                document.getElementById("popupWindow").style.display="block";

                addPopup("back");
                NAVIGATOR.setNextAreaByName("popup");
                setActive();

                document.getElementById("popupContent").innerHTML="Anwendung beenden?";
            }else {
                history.back();
            }
            */
	}
	
