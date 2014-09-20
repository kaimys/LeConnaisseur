/*
 * 
 * Copyright M.E.N Media Entertainment Networks Gmbh Berlin 2014 
 * 
 */

	function Navigator(){
		this.currentAreaId   = 0;
		this.currentAreaName = "";
		this.areas           = new Array();
	}
	
	Navigator.prototype.addArea = function(area){
		this.areas.push(area);
	};
	
	Navigator.prototype.removeAreaByName = function(areaName){
		var index = this.getAreaIndexByName(areaName);
		this.areas.splice(index,1);
	};
	
	Navigator.prototype.getAreaIndexByName = function(name){
		for(var i =0 ; i<this.areas.length; i++){
			if(this.areas[i].getName() == name){
				return i;
				break;
			}
		}
		return -1;
	};
	
	Navigator.prototype.getCurrentAreaName = function(){
		return this.areas[this.currentAreaId].getName();
	};
	
	Navigator.prototype.getCurrentArea = function(){
		return this.areas[this.currentAreaId];
	};
	
	Navigator.prototype.getAreaByName = function(name){
		var index = this.getAreaIndexByName(name);
		return this.areas[index];
	};
	
	Navigator.prototype.navigate = function(direction){
		setInactive(this.getCurrentAreaName());
		
		var metadata   = this.getCurrentArea().metadata;
		var length     = this.getCurrentArea().buttons.length;
		var modolo     = length%metadata.maxLineSize;
		
		checkExceptionBefore(direction);
		
		switch(direction){
			case "down":
				if((metadata.currentId + metadata.maxLineSize) < length){
					metadata.currentId=metadata.currentId + metadata.maxLineSize;
				}else{
					this.setNextArea("down");
				}
			break;
			case "up":
				if(metadata.currentId >= metadata.maxLineSize){
					metadata.currentId=metadata.currentId-metadata.maxLineSize;
				}else{
					this.setNextArea("up");
				}
			break;
			case "right":
				if((metadata.currentId+1)%metadata.maxLineSize && metadata.currentId+1<length){  
					metadata.currentId = metadata.currentId+1;
				}else{
					this.setNextArea("right");
				}
			break;	
			case "left":
				if((metadata.currentId)%metadata.maxLineSize){
					metadata.currentId = metadata.currentId-1;
				}else{
					this.setNextArea("left");
				}
			break;
		}
		setActive();
		checkExceptionAfter(direction);
	};

	Navigator.prototype.setNextArea = function(direction){
		var metadata  = this.getCurrentArea().metadata;
		var lastPage  = Math.ceil(metadata.size / metadata.maxItemsPerPage);
		var onePage   = (lastPage-1 == 0);
		var next;
		var prev;
		var focusedItem;
		
		if(metadata.scroll=="horizontal"){
			next="right";
			prev="left";
			focusedItem = metadata.maxLineSize-1
		}else{
			next="down";
			prev="up";
			focusedItem = metadata.maxItemsPerPage - metadata.maxLineSize;
		}

		if(this.getCurrentArea().nextAreas[direction]!=null  && (direction!=prev || metadata.page == 0 )){ 
			this.currentAreaName = this.getCurrentArea().nextAreas[direction];
			this.currentAreaId   = this.getAreaIndexByName(this.getCurrentArea().nextAreas[direction]);		
		}else{
			if(!onePage){
				var tempAreaName = this.getCurrentAreaName();
				if(direction==next && (metadata.page !=lastPage-1)){
					this.getCurrentArea().metadata.page++;
					this.getCurrentArea().metadata.currentId=0;
					eval(metadata.scrollFunction+"(true);");
					this.setNextAreaByName(tempAreaName);
				}else if(direction==prev && metadata.page!=0 ){  
					this.getCurrentArea().metadata.page--;
					this.getCurrentArea().metadata.currentId=focusedItem;
					eval(metadata.scrollFunction+"(true);");
					this.setNextAreaByName(tempAreaName);
				}
			}
		}
	}

	Navigator.prototype.setNextAreaByName = function(name){
		setInactive(this.getCurrentAreaName());
		this.currentAreaName = name;
		this.currentAreaId   = this.getAreaIndexByName(name);
		//this.getCurrentArea().metadata.currentId=0;
	}





	
	
	function Area(name){
		this.name          = name;
		this.metadata      = {};
		this.css           = {};
		this.nextAreas     = {};
		this.buttons       = new Array();
	}
	 
	Area.prototype.setMetadata = function(param){
		this.metadata = param; 
	};
	
	Area.prototype.getMetadata = function(){
		return this.metadata; 
	};
	
	Area.prototype.addButton = function(button){
		this.buttons.push(button);
	};
	  
	Area.prototype.getButtonByIndex = function(index){
		return this.buttons[index];
	}
	  
	Area.prototype.getName = function(){
		return this.name; 
	};
	
	Area.prototype.setNexAreas = function(param){
		this.nextAreas = param; //top, bottom, right, left
	};
	  
	Area.prototype.getNexArea = function(direction){
		return this.nextAreas[direction];
	};
	  
	Area.prototype.setCssClasses = function(param){
		this.css = param; //normal, active, visited, mouseOver
	};
	
	Area.prototype.getCssClass = function(state){
		return this.css[state];
	};
	

	
	
	
	
	function Button(id,area,div){
		this.id           = id;
		this.div          = div;
		this.action       = "alert('action undefined for index:'+id);";
		this.areaName     = area;
	}
	
	Button.prototype.setAction = function(param){
		this.action = param;
	};
	
	Button.prototype.getAction = function(){
		return this.action
	};
	
	Button.prototype.addGyroscopeMode = function(){
		this.div.onclick     = Function("onClick('"+this.areaName+"',"+this.id +");");
		this.div.onmouseover = Function("onMouseOver('"+this.areaName+"',"+this.id +");");
		this.div.onmouseout  = Function("onMouseOut('"+this.areaName+"',"+this.id +");");
		this.div.onfocus     = Function("this.blur();");
	};