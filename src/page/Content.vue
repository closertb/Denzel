<template>
<div>
 <v-header title="MyBlog">
  </v-header>

  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
 </div> 
</template>

<script>
export default {
  name: 'MyBlog',
  data () {
    return {
      msg: 'Welcome to My Blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    text-align: center;
}


</style>
