(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{650:function(t,v,_){"use strict";_.r(v);var a=_(28),c=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说说git中-fork-clone-branch这三个概念-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说git中-fork-clone-branch这三个概念-有什么区别"}},[t._v("#")]),t._v(" 面试官：说说Git中 fork, clone,branch这三个概念，有什么区别?")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/9c4eb9a0-f7ad-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),_("h3",{attrs:{id:"fork"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[t._v("#")]),t._v(" fork")]),t._v(" "),_("p",[_("code",[t._v("fork")]),t._v("，英语翻译过来就是叉子，动词形式则是分叉，如下图，从左到右，一条直线变成多条直线")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/ad04ade0-f7ad-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("转到"),_("code",[t._v("git")]),t._v("仓库中，"),_("code",[t._v("fork")]),t._v("则可以代表分叉、克隆 出一个（仓库的）新拷贝")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/b4b31450-f7ad-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("包含了原来的仓库（即upstream repository，上游仓库）所有内容，如分支、Tag、提交")]),t._v(" "),_("p",[t._v("如果想将你的修改合并到原项目中时，可以通过的 Pull Request 把你的提交贡献回 原仓库")]),t._v(" "),_("h3",{attrs:{id:"clone"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[t._v("#")]),t._v(" clone")]),t._v(" "),_("p",[_("code",[t._v("clone")]),t._v("，译为克隆，它的作用是将文件从远程代码仓下载到本地，从而形成一个本地代码仓")]),t._v(" "),_("p",[t._v("执行"),_("code",[t._v("clone")]),t._v("命令后，会在当前目录下创建一个名为"),_("code",[t._v("xxx")]),t._v("的目录，并在这个目录下初始化一个 "),_("code",[t._v(".git")]),t._v(" 文件夹，然后从中读取最新版本的文件的拷贝")]),t._v(" "),_("p",[t._v("默认配置下远程 "),_("code",[t._v("Git")]),t._v(" 仓库中的每一个文件的每一个版本都将被拉取下来")]),t._v(" "),_("h3",{attrs:{id:"branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[t._v("#")]),t._v(" branch")]),t._v(" "),_("p",[_("code",[t._v("branch")]),t._v("，译为分支，其作用简单而言就是开启另一个分支， 使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线")]),t._v(" "),_("p",[_("code",[t._v("Git")]),t._v(" 处理分支的方式十分轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷")]),t._v(" "),_("p",[t._v("在我们开发中，默认只有一条"),_("code",[t._v("master")]),t._v("分支，如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/7fa8e9c0-f923-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("git branch")]),t._v("可以创建一个分支，但并不会自动切换到新分支中去")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/89efd560-f923-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("git checkout")]),t._v("可以切换到另一个"),_("code",[t._v("testing")]),t._v("分支")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/91d1cef0-f923-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"二、如何使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、如何使用"}},[t._v("#")]),t._v(" 二、如何使用")]),t._v(" "),_("h3",{attrs:{id:"fork-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fork-2"}},[t._v("#")]),t._v(" fork")]),t._v(" "),_("p",[t._v("当你在"),_("code",[t._v("github")]),t._v("发现感兴趣开源项目的时候，可以通过点击"),_("code",[t._v("github")]),t._v("仓库中右上角"),_("code",[t._v("fork")]),t._v("标识的按钮，如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/bc4c4510-f7ad-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("点击这个操作后会将这个仓库的文件、提交历史、issues和其余东西的仓库复制到自己的"),_("code",[t._v("github")]),t._v("仓库中，而你本地仓库是不会存在任何更改")]),t._v(" "),_("p",[t._v("然后你就可以通过"),_("code",[t._v("git clone")]),t._v("对你这个复制的远程仓库进行克隆")]),t._v(" "),_("p",[t._v("后续更改任何东西都可以在本地完成，如"),_("code",[t._v("git add")]),t._v("、"),_("code",[t._v("git commit")]),t._v("一系列的操作，然后通过"),_("code",[t._v("push")]),t._v("命令推到自己的远程仓库")]),t._v(" "),_("p",[t._v("如果希望对方接受你的修改，可以通过发送"),_("code",[t._v("pull requests")]),t._v("给对方，如果对方接受。则会将你的修改内容更新到仓库中")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/c5265a40-f7ad-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("整体流程如下图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/ced8ce10-f7ad-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"clone-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#clone-2"}},[t._v("#")]),t._v(" clone")]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("github")]),t._v("中，开源项目右侧存在"),_("code",[t._v("code")]),t._v("按钮，点击后则会显示开源项目"),_("code",[t._v("url")]),t._v("信息，如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/d8685090-f7ad-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("p",[t._v("通过"),_("code",[t._v("git clone xxx")]),t._v("则能完成远程项目的下载")]),t._v(" "),_("h3",{attrs:{id:"branch-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#branch-2"}},[t._v("#")]),t._v(" branch")]),t._v(" "),_("p",[t._v("可通过"),_("code",[t._v("git branch")]),t._v("进行查看当前的分支状态，")]),t._v(" "),_("p",[t._v("如果给了"),_("code",[t._v("--list")]),t._v("，或者没有非选项参数，现有的分支将被列出；当前的分支将以绿色突出显示，并标有星号")]),t._v(" "),_("p",[t._v("以及通过"),_("code",[t._v("git branch")]),t._v("创建一个新的分支出来")]),t._v(" "),_("h2",{attrs:{id:"三、区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、区别"}},[t._v("#")]),t._v(" 三、区别")]),t._v(" "),_("p",[t._v("其三者区别如下：")]),t._v(" "),_("ul",[_("li",[t._v("fork 只能对代码仓进行操作，且 fork 不属于 git 的命令，通常用于代码仓托管平台的一种“操作”")]),t._v(" "),_("li",[t._v("clone 是 git 的一种命令，它的作用是将文件从远程代码仓下载到本地，从而形成一个本地代码仓")]),t._v(" "),_("li",[t._v("branch 特征与 fork 很类似，fork 得到的是一个新的、自己的代码仓，而 branch 得到的是一个代码仓的一个新分支")])]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[t._v("https://git-scm.com/book/zh/v2/Git-基础-获取-Git-仓库")]),t._v(" "),_("li",[t._v("https://git-scm.com/book/zh/v2/Git-分支-分支简介")])])])}),[],!1,null,null,null);v.default=c.exports}}]);