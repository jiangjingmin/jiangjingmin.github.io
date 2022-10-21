import{_ as p,r as t,o,c,a as n,b as a,F as r,e as l,d as e}from"./app.6e1280c8.js";const i={},u=l(`<h1 id="spa\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u600E\u4E48\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#spa\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u600E\u4E48\u89E3\u51B3" aria-hidden="true">#</a> SPA\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u600E\u4E48\u89E3\u51B3\uFF1F</h1><p><img src="https://static.vue-js.com/24617c00-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png"></p><h2 id="\u4E00\u3001\u4EC0\u4E48\u662F\u9996\u5C4F\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662F\u9996\u5C4F\u52A0\u8F7D" aria-hidden="true">#</a> \u4E00\u3001\u4EC0\u4E48\u662F\u9996\u5C4F\u52A0\u8F7D</h2><p>\u9996\u5C4F\u65F6\u95F4\uFF08First Contentful Paint\uFF09\uFF0C\u6307\u7684\u662F\u6D4F\u89C8\u5668\u4ECE\u54CD\u5E94\u7528\u6237\u8F93\u5165\u7F51\u5740\u5730\u5740\uFF0C\u5230\u9996\u5C4F\u5185\u5BB9\u6E32\u67D3\u5B8C\u6210\u7684\u65F6\u95F4\uFF0C\u6B64\u65F6\u6574\u4E2A\u7F51\u9875\u4E0D\u4E00\u5B9A\u8981\u5168\u90E8\u6E32\u67D3\u5B8C\u6210\uFF0C\u4F46\u9700\u8981\u5C55\u793A\u5F53\u524D\u89C6\u7A97\u9700\u8981\u7684\u5185\u5BB9</p><p>\u9996\u5C4F\u52A0\u8F7D\u53EF\u4EE5\u8BF4\u662F\u7528\u6237\u4F53\u9A8C\u4E2D<strong>\u6700\u91CD\u8981</strong>\u7684\u73AF\u8282</p><h3 id="\u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4" aria-hidden="true">#</a> \u5173\u4E8E\u8BA1\u7B97\u9996\u5C4F\u65F6\u95F4</h3><p>\u5229\u7528<code>performance.timing</code>\u63D0\u4F9B\u7684\u6570\u636E\uFF1A</p><p><img src="https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><p>\u901A\u8FC7<code>DOMContentLoad</code>\u6216\u8005<code>performance</code>\u6765\u8BA1\u7B97\u51FA\u9996\u5C4F\u65F6\u95F4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6848\u4E00\uFF1A</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;first contentful painting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u65B9\u6848\u4E8C\uFF1A</span>
performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span><span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>startTime

<span class="token comment">// performance.getEntriesByName(&quot;first-contentful-paint&quot;)[0]</span>
<span class="token comment">// \u4F1A\u8FD4\u56DE\u4E00\u4E2A PerformancePaintTiming\u7684\u5B9E\u4F8B\uFF0C\u7ED3\u6784\u5982\u4E0B\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;first-contentful-paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entryType</span><span class="token operator">:</span> <span class="token string">&quot;paint&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token number">507.80000002123415</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4E8C\u3001\u52A0\u8F7D\u6162\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u52A0\u8F7D\u6162\u7684\u539F\u56E0" aria-hidden="true">#</a> \u4E8C\u3001\u52A0\u8F7D\u6162\u7684\u539F\u56E0</h2><p>\u5728\u9875\u9762\u6E32\u67D3\u7684\u8FC7\u7A0B\uFF0C\u5BFC\u81F4\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u56E0\u7D20\u53EF\u80FD\u5982\u4E0B\uFF1A</p><ul><li>\u7F51\u7EDC\u5EF6\u65F6\u95EE\u9898</li><li>\u8D44\u6E90\u6587\u4EF6\u4F53\u79EF\u662F\u5426\u8FC7\u5927</li><li>\u8D44\u6E90\u662F\u5426\u91CD\u590D\u53D1\u9001\u8BF7\u6C42\u53BB\u52A0\u8F7D\u4E86</li><li>\u52A0\u8F7D\u811A\u672C\u7684\u65F6\u5019\uFF0C\u6E32\u67D3\u5185\u5BB9\u5835\u585E\u4E86</li></ul><h2 id="\u4E09\u3001\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u4E09\u3001\u89E3\u51B3\u65B9\u6848</h2><p>\u5E38\u89C1\u7684\u51E0\u79CDSPA\u9996\u5C4F\u4F18\u5316\u65B9\u5F0F</p><ul><li>\u51CF\u5C0F\u5165\u53E3\u6587\u4EF6\u79EF</li><li>\u9759\u6001\u8D44\u6E90\u672C\u5730\u7F13\u5B58</li><li>UI\u6846\u67B6\u6309\u9700\u52A0\u8F7D</li><li>\u56FE\u7247\u8D44\u6E90\u7684\u538B\u7F29</li><li>\u7EC4\u4EF6\u91CD\u590D\u6253\u5305</li><li>\u5F00\u542FGZip\u538B\u7F29</li><li>\u4F7F\u7528SSR</li></ul><h3 id="\u51CF\u5C0F\u5165\u53E3\u6587\u4EF6\u4F53\u79EF" tabindex="-1"><a class="header-anchor" href="#\u51CF\u5C0F\u5165\u53E3\u6587\u4EF6\u4F53\u79EF" aria-hidden="true">#</a> \u51CF\u5C0F\u5165\u53E3\u6587\u4EF6\u4F53\u79EF</h3><p>\u5E38\u7528\u7684\u624B\u6BB5\u662F\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF0C\u628A\u4E0D\u540C\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5206\u5272\u6210\u4E0D\u540C\u7684\u4EE3\u7801\u5757\uFF0C\u5F85\u8DEF\u7531\u88AB\u8BF7\u6C42\u7684\u65F6\u5019\u4F1A\u5355\u72EC\u6253\u5305\u8DEF\u7531\uFF0C\u4F7F\u5F97\u5165\u53E3\u6587\u4EF6\u53D8\u5C0F\uFF0C\u52A0\u8F7D\u901F\u5EA6\u5927\u5927\u589E\u52A0</p><p><img src="https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png"></p><p>\u5728<code>vue-router</code>\u914D\u7F6E\u8DEF\u7531\u7684\u65F6\u5019\uFF0C\u91C7\u7528\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\u7684\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span> 
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;Blogs&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ShowBlogs&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/ShowBlogs.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4EE5\u51FD\u6570\u7684\u5F62\u5F0F\u52A0\u8F7D\u8DEF\u7531\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u628A\u5404\u81EA\u7684\u8DEF\u7531\u6587\u4EF6\u5206\u522B\u6253\u5305\uFF0C\u53EA\u6709\u5728\u89E3\u6790\u7ED9\u5B9A\u7684\u8DEF\u7531\u65F6\uFF0C\u624D\u4F1A\u52A0\u8F7D\u8DEF\u7531\u7EC4\u4EF6</p><h3 id="\u9759\u6001\u8D44\u6E90\u672C\u5730\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8D44\u6E90\u672C\u5730\u7F13\u5B58" aria-hidden="true">#</a> \u9759\u6001\u8D44\u6E90\u672C\u5730\u7F13\u5B58</h3><p>\u540E\u7AEF\u8FD4\u56DE\u8D44\u6E90\u95EE\u9898\uFF1A</p><ul><li><p>\u91C7\u7528<code>HTTP</code>\u7F13\u5B58\uFF0C\u8BBE\u7F6E<code>Cache-Control</code>\uFF0C<code>Last-Modified</code>\uFF0C<code>Etag</code>\u7B49\u54CD\u5E94\u5934</p></li><li><p>\u91C7\u7528<code>Service Worker</code>\u79BB\u7EBF\u7F13\u5B58</p></li></ul><p>\u524D\u7AEF\u5408\u7406\u5229\u7528<code>localStorage</code></p><h3 id="ui\u6846\u67B6\u6309\u9700\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#ui\u6846\u67B6\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a> UI\u6846\u67B6\u6309\u9700\u52A0\u8F7D</h3><p>\u5728\u65E5\u5E38\u4F7F\u7528<code>UI</code>\u6846\u67B6\uFF0C\u4F8B\u5982<code>element-UI</code>\u3001\u6216\u8005<code>antd</code>\uFF0C\u6211\u4EEC\u7ECF\u5E38\u6027\u76F4\u63A5\u5F15\u7528\u6574\u4E2A<code>UI</code>\u5E93</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u5B9E\u9645\u4E0A\u6211\u7528\u5230\u7684\u7EC4\u4EF6\u53EA\u6709\u6309\u94AE\uFF0C\u5206\u9875\uFF0C\u8868\u683C\uFF0C\u8F93\u5165\u4E0E\u8B66\u544A \u6240\u4EE5\u6211\u4EEC\u8981\u6309\u9700\u5F15\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> TableColumn<span class="token punctuation">,</span> MessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Pagination<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u7EC4\u4EF6\u91CD\u590D\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u91CD\u590D\u6253\u5305" aria-hidden="true">#</a> \u7EC4\u4EF6\u91CD\u590D\u6253\u5305</h3><p>\u5047\u8BBE<code>A.js</code>\u6587\u4EF6\u662F\u4E00\u4E2A\u5E38\u7528\u7684\u5E93\uFF0C\u73B0\u5728\u6709\u591A\u4E2A\u8DEF\u7531\u4F7F\u7528\u4E86<code>A.js</code>\u6587\u4EF6\uFF0C\u8FD9\u5C31\u9020\u6210\u4E86\u91CD\u590D\u4E0B\u8F7D</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728<code>webpack</code>\u7684<code>config</code>\u6587\u4EF6\u4E2D\uFF0C\u4FEE\u6539<code>CommonsChunkPlugin</code>\u7684\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>minChunks</code>\u4E3A3\u8868\u793A\u4F1A\u628A\u4F7F\u75283\u6B21\u53CA\u4EE5\u4E0A\u7684\u5305\u62BD\u79BB\u51FA\u6765\uFF0C\u653E\u8FDB\u516C\u5171\u4F9D\u8D56\u6587\u4EF6\uFF0C\u907F\u514D\u4E86\u91CD\u590D\u52A0\u8F7D\u7EC4\u4EF6</p><h3 id="\u56FE\u7247\u8D44\u6E90\u7684\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8D44\u6E90\u7684\u538B\u7F29" aria-hidden="true">#</a> \u56FE\u7247\u8D44\u6E90\u7684\u538B\u7F29</h3><p>\u56FE\u7247\u8D44\u6E90\u867D\u7136\u4E0D\u5728\u7F16\u7801\u8FC7\u7A0B\u4E2D\uFF0C\u4F46\u5B83\u5374\u662F\u5BF9\u9875\u9762\u6027\u80FD\u5F71\u54CD\u6700\u5927\u7684\u56E0\u7D20</p><p>\u5BF9\u4E8E\u6240\u6709\u7684\u56FE\u7247\u8D44\u6E90\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u9002\u5F53\u7684\u538B\u7F29</p><p>\u5BF9\u9875\u9762\u4E0A\u4F7F\u7528\u5230\u7684<code>icon</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5728\u7EBF\u5B57\u4F53\u56FE\u6807\uFF0C\u6216\u8005\u96EA\u78A7\u56FE\uFF0C\u5C06\u4F17\u591A\u5C0F\u56FE\u6807\u5408\u5E76\u5230\u540C\u4E00\u5F20\u56FE\u4E0A\uFF0C\u7528\u4EE5\u51CF\u8F7B<code>http</code>\u8BF7\u6C42\u538B\u529B\u3002</p><h3 id="\u5F00\u542Fgzip\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542Fgzip\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542FGZip\u538B\u7F29</h3><p>\u62C6\u5B8C\u5305\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u7528<code>gzip</code>\u505A\u4E00\u4E0B\u538B\u7F29 \u5B89\u88C5<code>compression-webpack-plugin</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>cnmp i compression<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728<code>vue.congig.js</code>\u4E2D\u5F15\u5165\u5E76\u4FEE\u6539<code>webpack</code>\u914D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E3A\u751F\u4EA7\u73AF\u5883\u4FEE\u6539\u914D\u7F6E...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//\u5339\u914D\u6587\u4EF6\u540D</span>
                    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">//\u5BF9\u8D85\u8FC710k\u7684\u6570\u636E\u8FDB\u884C\u538B\u7F29</span>
                    <span class="token literal-property property">deleteOriginalAssets</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//\u662F\u5426\u5220\u9664\u539F\u6587\u4EF6</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728\u670D\u52A1\u5668\u6211\u4EEC\u4E5F\u8981\u505A\u76F8\u5E94\u7684\u914D\u7F6E \u5982\u679C\u53D1\u9001\u8BF7\u6C42\u7684\u6D4F\u89C8\u5668\u652F\u6301<code>gzip</code>\uFF0C\u5C31\u53D1\u9001\u7ED9\u5B83<code>gzip</code>\u683C\u5F0F\u7684\u6587\u4EF6 \u6211\u7684\u670D\u52A1\u5668\u662F\u7528<code>express</code>\u6846\u67B6\u642D\u5EFA\u7684 \u53EA\u8981\u5B89\u88C5\u4E00\u4E0B<code>compression</code>\u5C31\u80FD\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const compression = require(&#39;compression&#39;)
app.use(compression())  // \u5728\u5176\u4ED6\u4E2D\u95F4\u4EF6\u4F7F\u7528\u4E4B\u524D\u8C03\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4F7F\u7528ssr" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528ssr" aria-hidden="true">#</a> \u4F7F\u7528SSR</h3><p>SSR\uFF08Server side \uFF09\uFF0C\u4E5F\u5C31\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u7EC4\u4EF6\u6216\u9875\u9762\u901A\u8FC7\u670D\u52A1\u5668\u751F\u6210html\u5B57\u7B26\u4E32\uFF0C\u518D\u53D1\u9001\u5230\u6D4F\u89C8\u5668</p><p>\u4ECE\u5934\u642D\u5EFA\u4E00\u4E2A\u670D\u52A1\u7AEF\u6E32\u67D3\u662F\u5F88\u590D\u6742\u7684\uFF0C<code>vue</code>\u5E94\u7528\u5EFA\u8BAE\u4F7F\u7528<code>Nuxt.js</code>\u5B9E\u73B0\u670D\u52A1\u7AEF\u6E32\u67D3</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u51CF\u5C11\u9996\u5C4F\u6E32\u67D3\u65F6\u95F4\u7684\u65B9\u6CD5\u6709\u5F88\u591A\uFF0C\u603B\u7684\u6765\u8BB2\u53EF\u4EE5\u5206\u6210\u4E24\u5927\u90E8\u5206 \uFF1A\u8D44\u6E90\u52A0\u8F7D\u4F18\u5316 \u548C \u9875\u9762\u6E32\u67D3\u4F18\u5316</p><p>\u4E0B\u56FE\u662F\u66F4\u4E3A\u5168\u9762\u7684\u9996\u5C4F\u4F18\u5316\u7684\u65B9\u6848</p><p><img src="https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><p>\u5927\u5BB6\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u9879\u76EE\u7684\u60C5\u51B5\u9009\u62E9\u5404\u79CD\u65B9\u5F0F\u8FDB\u884C\u9996\u5C4F\u6E32\u67D3\u7684\u4F18\u5316</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,56),d={href:"https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session",target:"_blank",rel:"noopener noreferrer"},k=e("https://zhuanlan.zhihu.com/p/88639980?utm_source=wechat_session"),m={href:"https://www.chengrang.com/how-browsers-work.html",target:"_blank",rel:"noopener noreferrer"},b=e("https://www.chengrang.com/how-browsers-work.html"),h={href:"https://juejin.cn/post/6844904185264095246",target:"_blank",rel:"noopener noreferrer"},g=e("https://juejin.cn/post/6844904185264095246"),f={href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"},v=e("https://vue3js.cn/docs/zh");function _(x,y){const s=t("ExternalLinkIcon");return o(),c(r,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),n("li",null,[n("a",m,[b,a(s)])]),n("li",null,[n("a",h,[g,a(s)])]),n("li",null,[n("a",f,[v,a(s)])])])],64)}var w=p(i,[["render",_],["__file","first_page_time.html.vue"]]);export{w as default};
