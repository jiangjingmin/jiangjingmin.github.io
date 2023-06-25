import{_ as t,r as o,o as r,c,a as n,b as a,F as l,e,d as p}from"./app.cec2e512.js";const i={},u=e('<h1 id="\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808</h1><p><img src="https://static.vue-js.com/8652b710-74c1-11eb-85f6-6fac77c0c9b3.png" alt="00"></p><h2 id="\u4E00\u3001\u6267\u884C\u4E0A\u4E0B\u6587-\u6267\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6267\u884C\u4E0A\u4E0B\u6587-\u6267\u884C\u73AF\u5883" aria-hidden="true">#</a> \u4E00\u3001\u6267\u884C\u4E0A\u4E0B\u6587\uFF08\u6267\u884C\u73AF\u5883\uFF09</h2>',3),k={href:"https://juejin.im/post/6844903682283143181",target:"_blank",rel:"noopener noreferrer"},d=p("\u7406\u89E3 JavaScript \u4E2D\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u548C\u6267\u884C\u6808"),b={href:"https://github.com/mqyqingfeng/Blog/issues/4",target:"_blank",rel:"noopener noreferrer"},m=p("JavaScript\u6DF1\u5165\u4E4B\u6267\u884C\u4E0A\u4E0B\u6587\u6808"),h=e(`<p>\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u6267\u884C\u4E0A\u4E0B\u6587\u662F\u4E00\u79CD\u5BF9<code>Javascript</code>\u4EE3\u7801\u6267\u884C\u73AF\u5883\u7684\u62BD\u8C61\u6982\u5FF5\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u8981\u6709<code>Javascript</code>\u4EE3\u7801\u8FD0\u884C\uFF0C\u90A3\u4E48\u5B83\u5C31\u4E00\u5B9A\u662F\u8FD0\u884C\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D</p><p>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B\u5206\u4E3A\u4E09\u79CD\uFF1A</p><ul><li>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u53EA\u6709\u4E00\u4E2A\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684\u5168\u5C40\u5BF9\u8C61\u5C31\u662F <code>window</code>\u5BF9\u8C61\uFF0C<code>this</code> \u6307\u5411\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61</li><li>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u5B58\u5728\u65E0\u6570\u4E2A\uFF0C\u53EA\u6709\u5728\u51FD\u6570\u88AB\u8C03\u7528\u7684\u65F6\u5019\u624D\u4F1A\u88AB\u521B\u5EFA\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587</li><li>Eval \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A \u6307\u7684\u662F\u8FD0\u884C\u5728 <code>eval</code> \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C\u5F88\u5C11\u7528\u800C\u4E14\u4E0D\u5EFA\u8BAE\u4F7F\u7528</li></ul><p>\u4E0B\u9762\u7ED9\u51FA\u5168\u5C40\u4E0A\u4E0B\u6587\u548C\u51FD\u6570\u4E0A\u4E0B\u6587\u7684\u4F8B\u5B50\uFF1A</p><p><img src="https://static.vue-js.com/90dd3b60-74c1-11eb-85f6-6fac77c0c9b3.png" alt="01"></p><p>\u7D2B\u8272\u6846\u4F4F\u7684\u90E8\u5206\u4E3A\u5168\u5C40\u4E0A\u4E0B\u6587\uFF0C\u84DD\u8272\u548C\u6A58\u8272\u6846\u8D77\u6765\u7684\u662F\u4E0D\u540C\u7684\u51FD\u6570\u4E0A\u4E0B\u6587\u3002\u53EA\u6709\u5168\u5C40\u4E0A\u4E0B\u6587\uFF08\u7684\u53D8\u91CF\uFF09\u80FD\u88AB\u5176\u4ED6\u4EFB\u4F55\u4E0A\u4E0B\u6587\u8BBF\u95EE</p><p>\u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u4E2A\u51FD\u6570\u4E0A\u4E0B\u6587\uFF0C\u6BCF\u6B21\u8C03\u7528\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u79C1\u6709\u4F5C\u7528\u57DF\uFF0C\u51FD\u6570\u5185\u90E8\u58F0\u660E\u7684\u4EFB\u4F55\u53D8\u91CF\u90FD\u4E0D\u80FD\u5728\u5F53\u524D\u51FD\u6570\u4F5C\u7528\u57DF\u5916\u90E8\u76F4\u63A5\u8BBF\u95EE</p><h3 id="_1-1-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-1-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1.1 \u662F\u4EC0\u4E48</h3><p>\u6982\u5FF5\uFF1A\u6267\u884C\u4E0A\u4E0B\u6587\uFF08execution context\uFF09\u662F\u8BC4\u4F30\u548C\u6267\u884C JavaScript \u4EE3\u7801\u73AF\u5883\u7684\u4E00\u4E2A\u62BD\u8C61\u6982\u5FF5\u3002\u6BCF\u5F53 Javascript\u4EE3\u7801\u5728\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u5B83\u90FD\u662F\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\u3002</p><p>\u89E3\u91CA\uFF1A\u6211\u4EEC\u77E5\u9053JavaScript \u5F15\u64CE\u662F\u987A\u5E8F\u6267\u884C\u7684\uFF0C\u4F46\u5B83\u662F\u4E00\u6BB5\u4E00\u6BB5\u5730\u5206\u6790\u6267\u884C\u7684\uFF0C\u5F53\u6267\u884C\u4E00\u6BB5\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C\u4E00\u4E2A\u201C\u51C6\u5907\u5DE5\u4F5C\u201D\uFF0C\u6BD4\u5982\u53D8\u91CF\u63D0\u5347\u3001\u51FD\u6570\u63D0\u5347\u7B49\uFF0C\u8FD9\u91CC\u7684\u201C\u51C6\u5907\u5DE5\u4F5C\u201D\u5C31\u53EB\u505A&quot;\u6267\u884C\u4E0A\u4E0B\u6587(execution context)&quot;\u3002</p><h3 id="_1-2-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7C7B\u578B" aria-hidden="true">#</a> 1.2 \u7C7B\u578B</h3><p>JavaScript \u4E2D\u6709\u4E09\u79CD\u6267\u884C\u4E0A\u4E0B\u6587\u7C7B\u578B\u3002</p><ul><li><strong>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</strong> \u2014 \u8FD9\u662F\u9ED8\u8BA4\u6216\u8005\u8BF4\u57FA\u7840\u7684\u4E0A\u4E0B\u6587\uFF0C\u4EFB\u4F55\u4E0D\u5728\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\u90FD\u5728\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\u3002\u5B83\u4F1A\u6267\u884C\u4E24\u4EF6\u4E8B\uFF1A\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684 window \u5BF9\u8C61\uFF08\u6D4F\u89C8\u5668\u7684\u60C5\u51B5\u4E0B\uFF09\uFF0C\u5E76\u4E14\u8BBE\u7F6E this \u7684\u503C\u7B49\u4E8E\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u53EA\u4F1A\u6709\u4E00\u4E2A\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u3002</li><li><strong>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</strong> \u2014 \u6BCF\u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6, \u90FD\u4F1A\u4E3A\u8BE5\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\u3002\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709\u5B83\u81EA\u5DF1\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u4E0D\u8FC7\u662F\u5728\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u521B\u5EFA\u7684\u3002\u51FD\u6570\u4E0A\u4E0B\u6587\u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u4E2A\u3002\u6BCF\u5F53\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u521B\u5EFA\uFF0C\u5B83\u4F1A\u6309\u5B9A\u4E49\u7684\u987A\u5E8F\uFF08\u5C06\u5728\u540E\u6587\u8BA8\u8BBA\uFF09\u6267\u884C\u4E00\u7CFB\u5217\u6B65\u9AA4\u3002</li><li><strong>Eval \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</strong> \u2014 \u6267\u884C\u5728 <code>eval</code> \u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\u4E5F\u4F1A\u6709\u5B83\u5C5E\u4E8E\u81EA\u5DF1\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u4F46\u7531\u4E8E JavaScript \u5F00\u53D1\u8005\u5E76\u4E0D\u7ECF\u5E38\u4F7F\u7528 <code>eval</code>\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u6211\u4E0D\u4F1A\u8BA8\u8BBA\u5B83\u3002</li></ul><h3 id="_1-3-\u6267\u884C\u6808" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6267\u884C\u6808" aria-hidden="true">#</a> 1.3 \u6267\u884C\u6808</h3><p>\u4E5F\u53EB\u201C\u8C03\u7528\u6808\u201D\uFF0C\u662F\u4E00\u79CD\u62E5\u6709 LIFO\uFF08\u540E\u8FDB\u5148\u51FA\uFF09\u6570\u636E\u7ED3\u6784\u7684\u6808\uFF0C\u88AB\u7528\u6765\u5B58\u50A8\u4EE3\u7801\u8FD0\u884C\u65F6\u521B\u5EFA\u7684\u6240\u6709\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u5F53 JavaScript \u5F15\u64CE\u7B2C\u4E00\u6B21\u6267\u884C\u811A\u672C\u65F6\uFF0C\u5B83\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF08<code>this</code> \u7ED1\u5B9A\uFF09\u5E76\u538B\u5165\u5F53\u524D\u6267\u884C\u6808\u3002\u6BCF\u5F53\u5F15\u64CE\u9047\u5230\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\uFF0C\u5B83\u90FD\u4F1A\u4E3A\u8BE5\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u5E76\u538B\u5165\u6808\u7684\u9876\u90E8\u3002</p><p>\u5F15\u64CE\u4F1A\u6267\u884C\u90A3\u4E9B\u6267\u884C\u4E0A\u4E0B\u6587\u4F4D\u4E8E\u6808\u9876\u7684\u51FD\u6570\u3002\u5F53\u8BE5\u51FD\u6570\u6267\u884C\u7ED3\u675F\u65F6\uFF0C\u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6808\u4E2D\u5F39\u51FA\uFF0C\u63A7\u5236\u6D41\u7A0B\u5230\u8FBE\u5F53\u524D\u6808\u4E2D\u7684\u4E0B\u4E00\u4E2A\u4E0A\u4E0B\u6587\u3002</p><h3 id="_1-4-\u4E09\u4E2A\u91CD\u8981\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-4-\u4E09\u4E2A\u91CD\u8981\u5C5E\u6027" aria-hidden="true">#</a> 1.4 \u4E09\u4E2A\u91CD\u8981\u5C5E\u6027</h3><ul><li>\u53D8\u91CF\u5BF9\u8C61(Variable object\uFF0CVO)</li><li>\u4F5C\u7528\u57DF\u94FE(Scope chain)</li><li>this</li></ul><h3 id="_1-5-\u53D8\u91CF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_1-5-\u53D8\u91CF\u5BF9\u8C61" aria-hidden="true">#</a> 1.5 \u53D8\u91CF\u5BF9\u8C61</h3><p>\u6982\u5FF5\uFF1A\u53D8\u91CF\u5BF9\u8C61\u662F\u4E0E\u6267\u884C\u4E0A\u4E0B\u6587\u76F8\u5173\u7684\u6570\u636E\u4F5C\u7528\u57DF\uFF0C\u5B58\u50A8\u4E86\u5728\u4E0A\u4E0B\u6587\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E\u3002</p><ul><li>\u5168\u5C40\u5BF9\u8C61 - \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u662F\u4F5C\u7528\u57DF\u94FE\u7684\u5934\uFF08\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5C31\u662FWindow \u5BF9\u8C61\uFF09</li><li>\u6D3B\u52A8\u5BF9\u8C61 - \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF1A\u662F\u5728\u8FDB\u5165\u51FD\u6570\u4E0A\u4E0B\u6587\u65F6\u523B\u88AB\u521B\u5EFA\u7684\uFF0C\u5B83\u901A\u8FC7\u51FD\u6570\u7684 arguments \u5C5E\u6027\u521D\u59CB\u5316\u3002arguments \u5C5E\u6027\u503C\u662F Arguments \u5BF9\u8C61\u3002</li></ul><h2 id="\u4E8C\u3001\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u4E8C\u3001\u751F\u547D\u5468\u671F</h2><p>\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u751F\u547D\u5468\u671F\u5305\u62EC\u4E09\u4E2A\u9636\u6BB5\uFF1A\u521B\u5EFA\u9636\u6BB5 \u2192 \u6267\u884C\u9636\u6BB5 \u2192 \u56DE\u6536\u9636\u6BB5</p><h3 id="\u521B\u5EFA\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9636\u6BB5" aria-hidden="true">#</a> \u521B\u5EFA\u9636\u6BB5</h3><p>\u521B\u5EFA\u9636\u6BB5\u5373\u5F53\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u4F46\u672A\u6267\u884C\u4EFB\u4F55\u5176\u5185\u90E8\u4EE3\u7801\u4E4B\u524D</p><p>\u521B\u5EFA\u9636\u6BB5\u505A\u4E86\u4E09\u4EF6\u4E8B\uFF1A</p><ul><li>\u786E\u5B9A this \u7684\u503C\uFF0C\u4E5F\u88AB\u79F0\u4E3A <code>This Binding</code></li><li>LexicalEnvironment\uFF08\u8BCD\u6CD5\u73AF\u5883\uFF09 \u7EC4\u4EF6\u88AB\u521B\u5EFA</li><li>VariableEnvironment\uFF08\u53D8\u91CF\u73AF\u5883\uFF09 \u7EC4\u4EF6\u88AB\u521B\u5EFA</li></ul><p>\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ExecutionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  
  ThisBinding <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">this</span> value<span class="token operator">&gt;</span><span class="token punctuation">,</span>     <span class="token comment">// \u786E\u5B9Athis </span>
  LexicalEnvironment <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
  VariableEnvironment <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// \u53D8\u91CF\u73AF\u5883</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="this-binding" tabindex="-1"><a class="header-anchor" href="#this-binding" aria-hidden="true">#</a> This Binding</h4><p>\u786E\u5B9A<code>this</code>\u7684\u503C\u6211\u4EEC\u524D\u9762\u8BB2\u5230\uFF0C<code>this</code>\u7684\u503C\u662F\u5728\u6267\u884C\u7684\u65F6\u5019\u624D\u80FD\u786E\u8BA4\uFF0C\u5B9A\u4E49\u7684\u65F6\u5019\u4E0D\u80FD\u786E\u8BA4</p><h4 id="\u8BCD\u6CD5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u73AF\u5883" aria-hidden="true">#</a> \u8BCD\u6CD5\u73AF\u5883</h4><p>\u8BCD\u6CD5\u73AF\u5883\u6709\u4E24\u4E2A\u7EC4\u6210\u90E8\u5206\uFF1A</p><ul><li><p>\u5168\u5C40\u73AF\u5883\uFF1A\u662F\u4E00\u4E2A\u6CA1\u6709\u5916\u90E8\u73AF\u5883\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u5176\u5916\u90E8\u73AF\u5883\u5F15\u7528\u4E3A<code>null</code>\uFF0C\u6709\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C<code>this</code> \u7684\u503C\u6307\u5411\u8FD9\u4E2A\u5168\u5C40\u5BF9\u8C61</p></li><li><p>\u51FD\u6570\u73AF\u5883\uFF1A\u7528\u6237\u5728\u51FD\u6570\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u88AB\u5B58\u50A8\u5728\u73AF\u5883\u8BB0\u5F55\u4E2D\uFF0C\u5305\u542B\u4E86<code>arguments</code> \u5BF9\u8C61\uFF0C\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528\u53EF\u4EE5\u662F\u5168\u5C40\u73AF\u5883\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5305\u542B\u5185\u90E8\u51FD\u6570\u7684\u5916\u90E8\u51FD\u6570\u73AF\u5883</p></li></ul><p>\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>GlobalExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</span>
  <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>       <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">// \u73AF\u5883\u8BB0\u5F55</span>
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>           <span class="token comment">// \u5168\u5C40\u73AF\u5883</span>
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC </span>
      <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>           <span class="token comment">// \u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528</span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

FunctionExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587</span>
  <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>    <span class="token comment">// \u73AF\u5883\u8BB0\u5F55</span>
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>      <span class="token comment">// \u51FD\u6570\u73AF\u5883</span>
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC      // \u5BF9\u5916\u90E8\u73AF\u5883\u7684\u5F15\u7528</span>
      <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global or outer <span class="token keyword">function</span> environment reference<span class="token operator">&gt;</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="\u53D8\u91CF\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u73AF\u5883" aria-hidden="true">#</a> \u53D8\u91CF\u73AF\u5883</h4><p>\u53D8\u91CF\u73AF\u5883\u4E5F\u662F\u4E00\u4E2A\u8BCD\u6CD5\u73AF\u5883\uFF0C\u56E0\u6B64\u5B83\u5177\u6709\u4E0A\u9762\u5B9A\u4E49\u7684\u8BCD\u6CD5\u73AF\u5883\u7684\u6240\u6709\u5C5E\u6027</p><p>\u5728 ES6 \u4E2D\uFF0C\u8BCD\u6CD5\u73AF\u5883\u548C\u53D8\u91CF\u73AF\u5883\u7684\u533A\u522B\u5728\u4E8E\u524D\u8005\u7528\u4E8E\u5B58\u50A8\u51FD\u6570\u58F0\u660E\u548C\u53D8\u91CF\uFF08 <code>let</code> \u548C <code>const</code> \uFF09\u7ED1\u5B9A\uFF0C\u800C\u540E\u8005\u4EC5\u7528\u4E8E\u5B58\u50A8\u53D8\u91CF\uFF08 <code>var</code> \uFF09\u7ED1\u5B9A</p><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>  
<span class="token keyword">var</span> c<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
 <span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  
 <span class="token keyword">return</span> e <span class="token operator">*</span> f <span class="token operator">*</span> g<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

c <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6267\u884C\u4E0A\u4E0B\u6587\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>GlobalExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">ThisBinding</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global Object<span class="token operator">&gt;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// \u8BCD\u6CD5\u73AF\u5883</span>
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>  
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token operator">&lt;</span> uninitialized <span class="token operator">&gt;</span><span class="token punctuation">,</span>  
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token operator">&lt;</span> uninitialized <span class="token operator">&gt;</span><span class="token punctuation">,</span>  
      <span class="token literal-property property">multiply</span><span class="token operator">:</span> <span class="token operator">&lt;</span> func <span class="token operator">&gt;</span>  
    <span class="token punctuation">}</span>  
    <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// \u53D8\u91CF\u73AF\u5883</span>
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Object&quot;</span><span class="token punctuation">,</span>  
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span>  
    <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token keyword">null</span><span class="token operator">&gt;</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

FunctionExectionContext <span class="token operator">=</span> <span class="token punctuation">{</span>  
   
  <span class="token literal-property property">ThisBinding</span><span class="token operator">:</span> <span class="token operator">&lt;</span>Global Object<span class="token operator">&gt;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">LexicalEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>  
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
      <span class="token literal-property property">Arguments</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>GlobalLexicalEnvironment<span class="token operator">&gt;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">EnvironmentRecord</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token string">&quot;Declarative&quot;</span><span class="token punctuation">,</span>  
      <span class="token comment">// \u6807\u8BC6\u7B26\u7ED1\u5B9A\u5728\u8FD9\u91CC  </span>
      <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token keyword">undefined</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">outer</span><span class="token operator">:</span> <span class="token operator">&lt;</span>GlobalLexicalEnvironment<span class="token operator">&gt;</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>\u7559\u610F\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C<code>let</code>\u548C<code>const</code>\u5B9A\u4E49\u7684\u53D8\u91CF<code>a</code>\u548C<code>b</code>\u5728\u521B\u5EFA\u9636\u6BB5\u6CA1\u6709\u88AB\u8D4B\u503C\uFF0C\u4F46<code>var</code>\u58F0\u660E\u7684\u53D8\u91CF\u4ECE\u5728\u521B\u5EFA\u9636\u6BB5\u88AB\u8D4B\u503C\u4E3A<code>undefined</code></p><p>\u8FD9\u662F\u56E0\u4E3A\uFF0C\u521B\u5EFA\u9636\u6BB5\uFF0C\u4F1A\u5728\u4EE3\u7801\u4E2D\u626B\u63CF\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E\uFF0C\u7136\u540E\u5C06\u51FD\u6570\u58F0\u660E\u5B58\u50A8\u5728\u73AF\u5883\u4E2D</p><p>\u4F46\u53D8\u91CF\u4F1A\u88AB\u521D\u59CB\u5316\u4E3A<code>undefined</code>(<code>var</code>\u58F0\u660E\u7684\u60C5\u51B5\u4E0B)\u548C\u4FDD\u6301<code>uninitialized</code>(\u672A\u521D\u59CB\u5316\u72B6\u6001)(\u4F7F\u7528<code>let</code>\u548C<code>const</code>\u58F0\u660E\u7684\u60C5\u51B5\u4E0B)</p><p>\u8FD9\u5C31\u662F\u53D8\u91CF\u63D0\u5347\u7684\u5B9E\u9645\u539F\u56E0</p><h3 id="\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> \u6267\u884C\u9636\u6BB5</h3><p>\u5728\u8FD9\u9636\u6BB5\uFF0C\u6267\u884C\u53D8\u91CF\u8D4B\u503C\u3001\u4EE3\u7801\u6267\u884C</p><p>\u5982\u679C <code>Javascript</code> \u5F15\u64CE\u5728\u6E90\u4EE3\u7801\u4E2D\u58F0\u660E\u7684\u5B9E\u9645\u4F4D\u7F6E\u627E\u4E0D\u5230\u53D8\u91CF\u7684\u503C\uFF0C\u90A3\u4E48\u5C06\u4E3A\u5176\u5206\u914D <code>undefined</code> \u503C</p><h3 id="\u56DE\u6536\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6536\u9636\u6BB5" aria-hidden="true">#</a> \u56DE\u6536\u9636\u6BB5</h3><p>\u6267\u884C\u4E0A\u4E0B\u6587\u51FA\u6808\u7B49\u5F85\u865A\u62DF\u673A\u56DE\u6536\u6267\u884C\u4E0A\u4E0B\u6587</p><h2 id="\u4E8C\u3001\u6267\u884C\u6808" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6267\u884C\u6808" aria-hidden="true">#</a> \u4E8C\u3001\u6267\u884C\u6808</h2><p>\u6267\u884C\u6808\uFF0C\u4E5F\u53EB\u8C03\u7528\u6808\uFF0C\u5177\u6709 LIFO\uFF08\u540E\u8FDB\u5148\u51FA\uFF09\u7ED3\u6784\uFF0C\u7528\u4E8E\u5B58\u50A8\u5728\u4EE3\u7801\u6267\u884C\u671F\u95F4\u521B\u5EFA\u7684\u6240\u6709\u6267\u884C\u4E0A\u4E0B\u6587</p><p><img src="https://static.vue-js.com/9eda0310-74c1-11eb-ab90-d9ae814b240d.png" alt="02"></p><p>\u5F53<code>Javascript</code>\u5F15\u64CE\u5F00\u59CB\u6267\u884C\u4F60\u7B2C\u4E00\u884C\u811A\u672C\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u7136\u540E\u5C06\u5B83\u538B\u5230\u6267\u884C\u6808\u4E2D</p><p>\u6BCF\u5F53\u5F15\u64CE\u78B0\u5230\u4E00\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5B83\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5230\u6267\u884C\u6808\u4E2D</p><p>\u5F15\u64CE\u4F1A\u6267\u884C\u4F4D\u4E8E\u6267\u884C\u6808\u6808\u9876\u7684\u6267\u884C\u4E0A\u4E0B\u6587(\u4E00\u822C\u662F\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587)\uFF0C\u5F53\u8BE5\u51FD\u6570\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u5BF9\u5E94\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u5C31\u4F1A\u88AB\u5F39\u51FA\uFF0C\u7136\u540E\u63A7\u5236\u6D41\u7A0B\u5230\u8FBE\u6267\u884C\u6808\u7684\u4E0B\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside first function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Again inside first function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">second</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside second function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Inside Global Execution Context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8F6C\u5316\u6210\u56FE\u7684\u5F62\u5F0F</p><p><img src="https://static.vue-js.com/ac11a600-74c1-11eb-ab90-d9ae814b240d.png" alt="03"></p><p>\u7B80\u5355\u5206\u6790\u4E00\u4E0B\u6D41\u7A0B\uFF1A</p><ul><li>\u521B\u5EFA\u5168\u5C40\u4E0A\u4E0B\u6587\u8BF7\u538B\u5165\u6267\u884C\u6808</li><li><code>first</code>\u51FD\u6570\u88AB\u8C03\u7528\uFF0C\u521B\u5EFA\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u5E76\u538B\u5165\u6808</li><li>\u6267\u884C<code>first</code>\u51FD\u6570\u8FC7\u7A0B\u9047\u5230<code>second</code>\u51FD\u6570\uFF0C\u518D\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u5E76\u538B\u5165\u6808</li><li><code>second</code>\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u5BF9\u5E94\u7684\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u63A8\u51FA\u6267\u884C\u6808\uFF0C\u6267\u884C\u4E0B\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587<code>first</code>\u51FD\u6570</li><li><code>first</code>\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u5BF9\u5E94\u7684\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4E5F\u88AB\u63A8\u51FA\u6808\u4E2D\uFF0C\u7136\u540E\u6267\u884C\u5168\u5C40\u4E0A\u4E0B\u6587</li><li>\u6240\u6709\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0C\u5168\u5C40\u4E0A\u4E0B\u6587\u4E5F\u4F1A\u88AB\u63A8\u51FA\u6808\u4E2D\uFF0C\u7A0B\u5E8F\u7ED3\u675F</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,66),y={href:"https://zhuanlan.zhihu.com/p/107552264",target:"_blank",rel:"noopener noreferrer"},g=p("https://zhuanlan.zhihu.com/p/107552264");function v(f,x){const s=o("ExternalLinkIcon");return r(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",k,[d,a(s)])]),n("li",null,[n("a",b,[m,a(s)])])]),h,n("ul",null,[n("li",null,[n("a",y,[g,a(s)])])])],64)}var E=t(i,[["render",v],["__file","context_stack.html.vue"]]);export{E as default};
