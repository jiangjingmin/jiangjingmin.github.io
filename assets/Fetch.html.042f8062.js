import{_ as n,e as a}from"./app.6e1280c8.js";const s={},e=a(`<h1 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h1><h2 id="jquery-ajax" tabindex="-1"><a class="header-anchor" href="#jquery-ajax" aria-hidden="true">#</a> jquery ajax</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> dataType<span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5B83\u662F\u5BF9\u539F\u751FXHR\u7684\u5C01\u88C5\uFF0C\u8FD8\u652F\u6301JSONP\uFF0C\u975E\u5E38\u65B9\u4FBF\uFF1B\u771F\u7684\u662F\u7528\u8FC7\u7684\u90FD\u8BF4\u597D\u3002\u4F46\u662F\u968F\u7740react\uFF0Cvue\u7B49\u524D\u7AEF\u6846\u67B6\u7684\u5174\u8D77\uFF0Cjquery\u65E9\u5DF2\u4E0D\u590D\u5F53\u5E74\u4E4B\u52C7\u3002\u5F88\u591A\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528ajax\uFF0C\u4F46\u662F\u5374\u9700\u8981\u5F15\u5165\u6574\u4E2Ajquery\uFF0C\u8FD9\u975E\u5E38\u7684\u4E0D\u5408\u7406\uFF0C\u4E8E\u662F\u4FBF\u6709\u4E86fetch\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2><p>axios \u662F\u4E00\u4E2A\u57FA\u4E8EPromise \u7528\u4E8E\u6D4F\u89C8\u5668\u548C nodejs \u7684 HTTP \u5BA2\u6237\u7AEF\uFF0C\u5B83\u672C\u8EAB\u5177\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A \u4ECE\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA XMLHttpRequest \u5728 node.js \u5219\u521B\u5EFA http \u8BF7\u6C42\u3002\uFF08\u81EA\u52A8\u6027\u5F3A\uFF09 \u652F\u6301 Promise API \u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94 \u8F6C\u6362\u8BF7\u6C42\u548C\u54CD\u5E94\u6570\u636E \u53D6\u6D88\u8BF7\u6C42 \u81EA\u52A8\u8F6C\u6362JSON\u6570\u636E \u5BA2\u6237\u7AEF\u652F\u6301\u9632\u6B62CSRF/XSRF axios\u65E2\u63D0\u4F9B\u4E86\u5E76\u53D1\u7684\u5C01\u88C5\uFF0C\u4E5F\u6CA1\u6709fetch\u7684\u5404\u79CD\u95EE\u9898\uFF0C\u800C\u4E14\u4F53\u79EF\u4E5F\u8F83\u5C0F \u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E76\u53D1\u8BF7\u6C42\u7684\u63A5\u53E3\uFF08\u91CD\u8981\uFF0C\u65B9\u4FBF\u4E86\u5F88\u591A\u7684\u64CD\u4F5C\uFF09\u3002</p><h2 id="fetch-1" tabindex="-1"><a class="header-anchor" href="#fetch-1" aria-hidden="true">#</a> fetch</h2><p>fetch\u53F7\u79F0\u662FAJAX\u7684\u66FF\u4EE3\u54C1\uFF0C\u662F\u5728ES6\u51FA\u73B0\u7684\uFF0C\u4F7F\u7528\u4E86ES6\u4E2D\u7684promise\u5BF9\u8C61\u3002Fetch\u662F\u57FA\u4E8Epromise\u8BBE\u8BA1\u7684\u3002Fetch\u7684\u4EE3\u7801\u7ED3\u6784\u6BD4\u8D77ajax\u7B80\u5355\u591A\u4E86\uFF0C\u53C2\u6570\u6709\u70B9\u50CFjQuery ajax\u3002\u4F46\u662F\uFF0C\u4E00\u5B9A\u8BB0\u4F4Ffetch\u4E0D\u662Fajax\u7684\u8FDB\u4E00\u6B65\u5C01\u88C5\uFF0C\u800C\u662F\u539F\u751Fjs\uFF0C\u6CA1\u6709\u4F7F\u7528XMLHttpRequest\u5BF9\u8C61\u3002\uFF08\u7136\u800C\u95EE\u9898\u8FD8\u662F\u6709\u5F88\u591A\uFF09 \u7528\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Oops, error&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h3><p>\u7B26\u5408\u5173\u6CE8\u5206\u79BB\uFF0C\u6CA1\u6709\u5C06\u8F93\u5165\u3001\u8F93\u51FA\u548C\u7528\u4E8B\u4EF6\u6765\u8DDF\u8E2A\u7684\u72B6\u6001\u6DF7\u6742\u5728\u4E00\u4E2A\u5BF9\u8C61\u91CC \u66F4\u597D\u66F4\u65B9\u4FBF\u7684\u5199\u6CD5 \u66F4\u52A0\u5E95\u5C42\uFF0C\u63D0\u4F9B\u7684API\u4E30\u5BCC\uFF08request, response\uFF09 \u8131\u79BB\u4E86XHR\uFF0C\u662FES\u89C4\u8303\u91CC\u65B0\u7684\u5B9E\u73B0\u65B9\u5F0F fetchtch\u53EA\u5BF9\u7F51\u7EDC\u8BF7\u6C42\u62A5\u9519\uFF0C\u5BF9400\uFF0C500\u90FD\u5F53\u505A\u6210\u529F\u7684\u8BF7\u6C42\uFF0C\u9700\u8981\u5C01\u88C5\u53BB\u5904\u7406 fetch\u9ED8\u8BA4\u4E0D\u4F1A\u5E26cookie\uFF0C\u9700\u8981\u6DFB\u52A0\u914D\u7F6E\u9879 fetch\u4E0D\u652F\u6301abort\uFF0C\u4E0D\u652F\u6301\u8D85\u65F6\u63A7\u5236\uFF0C\u4F7F\u7528setTimeout\u53CAPromise.reject\u7684\u5B9E\u73B0\u7684\u8D85\u65F6\u63A7\u5236\u5E76\u4E0D\u80FD\u963B\u6B62\u8BF7\u6C42\u8FC7\u7A0B\u7EE7\u7EED\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u9020\u6210\u4E86\u91CF\u7684\u6D6A\u8D39 fetch\u6CA1\u6709\u529E\u6CD5\u539F\u751F\u76D1\u6D4B\u8BF7\u6C42\u7684\u8FDB\u5EA6\uFF0C\u800CXHR\u53EF\u4EE5\u3002</p>`,11);function t(p,o){return e}var r=n(s,[["render",t],["__file","Fetch.html.vue"]]);export{r as default};