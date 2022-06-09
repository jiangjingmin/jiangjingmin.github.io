import{_ as l,r as t,o as i,c as p,a as n,d as e,F as o,b as s,e as r}from"./app.2989aa3c.js";const c={},m=n("h1",{id:"nvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm","aria-hidden":"true"},"#"),s(" nvm")],-1),b=n("h2",{id:"windows-\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-\u5B89\u88C5","aria-hidden":"true"},"#"),s(" Windows \u5B89\u88C5")],-1),u={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},d=s("nvm-windows"),h={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},v=s("\u4E0B\u8F7D"),g=s("\uFF0C\u627E\u5230 nvm-setup.zip\uFF0C\u4E0B\u8F7D\u89E3\u538B\uFF0C\u8FD0\u884C "),k=n("code",null,"nvm-setup.exe",-1),f=s(", \u5B89\u88C5\u5373\u53EF"),_=r(`<p><strong>\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C</strong> Git\uFF0C\u8BBE\u7F6Envm\uFF0C\u4E0D\u7136 <code>nvm use</code> \u4F1A\u5931\u8D25</p><p>win \u627E\u5230\u5B89\u88C5\u8DEF\u5F84\u4E0B\u7684 unis000.exe\uFF0C\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> lts <span class="token comment"># \u957F\u671F\u7EF4\u62A4\u7248</span>
nvm use <span class="token number">16.3</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="mac-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5" aria-hidden="true">#</a> MAC \u5B89\u88C5</h2><h3 id="mirror-config-china" tabindex="-1"><a class="header-anchor" href="#mirror-config-china" aria-hidden="true">#</a> mirror-config-china</h3>`,5),x={href:"https://www.npmjs.com/package/mirror-config-china",target:"_blank",rel:"noopener noreferrer"},w=s("https://www.npmjs.com/package/mirror-config-china"),j=s(" \u4E3A\u4E2D\u56FD\u5185\u5730\u7684Node.js\u5F00\u53D1\u8005\u51C6\u5907\u7684\u955C\u50CF\u914D\u7F6E\uFF0C\u5927\u5927\u63D0\u9AD8node\u6A21\u5757\u5B89\u88C5\u901F\u5EA6\u3002"),N=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g mirror-config-china --registry<span class="token operator">=</span>https://registry.npm.taobao.org
<span class="token comment"># \u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F </span>
<span class="token function">npm</span> config list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="github\u955C\u50CF\u5B89\u88C5-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#github\u955C\u50CF\u5B89\u88C5-\u63A8\u8350" aria-hidden="true">#</a> github\u955C\u50CF\u5B89\u88C5\uFF08\u63A8\u8350\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/nvm-sh/nvm.git

<span class="token function">bash</span> nvm/install.sh

nvm -v

nvm <span class="token builtin class-name">alias</span> default <span class="token number">16.13</span>.1 <span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C\uFF0C\u4E0D\u7136\u65B0\u5F00\u7A97\u53E3\u8FD8\u662F\u6309\u7167default\u7248\u672C</span>

<span class="token comment"># \u5378\u8F7D</span>
<span class="token comment"># mac\uFF0C\u4EC5\u4EC5\u9700\u8981\u5220\u9664.nvm</span>
<span class="token function">rm</span> -rf ~/.nvm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5B89\u88C5nodejs" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nodejs" aria-hidden="true">#</a> \u5B89\u88C5nodeJS</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span><span class="token punctuation">]</span> 
<span class="token comment"># arch\u53C2\u6570\u8868\u793A\u7CFB\u7EDF\u4F4D\u6570\uFF0C\u9ED8\u8BA4\u662F64\u4F4D</span>
nvm <span class="token function">install</span> <span class="token number">6.9</span>.0 <span class="token number">32</span>

<span class="token comment"># nvm use &lt;version&gt; [&lt;arch&gt;]</span>
nvm use <span class="token number">6.9</span>.0

<span class="token comment"># \u5B89\u88C5\u6700\u65B0\u7A33\u5B9A\u7248\u672C</span>
nvm <span class="token function">install</span> stable <span class="token comment"># \u7A33\u5B9A\u7248\u672C</span>

nvm <span class="token function">install</span> lts/* <span class="token comment"># \u957F\u671F\u7EF4\u62A4\u7248</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5176\u4ED6\u5B89\u88C5\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5B89\u88C5\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u5B89\u88C5\u65B9\u6CD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

nvm ls-remote
<span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node nvm <span class="token function">install</span> <span class="token number">14.6</span>.0

// \u5168\u5C40\u5B89\u88C5\u7684\u5305\u5728
~/.nvm/versions/node/v14.6.0/bin$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="npm-\u81EA\u8EAB\u7684\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#npm-\u81EA\u8EAB\u7684\u5347\u7EA7" aria-hidden="true">#</a> npm \u81EA\u8EAB\u7684\u5347\u7EA7</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u964D\u7EA7\uFF1Anpm <span class="token function">install</span> -g npm@5.4.0
\u5347\u7EA7\uFF1Anpm <span class="token function">install</span> -g <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="nvm-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nvm-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> nvm \u5E38\u7528\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. nvm list \u662F\u67E5\u627E\u672C\u7535\u8111\u4E0A\u6240\u6709\u7684node\u7248\u672C
    - nvm list \u67E5\u770B\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C
    - nvm list installed \u67E5\u770B\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C
    - nvm list available \u67E5\u770B\u7F51\u7EDC\u53EF\u4EE5\u5B89\u88C5\u7684\u7248\u672C
2. nvm install &lt;version&gt; \u5B89\u88C5\u6307\u5B9A\u7248\u672Cnode
3. nvm use &lt;version&gt; \u5207\u6362\u4F7F\u7528\u6307\u5B9A\u7684\u7248\u672Cnode
4. nvm ls \u5217\u51FA\u6240\u6709\u7248\u672C
5. nvm current\u663E\u793A\u5F53\u524D\u7248\u672C
6. nvm alias &lt;name&gt; &lt;version&gt; ## \u7ED9\u4E0D\u540C\u7684\u7248\u672C\u53F7\u6DFB\u52A0\u522B\u540D
7. nvm unalias &lt;name&gt; ## \u5220\u9664\u5DF2\u5B9A\u4E49\u7684\u522B\u540D
8. nvm reinstall-packages &lt;version&gt; ## \u5728\u5F53\u524D\u7248\u672Cnode\u73AF\u5883\u4E0B\uFF0C\u91CD\u65B0\u5168\u5C40\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u53F7\u7684npm\u5305
9. nvm on \u6253\u5F00nodejs\u63A7\u5236
10. nvm off \u5173\u95EDnodejs\u63A7\u5236
11. nvm proxy \u67E5\u770B\u8BBE\u7F6E\u4E0E\u4EE3\u7406
12. nvm node_mirror [url] \u8BBE\u7F6E\u6216\u8005\u67E5\u770Bsetting.txt\u4E2D\u7684node_mirror\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u7684\u9ED8\u8BA4\u662F &lt;https://nodejs.org/dist/&gt;
    nvm npm_mirror [url] \u8BBE\u7F6E\u6216\u8005\u67E5\u770Bsetting.txt\u4E2D\u7684npm_mirror,\u5982\u679C\u4E0D\u8BBE\u7F6E\u7684\u8BDD\u9ED8\u8BA4\u7684\u662F\uFF1A &lt;https://github.com/npm/npm/archive/&gt;.
13. nvm uninstall &lt;version&gt; \u5378\u8F7D\u5236\u5B9A\u7684\u7248\u672C
14. nvm use [version] [arch] \u5207\u6362\u5236\u5B9A\u7684node\u7248\u672C\u548C\u4F4D\u6570
15. nvm root [path] \u8BBE\u7F6E\u548C\u67E5\u770Broot\u8DEF\u5F84
16. nvm version \u67E5\u770B\u5F53\u524D\u7684\u7248\u672C
17. nvm alias default v12.13.0 \u6307\u5B9A\u9ED8\u8BA4\u7684node\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,11);function y(V,E){const a=t("ExternalLinkIcon");return i(),p(o,null,[m,b,n("ul",null,[n("li",null,[n("a",u,[d,e(a)])])]),n("p",null,[n("a",h,[v,e(a)]),g,k,f]),_,n("p",null,[n("a",x,[w,e(a)]),j]),N],64)}var R=l(c,[["render",y],["__file","nvm.html.vue"]]);export{R as default};
