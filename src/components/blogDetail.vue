<template>
     <div class="detail">
                  <h4>这是详情页</h4>
        {{dataTrans}}
     </div>
</template>
<script>
export default{
    props: ['dataTrans']
}
</script>
<style scoped>
.detail
{
width:100%;
position:relative;
}
</style>