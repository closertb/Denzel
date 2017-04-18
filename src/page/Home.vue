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
  },
  methods:{
    test:function(){
      for (var i = 0; i < 5; i++) { 
      (function(j){
        setTimeout(function() { 
            console.log(new Date, j); 
        }, 1000); 
      })(i);

     } 
      console.log(new Date, i+"end");      
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
  text-align: center; 
}
.hello *{
  position: relative;
  top:80px;
  margin:0 auto;
}
</style>
