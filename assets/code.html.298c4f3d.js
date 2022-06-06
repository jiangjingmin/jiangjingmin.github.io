import{_ as n,c as s}from"./app.b778d435.js";const a={},p=s(`<h1 id="\u5E38\u89C1\u7F16\u7A0B\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7F16\u7A0B\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u7F16\u7A0B\u9898</h1><h2 id="_2022-01-05-\u524D\u540C\u4E8B\u6C42\u89E3\u4E00\u9053\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_2022-01-05-\u524D\u540C\u4E8B\u6C42\u89E3\u4E00\u9053\u9762\u8BD5\u9898" aria-hidden="true">#</a> 2022-01-05 \u524D\u540C\u4E8B\u6C42\u89E3\u4E00\u9053\u9762\u8BD5\u9898</h2><p>\u77E5\u9053 arr \u548C arr1\uFF0C\u8BA9 <code>arr = [2,3,2,3,2,3]</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5206\u6790, \u5927\u6982\u610F\u601D\u5C31\u662F\u7C7B\u4F3C \u6A21\u677F\u5E94\u7528, arr1\u5C31\u662F\u4E00\u4E2A\u6A21\u677F, \u5F80arr\u4E0A\u5E94\u7528</span>

<span class="token comment">// \u4E00\u5F00\u59CB\u6211\u7684\u60F3\u6CD5</span>
<span class="token comment">// arr = arr.map((v, i) =&gt; {</span>
<span class="token comment">//   if (i &gt; arr1.length) {</span>
<span class="token comment">//     i = i - n * arr1.length; // \u600E\u4E48\u5F04\u8FD9\u4E2A\u500D\u6570n\u5462, \u53D6\u4F59</span>
<span class="token comment">//   }</span>
<span class="token comment">//   return arr1[i];</span>
<span class="token comment">// });</span>

<span class="token comment">// \u60F3\u5230\u53D6\u4F59, \u90A3\u5C31\u66F4\u7B80\u5355\u4E86</span>
arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr1<span class="token punctuation">[</span>i<span class="token operator">%</span>arr1<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4);function t(e,c){return p}var r=n(a,[["render",t],["__file","code.html.vue"]]);export{r as default};
