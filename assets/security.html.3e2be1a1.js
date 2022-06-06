import{_ as p,r as o,o as l,a as c,b as a,e as t,F as i,c as e,d as s}from"./app.b778d435.js";const r={},u=e('<h1 id="web\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B-\u5982\u4F55\u9632\u5FA1" tabindex="-1"><a class="header-anchor" href="#web\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B-\u5982\u4F55\u9632\u5FA1" aria-hidden="true">#</a> web\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F\u5982\u4F55\u9632\u5FA1\uFF1F</h1><p><img src="https://static.vue-js.com/d0892930-8d1d-11eb-ab90-d9ae814b240d.png" alt="security"></p><h2 id="xss-\u548C-csrf-\u80CC\u8BF5" tabindex="-1"><a class="header-anchor" href="#xss-\u548C-csrf-\u80CC\u8BF5" aria-hidden="true">#</a> XSS \u548C CSRF \u80CC\u8BF5</h2><h3 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h3><ul><li>Cross Site Scripting: \u8DE8\u7AD9\u811A\u672C\u653B\u51FB</li><li>\u5728\u7F51\u7AD9\u4E0A\u6CE8\u5165\u6076\u610F\u7684\u5BA2\u6237\u7AEF\u4EE3\u7801</li><li>\u653B\u51FB\u6D4F\u89C8\u5668\uFF0C\u7BE1\u6539\u6D4F\u89C8\u5668\u6B63\u5E38\u5C55\u793A\uFF0C\u7A83\u53D6\u7528\u6237\u4FE1\u606F</li><li>\u53CD\u5C04\u578B\uFF08\u975E\u6301\u4E45\u578B\uFF09\u3001\u5B58\u50A8\u578B\uFF08\u6301\u4E45\u6027\uFF09\u3001\u57FA\u4E8E DOM <ul><li>\u53CD\u5C04\u578B\uFF1A\u8BF7\u6C42 url(\u88AB\u6CE8\u5165\u6076\u610F\u811A\u672C)\uFF0C\u670D\u52A1\u5668\u89E3\u6790\uFF0C\u5BFC\u81F4\u8FD4\u56DE\u4E86\u7528\u6237\u5BC6\u7801\u7B49\u9690\u79C1\u4FE1\u606F</li><li>\u50A8\u5B58\u578B\uFF1A\u6076\u610F\u811A\u672C\u957F\u671F\u5B58\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u6BD4\u5982\u9700\u8981\u6743\u9650\u7684\u5185\u5BB9\uFF0C\u53D8\u6210\u4E86\u6240\u6709\u7528\u6237\u90FD\u80FD\u770B\u5230</li><li>\u57FA\u4E8E DOM\uFF1A\u670D\u52A1\u5668\u5F80\u6D4F\u89C8\u5668\u53D1\u9001\u7684\u65F6\u5019\u88AB\u6CE8\u5165\uFF0C\u4FEE\u6539\u4F60\u7684\u9875\u9762\u5C55\u793A\uFF08\u6CA1\u592A\u61C2\uFF09</li></ul></li><li>\u9632\u5FA1 <ul><li>\u8F93\u5165\u8FC7\u6EE4</li><li>\u8F93\u51FA\u8F6C\u4E49</li><li>\u52A0\u8BF7\u6C42\u5934 HttpOnly Cookie</li></ul></li></ul><h3 id="csrf" tabindex="-1"><a class="header-anchor" href="#csrf" aria-hidden="true">#</a> CSRF</h3><ul><li>\u540D\u8BCD\u89E3\u91CA\uFF1ACross-site request forgery: \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</li><li>\u653B\u51FB\u539F\u7406\uFF1A\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u4E0D\u5B89\u5168\u7684\u94FE\u63A5\uFF0C\u5BFC\u81F4\u628A\u4F60\u7684 cookie \uFF08\u5FC5\u987B\u662F\u767B\u5F55\u8FC7A\uFF0C\u4E0B\u53D1cookie\uFF09\u5E26\u8FC7\u53BB\uFF0C\u7136\u540E\u4F2A\u9020\u6210\u4F60\u53BB\u8BBF\u95EE A</li><li>\u9632\u5FA1\u63AA\u65BD\uFF1A\u4E3B\u8981\u5728\u670D\u52A1\u5668\u7AEF <ul><li>Token \u9A8C\u8BC1\uFF08\u4E3B\u6D41\u65B9\u5F0F\uFF09</li><li>Referer \u9A8C\u8BC1\uFF1A\u670D\u52A1\u5668\u4E2D\u9A8C\u8BC1\u8BF7\u6C42\u5934 refer \u5B57\u6BB5\uFF08\u67E5\u51FA\u6765\u6E90\uFF09</li><li>\u52A0\u9A8C\u8BC1\u7801\uFF08\u6210\u672C\u5927\uFF0C\u6BCF\u4E2A\u63A5\u53E3\u90FD\u52A0\uFF09</li><li>\u9690\u85CF\u4EE4\u724C</li></ul></li></ul><p>XSS\uFF08\u8DE8\u57DF\u811A\u672C\u653B\u51FB\uFF09\uFF1A</p>',8),d=s("\u653B\u51FB\u539F\u7406\uFF1A"),k={href:"http://www.imooc.com/learn/812",target:"_blank",rel:"noopener noreferrer"},h=s("http://www.imooc.com/learn/812"),m=s("\u9632\u5FA1\u63AA\u65BD\uFF1A"),g={href:"http://www.imooc.com/learn/812",target:"_blank",rel:"noopener noreferrer"},b=s("http://www.imooc.com/learn/812"),S=e(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>Web\u653B\u51FB\uFF08WebAttack\uFF09\u662F\u9488\u5BF9\u7528\u6237\u4E0A\u7F51\u884C\u4E3A\u6216\u7F51\u7AD9\u670D\u52A1\u5668\u7B49\u8BBE\u5907\u8FDB\u884C\u653B\u51FB\u7684\u884C\u4E3A</p><p>\u5982\u690D\u5165\u6076\u610F\u4EE3\u7801\uFF0C\u4FEE\u6539\u7F51\u7AD9\u6743\u9650\uFF0C\u83B7\u53D6\u7F51\u7AD9\u7528\u6237\u9690\u79C1\u4FE1\u606F\u7B49\u7B49</p><p>Web\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u6027\u662F\u4EFB\u4F55\u57FA\u4E8EWeb\u4E1A\u52A1\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206</p><p>\u786E\u4FDDWeb\u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u5341\u5206\u91CD\u8981\uFF0C\u5373\u4F7F\u662F\u4EE3\u7801\u4E2D\u5F88\u5C0F\u7684 bug \u4E5F\u6709\u53EF\u80FD\u5BFC\u81F4\u9690\u79C1\u4FE1\u606F\u88AB\u6CC4\u9732</p><p>\u7AD9\u70B9\u5B89\u5168\u5C31\u662F\u4E3A\u4FDD\u62A4\u7AD9\u70B9\u4E0D\u53D7\u672A\u6388\u6743\u7684\u8BBF\u95EE\u3001\u4F7F\u7528\u3001\u4FEE\u6539\u548C\u7834\u574F\u800C\u91C7\u53D6\u7684\u884C\u4E3A\u6216\u5B9E\u8DF5</p><p>\u6211\u4EEC\u5E38\u89C1\u7684Web\u653B\u51FB\u65B9\u5F0F\u6709</p><ul><li>XSS (Cross Site Scripting) \u8DE8\u7AD9\u811A\u672C\u653B\u51FB</li><li>CSRF\uFF08Cross-site request forgery\uFF09\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</li><li>SQL\u6CE8\u5165\u653B\u51FB</li></ul><h2 id="\u4E8C\u3001xss" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001xss" aria-hidden="true">#</a> \u4E8C\u3001XSS</h2><p>XSS\uFF0C\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF0C\u5141\u8BB8\u653B\u51FB\u8005\u5C06\u6076\u610F\u4EE3\u7801\u690D\u5165\u5230\u63D0\u4F9B\u7ED9\u5176\u5B83\u7528\u6237\u4F7F\u7528\u7684\u9875\u9762\u4E2D</p><p><code>XSS</code>\u6D89\u53CA\u5230\u4E09\u65B9\uFF0C\u5373\u653B\u51FB\u8005\u3001\u5BA2\u6237\u7AEF\u4E0E<code>Web</code>\u5E94\u7528</p><p><code>XSS</code>\u7684\u653B\u51FB\u76EE\u6807\u662F\u4E3A\u4E86\u76D7\u53D6\u5B58\u50A8\u5728\u5BA2\u6237\u7AEF\u7684<code>cookie</code>\u6216\u8005\u5176\u4ED6\u7F51\u7AD9\u7528\u4E8E\u8BC6\u522B\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u7684\u654F\u611F\u4FE1\u606F\u3002\u4E00\u65E6\u83B7\u53D6\u5230\u5408\u6CD5\u7528\u6237\u7684\u4FE1\u606F\u540E\uFF0C\u653B\u51FB\u8005\u751A\u81F3\u53EF\u4EE5\u5047\u5192\u5408\u6CD5\u7528\u6237\u4E0E\u7F51\u7AD9\u8FDB\u884C\u4EA4\u4E92</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u4E00\u4E2A\u641C\u7D22\u9875\u9762\uFF0C\u6839\u636E<code>url</code>\u53C2\u6570\u51B3\u5B9A\u5173\u952E\u8BCD\u7684\u5185\u5BB9</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;%= getParameter(<span class="token punctuation">&quot;</span></span><span class="token attr-name">keyword&quot;)</span> <span class="token attr-name">%</span><span class="token punctuation">&gt;</span></span>&quot;&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>\u641C\u7D22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  \u60A8\u641C\u7D22\u7684\u5173\u952E\u8BCD\u662F\uFF1A&lt;%= getParameter(&quot;keyword&quot;) %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u770B\u4F3C\u5E76\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u4E0D\u6309\u5957\u8DEF\u51FA\u724C\u5462\uFF1F</p><p>\u7528\u6237\u8F93\u5165<code>&quot;&gt;&lt;script&gt;alert(&#39;XSS&#39;);&lt;/script&gt;</code>\uFF0C\u62FC\u63A5\u5230 HTML \u4E2D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u3002\u5F62\u6210\u4E86\u5982\u4E0B\u7684 HTML\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;XSS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>&quot;&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>\u641C\u7D22<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  \u60A8\u641C\u7D22\u7684\u5173\u952E\u8BCD\u662F\uFF1A&quot;&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;XSS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6D4F\u89C8\u5668\u65E0\u6CD5\u5206\u8FA8\u51FA <code>&lt;script&gt;alert(&#39;XSS&#39;);&lt;/script&gt;</code> \u662F\u6076\u610F\u4EE3\u7801\uFF0C\u56E0\u800C\u5C06\u5176\u6267\u884C\uFF0C\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u662F\u83B7\u53D6<code>cookie</code>\u53D1\u9001\u5BF9\u9ED1\u5BA2\u670D\u52A1\u5668\u5462\uFF1F</p><p>\u6839\u636E\u653B\u51FB\u7684\u6765\u6E90\uFF0C<code>XSS</code>\u653B\u51FB\u53EF\u4EE5\u5206\u6210\uFF1A</p><ul><li>\u5B58\u50A8\u578B</li><li>\u53CD\u5C04\u578B</li><li>DOM \u578B</li></ul><h3 id="\u5B58\u50A8\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u578B" aria-hidden="true">#</a> \u5B58\u50A8\u578B</h3><p>\u5B58\u50A8\u578B XSS \u7684\u653B\u51FB\u6B65\u9AA4\uFF1A</p><ol><li>\u653B\u51FB\u8005\u5C06\u6076\u610F\u4EE3\u7801\u63D0\u4EA4\u5230\u76EE\u6807\u7F51\u7AD9\u7684\u6570\u636E\u5E93\u4E2D</li><li>\u7528\u6237\u6253\u5F00\u76EE\u6807\u7F51\u7AD9\u65F6\uFF0C\u7F51\u7AD9\u670D\u52A1\u7AEF\u5C06\u6076\u610F\u4EE3\u7801\u4ECE\u6570\u636E\u5E93\u53D6\u51FA\uFF0C\u62FC\u63A5\u5728 HTML \u4E2D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668</li><li>\u7528\u6237\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u540E\u89E3\u6790\u6267\u884C\uFF0C\u6DF7\u5728\u5176\u4E2D\u7684\u6076\u610F\u4EE3\u7801\u4E5F\u88AB\u6267\u884C</li><li>\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C</li></ol><p>\u8FD9\u79CD\u653B\u51FB\u5E38\u89C1\u4E8E\u5E26\u6709\u7528\u6237\u4FDD\u5B58\u6570\u636E\u7684\u7F51\u7AD9\u529F\u80FD\uFF0C\u5982\u8BBA\u575B\u53D1\u5E16\u3001\u5546\u54C1\u8BC4\u8BBA\u3001\u7528\u6237\u79C1\u4FE1\u7B49</p><h3 id="\u53CD\u5C04\u578B-xss" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04\u578B-xss" aria-hidden="true">#</a> \u53CD\u5C04\u578B XSS</h3><p>\u53CD\u5C04\u578B XSS \u7684\u653B\u51FB\u6B65\u9AA4\uFF1A</p><ol><li>\u653B\u51FB\u8005\u6784\u9020\u51FA\u7279\u6B8A\u7684 URL\uFF0C\u5176\u4E2D\u5305\u542B\u6076\u610F\u4EE3\u7801</li><li>\u7528\u6237\u6253\u5F00\u5E26\u6709\u6076\u610F\u4EE3\u7801\u7684 URL \u65F6\uFF0C\u7F51\u7AD9\u670D\u52A1\u7AEF\u5C06\u6076\u610F\u4EE3\u7801\u4ECE URL \u4E2D\u53D6\u51FA\uFF0C\u62FC\u63A5\u5728 HTML \u4E2D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668</li><li>\u7528\u6237\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u540E\u89E3\u6790\u6267\u884C\uFF0C\u6DF7\u5728\u5176\u4E2D\u7684\u6076\u610F\u4EE3\u7801\u4E5F\u88AB\u6267\u884C</li><li>\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C</li></ol><p>\u53CD\u5C04\u578B XSS \u8DDF\u5B58\u50A8\u578B XSS \u7684\u533A\u522B\u662F\uFF1A\u5B58\u50A8\u578B XSS \u7684\u6076\u610F\u4EE3\u7801\u5B58\u5728\u6570\u636E\u5E93\u91CC\uFF0C\u53CD\u5C04\u578B XSS \u7684\u6076\u610F\u4EE3\u7801\u5B58\u5728 URL \u91CC\u3002</p><p>\u53CD\u5C04\u578B XSS \u6F0F\u6D1E\u5E38\u89C1\u4E8E\u901A\u8FC7 URL \u4F20\u9012\u53C2\u6570\u7684\u529F\u80FD\uFF0C\u5982\u7F51\u7AD9\u641C\u7D22\u3001\u8DF3\u8F6C\u7B49\u3002</p><p>\u7531\u4E8E\u9700\u8981\u7528\u6237\u4E3B\u52A8\u6253\u5F00\u6076\u610F\u7684 URL \u624D\u80FD\u751F\u6548\uFF0C\u653B\u51FB\u8005\u5F80\u5F80\u4F1A\u7ED3\u5408\u591A\u79CD\u624B\u6BB5\u8BF1\u5BFC\u7528\u6237\u70B9\u51FB\u3002</p><p>POST \u7684\u5185\u5BB9\u4E5F\u53EF\u4EE5\u89E6\u53D1\u53CD\u5C04\u578B XSS\uFF0C\u53EA\u4E0D\u8FC7\u5176\u89E6\u53D1\u6761\u4EF6\u6BD4\u8F83\u82DB\u523B\uFF08\u9700\u8981\u6784\u9020\u8868\u5355\u63D0\u4EA4\u9875\u9762\uFF0C\u5E76\u5F15\u5BFC\u7528\u6237\u70B9\u51FB\uFF09\uFF0C\u6240\u4EE5\u975E\u5E38\u5C11\u89C1</p><h3 id="dom-\u578B-xss" tabindex="-1"><a class="header-anchor" href="#dom-\u578B-xss" aria-hidden="true">#</a> DOM \u578B XSS</h3><p>DOM \u578B XSS \u7684\u653B\u51FB\u6B65\u9AA4\uFF1A</p><ol><li>\u653B\u51FB\u8005\u6784\u9020\u51FA\u7279\u6B8A\u7684 URL\uFF0C\u5176\u4E2D\u5305\u542B\u6076\u610F\u4EE3\u7801</li><li>\u7528\u6237\u6253\u5F00\u5E26\u6709\u6076\u610F\u4EE3\u7801\u7684 URL</li><li>\u7528\u6237\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u54CD\u5E94\u540E\u89E3\u6790\u6267\u884C\uFF0C\u524D\u7AEF JavaScript \u53D6\u51FA URL \u4E2D\u7684\u6076\u610F\u4EE3\u7801\u5E76\u6267\u884C</li><li>\u6076\u610F\u4EE3\u7801\u7A83\u53D6\u7528\u6237\u6570\u636E\u5E76\u53D1\u9001\u5230\u653B\u51FB\u8005\u7684\u7F51\u7AD9\uFF0C\u6216\u8005\u5192\u5145\u7528\u6237\u7684\u884C\u4E3A\uFF0C\u8C03\u7528\u76EE\u6807\u7F51\u7AD9\u63A5\u53E3\u6267\u884C\u653B\u51FB\u8005\u6307\u5B9A\u7684\u64CD\u4F5C</li></ol><p>DOM \u578B XSS \u8DDF\u524D\u4E24\u79CD XSS \u7684\u533A\u522B\uFF1ADOM \u578B XSS \u653B\u51FB\u4E2D\uFF0C\u53D6\u51FA\u548C\u6267\u884C\u6076\u610F\u4EE3\u7801\u7531\u6D4F\u89C8\u5668\u7AEF\u5B8C\u6210\uFF0C\u5C5E\u4E8E\u524D\u7AEF JavaScript \u81EA\u8EAB\u7684\u5B89\u5168\u6F0F\u6D1E\uFF0C\u800C\u5176\u4ED6\u4E24\u79CD XSS \u90FD\u5C5E\u4E8E\u670D\u52A1\u7AEF\u7684\u5B89\u5168\u6F0F\u6D1E</p><h3 id="xss\u7684\u9884\u9632" tabindex="-1"><a class="header-anchor" href="#xss\u7684\u9884\u9632" aria-hidden="true">#</a> XSS\u7684\u9884\u9632</h3><p>\u901A\u8FC7\u524D\u9762\u4ECB\u7ECD\uFF0C\u770B\u5230<code>XSS</code>\u653B\u51FB\u7684\u4E24\u5927\u8981\u7D20\uFF1A</p><ul><li>\u653B\u51FB\u8005\u63D0\u4EA4\u800C\u6076\u610F\u4EE3\u7801</li><li>\u6D4F\u89C8\u5668\u6267\u884C\u6076\u610F\u4EE3\u7801</li></ul><p>\u9488\u5BF9\u7B2C\u4E00\u4E2A\u8981\u7D20\uFF0C\u6211\u4EEC\u5728\u7528\u6237\u8F93\u5165\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u8FC7\u6EE4\u6389\u7528\u6237\u8F93\u5165\u7684\u6076\u52A3\u4EE3\u7801\uFF0C\u7136\u540E\u63D0\u4EA4\u7ED9\u540E\u7AEF\uFF0C\u4F46\u662F\u5982\u679C\u653B\u51FB\u8005\u7ED5\u5F00\u524D\u7AEF\u8BF7\u6C42\uFF0C\u76F4\u63A5\u6784\u9020\u8BF7\u6C42\u5C31\u4E0D\u80FD\u9884\u9632\u4E86</p><p>\u800C\u5982\u679C\u5728\u540E\u7AEF\u5199\u5165\u6570\u636E\u5E93\u524D\uFF0C\u5BF9\u8F93\u5165\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u7136\u540E\u628A\u5185\u5BB9\u7ED9\u524D\u7AEF\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5185\u5BB9\u5728\u4E0D\u540C\u5730\u65B9\u5C31\u4F1A\u6709\u4E0D\u540C\u663E\u793A</p><p>\u4F8B\u5982\uFF1A</p><p>\u4E00\u4E2A\u6B63\u5E38\u7684\u7528\u6237\u8F93\u5165\u4E86 <code>5 &lt; 7</code> \u8FD9\u4E2A\u5185\u5BB9\uFF0C\u5728\u5199\u5165\u6570\u636E\u5E93\u524D\uFF0C\u88AB\u8F6C\u4E49\uFF0C\u53D8\u6210\u4E86 <code>5 &lt; 7</code></p><p>\u5728\u5BA2\u6237\u7AEF\u4E2D\uFF0C\u4E00\u65E6\u7ECF\u8FC7\u4E86 <code>escapeHTML()</code>\uFF0C\u5BA2\u6237\u7AEF\u663E\u793A\u7684\u5185\u5BB9\u5C31\u53D8\u6210\u4E86\u4E71\u7801( <code>5 &lt; 7</code> )</p><p>\u5728\u524D\u7AEF\u4E2D\uFF0C\u4E0D\u540C\u7684\u4F4D\u7F6E\u6240\u9700\u7684\u7F16\u7801\u4E5F\u4E0D\u540C\u3002</p><ul><li>\u5F53 <code>5 &lt; 7</code> \u4F5C\u4E3A HTML \u62FC\u63A5\u9875\u9762\u65F6\uFF0C\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\uFF1A</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5 <span class="token entity named-entity" title="&lt;">&amp;lt;</span> 7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F53 <code>5 &lt; 7</code> \u901A\u8FC7 Ajax \u8FD4\u56DE\uFF0C\u7136\u540E\u8D4B\u503C\u7ED9 JavaScript \u7684\u53D8\u91CF\u65F6\uFF0C\u524D\u7AEF\u5F97\u5230\u7684\u5B57\u7B26\u4E32\u5C31\u662F\u8F6C\u4E49\u540E\u7684\u5B57\u7B26\u3002\u8FD9\u4E2A\u5185\u5BB9\u4E0D\u80FD\u76F4\u63A5\u7528\u4E8E Vue \u7B49\u6A21\u677F\u7684\u5C55\u793A\uFF0C\u4E5F\u4E0D\u80FD\u76F4\u63A5\u7528\u4E8E\u5185\u5BB9\u957F\u5EA6\u8BA1\u7B97\u3002\u4E0D\u80FD\u7528\u4E8E\u6807\u9898\u3001alert \u7B49</li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FC7\u6EE4\u5E76\u975E\u53EF\u9760\u7684\uFF0C\u4E0B\u9762\u5C31\u8981\u901A\u8FC7\u9632\u6B62\u6D4F\u89C8\u5668\u6267\u884C\u6076\u610F\u4EE3\u7801\uFF1A</p><p>\u5728\u4F7F\u7528 <code>.innerHTML</code>\u3001<code>.outerHTML</code>\u3001<code>document.write()</code> \u65F6\u8981\u7279\u522B\u5C0F\u5FC3\uFF0C\u4E0D\u8981\u628A\u4E0D\u53EF\u4FE1\u7684\u6570\u636E\u4F5C\u4E3A HTML \u63D2\u5230\u9875\u9762\u4E0A\uFF0C\u800C\u5E94\u5C3D\u91CF\u4F7F\u7528 <code>.textContent</code>\u3001<code>.setAttribute()</code> \u7B49</p><p>\u5982\u679C\u7528 <code>Vue/React</code> \u6280\u672F\u6808\uFF0C\u5E76\u4E14\u4E0D\u4F7F\u7528 <code>v-html</code>/<code>dangerouslySetInnerHTML</code> \u529F\u80FD\uFF0C\u5C31\u5728\u524D\u7AEF <code>render</code> \u9636\u6BB5\u907F\u514D <code>innerHTML</code>\u3001<code>outerHTML</code> \u7684 XSS \u9690\u60A3</p><p>DOM \u4E2D\u7684\u5185\u8054\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5982 <code>location</code>\u3001<code>onclick</code>\u3001<code>onerror</code>\u3001<code>onload</code>\u3001<code>onmouseover</code> \u7B49\uFF0C<code>&lt;a&gt;</code> \u6807\u7B7E\u7684 <code>href</code> \u5C5E\u6027\uFF0CJavaScript \u7684 <code>eval()</code>\u3001<code>setTimeout()</code>\u3001<code>setInterval()</code> \u7B49\uFF0C\u90FD\u80FD\u628A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u4EE3\u7801\u8FD0\u884C\u3002\u5982\u679C\u4E0D\u53EF\u4FE1\u7684\u6570\u636E\u62FC\u63A5\u5230\u5B57\u7B26\u4E32\u4E2D\u4F20\u9012\u7ED9\u8FD9\u4E9B API\uFF0C\u5F88\u5BB9\u6613\u4EA7\u751F\u5B89\u5168\u9690\u60A3\uFF0C\u8BF7\u52A1\u5FC5\u907F\u514D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u94FE\u63A5\u5185\u5305\u542B\u6076\u610F\u4EE3\u7801 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span> a href<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span> a<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token comment">// setTimeout()/setInterval() \u4E2D\u8C03\u7528\u6076\u610F\u4EE3\u7801</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">&quot;UNTRUSTED&quot;</span><span class="token punctuation">)</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token string">&quot;UNTRUSTED&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// location \u8C03\u7528\u6076\u610F\u4EE3\u7801</span>
location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;UNTRUSTED&#39;</span>

<span class="token comment">// eval() \u4E2D\u8C03\u7528\u6076\u610F\u4EE3\u7801</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;UNTRUSTED&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u4E09\u3001csrf" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001csrf" aria-hidden="true">#</a> \u4E09\u3001CSRF</h2><p>CSRF\uFF08Cross-site request forgery\uFF09\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF1A\u653B\u51FB\u8005\u8BF1\u5BFC\u53D7\u5BB3\u8005\u8FDB\u5165\u7B2C\u4E09\u65B9\u7F51\u7AD9\uFF0C\u5728\u7B2C\u4E09\u65B9\u7F51\u7AD9\u4E2D\uFF0C\u5411\u88AB\u653B\u51FB\u7F51\u7AD9\u53D1\u9001\u8DE8\u7AD9\u8BF7\u6C42</p><p>\u5229\u7528\u53D7\u5BB3\u8005\u5728\u88AB\u653B\u51FB\u7F51\u7AD9\u5DF2\u7ECF\u83B7\u53D6\u7684\u6CE8\u518C\u51ED\u8BC1\uFF0C\u7ED5\u8FC7\u540E\u53F0\u7684\u7528\u6237\u9A8C\u8BC1\uFF0C\u8FBE\u5230\u5192\u5145\u7528\u6237\u5BF9\u88AB\u653B\u51FB\u7684\u7F51\u7AD9\u6267\u884C\u67D0\u9879\u64CD\u4F5C\u7684\u76EE</p><p>\u4E00\u4E2A\u5178\u578B\u7684CSRF\u653B\u51FB\u6709\u7740\u5982\u4E0B\u7684\u6D41\u7A0B\uFF1A</p><ul><li>\u53D7\u5BB3\u8005\u767B\u5F55a.com\uFF0C\u5E76\u4FDD\u7559\u4E86\u767B\u5F55\u51ED\u8BC1\uFF08Cookie\uFF09</li><li>\u653B\u51FB\u8005\u5F15\u8BF1\u53D7\u5BB3\u8005\u8BBF\u95EE\u4E86b.com</li><li>b.com \u5411 a.com \u53D1\u9001\u4E86\u4E00\u4E2A\u8BF7\u6C42\uFF1Aa.com/act=xx\u3002\u6D4F\u89C8\u5668\u4F1A\u9ED8\u8BA4\u643A\u5E26a.com\u7684Cookie</li><li>a.com\u63A5\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u5BF9\u8BF7\u6C42\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u5E76\u786E\u8BA4\u662F\u53D7\u5BB3\u8005\u7684\u51ED\u8BC1\uFF0C\u8BEF\u4EE5\u4E3A\u662F\u53D7\u5BB3\u8005\u81EA\u5DF1\u53D1\u9001\u7684\u8BF7\u6C42</li><li>a.com\u4EE5\u53D7\u5BB3\u8005\u7684\u540D\u4E49\u6267\u884C\u4E86act=xx</li><li>\u653B\u51FB\u5B8C\u6210\uFF0C\u653B\u51FB\u8005\u5728\u53D7\u5BB3\u8005\u4E0D\u77E5\u60C5\u7684\u60C5\u51B5\u4E0B\uFF0C\u5192\u5145\u53D7\u5BB3\u8005\uFF0C\u8BA9a.com\u6267\u884C\u4E86\u81EA\u5DF1\u5B9A\u4E49\u7684\u64CD\u4F5C</li></ul><p><code>csrf</code>\u53EF\u4EE5\u901A\u8FC7<code>get</code>\u8BF7\u6C42\uFF0C\u5373\u901A\u8FC7\u8BBF\u95EE<code>img</code>\u7684\u9875\u9762\u540E\uFF0C\u6D4F\u89C8\u5668\u81EA\u52A8\u8BBF\u95EE\u76EE\u6807\u5730\u5740\uFF0C\u53D1\u9001\u8BF7\u6C42</p><p>\u540C\u6837\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u81EA\u52A8\u63D0\u4EA4\u7684\u8868\u5355\u53D1\u9001<code>post</code>\u8BF7\u6C42\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">&quot;http://bank.example/withdraw&quot;</span> method<span class="token operator">=</span><span class="token constant">POST</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;account&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;xiaoming&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;amount&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;10000&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;hidden&quot;</span> name<span class="token operator">=</span><span class="token string">&quot;for&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;hacker&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span> document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8BBF\u95EE\u8BE5\u9875\u9762\u540E\uFF0C\u8868\u5355\u4F1A\u81EA\u52A8\u63D0\u4EA4\uFF0C\u76F8\u5F53\u4E8E\u6A21\u62DF\u7528\u6237\u5B8C\u6210\u4E86\u4E00\u6B21<code>POST</code>\u64CD\u4F5C</p><p>\u8FD8\u6709\u4E00\u79CD\u4E3A\u4F7F\u7528<code>a</code>\u6807\u7B7E\u7684\uFF0C\u9700\u8981\u7528\u6237\u70B9\u51FB\u94FE\u63A5\u624D\u4F1A\u89E6\u53D1</p><p>\u8BBF\u95EE\u8BE5\u9875\u9762\u540E\uFF0C\u8868\u5355\u4F1A\u81EA\u52A8\u63D0\u4EA4\uFF0C\u76F8\u5F53\u4E8E\u6A21\u62DF\u7528\u6237\u5B8C\u6210\u4E86\u4E00\u6B21POST\u64CD\u4F5C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt; a href=&quot;http://test.com/csrf/withdraw.php?amount=1000&amp;for=hacker&quot; taget=&quot;_blank&quot;&gt;
    \u91CD\u78C5\u6D88\u606F\uFF01\uFF01
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="csrf\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#csrf\u7684\u7279\u70B9" aria-hidden="true">#</a> CSRF\u7684\u7279\u70B9</h3><ul><li>\u653B\u51FB\u4E00\u822C\u53D1\u8D77\u5728\u7B2C\u4E09\u65B9\u7F51\u7AD9\uFF0C\u800C\u4E0D\u662F\u88AB\u653B\u51FB\u7684\u7F51\u7AD9\u3002\u88AB\u653B\u51FB\u7684\u7F51\u7AD9\u65E0\u6CD5\u9632\u6B62\u653B\u51FB\u53D1\u751F</li><li>\u653B\u51FB\u5229\u7528\u53D7\u5BB3\u8005\u5728\u88AB\u653B\u51FB\u7F51\u7AD9\u7684\u767B\u5F55\u51ED\u8BC1\uFF0C\u5192\u5145\u53D7\u5BB3\u8005\u63D0\u4EA4\u64CD\u4F5C\uFF1B\u800C\u4E0D\u662F\u76F4\u63A5\u7A83\u53D6\u6570\u636E</li><li>\u6574\u4E2A\u8FC7\u7A0B\u653B\u51FB\u8005\u5E76\u4E0D\u80FD\u83B7\u53D6\u5230\u53D7\u5BB3\u8005\u7684\u767B\u5F55\u51ED\u8BC1\uFF0C\u4EC5\u4EC5\u662F\u201C\u5192\u7528\u201D</li><li>\u8DE8\u7AD9\u8BF7\u6C42\u53EF\u4EE5\u7528\u5404\u79CD\u65B9\u5F0F\uFF1A\u56FE\u7247URL\u3001\u8D85\u94FE\u63A5\u3001CORS\u3001Form\u63D0\u4EA4\u7B49\u7B49\u3002\u90E8\u5206\u8BF7\u6C42\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u5D4C\u5165\u5728\u7B2C\u4E09\u65B9\u8BBA\u575B\u3001\u6587\u7AE0\u4E2D\uFF0C\u96BE\u4EE5\u8FDB\u884C\u8FFD\u8E2A</li></ul><h3 id="csrf\u7684\u9884\u9632" tabindex="-1"><a class="header-anchor" href="#csrf\u7684\u9884\u9632" aria-hidden="true">#</a> CSRF\u7684\u9884\u9632</h3><p>CSRF\u901A\u5E38\u4ECE\u7B2C\u4E09\u65B9\u7F51\u7AD9\u53D1\u8D77\uFF0C\u88AB\u653B\u51FB\u7684\u7F51\u7AD9\u65E0\u6CD5\u9632\u6B62\u653B\u51FB\u53D1\u751F\uFF0C\u53EA\u80FD\u901A\u8FC7\u589E\u5F3A\u81EA\u5DF1\u7F51\u7AD9\u9488\u5BF9CSRF\u7684\u9632\u62A4\u80FD\u529B\u6765\u63D0\u5347\u5B89\u5168\u6027</p><p>\u9632\u6B62<code>csrf</code>\u5E38\u7528\u65B9\u6848\u5982\u4E0B\uFF1A</p><ul><li>\u963B\u6B62\u4E0D\u660E\u5916\u57DF\u7684\u8BBF\u95EE <ul><li>\u540C\u6E90\u68C0\u6D4B</li><li>Samesite Cookie</li></ul></li><li>\u63D0\u4EA4\u65F6\u8981\u6C42\u9644\u52A0\u672C\u57DF\u624D\u80FD\u83B7\u53D6\u7684\u4FE1\u606F <ul><li>CSRF Token</li><li>\u53CC\u91CDCookie\u9A8C\u8BC1</li></ul></li></ul><p>\u8FD9\u91CC\u4E3B\u8981\u8BB2\u8BB2<code>token</code>\u8FD9\u79CD\u5F62\u5F0F\uFF0C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li>\u7528\u6237\u6253\u5F00\u9875\u9762\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u9700\u8981\u7ED9\u8FD9\u4E2A\u7528\u6237\u751F\u6210\u4E00\u4E2AToken</li><li>\u5BF9\u4E8EGET\u8BF7\u6C42\uFF0CToken\u5C06\u9644\u5728\u8BF7\u6C42\u5730\u5740\u4E4B\u540E\u3002\u5BF9\u4E8E POST \u8BF7\u6C42\u6765\u8BF4\uFF0C\u8981\u5728 form \u7684\u6700\u540E\u52A0\u4E0A</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201Dhidden\u201D</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201Dcsrftoken\u201D</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>\u201Dtokenvalue\u201D/</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F53\u7528\u6237\u4ECE\u5BA2\u6237\u7AEF\u5F97\u5230\u4E86Token\uFF0C\u518D\u6B21\u63D0\u4EA4\u7ED9\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u9700\u8981\u5224\u65ADToken\u7684\u6709\u6548\u6027</li></ul><h2 id="\u56DB\u3001sql\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001sql\u6CE8\u5165" aria-hidden="true">#</a> \u56DB\u3001SQL\u6CE8\u5165</h2><p>Sql \u6CE8\u5165\u653B\u51FB\uFF0C\u662F\u901A\u8FC7\u5C06\u6076\u610F\u7684 <code>Sql</code>\u67E5\u8BE2\u6216\u6DFB\u52A0\u8BED\u53E5\u63D2\u5165\u5230\u5E94\u7528\u7684\u8F93\u5165\u53C2\u6570\u4E2D\uFF0C\u518D\u5728\u540E\u53F0 <code>Sql</code>\u670D\u52A1\u5668\u4E0A\u89E3\u6790\u6267\u884C\u8FDB\u884C\u7684\u653B\u51FB</p><p><img src="https://static.vue-js.com/ead52fa0-8d1d-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p><ul><li><p>\u627E\u51FASQL\u6F0F\u6D1E\u7684\u6CE8\u5165\u70B9</p></li><li><p>\u5224\u65AD\u6570\u636E\u5E93\u7684\u7C7B\u578B\u4EE5\u53CA\u7248\u672C</p></li><li><p>\u731C\u89E3\u7528\u6237\u540D\u548C\u5BC6\u7801</p></li><li><p>\u5229\u7528\u5DE5\u5177\u67E5\u627EWeb\u540E\u53F0\u7BA1\u7406\u5165\u53E3</p></li><li><p>\u5165\u4FB5\u548C\u7834\u574F</p></li></ul><p>\u9884\u9632\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><ul><li>\u4E25\u683C\u68C0\u67E5\u8F93\u5165\u53D8\u91CF\u7684\u7C7B\u578B\u548C\u683C\u5F0F</li><li>\u8FC7\u6EE4\u548C\u8F6C\u4E49\u7279\u6B8A\u5B57\u7B26</li><li>\u5BF9\u8BBF\u95EE\u6570\u636E\u5E93\u7684Web\u5E94\u7528\u7A0B\u5E8F\u91C7\u7528Web\u5E94\u7528\u9632\u706B\u5899</li></ul><p>\u4E0A\u8FF0\u53EA\u662F\u5217\u4E3E\u4E86\u5E38\u89C1\u7684<code>web</code>\u653B\u51FB\u65B9\u5F0F\uFF0C\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u8FD8\u4F1A\u9047\u5230\u5F88\u591A\u5B89\u5168\u95EE\u9898\uFF0C\u5BF9\u4E8E\u8FD9\u4E9B\u95EE\u9898\uFF0C \u5207\u8BB0\u4E0D\u53EF\u5FFD\u89C6</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,84),v={href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"},f=s("https://tech.meituan.com/2018/09/27/fe-security.html"),q={href:"https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security",target:"_blank",rel:"noopener noreferrer"},x=s("https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security");function _(T,X){const n=o("ExternalLinkIcon");return l(),c(i,null,[u,a("ul",null,[a("li",null,[d,a("a",k,[h,t(n)])]),a("li",null,[m,a("a",g,[b,t(n)])])]),S,a("ul",null,[a("li",null,[a("a",v,[f,t(n)])]),a("li",null,[a("a",q,[x,t(n)])])])],64)}var L=p(r,[["render",_],["__file","security.html.vue"]]);export{L as default};
