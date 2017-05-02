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
    increment:function({commit},callback) {  
      callback("call back test");  
     console.log("huan jue");
    },
    userSignin:function({commit}, callback ){ 
      var user={ //为什么只能能传递两个参数
        name:"Dom",
        id:"123456"
      }
      console.log("start"+teststr); 
      callback("user callback");          
          Vue.http({
          method:"post",
          url:"http://localhost:80/StockAnalyse/LoginServlet",       
          params:{"flag":"ajaxlogin","loginName":user.name,"loginPwd":user.id}, 
          headers: {"X-Requested-With": "XMLHttpRequest"},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
          credientials:false, 
          emulateJSON: true     
        }).then(function(response){
       //   console.log(response.data);
          commit("userSignin", user); 
          callback(true);
        //  return true;
        },function(response){
          console.log("game over");
        //  return false;
        }); 

  },    
  userSignout:function({commit}) {
     commit("userSignout");
  }
 },
 strict: true  
}); 
export default userstore;
