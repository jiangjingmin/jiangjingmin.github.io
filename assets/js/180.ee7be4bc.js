(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{558:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[t._v("#")]),t._v(" 面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[t._v("#")]),t._v(" 一、背景")]),t._v(" "),a("p",[t._v("在前面文章了解中，我们了解到"),a("code",[t._v("redux")]),t._v("是用于数据状态管理，而"),a("code",[t._v("react")]),t._v("是一个视图层面的库")]),t._v(" "),a("p",[t._v("如果将两者连接在一起，可以使用官方推荐"),a("code",[t._v("react-redux")]),t._v("库，其具有高效且灵活的特性")]),t._v(" "),a("p",[a("code",[t._v("react-redux")]),t._v("将组件分成：")]),t._v(" "),a("ul",[a("li",[t._v("容器组件：存在逻辑处理")]),t._v(" "),a("li",[t._v("UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制")])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("redux")]),t._v("将整个应用状态存储到"),a("code",[t._v("store")]),t._v("中，组件可以派发"),a("code",[t._v("dispatch")]),t._v("行为"),a("code",[t._v("action")]),t._v("给"),a("code",[t._v("store")])]),t._v(" "),a("p",[t._v("其他组件通过订阅"),a("code",[t._v("store")]),t._v("中的状态"),a("code",[t._v("state")]),t._v("来更新自身的视图")]),t._v(" "),a("h2",{attrs:{id:"二、如何做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何做"}},[t._v("#")]),t._v(" 二、如何做")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("react-redux")]),t._v("分成了两大核心：")]),t._v(" "),a("ul",[a("li",[t._v("Provider")]),t._v(" "),a("li",[t._v("connection")])]),t._v(" "),a("h3",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" Provider")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("redux")]),t._v("中存在一个"),a("code",[t._v("store")]),t._v("用于存储"),a("code",[t._v("state")]),t._v("，如果将这个"),a("code",[t._v("store")]),t._v("存放在顶层元素中，其他组件都被包裹在顶层元素之上")]),t._v(" "),a("p",[t._v("那么所有的组件都能够受到"),a("code",[t._v("redux")]),t._v("的控制，都能够获取到"),a("code",[t._v("redux")]),t._v("中的数据")]),t._v(" "),a("p",[t._v("使用方式如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Provider store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" connection")]),t._v(" "),a("p",[a("code",[t._v("connect")]),t._v("方法将"),a("code",[t._v("store")]),t._v("上的"),a("code",[t._v("getState")]),t._v("和 "),a("code",[t._v("dispatch")]),t._v("包装成组件的"),a("code",[t._v("props")])]),t._v(" "),a("p",[t._v("导入"),a("code",[t._v("conect")]),t._v("如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-redux"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("用法如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapStateToProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapDispatchToProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以传递两个参数：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("mapStateToProps")])]),t._v(" "),a("li",[a("p",[t._v("mapDispatchToProps")])])]),t._v(" "),a("h3",{attrs:{id:"mapstatetoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops"}},[t._v("#")]),t._v(" mapStateToProps")]),t._v(" "),a("p",[t._v("把"),a("code",[t._v("redux")]),t._v("中的数据映射到"),a("code",[t._v("react")]),t._v("中的"),a("code",[t._v("props")]),t._v("中去")]),t._v(" "),a("p",[t._v("如下：")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mapStateToProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prop : state.xxx  | 意思是将state中的某个数据映射到props中")]),t._v("\n        foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("组件内部就能够通过"),a("code",[t._v("props")]),t._v("获取到"),a("code",[t._v("store")]),t._v("中的数据")]),t._v(" "),a("div",{staticClass:"language-cons extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Foo extends Component {\n    constructor(props){\n        super(props);\n    }\n    render(){\n        return(\n         // 这样子渲染的其实就是state.bar的数据了\n            <div>this.props.foo</div>\n        )\n    }\n}\nFoo = connect()(Foo)\nexport default Foo\n")])])]),a("h3",{attrs:{id:"mapdispatchtoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops"}},[t._v("#")]),t._v(" mapDispatchToProps")]),t._v(" "),a("p",[t._v("将"),a("code",[t._v("redux")]),t._v("中的"),a("code",[t._v("dispatch")]),t._v("映射到组件内部的"),a("code",[t._v("props")]),t._v("中")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mapDispatchToProps")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认传递参数就是dispatch")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'increatment'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n         \n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点击increase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nFoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("整体流程图大致如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、项目结构"}},[t._v("#")]),t._v(" 三、项目结构")]),t._v(" "),a("p",[t._v("可以根据项目具体情况进行选择，以下列出两种常见的组织结构")]),t._v(" "),a("h4",{attrs:{id:"按角色组织-mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按角色组织-mvc"}},[t._v("#")]),t._v(" 按角色组织（MVC）")]),t._v(" "),a("p",[t._v("角色如下：")]),t._v(" "),a("ul",[a("li",[t._v("reducers")]),t._v(" "),a("li",[t._v("actions")]),t._v(" "),a("li",[t._v("components")]),t._v(" "),a("li",[t._v("containers")])]),t._v(" "),a("p",[t._v("参考如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("reducers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  todoReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  filterReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nactions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  todoAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  filterActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  todoList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  todoItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\ncontainers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  todoListContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  todoItemContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  filterContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),a("h4",{attrs:{id:"按功能组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按功能组织"}},[t._v("#")]),t._v(" 按功能组织")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("redux")]),t._v("使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码")]),t._v(" "),a("p",[a("code",[t._v("Redux")]),t._v("中，不同的角色就是"),a("code",[t._v("reducer")]),t._v("、"),a("code",[t._v("actions")]),t._v("和视图，而应用功能对应的就是用户界面的交互模块")]),t._v(" "),a("p",[t._v("参考如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("todoList"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  actionTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n    containers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\nfilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  actionTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n  views"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),a("p",[t._v("每个功能模块对应一个目录，每个目录下包含同样的角色文件：")]),t._v(" "),a("ul",[a("li",[t._v("actionTypes.js 定义action类型")]),t._v(" "),a("li",[t._v("actions.js 定义action构造函数")]),t._v(" "),a("li",[t._v("reducer.js  定义这个功能模块如果响应actions.js定义的动作")]),t._v(" "),a("li",[t._v("views 包含功能模块中所有的React组件，包括展示组件和容器组件")]),t._v(" "),a("li",[t._v("index.js 把所有的角色导入，统一导出")])]),t._v(" "),a("p",[t._v("其中"),a("code",[t._v("index")]),t._v("模块用于导出对外的接口")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" actions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./actions.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" reducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./reducer.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./views/container.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("导入方法如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" TodoList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./xxxx'")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://www.redux.org.cn/docs/basics/UsageWithReact.html")]),t._v(" "),a("li",[t._v("https://segmentfault.com/a/1190000010384268")])])])}),[],!1,null,null,null);s.default=e.exports}}]);