(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{627:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v-show-和-v-if-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show-和-v-if-有什么区别"}},[t._v("#")]),t._v(" v-show 和 v-if 有什么区别？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/d21c3c50-3acb-11eb-85f6-6fac77c0c9b3.png",alt:"v-show_v-if"}})]),t._v(" "),a("h2",{attrs:{id:"一、v-show与v-if的共同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、v-show与v-if的共同点"}},[t._v("#")]),t._v(" 一、v-show与v-if的共同点")]),t._v(" "),a("p",[t._v("我们都知道在 "),a("code",[t._v("vue")]),t._v(" 中 "),a("code",[t._v("v-show")]),t._v(" 与 "),a("code",[t._v("v-if")]),t._v(" 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示")]),t._v(" "),a("p",[t._v("在用法上也是相同的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Model v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isShow"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Model v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isShow"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当表达式为"),a("code",[t._v("true")]),t._v("的时候，都会占据页面的位置")]),t._v(" "),a("li",[t._v("当表达式都为"),a("code",[t._v("false")]),t._v("时，都不会占据页面位置")])]),t._v(" "),a("h2",{attrs:{id:"二、v-show与v-if的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、v-show与v-if的区别"}},[t._v("#")]),t._v(" 二、v-show与v-if的区别")]),t._v(" "),a("ul",[a("li",[t._v("控制手段不同")]),t._v(" "),a("li",[t._v("编译过程不同")]),t._v(" "),a("li",[t._v("编译条件不同")])]),t._v(" "),a("p",[t._v("控制手段："),a("code",[t._v("v-show")]),t._v("隐藏则是为该元素添加"),a("code",[t._v("css--display:none")]),t._v("，"),a("code",[t._v("dom")]),t._v("元素依旧还在。"),a("code",[t._v("v-if")]),t._v("显示隐藏是将"),a("code",[t._v("dom")]),t._v("元素整个添加或删除")]),t._v(" "),a("p",[t._v("编译过程："),a("code",[t._v("v-if")]),t._v("切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；"),a("code",[t._v("v-show")]),t._v("只是简单的基于css切换")]),t._v(" "),a("p",[t._v("编译条件："),a("code",[t._v("v-if")]),t._v("是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("v-show")]),t._v(" 由"),a("code",[t._v("false")]),t._v("变为"),a("code",[t._v("true")]),t._v("的时候不会触发组件的生命周期")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("v-if")]),t._v("由"),a("code",[t._v("false")]),t._v("变为"),a("code",[t._v("true")]),t._v("的时候，触发组件的"),a("code",[t._v("beforeCreate")]),t._v("、"),a("code",[t._v("create")]),t._v("、"),a("code",[t._v("beforeMount")]),t._v("、"),a("code",[t._v("mounted")]),t._v("钩子，由"),a("code",[t._v("true")]),t._v("变为"),a("code",[t._v("false")]),t._v("的时候触发组件的"),a("code",[t._v("beforeDestory")]),t._v("、"),a("code",[t._v("destoryed")]),t._v("方法")])])]),t._v(" "),a("p",[t._v("性能消耗："),a("code",[t._v("v-if")]),t._v("有更高的切换消耗；"),a("code",[t._v("v-show")]),t._v("有更高的初始渲染消耗；")]),t._v(" "),a("h2",{attrs:{id:"三、v-show与v-if原理分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、v-show与v-if原理分析"}},[t._v("#")]),t._v(" 三、v-show与v-if原理分析")]),t._v(" "),a("p",[t._v("具体解析流程这里不展开讲，大致流程如下")]),t._v(" "),a("ul",[a("li",[t._v("将模板"),a("code",[t._v("template")]),t._v("转为"),a("code",[t._v("ast")]),t._v("结构的"),a("code",[t._v("JS")]),t._v("对象")]),t._v(" "),a("li",[t._v("用"),a("code",[t._v("ast")]),t._v("得到的"),a("code",[t._v("JS")]),t._v("对象拼装"),a("code",[t._v("render")]),t._v("和"),a("code",[t._v("staticRenderFns")]),t._v("函数")]),t._v(" "),a("li",[a("code",[t._v("render")]),t._v("和"),a("code",[t._v("staticRenderFns")]),t._v("函数被调用后生成虚拟"),a("code",[t._v("VNODE")]),t._v("节点，该节点包含创建"),a("code",[t._v("DOM")]),t._v("节点所需信息")]),t._v(" "),a("li",[a("code",[t._v("vm.patch")]),t._v("函数通过虚拟"),a("code",[t._v("DOM")]),t._v("算法利用"),a("code",[t._v("VNODE")]),t._v("节点创建真实"),a("code",[t._v("DOM")]),t._v("节点")])]),t._v(" "),a("h3",{attrs:{id:"v-show原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show原理"}},[t._v("#")]),t._v(" v-show原理")]),t._v(" "),a("p",[t._v("不管初始条件是什么，元素总是会被渲染")]),t._v(" "),a("p",[t._v("我们看一下在"),a("code",[t._v("vue")]),t._v("中是如何实现的")]),t._v(" "),a("p",[t._v("代码很好理解，有"),a("code",[t._v("transition")]),t._v("就执行"),a("code",[t._v("transition")]),t._v("，没有就直接设置"),a("code",[t._v("display")]),t._v("属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vShow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObjectDirective"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VShowElement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEnter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldValue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" transition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUnmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDisplay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"v-if原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if原理"}},[t._v("#")]),t._v(" v-if原理")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v("在实现上比"),a("code",[t._v("v-show")]),t._v("要复杂的多，因为还有"),a("code",[t._v("else")]),t._v(" "),a("code",[t._v("else-if")]),t._v(" 等条件需要处理，这里我们也只摘抄源码中处理 "),a("code",[t._v("v-if")]),t._v(" 的一小部分")]),t._v(" "),a("p",[t._v("返回一个"),a("code",[t._v("node")]),t._v("节点，"),a("code",[t._v("render")]),t._v("函数通过表达式的值来决定是否生成"),a("code",[t._v("DOM")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transformIf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStructuralDirectiveTransform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(if|else|else-if)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processIf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ifNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isRoot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isRoot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          ifNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            context\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" IfConditionalExpression\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// attach this branch's codegen node to the v-if root.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parentCondition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParentCondition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("codegenNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          parentCondition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createCodegenNodeForBranch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ifNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("branches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            context\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"四、v-show与v-if的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、v-show与v-if的使用场景"}},[t._v("#")]),t._v(" 四、v-show与v-if的使用场景")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 与 "),a("code",[t._v("v-show")]),t._v(" 都能控制"),a("code",[t._v("dom")]),t._v("元素在页面的显示")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 相比 "),a("code",[t._v("v-show")]),t._v(" 开销更大的（直接操作"),a("code",[t._v("dom")]),t._v("节点增加与删除）")]),t._v(" "),a("p",[t._v("如果需要非常频繁地切换，则使用 v-show 较好")]),t._v(" "),a("p",[t._v("如果在运行时条件很少改变，则使用 v-if 较好")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/7af8554d8f08",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/7af8554d8f08"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6897948855904501768",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6897948855904501768"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vue3js/docs/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue3js/docs/zh"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);