import{_ as n,e as s}from"./app.6e1280c8.js";const a={},e=s(`<h1 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h1><ul><li>[x] <a href="./flexbox">Flexbox \u5F39\u6027\u5E03\u5C40</a></li></ul><h2 id="css3-\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#css3-\u65B0\u7279\u6027" aria-hidden="true">#</a> CSS3 \u65B0\u7279\u6027</h2><ol><li>\u590D\u6742\u7684\u9009\u62E9\u5668</li><li>\u5F39\u6027\u5E03\u5C40</li><li>\u52A8\u753B</li></ol><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><ol><li>\u4ECB\u7ECD\u4E00\u4E0B\u6807\u51C6\u7684CSS\u7684\u76D2\u5B50\u6A21\u578B?\u4E0E\u4F4E\u7248\u672CIE\u7684\u76D2\u5B50\u6A21\u578B\u6709\u4EC0\u4E48\u4E0D\u540C\u7684?</li><li>CSS\u9009\u62E9\u7B26\u6709\u54EA\u4E9B?\u54EA\u4E9B\u5C5E\u6027\u53EF\u4EE5\u7EE7\u627F?</li><li>CSS\u4F18\u5148\u7EA7\u7B97\u6CD5\u5982\u4F55\u8BA1\u7B97?</li><li>CSS3\u65B0\u589E\u4F2A\u7C7B\u6709\u90A3\u4E9B?</li><li>\u5982\u4F55\u5C45\u4E2Ddiv?\u5982\u4F55\u5C45\u4E2D\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20?\u5982\u4F55\u8BA9\u7EDD\u5BF9\u5B9A\u4F4D\u7684div\u5C45\u4E2D?</li><li>display\u6709\u54EA\u4E9B\u503C?\u8BF4\u660E\u4ED6\u4EEC\u7684\u4F5C\u7528\u3002</li><li>position\u7684\u503Crelative\u548Cabsolute\u5B9A\u4F4D\u539F\u70B9\u662F?</li><li>CSS3\u6709\u54EA\u4E9B\u65B0\u7279\u6027?</li><li>\u8BF7\u89E3\u91CA\u4E00\u4E0BCSS3\u7684Flexbox(\u5F39\u6027\u76D2\u5E03\u5C40\u6A21\u578B),\u4EE5\u53CA\u9002\u7528\u573A\u666F?</li><li>\u7528\u7EAFCSS\u521B\u5EFA\u4E00\u4E2A\u4E09\u89D2\u5F62\u7684\u539F\u7406\u662F\u4EC0\u4E48?</li></ol><h3 id="css\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#css\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7" aria-hidden="true">#</a> CSS\u9009\u62E9\u5668\u7684\u4F18\u5148\u7EA7</h3><ol><li>!important</li><li>\u5185\u8054\u6837\u5F0F\uFF081000\uFF09</li><li>ID\u9009\u62E9\u5668\uFF080100\uFF09</li><li>\u7C7B\u9009\u62E9\u5668/\u5C5E\u6027\u9009\u62E9\u5668/\u4F2A\u7C7B\u9009\u62E9\u5668\uFF080010\uFF09</li><li>\u5143\u7D20\u9009\u62E9\u5668/\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF080001\uFF09</li><li>\u5173\u7CFB\u9009\u62E9\u5668/\u901A\u914D\u7B26\u9009\u62E9\u5668\uFF080000\uFF09</li></ol><h2 id="\u600E\u4E48\u5B9E\u73B01\u50CF\u7D20\u8FB9\u6846" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u5B9E\u73B01\u50CF\u7D20\u8FB9\u6846" aria-hidden="true">#</a> \u600E\u4E48\u5B9E\u73B01\u50CF\u7D20\u8FB9\u6846</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
  .thinner</span><span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.thinner:before</span><span class="token punctuation">{</span>
   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
   <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #f00<span class="token punctuation">;</span>
   <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
   <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,10);function p(t,l){return e}var o=n(a,[["render",p],["__file","index.html.vue"]]);export{o as default};
