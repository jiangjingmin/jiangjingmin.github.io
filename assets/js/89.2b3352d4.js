(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{485:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"面试官-css中-有哪些方式可以隐藏页面元素-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试官-css中-有哪些方式可以隐藏页面元素-区别"}},[t._v("#")]),t._v(" 面试官：css中，有哪些方式可以隐藏页面元素？区别?")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.vue-js.com/ccf96f50-929a-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("在平常的样式排版中，我们经常遇到将某个模块隐藏的场景")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("css")]),t._v("隐藏元素的方法有很多种，它们看起来实现的效果是一致的")]),t._v(" "),s("p",[t._v("但实际上每一种方法都有一丝轻微的不同，这些不同决定了在一些特定场合下使用哪一种方法")]),t._v(" "),s("h2",{attrs:{id:"二、实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、实现方式"}},[t._v("#")]),t._v(" 二、实现方式")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("css")]),t._v("实现隐藏元素方法有如下：")]),t._v(" "),s("ul",[s("li",[t._v("display:none")]),t._v(" "),s("li",[t._v("visibility:hidden")]),t._v(" "),s("li",[t._v("opacity:0")]),t._v(" "),s("li",[t._v("设置height、width模型属性为0")]),t._v(" "),s("li",[t._v("position:absolute")]),t._v(" "),s("li",[t._v("clip-path")])]),t._v(" "),s("h3",{attrs:{id:"display-none"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[t._v("#")]),t._v(" display:none")]),t._v(" "),s("p",[t._v("设置元素的"),s("code",[t._v("display")]),t._v("为"),s("code",[t._v("none")]),t._v("是最常用的隐藏元素的方法")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("将元素设置为"),s("code",[t._v("display:none")]),t._v("后，元素在页面上将彻底消失")]),t._v(" "),s("p",[t._v("元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘")]),t._v(" "),s("p",[t._v("消失后，自身绑定的事件不会触发，也不会有过渡效果")]),t._v(" "),s("p",[t._v("特点：元素不可见，不占据空间，无法响应点击事件")]),t._v(" "),s("h3",{attrs:{id:"visibility-hidden"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visibility-hidden"}},[t._v("#")]),t._v(" visibility:hidden")]),t._v(" "),s("p",[t._v("设置元素的"),s("code",[t._v("visibility")]),t._v("为"),s("code",[t._v("hidden")]),t._v("也是一种常用的隐藏元素的方法")]),t._v(" "),s("p",[t._v("从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hidden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("给人的效果是隐藏了，所以他自身的事件不会触发")]),t._v(" "),s("p",[t._v("特点：元素不可见，占据页面空间，无法响应点击事件")]),t._v(" "),s("h3",{attrs:{id:"opacity-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opacity-0"}},[t._v("#")]),t._v(" opacity:0")]),t._v(" "),s("p",[s("code",[t._v("opacity")]),t._v("属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的")]),t._v(" "),s("p",[t._v("不会引发重排，一般情况下也会引发重绘")]),t._v(" "),s("blockquote",[s("p",[t._v("如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".transparent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的")]),t._v(" "),s("p",[t._v("需要注意的是：其子元素不能设置opacity来达到显示的效果")]),t._v(" "),s("p",[t._v("特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件")]),t._v(" "),s("h3",{attrs:{id:"设置height、width属性为0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置height、width属性为0"}},[t._v("#")]),t._v(" 设置height、width属性为0")]),t._v(" "),s("p",[t._v("将元素的"),s("code",[t._v("margin")]),t._v("，"),s("code",[t._v("border")]),t._v("，"),s("code",[t._v("padding")]),t._v("，"),s("code",[t._v("height")]),t._v("和"),s("code",[t._v("width")]),t._v("等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其"),s("code",[t._v("overflow:hidden")]),t._v("来隐藏其子元素")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hiddenBox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("特点：元素不可见，不占据页面空间，无法响应点击事件")]),t._v(" "),s("h3",{attrs:{id:"position-absolute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#position-absolute"}},[t._v("#")]),t._v(" position:absolute")]),t._v(" "),s("p",[t._v("将元素移出可视区域")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -9999px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("特点：元素不可见，不影响页面布局")]),t._v(" "),s("h3",{attrs:{id:"clip-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clip-path"}},[t._v("#")]),t._v(" clip-path")]),t._v(" "),s("p",[t._v("通过裁剪的形式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0px 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0px 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0px 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0px 0px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("特点：元素不可见，占据页面空间，无法响应点击事件")]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("最常用的还是"),s("code",[t._v("display:none")]),t._v("和"),s("code",[t._v("visibility:hidden")]),t._v("，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们")]),t._v(" "),s("h2",{attrs:{id:"三、区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("display: none")]),t._v("、"),s("code",[t._v("visibility: hidden")]),t._v("、"),s("code",[t._v("opacity: 0")]),t._v("的区别，如下表所示：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("display: none")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("visibility: hidden")]),t._v(" "),s("th",[t._v("opacity: 0")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("页面中")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存在")]),t._v(" "),s("td",[t._v("存在")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("重排")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("会")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不会")]),t._v(" "),s("td",[t._v("不会")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("重绘")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("会")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("会")]),t._v(" "),s("td",[t._v("不一定")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("自身绑定事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不触发")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不触发")]),t._v(" "),s("td",[t._v("可触发")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("transition")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),s("td",[t._v("支持")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("子元素可复原")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("能")]),t._v(" "),s("td",[t._v("不能")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("被遮挡的元素可触发事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("能")]),t._v(" "),s("td",[t._v("不能")])])])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://www.cnblogs.com/a-cat/p/9039962.html")])])])}),[],!1,null,null,null);a.default=n.exports}}]);