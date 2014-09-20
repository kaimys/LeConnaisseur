	var ajaxURL           = "../../API/ptv/index.php";
	
	function getMenu(){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getMenu", 0, 0, "", comboBox);
	}
	
	function getSubmenu(url){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getSubmenu", 0, 0, url, comboBox);
	}
	
	function getLive(){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getLive", 0, 0, "", comboBox);
	}
	
	function getNews(url){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getNews", 0, 0, url, comboBox);
	}
	
	function getBroadcast(url){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getBroadcast", 0, 0, url, comboBox);
	}
	
	function getBroadcastFromArchive(url){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getBroadcastFromArchive", 0, 0, url, comboBox);
	}
	
	function getArchive(type){
		blockNavigation(true);;
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getArchive", 0, 0, type, comboBox);
	}
	
	function getImprint(){
		blockNavigation(true);
		var comboBox = new Object();
		doHttpRequest(ajaxURL+'?ts='+Math.random(1000000), "getImprint", 0, 0, "", comboBox);
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
	      
	      request.open('GET', url+"&type="+type+"&count="+count+"&from="+from+"&id="+id , true);
	      request.send();
	    }
	 };
	 
	 
	 
	function populate(responseText,type){
    	try {
            
            
    		 switch(type){
    		 	
    		 	case "getImprint":
    		 		eval("imprintObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
    		 	case "getMenu":
    		 		eval("menuObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
    		 	case "getSubmenu":
    		 		eval("submenuObj="+responseText+";");
				blockNavigation(false);
    		 	break;
    		 	
    		 	case "getLive":
    		 		eval("liveObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
    		 	case "getNews":
    		 		eval("newsObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
    		 	case "getBroadcast":
    		 		eval("broadcastObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
    		 	case "getBroadcastFromArchive":
    		 		eval("broadcastObj="+responseText+";");
				blockNavigation(false);
    		 	break;
				
                        case "getArchive":
                                eval("broadcastArchiveObj="+responseText+";");
                                blockNavigation(false);
                        break;
      		}
      		
                
                
    		refresh(type);
			
		} catch (e) {
			// trace("Data error "+e); // +e
			// location.replace("error.php");
		}
		
	  };	
	
    		 
    		   