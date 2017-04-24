<template>
     <div class="item">
         <h4>这是列表页</h4>
        {{dataTrans}}
     </div>
</template>
<script>
export default{
    props: ['dataTrans']
}
</script>
<style scoped>
.item
{
width:100%;
position:relative;
}
</style>