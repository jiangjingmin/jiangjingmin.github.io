import{_ as n,e as s}from"./app.6e1280c8.js";const a={},p=s(`<h1 id="new-\u64CD\u4F5C\u7B26\u5177\u4F53\u5E72\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new-\u64CD\u4F5C\u7B26\u5177\u4F53\u5E72\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> new \u64CD\u4F5C\u7B26\u5177\u4F53\u5E72\u4E86\u4EC0\u4E48\uFF1F</h1><p><img src="https://static.vue-js.com/880d0010-7a39-11eb-85f6-6fac77c0c9b3.png" alt="00"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C<code>new</code>\u64CD\u4F5C\u7B26\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u7ED9\u5B9A\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u5BF9\u8C61</p><p>\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span>  <span class="token comment">// Person {name: &quot;Tom&quot;, age: 20}</span>
t<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Tom&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF1A</p><ul><li><code>new</code> \u901A\u8FC7\u6784\u9020\u51FD\u6570 <code>Person</code> \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u4E2D\u7684\u5C5E\u6027</li><li><code>new</code> \u901A\u8FC7\u6784\u9020\u51FD\u6570 <code>Person</code> \u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6784\u9020\u51FD\u6570\u539F\u578B\u94FE\u4E2D\u7684\u5C5E\u6027\uFF08\u5373\u5B9E\u4F8B\u4E0E\u6784\u9020\u51FD\u6570\u901A\u8FC7\u539F\u578B\u94FE\u8FDE\u63A5\u4E86\u8D77\u6765\uFF09</li></ul><p>\u73B0\u5728\u5728\u6784\u5EFA\u51FD\u6570\u4E2D\u663E\u5F0F\u52A0\u4E0A\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u503C\uFF0C\u7136\u800C\u8FD9\u4E2A\u8FD4\u56DE\u503C\u5E76\u6CA1\u6709\u4F5C\u7528</p><p>\u4E0B\u9762\u5728\u6784\u9020\u51FD\u6570\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Test { name: &#39;xxx&#39; }</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">26</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token comment">// { age: 26 }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;undefined&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6784\u9020\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u503C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FD4\u56DE\u503C\u4F1A\u88AB\u6B63\u5E38\u4F7F\u7528</p><h2 id="\u4E8C\u3001\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6D41\u7A0B" aria-hidden="true">#</a> \u4E8C\u3001\u6D41\u7A0B</h2><p>\u4ECE\u4E0A\u9762\u4ECB\u7ECD\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>new</code>\u5173\u952E\u5B57\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u7684\u5DE5\u4F5C\uFF1A</p><ul><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61<code>obj</code></p></li><li><p>\u5C06\u5BF9\u8C61\u4E0E\u6784\u5EFA\u51FD\u6570\u901A\u8FC7\u539F\u578B\u94FE\u8FDE\u63A5\u8D77\u6765</p></li><li><p>\u5C06\u6784\u5EFA\u51FD\u6570\u4E2D\u7684<code>this</code>\u7ED1\u5B9A\u5230\u65B0\u5EFA\u7684\u5BF9\u8C61<code>obj</code>\u4E0A</p></li><li><p>\u6839\u636E\u6784\u5EFA\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B\u4F5C\u5224\u65AD\uFF0C\u5982\u679C\u662F\u539F\u59CB\u503C\u5219\u88AB\u5FFD\u7565\uFF0C\u5982\u679C\u662F\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u9700\u8981\u6B63\u5E38\u5904\u7406</p></li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">)</span>  <span class="token comment">// Person {name: &quot;Tom&quot;, age: 20}</span>
t<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Tom&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/b429b990-7a39-11eb-85f6-6fac77c0c9b3.png" alt="01"></p><h2 id="\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u4E09\u3001\u624B\u5199new\u64CD\u4F5C\u7B26</h2><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u6E05\u695A\u5730\u638C\u63E1\u4E86<code>new</code>\u7684\u6267\u884C\u8FC7\u7A0B</p><p>\u90A3\u4E48\u6211\u4EEC\u5C31\u52A8\u624B\u6765\u5B9E\u73B0\u4E00\u4E0B<code>new</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2.\u65B0\u5BF9\u8C61\u539F\u578B\u6307\u5411\u6784\u9020\u51FD\u6570\u539F\u578B\u5BF9\u8C61</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
    <span class="token comment">// 3.\u5C06\u6784\u5EFA\u51FD\u6570\u7684this\u6307\u5411\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 4.\u6839\u636E\u8FD4\u56DE\u503C\u5224\u65AD</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u6D4B\u8BD5\u4E00\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mynew</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> func<span class="token punctuation">.</span>prototype
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">mynew</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;huihui&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// Person {name: &quot;huihui&quot;, age: 123}</span>
p<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// huihui</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4EE3\u7801\u867D\u7136\u5F88\u77ED\uFF0C\u4F46\u662F\u80FD\u591F\u6A21\u62DF\u5B9E\u73B0<code>new</code></p>`,28);function e(t,o){return p}var l=n(a,[["render",e],["__file","new.html.vue"]]);export{l as default};
