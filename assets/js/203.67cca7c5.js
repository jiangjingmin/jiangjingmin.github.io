(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{574:function(e,v,t){"use strict";t.r(v);var _=t(28),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue的理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue的理解"}},[e._v("#")]),e._v(" Vue的理解")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/fe/vue.png",alt:"Vue"}})]),e._v(" "),t("h2",{attrs:{id:"一、是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[e._v("#")]),e._v(" 一、是什么")]),e._v(" "),t("p",[e._v("Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的"),t("strong",[e._v("渐进式JavaScript框架")]),e._v("，也是一个创建"),t("strong",[e._v("单页应用")]),e._v("的Web应用框架。")]),e._v(" "),t("p",[e._v("PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月。")]),e._v(" "),t("h3",{attrs:{id:"简单说下vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单说下vue"}},[e._v("#")]),e._v(" 简单说下vue")]),e._v(" "),t("ol",[t("li",[e._v("vue是渐变式框架，根据自己的需求添加功能")]),e._v(" "),t("li",[e._v("vue数据驱动采用mvvm模式，m是数据层，v是视图层，vm是调度者")]),e._v(" "),t("li",[e._v("SPA单页面应用，只有一个页面，加载速度快")]),e._v(" "),t("li",[e._v("组件化，复用性强")])]),e._v(" "),t("h3",{attrs:{id:"有什么缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有什么缺点"}},[e._v("#")]),e._v(" 有什么缺点")]),e._v(" "),t("ol",[t("li",[e._v("vue2底层基于Object.defineProperty实现响应式，这个api本身不支持IE8及以下浏览器")]),e._v(" "),t("li",[e._v("客户端渲染（CSR）的先天不足，首屏性能问题（白屏）")]),e._v(" "),t("li",[e._v("由于百度等搜索引擎爬虫无法爬取js中的内容，故spa先天就对seo优化心有余力不足（谷歌的puppeteer就挺牛逼的，实现预渲染底层也是用到了这个工具）")])]),e._v(" "),t("h2",{attrs:{id:"二、响应式原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、响应式原理"}},[e._v("#")]),e._v(" 二、响应式原理")]),e._v(" "),t("p",[t("code",[e._v("vue.js")]),e._v(" 是采用 "),t("strong",[e._v("数据劫持 + 发布者-订阅者模式")]),e._v(" 的方式，通过 "),t("code",[e._v("Object.defineProperty()")]),e._v(" 来劫持各个属性的 "),t("code",[e._v("setter")]),e._v("、"),t("code",[e._v("getter")]),e._v("，在数据变动时发布消息给订阅者，触发响应的监听回调。在vue3.0中通过Proxy代理对象进行类似的操作。")]),e._v(" "),t("p",[e._v("Vue 数据双向绑定主要是指：数据变化更新视图，视图变化更新数据，如下图所示：")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/fe/mvvm.png",alt:"mvvm"}})]),e._v(" "),t("p",[e._v("其中，View 变化更新 Data ，可以通过事件监听的方式来实现，所以 Vue 的数据双向绑定的工作主要是如何根据 Data 变化更新 View。")]),e._v(" "),t("p",[e._v("Vue 主要通过以下 4 个步骤来实现数据双向绑定的：")]),e._v(" "),t("h3",{attrs:{id:"实现一个监听器-observer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个监听器-observer"}},[e._v("#")]),e._v(" 实现一个监听器 Observer")]),e._v(" "),t("p",[e._v("对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。")]),e._v(" "),t("h3",{attrs:{id:"实现一个解析器-compile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个解析器-compile"}},[e._v("#")]),e._v(" 实现一个解析器 Compile")]),e._v(" "),t("p",[e._v("解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。")]),e._v(" "),t("h3",{attrs:{id:"实现一个订阅者-watcher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个订阅者-watcher"}},[e._v("#")]),e._v(" 实现一个订阅者 Watcher")]),e._v(" "),t("p",[e._v("Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。")]),e._v(" "),t("h3",{attrs:{id:"实现一个订阅器-dep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个订阅器-dep"}},[e._v("#")]),e._v(" 实现一个订阅器 Dep")]),e._v(" "),t("p",[e._v("订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。")]),e._v(" "),t("h2",{attrs:{id:"三、核心特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、核心特性"}},[e._v("#")]),e._v(" 三、核心特性")]),e._v(" "),t("h3",{attrs:{id:"数据驱动-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动-mvvm"}},[e._v("#")]),e._v(" 数据驱动（MVVM)")]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"./mvvm"}},[e._v("MVVM 双向数据绑定")])]),e._v(" "),t("h3",{attrs:{id:"组件化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[e._v("#")]),e._v(" 组件化")]),e._v(" "),t("h4",{attrs:{id:"_1-什么是组件化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是组件化"}},[e._v("#")]),e._v(" 1. 什么是组件化")]),e._v(" "),t("p",[e._v("一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在"),t("code",[e._v("Vue")]),e._v("中每一个"),t("code",[e._v(".vue")]),e._v("文件都可以视为一个组件")]),e._v(" "),t("h4",{attrs:{id:"_2-组件化的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件化的优势"}},[e._v("#")]),e._v(" 2. 组件化的优势")]),e._v(" "),t("ul",[t("li",[e._v("降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现")]),e._v(" "),t("li",[e._v("调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单")]),e._v(" "),t("li",[e._v("提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级")])]),e._v(" "),t("h3",{attrs:{id:"指令系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令系统"}},[e._v("#")]),e._v(" 指令系统")]),e._v(" "),t("p",[e._v("指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("常用的指令")]),e._v(" "),t("ul",[t("li",[e._v("条件渲染指令 "),t("code",[e._v("v-if")])]),e._v(" "),t("li",[e._v("列表渲染指令"),t("code",[e._v("v-for")])]),e._v(" "),t("li",[e._v("属性绑定指令"),t("code",[e._v("v-bind")])]),e._v(" "),t("li",[e._v("事件绑定指令"),t("code",[e._v("v-on")])]),e._v(" "),t("li",[e._v("双向数据绑定指令"),t("code",[e._v("v-model")])])])])]),e._v(" "),t("p",[e._v("没有指令之前我们是怎么做的？是不是先要获取到DOM然后在....干点啥")]),e._v(" "),t("h2",{attrs:{id:"四、proxy-与-object-defineproperty-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、proxy-与-object-defineproperty-的区别"}},[e._v("#")]),e._v(" 四、Proxy 与 Object.defineProperty 的区别")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/6844903601416978439#heading-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试官: 实现双向绑定Proxy比defineproperty优劣如何?"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("Proxy 的优势如下:")])]),e._v(" "),t("ul",[t("li",[e._v("Proxy 可以直接监听对象而非属性；")]),e._v(" "),t("li",[e._v("Proxy 可以直接监听数组的变化；")]),e._v(" "),t("li",[e._v("Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；")]),e._v(" "),t("li",[e._v("Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；")]),e._v(" "),t("li",[e._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；")])]),e._v(" "),t("p",[t("strong",[e._v("Object.defineProperty :")])]),e._v(" "),t("ul",[t("li",[e._v("无法监听数组变化")]),e._v(" "),t("li",[e._v("只能劫持对象的属性")]),e._v(" "),t("li",[e._v("兼容性好,支持IE9。而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。")])]),e._v(" "),t("h2",{attrs:{id:"五、vue-和-react-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、vue-和-react-区别"}},[e._v("#")]),e._v(" 五、Vue 和 React 区别")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844904040564785159",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于Vue和React的一些对比及个人思考（上） - 掘金 (juejin.cn)"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("石川-智能社：")]),e._v(" "),t("p",[e._v("Vue 和React 没有本质区别：")]),e._v(" "),t("ul",[t("li",[e._v("Vue 更注重视图的自动同步，使用习惯偏向前端人员")]),e._v(" "),t("li",[e._v("React 更注重组件及其状态的管理，使用习惯偏向程序人员，如后台转前端人员")])]),e._v(" "),t("blockquote",[t("p",[e._v("相对于Vue，React更加透明，没有过多的隐含逻辑（比如Vue的指令就是一种隐含逻辑），更便于程序员理解程序的执行过程；当然，也更加复杂、强大。")])]),e._v(" "),t("p",[e._v("这里就做几个简单的类比吧，当然没有好坏之分，只是使用场景不同")]),e._v(" "),t("h3",{attrs:{id:"相同点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同点"}},[e._v("#")]),e._v(" 相同点")]),e._v(" "),t("ul",[t("li",[e._v("都有组件化思想")]),e._v(" "),t("li",[e._v("都支持服务器端渲染")]),e._v(" "),t("li",[e._v("都有Virtual DOM（虚拟dom）")]),e._v(" "),t("li",[e._v("数据驱动视图")]),e._v(" "),t("li",[e._v("都有支持native的方案："),t("code",[e._v("Vue")]),e._v("的"),t("code",[e._v("weex")]),e._v("、"),t("code",[e._v("React")]),e._v("的"),t("code",[e._v("React native")])]),e._v(" "),t("li",[e._v("都有自己的构建工具："),t("code",[e._v("Vue")]),e._v("的"),t("code",[e._v("vue-cli")]),e._v("、"),t("code",[e._v("React")]),e._v("的"),t("code",[e._v("Create React App")])])]),e._v(" "),t("h3",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[e._v("#")]),e._v(" 区别")]),e._v(" "),t("ul",[t("li",[e._v("数据流向的不同。"),t("code",[e._v("react")]),e._v("从诞生开始就推崇单向数据流，而"),t("code",[e._v("Vue")]),e._v("是双向数据流")]),e._v(" "),t("li",[e._v("数据变化的实现原理不同。"),t("code",[e._v("react")]),e._v("使用的是不可变数据，而"),t("code",[e._v("Vue")]),e._v("使用的是可变的数据")]),e._v(" "),t("li",[e._v("组件化通信的不同。"),t("code",[e._v("react")]),e._v("中我们通过使用回调函数来进行通信的，而"),t("code",[e._v("Vue")]),e._v("中子组件向父组件传递消息有两种方式：事件和回调函数")]),e._v(" "),t("li",[e._v("diff算法不同。"),t("code",[e._v("react")]),e._v("主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。"),t("code",[e._v("Vue")]),e._v(" 使用双向指针，边对比，边更新DOM")])]),e._v(" "),t("h3",{attrs:{id:"如何选择-⭐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择-⭐"}},[e._v("#")]),e._v(" 如何选择？⭐")]),e._v(" "),t("p",[e._v("都行。")]),e._v(" "),t("p",[e._v("你觉得从用户角度，能感觉到这两个的性能差异吗？不会")]),e._v(" "),t("h4",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903918753808398#heading-21",target:"_blank",rel:"noopener noreferrer"}},[e._v("30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度） - 掘金 (juejin.cn)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903876231954446#heading-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 269个知识点（面试题）为你保驾护航 - 掘金 (juejin.cn)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6850037277675454478",target:"_blank",rel:"noopener noreferrer"}},[e._v("史上最强vue总结---面试开发全靠它了 - 掘金 (juejin.cn)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844904031983239181#heading-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("12道vue高频原理面试题,你能答出几道? - 掘金 (juejin.cn)"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);