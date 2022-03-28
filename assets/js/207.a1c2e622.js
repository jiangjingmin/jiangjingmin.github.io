(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{602:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[t._v("#")]),t._v(" 面试官：vue项目本地开发完成后部署到服务器后报404是什么原因呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/002c9320-4f3e-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"一、如何部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、如何部署"}},[t._v("#")]),t._v(" 一、如何部署")]),t._v(" "),a("p",[t._v("前后端分离开发模式下，前后端是独立布署的，前端只需要将最后的构建物上传至目标服务器的"),a("code",[t._v("web")]),t._v("容器指定的静态目录下即可")]),t._v(" "),a("p",[t._v("我们知道"),a("code",[t._v("vue")]),t._v("项目在构建后，是生成一系列的静态文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgkr2.cn-bj.ufileos.com/b9d13e56-f859-4b4b-a9da-a703a34c2f5d.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=m1qDXRSFHrfXlnAtAlVhjoLKP70%253D&Expires=1609927181",alt:""}})]),t._v(" "),a("p",[t._v("常规布署我们只需要将这个目录上传至目标服务器即可")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" 上传 user为主机登录用户，host为主机外网ip, xx为web容器静态资源路径\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" dist.zip user@host:/xx/xx/xx\n")])])]),a("p",[t._v("让"),a("code",[t._v("web")]),t._v("容器跑起来，以"),a("code",[t._v("nginx")]),t._v("为例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  www.xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index  /data/dist/index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置完成记得重启"),a("code",[t._v("nginx")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("// 检查配置是否正确\nnginx -t \n\n// 平滑重启\nnginx -s reload\n")])])]),a("p",[t._v("操作完后就可以在浏览器输入域名进行访问了")]),t._v(" "),a("p",[t._v("当然上面只是提到最简单也是最直接的一种布署方式")]),t._v(" "),a("p",[t._v("什么自动化，镜像，容器，流水线布署，本质也是将这套逻辑抽象，隔离，用程序来代替重复性的劳动，本文不展开")]),t._v(" "),a("h2",{attrs:{id:"二、404问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、404问题"}},[t._v("#")]),t._v(" 二、404问题")]),t._v(" "),a("p",[t._v("这是一个经典的问题，相信很多同学都有遇到过，那么你知道其真正的原因吗？")]),t._v(" "),a("p",[t._v("我们先还原一下场景：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vue")]),t._v("项目在本地时运行正常，但部署到服务器中，刷新页面，出现了404错误")])]),t._v(" "),a("p",[t._v("先定位一下，HTTP 404 错误意味着链接指向的资源不存在")]),t._v(" "),a("p",[t._v("问题在于为什么不存在？且为什么只有"),a("code",[t._v("history")]),t._v("模式下会出现这个问题？")]),t._v(" "),a("h3",{attrs:{id:"为什么history模式下有问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么history模式下有问题"}},[t._v("#")]),t._v(" 为什么history模式下有问题")]),t._v(" "),a("p",[a("code",[t._v("Vue")]),t._v("是属于单页应用（single-page application）")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("SPA")]),t._v("是一种网络应用程序或网站的模型，所有用户交互是通过动态重写当前页面，前面我们也看到了，不管我们应用有多少页面，构建物都只会产出一个"),a("code",[t._v("index.html")])]),t._v(" "),a("p",[t._v("现在，我们回头来看一下我们的"),a("code",[t._v("nginx")]),t._v("配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以根据 "),a("code",[t._v("nginx")]),t._v(" 配置得出，当我们在地址栏输入 "),a("code",[t._v("www.xxx.com")]),t._v(" 时，这时会打开我们 "),a("code",[t._v("dist")]),t._v(" 目录下的 "),a("code",[t._v("index.html")]),t._v(" 文件，然后我们在跳转路由进入到 "),a("code",[t._v("www.xxx.com/login")])]),t._v(" "),a("p",[t._v("关键在这里，当我们在 "),a("code",[t._v("website.com/login")]),t._v(" 页执行刷新操作，"),a("code",[t._v("nginx location")]),t._v(" 是没有相关配置的，所以就会出现 404 的情况")]),t._v(" "),a("h3",{attrs:{id:"为什么hash模式下没有问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么hash模式下没有问题"}},[t._v("#")]),t._v(" 为什么hash模式下没有问题")]),t._v(" "),a("p",[a("code",[t._v("router hash")]),t._v(" 模式我们都知道是用符号#表示的，如  "),a("code",[t._v("website.com/#/login")]),t._v(", "),a("code",[t._v("hash")]),t._v(" 的值为 "),a("code",[t._v("#/login")])]),t._v(" "),a("p",[t._v("它的特点在于："),a("code",[t._v("hash")]),t._v(" 虽然出现在 "),a("code",[t._v("URL")]),t._v(" 中，但不会被包括在 "),a("code",[t._v("HTTP")]),t._v(" 请求中，对服务端完全没有影响，因此改变 "),a("code",[t._v("hash")]),t._v(" 不会重新加载页面")]),t._v(" "),a("p",[a("code",[t._v("hash")]),t._v(" 模式下，仅 "),a("code",[t._v("hash")]),t._v(" 符号之前的内容会被包含在请求中，如 "),a("code",[t._v("website.com/#/login")]),t._v(" 只有 "),a("code",[t._v("website.com")]),t._v(" 会被包含在请求中 ，因此对于服务端来说，即使没有配置"),a("code",[t._v("location")]),t._v("，也不会返回404错误")]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("看到这里我相信大部分同学都能想到怎么解决问题了，")]),t._v(" "),a("p",[t._v("产生问题的本质是因为我们的路由是通过JS来执行视图切换的，")]),t._v(" "),a("p",[t._v("当我们进入到子路由时刷新页面，"),a("code",[t._v("web")]),t._v("容器没有相对应的页面此时会出现404")]),t._v(" "),a("p",[t._v("所以我们只需要配置将任意页面都重定向到 "),a("code",[t._v("index.html")]),t._v("，把路由交由前端处理")]),t._v(" "),a("p",[t._v("对"),a("code",[t._v("nginx")]),t._v("配置文件"),a("code",[t._v(".conf")]),t._v("修改，添加"),a("code",[t._v("try_files $uri $uri/ /index.html;")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  www.xxx.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index  /data/dist/index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("修改完配置文件后记得配置的更新")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nginx -s reload\n")])])]),a("p",[t._v("这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 "),a("code",[t._v("index.html")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("为了避免这种情况，你应该在 "),a("code",[t._v("Vue")]),t._v(" 应用里面覆盖所有的路由情况，然后在给出一个 404 页面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NotFoundComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("关于后端配置方案还有："),a("code",[t._v("Apache")]),t._v("、"),a("code",[t._v("nodejs")]),t._v("等，思想是一致的，这里就不展开述说了")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903872637632525",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903872637632525"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue-js.com/topic/5f8cf91d96b2cb0032c385c0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue-js.com/topic/5f8cf91d96b2cb0032c385c0"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);