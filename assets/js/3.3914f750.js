(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{372:function(e,t,a){e.exports=a.p+"assets/img/merge_rebase.00e310b3.png"},373:function(e,t,a){e.exports=a.p+"assets/img/merge_01.0cfeb439.png"},374:function(e,t,a){e.exports=a.p+"assets/img/merge_02.0966778b.png"},375:function(e,t,a){e.exports=a.p+"assets/img/merge_03.7e154679.png"},376:function(e,t,a){e.exports=a.p+"assets/img/rebase_01.9a478011.png"},377:function(e,t,a){e.exports=a.p+"assets/img/rebase_02.b2a03723.png"},378:function(e,t,a){e.exports=a.p+"assets/img/rebase_03.ca73876c.png"},379:function(e,t,a){e.exports=a.p+"assets/img/rebase_04.efdf7298.png"},652:function(e,t,a){"use strict";a.r(t);var _=a(28),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"git-rebase-vs-git-merge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-vs-git-merge"}},[e._v("#")]),e._v(" git rebase VS git merge")]),e._v(" "),_("p",[_("img",{attrs:{src:a(372),alt:"merge_rebase"}})]),e._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[e._v("#")]),e._v(" 一、是什么")]),e._v(" "),_("p",[e._v("在使用 "),_("code",[e._v("git")]),e._v(" 进行版本管理的项目中，当完成一个特性的开发并将其合并到 "),_("code",[e._v("master")]),e._v(" 分支时，会有两种方式：")]),e._v(" "),_("ul",[_("li",[e._v("git merge")]),e._v(" "),_("li",[e._v("git rebase")])]),e._v(" "),_("p",[_("code",[e._v("git rebase")]),e._v(" 与 "),_("code",[e._v("git merge")]),e._v("都有相同的作用，都是将一个分支的提交合并到另一分支上，但是在原理上却不相同")]),e._v(" "),_("p",[e._v("用法上两者也十分的简单：")]),e._v(" "),_("h3",{attrs:{id:"git-merge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),_("p",[e._v("将当前分支合并到指定分支，命令用法如下：")]),e._v(" "),_("div",{staticClass:"language-cmd extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git merge xxx\n")])])]),_("h3",{attrs:{id:"git-rebase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),_("p",[e._v("将当前分支移植到指定分支或指定"),_("code",[e._v("commit")]),e._v("之上，用法如下：")]),e._v(" "),_("div",{staticClass:"language-cmd extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git rebase -i <commit>\n")])])]),_("p",[e._v("常见的参数有"),_("code",[e._v("--continue")]),e._v("，用于解决冲突之后，继续执行"),_("code",[e._v("rebase")])]),e._v(" "),_("div",{staticClass:"language-cmd extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("git rebase --continue\n")])])]),_("h2",{attrs:{id:"二、分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、分析"}},[e._v("#")]),e._v(" 二、分析")]),e._v(" "),_("h3",{attrs:{id:"git-merge-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-2"}},[e._v("#")]),e._v(" git merge")]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("git merge")]),e._v("将当前分支与"),_("code",[e._v("xxx")]),e._v("分支合并，产生的新的"),_("code",[e._v("commit")]),e._v("对象有两个父节点")]),e._v(" "),_("p",[e._v("如果“指定分支”本身是当前分支的一个直接子节点，则会产生快照合并")]),e._v(" "),_("p",[e._v("举个例子，"),_("code",[e._v("bugfix")]),e._v("分支是从"),_("code",[e._v("maste")]),e._v("r分支分叉出来的，如下所示：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(373),alt:"merge_01.png"}})]),e._v(" "),_("p",[e._v("合并"),_("code",[e._v("bugfix")]),e._v("分支到"),_("code",[e._v("master")]),e._v("分支时，如果"),_("code",[e._v("master")]),e._v("分支的状态没有被更改过，即 "),_("code",[e._v("bugfix")]),e._v("分支的历史记录包含"),_("code",[e._v("master")]),e._v("分支所有的历史记录")]),e._v(" "),_("p",[e._v("所以通过把"),_("code",[e._v("master")]),e._v("分支的位置移动到"),_("code",[e._v("bugfix")]),e._v("的最新分支上，就完成合并")]),e._v(" "),_("p",[e._v("如果"),_("code",[e._v("master")]),e._v("分支的历史记录在创建"),_("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(374),alt:"merge_02.png"}})]),e._v(" "),_("p",[e._v("这时候使用"),_("code",[e._v("git merge")]),e._v("的时候，会生成一个新的提交，并且"),_("code",[e._v("master")]),e._v("分支的"),_("code",[e._v("HEAD")]),e._v("会移动到新的分支上，如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(375),alt:"merge_03.png"}})]),e._v(" "),_("p",[e._v("从上面可以看到，会把两个分支的最新快照以及二者最近的共同祖先进行三方合并，合并的结果是生成一个新的快照")]),e._v(" "),_("h3",{attrs:{id:"git-rebase-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-2"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),_("p",[e._v("同样，"),_("code",[e._v("master")]),e._v("分支的历史记录在创建"),_("code",[e._v("bugfix")]),e._v("分支后又有新的提交，如下情况：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(376),alt:"rebase_01.png"}})]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("git rebase")]),e._v("，会变成如下情况：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(377),alt:"rebase_02.png"}})]),e._v(" "),_("p",[e._v("在移交过程中，如果发生冲突，需要修改各自的冲突，如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:a(378),alt:"rebase_03.png"}})]),e._v(" "),_("p",[_("code",[e._v("rebase")]),e._v("之后，"),_("code",[e._v("master")]),e._v("的"),_("code",[e._v("HEAD")]),e._v("位置不变。因此，要合并"),_("code",[e._v("master")]),e._v("分支和"),_("code",[e._v("bugfix")]),e._v("分支")]),e._v(" "),_("p",[_("img",{attrs:{src:a(379),alt:"rebase_04.png"}})]),e._v(" "),_("p",[e._v("从上面可以看到，"),_("code",[e._v("rebase")]),e._v("会找到不同的分支的最近共同祖先，如上图的"),_("code",[e._v("B")])]),e._v(" "),_("p",[e._v("然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件（老的提交"),_("code",[e._v("X")]),e._v("和"),_("code",[e._v("Y")]),e._v("也没有被销毁，只是简单地不能再被访问或者使用）")]),e._v(" "),_("p",[e._v("然后将当前分支指向目标最新位置"),_("code",[e._v("D")]),e._v(", 然后将之前另存为临时文件的修改依序应用")]),e._v(" "),_("h2",{attrs:{id:"三、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[e._v("#")]),e._v(" 三、区别")]),e._v(" "),_("p",[e._v("从上面可以看到，"),_("code",[e._v("merge")]),e._v("和"),_("code",[e._v("rebasea")]),e._v("都是合并历史记录，但是各自特性不同：")]),e._v(" "),_("h3",{attrs:{id:"merge"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" merge")]),e._v(" "),_("p",[e._v("通过"),_("code",[e._v("merge")]),e._v("合并分支会新增一个"),_("code",[e._v("merge commit")]),e._v("，然后将两个分支的历史联系起来")]),e._v(" "),_("p",[e._v("其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂")]),e._v(" "),_("h3",{attrs:{id:"rebase"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" rebase")]),e._v(" "),_("p",[_("code",[e._v("rebase")]),e._v(" 会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交")]),e._v(" "),_("p",[e._v("主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 "),_("code",[e._v("git merge")]),e._v("所需的不必要的合并提交")]),e._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[e._v("#")]),e._v(" 参考文献")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/361182707",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://zhuanlan.zhihu.com/p/361182707"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);