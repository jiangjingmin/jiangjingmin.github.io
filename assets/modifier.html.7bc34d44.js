import{_ as p,r as t,o,c as r,a,b as n,F as l,e as c,d as e}from"./app.f6b3af9d.js";const i={},u=c(`<h1 id="vue\u5E38\u7528\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B\u6709\u4EC0\u4E48\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#vue\u5E38\u7528\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B\u6709\u4EC0\u4E48\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> Vue\u5E38\u7528\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B\u6709\u4EC0\u4E48\u5E94\u7528\u573A\u666F</h1><p><img src="https://static.vue-js.com/8f718e30-42c0-11eb-ab90-d9ae814b240d.png" alt="image"></p><h2 id="\u4E00\u3001\u4FEE\u9970\u7B26\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4FEE\u9970\u7B26\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u4FEE\u9970\u7B26\u662F\u4EC0\u4E48</h2><p>\u5728\u7A0B\u5E8F\u4E16\u754C\u91CC\uFF0C\u4FEE\u9970\u7B26\u662F\u7528\u4E8E\u9650\u5B9A\u7C7B\u578B\u4EE5\u53CA\u7C7B\u578B\u6210\u5458\u7684\u58F0\u660E\u7684\u4E00\u79CD\u7B26\u53F7</p><p>\u5728<code>Vue</code>\u4E2D\uFF0C\u4FEE\u9970\u7B26\u5904\u7406\u4E86\u8BB8\u591A<code>DOM</code>\u4E8B\u4EF6\u7684\u7EC6\u8282\uFF0C\u8BA9\u6211\u4EEC\u4E0D\u518D\u9700\u8981\u82B1\u5927\u91CF\u7684\u65F6\u95F4\u53BB\u5904\u7406\u8FD9\u4E9B\u70E6\u607C\u7684\u4E8B\u60C5\uFF0C\u800C\u80FD\u6709\u66F4\u591A\u7684\u7CBE\u529B\u4E13\u6CE8\u4E8E\u7A0B\u5E8F\u7684\u903B\u8F91\u5904\u7406</p><p><code>vue</code>\u4E2D\u4FEE\u9970\u7B26\u5206\u4E3A\u4EE5\u4E0B\u4E94\u79CD\uFF1A</p><ul><li>\u8868\u5355\u4FEE\u9970\u7B26</li><li>\u4E8B\u4EF6\u4FEE\u9970\u7B26</li><li>\u9F20\u6807\u6309\u952E\u4FEE\u9970\u7B26</li><li>\u952E\u503C\u4FEE\u9970\u7B26</li><li>v-bind\u4FEE\u9970\u7B26</li></ul><h2 id="\u4E8C\u3001\u4FEE\u9970\u7B26\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4FEE\u9970\u7B26\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u4FEE\u9970\u7B26\u7684\u4F5C\u7528</h2><h3 id="\u8868\u5355\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u8868\u5355\u4FEE\u9970\u7B26</h3><p>\u5728\u6211\u4EEC\u586B\u5199\u8868\u5355\u7684\u65F6\u5019\u7528\u5F97\u6700\u591A\u7684\u662F<code>input</code>\u6807\u7B7E\uFF0C\u6307\u4EE4\u7528\u5F97\u6700\u591A\u7684\u662F<code>v-model</code></p><p>\u5173\u4E8E\u8868\u5355\u7684\u4FEE\u9970\u7B26\u6709\u5982\u4E0B\uFF1A</p><ul><li>lazy</li><li>trim</li><li>number</li></ul><h4 id="lazy" tabindex="-1"><a class="header-anchor" href="#lazy" aria-hidden="true">#</a> lazy</h4><p>\u5728\u6211\u4EEC\u586B\u5B8C\u4FE1\u606F\uFF0C\u5149\u6807\u79BB\u5F00\u6807\u7B7E\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u5C06\u503C\u8D4B\u4E88\u7ED9<code>value</code>\uFF0C\u4E5F\u5C31\u662F\u5728<code>change</code>\u4E8B\u4EF6\u4E4B\u540E\u518D\u8FDB\u884C\u4FE1\u606F\u540C\u6B65</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token punctuation">.</span>lazy<span class="token operator">=</span><span class="token string">&quot;value&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h4><p>\u81EA\u52A8\u8FC7\u6EE4\u7528\u6237\u8F93\u5165\u7684\u9996\u7A7A\u683C\u5B57\u7B26\uFF0C\u800C\u4E2D\u95F4\u7684\u7A7A\u683C\u4E0D\u4F1A\u8FC7\u6EE4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v<span class="token operator">-</span>model<span class="token punctuation">.</span>trim<span class="token operator">=</span><span class="token string">&quot;value&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h4><p>\u81EA\u52A8\u5C06\u7528\u6237\u7684\u8F93\u5165\u503C\u8F6C\u4E3A\u6570\u503C\u7C7B\u578B\uFF0C\u4F46\u5982\u679C\u8FD9\u4E2A\u503C\u65E0\u6CD5\u88AB<code>parseFloat</code>\u89E3\u6790\uFF0C\u5219\u4F1A\u8FD4\u56DE\u539F\u6765\u7684\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token punctuation">.</span>number<span class="token operator">=</span><span class="token string">&quot;age&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4E8B\u4EF6\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4E8B\u4EF6\u4FEE\u9970\u7B26</h3><p>\u4E8B\u4EF6\u4FEE\u9970\u7B26\u662F\u5BF9\u4E8B\u4EF6\u6355\u83B7\u4EE5\u53CA\u76EE\u6807\u8FDB\u884C\u4E86\u5904\u7406\uFF0C\u6709\u5982\u4E0B\u4FEE\u9970\u7B26\uFF1A</p><ul><li>stop</li><li>prevent</li><li>self</li><li>once</li><li>capture</li><li>passive</li><li>native</li></ul><h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop</h4><p>\u963B\u6B62\u4E86\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u76F8\u5F53\u4E8E\u8C03\u7528\u4E86<code>event.stopPropagation</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;shout(2)&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>ok<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">//\u53EA\u8F93\u51FA1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="prevent" tabindex="-1"><a class="header-anchor" href="#prevent" aria-hidden="true">#</a> prevent</h4><p>\u963B\u6B62\u4E86\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u76F8\u5F53\u4E8E\u8C03\u7528\u4E86<code>event.preventDefault</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>form v<span class="token operator">-</span>on<span class="token operator">:</span>submit<span class="token punctuation">.</span>prevent<span class="token operator">=</span><span class="token string">&quot;onSubmit&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="self" tabindex="-1"><a class="header-anchor" href="#self" aria-hidden="true">#</a> self</h4><p>\u53EA\u5F53\u5728 <code>event.target</code> \u662F\u5F53\u524D\u5143\u7D20\u81EA\u8EAB\u65F6\u89E6\u53D1\u5904\u7406\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>self<span class="token operator">=</span><span class="token string">&quot;doThat&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4F7F\u7528\u4FEE\u9970\u7B26\u65F6\uFF0C\u987A\u5E8F\u5F88\u91CD\u8981\uFF1B\u76F8\u5E94\u7684\u4EE3\u7801\u4F1A\u4EE5\u540C\u6837\u7684\u987A\u5E8F\u4EA7\u751F\u3002\u56E0\u6B64\uFF0C\u7528 <code>v-on:click.prevent.self</code> \u4F1A\u963B\u6B62<strong>\u6240\u6709\u7684\u70B9\u51FB</strong>\uFF0C\u800C <code>v-on:click.self.prevent</code> \u53EA\u4F1A\u963B\u6B62\u5BF9\u5143\u7D20\u81EA\u8EAB\u7684\u70B9\u51FB</p></blockquote><h4 id="once" tabindex="-1"><a class="header-anchor" href="#once" aria-hidden="true">#</a> once</h4><p>\u7ED1\u5B9A\u4E86\u4E8B\u4EF6\u4EE5\u540E\u53EA\u80FD\u89E6\u53D1\u4E00\u6B21\uFF0C\u7B2C\u4E8C\u6B21\u5C31\u4E0D\u4F1A\u89E6\u53D1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>once<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>ok<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="capture" tabindex="-1"><a class="header-anchor" href="#capture" aria-hidden="true">#</a> capture</h4><p>\u4F7F\u4E8B\u4EF6\u89E6\u53D1\u4ECE\u5305\u542B\u8FD9\u4E2A\u5143\u7D20\u7684\u9876\u5C42\u5F00\u59CB\u5F80\u4E0B\u89E6\u53D1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div @click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>
    obj1
<span class="token operator">&lt;</span>div @click<span class="token punctuation">.</span>capture<span class="token operator">=</span><span class="token string">&quot;shout(2)&quot;</span><span class="token operator">&gt;</span>
    obj2
<span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;shout(3)&quot;</span><span class="token operator">&gt;</span>
    obj3
<span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;shout(4)&quot;</span><span class="token operator">&gt;</span>
    obj4
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// \u8F93\u51FA\u7ED3\u6784: 1 2 4 3 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="passive" tabindex="-1"><a class="header-anchor" href="#passive" aria-hidden="true">#</a> passive</h4><p>\u5728\u79FB\u52A8\u7AEF\uFF0C\u5F53\u6211\u4EEC\u5728\u76D1\u542C\u5143\u7D20\u6EDA\u52A8\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u89E6\u53D1<code>onscroll</code>\u4E8B\u4EF6\u4F1A\u8BA9\u6211\u4EEC\u7684\u7F51\u9875\u53D8\u5361\uFF0C\u56E0\u6B64\u6211\u4EEC\u4F7F\u7528\u8FD9\u4E2A\u4FEE\u9970\u7B26\u7684\u65F6\u5019\uFF0C\u76F8\u5F53\u4E8E\u7ED9<code>onscroll</code>\u4E8B\u4EF6\u6574\u4E86\u4E00\u4E2A<code>.lazy</code>\u4FEE\u9970\u7B26</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token function">\u6EDA\u52A8\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A</span> <span class="token punctuation">(</span>\u5373\u6EDA\u52A8\u884C\u4E3A<span class="token punctuation">)</span> \u5C06\u4F1A\u7ACB\u5373\u89E6\u53D1 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u800C\u4E0D\u4F1A\u7B49\u5F85 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">onScroll</span><span class="token template-punctuation string">\`</span></span> \u5B8C\u6210  <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u8FD9\u5176\u4E2D\u5305\u542B <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">event.preventDefault()</span><span class="token template-punctuation string">\`</span></span> \u7684\u60C5\u51B5 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>on<span class="token operator">:</span>scroll<span class="token punctuation">.</span>passive<span class="token operator">=</span><span class="token string">&quot;onScroll&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u4E0D\u8981\u628A <code>.passive</code> \u548C <code>.prevent</code> \u4E00\u8D77\u4F7F\u7528,\u56E0\u4E3A <code>.prevent</code> \u5C06\u4F1A\u88AB\u5FFD\u7565\uFF0C\u540C\u65F6\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u5411\u4F60\u5C55\u793A\u4E00\u4E2A\u8B66\u544A\u3002</p><p><code>passive</code> \u4F1A\u544A\u8BC9\u6D4F\u89C8\u5668\u4F60\u4E0D\u60F3\u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A</p></blockquote><h4 id="native" tabindex="-1"><a class="header-anchor" href="#native" aria-hidden="true">#</a> native</h4><p>\u8BA9\u7EC4\u4EF6\u53D8\u6210\u50CF<code>html</code>\u5185\u7F6E\u6807\u7B7E\u90A3\u6837\u76D1\u542C\u6839\u5143\u7D20\u7684\u539F\u751F\u4E8B\u4EF6\uFF0C\u5426\u5219\u7EC4\u4EF6\u4E0A\u4F7F\u7528 <code>v-on</code> \u53EA\u4F1A\u76D1\u542C\u81EA\u5B9A\u4E49\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>my<span class="token operator">-</span>component v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">&quot;doSomething&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>component<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4F7F\u7528.native\u4FEE\u9970\u7B26\u6765\u64CD\u4F5C\u666E\u901AHTML\u6807\u7B7E\u662F\u4F1A\u4EE4\u4E8B\u4EF6\u5931\u6548\u7684</p></blockquote><h3 id="\u9F20\u6807\u6309\u94AE\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u9F20\u6807\u6309\u94AE\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u9F20\u6807\u6309\u94AE\u4FEE\u9970\u7B26</h3><p>\u9F20\u6807\u6309\u94AE\u4FEE\u9970\u7B26\u9488\u5BF9\u7684\u5C31\u662F\u5DE6\u952E\u3001\u53F3\u952E\u3001\u4E2D\u952E\u70B9\u51FB\uFF0C\u6709\u5982\u4E0B\uFF1A</p><ul><li>left \u5DE6\u952E\u70B9\u51FB</li><li>right \u53F3\u952E\u70B9\u51FB</li><li>middle \u4E2D\u952E\u70B9\u51FB</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>left<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>ok<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>right<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>ok<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token punctuation">.</span>middle<span class="token operator">=</span><span class="token string">&quot;shout(1)&quot;</span><span class="token operator">&gt;</span>ok<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u952E\u76D8\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u952E\u76D8\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u952E\u76D8\u4FEE\u9970\u7B26</h3><p>\u952E\u76D8\u4FEE\u9970\u7B26\u662F\u7528\u6765\u4FEE\u9970\u952E\u76D8\u4E8B\u4EF6\uFF08<code>onkeyup</code>\uFF0C<code>onkeydown</code>\uFF09\u7684\uFF0C\u6709\u5982\u4E0B\uFF1A</p><p><code>keyCode</code>\u5B58\u5728\u5F88\u591A\uFF0C\u4F46<code>vue</code>\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u522B\u540D\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u4E24\u79CD\uFF1A</p><ul><li>\u666E\u901A\u952E\uFF08enter\u3001tab\u3001delete\u3001space\u3001esc\u3001up...\uFF09</li><li>\u7CFB\u7EDF\u4FEE\u9970\u952E\uFF08ctrl\u3001alt\u3001meta\u3001shift...\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53EA\u6709\u6309\u952E\u4E3AkeyCode\u7684\u65F6\u5019\u624D\u89E6\u53D1</span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> @keyup<span class="token punctuation">.</span>keyCode<span class="token operator">=</span><span class="token string">&quot;shout()&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u81EA\u5B9A\u4E49\u4E00\u4E9B\u5168\u5C40\u7684\u952E\u76D8\u7801\u522B\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>keyCodes<span class="token punctuation">.</span>f2 <span class="token operator">=</span> <span class="token number">113</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="v-bind\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#v-bind\u4FEE\u9970\u7B26" aria-hidden="true">#</a> v-bind\u4FEE\u9970\u7B26</h3><p>v-bind\u4FEE\u9970\u7B26\u4E3B\u8981\u662F\u4E3A\u5C5E\u6027\u8FDB\u884C\u64CD\u4F5C\uFF0C\u7528\u6765\u5206\u522B\u6709\u5982\u4E0B\uFF1A</p><ul><li>async</li><li>prop</li><li>camel</li></ul><h4 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h4><p>\u80FD\u5BF9<code>props</code>\u8FDB\u884C\u4E00\u4E2A\u53CC\u5411\u7ED1\u5B9A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7236\u7EC4\u4EF6</span>
<span class="token operator">&lt;</span>comp <span class="token operator">:</span>myMessage<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>comp<span class="token operator">&gt;</span> 
<span class="token comment">//\u5B50\u7EC4\u4EF6</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:myMessage&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4EE5\u4E0A\u8FD9\u79CD\u65B9\u6CD5\u76F8\u5F53\u4E8E\u4EE5\u4E0B\u7684\u7B80\u5199</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7236\u4EB2\u7EC4\u4EF6</span>
<span class="token operator">&lt;</span>comp <span class="token operator">:</span>myMessage<span class="token operator">=</span><span class="token string">&quot;bar&quot;</span> @update<span class="token operator">:</span>myMessage<span class="token operator">=</span><span class="token string">&quot;func&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>comp<span class="token operator">&gt;</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u5B50\u7EC4\u4EF6js</span>
<span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:myMessage&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F7F\u7528<code>async</code>\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9\uFF1A</p><ul><li><p>\u4F7F\u7528<code>sync</code>\u7684\u65F6\u5019\uFF0C\u5B50\u7EC4\u4EF6\u4F20\u9012\u7684\u4E8B\u4EF6\u540D\u683C\u5F0F\u5FC5\u987B\u4E3A<code>update:value</code>\uFF0C\u5176\u4E2D<code>value</code>\u5FC5\u987B\u4E0E\u5B50\u7EC4\u4EF6\u4E2D<code>props</code>\u4E2D\u58F0\u660E\u7684\u540D\u79F0\u5B8C\u5168\u4E00\u81F4</p></li><li><p>\u6CE8\u610F\u5E26\u6709 <code>.sync</code> \u4FEE\u9970\u7B26\u7684 <code>v-bind</code> \u4E0D\u80FD\u548C\u8868\u8FBE\u5F0F\u4E00\u8D77\u4F7F\u7528</p></li><li><p>\u5C06 <code>v-bind.sync</code> \u7528\u5728\u4E00\u4E2A\u5B57\u9762\u91CF\u7684\u5BF9\u8C61\u4E0A\uFF0C\u4F8B\u5982 <code>v-bind.sync=\u201D{ title: doc.title }\u201D</code>\uFF0C\u662F\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u7684</p></li></ul><h4 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h4><p>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6807\u7B7E\u5C5E\u6027\uFF0C\u907F\u514D\u66B4\u9732\u6570\u636E\uFF0C\u9632\u6B62\u6C61\u67D3HTML\u7ED3\u6784</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">&quot;uid&quot;</span> title<span class="token operator">=</span><span class="token string">&quot;title1&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> <span class="token operator">:</span>index<span class="token punctuation">.</span>prop<span class="token operator">=</span><span class="token string">&quot;index&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="camel" tabindex="-1"><a class="header-anchor" href="#camel" aria-hidden="true">#</a> camel</h4><p>\u5C06\u547D\u540D\u53D8\u4E3A\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0C\u5982\u5C06<code>view-Box</code>\u5C5E\u6027\u540D\u8F6C\u6362\u4E3A <code>viewBox</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>svg <span class="token operator">:</span>viewBox<span class="token operator">=</span><span class="token string">&quot;viewBox&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u6839\u636E\u6BCF\u4E00\u4E2A\u4FEE\u9970\u7B26\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u4EE5\u4E0B\u4FEE\u9970\u7B26\u7684\u5E94\u7528\u573A\u666F\uFF1A</p><ul><li>.stop\uFF1A\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li><li>.native\uFF1A\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6</li><li>.once\uFF1A\u4E8B\u4EF6\u53EA\u6267\u884C\u4E00\u6B21</li><li>.self \uFF1A\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5728\u81EA\u8EAB\u8EAB\u4E0A\uFF0C\u76F8\u5F53\u4E8E\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1</li><li>.prevent\uFF1A\u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</li><li>.caption\uFF1A\u7528\u4E8E\u4E8B\u4EF6\u6355\u83B7</li><li>.once\uFF1A\u53EA\u89E6\u53D1\u4E00\u6B21</li><li>.keyCode\uFF1A\u76D1\u542C\u7279\u5B9A\u952E\u76D8\u6309\u4E0B</li><li>.right\uFF1A\u53F3\u952E</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,79),d={href:"https://segmentfault.com/a/1190000016786254",target:"_blank",rel:"noopener noreferrer"},k=e("https://segmentfault.com/a/1190000016786254"),b={href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"},h=e("https://vue3js.cn/docs/zh");function v(m,g){const s=t("ExternalLinkIcon");return o(),r(l,null,[u,a("ul",null,[a("li",null,[a("a",d,[k,n(s)])]),a("li",null,[a("a",b,[h,n(s)])])])],64)}var f=p(i,[["render",v],["__file","modifier.html.vue"]]);export{f as default};
