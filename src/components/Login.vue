<template>
   <form id="login" class="hideItem" :class="{loginshow:isActive}" action="" @submit.prevent="userLogin">
     <!--   <form id="login"  :class="{loginshow:isActive}" :class="isActive?'loginshow':'loginhide'" action="" @submit.prevent="userLogin">-->
        <fieldset>
            <h3>用户登录</h3>
            <div class="btn-group">
                <span><i class="fa fa-fw fa-user"></i></span>
                 <input type="text" class="user-id" v-model="userInfo.userName" placeholder="请输入你的用户ID" required="required"/>
            </div>
            <div class="btn-group">
                <span><i class="fa fa-fw fa-key"></i></span>
                <input type="password" class="user-pwd" v-model="userInfo.userPsd" placeholder="请输入你的登录密码" required="required"/>
            </div>
            <div class="btn-group">      
                <span><i class="fa fa-fw fa-unlock"></i></span>
            <input type="submit" class="login-btn" value="登录"/>
            </div>
        </fieldset>
    </form>
</template>
<script>
import {mapState,mapActions} from 'vuex'

import {fetchInitOption,reqUrl} from '../js/tool.js'
export default {
    name:'login',       
    data:function(){
        return{
            userInfo:{
                userName:'',
                userPsd:''
            }
        }
    },
    computed:mapState({
        loginState:state=>state.loginState,
        isActive:state=>state.onLogining,
        user:state=>state.userInfo
    }),        
    created:function(){
        this.showInfo()
    },
    methods:{
            ...mapActions(['confirmLogin']),
            showInfo:function(){
                let that = this;   
                let token =sessionStorage.getItem('token'); 
                if(token!==null && token!=='undefined'){
                    if(this.userInfo.userName===''){
                        fetch(reqUrl+'/LoginServlet', fetchInitOption({flag:"checklogin",token:token}))
                        .then(function(response){
                            if(response.ok){
                                return response.json();
                            } else {
                                console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                            } 
                        }).then(function(data){
                            that.userInfo = data;
                            that.confirmLogin(that.userInfo);        
                            that =null;
                        });                      
                    }/* else{                                          
                            document.querySelector("#showInfo").classList.toggle("isLogin");
                            document.querySelector("#showrName").innerHTML=that.userInfo.userName;
                            that =null;                         
                    } */
                }
            },   
            userLogin:function(){
                let that = this;
                fetch(reqUrl+'/LoginServlet', fetchInitOption({flag:"ajaxlogin",loginName:this.userInfo.userName,loginPwd:this.userInfo.userPsd})
                ).then(function(response){
                    if(response.ok) {
                    return response.text();
                    } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                    }                   
                }).then(function(data){
                    if(data.length>10){
                        sessionStorage.setItem("token",data);
                        that.userInfo.userPsd = '';
                        that.userInfo.userPriv = '';
                        that.confirmLogin(that.userInfo);
                        that = null;
                    }else{
                        alert('请输入与用户名匹配的密码');
                        that.userInfo.userPsd='';
                    }
                })                 
            }
        }            
    }
</script>
<style scoped>
/*定义登录相关的样式*/
#loginEnable {display: inline-block;border: 1px solid #4d90fe;padding:.2rem .5rem; border-radius: .2rem;color: white;background:#4d90fe;}
#welInfo,#loginOut {display:none;}
.isLogin #loginEnable {display: none;}
.isLogin #welInfo {display: inline-block;}
.isLogin #loginOut{display: inline-block;height:1.1rem;width:1.1rem;margin:.2rem 0 0 .3rem;}
.loginshow{width:100%;display:flex;justify-content: center;position: absolute;top:6rem;left:0;z-index: 1000;}
.loginshow fieldset{width:320px; border-radius:1rem; background:white;}
.loginshow h3{font-weight: normal;font-size: 1.1rem; color: rgba(82, 80, 79, 0.67);margin-left:2rem;}
.btn-group {display: flex;align-content:center;margin:.5rem 1rem;border: 2px solid #e1e1e1;border-radius: .4rem;}
.btn-group span {display:inline-block;margin:0.5rem .5rem .2rem;line-height: 20px;height:20px;color:red;}
.loginshow input {display:inline-block;width:90%;font-size: 1rem;padding:.5rem 0;border: 0;text-indent: 1.2rem;}
.login-btn{background:#dc3c00;color: white;text-indent: 0!important; border-radius:.4rem;}

</style>