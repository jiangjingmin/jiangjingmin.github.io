(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(t,a,s){t.exports=s.p+"assets/img/etag.cf0c1020.jpg"},534:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),n("p",[t._v("浏览器 lighthouse")]),t._v(" "),n("h3",{attrs:{id:"_6-性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-性能优化"}},[t._v("#")]),t._v(" 6. 性能优化")]),t._v(" "),n("h4",{attrs:{id:"_6-1-打包优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-打包优化"}},[t._v("#")]),t._v(" 6.1 打包优化")]),t._v(" "),n("ul",[n("li",[t._v("webpack-loader，dll，happypack，压缩代码，tree shaking，scope hoisting，code splitting")]),t._v(" "),n("li",[t._v("图片basee64，cdn")])]),t._v(" "),n("h4",{attrs:{id:"_6-2-网络优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-网络优化"}},[t._v("#")]),t._v(" 6.2 网络优化")]),t._v(" "),n("p",[t._v("DNS，CDN，缓存，preload/prefetch/懒加载，ssr")]),t._v(" "),n("h4",{attrs:{id:"_6-3-代码优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-代码优化"}},[t._v("#")]),t._v(" 6.3 代码优化")]),t._v(" "),n("p",[t._v("loading/骨架屏，web worker，虚拟列表，懒加载，dom/style批量更新。。。")]),t._v(" "),n("h2",{attrs:{id:"初始阶段-加载优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始阶段-加载优化"}},[t._v("#")]),t._v(" 初始阶段 -> 加载优化")]),t._v(" "),n("ol",[n("li",[t._v("首页加载慢的优化\n"),n("ul",[n("li",[t._v("对于图片可以懒加载，减少首屏图片加载量。以及对于小图标和小图片分别使用 iconfont 和雪碧图来解决，最大程度减少首屏图片数量，从而提升首页渲染性能")]),t._v(" "),n("li",[t._v("对于其他资源可以通过打包（nginx combo 或者 webpack 打包）来合并资源，并可以通过懒加载路由的方式来减少首页 JS 的加载量")]),t._v(" "),n("li",[t._v("减小资源的方式可以通过压缩和混淆加密来减小文件体积，图片则可以使用工具压缩或者使用 webp 格式")]),t._v(" "),n("li",[t._v("同时可在服务器端开启 gzip 压缩来最大化减少所有文件体积")])])]),t._v(" "),n("li",[t._v("优化图片的做法\n"),n("ul",[n("li",[t._v("可以通过懒加载减少图片的请求，或者通过雪碧图来合并图片，以及将小图片转化成 base64 的格式，来解决多的问题")]),t._v(" "),n("li",[t._v("图片大的问题，可以通过自动化压缩工具来压缩图片，或者使用 webp 格式的图片")])])]),t._v(" "),n("li",[t._v("实现 webpack 打包优化\n"),n("ul",[n("li",[t._v("可以通过设置 mode=production 来默认实现 webpack 对代码的混淆和压缩，从而最大程度的减少代码体积")]),t._v(" "),n("li",[t._v("使用 webpack + dynamic import 并结合路由的入口文件做拆包处理")]),t._v(" "),n("li",[t._v("并且可以设定一些打包策略，并配合网络缓存做最终的加载性能优化")])])]),t._v(" "),n("li",[t._v("实现 CDN 加速\n"),n("ul",[n("li",[t._v("CDN 服务器主要是用来放静态资源的服务器，可以用来加速静态资源的下载")]),t._v(" "),n("li",[t._v("CDN 之所以能够加速，是因为会在很多地方都部署 CDN 服务器，如果用户需要下载静态资源，会自动选择最近的节点下载")]),t._v(" "),n("li",[t._v("同时由于 CDN 服务器的地址一般都跟主服务器的地址不同，所以可以破除浏览器对同一个域名发送请求的限制")])])])]),t._v(" "),n("h2",{attrs:{id:"运行阶段-渲染优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行阶段-渲染优化"}},[t._v("#")]),t._v(" 运行阶段 -> 渲染优化")]),t._v(" "),n("ol",[n("li",[t._v("渲染十万条数据如何不卡顿\n"),n("ul",[n("li",[t._v("可以使用 document.createDocumentFragment 创建虚拟节点，从而避免引起没有必要的渲染")]),t._v(" "),n("li",[t._v("当所有的 li 都创建完毕后，一次性把虚拟节点里的 li 标签全部渲染出来")]),t._v(" "),n("li",[t._v("可以采取分段渲染的方式，比如一次只渲染一屏的数据")]),t._v(" "),n("li",[t._v("最后使用 window.requestAnimationFrame 来逐帧渲染")])])])]),t._v(" "),n("h2",{attrs:{id:"网站性能优化可以从按几个维度或者方面进行优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网站性能优化可以从按几个维度或者方面进行优化"}},[t._v("#")]),t._v(" 网站性能优化可以从按几个维度或者方面进行优化？")]),t._v(" "),n("ol",[n("li",[t._v("减少HTTP请求的数量：因为三次握手，浏览器请求资源文件的限制")]),t._v(" "),n("li",[t._v("控制资源文件的加载优先级：css放在头部，js放在尾部")]),t._v(" "),n("li",[t._v("利用浏览器缓存：")])]),t._v(" "),n("h2",{attrs:{id:"打包依赖图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包依赖图"}},[t._v("#")]),t._v(" 打包依赖图")]),t._v(" "),n("p",[t._v("插件 webpack-bundle-analyzer")]),t._v(" "),n("h2",{attrs:{id:"如何计算白屏时间和首屏渲染时间-如何优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何计算白屏时间和首屏渲染时间-如何优化"}},[t._v("#")]),t._v(" 如何计算白屏时间和首屏渲染时间？如何优化")]),t._v(" "),n("h2",{attrs:{id:"如果页面出现白屏如何排查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果页面出现白屏如何排查"}},[t._v("#")]),t._v(" 如果页面出现白屏如何排查")]),t._v(" "),n("h2",{attrs:{id:"cdn-的原理-cdn-选择最近的缓存服务器是怎么实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cdn-的原理-cdn-选择最近的缓存服务器是怎么实现"}},[t._v("#")]),t._v(" CDN 的原理，CDN 选择最近的缓存服务器是怎么实现")]),t._v(" "),n("h2",{attrs:{id:"nginx-对前端的性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-对前端的性能优化"}},[t._v("#")]),t._v(" nginx 对前端的性能优化")]),t._v(" "),n("p",[t._v("当面试问前端性能优化的时候，大多数是 nginx 优化，而 nginx 又不属于前端的东西，面试官想要你说开启 gzip、开启 etag，却又说他们不考后台的知识")]),t._v(" "),n("h3",{attrs:{id:"开启-gzip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启-gzip"}},[t._v("#")]),t._v(" 开启 gzip")]),t._v(" "),n("p",[t._v("vue 项目 build 的时候如果需要生成 gz 文件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参考: https://www.cnblogs.com/zigood/p/12504401.html")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://webpack.docschina.org/plugins/compression-webpack-plugin/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm i -D compression-webpack-plugin")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// compression   /kəmˈpreʃn/ 压缩")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compression-webpack-plugin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.js$|\\.html$|\\.css")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            threshold"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            deleteOriginalAssets"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("弄好 gz 文件后，还需要 nginx 支持")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("location / {\n        root e:\\workgit\\abc;\nerror_page 405 =200 http://$host:8085/$request_uri;\n            gzip on;\n            gzip_static on;\n            gzip_http_version 1.1;\n            gzip_comp_level 3;\n            gzip_types text/plain application/json application/x-javascript application/css application/xml application/xml+rss text/javascript application/x-httpd-php image/jpeg image/gif image/png image/x-ms-bmp;\n        index  index.html index.htm;\n        try_files $uri $uri/ @rewrites;\n    }\n\n    location @rewrites {\n    rewrite ^(.*)$ /index.html last;\n}\n")])])]),n("h3",{attrs:{id:"开启-etag"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启-etag"}},[t._v("#")]),t._v(" 开启 Etag")]),t._v(" "),n("p",[t._v("Etag 全称 EntityTags")]),t._v(" "),n("p",[n("img",{attrs:{src:s(371),alt:"Etag"}})]),t._v(" "),n("p",[t._v("Expires(HTTP/1.0)/Cache-Control(HTTP/1.1) Header 是控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据。")]),t._v(" "),n("p",[t._v("只是 Cache-Control 比 Expires 可以控制的多一些， 而且 Cache-Control 会重写 Expires 的规则。")]),t._v(" "),n("p",[t._v("Last-Modified/If-Modified-Since 和 ETag/If-None-Match 是浏览器发送请求到服务器后判断文件是否已经修改过，如果没有修改过就只发送一个 304 回给浏览器，告诉浏览器直接从自己本地的缓存取数据；如果修改过那就整个数据重新发给浏览器。")]),t._v(" "),n("h3",{attrs:{id:"项目中使用到的icon是如何处理的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目中使用到的icon是如何处理的"}},[t._v("#")]),t._v(" 项目中使用到的icon是如何处理的？")]),t._v(" "),n("ol",[n("li",[t._v("本地图标（雪碧图）： 放大失真、需要计算图标位置、只能做背景图")]),t._v(" "),n("li",[t._v("iconfont 字体图标：矢量图放大不会失真、第三方支持丰富")]),t._v(" "),n("li",[t._v("svg 图标：可以直接替代img使用")])])])}),[],!1,null,null,null);a.default=e.exports}}]);