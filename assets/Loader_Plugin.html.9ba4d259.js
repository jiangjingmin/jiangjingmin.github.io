import{_ as n,e as s}from"./app.7139c5e1.js";const a={},e=s(`<h1 id="loader\u548Cplugin\u7684\u533A\u522B-\u7F16\u5199loader-plugin\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#loader\u548Cplugin\u7684\u533A\u522B-\u7F16\u5199loader-plugin\u7684\u601D\u8DEF" aria-hidden="true">#</a> Loader\u548CPlugin\u7684\u533A\u522B\uFF1F\u7F16\u5199Loader\uFF0CPlugin\u7684\u601D\u8DEF\uFF1F</h1><p><img src="https://static.vue-js.com/93042280-a894-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E00\u3001\u533A\u522B</h2><p>\u524D\u9762\u4E24\u8282\u6211\u4EEC\u6709\u63D0\u5230<code>Loader</code>\u4E0E<code>Plugin</code>\u5BF9\u5E94\u7684\u6982\u5FF5\uFF0C\u5148\u6765\u56DE\u987E\u4E0B</p><ul><li>loader \u662F\u6587\u4EF6\u52A0\u8F7D\u5668\uFF0C\u80FD\u591F\u52A0\u8F7D\u8D44\u6E90\u6587\u4EF6\uFF0C\u5E76\u5BF9\u8FD9\u4E9B\u6587\u4EF6\u8FDB\u884C\u4E00\u4E9B\u5904\u7406\uFF0C\u8BF8\u5982\u7F16\u8BD1\u3001\u538B\u7F29\u7B49\uFF0C\u6700\u7EC8\u4E00\u8D77\u6253\u5305\u5230\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D</li><li>plugin \u8D4B\u4E88\u4E86 webpack \u5404\u79CD\u7075\u6D3B\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7B49\uFF0C\u76EE\u7684\u662F\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B</li></ul><p>\u4ECE\u6574\u4E2A\u8FD0\u884C\u65F6\u673A\u4E0A\u6765\u770B\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E24\u8005\u5728\u8FD0\u884C\u65F6\u673A\u4E0A\u7684\u533A\u522B\uFF1A</p><ul><li>loader \u8FD0\u884C\u5728\u6253\u5305\u6587\u4EF6\u4E4B\u524D</li><li>plugins \u5728\u6574\u4E2A\u7F16\u8BD1\u5468\u671F\u90FD\u8D77\u4F5C\u7528</li></ul><p>\u5728<code> Webpack</code> \u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0C<code>Plugin</code> \u53EF\u4EE5\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5728\u5408\u9002\u7684\u65F6\u673A\u901A\u8FC7<code>Webpack</code>\u63D0\u4F9B\u7684 <code>API </code>\u6539\u53D8\u8F93\u51FA\u7ED3\u679C</p><p>\u5BF9\u4E8E<code>loader</code>\uFF0C\u5B9E\u8D28\u662F\u4E00\u4E2A\u8F6C\u6362\u5668\uFF0C\u5C06A\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\u5F62\u6210B\u6587\u4EF6\uFF0C\u64CD\u4F5C\u7684\u662F\u6587\u4EF6\uFF0C\u6BD4\u5982\u5C06<code>A.scss</code>\u6216<code>A.less</code>\u8F6C\u53D8\u4E3A<code>B.css</code>\uFF0C\u5355\u7EAF\u7684\u6587\u4EF6\u8F6C\u6362\u8FC7\u7A0B</p><h2 id="\u4E8C\u3001\u7F16\u5199loader" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7F16\u5199loader" aria-hidden="true">#</a> \u4E8C\u3001\u7F16\u5199loader</h2><p>\u5728\u7F16\u5199 <code>loader</code> \u524D\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u4E86\u89E3 <code>loader</code> \u7684\u672C\u8D28</p><p>\u5176\u672C\u8D28\u4E3A\u51FD\u6570\uFF0C\u51FD\u6570\u4E2D\u7684 <code>this</code> \u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F1A\u88AB <code>webpack</code> \u586B\u5145\uFF0C\u56E0\u6B64\u6211\u4EEC\u4E0D\u80FD\u5C06 <code>loader</code>\u8BBE\u4E3A\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570</p><p>\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u4E3A <code>webpack</code> \u4F20\u9012\u7ED9 <code>loader</code> \u7684\u6587\u4EF6\u6E90\u5185\u5BB9</p><p>\u51FD\u6570\u4E2D <code>this</code> \u662F\u7531 <code>webpack</code> \u63D0\u4F9B\u7684\u5BF9\u8C61\uFF0C\u80FD\u591F\u83B7\u53D6\u5F53\u524D <code>loader</code> \u6240\u9700\u8981\u7684\u5404\u79CD\u4FE1\u606F</p><p>\u51FD\u6570\u4E2D\u6709\u5F02\u6B65\u64CD\u4F5C\u6216\u540C\u6B65\u64CD\u4F5C\uFF0C\u5F02\u6B65\u64CD\u4F5C\u901A\u8FC7 <code>this.callback</code> \u8FD4\u56DE\uFF0C\u8FD4\u56DE\u503C\u8981\u6C42\u4E3A <code>string</code> \u6216\u8005 <code>Buffer</code></p><p>\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u51FA\u4E00\u4E2A\u51FD\u6570\uFF0Csource\u4E3Awebpack\u4F20\u9012\u7ED9loader\u7684\u6587\u4EF6\u6E90\u5185\u5BB9</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token function">doSomeThing2JsString</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// \u5982\u679C loader \u914D\u7F6E\u4E86 options \u5BF9\u8C61\uFF0C\u90A3\u4E48this.query\u5C06\u6307\u5411 options</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>query<span class="token punctuation">;</span>
    
    <span class="token comment">// \u53EF\u4EE5\u7528\u4F5C\u89E3\u6790\u5176\u4ED6\u6A21\u5757\u8DEF\u5F84\u7684\u4E0A\u4E0B\u6587</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this.context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/*
     * this.callback \u53C2\u6570\uFF1A
     * error\uFF1AError | null\uFF0C\u5F53 loader \u51FA\u9519\u65F6\u5411\u5916\u629B\u51FA\u4E00\u4E2A error
     * content\uFF1AString | Buffer\uFF0C\u7ECF\u8FC7 loader \u7F16\u8BD1\u540E\u9700\u8981\u5BFC\u51FA\u7684\u5185\u5BB9
     * sourceMap\uFF1A\u4E3A\u65B9\u4FBF\u8C03\u8BD5\u751F\u6210\u7684\u7F16\u8BD1\u540E\u5185\u5BB9\u7684 source map
     * ast\uFF1A\u672C\u6B21\u7F16\u8BD1\u751F\u6210\u7684 AST \u9759\u6001\u8BED\u6CD5\u6811\uFF0C\u4E4B\u540E\u6267\u884C\u7684 loader \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A AST\uFF0C\u8FDB\u800C\u7701\u53BB\u91CD\u590D\u751F\u6210 AST \u7684\u8FC7\u7A0B
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F02\u6B65</span>
    <span class="token keyword">return</span> content<span class="token punctuation">;</span> <span class="token comment">// \u540C\u6B65</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4E00\u822C\u5728\u7F16\u5199<code>loader</code>\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4FDD\u6301\u529F\u80FD\u5355\u4E00\uFF0C\u907F\u514D\u505A\u591A\u79CD\u529F\u80FD</p><p>\u5982<code>less</code>\u6587\u4EF6\u8F6C\u6362\u6210 <code>css </code>\u6587\u4EF6\u4E5F\u4E0D\u662F\u4E00\u6B65\u5230\u4F4D\uFF0C\u800C\u662F <code>less-loader</code>\u3001<code>css-loader</code>\u3001<code>style-loader</code>\u51E0\u4E2A <code>loader </code>\u7684\u94FE\u5F0F\u8C03\u7528\u624D\u80FD\u5B8C\u6210\u8F6C\u6362</p><h2 id="\u4E09\u3001\u7F16\u5199plugin" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7F16\u5199plugin" aria-hidden="true">#</a> \u4E09\u3001\u7F16\u5199plugin</h2><p>\u7531\u4E8E<code>webpack</code>\u57FA\u4E8E\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u5728\u8FD0\u884C\u7684\u751F\u547D\u5468\u671F\u4E2D\u4F1A\u5E7F\u64AD\u51FA\u8BB8\u591A\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u901A\u8FC7\u76D1\u542C\u8FD9\u4E9B\u4E8B\u4EF6\uFF0C\u5C31\u53EF\u4EE5\u5728\u7279\u5B9A\u7684\u9636\u6BB5\u6267\u884C\u81EA\u5DF1\u7684\u63D2\u4EF6\u4EFB\u52A1</p><p>\u5728\u4E4B\u524D\u4E5F\u4E86\u89E3\u8FC7\uFF0C<code>webpack</code>\u7F16\u8BD1\u4F1A\u521B\u5EFA\u4E24\u4E2A\u6838\u5FC3\u5BF9\u8C61\uFF1A</p><ul><li>compiler\uFF1A\u5305\u542B\u4E86 webpack \u73AF\u5883\u7684\u6240\u6709\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5305\u62EC options\uFF0Cloader \u548C plugin\uFF0C\u548C webpack \u6574\u4E2A\u751F\u547D\u5468\u671F\u76F8\u5173\u7684\u94A9\u5B50</li><li>compilation\uFF1A\u4F5C\u4E3A plugin \u5185\u7F6E\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u5305\u542B\u4E86\u5F53\u524D\u7684\u6A21\u5757\u8D44\u6E90\u3001\u7F16\u8BD1\u751F\u6210\u8D44\u6E90\u3001\u53D8\u5316\u7684\u6587\u4EF6\u4EE5\u53CA\u88AB\u8DDF\u8E2A\u4F9D\u8D56\u7684\u72B6\u6001\u4FE1\u606F\u3002\u5F53\u68C0\u6D4B\u5230\u4E00\u4E2A\u6587\u4EF6\u53D8\u5316\uFF0C\u4E00\u6B21\u65B0\u7684 Compilation \u5C06\u88AB\u521B\u5EFA</li></ul><p>\u5982\u679C\u81EA\u5DF1\u8981\u5B9E\u73B0<code>plugin</code>\uFF0C\u4E5F\u9700\u8981\u9075\u5FAA\u4E00\u5B9A\u7684\u89C4\u8303\uFF1A</p><ul><li>\u63D2\u4EF6\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u6216\u8005\u662F\u4E00\u4E2A\u5305\u542B <code>apply</code> \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u8FD9\u6837\u624D\u80FD\u8BBF\u95EE<code>compiler</code>\u5B9E\u4F8B</li><li>\u4F20\u7ED9\u6BCF\u4E2A\u63D2\u4EF6\u7684 <code>compiler</code> \u548C <code>compilation</code> \u5BF9\u8C61\u90FD\u662F\u540C\u4E00\u4E2A\u5F15\u7528\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4FEE\u6539</li><li>\u5F02\u6B65\u7684\u4E8B\u4EF6\u9700\u8981\u5728\u63D2\u4EF6\u5904\u7406\u5B8C\u4EFB\u52A1\u65F6\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u901A\u77E5 <code>Webpack</code> \u8FDB\u5165\u4E0B\u4E00\u4E2A\u6D41\u7A0B\uFF0C\u4E0D\u7136\u4F1A\u5361\u4F4F</li></ul><p>\u5B9E\u73B0<code>plugin</code>\u7684\u6A21\u677F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">{</span>
    <span class="token comment">// Webpack \u4F1A\u8C03\u7528 MyPlugin \u5B9E\u4F8B\u7684 apply \u65B9\u6CD5\u7ED9\u63D2\u4EF6\u5B9E\u4F8B\u4F20\u5165 compiler \u5BF9\u8C61</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u627E\u5230\u5408\u9002\u7684\u4E8B\u4EF6\u94A9\u5B50\uFF0C\u5B9E\u73B0\u81EA\u5DF1\u7684\u63D2\u4EF6\u529F\u80FD</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;MyPlugin&#39;</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// compilation: \u5F53\u524D\u6253\u5305\u6784\u5EFA\u6D41\u7A0B\u7684\u4E0A\u4E0B\u6587</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>compilation<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728 <code>emit</code> \u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u4EE3\u8868\u6E90\u6587\u4EF6\u7684\u8F6C\u6362\u548C\u7EC4\u88C5\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u5230\u6700\u7EC8\u5C06\u8F93\u51FA\u7684\u8D44\u6E90\u3001\u4EE3\u7801\u5757\u3001\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u8D44\u6E90\u7684\u5185\u5BB9</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://webpack.docschina.org/api/loaders/</li><li>https://webpack.docschina.org/api/compiler-hooks/</li><li>https://segmentfault.com/a/1190000039877943</li><li>https://vue3js.cn/interview</li></ul>`,32);function p(c,o){return e}var t=n(a,[["render",p],["__file","Loader_Plugin.html.vue"]]);export{t as default};
