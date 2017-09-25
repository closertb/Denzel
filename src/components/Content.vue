<script>
import {contentTemp} from '../js/component/template.js';
import {toPreview} from '../js/component/editor.js';
import {fetchInitOption,reqUrl} from '../js/tool.js';
import router from '../router';
import {mapState} from 'vuex';
export default {
    render:function(createElement){
        return contentTemp(createElement,this)
    },
    data: function() {
        return {item:{
            currentInfo:{
                    count:0,
                    index:0,
                    username:' ',
                    itemId:0,
                    postdate:' ',
                    itemName:' ',
                    content:'',
                    title:''
                },
            relatedInfo:{
                last:{
                    title:'这是他的上一篇',
                    index:''
                },
                next:{
                    title:'这是他的下一篇',
                    index:''
                }
            }
            },
        token:''
    }
  },
  metaInfo() {
      return {
        title: this.item.currentInfo.title, // set a title
        meta: [{                 // set meta
          name: 'keyWords',
          content: this.item.currentInfo.title
        },{                 // set meta
          name: 'keyWords',
          content: this.item.currentInfo.tags
        }]
   }
  },
	computed:mapState({
		loginState:state=>state.loginState
	}),
    methods:{
        gotodetail:function(num){
            if(num>0){
                router.replace({path: '/coninfo',query:{arcindex:num}});
            }else{
                alert("已经到列表的尽头");
            }

        },
        editContent:function(index){
            router.push({path:'/markdown',query:{arcindex:index}})
        },
        fetchDataById:function(){
        let indexId = this.$route.query.arcindex;
        let that = this;
        const art =document.querySelector('.mcontent');
        (art)&&(art.classList.toggle('waitflag'));
        fetch(reqUrl+'/BlogServlet', fetchInitOption({flag:"getContentById",queryId:indexId}))
        .then(function(response){
            if(response.ok){
                return response.json();
            } else {
                console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
            }
        }).then(function(data){
            that.item =data;
            that.item.currentInfo.content = toPreview(that.item.currentInfo.content);
         //   art.classList.remove('waitflag');
            (art)&&(art.classList.toggle('waitflag'));
            that = null;
        })
        }
    },
    created(){
        this.fetchDataById();
    },
    watch:{
        '$route':'fetchDataById',
    },
    beforeRouteEnter(to, from, next){
        next(function(k){
            //console.log('entered');
        });
    },
    beforeRouteUpdate (to, from, next) {
        next(function(k){
          //  console.log('update');
        });

    }
}
</script>
<style scoped>
.artheader{display: flex; align-items: center;margin:1rem 0;}
.jsimg{background: url('../assets/js.png') no-repeat;background-size: 4rem;width:4rem;height:4rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.cssimg{background: url('../assets/css.png') no-repeat;background-size: 4rem;width:4rem;height:4rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.htmlimg{background: url('../assets/front.png') no-repeat;background-size: 4rem;width:4rem;height:4rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.authInfo {width:60%;margin-left:.3rem;padding:.3rem;text-align: left;}
.authInfo div:first-child{font-size: 1rem;font-weight:600 ;color:#009a61;}
#editContent {cursor: pointer;display: inline-block;margin-left: 1rem;font-size: .9rem;}
.authInfo div:last-child {font-size: 0.8rem;margin-top:.3rem}
.arttitle {font-size:1.3rem;margin-left:.3rem;padding:.8rem .5rem .5rem;font-weight:bold;overflow:hidden;  border-top: 1px solid rgb(238, 238, 238);}
.artcontent{background:rgb(248, 248, 248);padding:.5rem .5rem;}
.artcontent ol {margin:0;padding:0;}
.artcontent li{overflow:visible ;margin:5px 1.3em;}
.artcontent h2{font-size:1.2rem; }
.artcontent a {color:blue;text-decoration: none;cursor: pointer;}
.artcontent p {line-height: 1.6rem;}
.artcontent p+p {margin:1rem 0;}
.artcontent code {display:inline-block;margin:1rem 0;background: #f2f2f2;font-size: .9rem;width:99%;max-height:16rem;overflow:auto; }
.artcontent img {display:block;max-width:95%;margin:.5rem auto;}

/*这里定义模板详情页下方上下篇导航时的样式*/
.relatedNav{padding:.3rem .1rem;border-top: 1px solid rgb(238, 238, 238); }
.relatedNav div{display: flex;height:1.4rem; justify-content: space-between;color:rgba(88, 85, 88, 0.57);font-size:1rem }
.relatedNav div+div{ margin-top:.3rem;}
.relatedNav a {display:inline-block; max-width:49%;overflow: hidden; color:rgba(88, 85, 88, 0.57);font-size: .9rem;transition: all .5s; }
.relatedNav a:hover{color:black;font-size: 1rem; }

@media (min-width: 700px) {
    .artcontent{background:rgb(248, 248, 248);padding:0 1rem .5rem;}
}
</style>
