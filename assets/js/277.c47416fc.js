(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{681:function(t,e,v){"use strict";v.r(e);var _=v(28),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"说说对git-pull-和-git-fetch-的理解-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说说对git-pull-和-git-fetch-的理解-有什么区别"}},[t._v("#")]),t._v(" 说说对git pull 和 git fetch 的理解？有什么区别？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/cc90c050-fac2-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"一、是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),v("p",[t._v("先回顾两个命令的定义")]),t._v(" "),v("ul",[v("li",[t._v("git fetch 命令用于从另一个存储库下载对象和引用")]),t._v(" "),v("li",[t._v("git pull 命令用于从另一个存储库或本地分支获取并集成(整合)")])]),t._v(" "),v("p",[t._v("再来看一次"),v("code",[t._v("git")]),t._v("的工作流程图，如下所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/d523ba60-fac2-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),v("p",[t._v("可以看到，"),v("code",[t._v("git fetch")]),t._v("是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中")]),t._v(" "),v("p",[t._v("而"),v("code",[t._v("git pull")]),t._v(" 则是将远程主机的最新内容拉下来后直接合并，即："),v("code",[t._v("git pull = git fetch + git merge")]),t._v("，这样可能会产生冲突，需要手动解决")]),t._v(" "),v("p",[t._v("在我们本地的"),v("code",[t._v("git")]),t._v("文件中对应也存储了"),v("code",[t._v("git")]),t._v("本地仓库分支的"),v("code",[t._v("commit ID")]),t._v("和 跟踪的远程分支的"),v("code",[t._v("commit ID")]),t._v("，对应文件如下：")]),t._v(" "),v("ul",[v("li",[t._v(".git/refs/head/[本地分支]")]),t._v(" "),v("li",[t._v(".git/refs/remotes/[正在跟踪的分支]")])]),t._v(" "),v("p",[t._v("使用 "),v("code",[t._v("git fetch")]),t._v("更新代码，本地的库中"),v("code",[t._v("master")]),t._v("的"),v("code",[t._v("commitID")]),t._v("不变")]),t._v(" "),v("p",[t._v("但是与"),v("code",[t._v("git")]),t._v("上面关联的那个"),v("code",[t._v("orign/master")]),t._v("的"),v("code",[t._v("commit ID")]),t._v("发生改变")]),t._v(" "),v("p",[t._v("这时候我们本地相当于存储了两个代码的版本号，我们还要通过"),v("code",[t._v("merge")]),t._v("去合并这两个不同的代码版本")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/fd23ff70-fb12-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),v("p",[t._v("也就是"),v("code",[t._v("fetch")]),t._v("的时候本地的"),v("code",[t._v("master")]),t._v("没有变化，但是与远程仓关联的那个版本号被更新了，接下来就是在本地"),v("code",[t._v("merge")]),t._v("合并这两个版本号的代码")]),t._v(" "),v("p",[t._v("相比之下，使用"),v("code",[t._v("git pull")]),t._v("就更加简单粗暴，会将本地的代码更新至远程仓库里面最新的代码版本，如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.vue-js.com/091b8140-fb13-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"二、用法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、用法"}},[t._v("#")]),t._v(" 二、用法")]),t._v(" "),v("p",[t._v("一般远端仓库里有新的内容更新，当我们需要把新内容下载的时候，就使用到"),v("code",[t._v("git pull")]),t._v("或者"),v("code",[t._v("git fetch")]),t._v("命令")]),t._v(" "),v("h3",{attrs:{id:"fetch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" fetch")]),t._v(" "),v("p",[t._v("用法如下：")]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git fetch <远程主机名> <远程分支名>:<本地分支名>\n")])])]),v("p",[t._v("例如从远程的"),v("code",[t._v("origin")]),t._v("仓库的"),v("code",[t._v("master")]),t._v("分支下载代码到本地并新建一个"),v("code",[t._v("temp")]),t._v("分支")]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git fetch origin master:temp\n")])])]),v("p",[t._v("如果上述没有冒号，则表示将远程"),v("code",[t._v("origin")]),t._v("仓库的"),v("code",[t._v("master")]),t._v("分支拉取下来到本地当前分支")]),t._v(" "),v("p",[t._v("这里"),v("code",[t._v("git fetch")]),t._v("不会进行合并，执行后需要手动执行"),v("code",[t._v("git merge")]),t._v("合并，如下：")]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git merge temp\n")])])]),v("h3",{attrs:{id:"pull"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[t._v("#")]),t._v(" pull")]),t._v(" "),v("p",[t._v("两者的用法十分相似，"),v("code",[t._v("pull")]),t._v("用法如下：")]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git pull <远程主机名> <远程分支名>:<本地分支名>\n")])])]),v("p",[t._v("例如将远程主机"),v("code",[t._v("origin")]),t._v("的"),v("code",[t._v("master")]),t._v("分支拉取过来，与本地的"),v("code",[t._v("branchtest")]),t._v("分支合并，命令如下：")]),t._v(" "),v("div",{staticClass:"language-cmd extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("git pull origin master:branchtest\n")])])]),v("p",[t._v("同样如果上述没有冒号，则表示将远程"),v("code",[t._v("origin")]),t._v("仓库的"),v("code",[t._v("master")]),t._v("分支拉取下来与本地当前分支合并")]),t._v(" "),v("h2",{attrs:{id:"三、区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),v("p",[t._v("相同点：")]),t._v(" "),v("ul",[v("li",[t._v("在作用上他们的功能是大致相同的，都是起到了更新代码的作用")])]),t._v(" "),v("p",[t._v("不同点：")]),t._v(" "),v("ul",[v("li",[t._v("git pull是相当于从远程仓库获取最新版本，然后再与本地分支merge，即git pull = git fetch + git merge")]),t._v(" "),v("li",[t._v("相比起来，git fetch 更安全也更符合实际要求，在 merge 前，我们可以查看更新情况，根据实际情况再决定是否合并")])]),t._v(" "),v("h2",{attrs:{id:"参考文献"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),v("ul",[v("li",[t._v("https://zhuanlan.zhihu.com/p/123370920")]),t._v(" "),v("li",[t._v("https://segmentfault.com/a/1190000017030384")]),t._v(" "),v("li",[t._v("https://juejin.cn/post/6844903921794859021")])])])}),[],!1,null,null,null);e.default=a.exports}}]);