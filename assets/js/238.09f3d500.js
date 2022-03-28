(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{616:function(t,s,e){"use strict";e.r(s);var a=e(28),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"面试官-说说webpack的热更新是如何做到的-原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说webpack的热更新是如何做到的-原理是什么"}},[t._v("#")]),t._v(" 面试官：说说webpack的热更新是如何做到的？原理是什么？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/a076da40-acd4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"一、是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),e("p",[e("code",[t._v("HMR")]),t._v("全称 "),e("code",[t._v("Hot Module Replacement")]),t._v("，可以理解为模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用")]),t._v(" "),e("p",[t._v("例如，我们在应用运行过程中修改了某个模块，通过自动刷新会导致整个应用的整体刷新，那页面中的状态信息都会丢失")]),t._v(" "),e("p",[t._v("如果使用的是 "),e("code",[t._v("HMR")]),t._v("，就可以实现只将修改的模块实时替换至应用中，不必完全刷新整个应用")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("webpack")]),t._v("中配置开启热模块也非常的简单，如下代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  devServer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 HMR 特性")]),t._v("\n    hot"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hotOnly: true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("通过上述这种配置，如果我们修改并保存"),e("code",[t._v("css")]),t._v("文件，确实能够以不刷新的形式更新到页面中")]),t._v(" "),e("p",[t._v("但是，当我们修改并保存"),e("code",[t._v("js")]),t._v("文件之后，页面依旧自动刷新了，这里并没有触发热模块")]),t._v(" "),e("p",[t._v("所以，"),e("code",[t._v("HMR")]),t._v("并不像 "),e("code",[t._v("Webpack")]),t._v(" 的其他特性一样可以开箱即用，需要有一些额外的操作")]),t._v(" "),e("p",[t._v("我们需要去指定哪些模块发生更新时进行"),e("code",[t._v("HRM")]),t._v("，如下代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./util.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"util.js更新了"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"二、实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、实现原理"}},[t._v("#")]),t._v(" 二、实现原理")]),t._v(" "),e("p",[t._v("首先来看看一张图，如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/adc05780-acd4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("Webpack Compile：将 JS 源代码编译成 bundle.js")]),t._v(" "),e("li",[t._v("HMR Server：用来将热更新的文件输出给 HMR Runtime")]),t._v(" "),e("li",[t._v("Bundle Server：静态资源文件服务器，提供文件访问路径")]),t._v(" "),e("li",[t._v("HMR Runtime：socket服务器，会被注入到浏览器，更新文件的变化")]),t._v(" "),e("li",[t._v("bundle.js：构建输出的文件")]),t._v(" "),e("li",[t._v("在HMR Runtime 和 HMR Server之间建立 websocket，即图上4号线，用于实时更新文件变化")])]),t._v(" "),e("p",[t._v("上面图中，可以分成两个阶段：")]),t._v(" "),e("ul",[e("li",[t._v("启动阶段为上图 1 - 2 - A - B")])]),t._v(" "),e("p",[t._v("在编写未经过"),e("code",[t._v("webpack")]),t._v("打包的源代码后，"),e("code",[t._v("Webpack Compile")]),t._v(" 将源代码和 "),e("code",[t._v("HMR Runtime")]),t._v(" 一起编译成 "),e("code",[t._v("bundle")]),t._v("文件，传输给"),e("code",[t._v("Bundle Server")]),t._v(" 静态资源服务器")]),t._v(" "),e("ul",[e("li",[t._v("更新阶段为上图 1 - 2 - 3 - 4")])]),t._v(" "),e("p",[t._v("当某一个文件或者模块发生变化时，"),e("code",[t._v("webpack")]),t._v("监听到文件变化对文件重新编译打包，编译生成唯一的"),e("code",[t._v("hash")]),t._v("值，这个"),e("code",[t._v("hash")]),t._v("值用来作为下一次热更新的标识")]),t._v(" "),e("p",[t._v("根据变化的内容生成两个补丁文件："),e("code",[t._v("manifest")]),t._v("（包含了 "),e("code",[t._v("hash")]),t._v(" 和 "),e("code",[t._v("chundId")]),t._v("，用来说明变化的内容）和"),e("code",[t._v("chunk.js")]),t._v(" 模块")]),t._v(" "),e("p",[t._v("由于"),e("code",[t._v("socket")]),t._v("服务器在"),e("code",[t._v("HMR Runtime")]),t._v(" 和 "),e("code",[t._v("HMR Server")]),t._v("之间建立 "),e("code",[t._v("websocket")]),t._v("链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的"),e("code",[t._v("hash")]),t._v("值，如下图的"),e("code",[t._v("h")]),t._v("属性，作为下一次热更细的标识")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/05a0edf0-ad4a-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),e("p",[t._v("在浏览器接受到这条消息之前，浏览器已经在上一次"),e("code",[t._v("socket")]),t._v(" 消息中已经记住了此时的"),e("code",[t._v("hash")]),t._v(" 标识，这时候我们会创建一个 "),e("code",[t._v("ajax")]),t._v(" 去服务端请求获取到变化内容的 "),e("code",[t._v("manifest")]),t._v(" 文件")]),t._v(" "),e("p",[e("code",[t._v("mainfest")]),t._v("文件包含重新"),e("code",[t._v("build")]),t._v("生成的"),e("code",[t._v("hash")]),t._v("值，以及变化的模块，对应上图的"),e("code",[t._v("c")]),t._v("属性")]),t._v(" "),e("p",[t._v("浏览器根据 "),e("code",[t._v("manifest")]),t._v(" 文件获取模块变化的内容，从而触发"),e("code",[t._v("render")]),t._v("流程，实现局部模块更新")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/0e7b7850-ad4a-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"三、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("webpack")]),t._v("热模块更新的总结如下：")]),t._v(" "),e("ul",[e("li",[t._v("通过"),e("code",[t._v("webpack-dev-server")]),t._v("创建两个服务器：提供静态资源的服务（express）和Socket服务")]),t._v(" "),e("li",[t._v("express server 负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）")]),t._v(" "),e("li",[t._v("socket server 是一个 websocket 的长连接，双方可以通信")]),t._v(" "),e("li",[t._v("当 socket server 监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）")]),t._v(" "),e("li",[t._v("通过长连接，socket server 可以直接将这两个文件主动发送给客户端（浏览器）")]),t._v(" "),e("li",[t._v("浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新")])]),t._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),e("ul",[e("li",[t._v("https://zhuanlan.zhihu.com/p/138446061")]),t._v(" "),e("li",[t._v("https://github.com/Jocs/jocs.github.io/issues/15")]),t._v(" "),e("li",[t._v("https://juejin.cn/post/6844904134697549832")]),t._v(" "),e("li",[t._v("https://vue3js.cn/interview/")])])])}),[],!1,null,null,null);s.default=v.exports}}]);