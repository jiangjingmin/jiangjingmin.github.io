import{_ as s,e as a}from"./app.77cde27d.js";const n={},e=a(`<h1 id="require-\u548C-import-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#require-\u548C-import-\u7684\u533A\u522B" aria-hidden="true">#</a> require \u548C import \u7684\u533A\u522B\uFF1F</h1><h2 id="\u9075\u5FAA\u7684\u89C4\u8303\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u9075\u5FAA\u7684\u89C4\u8303\u4E0D\u540C" aria-hidden="true">#</a> \u9075\u5FAA\u7684\u89C4\u8303\u4E0D\u540C</h2><p>1.require/exports\u662FCommonJS\u7684\u4E00\u90E8\u5206 2.import/export\u662FES6\u65B0\u89C4\u8303</p><h2 id="\u51FA\u73B0\u65F6\u95F4\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u51FA\u73B0\u65F6\u95F4\u4E0D\u540C" aria-hidden="true">#</a> \u51FA\u73B0\u65F6\u95F4\u4E0D\u540C</h2><p>CommonJS \u4F5C\u4E3A Node.js \u7684\u89C4\u8303\uFF0C\u4E00\u76F4\u6CBF\u7528\u81F3\u4ECA\u3002\u7531\u4E8E npm \u4E0A CommonJS \u7684\u7C7B\u5E93\u4F17\u591A\uFF0C\u4EE5\u53CA CommonJS \u548C ES6 \u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0CNode.js \u65E0\u6CD5\u76F4\u63A5\u517C\u5BB9 ES6\u3002\u6240\u4EE5\u73B0\u9636\u6BB5 require/exports \u4ECD\u7136\u662F\u5FC5\u8981\u4E14\u662F\u5FC5\u987B\u7684\u3002</p><h2 id="\u5F62\u5F0F\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u5F62\u5F0F\u4E0D\u540C" aria-hidden="true">#</a> \u5F62\u5F0F\u4E0D\u540C</h2><p>require/exports \u7684\u7528\u6CD5\u53EA\u6709\u4EE5\u4E0B\u4E09\u79CD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 exports<span class="token punctuation">.</span>fs <span class="token operator">=</span> fs<span class="token punctuation">;</span>
 module<span class="token punctuation">.</span>exports <span class="token operator">=</span> fs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>import/export\u7684\u5199\u6CD5\u5C31\u591A\u79CD\u591A\u6837</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> fs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> fs<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> fs<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u672C\u8D28\u4E0A\u7684\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#\u672C\u8D28\u4E0A\u7684\u4E0D\u540C" aria-hidden="true">#</a> \u672C\u8D28\u4E0A\u7684\u4E0D\u540C</h2><p>1.CommonJS\u8FD8\u662FES6 Module \u8F93\u51FA\u90FD\u53EF\u4EE5\u770B\u6210\u662F\u4E00\u4E2A\u5177\u5907\u591A\u4E2A\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\u7684\u5BF9\u8C61; 2.default \u662FES6 Module\u6240\u72EC\u6709\u7684\u5173\u952E\u5B57\uFF0Cexport default \u8F93\u51FA\u9ED8\u8BA4\u7684\u63A5\u53E3\u5BF9\u8C61\uFF0Cimport from &#39;fs&#39;\u53EF\u76F4\u63A5\u5BFC\u5165\u8FD9\u4E2A\u5BF9\u8C61; 3.ES6 Module\u4E2D\u5BFC\u5165\u6A21\u5757\u7684\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\u662F\u5F3A\u7ED1\u5B9A\u7684\uFF0C\u5305\u62EC\u57FA\u7840\u7C7B\u578B\uFF1B\u800C CommonJS \u5219\u662F\u666E\u901A\u7684\u503C\u4F20\u9012\u6216\u8005\u5F15\u7528\u4F20\u9012\u3002</p><h2 id="es6-\u6A21\u5757\u4E0E-commonjs-\u6A21\u5757\u7684\u5DEE\u5F02" tabindex="-1"><a class="header-anchor" href="#es6-\u6A21\u5757\u4E0E-commonjs-\u6A21\u5757\u7684\u5DEE\u5F02" aria-hidden="true">#</a> ES6 \u6A21\u5757\u4E0E CommonJS \u6A21\u5757\u7684\u5DEE\u5F02</h2><p>CommonJS \u6A21\u5757\u8F93\u51FA\u7684\u662F\u4E00\u4E2A\u503C\u7684\u62F7\u8D1D\uFF0CES6 \u6A21\u5757\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\u3002 CommonJS \u6A21\u5757\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0CES6 \u6A21\u5757\u662F\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3\u3002 CommonJS \u52A0\u8F7D\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5373module.exports\u5C5E\u6027\uFF09\uFF0C\u8BE5\u5BF9\u8C61\u53EA\u6709\u5728\u811A\u672C\u8FD0\u884C\u5B8C\u624D\u4F1A\u751F\u6210\u3002\u800C ES6 \u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u5B83\u7684\u5BF9\u5916\u63A5\u53E3\u53EA\u662F\u4E00\u79CD\u9759\u6001\u5B9A\u4E49\uFF0C\u5728\u4EE3\u7801\u9759\u6001\u89E3\u6790\u9636\u6BB5\u5C31\u4F1A\u751F\u6210\u3002 \u5728 ES6 \u4E4B\u524D\uFF0C\u793E\u533A\u5236\u5B9A\u4E86\u4E00\u4E9B\u6A21\u5757\u52A0\u8F7D\u65B9\u6848\uFF0C\u6700\u4E3B\u8981\u7684\u6709 CommonJS \u548C AMD \u4E24\u79CD\u3002\u524D\u8005\u7528\u4E8E\u670D\u52A1\u5668\uFF0C\u540E\u8005\u7528\u4E8E\u6D4F\u89C8\u5668\u3002ES6 \u5728\u8BED\u8A00\u6807\u51C6\u7684\u5C42\u9762\u4E0A\uFF0C\u5B9E\u73B0\u4E86\u6A21\u5757\u529F\u80FD\uFF0C\u800C\u4E14\u5B9E\u73B0\u5F97\u76F8\u5F53\u7B80\u5355\uFF0C\u5B8C\u5168\u53EF\u4EE5\u53D6\u4EE3 CommonJS \u548C AMD \u89C4\u8303\uFF0C\u6210\u4E3A\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u901A\u7528\u7684\u6A21\u5757\u89E3\u51B3\u65B9\u6848\u3002 ES6 \u6A21\u5757\u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u662F\u5C3D\u91CF\u7684\u9759\u6001\u5316\uFF0C\u4F7F\u5F97\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF\u3002CommonJS \u548C AMD \u6A21\u5757\uFF0C\u90FD\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u8FD9\u4E9B\u4E1C\u897F\u3002\u6BD4\u5982\uFF0CCommonJS \u6A21\u5757\u5C31\u662F\u5BF9\u8C61\uFF0C\u8F93\u5165\u65F6\u5FC5\u987B\u67E5\u627E\u5BF9\u8C61\u5C5E\u6027\u3002 commonJS \u548C es6\u6A21\u5757\u5316 \u533A\u522B\uFF1A es6 { \u3000\u3000export : &#39;\u53EF\u4EE5\u8F93\u51FA\u591A\u4E2A\uFF0C\u8F93\u51FA\u65B9\u5F0F\u4E3A {}&#39; \uFF0C \u3000\u3000export default : &#39; \u53EA\u80FD\u8F93\u51FA\u4E00\u4E2A \uFF0C\u53EF\u4EE5\u4E0Eexport \u540C\u65F6\u8F93\u51FA\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u8FD9\u4E48\u505A&#39;\uFF0C \u3000\u3000\u89E3\u6790\u9636\u6BB5\u786E\u5B9A\u5BF9\u5916\u8F93\u51FA\u7684\u63A5\u53E3\uFF0C\u89E3\u6790\u9636\u6BB5\u751F\u6210\u63A5\u53E3\uFF0C \u3000\u3000\u6A21\u5757\u4E0D\u662F\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u7684\u4E0D\u662F\u5BF9\u8C61\uFF0C \u3000\u3000\u53EF\u4EE5\u5355\u72EC\u52A0\u8F7D\u5176\u4E2D\u7684\u67D0\u4E2A\u63A5\u53E3\uFF08\u65B9\u6CD5\uFF09\uFF0C \u3000\u3000\u9759\u6001\u5206\u6790\uFF0C\u52A8\u6001\u5F15\u7528\uFF0C\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\uFF0C\u503C\u6539\u53D8\uFF0C\u5F15\u7528\u4E5F\u6539\u53D8\uFF0C\u5373\u539F\u6765\u6A21\u5757\u4E2D\u7684\u503C\u6539\u53D8\u5219\u8BE5\u52A0\u8F7D\u7684\u503C\u4E5F\u6539\u53D8\uFF0C \u3000\u3000this \u6307\u5411undefined } commonJS { \u3000\u3000module.exports = ... : &#39;\u53EA\u80FD\u8F93\u51FA\u4E00\u4E2A\uFF0C\u4E14\u540E\u9762\u7684\u4F1A\u8986\u76D6\u4E0A\u9762\u7684&#39; \uFF0C \u3000\u3000exports. ... : &#39; \u53EF\u4EE5\u8F93\u51FA\u591A\u4E2A&#39;\uFF0C \u3000\u3000\u8FD0\u884C\u9636\u6BB5\u786E\u5B9A\u63A5\u53E3\uFF0C\u8FD0\u884C\u65F6\u624D\u4F1A\u52A0\u8F7D\u6A21\u5757\uFF0C \u3000\u3000\u6A21\u5757\u5C31\u662F\u5BF9\u8C61\uFF0C\u52A0\u8F7D\u7684\u662F\u8BE5\u5BF9\u8C61\uFF0C \u3000\u3000\u52A0\u8F7D\u7684\u662F\u6574\u4E2A\u6A21\u5757\uFF0C\u5373\u5C06\u6240\u6709\u7684\u63A5\u53E3\u5168\u90E8\u52A0\u8F7D\u8FDB\u6765\uFF0C \u3000\u3000\u8F93\u51FA\u7684\u662F\u503C\u7684\u62F7\u8D1D\uFF0C\u5373\u539F\u6765\u6A21\u5757\u4E2D\u7684\u503C\u6539\u53D8\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8BE5\u503C\uFF0C \u3000\u3000this \u6307\u5411\u5F53\u524D\u6A21\u5757 }</p>`,14);function o(p,r){return e}var c=s(n,[["render",o],["__file","require_import.html.vue"]]);export{c as default};
