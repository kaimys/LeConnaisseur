
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
                    currentMetadata.size=recommendsObj.length;
                    currentMetadata.maxItemsPerPage=10;
                    currentMetadata.maxLineSize=5;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
		area.setNexAreas({up:null, down:null, right:null, left:null});
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
                                try{
                                     div.innerHTML = "<div class='gridItemText'><img src='"+recommendsObj[k].imageURL+"' width='205px' border='0'/><br/><b>"+tuningInfo[recommendsObj[k].sourceId].sourceName+"</b><br/>"+recommendsObj[k].title+"</div>";//menuObj[k].name;
                                }catch(e){
                                   div.innerHTML = "<div class='gridItemText'><img src='"+recommendsObj[k].imageURL+"' width='205px' border='0'/>" +recommendsObj[k].title+"</div>"; 
                                }
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("goToAndPlay("+recommendsObj[k].sourceId+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        
        
        
        
        
        function addTipp(reload){
		var areaName   = "tipp";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

                var menuObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=2;//menuObj.length;
                    currentMetadata.maxItemsPerPage=8;
                    currentMetadata.maxLineSize=4;
                    currentMetadata.page=0;
                    currentMetadata.currentId=1;
                    currentMetadata.clickedId=1;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                
                area.setNexAreas({up:null, down:null, right:"tippDiv", left:null});
                
                
		area.setCssClasses({normal:"btn", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

                /*
		var logo = document.createElement("div");
                    logo.id        = "logo";
                    logo.className = "btn btn_logo";
                    logo.innerHTML ="Menu";
                    document.getElementById(areaName).appendChild(logo);
                */
		
                var contentArray = new Array("Schließen","Mehr Tipps");
		for (var i=0; i<currentMetadata.maxItemsPerPage; i++){
			var k = i+(currentMetadata.page*currentMetadata.maxItemsPerPage);
			if(k<currentMetadata.size){
                            var div = document.createElement("div");
                                div.id        = areaName+"_"+i;
                                div.className = area.getCssClass("normal");
                                div.innerHTML = contentArray[i];
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("goInfo("+i+")");

                            area.addButton(button);
			}
		}
		
            NAVIGATOR.addArea(area);
            setInactive(areaName);
	}
        
        
        
        function addTippContent(reload){
		var areaName   = "tippDiv";
		var area       = new Area(areaName);
		var currentMetadata  = undefined;
		

                var menuObj= [{name:'HOME',url:'url'},{name:'PROGRAMM',url:'url'},{name:'EMPFANG',url:'url'},{name:'GENRE',url:'url'},{name:'KONTAKT',url:'url'},{name:'IMPRESSUM',url:'url'}];
                
		if(NAVIGATOR.getAreaByName(areaName) !=undefined && reload){
                    currentMetadata = NAVIGATOR.getAreaByName(areaName).metadata;
		}
		
		checkArea(areaName);
		
		if(currentMetadata==undefined){
                    currentMetadata={};
                    currentMetadata.size=1;//menuObj.length;
                    currentMetadata.maxItemsPerPage=8;
                    currentMetadata.maxLineSize=4;
                    currentMetadata.page=0;
                    currentMetadata.currentId=0;
                    currentMetadata.clickedId=0;
                    currentMetadata.scroll="horizontal";
                    currentMetadata.scrollFunction = arguments.callee.name;
		}
			
		area.setMetadata(currentMetadata);
                
                area.setNexAreas({up:null, down:null, right:null, left:"tipp"});
                
                
		area.setCssClasses({normal:"tippContent", active:"btn_active", visited:"btn_visited", mouseOver:"btn_mouseOver"});

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
                                div.innerHTML = "<img src='"+recommendsObj[k].imageURL+"' width='300px' border='0'/><b>"+tuningInfo[recommendsObj[k].sourceId].sourceName+"</b><br/>"+recommendsObj[0].title;
                                document.getElementById(areaName).appendChild(div);

                            var button = new Button(i,areaName,div);
                                if(gyroscope){
                                        button.addGyroscopeMode();
                                }
                               button.setAction("goToAndPlay("+recommendsObj[k].sourceId+")");

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
        
       
	
        
	function checkArea(areaName){
            if(NAVIGATOR.getAreaIndexByName(areaName)!=-1){
                 NAVIGATOR.removeAreaByName(areaName);
            }

            if(document.getElementById(areaName)!=null){
                document.getElementById(areaName).innerHTML=".";
                document.getElementById(areaName).innerHTML=" ";
            }
	}