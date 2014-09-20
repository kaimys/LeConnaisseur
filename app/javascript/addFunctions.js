
    function addRating(reload){
		var areaName   = "rating";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=5;//menuObj.length;
                    currentMetadata.maxItemsPerPage=5;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=2;
                    currentMetadata.clickedId=2;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                
  
                area.setNexAreas({up:null, down:null, right:null, left:null});
                
                
		area.setCssClasses({normal:"ratingBtn", active:"btn_active", visited:"ratingBtn_visited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "<img src='img/star-48.png' border=''/>";//menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("rate("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
            
            
	}
        



            function addMenu(reload){
		var areaName   = "menu";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

                var menuObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=menuObj.length;
                    currentMetadata.maxItemsPerPage=6;
                    currentMetadata.maxLineSize=6;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                
                if(filename=="genre.php"){
                    currentMetadata.currentId=3;
                    currentMetadata.clickedId=3;
                    area.setNexAreas({up:null, down:"bigGrid", right:null, left:null});
                }else{
                    area.setNexAreas({up:null, down:"grid", right:null, left:"bigFeature"});
                }
                
		area.setCssClasses({normal:"btn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("empty("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        

	function addBigFeatureMenu(reload){
		var areaName   = "bigFeature";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
                var bigMenuObj= [{name:'HIGHLIGHT',url:'url'},{name:'TV PREMIERE',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=bigMenuObj.length;
                    currentMetadata.maxItemsPerPage=2;
                    currentMetadata.maxLineSize=2;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:null, right:"grid", left:null});
		area.setCssClasses({normal:"btn btnBigFeatureMenu", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = bigMenuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                                button.setAction("empty("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        

	function addGrid(reload){
		var areaName   = "grid";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
                var gridObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=30;//gridObj.length;
                    currentMetadata.maxItemsPerPage=6;
                    currentMetadata.maxLineSize=3;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:"menu", down:null, right:null, left:"bigFeature"});
		area.setCssClasses({normal:"gridItem", active:"btn_active", visited:"btn_gridItemVisited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "<div class='gridItemText'>Lorem Ipsum"+k+"</div>";//menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("empty("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        function addBigGrid(reload){
		var areaName   = "bigGrid";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
                var gridObj= [{name:'HORROR',url:'url'},{name:'ACTION',url:'url'},{name:'ASIAN',url:'url'},{name:'TRASH',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=gridObj.length;
                    currentMetadata.maxItemsPerPage=4;
                    currentMetadata.maxLineSize=4;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:"menu", down:null, right:null, left:null});
		area.setCssClasses({normal:"bigGridItem", active:"btn_active", visited:"btn_gridItemVisited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "<div class='bigGridItemText'>"+gridObj[k].name+"</div>";  //gridObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("loadFullGrid("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        
        
        
        function addFullGrid(reload){
		var areaName   = "fullGrid";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
                var gridObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
                
                
                
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=27;//gridObj.length;
                    currentMetadata.maxItemsPerPage=10;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:"menu", down:null, right:null, left:null});
		area.setCssClasses({normal:"gridItem", active:"btn_active", visited:"btn_gridItemVisited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "<div class='gridItemText'>Lorem Ipsum"+k+"</div>";//menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("loadFullInfo("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        
        
        
        
        
        function addFullInfo(reload){
		var areaName   = "fullInfoContainer";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

                var menuObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=menuObj.length;
                    currentMetadata.maxItemsPerPage=8;
                    currentMetadata.maxLineSize=4;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                
                area.setNexAreas({up:"menu", down:null, right:null, left:null});
                
                
		area.setCssClasses({normal:"btn fullInfoItem", active:"btn_active", visited:"fullInfoItemVisited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = i;//menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("loadVideo("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        
        
        
        
        
        function addControlbar(reload){
		var areaName   = "controlbarView";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		//checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=1;
                    currentMetadata.maxItemsPerPage=1;
                    currentMetadata.maxLineSize=1;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                area.setNexAreas({up:null, down:null, right:null, left:null});
		area.setCssClasses({normal:"controlbarBtn", active:"btn_active", visited:"controlbarBtn_visited", mouseOver:"btn_mouseOver"});

		
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            
                            /*
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = i;
                                document.getElementById(areaName).appendChild(div);
                            */
                            var div = document.getElementById(areaName+"_"+i);
                           // div.className = area.getCssClass("normal");
                            
                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("alert("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        /*
        function addControlbar(){
		var nextAreas  = {up:null, down:null, right:null, left:null};
		var buttons    = new Array();
		var areaName   = "controlbarView";
		
		var currentMetadata={};
		currentMetadata.maxItemsPerPage=1;
		currentMetadata.page=0;
		currentMetadata.maxLineSize=1;
		currentMetadata.currentGridId=0;
		currentMetadata.size=1;
		currentMetadata.lastId=0;
			
		for(var i=0;i<currentMetadata.maxItemsPerPage;i++){
			buttons[i]={buttonId:areaName+"_"+i, normalCss:"controlbarBtn", activeCss:"controlbarBtn_active", visitedCss:"controlbarBtn_visited", buttonAction:"clickControlbar("+i+")"};
			
	      	var div = document.getElementById(areaName+"_"+i);
	      	 	
	        if(gyroscope){
	       	  div.onclick     = Function("onClick('"+areaName+"',"+i+");");
	     	  div.onmouseover = Function("onMouseOver('"+areaName+"',"+i+");");
	      	  div.onmouseout  = Function("onMouseOut('"+areaName+"',"+i+");");
	        }
		}
		
		NAVIGATOR.addArea(areaName, buttons, nextAreas, true, "horizontal", 0);
		NAVIGATOR.getAreaByName(areaName).metadata = currentMetadata;
	}
	*/
       
       
       
       
        
        
        
        
/*
	function addNewsArchive(reload){
		var areaName         = "newsArchive";
		var area             = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
			currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}

		checkArea("newsArchiveContainer");
		if(NAVIGATOR.getAreaIndexByName(areaName)!=-1){
			NAVIGATOR.removeAreaByName(areaName);
		}
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=newsObj.length;
                    currentMetadata.maxItemsPerPage=10;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:"contentContainer", right:null, left:null});
		area.setCssClasses({normal:"imgBtn archiveBtn", active:"btn_active", visited:"archiveBtnVisited", mouseOver:"btn_mouseOver"});

		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
				var div = document.createElement("div");
					div.id        = areaName+"_"+i;
					div.className = area.getCssClass("normal");
					div.innerHTML = "<div class='archiveBtnImage'><img src='"+newsObj[k].logo+"' width='180px' height='105px' border='0' alt=''/></div> <div class='archiveRow'>"+newsObj[k].name+"</div> <div class='archiveRow'>"+newsObj[k].date+"</div>";
					document.getElementById("newsArchiveContainer").appendChild(div);
				
				var button = new Button(i,areaName,div);
					if(gyroscope){
						button.addGyroscopeMode();
					}
					 button.setAction("clickNewsArchiveItem("+k+")");
					
				area.addButton(button);
			}
		}
		
		var page = document.createElement("div");
		page.id            = "pageNews_0";
		page.className     = "toArchive page";
		page.innerHTML     = "Seite:";
		document.getElementById("newsArchiveContainer").appendChild(page);
		
		if(gyroscope){
                    var close = document.createElement("div");
                    close.id            = "newsArchiveClose_0";
                    close.className     = "close";
                    close.innerHTML     = "<img src='img/close.png' alt=''/>";

                    close.onclick       = Function("openAndCloseArchive('close');");
                    close.onmouseover   = Function("onMouseOverPlus('newsArchiveClose',0);");
                    close.onmouseout    = Function("onMouseOutPlus('newsArchiveClose',0);");
                    document.getElementById("newsArchiveContainer").appendChild(close);
		}
		
		try{
			document.getElementById("naviContainer").innerHTML="";
		}catch(e){}
		
                
                if(currentMetadata.maxItemsPerPage < currentMetadata.size){
                    for(var i=0;i<2;i++){
                            var arrow       = document.createElement("div");
                            arrow.id        = "archiveArrow_"+i;
                            arrow.className = "liveItem arrowHorizontal";

                            if(i==0){
                                arrow.innerHTML = "<img src='img/left_quer.png' alt=''/>";
                            }else{
                                arrow.innerHTML = "<img src='img/right_quer.png' alt=''/>";
                            }

                            if(gyroscope){
                                    if(i==0){
                                            arrow.onclick   = Function("paginateArchive('left','news');");
                                    }else{
                                            arrow.onclick   = Function("paginateArchive('right','news');");
                                    }

                                    arrow.onmouseover   = Function("onMouseOverPlus('archiveArrow',"+i+");");
                                    arrow.onmouseout    = Function("onMouseOutPlus('archiveArrow',"+i+");");
                            }

                            document.getElementById("naviContainer").appendChild(arrow);
                    }
                }
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
	
	
	function addBroadcastArchive(reload){
		var areaName         = "broadcastArchive";
		var area             = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
			currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}

		checkArea("broadcastNaviContainer");
		checkArea("broadcastArchiveContainer");
		if(NAVIGATOR.getAreaIndexByName(areaName)!=-1){
			NAVIGATOR.removeAreaByName(areaName);
		}
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=broadcastArchiveObj.length;
                    currentMetadata.maxItemsPerPage=5;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:"contentContainer", right:null, left:null});
		area.setCssClasses({normal:"imgBtn archiveBtn", active:"btn_active", visited:"archiveBtnVisited", mouseOver:"btn_mouseOver"});

		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
                    var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
                    if(k<currentMetadata.size){
                        var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "<div class='archiveBtnImage'><img src='"+broadcastArchiveObj[k].logo+"' width='180px' height='105px' border='0' alt=''/></div> <div class='archiveRow'>"+broadcastArchiveObj[k].name+"</div><div class='archiveRow'>"+broadcastArchiveObj[k].date+"</div>";
                                document.getElementById("broadcastArchiveContainer").appendChild(div);

                        var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                                button.setAction("clickBroadcastArchiveItem("+k+")");

                        area.addButton(button);
                    }
		}
		
		var page = document.createElement("div");
		page.id            = "pageBroadcast_0";
		page.className     = "toArchive page";
		page.innerHTML     = "Seite:   ";
		document.getElementById("broadcastArchiveContainer").appendChild(page);
		
		if(gyroscope){
                    var close = document.createElement("div");
                    close.id            = "broadcastArchiveClose_0";
                    close.className     = "close";
                    close.innerHTML     = "<img src='img/close.png' alt=''/>";

                    close.onclick       = Function("goDown();");
                    close.onmouseover   = Function("onMouseOverPlus('broadcastArchiveClose',0);");
                    close.onmouseout    = Function("onMouseOutPlus('broadcastArchiveClose',0);");
                    document.getElementById("broadcastArchiveContainer").appendChild(close);
		}
		
		try{
			document.getElementById("broadcastNaviContainer").innerHTML="";
		}catch(e){}
		
		for(var i=0;i<2;i++){
			var arrow       = document.createElement("div");
			arrow.id        = "broadcastArchiveArrow_"+i;
			arrow.className = "liveItem arrowHorizontal";
                        
                        if(i==0){
                            arrow.innerHTML = "<img src='img/left_quer.png' alt=''/>";
                        }else{
                            arrow.innerHTML = "<img src='img/right_quer.png' alt=''/>";
                        }
			
			if(gyroscope){
                            if(i==0){
                                    arrow.onclick   = Function("paginateArchive('left','broadcast');");
                            }else{
                                    arrow.onclick   = Function("paginateArchive('right','broadcast');");
                            }

                            arrow.onmouseover   = Function("onMouseOverPlus('broadcastArchiveArrow',"+i+");");
                            arrow.onmouseout    = Function("onMouseOutPlus('broadcastArchiveArrow',"+i+");");
			}
			
			document.getElementById("broadcastNaviContainer").appendChild(arrow);
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
	
	
	function addMenu(reload){
		var areaName   = "menu";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=menuObj.length;
                    currentMetadata.maxItemsPerPage=5;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="vertical";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:null, right:null, left:null});
		area.setCssClasses({normal:"btn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
					
					
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = menuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                                button.setAction("clickMenu("+i+",'"+menuObj[k].url+"')");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
	
	
	function addSubmenu(reload){
		var areaName   = "subMenu";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
			currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=submenuObj.length;
                    currentMetadata.maxItemsPerPage=5;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=-1;
                    currentMetadata.scroll="vertical";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:"menu", right:null, left:null});
		area.setCssClasses({normal:"btn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = submenuObj[k].name;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                            
                            if(gyroscope){
                                    button.addGyroscopeMode();
                            }
                            button.setAction("clickSubmenu("+i+",'"+submenuObj[k].url+"')");

                            area.addButton(button);
			}
		}
		
       NAVIGATOR.addArea(area);
       setInactive(areaName);
	}
	
	
	function addLive(){
		var areaName         = "liveContainer";
		var area             = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(currentMetadata==undefined){
			currentMetadata={};
			currentMetadata.size=1;
			currentMetadata.maxItemsPerPage=1;
			currentMetadata.maxLineSize=1;
			currentMetadata.page=0;
			currentMetadata.currentId=0;
			currentMetadata.clickedId=-1;
			currentMetadata.scroll="vertical";
			currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:"menu", right:null, left:null});
		area.setCssClasses({normal:"imgBtn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
			
                            var div = document.createElement("div");
                                    div.id        = areaName+"_"+i;
                                    div.className = area.getCssClass("normal");
                                    div.innerHTML = "";
                                    document.getElementById("liveButtons").appendChild(div);

                            var button = new Button(i,areaName,div);
                                    if(gyroscope){
                                            button.addGyroscopeMode();
                                    }
                                    button.setAction("clickPlayPause()");

                            area.addButton(button);
			}
		}

		if(gyroscope){
                    var close = document.createElement("div");
                    close.id            = "liveContainerClose_0";
                    close.className     = "close";
                    close.innerHTML     = "<img src='img/close.png' alt=''/>";

                    close.onclick       = Function("goDown();");
                    close.onmouseover   = Function("onMouseOverPlus('liveContainerClose',0);");
                    close.onmouseout    = Function("onMouseOutPlus('liveContainerClose',0);");
                    document.getElementById(areaName).appendChild(close);
		}
		
		for(var i=0;i<2;i++){
                    var arrow       = document.createElement("div");
                    arrow.id        = "liveArrow_"+i;
                    arrow.className = "liveItem arrow";
                    if(i==0){
                        arrow.innerHTML = "<img src='img/left_hoch.png' alt=''/>";
                    }else{
                        arrow.innerHTML = "<img src='img/right_hoch.png' alt=''/>";
                    }


                    if(gyroscope){
                            if(i==0){
                                    arrow.onclick       = Function("goLeft();");
                            }else{
                                    arrow.onclick       = Function("goRight();");
                            }
                            arrow.onmouseover   = Function("onMouseOverPlus('liveArrow',"+i+");");
                            arrow.onmouseout    = Function("onMouseOutPlus('liveArrow',"+i+");");
                    }

                    document.getElementById("liveArrows").appendChild(arrow);
		}
		
                
		//var symbol       = document.createElement("div");
		//symbol.id        = "symbol_live";
		//symbol.className = "symbol";
		//document.getElementById("liveContainer").appendChild(symbol);
		
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
	
	
	function addContent(){
		var areaName         = "contentContainer";
		var area             = new Area(areaName);
		var currentMetadata  = undefined;
		
		if(currentMetadata==undefined){
			currentMetadata={};
			currentMetadata.size=1;
			currentMetadata.maxItemsPerPage=1;
			currentMetadata.maxLineSize=1;
			currentMetadata.page=0;
			currentMetadata.currentId=0;
			currentMetadata.clickedId=-1;
			currentMetadata.scroll="vertical";
			currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:"menu", right:null, left:null});
		area.setCssClasses({normal:"imgBtn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
                    var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
                    if(k<currentMetadata.size){

                        var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = "";
                                document.getElementById("contentButtons").appendChild(div);

                        var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                                button.setAction("clickPlayPause("+i+")");

                        area.addButton(button);
                    }
		}

		
		var toArchive = document.createElement("div");
		toArchive.id            = "contentToArchive_0";
		toArchive.className     = "toArchive";
		toArchive.innerHTML     = " ";
		document.getElementById(areaName).appendChild(toArchive);
			
		if(gyroscope){
                    toArchive.onclick       = Function("goUp();");
                    toArchive.onmouseover   = Function("onMouseOverPlus('contentToArchive',0);");
                    toArchive.onmouseout    = Function("onMouseOutPlus('contentToArchive',0);");

                    var close = document.createElement("div");
                    close.id            = "contentContainerClose_0";
                    close.className     = "close";
                    close.innerHTML     = "<img src='img/close.png' alt=''/>";

                    close.onclick       = Function("goDown();");
                    close.onmouseover   = Function("onMouseOverPlus('contentContainerClose',0);");
                    close.onmouseout    = Function("onMouseOutPlus('contentContainerClose',0);");
                    document.getElementById(areaName).appendChild(close);
		}
		
		for(var i=0;i<2;i++){
                    var arrow       = document.createElement("div");
                    arrow.id        = "contentArrow_"+i;
                    arrow.className = "liveItem arrow";

                    if(i==0){
                        arrow.innerHTML = "<img src='img/left_hoch.png' alt=''/>";
                    }else{
                        arrow.innerHTML = "<img src='img/right_hoch.png' alt=''/>";
                    }

                    if(gyroscope){
                        if(i==0){
                                arrow.onclick       = Function("goLeft();");
                        }else{
                                arrow.onclick       = Function("goRight();");
                        }

                        arrow.onmouseover   = Function("onMouseOverPlus('contentArrow',"+i+");");
                        arrow.onmouseout    = Function("onMouseOutPlus('contentArrow',"+i+");");
                    }

                    document.getElementById("contentArrows").appendChild(arrow);
		}
		
		//var symbol       = document.createElement("div");
		//symbol.id        = "symbol_content";
		//symbol.className = "symbol";
		//document.getElementById("contentContainer").appendChild(symbol);
                
	
        NAVIGATOR.addArea(area);
        setInactive(areaName);
	}
	
	
	function addPopup(category){
		var areaName   = "popup";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		
		
		checkArea(areaName);
		checkArea("popupContent");
		checkArea("popupButtons");
		
		var length=1;
		category=="back"?length=2:length;
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=length;
                    currentMetadata.maxItemsPerPage=length;
                    currentMetadata.maxLineSize=length;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=-1;
                    currentMetadata.scroll="vertical";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:null, right:null, left:null});
		area.setCssClasses({normal:"btn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

		var array;
		category =="back"?array = new Array("OK","Abbrechen"): array = new Array("Schließen");
		
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
                    var k= i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
                    if(k<currentMetadata.size){
                        var div = document.createElement("div");
                        div.id        = areaName+"_"+i;
                        div.className = area.getCssClass("normal");
                        div.innerHTML = array[i];
                        document.getElementById("popupButtons").appendChild(div);

                        var button = new Button(i,areaName,div);

                        if(array[i]=="Schließen" || array[i]=="Abbrechen"){		
                                button.setAction("closePopup()");
                        }else{			
                                button.setAction("goBack(true)");
                        }

                        if(gyroscope){
                                button.addGyroscopeMode();
                        }

                        area.addButton(button);
                    }
		}
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
	*/
	
        
	function checkArea(areaName){
            if(NAVIGATOR.getAreaIndexByName(areaName)!=-1){
                 NAVIGATOR.removeAreaByName(areaName);
            }

            if(document.getElementById(areaName)!=null){
                document.getElementById(areaName).innerHTML=".";
                document.getElementById(areaName).innerHTML=" ";
            }
	}