import{_ as p,r as t,o,c,a as n,b as a,F as l,e as r,d as e}from"./app.cec2e512.js";const i={},u=r(`<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h1><p><img src="https://static.vue-js.com/a358a8c0-c0f1-11eb-ab90-d9ae814b240d.png" alt="image"></p><ul><li>\u77E5\u9053\u7684\u957F\u8FDE\u63A5\u8FD8\u6709\u54EA\u4E9B</li><li>websocket \u90FD\u6709\u54EA\u4E9B\u65B9\u6CD5</li><li>im \u804A\u5929\u7C7B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;wss://echo.websocket.org&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connection open ...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello WebSockets!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Received Message: &quot;</span> <span class="token operator">+</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Connection closed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>WebSocket\uFF0C\u662F\u4E00\u79CD\u7F51\u7EDC\u4F20\u8F93\u534F\u8BAE\uFF0C\u4F4D\u4E8E<code>OSI</code>\u6A21\u578B\u7684\u5E94\u7528\u5C42\u3002\u53EF\u5728\u5355\u4E2A<code>TCP</code>\u8FDE\u63A5\u4E0A\u8FDB\u884C\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u80FD\u66F4\u597D\u7684\u8282\u7701\u670D\u52A1\u5668\u8D44\u6E90\u548C\u5E26\u5BBD\u5E76\u8FBE\u5230\u5B9E\u65F6\u901A\u8FC5</p><p>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EA\u9700\u8981\u5B8C\u6210\u4E00\u6B21\u63E1\u624B\uFF0C\u4E24\u8005\u4E4B\u95F4\u5C31\u53EF\u4EE5\u521B\u5EFA\u6301\u4E45\u6027\u7684\u8FDE\u63A5\uFF0C\u5E76\u8FDB\u884C\u53CC\u5411\u6570\u636E\u4F20\u8F93</p><p><img src="https://static.vue-js.com/ad386e20-c0f1-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><p>\u4ECE\u4E0A\u56FE\u53EF\u89C1\uFF0C<code>websocket</code>\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u901A\u8FC7\u63E1\u624B\u8FDE\u63A5\uFF0C\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u4E24\u8005\u90FD\u80FD\u4E3B\u52A8\u7684\u5411\u5BF9\u65B9\u53D1\u9001\u6216\u63A5\u53D7\u6570\u636E</p><p>\u800C\u5728<code>websocket</code>\u51FA\u73B0\u4E4B\u524D\uFF0C\u5F00\u53D1\u5B9E\u65F6<code>web</code>\u5E94\u7528\u7684\u65B9\u5F0F\u4E3A\u8F6E\u8BE2</p><p>\u4E0D\u505C\u5730\u5411\u670D\u52A1\u5668\u53D1\u9001 HTTP \u8BF7\u6C42\uFF0C\u95EE\u6709\u6CA1\u6709\u6570\u636E\uFF0C\u6709\u6570\u636E\u7684\u8BDD\u670D\u52A1\u5668\u5C31\u7528\u54CD\u5E94\u62A5\u6587\u56DE\u5E94\u3002\u5982\u679C\u8F6E\u8BE2\u7684\u9891\u7387\u6BD4\u8F83\u9AD8\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8FD1\u4F3C\u5730\u5B9E\u73B0\u201C\u5B9E\u65F6\u901A\u4FE1\u201D\u7684\u6548\u679C</p><p>\u8F6E\u8BE2\u7684\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF0C\u53CD\u590D\u53D1\u9001\u65E0\u6548\u67E5\u8BE2\u8BF7\u6C42\u8017\u8D39\u4E86\u5927\u91CF\u7684\u5E26\u5BBD\u548C <code>CPU</code>\u8D44\u6E90</p><h2 id="\u4E8C\u3001\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7279\u70B9" aria-hidden="true">#</a> \u4E8C\u3001\u7279\u70B9</h2><h3 id="\u5168\u53CC\u5DE5" tabindex="-1"><a class="header-anchor" href="#\u5168\u53CC\u5DE5" aria-hidden="true">#</a> \u5168\u53CC\u5DE5</h3><p>\u901A\u4FE1\u5141\u8BB8\u6570\u636E\u5728\u4E24\u4E2A\u65B9\u5411\u4E0A\u540C\u65F6\u4F20\u8F93\uFF0C\u5B83\u5728\u80FD\u529B\u4E0A\u76F8\u5F53\u4E8E\u4E24\u4E2A\u5355\u5DE5\u901A\u4FE1\u65B9\u5F0F\u7684\u7ED3\u5408</p><p>\u4F8B\u5982\u6307 A\u2192B \u7684\u540C\u65F6 B\u2192A \uFF0C\u662F\u77AC\u65F6\u540C\u6B65\u7684</p><h3 id="\u4E8C\u8FDB\u5236\u5E27" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5E27" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u5E27</h3><p>\u91C7\u7528\u4E86\u4E8C\u8FDB\u5236\u5E27\u7ED3\u6784\uFF0C\u8BED\u6CD5\u3001\u8BED\u4E49\u4E0E HTTP \u5B8C\u5168\u4E0D\u517C\u5BB9\uFF0C\u76F8\u6BD4<code>http/2</code>\uFF0C<code>WebSocket</code>\u66F4\u4FA7\u91CD\u4E8E\u201C\u5B9E\u65F6\u901A\u4FE1\u201D\uFF0C\u800C<code>HTTP/2</code> \u66F4\u4FA7\u91CD\u4E8E\u63D0\u9AD8\u4F20\u8F93\u6548\u7387\uFF0C\u6240\u4EE5\u4E24\u8005\u7684\u5E27\u7ED3\u6784\u4E5F\u6709\u5F88\u5927\u7684\u533A\u522B</p><p>\u4E0D\u50CF <code>HTTP/2</code> \u90A3\u6837\u5B9A\u4E49\u6D41\uFF0C\u4E5F\u5C31\u4E0D\u5B58\u5728\u591A\u8DEF\u590D\u7528\u3001\u4F18\u5148\u7EA7\u7B49\u7279\u6027</p><p>\u81EA\u8EAB\u5C31\u662F\u5168\u53CC\u5DE5\uFF0C\u4E5F\u4E0D\u9700\u8981\u670D\u52A1\u5668\u63A8\u9001</p><h3 id="\u534F\u8BAE\u540D" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u540D" aria-hidden="true">#</a> \u534F\u8BAE\u540D</h3><p>\u5F15\u5165<code>ws</code>\u548C<code>wss</code>\u5206\u522B\u4EE3\u8868\u660E\u6587\u548C\u5BC6\u6587\u7684<code>websocket</code>\u534F\u8BAE\uFF0C\u4E14\u9ED8\u8BA4\u7AEF\u53E3\u4F7F\u752880\u6216443\uFF0C\u51E0\u4E4E\u4E0E<code>http</code>\u4E00\u81F4</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">ws</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com</span></span>
<span class="token header"><span class="token header-name keyword">ws</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com:8080/srv</span></span>
<span class="token header"><span class="token header-name keyword">wss</span><span class="token punctuation">:</span><span class="token header-value">//www.chrono.com:445/im?user_id=xxx</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u63E1\u624B" tabindex="-1"><a class="header-anchor" href="#\u63E1\u624B" aria-hidden="true">#</a> \u63E1\u624B</h3><p><code>WebSocket</code>\u4E5F\u8981\u6709\u4E00\u4E2A\u63E1\u624B\u8FC7\u7A0B\uFF0C\u7136\u540E\u624D\u80FD\u6B63\u5F0F\u6536\u53D1\u6570\u636E</p><p>\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/chat</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">server.example.com</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Key</span><span class="token punctuation">:</span> <span class="token header-value">dGhlIHNhbXBsZSBub25jZQ==</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">http://example.com</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Protocol</span><span class="token punctuation">:</span> <span class="token header-value">chat, superchat</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Version</span><span class="token punctuation">:</span> <span class="token header-value">13</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>Connection\uFF1A\u5FC5\u987B\u8BBE\u7F6EUpgrade\uFF0C\u8868\u793A\u5BA2\u6237\u7AEF\u5E0C\u671B\u8FDE\u63A5\u5347\u7EA7</li><li>Upgrade\uFF1A\u5FC5\u987B\u8BBE\u7F6EWebsocket\uFF0C\u8868\u793A\u5E0C\u671B\u5347\u7EA7\u5230Websocket\u534F\u8BAE</li><li>Sec-WebSocket-Key\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u4E00\u4E2A base64 \u7F16\u7801\u7684\u5BC6\u6587\uFF0C\u7528\u4E8E\u7B80\u5355\u7684\u8BA4\u8BC1\u79D8\u94A5\u3002\u8981\u6C42\u670D\u52A1\u7AEF\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u5E94\u52A0\u5BC6\u7684\u201CSec-WebSocket-Accept\u5E94\u7B54\uFF0C\u5426\u5219\u5BA2\u6237\u7AEF\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u5E76\u5173\u95ED\u8FDE\u63A5</li><li>Sec-WebSocket-Version \uFF1A\u8868\u793A\u652F\u6301\u7684Websocket\u7248\u672C</li></ul><p>\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\uFF1A</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">101</span> <span class="token reason-phrase string">Switching Protocols</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade</span><span class="token punctuation">:</span> <span class="token header-value">websocket</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">Upgrade</span></span>
<span class="token header"><span class="token header-name keyword">Sec-WebSocket-Accept</span><span class="token punctuation">:</span> <span class="token header-value">s3pPLMBiTxaQ9kYGzzhZRbK+xOo=Sec-WebSocket-Protocol: chat</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>HTTP/1.1 101 Switching Protocols\uFF1A\u8868\u793A\u670D\u52A1\u7AEF\u63A5\u53D7 WebSocket \u534F\u8BAE\u7684\u5BA2\u6237\u7AEF\u8FDE\u63A5</li><li>Sec-WebSocket-Accep\uFF1A\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8BF7\u6C42\u62A5\u6587\uFF0C\u540C\u6837\u4E5F\u662F\u4E3A\u4E86\u9632\u6B62\u8BEF\u8FDE\u63A5\u3002\u5177\u4F53\u505A\u6CD5\u662F\u628A\u8BF7\u6C42\u5934\u91CC\u201CSec-WebSocket-Key\u201D\u7684\u503C\uFF0C\u52A0\u4E0A\u4E00\u4E2A\u4E13\u7528\u7684 UUID\uFF0C\u518D\u8BA1\u7B97\u6458\u8981</li></ul><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ul><li>\u8F83\u5C11\u7684\u63A7\u5236\u5F00\u9500\uFF1A\u6570\u636E\u5305\u5934\u90E8\u534F\u8BAE\u8F83\u5C0F\uFF0C\u4E0D\u540C\u4E8Ehttp\u6BCF\u6B21\u8BF7\u6C42\u9700\u8981\u643A\u5E26\u5B8C\u6574\u7684\u5934\u90E8</li><li>\u66F4\u5F3A\u7684\u5B9E\u65F6\u6027\uFF1A\u76F8\u5BF9\u4E8EHTTP\u8BF7\u6C42\u9700\u8981\u7B49\u5F85\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\u670D\u52A1\u7AEF\u624D\u80FD\u54CD\u5E94\uFF0C\u5EF6\u8FDF\u660E\u663E\u66F4\u5C11</li><li>\u4FDD\u6301\u521B\u8FDE\u63A5\u72B6\u6001\uFF1A\u521B\u5EFA\u901A\u4FE1\u540E\uFF0C\u53EF\u7701\u7565\u72B6\u6001\u4FE1\u606F\uFF0C\u4E0D\u540C\u4E8EHTTP\u6BCF\u6B21\u8BF7\u6C42\u9700\u8981\u643A\u5E26\u8EAB\u4EFD\u9A8C\u8BC1</li><li>\u66F4\u597D\u7684\u4E8C\u8FDB\u5236\u652F\u6301\uFF1A\u5B9A\u4E49\u4E86\u4E8C\u8FDB\u5236\u5E27\uFF0C\u66F4\u597D\u5904\u7406\u4E8C\u8FDB\u5236\u5185\u5BB9</li><li>\u652F\u6301\u6269\u5C55\uFF1A\u7528\u6237\u53EF\u4EE5\u6269\u5C55websocket\u534F\u8BAE\u3001\u5B9E\u73B0\u90E8\u5206\u81EA\u5B9A\u4E49\u7684\u5B50\u534F\u8BAE</li><li>\u66F4\u597D\u7684\u538B\u7F29\u6548\u679C\uFF1AWebsocket\u5728\u9002\u5F53\u7684\u6269\u5C55\u652F\u6301\u4E0B\uFF0C\u53EF\u4EE5\u6CBF\u7528\u4E4B\u524D\u5185\u5BB9\u7684\u4E0A\u4E0B\u6587\uFF0C\u5728\u4F20\u9012\u7C7B\u4F3C\u7684\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u663E\u8457\u5730\u63D0\u9AD8\u538B\u7F29\u7387</li></ul><h2 id="\u4E8C\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E8C\u3001\u5E94\u7528\u573A\u666F</h2><p>\u57FA\u4E8E<code>websocket</code>\u7684\u4E8B\u5B9E\u901A\u4FE1\u7684\u7279\u70B9\uFF0C\u5176\u5B58\u5728\u7684\u5E94\u7528\u573A\u666F\u5927\u6982\u6709\uFF1A</p><ul><li>\u5F39\u5E55</li><li>\u5A92\u4F53\u804A\u5929</li><li>\u534F\u540C\u7F16\u8F91</li><li>\u57FA\u4E8E\u4F4D\u7F6E\u7684\u5E94\u7528</li><li>\u4F53\u80B2\u5B9E\u51B5\u66F4\u65B0</li><li>\u80A1\u7968\u57FA\u91D1\u62A5\u4EF7\u5B9E\u65F6\u66F4\u65B0</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,37),d={href:"https://zh.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"},k=e("https://zh.wikipedia.org/wiki/WebSocket"),h={href:"https://www.oschina.net/translate/9-killer-uses-for-websockets",target:"_blank",rel:"noopener noreferrer"},b=e("https://www.oschina.net/translate/9-killer-uses-for-websockets"),m={href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"},w=e("https://vue3js.cn/interview");function v(g,f){const s=t("ExternalLinkIcon");return o(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),n("li",null,[n("a",h,[b,a(s)])]),n("li",null,[n("a",m,[w,a(s)])])])],64)}var _=p(i,[["render",v],["__file","WebSocket.html.vue"]]);export{_ as default};
