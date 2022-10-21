import{_ as n,e as s}from"./app.6e1280c8.js";const a={},p=s(`<h1 id="typeof-\u4E0E-instanceof-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#typeof-\u4E0E-instanceof-\u533A\u522B" aria-hidden="true">#</a> typeof \u4E0E instanceof \u533A\u522B</h1><p><img src="https://static.vue-js.com/3fc158f0-7710-11eb-ab90-d9ae814b240d.png" alt="image"></p><blockquote><p><code>typeof</code> \u662F\u5426\u80FD\u6B63\u786E\u5224\u65AD\u7C7B\u578B\uFF1F<code>instanceof</code> \u80FD\u6B63\u786E\u5224\u65AD\u5BF9\u8C61\u7684\u539F\u7406\u662F\u4EC0\u4E48 \u5982\u679C\u6211\u4EEC\u60F3\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u7684\u6B63\u786E\u7C7B\u578B\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 <code>instanceof</code>\uFF0C\u56E0\u4E3A\u5185\u90E8\u673A\u5236\u662F\u901A\u8FC7\u539F\u578B\u94FE\u6765\u5224\u65AD\u7684</p></blockquote><h2 id="\u4E00\u3001typeof" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001typeof" aria-hidden="true">#</a> \u4E00\u3001typeof</h2><p><code>typeof</code> \u64CD\u4F5C\u7B26\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u672A\u7ECF\u8BA1\u7B97\u7684\u64CD\u4F5C\u6570\u7684\u7C7B\u578B</p><ul><li>\u539F\u59CB\u7C7B\u578B\uFF1A\u9664\u4E86 <code>null</code> \u90FD\u53EF\u4EE5\u663E\u793A\u6B63\u786E\u7684\u7C7B\u578B</li><li>\u5BF9\u8C61\uFF1A\u9664\u4E86\u51FD\u6570\u90FD\u4F1A\u663E\u793A <code>object</code>\uFF0C\u6240\u4EE5\u8BF4 <code>typeof</code> \u5E76\u4E0D\u80FD\u51C6\u786E\u5224\u65AD\u53D8\u91CF\u5230\u5E95\u662F\u4EC0\u4E48\u7C7B\u578B</li></ul><p>\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> operand
<span class="token keyword">typeof</span><span class="token punctuation">(</span>operand<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>operand</code>\u8868\u793A\u5BF9\u8C61\u6216\u539F\u59CB\u503C\u7684\u8868\u8FBE\u5F0F\uFF0C\u5176\u7C7B\u578B\u5C06\u88AB\u8FD4\u56DE</p><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token number">1</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token keyword">typeof</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// &#39;string&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span> <span class="token comment">// &#39;undefined&#39;</span>
<span class="token keyword">typeof</span> <span class="token boolean">true</span> <span class="token comment">// &#39;boolean&#39;</span>
<span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;symbol&#39;</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// &#39;object&#39;</span>

<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console <span class="token comment">// &#39;object&#39;</span>
<span class="token keyword">typeof</span> console<span class="token punctuation">.</span>log <span class="token comment">// &#39;function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4ECE\u4E0A\u9762\u4F8B\u5B50\uFF0C\u524D6\u4E2A\u90FD\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\u3002\u867D\u7136<code>typeof null</code>\u4E3A<code>object</code>\uFF0C\u4F46\u8FD9\u53EA\u662F<code>JavaScript</code> \u5B58\u5728\u7684\u4E00\u4E2A\u60A0\u4E45 <code>Bug</code>\uFF0C\u4E0D\u4EE3\u8868<code>null</code>\u5C31\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u5E76\u4E14<code>null</code>\u672C\u8EAB\u4E5F\u4E0D\u662F\u5BF9\u8C61</p><p>\u6240\u4EE5\uFF0C<code>null</code>\u5728 <code>typeof</code>\u4E4B\u540E\u8FD4\u56DE\u7684\u662F\u6709\u95EE\u9898\u7684\u7ED3\u679C\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u5224\u65AD<code>null</code>\u7684\u65B9\u6CD5\u3002\u5982\u679C\u4F60\u9700\u8981\u5728 <code>if</code> \u8BED\u53E5\u4E2D\u5224\u65AD\u662F\u5426\u4E3A <code>null</code>\uFF0C\u76F4\u63A5\u901A\u8FC7<code>===null</code>\u6765\u5224\u65AD\u5C31\u597D</p><p>\u540C\u65F6\uFF0C\u53EF\u4EE5\u53D1\u73B0\u5F15\u7528\u7C7B\u578B\u6570\u636E\uFF0C\u7528<code>typeof</code>\u6765\u5224\u65AD\u7684\u8BDD\uFF0C\u9664\u4E86<code>function</code>\u4F1A\u88AB\u8BC6\u522B\u51FA\u6765\u4E4B\u5916\uFF0C\u5176\u4F59\u7684\u90FD\u8F93\u51FA<code>object</code></p><p>\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5224\u65AD\u4E00\u4E2A\u53D8\u91CF\u662F\u5426\u5B58\u5728\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>typeof</code>\uFF1A(\u4E0D\u80FD\u4F7F\u7528<code>if(a)</code>\uFF0C \u82E5<code>a</code>\u672A\u58F0\u660E\uFF0C\u5219\u62A5\u9519)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">!=</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u53D8\u91CF\u5B58\u5728</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4E8C\u3001instanceof" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001instanceof" aria-hidden="true">#</a> \u4E8C\u3001instanceof</h2><blockquote><p>\u5BF9\u4E8E\u539F\u59CB\u7C7B\u578B\u6765\u8BF4\uFF0C\u4F60\u60F3\u76F4\u63A5\u901A\u8FC7 <code>instanceof</code>\u6765\u5224\u65AD\u7C7B\u578B\u662F\u4E0D\u884C\u7684</p></blockquote><p><code>instanceof</code> \u8FD0\u7B97\u7B26\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A</p><p>\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>object <span class="token keyword">instanceof</span> <span class="token class-name">constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>object</code>\u4E3A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C<code>constructor</code>\u4E3A\u6784\u9020\u51FD\u6570</p><p>\u6784\u9020\u51FD\u6570\u901A\u8FC7<code>new</code>\u53EF\u4EE5\u5B9E\u4F8B\u5BF9\u8C61\uFF0C<code>instanceof</code>\u80FD\u5224\u65AD\u8FD9\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u4E4B\u524D\u90A3\u4E2A\u6784\u9020\u51FD\u6570\u751F\u6210\u7684\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u6784\u5EFA\u51FD\u6570</span>
<span class="token keyword">let</span> <span class="token function-variable function">Car</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> benz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
benz <span class="token keyword">instanceof</span> <span class="token class-name">Car</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
car <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5173\u4E8E<code>instanceof</code>\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5148\u7528typeof\u6765\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u662F\uFF0C\u76F4\u63A5\u8FD4\u56DEfalse</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> left <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// getProtypeOf\u662FObject\u5BF9\u8C61\u81EA\u5E26\u7684API\uFF0C\u80FD\u591F\u62FF\u5230\u53C2\u6570\u7684\u539F\u578B\u5BF9\u8C61</span>
    <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                  
        <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//\u627E\u5230\u76F8\u540C\u539F\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DEtrue</span>
        proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeof</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E5F\u5C31\u662F\u987A\u7740\u539F\u578B\u94FE\u53BB\u627E\uFF0C\u76F4\u5230\u627E\u5230\u76F8\u540C\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u8FD4\u56DE<code>true</code>\uFF0C\u5426\u5219\u4E3A<code>false</code></p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p><code>typeof</code>\u4E0E<code>instanceof</code>\u90FD\u662F\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u533A\u522B\u5982\u4E0B\uFF1A</p><ul><li><p><code>typeof</code>\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u53D8\u91CF\u7684\u57FA\u672C\u7C7B\u578B\uFF0C<code>instanceof</code>\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5E03\u5C14\u503C</p></li><li><p><code>instanceof</code> \u53EF\u4EE5\u51C6\u786E\u5730\u5224\u65AD\u590D\u6742\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u4F46\u662F\u4E0D\u80FD\u6B63\u786E\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B</p></li><li><p>\u800C<code>typeof</code> \u4E5F\u5B58\u5728\u5F0A\u7AEF\uFF0C\u5B83\u867D\u7136\u53EF\u4EE5\u5224\u65AD\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF08<code>null</code> \u9664\u5916\uFF09\uFF0C\u4F46\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u4E2D\uFF0C\u9664\u4E86<code>function</code> \u7C7B\u578B\u4EE5\u5916\uFF0C\u5176\u4ED6\u7684\u4E5F\u65E0\u6CD5\u5224\u65AD</p></li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4E0A\u8FF0\u4E24\u79CD\u65B9\u6CD5\u90FD\u6709\u5F0A\u7AEF\uFF0C\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u6240\u6709\u573A\u666F\u7684\u9700\u6C42</p><p>\u5982\u679C\u9700\u8981\u901A\u7528\u68C0\u6D4B\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u91C7\u7528<code>Object.prototype.toString</code>\uFF0C\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u7EDF\u4E00\u8FD4\u56DE\u683C\u5F0F<code>\u201C[object Xxx]\u201D</code>\u7684\u5B57\u7B26\u4E32</p><p>\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>       <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// \u540C\u4E0A\u7ED3\u679C\uFF0C\u52A0\u4E0Acall\u4E5Fok</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;[object Function]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token comment">//&quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>    <span class="token comment">//&quot;[object RegExp]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//&quot;[object Date]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>       <span class="token comment">//&quot;[object Array]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span>  <span class="token comment">//&quot;[object HTMLDocument]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>   <span class="token comment">//&quot;[object Window]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E86\u89E3\u4E86<code>toString</code>\u7684\u57FA\u672C\u7528\u6CD5\uFF0C\u4E0B\u9762\u5C31\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u901A\u7528\u7684\u6570\u636E\u7C7B\u578B\u5224\u65AD\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> type  <span class="token operator">=</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">// \u5148\u8FDB\u884Ctypeof\u5224\u65AD\uFF0C\u5982\u679C\u662F\u57FA\u7840\u6570\u636E\u7C7B\u578B\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">return</span> type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5BF9\u4E8Etypeof\u8FD4\u56DE\u7ED3\u679C\u662Fobject\u7684\uFF0C\u518D\u8FDB\u884C\u5982\u4E0B\u7684\u5224\u65AD\uFF0C\u6B63\u5219\u8FD4\u56DE\u7ED3\u679C</span>
  <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\[object (\\S+)\\]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F7F\u7528\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>     <span class="token comment">// &quot;Array&quot; typeof []\u662Fobject\uFF0C\u56E0\u6B64toString\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// &quot;string&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">// &quot;Window&quot; toString\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;Null&quot;\u9996\u5B57\u6BCD\u5927\u5199\uFF0Ctypeof null\u662Fobject\uFF0C\u9700toString\u6765\u5224\u65AD</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;undefined&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">// &quot;undefined&quot; typeof \u76F4\u63A5\u8FD4\u56DE</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;function&quot; typeof\u80FD\u5224\u65AD\uFF0C\u56E0\u6B64\u9996\u5B57\u6BCD\u5C0F\u5199</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">123</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>      <span class="token comment">//&quot;RegExp&quot; toString\u8FD4\u56DE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,38);function t(e,o){return p}var l=n(a,[["render",t],["__file","typeof_instanceof.html.vue"]]);export{l as default};
