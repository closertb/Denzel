import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex); 
const userstore = new Vuex.Store({  
  state: {  
    userstate:JSON.parse(sessionStorage.getItem('user')) || {},
    loginState:false||(Boolean(JSON.parse(sessionStorage.getItem('user'))))
  },    
  mutations: {  
    increment:function(state){  
        state.count += 2;  
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
