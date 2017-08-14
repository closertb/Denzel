<script>
import {fetchInitOption,reqUrl} from '../js/tool.js';
import {itemTemp} from '../js/component/template.js';
import router from '../router';
export default {
    render:function(createElement){
        return itemTemp(createElement,this);
    },
    data:function(){ 
        return {items:[
            {
                tid:1,
                count:0,
                list:[
                    {
                        index:0,
                        username:' ',
                        postdate:' ',
                        itemName:' ',
                        title:' '
                    }
                ]
            }
        ]}
    },
    methods:{
        gotodetail:function(num){
            router.push({path: '/coninfo',query:{arcindex:num}});
        },
    },
    beforeRouteEnter(to, from, next){
        next(function(k){  
    //    let flag = k.$route.query;
        let flag = k.$route.query.flag;
        const art =document.querySelector('.mcontent');  
        art.classList.toggle('waitflag');
        fetch(reqUrl+'/BlogServlet', fetchInitOption({flag:flag}))
        .then(function(response){
                if(response.ok){
                    return response.json();
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            }).then(function(data){
                k.items =data;
                art.classList.remove('waitflag');
            })                
        });
    }    
}
</script>
<style scoped>
/*这里定义模板详情页下方上下篇导航时的样式*/
.relatedNav{padding:.3rem .1rem;border-top: 1px solid rgb(238, 238, 238); }
.relatedNav div{display: flex;height:1.4rem; justify-content: space-between;color:rgba(88, 85, 88, 0.57);font-size:1rem }
.relatedNav div+div{ margin-top:.3rem;}
.relatedNav a {display:inline-block; max-width:49%;overflow: hidden; color:rgba(88, 85, 88, 0.57);font-size: .9rem;transition: all .5s; }
.relatedNav a:hover{color:black;font-size: 1rem; }

.item-list {margin:1rem 0;}  
.item-list + .item-list {margin-top: 2rem;}
.item-list h3 {margin:0;}
.item-list h3 label {display: inline-block;margin:.5rem;}
.item-list h3 span::before {content: '(';}
.item-list h3 span::after {content: ')';}
.item-list ul {margin:0 1.5rem;}
.item-list li{list-style-type:none;margin:.5rem 0;}
.item-list li a {padding-left:.3rem;color:#5d686f;text-decoration: none;}
.item-list li a:hover{cursor: pointer;color:#64b5f6; } 
.item-list li a {transition: all .35s }
.item-list li span::before {padding:0 .2rem 0 .4rem;content: '-'}
.item-list li span { color: #9eabb3;}   
.router-link-active {color: red;background-image: url('../assets/js.png'); }
.jsimg::before {content:'';background: url('../assets/js.png') no-repeat;background-size: 3rem;width:3rem;height:3rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.jsimg::after {content:'JavaScript';}
.cssimg::before {content:'';background: url('../assets/css.png') no-repeat;background-size: 3rem;width:3rem;height:3rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.cssimg::after {content:'CSS Style';}
.htmlimg::before {content:'';background: url('../assets/front.png') no-repeat;background-size: 3rem;width:3rem;height:3rem;display: inline-block;vertical-align: middle;margin-right:.3rem}
.htmlimg::after {content:'前端综合';}
</style>
