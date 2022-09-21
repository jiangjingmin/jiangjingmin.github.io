import{_ as p,r as t,o as c,c as i,a as n,b as e,F as o,e as r,d as s}from"./app.7139c5e1.js";const l={},d=r(`<h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><h2 id="nrm-\u591A\u955C\u50CF\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#nrm-\u591A\u955C\u50CF\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> nrm \u591A\u955C\u50CF\u7BA1\u7406\u5DE5\u5177</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 nrm</span>
$ <span class="token function">npm</span> i -g nrm

<span class="token comment"># \u6DFB\u52A0\u6E90</span>
$ nrm <span class="token function">add</span> mmears https://nexus.mmears.com/repository/npm-public/

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="npm-install" tabindex="-1"><a class="header-anchor" href="#npm-install" aria-hidden="true">#</a> npm install</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> xxx: \u5B89\u88C5\u9879\u76EE\u5230\u9879\u76EE\u76EE\u5F55\u4E0B\uFF0C\u4E0D\u4F1A\u5C06\u6A21\u5757\u4F9D\u8D56\u5199\u5165devDependencies\u6216dependencies\u3002

<span class="token function">npm</span> <span class="token function">install</span> -g xxx: -g\u7684\u610F\u601D\u662F\u5C06\u6A21\u5757\u5B89\u88C5\u5230\u5168\u5C40\uFF0C\u5177\u4F53\u5B89\u88C5\u5230\u78C1\u76D8\u54EA\u4E2A\u4F4D\u7F6E\uFF0C\u8981\u770B <span class="token function">npm</span> cinfig prefix\u7684\u4F4D\u7F6E

<span class="token function">npm</span> <span class="token function">install</span> -save xxx\uFF1A-save\u7684\u610F\u601D\u662F\u5C06\u6A21\u5757\u5B89\u88C5\u5230\u9879\u76EE\u76EE\u5F55\u4E0B\uFF0C\u5E76\u5728package\u6587\u4EF6\u7684dependencies\u8282\u70B9\u5199\u5165\u4F9D\u8D56\u3002

<span class="token function">npm</span> <span class="token function">install</span> -save-dev xxx\uFF1A-save-dev\u7684\u610F\u601D\u662F\u5C06\u6A21\u5757\u5B89\u88C5\u5230\u9879\u76EE\u76EE\u5F55\u4E0B\uFF0C\u5E76\u5728package\u6587\u4EF6\u7684devDependencies\u8282\u70B9\u5199\u5165\u4F9D\u8D56\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u6DD8\u5B9Dnpm\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6DD8\u5B9Dnpm\u955C\u50CF" aria-hidden="true">#</a> \u6DD8\u5B9DNPM\u955C\u50CF</h2>`,6),m={href:"https://npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"},h=s("https://npm.taobao.org/"),u=s("\u5EFA\u8BAE\u4E0D\u8981\u76F4\u63A5\u4F7F\u7528 cnpm \u5B89\u88C5\u4EE5\u6765\uFF0C\u4F1A\u6709\u5404\u79CD\u8BE1\u5F02\u7684 bug\u3002\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u64CD\u4F5C\u89E3\u51B3 npm \u4E0B\u8F7D\u901F\u5EA6\u6162\u7684\u95EE\u9898 npm install --registry="),b={href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},f=s("https://registry.npm.taobao.org"),g=r(`<h3 id="\u89E3\u51B3nrm\u5B89\u88C5\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3nrm\u5B89\u88C5\u62A5\u9519" aria-hidden="true">#</a> \u89E3\u51B3nrm\u5B89\u88C5\u62A5\u9519</h3><p>2021-04-11</p><p>\u89E3\u51B3\u65B9\u6848 \u627E\u5230\u4E0B\u65B9\u5730\u5740\uFF08\u89C1\u52A0\u7C97\u90E8\u5206\uFF0C\u5177\u4F53\u4F4D\u7F6E\u8BF7\u53C2\u8003\u62A5\u9519\u4EE3\u7801\u7684\u8DEF\u5F84\uFF09</p><p>C:\\Users\\kefu\\AppData\\Roaming\\npm\\node_modules\\nrm\\cli.js:17:20</p><p>\u6CE8\u91CA\u6216\u8005\u5220\u9664\u3010cli.js\u3011\u7B2C\u5341\u4E03\u884C\uFF0C\u4FEE\u6539\u4E3A\u4E0B\u65B9\u4EE3\u7801</p><p>//const NRMRC = path.join(p<wbr>rocess.env.HOME, &#39;.nrmrc&#39;); (\u5220\u9664) const NRMRC = path.join(p<wbr>rocess.env[(process.platform == &#39;win32&#39;) ? &#39;USERPROFILE&#39; : &#39;HOME&#39;], &#39;.nrmrc&#39;);</p><p>\u6700\u540E\u4E00\u6B65 \u6211\u4EEC\u5728cmd\u4E2D\u6267\u884Cnrm --version\uFF0C\u5373\u53EF\u53D1\u73B0\u6210\u529F\u663E\u793A\u7248\u672C\u53F7</p><p>C:\\Users\\kefu&gt;nrm --version 1.2.1</p><h2 id="yarn-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#yarn-\u5B89\u88C5" aria-hidden="true">#</a> yarn \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function _(x,v){const a=t("ExternalLinkIcon");return c(),i(o,null,[d,n("p",null,[n("a",m,[h,e(a)])]),n("p",null,[u,n("a",b,[f,e(a)])]),g],64)}var y=p(l,[["render",_],["__file","npm.html.vue"]]);export{y as default};
