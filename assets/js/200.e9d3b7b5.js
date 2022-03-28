(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{635:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-vue3-0的设计目标是什么-做了哪些优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue3-0的设计目标是什么-做了哪些优化"}},[t._v("#")]),t._v(" 面试官：Vue3.0的设计目标是什么？做了哪些优化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/b93b49c0-5c58-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"vue3新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3新特性"}},[t._v("#")]),t._v(" Vue3新特性")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Proxy：不只是解决了 defineProperty 的局限性。\nPerformance：性能更比 Vue 2.0 强。\nTree shaking support：可以将无用模块“剪辑”，仅打包需要的。\nComposition API：组合 API。\nFragment, Teleport, Suspense：“碎片”，Teleport 即 Protal 传送门，“悬念”。\nBetter TypeScript support：更优秀的 Ts 支持。\nCustom Renderer API：暴露了自定义渲染 API\n")])])]),a("h2",{attrs:{id:"一、设计目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、设计目标"}},[t._v("#")]),t._v(" 一、设计目标")]),t._v(" "),a("p",[t._v("不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下"),a("code",[t._v("Vue3")]),t._v("之前我们或许会面临的问题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("随着功能的增长，复杂组件的代码变得越来越难以维护")])]),t._v(" "),a("li",[a("p",[t._v("缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制")])]),t._v(" "),a("li",[a("p",[t._v("类型推断不够友好")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("bundle")]),t._v("的时间太久了")])])]),t._v(" "),a("p",[t._v("而 "),a("code",[t._v("Vue3")]),t._v(" 经过长达两三年时间的筹备，做了哪些事情？")]),t._v(" "),a("p",[t._v("我们从结果反推")]),t._v(" "),a("ul",[a("li",[t._v("更小")]),t._v(" "),a("li",[t._v("更快")]),t._v(" "),a("li",[t._v("TypeScript支持")]),t._v(" "),a("li",[t._v("API设计一致性")]),t._v(" "),a("li",[t._v("提高自身可维护性")]),t._v(" "),a("li",[t._v("开放更多底层功能")])]),t._v(" "),a("p",[t._v("一句话概述，就是更小更快更友好了")]),t._v(" "),a("h3",{attrs:{id:"更小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更小"}},[t._v("#")]),t._v(" 更小")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("移除一些不常用的 "),a("code",[t._v("API")])]),t._v(" "),a("p",[t._v("引入"),a("code",[t._v("tree-shaking")]),t._v("，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了")]),t._v(" "),a("h3",{attrs:{id:"更快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更快"}},[t._v("#")]),t._v(" 更快")]),t._v(" "),a("p",[t._v("主要体现在编译方面：")]),t._v(" "),a("ul",[a("li",[t._v("diff算法优化")]),t._v(" "),a("li",[t._v("静态提升")]),t._v(" "),a("li",[t._v("事件监听缓存")]),t._v(" "),a("li",[t._v("SSR优化")])]),t._v(" "),a("p",[t._v("下篇文章我们会进一步介绍")]),t._v(" "),a("h3",{attrs:{id:"更友好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更友好"}},[t._v("#")]),t._v(" 更友好")]),t._v(" "),a("p",[a("code",[t._v("vue3")]),t._v("在兼顾"),a("code",[t._v("vue2")]),t._v("的"),a("code",[t._v("options API")]),t._v("的同时还推出了"),a("code",[t._v("composition API")]),t._v("，大大增加了代码的逻辑组织和代码复用能力")]),t._v(" "),a("p",[t._v("这里代码简单演示下：")]),t._v(" "),a("p",[t._v("存在一个获取鼠标位置的函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" toRefs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reactive "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMouse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUnmounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRefs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们只需要调用这个函数，即可获取"),a("code",[t._v("x")]),t._v("、"),a("code",[t._v("y")]),t._v("的坐标，完全不用关注实现过程")]),t._v(" "),a("p",[t._v("试想一下，如果很多类似的第三方库，我们只需要调用即可，不必关注实现过程，开发效率大大提高")]),t._v(" "),a("p",[t._v("同时，"),a("code",[t._v("VUE3")]),t._v("是基于"),a("code",[t._v("typescipt")]),t._v("编写的，可以享受到自动的类型定义提示")]),t._v(" "),a("h2",{attrs:{id:"三、优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、优化方案"}},[t._v("#")]),t._v(" 三、优化方案")]),t._v(" "),a("p",[a("code",[t._v("vue3")]),t._v("从很多层面都做了优化，可以分成三个方面：")]),t._v(" "),a("ul",[a("li",[t._v("源码")]),t._v(" "),a("li",[t._v("性能")]),t._v(" "),a("li",[t._v("语法 API")])]),t._v(" "),a("h3",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),a("p",[t._v("源码可以从两个层面展开：")]),t._v(" "),a("ul",[a("li",[t._v("源码管理")]),t._v(" "),a("li",[t._v("TypeScript")])]),t._v(" "),a("h4",{attrs:{id:"源码管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码管理"}},[t._v("#")]),t._v(" 源码管理")]),t._v(" "),a("p",[a("code",[t._v("vue3")]),t._v("整个源码是通过 "),a("code",[t._v("monorepo")]),t._v("的方式维护的，根据功能将不同的模块拆分到"),a("code",[t._v("packages")]),t._v("目录下面不同的子目录中")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/d7c32520-5c58-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性")]),t._v(" "),a("p",[t._v("另外一些 "),a("code",[t._v("package")]),t._v("（比如 "),a("code",[t._v("reactivity")]),t._v(" 响应式库）是可以独立于 "),a("code",[t._v("Vue")]),t._v(" 使用的，这样用户如果只想使用 "),a("code",[t._v("Vue3")]),t._v("的响应式能力，可以单独依赖这个响应式库而不用去依赖整个 "),a("code",[t._v("Vue")])]),t._v(" "),a("h4",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("p",[a("code",[t._v("Vue3")]),t._v("是基于"),a("code",[t._v("typeScript")]),t._v("编写的，提供了更好的类型检查，能支持复杂的类型推导")]),t._v(" "),a("h3",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("p",[a("code",[t._v("vue3")]),t._v("是从什么哪些方面对性能进行进一步优化呢？")]),t._v(" "),a("ul",[a("li",[t._v("体积优化")]),t._v(" "),a("li",[t._v("编译优化")]),t._v(" "),a("li",[t._v("数据劫持优化")])]),t._v(" "),a("p",[t._v("这里讲述数据劫持：")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue2")]),t._v("中，数据劫持是通过"),a("code",[t._v("Object.defineProperty")]),t._v("，这个 API 有一些缺陷，并不能检测对象属性的添加和删除")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// track")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// trigger")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("尽管"),a("code",[t._v("Vue")]),t._v("为了解决这个问题提供了 "),a("code",[t._v("set")]),t._v("和"),a("code",[t._v("delete")]),t._v("实例方法，但是对于用户来说，还是增加了一定的心智负担")]),t._v(" "),a("p",[t._v("同时在面对嵌套层级比较深的情况下，就存在性能问题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("相比之下，"),a("code",[t._v("vue3")]),t._v("是通过"),a("code",[t._v("proxy")]),t._v("监听整个对象，那么对于删除还是监听当然也能监听到")]),t._v(" "),a("p",[t._v("同时"),a("code",[t._v("Proxy")]),t._v(" 并不能监听到内部深层次的对象变化，而 "),a("code",[t._v("Vue3")]),t._v(" 的处理方式是在"),a("code",[t._v("getter")]),t._v(" 中去递归响应式，这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归")]),t._v(" "),a("h3",{attrs:{id:"语法-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法-api"}},[t._v("#")]),t._v(" 语法 API")]),t._v(" "),a("p",[t._v("这里当然说的就是"),a("code",[t._v("composition API")]),t._v("，其两大显著的优化：")]),t._v(" "),a("ul",[a("li",[t._v("优化逻辑组织")]),t._v(" "),a("li",[t._v("优化逻辑复用")])]),t._v(" "),a("h4",{attrs:{id:"逻辑组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑组织"}},[t._v("#")]),t._v(" 逻辑组织")]),t._v(" "),a("p",[t._v("一张图，我们可以很直观地感受到 "),a("code",[t._v("Composition API")]),t._v("在逻辑组织方面的优势")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("相同功能的代码编写在一块，而不像"),a("code",[t._v("options API")]),t._v("那样，各个功能的代码混成一块")]),t._v(" "),a("h4",{attrs:{id:"逻辑复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑复用"}},[t._v("#")]),t._v(" 逻辑复用")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("vue2")]),t._v("中，我们是通过"),a("code",[t._v("mixin")]),t._v("实现功能混合，如果多个"),a("code",[t._v("mixin")]),t._v("混合，会存在两个非常明显的问题：命名冲突和数据来源不清晰")]),t._v(" "),a("p",[t._v("而通过"),a("code",[t._v("composition")]),t._v("这种形式，可以将一些复用的代码抽离出来作为一个函数，只要的使用的地方直接进行调用即可")]),t._v(" "),a("p",[t._v("同样是上文的获取鼠标位置的例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" toRefs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reactive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onUnmounted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onMounted "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMouse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUnmounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toRefs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("组件使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" useMousePosition "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mouse'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMousePosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到，整个数据来源清晰了，即使去编写更多的"),a("code",[t._v("hook")]),t._v("函数，也不会出现命名冲突的问题")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6850418112878575629#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6850418112878575629#heading-5"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue3js.cn/docs/zh"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6887359442354962445",target:"_blank",rel:"noopener noreferrer"}},[t._v("让你30分钟快速掌握vue 3"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);