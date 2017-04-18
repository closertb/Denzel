<template>
     <div class="proBar">
     <div class="pb-container">
     <div class="pb-text">{{barWidth}}</div>
     <div class="pb-value" :style="{width:barWidth}"></div>
     </div>
     </div>
</template>
<script>
export default{
    props:{
        barWidth:{
            type: String,
           default: ''
        }
    }
}
</script>
<style scoped>
.proBar
{
width:180px;
position:relative;
border:1px solid #cfd0d2;
border-radius:8px; 
margin-left:14px;
margin-top:2px; 
background:#cfd0d2;
display:inline-block;
*zoom:1;
}
.pb-container
{
height:14px;
position:relative;
left:-1px;
margin-right:-2px;
font:1px/0 arial;
padding:1px;
}
.pb-text
{
width:100%;
position:absolute;
left:3px;
top:2px;
text-align:center;
font:10px/12px arial;
}
.pb-value
{
height:100%;
width:50%;
background:#19d73d;
border:1px solid #19d73d;
border-style:none solid;
border-radius:7px; 
}
.pb-text
{
color:black;
font:10px/12px arial
}
</style>