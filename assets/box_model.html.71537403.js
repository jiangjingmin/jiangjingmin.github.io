import{_ as p,r as t,o,a as c,b as n,e as s,F as l,c as i,d as e}from"./app.8c5ff8f0.js";const r={},d=i(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9\u76D2\u5B50\u6A21\u578B\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u5BF9\u76D2\u5B50\u6A21\u578B\u7684\u7406\u89E3" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9\u76D2\u5B50\u6A21\u578B\u7684\u7406\u89E3?</h1><p><img src="https://static.vue-js.com/8d0e9ca0-8f9b-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5F53\u5BF9\u4E00\u4E2A\u6587\u6863\u8FDB\u884C\u5E03\u5C40\uFF08layout\uFF09\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u5F15\u64CE\u4F1A\u6839\u636E\u6807\u51C6\u4E4B\u4E00\u7684 CSS \u57FA\u7840\u6846\u76D2\u6A21\u578B\uFF08CSS basic box model\uFF09\uFF0C\u5C06\u6240\u6709\u5143\u7D20\u8868\u793A\u4E3A\u4E00\u4E2A\u4E2A\u77E9\u5F62\u7684\u76D2\u5B50\uFF08box\uFF09</p><p>\u4E00\u4E2A\u76D2\u5B50\u7531\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A<code>content</code>\u3001<code>padding</code>\u3001<code>border</code>\u3001<code>margin</code></p><p><img src="https://static.vue-js.com/976789a0-8f9b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p><code>content</code>\uFF0C\u5373\u5B9E\u9645\u5185\u5BB9\uFF0C\u663E\u793A\u6587\u672C\u548C\u56FE\u50CF</p><p><code>boreder</code>\uFF0C\u5373\u8FB9\u6846\uFF0C\u56F4\u7ED5\u5143\u7D20\u5185\u5BB9\u7684\u5185\u8FB9\u8DDD\u7684\u4E00\u6761\u6216\u591A\u6761\u7EBF\uFF0C\u7531\u7C97\u7EC6\u3001\u6837\u5F0F\u3001\u989C\u8272\u4E09\u90E8\u5206\u7EC4\u6210</p><p><code>padding</code>\uFF0C\u5373\u5185\u8FB9\u8DDD\uFF0C\u6E05\u9664\u5185\u5BB9\u5468\u56F4\u7684\u533A\u57DF\uFF0C\u5185\u8FB9\u8DDD\u662F\u900F\u660E\u7684\uFF0C\u53D6\u503C\u4E0D\u80FD\u4E3A\u8D1F\uFF0C\u53D7\u76D2\u5B50\u7684<code>background</code>\u5C5E\u6027\u5F71\u54CD</p><p><code>margin</code>\uFF0C\u5373\u5916\u8FB9\u8DDD\uFF0C\u5728\u5143\u7D20\u5916\u521B\u5EFA\u989D\u5916\u7684\u7A7A\u767D\uFF0C\u7A7A\u767D\u901A\u5E38\u6307\u4E0D\u80FD\u653E\u5176\u4ED6\u5143\u7D20\u7684\u533A\u57DF</p><p>\u4E0A\u8FF0\u662F\u4E00\u4E2A\u4ECE\u4E8C\u7EF4\u7684\u89D2\u5EA6\u89C2\u5BDF\u76D2\u5B50\uFF0C\u4E0B\u9762\u518D\u770B\u770B\u770B\u4E09\u7EF4\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/b2548b00-8f9b-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u4E0B\u9762\u6765\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u76D2\u5B50\u6A21\u578B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F53\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u67E5\u770B\u5143\u7D20\u65F6\uFF0C\u5374\u53D1\u73B0\u5143\u7D20\u7684\u5927\u5C0F\u53D8\u6210\u4E86<code>240px</code></p><p>\u8FD9\u662F\u56E0\u4E3A\uFF0C\u5728<code>CSS</code>\u4E2D\uFF0C\u76D2\u5B50\u6A21\u578B\u53EF\u4EE5\u5206\u6210\uFF1A</p><ul><li>W3C \u6807\u51C6\u76D2\u5B50\u6A21\u578B</li><li>IE \u602A\u5F02\u76D2\u5B50\u6A21\u578B</li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u76D2\u5B50\u6A21\u578B\u4E3A<code>W3C</code> \u6807\u51C6\u76D2\u5B50\u6A21\u578B</p><h2 id="\u4E8C\u3001\u6807\u51C6\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6807\u51C6\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> \u4E8C\u3001\u6807\u51C6\u76D2\u5B50\u6A21\u578B</h2><p>\u6807\u51C6\u76D2\u5B50\u6A21\u578B\uFF0C\u662F\u6D4F\u89C8\u5668\u9ED8\u8BA4\u7684\u76D2\u5B50\u6A21\u578B</p><p>\u4E0B\u9762\u770B\u770B\u6807\u51C6\u76D2\u5B50\u6A21\u578B\u7684\u6A21\u578B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/c0e1d2e0-8f9b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\uFF1A</p><ul><li><p>\u76D2\u5B50\u603B\u5BBD\u5EA6 = width + padding + border + margin;</p></li><li><p>\u76D2\u5B50\u603B\u9AD8\u5EA6 = height + padding + border + margin</p></li></ul><p>\u4E5F\u5C31\u662F\uFF0C<code>width/height</code> \u53EA\u662F\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u4E0D\u5305\u542B <code>padding</code> \u548C <code>border</code>\u503C</p><p>\u6240\u4EE5\u4E0A\u9762\u95EE\u9898\u4E2D\uFF0C\u8BBE\u7F6E<code>width</code>\u4E3A200px\uFF0C\u4F46\u7531\u4E8E\u5B58\u5728<code>padding</code>\uFF0C\u4F46\u5B9E\u9645\u4E0A\u76D2\u5B50\u7684\u5BBD\u5EA6\u6709240px</p><h2 id="\u4E09\u3001ie-\u602A\u5F02\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001ie-\u602A\u5F02\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> \u4E09\u3001IE \u602A\u5F02\u76D2\u5B50\u6A21\u578B</h2><p>\u540C\u6837\u770B\u770BIE \u602A\u5F02\u76D2\u5B50\u6A21\u578B\u7684\u6A21\u578B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/cfbb3ef0-8f9b-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\uFF1A</p><ul><li><p>\u76D2\u5B50\u603B\u5BBD\u5EA6 = width + margin;</p></li><li><p>\u76D2\u5B50\u603B\u9AD8\u5EA6 = height + margin;</p></li></ul><p>\u4E5F\u5C31\u662F\uFF0C<code>width/height</code> \u5305\u542B\u4E86 <code>padding</code>\u548C <code>border</code>\u503C</p><h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> Box-sizing</h2><p>CSS \u4E2D\u7684 box-sizing \u5C5E\u6027\u5B9A\u4E49\u4E86\u5F15\u64CE\u5E94\u8BE5\u5982\u4F55\u8BA1\u7B97\u4E00\u4E2A\u5143\u7D20\u7684\u603B\u5BBD\u5EA6\u548C\u603B\u9AD8\u5EA6</p><p>\u8BED\u6CD5\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box|border-box|<span class="token property">inherit</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>content-box \u9ED8\u8BA4\u503C\uFF0C\u5143\u7D20\u7684 width/height \u4E0D\u5305\u542Bpadding\uFF0Cborder\uFF0C\u4E0E\u6807\u51C6\u76D2\u5B50\u6A21\u578B\u8868\u73B0\u4E00\u81F4</li><li>border-box \u5143\u7D20\u7684 width/height \u5305\u542B padding\uFF0Cborder\uFF0C\u4E0E\u602A\u5F02\u76D2\u5B50\u6A21\u578B\u8868\u73B0\u4E00\u81F4</li><li>inherit \u6307\u5B9A box-sizing \u5C5E\u6027\u7684\u503C\uFF0C\u5E94\u8BE5\u4ECE\u7236\u5143\u7D20\u7EE7\u627F</li></ul><p>\u56DE\u5230\u4E0A\u9762\u7684\u4F8B\u5B50\u91CC\uFF0C\u8BBE\u7F6E\u76D2\u5B50\u4E3A border-box \u6A21\u578B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u76D2\u5B50\u6A21\u578B
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u8FD9\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u53D1\u73B0\u76D2\u5B50\u7684\u6240\u5360\u636E\u7684\u5BBD\u5EA6\u4E3A200px</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,41),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",target:"_blank",rel:"noopener noreferrer"},b=e("https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing",target:"_blank",rel:"noopener noreferrer"},g=e("https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing");function k(m,x){const a=t("ExternalLinkIcon");return o(),c(l,null,[d,n("ul",null,[n("li",null,[n("a",u,[b,s(a)])]),n("li",null,[n("a",h,[g,s(a)])])])],64)}var v=p(r,[["render",k],["__file","box_model.html.vue"]]);export{v as default};
