import{_ as n,e as s}from"./app.26a788a0.js";const a={},p=s(`<h1 id="\u4E3A\u4EC0\u4E48data\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48data\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48data\u5C5E\u6027\u662F\u4E00\u4E2A\u51FD\u6570\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1F</h1><p><img src="https://static.vue-js.com/83e51560-3acc-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49data\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49data\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E00\u3001\u5B9E\u4F8B\u548C\u7EC4\u4EF6\u5B9A\u4E49data\u7684\u533A\u522B</h2><p><code>vue</code>\u5B9E\u4F8B\u7684\u65F6\u5019\u5B9A\u4E49<code>data</code>\u5C5E\u6027\u65E2\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u8C61\u683C\u5F0F</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FD\u6570\u683C\u5F0F</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
             <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7EC4\u4EF6\u4E2D\u5B9A\u4E49<code>data</code>\u5C5E\u6027\uFF0C\u53EA\u80FD\u662F\u4E00\u4E2A\u51FD\u6570</p><p>\u5982\u679C\u4E3A\u7EC4\u4EF6<code>data</code>\u76F4\u63A5\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;component1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;\u7EC4\u4EF6&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5219\u4F1A\u5F97\u5230\u8B66\u544A\u4FE1\u606F</p><p><img src="https://static.vue-js.com/8e6fc0c0-3acc-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u8B66\u544A\u8BF4\u660E\uFF1A\u8FD4\u56DE\u7684<code>data</code>\u5E94\u8BE5\u662F\u4E00\u4E2A\u51FD\u6570\u5728\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D</p><h2 id="\u4E8C\u3001\u7EC4\u4EF6data\u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7EC4\u4EF6data\u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u7EC4\u4EF6data\u5B9A\u4E49\u51FD\u6570\u4E0E\u5BF9\u8C61\u7684\u533A\u522B</h2><p>\u4E0A\u9762\u8BB2\u5230\u7EC4\u4EF6<code>data</code>\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4E0D\u77E5\u9053\u5927\u5BB6\u6709\u6CA1\u6709\u601D\u8003\u8FC7\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u5728\u6211\u4EEC\u5B9A\u4E49\u597D\u4E00\u4E2A\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C<code>vue</code>\u6700\u7EC8\u90FD\u4F1A\u901A\u8FC7<code>Vue.extend()</code>\u6784\u6210\u7EC4\u4EF6\u5B9E\u4F8B</p><p>\u8FD9\u91CC\u6211\u4EEC\u6A21\u4EFF\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\uFF0C\u5B9A\u4E49<code>data</code>\u5C5E\u6027\uFF0C\u91C7\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u521B\u5EFA\u4E24\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const componentA = new Component()
const componentB = new Component()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4FEE\u6539<code>componentA</code>\u7EC4\u4EF6<code>data</code>\u5C5E\u6027\u7684\u503C\uFF0C<code>componentB</code>\u4E2D\u7684\u503C\u4E5F\u53D1\u751F\u4E86\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EA7\u751F\u8FD9\u6837\u7684\u539F\u56E0\u8FD9\u662F\u4E24\u8005\u5171\u7528\u4E86\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\uFF0C<code>componentA</code>\u4FEE\u6539\u7684\u5185\u5BB9\uFF0C\u540C\u6837\u5BF9<code>componentB</code>\u4EA7\u751F\u4E86\u5F71\u54CD</p><p>\u5982\u679C\u6211\u4EEC\u91C7\u7528\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C\u5219\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF08\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u5185\u5B58\u5730\u5740\u5E76\u4E0D\u76F8\u540C\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4FEE\u6539<code>componentA</code>\u7EC4\u4EF6<code>data</code>\u5C5E\u6027\u7684\u503C\uFF0C<code>componentB</code>\u4E2D\u7684\u503C\u4E0D\u53D7\u5F71\u54CD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>vue</code>\u7EC4\u4EF6\u53EF\u80FD\u4F1A\u6709\u5F88\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u91C7\u7528\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0<code>data</code>\u5F62\u5F0F\uFF0C\u4F7F\u6BCF\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u6570\u636E\u4E0D\u4F1A\u53D7\u5230\u5176\u4ED6\u5B9E\u4F8B\u5BF9\u8C61\u6570\u636E\u7684\u6C61\u67D3</p><h2 id="\u4E09\u3001\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u4E09\u3001\u539F\u7406\u5206\u6790</h2><p>\u9996\u5148\u53EF\u4EE5\u770B\u770B<code>vue</code>\u521D\u59CB\u5316<code>data</code>\u7684\u4EE3\u7801\uFF0C<code>data</code>\u7684\u5B9A\u4E49\u53EF\u4EE5\u662F\u51FD\u6570\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61</p><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code>/vue-dev/src/core/instance/state.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data
  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>data</code>\u65E2\u80FD\u662F<code>object</code>\u4E5F\u80FD\u662F<code>function</code>\uFF0C\u90A3\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u51FA\u73B0\u4E0A\u6587\u8B66\u544A\u5462\uFF1F</p><p>\u522B\u6025\uFF0C\u7EE7\u7EED\u770B\u4E0B\u6587</p><p>\u7EC4\u4EF6\u5728\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C\u9009\u9879\u7684\u5408\u5E76</p><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code>/vue-dev/src/core/util/options.js</code></p><p>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F1A\u8FDB\u5165<code>mergeOptions</code>\u8FDB\u884C\u9009\u9879\u5408\u5E76</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// merge options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// optimize internal component instantiation</span>
      <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
      <span class="token comment">// internal component options needs special treatment.</span>
      <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
        <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
        options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5B9A\u4E49<code>data</code>\u4F1A\u8FDB\u884C\u6570\u636E\u6821\u9A8C</p><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code>/vue-dev/src/core/instance/init.js</code></p><p>\u8FD9\u65F6\u5019<code>vm</code>\u5B9E\u4F8B\u4E3A<code>undefined</code>\uFF0C\u8FDB\u5165<code>if</code>\u5224\u65AD\uFF0C\u82E5<code>data</code>\u7C7B\u578B\u4E0D\u662F<code>function</code>\uFF0C\u5219\u51FA\u73B0\u8B66\u544A\u63D0\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>strats<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentVal</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">childVal</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  vm<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Function <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childVal <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> childVal <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">&amp;&amp;</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;The &quot;data&quot; option should be a function &#39;</span> <span class="token operator">+</span>
            <span class="token string">&quot;that returns a per-instance value in component &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;definitions.&quot;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> parentVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">mergeDataOrFn</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">,</span> childVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mergeDataOrFn</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">,</span> childVal<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u56DB\u3001\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u7ED3\u8BBA" aria-hidden="true">#</a> \u56DB\u3001\u7ED3\u8BBA</h3><ul><li>\u6839\u5B9E\u4F8B\u5BF9\u8C61<code>data</code>\u53EF\u4EE5\u662F\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u662F\u51FD\u6570\uFF08\u6839\u5B9E\u4F8B\u662F\u5355\u4F8B\uFF09\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u6570\u636E\u6C61\u67D3\u60C5\u51B5</li><li>\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61<code>data</code>\u5FC5\u987B\u4E3A\u51FD\u6570\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u9632\u6B62\u591A\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u4E4B\u95F4\u5171\u7528\u4E00\u4E2A<code>data</code>\uFF0C\u4EA7\u751F\u6570\u636E\u6C61\u67D3\u3002\u91C7\u7528\u51FD\u6570\u7684\u5F62\u5F0F\uFF0C<code>initData</code>\u65F6\u4F1A\u5C06\u5176\u4F5C\u4E3A\u5DE5\u5382\u51FD\u6570\u90FD\u4F1A\u8FD4\u56DE\u5168\u65B0<code>data</code>\u5BF9\u8C61</li></ul>`,42);function t(e,o){return p}var l=n(a,[["render",t],["__file","data.html.vue"]]);export{l as default};
