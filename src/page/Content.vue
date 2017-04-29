<template>
<div>
 <v-header title="MyBlog">
  </v-header>

  <div class="hello">
    <blogSide class="side" v-on:btnClick="showChild" :userTrans="userInfo" :dataTrans="sidemsg"></blogSide>
    <blogContent class="content" v-on:childClick="showChild" :dataTrans="contentmsg" :title="typemsg"></blogContent>
  </div>
 </div> 
</template>

<script>
import { mapState} from 'vuex' 
import bus from "../components/eventBus"
import blogSide from '../components/blogSide'
import blogContent from '../components/blogContent'
export default {
  name: 'MyBlog',
  data () {
    return {
      contentmsg: 'it is the content show place',
      typemsg:'item',
      sidemsg: {
        type:0,
        file:18,
        folder:21,
        bookmark:2
      }
    }
  },
  created(){
    bus.$emit("showDetail",function(){
      console.log("got bus");
      typemsg="detail";
    });
  },
  components:{
    blogSide,
    blogContent
  },
  computed:mapState({userInfo:"userstate"}),
  methods:{
      showChild:function(msg){
        console.log("child:"+msg);
        this.typemsg=msg;
      }
 }
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
