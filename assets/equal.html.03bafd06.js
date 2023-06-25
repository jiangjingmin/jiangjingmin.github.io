import{_ as s,e as n}from"./app.f6b3af9d.js";var a="/assets/003.def4fcad.png";const e={},p=n('<h1 id="\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> ==\u548C===\u7684\u533A\u522B</h1><p><img src="'+a+`" alt="\u53CC\u7B49"></p><h2 id="\u4E00\u3001\u7B49\u4E8E\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7B49\u4E8E\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4E00\u3001\u7B49\u4E8E\u64CD\u4F5C\u7B26</h2><p>\u7B49\u4E8E\u64CD\u4F5C\u7B26\u7528\u4E24\u4E2A\u7B49\u4E8E\u53F7\uFF08 == \uFF09\u8868\u793A\uFF0C\u5982\u679C\u64CD\u4F5C\u6570\u76F8\u7B49\uFF0C\u5219\u4F1A\u8FD4\u56DE <code>true</code></p><p>\u5728<code>JavaScript</code>\u4E2D\u5B58\u5728\u9690\u5F0F\u8F6C\u6362\u3002\u7B49\u4E8E\u64CD\u4F5C\u7B26\uFF08==\uFF09\u5728\u6BD4\u8F83\u4E2D\u4F1A\u5148\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u518D\u786E\u5B9A\u64CD\u4F5C\u6570\u662F\u5426\u76F8\u7B49</p><p>\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><p>\u5982\u679C\u4EFB\u4E00\u64CD\u4F5C\u6570\u662F\u5E03\u5C14\u503C\uFF0C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u503C\u518D\u6BD4\u8F83\u662F\u5426\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u6570\u503C\uFF0C\u5219\u5C1D\u8BD5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u503C\uFF0C\u518D\u6BD4\u8F83\u662F\u5426\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">==</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5BF9\u8C61\uFF0C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E0D\u662F\uFF0C\u5219\u8C03\u7528\u5BF9\u8C61\u7684 <code>valueOf()</code>\u65B9\u6CD5\u53D6\u5F97\u5176\u539F\u59CB\u503C\uFF0C\u518D\u6839\u636E\u524D\u9762\u7684\u89C4\u5219\u8FDB\u884C\u6BD4\u8F83</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> obj <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>null</code>\u548C<code>undefined</code>\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u6709\u4EFB\u4E00\u64CD\u4F5C\u6570\u662F <code>NaN</code> \uFF0C\u5219\u76F8\u7B49\u64CD\u4F5C\u7B26\u8FD4\u56DE <code>false</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u662F\u5BF9\u8C61\uFF0C\u5219\u6BD4\u8F83\u5B83\u4EEC\u662F\u4E0D\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u5982\u679C\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F8\u7B49\u64CD\u4F5C\u7B26\u8FD4\u56DE<code>true</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> obj1 <span class="token operator">==</span> obj2<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0B\u9762\u8FDB\u4E00\u6B65\u505A\u4E2A\u5C0F\u7ED3\uFF1A</p><ul><li>\u4E24\u4E2A\u90FD\u4E3A\u7B80\u5355\u7C7B\u578B\uFF0C\u5B57\u7B26\u4E32\u548C\u5E03\u5C14\u503C\u90FD\u4F1A\u8F6C\u6362\u6210\u6570\u503C\uFF0C\u518D\u6BD4\u8F83</li><li>\u7B80\u5355\u7C7B\u578B\u4E0E\u5F15\u7528\u7C7B\u578B\u6BD4\u8F83\uFF0C\u5BF9\u8C61\u8F6C\u5316\u6210\u5176\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u518D\u6BD4\u8F83</li><li>\u4E24\u4E2A\u90FD\u4E3A\u5F15\u7528\u7C7B\u578B\uFF0C\u5219\u6BD4\u8F83\u5B83\u4EEC\u662F\u5426\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61</li><li>null \u548C undefined \u76F8\u7B49</li><li>\u5B58\u5728 NaN \u5219\u8FD4\u56DE false</li></ul><h2 id="\u4E8C\u3001\u5168\u7B49\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5168\u7B49\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4E8C\u3001\u5168\u7B49\u64CD\u4F5C\u7B26</h2><p>\u5168\u7B49\u64CD\u4F5C\u7B26\u7531 3 \u4E2A\u7B49\u4E8E\u53F7\uFF08 === \uFF09\u8868\u793A\uFF0C\u53EA\u6709\u4E24\u4E2A\u64CD\u4F5C\u6570\u5728\u4E0D\u8F6C\u6362\u7684\u524D\u63D0\u4E0B\u76F8\u7B49\u624D\u8FD4\u56DE <code>true</code>\u3002\u5373\u7C7B\u578B\u76F8\u540C\uFF0C\u503C\u4E5F\u9700\u76F8\u540C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// false\uFF0C\u4E0D\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u4E0D\u540C</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u76F8\u540C\u503C\u4E5F\u76F8\u540C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>undefined</code> \u548C <code>null</code> \u4E0E\u81EA\u8EAB\u4E25\u683C\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u76F8\u7B49\u64CD\u4F5C\u7B26\uFF08==\uFF09\u4F1A\u505A\u7C7B\u578B\u8F6C\u6362\uFF0C\u518D\u8FDB\u884C\u503C\u7684\u6BD4\u8F83\uFF0C\u5168\u7B49\u8FD0\u7B97\u7B26\u4E0D\u4F1A\u505A\u7C7B\u578B\u8F6C\u6362</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// false\uFF0C\u4E0D\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u4E0D\u540C</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u76F8\u7B49\uFF0C\u56E0\u4E3A\u6570\u636E\u7C7B\u578B\u76F8\u540C\u503C\u4E5F\u76F8\u540C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>null</code> \u548C <code>undefined</code> \u6BD4\u8F83\uFF0C\u76F8\u7B49\u64CD\u4F5C\u7B26\uFF08==\uFF09\u4E3A<code>true</code>\uFF0C\u5168\u7B49\u4E3A<code>false</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u76F8\u7B49\u8FD0\u7B97\u7B26\u9690\u85CF\u7684\u7C7B\u578B\u8F6C\u6362\uFF0C\u4F1A\u5E26\u6765\u4E00\u4E9B\u8FDD\u53CD\u76F4\u89C9\u7684\u7ED3\u679C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token string">&#39;\\t\\r\\n&#39;</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F46\u5728\u6BD4\u8F83<code>null</code>\u7684\u60C5\u51B5\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E00\u822C\u4F7F\u7528\u76F8\u7B49\u64CD\u4F5C\u7B26<code>==</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6267\u884C</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B49\u540C\u4E8E\u4E0B\u9762\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u76F8\u7B49\u64CD\u4F5C\u7B26\uFF08==\uFF09\u7684\u5199\u6CD5\u660E\u663E\u66F4\u52A0\u7B80\u6D01\u4E86</p><p>\u6240\u4EE5\uFF0C\u9664\u4E86\u5728\u6BD4\u8F83\u5BF9\u8C61\u5C5E\u6027\u4E3A<code>null</code>\u6216\u8005<code>undefined</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u76F8\u7B49\u64CD\u4F5C\u7B26\uFF08==\uFF09\uFF0C\u5176\u4ED6\u60C5\u51B5\u5EFA\u8BAE\u4E00\u5F8B\u4F7F\u7528\u5168\u7B49\u64CD\u4F5C\u7B26\uFF08===\uFF09</p>`,39);function t(o,l){return p}var r=s(e,[["render",t],["__file","equal.html.vue"]]);export{r as default};
