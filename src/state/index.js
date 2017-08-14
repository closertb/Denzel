import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token:sessionStorage.getItem('token'),
        userInfo:{
            userName:'',
            userPsd:'',
            userPriv:''
        },
        onLogining:false,
        loginState:false,
        otherInfo:{},
    },
    getters:{

    },
    mutations:{
        setLogin(state,flag){
            state.onLogining = flag;
        },
        enableLogin(state,userInfo){
            state.loginState = true;
            state.userInfo = userInfo;
            state.onLogining = false;
        },
        disableLogin(state){
            state.loginState = false;
            state.userInfo = {
                userName:'',
                userPsd:'',
                userPriv:''              
            };
            sessionStorage.removeItem('token');          
        }
    },
    actions:{
        controlLogin:(context,flag)=>{
            context.commit('setLogin',flag);
        },
        confirmLogin:(context,userInfo)=>{
            context.commit('enableLogin',userInfo);
        },
        logOff:(context)=>{
            context.commit('disableLogin');
        }     
    }
});
