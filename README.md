# hellovue

> it's a new start

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
cnpm run dev

#add some other package
like:vuex
cnpm install vuex --save  
like JQUERY
cnpm install jquery --save 
#添加jQuery 支持，你还需要做点工作#
#在build文件夹下有一个webpack.base.conf文件
#在头部添加：var webpack = require('webpack')
#在modle.exports新增plugins属性
plugins:[ 
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "windows.jQuery": "jquery"
  })    
  ],
 # 修改alias属性，新增：
jquery: "jquery/src/jquery"     

# build for production with minification
cnpm run build

#学习笔记
##4.04 学习了模板，组件，组件的局部引用与全局引用 
#export 与 import 之间的关系

#4.08 
vue-router学习：

#4.10
vuex学习
store是vue中状态管理的关键字，不能自定义全局状态组件变量名如MYstore来代替store
{state,mutations,actions,getters,modules} 而modules作为容器，又可以将一个store划分成多个模块
actions只是一个中间过程，并没法直接修改state的值，只有mutations可以修改state的值。
语法糖 mapState，mapGetters，mapActions，mapMutations 的使用

4.10

4.28
想学node.js写服务端的，半天没入门，仔细一看，原来还是后端开发，不是想的那样，暂时放弃，继续深入学vue

4.29
项目静态发布 cnpm run build 
得到的项目包dist包含【static,index.html】，项目中css，js中文件的引用是基于服务器根路径（like localhost:80/与localhost:8080/），要改变这种情况，需要配置config/index.js中的assetsPublicPath: '',将其修改为后端项目的项目名，并将dist目录下，放在项目的根路径，并将其config/index.js修改为assetsPublicPath: '/yourWebProgram/'，
还存在一些问题：比如刷新，页面渲染不正确，也router的配置相关

子件与组件件的通信（props down会了,events up开始学）
$(on)(eventName) 父件监听
$emit(eventName) 子件触发 具体操作
子件actions触发函数采用this.$emit('childEvent',msg)上报事件并传递msg参数给父件
父件中引用子件时，采用v-on绑定子件事件名，并为其配置相应的处理函数dealMethod
<childComponent v-on:childEvent='dealMethod'></childComponent> 
非父子组件之间的通信，采用bus，思路同父子之间很像
第一步：建立全局BUS (eventBus.js(自由命名))
import Vue from 'vue'
export default new Vue()

第二步：分别在两个组件中引入BUS
import bus from enentBus.js

第三步：
触发：
bus.$emit(eventName，msg)

第四步：在另一个组件创建的钩子中监听事件
  created(){
    bus.$on("showDetail",function(msg){
      console.log("got bus"+msg);
    });
  },

  另外一个知识点：
  computed:可以绑定多个参数作为监听输入,只要其中一个改变，就会启动重新计算结果值


5.01
vue-resouce:与$.ajax()相似度很高，options配置作为输入，支持Promise
 $.ajax()：      var loginFlag=false; //false
            $.ajax({
                type:"post",
                url:"http://localhost:80/StockAnalyse/LoginServlet",
                data:"flag=ajaxlogin&loginName="+user.name+"&loginPwd="+user.id,
                async:false, //这里没有用promise，须设置为同步，
                dataType:"json",
                success:function(data){
                  loginFlag=true;
                },
                erro:function(){
                  console.log("something wrong");
                }
             });    
              if(loginFlag){
               commit("userSignin", user);  
             }    
 ########这是分界线#############
         Vue.http({
          method:"post",
          url:"http://localhost:80/StockAnalyse/LoginServlet",       
          params:{"flag":"ajaxlogin","loginName":user.name,"loginPwd":user.id}, 
          headers: {"X-Requested-With": "XMLHttpRequest"},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}, //这个很重要
          credientials:false, 
          emulateJSON: true     
        }).then(function(response){
          console.log(response.data);
          commit("userSignin", user); 
        },function(response){
          console.log("game over");
        });     

##5.03
关于VUEW ACTION 传参的问题 this.$store.dispatch(type: string, payload?: any, options?: Object)  
中文：https://vuex.vuejs.org/zh-cn/actions.html
英文：https://vuex.vuejs.org/en/api.html#vuexstore-instance-methods
大概理解：dispatch默认只接受两个参数，第一个是要分发代理的action名称，第二个为要传递的参数
所以当写下userSignin:function({commit},recieve,callback)这个函数时，使用mapActions调用
this.userSignin(user,function(){})时，总是报Callback没有定义,原因就在于此；
解决方法：把user和callback写在一个对象中，然后传参调用。

##5.05-5.06
SelectSroll 插件：源码地址：https://github.com/closertb/Denzel/tree/master/docs/selectScroll
依赖：本插件使用依赖jQuery.js和iScroll.js
作用: 可以用于三级实物的联动选择（比如：日期，时间，地理位置，班级属性）
#功能配置：theme
选择不同功能时，配置相应的theme:(日期(date)，时间(time)，其他（others）)
#插件打开时默认的选择项配置{initGrand:"四川" ,initParent:"成都" ,initChild:"金牛区"}
可通过配置比如initGrand:"四川" ,initParent:"成都" ,initChild:"金牛区" 
如果未配置，日期时间自动定位到当时的日期时间，而其他的在没配置且从未输入时，会定位到数据源第一项
#数据源配置：source
日期时间功能时，插件提供数据源，当为其他项时，要为其配置数据源source
#标题设置：title
可为你要使用的功能配置标题，以便第一眼知道插件的功能
eg：title:"请选择日期"

#完整调用示例
	$.getJSON("city.js",function(data){
		$('#beginlocation').selectScroll({theme:"city",attatchObject:"#footer",title:"请选择城市",
		initGrand:"四川" ,initParent:"成都" ,initChild:"金牛区" ,source:data});		
	});
	$('#beginDate').selectScroll({theme:"date",attatchObject:"#footer",title:"请选择日期"});	

	$('#beginTime').selectScroll({theme:"time",attatchObject:"#footer",title:"请选择时间"});
	$('#beginClass').selectScroll({theme:"others",attatchObject:"#footer",title:"请选择人员",
#具体使用可查看源码地址

















# build for production and view the bundle analyzer report
cnpm run build --report
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
