(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{651:function(t,e,a){"use strict";a.r(e);var r=a(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说你对git-reset-和-git-revert-的理解-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说你对git-reset-和-git-revert-的理解-区别"}},[t._v("#")]),t._v(" 面试官：说说你对git reset 和 git revert 的理解？区别？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/046b4440-ff74-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),a("h3",{attrs:{id:"git-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),a("p",[a("code",[t._v("reset")]),t._v("用于回退版本，可以遗弃不再使用的提交")]),t._v(" "),a("p",[t._v("执行遗弃时，需要根据影响的范围而指定不同的参数，可以指定是否复原索引或工作树内容")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/ab4d0c00-ff72-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"git-revert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),a("p",[t._v("在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/bd12c290-ff72-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、如何用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何用"}},[t._v("#")]),t._v(" 二、如何用")]),t._v(" "),a("h3",{attrs:{id:"git-reset-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-2"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),a("p",[t._v("当没有指定"),a("code",[t._v("ID")]),t._v("的时候，默认使用"),a("code",[t._v("HEAD")]),t._v("，如果指定"),a("code",[t._v("ID")]),t._v("，那么就是基于指向"),a("code",[t._v("ID")]),t._v("去变动暂存区或工作区的内容")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 没有指定ID, 暂存区的内容会被当前ID版本号的内容覆盖，工作区不变\ngit reset\n\n// 指定ID，暂存区的内容会被指定ID版本号的内容覆盖，工作区不变\ngit reset <ID> \n")])])]),a("p",[t._v("日志"),a("code",[t._v("ID")]),t._v("可以通过查询，可以"),a("code",[t._v("git log")]),t._v("进行查询，如下：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("commit a7700083ace1204ccdff9f71631fb34c9913f7c5 (HEAD -> master)\nAuthor: linguanghui <linguanghui@baidu.com>\nDate:   Tue Aug 17 22:34:40 2021 +0800\n\n    second commit\n\ncommit e31118663ce66717edd8a179688a7f3dde5a9393\nAuthor: linguanghui <linguanghui@baidu.com>\nDate:   Tue Aug 17 22:20:01 2021 +0800\n\n    first commit\n")])])]),a("p",[t._v("常见命令如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("--mixed（默认）：默认的时候，只有暂存区变化")])]),t._v(" "),a("li",[a("p",[t._v("--hard参数：如果使用 --hard 参数，那么工作区也会变化")])]),t._v(" "),a("li",[a("p",[t._v("--soft：如果使用 --soft 参数，那么暂存区和工作区都不会变化")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/225b41e0-ff73-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"git-revert-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-2"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),a("p",[t._v("跟"),a("code",[t._v("git reset")]),t._v("用法基本一致，"),a("code",[t._v("git revert")]),t._v(" 撤销某次操作，此次操作之前和之后的 "),a("code",[t._v("commit")]),t._v("和"),a("code",[t._v("history")]),t._v("都会保留，并且把这次撤销，作为一次最新的提交，如下：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git revert <commit_id> \n")])])]),a("p",[t._v("如果撤销前一个版本，可以通过如下命令：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git revert HEAD\n")])])]),a("p",[t._v("撤销前前一次，如下：")]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git revert HEAD^\n")])])]),a("h2",{attrs:{id:"三、区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),a("p",[t._v("撤销（revert）被设计为撤销公开的提交（比如已经push）的安全方式，"),a("code",[t._v("git reset")]),t._v("被设计为重设本地更改")]),t._v(" "),a("p",[t._v("因为两个命令的目的不同，它们的实现也不一样：重设完全地移除了一堆更改，而撤销保留了原来的更改，用一个新的提交来实现撤销")]),t._v(" "),a("p",[t._v("两者主要区别如下：")]),t._v(" "),a("ul",[a("li",[t._v("git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit")]),t._v(" "),a("li",[t._v("git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容")]),t._v(" "),a("li",[t._v("在回滚这一操作上看，效果差不多。但是在日后继续 merge 以前的老版本时有区别")])]),t._v(" "),a("blockquote",[a("p",[t._v("git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，之前提交合并的代码仍然存在，导致不能够重新合并")]),t._v(" "),a("p",[t._v("但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入")])]),t._v(" "),a("ul",[a("li",[t._v("如果回退分支的代码以后还需要的情况则使用"),a("code",[t._v("git revert")]),t._v("， 如果分支是提错了没用的并且不想让别人发现这些错误代码，则使用"),a("code",[t._v("git reset")])])]),t._v(" "),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("ul",[a("li",[t._v("https://juejin.cn/post/6844903542931587086")]),t._v(" "),a("li",[t._v("https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset")])])])}),[],!1,null,null,null);e.default=s.exports}}]);