import{_ as a,r as p,o as e,c as t,a as n,b as o,F as c,e as l,d as u}from"./app.cec2e512.js";const i={},r=l(`<h1 id="\u51FD\u6570\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u6269\u5C55" aria-hidden="true">#</a> \u51FD\u6570\u7684\u6269\u5C55</h1><h2 id="\u4E00\u3001\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u53C2\u6570" aria-hidden="true">#</a> \u4E00\u3001\u53C2\u6570</h2><p><code>ES6</code>\u5141\u8BB8\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello World</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello China</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u51FD\u6570\u7684\u5F62\u53C2\u662F\u9ED8\u8BA4\u58F0\u660E\u7684\uFF0C\u4E0D\u80FD\u4F7F\u7528<code>let</code>\u6216<code>const</code>\u518D\u6B21\u58F0\u660E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u53C2\u6570\u9ED8\u8BA4\u503C\u53EF\u4EE5\u4E0E\u89E3\u6784\u8D4B\u503C\u7684\u9ED8\u8BA4\u503C\u7ED3\u5408\u8D77\u6765\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// undefined 5</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 1 5</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 1 2</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: Cannot read property &#39;x&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u7684<code>foo</code>\u51FD\u6570\uFF0C\u5F53\u53C2\u6570\u4E3A\u5BF9\u8C61\u7684\u65F6\u5019\u624D\u80FD\u8FDB\u884C\u89E3\u6784\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u53D8\u91CF<code>x</code>\u548C<code>y</code>\u5C31\u4E0D\u4F1A\u751F\u6210\uFF0C\u4ECE\u800C\u62A5\u9519\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u907F\u514D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53C2\u6570\u9ED8\u8BA4\u503C\u5E94\u8BE5\u662F\u51FD\u6570\u7684\u5C3E\u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u662F\u975E\u5C3E\u90E8\u7684\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u53C2\u6570\u662F\u6CA1\u53D1\u7701\u7565\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [1, undefined]</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [2, undefined]</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4E8C\u3001\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5C5E\u6027" aria-hidden="true">#</a> \u4E8C\u3001\u5C5E\u6027</h2><h3 id="\u51FD\u6570\u7684length\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684length\u5C5E\u6027" aria-hidden="true">#</a> \u51FD\u6570\u7684length\u5C5E\u6027</h3><p><code>length</code>\u5C06\u8FD4\u56DE\u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E2A\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>rest</code> \u53C2\u6570\u4E5F\u4E0D\u4F1A\u8BA1\u5165<code>length</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E0D\u662F\u5C3E\u53C2\u6570\uFF0C\u90A3\u4E48<code>length</code>\u5C5E\u6027\u4E5F\u4E0D\u518D\u8BA1\u5165\u540E\u9762\u7684\u53C2\u6570\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="name\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#name\u5C5E\u6027" aria-hidden="true">#</a> name\u5C5E\u6027</h3><p>\u8FD4\u56DE\u8BE5\u51FD\u6570\u7684\u51FD\u6570\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ES5</span>
f<span class="token punctuation">.</span>name <span class="token comment">// &quot;&quot;</span>

<span class="token comment">// ES6</span>
f<span class="token punctuation">.</span>name <span class="token comment">// &quot;f&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u5C06\u4E00\u4E2A\u5177\u540D\u51FD\u6570\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5219 <code>name</code>\u5C5E\u6027\u90FD\u8FD4\u56DE\u8FD9\u4E2A\u5177\u540D\u51FD\u6570\u539F\u672C\u7684\u540D\u5B57</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span>name <span class="token comment">// &quot;baz&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Function</code>\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u51FD\u6570\u5B9E\u4F8B\uFF0C<code>name</code>\u5C5E\u6027\u7684\u503C\u4E3A<code>anonymous</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;anonymous&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>bind</code>\u8FD4\u56DE\u7684\u51FD\u6570\uFF0C<code>name</code>\u5C5E\u6027\u503C\u4F1A\u52A0\u4E0A<code>bound</code>\u524D\u7F00</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;bound foo&quot;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;bound &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E09\u3001\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4E09\u3001\u4F5C\u7528\u57DF</h2><p>\u4E00\u65E6\u8BBE\u7F6E\u4E86\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u51FD\u6570\u8FDB\u884C\u58F0\u660E\u521D\u59CB\u5316\u65F6\uFF0C\u53C2\u6570\u4F1A\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF</p><p>\u7B49\u5230\u521D\u59CB\u5316\u7ED3\u675F\uFF0C\u8FD9\u4E2A\u4F5C\u7528\u57DF\u5C31\u4F1A\u6D88\u5931\u3002\u8FD9\u79CD\u8BED\u6CD5\u884C\u4E3A\uFF0C\u5728\u4E0D\u8BBE\u7F6E\u53C2\u6570\u9ED8\u8BA4\u503C\u65F6\uFF0C\u662F\u4E0D\u4F1A\u51FA\u73B0\u7684</p><p>\u4E0B\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>y=x</code>\u4F1A\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u4F5C\u7528\u57DF\uFF0C<code>x</code>\u6CA1\u6709\u88AB\u5B9A\u4E49\uFF0C\u6240\u4EE5\u6307\u5411\u5168\u5C40\u53D8\u91CF<code>x</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">y <span class="token operator">=</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token comment">// \u7B49\u540C\u4E8E let y = x  </span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u56DB\u3001\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u56DB\u3001\u4E25\u683C\u6A21\u5F0F</h2><p>\u53EA\u8981\u51FD\u6570\u53C2\u6570\u4F7F\u7528\u4E86\u9ED8\u8BA4\u503C\u3001\u89E3\u6784\u8D4B\u503C\u3001\u6216\u8005\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u90A3\u4E48\u51FD\u6570\u5185\u90E8\u5C31\u4E0D\u80FD\u663E\u5F0F\u8BBE\u5B9A\u4E3A\u4E25\u683C\u6A21\u5F0F\uFF0C\u5426\u5219\u4F1A\u62A5\u9519</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">const</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u62A5\u9519</span>
<span class="token keyword">const</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62A5\u9519</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// code</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u4E94\u3001\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u4E94\u3001\u7BAD\u5934\u51FD\u6570</h2><p>\u4F7F\u7528\u201C\u7BAD\u5934\u201D\uFF08<code>=&gt;</code>\uFF09\u5B9A\u4E49\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u7BAD\u5934\u51FD\u6570\u4E0D\u9700\u8981\u53C2\u6570\u6216\u9700\u8981\u591A\u4E2A\u53C2\u6570\uFF0C\u5C31\u4F7F\u7528\u4E00\u4E2A\u5706\u62EC\u53F7\u4EE3\u8868\u53C2\u6570\u90E8\u5206</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u7BAD\u5934\u51FD\u6570\u7684\u4EE3\u7801\u5757\u90E8\u5206\u591A\u4E8E\u4E00\u6761\u8BED\u53E5\uFF0C\u5C31\u8981\u4F7F\u7528\u5927\u62EC\u53F7\u5C06\u5B83\u4EEC\u62EC\u8D77\u6765\uFF0C\u5E76\u4E14\u4F7F\u7528<code>return</code>\u8BED\u53E5\u8FD4\u56DE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u9700\u8981\u52A0\u62EC\u53F7\u5C06\u5BF9\u8C61\u5305\u88F9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">getTempItem</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Temp&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u51FD\u6570\u4F53\u5185\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u5C31\u662F\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u65F6\u6240\u5728\u7684\u5BF9\u8C61</li><li>\u4E0D\u53EF\u4EE5\u5F53\u4F5C\u6784\u9020\u51FD\u6570\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528<code>new</code>\u547D\u4EE4\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF</li><li>\u4E0D\u53EF\u4EE5\u4F7F\u7528<code>arguments</code>\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5728\u51FD\u6570\u4F53\u5185\u4E0D\u5B58\u5728\u3002\u5982\u679C\u8981\u7528\uFF0C\u53EF\u4EE5\u7528 <code>rest</code> \u53C2\u6570\u4EE3\u66FF</li><li>\u4E0D\u53EF\u4EE5\u4F7F\u7528<code>yield</code>\u547D\u4EE4\uFF0C\u56E0\u6B64\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528\u4F5C Generator \u51FD\u6570</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,49),k={href:"https://es6.ruanyifeng.com/#docs/function",target:"_blank",rel:"noopener noreferrer"},d=u("https://es6.ruanyifeng.com/#docs/function");function m(b,v){const s=p("ExternalLinkIcon");return e(),t(c,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,o(s)])])])],64)}var g=a(i,[["render",m],["__file","function.html.vue"]]);export{g as default};
