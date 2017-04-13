<template>
<div>
 <v-header title="Hello">
    <router-link slot="right" to="/">欢迎你</router-link>
  </v-header>
   <img src="../assets/logo.png">
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
 </div> 
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to DENZEL App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
