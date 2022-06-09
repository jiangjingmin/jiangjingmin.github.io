import{_ as n,e as s}from"./app.2989aa3c.js";const a={},p=s(`<h1 id="\u8BF4\u8BF4\u4F60\u5BF9redux\u7684\u7406\u89E3-\u5176\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4F60\u5BF9redux\u7684\u7406\u89E3-\u5176\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u8BF4\u8BF4\u4F60\u5BF9Redux\u7684\u7406\u89E3\uFF1F\u5176\u5DE5\u4F5C\u539F\u7406\uFF1F</h1><p><img src="https://static.vue-js.com/52394be0-e2a5-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>React</code>\u662F\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\uFF0C\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u6E32\u67D3<code>DOM</code>\u7684\u8FC7\u7A0B</p><p>\u800C\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u4F1A\u5B58\u5728\u5F88\u591A\u4E2A\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u7684<code>state</code>\u662F\u7531\u81EA\u8EAB\u8FDB\u884C\u7BA1\u7406\uFF0C\u5305\u62EC\u7EC4\u4EF6\u5B9A\u4E49\u81EA\u8EAB\u7684<code>state</code>\u3001\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u901A\u8FC7<code>props</code>\u4F20\u9012\u3001\u4F7F\u7528<code>Context</code>\u5B9E\u73B0\u6570\u636E\u5171\u4EAB</p><p>\u5982\u679C\u8BA9\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5B58\u50A8\u81EA\u8EAB\u76F8\u5173\u7684\u72B6\u6001\uFF0C\u7406\u8BBA\u4E0A\u6765\u8BB2\u4E0D\u4F1A\u5F71\u54CD\u5E94\u7528\u7684\u8FD0\u884C\uFF0C\u4F46\u5728\u5F00\u53D1\u53CA\u540E\u7EED\u7EF4\u62A4\u9636\u6BB5\uFF0C\u6211\u4EEC\u5C06\u82B1\u8D39\u5927\u91CF\u7CBE\u529B\u53BB\u67E5\u8BE2\u72B6\u6001\u7684\u53D8\u5316\u8FC7\u7A0B</p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u5C06\u6240\u6709\u7684\u72B6\u6001\u8FDB\u884C\u96C6\u4E2D\u7BA1\u7406\uFF0C\u5F53\u9700\u8981\u66F4\u65B0\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u4EC5\u9700\u8981\u5BF9\u8FD9\u4E2A\u7BA1\u7406\u96C6\u4E2D\u5904\u7406\uFF0C\u800C\u4E0D\u7528\u53BB\u5173\u5FC3\u72B6\u6001\u662F\u5982\u4F55\u5206\u53D1\u5230\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8\u7684</p><p><code>redux</code>\u5C31\u662F\u4E00\u4E2A\u5B9E\u73B0\u4E0A\u8FF0\u96C6\u4E2D\u7BA1\u7406\u7684\u5BB9\u5668\uFF0C\u9075\u5FAA\u4E09\u5927\u57FA\u672C\u539F\u5219\uFF1A</p><ul><li>\u5355\u4E00\u6570\u636E\u6E90</li><li>state \u662F\u53EA\u8BFB\u7684</li><li>\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539</li></ul><p>\u6CE8\u610F\u7684\u662F\uFF0C<code>redux</code>\u5E76\u4E0D\u662F\u53EA\u5E94\u7528\u5728<code>react</code>\u4E2D\uFF0C\u8FD8\u4E0E\u5176\u4ED6\u754C\u9762\u5E93\u4E00\u8D77\u4F7F\u7528\uFF0C\u5982<code>Vue</code></p><h2 id="\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u5DE5\u4F5C\u539F\u7406</h2><p><code>redux </code>\u8981\u6C42\u6211\u4EEC\u628A\u6570\u636E\u90FD\u653E\u5728 <code>store </code>\u516C\u5171\u5B58\u50A8\u7A7A\u95F4</p><p>\u4E00\u4E2A\u7EC4\u4EF6\u6539\u53D8\u4E86 <code>store</code> \u91CC\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u5C31\u80FD\u611F\u77E5\u5230 <code>store </code>\u7684\u53D8\u5316\uFF0C\u518D\u6765\u53D6\u6570\u636E\uFF0C\u4ECE\u800C\u95F4\u63A5\u7684\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u6570\u636E\u4F20\u9012\u7684\u529F\u80FD</p><p>\u5DE5\u4F5C\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u6839\u636E\u6D41\u7A0B\u56FE\uFF0C\u53EF\u4EE5\u60F3\u8C61\uFF0C<code>React Components</code> \u662F\u501F\u4E66\u7684\u7528\u6237\uFF0C <code>Action Creactor</code> \u662F\u501F\u4E66\u65F6\u8BF4\u7684\u8BDD(\u501F\u4EC0\u4E48\u4E66)\uFF0C <code>Store</code> \u662F\u56FE\u4E66\u9986\u7BA1\u7406\u5458\uFF0C<code>Reducer</code> \u662F\u8BB0\u5F55\u672C(\u501F\u4EC0\u4E48\u4E66\uFF0C\u8FD8\u4EC0\u4E48\u4E66\uFF0C\u5728\u54EA\u513F\uFF0C\u9700\u8981\u67E5\u4E00\u4E0B)\uFF0C <code>state</code> \u662F\u4E66\u7C4D\u4FE1\u606F</p><p>\u6574\u4E2A\u6D41\u7A0B\u5C31\u662F\u501F\u4E66\u7684\u7528\u6237\u9700\u8981\u5148\u5B58\u5728\uFF0C\u7136\u540E\u9700\u8981\u501F\u4E66\uFF0C\u9700\u8981\u4E00\u53E5\u8BDD\u6765\u63CF\u8FF0\u501F\u4EC0\u4E48\u4E66\uFF0C\u56FE\u4E66\u9986\u7BA1\u7406\u5458\u542C\u5230\u540E\u9700\u8981\u67E5\u4E00\u4E0B\u8BB0\u5F55\u672C\uFF0C\u4E86\u89E3\u56FE\u4E66\u7684\u4F4D\u7F6E\uFF0C\u6700\u540E\u56FE\u4E66\u9986\u7BA1\u7406\u5458\u4F1A\u628A\u8FD9\u672C\u4E66\u7ED9\u5230\u8FD9\u4E2A\u501F\u4E66\u4EBA</p><p>\u8F6C\u6362\u4E3A\u4EE3\u7801\u662F\uFF0C<code>React Components</code> \u9700\u8981\u83B7\u53D6\u4E00\u4E9B\u6570\u636E, \u7136\u540E\u5B83\u5C31\u544A\u77E5 <code>Store</code> \u9700\u8981\u83B7\u53D6\u6570\u636E\uFF0C\u8FD9\u5C31\u662F\u5C31\u662F <code>Action Creactor</code> , <code>Store</code> \u63A5\u6536\u5230\u4E4B\u540E\u53BB <code>Reducer</code> \u67E5\u4E00\u4E0B\uFF0C <code>Reducer</code> \u4F1A\u544A\u8BC9 <code>Store</code> \u5E94\u8BE5\u7ED9\u8FD9\u4E2A\u7EC4\u4EF6\u4EC0\u4E48\u6570\u636E</p><h2 id="\u4E09\u3001\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u4E09\u3001\u5982\u4F55\u4F7F\u7528</h2><p>\u521B\u5EFA\u4E00\u4E2A<code>store</code>\u7684\u516C\u5171\u6570\u636E\u533A\u57DF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span> <span class="token comment">// \u5F15\u5165\u4E00\u4E2A\u7B2C\u4E09\u65B9\u7684\u65B9\u6CD5</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u521B\u5EFA\u6570\u636E\u7684\u516C\u5171\u5B58\u50A8\u533A\u57DF\uFF08\u7BA1\u7406\u5458\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u8BB0\u5F55\u672C\u53BB\u8F85\u52A9\u7BA1\u7406\u6570\u636E\uFF0C\u4E5F\u5C31\u662F<code>reduecer</code>\uFF0C\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570<code>state</code>\uFF0C<code>action</code>\uFF0C\u8FD4\u56DE<code>state</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5C06\u8BB0\u5F55\u672C\u4F20\u9012\u7ED9<code>store</code>\uFF0C\u4E24\u8005\u5EFA\u7ACB\u8FDE\u63A5\u3002\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u60F3\u8981\u83B7\u53D6<code>store</code>\u91CC\u9762\u7684\u6570\u636E\uFF0C\u5219\u901A\u8FC7<code>store.getState()</code>\u6765\u83B7\u53D6\u5F53\u524D<code>state</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\u518D\u770B\u770B\u5982\u4F55\u66F4\u6539<code>store</code>\u91CC\u9762\u6570\u636E\uFF0C\u662F\u901A\u8FC7<code>dispatch</code>\u6765\u6D3E\u53D1<code>action</code>\uFF0C\u901A\u5E38<code>action</code>\u4E2D\u90FD\u4F1A\u6709<code>type</code>\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u643A\u5E26\u5176\u4ED6\u7684\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;INCREMENT&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">dispath</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;DECREMENT&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;ADD_NUMBER&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0B\u9762\u518D\u6765\u770B\u770B\u4FEE\u6539<code>reducer</code>\u4E2D\u7684\u5904\u7406\u903B\u8F91\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;INCREMENT&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;DECREMENT&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;ADD_NUMBER&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> action<span class="token punctuation">.</span>number<span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> 
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6CE8\u610F\uFF0C<code>reducer</code>\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\uFF0C\u4E0D\u9700\u8981\u76F4\u63A5\u4FEE\u6539<code>state</code></p><p>\u8FD9\u6837\u6D3E\u53D1<code>action</code>\u4E4B\u540E\uFF0C\u65E2\u53EF\u4EE5\u901A\u8FC7<code>store.subscribe</code>\u76D1\u542C<code>store</code>\u7684\u53D8\u5316\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728<code>React</code>\u9879\u76EE\u4E2D\uFF0C\u4F1A\u642D\u914D<code>react-redux</code>\u8FDB\u884C\u4F7F\u7528</p><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> redux <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;redux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFAreducer</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;INCREMENT&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;DECREMENT&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;ADD_NUMBER&quot;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> action<span class="token punctuation">.</span>number<span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span> 
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6839\u636Ereducer\u521B\u5EFAstore</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>

store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4FEE\u6539store\u4E2D\u7684state</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;INCREMENT&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(store.getState());</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;DECREMENT&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(store.getState());</span>

store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;ADD_NUMBER&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(store.getState());</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><ul><li>createStore\u53EF\u4EE5\u5E2E\u52A9\u521B\u5EFA store</li><li>store.dispatch \u5E2E\u52A9\u6D3E\u53D1 action , action \u4F1A\u4F20\u9012\u7ED9 store</li><li>store.getState \u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5E2E\u52A9\u83B7\u53D6 store \u91CC\u8FB9\u6240\u6709\u7684\u6570\u636E\u5185\u5BB9</li><li>store.subscrible \u65B9\u6CD5\u8BA2\u9605 store \u7684\u6539\u53D8\uFF0C\u53EA\u8981 store \u53D1\u751F\u6539\u53D8\uFF0C store.subscrible \u8FD9\u4E2A\u51FD\u6570\u63A5\u6536\u7684\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u5C31\u4F1A\u88AB\u6267\u884C</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://cn.redux.js.org/docs/introduction/</li><li>https://www.redux.org.cn/docs/basics/Actions.html</li><li>https://lulujianglab.com/posts/\u5927\u767D\u8BDD\u89E3\u6790 Redux \u3001 redux-thunk \u3001redux-saga \u548C react-redux</li></ul>`,41);function e(t,o){return p}var r=n(a,[["render",e],["__file","redux.html.vue"]]);export{r as default};
