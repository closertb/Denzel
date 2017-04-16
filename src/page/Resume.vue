<template>
<div>
 <v-header title="Resume">
</v-header>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button @click="test()">测试</button>
  </div>
 </div> 
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: 'DENZEL Resume'
    }
  },
  methods:{
    test:function(){
      console.log(new Date);      
  }
}
}
</script>


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
