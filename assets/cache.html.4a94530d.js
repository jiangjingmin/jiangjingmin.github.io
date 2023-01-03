import{_ as o,r as c,o as p,c as t,a,b as s,F as i,e as l,d as n}from"./app.77cde27d.js";const d={},r=l(`<h1 id="\u672C\u5730\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a> \u672C\u5730\u5B58\u50A8</h1><p><img src="https://static.vue-js.com/68dccf20-849f-11eb-ab90-d9ae814b240d.png" alt="00"></p><h2 id="\u4E00\u3001\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u65B9\u5F0F" aria-hidden="true">#</a> \u4E00\u3001\u65B9\u5F0F</h2><p><code>javaScript</code>\u672C\u5730\u7F13\u5B58\u7684\u65B9\u6CD5\u6211\u4EEC\u4E3B\u8981\u8BB2\u8FF0\u4EE5\u4E0B\u56DB\u79CD\uFF1A</p><ul><li>cookie</li><li>sessionStorage</li><li>localStorage</li><li>indexedDB</li></ul><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p><code>Cookie</code>\uFF0C\u7C7B\u578B\u4E3A\u300C\u5C0F\u578B\u6587\u672C\u6587\u4EF6\u300D\uFF0C\u6307\u67D0\u4E9B\u7F51\u7AD9\u4E3A\u4E86\u8FA8\u522B\u7528\u6237\u8EAB\u4EFD\u800C\u50A8\u5B58\u5728\u7528\u6237\u672C\u5730\u7EC8\u7AEF\u4E0A\u7684\u6570\u636E\u3002\u662F\u4E3A\u4E86\u89E3\u51B3 <code>HTTP</code>\u65E0\u72B6\u6001\u5BFC\u81F4\u7684\u95EE\u9898</p><p>\u4F5C\u4E3A\u4E00\u6BB5\u4E00\u822C\u4E0D\u8D85\u8FC7 4KB \u7684\u5C0F\u578B\u6587\u672C\u6570\u636E\uFF0C\u5B83\u7531\u4E00\u4E2A\u540D\u79F0\uFF08Name\uFF09\u3001\u4E00\u4E2A\u503C\uFF08Value\uFF09\u548C\u5176\u5B83\u51E0\u4E2A\u7528\u4E8E\u63A7\u5236 <code>cookie</code>\u6709\u6548\u671F\u3001\u5B89\u5168\u6027\u3001\u4F7F\u7528\u8303\u56F4\u7684\u53EF\u9009\u5C5E\u6027\u7EC4\u6210</p><p>\u4F46\u662F<code>cookie</code>\u5728\u6BCF\u6B21\u8BF7\u6C42\u4E2D\u90FD\u4F1A\u88AB\u53D1\u9001\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528 <code>HTTPS</code>\u5E76\u5BF9\u5176\u52A0\u5BC6\uFF0C\u5176\u4FDD\u5B58\u7684\u4FE1\u606F\u5F88\u5BB9\u6613\u88AB\u7A83\u53D6\uFF0C\u5BFC\u81F4\u5B89\u5168\u98CE\u9669\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5728\u4E00\u4E9B\u4F7F\u7528 <code>cookie</code>\u4FDD\u6301\u767B\u5F55\u6001\u7684\u7F51\u7AD9\u4E0A\uFF0C\u5982\u679C <code>cookie</code>\u88AB\u7A83\u53D6\uFF0C\u4ED6\u4EBA\u5F88\u5BB9\u6613\u5229\u7528\u4F60\u7684 <code>cookie</code>\u6765\u5047\u626E\u6210\u4F60\u767B\u5F55\u7F51\u7AD9</p><p>\u5173\u4E8E<code>cookie</code>\u5E38\u7528\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><ul><li>Expires \u7528\u4E8E\u8BBE\u7F6E Cookie \u7684\u8FC7\u671F\u65F6\u95F4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Expires<span class="token operator">=</span>Wed<span class="token punctuation">,</span> <span class="token number">21</span> Oct <span class="token number">2015</span> <span class="token number">07</span><span class="token operator">:</span><span class="token number">28</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Max-Age \u7528\u4E8E\u8BBE\u7F6E\u5728 Cookie \u5931\u6548\u4E4B\u524D\u9700\u8981\u7ECF\u8FC7\u7684\u79D2\u6570\uFF08\u4F18\u5148\u7EA7\u6BD4<code>Expires</code>\u9AD8\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Max<span class="token operator">-</span>Age<span class="token operator">=</span><span class="token number">604800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>Domain</code>\u6307\u5B9A\u4E86 <code>Cookie</code> \u53EF\u4EE5\u9001\u8FBE\u7684\u4E3B\u673A\u540D</li><li><code>Path</code>\u6307\u5B9A\u4E86\u4E00\u4E2A <code>URL</code>\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u5FC5\u987B\u51FA\u73B0\u5728\u8981\u8BF7\u6C42\u7684\u8D44\u6E90\u7684\u8DEF\u5F84\u4E2D\u624D\u53EF\u4EE5\u53D1\u9001 <code>Cookie</code> \u9996\u90E8</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Path<span class="token operator">=</span><span class="token operator">/</span>docs   # <span class="token operator">/</span>docs<span class="token operator">/</span>Web<span class="token operator">/</span> \u4E0B\u7684\u8D44\u6E90\u4F1A\u5E26 Cookie \u9996\u90E8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6807\u8BB0\u4E3A <code>Secure</code>\u7684 <code>Cookie</code>\u53EA\u5E94\u901A\u8FC7\u88AB<code>HTTPS</code>\u534F\u8BAE\u52A0\u5BC6\u8FC7\u7684\u8BF7\u6C42\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF</li></ul><p>\u901A\u8FC7\u4E0A\u8FF0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>cookie</code>\u53C8\u5F00\u59CB\u7684\u4F5C\u7528\u5E76\u4E0D\u662F\u4E3A\u4E86\u7F13\u5B58\u800C\u8BBE\u8BA1\u51FA\u6765\uFF0C\u53EA\u662F\u501F\u7528\u4E86<code>cookie</code>\u7684\u7279\u6027\u5B9E\u73B0\u7F13\u5B58</p><p>\u5173\u4E8E<code>cookie</code>\u7684\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;\u540D\u5B57=\u503C&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5173\u4E8E<code>cookie</code>\u7684\u4FEE\u6539\uFF0C\u9996\u5148\u8981\u786E\u5B9A<code>domain</code>\u548C<code>path</code>\u5C5E\u6027\u90FD\u662F\u76F8\u540C\u7684\u624D\u53EF\u4EE5\uFF0C\u5176\u4E2D\u6709\u4E00\u4E2A\u4E0D\u540C\u5F97\u65F6\u5019\u90FD\u4F1A\u521B\u5EFA\u51FA\u4E00\u4E2A\u65B0\u7684<code>cookie</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span>name<span class="token operator">=</span>aa<span class="token punctuation">;</span> domain<span class="token operator">=</span>aa<span class="token punctuation">.</span>net<span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span>  # \u670D\u52A1\u7AEF\u8BBE\u7F6E
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span>name<span class="token operator">=</span>bb<span class="token punctuation">;</span> domain<span class="token operator">=</span>aa<span class="token punctuation">.</span>net<span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span>  # \u5BA2\u6237\u7AEF\u8BBE\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6700\u540E<code>cookie</code>\u7684\u5220\u9664\uFF0C\u6700\u5E38\u7528\u7684\u65B9\u6CD5\u5C31\u662F\u7ED9<code>cookie</code>\u8BBE\u7F6E\u4E00\u4E2A\u8FC7\u671F\u7684\u4E8B\u4EF6\uFF0C\u8FD9\u6837<code>cookie</code>\u8FC7\u671F\u540E\u4F1A\u88AB\u6D4F\u89C8\u5668\u5220\u9664</p><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3><p><code>HTML5</code>\u65B0\u65B9\u6CD5\uFF0CIE8\u53CA\u4EE5\u4E0A\u6D4F\u89C8\u5668\u90FD\u517C\u5BB9</p><h3 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h3><ul><li>\u751F\u547D\u5468\u671F\uFF1A\u6301\u4E45\u5316\u7684\u672C\u5730\u5B58\u50A8\uFF0C\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E\uFF0C\u5426\u5219\u6570\u636E\u662F\u6C38\u8FDC\u4E0D\u4F1A\u8FC7\u671F\u7684</li><li>\u5B58\u50A8\u7684\u4FE1\u606F\u5728\u540C\u4E00\u57DF\u4E2D\u662F\u5171\u4EAB\u7684</li><li>\u5F53\u672C\u9875\u64CD\u4F5C\uFF08\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\uFF09\u4E86<code>localStorage</code>\u7684\u65F6\u5019\uFF0C\u672C\u9875\u9762\u4E0D\u4F1A\u89E6\u53D1<code>storage</code>\u4E8B\u4EF6,\u4F46\u662F\u522B\u7684\u9875\u9762\u4F1A\u89E6\u53D1<code>storage</code>\u4E8B\u4EF6\u3002</li><li>\u5927\u5C0F\uFF1A5M\uFF08\u8DDF\u6D4F\u89C8\u5668\u5382\u5546\u6709\u5173\u7CFB\uFF09</li><li><code>localStorage</code>\u672C\u8D28\u4E0A\u662F\u5BF9\u5B57\u7B26\u4E32\u7684\u8BFB\u53D6\uFF0C\u5982\u679C\u5B58\u50A8\u5185\u5BB9\u591A\u7684\u8BDD\u4F1A\u6D88\u8017\u5185\u5B58\u7A7A\u95F4\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u53D8\u5361</li><li>\u53D7\u540C\u6E90\u7B56\u7565\u7684\u9650\u5236</li></ul><p>\u4E0B\u9762\u518D\u770B\u770B\u5173\u4E8E<code>localStorage</code>\u7684\u4F7F\u7528</p><p>\u8BBE\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;cfangxu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6\u952E\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//\u83B7\u53D6\u7B2C\u4E00\u4E2A\u952E\u540D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E00\u6B21\u6027\u6E05\u9664\u6240\u6709\u5B58\u50A8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>localStorage</code> \u4E5F\u4E0D\u662F\u5B8C\u7F8E\u7684\uFF0C\u5B83\u6709\u4E24\u4E2A\u7F3A\u70B9\uFF1A</p><ul><li>\u65E0\u6CD5\u50CF<code>Cookie</code>\u4E00\u6837\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</li><li>\u53EA\u80FD\u5B58\u5165\u5B57\u7B26\u4E32\uFF0C\u65E0\u6CD5\u76F4\u63A5\u5B58\u5BF9\u8C61</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;[object, Object]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h3><p><code>sessionStorage</code>\u548C <code>localStorage</code>\u4F7F\u7528\u65B9\u6CD5\u57FA\u672C\u4E00\u81F4\uFF0C\u552F\u4E00\u4E0D\u540C\u7684\u662F\u751F\u547D\u5468\u671F\uFF0C\u4E00\u65E6\u9875\u9762\uFF08\u4F1A\u8BDD\uFF09\u5173\u95ED\uFF0C<code>sessionStorage</code> \u5C06\u4F1A\u5220\u9664\u6570\u636E</p><h3 id="\u6269\u5C55\u7684\u524D\u7AEF\u5B58\u50A8\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u7684\u524D\u7AEF\u5B58\u50A8\u65B9\u5F0F" aria-hidden="true">#</a> \u6269\u5C55\u7684\u524D\u7AEF\u5B58\u50A8\u65B9\u5F0F</h3><p><code>indexedDB</code>\u662F\u4E00\u79CD\u4F4E\u7EA7API\uFF0C\u7528\u4E8E\u5BA2\u6237\u7AEF\u5B58\u50A8\u5927\u91CF\u7ED3\u6784\u5316\u6570\u636E(\u5305\u62EC, \u6587\u4EF6/ blobs)\u3002\u8BE5API\u4F7F\u7528\u7D22\u5F15\u6765\u5B9E\u73B0\u5BF9\u8BE5\u6570\u636E\u7684\u9AD8\u6027\u80FD\u641C\u7D22</p><p>\u867D\u7136 <code>Web Storage</code>\u5BF9\u4E8E\u5B58\u50A8\u8F83\u5C11\u91CF\u7684\u6570\u636E\u5F88\u6709\u7528\uFF0C\u4F46\u5BF9\u4E8E\u5B58\u50A8\u66F4\u5927\u91CF\u7684\u7ED3\u6784\u5316\u6570\u636E\u6765\u8BF4\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u592A\u6709\u7528\u3002<code>IndexedDB</code>\u63D0\u4F9B\u4E86\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848</p><h4 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h4><ul><li>\u50A8\u5B58\u91CF\u7406\u8BBA\u4E0A\u6CA1\u6709\u4E0A\u9650</li><li>\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u5F02\u6B65\u7684\uFF0C\u76F8\u6BD4 <code>LocalStorage</code> \u540C\u6B65\u64CD\u4F5C\u6027\u80FD\u66F4\u9AD8\uFF0C\u5C24\u5176\u662F\u6570\u636E\u91CF\u8F83\u5927\u65F6</li><li>\u539F\u751F\u652F\u6301\u50A8\u5B58<code>JS</code>\u7684\u5BF9\u8C61</li><li>\u662F\u4E2A\u6B63\u7ECF\u7684\u6570\u636E\u5E93\uFF0C\u610F\u5473\u7740\u6570\u636E\u5E93\u80FD\u5E72\u7684\u4E8B\u5B83\u90FD\u80FD\u5E72</li></ul><h4 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h4><ul><li>\u64CD\u4F5C\u975E\u5E38\u7E41\u7410</li><li>\u672C\u8EAB\u6709\u4E00\u5B9A\u95E8\u69DB</li></ul><p>\u5173\u4E8E<code>indexedDB</code>\u7684\u4F7F\u7528\u57FA\u672C\u4F7F\u7528\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ul><li><p>\u6253\u5F00\u6570\u636E\u5E93\u5E76\u4E14\u5F00\u59CB\u4E00\u4E2A\u4E8B\u52A1</p></li><li><p>\u521B\u5EFA\u4E00\u4E2A <code>object store</code></p></li><li><p>\u6784\u5EFA\u4E00\u4E2A\u8BF7\u6C42\u6765\u6267\u884C\u4E00\u4E9B\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u50CF\u589E\u52A0\u6216\u63D0\u53D6\u6570\u636E\u7B49\u3002</p></li><li><p>\u901A\u8FC7\u76D1\u542C\u6B63\u786E\u7C7B\u578B\u7684 <code>DOM</code> \u4E8B\u4EF6\u4EE5\u7B49\u5F85\u64CD\u4F5C\u5B8C\u6210\u3002</p></li><li><p>\u5728\u64CD\u4F5C\u7ED3\u679C\u4E0A\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF08\u53EF\u4EE5\u5728 <code>request</code>\u5BF9\u8C61\u4E2D\u627E\u5230\uFF09</p></li></ul><p>\u5173\u4E8E\u4F7F\u7528<code>indexdb</code>\u7684\u4F7F\u7528\u4F1A\u6BD4\u8F83\u7E41\u7410\uFF0C\u5927\u5BB6\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>Godb.js</code>\u5E93\u8FDB\u884C\u7F13\u5B58\uFF0C\u6700\u5927\u5316\u7684\u964D\u4F4E\u64CD\u4F5C\u96BE\u5EA6</p><h2 id="\u4E8C\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u533A\u522B</h2><p>\u5173\u4E8E<code>cookie</code>\u3001<code>sessionStorage</code>\u3001<code>localStorage</code>\u4E09\u8005\u7684\u533A\u522B\u4E3B\u8981\u5982\u4E0B\uFF1A</p><ul><li><p>\u5B58\u50A8\u5927\u5C0F\uFF1A<code>cookie</code>\u6570\u636E\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7<code>4k</code>\uFF0C<code>sessionStorage</code>\u548C<code>localStorage</code>\u867D\u7136\u4E5F\u6709\u5B58\u50A8\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u4F46\u6BD4<code>cookie</code>\u5927\u5F97\u591A\uFF0C\u53EF\u4EE5\u8FBE\u52305M\u6216\u66F4\u5927</p></li><li><p>\u6709\u6548\u65F6\u95F4\uFF1A<code>localStorage</code>\u5B58\u50A8\u6301\u4E45\u6570\u636E\uFF0C\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u6570\u636E\u4E0D\u4E22\u5931\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E\uFF1B <code>sessionStorage</code>\u6570\u636E\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u5173\u95ED\u540E\u81EA\u52A8\u5220\u9664\uFF1B<code>cookie</code>\u8BBE\u7F6E\u7684<code>cookie</code>\u8FC7\u671F\u65F6\u95F4\u4E4B\u524D\u4E00\u76F4\u6709\u6548\uFF0C\u5373\u4F7F\u7A97\u53E3\u6216\u6D4F\u89C8\u5668\u5173\u95ED</p></li><li><p>\u6570\u636E\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u4EA4\u4E92\u65B9\u5F0F\uFF0C<code>cookie</code>\u7684\u6570\u636E\u4F1A\u81EA\u52A8\u7684\u4F20\u9012\u5230\u670D\u52A1\u5668\uFF0C\u670D\u52A1\u5668\u7AEF\u4E5F\u53EF\u4EE5\u5199<code>cookie</code>\u5230\u5BA2\u6237\u7AEF\uFF1B <code>sessionStorage</code>\u548C<code>localStorage</code>\u4E0D\u4F1A\u81EA\u52A8\u628A\u6570\u636E\u53D1\u7ED9\u670D\u52A1\u5668\uFF0C\u4EC5\u5728\u672C\u5730\u4FDD\u5B58</p></li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u5728\u4E86\u89E3\u4E86\u4E0A\u8FF0\u7684\u524D\u7AEF\u7684\u7F13\u5B58\u65B9\u5F0F\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u770B\u9488\u5BF9\u4E0D\u5BF9\u573A\u666F\u7684\u4F7F\u7528\u9009\u62E9\uFF1A</p><ul><li>\u6807\u8BB0\u7528\u6237\u4E0E\u8DDF\u8E2A\u7528\u6237\u884C\u4E3A\u7684\u60C5\u51B5\uFF0C\u63A8\u8350\u4F7F\u7528<code>cookie</code></li><li>\u9002\u5408\u957F\u671F\u4FDD\u5B58\u5728\u672C\u5730\u7684\u6570\u636E\uFF08\u4EE4\u724C\uFF09\uFF0C\u63A8\u8350\u4F7F\u7528<code>localStorage</code></li><li>\u654F\u611F\u8D26\u53F7\u4E00\u6B21\u6027\u767B\u5F55\uFF0C\u63A8\u8350\u4F7F\u7528<code>sessionStorage</code></li><li>\u5B58\u50A8\u5927\u91CF\u6570\u636E\u7684\u60C5\u51B5\u3001\u5728\u7EBF\u6587\u6863\uFF08\u5BCC\u6587\u672C\u7F16\u8F91\u5668\uFF09\u4FDD\u5B58\u7F16\u8F91\u5386\u53F2\u7684\u60C5\u51B5\uFF0C\u63A8\u8350\u4F7F\u7528<code>indexedDB</code></li></ul><h2 id="\u76F8\u5173\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u8FDE\u63A5" aria-hidden="true">#</a> \u76F8\u5173\u8FDE\u63A5</h2>`,60),u={href:"https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ",target:"_blank",rel:"noopener noreferrer"},k=n("https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ"),h={href:"https://github.com/chenstarx/GoDB.js",target:"_blank",rel:"noopener noreferrer"},g=n("https://github.com/chenstarx/GoDB.js");function m(b,v){const e=c("ExternalLinkIcon");return p(),t(i,null,[r,a("ul",null,[a("li",null,[a("a",u,[k,s(e)])]),a("li",null,[a("a",h,[g,s(e)])])])],64)}var j=o(d,[["render",m],["__file","cache.html.vue"]]);export{j as default};
