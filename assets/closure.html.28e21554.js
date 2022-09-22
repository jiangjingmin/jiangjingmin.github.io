import{_ as n,e as s}from"./app.26a788a0.js";var a="/images/fe/javascript/001.png";const p={},t=s('<h1 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h1><p><img src="'+a+`" alt="closure"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><strong>\u4E00\u4E2A\u51FD\u6570\u548C\u5BF9\u5176\u5468\u56F4\u72B6\u6001\uFF08lexical environment\uFF0C\u8BCD\u6CD5\u73AF\u5883\uFF09\u7684\u5F15\u7528\u6346\u7ED1\u5728\u4E00\u8D77\uFF08\u6216\u8005\u8BF4\u51FD\u6570\u88AB\u5F15\u7528\u5305\u56F4\uFF09\uFF0C\u8FD9\u6837\u7684\u7EC4\u5408\u5C31\u662F\u95ED\u5305\uFF08closure\uFF09</strong> \u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u95ED\u5305\u8BA9\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u5185\u5C42\u51FD\u6570\u4E2D\u8BBF\u95EE\u5230\u5176\u5916\u5C42\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u3002\u5728 JavaScript \u4E2D\uFF0C\u6BCF\u5F53\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u95ED\u5305\u5C31\u4F1A\u5728\u51FD\u6570\u521B\u5EFA\u7684\u540C\u65F6\u88AB\u521B\u5EFA\u51FA\u6765\u3002</p><p>\u4E0B\u9762\u7ED9\u51FA\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50-\u3010\u6709\u70B9\u8BEF\u89E3\uFF0C\u5E94\u8BE5\u662F\u8BA9\u5916\u90E8\u80FD\u591F\u8BBF\u95EE\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u3011</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Mozilla&#39;</span><span class="token punctuation">;</span> <span class="token comment">// name \u662F\u4E00\u4E2A\u88AB init \u521B\u5EFA\u7684\u5C40\u90E8\u53D8\u91CF</span>
  <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// displayName() \u662F\u5185\u90E8\u51FD\u6570\uFF0C\u4E00\u4E2A\u95ED\u5305</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F7F\u7528\u4E86\u7236\u51FD\u6570\u4E2D\u58F0\u660E\u7684\u53D8\u91CF</span>
  <span class="token punctuation">}</span>
  <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>displayName()</code> \u6CA1\u6709\u81EA\u5DF1\u7684\u5C40\u90E8\u53D8\u91CF\u3002\u7136\u800C\uFF0C\u7531\u4E8E\u95ED\u5305\u7684\u7279\u6027\uFF0C\u5B83\u53EF\u4EE5\u8BBF\u95EE\u5230\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF</p><p>\u6BCF\u9694 1 \u79D2\u4F9D\u6B21\u8F93\u51FA\uFF1A0 -&gt; 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6A21\u62DF\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684 sleep \u7761\u7720\u51FD\u6570\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u662F\u4EFB\u4F55\u5F02\u6B65\u64CD\u4F5C</span>
<span class="token keyword">const</span> <span class="token function-variable function">sleep</span> <span class="token operator">=</span> <span class="token parameter">timeountMS</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> timeountMS<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u58F0\u660E\u5373\u6267\u884C\u7684 async \u51FD\u6570\u8868\u8FBE\u5F0F</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u4E8C\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u573A\u666F</h2><p>\u4EFB\u4F55\u95ED\u5305\u7684\u4F7F\u7528\u573A\u666F\u90FD\u79BB\u4E0D\u5F00\u8FD9\u4E24\u70B9\uFF1A</p><ul><li>\u521B\u5EFA\u79C1\u6709\u53D8\u91CF</li><li>\u5EF6\u957F\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F</li></ul><blockquote><p>\u4E00\u822C\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\u5728\u51FD\u6570\u8FD4\u56DE\u540E\u5C31\u88AB\u9500\u6BC1\uFF0C\u4F46\u662F\u95ED\u5305\u4F1A\u4FDD\u5B58\u5BF9\u521B\u5EFA\u65F6\u6240\u5728\u8BCD\u6CD5\u73AF\u5883\u7684\u5F15\u7528\uFF0C\u5373\u4FBF\u521B\u5EFA\u65F6\u6240\u5728\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u88AB\u9500\u6BC1\uFF0C\u4F46\u521B\u5EFA\u65F6\u6240\u5728\u8BCD\u6CD5\u73AF\u5883\u4F9D\u7136\u5B58\u5728\uFF0C\u4EE5\u8FBE\u5230\u5EF6\u957F\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F\u7684\u76EE\u7684</p></blockquote><p>\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u5728\u9875\u9762\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u53EF\u4EE5\u8C03\u6574\u5B57\u53F7\u7684\u6309\u94AE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeSizer</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> size <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> size12 <span class="token operator">=</span> <span class="token function">makeSizer</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> size14 <span class="token operator">=</span> <span class="token function">makeSizer</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> size16 <span class="token operator">=</span> <span class="token function">makeSizer</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;size-12&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> size12<span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;size-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> size14<span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;size-16&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onclick <span class="token operator">=</span> size16<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u67EF\u91CC\u5316\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316\u51FD\u6570" aria-hidden="true">#</a> \u67EF\u91CC\u5316\u51FD\u6570</h3><p>\u67EF\u91CC\u5316\u7684\u76EE\u7684\u5728\u4E8E\u907F\u514D\u9891\u7E41\u8C03\u7528\u5177\u6709\u76F8\u540C\u53C2\u6570\u51FD\u6570\u7684\u540C\u65F6\uFF0C\u53C8\u80FD\u591F\u8F7B\u677E\u7684\u91CD\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u6C42\u957F\u65B9\u5F62\u9762\u79EF\u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token parameter">width<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5982\u679C\u6211\u4EEC\u78B0\u5230\u7684\u957F\u65B9\u5F62\u7684\u5BBD\u8001\u662F10</span>
<span class="token keyword">const</span> area1 <span class="token operator">=</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> area2 <span class="token operator">=</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> area3 <span class="token operator">=</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\u67EF\u91CC\u5316\u8FD9\u4E2A\u8BA1\u7B97\u9762\u79EF\u7684\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token parameter">width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">height</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> getTenWidthArea <span class="token operator">=</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E4B\u540E\u78B0\u5230\u5BBD\u5EA6\u4E3A10\u7684\u957F\u65B9\u5F62\u5C31\u53EF\u4EE5\u8FD9\u6837\u8BA1\u7B97\u9762\u79EF</span>
<span class="token keyword">const</span> area1 <span class="token operator">=</span> <span class="token function">getTenWidthArea</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u800C\u4E14\u5982\u679C\u9047\u5230\u5BBD\u5EA6\u5076\u5C14\u53D8\u5316\u4E5F\u53EF\u4EE5\u8F7B\u677E\u590D\u7528</span>
<span class="token keyword">const</span> getTwentyWidthArea <span class="token operator">=</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u4F7F\u7528\u95ED\u5305\u6A21\u62DF\u79C1\u6709\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u95ED\u5305\u6A21\u62DF\u79C1\u6709\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u95ED\u5305\u6A21\u62DF\u79C1\u6709\u65B9\u6CD5</h3><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u6CA1\u6709\u652F\u6301\u58F0\u660E\u79C1\u6709\u53D8\u91CF\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\u6765\u6A21\u62DF\u79C1\u6709\u65B9\u6CD5</p><p>\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> Counter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> privateCounter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">changeBy</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    privateCounter <span class="token operator">+=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">changeBy</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">changeBy</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> privateCounter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> Counter1 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> Counter2 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 0 */</span>
Counter1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Counter1<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 2 */</span>
Counter1<span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter1<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 1 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Counter2<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* logs 0 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E0A\u8FF0\u901A\u8FC7\u4F7F\u7528\u95ED\u5305\u6765\u5B9A\u4E49\u516C\u5171\u51FD\u6570\uFF0C\u5E76\u4EE4\u5176\u53EF\u4EE5\u8BBF\u95EE\u79C1\u6709\u51FD\u6570\u548C\u53D8\u91CF\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u53EB\u6A21\u5757\u65B9\u5F0F</p><p>\u4E24\u4E2A\u8BA1\u6570\u5668 <code>Counter1</code> \u548C <code>Counter2</code> \u662F\u7EF4\u62A4\u5B83\u4EEC\u5404\u81EA\u7684\u72EC\u7ACB\u6027\u7684\uFF0C\u6BCF\u6B21\u8C03\u7528\u5176\u4E2D\u4E00\u4E2A\u8BA1\u6570\u5668\u65F6\uFF0C\u901A\u8FC7\u6539\u53D8\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u4F1A\u6539\u53D8\u8FD9\u4E2A\u95ED\u5305\u7684\u8BCD\u6CD5\u73AF\u5883\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u53E6\u4E00\u4E2A\u95ED\u5305\u4E2D\u7684\u53D8\u91CF</p><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><p>\u4F8B\u5982\u8BA1\u6570\u5668\u3001\u5EF6\u8FDF\u8C03\u7528\u3001\u56DE\u8C03\u7B49\u95ED\u5305\u7684\u5E94\u7528\uFF0C\u5176\u6838\u5FC3\u601D\u60F3\u8FD8\u662F\u521B\u5EFA\u79C1\u6709\u53D8\u91CF\u548C\u5EF6\u957F\u53D8\u91CF\u7684\u751F\u547D\u5468\u671F</p><h2 id="\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u4E09\u3001\u6CE8\u610F\u4E8B\u9879</h2><p>\u5982\u679C\u4E0D\u662F\u67D0\u4E9B\u7279\u5B9A\u4EFB\u52A1\u9700\u8981\u4F7F\u7528\u95ED\u5305\uFF0C\u5728\u5176\u5B83\u51FD\u6570\u4E2D\u521B\u5EFA\u51FD\u6570\u662F\u4E0D\u660E\u667A\u7684\uFF0C\u56E0\u4E3A\u95ED\u5305\u5728\u5904\u7406\u901F\u5EA6\u548C\u5185\u5B58\u6D88\u8017\u65B9\u9762\u5BF9\u811A\u672C\u6027\u80FD\u5177\u6709\u8D1F\u9762\u5F71\u54CD</p><p>\u4F8B\u5982\uFF0C\u5728\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61\u6216\u8005\u7C7B\u65F6\uFF0C\u65B9\u6CD5\u901A\u5E38\u5E94\u8BE5\u5173\u8054\u4E8E\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u800C\u4E0D\u662F\u5B9A\u4E49\u5230\u5BF9\u8C61\u7684\u6784\u9020\u5668\u4E2D\u3002</p><p>\u539F\u56E0\u5728\u4E8E\u6BCF\u4E2A\u5BF9\u8C61\u7684\u521B\u5EFA\uFF0C\u65B9\u6CD5\u90FD\u4F1A\u88AB\u91CD\u65B0\u8D4B\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyObject</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">getMessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5E76\u6CA1\u6709\u5229\u7528\u5230\u95ED\u5305\u7684\u597D\u5904\uFF0C\u56E0\u6B64\u53EF\u4EE5\u907F\u514D\u4F7F\u7528\u95ED\u5305\u3002\u4FEE\u6539\u6210\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyObject</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">MyObject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">MyObject</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,35);function e(o,c){return t}var l=n(p,[["render",e],["__file","closure.html.vue"]]);export{l as default};
