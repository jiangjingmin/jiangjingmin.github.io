import{_ as c,r as t,o as p,a as d,b as e,e as s,F as l,c as o,d as a}from"./app.b778d435.js";const r={},i=o(`<h1 id="real-dom\u548C-virtual-dom-\u7684\u533A\u522B-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#real-dom\u548C-virtual-dom-\u7684\u533A\u522B-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> Real DOM\u548C Virtual DOM \u7684\u533A\u522B\uFF1F\u4F18\u7F3A\u70B9\uFF1F</h1><p><img src="https://static.vue-js.com/f1d36350-d302-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>Real DOM\uFF0C\u771F\u5B9E<code>DOM</code>\uFF0C \u610F\u601D\u4E3A\u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF0C\u662F\u4E00\u4E2A\u7ED3\u6784\u5316\u6587\u672C\u7684\u62BD\u8C61\uFF0C\u5728\u9875\u9762\u6E32\u67D3\u51FA\u7684\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u90FD\u662F\u4E00\u4E2A\u771F\u5B9E<code>DOM</code>\u7ED3\u6784\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/fc7ba8d0-d302-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p><code>Virtual Dom</code>\uFF0C\u672C\u8D28\u4E0A\u662F\u4EE5 <code>JavaScript</code> \u5BF9\u8C61\u5F62\u5F0F\u5B58\u5728\u7684\u5BF9 <code>DOM</code> \u7684\u63CF\u8FF0</p><p>\u521B\u5EFA\u865A\u62DF<code>DOM</code>\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u66F4\u597D\u5C06\u865A\u62DF\u7684\u8282\u70B9\u6E32\u67D3\u5230\u9875\u9762\u89C6\u56FE\u4E2D\uFF0C\u865A\u62DF<code>DOM</code>\u5BF9\u8C61\u7684\u8282\u70B9\u4E0E\u771F\u5B9E<code>DOM</code>\u7684\u5C5E\u6027\u4E00\u4E00\u7167\u5E94</p><p>\u5728<code>React</code>\u4E2D\uFF0C<code>JSX</code>\u662F\u5176\u4E00\u5927\u7279\u6027\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5728<code>JS</code>\u4E2D\u901A\u8FC7\u4F7F\u7528<code>XML</code>\u7684\u65B9\u5F0F\u53BB\u76F4\u63A5\u58F0\u660E\u754C\u9762\u7684<code>DOM</code>\u7ED3\u6784</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> vDom <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span> <span class="token comment">// \u521B\u5EFAh1\u6807\u7B7E\uFF0C\u53F3\u8FB9\u5343\u4E07\u4E0D\u80FD\u52A0\u5F15\u53F7</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u627E\u5230&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;\u8282\u70B9</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>vDom<span class="token punctuation">,</span> root<span class="token punctuation">)</span> <span class="token comment">// \u628A\u521B\u5EFA\u7684h1\u6807\u7B7E\u6E32\u67D3\u5230root\u8282\u70B9\u4E0A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u8FF0\u4E2D\uFF0C<code>ReactDOM.render()</code>\u7528\u4E8E\u5C06\u4F60\u521B\u5EFA\u597D\u7684\u865A\u62DF<code>DOM</code>\u8282\u70B9\u63D2\u5165\u5230\u67D0\u4E2A\u771F\u5B9E\u8282\u70B9\u4E0A\uFF0C\u5E76\u6E32\u67D3\u5230\u9875\u9762\u4E0A</p><p><code>JSX</code>\u5B9E\u9645\u662F\u4E00\u79CD\u8BED\u6CD5\u7CD6\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4F1A\u88AB<code>babel</code>\u8FDB\u884C\u7F16\u8BD1\u8F6C\u5316\u6210<code>JS</code>\u4EE3\u7801\uFF0C\u4E0A\u8FF0<code>VDOM</code>\u8F6C\u5316\u4E3A\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> vDom <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token string">&#39;h1&#39;</span>\uFF0C 
  <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;hClass&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;hId&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>JSX</code>\u5C31\u662F\u4E3A\u4E86\u7B80\u5316\u76F4\u63A5\u8C03\u7528<code>React.createElement()</code> \u65B9\u6CD5\uFF1A</p><ul><li><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6807\u7B7E\u540D\uFF0C\u4F8B\u5982h1\u3001span\u3001table...</p></li><li><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5B58\u7740\u6807\u7B7E\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u4F8B\u5982id\u3001class\u7B49</p><p>\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u8282\u70B9\u4E2D\u7684\u6587\u672C</p></li></ul><p>\u901A\u8FC7<code>console.log(VDOM)</code>\uFF0C\u5219\u80FD\u591F\u5F97\u5230\u865A\u62DF<code>VDOM</code>\u6D88\u606F</p><p><img src="https://static.vue-js.com/1716b9a0-d303-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u6240\u4EE5\u53EF\u4EE5\u5F97\u5230\uFF0C<code>JSX</code>\u901A\u8FC7<code>babel</code>\u7684\u65B9\u5F0F\u8F6C\u5316\u6210<code>React.createElement</code>\u6267\u884C\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u865A\u62DF<code>DOM</code></p><h2 id="\u4E8C\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u533A\u522B</h2><p>\u4E24\u8005\u7684\u533A\u522B\u5982\u4E0B\uFF1A</p><ul><li>\u865A\u62DFDOM\u4E0D\u4F1A\u8FDB\u884C\u6392\u7248\u4E0E\u91CD\u7ED8\u64CD\u4F5C\uFF0C\u800C\u771F\u5B9EDOM\u4F1A\u9891\u7E41\u91CD\u6392\u4E0E\u91CD\u7ED8</li><li>\u865A\u62DFDOM\u7684\u603B\u635F\u8017\u662F\u201C\u865A\u62DFDOM\u589E\u5220\u6539+\u771F\u5B9EDOM\u5DEE\u5F02\u589E\u5220\u6539+\u6392\u7248\u4E0E\u91CD\u7ED8\u201D\uFF0C\u771F\u5B9EDOM\u7684\u603B\u635F\u8017\u662F\u201C\u771F\u5B9EDOM\u5B8C\u5168\u589E\u5220\u6539+\u6392\u7248\u4E0E\u91CD\u7ED8\u201D</li></ul>`,20),u=a("\u62FF"),h={href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484516&idx=1&sn=965a4ce32bf93adb9ed112922c5cb8f5&chksm=fc10c632cb674f2484fdf914d76fba55afcefca3b5adcbe6cf4b0c7fd36e29d0292e8cefceb5&scene=178&cur_album_id=1711105826272116736#rd",target:"_blank",rel:"noopener noreferrer"},m=a("\u4EE5\u524D\u6587\u7AE0"),k=a("\u4E3E\u8FC7\u7684\u4F8B\u5B50\uFF1A"),b=o('<p>\u4F20\u7EDF\u7684\u539F\u751F<code>api</code>\u6216<code>jQuery</code>\u53BB\u64CD\u4F5C<code>DOM</code>\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u4ECE\u6784\u5EFA<code>DOM</code>\u6811\u5F00\u59CB\u4ECE\u5934\u5230\u5C3E\u6267\u884C\u4E00\u904D\u6D41\u7A0B</p><p>\u5F53\u4F60\u5728\u4E00\u6B21\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981\u66F4\u65B010\u4E2A<code>DOM</code>\u8282\u70B9\uFF0C\u6D4F\u89C8\u5668\u6CA1\u8FD9\u4E48\u667A\u80FD\uFF0C\u6536\u5230\u7B2C\u4E00\u4E2A\u66F4\u65B0<code>DOM</code>\u8BF7\u6C42\u540E\uFF0C\u5E76\u4E0D\u77E5\u9053\u540E\u7EED\u8FD8\u67099\u6B21\u66F4\u65B0\u64CD\u4F5C\uFF0C\u56E0\u6B64\u4F1A\u9A6C\u4E0A\u6267\u884C\u6D41\u7A0B\uFF0C\u6700\u7EC8\u6267\u884C10\u6B21\u6D41\u7A0B</p><p>\u800C\u901A\u8FC7<code>VNode</code>\uFF0C\u540C\u6837\u66F4\u65B010\u4E2A<code>DOM</code>\u8282\u70B9\uFF0C\u865A\u62DF<code>DOM</code>\u4E0D\u4F1A\u7ACB\u5373\u64CD\u4F5C<code>DOM</code>\uFF0C\u800C\u662F\u5C06\u8FD910\u6B21\u66F4\u65B0\u7684<code>diff</code>\u5185\u5BB9\u4FDD\u5B58\u5230\u672C\u5730\u7684\u4E00\u4E2A<code>js</code>\u5BF9\u8C61\u4E2D\uFF0C\u6700\u7EC8\u5C06\u8FD9\u4E2A<code>js</code>\u5BF9\u8C61\u4E00\u6B21\u6027<code>attach</code>\u5230<code>DOM</code>\u6811\u4E0A\uFF0C\u907F\u514D\u5927\u91CF\u7684\u65E0\u8C13\u8BA1\u7B97</p><h2 id="\u4E09\u3001\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4E09\u3001\u4F18\u7F3A\u70B9</h2><p>\u771F\u5B9E<code>DOM</code>\u7684\u4F18\u52BF\uFF1A</p><ul><li>\u6613\u7528</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u6548\u7387\u4F4E\uFF0C\u89E3\u6790\u901F\u5EA6\u6162\uFF0C\u5185\u5B58\u5360\u7528\u91CF\u8FC7\u9AD8</li><li>\u6027\u80FD\u5DEE\uFF1A\u9891\u7E41\u64CD\u4F5C\u771F\u5B9EDOM\uFF0C\u6613\u4E8E\u5BFC\u81F4\u91CD\u7ED8\u4E0E\u56DE\u6D41</li></ul><p>\u4F7F\u7528\u865A\u62DF<code>DOM</code>\u7684\u4F18\u52BF\u5982\u4E0B\uFF1A</p><ul><li><p>\u7B80\u5355\u65B9\u4FBF\uFF1A\u5982\u679C\u4F7F\u7528\u624B\u52A8\u64CD\u4F5C\u771F\u5B9E<code>DOM</code>\u6765\u5B8C\u6210\u9875\u9762\uFF0C\u7E41\u7410\u53C8\u5BB9\u6613\u51FA\u9519\uFF0C\u5728\u5927\u89C4\u6A21\u5E94\u7528\u4E0B\u7EF4\u62A4\u8D77\u6765\u4E5F\u5F88\u56F0\u96BE</p></li><li><p>\u6027\u80FD\u65B9\u9762\uFF1A\u4F7F\u7528Virtual DOM\uFF0C\u80FD\u591F\u6709\u6548\u907F\u514D\u771F\u5B9EDOM\u6570\u9891\u7E41\u66F4\u65B0\uFF0C\u51CF\u5C11\u591A\u6B21\u5F15\u8D77\u91CD\u7ED8\u4E0E\u56DE\u6D41\uFF0C\u63D0\u9AD8\u6027\u80FD</p></li><li><p>\u8DE8\u5E73\u53F0\uFF1AReact\u501F\u52A9\u865A\u62DFDOM\uFF0C \u5E26\u6765\u4E86\u8DE8\u5E73\u53F0\u7684\u80FD\u529B\uFF0C\u4E00\u5957\u4EE3\u7801\u591A\u7AEF\u8FD0\u884C</p></li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u5728\u4E00\u4E9B\u6027\u80FD\u8981\u6C42\u6781\u9AD8\u7684\u5E94\u7528\u4E2D\u865A\u62DF DOM \u65E0\u6CD5\u8FDB\u884C\u9488\u5BF9\u6027\u7684\u6781\u81F4\u4F18\u5316</li><li>\u9996\u6B21\u6E32\u67D3\u5927\u91CFDOM\u65F6\uFF0C\u7531\u4E8E\u591A\u4E86\u4E00\u5C42\u865A\u62DFDOM\u7684\u8BA1\u7B97\uFF0C\u901F\u5EA6\u6BD4\u6B63\u5E38\u7A0D\u6162</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',13),D={href:"https://juejin.cn/post/6844904052971536391",target:"_blank",rel:"noopener noreferrer"},M=a("https://juejin.cn/post/6844904052971536391"),O={href:"https://www.html.cn/qa/other/22832.html",target:"_blank",rel:"noopener noreferrer"},_=a("https://www.html.cn/qa/other/22832.html");function f(g,v){const n=t("ExternalLinkIcon");return p(),d(l,null,[i,e("p",null,[u,e("a",h,[m,s(n)]),k]),b,e("ul",null,[e("li",null,[e("a",D,[M,s(n)])]),e("li",null,[e("a",O,[_,s(n)])])])],64)}var j=c(r,[["render",f],["__file","virtual_dom.html.vue"]]);export{j as default};
