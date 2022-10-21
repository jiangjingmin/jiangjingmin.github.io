import{_ as a,r as p,o as e,c as t,a as n,b as c,F as o,e as l,d as u}from"./app.6e1280c8.js";const r={},i=l(`<h1 id="\u5982\u4F55\u5B9E\u73B0\u51FD\u6570\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u51FD\u6570\u7F13\u5B58" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u51FD\u6570\u7F13\u5B58</h1><p><img src="https://static.vue-js.com/2ae9dda0-85fa-11eb-ab90-d9ae814b240d.png" alt="00"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u51FD\u6570\u7F13\u5B58\uFF0C\u5C31\u662F\u5C06\u51FD\u6570\u8FD0\u7B97\u8FC7\u7684\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58</p><p>\u672C\u8D28\u4E0A\u5C31\u662F\u7528\u7A7A\u95F4\uFF08\u7F13\u5B58\u5B58\u50A8\uFF09\u6362\u65F6\u95F4\uFF08\u8BA1\u7B97\u8FC7\u7A0B\uFF09</p><p>\u5E38\u7528\u4E8E\u7F13\u5B58\u6570\u636E\u8BA1\u7B97\u7ED3\u679C\u548C\u7F13\u5B58\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token keyword">const</span> calc <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u51FD\u6570\u7F13\u5B58</span>
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 30</span>
<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 30 \u7F13\u5B58</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7F13\u5B58\u53EA\u662F\u4E00\u4E2A\u4E34\u65F6\u7684\u6570\u636E\u5B58\u50A8\uFF0C\u5B83\u4FDD\u5B58\u6570\u636E\uFF0C\u4EE5\u4FBF\u5C06\u6765\u5BF9\u8BE5\u6570\u636E\u7684\u8BF7\u6C42\u80FD\u591F\u66F4\u5FEB\u5730\u5F97\u5230\u5904\u7406</p><h2 id="\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u5B9E\u73B0</h2><p>\u5B9E\u73B0\u51FD\u6570\u7F13\u5B58\u4E3B\u8981\u4F9D\u9760\u95ED\u5305\u3001\u67EF\u91CC\u5316\u3001\u9AD8\u9636\u51FD\u6570\uFF0C\u8FD9\u91CC\u518D\u7B80\u5355\u590D\u4E60\u4E0B\uFF1A</p><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><p>\u95ED\u5305\u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u51FD\u6570 + \u51FD\u6570\u4F53\u5185\u53EF\u8BBF\u95EE\u7684\u53D8\u91CF\u603B\u548C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> b <span class="token operator">+</span> a
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
    <span class="token punctuation">}</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>add</code>\u51FD\u6570\u672C\u8EAB\uFF0C\u4EE5\u53CA\u5176\u5185\u90E8\u53EF\u8BBF\u95EE\u7684\u53D8\u91CF\uFF0C\u5373 <code>a = 1</code>\uFF0C\u8FD9\u4E24\u4E2A\u7EC4\u5408\u5728\u2F00\u8D77\u5C31\u5F62\u6210\u4E86\u95ED\u5305</p><h3 id="\u67EF\u91CC\u5316" tabindex="-1"><a class="header-anchor" href="#\u67EF\u91CC\u5316" aria-hidden="true">#</a> \u67EF\u91CC\u5316</h3><p>\u628A\u63A5\u53D7\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u8F6C\u6362\u6210\u63A5\u53D7\u4E00\u4E2A\u5355\u4E00\u53C2\u6570\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u975E\u51FD\u6570\u67EF\u91CC\u5316</span>
<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//7</span>

<span class="token comment">// \u51FD\u6570\u67EF\u91CC\u5316</span>
<span class="token keyword">var</span> <span class="token function-variable function">add2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//**\u8FD4\u56DE\u51FD\u6570**</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">//7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5C06\u4E00\u4E2A\u4E8C\u5143\u51FD\u6570\u62C6\u5206\u6210\u4E24\u4E2A\u4E00\u5143\u51FD\u6570</p><h3 id="\u9AD8\u9636\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u9636\u51FD\u6570" aria-hidden="true">#</a> \u9AD8\u9636\u51FD\u6570</h3><p>\u901A\u8FC7\u63A5\u6536\u5176\u4ED6\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u6216\u8FD4\u56DE\u5176\u4ED6\u51FD\u6570\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u51FD\u6570 <code>foo</code> \u5982\u4F55\u8FD4\u56DE\u53E6\u4E00\u4E2A\u51FD\u6570 <code>bar</code>\uFF0C<code>baz</code> \u73B0\u5728\u6301\u6709\u5BF9 <code>foo</code> \u4E2D\u5B9A\u4E49\u7684<code>bar</code> \u51FD\u6570\u7684\u5F15\u7528\u3002\u7531\u4E8E\u95ED\u5305\u7279\u6027\uFF0C<code>a</code>\u7684\u503C\u80FD\u591F\u5F97\u5230</p><p>\u4E0B\u9762\u518D\u770B\u770B\u5982\u4F55\u5B9E\u73B0\u51FD\u6570\u7F13\u5B58\uFF0C\u5B9E\u73B0\u539F\u7406\u4E5F\u5F88\u7B80\u5355\uFF0C\u628A\u53C2\u6570\u548C\u5BF9\u5E94\u7684\u7ED3\u679C\u6570\u636E\u5B58\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E2D\uFF0C\u8C03\u7528\u65F6\u5224\u65AD\u53C2\u6570\u5BF9\u5E94\u7684\u6570\u636E\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5C31\u8FD4\u56DE\u5BF9\u5E94\u7684\u7ED3\u679C\u6570\u636E\uFF0C\u5426\u5219\u5C31\u8FD4\u56DE\u8BA1\u7B97\u7ED3\u679C</p><p>\u5982\u4E0B\u6240\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">memoize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  content <span class="token operator">=</span> content <span class="token operator">||</span> <span class="token keyword">this</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8C03\u7528\u65B9\u5F0F\u4E5F\u5F88\u7B80\u5355</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> calc <span class="token operator">=</span> <span class="token function">memoize</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// \u7F13\u5B58\u5F97\u5230\u7684\u7ED3\u679C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FC7\u7A0B\u5206\u6790\uFF1A</p><ul><li>\u5728\u5F53\u524D\u51FD\u6570\u4F5C\u7528\u57DF\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u7F13\u5B58\u8FD0\u884C\u7ED3\u679C</li><li>\u8FD0\u7528\u67EF\u91CC\u5316\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u7684\u51FD\u6570\u7531\u4E8E\u95ED\u5305\u7279\u6027\uFF0C\u53EF\u4EE5\u8BBF\u95EE\u5230<code>cache</code></li><li>\u7136\u540E\u5224\u65AD\u8F93\u5165\u53C2\u6570\u662F\u4E0D\u662F\u5728<code>cache</code>\u7684\u4E2D\u3002\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\uFF0C\u76F4\u63A5\u8FD4\u56DE<code>cache</code>\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u5B58\u5728\uFF0C\u4F7F\u7528\u51FD\u6570<code>func</code>\u5BF9\u8F93\u5165\u53C2\u6570\u6C42\u503C\uFF0C\u7136\u540E\u628A\u7ED3\u679C\u5B58\u50A8\u5728<code>cache</code>\u4E2D</li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u867D\u7136\u4F7F\u7528\u7F13\u5B58\u6548\u7387\u662F\u975E\u5E38\u9AD8\u7684\uFF0C\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u573A\u666F\u90FD\u9002\u7528\uFF0C\u56E0\u6B64\u5343\u4E07\u4E0D\u8981\u6781\u7AEF\u7684\u5C06\u6240\u6709\u51FD\u6570\u90FD\u6DFB\u52A0\u7F13\u5B58</p><p>\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9002\u5408\u4F7F\u7528\u7F13\u5B58\uFF1A</p><ul><li>\u5BF9\u4E8E\u6602\u8D35\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u6267\u884C\u590D\u6742\u8BA1\u7B97\u7684\u51FD\u6570</li><li>\u5BF9\u4E8E\u5177\u6709\u6709\u9650\u4E14\u9AD8\u5EA6\u91CD\u590D\u8F93\u5165\u8303\u56F4\u7684\u51FD\u6570</li><li>\u5BF9\u4E8E\u5177\u6709\u91CD\u590D\u8F93\u5165\u503C\u7684\u9012\u5F52\u51FD\u6570</li><li>\u5BF9\u4E8E\u7EAF\u51FD\u6570\uFF0C\u5373\u6BCF\u6B21\u4F7F\u7528\u7279\u5B9A\u8F93\u5165\u8C03\u7528\u65F6\u8FD4\u56DE\u76F8\u540C\u8F93\u51FA\u7684\u51FD\u6570</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,34),k={href:"https://zhuanlan.zhihu.com/p/112505577",target:"_blank",rel:"noopener noreferrer"},d=u("https://zhuanlan.zhihu.com/p/112505577");function b(m,h){const s=p("ExternalLinkIcon");return e(),t(o,null,[i,n("ul",null,[n("li",null,[n("a",k,[d,c(s)])])])],64)}var v=a(r,[["render",b],["__file","function_cache.html.vue"]]);export{v as default};
