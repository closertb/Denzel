<template>
     <div>
        <section id="intro">
            <div class="content">
            <h1>个人简介</h1>
            <div class="info">
                <ul class="simple">
                    <li> <span>姓名</span>| **--Denzel</li>
                    <li> <span>手机</span>| 18628921***</li>
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
          <section id="proj">
            <h1>项目经验</h1>
            <div class="space"></div>
            <div class="skitem">
                <div class="skborder">
                    <div class="skdot"></div>
                </div>
                <h3>试验状态控制分析系统</h3>
                <div class="skdate">2017.02-至今</div>
                <div class="sum"><b>关键词：</b>jQuery插件,zTree,jPlot,SSH2，多线程</div>
                <ul class="skdetail">
                    <li>使用jQuery插件中的AutoSuggest,zTree,Tab等插件,丰富了页面表现形式，提升了用户交互</li>
                    <li>采用SSH2框架实现后端行为、业务和数据操作的代码分离，但也体会到小系统用大框架的杀鸡焉用牛刀的无奈</li>
                    <li>配置Listener,启用后台独立线程，实现数据运算和中间库的数据更新</li>
                    <li>采用jPlot绘制饼图，曲线图，直观反应当前数据状态</li>    
                    <li>在JS编程上，引入模块化，规范了函数的命名</li>     
                    <li>深入应用Jsrender,提高代码的复用度</li>                                                        
                </ul>
            </div>
              <div class="skitem">
                <div class="skborder">
                    <div class="skdot"></div>
                </div>
                <h3>质量考试管理系统重构</h3>
                <div class="skdate">2016.12-2017.01</div>
                <div class="sum"><b>关键词：</b>JsRender模板,非侵扰式设计,前后端分离</div>
                <ul class="skdetail">
                    <li>前端页面采用非侵扰式设计，实现样式，控制和表现代码分离，采用$.ready()和Ajax实现部分页面前后端分离</li>
                    <li>采用Jsrender实现试题模板化，脱离了对JSTL语言的依赖</li>
                    <li>采用Ajax实现答题计时，和到达时间的试卷自动提交</li> 
                    <li>采用JS在浏览器端对试卷检查、提交、结果计算、并对答题结果复现，降低了服务器端线程的压力</li> 
                    <li>采用Oracle数据库，学习利用sequence和trigger实现ID自增</li>
                    <li>本次重构,将原有的30个页面压缩到5个,采用非侵扰式设计，提高了代码的复用和可读性，提高了开发效率</li>                                        
                </ul>
            </div>           
             <div class="skitem">
                <div class="skborder">
                    <div class="skdot"></div>
                </div>
                <h3>工艺指示单管理系统</h3>
                <div class="skdate">2016.06-2016.11</div>
                <div class="sum"><b>关键词：</b>jQuery,单点登录,freeMaker,Ajax,响应式页面</div>                
                <ul class="skdetail">
                    <li>引入嵌入式CSS，实现响应式页面的设计，并实现标签与样式彻底分离，并学会了对Chrome开发者工具的使用</li>                   
                    <li>依赖jQuery，采用纯JS控制页面逻辑，摒弃了在前端页面引入JAVA脚本控制页面的混杂模式</li>
                    <li>小范围引入Ajax异步请求，减少了Form表单的提交与页面跳转，提高了用户交互性能</li>
                    <li>使用正则表达式检查表单提交,使工艺输入标准化，格式化</li>
                    <li>利用FreeMaker模板引擎，使工艺文件输出标准化，快速化</li>     
                    <li>应用WebService技术，实现和公司权限管理系统的单点登录</li>                                   
                </ul>
            </div>
             <div class="skitem">
                <div class="skborder">
                    <div class="skdot"></div>
                </div>
                <h3>质量考试管理系统</h3>
                <div class="skdate">2015.11-2016.05</div>
                <div class="sum"><b>关键词：</b>jsp+servlet+JavaBean,JavaScript,JSTL</div>               
                <ul class="skdetail">
                    <li>依靠Mysql数据库，采用JAVA Web MVC经典模式开发</li>
                    <li>前台页面逻辑依赖于JAVA脚本与JSTL语法</li>
                    <li>采用JavaScript对试卷提交前的完整性检查，并定位未答题目</li>
                    <li>后台解析试题，对试题重新打包发送到前端，实现答题结果复现</li>                   
                </ul>
            </div>                                 
        </section>       
        <section id="skill">
            <h1>掌握技能</h1>
            <div>
                <ul>
                    <h3>语言</h3>
                    <li v-for="tag of langTags"><span>{{tag.name}}</span><myProbar :barWidth="tag.value"></myProbar></li>                                                     
                 </ul>
                <ul>
                    <h3>框架</h3>
                    <li v-for="tag of frameTags"><span>{{tag.name}}</span><myProbar :barWidth="tag.value"></myProbar></li>
                 </ul>
                <ul>
                    <h3>开发工具及其他</h3>
                    <li v-for="tag of othersTags"><span>{{tag.name}}</span><myProbar :barWidth="tag.value"></myProbar></li>
                </ul>                 
            </div>
        </section>

         <section id="exp">
            <h1>工作经历</h1>
            <div>
                <canvas id="myPlot" width="600px" height="300px"></canvas>
            </div>
        </section>
      </div>  
</template>
<script>
import Probar from "./processBar"
export default{
    data(){
        return {
            langTags:[
                {name:"HTML",value:"85%"},
                {name:"JavaScript",value:"85%"},
                {name:"CSS",value:"75%"}, 
                {name:"JAVA",value:"80%"}, 
                {name:"SQL",value:"70%"},
                {name:"C",value:"75%"}                
                ],
            frameTags:[
                {name:"jQuery",value:"90%"},
                {name:"SSH2",value:"75%"},
                {name:"Vue.js",value:"60%"}, 
                {name:"BootStrap",value:"60%"},              
                ], 
            othersTags:[
                {name:"Myclipse",value:"85%"},
                {name:"VS Code",value:"80%"},
                {name:"MySql",value:"80%"}, 
                {name:"Oracle",value:"65%"},
                {name:"Git",value:"60%"},              
                ],                                
        }
    },
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
#proj{background:#26B1B6;padding:60px 0 100px;}
.space{height:40px;width:100%;}
.skitem {
    box-sizing: border-box;
    width:60%;
    border-left: 5px solid;
    padding-left: 40px;
    position: relative;
    margin-top: 50px;
}
.skborder {
    position: absolute;
    left: -23px;
    top: -45px;
    width: 40px;
    height: 40px;
    border: 5px solid white;
    border-radius: 50%;
    z-index: 1;
} 
.skdot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 10;
    margin: 9px auto;
    border: 5px solid white;
}
.skitem h3{
    position: absolute;
    top:-42px;
    left:25px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.5em;
    display: inline-block;
    text-align: left;
    font-weight: 400;
    line-height: 1.25;
    margin: 0 0 0.25em;
}
.skdate{
    position: absolute;
    left: -208px;
    top: -34px;
    text-align:right;
    min-width: 180px;
    color: white;
    font-size: 0.8em;    
} 
.sum{color:wheat;font-size: 0.8em}
.skdetail{
    margin-top:10px;
    padding-top:0;
    top:3px;
} 
.skdetail li{    
    list-style-type: disc;
    line-height: 1.5em;
    margin-bottom: 0.5em;} 
</style>