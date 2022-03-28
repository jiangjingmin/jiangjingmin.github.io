(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{587:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-spa首屏加载速度慢的怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-spa首屏加载速度慢的怎么解决"}},[t._v("#")]),t._v(" 面试官：SPA首屏加载速度慢的怎么解决？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/24617c00-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"一、什么是首屏加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是首屏加载"}},[t._v("#")]),t._v(" 一、什么是首屏加载")]),t._v(" "),a("p",[t._v("首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容")]),t._v(" "),a("p",[t._v("首屏加载可以说是用户体验中"),a("strong",[t._v("最重要")]),t._v("的环节")]),t._v(" "),a("h3",{attrs:{id:"关于计算首屏时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于计算首屏时间"}},[t._v("#")]),t._v(" 关于计算首屏时间")]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("performance.timing")]),t._v("提供的数据：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("DOMContentLoad")]),t._v("或者"),a("code",[t._v("performance")]),t._v("来计算出首屏时间")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案一：")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first contentful painting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方案二：")]),t._v("\nperformance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// performance.getEntriesByName("first-contentful-paint")[0]')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会返回一个 PerformancePaintTiming的实例，结构如下：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first-contentful-paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entryType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  startTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("507.80000002123415")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"二、加载慢的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、加载慢的原因"}},[t._v("#")]),t._v(" 二、加载慢的原因")]),t._v(" "),a("p",[t._v("在页面渲染的过程，导致加载速度慢的因素可能如下：")]),t._v(" "),a("ul",[a("li",[t._v("网络延时问题")]),t._v(" "),a("li",[t._v("资源文件体积是否过大")]),t._v(" "),a("li",[t._v("资源是否重复发送请求去加载了")]),t._v(" "),a("li",[t._v("加载脚本的时候，渲染内容堵塞了")])]),t._v(" "),a("h2",{attrs:{id:"三、解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[t._v("#")]),t._v(" 三、解决方案")]),t._v(" "),a("p",[t._v("常见的几种SPA首屏优化方式")]),t._v(" "),a("ul",[a("li",[t._v("减小入口文件积")]),t._v(" "),a("li",[t._v("静态资源本地缓存")]),t._v(" "),a("li",[t._v("UI框架按需加载")]),t._v(" "),a("li",[t._v("图片资源的压缩")]),t._v(" "),a("li",[t._v("组件重复打包")]),t._v(" "),a("li",[t._v("开启GZip压缩")]),t._v(" "),a("li",[t._v("使用SSR")])]),t._v(" "),a("h3",{attrs:{id:"减小入口文件体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减小入口文件体积"}},[t._v("#")]),t._v(" 减小入口文件体积")]),t._v(" "),a("p",[t._v("常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue-router")]),t._v("配置路由的时候，采用动态加载路由的形式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ShowBlogs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components/ShowBlogs.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件")]),t._v(" "),a("h3",{attrs:{id:"静态资源本地缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源本地缓存"}},[t._v("#")]),t._v(" 静态资源本地缓存")]),t._v(" "),a("p",[t._v("后端返回资源问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("采用"),a("code",[t._v("HTTP")]),t._v("缓存，设置"),a("code",[t._v("Cache-Control")]),t._v("，"),a("code",[t._v("Last-Modified")]),t._v("，"),a("code",[t._v("Etag")]),t._v("等响应头")])]),t._v(" "),a("li",[a("p",[t._v("采用"),a("code",[t._v("Service Worker")]),t._v("离线缓存")])])]),t._v(" "),a("p",[t._v("前端合理利用"),a("code",[t._v("localStorage")])]),t._v(" "),a("h3",{attrs:{id:"ui框架按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui框架按需加载"}},[t._v("#")]),t._v(" UI框架按需加载")]),t._v(" "),a("p",[t._v("在日常使用"),a("code",[t._v("UI")]),t._v("框架，例如"),a("code",[t._v("element-UI")]),t._v("、或者"),a("code",[t._v("antd")]),t._v("，我们经常性直接引用整个"),a("code",[t._v("UI")]),t._v("库")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TableColumn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MessageBox "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Pagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"组件重复打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件重复打包"}},[t._v("#")]),t._v(" 组件重复打包")]),t._v(" "),a("p",[t._v("假设"),a("code",[t._v("A.js")]),t._v("文件是一个常用的库，现在有多个路由使用了"),a("code",[t._v("A.js")]),t._v("文件，这就造成了重复下载")]),t._v(" "),a("p",[t._v("解决方案：在"),a("code",[t._v("webpack")]),t._v("的"),a("code",[t._v("config")]),t._v("文件中，修改"),a("code",[t._v("CommonsChunkPlugin")]),t._v("的配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("minChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[a("code",[t._v("minChunks")]),t._v("为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件")]),t._v(" "),a("h3",{attrs:{id:"图片资源的压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片资源的压缩"}},[t._v("#")]),t._v(" 图片资源的压缩")]),t._v(" "),a("p",[t._v("图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素")]),t._v(" "),a("p",[t._v("对于所有的图片资源，我们可以进行适当的压缩")]),t._v(" "),a("p",[t._v("对页面上使用到的"),a("code",[t._v("icon")]),t._v("，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻"),a("code",[t._v("http")]),t._v("请求压力。")]),t._v(" "),a("h3",{attrs:{id:"开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[t._v("#")]),t._v(" 开启GZip压缩")]),t._v(" "),a("p",[t._v("拆完包之后，我们再用"),a("code",[t._v("gzip")]),t._v("做一下压缩 安装"),a("code",[t._v("compression-webpack-plugin")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cnmp i compression"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("vue.congig.js")]),t._v("中引入并修改"),a("code",[t._v("webpack")]),t._v("配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为生产环境修改配置...")]),t._v("\n            config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$|\\.html$|\\.css")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//匹配文件名")]),t._v("\n                    threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对超过10k的数据进行压缩")]),t._v("\n                    deleteOriginalAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否删除原文件")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在服务器我们也要做相应的配置 如果发送请求的浏览器支持"),a("code",[t._v("gzip")]),t._v("，就发送给它"),a("code",[t._v("gzip")]),t._v("格式的文件 我的服务器是用"),a("code",[t._v("express")]),t._v("框架搭建的 只要安装一下"),a("code",[t._v("compression")]),t._v("就能使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const compression = require('compression')\napp.use(compression())  // 在其他中间件使用之前调用\n")])])]),a("h3",{attrs:{id:"使用ssr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ssr"}},[t._v("#")]),t._v(" 使用SSR")]),t._v(" "),a("p",[t._v("SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器")]),t._v(" "),a("p",[t._v("从头搭建一个服务端渲染是很复杂的，"),a("code",[t._v("vue")]),t._v("应用建议使用"),a("code",[t._v("Nuxt.js")]),t._v("实现服务端渲染")]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),a("p",[t._v("减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化")]),t._v(" "),a("p",[t._v("下图是更为全面的首屏优化的方案")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session")]),t._v(" "),a("li",[t._v("https://www.chengrang.com/how-browsers-work.html")]),t._v(" "),a("li",[t._v("https://juejin.cn/post/6844904185264095246")]),t._v(" "),a("li",[t._v("https://vue3js.cn/docs/zh")])])])}),[],!1,null,null,null);s.default=e.exports}}]);