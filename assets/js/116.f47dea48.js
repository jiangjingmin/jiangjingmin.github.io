(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{509:function(v,_,e){"use strict";e.r(_);var t=e(28),c=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"问题汇总"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题汇总"}},[v._v("#")]),v._v(" 问题汇总")]),v._v(" "),e("h2",{attrs:{id:"if-else-和-switch-case-如何选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else-和-switch-case-如何选择"}},[v._v("#")]),v._v(" "),e("code",[v._v("if...else")]),v._v(" 和 "),e("code",[v._v("switch...case")]),v._v(" 如何选择？")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch",target:"_blank",rel:"noopener noreferrer"}},[v._v("switch - MDN"),e("OutboundLink")],1)])]),v._v(" "),e("p",[e("code",[v._v("switch")]),v._v(" 有点以空间换时间的意思，而事实上也的确如此。")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("当分支较多时，当时用 "),e("code",[v._v("switch")]),v._v(" 的效率是很高的。因为 "),e("code",[v._v("switch")]),v._v(" 是随机访问的，就是确定了选择值之后直接跳转到那个特定的分支，但是 "),e("code",[v._v("if...else")]),v._v(" 是遍历所有的可能值，知道找到符合条件的分支。如此看来，"),e("code",[v._v("switch")]),v._v(" 的效率确实比 "),e("code",[v._v("if...else")]),v._v(" 要高的多。")])]),v._v(" "),e("li",[e("p",[v._v("由汇编代码可知道，"),e("code",[v._v("switch...case")]),v._v(" 占用较多的代码空间，因为它要生成跳表，特别是当 "),e("code",[v._v("case")]),v._v(" 常量分布范围很大但实际有效值又比较少的情况，"),e("code",[v._v("switch...case")]),v._v(" 的空间利用率将变得很低。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("switch...case")]),v._v(" 只能处理 "),e("code",[v._v("case")]),v._v(" 为常量的情况，对非常量的情况是无能为力的。例如 "),e("code",[v._v("if (a > 1 && a < 100)")]),v._v("，是无法使用 "),e("code",[v._v("switch...case")]),v._v(" 来处理的。所以，"),e("code",[v._v("switch")]),v._v(" 只能是在常量选择分支时比"),e("code",[v._v("if...else")]),v._v(" 效率高，但是 "),e("code",[v._v("if...else")]),v._v(" 能应用于更多的场合，"),e("code",[v._v("if...else")]),v._v(" 比较灵活。")])]),v._v(" "),e("li",[e("p",[v._v("在已知某几种分支出现概率较高的情况下,使用 "),e("code",[v._v("if...else")]),v._v(",将高概率分支放到前几位,由于 "),e("code",[v._v("if...else")]),v._v(" 是遍历所有值,所以使用这种方式的效率要比 "),e("code",[v._v("switch...case")]),v._v(" 高")])]),v._v(" "),e("li",[e("p",[v._v("分支出现概率相同或未知的情况下,分支数小于5 "),e("code",[v._v("if...else")]),v._v(" 的效率比 "),e("code",[v._v("switch...case")]),v._v(" 高,反之分支数大于5, "),e("code",[v._v("switch...case")]),v._v(" 效率比 "),e("code",[v._v("if...else")]),v._v(" 高")])])]),v._v(" "),e("p",[e("code",[v._v("if")]),v._v(" 和 "),e("code",[v._v("switch")]),v._v(" 都可以设计多重分支结构，一般情况下 "),e("code",[v._v("switch")]),v._v(" 执行效率要高于 "),e("code",[v._v("if")]),v._v(" 语句。但是也不能一概而论，应根据具体问题具体分析。简单比较如表所示。")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("语句")]),v._v(" "),e("th",[v._v("If 语句")]),v._v(" "),e("th",[v._v("Switch 语句")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[v._v("结构")]),v._v(" "),e("td",[v._v("通过嵌套结构实现多重分支")]),v._v(" "),e("td",[v._v("专为多重分支设计")])]),v._v(" "),e("tr",[e("td",[v._v("条件")]),v._v(" "),e("td",[v._v("可以测试多个条件表达式")]),v._v(" "),e("td",[v._v("仅能测试一个条件表达式")])]),v._v(" "),e("tr",[e("td",[v._v("逻辑关系")]),v._v(" "),e("td",[v._v("可以处理复杂的逻辑关系")]),v._v(" "),e("td",[v._v("仅能处理多个枚举的逻辑关系")])]),v._v(" "),e("tr",[e("td",[v._v("数据类型")]),v._v(" "),e("td",[v._v("可以适用任何数据类型")]),v._v(" "),e("td",[v._v("仅能应用整数、枚举、字符串等类型")])])])]),v._v(" "),e("p",[v._v("相对而言，下面情况更事宜选用 switch 语句。")]),v._v(" "),e("ul",[e("li",[v._v("枚举表达式的值。这种枚举是可以期望的、平行的逻辑关系。")]),v._v(" "),e("li",[v._v("表达式的值具有离散性，是不具有线性的非连续的区间值。")]),v._v(" "),e("li",[v._v("表达式的值是固定的，不会动态变化。")]),v._v(" "),e("li",[v._v("表达式的值是有限的，不是无限的，一般应该比较少。")]),v._v(" "),e("li",[v._v("表达式的值一般为整数、字符串等简单的值。")])]),v._v(" "),e("p",[v._v("下面情况更事宜用 if 语句。")]),v._v(" "),e("ul",[e("li",[v._v("具有复杂的逻辑关系。")]),v._v(" "),e("li",[v._v("表达式的值具有线性特征，去对连续的区间值进行判断。")]),v._v(" "),e("li",[v._v("表达式的值是动态的。")]),v._v(" "),e("li",[v._v("测试任意类型的数据。")])])])}),[],!1,null,null,null);_.default=c.exports}}]);