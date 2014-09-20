	var MEN = {
		delayTime:new Date().getTime(),
		currentTime:new Date().getTime()
	};
	
	MEN.onLoad = function () {
            if(hbbtv){
                MEN.init();
            }
	    
            document.addEventListener("keydown", function(e) {
    		if (MEN.eventHandler(e))
    			e.preventDefault();
    	}, false);
	};
	
	
	MEN.init = function () {
            hbbtvlib_initialize();
            hbbtvlib_show();
	};
        
        MEN.closeApp = function () {
            if(hbbtv){
                hbbtvlib_closeApp();
            }
        };


	MEN.registerRemoteControlButtons = function (btn) {
		hbbtvlib_setKeysets(btn, btn);
	};
        
        
        
	MEN.eventHandler = function (e) {

		if(visible){
			//setVisibilityStatus(true);
				
			this.currentTime = new Date().getTime();
		
			//e.cancelBubble = true;
			//e.returnValue = false;

				switch(e.keyCode) {
			
					case 13:
					case VK_ENTER:
						enter();
					break;
					
					case 38:
					case VK_UP:
						goUp();
					break;
					
					case 40:
					case VK_DOWN:
						goDown();
					break;
					
					case 37:
					case VK_LEFT:
						goLeft();
					break;
					
					case 39:
					case VK_RIGHT:
						goRight();
					break;
					
					

					
					case VK_BLUE:
						goBlue();  
					break;
					/*
					case VK_GREEN:
						goGreen();  
					break;
					*/
					case VK_YELLOW:
						goYellow(); 
                    
					break;
					
					case VK_RED:
						goRed();  
					break;
					
					
					
					case VK_PAUSE:
					case VK_PLAY:
						goPlayPause();  
					break;
				
					case VK_STOP:
						goStop();  
					break;
				
					case VK_FAST_FWD:
						if(typeof goFfwd == 'function') {
							goFfwd();
						}
					break;
					
					case VK_REWIND:
						if(typeof goRew == 'function') {
							goRew();
						}
					break;
					
					case 8:
					case VK_BACK:
					case VK_ESCAPE:
						if(typeof goBack == 'function') {
							e.preventDefault();
							e.stopPropagation();
							goBack();
						}
						/*
						e.preventDefault();
						e.stopPropagation();
						e.cancelBubble = true;
						e.returnValue = false;
						*/
					break;
					
					/*
					case VK_0:
						// back to multithek
						if( multithek)
							multithek.back();
						break;
					*/
				
					/*
					case VK_INFO:
						goInfo();
					break;
					*/
					
					default:
						return false;
				}
			
			
			this.delayTime=this.currentTime;
			
		}else{
			setVisibilityStatus(true);
		}
		
		

		return true;
	};
