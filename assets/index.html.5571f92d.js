import{_ as o,r as t,o as c,c as l,a as n,d as a,F as i,b as e,e as r}from"./app.2989aa3c.js";const p={},d=n("h1",{id:"docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),e(" Docker")],-1),h={href:"https://github.com/docker",target:"_blank",rel:"noopener noreferrer"},u=e("Docker"),b=e(": - "),k={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},m=e("\u6587\u6863"),_={href:"https://juejin.cn/post/6844903591375814669",target:"_blank",rel:"noopener noreferrer"},f=e("\u4ECE 0 \u5F00\u59CB\u4E86\u89E3 Docker"),g={href:"https://www.cnblogs.com/stulzq/p/7743667.html",target:"_blank",rel:"noopener noreferrer"},x=e("Windows 10 \u5B89\u88C5 Docker for Windows"),D={href:"https://yeasy.gitbook.io/docker_practice",target:"_blank",rel:"noopener noreferrer"},v=r('<h2 id="\u4E00\u3001docker-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001docker-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001Docker \u662F\u4EC0\u4E48</h2><p><strong>Docker \u5C5E\u4E8E Linux \u5BB9\u5668\u7684\u4E00\u79CD\u5C01\u88C5\uFF0C\u63D0\u4F9B\u7B80\u5355\u6613\u7528\u7684\u5BB9\u5668\u4F7F\u7528\u63A5\u53E3\u3002\u5B83\u662F\u76EE\u524D\u6700\u6D41\u884C\u7684 Linux \u5BB9\u5668\u89E3\u51B3\u65B9\u6848\u3002</strong></p><p>Docker \u5C06\u5E94\u7528\u7A0B\u5E8F\u4E0E\u8BE5\u7A0B\u5E8F\u7684\u4F9D\u8D56\uFF0C\u6253\u5305\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u9762\u3002\u8FD0\u884C\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A\u865A\u62DF\u5BB9\u5668\u3002\u7A0B\u5E8F\u5728\u8FD9\u4E2A\u865A\u62DF\u5BB9\u5668\u91CC\u8FD0\u884C\uFF0C\u5C31\u597D\u50CF\u5728\u771F\u5B9E\u7684\u7269\u7406\u673A\u4E0A\u8FD0\u884C\u4E00\u6837\u3002\u6709\u4E86 Docker\uFF0C\u5C31\u4E0D\u7528\u62C5\u5FC3\u73AF\u5883\u95EE\u9898\u3002</p><p>\u603B\u4F53\u6765\u8BF4\uFF0CDocker \u7684\u63A5\u53E3\u76F8\u5F53\u7B80\u5355\uFF0C\u7528\u6237\u53EF\u4EE5\u65B9\u4FBF\u5730\u521B\u5EFA\u548C\u4F7F\u7528\u5BB9\u5668\uFF0C\u628A\u81EA\u5DF1\u7684\u5E94\u7528\u653E\u5165\u5BB9\u5668\u3002\u5BB9\u5668\u8FD8\u53EF\u4EE5\u8FDB\u884C\u7248\u672C\u7BA1\u7406\u3001\u590D\u5236\u3001\u5206\u4EAB\u3001\u4FEE\u6539\uFF0C\u5C31\u50CF\u7BA1\u7406\u666E\u901A\u7684\u4EE3\u7801\u4E00\u6837\u3002</p><h2 id="\u4E8C\u3001\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> \u4E8C\u3001\u4E3A\u4EC0\u4E48</h2><h2 id="\u4E09\u3001\u600E\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u600E\u4E48\u7528" aria-hidden="true">#</a> \u4E09\u3001\u600E\u4E48\u7528</h2><h3 id="_1\u3001\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5</h3>',7),w={href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository",target:"_blank",rel:"noopener noreferrer"},j=e("Docker \u5B98\u65B9\u6559\u7A0B"),N=r(`<p>\u672C\u4EBA\u4F7F\u7528 Set up the repository \u5B89\u88C5\u65B9\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u955C\u50CF</span>
<span class="token function">docker</span> images 

<span class="token comment"># \u8FD0\u884Cdocker\u5BB9\u5668</span>
<span class="token function">docker</span> run -d -p <span class="token number">80</span>:80 docker/getting-started

<span class="token comment"># \u505C\u6B62\u8FD0\u884C\u5BB9\u5668</span>
<span class="token function">docker</span> stop CONTAINER

<span class="token comment"># \u67E5\u770B\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\uFF0C\u4E4B\u540E\u4FBF\u53EF\u4EE5\u8FD0\u884C linux \u547D\u4EE4\u64CD\u4F5C\u4E86</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 16c9de9669f9 /bin/sh

<span class="token comment"># \u9000\u51FA\u5BB9\u5668</span>
<span class="token builtin class-name">exit</span>

<span class="token comment"># \u67E5\u770B\u547D\u4EE4</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> --help
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="docker\u4E0Ek8s-\u96BE\u820D\u96BE\u5206" tabindex="-1"><a class="header-anchor" href="#docker\u4E0Ek8s-\u96BE\u820D\u96BE\u5206" aria-hidden="true">#</a> Docker\u4E0Ek8s \u96BE\u820D\u96BE\u5206</h2><p>Docker \u548C k8s \u5728\u4E1A\u754C\u975E\u5E38\u6D41\u884C\uFF0C\u90FD\u5DF2\u7ECF\u662F\u4E8B\u5B9E\u4E0A\u7684\u6807\u51C6\u3002</p><p>Docker \u662F\u7528\u4E8E\u6784\u5EFA\u3001\u5206\u53D1\u3001\u8FD0\u884C\u5BB9\u5668\u7684\u5E73\u53F0\u548C\u5DE5\u5177\u3002</p><p>\u800C k8s \u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u4F7F\u7528 Docker \u5BB9\u5668\u8FDB\u884C\u7F16\u6392\u7684\u7CFB\u7EDF\uFF0C\u4E3B\u8981\u56F4\u7ED5 pods \u8FDB\u884C\u5DE5\u4F5C\u3002Pods \u662F k8s \u751F\u6001\u4E2D\u6700\u5C0F\u7684\u8C03\u5EA6\u5355\u4F4D\uFF0C\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u3002</p><p>Docker \u548C k8s \u662F\u6839\u672C\u4E0A\u4E0D\u540C\u7684\u6280\u672F\uFF0C\u4E24\u8005\u53EF\u4EE5\u5F88\u597D\u7684\u534F\u540C\u5DE5\u4F5C\u3002</p><h2 id="vmmem\u5360\u7528\u5185\u5B58\u8FC7\u5927\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vmmem\u5360\u7528\u5185\u5B58\u8FC7\u5927\u95EE\u9898" aria-hidden="true">#</a> vmmem\u5360\u7528\u5185\u5B58\u8FC7\u5927\u95EE\u9898</h2><p>\u542F\u52A8cmd\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u8F93\u5165 wsl --shutdown \u6765\u5173\u95ED\u5F53\u524D\u7684\u5B50\u7CFB\u7EDF</p><h4 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h4>`,12),y={href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"},E=e("Docker \u5165\u95E8\u6559\u7A0B - \u962E\u4E00\u5CF0"),L={href:"https://juejin.cn/post/6913568633813729294",target:"_blank",rel:"noopener noreferrer"},V=e("https://juejin.cn/post/6913568633813729294 - \u6398\u91D1");function B(I,C){const s=t("ExternalLinkIcon");return c(),l(i,null,[d,n("ul",null,[n("li",null,[n("a",h,[u,a(s)]),b,n("a",k,[m,a(s)])]),n("li",null,[n("a",_,[f,a(s)])]),n("li",null,[n("a",g,[x,a(s)])]),n("li",null,[n("a",D,[a(s)])])]),v,n("ul",null,[n("li",null,[n("a",w,[j,a(s)])])]),N,n("ul",null,[n("li",null,[n("a",y,[E,a(s)])]),n("li",null,[n("a",L,[V,a(s)])])])],64)}var S=o(p,[["render",B],["__file","index.html.vue"]]);export{S as default};
