import{_ as o,r,o as a,c as n,a as t,d as i,F as c,e as d,b as e}from"./app.2989aa3c.js";const s={},h=d('<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><h2 id="http-\u548C-https" tabindex="-1"><a class="header-anchor" href="#http-\u548C-https" aria-hidden="true">#</a> HTTP \u548C HTTPS</h2><h3 id="_1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u5FF5" aria-hidden="true">#</a> 1. \u6982\u5FF5</h3><ul><li>http: \u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u8BF7\u6C42\u548C\u5E94\u7B54\u7684\u6807\u51C6\uFF08TCP\uFF09\uFF0C\u7528\u4E8E\u4ECE WWW \u670D\u52A1\u5668\u4F20\u8F93\u8D85\u6587\u672C\u5230\u672C\u5730\u6D4F\u89C8\u5668\u7684\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\u3002</li><li>https: \u662F\u4EE5\u5B89\u5168\u4E3A\u76EE\u6807\u7684 HTTP \u901A\u9053\uFF0C\u5373 HTTP \u4E0B \u52A0\u5165 SSL \u5C42\u8FDB\u884C\u52A0\u5BC6\u3002\u5176\u4F5C\u7528\u662F\uFF1A\u5EFA\u7ACB\u4E00\u4E2A\u4FE1\u606F\u5B89\u5168\u901A\u9053\uFF0C\u6765\u786E\u4FDD\u6570\u636E\u7684\u4F20\u8F93\u548C\u771F\u5B9E\u6027\u3002</li></ul><h3 id="_2-\u533A\u522B\u53CA\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u533A\u522B\u53CA\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2. \u533A\u522B\u53CA\u4F18\u7F3A\u70B9</h3><p><code>HTTP</code>\u662F\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u4FE1\u606F\u662F\u660E\u6587\u4F20\u8F93\uFF0C<code>HTTPS</code> \u534F\u8BAE\u8981\u6BD4 <code>HTTP</code> \u534F\u8BAE<strong>\u5B89\u5168</strong>\uFF0C<code>HTTPS</code> \u662F\u5177\u6709\u5B89\u5168\u6027\u7684 <code>SSL</code> \u52A0\u5BC6\u4F20\u8F93\u534F\u8BAE\uFF0C\u53EF\u9632\u6B62\u6570\u636E\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E0D\u88AB\u7A83\u53D6\u3001\u6539\u53D8\uFF0C\u786E\u4FDD\u6570\u636E\u7684\u5B8C\u6574\u6027\u3002</p><blockquote><p>HTTP \u4E3B\u8981\u7279\u70B9\uFF1A\u7B80\u5355\u5FEB\u901F\u3001\u7075\u6D3B\u3001\u65E0\u8FDE\u63A5\u3001\u65E0\u72B6\u6001</p></blockquote><ul><li><code>HTTP</code> \u534F\u8BAE\u7684<strong>\u9ED8\u8BA4\u7AEF\u53E3</strong>\u4E3A 80\uFF0C<code>HTTPS</code> \u7684\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 443</li><li><code>HTTP</code> \u7684\u8FDE\u63A5\u5F88\u7B80\u5355\uFF0C\u662F\u65E0\u72B6\u6001\u7684\u3002<code>HTTPS</code> \u63E1\u624B\u9636\u6BB5\u6BD4\u8F83<strong>\u8D39\u65F6</strong>\uFF0C\u4F1A\u4F7F\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\u5EF6\u957F 50%\uFF0C\u589E\u52A0 10%~20%\u7684\u8017\u7535\u3002</li><li><code>HTTPS</code> \u7F13\u5B58\u4E0D\u5982 <code>HTTP</code> \u9AD8\u6548\uFF0C\u4F1A\u589E\u52A0\u6570\u636E\u5F00\u9500\u3002</li><li><code>HTTPS</code>\u534F\u8BAE\u9700\u8981 ca \u8BC1\u4E66\uFF0C\u8D39\u7528\u8F83\u9AD8\uFF0C\u529F\u80FD\u8D8A\u5F3A\u5927\u7684<strong>\u8BC1\u4E66\u8D39</strong>\u7528\u8D8A\u9AD8\u3002</li><li>SSL \u8BC1\u4E66\u9700\u8981\u7ED1\u5B9A <code>IP</code>\uFF0C\u4E0D\u80FD\u518D\u540C\u4E00\u4E2A IP \u4E0A\u7ED1\u5B9A\u591A\u4E2A\u57DF\u540D\uFF0CIPV4 \u8D44\u6E90\u652F\u6301\u4E0D\u4E86\u8FD9\u79CD\u6D88\u8017\u3002</li></ul><h3 id="_3-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> 3. \u5DE5\u4F5C\u539F\u7406</h3><p>\u5BA2\u6237\u7AEF\u5728\u4F7F\u7528 HTTPS \u65B9\u5F0F\u4E0E Web \u670D\u52A1\u5668\u901A\u4FE1\u65F6\u6709\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u4F7F\u7528 https url \u8BBF\u95EE\u670D\u52A1\u5668\uFF0C\u5219\u8981\u6C42 web \u670D\u52A1\u5668<code>\u5EFA\u7ACB ssl \u94FE\u63A5</code>\u3002</li><li>web \u670D\u52A1\u5668\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u4E4B\u540E\uFF0C\u4F1A<code>\u5C06\u7F51\u7AD9\u7684\u8BC1\u4E66\uFF08\u8BC1\u4E66\u4E2D\u5305\u542B\u4E86\u516C\u94A5\uFF09\uFF0C\u4F20\u8F93\u7ED9\u5BA2\u6237\u7AEF</code>\u3002</li><li>\u5BA2\u6237\u7AEF\u548C web \u670D\u52A1\u5668\u7AEF\u5F00\u59CB<code>\u534F\u5546 SSL \u94FE\u63A5\u7684\u5B89\u5168\u7B49\u7EA7</code>\uFF0C\u4E5F\u5C31\u662F\u52A0\u5BC6\u7B49\u7EA7\u3002</li><li>\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u901A\u8FC7\u53CC\u65B9\u534F\u5546\u4E00\u81F4\u7684\u5B89\u5168\u7B49\u7EA7\uFF0C<code>\u5EFA\u7ACB\u4F1A\u8BDD\u5BC6\u94A5</code>\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u7AD9\u7684\u516C\u94A5\u6765\u52A0\u5BC6\u4F1A\u8BDD\u5BC6\u94A5\uFF0C\u5E76\u4F20\u9001\u7ED9\u7F51\u7AD9\u3002</li><li>web \u670D\u52A1\u5668<code>\u901A\u8FC7\u81EA\u5DF1\u7684\u79C1\u94A5\u89E3\u5BC6\u51FA\u4F1A\u8BDD\u5BC6\u94A5</code>\u3002</li><li>web \u670D\u52A1\u5668<code>\u901A\u8FC7\u4F1A\u8BDD\u5BC6\u94A5\u52A0\u5BC6\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u901A\u4FE1</code>\u3002</li></ol>',11),T=e("\u4F20\u9001\u95E8 \u261E "),p={href:"https://juejin.cn/post/6995109407545622542",target:"_blank",rel:"noopener noreferrer"},u=e("# \u89E3\u8BFB HTTP1/HTTP2/HTTP3"),b=d(`<h2 id="http\u534F\u8BAE\u7C7B" tabindex="-1"><a class="header-anchor" href="#http\u534F\u8BAE\u7C7B" aria-hidden="true">#</a> HTTP\u534F\u8BAE\u7C7B</h2><ol start="2"><li>HTTP\u62A5\u6587\u7684\u7EC4\u6210\u90E8\u5206\uFF1A</li></ol><ul><li>\u8BF7\u6C42\u62A5\u6587\uFF1A\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u3001\u7A7A\u884C\u3001\u8BF7\u6C42\u4F53</li><li>\u54CD\u5E94\u62A5\u6587\uFF1A\u72B6\u6001\u884C\u3001\u54CD\u5E94\u5934\u3001\u7A7A\u884C\u3001\u54CD\u5E94\u4F53</li></ul><ol start="3"><li>HTTP\u65B9\u6CD5\uFF1A</li></ol><table><thead><tr><th>\u65B9\u6CD5</th><th>\u91CA\u4E49</th></tr></thead><tbody><tr><td>GET</td><td>\u83B7\u53D6\u8D44\u6E90</td></tr><tr><td>POST</td><td>\u4F20\u8F93\u8D44\u6E90</td></tr><tr><td>PUT</td><td>\u66F4\u65B0\u8D44\u6E90</td></tr><tr><td>DELETE</td><td>\u5220\u9664\u8D44\u6E90</td></tr><tr><td>HEAD</td><td>\u83B7\u5F97\u62A5\u6587\u9996\u90E8</td></tr></tbody></table><ol start="4"><li>POST\u548CGET\u7684\u533A\u522B\uFF1A</li></ol><table><thead><tr><th>GET</th><th>POST</th></tr></thead><tbody><tr><td>GET\u5728\u6D4F\u89C8\u5668\u56DE\u9000\u65F6\u662F\u65E0\u5BB3\u7684</td><td>\u4F1A\u518D\u6B21\u63D0\u4EA4\u8BF7\u6C42</td></tr><tr><td>GET\u4EA7\u751F\u7684URL\u5730\u5740\u53EF\u4EE5\u88AB\u6536\u85CF</td><td>\u4E0D\u53EF\u4EE5</td></tr><tr><td>GET\u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668\u4E3B\u52A8\u7F13\u5B58</td><td>\u4E0D\u4F1A\uFF0C\u9664\u975E\u624B\u52A8\u8BBE\u7F6E</td></tr><tr><td>GET\u8BF7\u6C42\u53EA\u80FD\u8FDB\u884Curl\u7F16\u7801</td><td>\u800CPOST\u652F\u6301\u591A\u79CD\u7F16\u7801\u65B9\u5F0F</td></tr><tr><td>GET\u8BF7\u6C42\u53C2\u6570\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u91CC</td><td>\u800CPOST\u4E2D\u7684\u53C2\u6570\u4E0D\u4F1A\u88AB\u4FDD\u7559</td></tr><tr><td>GET\u8BF7\u6C42\u5728URL\u4E2D\u4F20\u9001\u7684\u53C2\u6570\u662F\u6709\u957F\u5EA6\u9650\u5236\u7684</td><td>\u6CA1\u6709\u9650\u5236</td></tr><tr><td>\u5BF9\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\uFF0CGET\u53EA\u63A5\u53D7ASCII\u5B57\u7B26</td><td>\u6CA1\u6709\u9650\u5236</td></tr><tr><td>GET\u6BD4POST \u66F4\u4E0D\u5B89\u5168\uFF0C\u53C2\u6570\u76F4\u63A5\u66B4\u9732\u5728url\u4E0A\uFF0C\u4E0D\u80FD\u7528\u6765\u4F20\u9012\u654F\u611F\u4FE1\u606F</td><td>\u5B89\u5168</td></tr><tr><td>GET\u53C2\u6570\u901A\u8FC7URL \u4F20\u9012</td><td>POST\u653E\u5728Request body\u4E2D</td></tr></tbody></table><ol start="5"><li>HTTP\u72B6\u6001\u7801\uFF1A</li></ol><ul><li>1xx\uFF1A\u6307\u793A\u4FE1\u606F \u2014\u2014 \u8868\u793A\u8BF7\u6C42\u5DF2\u63A5\u6536\uFF0C\u7EE7\u7EED\u5904\u7406</li><li>2xx\uFF1A\u6210\u529F \u2014\u2014 \u8868\u793A\u8BF7\u6C42\u5DF2\u88AB\u6210\u529F\u63A5\u6536</li><li>3xx\uFF1A\u91CD\u5B9A\u5411 \u2014\u2014 \u8981\u5B8C\u6210\u8BF7\u6C42\u5FC5\u987B\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u7684\u64CD\u4F5C</li><li>4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF \u2014\u2014 \u8BF7\u6C42\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u8BF7\u6C42\u65E0\u6CD5\u5B9E\u73B0</li><li>5xx\uFF1A\u670D\u52A1\u5668\u9519\u8BEF \u2014\u2014 \u670D\u52A1\u5668\u672A\u80FD\u5B9E\u73B0\u5408\u6CD5\u7684\u8BF7\u6C42</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>200\uFF1A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u6210\u529F
404\uFF1A\u8BF7\u6C42\u8D44\u6E90\u4E0D\u5B58\u5728
500\uFF1A\u8BF7\u6C42\u672A\u5B8C\u6210\uFF0C\u670D\u52A1\u5668\u4E34\u65F6\u8FC7\u8F7D\u6216\u5B95\u673A\uFF0C\u4E00\u6BB5\u65F6\u95F4\u540E\u53EF\u4EE5\u6062\u590D\u6B63\u5E38
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>\u6301\u4E45\u8FDE\u63A5(HTTP1.1\u7248\u672C\u624D\u6709)\uFF1A</li></ol><ul><li>\u666E\u901A\u6A21\u5F0F\uFF1AHTTP\u534F\u8BAE\u91C7\u7528\u201C\u8BF7\u6C42-\u5E94\u7B54\u201D\u6A21\u5F0F\uFF0C\u5F53\u4F7F\u7528\u666E\u901A\u6A21\u5F0F\uFF0C\u5373\u975EKeep-Alive\u6A21\u5F0F\u65F6\uFF0C\u6BCF\u4E2A\u8BF7\u6C42/\u5E94\u7B54\u5BA2\u6237\u548C\u670D\u52A1\u5668\u90FD\u8981\u65B0\u5EFA\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u5B8C\u6210\u4E4B\u540E\u7ACB\u5373\u65AD\u5F00\u8FDE\u63A5\uFF08HTTP\u534F\u8BAE\u4E3A\u65E0\u8FDE\u63A5\u534F\u8BAE\uFF09</li><li>Keep-Alive\u6A21\u5F0F\uFF1A\uFF08\u53C8\u79F0\u6301\u4E45\u8FDE\u63A5\u3001\u8FDE\u63A5\u91CD\u7528\uFF09\u65F6\uFF0CKeep-Alive\u529F\u80FD\u4F7F\u5BA2\u6237\u7AEF\u5230\u670D\u52A1\u5668\u7AEF\u7684\u8FDE\u63A5\u6301\u7EED\u6709\u6548\uFF0C\u5F53\u51FA\u73B0\u5BF9\u670D\u52A1\u5668\u7684\u540E\u7EE7\u8BF7\u6C42\u65F6\uFF0CKeep-Alive\u529F\u80FD\u907F\u514D\u4E86\u5EFA\u7ACB\u6216\u8005\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5</li></ul><ol start="7"><li>\u7BA1\u7EBF\u5316\uFF1A</li></ol><p>\u5728\u6301\u4E45\u8FDE\u63A5\u7684\u60C5\u51B5\u4E0B\uFF0C</p><blockquote><p>\u8BF7\u6C421 -&gt; \u54CD\u5E941 -&gt; \u8BF7\u6C422 -&gt; \u54CD\u5E942</p></blockquote><p>\u7BA1\u7EBF\u5316\u65F6\uFF1A</p><blockquote><p>\u8BF7\u6C421 -&gt; \u8BF7\u6C422 -&gt; \u54CD\u5E941 -&gt; \u54CD\u5E942</p></blockquote><p>\u7279\u70B9\uFF1A</p><ul><li>\u7BA1\u7EBF\u5316\u673A\u5236\u901A\u8FC7\u6301\u4E45\u8FDE\u63A5\u5B8C\u6210\uFF0C\u4EC5HTTP/1.1 \u652F\u6301\u6B64\u6280\u672F</li><li>\u53EA\u6709GET\u548CHEAD\u8BF7\u6C42\u53EF\u4EE5\u8FDB\u884C\u7BA1\u7EBF\u5316\uFF0C\u800CPOST\u5219\u6709\u6240\u9650\u5236</li><li>\u521D\u6B21\u521B\u5EFA\u8FDE\u63A5\u65F6\u4E0D\u5E94\u542F\u52A8\u7BA1\u7EBF\u673A\u5236\uFF0C\u56E0\u4E3A\u5BF9\u65B9\uFF08\u670D\u52A1\u5668\uFF09\u4E0D\u4E00\u5B9A\u652F\u6301HTTP/1.1 \u7248\u672C\u7684\u534F\u8BAE</li></ul><h2 id="\u901A\u8BAF\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u901A\u8BAF\u7C7B" aria-hidden="true">#</a> \u901A\u8BAF\u7C7B</h2><ol><li><p>\u4EC0\u4E48\u662F\u540C\u6E90\u7B56\u7565\u53CA\u9650\u5236</p><p>\u540C\u6E90\u7B56\u7565\u9650\u5236\u4ECE\u4E00\u4E2A\u6E90\u52A0\u8F7D\u7684\u6587\u6863\u6216\u811A\u672C\u5982\u4F55\u4E0E\u6765\u81EA\u53E6\u4E00\u4E2A\u6E90\u7684\u8D44\u6E90\u8FDB\u884C\u4EA4\u4E92\u3002\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E\u9694\u79BB\u6F5C\u5728\u6076\u610F\u6587\u4EF6\u7684\u5173\u952E\u7684\u5B89\u5168\u673A\u5236\u3002</p></li></ol><p>\u9650\u5236\u4E00\u4E0B\u65B9\u9762\uFF1A</p><ul><li>Cookie\u3001LocalSrorage\u548CIndexDB\u65E0\u6CD5\u8BFB\u53D6</li><li>DOM\u65E0\u6CD5\u83B7\u5F97</li><li>AJAX\u8BF7\u6C42\u4E0D\u80FD\u53D1\u9001</li></ul><ol start="2"><li>\u524D\u540E\u7AEF\u5982\u4F55\u901A\u4FE1</li></ol><ul><li>Ajax \u2014\u2014 \u540C\u6E90\u901A\u8BAF</li><li>WebSocket \u2014\u2014 \u4E0D\u53D7\u8DE8\u57DF\u9650\u5236</li><li>CORS \u2014\u2014 \u652F\u6301\u540C\u6E90\u901A\u8BAF\uFF0C\u4E5F\u652F\u6301\u8DE8\u57DF\u901A\u8BAF</li></ul><ol start="3"><li>\u5982\u4F55\u521B\u5EFAajax</li></ol><ul><li>XMLHttpRequest\u5BF9\u8C61\u7684\u5DE5\u4F5C\u6D41\u7A0B</li><li>\u517C\u5BB9\u6027\u5904\u7406</li><li>\u4E8B\u4EF6\u7684\u89E6\u53D1\u6761\u4EF6</li><li>\u4E8B\u4EF6\u7684\u89E6\u53D1\u987A\u5E8F</li></ul><ol start="4"><li>\u8DE8\u57DF\u901A\u8BAF\u7684\u51E0\u79CD\u65B9\u5F0F</li></ol><ul><li>JSONP</li><li>Hash</li><li>postMessage</li><li>WebSocket</li><li>CORS</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,30),_={href:"https://www.cnblogs.com/klb561/p/10289199.html",target:"_blank",rel:"noopener noreferrer"},P=e("https://www.cnblogs.com/klb561/p/10289199.html"),H={href:"https://www.jianshu.com/p/205c0fc51c97",target:"_blank",rel:"noopener noreferrer"},x=e("https://www.jianshu.com/p/205c0fc51c97"),S={href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"},g=e("https://vue3js.cn/interview");function f(m,E){const l=r("ExternalLinkIcon");return a(),n(c,null,[h,t("p",null,[T,t("a",p,[u,i(l)])]),b,t("ul",null,[t("li",null,[t("a",_,[P,i(l)])]),t("li",null,[t("a",H,[x,i(l)])]),t("li",null,[t("a",S,[g,i(l)])])])],64)}var w=o(s,[["render",f],["__file","index.html.vue"]]);export{w as default};
