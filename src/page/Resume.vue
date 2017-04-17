<template>
<div>
 <v-header title="MyResume">
</v-header>
  <myResume></myResume>
 </div> 
</template>

<script>
import myResume from "../components/MyResume"
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
},
  components:{
     "myResume":myResume
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
