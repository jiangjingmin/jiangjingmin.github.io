(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{530:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说-javascript-数字精度丢失的问题-如何解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-javascript-数字精度丢失的问题-如何解决"}},[t._v("#")]),t._v(" 面试官：说说 Javascript 数字精度丢失的问题，如何解决？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、场景复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、场景复现"}},[t._v("#")]),t._v(" 一、场景复现")]),t._v(" "),a("p",[t._v("一个经典的面试题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("为什么是"),a("code",[t._v("false")]),t._v("呢?")]),t._v(" "),a("p",[t._v("先看下面这个比喻")]),t._v(" "),a("p",[t._v("比如一个数 1÷3=0.33333333......")]),t._v(" "),a("p",[t._v("3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题")]),t._v(" "),a("h2",{attrs:{id:"二、浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、浮点数"}},[t._v("#")]),t._v(" 二、浮点数")]),t._v(" "),a("p",[t._v("“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储")]),t._v(" "),a("p",[t._v("我们也可以理解成，浮点数就是小数")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("JavaScript")]),t._v("中，现在主流的数值类型是"),a("code",[t._v("Number")]),t._v("，而"),a("code",[t._v("Number")]),t._v("采用的是"),a("code",[t._v("IEEE754")]),t._v("规范中64位双精度浮点数编码")]),t._v(" "),a("p",[t._v("这样的存储结构优点是可以归一化处理整数和小数，节省存储空间")]),t._v(" "),a("p",[t._v("对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了")]),t._v(" "),a("p",[t._v("而计算机只能用二进制（0或1）表示，二进制转换为科学记数法的公式如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("其中，"),a("code",[t._v("a")]),t._v("的值为0或者1，e为小数点移动的位置")]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("p",[t._v("27.0转化成二进制为11011.0 ，科学计数法表示为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/37007090-86f4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),a("p",[t._v("前面讲到，"),a("code",[t._v("javaScript")]),t._v("存储方式是双精度浮点数，其长度为8个字节，即64位比特")]),t._v(" "),a("p",[t._v("64位比特又可分为三个部分：")]),t._v(" "),a("ul",[a("li",[t._v("符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数")]),t._v(" "),a("li",[t._v("指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023")]),t._v(" "),a("li",[t._v("尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零")])]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("p",[t._v("27.5 转换为二进制11011.1")]),t._v(" "),a("p",[t._v("11011.1转换为科学记数法 "),a("img",{attrs:{src:"https://www.zhihu.com/equation?tex=1.10111%2A2%5E4",alt:"[公式]"}})]),t._v(" "),a("p",[t._v("符号位为1(正数)，指数位为4+，1023+4，即1027")]),t._v(" "),a("p",[t._v("因为它是十进制的需要转换为二进制，即 "),a("code",[t._v("10000000011")]),t._v("，小数部分为"),a("code",[t._v("10111")]),t._v("，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`")]),t._v(" "),a("p",[t._v("所以27.5存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示")]),t._v(" "),a("p",[t._v("0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`")]),t._v(" "),a("h2",{attrs:{id:"二、问题分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、问题分析"}},[t._v("#")]),t._v(" 二、问题分析")]),t._v(" "),a("p",[t._v("再回到问题上")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),a("p",[t._v("通过上面的学习，我们知道，在"),a("code",[t._v("javascript")]),t._v("语言中，0.1 和 0.2 都转化成二进制后再进行运算")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0.1 和 0.2 都转化成二进制后再进行运算")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00011001100110011001100110011001100110011001100110011010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0011001100110011001100110011001100110011001100110011010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0100110011001100110011001100110011001100110011001100111")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转成十进制正好是 0.30000000000000004")]),t._v("\n")])])]),a("p",[t._v("所以输出"),a("code",[t._v("false")])]),t._v(" "),a("p",[t._v("再来一个问题，那么为什么"),a("code",[t._v("x=0.1")]),t._v("得到"),a("code",[t._v("0.1")]),t._v("？")]),t._v(" "),a("p",[t._v("主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是"),a("code",[t._v("2^53=9007199254740992")]),t._v("，对应科学计数尾数是 "),a("code",[t._v("9.007199254740992")]),t._v("，这也是 JS 最多能表示的精度")]),t._v(" "),a("p",[t._v("它的长度是 16，所以可以使用 "),a("code",[t._v("toPrecision(16)")]),t._v(" 来做精度运算，超过的精度会自动做凑整处理")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".10000000000000000555")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPrecision")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1")]),t._v("\n")])])]),a("p",[t._v("但看到的 "),a("code",[t._v("0.1")]),t._v(" 实际上并不是 "),a("code",[t._v("0.1")]),t._v("。不信你可用更高的精度试试：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPrecision")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.100000000000000005551")]),t._v("\n")])])]),a("p",[t._v("如果整数大于 "),a("code",[t._v("9007199254740992")]),t._v(" 会出现什么情况呢？")]),t._v(" "),a("p",[t._v("由于指数位最大值是1023，所以最大可以表示的整数是 "),a("code",[t._v("2^1024 - 1")]),t._v("，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 "),a("code",[t._v("2^1024")]),t._v(" 开始就变成了 "),a("code",[t._v("Infinity")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> Math.pow(2, 1023)\n8.98846567431158e+307\n\n> Math.pow(2, 1024)\nInfinity\n")])])]),a("p",[t._v("那么对于 "),a("code",[t._v("(2^53, 2^63)")]),t._v(" 之间的数会出现什么情况呢？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("(2^53, 2^54)")]),t._v(" 之间的数会两个选一个，只能精确表示偶数")]),t._v(" "),a("li",[a("code",[t._v("(2^54, 2^55)")]),t._v(" 之间的数会四个选一个，只能精确表示4个倍数")]),t._v(" "),a("li",[t._v("... 依次跳过更多2的倍数")])]),t._v(" "),a("p",[t._v("要想解决大数的问题你可以引用第三方库 "),a("code",[t._v("bignumber.js")]),t._v("，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多")]),t._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法")]),t._v(" "),a("p",[t._v("因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差")]),t._v(" "),a("h2",{attrs:{id:"三、解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[t._v("#")]),t._v(" 三、解决方案")]),t._v(" "),a("p",[t._v("理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果")]),t._v(" "),a("p",[t._v("当你拿到 "),a("code",[t._v("1.4000000000000001")]),t._v(" 这样的数据要展示时，建议使用 "),a("code",[t._v("toPrecision")]),t._v(" 凑整并 "),a("code",[t._v("parseFloat")]),t._v(" 转成数字后再显示，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True\n")])])]),a("p",[t._v("封装成方法就是：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" precision "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPrecision")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("precision"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于运算类操作，如 "),a("code",[t._v("+-*/")]),t._v("，就不能使用 "),a("code",[t._v("toPrecision")]),t._v(" 了。正确的做法是把小数转成整数后再运算。以加法为例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 精确加法\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num1Digits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num2Digits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1Digits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2Digits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" baseNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" baseNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" baseNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最后还可以使用第三方库，如"),a("code",[t._v("Math.js")]),t._v("、"),a("code",[t._v("BigDecimal.js")])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://zhuanlan.zhihu.com/p/100353781")]),t._v(" "),a("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt")])])])}),[],!1,null,null,null);s.default=e.exports}}]);