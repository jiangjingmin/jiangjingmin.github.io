import{_ as a,r as p,o as e,c as o,a as n,b as t,F as c,e as l,d as r}from"./app.f6b3af9d.js";const u={},i=l(`<h1 id="\u63D0\u9AD8\u7EC4\u4EF6\u7684render\u6E32\u67D3\u6548\u7387" tabindex="-1"><a class="header-anchor" href="#\u63D0\u9AD8\u7EC4\u4EF6\u7684render\u6E32\u67D3\u6548\u7387" aria-hidden="true">#</a> \u63D0\u9AD8\u7EC4\u4EF6\u7684render\u6E32\u67D3\u6548\u7387</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>react</code> \u57FA\u4E8E\u865A\u62DF <code>DOM</code> \u548C\u9AD8\u6548 <code>Diff</code>\u7B97\u6CD5\u7684\u5B8C\u7F8E\u914D\u5408\uFF0C\u5B9E\u73B0\u4E86\u5BF9 <code>DOM</code>\u6700\u5C0F\u7C92\u5EA6\u7684\u66F4\u65B0\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C<code>React</code>\u5BF9 <code>DOM</code>\u7684\u6E32\u67D3\u6548\u7387\u8DB3\u4EE5\u6211\u4EEC\u7684\u4E1A\u52A1\u65E5\u5E38</p><p>\u590D\u6742\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u6027\u80FD\u95EE\u9898\u4F9D\u7136\u4F1A\u56F0\u6270\u6211\u4EEC\u3002\u6B64\u65F6\u9700\u8981\u91C7\u53D6\u4E00\u4E9B\u63AA\u65BD\u6765\u63D0\u5347\u8FD0\u884C\u6027\u80FD\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u5219\u662F\u4E1A\u52A1\u4E2D\u5E38\u89C1\u7684\u4F18\u5316\u624B\u6BB5\u4E4B\u4E00</p><h2 id="\u4E8C\u3001\u5982\u4F55\u505A" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u505A" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u505A</h2><p>\u5728\u4E4B\u524D\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230<code>render</code>\u7684\u89E6\u53D1\u65F6\u673A\uFF0C\u7B80\u5355\u6765\u8BB2\u5C31\u662F\u7C7B\u7EC4\u4EF6\u901A\u8FC7\u8C03\u7528<code>setState</code>\u65B9\u6CD5\uFF0C \u5C31\u4F1A\u5BFC\u81F4<code>render</code>\uFF0C\u7236\u7EC4\u4EF6\u4E00\u65E6\u53D1\u751F<code>render</code>\u6E32\u67D3\uFF0C\u5B50\u7EC4\u4EF6\u4E00\u5B9A\u4E5F\u4F1A\u6267\u884C<code>render</code>\u6E32\u67D3</p><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u7236\u7EC4\u4EF6\u6E32\u67D3\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u5B50\u7EC4\u4EF6\u5E76\u6CA1\u6709\u53D1\u751F\u4EFB\u4F55\u6539\u53D8\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4ECE\u907F\u514D\u65E0\u8C13\u7684\u6E32\u67D3\uFF0C\u5177\u4F53\u5B9E\u73B0\u7684\u65B9\u5F0F\u6709\u5982\u4E0B\uFF1A</p><ul><li>shouldComponentUpdate</li><li>PureComponent</li><li>React.memo</li></ul><h3 id="shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a> shouldComponentUpdate</h3><p>\u901A\u8FC7<code>shouldComponentUpdate</code>\u751F\u547D\u5468\u671F\u51FD\u6570\u6765\u6BD4\u5BF9 <code>state</code>\u548C <code>props</code>\uFF0C\u786E\u5B9A\u662F\u5426\u8981\u91CD\u65B0\u6E32\u67D3</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD4\u56DE<code>true</code>\u8868\u793A\u91CD\u65B0\u6E32\u67D3\uFF0C\u5982\u679C\u4E0D\u5E0C\u671B\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD4\u56DE <code>false</code> \u5373\u53EF</p><h3 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent" aria-hidden="true">#</a> PureComponent</h3><p>\u8DDF<code>shouldComponentUpdate</code>\u539F\u7406\u57FA\u672C\u4E00\u81F4\uFF0C\u901A\u8FC7\u5BF9 <code>props</code> \u548C <code>state</code>\u7684\u6D45\u6BD4\u8F83\u7ED3\u679C\u6765\u5B9E\u73B0 <code>shouldComponentUpdate</code>\uFF0C\u6E90\u7801\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_compositeType <span class="token operator">===</span> CompositeTypes<span class="token punctuation">.</span>PureClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    shouldUpdate <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span> <span class="token function">shallowEqual</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>state<span class="token punctuation">,</span> nextState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>shallowEqual</code>\u5BF9\u5E94\u65B9\u6CD5\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> hasOwnProperty <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * is \u65B9\u6CD5\u6765\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u662F\u76F8\u7B49\u7684\u503C\uFF0C\u4E3A\u4F55\u8FD9\u4E48\u5199\u53EF\u4EE5\u79FB\u6B65 MDN \u7684\u6587\u6863
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */</span>
<span class="token keyword">function</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> mixed</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> y <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token operator">/</span> x <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">/</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">shallowEqual</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">objA</span><span class="token operator">:</span> mixed<span class="token punctuation">,</span> <span class="token literal-property property">objB</span><span class="token operator">:</span> mixed</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token comment">// \u9996\u5148\u5BF9\u57FA\u672C\u7C7B\u578B\u8FDB\u884C\u6BD4\u8F83</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is</span><span class="token punctuation">(</span>objA<span class="token punctuation">,</span> objB<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> objA <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> objA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>
      <span class="token keyword">typeof</span> objB <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> objB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> keysA <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>objA<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> keysB <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>objB<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u957F\u5EA6\u4E0D\u76F8\u7B49\u76F4\u63A5\u8FD4\u56DEfalse</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>keysA<span class="token punctuation">.</span>length <span class="token operator">!==</span> keysB<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// key\u76F8\u7B49\u7684\u60C5\u51B5\u4E0B\uFF0C\u518D\u53BB\u5FAA\u73AF\u6BD4\u8F83</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keysA<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>objB<span class="token punctuation">,</span> keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token operator">!</span><span class="token function">is</span><span class="token punctuation">(</span>objA<span class="token punctuation">[</span>keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> objB<span class="token punctuation">[</span>keysA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u5F53\u5BF9\u8C61\u5305\u542B\u590D\u6742\u7684\u6570\u636E\u7ED3\u6784\u65F6\uFF0C\u5BF9\u8C61\u6DF1\u5C42\u7684\u6570\u636E\u5DF2\u6539\u53D8\u5374\u6CA1\u6709\u89E6\u53D1 <code>render</code></p><p>\u6CE8\u610F\uFF1A\u5728<code>react</code>\u4E2D\uFF0C\u662F\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6DF1\u5C42\u6B21\u7ED3\u6784\u7684\u6570\u636E</p><h3 id="react-memo" tabindex="-1"><a class="header-anchor" href="#react-memo" aria-hidden="true">#</a> React.memo</h3><p><code>React.memo</code>\u7528\u6765\u7F13\u5B58\u7EC4\u4EF6\u7684\u6E32\u67D3\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0\uFF0C\u5176\u5B9E\u4E5F\u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u4E0E <code>PureComponent</code> \u5341\u5206\u7C7B\u4F3C\u3002\u4F46\u4E0D\u540C\u7684\u662F\uFF0C <code>React.memo</code> \u53EA\u80FD\u7528\u4E8E\u51FD\u6570\u7EC4\u4EF6</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Component code</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u9700\u8981\u6DF1\u5C42\u6B21\u6BD4\u8F83\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u7ED9<code>memo</code>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u6BD4\u8F83\u51FD\u6570</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">arePropsEqual</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// your code</span>
  <span class="token keyword">return</span> prevProps <span class="token operator">===</span> nextProps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span>Button<span class="token punctuation">,</span> arePropsEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u524D\u7AEF\u6027\u80FD\u95EE\u9898\u662F\u4E00\u4E2A\u5FC5\u987B\u8003\u8651\u7684\u95EE\u9898\uFF0C\u968F\u7740\u4E1A\u52A1\u7684\u590D\u6742\uFF0C\u9047\u5230\u6027\u80FD\u95EE\u9898\u7684\u6982\u7387\u4E5F\u5728\u589E\u9AD8</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u5EFA\u8BAE\u5C06\u9875\u9762\u8FDB\u884C\u66F4\u5C0F\u7684\u9897\u7C92\u5316\uFF0C\u5982\u679C\u4E00\u4E2A\u8FC7\u5927\uFF0C\u5F53\u72B6\u6001\u53D1\u751F\u4FEE\u6539\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6574\u4E2A\u5927\u7EC4\u4EF6\u7684\u6E32\u67D3\uFF0C\u800C\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u62C6\u5206\u540E\uFF0C\u7C92\u5EA6\u53D8\u5C0F\u4E86\uFF0C\u4E5F\u80FD\u591F\u51CF\u5C11\u5B50\u7EC4\u4EF6\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,27),k={href:"https://juejin.cn/post/6844903781679759367#heading-12",target:"_blank",rel:"noopener noreferrer"},d=r("https://juejin.cn/post/6844903781679759367#heading-12");function b(m,h){const s=p("ExternalLinkIcon");return e(),o(c,null,[i,n("ul",null,[n("li",null,[n("a",k,[d,t(s)])])])],64)}var f=a(u,[["render",b],["__file","improve_render.html.vue"]]);export{f as default};
