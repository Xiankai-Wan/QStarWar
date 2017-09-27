function Bullet(){
	
	//子弹元素对象（标签i）
	this.bullet=null;
	
	//创建子弹的方法
	this.createBullet=function(pos){
		
		var _this=this;	
		_this.bullet=document.createElement("i");
		
		//根据创建时传入的位置初始化子弹的位置
		_this.bullet.style.left=(pos.posX+33)+"px";
		_this.bullet.style.top=pos.posY+"px";
		
		
		//将子弹对象添加到背景中
		document.querySelector(".gamesence").appendChild(_this.bullet);
//		console.log(1);
	}
	
	//销毁子弹
	this.destory=function(){
		
		var _this=this;
		document.querySelector(".gamesence").removeChild(_this.bullet);
	}
}
