function CheatManager(grid,manager,count){
	this.grid=grid;
	this.step=0;
	if(count===undefined)
		this.count=1;
	else
		this.count=count;
	console.log(count,"count");
	this.manager=manager;
	return this;
}
CheatManager.prototype.click=function(el,tile){
    if(this.count<=0 || this.step>1)
	    return;
    el.classList.add("selected-tile");
    if(this.step==0)
    {
	    this.first={e:el,t:tile};
	    this.step=1;
    }
    else if(this.step==1)
    {
	    this.second=tile;
            this.step=2;	    
    }
}

CheatManager.prototype.doCheat=function(){
	if(this.step!=2)
		return;
	
	var tmp=this.second.value;
        this.grid.cells[this.second.x][this.second.y].value=this.first.t.value;
        this.grid.cells[this.first.t.x][this.first.t.y].value=tmp;
    this.step=0;
    this.count--;
    this.manager.actuate();
}
CheatManager.prototype.addCount=function(){
	this.count++;
}

CheatManager.prototype.getCount=function(){
	return this.count;
}
