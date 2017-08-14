<template>
  <div>
    <aside class="shadeLayer" @click="hideNav"></aside>
	<nav  id="linkList" class="navigation-menu">
        <div class="slefInfo">
            <div><img class="photoInfo" src="./../assets/mine.jpg"> </div>
            <div><span class="font2rem">Denzel</span></div>
            <div class="motto" ><span class="font2rem">生命不息，战斗不止</span></div>
        </div>  
        <a class="nav-link" alt="主页"  @click="btnClick('list')"><i class="fa fa-lg fa-home"></i><span class="sidebar-button-desc">主页</span></a>
        <a class="nav-link" alt="分类"  @click="btnClick('item')"><i class="fa fa-lg fa-bookmark"></i><span class="sidebar-button-desc">分类</span></a> 
        <a class="nav-link" :class="{itemHide:loginState}" alt="我的笔记"  @click="btnClick('notes')"><i class="fa fa-lg fa-lock"></i><span class="sidebar-button-desc">我的笔记</span></a>         
        <a class="nav-link hideItem" :class="{itemHide:loginState}" alt="新增"  @click="btnClick('more')"><i class="fa fa-lg fa-plus"></i><span class="sidebar-button-desc" >新增文章</span></a>
        <a class="nav-link" target="_blank" href="https://github.com/closertb"><i class="fa fa-lg fa-github"></i><span class="sidebar-button-desc">GITHUB</span></a>
        <a class="nav-link" target="_blank" href="http://weibo.com/1894846207/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"><i class="fa fa-lg fa-weibo"></i><span class="sidebar-button-desc">微博</span></a>
        <a class="nav-link" @click="btnClick('update')"><i class="fa fa-lg fa-grav"></i><span class="sidebar-button-desc">关于博客</span></a>    
        <a class="nav-link" @click="btnClick('email')"><i class="fa fa-lg fa-envelope-o"></i><span class="sidebar-button-desc">Email</span></a>    
	</nav>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import router from '../router';
export default {
	data:function(){
		return {
		state:false,
		detCount:[
			{"count":18},
			{"count":21},
			{"count":3}
		]    
	}},
	computed:mapState({
		loginState:state=>!state.loginState
	}),
	methods:{   
		hideNav:function(){
			document.querySelector('aside.shadeLayer').classList.remove('showItem');
		}  ,
		btnClick:function(msg){               
			if(msg==='item'){
				router.push({path: '/listbyItem',query:{flag:'getListByItem'}});                                    
			}
			if(msg==='notes'){
				router.push({path: '/listbyItem',query:{flag:'getNoteLists'}});                                    
			}                
			if(msg==='list'){ 
				router.push({path: '/detInfo'});                                    
			} 
			if(msg==='more'){
				router.push({path:'/markdown'});                                      
			}
			if(msg==='resume'){
				router.push({path:'/resume'});                                      
			} 
			if(msg==='email'){
				router.push({path:'/email'});                                      
			}    
			if(msg==='update'){
				router.push({path:'/version'});                                      
			}                                                                          
	}
	} 
}
</script>
<style scoped>
/*以下定义了侧边栏样式*/
/*定义遮罩层*/
.shadeLayer{
	position: fixed;
	display: none;
	z-index: 9;
	top:0;
	bottom:0;
	left:0;
	right:0;
	background-color: rgba(0,0,0,0.2);
}
.showItem {display:block;}
.nav-link {
	display: flex;
	align-items: center;
	justify-content:flex-start;
	padding:.5rem 2rem;
	color: #ddd;
	min-height: 2rem;
	text-decoration: none;
	transition: border, background-color .35s;
}
.nav-link span{margin-left:2rem;display: inline-block;}
.nav-link + .nav-link {
	border-top: 1px solid #aaa;
}
.itemHide{display:none;}

.nav-link:last-child{border-bottom: 1px solid #aaa;}
.nav-link:hover {
	background-color: #4d90fe;
	color: #fff;
}

/*add a transition for the left and transform properties and a duration for transitions*/
.navigation-menu {
	background-color: #4285f4;
	transition: left, transform .4s;
}

.slefInfo{background: white;border-bottom: 0 dashed #4285f4;border-right: .1rem solid #4285f4;padding:.3rem;text-align:center;}


.photoInfo{width:120px;height:120px;border: 2px solid white;border-radius: 50%; }
.font2rem {font-size: 1rem;font-weight: bold; }
.motto {margin:.5rem 0 .5rem 0;}

.item{border-top: 0.1rem dashed gray;padding-top:.3rem }
.item ul{display: flex; justify-content: space-around;}
.item img{height:25px; width:25px;}
@media (min-width: 200px) {
	 .navigation-menu {
		position: fixed;
		z-index: 10;
		top: 0;
		bottom: 0;
		width: 200px;
		left: -200px;
	}
	/*when the menu button is clicked move the nav back on screen*/
	 .showItem+.navigation-menu {
		left: 0;
		transition: left .35s
	}
	 .csstransforms .navigation-menu {
		left: auto;
		transform: translateX(-200px);
	}
	 .csstransforms .OffCanvas-Active .navigation-menu {
		transform: translateX(0);
	}
	 .csstransforms3d .navigation-menu {
		left: auto;
		transform: translate3d(-200px, 0, 0);
	}
	 .csstransforms3d .OffCanvas-Active .navigation-menu {
		transform: translate3d(0, 0, 0);
	}
}
/*for larger screens set the nav to the left and give the main content extra margin to compensate for it*/
@media (min-width: 700px) {
	.shadeLayer{display: none;}
	.navigation-menu {
		left: 0!important;
		transform: none!important;
	}
	.off-canvas-launcher {
		display: none;
	}
	.mcontent {
		position: relative;
		margin-left: 200px;
	}}
</style>


