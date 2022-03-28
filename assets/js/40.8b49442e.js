(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{415:function(t,e,r){"use strict";r.r(e);var s=r(28),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),r("OutboundLink")],1),t._v(": - "),r("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6844903591375814669",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 0 开始了解 Docker"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/stulzq/p/7743667.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 10 安装 Docker for Windows"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://yeasy.gitbook.io/docker_practice",target:"_blank",rel:"noopener noreferrer"}},[r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"一、docker-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-是什么"}},[t._v("#")]),t._v(" 一、Docker 是什么")]),t._v(" "),r("p",[r("strong",[t._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。")])]),t._v(" "),r("p",[t._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),t._v(" "),r("p",[t._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),t._v(" "),r("h2",{attrs:{id:"二、为什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么"}},[t._v("#")]),t._v(" 二、为什么")]),t._v(" "),r("h2",{attrs:{id:"三、怎么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、怎么用"}},[t._v("#")]),t._v(" 三、怎么用")]),t._v(" "),r("h3",{attrs:{id:"_1、安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[t._v("#")]),t._v(" 1、安装")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 官方教程"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("本人使用 Set up the repository 安装方式")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),r("h3",{attrs:{id:"常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看镜像")]),t._v("\ndocker images \n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行docker容器")]),t._v("\ndocker run -d -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80 docker/getting-started\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止运行容器")]),t._v("\ndocker stop CONTAINER\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器")]),t._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入容器，之后便可以运行 linux 命令操作了")]),t._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it 16c9de9669f9 /bin/sh\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出容器")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看命令")]),t._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" --help\n")])])]),r("h2",{attrs:{id:"docker与k8s-难舍难分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker与k8s-难舍难分"}},[t._v("#")]),t._v(" Docker与k8s 难舍难分")]),t._v(" "),r("p",[t._v("Docker 和 k8s 在业界非常流行，都已经是事实上的标准。")]),t._v(" "),r("p",[t._v("Docker 是用于构建、分发、运行容器的平台和工具。")]),t._v(" "),r("p",[t._v("而 k8s 实际上是一个使用 Docker 容器进行编排的系统，主要围绕 pods 进行工作。Pods 是 k8s 生态中最小的调度单位，可以包含一个或多个容器。")]),t._v(" "),r("p",[t._v("Docker 和 k8s 是根本上不同的技术，两者可以很好的协同工作。")]),t._v(" "),r("h2",{attrs:{id:"vmmem占用内存过大问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vmmem占用内存过大问题"}},[t._v("#")]),t._v(" vmmem占用内存过大问题")]),t._v(" "),r("p",[t._v("启动cmd命令提示符，输入 wsl --shutdown 来关闭当前的子系统")]),t._v(" "),r("h4",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 入门教程 - 阮一峰"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6913568633813729294",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6913568633813729294 - 掘金"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);