<template>
	<header class="ui-header">
		<ul class="ui-login">
			<section v-if="userInfo.name">
         <p>欢迎你：{{userInfo.name}} <button class="loginout" @click="loginout"><img src="../assets/close.png"></button></p>
      </section>
     	<section v-if="!userInfo.name">
         <router-link :to="{ path: 'Login' }">请先登录</router-link>
      </section>
		</ul>
		<ul id="ui-nav">
      <li v-for="(tabbarName,index) of tabbarNames" :class="{active:title== tabbarName.name}">
          <router-link  :to="tabbarName.tabLink">{{tabbarName.name}}
              </router-link>   
      </li>   
		</ul>      
	</header>
</template>

<script>
import {mapState} from 'vuex' 
export default {
      data(){
        return{
            tabbarNames:[
                {name:'Hello',tabLink:'/'},
                {name:'MyBlog',tabLink:'/MyBlog'},
                {name:'Login',tabLink:'/Login'},
                {name:'VUEX',tabLink:'/'}
            ],
        }
    },
        methods:{
          clickFun:function(selectName){
          this.activeName = selectName;},
         loginout:function(){
          this.$store.dispatch("userSignout");
          this.$router.replace({ path: '/Login' })
      }          
    },
        computed: mapState({
    userInfo:"userstate"  
  }),
        props: {
            title: {
                type: String,
                default: 'any'
            }
        }
}
</script>

<style scoped>
.ui-header{
  position: fixed;
  float:left;
  width:100%;
  min-height:44px;
  border:  dashed 1px #ddd;
  border-width: 0 0 1px;
  /*background: #C0F0FE;*/
  z-index: 1030; 
}
.ui-header ul{
  padding-top: 10px;
  min-height:40px;
  margin:2px 0;
}
.ui-login{
  position:absolute;
  float:right;
  text-align:right;
  min-width:25%;
  right:0px;
  padding-right:20px;
}
#ui-nav{
  position:absolute;
  float:left;
  text-align:left;
  min-width:49%;
  left:0px;
  padding-left:10px;
  padding-top: 0;
}
#ui-nav > li {
    position:relative;
    float:left;
    display: block;
    list-style-type:none;
    margin:0px 0;
    padding:10px 20px 10px;
    }
#ui-nav > li > a {
  margin-right: 2px;
  padding:10px 15px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration:none ;
}
#ui-nav > li > a:hover {
  border-color: #eee #eee #ddd;
}
#ui-nav > li.active > a,
#ui-nav > li.active > a:hover,
#ui-nav > li.active > a:focus {
  cursor: default;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
    color: #fff;
  background-color: #337ab7;
}
.loginout{
  margin-left:10px;
  background: #fff;
  border:0;
  }
  .loginout img{width:18px;height:18px;}
/*  .router-link-active{
    cursor: default;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
    color: #fff;
    background-color: #337ab7;    
  }*/
</style>
