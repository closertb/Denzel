<template>
  <div id="app">
<!--    <v-header title="垃圾">
     <router-link slot="left" to="/">首页</router-link>
    <router-link slot="right" to="/">欢迎你</router-link>     
    </v-header>-->
   <!-- <img src="./assets/logo.png">-->
    <router-view></router-view>

  </div>
</template>

<script>
//import header from './components/header'
export default {
  name: 'app'/*,
  components:{
    'v-header':header
  }*/
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

