// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import modelheader from './components/header'
import store from './store/userstore'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.component("v-header",modelheader);

Vue.use(VueResource)
Vue.use(VueRouter)

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.logstate) //true用户已登录， false用户未登录
    console.log("st:"+isLogin);
    if (auth && !isLogin && path !== '/Login') {
        return router.replace({ path: '/Login' })
    }
    next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
