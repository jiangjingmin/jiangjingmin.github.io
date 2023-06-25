import{_ as c,r as o,o as p,c as t,a as s,b as n,F as r,e as i,d as a}from"./app.f6b3af9d.js";const l={},d=i(`<h1 id="\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-process-\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-process-\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u8BF4\u8BF4\u5BF9 Node \u4E2D\u7684 process \u7684\u7406\u89E3\uFF1F\u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5\uFF1F</h1><p><img src="https://static.vue-js.com/4f7866b0-c2b2-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>process</code> \u5BF9\u8C61\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u63D0\u4F9B\u4E86\u6709\u5173\u5F53\u524D <code>Node.js</code>\u8FDB\u7A0B\u7684\u4FE1\u606F\u5E76\u5BF9\u5176\u8FDB\u884C\u63A7\u5236\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF</p><p>\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u8FDB\u7A0B\u8BA1\u7B97\u673A\u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7ED3\u6784\u7684\u57FA\u7840\uFF0C\u662F\u7EBF\u7A0B\u7684\u5BB9\u5668</p><p>\u5F53\u6211\u4EEC\u542F\u52A8\u4E00\u4E2A<code>js</code>\u6587\u4EF6\uFF0C\u5B9E\u9645\u5C31\u662F\u5F00\u542F\u4E86\u4E00\u4E2A\u670D\u52A1\u8FDB\u7A0B\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u62E5\u6709\u81EA\u5DF1\u7684\u72EC\u7ACB\u7A7A\u95F4\u5730\u5740\u3001\u6570\u636E\u6808\uFF0C\u50CF\u53E6\u4E00\u4E2A\u8FDB\u7A0B\u65E0\u6CD5\u8BBF\u95EE\u5F53\u524D\u8FDB\u7A0B\u7684\u53D8\u91CF\u3001\u6570\u636E\u7ED3\u6784\uFF0C\u53EA\u6709\u6570\u636E\u901A\u4FE1\u540E\uFF0C\u8FDB\u7A0B\u4E4B\u95F4\u624D\u53EF\u4EE5\u6570\u636E\u5171\u4EAB</p><p>\u7531\u4E8E<code>JavaScript</code>\u662F\u4E00\u4E2A\u5355\u7EBF\u7A0B\u8BED\u8A00\uFF0C\u6240\u4EE5\u901A\u8FC7<code>node xxx</code>\u542F\u52A8\u4E00\u4E2A\u6587\u4EF6\u540E\uFF0C\u53EA\u6709\u4E00\u6761\u4E3B\u7EBF\u7A0B</p><h2 id="\u4E8C\u3001\u5C5E\u6027\u4E0E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5C5E\u6027\u4E0E\u65B9\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001\u5C5E\u6027\u4E0E\u65B9\u6CD5</h2><p>\u5173\u4E8E<code>process</code>\u5E38\u89C1\u7684\u5C5E\u6027\u6709\u5982\u4E0B\uFF1A</p><ul><li>p<wbr>rocess.env\uFF1A\u73AF\u5883\u53D8\u91CF\uFF0C\u4F8B\u5982\u901A\u8FC7 \`p<wbr>rocess.env.NODE_ENV \u83B7\u53D6\u4E0D\u540C\u73AF\u5883\u9879\u76EE\u914D\u7F6E\u4FE1\u606F</li><li>process.nextTick\uFF1A\u8FD9\u4E2A\u5728\u8C08\u53CA <code>EventLoop</code> \u65F6\u7ECF\u5E38\u4E3A\u4F1A\u63D0\u5230</li><li>process.pid\uFF1A\u83B7\u53D6\u5F53\u524D\u8FDB\u7A0Bid</li><li>process.ppid\uFF1A\u5F53\u524D\u8FDB\u7A0B\u5BF9\u5E94\u7684\u7236\u8FDB\u7A0B</li><li>process.cwd()\uFF1A\u83B7\u53D6\u5F53\u524D\u8FDB\u7A0B\u5DE5\u4F5C\u76EE\u5F55\uFF0C</li><li>process.platform\uFF1A\u83B7\u53D6\u5F53\u524D\u8FDB\u7A0B\u8FD0\u884C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0</li><li>process.uptime()\uFF1A\u5F53\u524D\u8FDB\u7A0B\u5DF2\u8FD0\u884C\u65F6\u95F4\uFF0C\u4F8B\u5982\uFF1Apm2 \u5B88\u62A4\u8FDB\u7A0B\u7684 uptime \u503C</li><li>\u8FDB\u7A0B\u4E8B\u4EF6\uFF1A process.on(\u2018uncaughtException\u2019,cb) \u6355\u83B7\u5F02\u5E38\u4FE1\u606F\u3001 process.on(\u2018exit\u2019,cb\uFF09\u8FDB\u7A0B\u63A8\u51FA\u76D1\u542C</li><li>\u4E09\u4E2A\u6807\u51C6\u6D41\uFF1A process.stdout \u6807\u51C6\u8F93\u51FA\u3001 process.stdin \u6807\u51C6\u8F93\u5165\u3001 process.stderr \u6807\u51C6\u9519\u8BEF\u8F93\u51FA</li><li>process.title \u6307\u5B9A\u8FDB\u7A0B\u540D\u79F0\uFF0C\u6709\u7684\u65F6\u5019\u9700\u8981\u7ED9\u8FDB\u7A0B\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0</li></ul><p>\u4E0B\u9762\u518D\u7A0D\u5FAE\u4ECB\u7ECD\u4E0B\u67D0\u4E9B\u65B9\u6CD5\u7684\u4F7F\u7528\uFF1A</p><h3 id="process-cwd" tabindex="-1"><a class="header-anchor" href="#process-cwd" aria-hidden="true">#</a> process.cwd()</h3><p>\u8FD4\u56DE\u5F53\u524D <code>Node</code>\u8FDB\u7A0B\u6267\u884C\u7684\u76EE\u5F55</p><p>\u4E00\u4E2A<code>Node</code> \u6A21\u5757 <code>A</code> \u901A\u8FC7 NPM \u53D1\u5E03\uFF0C\u9879\u76EE <code>B</code> \u4E2D\u4F7F\u7528\u4E86\u6A21\u5757 <code>A</code>\u3002\u5728 <code>A</code> \u4E2D\u9700\u8981\u64CD\u4F5C <code>B</code> \u9879\u76EE\u4E0B\u7684\u6587\u4EF6\u65F6\uFF0C\u5C31\u53EF\u4EE5\u7528 <code>process.cwd()</code> \u6765\u83B7\u53D6 <code>B</code> \u9879\u76EE\u7684\u8DEF\u5F84</p><h3 id="process-argv" tabindex="-1"><a class="header-anchor" href="#process-argv" aria-hidden="true">#</a> process.argv</h3><p>\u5728\u7EC8\u7AEF\u901A\u8FC7 Node \u6267\u884C\u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u901A\u8FC7 <code>process.argv</code> \u53EF\u4EE5\u83B7\u53D6\u4F20\u5165\u7684\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><ul><li>0: Node \u8DEF\u5F84\uFF08\u4E00\u822C\u7528\u4E0D\u5230\uFF0C\u76F4\u63A5\u5FFD\u7565\uFF09</li><li>1: \u88AB\u6267\u884C\u7684 JS \u6587\u4EF6\u8DEF\u5F84\uFF08\u4E00\u822C\u7528\u4E0D\u5230\uFF0C\u76F4\u63A5\u5FFD\u7565\uFF09</li><li>2~n: \u771F\u5B9E\u4F20\u5165\u547D\u4EE4\u7684\u53C2\u6570</li></ul><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u8981\u4ECE <code>process.argv[2]</code> \u5F00\u59CB\u83B7\u53D6\u5C31\u597D\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> args <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="process-env" tabindex="-1"><a class="header-anchor" href="#process-env" aria-hidden="true">#</a> p<wbr>rocess.env</h3><p>\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B58\u50A8\u5F53\u524D\u73AF\u5883\u76F8\u5173\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u4E00\u822C\u5F88\u5C11\u76F4\u63A5\u7528\u5230\u3002</p><p>\u4E00\u822C\u6211\u4EEC\u4F1A\u5728 <code>p<wbr>rocess.env</code> \u4E0A\u6302\u8F7D\u4E00\u4E9B\u53D8\u91CF\u6807\u8BC6\u5F53\u524D\u7684\u73AF\u5883\u3002\u6BD4\u5982\u6700\u5E38\u89C1\u7684\u7528 <code>p<wbr>rocess.env.NODE_ENV</code> \u533A\u5206 <code>development</code> \u548C <code>production</code></p><p>\u5728 <code>vue-cli</code> \u7684\u6E90\u7801\u4E2D\u4E5F\u7ECF\u5E38\u4F1A\u770B\u5230 <code>p<wbr>rocess.env.VUE_CLI_DEBUG</code> \u6807\u8BC6\u5F53\u524D\u662F\u4E0D\u662F <code>DEBUG</code> \u6A21\u5F0F</p><h3 id="process-nexttick" tabindex="-1"><a class="header-anchor" href="#process-nexttick" aria-hidden="true">#</a> process.nextTick()</h3><p>\u6211\u4EEC\u77E5\u9053<code>NodeJs</code>\u662F\u57FA\u4E8E\u4E8B\u4EF6\u8F6E\u8BE2\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5904\u7406\u4E00\u4EF6\u4E8B\u60C5</p><p>\u5728\u8FD9\u79CD\u5904\u7406\u6A21\u5F0F\u4E0B\uFF0C<code>process.nextTick()</code>\u5C31\u662F\u5B9A\u4E49\u51FA\u4E00\u4E2A\u52A8\u4F5C\uFF0C\u5E76\u4E14\u8BA9\u8FD9\u4E2A\u52A8\u4F5C\u5728\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u8F6E\u8BE2\u7684\u65F6\u95F4\u70B9\u4E0A\u6267\u884C</p><p>\u4F8B\u5982\u4E0B\u9762\u4F8B\u5B50\u5C06\u4E00\u4E2A<code>foo</code>\u51FD\u6570\u5728\u4E0B\u4E00\u4E2A\u65F6\u95F4\u70B9\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A<code>bar</code>\u3001<code>foo</code></p><p>\u867D\u7136\u4E0B\u8FF0\u65B9\u5F0F\u4E5F\u80FD\u5B9E\u73B0\u540C\u6837\u6548\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E24\u8005\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>process.nextTick()\u4F1A\u5728\u8FD9\u4E00\u6B21event loop\u7684call stack\u6E05\u7A7A\u540E\uFF08\u4E0B\u4E00\u6B21event loop\u5F00\u59CB\u524D\uFF09\u518D\u8C03\u7528callback</li><li>setTimeout()\u662F\u5E76\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019call stack\u6E05\u7A7A\u7684\uFF0C\u6240\u4EE5\u4F55\u65F6\u8C03\u7528callback\u51FD\u6570\u662F\u4E0D\u786E\u5B9A\u7684</li></ul><h3 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h3>`,34),u={href:"http://nodejs.cn/api/process.html",target:"_blank",rel:"noopener noreferrer"},h=a("http://nodejs.cn/api/process.html"),k={href:"https://vue3js.cn/interview/",target:"_blank",rel:"noopener noreferrer"},b=a("https://vue3js.cn/interview/");function v(m,f){const e=o("ExternalLinkIcon");return p(),t(r,null,[d,s("ul",null,[s("li",null,[s("a",u,[h,n(e)])]),s("li",null,[s("a",k,[b,n(e)])])])],64)}var _=c(l,[["render",v],["__file","process.html.vue"]]);export{_ as default};
