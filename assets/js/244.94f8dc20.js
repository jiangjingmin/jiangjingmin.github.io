(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{622:function(_,t,v){"use strict";v.r(t);var e=v(28),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"babel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[_._v("#")]),_._v(" Babel")]),_._v(" "),v("p",[_._v("简单地说，Babel 能够转译 ECMAScript 2015+ 的代码，使它在旧的浏览器或者环境中也能够运行。")]),_._v(" "),v("p",[_._v("Babel 本质上就是在操作 抽象语法树（Abstract Syntax Tree, AST） 来完成代码的转译。")]),_._v(" "),v("p",[_._v("Babel 原理：首先将源码转成抽象语法树，然后对语法树进行处理生成新的语法树，最后将新语法树生成新的 JS 代码，整个编译过程可以分为 3 个阶段 parsing (解析)、transforming (转换)、generating (生成)")]),_._v(" "),v("h3",{attrs:{id:"_3-模板引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-模板引擎"}},[_._v("#")]),_._v(" 3. 模板引擎")]),_._v(" "),v("p",[_._v("一个模板引擎就是把一个字符串中的变量用model的变量替换掉。")]),_._v(" "),v("p",[_._v("如何实现一个最简模板引擎")]),_._v(" "),v("ol",[v("li",[_._v("正则抠出要匹配的内容")]),_._v(" "),v("li",[_._v("装入数组")]),_._v(" "),v("li",[_._v("分辨js逻辑部分")]),_._v(" "),v("li",[_._v("引擎函数")]),_._v(" "),v("li",[_._v("把data扔进去")])]),_._v(" "),v("p",[_._v("Vue 模板编译原理")]),_._v(" "),v("ul",[v("li",[_._v("第一步是将 模板字符串 转换成 element ASTs（解析器）")]),_._v(" "),v("li",[_._v("第二步是对 AST\n进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）")]),_._v(" "),v("li",[_._v("第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）")])]),_._v(" "),v("p",[_._v("Vue 模板编译过程")]),_._v(" "),v("ul",[v("li",[_._v("解析"),v("strong",[_._v("开始标签")]),_._v("：这段模板字符串会扔到 while 中去循环，然后 一段一段 的截取，把截取到的 每一小段字符串 进行解析，直到最后截没了，也就解析完了。")]),_._v(" "),v("li",[_._v("维护stack：用正则把 开始标签 中包含的数据（attrs, tagName 等）解析出来之后还要做一个很重要的事，就是要维护一个 stack。这个 stack 是用来记录一个层级关系的，用来记录DOM的深度。")]),_._v(" "),v("li",[_._v("截取文本：继续上面的例子解析剩余的模板字符串")]),_._v(" "),v("li",[_._v("解析文本：")]),_._v(" "),v("li",[_._v("处理结束标签，pop出来")])])])}),[],!1,null,null,null);t.default=a.exports}}]);