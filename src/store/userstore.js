import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex); 
const userstore = new Vuex.Store({  
  state: {  
    userstate:JSON.parse(sessionStorage.getItem('user')) || {},
    logstate:false||(Boolean(JSON.parse(sessionStorage.getItem('user'))))
  },  
  getters:{
    loginstate:function(state){
      console.log("fhg:"+(state.userstate.id===undefined));
        return (state.userstate.id===undefined);
    }
  },  
  mutations: {  
    increment:function(state){  
        state.count += 2;  
    },
    userSignin:function(state, user){
            sessionStorage.setItem('user', JSON.stringify(user));
            Object.assign(state.userstate, user);   
            state.logstate=true;        
    },
    userSignout:function(state) {
            sessionStorage.removeItem('user');
            state.logstate=false;    
            Object.keys(state.userstate).forEach(k => Vue.delete(state.userstate, k))
    } 
  },  
  actions:{  
    increment:function({ dispatch, commit }) {  
      return commit('increment');  
    },
    userSignin:function({commit}, user){
        var loginFlag=true; //false
             if(loginFlag){
               commit("userSignin", user);  
             }    
         
  },    
  userSignout:function({commit}) {
     commit("userSignout");
  }  
 },
 strict: true  
}); 
export default userstore;
