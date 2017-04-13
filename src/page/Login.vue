<template>
<div>
 <v-header title="Login">
    <router-link slot="right" to="/">请先登录</router-link>
  </v-header>
  <div class="hello">
    <h1 v-if="!logstate">{{ msg }}</h1>
    <section v-if="!logstate">
      <form class="login" v-on:submit.prevent="login()">
			<div class="line">	
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
        <div v-show="btn && !form.name">用户名不能为空</div>
			</div>
			<div class="line">
				<input type="number" placeholder="输入你的密码" v-model="form.id">
        <div v-show="btn && !form.id">密码不能为空</div>
			</div>
			<button>登录</button>
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
					id: '123456',
					name: 'Denzel'
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
