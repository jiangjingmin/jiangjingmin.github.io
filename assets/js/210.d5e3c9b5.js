(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{605:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-vue组件之间的通信方式都有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue组件之间的通信方式都有哪些"}},[t._v("#")]),t._v(" 面试官：Vue组件之间的通信方式都有哪些？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/7de50d20-3aca-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("常用：属性 + 发布订阅的方式实现父子组件通信")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("属性传递：只能 父级 传给 子级")])]),t._v(" "),a("li",[a("p",[t._v("发布订阅（EventBus）：$on / $emit：子级 传给 父级")])]),t._v(" "),a("li",[a("p",[t._v("Provide / inject：上下文方案实现祖先与后代之间通信")])]),t._v(" "),a("li",[a("p",[t._v("slot：插槽")])]),t._v(" "),a("li",[a("p",[t._v("$parent / $ children：")])]),t._v(" "),a("li",[a("p",[t._v("vuex：刷新页面就没了，虚拟本地存储")])]),t._v(" "),a("li",[a("p",[t._v("localStorage：永久存储，本地存储：任意组件间通信，可设置时间限制实现")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 父子组件之间是如何进行双向数据绑定的？")]),t._v(" "),a("p",[t._v("答：子组件通过emit")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'num'")]),t._v(" @updateData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateData'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\nprops"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmethods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'updateData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("[ ] 父组件如何执行子组件里的方法？")]),t._v(" "),a("p",[t._v("答：通过ref操作子组件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("children ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'childRef'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nmethods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件")]),t._v("\nmethods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"一、组件间通信的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、组件间通信的概念"}},[t._v("#")]),t._v(" 一、组件间通信的概念")]),t._v(" "),a("p",[t._v("开始之前，我们把"),a("strong",[t._v("组件间通信")]),t._v("这个词进行拆分")]),t._v(" "),a("ul",[a("li",[t._v("组件")]),t._v(" "),a("li",[t._v("通信")])]),t._v(" "),a("p",[t._v("都知道组件是"),a("code",[t._v("vue")]),t._v("最强大的功能之一，"),a("code",[t._v("vue")]),t._v("中每一个"),a("code",[t._v(".vue")]),t._v("我们都可以视之为一个组件通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的。广义上，任何信息的交通都是通信"),a("strong",[t._v("组件间通信")]),t._v("即指组件("),a("code",[t._v(".vue")]),t._v(")通过某种方式来传递信息以达到某个目的举个栗子我们在使用"),a("code",[t._v("UI")]),t._v("框架中的"),a("code",[t._v("table")]),t._v("组件，可能会往"),a("code",[t._v("table")]),t._v("组件中传入某些数据，这个本质就形成了组件之间的通信")]),t._v(" "),a("h2",{attrs:{id:"二、组件间通信解决了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、组件间通信解决了什么"}},[t._v("#")]),t._v(" 二、组件间通信解决了什么")]),t._v(" "),a("p",[t._v("在古代，人们通过驿站、飞鸽传书、烽火报警、符号、语言、眼神、触碰等方式进行信息传递，到了今天，随着科技水平的飞速发展，通信基本完全利用有线或无线电完成，相继出现了有线电话、固定电话、无线电话、手机、互联网甚至视频电话等各种通信方式从上面这段话，我们可以看到通信的本质是信息同步，共享回到"),a("code",[t._v("vue")]),t._v("中，每个组件之间的都有独自的作用域，组件间的数据是无法共享的但实际开发工作中我们常常需要让组件之间共享数据，这也是组件通信的目的要让它们互相之间能进行通讯，这样才能构成一个有机的完整系统")]),t._v(" "),a("h2",{attrs:{id:"二、组件间通信的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、组件间通信的分类"}},[t._v("#")]),t._v(" 二、组件间通信的分类")]),t._v(" "),a("p",[t._v("组件间通信的分类可以分成以下")]),t._v(" "),a("ul",[a("li",[t._v("父子组件之间的通信")]),t._v(" "),a("li",[t._v("兄弟组件之间的通信")]),t._v(" "),a("li",[t._v("祖孙与后代组件之间的通信")]),t._v(" "),a("li",[t._v("非关系组件间之间的通信")])]),t._v(" "),a("p",[t._v("关系图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/85b92400-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、组件间通信的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、组件间通信的方案"}},[t._v("#")]),t._v(" 三、组件间通信的方案")]),t._v(" "),a("p",[t._v("整理"),a("code",[t._v("vue")]),t._v("中8种常规的通信方案")]),t._v(" "),a("ol",[a("li",[t._v("通过 props 传递")]),t._v(" "),a("li",[t._v("通过 $emit 触发自定义事件")]),t._v(" "),a("li",[t._v("使用 ref")]),t._v(" "),a("li",[t._v("EventBus")]),t._v(" "),a("li",[t._v("$parent 或$root")]),t._v(" "),a("li",[t._v("attrs 与 listeners")]),t._v(" "),a("li",[t._v("Provide 与 Inject")]),t._v(" "),a("li",[t._v("Vuex")])]),t._v(" "),a("h3",{attrs:{id:"props传递数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props传递数据"}},[t._v("#")]),t._v(" props传递数据")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/8f80a670-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("适用场景：父组件传递数据给子组件")]),t._v(" "),a("li",[t._v("子组件设置"),a("code",[t._v("props")]),t._v("属性，定义接收父组件传递过来的参数")]),t._v(" "),a("li",[t._v("父组件在使用子组件标签中通过字面量来传递值")])]),t._v(" "),a("p",[a("code",[t._v("Children.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("props"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串形式  ")]),t._v("\n name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("String "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收的类型参数  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象形式  ")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收的类型为数值  ")]),t._v("\n        defaule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认值为18  ")]),t._v("\n       require"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// age属性必须传递  ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),a("p",[a("code",[t._v("Father.vue")]),t._v("组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Children name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jack"')]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("h3",{attrs:{id:"emit-触发自定义事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emit-触发自定义事件"}},[t._v("#")]),t._v(" $emit 触发自定义事件")]),t._v(" "),a("ul",[a("li",[t._v("适用场景：子组件传递数据给父组件")]),t._v(" "),a("li",[t._v("子组件通过"),a("code",[t._v("$emit触发")]),t._v("自定义事件，"),a("code",[t._v("$emit")]),t._v("第二个参数为传递的数值")]),t._v(" "),a("li",[t._v("父组件绑定监听器获取到子组件传递过来的参数")])]),t._v(" "),a("p",[a("code",[t._v("Chilfen.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" good"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),a("p",[a("code",[t._v("Father.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Children @add"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cartAdd($event)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("h3",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),a("ul",[a("li",[t._v("父组件在使用子组件的时候设置"),a("code",[t._v("ref")])]),t._v(" "),a("li",[t._v("父组件通过设置子组件"),a("code",[t._v("ref")]),t._v("来获取数据")])]),t._v(" "),a("p",[t._v("父组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Children ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取子组件实例，通过子组件实例我们就能拿到对应的数据  ")]),t._v("\n")])])]),a("h3",{attrs:{id:"eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus"}},[t._v("#")]),t._v(" EventBus")]),t._v(" "),a("ul",[a("li",[t._v("使用场景：兄弟组件传值")]),t._v(" "),a("li",[t._v("创建一个中央事件总线"),a("code",[t._v("EventBus")])]),t._v(" "),a("li",[t._v("兄弟组件通过"),a("code",[t._v("$emit")]),t._v("触发自定义事件，"),a("code",[t._v("$emit")]),t._v("第二个参数为传递的数值")]),t._v(" "),a("li",[t._v("另一个兄弟组件通过"),a("code",[t._v("$on")]),t._v("监听自定义事件")])]),t._v(" "),a("p",[a("code",[t._v("Bus.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个中央时间总线类  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bus")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存放事件的名字  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将$bus挂载到vue实例的原型上  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 另一种方式  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$bus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue已经实现了Bus的功能  ")]),t._v("\n")])])]),a("p",[a("code",[t._v("Children1.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),a("p",[a("code",[t._v("Children2.vue")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$bus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),a("h3",{attrs:{id:"parent-或-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parent-或-root"}},[t._v("#")]),t._v(" $parent 或$ root")]),t._v(" "),a("ul",[a("li",[t._v("通过共同祖辈"),a("code",[t._v("$parent")]),t._v("或者"),a("code",[t._v("$root")]),t._v("搭建通信桥连")])]),t._v(" "),a("p",[t._v("兄弟组件")]),t._v(" "),a("p",[a("code",[t._v("this.$parent.on('add',this.add)")])]),t._v(" "),a("p",[t._v("另一个兄弟组件")]),t._v(" "),a("p",[a("code",[t._v("this.$parent.emit('add')")])]),t._v(" "),a("h3",{attrs:{id:"attrs-与-listeners"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attrs-与-listeners"}},[t._v("#")]),t._v(" $attrs  与$ listeners")]),t._v(" "),a("ul",[a("li",[t._v("适用场景：祖先传递数据给子孙")]),t._v(" "),a("li",[t._v("设置批量向下传属性"),a("code",[t._v("$attrs")]),t._v("和 "),a("code",[t._v("$listeners")])]),t._v(" "),a("li",[t._v("包含了父级作用域中不作为 "),a("code",[t._v("prop")]),t._v(" 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。")]),t._v(" "),a("li",[t._v("可以通过 "),a("code",[t._v('v-bind="$attrs"')]),t._v(" 传⼊内部组件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// child：并未在props中声明foo  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$attrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parent  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HelloWorld foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给Grandson隔代传值，communication/index.vue  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child2 msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lalala"')]),t._v(" @some"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onSomeEvent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Child2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Child2做展开  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Grandson v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$attrs"')]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$listeners"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Grandson"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Grandson使⽤  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"$emit('some-event', 'msg from grandson')\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])]),a("h3",{attrs:{id:"provide-与-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-与-inject"}},[t._v("#")]),t._v(" provide 与 inject")]),t._v(" "),a("ul",[a("li",[t._v("在祖先组件定义"),a("code",[t._v("provide")]),t._v("属性，返回传递的值")]),t._v(" "),a("li",[t._v("在后代组件通过"),a("code",[t._v("inject")]),t._v("接收组件传递过来的值")])]),t._v(" "),a("p",[t._v("祖先组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),a("p",[t._v("后代组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("inject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到祖先组件传递过来的值  ")]),t._v("\n")])])]),a("h3",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" "),a("code",[t._v("vuex")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("适用场景: 复杂关系的组件数据传递")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Vuex")]),t._v("作用相当于一个用来存储共享变量的容器\n"),a("img",{attrs:{src:"https://static.vue-js.com/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png",alt:""}})])]),t._v(" "),a("li",[a("p",[a("code",[t._v("state")]),t._v("用来存放共享变量的地方")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("getter")]),t._v("，可以增加一个"),a("code",[t._v("getter")]),t._v("派生状态，(相当于"),a("code",[t._v("store")]),t._v("中的计算属性），用来获得共享变量的值")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("mutations")]),t._v("用来存放修改"),a("code",[t._v("state")]),t._v("的方法。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("actions")]),t._v("也是用来存放修改state的方法，不过"),a("code",[t._v("action")]),t._v("是在"),a("code",[t._v("mutations")]),t._v("的基础上进行。常用来做一些异步操作")])])]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("ul",[a("li",[t._v("父子关系的组件数据传递选择 "),a("code",[t._v("props")]),t._v("  与 "),a("code",[t._v("$emit")]),t._v("进行传递，也可选择"),a("code",[t._v("ref")])]),t._v(" "),a("li",[t._v("兄弟关系的组件数据传递可选择"),a("code",[t._v("$bus")]),t._v("，其次可以选择"),a("code",[t._v("$parent")]),t._v("进行传递")]),t._v(" "),a("li",[t._v("祖先与后代组件数据传递可选择"),a("code",[t._v("attrs")]),t._v("与"),a("code",[t._v("listeners")]),t._v("或者 "),a("code",[t._v("Provide")]),t._v("与 "),a("code",[t._v("Inject")])]),t._v(" "),a("li",[t._v("复杂关系的组件数据传递可以通过"),a("code",[t._v("vuex")]),t._v("存放共享的变量")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6844903990052782094#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903990052782094#heading-0"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue3js.cn/docs/zh"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);