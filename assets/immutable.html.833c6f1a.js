import{_ as n,c as s}from"./app.8c5ff8f0.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9immutable\u7684\u7406\u89E3-\u5982\u4F55\u5E94\u7528\u5728react\u9879\u76EE\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9immutable\u7684\u7406\u89E3-\u5982\u4F55\u5E94\u7528\u5728react\u9879\u76EE\u4E2D" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9immutable\u7684\u7406\u89E3\uFF1F\u5982\u4F55\u5E94\u7528\u5728react\u9879\u76EE\u4E2D\uFF1F</h1><p><img src="https://static.vue-js.com/797e9470-ea3f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>Immutable\uFF0C\u4E0D\u53EF\u6539\u53D8\u7684\uFF0C\u5728\u8BA1\u7B97\u673A\u4E2D\uFF0C\u5373\u6307\u4E00\u65E6\u521B\u5EFA\uFF0C\u5C31\u4E0D\u80FD\u518D\u88AB\u66F4\u6539\u7684\u6570\u636E</p><p>\u5BF9 <code>Immutable </code>\u5BF9\u8C61\u7684\u4EFB\u4F55\u4FEE\u6539\u6216\u6DFB\u52A0\u5220\u9664\u64CD\u4F5C\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 <code>Immutable </code>\u5BF9\u8C61</p><p><code>Immutable</code> \u5B9E\u73B0\u7684\u539F\u7406\u662F <code>Persistent Data Structure</code>\uFF08\u6301\u4E45\u5316\u6570\u636E\u7ED3\u6784\uFF09:</p><ul><li>\u7528\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u6765\u4FDD\u5B58\u6570\u636E</li><li>\u5F53\u6570\u636E\u88AB\u4FEE\u6539\u65F6\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u662F\u65B0\u7684\u5BF9\u8C61\u4F1A\u5C3D\u53EF\u80FD\u7684\u5229\u7528\u4E4B\u524D\u7684\u6570\u636E\u7ED3\u6784\u800C\u4E0D\u4F1A\u5BF9\u5185\u5B58\u9020\u6210\u6D6A\u8D39</li></ul><p>\u4E5F\u5C31\u662F\u4F7F\u7528\u65E7\u6570\u636E\u521B\u5EFA\u65B0\u6570\u636E\u65F6\uFF0C\u8981\u4FDD\u8BC1\u65E7\u6570\u636E\u540C\u65F6\u53EF\u7528\u4E14\u4E0D\u53D8\uFF0C\u540C\u65F6\u4E3A\u4E86\u907F\u514D <code>deepCopy </code>\u628A\u6240\u6709\u8282\u70B9\u90FD\u590D\u5236\u4E00\u904D\u5E26\u6765\u7684\u6027\u80FD\u635F\u8017\uFF0C<code>Immutable</code> \u4F7F\u7528\u4E86 <code>Structural Sharing</code>\uFF08\u7ED3\u6784\u5171\u4EAB\uFF09</p><p>\u5982\u679C\u5BF9\u8C61\u6811\u4E2D\u4E00\u4E2A\u8282\u70B9\u53D1\u751F\u53D8\u5316\uFF0C\u53EA\u4FEE\u6539\u8FD9\u4E2A\u8282\u70B9\u548C\u53D7\u5B83\u5F71\u54CD\u7684\u7236\u8282\u70B9\uFF0C\u5176\u5B83\u8282\u70B9\u5219\u8FDB\u884C\u5171\u4EAB</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://pic4.zhimg.com/80/2b4c801a7b40eefcd4ee6767fb984fdf_720w.gif" alt=""></p><h2 id="\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u4F7F\u7528</h2><p>\u4F7F\u7528<code>Immutable</code>\u5BF9\u8C61\u6700\u4E3B\u8981\u7684\u5E93\u662F<code>immutable.js</code></p><p>immutable.js \u662F\u4E00\u4E2A\u5B8C\u5168\u72EC\u7ACB\u7684\u5E93\uFF0C\u65E0\u8BBA\u57FA\u4E8E\u4EC0\u4E48\u6846\u67B6\u90FD\u53EF\u4EE5\u7528\u5B83</p><p>\u5176\u51FA\u73B0\u573A\u666F\u5728\u4E8E\u5F25\u8865 Javascript \u6CA1\u6709\u4E0D\u53EF\u53D8\u6570\u636E\u7ED3\u6784\u7684\u95EE\u9898\uFF0C\u901A\u8FC7 structural sharing\u6765\u89E3\u51B3\u7684\u6027\u80FD\u95EE\u9898</p><p>\u5185\u90E8\u63D0\u4F9B\u4E86\u4E00\u5957\u5B8C\u6574\u7684 Persistent Data Structure\uFF0C\u8FD8\u6709\u5F88\u591A\u6613\u7528\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982<code>Collection</code>\u3001<code>List</code>\u3001<code>Map</code>\u3001<code>Set</code>\u3001<code>Record</code>\u3001<code>Seq</code>\uFF0C\u5176\u4E2D\uFF1A</p><ul><li><p>List: \u6709\u5E8F\u7D22\u5F15\u96C6\uFF0C\u7C7B\u4F3C JavaScript \u4E2D\u7684 Array</p></li><li><p>Map: \u65E0\u5E8F\u7D22\u5F15\u96C6\uFF0C\u7C7B\u4F3C JavaScript \u4E2D\u7684 Object</p></li><li><p>Set: \u6CA1\u6709\u91CD\u590D\u503C\u7684\u96C6\u5408</p></li></ul><p>\u4E3B\u8981\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><ul><li>fromJS()\uFF1A\u5C06\u4E00\u4E2Ajs\u6570\u636E\u8F6C\u6362\u4E3AImmutable\u7C7B\u578B\u7684\u6570\u636E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&#39;234&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>toJS()\uFF1A\u5C06\u4E00\u4E2AImmutable\u6570\u636E\u8F6C\u6362\u4E3AJS\u7C7B\u578B\u7684\u6570\u636E</li><li>is()\uFF1A\u5BF9\u4E24\u4E2A\u5BF9\u8C61\u8FDB\u884C\u6BD4\u8F83</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Map<span class="token punctuation">,</span> is <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immutable&#39;</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> map2 <span class="token operator">=</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
map1 <span class="token operator">===</span> map2   <span class="token comment">//false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> map2<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">is</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> map2<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><p>get(key)\uFF1A\u5BF9\u6570\u636E\u6216\u5BF9\u8C61\u53D6\u503C</p></li><li><p>getIn([]) \uFF1A\u5BF9\u5D4C\u5957\u5BF9\u8C61\u6216\u6570\u7EC4\u53D6\u503C\uFF0C\u4F20\u53C2\u4E3A\u6570\u7EC4\uFF0C\u8868\u793A\u4F4D\u7F6E</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> abs <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
abs<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
abs<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5B50\u7EA7\u6CA1\u6709\u503C</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
arr<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5B50\u7EA7\u6CA1\u6709\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li></li></ul><p>\u5982\u4E0B\u4F8B\u5B50\uFF1A\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Immutable <span class="token keyword">from</span> <span class="token string">&#39;immutable&#39;</span><span class="token punctuation">;</span>
foo <span class="token operator">=</span> Immutable<span class="token punctuation">.</span><span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar <span class="token operator">=</span> foo<span class="token punctuation">.</span><span class="token function">setIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// \u4F7F\u7528 setIn \u8D4B\u503C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">getIn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F7F\u7528 getIn \u53D6\u503C\uFF0C\u6253\u5370 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo <span class="token operator">===</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  \u6253\u5370 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u6362\u5230\u539F\u751F\u7684<code>js</code>\uFF0C\u5219\u5BF9\u5E94\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> foo<span class="token punctuation">;</span>
bar<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6253\u5370 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo <span class="token operator">===</span> bar<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//  \u6253\u5370 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E09\u3001\u5728react\u4E2D\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5728react\u4E2D\u5E94\u7528" aria-hidden="true">#</a> \u4E09\u3001\u5728React\u4E2D\u5E94\u7528</h2><p>\u4F7F\u7528 <code>Immutable </code>\u53EF\u4EE5\u7ED9 <code>React</code> \u5E94\u7528\u5E26\u6765\u6027\u80FD\u7684\u4F18\u5316\uFF0C\u4E3B\u8981\u4F53\u73B0\u5728\u51CF\u5C11\u6E32\u67D3\u7684\u6B21\u6570</p><p>\u5728\u505A<code>react</code>\u6027\u80FD\u4F18\u5316\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u907F\u514D\u91CD\u590D\u6E32\u67D3\uFF0C\u6211\u4EEC\u4F1A\u5728<code>shouldComponentUpdate()</code>\u4E2D\u505A\u5BF9\u6BD4\uFF0C\u5F53\u8FD4\u56DE<code>true</code>\u6267\u884C<code>render</code>\u65B9\u6CD5</p><p><code>Immutable</code>\u901A\u8FC7<code>is</code>\u65B9\u6CD5\u5219\u53EF\u4EE5\u5B8C\u6210\u5BF9\u6BD4\uFF0C\u800C\u65E0\u9700\u50CF\u4E00\u6837\u901A\u8FC7\u6DF1\u5EA6\u6BD4\u8F83\u7684\u65B9\u5F0F\u6BD4\u8F83</p><p>\u5728\u4F7F\u7528<code>redux</code>\u8FC7\u7A0B\u4E2D\u4E5F\u53EF\u4EE5\u7ED3\u5408<code>Immutable</code>\uFF0C\u4E0D\u4F7F\u7528<code>Immutable</code>\u524D\u4FEE\u6539\u4E00\u4E2A\u6570\u636E\u9700\u8981\u505A\u4E00\u4E2A\u6DF1\u62F7\u8D1D</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">&#39;_&#39;</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Component <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">times</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">handleAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> data <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span>times <span class="token operator">=</span> data<span class="token punctuation">.</span>times <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4F7F\u7528 Immutable \u540E\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">times</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">handleAdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&#39;times&#39;</span><span class="token punctuation">,</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> v <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8FD9\u65F6\u7684 times \u5E76\u4E0D\u4F1A\u6539\u53D8</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;times&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u540C\u7406\uFF0C\u5728<code>redux</code>\u4E2D\u4E5F\u53EF\u4EE5\u5C06\u6570\u636E\u8FDB\u884C<code>fromJS</code>\u5904\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> constants <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>fromJS<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;immutable&#39;</span>
<span class="token keyword">const</span> defaultState <span class="token operator">=</span> <span class="token function">fromJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//\u5C06\u6570\u636E\u8F6C\u5316\u6210immutable\u6570\u636E</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">focused</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mouseIn</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">totalPage</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token operator">=</span>defaultState<span class="token punctuation">,</span>action</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_FOCUS</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;focused&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u66F4\u6539immutable\u6570\u636E</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_HOME_ACTIVE</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">SEARCH_BLUR</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;focused&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_LIST</span><span class="token operator">:</span>
            <span class="token comment">// return state.set(&#39;list&#39;,action.data).set(&#39;totalPage&#39;,action.totalPage)</span>
            <span class="token comment">//merge\u6548\u7387\u66F4\u9AD8\uFF0C\u6267\u884C\u4E00\u6B21\u6539\u53D8\u591A\u4E2A\u6570\u636E</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">list</span><span class="token operator">:</span>action<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
                <span class="token literal-property property">totalPage</span><span class="token operator">:</span>action<span class="token punctuation">.</span>totalPage
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">MOUSE_ENTER</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;mouseIn&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">MOUSE_LEAVE</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;mouseIn&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> constants<span class="token punctuation">.</span><span class="token constant">CHANGE_PAGE</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>action<span class="token punctuation">.</span>page<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> state
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://zhuanlan.zhihu.com/p/20295971?spm=a2c4e.11153940.blogcont69516.18.4f275a00EzBHjr&amp;columnSlug=purerender</li><li>https://www.jianshu.com/p/7bf04638e82a</li></ul>`,41);function t(e,o){return p}var l=n(a,[["render",t],["__file","immutable.html.vue"]]);export{l as default};
