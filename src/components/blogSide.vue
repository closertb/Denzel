<template>
     <div class="sideBar">
         <div class="profile">
             <div class="photo">
                 <img src="../assets/mine.jpg">
             </div>
             <div class="username"><h3>{{userTrans.name}}</h3></div>
         </div>
       <div class="underLine"></div>
       <div class="item">
       <ul>
           <li> {{dataTrans.file}}</li>
          <li> {{dataTrans.folder}}</li>
          <li> {{dataTrans.bookmark}}</li>          
       </ul>
       <ul>
           <li><img src="../assets/tag/file.png" alt="文章"></li>
           <li><img src="../assets/tag/folder.png" alt="分类"></li>
           <li><img src="../assets/tag/bookmark.png" alt="标签"></li>          
       </ul>
       </div>
       <div class="total"><h3>生命不息，战斗不止</h3></div>
     </div>
</template>
<script>
export default{
    props: ['userTrans','dataTrans']
}
</script>
<style scoped>
.sideBar
{
 min-height: 650px;
}
.profile{
    padding-top: 30px;
}
.photo{
    width:100%;
}
.photo img{
    width:150px;
    height:150px;
    border: 2px solid white;   
    border-radius: 50%;    
}
.username{
    padding-top: 20px;
}
.underLine{
    margin: 10px 0;
    border: 1px dashed gray;
}
.item{
    background: white;
}
.item li{
    display: inline-block;
    width:25%;
}
.item img{
    height:25px;
    width:25px;
}
.total{
    padding: 20px;
}

</style>