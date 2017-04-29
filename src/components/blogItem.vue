<template>
     <div class="item">
         <h4>这是列表页</h4>
        {{dataTrans}}
        <div>
            <ul>
                <li @click="showDetail">列表1</li>
                <li @click="showDetail">列表2</li>
                <li @click="showDetail">列表3</li>                                              
            </ul>
        </div>
     </div>
</template>
<script>
import bus from "./eventBus"
export default{
    props: ['dataTrans'],
    methods:{
        showItem:function(){
            console.log("bus");
            var showId = 5;
            bus.$emit("showDetail",showId);
        },
        showDetail:function(){
            console.log("bus");
            var showId = 5;
            this.$emit("showDetail",showId);
        }        
    }    
}
</script>
<style scoped>
.item
{
width:100%;
position:relative;
}
</style>