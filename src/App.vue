<template>
  <div id="app">
    <page-header></page-header>
    <login-form></login-form>
    <page-nav></page-nav>
    <main id="api" class="mcontent">    
    <h1 id="itemName" @click="goback" v-text='activeTag'>
    </h1>   
        <router-view></router-view>	
   </main>
  </div>
  
</template>

<script>
import router from './router';
export default {
  name: 'app',
  data:function(){
    return {
      activeTag:'',
      myinput:''
  }},
  created:function(){    
      this.setTagName();  
  },    
  watch:{       
      '$route':'setTagName'
  },
  methods:{     
      goback:function(event){    
          event.stopPropagation();
          if(this.activeTag==="返回列表"){
              router.go(-1);  
          }
      },  
      setTagName:function(){
          let path = this.$route.name; 
          if(/^conInfo/.test(path)){ 
                this.activeTag="返回列表";        
          }  
          if(/^detail/.test(path)){   
                this.activeTag="文章列表";          
          }                  
          if(/^markdown/.test(path)){
                this.activeTag="文章编辑" ;         
          }   
          if(/^listbyItem/.test(path)){
                this.activeTag="分类列表" ;         
          }  
          if(/^resume/.test(path)){ 
                this.activeTag="个人简历" ;         
          } 
          if(/^email/.test(path)){
                this.activeTag="我的邮箱" ;         
          } 
          if(/^version/.test(path)){
                this.activeTag="更新信息" ;         
          }                                             
      }
  }       
}
</script>

<style>
/*Make everything use border-box sizing for simplicity*/
html{font-size: 16px;}
div,ul,p,li,form,fieldset{
	box-sizing: border-box;
}

body,div,p,ul,li,header,form,fieldset{
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}
/*此样式用于控制页面模块的显示与隐藏*/
.hideItem{display:none;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: visible;
  color: #2c3e50;
}

/*主页面内容样式*/
.mcontent {font-family: sans-serif;z-index: 1;min-height: 500px;position: relative;top:2.3rem;}

#itemName{font-size:1.25rem;padding-left:1.5rem;}  
 
article{border-top: 1px solid rgb(238, 238, 238);margin:1rem;position: relative;min-height: 400PX;}  
.waitflag {font-size: 1rem;}
.waitflag .waitLoad{position: absolute;z-index: 6; display: flex;justify-content: center;align-items: center;left:0;right:0;top:0;bottom:0;color: #1889C5; background: white;} 
.waitLoad {display: none;transition: all .3s;}
.waitLoad .spanCenter {font-size: 4rem;display:flex;justify-content: center;}
.waitLoad .span1rem{font-size: 1rem;}
@media (min-width: 700px) {
	.mcontent {
		position: relative;
		margin-left: 200px;
	}
  article{ min-height: 600PX;width:90%;max-width: 900px;margin:1rem auto;}
  .arttitle {font-size: 1.5rem;font-weight: 600;padding:0.5 1rem;}
  .artcontent{background:rgb(248, 248, 248);padding:0 1rem .5rem;}
}
</style>
