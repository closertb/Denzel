<template>
     <div>
        <section id="intro">
            <div class="content">
            <h1>个人简介</h1>
            <div class="info">
                <ul class="simple">
                    <li> <span>姓名</span>| 唐波--Denzel</li>
                    <li> <span>手机</span>| 18628921913</li>
                    <li> <span>邮箱</span>| closertb@163.com</li>
                    <li> <span>学历</span>| 本科</li>
                    <li> <span>所在地</span>| 成都</li>
                    <li><span>Github</span><a href="https://github.com/closertb">| 点击访问</a></li>
                    <li><span>技术博客</span><a href="https://segmentfault.com/u/denzel">| 点击访问</a></li>
                </ul>
                <ul class="detail">
                    <p>我是一个性格幽默、做事认真的人；喜欢接触各种机器语言，对编程有百分之一百二的热情；
                         无论是工作还是生活，都有自己的计划，有很强的时间概念，能在约定时间内保质保量的完成任务。</p>
                    <p>两年WEB开发经验，掌握基本的JAVA WEB后端开发技能，熟练掌握HTML,JavaScript,CSS前端基础语言，熟悉jQuery框架，能熟练应用jQuery开发
                        前后端分离、具有向下兼容且可靠性教高的WEB应用，具备jQuery插件开发能力。
                    </p>
                </ul>
            </div>
            </div>
        </section>
        <section id="skill">
            <h1>掌握技能</h1>
            <div>
                <ul>
                    <h3>语言</h3>
                    <li><span>HTML</span><myProbar barWidth="85%"></myProbar></li>
                    <li><span>JavaScript</span><myProbar barWidth="85%"></myProbar></li>
                    <li><span>CSS</span><myProbar barWidth="70%"></myProbar></li>
                    <li><span>JAVA</span><myProbar barWidth="80%"></myProbar></li>
                    <li><span>SQL</span><myProbar barWidth="70%"></myProbar></li>
                    <li><span>C</span><myProbar barWidth="75%"></myProbar></li>                                                        
                 </ul>
                <ul>
                    <h3>框架</h3>
                    <li><span>jQuery</span><myProbar barWidth="90%"></myProbar></li>
                    <li><span>SSH2框架</span><myProbar barWidth="85%"></myProbar></li>
                    <li><span>Vue.js</span><myProbar barWidth="60%"></myProbar></li> 
                    <li><span>BootStrap</span><myProbar barWidth="45%"></myProbar></li>  
                 </ul>
                <ul>
                    <h3>开发工具及其他</h3>
                    <li><span>Myclipse</span><myProbar barWidth="85%"></myProbar></li>
                    <li><span>VS Code</span><myProbar barWidth="80%"></myProbar></li>
                    <li><span>MySql</span><myProbar barWidth="80%"></myProbar></li> 
                    <li><span>Oracle</span><myProbar barWidth="65%"></myProbar></li>      
                </ul>                 
            </div>
        </section>
         <section id="exp">
            <h1>工作经历</h1>
            <div></div>
        </section>
         <section id="proj">
            <h1>项目经验</h1>
            <div></div>
        </section>   
      </div>  
</template>
<script>
import Probar from "./processBar"
export default{
    name: 'processBar',
    components:{
        "myProbar":Probar
    }
}
</script>
<style scoped>
    *{
        color:white;
        font-family:"Microsoft YaHei";
        font-size: 18px;
    }
            a{text-decoration:none; color:white;} 
            section{width:100%;height:100%;}
            section>div{width:1140px;margin:0 auto;}    
            h1{text-align:center;font-size: 46px;}   
            ul{display: inline-block;margin-top:80px;}
            li{list-style-type:none;line-height:28px;}
            h3{text-align:center;font-size: 23px;}
            #intro{background:#1889C5;padding:60px 0 100px;} 
            .info{width:100%;} 
            .simple{width:30%;margin-left:70px;}
            .simple li{margin:10px 0;}
            li span{text-align:right;width:100px;display: inline-block;}
            .detail{clear:both;width:50%;margin-left:50px;vertical-align: top;}
            .detail p{padding-top:10px;margin-bottom:30px;line-height:32px;}
            #skill{background:#129DE7;padding:60px 0 100px;} 
            #skill ul{width:30%;height:240px;margin-left:30px;background: plum;vertical-align: top;}
            #skill h3{margin: 10px 0;}
            #exp{background:#26B1B6;padding:60px 0 100px;}  
            #proj{background:#9C58B6;padding:60px 0 100px;}   
</style>