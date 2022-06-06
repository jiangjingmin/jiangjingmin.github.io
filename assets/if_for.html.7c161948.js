import{_ as n,c as s}from"./app.f060585c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-v-if\u548Cv-for\u7684\u4F18\u5148\u7EA7\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-v-if\u548Cv-for\u7684\u4F18\u5148\u7EA7\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1Av-if\u548Cv-for\u7684\u4F18\u5148\u7EA7\u662F\u4EC0\u4E48\uFF1F</h1><p><img src="https://static.vue-js.com/e8764810-3acb-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4F5C\u7528" aria-hidden="true">#</a> \u4E00\u3001\u4F5C\u7528</h2><p><code>v-if</code> \u6307\u4EE4\u7528\u4E8E\u6761\u4EF6\u6027\u5730\u6E32\u67D3\u4E00\u5757\u5185\u5BB9\u3002\u8FD9\u5757\u5185\u5BB9\u53EA\u4F1A\u5728\u6307\u4EE4\u7684\u8868\u8FBE\u5F0F\u8FD4\u56DE <code>true</code>\u503C\u7684\u65F6\u5019\u88AB\u6E32\u67D3</p><p><code>v-for</code> \u6307\u4EE4\u57FA\u4E8E\u4E00\u4E2A\u6570\u7EC4\u6765\u6E32\u67D3\u4E00\u4E2A\u5217\u8868\u3002<code>v-for</code> \u6307\u4EE4\u9700\u8981\u4F7F\u7528 <code>item in items</code> \u5F62\u5F0F\u7684\u7279\u6B8A\u8BED\u6CD5\uFF0C\u5176\u4E2D <code>items</code> \u662F\u6E90\u6570\u636E\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\uFF0C\u800C <code>item</code> \u5219\u662F\u88AB\u8FED\u4EE3\u7684\u6570\u7EC4\u5143\u7D20\u7684\u522B\u540D</p><p>\u5728 <code>v-for</code> \u7684\u65F6\u5019\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E<code>key</code>\u503C\uFF0C\u5E76\u4E14\u4FDD\u8BC1\u6BCF\u4E2A<code>key</code>\u503C\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\uFF0C\u8FD9\u4FBF\u4E8E<code>diff</code>\u7B97\u6CD5\u8FDB\u884C\u4F18\u5316</p><p>\u4E24\u8005\u5728\u7528\u6CD5\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Modal v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in items&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>label <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E8C\u3001\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4E8C\u3001\u4F18\u5148\u7EA7</h2><p><code>v-if</code>\u4E0E<code>v-for</code>\u90FD\u662F<code>vue</code>\u6A21\u677F\u7CFB\u7EDF\u4E2D\u7684\u6307\u4EE4</p><p>\u5728<code>vue</code>\u6A21\u677F\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u4F1A\u5C06\u6307\u4EE4\u7CFB\u7EDF\u8F6C\u5316\u6210\u53EF\u6267\u884C\u7684<code>render</code>\u51FD\u6570</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><p>\u7F16\u5199\u4E00\u4E2A<code>p</code>\u6807\u7B7E\uFF0C\u540C\u65F6\u4F7F\u7528<code>v-if</code>\u4E0E <code>v-for</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ item.title }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u521B\u5EFA<code>vue</code>\u5B9E\u4F8B\uFF0C\u5B58\u653E<code>isShow</code>\u4E0E<code>items</code>\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;baz&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">isShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6A21\u677F\u6307\u4EE4\u7684\u4EE3\u7801\u90FD\u4F1A\u751F\u6210\u5728<code>render</code>\u51FD\u6570\u4E2D\uFF0C\u901A\u8FC7<code>app.$options.render</code>\u5C31\u80FD\u5F97\u5230\u6E32\u67D3\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u0192 <span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">with</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> 
    <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">_l</span><span class="token punctuation">(</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>isShow<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span> <span class="token function">_s</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">_e</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>_l</code>\u662F<code>vue</code>\u7684\u5217\u8868\u6E32\u67D3\u51FD\u6570\uFF0C\u51FD\u6570\u5185\u90E8\u90FD\u4F1A\u8FDB\u884C\u4E00\u6B21<code>if</code>\u5224\u65AD</p><p>\u521D\u6B65\u5F97\u5230\u7ED3\u8BBA\uFF1A<code>v-for</code>\u4F18\u5148\u7EA7\u662F\u6BD4<code>v-if</code>\u9AD8</p><p>\u518D\u5C06<code>v-for</code>\u4E0E<code>v-if</code>\u7F6E\u4E8E\u4E0D\u540C\u6807\u7B7E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u518D\u8F93\u51FA\u4E0B<code>render</code>\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\u0192 <span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> 
    <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token punctuation">(</span>isShow<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">_l</span><span class="token punctuation">(</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">_v</span><span class="token punctuation">(</span><span class="token function">_s</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token function">_e</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C<code>v-for</code>\u4E0E<code>v-if</code>\u4F5C\u7528\u5728\u4E0D\u540C\u6807\u7B7E\u65F6\u5019\uFF0C\u662F\u5148\u8FDB\u884C\u5224\u65AD\uFF0C\u518D\u8FDB\u884C\u5217\u8868\u7684\u6E32\u67D3</p><p>\u6211\u4EEC\u518D\u5728\u67E5\u770B\u4E0B<code>vue</code>\u6E90\u7801</p><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code> \\vue-dev\\src\\compiler\\codegen\\index.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">genElement</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">el</span><span class="token operator">:</span> ASTElement<span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> CodegenState</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>pre <span class="token operator">=</span> el<span class="token punctuation">.</span>pre <span class="token operator">||</span> el<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>pre
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>staticRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>staticProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genStatic</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>once <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>onceProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genOnce</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>for <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>forProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genFor</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>if <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>ifProcessed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genIf</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;template&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>el<span class="token punctuation">.</span>slotTarget <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>state<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genChildren</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;void 0&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>tag <span class="token operator">===</span> <span class="token string">&#39;slot&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">genSlot</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// component or element</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5728\u8FDB\u884C<code>if</code>\u5224\u65AD\u7684\u65F6\u5019\uFF0C<code>v-for</code>\u662F\u6BD4<code>v-if</code>\u5148\u8FDB\u884C\u5224\u65AD</p><p>\u6700\u7EC8\u7ED3\u8BBA\uFF1A<code>v-for</code>\u4F18\u5148\u7EA7\u6BD4<code>v-if</code>\u9AD8</p><h2 id="\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u4E09\u3001\u6CE8\u610F\u4E8B\u9879</h2><ol><li>\u6C38\u8FDC\u4E0D\u8981\u628A <code>v-if</code> \u548C <code>v-for</code> \u540C\u65F6\u7528\u5728\u540C\u4E00\u4E2A\u5143\u7D20\u4E0A\uFF0C\u5E26\u6765\u6027\u80FD\u65B9\u9762\u7684\u6D6A\u8D39\uFF08\u6BCF\u6B21\u6E32\u67D3\u90FD\u4F1A\u5148\u5FAA\u73AF\u518D\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF09</li><li>\u5982\u679C\u907F\u514D\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5219\u5728\u5916\u5C42\u5D4C\u5957<code>template</code>\uFF08\u9875\u9762\u6E32\u67D3\u4E0D\u751F\u6210<code>dom</code>\u8282\u70B9\uFF09\uFF0C\u5728\u8FD9\u4E00\u5C42\u8FDB\u884Cv-if\u5224\u65AD\uFF0C\u7136\u540E\u5728\u5185\u90E8\u8FDB\u884Cv-for\u5FAA\u73AF</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in items&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u5982\u679C\u6761\u4EF6\u51FA\u73B0\u5728\u5FAA\u73AF\u5185\u90E8\uFF0C\u53EF\u901A\u8FC7\u8BA1\u7B97\u5C5E\u6027<code>computed</code>\u63D0\u524D\u8FC7\u6EE4\u6389\u90A3\u4E9B\u4E0D\u9700\u8981\u663E\u793A\u7684\u9879</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">items</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> item<span class="token punctuation">.</span>isShow
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,35);function t(e,o){return p}var l=n(a,[["render",t],["__file","if_for.html.vue"]]);export{l as default};