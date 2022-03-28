(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{642:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-vue3有了解过吗-能说说跟vue2的区别吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue3有了解过吗-能说说跟vue2的区别吗"}},[t._v("#")]),t._v(" 面试官：vue3有了解过吗？能说说跟vue2的区别吗？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/774b6950-5087-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、vue3介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、vue3介绍"}},[t._v("#")]),t._v(" 一、Vue3介绍")]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("vue3")]),t._v("的重构背景，尤大是这样说的：")]),t._v(" "),s("p",[t._v("「Vue 新版本的理念成型于 2018 年末，当时 Vue 2 的代码库已经有两岁半了。比起通用软件的生命周期来这好像也没那么久，但在这段时期，前端世界已经今昔非比了")]),t._v(" "),s("p",[t._v("在我们更新（和重写）Vue 的主要版本时，主要考虑两点因素：首先是新的 JavaScript 语言特性在主流浏览器中的受支持水平；其次是当前代码库中随时间推移而逐渐暴露出来的一些设计和架构问题」")]),t._v(" "),s("p",[t._v("简要就是：")]),t._v(" "),s("ul",[s("li",[t._v("利用新的语言特性(es6)")]),t._v(" "),s("li",[t._v("解决架构问题")])]),t._v(" "),s("h2",{attrs:{id:"哪些变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哪些变化"}},[t._v("#")]),t._v(" 哪些变化")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/9169a900-5087-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("p",[t._v("从上图中，我们可以概览"),s("code",[t._v("Vue3")]),t._v("的新特性，如下：")]),t._v(" "),s("ul",[s("li",[t._v("速度更快")]),t._v(" "),s("li",[t._v("体积减少")]),t._v(" "),s("li",[t._v("更易维护")]),t._v(" "),s("li",[t._v("更接近原生")]),t._v(" "),s("li",[t._v("更易使用")])]),t._v(" "),s("h3",{attrs:{id:"速度更快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速度更快"}},[t._v("#")]),t._v(" 速度更快")]),t._v(" "),s("p",[s("code",[t._v("vue3")]),t._v("相比"),s("code",[t._v("vue2")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("重写了虚拟"),s("code",[t._v("Dom")]),t._v("实现")])]),t._v(" "),s("li",[s("p",[t._v("编译模板的优化")])]),t._v(" "),s("li",[s("p",[t._v("更高效的组件初始化")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("undate")]),t._v("性能提高1.3~2倍")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("SSR")]),t._v("速度提高了2~3倍")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/ac1d23d0-5087-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"体积更小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#体积更小"}},[t._v("#")]),t._v(" 体积更小")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("webpack")]),t._v("的"),s("code",[t._v("tree-shaking")]),t._v("功能，可以将无用模块“剪辑”，仅打包需要的")]),t._v(" "),s("p",[t._v("能够"),s("code",[t._v("tree-shaking")]),t._v("，有两大好处：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对开发人员，能够对"),s("code",[t._v("vue")]),t._v("实现更多其他的功能，而不必担忧整体体积过大")])]),t._v(" "),s("li",[s("p",[t._v("对使用者，打包出来的包体积变小了")])])]),t._v(" "),s("p",[s("code",[t._v("vue")]),t._v("可以开发出更多其他的功能，而不必担忧"),s("code",[t._v("vue")]),t._v("打包出来的整体体积过多")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/c01af010-5087-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"更易维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更易维护"}},[t._v("#")]),t._v(" 更易维护")]),t._v(" "),s("h4",{attrs:{id:"compositon-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compositon-api"}},[t._v("#")]),t._v(" compositon Api")]),t._v(" "),s("ul",[s("li",[t._v("可与现有的"),s("code",[t._v("Options API")]),t._v("一起使用")]),t._v(" "),s("li",[t._v("灵活的逻辑组合与复用")]),t._v(" "),s("li",[s("code",[t._v("Vue3")]),t._v("模块可以和其他框架搭配使用")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/c5c919b0-5087-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"更好的typescript支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更好的typescript支持"}},[t._v("#")]),t._v(" 更好的Typescript支持")]),t._v(" "),s("p",[s("code",[t._v("VUE3")]),t._v("是基于"),s("code",[t._v("typescipt")]),t._v("编写的，可以享受到自动的类型定义提示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/cc688120-5087-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"编译器重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译器重写"}},[t._v("#")]),t._v(" 编译器重写")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/fcd33800-5087-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"更接近原生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更接近原生"}},[t._v("#")]),t._v(" 更接近原生")]),t._v(" "),s("p",[t._v("可以自定义渲染 API")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/0c7d88a0-5088-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"更易使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更易使用"}},[t._v("#")]),t._v(" 更易使用")]),t._v(" "),s("p",[t._v("响应式 "),s("code",[t._v("Api")]),t._v(" 暴露出来")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/26070260-5088-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("轻松识别组件重新渲染原因")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/43b2fcb0-5088-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"二、vue3新增特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、vue3新增特性"}},[t._v("#")]),t._v(" 二、Vue3新增特性")]),t._v(" "),s("p",[t._v("Vue 3 中需要关注的一些新功能包括：")]),t._v(" "),s("ul",[s("li",[t._v("framents")]),t._v(" "),s("li",[t._v("Teleport")]),t._v(" "),s("li",[t._v("composition Api")]),t._v(" "),s("li",[t._v("createRenderer")])]),t._v(" "),s("h3",{attrs:{id:"framents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#framents"}},[t._v("#")]),t._v(" framents")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("Vue3.x")]),t._v(" 中，组件现在支持有多个根节点")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" Layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$attrs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("footer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"teleport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teleport"}},[t._v("#")]),t._v(" Teleport")]),t._v(" "),s("p",[s("code",[t._v("Teleport")]),t._v(" 是一种能够将我们的模板移动到 "),s("code",[t._v("DOM")]),t._v(" 中 "),s("code",[t._v("Vue app")]),t._v(" 之外的其他位置的技术，就有点像哆啦A梦的“任意门”")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("vue2")]),t._v("中，像 "),s("code",[t._v("modals")]),t._v(","),s("code",[t._v("toast")]),t._v(" 等这样的元素，如果我们嵌套在 "),s("code",[t._v("Vue")]),t._v(" 的某个组件内部，那么处理嵌套组件的定位、"),s("code",[t._v("z-index")]),t._v(" 和样式就会变得很困难")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("Teleport")]),t._v("，我们可以在组件的逻辑位置写模板代码，然后在 "),s("code",[t._v("Vue")]),t._v(" 应用范围之外渲染它")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showToast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("打开 toast"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- to 属性就是目标位置 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("teleport")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#teleport-target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("visible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toast-wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("toast-msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是一个 Toast 文案"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("teleport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"createrenderer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createrenderer"}},[t._v("#")]),t._v(" createRenderer")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("createRenderer")]),t._v("，我们能够构建自定义渲染器，我们能够将 "),s("code",[t._v("vue")]),t._v(" 的开发模型扩展到其他平台")]),t._v(" "),s("p",[t._v("我们可以将其生成在"),s("code",[t._v("canvas")]),t._v("画布上")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da4437845ec54eb3829313c92fc81afe~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("createRenderer")]),t._v("，我们了解下基本使用，就不展开讲述了")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createRenderer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/runtime-core'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  patchProp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  insert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  remove"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  createElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" render"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createApp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/runtime-core'")]),t._v("\n")])])]),s("h3",{attrs:{id:"composition-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" composition Api")]),t._v(" "),s("p",[t._v("composition Api，也就是组合式"),s("code",[t._v("api")]),t._v("，通过这种形式，我们能够更加容易维护我们的代码，将相同功能的变量进行一个集中式的管理")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/5e0bfb70-5088-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("compositon api")]),t._v("的使用，这里以下图展开")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/6f67a590-5088-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),s("p",[t._v("简单使用:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" double "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component mounted!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            double"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            increment\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、非兼容变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、非兼容变更"}},[t._v("#")]),t._v(" 三、非兼容变更")]),t._v(" "),s("h3",{attrs:{id:"global-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-api"}},[t._v("#")]),t._v(" Global API")]),t._v(" "),s("ul",[s("li",[t._v("全局 "),s("code",[t._v("Vue API")]),t._v(" 已更改为使用应用程序实例")]),t._v(" "),s("li",[t._v("全局和内部 "),s("code",[t._v("API")]),t._v(" 已经被重构为可 "),s("code",[t._v("tree-shakable")])])]),t._v(" "),s("h3",{attrs:{id:"模板指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板指令"}},[t._v("#")]),t._v(" 模板指令")]),t._v(" "),s("ul",[s("li",[t._v("组件上 "),s("code",[t._v("v-model")]),t._v(" 用法已更改")]),t._v(" "),s("li",[s("code",[t._v("<template v-for>")]),t._v("和 非 "),s("code",[t._v("v-for")]),t._v("节点上"),s("code",[t._v("key")]),t._v("用法已更改")]),t._v(" "),s("li",[t._v("在同一元素上使用的 "),s("code",[t._v("v-if")]),t._v(" 和 "),s("code",[t._v("v-for")]),t._v(" 优先级已更改")]),t._v(" "),s("li",[s("code",[t._v('v-bind="object"')]),t._v(" 现在排序敏感")]),t._v(" "),s("li",[s("code",[t._v("v-for")]),t._v(" 中的 "),s("code",[t._v("ref")]),t._v(" 不再注册 "),s("code",[t._v("ref")]),t._v(" 数组")])]),t._v(" "),s("h3",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),s("ul",[s("li",[t._v("只能使用普通函数创建功能组件")]),t._v(" "),s("li",[s("code",[t._v("functional")]),t._v(" 属性在单文件组件 "),s("code",[t._v("(SFC)")])]),t._v(" "),s("li",[t._v("异步组件现在需要 "),s("code",[t._v("defineAsyncComponent")]),t._v(" 方法来创建")])]),t._v(" "),s("h3",{attrs:{id:"渲染函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染函数"}},[t._v("#")]),t._v(" 渲染函数")]),t._v(" "),s("ul",[s("li",[t._v("渲染函数"),s("code",[t._v("API")]),t._v("改变")]),t._v(" "),s("li",[s("code",[t._v("$scopedSlots")]),t._v(" property 已删除，所有插槽都通过 "),s("code",[t._v("$slots")]),t._v(" 作为函数暴露")]),t._v(" "),s("li",[t._v("自定义指令 API 已更改为与组件生命周期一致")]),t._v(" "),s("li",[t._v("一些转换 "),s("code",[t._v("class")]),t._v(" 被重命名了：\n"),s("ul",[s("li",[s("code",[t._v("v-enter")]),t._v(" -> "),s("code",[t._v("v-enter-from")])]),t._v(" "),s("li",[s("code",[t._v("v-leave")]),t._v(" -> "),s("code",[t._v("v-leave-from")])])])]),t._v(" "),s("li",[t._v("组件 "),s("code",[t._v("watch")]),t._v(" 选项和实例方法 "),s("code",[t._v("$watch")]),t._v("不再支持点分隔字符串路径，请改用计算函数作为参数")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("Vue 2.x")]),t._v(" 中，应用根容器的 "),s("code",[t._v("outerHTML")]),t._v(" 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。"),s("code",[t._v("VUE3.x")]),t._v(" 现在使用应用程序容器的 "),s("code",[t._v("innerHTML")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"其他小改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他小改变"}},[t._v("#")]),t._v(" 其他小改变")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("destroyed")]),t._v(" 生命周期选项被重命名为 "),s("code",[t._v("unmounted")])]),t._v(" "),s("li",[s("code",[t._v("beforeDestroy")]),t._v(" 生命周期选项被重命名为 "),s("code",[t._v("beforeUnmount")])]),t._v(" "),s("li",[s("code",[t._v("[prop default")]),t._v("工厂函数不再有权访问 "),s("code",[t._v("this")]),t._v(" 是上下文")]),t._v(" "),s("li",[t._v("自定义指令 API 已更改为与组件生命周期一致")]),t._v(" "),s("li",[s("code",[t._v("data")]),t._v(" 应始终声明为函数")]),t._v(" "),s("li",[t._v("来自 "),s("code",[t._v("mixin")]),t._v(" 的 "),s("code",[t._v("data")]),t._v(" 选项现在可简单地合并")]),t._v(" "),s("li",[s("code",[t._v("attribute")]),t._v(" 强制策略已更改")]),t._v(" "),s("li",[t._v("一些过渡 "),s("code",[t._v("class")]),t._v(" 被重命名")]),t._v(" "),s("li",[t._v("组建 watch 选项和实例方法 "),s("code",[t._v("$watch")]),t._v("不再支持以点分隔的字符串路径。请改用计算属性函数作为参数。")]),t._v(" "),s("li",[s("code",[t._v("<template>")]),t._v(" 没有特殊指令的标记 ("),s("code",[t._v("v-if/else-if/else")]),t._v("、"),s("code",[t._v("v-for")]),t._v(" 或 "),s("code",[t._v("v-slot")]),t._v(") 现在被视为普通元素，并将生成原生的 "),s("code",[t._v("<template>")]),t._v(" 元素，而不是渲染其内部内容。")]),t._v(" "),s("li",[t._v("在"),s("code",[t._v("Vue 2.x")]),t._v(" 中，应用根容器的 "),s("code",[t._v("outerHTML")]),t._v(" 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。"),s("code",[t._v("Vue 3.x")]),t._v(" 现在使用应用容器的 "),s("code",[t._v("innerHTML")]),t._v("，这意味着容器本身不再被视为模板的一部分。")])]),t._v(" "),s("h3",{attrs:{id:"移除-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除-api"}},[t._v("#")]),t._v(" 移除 API")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("keyCode")]),t._v(" 支持作为 "),s("code",[t._v("v-on")]),t._v(" 的修饰符")]),t._v(" "),s("li",[s("code",[t._v("$on")]),t._v("，"),s("code",[t._v("$off")]),t._v("和"),s("code",[t._v("$once")]),t._v(" 实例方法")]),t._v(" "),s("li",[t._v("过滤"),s("code",[t._v("filter")])]),t._v(" "),s("li",[t._v("内联模板 "),s("code",[t._v("attribute")])]),t._v(" "),s("li",[s("code",[t._v("$destroy")]),t._v(" 实例方法。用户不应再手动管理单个"),s("code",[t._v("Vue")]),t._v(" 组件的生命周期。")])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A8%A1%E6%9D%BF%E6%8C%87%E4%BB%A4")]),t._v(" "),s("li",[t._v("https://composition-api.vuejs.org/zh/#api-%E4%BB%8B%E7%BB%8D")])])])}),[],!1,null,null,null);a.default=r.exports}}]);