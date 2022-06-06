import{_ as e,c as a}from"./app.a7f79250.js";const t={},n=a(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4-http-\u5E38\u89C1\u7684\u8BF7\u6C42\u5934\u6709\u54EA\u4E9B-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4-http-\u5E38\u89C1\u7684\u8BF7\u6C42\u5934\u6709\u54EA\u4E9B-\u4F5C\u7528" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 HTTP \u5E38\u89C1\u7684\u8BF7\u6C42\u5934\u6709\u54EA\u4E9B? \u4F5C\u7528\uFF1F</h1><p><img src="https://static.vue-js.com/964abb00-bc69-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>HTTP\u5934\u5B57\u6BB5\uFF08HTTP header fields\uFF09,\u662F\u6307\u5728\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF08HTTP\uFF09\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u6D88\u606F\u4E2D\u7684\u6D88\u606F\u5934\u90E8\u5206</p><p>\u5B83\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\u4E8B\u52A1\u4E2D\u7684\u64CD\u4F5C\u53C2\u6570</p><p>HTTP\u5934\u90E8\u5B57\u6BB5\u53EF\u4EE5\u81EA\u5DF1\u6839\u636E\u9700\u8981\u5B9A\u4E49\uFF0C\u56E0\u6B64\u53EF\u80FD\u5728 <code>Web </code>\u670D\u52A1\u5668\u548C\u6D4F\u89C8\u5668\u4E0A\u53D1\u73B0\u975E\u6807\u51C6\u7684\u5934\u5B57\u6BB5</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A<code>HTTP</code>\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\uFF1A</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/home.html</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US,en;q=0.5</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate, br</span></span>
<span class="token header"><span class="token header-name keyword">Referer</span><span class="token punctuation">:</span> <span class="token header-value">https://developer.mozilla.org/testpage.html</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade-Insecure-Requests</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">If-Modified-Since</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 18 Jul 2016 02:36:04 GMT</span></span>
<span class="token header"><span class="token header-name keyword">If-None-Match</span><span class="token punctuation">:</span> <span class="token header-value">&quot;c561c68d0ba92bbeb8b0fff2a9199f722e3a621a&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">max-age=0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4E8C\u3001\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5206\u7C7B" aria-hidden="true">#</a> \u4E8C\u3001\u5206\u7C7B</h2><p>\u5E38\u89C1\u7684\u8BF7\u6C42\u5B57\u6BB5\u5982\u4E0B\u8868\u6240\u793A\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u8BF4\u660E</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>Accept</td><td>\u80FD\u591F\u63A5\u53D7\u7684\u56DE\u5E94\u5185\u5BB9\u7C7B\u578B\uFF08Content-Types\uFF09</td><td>Accept: text/plain</td></tr><tr><td>Accept-Charset</td><td>\u80FD\u591F\u63A5\u53D7\u7684\u5B57\u7B26\u96C6</td><td>Accept-Charset: utf-8</td></tr><tr><td>Accept-Encoding</td><td>\u80FD\u591F\u63A5\u53D7\u7684\u7F16\u7801\u65B9\u5F0F\u5217\u8868</td><td>Accept-Encoding: gzip, deflate</td></tr><tr><td>Accept-Language</td><td>\u80FD\u591F\u63A5\u53D7\u7684\u56DE\u5E94\u5185\u5BB9\u7684\u81EA\u7136\u8BED\u8A00\u5217\u8868</td><td>Accept-Language: en-US</td></tr><tr><td>Authorization</td><td>\u7528\u4E8E\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\u7684\u8BA4\u8BC1\u7684\u8BA4\u8BC1\u4FE1\u606F</td><td>Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</td></tr><tr><td>Cache-Control</td><td>\u7528\u6765\u6307\u5B9A\u5728\u8FD9\u6B21\u7684\u8BF7\u6C42/\u54CD\u5E94\u94FE\u4E2D\u7684\u6240\u6709\u7F13\u5B58\u673A\u5236 \u90FD\u5FC5\u987B \u9075\u5B88\u7684\u6307\u4EE4</td><td>Cache-Control: no-cache</td></tr><tr><td>Connection</td><td>\u8BE5\u6D4F\u89C8\u5668\u60F3\u8981\u4F18\u5148\u4F7F\u7528\u7684\u8FDE\u63A5\u7C7B\u578B</td><td>Connection: keep-alive Connection: Upgrade</td></tr><tr><td>Cookie</td><td>\u670D\u52A1\u5668\u901A\u8FC7 Set- Cookie \uFF08\u4E0B\u6587\u8BE6\u8FF0\uFF09\u53D1\u9001\u7684\u4E00\u4E2A \u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAECookie</td><td>Cookie: $Version=1; Skin=new;</td></tr><tr><td>Content-Length</td><td>\u4EE5 \u516B\u4F4D\u5B57\u8282\u6570\u7EC4 \uFF088\u4F4D\u7684\u5B57\u8282\uFF09\u8868\u793A\u7684\u8BF7\u6C42\u4F53\u7684\u957F\u5EA6</td><td>Content-Length: 348</td></tr><tr><td>Content-Type</td><td>\u8BF7\u6C42\u4F53\u7684 \u591A\u5A92\u4F53\u7C7B\u578B</td><td>Content-Type: application/x-www-form-urlencoded</td></tr><tr><td>Date</td><td>\u53D1\u9001\u8BE5\u6D88\u606F\u7684\u65E5\u671F\u548C\u65F6\u95F4</td><td>Date: Tue, 15 Nov 1994 08:12:31 GMT</td></tr><tr><td>Expect</td><td>\u8868\u660E\u5BA2\u6237\u7AEF\u8981\u6C42\u670D\u52A1\u5668\u505A\u51FA\u7279\u5B9A\u7684\u884C\u4E3A</td><td>Expect: 100-continue</td></tr><tr><td>Host</td><td>\u670D\u52A1\u5668\u7684\u57DF\u540D(\u7528\u4E8E\u865A\u62DF\u4E3B\u673A )\uFF0C\u4EE5\u53CA\u670D\u52A1\u5668\u6240\u76D1\u542C\u7684\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u7AEF\u53E3\u53F7</td><td>Host: en.wikipedia.org:80 Host: en.wikipedia.org</td></tr><tr><td>If-Match</td><td>\u4EC5\u5F53\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u5B9E\u4F53\u4E0E\u670D\u52A1\u5668\u4E0A\u5BF9\u5E94\u7684\u5B9E\u4F53\u76F8\u5339\u914D\u65F6\uFF0C\u624D\u8FDB\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\u3002\u4E3B\u8981\u4F5C\u7528\u65F6\uFF0C\u7528\u4F5C\u50CF PUT \u8FD9\u6837\u7684\u65B9\u6CD5\u4E2D\uFF0C\u4EC5\u5F53\u4ECE\u7528\u6237\u4E0A\u6B21\u66F4\u65B0\u67D0\u4E2A\u8D44\u6E90\u4EE5\u6765\uFF0C\u8BE5\u8D44\u6E90\u672A\u88AB\u4FEE\u6539\u7684\u60C5\u51B5\u4E0B\uFF0C\u624D\u66F4\u65B0\u8BE5\u8D44\u6E90</td><td>If-Match: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>If-Modified-Since</td><td>\u5141\u8BB8\u5728\u5BF9\u5E94\u7684\u5185\u5BB9\u672A\u88AB\u4FEE\u6539\u7684\u60C5\u51B5\u4E0B\u8FD4\u56DE304\u672A\u4FEE\u6539</td><td>If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT</td></tr><tr><td>If-None-Match</td><td>\u5141\u8BB8\u5728\u5BF9\u5E94\u7684\u5185\u5BB9\u672A\u88AB\u4FEE\u6539\u7684\u60C5\u51B5\u4E0B\u8FD4\u56DE304\u672A\u4FEE\u6539</td><td>If-None-Match: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>If-Range</td><td>\u5982\u679C\u8BE5\u5B9E\u4F53\u672A\u88AB\u4FEE\u6539\u8FC7\uFF0C\u5219\u5411\u6211\u53D1\u9001\u6211\u6240\u7F3A\u5C11\u7684\u90A3\u4E00\u4E2A\u6216\u591A\u4E2A\u90E8\u5206\uFF1B\u5426\u5219\uFF0C\u53D1\u9001\u6574\u4E2A\u65B0\u7684\u5B9E\u4F53</td><td>If-Range: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>Range</td><td>\u4EC5\u8BF7\u6C42\u67D0\u4E2A\u5B9E\u4F53\u7684\u4E00\u90E8\u5206</td><td>Range: bytes=500-999</td></tr><tr><td>User-Agent</td><td>\u6D4F\u89C8\u5668\u7684\u6D4F\u89C8\u5668\u8EAB\u4EFD\u6807\u8BC6\u5B57\u7B26\u4E32</td><td>User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0</td></tr><tr><td>Origin</td><td>\u53D1\u8D77\u4E00\u4E2A\u9488\u5BF9 \u8DE8\u6765\u6E90\u8D44\u6E90\u5171\u4EAB \u7684\u8BF7\u6C42</td><td>Origin: http://www.example-social-network.com</td></tr></tbody></table><h2 id="\u4E09\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u4F7F\u7528\u573A\u666F</h2><p>\u901A\u8FC7\u914D\u5408\u8BF7\u6C42\u5934\u548C\u54CD\u5E94\u5934\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u4E00\u4E9B\u573A\u666F\u7684\u529F\u80FD\u5B9E\u73B0\uFF1A</p><h3 id="\u534F\u5546\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58" aria-hidden="true">#</a> \u534F\u5546\u7F13\u5B58</h3><p>\u534F\u5546\u7F13\u5B58\u662F\u5229\u7528\u7684\u662F<code>\u3010Last-Modified\uFF0CIf-Modified-Since\u3011</code>\u548C<code>\u3010ETag\u3001If-None-Match\u3011</code>\u8FD9\u4E24\u5BF9\u8BF7\u6C42\u5934\u54CD\u5E94\u5934\u6765\u7BA1\u7406\u7684</p><p><code>Last-Modified</code> \u8868\u793A\u672C\u5730\u6587\u4EF6\u6700\u540E\u4FEE\u6539\u65E5\u671F\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5728request header\u52A0\u4E0A<code>If-Modified-Since</code>\uFF08\u4E0A\u6B21\u8FD4\u56DE\u7684<code>Last-Modified</code>\u7684\u503C\uFF09\uFF0C\u8BE2\u95EE\u670D\u52A1\u5668\u5728\u8BE5\u65E5\u671F\u540E\u8D44\u6E90\u662F\u5426\u6709\u66F4\u65B0\uFF0C\u6709\u66F4\u65B0\u7684\u8BDD\u5C31\u4F1A\u5C06\u65B0\u7684\u8D44\u6E90\u53D1\u9001\u56DE\u6765</p><p><code>Etag</code>\u5C31\u50CF\u4E00\u4E2A\u6307\u7EB9\uFF0C\u8D44\u6E90\u53D8\u5316\u90FD\u4F1A\u5BFC\u81F4<code>ETag</code>\u53D8\u5316\uFF0C\u8DDF\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u6CA1\u6709\u5173\u7CFB\uFF0C<code>ETag</code>\u53EF\u4EE5\u4FDD\u8BC1\u6BCF\u4E00\u4E2A\u8D44\u6E90\u662F\u552F\u4E00\u7684</p><p><code>If-None-Match</code>\u7684header\u4F1A\u5C06\u4E0A\u6B21\u8FD4\u56DE\u7684<code>Etag</code>\u53D1\u9001\u7ED9\u670D\u52A1\u5668\uFF0C\u8BE2\u95EE\u8BE5\u8D44\u6E90\u7684<code>Etag</code>\u662F\u5426\u6709\u66F4\u65B0\uFF0C\u6709\u53D8\u52A8\u5C31\u4F1A\u53D1\u9001\u65B0\u7684\u8D44\u6E90\u56DE\u6765</p><p>\u800C\u5F3A\u5236\u7F13\u5B58\u4E0D\u9700\u8981\u53D1\u9001\u8BF7\u6C42\u5230\u670D\u52A1\u7AEF\uFF0C\u6839\u636E\u8BF7\u6C42\u5934<code>expires</code>\u548C<code>cache-control</code>\u5224\u65AD\u662F\u5426\u547D\u4E2D\u5F3A\u7F13\u5B58</p><p>\u5F3A\u5236\u7F13\u5B58\u4E0E\u534F\u5546\u7F13\u5B58\u7684\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/a4065b00-bc69-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="\u4F1A\u8BDD\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD\u72B6\u6001" aria-hidden="true">#</a> \u4F1A\u8BDD\u72B6\u6001</h3><p><code>cookie</code>\uFF0C\u7C7B\u578B\u4E3A\u300C\u5C0F\u578B\u6587\u672C\u6587\u4EF6\u300D\uFF0C\u6307\u67D0\u4E9B\u7F51\u7AD9\u4E3A\u4E86\u8FA8\u522B\u7528\u6237\u8EAB\u4EFD\u800C\u50A8\u5B58\u5728\u7528\u6237\u672C\u5730\u7EC8\u7AEF\u4E0A\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u54CD\u5E94\u5934<code>set-cookie</code>\u51B3\u5B9A</p><p>\u4F5C\u4E3A\u4E00\u6BB5\u4E00\u822C\u4E0D\u8D85\u8FC7 4KB \u7684\u5C0F\u578B\u6587\u672C\u6570\u636E\uFF0C\u5B83\u7531\u4E00\u4E2A\u540D\u79F0\uFF08Name\uFF09\u3001\u4E00\u4E2A\u503C\uFF08Value\uFF09\u548C\u5176\u5B83\u51E0\u4E2A\u7528\u4E8E\u63A7\u5236 <code>Cookie </code>\u6709\u6548\u671F\u3001\u5B89\u5168\u6027\u3001\u4F7F\u7528\u8303\u56F4\u7684\u53EF\u9009\u5C5E\u6027\u7EC4\u6210</p><p><code>Cookie</code> \u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u4E09\u4E2A\u65B9\u9762\uFF1A</p><ul><li>\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406\uFF08\u5982\u7528\u6237\u767B\u5F55\u72B6\u6001\u3001\u8D2D\u7269\u8F66\u3001\u6E38\u620F\u5206\u6570\u6216\u5176\u5B83\u9700\u8981\u8BB0\u5F55\u7684\u4FE1\u606F\uFF09</li><li>\u4E2A\u6027\u5316\u8BBE\u7F6E\uFF08\u5982\u7528\u6237\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3001\u4E3B\u9898\u7B49\uFF09</li><li>\u6D4F\u89C8\u5668\u884C\u4E3A\u8DDF\u8E2A\uFF08\u5982\u8DDF\u8E2A\u5206\u6790\u7528\u6237\u884C\u4E3A\u7B49</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://zh.wikipedia.org/wiki/HTTP\u5934\u5B57\u6BB5</li><li>https://github.com/amandakelake/blog/issues/41</li></ul>`,28);function s(d,o){return n}var p=e(t,[["render",s],["__file","headers.html.vue"]]);export{p as default};