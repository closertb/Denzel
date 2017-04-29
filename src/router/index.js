import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import MyBlog from '@/page/Content'
import Login from '@/page/Login'
import Resume from '@/page/Resume'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/StockAnalyse/',
  routes: [
    {path: '/',name: 'Home', component: Home},
    {path: '/MyBlog',name: 'MyBlog', component: MyBlog},
    {path: '/Login',name: 'Login', component: Login},   
    {path: '/Resume',name: 'Resume', component: Resume}    
  ]
})
