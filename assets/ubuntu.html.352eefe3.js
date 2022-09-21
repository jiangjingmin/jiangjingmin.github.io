import{_ as r,r as i,o as t,c as p,a as n,b as e,F as o,e as l,d as s}from"./app.7139c5e1.js";const c={},b=l(`<h1 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h1><ol><li><p>\u8BBE\u7F6E\u7535\u8111\u4E3A\u5F00\u53D1\u8005\u6A21\u5F0F</p></li><li><p>\u8BBE\u7F6E\u4EE5wsl\u73AF\u5883\u5F00\u53D1</p></li><li><p>\u5B89\u88C5wsl 2 \u73AF\u5883</p></li><li><p>\u5B89\u88C5 Ubuntu</p></li><li><p>\u5B89\u88C5 Terminal \u547D\u4EE4\u884C\u5DE5\u5177</p></li><li></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u5B8Cubuntu\u4E4B\u524D\uFF0C\u8BBE\u7F6Ewsl\u7248\u672C</span>
wsl --set-default-version <span class="token number">2</span>

<span class="token comment"># \u5B89\u88C5\u5B8Cubuntu\u4E4B\u540E\uFF0C\u8BBE\u7F6Ewsl\u7248\u672C</span>
wsl --set-version Ubuntu <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u4E00\u3001\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u53C2\u8003" aria-hidden="true">#</a> \u4E00\u3001\u53C2\u8003</h4>`,4),u={href:"https://www.cnblogs.com/xiaohuiduan/p/10441114.html",target:"_blank",rel:"noopener noreferrer"},d=s("win10\u521B\u5EFAUbuntu\u5B50\u7CFB\u7EDF"),m={href:"https://segmentfault.com/a/1190000021742880",target:"_blank",rel:"noopener noreferrer"},h=s("Windows\u4E0B\u642D\u5EFA\u6700\u63A5\u8FD1Linux\u4F53\u9A8C\u7684\u5F00\u53D1\u73AF\u5883"),g=s(" \uFF0C\u6587\u7AE0\u548C\u53C2\u8003\u90FD\u5199\u5F97\u6BD4\u8F83\u597D"),v=n("h4",{id:"\u4E8C\u3001\u5F00\u641E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E8C\u3001\u5F00\u641E","aria-hidden":"true"},"#"),s(" \u4E8C\u3001\u5F00\u641E")],-1),_=n("li",null,"\u63A7\u5236\u9762\u677F->\u7A0B\u5E8F->\u542F\u7528\u6216\u5173\u95EDWindows\u529F\u80FD->\u9002\u7528\u4E8ELinux\u7684Windows\u5B50\u7CFB\u7EDF",-1),x=n("li",null,"\u67E5\u770B\u7CFB\u7EDF\u7248\u672C lsb_release -a",-1),f=n("li",null,"\u5E94\u7528\u5546\u5E97\u4E0B\u8F7DUbuntu\uFF0C\u5B89\u88C5\u7528\u6237\u540Djjm\uFF0C\u5BC6\u7801123456",-1),k=s("\u6362\u6E90\uFF1A"),w={href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},y=s("\u6E05\u534E"),q=s(" \uFF0C\u5927\u90E8\u5206\u4EBA\u6362\u7684\u662F\u963F\u91CC\u7684"),S={href:"https://jingyan.baidu.com/album/63f23628664adc0209ab3d4c.html?picindex=6",target:"_blank",rel:"noopener noreferrer"},j=s("\u5B89\u88C5\u56FE\u5F62\u754C\u9762"),z=s(" \uFF0C\u6CA1\u5FC5\u8981"),O=n("li",null,[n("s",null,"\u5B89\u88C5nodejs"),s("\uFF0C\u8BF7\u7528nvm\u5B89\u88C5nodejs\uFF0C\u4E0D\u7528\u7BA1\u8F6F\u8FDE")],-1),E=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5220\u9664\u65E7node - \u6B64\u5904\u53EF\u4E0D\u5220\u9664\uFF0C\u4FDD\u7559\u591A\u4E2A\u7248\u672C
kyxiao@DESKTOP-3MROV3E:/opt$ sudo rm -rf ./nodejs/

// \u4E0B\u8F7Dnode\u5B89\u88C5\u5305
kyxiao@DESKTOP-3MROV3E:~/download$ wget https://cdn.npm.taobao.org/dist/node/v14.3.0/node-v14.3.0-linux-x64.tar.xz

// \u89E3\u538B\u5B89\u88C5\u5305
kyxiao@DESKTOP-3MROV3E:~/download$ tar xvf node-v14.3.0-linux-x64.tar.xz

// \u79FB\u52A8\u89E3\u538B\u7684\u6587\u4EF6\u5939\u5230nodejs/\u4E0B
kyxiao@DESKTOP-3MROV3E:~/download$ sudo mv node-v14.3.0-linux-x64 /opt/nodejs/

\u8FD9\u91CC\u662F\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u8FD8\u662F\u8F6F\u8FDE\u63A5\u5462

// \u8F6F\u8FDE\u63A5
sudo ln -s /opt/nodejs/node-v14.3.0-linux-x64/bin/node /usr/local/bin/
sudo ln -s /opt/nodejs/node-v14.3.0-linux-x64/bin/npm /usr/local/bin/
sudo ln -s /opt/nodejs/node-v14.3.0-linux-x64/bin/npx /usr/local/bin/
sudo ln -s /opt/nodejs/node-v14.3.0-linux-x64/bin/vue /usr/local/bin/

ls -il
rm -rf file

// \u67E5\u770B\u662F\u5426\u6210\u529F\u94FE\u63A5
cd /usr/local/bin/
ls -l  

// \u67E5\u770B\u7248\u672C\u53F7 - \u5373\u5B89\u88C5node\u6210\u529F
node -v
npm -v

// \u9700\u91CD\u65B0\u5B89\u88C5node-sass

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6CE8\u610F\uFF1A</p><p>Ubuntu 20.04 \u81EA\u5E26python3.8\uFF0C\u800Cnodejs\u4F9D\u8D56\u7684\u662Fpython2\uFF0C\u6545\u9700\u8981\u5B89\u88C52\uFF0C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository universe
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python2

python2 --version //    \u51FA\u73B0\u7248\u672C\u53F7\u5373\u5B89\u88C5\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="\u5F03\u5751" tabindex="-1"><a class="header-anchor" href="#\u5F03\u5751" aria-hidden="true">#</a> \u5F03\u5751</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u547D\u4EE4\u5B89\u88C5 \u3010\u6709\u5751\u3011
sudo apt update
sudo apt install nodejs // \u5B89\u88C5\u7684\u662F8.10.0\uFF0C\u5E76\u4E14\u4E0D\u5E26npm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="linux-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Linux \u5E38\u7528\u547D\u4EE4</h4><h5 id="\u6587\u4EF6-\u5939" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6-\u5939" aria-hidden="true">#</a> \u6587\u4EF6/\u5939</h5><ul><li><p>mkdir [filename]: \u521B\u5EFA\u6587\u4EF6\u5939</p></li><li><p>sudo rm -rf [filepath]: \u5220\u9664\u6587\u4EF6\u5939</p></li><li><p>sudo mv [filename] [filepath]: \u79FB\u52A8\u6574\u4E2A\u6587\u4EF6\u5939\u5230\u67D0\u8DEF\u5F84\u4E0B</p></li></ul><h5 id="\u67E5\u770B\u6587\u4EF6-\u5939" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6-\u5939" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6/\u5939</h5><ul><li><p>ls: \u663E\u793A\u6587\u4EF6\u5939\u76EE\u5F55</p></li><li><p>ls -l: \u663E\u793A\u6587\u4EF6\u8BE6\u7EC6\u4FE1\u606F</p></li></ul><h5 id="\u8F6F\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u8FDE\u63A5" aria-hidden="true">#</a> \u8F6F\u8FDE\u63A5</h5><ul><li>\u521B\u5EFA\uFF1Asudo ln -s \u3010\u76EE\u6807\u76EE\u5F55\u3011 \u3010\u8F6F\u94FE\u63A5\u5730\u5740\u3011</li><li>\u5220\u9664\uFF1Asudo rm -rf \u3010\u8F6F\u94FE\u63A5\u5730\u5740\u3011</li><li>\u4FEE\u6539\uFF1Asudo ln -snf \u3010\u65B0\u76EE\u6807\u76EE\u5F55\u3011 \u3010\u8F6F\u94FE\u63A5\u5730\u5740\u3011</li></ul><h4 id="\u4E09\u3001\u5F31\u5316win10" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5F31\u5316win10" aria-hidden="true">#</a> \u4E09\u3001\u5F31\u5316win10</h4><ul><li>\u786C\u76D8\u90FD\u5728/mnt/\u4E0B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kyxiao@DESKTOP-3MROV3E:/mnt/e/mywork$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>echo $PATH</code> \u7EE7\u627F\u4E86win10\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4F46\u5E76\u975E\u5168\u90E8 \u5982\u679C\u60F3\u8981\u628Aubuntu\u4F5C\u4E3A\u751F\u4EA7\u529B\uFF0C\u9700\u8981\u628Awin10\u7684\u73AF\u5883\u53D8\u91CF\u9010\u6E10\u79FB\u5230ubuntu\u91CC\u6765\uFF0C\u9700\u8981\u5148\u5728cmd\u91CC\u5378\u8F7D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/sbin:
/usr/local/bin:
/usr/sbin:
/usr/bin:
/sbin:
/bin:
/usr/games:
/usr/local/games:
/mnt/c/ProgramData/Oracle/Java/javapath:
/mnt/c/WINDOWS/system32:
/mnt/c/WINDOWS:
/mnt/c/WINDOWS/System32/Wbem:
/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:
/mnt/c/WINDOWS/System32/OpenSSH/:
/mnt/d/Java/jdk1.8.0_144/bin:
/mnt/d/Java/jdk1.8.0_144/jre/bin:
/mnt/d/sdk/platform-tools:
/mnt/d/sdk/tools:
/mnt/d/Gradle/gradle-4.10.2/bin:
/mnt/d/software/Git/cmd:
/mnt/d/software/nodejs:
/mnt/d/flutter/bin:
/mnt/d/ruby/bin:
/mnt/d/software/nodejs/:
/mnt/d/software/TortoiseSVN/bin:
/mnt/d/software/Microsoft VS Code/bin:
/mnt/d/software/Python38/:
/mnt/d/software/Python38/Scripts/:
/mnt/c/Users/kyxiao/AppData/Local/Microsoft/WindowsApps:
/mnt/c/Users/kyxiao/AppData/Roaming/npm:
/snap/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><ul><li>\u4FEE\u6539npm\u7684\u6E90</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>~/.npmrc
registry=https://registry.npm.taobao.org
npm i -g nrm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u95EE\u9898\uFF1Ac\u76D8\u4F1A\u4E0D\u4F1A\u8D8A\u6765\u8D8A\u5927\uFF1F</li></ul><h4 id="\u56DB\u3001\u8FD0\u884C\u4E00\u4E2A\u7B80\u5355\u7684koa2\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8FD0\u884C\u4E00\u4E2A\u7B80\u5355\u7684koa2\u9879\u76EE" aria-hidden="true">#</a> \u56DB\u3001\u8FD0\u884C\u4E00\u4E2A\u7B80\u5355\u7684koa2\u9879\u76EE</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kyxiao@DESKTOP-3MROV3E:/mnt/e/mywork/koa2-demo$ node day01.js
http://localhost:3000/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u4E94\u3001\u597D\u73A9\u7684\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u597D\u73A9\u7684\u529F\u80FD" aria-hidden="true">#</a> \u4E94\u3001\u597D\u73A9\u7684\u529F\u80FD</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u5929\u6C14\u9884\u62A5
curl wttr.in

// \u663E\u793A\u597D\u770B\u7684\u7CFB\u7EDF\u4FE1\u606F
screenfetch

// \u4FEE\u6539WindowsTerminal\u7684\u80CC\u666F\uFF0Cimages\u4E0B\u6211\u627E\u4E86\u4E24\u5F20\u6BD4\u8F83\u597D\u7684\u56FE\u7247
// \u56FE\u7247\u653E\u7F6E\u4F4D\u7F6E\uFF1AC:\\Users\\jingmin\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\RoamingState\\1.jpg
// \u7F16\u8F91\u6587\u4EF6\uFF1AC:\\Users\\jingmin\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState\\setting.json
&quot;profiles&quot;:[
    {
        &quot;guid&quot;: &quot;{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}&quot;,
        &quot;hidden&quot;: false,
        &quot;name&quot;: &quot;Ubuntu-20.04&quot;,
        &quot;source&quot;: &quot;Windows.Terminal.Wsl&quot;,
        // \u914D\u7F6E\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE
        &quot;backgroundImage&quot; : &quot;ms-appdata:///roaming/1.jpg&quot;,
        &quot;backgroundImageOpacity&quot; : 0.5,
        &quot;backgroundImageStrechMode&quot; : &quot;fill&quot;
 }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="\u516D\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177" aria-hidden="true">#</a> \u516D\u3001\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177</h4><p>1\u3001sass</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update
sudo apt install ruby-full

2020-06-25 \u62A5\u9519\u5207\u6362\u5230\u6B63\u5E38\u6E90
2020-07-29 T450\u7F13\u5B58\u5230
Caching binary to /home/kyxiao/.npm/node-sass/4.14.1/linux-x64-83_binding.node
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>2\u3001\u8DD1bootstrap4\u7684\u6E90\u7801\u8981jekyll</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo gem install jekyll
sudo apt install gcc
sudo apt install g++

nokogiri \u5B89\u88C5\u62A5\u9519
https://nokogiri.org/tutorials/installing_nokogiri.html

sudo apt-get install build-essential patch ruby-dev zlib1g-dev liblzma-dev
sudo gem install nokogiri

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>3\u3001redis</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update
sudo apt install redis-server

redis-server
redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>3\u3001mysql</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4\u3001yarn\uFF0C\u76EE\u524D\uFF082020-07-22\uFF09npm\u5DF2\u7ECF\u4F18\u4E8Eyarm\uFF0C\u4F46\u662F\u5982\u679C\u662Freact\u9879\u76EE\uFF0C\u8FD8\u662F\u6709\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u5B89\u88C5\u4E00\u4E0Byarn</p><p>5\u3001nvm</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53C2\u8003
https://blog.csdn.net/superb2002/article/details/106528135

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
\u6216\u8005
git clone https://gitee.com/mirrors/nvm
bash install.sh

nvm ls-remote
NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install 14.6.0

// \u5168\u5C40\u5B89\u88C5\u7684\u5305\u5728
~/.nvm/versions/node/v14.6.0/bin$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="windows-terminal" tabindex="-1"><a class="header-anchor" href="#windows-terminal" aria-hidden="true">#</a> Windows Terminal</h1>`,38),W={href:"https://zhuanlan.zhihu.com/p/272082726",target:"_blank",rel:"noopener noreferrer"},M=s("Windows Terminal\u5B8C\u6574\u6307\u5357"),T=n("h2",{id:"_1-\u5B89\u88C5-homebrew-\u5305\u7BA1\u7406\u5DE5\u5177",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5-homebrew-\u5305\u7BA1\u7406\u5DE5\u5177","aria-hidden":"true"},"#"),s(" 1. \u5B89\u88C5 homebrew \u5305\u7BA1\u7406\u5DE5\u5177")],-1),D=s("\u5B98\u7F51\uFF1A"),L={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},P=s("https://brew.sh/"),R=s("\uFF0C\u5916\u7F51\u88C5\u4E0D\u4E0A\uFF0C\u4F7F\u7528\u56FD\u5185\u5730\u5740\uFF1A"),A=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B98\u7F51\uFF08\u63A8\u8350\uFF09</span>
/bin/bash -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># \u56FD\u5185\u6E90</span>
/bin/zsh -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B89\u88C5\u8DEF\u5F84\uFF1A</p><ul><li><code>/usr/local</code> for macOS Intel</li><li><code>/opt/homebrew</code> for Apple Silicon</li><li><code>/home/linuxbrew/.linuxbrew</code> for Linux</li></ul><p>brew \u547D\u4EE4\uFF1A</p><ul><li>brew ls: \u672C\u5730\u8F6F\u4EF6\u5E93\u5217\u8868</li><li>brew search google: \u67E5\u627E\u8F6F\u4EF6\uFF08\u5176\u4E2Dgoogle\u66FF\u6362\u4E3A\u8981\u67E5\u627E\u7684\u8F6F\u4EF6\u5173\u952E\u5B57\uFF09</li><li>brew -v: \u67E5\u770Bbrew\u7248\u672C</li><li>brew update: \u66F4\u65B0brew\u7248\u672C</li></ul><h2 id="_2-\u5B89\u88C5zsh" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5zsh" aria-hidden="true">#</a> 2. \u5B89\u88C5zsh</h2><p>\u60F3\u5B89\u88C5 oh my zsh \uFF0C\u5FC5\u987B\u5148\u5B89\u88C5 zsh</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-\u5B89\u88C5-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5-oh-my-zsh" aria-hidden="true">#</a> 3. \u5B89\u88C5 Oh my zsh</h2>`,9),V=s("github\u5730\u5740\uFF1A"),I={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},N=s("https://github.com/ohmyzsh/ohmyzsh"),U=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ohmyzsh/ohmyzsh.git
<span class="token builtin class-name">cd</span> ./ohmyzsh/tools
<span class="token function">sh</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B98\u7F51\u63A8\u8350\u5B89\u88C5\u65B9\u5F0F\uFF08\u9700\u7FFB\u5899\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
<span class="token comment"># OR</span>
<span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_4-\u4FEE\u6539\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539\u4E3B\u9898" aria-hidden="true">#</a> 4. \u4FEE\u6539\u4E3B\u9898</h2>`,4),$={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/themes",target:"_blank",rel:"noopener noreferrer"},C=s("zsh\u4E3B\u9898"),H=l(`<p>\u9996\u5148\uFF0C\u67E5\u770B\u8BBE\u7F6E\u7684\u4E3B\u9898\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u6253\u5F00\u6587\u4EF6\uFF0C\u67E5\u627E <span class="token variable"><span class="token variable">\`</span>ZSH_THEME<span class="token variable">\`</span></span> \u7684\u503C\uFF0C\u4FBF\u662F\u4F7F\u7528\u7684\u4E3B\u9898\u4E86
<span class="token function">vi</span> ~/.zshrc

// \u53EF\u4FEE\u6539\u6B64\u503C\u66F4\u6539\u4E3B\u9898\uFF0C\u9ED8\u8BA4\u662F <span class="token variable"><span class="token variable">\`</span>robbyrussell<span class="token variable">\`</span></span>\u3002
<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;agnoster&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7136\u540E\uFF0C\u627E\u5230 oh-my-zsh \u4E3B\u9898\u5B58\u653E\u4F4D\u7F6E\u5E76\u6253\u5F00\uFF0C\u4FEE\u6539\u5F53\u524D\u4F7F\u7528\u4E3B\u9898\u7684\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span>  ~/.oh-my-zsh/themes/agnoster.zsh-theme
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728\u6253\u5F00\u7684\u6587\u4EF6\u4E2D\u627E\u5230\u5982\u4E0B\u5185\u5BB9\u5E76\u4FEE\u6539\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u5982\u679C\u60F3\u4FEE\u6539\u7528\u6237\u540D\u76F4\u63A5\u5C06 <span class="token variable"><span class="token variable">\`</span>%m<span class="token variable">\`</span></span> \u66FF\u6362\u6210\u4F60\u60F3\u663E\u793A\u7684\u540D\u5B57\u5373\u53EF
// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06\u6B64\u884C\u6CE8\u91CA\u6389\uFF0C\u5373user\u548Chostname\u90FD\u4E0D\u663E\u793A\uFF0C\u8282\u7701\u547D\u4EE4\u884C\u7A7A\u95F4
<span class="token comment"># prompt_segment black default &quot;%(!.%{%F{yellow}%}.)%n@%m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u91CD\u542F\u5373\u53EF\u3002</p><h2 id="_5-\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> 5. \u4FEE\u6539\u914D\u7F6E</h2><p>\u5E94\u7528\u8FD9\u4E2A <code>agnoster</code> \u4E3B\u9898\u9700\u8981\u7279\u6B8A\u7684\u5B57\u4F53\u652F\u6301\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u4E71\u7801\u60C5\u51B5\uFF0C\u8FD9\u65F6\u6211\u4EEC\u6765\u914D\u7F6E\u5B57\u4F53\uFF1A</p>`,9),F=s("\u4F7F\u7528 "),G={href:"https://github.com/powerline/fonts/blob/master/Meslo%20Slashed/Meslo%20LG%20M%20Regular%20for%20Powerline.ttf",target:"_blank",rel:"noopener noreferrer"},K=s("Meslo"),J=s(" \u5B57\u4F53\uFF0C\u70B9\u5F00\u8FDE\u63A5\u70B9\u51FB "),B=n("code",null,"view raw",-1),Z=s(" \u4E0B\u8F7D\u5B57\u4F53\uFF08\u9700\u8981\u7FFB\u5899\uFF09\u3002\u6216\u53BB"),Q={href:"https://www.fontke.com/font/24475544/download/",target:"_blank",rel:"noopener noreferrer"},X=s("\u5176\u4ED6\u7F51\u7AD9\u4E0B\u8F7D"),Y=n("li",null,[s("\u5C06\u4E0B\u8F7D\u7684\u5B57\u4F53\u526A\u5207\u5230\u7CFB\u7EDF\u5B57\u4F53\u518C "),n("code",null,"C:\\Windows\\Fonts")],-1),nn=n("li",null,[s("\u5E94\u7528\u5B57\u4F53\u5230 "),n("code",null,"Terminal"),s(" \u4E0B\uFF0C\u8BBE\u7F6E\u81EA\u5DF1\u559C\u6B22\u770B\u7740\u8212\u670D\u7684\u5B57\u53F7\uFF0C\u6211\u8BBE\u7F6E\u768414px\uFF08teminal \u4E0B\u7BAD\u5934 \u300B \u8BBE\u7F6E \u300B\u5916\u89C2 \u300B \u5B57\u4F53 \u6216 Ctrl+,\uFF09\u3002")],-1),sn=n("li",null,[s("\u4FEE\u6539 \u6587\u672C\u914D\u8272\u65B9\u6848\u4E3A "),n("code",null,"Solarized Dark")],-1),an=n("li",null,[s("VScode \u7684 Terminal \u547D\u4EE4\u884C\u4E71\u7801 \u7531\u4E8Ezsh\u5728items\u4E2D\u4F7F\u7528\u7684\u662F "),n("code",null,"Meslo LG M for Powerline"),s(" \uFF0C\u9700\u5728setting.json\u91CC\u8BBE\u7F6E\u5B57\u4F53\u5373\u53EF\u3002")],-1),en=l(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Meslo LG M for Powerline&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>\u4FEE\u6539\u9ED8\u8BA4\u542F\u52A8\u8DEF\u5F84\uFF0C\u8BBE\u7F6E\u300B\u5E38\u89C4\uFF0C\u9ED8\u8BA4\u662F <code>%USERPROFILE%</code>\uFF0C\u53EF\u4FEE\u6539\u4E3A <code>//wsl$/Ubuntu/home/jjm/</code>\uFF0C\u5219\u542F\u52A8\u65F6\u663E\u793A\u7834\u6298\u53F7 <code>~</code></li></ol><h3 id="windows-terminal\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#windows-terminal\u5FEB\u6377\u952E" aria-hidden="true">#</a> Windows Terminal\u5FEB\u6377\u952E</h3><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u7528\u5904</th></tr></thead><tbody><tr><td>Ctrl + Alt + \u6570\u5B57</td><td>\u5207\u6362\u6253\u5F00\u7684\u63A7\u5236\u53F0</td></tr><tr><td>Ctrl + Shift + \u6570\u5B57</td><td>\u6253\u5F00\u65B0\u7684\u63A7\u5236\u53F0</td></tr><tr><td>Shift + Alt + +/=</td><td>\u6A2A\u5411\u6253\u5F00\u65B0\u63A7\u5236\u53F0</td></tr><tr><td>Shift + Alt + _/-</td><td>\u7EB5\u5411\u6253\u5F00\u65B0\u63A7\u5236\u53F0</td></tr><tr><td>Shift + Alt + \u65B9\u5411\u952E</td><td>\u63A7\u5236\u63A7\u5236\u53F0\u5C3A\u5BF8</td></tr><tr><td>Alt + \u65B9\u5411\u952E</td><td>\u5728\u672C\u6807\u7B7E\u5185\u5207\u6362\u63A7\u5236\u53F0</td></tr><tr><td>Ctrl + Shift + w</td><td>\u5173\u95ED\u5F53\u524D\u63A7\u5236\u53F0</td></tr></tbody></table><h3 id="tree-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#tree-\u547D\u4EE4" aria-hidden="true">#</a> tree \u547D\u4EE4</h3><p>1\u3001\u5728ubuntu\u7CFB\u7EDF\u4E2D\u9ED8\u8BA4\u662F\u6CA1\u6709tree\u8FD9\u4E2A\u547D\u4EE4\u7684\uFF0C\u9700\u8981\u5B89\u88C5\uFF0C\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u5B89\u88C5tree\u8FD9\u4E2A\u547D\u4EE4\u5DE5\u5177sudo apt-get install tree</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u67E5\u770B\u90A6\u4E4B
tree --help

// \u751F\u6210\u6307\u5B9A\u5C42\u7EA7\u7684\u6587\u4EF6\u8DEF\u5F84
tree -L <span class="token number">2</span> <span class="token operator">&gt;</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7);function ln(rn,tn){const a=i("ExternalLinkIcon");return t(),p(o,null,[b,n("ul",null,[n("li",null,[n("a",u,[d,e(a)])]),n("li",null,[n("a",m,[h,e(a)]),g])]),v,n("ul",null,[_,x,f,n("li",null,[k,n("a",w,[y,e(a)]),q]),n("li",null,[n("a",S,[j,e(a)]),z]),O]),E,n("ul",null,[n("li",null,[n("a",W,[M,e(a)])])]),T,n("p",null,[D,n("a",L,[P,e(a)]),R]),A,n("p",null,[V,n("a",I,[N,e(a)])]),U,n("p",null,[n("a",$,[C,e(a)])]),H,n("ol",null,[n("li",null,[F,n("a",G,[K,e(a)]),J,B,Z,n("a",Q,[X,e(a)])]),Y,nn,sn,an]),en],64)}var on=r(c,[["render",ln],["__file","ubuntu.html.vue"]]);export{on as default};
