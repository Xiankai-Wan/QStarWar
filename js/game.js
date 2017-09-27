//等待文档解析完毕执行函数
onload=function(){
	//获取游戏开始按钮
	var startBt=document.querySelector(".gamesence");
	//给其添加单击响应
	startBt.onclick=function(){
	//创建游戏对象
	var game=new Game();	
	game.startGame();
		
	}
	
}
//游戏类
function Game(){
	//飞机类的对象（非标签元素）
	myPlane=null;
	
	//装子弹的数组
	bullets=[];
	
	this.startGame=function(){
		var _this=this;
		
		//切换游戏背景
		document.querySelector(".gamesence").style.backgroundImage="url(img/background_1.png)";
		
		//隐藏开始游戏按钮
		document.querySelector(".gamesence>button").style.display="none";
		
		//创建我方战机
		myPlane=new F22(); 
		myPlane.addPlane();
		
		
		//模拟一个控制实时刷新的游戏引擎(隔500毫秒执行一次函数)
		setInterval(_this.run,50);
	}
	
	//每隔0.5秒刷新页面的函数
	this.run=function(){
		//没开火一次创建一个子弹
		myPlane.fire();
		
		//将创建的子弹放入全局数组
		bullets.push(myPlane.bullet);
		
		//将每一个子弹的坐标向上移动
		for(var i in bullets){
			//子弹元素对象（标签i）
			bullets[i].bullet.style.top=(bullets[i].bullet.offsetTop-30)+"px";
			
		}
		
		//判断每一个子弹是否超出边界，超出销毁
		for(var i=0;i<bullets.length;i++){
			if(bullets[i].bullet.offsetTop<12){
				//一处子弹元素（标签i）
				bullets[i].destory();
				//将子弹对象从数组中删除
				bullets.splice(i,1);
				i--;
			}
		}
		
		//刚体检测
		
		
		
	}
	
	
}
