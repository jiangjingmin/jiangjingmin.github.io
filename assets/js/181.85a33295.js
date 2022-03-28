(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{581:function(t,e,a){"use strict";a.r(e);var s=a(28),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说-react-生命周期有哪些不同阶段-每个阶段对应的方法是"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-react-生命周期有哪些不同阶段-每个阶段对应的方法是"}},[t._v("#")]),t._v(" 面试官：说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/5c717010-d373-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484176&idx=1&sn=5623421ed2678046ed9e438aadf6e26f&chksm=fc10c146cb67485015f24f7e9f5862c4c685fc33485fe30e1b375a534b4031978439c554e0c0&scene=178&cur_album_id=1711105826272116736#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("以前文章"),a("OutboundLink")],1),t._v("中，我们了解到生命周期定义")]),t._v(" "),a("p",[t._v("生命周期"),a("code",[t._v("（Life Cycle）")]),t._v("的概念应用很广泛，特别是在经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”"),a("code",[t._v("（Cradle-to-Grave）")]),t._v("的整个过程")]),t._v(" "),a("p",[t._v("跟"),a("code",[t._v("Vue")]),t._v("一样，"),a("code",[t._v("React")]),t._v("整个组件生命周期包括从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程")]),t._v(" "),a("h2",{attrs:{id:"二、流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、流程"}},[t._v("#")]),t._v(" 二、流程")]),t._v(" "),a("p",[t._v("这里主要讲述"),a("code",[t._v("react16.4")]),t._v("之后的生命周期，可以分成三个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("创建阶段")]),t._v(" "),a("li",[t._v("更新阶段")]),t._v(" "),a("li",[t._v("卸载阶段")])]),t._v(" "),a("h3",{attrs:{id:"创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),a("p",[t._v("创建阶段主要分成了以下几个生命周期方法：")]),t._v(" "),a("ul",[a("li",[t._v("constructor")]),t._v(" "),a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidMount")])]),t._v(" "),a("h4",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("实例过程中自动调用的方法，在方法内部通过"),a("code",[t._v("super")]),t._v("关键字获取来自父组件的"),a("code",[t._v("props")])]),t._v(" "),a("p",[t._v("在该方法中，通常的操作为初始化"),a("code",[t._v("state")]),t._v("状态或者在"),a("code",[t._v("this")]),t._v("上挂载方法")]),t._v(" "),a("h3",{attrs:{id:"getderivedstatefromprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),a("p",[t._v("该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例")]),t._v(" "),a("p",[t._v("执行时机：组件创建和更新阶段，不论是"),a("code",[t._v("props")]),t._v("变化还是"),a("code",[t._v("state")]),t._v("变化，也会调用")]),t._v(" "),a("p",[t._v("在每次"),a("code",[t._v("render")]),t._v("方法前调用，第一个参数为即将更新的"),a("code",[t._v("props")]),t._v("，第二个参数为上一个状态的"),a("code",[t._v("state")]),t._v("，可以比较"),a("code",[t._v("props")]),t._v(" 和 "),a("code",[t._v("state")]),t._v("来加一些限制条件，防止无用的state更新")]),t._v(" "),a("p",[t._v("该方法需要返回一个新的对象作为新的"),a("code",[t._v("state")]),t._v("或者返回"),a("code",[t._v("null")]),t._v("表示"),a("code",[t._v("state")]),t._v("状态不需要更新")]),t._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("类组件必须实现的方法，用于渲染"),a("code",[t._v("DOM")]),t._v("结构，可以访问组件"),a("code",[t._v("state")]),t._v("与"),a("code",[t._v("prop")]),t._v("属性")]),t._v(" "),a("p",[t._v("注意： 不要在 "),a("code",[t._v("render")]),t._v(" 里面 "),a("code",[t._v("setState")]),t._v(", 否则会触发死循环导致内存崩溃")]),t._v(" "),a("h3",{attrs:{id:"componentdidmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount")]),t._v(" "),a("p",[t._v("组件挂载到真实"),a("code",[t._v("DOM")]),t._v("节点后执行，其在"),a("code",[t._v("render")]),t._v("方法之后执行")]),t._v(" "),a("p",[t._v("此方法多用于执行一些数据获取，事件监听等操作")]),t._v(" "),a("h3",{attrs:{id:"更新阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段")]),t._v(" "),a("p",[t._v("该阶段的函数主要为如下方法：")]),t._v(" "),a("ul",[a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("getSnapshotBeforeUpdate")]),t._v(" "),a("li",[t._v("componentDidUpdate")])]),t._v(" "),a("h3",{attrs:{id:"getderivedstatefromprops-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops-2"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),a("p",[t._v("该方法介绍同上")]),t._v(" "),a("h2",{attrs:{id:"shouldcomponentupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate"}},[t._v("#")]),t._v(" shouldComponentUpdate")]),t._v(" "),a("p",[t._v("用于告知组件本身基于当前的"),a("code",[t._v("props")]),t._v("和"),a("code",[t._v("state")]),t._v("是否需要重新渲染组件，默认情况返回"),a("code",[t._v("true")])]),t._v(" "),a("p",[t._v("执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否")]),t._v(" "),a("p",[t._v("一般情况，不建议在该周期方法中进行深层比较，会影响效率")]),t._v(" "),a("p",[t._v("同时也不能调用"),a("code",[t._v("setState")]),t._v("，否则会导致无限循环调用更新")]),t._v(" "),a("h3",{attrs:{id:"render-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-2"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("介绍如上")]),t._v(" "),a("h3",{attrs:{id:"getsnapshotbeforeupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),a("p",[t._v("该周期函数在"),a("code",[t._v("render")]),t._v("后执行，执行之时"),a("code",[t._v("DOM")]),t._v("元素还没有被更新")]),t._v(" "),a("p",[t._v("该方法返回的一个"),a("code",[t._v("Snapshot")]),t._v("值，作为"),a("code",[t._v("componentDidUpdate")]),t._v("第三个参数传入")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSnapshotBeforeUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#enter getSnapshotBeforeUpdate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#enter componentDidUpdate snapshot = '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" snapshot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态")]),t._v(" "),a("h3",{attrs:{id:"componentdidupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate")]),t._v(" "),a("p",[t._v("执行时机：组件更新结束后触发")]),t._v(" "),a("p",[t._v("在该方法中，可以根据前后的"),a("code",[t._v("props")]),t._v("和"),a("code",[t._v("state")]),t._v("的变化做相应的操作，如获取数据，修改"),a("code",[t._v("DOM")]),t._v("样式等")]),t._v(" "),a("h3",{attrs:{id:"卸载阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载阶段"}},[t._v("#")]),t._v(" 卸载阶段")]),t._v(" "),a("h2",{attrs:{id:"componentwillunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount")]),t._v(" "),a("p",[t._v("此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等")]),t._v(" "),a("p",[t._v("一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建")]),t._v(" "),a("h2",{attrs:{id:"三、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),a("p",[t._v("新版生命周期整体流程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/66c999c0-d373-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("旧的生命周期流程图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/d379e420-d374-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("通过两个图的对比，可以发现新版的生命周期减少了以下三种方法：")]),t._v(" "),a("ul",[a("li",[t._v("componentWillMount")]),t._v(" "),a("li",[t._v("componentWillReceiveProps")]),t._v(" "),a("li",[t._v("componentWillUpdate")])]),t._v(" "),a("p",[t._v("其实这三个方法仍然存在，只是在前者加上了"),a("code",[t._v("UNSAFE_")]),t._v("前缀，如"),a("code",[t._v("UNSAFE_componentWillMount")]),t._v("，并不像字面意思那样表示不安全，而是表示这些生命周期的代码可能在未来的 "),a("code",[t._v("react")]),t._v("版本可能废除")]),t._v(" "),a("p",[t._v("同时也新增了两个生命周期函数：")]),t._v(" "),a("ul",[a("li",[t._v("getDerivedStateFromProps")]),t._v(" "),a("li",[t._v("getSnapshotBeforeUpdate")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/pomelovico/keep/issues/23")]),t._v(" "),a("li",[t._v("https://segmentfault.com/a/1190000020268993")])])])}),[],!1,null,null,null);e.default=v.exports}}]);