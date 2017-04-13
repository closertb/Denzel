import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex); 
const userstore = new Vuex.Store({  
  state: {  
    count: 10,  
    numb: 10086,
    userstate:JSON.parse(sessionStorage.getItem('user')) || {},
    loginState:false||(Boolean(JSON.parse(sessionStorage.getItem('user'))))
  },  
/*  getters: {  
    add: function(){ 
      return state.count;  }
    },*/   
  mutations: {  
    increment:function(state){  
        state.count += 2;  
      //  console.log(state.userstate);
    },
    userSignin:function(state, user){
            var userstate=state.userstate;
            sessionStorage.setItem('user', JSON.stringify(user));
            state.loginState=true;
            Object.assign(userstate, user);           
    },
    userSignout:function(state) {
            sessionStorage.removeItem('user');
            state.loginState=false;
            Object.keys(state.userstate).forEach(k => Vue.delete(state.userstate, k))
    } 
  },  
  actions:{  
    increment:function({ dispatch, commit }) {  
      return commit('increment');  
    },
    userSignin:function({commit}, user){
      console.log("new:"+user.name+"***mima:"+user.id);
        var loginFlag=true; //false
   /*   $.ajax({
                type:"post",
                url:"http://localhost:80/StockAnalyse/LoginServlet",
                data:"flag=ajaxlogin&loginName="+user.name+"&loginPwd="+user.id,
                async:false, //这里必须设置为同步，不然前段登录状态标示不能及时切换
                dataType:"json",
                success:function(data){
                  loginFlag=true;
                  console.log("yes");
                },
                erro:function(){
                  console.log("something wrong");
                }
             }); */
             if(loginFlag){
               commit("userSignin", user);  
             }    
         
  },    
  userSignout:function({commit}) {
     commit("userSignout");
  }  
 }  
}); 
export default userstore;
