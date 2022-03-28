(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{578:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-vue中组件和插件有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue中组件和插件有什么区别"}},[t._v("#")]),t._v(" 面试官：Vue中组件和插件有什么区别？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/683475e0-3acc-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"一、组件是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、组件是什么"}},[t._v("#")]),t._v(" 一、组件是什么")]),t._v(" "),a("p",[t._v("回顾以前对组件的定义：")]),t._v(" "),a("p",[t._v("组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在"),a("code",[t._v("Vue")]),t._v("中每一个"),a("code",[t._v(".vue")]),t._v("文件都可以视为一个组件")]),t._v(" "),a("p",[t._v("组件的优势")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现")])]),t._v(" "),a("li",[a("p",[t._v("调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单")])]),t._v(" "),a("li",[a("p",[t._v("提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级")])])]),t._v(" "),a("h2",{attrs:{id:"二、插件是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、插件是什么"}},[t._v("#")]),t._v(" 二、插件是什么")]),t._v(" "),a("p",[t._v("插件通常用来为 "),a("code",[t._v("Vue")]),t._v(" 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：")]),t._v(" "),a("ul",[a("li",[t._v("添加全局方法或者属性。如: "),a("code",[t._v("vue-custom-element")])]),t._v(" "),a("li",[t._v("添加全局资源：指令/过滤器/过渡等。如 "),a("code",[t._v("vue-touch")])]),t._v(" "),a("li",[t._v("通过全局混入来添加一些组件选项。如"),a("code",[t._v("vue-router")])]),t._v(" "),a("li",[t._v("添加 "),a("code",[t._v("Vue")]),t._v(" 实例方法，通过把它们添加到 "),a("code",[t._v("Vue.prototype")]),t._v(" 上实现。")]),t._v(" "),a("li",[t._v("一个库，提供自己的 "),a("code",[t._v("API")]),t._v("，同时提供上面提到的一个或多个功能。如"),a("code",[t._v("vue-router")])])]),t._v(" "),a("h2",{attrs:{id:"三、两者的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、两者的区别"}},[t._v("#")]),t._v(" 三、两者的区别")]),t._v(" "),a("p",[t._v("两者的区别主要表现在以下几个方面：")]),t._v(" "),a("ul",[a("li",[t._v("编写形式")]),t._v(" "),a("li",[t._v("注册形式")]),t._v(" "),a("li",[t._v("使用场景")])]),t._v(" "),a("h3",{attrs:{id:"编写形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写形式"}},[t._v("#")]),t._v(" 编写形式")]),t._v(" "),a("h4",{attrs:{id:"编写组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写组件"}},[t._v("#")]),t._v(" 编写组件")]),t._v(" "),a("p",[t._v("编写一个组件，可以有很多方式，我们最常见的就是"),a("code",[t._v("vue")]),t._v("单文件的这种格式，每一个"),a("code",[t._v(".vue")]),t._v("文件我们都可以看成是一个组件")]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v("文件标准格式")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("我们还可以通过"),a("code",[t._v("template")]),t._v("属性来编写一个组件，如果组件内容多，我们可以在外部定义"),a("code",[t._v("template")]),t._v("组件内容，如果组件内容并不多，我们可直接写在"),a("code",[t._v("template")]),t._v("属性上")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testComponent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件显示的内容")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#testComponent'")]),t._v("  \n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>component</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件内容少可以通过这种形式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"编写插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写插件"}},[t._v("#")]),t._v(" 编写插件")]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v("插件的实现应该暴露一个 "),a("code",[t._v("install")]),t._v(" 方法。这个方法的第一个参数是 "),a("code",[t._v("Vue")]),t._v(" 构造器，第二个参数是一个可选的选项对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("MyPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 添加全局方法或 property")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myGlobalMethod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逻辑...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 添加全局资源")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-directive'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldVnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逻辑...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 注入组件选项")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逻辑...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 添加实例方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("$myMethod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("methodOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 逻辑...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"注册形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册形式"}},[t._v("#")]),t._v(" 注册形式")]),t._v(" "),a("h4",{attrs:{id:"组件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件注册"}},[t._v("#")]),t._v(" 组件注册")]),t._v(" "),a("p",[a("code",[t._v("vue")]),t._v("组件注册主要分为全局注册与局部注册")]),t._v(" "),a("p",[t._v("全局注册通过"),a("code",[t._v("Vue.component")]),t._v("方法，第一个参数为组件的名称，第二个参数为传入的配置项")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component-name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("局部注册只需在用到的地方通过"),a("code",[t._v("components")]),t._v("属性注册一个组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" component1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个组件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcomponent1   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 局部注册")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"插件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件注册"}},[t._v("#")]),t._v(" 插件注册")]),t._v(" "),a("p",[t._v("插件的注册通过"),a("code",[t._v("Vue.use()")]),t._v("的方式进行注册（安装），第一个参数为插件的名字，第二个参数是可选择的配置项")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("插件名字"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("注意的是：")]),t._v(" "),a("p",[t._v("注册插件的时候，需要在调用 "),a("code",[t._v("new Vue()")]),t._v(" 启动应用之前完成")]),t._v(" "),a("p",[a("code",[t._v("Vue.use")]),t._v("会自动阻止多次注册相同插件，只会注册一次")]),t._v(" "),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),a("p",[t._v("具体的其实在插件是什么章节已经表述了，这里在总结一下")]),t._v(" "),a("p",[t._v("组件 "),a("code",[t._v("(Component)")]),t._v(" 是用来构成你的 "),a("code",[t._v("App")]),t._v(" 的业务模块，它的目标是 "),a("code",[t._v("App.vue")])]),t._v(" "),a("p",[t._v("插件 "),a("code",[t._v("(Plugin)")]),t._v(" 是用来增强你的技术栈的功能模块，它的目标是 "),a("code",[t._v("Vue")]),t._v(" 本身")]),t._v(" "),a("p",[t._v("简单来说，插件就是指对"),a("code",[t._v("Vue")]),t._v("的功能的增强或补充")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://vue3js.cn/docs/zh")])])])}),[],!1,null,null,null);s.default=e.exports}}]);