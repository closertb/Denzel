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
/*        var loginFlag=false; //false
            $.ajax({
                type:"post",
                url:"http://localhost:80/StockAnalyse/LoginServlet",
                data:"flag=ajaxlogin&loginName="+user.name+"&loginPwd="+user.id,
                async:false, //这里没有用promise，须设置为同步，
                dataType:"json",
                success:function(data){
                  loginFlag=true;
                },
                erro:function(){
                  console.log("something wrong");
                }
             });    
              if(loginFlag){
               commit("userSignin", user);  
             }    */               
         Vue.http({
          method:"post",
          url:"http://localhost:80/StockAnalyse/LoginServlet",
          data:{"flag":"ajaxlogin","loginName":user.name,"loginPwd":user.id}, 
          //data:
          headers: {"X-Requested-With": "XMLHttpRequest"},  
          credientials:false, 
          emulateHTTP: true     
        }).then(function(response){
          console.log("it's done"+response.string());
          commit("userSignin", user);           
        },function(response){
          console.log("game over");
        });
        
       console.log("not async");
 
         
  },    
  userSignout:function({commit}) {
     commit("userSignout");
  }
 },
 strict: true  
}); 
export default userstore;
