import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import arcList from '@/components/articleList'
import arcDetail from '@/components/Content'
import itemList from '@/components/ListByItem'
import noteList from '@/components/NavList'
import version from '@/components/Version'
import markdown from '@/components/Markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/detInfo'
    },
   { path: '/listbyItem',name:'listbyItem', component: itemList },
/*     { path: '/resume',name:'resume', component:myResume },   
    { path: '/email',name:'email', component:email },    */  
    { path: '/version',name:'version', component:version},    
    { path: '/detInfo',name:'detailInfo', component: arcList },
    { path: '/conInfo',name:'conInfo', component: arcDetail},
    { path: '/markdown',name:'markdown', component: markdown}    
  ]
})
