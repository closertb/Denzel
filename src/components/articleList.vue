
<script>
import {listTemp} from '../js/component/template.js';
import {fetchInitOption,reqUrl} from '../js/tool.js';
import router from '../router'
export default {
    render:function(createElement){
        return listTemp(createElement,this)
    },
    data: function() {  

        return {    
            items: [{  
                    index:0,
                    username:' ',
                    postdate:' ',
                    itemName:' ',
                    title:' '
            }]
        }    
    },
    beforeRouteEnter(to, from, next){
        next(function(k){  
        const art =document.querySelector('.mcontent');  
        art.classList.toggle('waitflag');      
        fetch(reqUrl+'/BlogServlet', fetchInitOption({flag:"getList"}))
        .then(function(response){
         //   console.log(response);
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
    },
    methods:{
        gotodetail:function(num){
            router.push({path: '/coninfo',query:{arcindex:num}});
        }
    }    
}
</script>
<style scoped>
/*这里定义模板显示文章列表时的样式*/
.arclist {margin-top:.5rem;padding-top:.5rem;border-top: 1px solid rgb(238, 238, 238);transition: all 0.4s;}
.arclist:hover{background: #ddd;cursor:pointer;}

.listInfo {font-size: .9rem;color:grey ;margin:.5rem 0 0 0.3rem;font-weight:500;}
.listInfo span+span {padding-left:.5rem;}
.listTitle {margin:.3rem 0; padding:.5rem 0;font-size: 1.2rem;margin-left:0.3rem;font-weight:600;}
</style>
