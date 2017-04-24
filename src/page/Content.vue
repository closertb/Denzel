<template>
<div>
 <v-header title="MyBlog">
  </v-header>

  <div class="hello">
    <blogSide class="side" :userTrans="userInfo" :dataTrans="sidemsg"></blogSide>
    <blogContent class="content" :dataTrans="contentmsg" title="detail"></blogContent>
  </div>
 </div> 
</template>

<script>
import { mapState} from 'vuex' 
import blogSide from '../components/blogSide'
import blogContent from '../components/blogContent'
export default {
  name: 'MyBlog',
  data () {
    return {
      contentmsg: 'it is the content show place',
      sidemsg: {
        file:18,
        folder:21,
        bookmark:2
      }
    }
  },
  components:{
    blogSide,
    blogContent
  },
  computed:mapState({userInfo:"userstate"})
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    text-align: center;
}
.side{
  position: relative;
  float: left;
  width:20%;
  border-right: 1px dashed gray;
}
.content{
  position: relative;
  float: right;
  width:80%;
}

</style>
