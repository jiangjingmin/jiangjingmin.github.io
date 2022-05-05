import{_ as n,c as s}from"./app.f060585c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4-javascript-\u4E2D\u5185\u5B58\u6CC4\u6F0F\u7684\u51E0\u79CD\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4-javascript-\u4E2D\u5185\u5B58\u6CC4\u6F0F\u7684\u51E0\u79CD\u60C5\u51B5" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 JavaScript \u4E2D\u5185\u5B58\u6CC4\u6F0F\u7684\u51E0\u79CD\u60C5\u51B5\uFF1F</h1><p><img src="https://static.vue-js.com/19f76b30-824d-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5185\u5B58\u6CC4\u6F0F\uFF08Memory leak\uFF09\u662F\u5728\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u7531\u4E8E\u758F\u5FFD\u6216\u9519\u8BEF\u9020\u6210\u7A0B\u5E8F\u672A\u80FD\u91CA\u653E\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528\u7684\u5185\u5B58</p><p>\u5E76\u975E\u6307\u5185\u5B58\u5728\u7269\u7406\u4E0A\u7684\u6D88\u5931\uFF0C\u800C\u662F\u5E94\u7528\u7A0B\u5E8F\u5206\u914D\u67D0\u6BB5\u5185\u5B58\u540E\uFF0C\u7531\u4E8E\u8BBE\u8BA1\u9519\u8BEF\uFF0C\u5BFC\u81F4\u5728\u91CA\u653E\u8BE5\u6BB5\u5185\u5B58\u4E4B\u524D\u5C31\u5931\u53BB\u4E86\u5BF9\u8BE5\u6BB5\u5185\u5B58\u7684\u63A7\u5236\uFF0C\u4ECE\u800C\u9020\u6210\u4E86\u5185\u5B58\u7684\u6D6A\u8D39</p><p>\u7A0B\u5E8F\u7684\u8FD0\u884C\u9700\u8981\u5185\u5B58\u3002\u53EA\u8981\u7A0B\u5E8F\u63D0\u51FA\u8981\u6C42\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u6216\u8005\u8FD0\u884C\u65F6\u5C31\u5FC5\u987B\u4F9B\u7ED9\u5185\u5B58</p><p>\u5BF9\u4E8E\u6301\u7EED\u8FD0\u884C\u7684\u670D\u52A1\u8FDB\u7A0B\uFF0C\u5FC5\u987B\u53CA\u65F6\u91CA\u653E\u4E0D\u518D\u7528\u5230\u7684\u5185\u5B58\u3002\u5426\u5219\uFF0C\u5185\u5B58\u5360\u7528\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u8F7B\u5219\u5F71\u54CD\u7CFB\u7EDF\u6027\u80FD\uFF0C\u91CD\u5219\u5BFC\u81F4\u8FDB\u7A0B\u5D29\u6E83</p><p><img src="https://static.vue-js.com/56d4bd90-821c-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5728<code>C</code>\u8BED\u8A00\u4E2D\uFF0C\u56E0\u4E3A\u662F\u624B\u52A8\u7BA1\u7406\u5185\u5B58\uFF0C\u5185\u5B58\u6CC4\u9732\u662F\u7ECF\u5E38\u51FA\u73B0\u7684\u4E8B\u60C5\u3002</p><div class="language-clang ext-clang line-numbers-mode"><pre class="language-clang"><code>char * buffer;
buffer = (char*) malloc(42);

// Do something with buffer

free(buffer);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u662F C \u8BED\u8A00\u4EE3\u7801\uFF0C<code>malloc</code>\u65B9\u6CD5\u7528\u6765\u7533\u8BF7\u5185\u5B58\uFF0C\u4F7F\u7528\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5FC5\u987B\u81EA\u5DF1\u7528<code>free</code>\u65B9\u6CD5\u91CA\u653E\u5185\u5B58\u3002</p><p>\u8FD9\u5F88\u9EBB\u70E6\uFF0C\u6240\u4EE5\u5927\u591A\u6570\u8BED\u8A00\u63D0\u4F9B\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\uFF0C\u51CF\u8F7B\u7A0B\u5E8F\u5458\u7684\u8D1F\u62C5\uFF0C\u8FD9\u88AB\u79F0\u4E3A&quot;\u5783\u573E\u56DE\u6536\u673A\u5236&quot;</p><h2 id="\u4E8C\u3001\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> \u4E8C\u3001\u5783\u573E\u56DE\u6536\u673A\u5236</h2><p>Javascript \u5177\u6709\u81EA\u52A8\u5783\u573E\u56DE\u6536\u673A\u5236\uFF08GC\uFF1AGarbage Collecation\uFF09\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6267\u884C\u73AF\u5883\u4F1A\u8D1F\u8D23\u7BA1\u7406\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u7684\u5185\u5B58</p><p>\u539F\u7406\uFF1A\u5783\u573E\u6536\u96C6\u5668\u4F1A\u5B9A\u671F\uFF08\u5468\u671F\u6027\uFF09\u627E\u51FA\u90A3\u4E9B\u4E0D\u5728\u7EE7\u7EED\u4F7F\u7528\u7684\u53D8\u91CF\uFF0C\u7136\u540E\u91CA\u653E\u5176\u5185\u5B58</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF1A</p><ul><li>\u6807\u8BB0\u6E05\u9664</li><li>\u5F15\u7528\u8BA1\u6570</li></ul><h3 id="\u6807\u8BB0\u6E05\u9664" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BB0\u6E05\u9664" aria-hidden="true">#</a> \u6807\u8BB0\u6E05\u9664</h3><p><code>JavaScript</code>\u6700\u5E38\u7528\u7684\u5783\u573E\u6536\u56DE\u673A\u5236</p><p>\u5F53\u53D8\u91CF\u8FDB\u5165\u6267\u884C\u73AF\u5883\u662F\uFF0C\u5C31\u6807\u8BB0\u8FD9\u4E2A\u53D8\u91CF\u4E3A\u201C\u8FDB\u5165\u73AF\u5883\u201C\u3002\u8FDB\u5165\u73AF\u5883\u7684\u53D8\u91CF\u6240\u5360\u7528\u7684\u5185\u5B58\u5C31\u4E0D\u80FD\u91CA\u653E\uFF0C\u5F53\u53D8\u91CF\u79BB\u5F00\u73AF\u5883\u65F6\uFF0C\u5219\u5C06\u5176\u6807\u8BB0\u4E3A\u201C\u79BB\u5F00\u73AF\u5883\u201C</p><p>\u5783\u573E\u56DE\u6536\u7A0B\u5E8F\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u4F1A\u6807\u8BB0\u5185\u5B58\u4E2D\u5B58\u50A8\u7684\u6240\u6709\u53D8\u91CF\u3002\u7136\u540E\uFF0C\u5B83\u4F1A\u5C06\u6240\u6709\u5728\u4E0A\u4E0B\u6587\u4E2D\u7684\u53D8\u91CF\uFF0C\u4EE5\u53CA\u88AB\u5728\u4E0A\u4E0B\u6587\u4E2D\u7684\u53D8\u91CF\u5F15\u7528\u7684\u53D8\u91CF\u7684\u6807\u8BB0\u53BB\u6389</p><p>\u5728\u6B64\u4E4B\u540E\u518D\u88AB\u52A0\u4E0A\u6807\u8BB0\u7684\u53D8\u91CF\u5C31\u662F\u5F85\u5220\u9664\u7684\u4E86\uFF0C\u539F\u56E0\u662F\u4EFB\u4F55\u5728\u4E0A\u4E0B\u6587\u4E2D\u7684\u53D8\u91CF\u90FD\u8BBF\u95EE\u4E0D\u5230\u5B83\u4EEC\u4E86</p><p>\u968F\u540E\u5783\u573E\u56DE\u6536\u7A0B\u5E8F\u505A\u4E00\u6B21\u5185\u5B58\u6E05\u7406\uFF0C\u9500\u6BC1\u5E26\u6807\u8BB0\u7684\u6240\u6709\u503C\u5E76\u6536\u56DE\u5B83\u4EEC\u7684\u5185\u5B58</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>n <span class="token operator">=</span> <span class="token number">19</span> <span class="token comment">// \u628A m,n,add() \u6807\u8BB0\u4E3A\u8FDB\u5165\u73AF\u5883\u3002</span>
<span class="token function">add</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token comment">// \u628A a, b, c\u6807\u8BB0\u4E3A\u8FDB\u5165\u73AF\u5883\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// a,b,c\u6807\u8BB0\u4E3A\u79BB\u5F00\u73AF\u5883\uFF0C\u7B49\u5F85\u5783\u573E\u56DE\u6536\u3002</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a<span class="token operator">++</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b
  <span class="token keyword">return</span> c
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5F15\u7528\u8BA1\u6570" tabindex="-1"><a class="header-anchor" href="#\u5F15\u7528\u8BA1\u6570" aria-hidden="true">#</a> \u5F15\u7528\u8BA1\u6570</h3><p>\u8BED\u8A00\u5F15\u64CE\u6709\u4E00\u5F20&quot;\u5F15\u7528\u8868&quot;\uFF0C\u4FDD\u5B58\u4E86\u5185\u5B58\u91CC\u9762\u6240\u6709\u7684\u8D44\u6E90\uFF08\u901A\u5E38\u662F\u5404\u79CD\u503C\uFF09\u7684\u5F15\u7528\u6B21\u6570\u3002\u5982\u679C\u4E00\u4E2A\u503C\u7684\u5F15\u7528\u6B21\u6570\u662F<code>0</code>\uFF0C\u5C31\u8868\u793A\u8FD9\u4E2A\u503C\u4E0D\u518D\u7528\u5230\u4E86\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C06\u8FD9\u5757\u5185\u5B58\u91CA\u653E</p><p>\u5982\u679C\u4E00\u4E2A\u503C\u4E0D\u518D\u9700\u8981\u4E86\uFF0C\u5F15\u7528\u6570\u5374\u4E0D\u4E3A<code>0</code>\uFF0C\u5783\u573E\u56DE\u6536\u673A\u5236\u65E0\u6CD5\u91CA\u653E\u8FD9\u5757\u5185\u5B58\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9762\u4EE3\u7801\u4E2D\uFF0C\u6570\u7EC4<code>[1, 2, 3, 4]</code>\u662F\u4E00\u4E2A\u503C\uFF0C\u4F1A\u5360\u7528\u5185\u5B58\u3002\u53D8\u91CF<code>arr</code>\u662F\u4EC5\u6709\u7684\u5BF9\u8FD9\u4E2A\u503C\u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u5F15\u7528\u6B21\u6570\u4E3A<code>1</code>\u3002\u5C3D\u7BA1\u540E\u9762\u7684\u4EE3\u7801\u6CA1\u6709\u7528\u5230<code>arr</code>\uFF0C\u5B83\u8FD8\u662F\u4F1A\u6301\u7EED\u5360\u7528\u5185\u5B58</p><p>\u5982\u679C\u9700\u8981\u8FD9\u5757\u5185\u5B58\u88AB\u5783\u573E\u56DE\u6536\u673A\u5236\u91CA\u653E\uFF0C\u53EA\u9700\u8981\u8BBE\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u901A\u8FC7\u8BBE\u7F6E<code>arr</code>\u4E3A<code>null</code>\uFF0C\u5C31\u89E3\u9664\u4E86\u5BF9\u6570\u7EC4<code>[1,2,3,4]</code>\u7684\u5F15\u7528\uFF0C\u5F15\u7528\u6B21\u6570\u53D8\u4E3A 0\uFF0C\u5C31\u88AB\u5783\u573E\u56DE\u6536\u4E86</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u6709\u4E86\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0C\u4E0D\u4EE3\u8868\u4E0D\u7528\u5173\u6CE8\u5185\u5B58\u6CC4\u9732\u3002\u90A3\u4E9B\u5F88\u5360\u7A7A\u95F4\u7684\u503C\uFF0C\u4E00\u65E6\u4E0D\u518D\u7528\u5230\uFF0C\u9700\u8981\u68C0\u67E5\u662F\u5426\u8FD8\u5B58\u5728\u5BF9\u5B83\u4EEC\u7684\u5F15\u7528\u3002\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u5C31\u5FC5\u987B\u624B\u52A8\u89E3\u9664\u5F15\u7528</p><h2 id="\u4E09\u3001\u5E38\u89C1\u5185\u5B58\u6CC4\u9732\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E38\u89C1\u5185\u5B58\u6CC4\u9732\u60C5\u51B5" aria-hidden="true">#</a> \u4E09\u3001\u5E38\u89C1\u5185\u5B58\u6CC4\u9732\u60C5\u51B5</h2><p>\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bar <span class="token operator">=</span> <span class="token string">&quot;this is a hidden global variable&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53E6\u4E00\u79CD\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF\u53EF\u80FD\u7531 <code>this</code> \u521B\u5EFA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>variable <span class="token operator">=</span> <span class="token string">&quot;potential accidental global&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// foo \u8C03\u7528\u81EA\u5DF1\uFF0Cthis \u6307\u5411\u4E86\u5168\u5C40\u5BF9\u8C61\uFF08window\uFF09</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u8FF0\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u907F\u514D\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF</p><p>\u5B9A\u65F6\u5668\u4E5F\u5E38\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u9732</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> someResource <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406 node \u548C someResource</span>
        node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>someResource<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C<code>id</code>\u4E3ANode\u7684\u5143\u7D20\u4ECE<code>DOM</code>\u4E2D\u79FB\u9664\uFF0C\u8BE5\u5B9A\u65F6\u5668\u4ECD\u4F1A\u5B58\u5728\uFF0C\u540C\u65F6\uFF0C\u56E0\u4E3A\u56DE\u8C03\u51FD\u6570\u4E2D\u5305\u542B\u5BF9<code>someResource</code>\u7684\u5F15\u7528\uFF0C\u5B9A\u65F6\u5668\u5916\u9762\u7684<code>someResource</code>\u4E5F\u4E0D\u4F1A\u88AB\u91CA\u653E</p><p>\u5305\u62EC\u6211\u4EEC\u4E4B\u524D\u6240\u8BF4\u7684\u95ED\u5305\uFF0C\u7EF4\u6301\u51FD\u6570\u5185\u5C40\u90E8\u53D8\u91CF\uFF0C\u4F7F\u5176\u5F97\u4E0D\u5230\u91CA\u653E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;XXX&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token function-variable function">unused</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;\u95ED\u5305\u5185\u5F15\u7528obj obj\u4E0D\u4F1A\u88AB\u91CA\u653E&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u51B3\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CA1\u6709\u6E05\u7406\u5BF9<code>DOM</code>\u5143\u7D20\u7684\u5F15\u7528\u540C\u6837\u9020\u6210\u5185\u5B58\u6CC4\u9732</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> refA <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;refA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>refA<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// dom\u5220\u9664\u4E86</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refA<span class="token punctuation">,</span> <span class="token string">&#39;refA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F46\u662F\u8FD8\u5B58\u5728\u5F15\u7528\u80FDconsole\u51FA\u6574\u4E2Adiv \u6CA1\u6709\u88AB\u56DE\u6536</span>
refA <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refA<span class="token punctuation">,</span> <span class="token string">&#39;refA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u89E3\u9664\u5F15\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5305\u62EC\u4F7F\u7528\u4E8B\u4EF6\u76D1\u542C<code>addEventListener</code>\u76D1\u542C\u7684\u65F6\u5019\uFF0C\u5728\u4E0D\u76D1\u542C\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528<code>removeEventListener</code>\u53D6\u6D88\u5BF9\u4E8B\u4EF6\u76D1\u542C</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>http://www.ruanyifeng.com/blog/2017/04/memory-leak.html</li><li>https://zh.wikipedia.org/wiki</li></ul>`,51);function e(t,o){return p}var l=n(a,[["render",e],["__file","memory_leak.html.vue"]]);export{l as default};
