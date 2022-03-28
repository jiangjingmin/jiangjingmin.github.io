(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{688:function(n,s,t){"use strict";t.r(s);var a=t(28),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[n._v("#")]),n._v(" nvm")]),n._v(" "),t("h2",{attrs:{id:"windows-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装"}},[n._v("#")]),n._v(" Windows 安装")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[n._v("nvm-windows"),t("OutboundLink")],1)])]),n._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("下载"),t("OutboundLink")],1),n._v("，找到 nvm-setup.zip，下载解压，运行 "),t("code",[n._v("nvm-setup.exe")]),n._v(", 安装即可")]),n._v(" "),t("p",[t("strong",[n._v("以管理员身份运行")]),n._v(" Git，设置nvm，不然 "),t("code",[n._v("nvm use")]),n._v(" 会失败")]),n._v(" "),t("p",[n._v("win 找到安装路径下的 unis000.exe，运行")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" lts "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 长期维护版")]),n._v("\nnvm use "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("16.3")]),n._v(".1\n")])])]),t("h2",{attrs:{id:"mac-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-安装"}},[n._v("#")]),n._v(" MAC 安装")]),n._v(" "),t("h3",{attrs:{id:"mirror-config-china"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mirror-config-china"}},[n._v("#")]),n._v(" mirror-config-china")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/mirror-config-china",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.npmjs.com/package/mirror-config-china"),t("OutboundLink")],1),n._v("\n为中国内地的Node.js开发者准备的镜像配置，大大提高node模块安装速度。")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" i -g mirror-config-china --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("https://registry.npm.taobao.org\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 检查是否安装成功 ")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" config list\n")])])]),t("h3",{attrs:{id:"github镜像安装-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github镜像安装-推荐"}},[n._v("#")]),n._v(" github镜像安装（推荐）")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" clone https://github.com/nvm-sh/nvm.git\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("bash")]),n._v(" nvm/install.sh\n\nnvm -v\n\nnvm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("alias")]),n._v(" default "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("16.13")]),n._v(".1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 设置默认版本，不然新开窗口还是按照default版本")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 卸载")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# mac，仅仅需要删除.nvm")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("rm")]),n._v(" -rf ~/.nvm\n")])])]),t("h3",{attrs:{id:"安装nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nodejs"}},[n._v("#")]),n._v(" 安装nodeJS")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("version"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# arch参数表示系统位数，默认是64位")]),n._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6.9")]),n._v(".0 "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("32")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# nvm use <version> [<arch>]")]),n._v("\nnvm use "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6.9")]),n._v(".0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装最新稳定版本")]),n._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" stable "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 稳定版本")]),n._v("\n\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" lts/* "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 长期维护版")]),n._v("\n")])])]),t("h3",{attrs:{id:"其他安装方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他安装方法"}},[n._v("#")]),n._v(" 其他安装方法")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("wget")]),n._v(" -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("bash")]),n._v("\n\nnvm ls-remote\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("NVM_NODEJS_ORG_MIRROR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("https://npm.taobao.org/mirrors/node nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("14.6")]),n._v(".0\n\n// 全局安装的包在\n~/.nvm/versions/node/v14.6.0/bin$\n")])])]),t("h4",{attrs:{id:"npm-自身的升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-自身的升级"}},[n._v("#")]),n._v(" npm 自身的升级")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("降级：npm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" -g npm@5.4.0\n升级：npm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" -g "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v("\n")])])]),t("h3",{attrs:{id:"nvm-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm-常用命令"}},[n._v("#")]),n._v(" nvm 常用命令")]),n._v(" "),t("ol",[t("li",[n._v("nvm list 是查找本电脑上所有的node版本\n"),t("ul",[t("li",[n._v("nvm list 查看已经安装的版本")]),n._v(" "),t("li",[n._v("nvm list installed 查看已经安装的版本")]),n._v(" "),t("li",[n._v("nvm list available 查看网络可以安装的版本")])])]),n._v(" "),t("li",[n._v("nvm install "),t("version",[n._v(" 安装指定版本node")])],1),n._v(" "),t("li",[n._v("nvm use "),t("version",[n._v(" 切换使用指定的版本node")])],1),n._v(" "),t("li",[n._v("nvm ls 列出所有版本")]),n._v(" "),t("li",[n._v("nvm current显示当前版本")]),n._v(" "),t("li",[n._v("nvm alias "),t("name",[t("version",[n._v(" ## 给不同的版本号添加别名")])],1)],1),n._v(" "),t("li",[n._v("nvm unalias "),t("name",[n._v(" ## 删除已定义的别名")])],1),n._v(" "),t("li",[n._v("nvm reinstall-packages "),t("version",[n._v(" ## 在当前版本node环境下，重新全局安装指定版本号的npm包")])],1),n._v(" "),t("li",[n._v("nvm on 打开nodejs控制")]),n._v(" "),t("li",[n._v("nvm off 关闭nodejs控制")]),n._v(" "),t("li",[n._v("nvm proxy 查看设置与代理")]),n._v(" "),t("li",[n._v("nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 "),t("a",{attrs:{href:"https://nodejs.org/dist/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://nodejs.org/dist/"),t("OutboundLink")],1),n._v("\n　　nvm npm_mirror [url] 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： "),t("a",{attrs:{href:"https://github.com/npm/npm/archive/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/npm/npm/archive/"),t("OutboundLink")],1),n._v(".")]),n._v(" "),t("li",[n._v("nvm uninstall "),t("version",[n._v(" 卸载制定的版本")])],1),n._v(" "),t("li",[n._v("nvm use [version] [arch] 切换制定的node版本和位数")]),n._v(" "),t("li",[n._v("nvm root [path] 设置和查看root路径")]),n._v(" "),t("li",[n._v("nvm version 查看当前的版本")]),n._v(" "),t("li",[n._v("nvm alias default v12.13.0 指定默认的node版本")])])])}),[],!1,null,null,null);s.default=r.exports}}]);