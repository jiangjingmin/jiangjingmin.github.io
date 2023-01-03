import{_ as n,e as s}from"./app.77cde27d.js";const a={},t=s(`<h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1 \u524D\u8A00</h2><blockquote><p>\u9519\u8BEF\u76D1\u63A7\u5305\u542B\u7684\u5185\u5BB9\u662F\uFF1A</p></blockquote><ul><li>\u524D\u7AEF\u9519\u8BEF\u7684\u5206\u7C7B</li><li>\u6BCF\u79CD\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F</li><li>\u4E0A\u62A5\u9519\u8BEF\u7684\u57FA\u672C\u539F\u7406</li></ul><blockquote><p>\u9762\u8BD5\u65F6\uFF0C\u53EF\u80FD\u6709\u4E24\u79CD\u95EE\u6CD5\uFF1A</p></blockquote><ul><li>\u5982\u4F55\u76D1\u6D4B <code>js</code> \u9519\u8BEF\uFF1F\uFF08\u5F00\u95E8\u89C1\u5C71\u7684\u65B9\u5F0F\uFF09</li><li>\u5982\u4F55\u4FDD\u8BC1<strong>\u4EA7\u54C1\u8D28\u91CF</strong>\uFF1F\uFF08\u5176\u5B9E\u95EE\u7684\u4E5F\u662F\u9519\u8BEF\u76D1\u63A7\uFF09</li></ul><h2 id="_2-\u524D\u7AEF\u9519\u8BEF\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-\u524D\u7AEF\u9519\u8BEF\u7684\u5206\u7C7B" aria-hidden="true">#</a> 2 \u524D\u7AEF\u9519\u8BEF\u7684\u5206\u7C7B</h2><p>\u5305\u62EC\u4E24\u79CD\uFF1A</p><ul><li>\u5373\u65F6\u8FD0\u884C\u9519\u8BEF\uFF08\u4EE3\u7801\u9519\u8BEF\uFF09</li><li>\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF</li></ul><h2 id="_3-\u6BCF\u79CD\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u6BCF\u79CD\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" aria-hidden="true">#</a> 3 \u6BCF\u79CD\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F</h2><h3 id="_3-1-\u5373\u65F6\u8FD0\u884C\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5373\u65F6\u8FD0\u884C\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" aria-hidden="true">#</a> 3.1 \u5373\u65F6\u8FD0\u884C\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F</h3><p><strong>\u65B9\u5F0F1</strong>\uFF1A<code>try ... catch</code>\u3002</p><blockquote><p>\u8FD9\u79CD\u65B9\u5F0F\u8981\u90E8\u7F72\u5728\u4EE3\u7801\u4E2D\u3002</p></blockquote><p><strong>\u65B9\u5F0F2\uFF1A</strong><code>window.onerror</code>\u51FD\u6570\u3002\u8FD9\u4E2A\u51FD\u6570\u662F\u5168\u5C40\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> url<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u53C2\u6570\u89E3\u91CA\uFF1A</p></blockquote><ul><li><code>msg</code>\u4E3A\u5F02\u5E38\u57FA\u672C\u4FE1\u606F</li><li><code>url</code>\u4E3A\u53D1\u751F\u5F02\u5E38<code>Javascript</code>\u6587\u4EF6\u7684<code>url</code></li><li><code>row</code>\u4E3A\u53D1\u751F\u9519\u8BEF\u7684\u884C\u53F7</li></ul><blockquote><p>\u65B9\u5F0F\u4E8C\u4E2D\u7684<code>window.onerror</code>\u662F\u5C5E\u4E8EDOM0\u7684\u5199\u6CD5\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528DOM2\u7684\u5199\u6CD5\uFF1A<code>window.addEventListener(&quot;error&quot;, function(e){});</code>\u4E5F\u53EF\u4EE5\u3002</p></blockquote><p><strong>\u95EE\u9898\u5EF6\u4F381\uFF1A</strong></p><p><code>window.onerror</code>\u9ED8\u8BA4\u65E0\u6CD5\u6355\u83B7<strong>\u8DE8\u57DF</strong>\u7684<code>js</code>\u8FD0\u884C\u9519\u8BEF\u3002\u6355\u83B7\u51FA\u6765\u7684\u4FE1\u606F\u5982\u4E0B\uFF1A\uFF08\u57FA\u672C\u5C5E\u4E8E\u65E0\u6548\u4FE1\u606F\uFF09</p><blockquote><p>\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u60F3\u5F15\u5165<code>B</code>\u7F51\u7AD9\u7684<code>b.js</code>\u6587\u4EF6\uFF0C\u600E\u4E48\u6355\u83B7\u5B83\u7684\u5F02\u5E38\u5462\uFF1F</p></blockquote><p><strong>\u89E3\u51B3\u529E\u6CD5</strong>\uFF1A\u5728\u65B9\u6CD5\u4E8C\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u505A\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u5728<code>b.js</code>\u6587\u4EF6\u91CC\uFF0C\u52A0\u5165\u5982\u4E0B <code>response</code> <code>header</code>\uFF0C\u8868\u793A\u5141\u8BB8\u8DE8\u57DF\uFF1A\uFF08\u6216\u8005\u76F4\u63A5\u7ED9\u9759\u6001\u8D44\u6E90<code>b.js</code>\u52A0\u8FD9\u4E2A response header\uFF09</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin<span class="token operator">:</span> <span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5F15\u5165\u7B2C\u4E09\u65B9\u7684\u6587\u4EF6<code>b.js</code>\u65F6\uFF0C\u5728<code>&lt;script&gt;</code>\u6807\u7B7E\u4E2D\u589E\u52A0<code>crossorigin</code>\u5C5E\u6027\uFF1B</li></ol><p><strong>\u95EE\u9898\u5EF6\u4F382\uFF1A</strong></p><blockquote><p>\u53EA\u9760\u65B9\u5F0F\u4E8C\u4E2D\u7684<code>window.onerror</code>\u662F\u4E0D\u591F\u7684\uFF0C\u56E0\u4E3A\u6211\u4EEC\u65E0\u6CD5\u83B7\u53D6\u6587\u4EF6\u540D\u662F\u4EC0\u4E48\uFF0C\u4E0D\u77E5\u9053\u54EA\u91CC\u51FA\u4E86\u9519\u8BEF\u3002\u89E3\u51B3\u529E\u6CD5\uFF1A\u628A<strong>\u5806\u6808</strong>\u4FE1\u606F\u4F5C\u4E3Amsg\u6253\u5370\u51FA\u6765\uFF0C\u5806\u6808\u91CC\u5F88\u8BE6\u7EC6\u3002</p></blockquote><h3 id="_3-2-\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F" aria-hidden="true">#</a> 3.2 \u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u7684\u6355\u83B7\u65B9\u5F0F</h3><blockquote><p>\u4E0A\u9762\u7684<code>window.onerror</code>\u53EA\u80FD\u6355\u83B7\u5373\u65F6\u8FD0\u884C\u9519\u8BEF\uFF0C\u65E0\u6CD5\u6355\u83B7\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u3002\u539F\u7406\u662F\uFF1A\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\uFF0C\u5E76\u4E0D\u4F1A\u5411\u4E0A\u5192\u6CE1\uFF0C<code>object.onerror</code>\u6355\u83B7\u540E\u5C31\u4F1A\u7EC8\u6B62\uFF08\u4E0D\u4F1A\u5192\u6CE1\u7ED9<code>window</code>\uFF09\uFF0C\u6240\u4EE5<code>window.onerror</code>\u5E76\u4E0D\u80FD\u6355\u83B7\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u3002</p></blockquote><ul><li><strong>\u65B9\u5F0F1</strong>\uFF1A<code>object.onerror</code>\u3002<code>img</code>\u6807\u7B7E\u3001<code>script</code>\u6807\u7B7E\u7B49\u8282\u70B9\u90FD\u53EF\u4EE5\u6DFB\u52A0<code>onerror</code>\u4E8B\u4EF6\uFF0C\u7528\u6765\u6355\u83B7\u8D44\u6E90\u52A0\u8F7D\u7684\u9519\u8BEF\u3002</li><li><strong>\u65B9\u5F0F2</strong>\uFF1A<code>window.performance.getEntries</code>\u3002\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u5DF2\u52A0\u8F7D\u8D44\u6E90\u7684\u52A0\u8F7D\u65F6\u957F\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u95F4\u63A5\u7684\u62FF\u5230\u6CA1\u6709\u52A0\u8F7D\u7684\u8D44\u6E90\u9519\u8BEF\u3002</li></ul><p>\u4E3E\u4F8B\uFF1A</p><blockquote><p>\u6D4F\u89C8\u5668\u6253\u5F00\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5728<code>Console</code>\u63A7\u5236\u53F0\u4E0B\uFF0C\u8F93\u5165\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>performance<span class="token punctuation">.</span><span class="token function">getEntries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4E0A\u9762\u8FD9\u4E2A<code>api</code>\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4\uFF0C\u65E2\u7136\u662F\u6570\u7EC4\uFF0C\u5C31\u53EF\u4EE5\u7528<code>forEach</code>\u904D\u5386\u3002\u6253\u5370\u51FA\u6765\u7684\u8D44\u6E90\u5C31\u662F<strong>\u5DF2\u7ECF\u6210\u529F\u52A0\u8F7D</strong>\u7684\u8D44\u6E90\u3002</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180311_2030.png" alt="image"></p><blockquote><p>\u518D\u5982<code>document.getElementsByTagName(&#39;img&#39;)</code>\uFF0C\u5C31\u4F1A\u663E\u793A\u51FA\u6240\u6709<strong>\u9700\u8981\u52A0\u8F7D</strong>\u7684\u7684img\u96C6\u5408\u3002</p></blockquote><blockquote><p>\u4E8E\u662F\uFF0C<code>document.getElementsByTagName(&#39;img&#39;)</code>\u83B7\u53D6\u7684\u8D44\u6E90\u6570\u7EC4\u51CF\u53BB\u901A\u8FC7<code>performance.getEntries()</code>\u83B7\u53D6\u7684\u8D44\u6E90\u6570\u7EC4\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u6CA1\u6709\u6210\u529F\u52A0\u8F7D\u7684\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u95F4\u63A5\u6355\u83B7\u5230\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u3002</p></blockquote><p>\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u6709\u7528\uFF0C\u4E00\u5B9A\u8981\u8BB0\u4F4F\u3002</p><p><strong>\u65B9\u5F0F3\uFF1B</strong> Error\u4E8B\u4EF6\u6355\u83B7\u3002</p><blockquote><p>\u6E90\u52A0\u8F7D\u9519\u8BEF\uFF0C\u867D\u7136\u4F1A\u963B\u6B62\u5192\u6CE1\uFF0C\u4F46\u662F\u4E0D\u4F1A\u963B\u6B62\u6355\u83B7\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u6355\u83B7\u9636\u6BB5\u7ED1\u5B9Aerror\u4E8B\u4EF6\u3002\u4F8B\u5982\uFF1A</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180311_2040.png" alt="image"></p><blockquote><p><strong>\u603B\u7ED3\uFF1A</strong> \u5982\u679C\u6211\u4EEC\u80FD\u56DE\u7B54\u51FA\u540E\u9762\u7684\u4E24\u79CD\u65B9\u5F0F\uFF0C\u9762\u8BD5\u5B98\u5BF9\u6211\u4EEC\u7684\u5370\u8C61\u4F1A\u5927\u5927\u589E\u52A0\u3002\u65E2\u53EF\u4EE5\u4F53\u73B0\u51FA\u6211\u4EEC\u5BF9\u9519\u8BEF\u76D1\u63A7\u7684\u4E86\u89E3\uFF0C\u8FD8\u53EF\u4EE5\u4F53\u73B0\u51FA\u6211\u4EEC\u5BF9\u4E8B\u4EF6\u6A21\u578B\u7684\u638C\u63E1\u3002</p></blockquote><h2 id="_4-\u9519\u8BEF\u4E0A\u62A5\u7684\u4E24\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u9519\u8BEF\u4E0A\u62A5\u7684\u4E24\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 4 \u9519\u8BEF\u4E0A\u62A5\u7684\u4E24\u79CD\u65B9\u5F0F</h2><ul><li><strong>\u65B9\u5F0F\u4E00</strong>\uFF1A\u91C7\u7528<code>Ajax</code>\u901A\u4FE1\u7684\u65B9\u5F0F\u4E0A\u62A5\uFF08\u6B64\u65B9\u5F0F\u867D\u7136\u53EF\u4EE5\u4E0A\u62A5\u9519\u8BEF\uFF0C\u4F46\u662F\u6211\u4EEC\u5E76\u4E0D\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF09</li><li><strong>\u65B9\u5F0F\u4E8C</strong>\uFF1A\u5229\u7528<code>Image</code>\u5BF9\u8C61\u4E0A\u62A5\uFF08\u63A8\u8350\u3002\u7F51\u7AD9\u7684\u76D1\u63A7\u4F53\u7CFB\u90FD\u662F\u91C7\u7528\u7684\u8FD9\u79CD\u65B9\u5F0F\uFF09</li></ul><blockquote><p>\u65B9\u5F0F\u4E8C\u7684\u5B9E\u73B0\u65B9\u5F0F\u5982\u4E0B\uFF1A</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token comment">//\u901A\u8FC7Image\u5BF9\u8C61\u8FDB\u884C\u9519\u8BEF\u4E0A\u62A5</span>
    <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://smyhvae.com/myPath?badjs=msg&#39;</span><span class="token punctuation">;</span>   <span class="token comment">// myPath\u8868\u793A\u4E0A\u62A5\u7684\u8DEF\u5F84\uFF08\u6211\u8981\u4E0A\u62A5\u5230\u54EA\u91CC\u53BB\uFF09\u3002\u540E\u9762\u7684\u5185\u5BB9\u662F\u81EA\u5DF1\u52A0\u7684\u53C2\u6570\u3002</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180311_2055.png" alt="image"></p><p>\u4E0A\u56FE\u4E2D\uFF0C\u7EA2\u8272\u90A3\u4E00\u680F\u8868\u660E\uFF0C\u6211\u7684\u8BF7\u6C42\u5DF2\u7ECF\u53D1\u51FA\u53BB\u4E86\u3002\u70B9\u8FDB\u53BB\u770B\u770B\uFF1A</p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180311_2057.png" alt="image"></p><blockquote><p>\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E0D\u9700\u8981\u501F\u52A9\u7B2C\u4E09\u65B9\u7684\u5E93\uFF0C\u4E00\u884C\u4EE3\u7801\u5373\u53EF\u641E\u5B9A\u3002</p></blockquote>`,50);function e(o,p){return t}var l=n(a,[["render",e],["__file","\u524D\u7AEF\u9519\u8BEF\u76D1\u63A7.html.vue"]]);export{l as default};
