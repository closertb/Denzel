<template>
     <div class="content">
       <h1 class="title">{{title}}</h1> 
     <div>
     <section v-if="title==='item'">
        <blogItem :dataTrans="dataTrans" v-on:showDetail="showDetail"></blogItem>
     </section>
     <section v-else>
        <blogDetail :dataTrans="dataTrans"></blogDetail>
     </section>
     <section v-else>
         <h2>无内容</h2>
     </section>
     </div>
          </div>
</template>
<script>
import blogDetail from './blogDetail'
import blogItem from './blogItem'
export default{
    data(){
        return{
        detailId:"",
        titleName:"item",  //-if="title==='detail'"
        counter:0,
        counterLast:0
        }
    },
    props: ['dataTrans','title'],
    components:{
        blogDetail,
        blogItem
    },
    methods:{
        showDetail:function(id){
            console.log("子件请求ID"+id);
            id="detailed";
        //    this.titleName="detailed";
            this.$emit("childClick",id);
            this.counter +=1;
        }
    }/*,
    computed:{
        titleType:function(){
            console.log("computer:start");
            if(this.title==="item"){
                console.log("computer:detail");
                if(this.counter!==this.counterLast){
                     console.log("computer:++");
                return  "detailed";
            }else{
                 console.log("computer:==");
                  return  "item";                  
                }
            }else{
                console.log("computer:item");
                return  "item";
            }
        }
    }*/
}
</script>
<style scoped>
.content
{
 min-height: 650px;
}
.title{
    text-align: left;
    padding: 10px 0 5px 20px;
}
</style>