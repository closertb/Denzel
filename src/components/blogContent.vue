<template>
     <div class="content">
       <h1 class="title">{{title}}</h1> 
     <div>
     <section v-if="title==='item'">
        <blogItem :dataTrans="dataTrans"></blogItem>
     </section>
     <section v-else-if="title==='detail'">
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
        titleName:['item','detail',]
        }
    },
    props: ['dataTrans','title'],
    components:{
        blogDetail,
        blogItem
    }
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