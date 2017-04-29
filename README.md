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


















# build for production and view the bundle analyzer report
cnpm run build --report
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
