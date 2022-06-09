import{_ as n,c as s}from"./app.8c5ff8f0.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-vue\u4E2D\u7684-nexttick\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-vue\u4E2D\u7684-nexttick\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1AVue\u4E2D\u7684$nextTick\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h1><p><img src="https://static.vue-js.com/76484d30-3aba-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001nexttick\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001nexttick\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001NextTick\u662F\u4EC0\u4E48</h2><p>\u5B98\u65B9\u5BF9\u5176\u7684\u5B9A\u4E49</p><blockquote><p>\u5728\u4E0B\u6B21 DOM \u66F4\u65B0\u5FAA\u73AF\u7ED3\u675F\u4E4B\u540E\u6267\u884C\u5EF6\u8FDF\u56DE\u8C03\u3002\u5728\u4FEE\u6539\u6570\u636E\u4E4B\u540E\u7ACB\u5373\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u83B7\u53D6\u66F4\u65B0\u540E\u7684 DOM</p></blockquote><p>\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u6210\uFF0C<code>Vue</code> \u5728\u66F4\u65B0 <code>DOM</code> \u65F6\u662F\u5F02\u6B65\u6267\u884C\u7684\u3002\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C<code>Vue</code>\u5C06\u5F00\u542F\u4E00\u4E2A\u5F02\u6B65\u66F4\u65B0\u961F\u5217\uFF0C\u89C6\u56FE\u9700\u8981\u7B49\u961F\u5217\u4E2D\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u518D\u7EDF\u4E00\u8FDB\u884C\u66F4\u65B0</p><p>\u4E3E\u4F8B\u4E00\u4E0B</p><p><code>Html</code>\u7ED3\u6784</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ message }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6784\u5EFA\u4E00\u4E2A<code>vue</code>\u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u539F\u59CB\u503C&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4FEE\u6539<code>message</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C1&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C2&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u65F6\u5019\u60F3\u83B7\u53D6\u9875\u9762\u6700\u65B0\u7684<code>DOM</code>\u8282\u70B9\uFF0C\u5374\u53D1\u73B0\u83B7\u53D6\u5230\u7684\u662F\u65E7\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// \u539F\u59CB\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u662F\u56E0\u4E3A<code>message</code>\u6570\u636E\u5728\u53D1\u73B0\u53D8\u5316\u7684\u65F6\u5019\uFF0C<code>vue</code>\u5E76\u4E0D\u4F1A\u7ACB\u523B\u53BB\u66F4\u65B0<code>Dom</code>\uFF0C\u800C\u662F\u5C06\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C\u653E\u5728\u4E86\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\u961F\u5217\u4E2D</p><p>\u5982\u679C\u6211\u4EEC\u4E00\u76F4\u4FEE\u6539\u76F8\u540C\u6570\u636E\uFF0C\u5F02\u6B65\u64CD\u4F5C\u961F\u5217\u8FD8\u4F1A\u8FDB\u884C\u53BB\u91CD</p><p>\u7B49\u5F85\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F1A\u5C06\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6\u62FF\u6765\u8FDB\u884C\u5904\u7406\uFF0C\u8FDB\u884C<code>DOM</code>\u7684\u66F4\u65B0</p><h4 id="\u4E3A\u4EC0\u4E48\u8981\u6709nexttick" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u6709nexttick" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u6709nexttick</h4><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    num <span class="token operator">=</span> i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u6CA1\u6709 <code>nextTick</code> \u66F4\u65B0\u673A\u5236\uFF0C\u90A3\u4E48 <code>num</code> \u6BCF\u6B21\u66F4\u65B0\u503C\u90FD\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0(\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u4E5F\u5C31\u662F\u4F1A\u66F4\u65B010\u4E07\u6B21\u89C6\u56FE)\uFF0C\u6709\u4E86<code>nextTick</code>\u673A\u5236\uFF0C\u53EA\u9700\u8981\u66F4\u65B0\u4E00\u6B21\uFF0C\u6240\u4EE5<code>nextTick</code>\u672C\u8D28\u662F\u4E00\u79CD\u4F18\u5316\u7B56\u7565</p><h2 id="\u4E8C\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u573A\u666F</h2><p>\u5982\u679C\u60F3\u8981\u5728\u4FEE\u6539\u6570\u636E\u540E\u7ACB\u523B\u5F97\u5230\u66F4\u65B0\u540E\u7684<code>DOM</code>\u7ED3\u6784\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>Vue.nextTick()</code></p><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\uFF1A\u56DE\u8C03\u51FD\u6570\uFF08\u53EF\u4EE5\u83B7\u53D6\u6700\u8FD1\u7684<code>DOM</code>\u7ED3\u6784\uFF09</p><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\uFF1A\u6267\u884C\u51FD\u6570\u4E0A\u4E0B\u6587</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4FEE\u6539\u6570\u636E</span>
vm<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C&#39;</span>
<span class="token comment">// DOM \u8FD8\u6CA1\u6709\u66F4\u65B0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// \u539F\u59CB\u7684\u503C</span>
Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// DOM \u66F4\u65B0\u4E86</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// \u4FEE\u6539\u540E\u7684\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7EC4\u4EF6\u5185\u4F7F\u7528 <code>vm.$nextTick()</code> \u5B9E\u4F8B\u65B9\u6CD5\u53EA\u9700\u8981\u901A\u8FC7<code>this.$nextTick()</code>\uFF0C\u5E76\u4E14\u56DE\u8C03\u51FD\u6570\u4E2D\u7684 <code>this</code> \u5C06\u81EA\u52A8\u7ED1\u5B9A\u5230\u5F53\u524D\u7684 <code>Vue</code> \u5B9E\u4F8B\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u539F\u59CB\u7684\u503C&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u4FEE\u6539\u540E\u7684\u503C&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>$nextTick()</code> \u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u662F\u7528<code>async/await</code>\u5B8C\u6210\u76F8\u540C\u4F5C\u7528\u7684\u4E8B\u60C5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;\u4FEE\u6539\u540E\u7684\u503C&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u539F\u59CB\u7684\u503C&#39;</span>
<span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;\u4FEE\u6539\u540E\u7684\u503C&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E09\u3001\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u4E09\u3001\u5B9E\u73B0\u539F\u7406</h2><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code>/src/core/util/next-tick.js</code></p><p><code>callbacks</code>\u4E5F\u5C31\u662F\u5F02\u6B65\u64CD\u4F5C\u961F\u5217</p><p><code>callbacks</code>\u65B0\u589E\u56DE\u8C03\u51FD\u6570\u540E\u53C8\u6267\u884C\u4E86<code>timerFunc</code>\u51FD\u6570\uFF0C<code>pending</code>\u662F\u7528\u6765\u6807\u8BC6\u540C\u4E00\u4E2A\u65F6\u95F4\u53EA\u80FD\u6267\u884C\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve<span class="token punctuation">;</span>

  <span class="token comment">// cb \u56DE\u8C03\u51FD\u6570\u4F1A\u7ECF\u7EDF\u4E00\u5904\u7406\u538B\u5165 callbacks \u6570\u7EC4</span>
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7ED9 cb \u56DE\u8C03\u51FD\u6570\u6267\u884C\u52A0\u4E0A\u4E86 try-catch \u9519\u8BEF\u5904\u7406</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6267\u884C\u5F02\u6B65\u5EF6\u8FDF\u51FD\u6570 timerFunc</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">timerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F53 nextTick \u6CA1\u6709\u4F20\u5165\u51FD\u6570\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise \u5316\u7684\u8C03\u7528</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><code>timerFunc</code>\u51FD\u6570\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u662F\u6839\u636E\u5F53\u524D\u73AF\u5883\u652F\u6301\u4EC0\u4E48\u65B9\u6CD5\u5219\u786E\u5B9A\u8C03\u7528\u54EA\u4E2A\uFF0C\u5206\u522B\u6709\uFF1A</p><p><code>Promise.then</code>\u3001<code>MutationObserver</code>\u3001<code>setImmediate</code>\u3001<code>setTimeout</code></p><p>\u901A\u8FC7\u4E0A\u9762\u4EFB\u610F\u4E00\u79CD\u65B9\u6CD5\uFF0C\u8FDB\u884C\u964D\u7EA7\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5224\u65AD1\uFF1A\u662F\u5426\u539F\u751F\u652F\u6301Promise</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIE <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> MutationObserver <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token function">isNative</span><span class="token punctuation">(</span>MutationObserver<span class="token punctuation">)</span> <span class="token operator">||</span>
  MutationObserver<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object MutationObserverConstructor]&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5224\u65AD2\uFF1A\u662F\u5426\u539F\u751F\u652F\u6301MutationObserver</span>
  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token keyword">const</span> textNode <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">)</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>textNode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    counter <span class="token operator">=</span> <span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span>
    textNode<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  isUsingMicroTask <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> setImmediate <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isNative</span><span class="token punctuation">(</span>setImmediate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5224\u65AD3\uFF1A\u662F\u5426\u539F\u751F\u652F\u6301setImmediate</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5224\u65AD4\uFF1A\u4E0A\u9762\u90FD\u4E0D\u884C\uFF0C\u76F4\u63A5\u7528setTimeout</span>
  <span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u65E0\u8BBA\u662F\u5FAE\u4EFB\u52A1\u8FD8\u662F\u5B8F\u4EFB\u52A1\uFF0C\u90FD\u4F1A\u653E\u5230<code>flushCallbacks</code>\u4F7F\u7528</p><p>\u8FD9\u91CC\u5C06<code>callbacks</code>\u91CC\u9762\u7684\u51FD\u6570\u590D\u5236\u4E00\u4EFD\uFF0C\u540C\u65F6<code>callbacks</code>\u7F6E\u7A7A</p><p>\u4F9D\u6B21\u6267\u884C<code>callbacks</code>\u91CC\u9762\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">flushCallbacks</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  pending <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">const</span> copies <span class="token operator">=</span> callbacks<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  callbacks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> copies<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    copies<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\u5C0F\u7ED3\uFF1A</strong></p><ol><li>\u628A\u56DE\u8C03\u51FD\u6570\u653E\u5165callbacks\u7B49\u5F85\u6267\u884C</li><li>\u5C06\u6267\u884C\u51FD\u6570\u653E\u5230\u5FAE\u4EFB\u52A1\u6216\u8005\u5B8F\u4EFB\u52A1\u4E2D</li><li>\u4E8B\u4EF6\u5FAA\u73AF\u5230\u4E86\u5FAE\u4EFB\u52A1\u6216\u8005\u5B8F\u4EFB\u52A1\uFF0C\u6267\u884C\u51FD\u6570\u4F9D\u6B21\u6267\u884Ccallbacks\u4E2D\u7684\u56DE\u8C03</li></ol><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://juejin.cn/post/6844904147804749832</li></ul>`,49);function t(e,o){return p}var l=n(a,[["render",t],["__file","nexttick.html.vue"]]);export{l as default};
