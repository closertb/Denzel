<script>
import {fetchInitOption,reqUrl} from '../js/tool.js';
import router from '../router' ;
import {versionTemp} from '../js/component/template.js';
export default {
    render:function(createElement){
        return versionTemp(createElement,this.items);
    },
    data:function(){
        return {items:[]}
    },     
    beforeRouteEnter(to, from, next){
        next(function(k){  
        const art =document.querySelector('.mcontent');  
        art.classList.toggle('waitflag');
        fetch(reqUrl+'/BlogServlet', fetchInitOption({flag:"getVersionInfo"}))
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
.skcontainer{color: blueviolet;margin:0 auto;;padding:60px 5px 0 8em;max-width:800px;} 
.skitem {overflow-x: visible;box-sizing: border-box; padding-top:50px;min-height: 80px;margin-top:10px;position: relative;list-style-type: none;}
.skborder {position: absolute;left:-18px;top: 0px; width: 30px;height: 30px;border: 5px solid blueviolet;border-radius: 50%;z-index: 1;} 
.skline {display:block;height:80px;width:20px;border-left: 5px solid blueviolet;}
.skitem:last-child .skline{border-left:0;}  
.skdot {display: inline-block;position: relative;left:10px; width: 0;height: 0x;border-radius: 50%;z-index: 10;margin: 9px auto;border: 5px solid blueviolet;}
.skcontent{position: absolute;display: inline-block;top:.1em;left:1.5em;font-size: 1.3rem;font-weight: 400;}
.skversion {padding-right: .4em;}
.skdate{position: absolute;left: -11.5em;top: 10px;text-align:right;width: 10em;color: blueviolet;font-size: 1em;} 
</style>