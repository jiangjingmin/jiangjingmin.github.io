import{_ as n,c as s}from"./app.f060585c.js";const a={},e=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4var\u3001let\u3001const\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4var\u3001let\u3001const\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4var\u3001let\u3001const\u4E4B\u95F4\u7684\u533A\u522B</h1><p><img src="https://static.vue-js.com/d2aba2e0-50f7-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001var" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001var" aria-hidden="true">#</a> \u4E00\u3001var</h2><p>\u5728ES5\u4E2D\uFF0C\u9876\u5C42\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u5168\u5C40\u53D8\u91CF\u662F\u7B49\u4EF7\u7684\uFF0C\u7528<code>var</code>\u58F0\u660E\u7684\u53D8\u91CF\u65E2\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u4E5F\u662F\u9876\u5C42\u53D8\u91CF</p><p>\u6CE8\u610F\uFF1A\u9876\u5C42\u5BF9\u8C61\uFF0C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u6307\u7684\u662F<code>window</code>\u5BF9\u8C61\uFF0C\u5728 <code>Node</code> \u6307\u7684\u662F<code>global</code>\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F7F\u7528<code>var</code>\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u63D0\u5347\u7684\u60C5\u51B5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u7F16\u8BD1\u9636\u6BB5\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5C06\u5176\u53D8\u6210\u4EE5\u4E0B\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528<code>var</code>\uFF0C\u6211\u4EEC\u80FD\u591F\u5BF9\u4E00\u4E2A\u53D8\u91CF\u8FDB\u884C\u591A\u6B21\u58F0\u660E\uFF0C\u540E\u9762\u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u8986\u76D6\u524D\u9762\u7684\u53D8\u91CF\u58F0\u660E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span> 
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u4F7F\u7528<code>var</code>\u58F0\u660E\u53D8\u91CF\u65F6\u5019\uFF0C\u8BE5\u53D8\u91CF\u662F\u5C40\u90E8\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
<span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 20 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u800C\u5982\u679C\u5728\u51FD\u6570\u5185\u4E0D\u4F7F\u7528<code>var</code>\uFF0C\u8BE5\u53D8\u91CF\u662F\u5168\u5C40\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
<span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 30 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E8C\u3001let" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001let" aria-hidden="true">#</a> \u4E8C\u3001let</h2><p><code>let</code>\u662F<code>ES6</code>\u65B0\u589E\u7684\u547D\u4EE4\uFF0C\u7528\u6765\u58F0\u660E\u53D8\u91CF</p><p>\u7528\u6CD5\u7C7B\u4F3C\u4E8E<code>var</code>\uFF0C\u4F46\u662F\u6240\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53EA\u5728<code>let</code>\u547D\u4EE4\u6240\u5728\u7684\u4EE3\u7801\u5757\u5185\u6709\u6548</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: a is not defined.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519ReferenceError</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u8868\u793A\u5728\u58F0\u660E\u5B83\u4E4B\u524D\uFF0C\u53D8\u91CF<code>a</code>\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u8FD9\u65F6\u5982\u679C\u7528\u5230\u5B83\uFF0C\u5C31\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF</p><p>\u53EA\u8981\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u5B58\u5728<code>let</code>\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u533A\u57DF\u5C31\u4E0D\u518D\u53D7\u5916\u90E8\u5F71\u54CD</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span> <span class="token comment">// ReferenceError</span>
    <span class="token keyword">let</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528<code>let</code>\u58F0\u660E\u53D8\u91CF\u524D\uFF0C\u8BE5\u53D8\u91CF\u90FD\u4E0D\u53EF\u7528\uFF0C\u4E5F\u5C31\u662F\u5927\u5BB6\u5E38\u8BF4\u7684\u201C\u6682\u65F6\u6027\u6B7B\u533A\u201D</p><p>\u6700\u540E\uFF0C<code>let</code>\u4E0D\u5141\u8BB8\u5728\u76F8\u540C\u4F5C\u7528\u57DF\u4E2D\u91CD\u590D\u58F0\u660E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// Uncaught SyntaxError: Identifier &#39;a&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\u7684\u662F\u76F8\u540C\u4F5C\u7528\u57DF\uFF0C\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5\u662F\u4E0D\u4F1A\u62A5\u9519\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u4E0D\u80FD\u5728\u51FD\u6570\u5185\u90E8\u91CD\u65B0\u58F0\u660E\u53C2\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught SyntaxError: Identifier &#39;arg&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E09\u3001const" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001const" aria-hidden="true">#</a> \u4E09\u3001const</h2><p><code>const</code>\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\uFF0C\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment">// TypeError: Assignment to constant variable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u610F\u5473\u7740\uFF0C<code>const</code>\u4E00\u65E6\u58F0\u660E\u53D8\u91CF\uFF0C\u5C31\u5FC5\u987B\u7ACB\u5373\u521D\u59CB\u5316\uFF0C\u4E0D\u80FD\u7559\u5230\u4EE5\u540E\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a<span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Missing initializer in const declaration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u4E4B\u524D\u7528<code>var</code>\u6216<code>let</code>\u58F0\u660E\u8FC7\u53D8\u91CF\uFF0C\u518D\u7528<code>const</code>\u58F0\u660E\u540C\u6837\u4F1A\u62A5\u9519</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// \u90FD\u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>const</code>\u5B9E\u9645\u4E0A\u4FDD\u8BC1\u7684\u5E76\u4E0D\u662F\u53D8\u91CF\u7684\u503C\u4E0D\u5F97\u6539\u52A8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u6240\u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u5F97\u6539\u52A8</p><p>\u5BF9\u4E8E\u7B80\u5355\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u503C\u5C31\u4FDD\u5B58\u5728\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u7B49\u540C\u4E8E\u5E38\u91CF</p><p>\u5BF9\u4E8E\u590D\u6742\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u53D8\u91CF\u6307\u5411\u7684\u5185\u5B58\u5730\u5740\uFF0C\u4FDD\u5B58\u7684\u53EA\u662F\u4E00\u4E2A\u6307\u5411\u5B9E\u9645\u6570\u636E\u7684\u6307\u9488\uFF0C<code>const</code>\u53EA\u80FD\u4FDD\u8BC1\u8FD9\u4E2A\u6307\u9488\u662F\u56FA\u5B9A\u7684\uFF0C\u5E76\u4E0D\u80FD\u786E\u4FDD\u6539\u53D8\u91CF\u7684\u7ED3\u6784\u4E0D\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A foo \u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6210\u529F</span>
foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>prop <span class="token comment">// 123</span>

<span class="token comment">// \u5C06 foo \u6307\u5411\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u9519</span>
foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: &quot;foo&quot; is read-only</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5176\u5B83\u60C5\u51B5\uFF0C<code>const</code>\u4E0E<code>let</code>\u4E00\u81F4</p><h2 id="\u56DB\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u533A\u522B" aria-hidden="true">#</a> \u56DB\u3001\u533A\u522B</h2><p><code>var</code>\u3001<code>let</code>\u3001<code>const</code>\u4E09\u8005\u533A\u522B\u53EF\u4EE5\u56F4\u7ED5\u4E0B\u9762\u4E94\u70B9\u5C55\u5F00\uFF1A</p><ul><li>\u53D8\u91CF\u63D0\u5347</li><li>\u6682\u65F6\u6027\u6B7B\u533A</li><li>\u5757\u7EA7\u4F5C\u7528\u57DF</li><li>\u91CD\u590D\u58F0\u660E</li><li>\u4FEE\u6539\u58F0\u660E\u7684\u53D8\u91CF</li><li>\u4F7F\u7528</li></ul><h3 id="\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> \u53D8\u91CF\u63D0\u5347</h3><p><code>var </code>\u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u5373\u53D8\u91CF\u53EF\u4EE5\u5728\u58F0\u660E\u4E4B\u524D\u8C03\u7528\uFF0C\u503C\u4E3A<code>undefined</code></p><p><code>let</code>\u548C<code>const</code>\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u5373\u5B83\u4EEC\u6240\u58F0\u660E\u7684\u53D8\u91CF\u4E00\u5B9A\u8981\u5728\u58F0\u660E\u540E\u4F7F\u7528\uFF0C\u5426\u5219\u62A5\u9519</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// let </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;b&#39; before initialization</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// const</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;c&#39; before initialization</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a> \u6682\u65F6\u6027\u6B7B\u533A</h3><p><code>var</code>\u4E0D\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A</p><p><code>let</code>\u548C<code>const</code>\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u53EA\u6709\u7B49\u5230\u58F0\u660E\u53D8\u91CF\u7684\u90A3\u4E00\u884C\u4EE3\u7801\u51FA\u73B0\uFF0C\u624D\u53EF\u4EE5\u83B7\u53D6\u548C\u4F7F\u7528\u8BE5\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// let</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;b&#39; before initialization</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>

<span class="token comment">// const</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Cannot access &#39;c&#39; before initialization</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5757\u7EA7\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF</h3><p><code>var</code>\u4E0D\u5B58\u5728\u5757\u7EA7\u4F5C\u7528\u57DF</p><p><code>let</code>\u548C<code>const</code>\u5B58\u5728\u5757\u7EA7\u4F5C\u7528\u57DF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">// let</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// Uncaught ReferenceError: b is not defined</span>

<span class="token comment">// const</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>  <span class="token comment">// Uncaught ReferenceError: c is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u91CD\u590D\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u590D\u58F0\u660E" aria-hidden="true">#</a> \u91CD\u590D\u58F0\u660E</h3><p><code>var</code>\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u53D8\u91CF</p><p><code>let</code>\u548C<code>const</code>\u5728\u540C\u4E00\u4F5C\u7528\u57DF\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E\u53D8\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 20</span>

<span class="token comment">// let</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// Identifier &#39;b&#39; has already been declared</span>

<span class="token comment">// const</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// Identifier &#39;c&#39; has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u4FEE\u6539\u58F0\u660E\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u58F0\u660E\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u6539\u58F0\u660E\u7684\u53D8\u91CF</h3><p><code>var</code>\u548C<code>let</code>\u53EF\u4EE5</p><p><code>const</code>\u58F0\u660E\u4E00\u4E2A\u53EA\u8BFB\u7684\u5E38\u91CF\u3002\u4E00\u65E6\u58F0\u660E\uFF0C\u5E38\u91CF\u7684\u503C\u5C31\u4E0D\u80FD\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
a <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">//let</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">// 20</span>

<span class="token comment">// const</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">10</span>
c <span class="token operator">=</span> <span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// Uncaught TypeError: Assignment to constant variable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u80FD\u7528<code>const</code>\u7684\u60C5\u51B5\u5C3D\u91CF\u4F7F\u7528<code>const</code>\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u5927\u591A\u6570\u4F7F\u7528<code>let</code>\uFF0C\u907F\u514D\u4F7F\u7528<code>var</code></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://es6.ruanyifeng.com/</li></ul>`,71);function p(c,o){return e}var l=n(a,[["render",p],["__file","index.html.vue"]]);export{l as default};
