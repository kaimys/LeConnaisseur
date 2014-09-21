	var ajaxURL           = "http://localhost/DNSHack/watchmi.php";
	
	function getCurrent(){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'/nownext?ts='+Math.random(1000000)+"&ch="+channel, "getCurrent", 0, 0, "", comboBox);
                ///nownext?ch=774
	}
	
        
        function getRating(id,rate){
            //alert(id+" "+rate);
            var comboBox = new Object();
           doHttpRequest(ajaxURL+'/rate?ts='+Math.random(1000000)+"&assetId="+id+"&rating"+rate+"&profile=movie", "getRating", 0, 0, "", comboBox);
           
        }
	
        
        
        function getRecommends(assetId){
                blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'/recommendForItem?ts='+Math.random(1000000)+"&item="+assetId, "getRecommends", 0, 0, "", comboBox);
            //http://localhost/DNSHack/watchmi.php/recommendForItem?item=87550791
            
        }
        
        
	function doHttpRequest(url, type, count, from, id, __unused__) {
            
	    var request = null;
	
	    if (window.XMLHttpRequest)
	      request = new XMLHttpRequest();

	    if(request) {
	      request.onreadystatechange = function(){
	          if(this.readyState == 4)  {
	            if(this.status == 200) {
             
	              populate(this.responseText,type);  
	            }
	          }
	      };
              
	      request.open('GET', url , true);
	      request.send();
	    }
	 };
	 
	 
	 
	function populate(responseText,type){
            
           // alert(type);
    	try {
            
    		 switch(type){
    		 
    		 	case "getCurrent":	
                            eval("currentObj="+responseText+";");
                            //blockNavigation(false);
                                
    		 	break;
                        
                        case "getRecommends":	
                            eval("recommendsObj="+responseText+";");
                            //blockNavigation(false);
                            
                                
    		 	break;
                        
                        case "getRating":
                            //alert("gut geraten");
                        break;
                        
                    default:
      		}
      		
                
    		refresh(type);
			
		} catch (e) {
			// trace("Data error "+e); // +e
			// location.replace("error.php");
		}
		
	  };	
	
    		 
    		   