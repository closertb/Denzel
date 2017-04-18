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
      <h2>这个区域后面没有机会被看到</h2>
      <p><button @click="loginout">退出</button></p>
    </section>  
  </div>
 </div> 
</template>

<script>
import { mapState, mapActions ,mapGetters} from 'vuex' 

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
// computed: mapGetters({logstate:"logstate"}), //这个GETTERS是多余的，只是想尝试应用一下getters函数
  computed:mapState(
    {userInfo:"userstate",
    logstate:"logstate"}
    ),
  methods:{
        ...mapActions(["userSignin","userSignout"]),
			  login:function(){
				this.btn = true;
        var user=this.form
				if(!this.form.id || !this.form.name) {
          return;
        }else{
          this.userSignin(user);
          this.$router.replace({ path: '/' });
        }
			},
      loginout:function(){
          this.userSignout();
      }      
    }
 }
</script>

<style scoped>
.hello{
    width:100%;
    min-height:630px;
    background: url("../assets/back.jpg");
    text-align: center; 
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
form button{ position:relative;float:right;width:auto;border-radius: 7px;padding:4px;background:#DBA37E;margin-right:30px;}
</style>
