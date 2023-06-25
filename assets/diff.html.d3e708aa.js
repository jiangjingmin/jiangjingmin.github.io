import{_ as p,r as e,o as c,c as o,a as n,b as s,F as l,e as u,d as t}from"./app.cec2e512.js";const k={},i=u(`<h1 id="react-diff" tabindex="-1"><a class="header-anchor" href="#react-diff" aria-hidden="true">#</a> React diff</h1><p><img src="https://static.vue-js.com/967e6150-ec91-11eb-85f6-6fac77c0c9b3.png" alt="00"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u8DDF<code>Vue</code>\u4E00\u81F4\uFF0C<code>React</code>\u901A\u8FC7\u5F15\u5165<code>Virtual DOM</code>\u7684\u6982\u5FF5\uFF0C\u6781\u5927\u5730\u907F\u514D\u65E0\u6548\u7684<code>Dom</code>\u64CD\u4F5C\uFF0C\u4F7F\u6211\u4EEC\u7684\u9875\u9762\u7684\u6784\u5EFA\u6548\u7387\u63D0\u5230\u4E86\u6781\u5927\u7684\u63D0\u5347</p><p>\u800C<code>diff</code>\u7B97\u6CD5\u5C31\u662F\u66F4\u9AD8\u6548\u5730\u901A\u8FC7\u5BF9\u6BD4\u65B0\u65E7<code>Virtual DOM</code>\u6765\u627E\u51FA\u771F\u6B63\u7684<code>Dom</code>\u53D8\u5316\u4E4B\u5904</p><p>\u4F20\u7EDFdiff\u7B97\u6CD5\u901A\u8FC7\u5FAA\u73AF\u9012\u5F52\u5BF9\u8282\u70B9\u8FDB\u884C\u4F9D\u6B21\u5BF9\u6BD4\uFF0C\u6548\u7387\u4F4E\u4E0B\uFF0C\u7B97\u6CD5\u590D\u6742\u5EA6\u8FBE\u5230 O(n^3)\uFF0C<code>react</code>\u5C06\u7B97\u6CD5\u8FDB\u884C\u4E00\u4E2A\u4F18\u5316\uFF0C\u590D\u6742\u5EA6\u964D\u7EF4<code>O(n)</code>\uFF0C\u4E24\u8005\u6548\u7387\u5DEE\u8DDD\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/a43c9960-ec91-11eb-ab90-d9ae814b240d.png" alt="01"></p><h2 id="\u4E8C\u3001\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u539F\u7406</h2><p><code>react</code>\u4E2D<code>diff</code>\u7B97\u6CD5\u4E3B\u8981\u9075\u5FAA\u4E09\u4E2A\u5C42\u7EA7\u7684\u7B56\u7565\uFF1A</p><ul><li><p>tree\u5C42\u7EA7</p></li><li><p>conponent \u5C42\u7EA7</p></li><li><p>element \u5C42\u7EA7</p></li></ul><h3 id="tree\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#tree\u5C42\u7EA7" aria-hidden="true">#</a> tree\u5C42\u7EA7</h3><p><code>DOM</code>\u8282\u70B9\u8DE8\u5C42\u7EA7\u7684\u64CD\u4F5C\u4E0D\u505A\u4F18\u5316\uFF0C\u53EA\u4F1A\u5BF9\u76F8\u540C\u5C42\u7EA7\u7684\u8282\u70B9\u8FDB\u884C\u6BD4\u8F83</p><p><img src="https://static.vue-js.com/ae71d1c0-ec91-11eb-85f6-6fac77c0c9b3.png" alt="02"></p><p>\u53EA\u6709\u5220\u9664\u3001\u521B\u5EFA\u64CD\u4F5C\uFF0C\u6CA1\u6709\u79FB\u52A8\u64CD\u4F5C\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/b85f2bb0-ec91-11eb-ab90-d9ae814b240d.png" alt="03"></p><p><code>react</code>\u53D1\u73B0\u65B0\u6811\u4E2D\uFF0CR\u8282\u70B9\u4E0B\u6CA1\u6709\u4E86A\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664A\uFF0C\u5728D\u8282\u70B9\u4E0B\u521B\u5EFAA\u4EE5\u53CA\u4E0B\u5C5E\u8282\u70B9</p><p>\u4E0A\u8FF0\u64CD\u4F5C\u4E2D\uFF0C\u53EA\u6709\u5220\u9664\u548C\u521B\u5EFA\u64CD\u4F5C</p><h3 id="conponent\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#conponent\u5C42\u7EA7" aria-hidden="true">#</a> conponent\u5C42\u7EA7</h3><p>\u5982\u679C\u662F\u540C\u4E00\u4E2A\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u5219\u4F1A\u7EE7\u7EED\u5F80\u4E0B<code>diff</code>\u8FD0\u7B97\uFF0C\u5982\u679C\u4E0D\u662F\u4E00\u4E2A\u7C7B\u7684\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664\u8FD9\u4E2A\u7EC4\u4EF6\u4E0B\u7684\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u521B\u5EFA\u65B0\u7684</p><p><img src="https://static.vue-js.com/c1fcdf00-ec91-11eb-ab90-d9ae814b240d.png" alt="04"></p><p>\u5F53<code>component D</code>\u6362\u6210\u4E86<code>component G</code> \u540E\uFF0C\u5373\u4F7F\u4E24\u8005\u7684\u7ED3\u6784\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4E5F\u4F1A\u5C06<code>D</code>\u5220\u9664\u518D\u91CD\u65B0\u521B\u5EFA<code>G</code></p><h3 id="element\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#element\u5C42\u7EA7" aria-hidden="true">#</a> element\u5C42\u7EA7</h3><p>\u5BF9\u4E8E\u6BD4\u8F83\u540C\u4E00\u5C42\u7EA7\u7684\u8282\u70B9\u4EEC\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5728\u5BF9\u5E94\u7684\u5C42\u7EA7\u7528\u552F\u4E00\u7684<code>key</code>\u4F5C\u4E3A\u6807\u8BC6</p><p>\u63D0\u4F9B\u4E86 3 \u79CD\u8282\u70B9\u64CD\u4F5C\uFF0C\u5206\u522B\u4E3A <code>INSERT_MARKUP</code>(\u63D2\u5165)\u3001<code>MOVE_EXISTING</code> (\u79FB\u52A8)\u548C <code>REMOVE_NODE</code> (\u5220\u9664)</p><p>\u5982\u4E0B\u573A\u666F\uFF1A</p><p><img src="https://static.vue-js.com/cae1c9a0-ec91-11eb-ab90-d9ae814b240d.png" alt="05"></p><p>\u901A\u8FC7<code>key</code>\u53EF\u4EE5\u51C6\u786E\u5730\u53D1\u73B0\u65B0\u65E7\u96C6\u5408\u4E2D\u7684\u8282\u70B9\u90FD\u662F\u76F8\u540C\u7684\u8282\u70B9\uFF0C\u56E0\u6B64\u65E0\u9700\u8FDB\u884C\u8282\u70B9\u5220\u9664\u548C\u521B\u5EFA\uFF0C\u53EA\u9700\u8981\u5C06\u65E7\u96C6\u5408\u4E2D\u8282\u70B9\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8\uFF0C\u66F4\u65B0\u4E3A\u65B0\u96C6\u5408\u4E2D\u8282\u70B9\u7684\u4F4D\u7F6E</p><p>\u6D41\u7A0B\u5982\u4E0B\u8868\uFF1A</p><p><img src="https://static.vue-js.com/d34c5420-ec91-11eb-85f6-6fac77c0c9b3.png" alt="06"></p><ul><li>index\uFF1A \u65B0\u96C6\u5408\u7684\u904D\u5386\u4E0B\u6807\u3002</li><li>oldIndex\uFF1A\u5F53\u524D\u8282\u70B9\u5728\u8001\u96C6\u5408\u4E2D\u7684\u4E0B\u6807</li><li>maxIndex\uFF1A\u5728\u65B0\u96C6\u5408\u8BBF\u95EE\u8FC7\u7684\u8282\u70B9\u4E2D\uFF0C\u5176\u5728\u8001\u96C6\u5408\u7684\u6700\u5927\u4E0B\u6807</li></ul><p>\u5982\u679C\u5F53\u524D\u8282\u70B9\u5728\u65B0\u96C6\u5408\u4E2D\u7684\u4F4D\u7F6E\u6BD4\u8001\u96C6\u5408\u4E2D\u7684\u4F4D\u7F6E\u9760\u524D\u7684\u8BDD\uFF0C\u662F\u4E0D\u4F1A\u5F71\u54CD\u540E\u7EED\u8282\u70B9\u64CD\u4F5C\u7684\uFF0C\u8FD9\u91CC\u8FD9\u65F6\u5019\u88AB\u52A8\u5B57\u8282\u4E0D\u7528\u52A8</p><p>\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\u53EA\u6BD4\u8F83oldIndex\u548CmaxIndex\uFF0C\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u5F53oldIndex&gt;maxIndex\u65F6\uFF0C\u5C06oldIndex\u7684\u503C\u8D4B\u503C\u7ED9maxIndex</li><li>\u5F53oldIndex=maxIndex\u65F6\uFF0C\u4E0D\u64CD\u4F5C</li><li>\u5F53oldIndex&lt;maxIndex\u65F6\uFF0C\u5C06\u5F53\u524D\u8282\u70B9\u79FB\u52A8\u5230index\u7684\u4F4D\u7F6E</li></ul><p><code>diff</code>\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u8282\u70B9B\uFF1A\u6B64\u65F6 maxIndex=0\uFF0ColdIndex=1\uFF1B\u6EE1\u8DB3 maxIndex&lt; oldIndex\uFF0C\u56E0\u6B64B\u8282\u70B9\u4E0D\u52A8\uFF0C\u6B64\u65F6maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u5C31\u662F1</li><li>\u8282\u70B9A\uFF1A\u6B64\u65F6maxIndex=1\uFF0ColdIndex=0\uFF1B\u4E0D\u6EE1\u8DB3maxIndex&lt; oldIndex\uFF0C\u56E0\u6B64A\u8282\u70B9\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C\u6B64\u65F6maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u8FD8\u662F1</li><li>\u8282\u70B9D\uFF1A\u6B64\u65F6maxIndex=1, oldIndex=3\uFF1B\u6EE1\u8DB3maxIndex&lt; oldIndex\uFF0C\u56E0\u6B64D\u8282\u70B9\u4E0D\u52A8\uFF0C\u6B64\u65F6maxIndex= Math.max(oldIndex, maxIndex)\uFF0C\u5C31\u662F3</li><li>\u8282\u70B9C\uFF1A\u6B64\u65F6maxIndex=3\uFF0ColdIndex=2\uFF1B\u4E0D\u6EE1\u8DB3maxIndex&lt; oldIndex\uFF0C\u56E0\u6B64C\u8282\u70B9\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C\u5F53\u524D\u5DF2\u7ECF\u6BD4\u8F83\u5B8C\u4E86</li></ul><p>\u5F53ABCD\u8282\u70B9\u6BD4\u8F83\u5B8C\u6210\u540E\uFF0C<code>diff</code>\u8FC7\u7A0B\u8FD8\u6CA1\u5B8C\uFF0C\u8FD8\u4F1A\u6574\u4F53\u904D\u5386\u8001\u96C6\u5408\u4E2D\u8282\u70B9\uFF0C\u770B\u6709\u6CA1\u6709\u6CA1\u7528\u5230\u7684\u8282\u70B9\uFF0C\u6709\u7684\u8BDD\uFF0C\u5C31\u5220\u9664</p><h2 id="\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u4E09\u3001\u6CE8\u610F\u4E8B\u9879</h2><p>\u5BF9\u4E8E\u7B80\u5355\u5217\u8868\u6E32\u67D3\u800C\u8A00\uFF0C\u4E0D\u4F7F\u7528<code>key</code>\u6BD4\u4F7F\u7528<code>key</code>\u7684\u6027\u80FD\uFF0C\u4F8B\u5982\uFF1A</p><p>\u5C06\u4E00\u4E2A[1,2,3,4,5]\uFF0C\u6E32\u67D3\u6210\u5982\u4E0B\u7684\u6837\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u540E\u7EED\u66F4\u6539\u6210[1,3,2,5,4]\uFF0C\u4F7F\u7528<code>key</code>\u4E0E\u4E0D\u4F7F\u7528<code>key</code>\u4F5C\u7528\u5982\u4E0B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>1.\u52A0key
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>     
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  ========&gt;  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>4<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>5<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>5<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>4<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
\u64CD\u4F5C\uFF1A\u8282\u70B92\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A2\u7684\u4F4D\u7F6E\uFF0C\u8282\u70B94\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A4\u7684\u4F4D\u7F6E\u3002

2.\u4E0D\u52A0key
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>     
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  ========&gt;  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
\u64CD\u4F5C\uFF1A\u4FEE\u6539\u7B2C1\u4E2A\u5230\u7B2C5\u4E2A\u8282\u70B9\u7684innerText
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u5BF9\u8FD9\u4E2A\u96C6\u5408\u8FDB\u884C\u589E\u5220\u7684\u64CD\u4F5C\u6539\u6210[1,3,2,5,6]</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>1.\u52A0key
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>1<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>     
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>3<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  ========&gt;  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>4<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>5<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>5<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>6<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
\u64CD\u4F5C\uFF1A\u8282\u70B92\u79FB\u52A8\u81F3\u4E0B\u6807\u4E3A2\u7684\u4F4D\u7F6E\uFF0C\u65B0\u589E\u8282\u70B96\u81F3\u4E0B\u6807\u4E3A4\u7684\u4F4D\u7F6E\uFF0C\u5220\u9664\u8282\u70B94\u3002

2.\u4E0D\u52A0key
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>     
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  ========&gt;  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> 
\u64CD\u4F5C\uFF1A\u4FEE\u6539\u7B2C1\u4E2A\u5230\u7B2C5\u4E2A\u8282\u70B9\u7684innerText
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u7531\u4E8E<code>dom</code>\u8282\u70B9\u7684\u79FB\u52A8\u64CD\u4F5C\u5F00\u9500\u662F\u6BD4\u8F83\u6602\u8D35\u7684\uFF0C\u6CA1\u6709<code>key</code>\u7684\u60C5\u51B5\u4E0B\u8981\u6BD4\u6709<code>key</code>\u7684\u6027\u80FD\u66F4\u597D</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,46),d={href:"https://zhuanlan.zhihu.com/p/140489744",target:"_blank",rel:"noopener noreferrer"},g=t("https://zhuanlan.zhihu.com/p/140489744"),r={href:"https://zhuanlan.zhihu.com/p/20346379",target:"_blank",rel:"noopener noreferrer"},m=t("https://zhuanlan.zhihu.com/p/20346379");function v(b,h){const a=e("ExternalLinkIcon");return c(),o(l,null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",d,[g,s(a)])])]),n("li",null,[n("p",null,[n("a",r,[m,s(a)])])])])],64)}var f=p(k,[["render",v],["__file","diff.html.vue"]]);export{f as default};
