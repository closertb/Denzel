// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './state';
import login from '@/components/Login'
import navlist from '@/components/NavList';
import header from '@/components/Header';
import MetaInfo from 'vue-meta-info'
import './js/lib/fetch.js';


Vue.config.productionTip = false;
Vue.component('login-form',login);
Vue.component('page-nav',navlist);
Vue.component('page-header',header);
Vue.use(MetaInfo);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

