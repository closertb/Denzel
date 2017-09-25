<template>
    <header class="flexheader">
	    <button class="off-canvas-launcher toLeft" @click="showNav">Menu</button>
        <span id="showInfo" class="toRight" :class="{isLogin:loginState}"><button id="loginEnable" @click="login">登录</button>
        <label id="welInfo">欢迎你：<label id='showrName' v-text="userName"></label></label><i id="loginOut" @click="loginOut" class="fa fa-fw fa-user-times"></i>
        </span>
    </header>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed:mapState({
      loginState:state=>state.loginState,
      onLogining:state=>state.onLogining,
      userName:state=>state.userInfo.userName
  }),
  methods:{
      ...mapActions(
         ['controlLogin','logOff']
      ),
      showNav:function(event) {
			event.stopPropagation();
			document.querySelector('aside.shadeLayer').classList.toggle('showItem');
	  },
      login:function(){
          this.controlLogin(!this.onLogining);
      },
      loginOut:function(){

          this.logOff();
      }
  }
}
</script>
<style scoped>
/*主页面头样式*/
.flexheader{position: fixed;top:0; right:0;left:0;z-index:5;display:flex;align-items:center;justify-content:space-between; background: yellowgreen; padding:.3rem 0;}
.toRight{margin-right:1.5rem;}
.toLeft {margin-left:1.5rem;}
/*修改按键的默认样式*/
.off-canvas-launcher {
	-webkit-appearance: none;
	-moz-appearance: none;
	border: 1px solid #297D94;
	border-radius: 4px;
	background: none;
	padding: 4px 8px;
	position: relative;
}

#loginEnable {display: inline-block;border: 1px solid #4d90fe;padding:.2rem .5rem; border-radius: .2rem;color: white;background:#4d90fe;}
#welInfo,#loginOut {display:none;}
.isLogin #loginEnable {display: none;}
.isLogin #welInfo {display: inline-block;}
.isLogin #loginOut{display: inline-block;height:1.1rem;width:1.1rem;margin:.2rem 0 0 .3rem;}
/*for larger screens set the nav to the left and give the main content extra margin to compensate for it*/
@media (min-width: 700px) {
    .off-canvas-launcher {
		display: none;
	}
	header {position: relative;margin-left: 200px;}
/*	.loginshow{margin-left: 200px;}*/
    .flexheader {justify-content: flex-end;}
	}
</style>
