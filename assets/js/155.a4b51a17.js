(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{554:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说-node-js-有哪些全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-node-js-有哪些全局对象"}},[t._v("#")]),t._v(" 面试官：说说 Node. js 有哪些全局对象？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/79c7b100-c2a3-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("p",[t._v("在浏览器 "),a("code",[t._v("JavaScript")]),t._v(" 中，通常"),a("code",[t._v("window")]),t._v(" 是全局对象， 而 "),a("code",[t._v("Nodejs")]),t._v("中的全局对象是 "),a("code",[t._v("global")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("NodeJS")]),t._v("里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过"),a("code",[t._v("exports")]),t._v("对象的使用将其传递给模块外部")]),t._v(" "),a("p",[t._v("所以，在"),a("code",[t._v("NodeJS")]),t._v("中，用"),a("code",[t._v("var")]),t._v("声明的变量并不属于全局的变量，只在当前模块生效")]),t._v(" "),a("p",[t._v("像上述的"),a("code",[t._v("global")]),t._v("全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值")]),t._v(" "),a("h2",{attrs:{id:"二、有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、有哪些"}},[t._v("#")]),t._v(" 二、有哪些")]),t._v(" "),a("p",[t._v("将全局对象分成两类：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("真正的全局对象")])]),t._v(" "),a("li",[a("p",[t._v("模块级别的全局变量")])])]),t._v(" "),a("h3",{attrs:{id:"真正的全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#真正的全局对象"}},[t._v("#")]),t._v(" 真正的全局对象")]),t._v(" "),a("p",[t._v("下面给出一些常见的全局对象：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Class:Buffer")])]),t._v(" "),a("li",[a("p",[t._v("process")])]),t._v(" "),a("li",[a("p",[t._v("console")])]),t._v(" "),a("li",[a("p",[t._v("clearInterval、setInterval")])]),t._v(" "),a("li",[a("p",[t._v("clearTimeout、setTimeout")])]),t._v(" "),a("li",[a("p",[t._v("global")])])]),t._v(" "),a("h4",{attrs:{id:"class-buffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-buffer"}},[t._v("#")]),t._v(" Class:Buffer")]),t._v(" "),a("p",[t._v("可以处理二进制以及非"),a("code",[t._v("Unicode")]),t._v("编码的数据")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Buffer")]),t._v("类实例化中存储了原始数据。"),a("code",[t._v("Buffer")]),t._v("类似于一个整数数组，在V8堆原始存储空间给它分配了内存")]),t._v(" "),a("p",[t._v("一旦创建了"),a("code",[t._v("Buffer")]),t._v("实例，则无法改变大小")]),t._v(" "),a("h4",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[t._v("#")]),t._v(" process")]),t._v(" "),a("p",[t._v("进程对象，提供有关当前进程的信息和控制")]),t._v(" "),a("p",[t._v("包括在执行"),a("code",[t._v("node")]),t._v("程序进程时，如果需要传递参数，我们想要获取这个参数需要在"),a("code",[t._v("process")]),t._v("内置对象中")]),t._v(" "),a("p",[t._v("启动进程：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" node index.js 参数1 参数2 参数3\n")])])]),a("p",[t._v("index.js文件如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mjr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("work"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n参数"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),a("p",[t._v("除此之外，还包括一些其他信息如版本、操作系统等")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/85f473a0-c2a3-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[t._v("#")]),t._v(" console")]),t._v(" "),a("p",[t._v("用来打印"),a("code",[t._v("stdout")]),t._v("和"),a("code",[t._v("stderr")])]),t._v(" "),a("p",[t._v("最常用的输入内容的方式：console.log")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("清空控制台：console.clear")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clear\n")])])]),a("p",[t._v("打印函数的调用栈：console.trace")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/91b6dbb0-c2a3-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"clearinterval、setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clearinterval、setinterval"}},[t._v("#")]),t._v(" clearInterval、setInterval")]),t._v(" "),a("p",[t._v("设置定时器与清除定时器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("callback")]),t._v("每"),a("code",[t._v("delay")]),t._v("毫秒重复执行一次")]),t._v(" "),a("p",[a("code",[t._v("clearInterval")]),t._v("则为对应发取消定时器的方法")]),t._v(" "),a("h4",{attrs:{id:"cleartimeout、settimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleartimeout、settimeout"}},[t._v("#")]),t._v(" clearTimeout、setTimeout")]),t._v(" "),a("p",[t._v("设置延时器与清除延时器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("callback")]),t._v("在"),a("code",[t._v("delay")]),t._v("毫秒后执行一次")]),t._v(" "),a("p",[a("code",[t._v("clearTimeout")]),t._v("则为对应取消延时器的方法")]),t._v(" "),a("h4",{attrs:{id:"global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global"}},[t._v("#")]),t._v(" global")]),t._v(" "),a("p",[t._v("全局命名空间对象，墙面讲到的"),a("code",[t._v("process")]),t._v("、"),a("code",[t._v("console")]),t._v("、"),a("code",[t._v("setTimeout")]),t._v("等都有放到"),a("code",[t._v("global")]),t._v("中")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"模块级别的全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块级别的全局对象"}},[t._v("#")]),t._v(" 模块级别的全局对象")]),t._v(" "),a("p",[t._v("这些全局对象是模块中的变量，只是每个模块都有，看起来就像全局变量，像在命令交互中是不可以使用，包括：")]),t._v(" "),a("ul",[a("li",[t._v("__dirname")]),t._v(" "),a("li",[t._v("__filename")]),t._v(" "),a("li",[t._v("exports")]),t._v(" "),a("li",[t._v("module")]),t._v(" "),a("li",[t._v("require")])]),t._v(" "),a("h4",{attrs:{id:"dirname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname"}},[t._v("#")]),t._v(" __dirname")]),t._v(" "),a("p",[t._v("获取当前文件所在的路径，不包括后面的文件名")]),t._v(" "),a("p",[t._v("从 "),a("code",[t._v("/Users/mjr")]),t._v(" 运行 "),a("code",[t._v("node example.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印: /Users/mjr")]),t._v("\n")])])]),a("h4",{attrs:{id:"filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filename"}},[t._v("#")]),t._v(" __filename")]),t._v(" "),a("p",[t._v("获取当前文件所在的路径和文件名称，包括后面的文件名称")]),t._v(" "),a("p",[t._v("从 "),a("code",[t._v("/Users/mjr")]),t._v(" 运行 "),a("code",[t._v("node example.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印: /Users/mjr/example.js")]),t._v("\n")])])]),a("h4",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" exports")]),t._v(" "),a("p",[a("code",[t._v("module.exports")]),t._v(" 用于指定一个模块所导出的内容，即可以通过 "),a("code",[t._v("require()")]),t._v(" 访问的内容")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sayHello "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sayHello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" module")]),t._v(" "),a("p",[t._v("对当前模块的引用，通过"),a("code",[t._v("module.exports")]),t._v(" 用于指定一个模块所导出的内容，即可以通过 "),a("code",[t._v("require()")]),t._v(" 访问的内容")]),t._v(" "),a("h4",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[t._v("#")]),t._v(" require")]),t._v(" "),a("p",[t._v("用于引入模块、 "),a("code",[t._v("JSON")]),t._v("、或本地文件。 可以从 "),a("code",[t._v("node_modules")]),t._v(" 引入模块。")]),t._v(" "),a("p",[t._v("可以使用相对路径引入本地模块或"),a("code",[t._v("JSON")]),t._v("文件，路径会根据"),a("code",[t._v("__dirname")]),t._v("定义的目录名或当前工作目录进行处理")]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("http://nodejs.cn/api/globals.html")]),t._v(" "),a("li",[t._v("https://vue3js.cn/interview")])])])}),[],!1,null,null,null);s.default=n.exports}}]);