import{_ as a,e as n}from"./app.6e1280c8.js";const s={},e=n(`<h1 id="websocket\u4E0Eajax\u7684\u533A\u522B\u6D45\u6790" tabindex="-1"><a class="header-anchor" href="#websocket\u4E0Eajax\u7684\u533A\u522B\u6D45\u6790" aria-hidden="true">#</a> websocket\u4E0Eajax\u7684\u533A\u522B\u6D45\u6790</h1><h2 id="_1-\u672C\u8D28\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_1-\u672C\u8D28\u4E0D\u540C" aria-hidden="true">#</a> 1.\u672C\u8D28\u4E0D\u540C</h2><p>Ajax,\u5373\u5F02\u6B65JavaScript\u548CXML\uFF0C\u662F\u4E00\u79CD\u521B\u5EFA\u4EA4\u4E92\u5F0F\u7F51\u9875\u5E94\u7528\u7684\u7F51\u9875\u5F00\u53D1\u6280\u672F\uFF1B \xA0WebSocket\u662FHTML5\u4E00\u79CD\u65B0\u7684\u534F\u8BAE\uFF0C\u5B9E\u73B0\u4E86\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u5168\u53CC\u5DE5\u901A\u4FE1\u3002\u5176\u672C\u8D28\u662F\u5148\u901A\u8FC7HTTP/HTTPS\u534F\u8BAE\u8FDB\u884C\u63E1\u624B\u540E\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u4EA4\u6362\u6570\u636E\u7684TCP\u8FDE\u63A5\uFF0C\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u901A\u8FC7\u6B64TCP\u8FDE\u63A5\u8FDB\u884C\u5B9E\u65F6\u901A\u4FE1\u3002</p><h2 id="_2-\u751F\u547D\u5468\u671F\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_2-\u751F\u547D\u5468\u671F\u4E0D\u540C" aria-hidden="true">#</a> 2.\u751F\u547D\u5468\u671F\u4E0D\u540C</h2><p>websocket\u5EFA\u7ACB\u7684\u662F\u957F\u8FDE\u63A5\uFF0C\u5728\u4E00\u4E2A\u4F1A\u8BDD\u4E2D\u4E00\u76F4\u4FDD\u6301\u8FDE\u63A5\uFF1B\u800Cajax\u662F\u77ED\u8FDE\u63A5\uFF0C\u6570\u636E\u53D1\u9001\u548C\u63A5\u53D7\u5B8C\u6210\u540E\u5C31\u4F1A\u65AD\u5F00\u8FDE\u63A5\u3002</p><h2 id="_3-\u9002\u7528\u8303\u56F4\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_3-\u9002\u7528\u8303\u56F4\u4E0D\u540C" aria-hidden="true">#</a> 3.\u9002\u7528\u8303\u56F4\u4E0D\u540C</h2><p>websocket\u4E00\u822C\u7528\u4E8E\u524D\u540E\u7AEF\u5B9E\u65F6\u6570\u636E\u4EA4\u4E92\uFF0C\u800Cajax\u524D\u540E\u7AEF\u975E\u5B9E\u65F6\u6570\u636E\u4EA4\u4E92\u3002</p><h2 id="_4-\u53D1\u8D77\u4EBA\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_4-\u53D1\u8D77\u4EBA\u4E0D\u540C" aria-hidden="true">#</a> 4.\u53D1\u8D77\u4EBA\u4E0D\u540C</h2><p>Ajax\u6280\u672F\u9700\u8981\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u800CWebSocket\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u76F8\u4E92\u63A8\u9001\u4FE1\u606F\u3002</p><h2 id="_5-\u7528\u6CD5\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_5-\u7528\u6CD5\u4E0D\u540C" aria-hidden="true">#</a> 5.\u7528\u6CD5\u4E0D\u540C</h2><p>ajax\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:8080/target&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token string">&quot;state = yes&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">success</span><span class="token operator">:</span><span class="token function">funciont</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>websocket:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> monitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://&quot;</span><span class="token operator">+</span>ip<span class="token operator">+</span>path<span class="token punctuation">)</span>
<span class="token function">onOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">\u3001onMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">\u3001onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,14);function p(t,o){return e}var r=a(s,[["render",p],["__file","websocket_ajax.html.vue"]]);export{r as default};
