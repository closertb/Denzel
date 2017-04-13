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

# build for production and view the bundle analyzer report
cnpm run build --report
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
