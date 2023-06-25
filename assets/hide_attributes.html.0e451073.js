import{_ as a,r as e,o as t,c as p,a as n,b as i,F as l,e as c,d as o}from"./app.f6b3af9d.js";const d={},r=c(`<h1 id="css\u4E2D-\u6709\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#css\u4E2D-\u6709\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20-\u533A\u522B" aria-hidden="true">#</a> css\u4E2D\uFF0C\u6709\u54EA\u4E9B\u65B9\u5F0F\u53EF\u4EE5\u9690\u85CF\u9875\u9762\u5143\u7D20\uFF1F\u533A\u522B?</h1><h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a> \u4E00\u3001\u524D\u8A00</h2><p>\u5728\u5E73\u5E38\u7684\u6837\u5F0F\u6392\u7248\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9047\u5230\u5C06\u67D0\u4E2A\u6A21\u5757\u9690\u85CF\u7684\u573A\u666F</p><p>\u901A\u8FC7<code>css</code>\u9690\u85CF\u5143\u7D20\u7684\u65B9\u6CD5\u6709\u5F88\u591A\u79CD\uFF0C\u5B83\u4EEC\u770B\u8D77\u6765\u5B9E\u73B0\u7684\u6548\u679C\u662F\u4E00\u81F4\u7684</p><p>\u4F46\u5B9E\u9645\u4E0A\u6BCF\u4E00\u79CD\u65B9\u6CD5\u90FD\u6709\u4E00\u4E1D\u8F7B\u5FAE\u7684\u4E0D\u540C\uFF0C\u8FD9\u4E9B\u4E0D\u540C\u51B3\u5B9A\u4E86\u5728\u4E00\u4E9B\u7279\u5B9A\u573A\u5408\u4E0B\u4F7F\u7528\u54EA\u4E00\u79CD\u65B9\u6CD5</p><h2 id="\u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F</h2><p>\u901A\u8FC7<code>css</code>\u5B9E\u73B0\u9690\u85CF\u5143\u7D20\u65B9\u6CD5\u6709\u5982\u4E0B\uFF1A</p><ul><li>display:none</li><li>visibility:hidden</li><li>opacity:0</li><li>\u8BBE\u7F6Eheight\u3001width\u6A21\u578B\u5C5E\u6027\u4E3A0</li><li>position:absolute</li><li>clip-path</li></ul><h3 id="display-none" tabindex="-1"><a class="header-anchor" href="#display-none" aria-hidden="true">#</a> display:none</h3><p>\u8BBE\u7F6E\u5143\u7D20\u7684<code>display</code>\u4E3A<code>none</code>\u662F\u6700\u5E38\u7528\u7684\u9690\u85CF\u5143\u7D20\u7684\u65B9\u6CD5</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u5143\u7D20\u8BBE\u7F6E\u4E3A<code>display:none</code>\u540E\uFF0C\u5143\u7D20\u5728\u9875\u9762\u4E0A\u5C06\u5F7B\u5E95\u6D88\u5931</p><p>\u5143\u7D20\u672C\u8EAB\u5360\u6709\u7684\u7A7A\u95F4\u5C31\u4F1A\u88AB\u5176\u4ED6\u5143\u7D20\u5360\u6709\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B83\u4F1A\u5BFC\u81F4\u6D4F\u89C8\u5668\u7684\u91CD\u6392\u548C\u91CD\u7ED8</p><p>\u6D88\u5931\u540E\uFF0C\u81EA\u8EAB\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u4E5F\u4E0D\u4F1A\u6709\u8FC7\u6E21\u6548\u679C</p><p>\u7279\u70B9\uFF1A\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u4E0D\u5360\u636E\u7A7A\u95F4\uFF0C\u65E0\u6CD5\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</p><h3 id="visibility-hidden" tabindex="-1"><a class="header-anchor" href="#visibility-hidden" aria-hidden="true">#</a> visibility:hidden</h3><p>\u8BBE\u7F6E\u5143\u7D20\u7684<code>visibility</code>\u4E3A<code>hidden</code>\u4E5F\u662F\u4E00\u79CD\u5E38\u7528\u7684\u9690\u85CF\u5143\u7D20\u7684\u65B9\u6CD5</p><p>\u4ECE\u9875\u9762\u4E0A\u4EC5\u4EC5\u662F\u9690\u85CF\u8BE5\u5143\u7D20\uFF0CDOM\u7ED3\u679C\u5747\u4F1A\u5B58\u5728\uFF0C\u53EA\u662F\u5F53\u65F6\u5728\u4E00\u4E2A\u4E0D\u53EF\u89C1\u7684\u72B6\u6001\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u91CD\u6392\uFF0C\u4F46\u662F\u4F1A\u89E6\u53D1\u91CD\u7ED8</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.hidden</span><span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span>hidden
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7ED9\u4EBA\u7684\u6548\u679C\u662F\u9690\u85CF\u4E86\uFF0C\u6240\u4EE5\u4ED6\u81EA\u8EAB\u7684\u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1</p><p>\u7279\u70B9\uFF1A\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u5360\u636E\u9875\u9762\u7A7A\u95F4\uFF0C\u65E0\u6CD5\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</p><h3 id="opacity-0" tabindex="-1"><a class="header-anchor" href="#opacity-0" aria-hidden="true">#</a> opacity:0</h3><p><code>opacity</code>\u5C5E\u6027\u8868\u793A\u5143\u7D20\u7684\u900F\u660E\u5EA6\uFF0C\u5C06\u5143\u7D20\u7684\u900F\u660E\u5EA6\u8BBE\u7F6E\u4E3A0\u540E\uFF0C\u5728\u6211\u4EEC\u7528\u6237\u773C\u4E2D\uFF0C\u5143\u7D20\u4E5F\u662F\u9690\u85CF\u7684</p><p>\u4E0D\u4F1A\u5F15\u53D1\u91CD\u6392\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E5F\u4F1A\u5F15\u53D1\u91CD\u7ED8</p><blockquote><p>\u5982\u679C\u5229\u7528 animation \u52A8\u753B\uFF0C\u5BF9 opacity \u505A\u53D8\u5316\uFF08animation\u4F1A\u9ED8\u8BA4\u89E6\u53D1GPU\u52A0\u901F\uFF09\uFF0C\u5219\u53EA\u4F1A\u89E6\u53D1 GPU \u5C42\u9762\u7684 composite\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u91CD\u7ED8</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.transparent</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7531\u4E8E\u5176\u4ECD\u7136\u662F\u5B58\u5728\u4E8E\u9875\u9762\u4E0A\u7684\uFF0C\u6240\u4EE5\u4ED6\u81EA\u8EAB\u7684\u7684\u4E8B\u4EF6\u4ECD\u7136\u662F\u53EF\u4EE5\u89E6\u53D1\u7684\uFF0C\u4F46\u88AB\u4ED6\u906E\u6321\u7684\u5143\u7D20\u662F\u4E0D\u80FD\u89E6\u53D1\u5176\u4E8B\u4EF6\u7684</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u5176\u5B50\u5143\u7D20\u4E0D\u80FD\u8BBE\u7F6Eopacity\u6765\u8FBE\u5230\u663E\u793A\u7684\u6548\u679C</p><p>\u7279\u70B9\uFF1A\u6539\u53D8\u5143\u7D20\u900F\u660E\u5EA6\uFF0C\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u5360\u636E\u9875\u9762\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</p><h3 id="\u8BBE\u7F6Eheight\u3001width\u5C5E\u6027\u4E3A0" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Eheight\u3001width\u5C5E\u6027\u4E3A0" aria-hidden="true">#</a> \u8BBE\u7F6Eheight\u3001width\u5C5E\u6027\u4E3A0</h3><p>\u5C06\u5143\u7D20\u7684<code>margin</code>\uFF0C<code>border</code>\uFF0C<code>padding</code>\uFF0C<code>height</code>\u548C<code>width</code>\u7B49\u5F71\u54CD\u5143\u7D20\u76D2\u6A21\u578B\u7684\u5C5E\u6027\u8BBE\u7F6E\u62100\uFF0C\u5982\u679C\u5143\u7D20\u5185\u6709\u5B50\u5143\u7D20\u6216\u5185\u5BB9\uFF0C\u8FD8\u5E94\u8BE5\u8BBE\u7F6E\u5176<code>overflow:hidden</code>\u6765\u9690\u85CF\u5176\u5B50\u5143\u7D20</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.hiddenBox</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>     
    <span class="token property">border</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7279\u70B9\uFF1A\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u4E0D\u5360\u636E\u9875\u9762\u7A7A\u95F4\uFF0C\u65E0\u6CD5\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</p><h3 id="position-absolute" tabindex="-1"><a class="header-anchor" href="#position-absolute" aria-hidden="true">#</a> position:absolute</h3><p>\u5C06\u5143\u7D20\u79FB\u51FA\u53EF\u89C6\u533A\u57DF</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">top</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
   <span class="token property">left</span><span class="token punctuation">:</span> -9999px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7279\u70B9\uFF1A\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u4E0D\u5F71\u54CD\u9875\u9762\u5E03\u5C40</p><h3 id="clip-path" tabindex="-1"><a class="header-anchor" href="#clip-path" aria-hidden="true">#</a> clip-path</h3><p>\u901A\u8FC7\u88C1\u526A\u7684\u5F62\u5F0F</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">,</span>0px 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7279\u70B9\uFF1A\u5143\u7D20\u4E0D\u53EF\u89C1\uFF0C\u5360\u636E\u9875\u9762\u7A7A\u95F4\uFF0C\u65E0\u6CD5\u54CD\u5E94\u70B9\u51FB\u4E8B\u4EF6</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u6700\u5E38\u7528\u7684\u8FD8\u662F<code>display:none</code>\u548C<code>visibility:hidden</code>\uFF0C\u5176\u4ED6\u7684\u65B9\u5F0F\u53EA\u80FD\u8BA4\u4E3A\u662F\u5947\u62DB\uFF0C\u5B83\u4EEC\u7684\u771F\u6B63\u7528\u9014\u5E76\u4E0D\u662F\u7528\u4E8E\u9690\u85CF\u5143\u7D20\uFF0C\u6240\u4EE5\u5E76\u4E0D\u63A8\u8350\u4F7F\u7528\u5B83\u4EEC</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u5173\u4E8E<code>display: none</code>\u3001<code>visibility: hidden</code>\u3001<code>opacity: 0</code>\u7684\u533A\u522B\uFF0C\u5982\u4E0B\u8868\u6240\u793A\uFF1A</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">display: none</th><th style="text-align:left;">visibility: hidden</th><th>opacity: 0</th></tr></thead><tbody><tr><td style="text-align:left;">\u9875\u9762\u4E2D</td><td style="text-align:left;">\u4E0D\u5B58\u5728</td><td style="text-align:left;">\u5B58\u5728</td><td>\u5B58\u5728</td></tr><tr><td style="text-align:left;">\u91CD\u6392</td><td style="text-align:left;">\u4F1A</td><td style="text-align:left;">\u4E0D\u4F1A</td><td>\u4E0D\u4F1A</td></tr><tr><td style="text-align:left;">\u91CD\u7ED8</td><td style="text-align:left;">\u4F1A</td><td style="text-align:left;">\u4F1A</td><td>\u4E0D\u4E00\u5B9A</td></tr><tr><td style="text-align:left;">\u81EA\u8EAB\u7ED1\u5B9A\u4E8B\u4EF6</td><td style="text-align:left;">\u4E0D\u89E6\u53D1</td><td style="text-align:left;">\u4E0D\u89E6\u53D1</td><td>\u53EF\u89E6\u53D1</td></tr><tr><td style="text-align:left;">transition</td><td style="text-align:left;">\u4E0D\u652F\u6301</td><td style="text-align:left;">\u652F\u6301</td><td>\u652F\u6301</td></tr><tr><td style="text-align:left;">\u5B50\u5143\u7D20\u53EF\u590D\u539F</td><td style="text-align:left;">\u4E0D\u80FD</td><td style="text-align:left;">\u80FD</td><td>\u4E0D\u80FD</td></tr><tr><td style="text-align:left;">\u88AB\u906E\u6321\u7684\u5143\u7D20\u53EF\u89E6\u53D1\u4E8B\u4EF6</td><td style="text-align:left;">\u80FD</td><td style="text-align:left;">\u80FD</td><td>\u4E0D\u80FD</td></tr></tbody></table><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,47),u={href:"https://www.cnblogs.com/a-cat/p/9039962.html",target:"_blank",rel:"noopener noreferrer"},h=o("https://www.cnblogs.com/a-cat/p/9039962.html");function b(k,y){const s=e("ExternalLinkIcon");return t(),p(l,null,[r,n("ul",null,[n("li",null,[n("a",u,[h,i(s)])])])],64)}var m=a(d,[["render",b],["__file","hide_attributes.html.vue"]]);export{m as default};
