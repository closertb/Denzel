<template>
<div>
 <v-header title="Login">
  </v-header>
  <div class="hello">
    <h1 v-if="!logstate">{{ msg }}</h1>
    <section v-if="!logstate">
      <form class="loginForm" @submit.prevent="login()">
			<div class="line">	
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
        <div v-show="btn && !form.name">用户名不能为空</div>
			</div>
			<div class="line">
				<input type="text" placeholder="输入你的密码" v-model="form.id">
        <div v-show="btn && !form.id">密码不能为空</div>
			</div>
			<button>Login the APP</button>
		</form>
    </section> 
    <section v-if="logstate">
      <h2>欢迎你：{{userInfo.name}}</h2>
      <p><button @click="loginout">退出</button></p>
    </section>  
  </div>
 </div> 
</template>

<script>
import {mapState} from 'vuex' 

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Please Login the App First',
      btn:false,
      form: {
					id: '',
					name: ''
				}
    }
  },
  computed: mapState({
    logstate:"loginState",
    userInfo:"userstate"  
  }),
  methods:{
    //  ...mapActions("USER_SIGNIN"),
			  login:function(){
				this.btn = true;
        console.log("start:");
        var user=this.form;
				if(!this.form.id || !this.form.name) {
          return;
        }else{
          this.$store.dispatch("userSignin",user);
          this.$router.replace({ path: '/' })
        }
			},
      loginout:function(){
          return this.$store.dispatch("userSignout");
      }      
    }
 }
</script>

<style scoped>
.hello{
    width:100%;
    min-height:630px;
    background: url("../assets/back.jpg");
}
.hello>*{
  position: relative;
  top:80px;
}
.loginForm{
  width:400px;
  height:200px;
  background:#C0B6EB;
  margin:20px auto 0;
  padding:20px 0;
  border-radius: 8px;
}
.hello input,button{
  margin-top:22px;
  height:29px;
  border-radius: 5px;
}
button{ position:relative;float:right;width:auto;border-radius: 4px;padding:4px;background:#DBA37E;margin-right:30px;}
</style>
