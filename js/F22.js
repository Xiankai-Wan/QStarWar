
function F22(){
	
	//定义战机对象，是为了存储战机元素（p）
	this.plane=null;
	
	//定义每次开火的子弹对象
	this.bullet=null;
	
	//定义飞机位置对象
	this.position={
		posX:120,
		posY:400,
	};
	
	//添加战机到游戏场景
	this.addPlane=function(){
		var _this=this;
		
		//定义游戏场景对象
		var gamescene=document.querySelector(".gamesence");
		
		_this.plane=document.createElement("p");
		_this.plane.style.left=_this.position.posX+"px";
		_this.plane.style.top=_this.position.posY+"px";
		gamescene.appendChild(_this.plane);
		
		
		//时间响应要给游戏场景添加（div）
		gamescene.onmousemove=function(e){
			
			//飞机跟随鼠标移动

			_this.plane.style.left=(e.pageX-gamescene.offsetLeft-33)+"px";
		    _this.plane.style.top=(e.pageY-20-40)+"px";
		    
			if(_this.plane.offsetLeft<0){
				_this.plane.style.left=0;
			}
			if(_this.plane.offsetLeft>254){
				_this.plane.style.left=254+"px";
			}
			if(_this.plane.offsetTop<0){
				_this.plane.style.top=0;
			}
			if(_this.plane.offsetTop>488){
				_this.plane.style.top=488+"px";
			}
			_this.position.posX=_this.plane.offsetLeft;
			_this.position.posY=_this.plane.offsetTop;
			
			
		}
		
		
	}
	//开火
	this.fire=function(){
		var _this=this;
		
		//创建子弹对象
		_this.bullet=new Bullet();
		//通过子弹对象创建子弹元素
		_this.bullet.createBullet(_this.position);
		
		
		
	}
	
	
}
