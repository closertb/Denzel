<template>
<div>
 <v-header title="Hello">
</v-header>
  <div class="hello">
    <img src="../assets/logo.png">
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
.hello {
  width:100%;
  min-height:550px;
  background: url("../assets/bak.jpg");
}
.hello *{
  position: relative;
  top:80px;
}
</style>
