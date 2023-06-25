import{_ as a,r as e,o as p,c as t,a as n,b as o,F as c,e as r,d as l}from"./app.cec2e512.js";const i={},u=r(`<h1 id="\u8BF4\u8BF4webpack-proxy\u5DE5\u4F5C\u539F\u7406-\u4E3A\u4EC0\u4E48\u80FD\u89E3\u51B3\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4webpack-proxy\u5DE5\u4F5C\u539F\u7406-\u4E3A\u4EC0\u4E48\u80FD\u89E3\u51B3\u8DE8\u57DF" aria-hidden="true">#</a> \u8BF4\u8BF4webpack proxy\u5DE5\u4F5C\u539F\u7406\uFF1F\u4E3A\u4EC0\u4E48\u80FD\u89E3\u51B3\u8DE8\u57DF?</h1><p><img src="https://static.vue-js.com/5b871600-ace5-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>webpack proxy</code>\uFF0C\u5373<code>webpack</code>\u63D0\u4F9B\u7684\u4EE3\u7406\u670D\u52A1</p><p>\u57FA\u672C\u884C\u4E3A\u5C31\u662F\u63A5\u6536\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u8BF7\u6C42\u540E\u8F6C\u53D1\u7ED9\u5176\u4ED6\u670D\u52A1\u5668</p><p>\u5176\u76EE\u7684\u662F\u4E3A\u4E86\u4FBF\u4E8E\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF08\u6D4F\u89C8\u5668\u5B89\u5168\u7B56\u7565\u9650\u5236\uFF09</p><p>\u60F3\u8981\u5B9E\u73B0\u4EE3\u7406\u9996\u5148\u9700\u8981\u4E00\u4E2A\u4E2D\u95F4\u670D\u52A1\u5668\uFF0C<code>webpack</code>\u4E2D\u63D0\u4F9B\u670D\u52A1\u5668\u7684\u5DE5\u5177\u4E3A<code>webpack-dev-server</code></p><h4 id="webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server" aria-hidden="true">#</a> webpack-dev-server</h4><p><code>webpack-dev-server</code>\u662F <code>webpack</code> \u5B98\u65B9\u63A8\u51FA\u7684\u4E00\u6B3E\u5F00\u53D1\u5DE5\u5177\uFF0C\u5C06\u81EA\u52A8\u7F16\u8BD1\u548C\u81EA\u52A8\u5237\u65B0\u6D4F\u89C8\u5668\u7B49\u4E00\u7CFB\u5217\u5BF9\u5F00\u53D1\u53CB\u597D\u7684\u529F\u80FD\u5168\u90E8\u96C6\u6210\u5728\u4E86\u4E00\u8D77</p><p>\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u9AD8\u5F00\u53D1\u8005\u65E5\u5E38\u7684\u5F00\u53D1\u6548\u7387\uFF0C<strong>\u53EA\u9002\u7528\u5728\u5F00\u53D1\u9636\u6BB5</strong></p><p>\u5173\u4E8E\u914D\u7F6E\u65B9\u9762\uFF0C\u5728<code>webpack</code>\u914D\u7F6E\u5BF9\u8C61\u5C5E\u6027\u4E2D\u901A\u8FC7<code>devServer</code>\u5C5E\u6027\u63D0\u4F9B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ./webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;https://api.github.com&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>devServetr</code>\u91CC\u9762<code>proxy</code>\u5219\u662F\u5173\u4E8E\u4EE3\u7406\u7684\u914D\u7F6E\uFF0C\u8BE5\u5C5E\u6027\u4E3A\u5BF9\u8C61\u7684\u5F62\u5F0F\uFF0C\u5BF9\u8C61\u4E2D\u6BCF\u4E00\u4E2A\u5C5E\u6027\u5C31\u662F\u4E00\u4E2A\u4EE3\u7406\u7684\u89C4\u5219\u5339\u914D</p><p>\u5C5E\u6027\u7684\u540D\u79F0\u662F\u9700\u8981\u88AB\u4EE3\u7406\u7684\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00\uFF0C\u4E00\u822C\u4E3A\u4E86\u8FA8\u522B\u90FD\u4F1A\u8BBE\u7F6E\u524D\u7F00\u4E3A<code>/api</code>\uFF0C\u503C\u4E3A\u5BF9\u5E94\u7684\u4EE3\u7406\u5339\u914D\u89C4\u5219\uFF0C\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><ul><li>target\uFF1A\u8868\u793A\u7684\u662F\u4EE3\u7406\u5230\u7684\u76EE\u6807\u5730\u5740</li><li>pathRewrite\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7684 /api-hy \u4E5F\u4F1A\u88AB\u5199\u5165\u5230URL\u4E2D\uFF0C\u5982\u679C\u5E0C\u671B\u5220\u9664\uFF0C\u53EF\u4EE5\u4F7F\u7528pathRewrite</li><li>secure\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u63A5\u6536\u8F6C\u53D1\u5230https\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u5982\u679C\u5E0C\u671B\u652F\u6301\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3Afalse</li><li>changeOrigin\uFF1A\u5B83\u8868\u793A\u662F\u5426\u66F4\u65B0\u4EE3\u7406\u540E\u8BF7\u6C42\u7684 headers \u4E2Dhost\u5730\u5740</li></ul><h2 id="\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u5DE5\u4F5C\u539F\u7406</h2><p><code>proxy</code>\u5DE5\u4F5C\u539F\u7406\u5B9E\u8D28\u4E0A\u662F\u5229\u7528<code>http-proxy-middleware</code> \u8FD9\u4E2A<code>http</code>\u4EE3\u7406\u4E2D\u95F4\u4EF6\uFF0C\u5B9E\u73B0\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5176\u4ED6\u670D\u52A1\u5668</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u672C\u5730\u5730\u5740\u4E3A<code>http://localhost:3000</code>\uFF0C\u8BE5\u6D4F\u89C8\u5668\u53D1\u9001\u4E00\u4E2A\u524D\u7F00\u5E26\u6709<code>/api</code>\u6807\u8BC6\u7684\u8BF7\u6C42\u5230\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\uFF0C\u4F46\u54CD\u5E94\u8FD9\u4E2A\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u53EA\u662F\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u53E6\u4E00\u53F0\u670D\u52A1\u5668\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.example.org&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// http://localhost:3000/api/foo/bar -&gt; http://www.example.org/api/foo/bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4E09\u3001\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u8DE8\u57DF" aria-hidden="true">#</a> \u4E09\u3001\u8DE8\u57DF</h2><p>\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C <code>webpack-dev-server</code> \u4F1A\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u6240\u4EE5\u6211\u4EEC\u7684\u5E94\u7528\u5728\u5F00\u53D1\u9636\u6BB5\u662F\u72EC\u7ACB\u8FD0\u884C\u5728 <code>localhost</code>\u7684\u4E00\u4E2A\u7AEF\u53E3\u4E0A\uFF0C\u800C\u540E\u7AEF\u670D\u52A1\u53C8\u662F\u8FD0\u884C\u5728\u53E6\u5916\u4E00\u4E2A\u5730\u5740\u4E0A</p><p>\u6240\u4EE5\u5728\u5F00\u53D1\u9636\u6BB5\u4E2D\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u7684\u539F\u56E0\uFF0C\u5F53\u672C\u5730\u8BBF\u95EE\u540E\u7AEF\u5C31\u4F1A\u51FA\u73B0\u8DE8\u57DF\u8BF7\u6C42\u7684\u95EE\u9898</p><p>\u901A\u8FC7\u8BBE\u7F6E<code>webpack proxy</code>\u5B9E\u73B0\u4EE3\u7406\u8BF7\u6C42\u540E\uFF0C\u76F8\u5F53\u4E8E\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u7AEF\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u4EE3\u7406\u8005</p><p>\u5F53\u672C\u5730\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u54CD\u5E94\u8BE5\u8BF7\u6C42\uFF0C\u5E76\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u76EE\u6807\u670D\u52A1\u5668\u54CD\u5E94\u6570\u636E\u540E\u518D\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u6700\u7EC8\u518D\u7531\u4EE3\u7406\u670D\u52A1\u5668\u5C06\u6570\u636E\u54CD\u5E94\u7ED9\u672C\u5730</p><p><img src="https://static.vue-js.com/65b5e5c0-ace5-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><p>\u5728\u4EE3\u7406\u670D\u52A1\u5668\u4F20\u9012\u6570\u636E\u7ED9\u672C\u5730\u6D4F\u89C8\u5668\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E24\u8005\u540C\u6E90\uFF0C\u5E76\u4E0D\u5B58\u5728\u8DE8\u57DF\u884C\u4E3A\uFF0C\u8FD9\u65F6\u5019\u6D4F\u89C8\u5668\u5C31\u80FD\u6B63\u5E38\u63A5\u6536\u6570\u636E</p><p>\u6CE8\u610F\uFF1A<strong>\u670D\u52A1\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u8BF7\u6C42\u6570\u636E\u5E76\u4E0D\u4F1A\u5B58\u5728\u8DE8\u57DF\u884C\u4E3A\uFF0C\u8DE8\u57DF\u884C\u4E3A\u662F\u6D4F\u89C8\u5668\u5B89\u5168\u7B56\u7565\u9650\u5236</strong></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,29),d={href:"https://webpack.docschina.org/configuration/dev-server/#devserverproxy",target:"_blank",rel:"noopener noreferrer"},k=l("https://webpack.docschina.org/configuration/dev-server/#devserverproxy");function b(h,m){const s=e("ExternalLinkIcon");return p(),t(c,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,o(s)])])])],64)}var v=a(i,[["render",b],["__file","proxy.html.vue"]]);export{v as default};
