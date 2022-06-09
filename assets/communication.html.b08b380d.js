import{_ as p,r as t,o,c,a as n,d as a,F as l,e as r,b as e}from"./app.2989aa3c.js";const i={},u=r(`<h1 id="\u9762\u8BD5\u5B98-vue\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-vue\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1AVue\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F\u90FD\u6709\u54EA\u4E9B\uFF1F</h1><p><img src="https://static.vue-js.com/7de50d20-3aca-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5E38\u7528\uFF1A\u5C5E\u6027 + \u53D1\u5E03\u8BA2\u9605\u7684\u65B9\u5F0F\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</p><ul><li><p>\u5C5E\u6027\u4F20\u9012\uFF1A\u53EA\u80FD \u7236\u7EA7 \u4F20\u7ED9 \u5B50\u7EA7</p></li><li><p>\u53D1\u5E03\u8BA2\u9605\uFF08EventBus\uFF09\uFF1A$on / $emit\uFF1A\u5B50\u7EA7 \u4F20\u7ED9 \u7236\u7EA7</p></li><li><p>Provide / inject\uFF1A\u4E0A\u4E0B\u6587\u65B9\u6848\u5B9E\u73B0\u7956\u5148\u4E0E\u540E\u4EE3\u4E4B\u95F4\u901A\u4FE1</p></li><li><p>slot\uFF1A\u63D2\u69FD</p></li><li><p>$parent / $ children\uFF1A</p></li><li><p>vuex\uFF1A\u5237\u65B0\u9875\u9762\u5C31\u6CA1\u4E86\uFF0C\u865A\u62DF\u672C\u5730\u5B58\u50A8</p></li><li><p>localStorage\uFF1A\u6C38\u4E45\u5B58\u50A8\uFF0C\u672C\u5730\u5B58\u50A8\uFF1A\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1\uFF0C\u53EF\u8BBE\u7F6E\u65F6\u95F4\u9650\u5236\u5B9E\u73B0</p></li><li><p>[ ] \u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u662F\u5982\u4F55\u8FDB\u884C\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u7684\uFF1F</p><p>\u7B54\uFF1A\u5B50\u7EC4\u4EF6\u901A\u8FC7emit</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token operator">&lt;</span>children <span class="token operator">:</span>num<span class="token operator">=</span><span class="token string">&#39;num&#39;</span> @updateData<span class="token operator">=</span><span class="token string">&#39;updateData&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;updateData&#39;</span><span class="token punctuation">,</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>[ ] \u7236\u7EC4\u4EF6\u5982\u4F55\u6267\u884C\u5B50\u7EC4\u4EF6\u91CC\u7684\u65B9\u6CD5\uFF1F</p><p>\u7B54\uFF1A\u901A\u8FC7ref\u64CD\u4F5C\u5B50\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7236\u7EC4\u4EF6</span>
<span class="token operator">&lt;</span>children ref<span class="token operator">=</span><span class="token string">&#39;childRef&#39;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>childRef<span class="token punctuation">.</span><span class="token function">setNum</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h2 id="\u4E00\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u4E00\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u6982\u5FF5</h2><p>\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u628A<strong>\u7EC4\u4EF6\u95F4\u901A\u4FE1</strong>\u8FD9\u4E2A\u8BCD\u8FDB\u884C\u62C6\u5206</p><ul><li>\u7EC4\u4EF6</li><li>\u901A\u4FE1</li></ul><p>\u90FD\u77E5\u9053\u7EC4\u4EF6\u662F<code>vue</code>\u6700\u5F3A\u5927\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C<code>vue</code>\u4E2D\u6BCF\u4E00\u4E2A<code>.vue</code>\u6211\u4EEC\u90FD\u53EF\u4EE5\u89C6\u4E4B\u4E3A\u4E00\u4E2A\u7EC4\u4EF6\u901A\u4FE1\u6307\u7684\u662F\u53D1\u9001\u8005\u901A\u8FC7\u67D0\u79CD\u5A92\u4F53\u4EE5\u67D0\u79CD\u683C\u5F0F\u6765\u4F20\u9012\u4FE1\u606F\u5230\u6536\u4FE1\u8005\u4EE5\u8FBE\u5230\u67D0\u4E2A\u76EE\u7684\u3002\u5E7F\u4E49\u4E0A\uFF0C\u4EFB\u4F55\u4FE1\u606F\u7684\u4EA4\u901A\u90FD\u662F\u901A\u4FE1<strong>\u7EC4\u4EF6\u95F4\u901A\u4FE1</strong>\u5373\u6307\u7EC4\u4EF6(<code>.vue</code>)\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u6765\u4F20\u9012\u4FE1\u606F\u4EE5\u8FBE\u5230\u67D0\u4E2A\u76EE\u7684\u4E3E\u4E2A\u6817\u5B50\u6211\u4EEC\u5728\u4F7F\u7528<code>UI</code>\u6846\u67B6\u4E2D\u7684<code>table</code>\u7EC4\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u5F80<code>table</code>\u7EC4\u4EF6\u4E2D\u4F20\u5165\u67D0\u4E9B\u6570\u636E\uFF0C\u8FD9\u4E2A\u672C\u8D28\u5C31\u5F62\u6210\u4E86\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</p><h2 id="\u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u89E3\u51B3\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u89E3\u51B3\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> \u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u89E3\u51B3\u4E86\u4EC0\u4E48</h2><p>\u5728\u53E4\u4EE3\uFF0C\u4EBA\u4EEC\u901A\u8FC7\u9A7F\u7AD9\u3001\u98DE\u9E3D\u4F20\u4E66\u3001\u70FD\u706B\u62A5\u8B66\u3001\u7B26\u53F7\u3001\u8BED\u8A00\u3001\u773C\u795E\u3001\u89E6\u78B0\u7B49\u65B9\u5F0F\u8FDB\u884C\u4FE1\u606F\u4F20\u9012\uFF0C\u5230\u4E86\u4ECA\u5929\uFF0C\u968F\u7740\u79D1\u6280\u6C34\u5E73\u7684\u98DE\u901F\u53D1\u5C55\uFF0C\u901A\u4FE1\u57FA\u672C\u5B8C\u5168\u5229\u7528\u6709\u7EBF\u6216\u65E0\u7EBF\u7535\u5B8C\u6210\uFF0C\u76F8\u7EE7\u51FA\u73B0\u4E86\u6709\u7EBF\u7535\u8BDD\u3001\u56FA\u5B9A\u7535\u8BDD\u3001\u65E0\u7EBF\u7535\u8BDD\u3001\u624B\u673A\u3001\u4E92\u8054\u7F51\u751A\u81F3\u89C6\u9891\u7535\u8BDD\u7B49\u5404\u79CD\u901A\u4FE1\u65B9\u5F0F\u4ECE\u4E0A\u9762\u8FD9\u6BB5\u8BDD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u901A\u4FE1\u7684\u672C\u8D28\u662F\u4FE1\u606F\u540C\u6B65\uFF0C\u5171\u4EAB\u56DE\u5230<code>vue</code>\u4E2D\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u7684\u90FD\u6709\u72EC\u81EA\u7684\u4F5C\u7528\u57DF\uFF0C\u7EC4\u4EF6\u95F4\u7684\u6570\u636E\u662F\u65E0\u6CD5\u5171\u4EAB\u7684\u4F46\u5B9E\u9645\u5F00\u53D1\u5DE5\u4F5C\u4E2D\u6211\u4EEC\u5E38\u5E38\u9700\u8981\u8BA9\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\uFF0C\u8FD9\u4E5F\u662F\u7EC4\u4EF6\u901A\u4FE1\u7684\u76EE\u7684\u8981\u8BA9\u5B83\u4EEC\u4E92\u76F8\u4E4B\u95F4\u80FD\u8FDB\u884C\u901A\u8BAF\uFF0C\u8FD9\u6837\u624D\u80FD\u6784\u6210\u4E00\u4E2A\u6709\u673A\u7684\u5B8C\u6574\u7CFB\u7EDF</p><h2 id="\u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u5206\u7C7B" aria-hidden="true">#</a> \u4E8C\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u5206\u7C7B</h2><p>\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u5206\u7C7B\u53EF\u4EE5\u5206\u6210\u4EE5\u4E0B</p><ul><li>\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</li><li>\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</li><li>\u7956\u5B59\u4E0E\u540E\u4EE3\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</li><li>\u975E\u5173\u7CFB\u7EC4\u4EF6\u95F4\u4E4B\u95F4\u7684\u901A\u4FE1</li></ul><p>\u5173\u7CFB\u56FE:</p><p><img src="https://static.vue-js.com/85b92400-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E09\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u6848" aria-hidden="true">#</a> \u4E09\u3001\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u6848</h2><p>\u6574\u7406<code>vue</code>\u4E2D8\u79CD\u5E38\u89C4\u7684\u901A\u4FE1\u65B9\u6848</p><ol><li>\u901A\u8FC7 props \u4F20\u9012</li><li>\u901A\u8FC7 $emit \u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</li><li>\u4F7F\u7528 ref</li><li>EventBus</li><li>$parent \u6216$root</li><li>attrs \u4E0E listeners</li><li>Provide \u4E0E Inject</li><li>Vuex</li></ol><h3 id="props\u4F20\u9012\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#props\u4F20\u9012\u6570\u636E" aria-hidden="true">#</a> props\u4F20\u9012\u6570\u636E</h3><p><img src="https://static.vue-js.com/8f80a670-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li>\u9002\u7528\u573A\u666F\uFF1A\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u7ED9\u5B50\u7EC4\u4EF6</li><li>\u5B50\u7EC4\u4EF6\u8BBE\u7F6E<code>props</code>\u5C5E\u6027\uFF0C\u5B9A\u4E49\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</li><li>\u7236\u7EC4\u4EF6\u5728\u4F7F\u7528\u5B50\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u901A\u8FC7\u5B57\u9762\u91CF\u6765\u4F20\u9012\u503C</li></ul><p><code>Children.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>  
    <span class="token comment">// \u5B57\u7B26\u4E32\u5F62\u5F0F  </span>
 name<span class="token operator">:</span>String <span class="token comment">// \u63A5\u6536\u7684\u7C7B\u578B\u53C2\u6570  </span>
    <span class="token comment">// \u5BF9\u8C61\u5F62\u5F0F  </span>
    age<span class="token operator">:</span><span class="token punctuation">{</span>    
        type<span class="token operator">:</span>Number<span class="token punctuation">,</span> <span class="token comment">// \u63A5\u6536\u7684\u7C7B\u578B\u4E3A\u6570\u503C  </span>
        defaule<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>  <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3A18  </span>
       require<span class="token operator">:</span><span class="token boolean">true</span> <span class="token comment">// age\u5C5E\u6027\u5FC5\u987B\u4F20\u9012  </span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>Father.vue</code>\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Children name<span class="token operator">=</span><span class="token string">&quot;jack&quot;</span> age<span class="token operator">=</span><span class="token number">18</span> <span class="token operator">/</span><span class="token operator">&gt;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="emit-\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#emit-\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> $emit \u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><ul><li>\u9002\u7528\u573A\u666F\uFF1A\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u7ED9\u7236\u7EC4\u4EF6</li><li>\u5B50\u7EC4\u4EF6\u901A\u8FC7<code>$emit\u89E6\u53D1</code>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C<code>$emit</code>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4F20\u9012\u7684\u6570\u503C</li><li>\u7236\u7EC4\u4EF6\u7ED1\u5B9A\u76D1\u542C\u5668\u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570</li></ul><p><code>Chilfen.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> good<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Father.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Children @add<span class="token operator">=</span><span class="token string">&quot;cartAdd($event)&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><ul><li>\u7236\u7EC4\u4EF6\u5728\u4F7F\u7528\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\u8BBE\u7F6E<code>ref</code></li><li>\u7236\u7EC4\u4EF6\u901A\u8FC7\u8BBE\u7F6E\u5B50\u7EC4\u4EF6<code>ref</code>\u6765\u83B7\u53D6\u6570\u636E</li></ul><p>\u7236\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Children ref<span class="token operator">=</span><span class="token string">&quot;foo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>  
  
<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>foo  <span class="token comment">// \u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u901A\u8FC7\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u6211\u4EEC\u5C31\u80FD\u62FF\u5230\u5BF9\u5E94\u7684\u6570\u636E  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="eventbus" tabindex="-1"><a class="header-anchor" href="#eventbus" aria-hidden="true">#</a> EventBus</h3><ul><li>\u4F7F\u7528\u573A\u666F\uFF1A\u5144\u5F1F\u7EC4\u4EF6\u4F20\u503C</li><li>\u521B\u5EFA\u4E00\u4E2A\u4E2D\u592E\u4E8B\u4EF6\u603B\u7EBF<code>EventBus</code></li><li>\u5144\u5F1F\u7EC4\u4EF6\u901A\u8FC7<code>$emit</code>\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C<code>$emit</code>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4F20\u9012\u7684\u6570\u503C</li><li>\u53E6\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u901A\u8FC7<code>$on</code>\u76D1\u542C\u81EA\u5B9A\u4E49\u4E8B\u4EF6</li></ul><p><code>Bus.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E2D\u592E\u65F6\u95F4\u603B\u7EBF\u7C7B  </span>
<span class="token keyword">class</span> <span class="token class-name">Bus</span> <span class="token punctuation">{</span>  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">// \u5B58\u653E\u4E8B\u4EF6\u7684\u540D\u5B57  </span>
  <span class="token punctuation">}</span>  
  <span class="token function">$on</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
    <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token function">$emit</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
      <span class="token keyword">this</span><span class="token punctuation">.</span>callbacks<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token comment">// main.js  </span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5C06$bus\u6302\u8F7D\u5230vue\u5B9E\u4F8B\u7684\u539F\u578B\u4E0A  </span>
<span class="token comment">// \u53E6\u4E00\u79CD\u65B9\u5F0F  </span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Vue\u5DF2\u7ECF\u5B9E\u73B0\u4E86Bus\u7684\u529F\u80FD  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>Children1.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Children2.vue</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handle<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="parent-\u6216-root" tabindex="-1"><a class="header-anchor" href="#parent-\u6216-root" aria-hidden="true">#</a> $parent \u6216$\xA0root</h3><ul><li>\u901A\u8FC7\u5171\u540C\u7956\u8F88<code>$parent</code>\u6216\u8005<code>$root</code>\u642D\u5EFA\u901A\u4FE1\u6865\u8FDE</li></ul><p>\u5144\u5F1F\u7EC4\u4EF6</p><p><code>this.$parent.on(&#39;add&#39;,this.add) </code></p><p>\u53E6\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6</p><p><code>this.$parent.emit(&#39;add&#39;) </code></p><h3 id="attrs-\u4E0E-listeners" tabindex="-1"><a class="header-anchor" href="#attrs-\u4E0E-listeners" aria-hidden="true">#</a> $attrs \u4E0E$ listeners</h3><ul><li>\u9002\u7528\u573A\u666F\uFF1A\u7956\u5148\u4F20\u9012\u6570\u636E\u7ED9\u5B50\u5B59</li><li>\u8BBE\u7F6E\u6279\u91CF\u5411\u4E0B\u4F20\u5C5E\u6027<code>$attrs</code>\u548C <code>$listeners</code></li><li>\u5305\u542B\u4E86\u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\u4E0D\u4F5C\u4E3A <code>prop</code> \u88AB\u8BC6\u522B (\u4E14\u83B7\u53D6) \u7684\u7279\u6027\u7ED1\u5B9A ( class \u548C style \u9664\u5916)\u3002</li><li>\u53EF\u4EE5\u901A\u8FC7 <code>v-bind=&quot;$attrs&quot;</code> \u4F20\u2F0A\u5185\u90E8\u7EC4\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// child\uFF1A\u5E76\u672A\u5728props\u4E2D\u58F0\u660Efoo  </span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$attrs<span class="token punctuation">.</span>foo<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>  
  
<span class="token comment">// parent  </span>
<span class="token operator">&lt;</span>HelloWorld foo<span class="token operator">=</span><span class="token string">&quot;foo&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED9Grandson\u9694\u4EE3\u4F20\u503C\uFF0Ccommunication/index.vue  </span>
<span class="token operator">&lt;</span>Child2 msg<span class="token operator">=</span><span class="token string">&quot;lalala&quot;</span> @some<span class="token operator">-</span>event<span class="token operator">=</span><span class="token string">&quot;onSomeEvent&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Child2<span class="token operator">&gt;</span>  
  
<span class="token comment">// Child2\u505A\u5C55\u5F00  </span>
<span class="token operator">&lt;</span>Grandson v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span> v<span class="token operator">-</span>on<span class="token operator">=</span><span class="token string">&quot;$listeners&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Grandson<span class="token operator">&gt;</span>  
  
<span class="token comment">// Grandson\u4F7F\u2F64  </span>
<span class="token operator">&lt;</span>div @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;some-event&#39;, &#39;msg from grandson&#39;)&quot;</span><span class="token operator">&gt;</span>  
<span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#provide-\u4E0E-inject" aria-hidden="true">#</a> provide \u4E0E inject</h3><ul><li>\u5728\u7956\u5148\u7EC4\u4EF6\u5B9A\u4E49<code>provide</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4F20\u9012\u7684\u503C</li><li>\u5728\u540E\u4EE3\u7EC4\u4EF6\u901A\u8FC7<code>inject</code>\u63A5\u6536\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u503C</li></ul><p>\u7956\u5148\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token punctuation">{</span>  
        foo<span class="token operator">:</span><span class="token string">&#39;foo&#39;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u540E\u4EE3\u7EC4\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">inject</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u83B7\u53D6\u5230\u7956\u5148\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u503C  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> <code>vuex</code></h3><ul><li><p>\u9002\u7528\u573A\u666F: \u590D\u6742\u5173\u7CFB\u7684\u7EC4\u4EF6\u6570\u636E\u4F20\u9012</p></li><li><p><code>Vuex</code>\u4F5C\u7528\u76F8\u5F53\u4E8E\u4E00\u4E2A\u7528\u6765\u5B58\u50A8\u5171\u4EAB\u53D8\u91CF\u7684\u5BB9\u5668 <img src="https://static.vue-js.com/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png" alt=""></p></li><li><p><code>state</code>\u7528\u6765\u5B58\u653E\u5171\u4EAB\u53D8\u91CF\u7684\u5730\u65B9</p></li><li><p><code>getter</code>\uFF0C\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A<code>getter</code>\u6D3E\u751F\u72B6\u6001\uFF0C(\u76F8\u5F53\u4E8E<code>store</code>\u4E2D\u7684\u8BA1\u7B97\u5C5E\u6027\uFF09\uFF0C\u7528\u6765\u83B7\u5F97\u5171\u4EAB\u53D8\u91CF\u7684\u503C</p></li><li><p><code>mutations</code>\u7528\u6765\u5B58\u653E\u4FEE\u6539<code>state</code>\u7684\u65B9\u6CD5\u3002</p></li><li><p><code>actions</code>\u4E5F\u662F\u7528\u6765\u5B58\u653E\u4FEE\u6539state\u7684\u65B9\u6CD5\uFF0C\u4E0D\u8FC7<code>action</code>\u662F\u5728<code>mutations</code>\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u3002\u5E38\u7528\u6765\u505A\u4E00\u4E9B\u5F02\u6B65\u64CD\u4F5C</p></li></ul><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><ul><li>\u7236\u5B50\u5173\u7CFB\u7684\u7EC4\u4EF6\u6570\u636E\u4F20\u9012\u9009\u62E9 <code>props</code> \xA0\u4E0E <code>$emit</code>\u8FDB\u884C\u4F20\u9012\uFF0C\u4E5F\u53EF\u9009\u62E9<code>ref</code></li><li>\u5144\u5F1F\u5173\u7CFB\u7684\u7EC4\u4EF6\u6570\u636E\u4F20\u9012\u53EF\u9009\u62E9<code>$bus</code>\uFF0C\u5176\u6B21\u53EF\u4EE5\u9009\u62E9<code>$parent</code>\u8FDB\u884C\u4F20\u9012</li><li>\u7956\u5148\u4E0E\u540E\u4EE3\u7EC4\u4EF6\u6570\u636E\u4F20\u9012\u53EF\u9009\u62E9<code>attrs</code>\u4E0E<code>listeners</code>\u6216\u8005 <code>Provide</code>\u4E0E <code>Inject</code></li><li>\u590D\u6742\u5173\u7CFB\u7684\u7EC4\u4EF6\u6570\u636E\u4F20\u9012\u53EF\u4EE5\u901A\u8FC7<code>vuex</code>\u5B58\u653E\u5171\u4EAB\u7684\u53D8\u91CF</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,64),d={href:"https://juejin.cn/post/6844903990052782094#heading-0",target:"_blank",rel:"noopener noreferrer"},k=e("https://juejin.cn/post/6844903990052782094#heading-0"),m=n("li",null,"https://zh.wikipedia.org/wiki/%E9%80%9A%E4%BF%A1",-1),b={href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"},h=e("https://vue3js.cn/docs/zh");function v(g,f){const s=t("ExternalLinkIcon");return o(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),m,n("li",null,[n("a",b,[h,a(s)])])])],64)}var $=p(i,[["render",v],["__file","communication.html.vue"]]);export{$ as default};
