(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{686:function(s,a,t){"use strict";t.r(a);var e=t(28),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac-os系统使用指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-os系统使用指南"}},[s._v("#")]),s._v(" Mac OS系统使用指南")]),s._v(" "),t("h2",{attrs:{id:"裸机安装开发工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#裸机安装开发工具"}},[s._v("#")]),s._v(" 裸机安装开发工具")]),s._v(" "),t("blockquote",[t("p",[s._v("常用软件：")])]),s._v(" "),t("ul",[t("li",[s._v("QQ/微信：")]),s._v(" "),t("li",[s._v("有道云笔记：App store")]),s._v(" "),t("li",[s._v("钉钉：App store")])]),s._v(" "),t("blockquote",[t("p",[s._v("开发工具：")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("iTem2"),t("OutboundLink")],1),s._v(": iTerm2 是一款完全免费的，专为 Mac OS 用户打造的命令行应用。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh"),t("OutboundLink")],1),s._v(":")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VSCode"),t("OutboundLink")],1),s._v(":")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信开发者工具"),t("OutboundLink")],1),s._v(":")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.google.cn/chrome/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chrome 浏览器"),t("OutboundLink")],1),s._v(":")])]),s._v(" "),t("h3",{attrs:{id:"一、安装-item2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-item2"}},[s._v("#")]),s._v(" 一、安装 iTem2")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/405956cdaca6",target:"_blank",rel:"noopener noreferrer"}},[s._v("ITerm2配置-让你的mac命令行更加丰富高效"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://hyper.is/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Hyper 美化终端工具"),t("OutboundLink")],1),s._v("：支持多个版本，tab选项卡，可自定义配置 "),t("code",[s._v("~/hyper.js")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/xishuai/p/mac-iterm2.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac OS 终端利器   iTerm2"),t("OutboundLink")],1),s._v("：张风卜推荐")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37195261",target:"_blank",rel:"noopener noreferrer"}},[s._v("iTerm2 + Oh My Zsh 打造舒适终端体验"),t("OutboundLink")],1)])]),s._v(" "),t("ol",[t("li",[s._v("安装：官网下载安装即可："),t("a",{attrs:{href:"https://iterm2.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://iterm2.com/downloads.html"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("设置 iTerm2 为默认终端：左上角item2/Make iTem2 Default Term")]),s._v(" "),t("li",[s._v("设置 iTerm2 配色方案：solarized\n"),t("a",{attrs:{href:"https://github.com/altercation/solarized",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我放到了 Download 目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/altercation/solarized.git\n")])])]),t("p",[s._v("然后打开 "),t("code",[s._v("iTerm2/preference/profiles/colors")]),s._v("，点击右下角的 Color Presets 选项，选择 "),t("code",[s._v("import")]),s._v(" ，导入 solarized 文件下的 "),t("code",[s._v("Solarized Dark.itermcolors")]),s._v("\n4. 修改主题\n"),t("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh主题"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("首先，查看设置的主题：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 打开文件，查找 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("ZSH_THEME"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 的值，便是使用的主题了\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.zshrc\n\n// 可修改此值更改主题，默认是 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("robbyrussell"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("。\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZSH_THEME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agnoster"')]),s._v(" \n")])])]),t("p",[s._v("然后，找到 oh-my-zsh 主题存放位置并打开，修改当前使用主题的配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  ~/.oh-my-zsh/themes/agnoster.zsh-theme\n")])])]),t("p",[s._v("在打开的文件中找到如下内容并修改：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 如果想修改用户名直接将 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("%m"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 替换成你想显示的名字即可\n// 也可以直接将此行注释掉，即user和hostname都不显示，节省命令行空间\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# prompt_segment black default "%(!.%{%F{yellow}%}.)%n@%m"')]),s._v("\n")])])]),t("p",[s._v("重启item2即可。")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[s._v("配置字体\n应用这个 "),t("code",[s._v("agnoster")]),s._v(" 主题需要特殊的字体支持，否则会出现乱码情况，这时我们来配置字体：")])]),s._v(" "),t("li",[t("p",[s._v("使用 "),t("a",{attrs:{href:"https://github.com/powerline/fonts/blob/master/Meslo%20Slashed/Meslo%20LG%20M%20Regular%20for%20Powerline.ttf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Meslo"),t("OutboundLink")],1),s._v(" 字体，点开连接点击 "),t("code",[s._v("view raw")]),s._v(" 下载字体（需要翻墙）。或去"),t("a",{attrs:{href:"https://www.fontke.com/font/24475544/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("其他网站下载"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("安装字体到系统字体册。")]),s._v(" "),t("ul",[t("li",[s._v("打开“启动台”-“other”（其他）找到“字体册”并打开。")]),s._v(" "),t("li",[s._v("选择“所有字体”，点击上面的“+”号或者点击电脑左上角“文件”--“添加字体”选择下载好的字体并将其打开。")])])]),s._v(" "),t("li",[t("p",[s._v("应用字体到iTerm2下，设置自己喜欢看着舒服的字号，我设置的14px（iTerm -> Preferences -> Profiles -> Text -> Change Font）。")])]),s._v(" "),t("li",[t("p",[s._v("VScode 的 Terminal 命令行乱码\n由于zsh在items中使用的是 Meslo LG M for Powerline ，需在setting.json里设置字体即可。")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"terminal.integrated.fontFamily"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Meslo LG M for Powerline"')]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("Term2 快速隐藏和显示\nkeys/Hotkey: 选中 show/hide...")]),s._v(" "),t("li",[s._v("给 iTerm2 中 Vim 配色\n首先下载solarized，上文有下载方法和地址。执行以下命令:")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" solarized\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vim-colors-solarized/colors\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/.vim/colors\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" solarized.vim ~/.vim/colors/\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.vimrc \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有 .vimrc 文件，则需创建一个")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .vimrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入下面三行设置即可")]),s._v("\n\nsyntax "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("background")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dark\ncolorscheme solarized\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("给ITerm2中ls配色")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装 coreutils")]),s._v("\n\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" coreutils\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建颜色配置文件")]),s._v("\n\ngdircolors --print-database "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.dir_colors\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用颜色配置文件")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加如下即可")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" brew list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" coreutils "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --prefix coreutils"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/libexec/gnubin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -F --show-control-chars --color=auto'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gdircolors -b "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.dir_colors"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("h3",{attrs:{id:"二、安装-homebrew-包管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装-homebrew-包管理工具"}},[s._v("#")]),s._v(" 二、安装 homebrew 包管理工具")]),s._v(" "),t("p",[s._v("官网："),t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://brew.sh/"),t("OutboundLink")],1),s._v("，外网装不上，使用国内地址：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官网（推荐）")]),s._v("\n/bin/bash -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国内源")]),s._v("\n/bin/zsh -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("安装路径：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("/usr/local")]),s._v(" for macOS Intel")]),s._v(" "),t("li",[t("code",[s._v("/opt/homebrew")]),s._v(" for Apple Silicon")]),s._v(" "),t("li",[t("code",[s._v("/home/linuxbrew/.linuxbrew")]),s._v(" for Linux")])]),s._v(" "),t("p",[s._v("brew 命令：")]),s._v(" "),t("ul",[t("li",[s._v("brew ls: 本地软件库列表")]),s._v(" "),t("li",[s._v("brew search google: 查找软件（其中google替换为要查找的软件关键字）")]),s._v(" "),t("li",[s._v("brew -v: 查看brew版本")]),s._v(" "),t("li",[s._v("brew update: 更新brew版本")])]),s._v(" "),t("h3",{attrs:{id:"三、安装-oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-oh-my-zsh"}},[s._v("#")]),s._v(" 三、安装 Oh my zsh")]),s._v(" "),t("p",[s._v("github地址："),t("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/ohmyzsh/ohmyzsh"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ohmyzsh/ohmyzsh.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./ohmyzsh/tools\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" install.sh\n")])])]),t("p",[s._v("官网推荐安装方式（需翻墙）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h4",{attrs:{id:"_1-自动提示命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动提示命令"}},[s._v("#")]),s._v(" 1. 自动提示命令")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-autosuggestions"),t("OutboundLink")],1),s._v(":")])]),s._v(" "),t("p",[s._v("1.克隆仓库到本地 ~/.oh-my-zsh/custom/plugins 路径下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/zsh-users/zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/zsh-autosuggestions\n")])])]),t("p",[s._v("2.用 vim ~/.zshrc 打开文件，下滑找到插件设置命令，默认是 plugins=(git) ，我们把它修改为")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("3.重新打开终端窗口。")]),s._v(" "),t("h4",{attrs:{id:"_2-语法高亮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-语法高亮"}},[s._v("#")]),s._v(" 2. 语法高亮")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-syntax-highlighting"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("1.使用homebrew安装zsh-syntax-highlighting 插件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zsh-syntax-highlighting\n")])])]),t("p",[s._v("或 克隆方式安装：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.oh-my-zsh/custom/plugins/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("修改文件 "),t("code",[s._v(".zshrc")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.zshrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件最后添加")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh\n")])])]),t("p",[s._v("PS：上面的路径是brew安装插件成功后的路径，安装成功会有显示，复制记录一下。")]),s._v(" "),t("p",[s._v("3.输入命令。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),t("h4",{attrs:{id:"_3-配置快捷命令-别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置快捷命令-别名"}},[s._v("#")]),s._v(" 3. 配置快捷命令（别名）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.zshrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加别名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" gc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git clone"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" gcm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -m"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git push"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gco")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gm")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git merge"')]),s._v("\n")])])]),t("h3",{attrs:{id:"四、安装-nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、安装-nvm"}},[s._v("#")]),s._v(" 四、安装 nvm")]),s._v(" "),t("p",[s._v("node："),t("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nodejs.cn/download/"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nvm-sh/nvm.git\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" nvm/install.sh\n\nnvm -v\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载，仅仅需要删除.nvm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mac")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.nvm\n\n// 安装node\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.6")]),s._v(".1\n")])])]),t("h3",{attrs:{id:"五、安装-nrm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、安装-nrm"}},[s._v("#")]),s._v(" 五、安装 nrm")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm\n")])])]),t("h3",{attrs:{id:"六、安装-yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、安装-yarn"}},[s._v("#")]),s._v(" 六、安装 yarn")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])]),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("h3",{attrs:{id:"mac-os-命令行打开-vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-命令行打开-vscode"}},[s._v("#")]),s._v(" Mac OS 命令行打开 VSCode")]),s._v(" "),t("ol",[t("li",[s._v("打开vscode")]),s._v(" "),t("li",[s._v("快捷键shift + command + p，输入shell，选择 "),t("code",[s._v("Shell Command: Install")]),s._v("code"),t("code",[s._v("command in PATH")])]),s._v(" "),t("li",[s._v("进入要打开的文件夹，输入 "),t("code",[s._v("code .")])])]),s._v(" "),t("h3",{attrs:{id:"mac-终端编辑完成后如何保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-终端编辑完成后如何保存"}},[s._v("#")]),s._v(" Mac 终端编辑完成后如何保存")]),s._v(" "),t("div",{staticClass:"language-= extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("如果是vi，则：\nEsc 退出编辑模式，输入以下命令：\n:wq 保存后退出vi，若为\n:wq!则为强制储存后退出（常用）\n:w 保存但不退出（常用）\n:w! 若文件属性为『只读』时，强制写入该档案\n:q 离开 vi （常用）\n:q! 若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。\n:e! 将档案还原到最原始的状态！\n")])])]),t("h3",{attrs:{id:"踩过的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩过的坑"}},[s._v("#")]),s._v(" 踩过的坑")]),s._v(" "),t("ul",[t("li",[s._v("访达侧边栏设置：左上角访达 => 偏好设置，将home打开")]),s._v(" "),t("li",[s._v("必须安装Xcode，自带git，否则git安装会报错")])]),s._v(" "),t("h3",{attrs:{id:"mac-git-中文提示改为英文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-git-中文提示改为英文"}},[s._v("#")]),s._v(" Mac git 中文提示改为英文")]),s._v(" "),t("p",[s._v("最近重装了下 Mac 使用 brew 安装了 Git 、发现命令行下 Git 的提示都是中文、看着非常别扭，然后 Google 了下，找到解决方案")]),s._v(" "),t("p",[s._v("普通命令行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"alias git='LANG=en_GB git'\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n")])])]),t("p",[s._v("安装 oh-my-zsh 的命令行")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"alias git='LANG=en_GB git'\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n")])])]),t("p",[s._v("鉴于我是第二种情况、执行完命令、立马 OK。瞬间看着高大上一下.......")]),s._v(" "),t("h3",{attrs:{id:"mac不显示隐藏文件-git文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac不显示隐藏文件-git文"}},[s._v("#")]),s._v(" Mac不显示隐藏文件.git文")]),s._v(" "),t("p",[s._v("的处理\nMac下初始化仓库后，默认是不显示.git文件的。如果需要展示的话，可以执行下面的命令：")]),s._v(" "),t("p",[s._v("显示文件夹：")]),s._v(" "),t("p",[s._v("defaults write com.apple.finder AppleShowAllFiles TRUE        #显示文件夹")]),s._v(" "),t("p",[s._v("killall Finder        #重启finder")]),s._v(" "),t("p",[s._v("隐藏文件夹：")]),s._v(" "),t("p",[s._v("defaults write com.apple.finder AppleShowAllFiles FALSE        #隐藏文件夹")]),s._v(" "),t("p",[s._v("killall Finder        #重启finder")]),s._v(" "),t("p",[s._v("搞定啦～～～～撒花～～～～～～～～～～")]),s._v(" "),t("p",[s._v("作者：花开闪亮\n链接："),t("a",{attrs:{href:"https://www.jianshu.com/p/2fa3843aa435",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/2fa3843aa435"),t("OutboundLink")],1),s._v("\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),s._v(" "),t("h3",{attrs:{id:"iterm2-使用curl报错404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterm2-使用curl报错404"}},[s._v("#")]),s._v(" iTerm2 使用curl报错404")]),s._v(" "),t("p",[s._v("报错解决方法：[oh-my-zsh]异常提示 Insecure completion-dependent directories detected:\n在"),t("code",[s._v("vi .zshrc")]),s._v("顶部加入 "),t("code",[s._v("ZSH_DISABLE_COMPFIX=true")]),s._v("即可")]),s._v(" "),t("h3",{attrs:{id:"解决-gyp-no-xcode-or-clt-version-detected-错误提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决-gyp-no-xcode-or-clt-version-detected-错误提示"}},[s._v("#")]),s._v(" 解决 gyp: No Xcode or CLT version detected! 错误提示")]),s._v(" "),t("ul",[t("li",[s._v("Step1: 输入xcode-select --print-path查看 command-line tools 的安装路径，不出意外显示的结果应该是/Library/Developer/CommandLineTools")]),s._v(" "),t("li",[s._v("Step2: 输入sudo rm -r -f /Library/Developer/CommandLineTools把 command-line tools 从系统移除掉")]),s._v(" "),t("li",[s._v("Step3: 最后输入xcode-select --install重新安装")])]),s._v(" "),t("h3",{attrs:{id:"mac-快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-快捷键"}},[s._v("#")]),s._v(" mac 快捷键")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("commond + tab")]),s._v("：不同软件间切换")]),s._v(" "),t("li",[t("code",[s._v("commond + ~")]),s._v("：同软件间切换")]),s._v(" "),t("li",[t("code",[s._v("Ctrl+Shift+I")]),s._v(" (Windows) 或 "),t("code",[s._v("Cmd+Opt+I")]),s._v(" (Mac)：打开Chrome开发者工具")]),s._v(" "),t("li",[s._v("g: 命令将光标移动到文档开头")]),s._v(" "),t("li",[s._v("G: 命令将光标移动到文档末尾")]),s._v(" "),t("li",[s._v("clear / ctr + l：清屏")])]),s._v(" "),t("p",[s._v("Item2 命令行工具：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("⌘ + d: 水平分屏，\n⌘ + shift + d: 垂直分屏。\ncontrol + d: 删除当前分屏\n⌘ + ]和⌘ + [在最近使用的分屏直接切换.\n⌘ + opt + 方向键切换到指定位置的分屏。\n⌘ + 数字: 切换标签页。 \n⌘ + 方向键 按方向切换标签页。\nshift + ⌘ + s: 保存当前窗口快照。\n⌘ + opt + b: 快照回放。很有意思的功能，你可以对你的操作根据时间轴进行回放。可以拖动下方的时间轴，也可以按左右方向键\n")])])]),t("h3",{attrs:{id:"zsh-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh-常用命令"}},[s._v("#")]),s._v(" zsh 常用命令")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/yuanfang0903/p/10879607.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("基本常用命令"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[t("code",[s._v("touch 文件名.后缀")]),s._v("：新建文件")]),s._v(" "),t("li",[t("code",[s._v("mkdir 文件夹名")]),s._v("：新建文件夹")]),s._v(" "),t("li",[t("code",[s._v("cat 文件名")]),s._v("：查看文件")]),s._v(" "),t("li",[t("code",[s._v("vim 文件名")]),s._v("：编辑文件")]),s._v(" "),t("li",[t("code",[s._v("i")]),s._v("：切换为编辑状态")]),s._v(" "),t("li",[t("code",[s._v("esc")]),s._v("：退出编辑状态")]),s._v(" "),t("li",[t("code",[s._v(":w")]),s._v("：保存")]),s._v(" "),t("li",[t("code",[s._v(":q")]),s._v("：退出")]),s._v(" "),t("li",[t("code",[s._v(":wq")]),s._v("：保存并退出")]),s._v(" "),t("li",[t("code",[s._v(":wq!")]),s._v("：强制保存并退出")]),s._v(" "),t("li",[t("code",[s._v("mv projects/* ./")]),s._v(": 移动projects文件夹下所有文件到当前文件夹")])]),s._v(" "),t("p",[s._v("Mac系统默认使用dash作为终端，可以使用命令修改默认使用zsh：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("chsh -s /bin/zsh\n")])])]),t("p",[s._v("如果想修改回默认dash，同样使用chsh命令即可：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("chsh -s /bin/bash\n")])])]),t("h3",{attrs:{id:"zsh-使用通配符-功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh-使用通配符-功能"}},[s._v("#")]),s._v(" zsh 使用通配符（*）功能")]),s._v(" "),t("p",[s._v("默认情况下 zsh 是不支持通配符 (*) 匹配的；")]),s._v(" "),t("p",[s._v("第一步，打开zsh配置文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi .zshrc\n")])])]),t("p",[s._v("第二步，最后一行添加下面语句到文本中，保存、退出；")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("setopt nonomatch \n")])])]),t("p",[s._v("第三步，执行生效")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("source ~/.zshrc \n")])])]),t("h3",{attrs:{id:"压缩文件-夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩文件-夹"}},[s._v("#")]),s._v(" 压缩文件/夹")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf sh_cc.tar.gz --exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("**/node_modules  sh_cc\n")])])]),t("h3",{attrs:{id:"打包文件夹-并排除指定文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包文件夹-并排除指定文件"}},[s._v("#")]),s._v(" 打包文件夹，并排除指定文件")]),s._v(" "),t("blockquote",[t("p",[s._v("注：zsh默认不支持通配符（*），须先按照上面配置即可。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 打包文件夹：将 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("demo"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 打包成 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("demo.tar.gz"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf demo.tar.gz demo\n\n// 打包并排除指定文件/夹（eg: node_modules）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf demo.tar.gz --exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("**/node_modules demo\n")])])]),t("h3",{attrs:{id:"themes-agnoster-zsh-theme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-agnoster-zsh-theme"}},[s._v("#")]),s._v(" themes/agnoster.zsh-theme")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('prompt_segment black default "%(!.%{%F{yellow}%}.)%n@%m"\n')])])]),t("p",[s._v("解压：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf demo.tar.gz\n")])])]),t("h3",{attrs:{id:"picgo-git-typora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#picgo-git-typora"}},[s._v("#")]),s._v(" picGo + Git + typora")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/b69950a49ae2",target:"_blank",rel:"noopener noreferrer"}},[s._v("PicGo + Gitee(码云)实现markdown图床"),t("OutboundLink")],1)]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载安装PicGo"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("打开：上边栏对角小图标打开PicGo，搜索安装gitee插件\n"),t("img",{attrs:{src:"https://gitee.com/jiangjingmin/picbed/raw/master/markdown/picgo-config_20201129.png",alt:""}})]),s._v(" "),t("li",[s._v("owner：jiangjingmin，所有者，写上你的码云账号名，如果你不知道你的账号名，进入你刚才的仓库，浏览器url里面有")]),s._v(" "),t("li",[s._v("repo：picbed，仓库名称")]),s._v(" "),t("li",[s._v("path：markdown，文件夹路径")]),s._v(" "),t("li",[s._v("token：私人令牌 - 点击头像，进入设置，私人令牌，生成新令牌")])]),s._v(" "),t("h3",{attrs:{id:"安装nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nvm"}},[s._v("#")]),s._v(" 安装nvm")]),s._v(" "),t("p",[s._v("按装 nvm 之前最好先删除下已安装的 node 和全局 node 模块")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 1.homebrew安装，卸载方法：- 不推荐\nbrew brew uninstall node\n\n// 2.官网下载pkg安装，完全卸载方法\nnpm ls -g --depth=0 # 查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装\nsudo rm -rf /usr/local/lib/node_modules # 删除全局 node_modules 目录\nsudo rm /usr/local/bin/node # 删除 node\ncd  /usr/local/bin && ls -l | grep \"../lib/node_modules/\" | awk '{print $9}'| xargs rm # 删除全局 node 模块注册的软链\n")])])]),t("p",[s._v("根据官网安装nvm\n"),t("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/nvm-sh/nvm"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\n// 或者\nwget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash\n\nvim ~/.zshrc // 编辑文件\ni // 进入编辑状态\n// 文件末尾插入\nexport NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n\nesc\n:wq!\n\n// 查看当前电脑中安装的node版本\nnvm ls\n\n// stable: 安装node最新稳定版本\nnvm install node版本号/stable\nnvm use node版本号\n\n')])])]),t("h3",{attrs:{id:"mac-tree命令的使用-输出目录树结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-tree命令的使用-输出目录树结构"}},[s._v("#")]),s._v(" Mac tree命令的使用，输出目录树结构")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/knuzy/p/10510419.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/knuzy/p/10510419.html"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install tree\n")])])]),t("p",[s._v("常用命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tree > README.md: 打印所有层级 到文档\ntree -L 2 > README.md: 遍历2层\ntree --help:  查看帮助信息\ntree -d:  只显示文件夹\ntree -D:  显示文件的最后修改时间\n")])])]),t("p",[s._v("解决中文乱码")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("tree -N\ntree -N > tree.txt\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);