import{_ as n,e as s}from"./app.6e1280c8.js";const a={},e=s(`<h3 id="\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a> \u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898</h3><hr><p><strong>JSONP\uFF1A</strong></p><ul><li>\u539F\u7406\u662F\uFF1A\u52A8\u6001\u63D2\u5165<code>script</code>\u6807\u7B7E\uFF0C\u901A\u8FC7<code>script</code>\u6807\u7B7E\u5F15\u5165\u4E00\u4E2A<code>js</code>\u6587\u4EF6\uFF0C\u8FD9\u4E2A<code>js</code>\u6587\u4EF6\u8F7D\u5165\u6210\u529F\u540E\u4F1A\u6267\u884C\u6211\u4EEC\u5728<code>url</code>\u53C2\u6570\u4E2D\u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u4F1A\u628A\u6211\u4EEC\u9700\u8981\u7684<code>json</code>\u6570\u636E\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165</li><li>\u7531\u4E8E\u540C\u6E90\u7B56\u7565\u7684\u9650\u5236\uFF0C<code>XmlHttpRequest</code>\u53EA\u5141\u8BB8\u8BF7\u6C42\u5F53\u524D\u6E90\uFF08\u57DF\u540D\u3001\u534F\u8BAE\u3001\u7AEF\u53E3\uFF09\u7684\u8D44\u6E90\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>script</code>\u6807\u7B7E\u5B9E\u73B0\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u7136\u540E\u5728\u670D\u52A1\u7AEF\u8F93\u51FA<code>JSON</code>\u6570\u636E\u5E76\u6267\u884C\u56DE\u8C03\u51FD\u6570\uFF0C\u4ECE\u800C\u89E3\u51B3\u4E86\u8DE8\u57DF\u7684\u6570\u636E\u8BF7\u6C42</li><li>\u4F18\u70B9\u662F\u517C\u5BB9\u6027\u597D\uFF0C\u7B80\u5355\u6613\u7528\uFF0C\u652F\u6301\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u53CC\u5411\u901A\u4FE1\u3002\u7F3A\u70B9\u662F\u53EA\u652F\u6301GET\u8BF7\u6C42</li><li><code>JSONP</code>\uFF1A<code>json+padding</code>\uFF08\u5185\u586B\u5145\uFF09\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u628A<code>JSON</code>\u586B\u5145\u5230\u4E00\u4E2A\u76D2\u5B50\u91CC</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">createJs</span><span class="token punctuation">(</span><span class="token parameter">sUrl</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

      <span class="token keyword">var</span> oScript <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      oScript<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">;</span>
      oScript<span class="token punctuation">.</span>src <span class="token operator">=</span> sUrl<span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>oScript<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createJs</span><span class="token punctuation">(</span><span class="token string">&#39;jsonp.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>json<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>CORS</strong></p><ul><li>\u670D\u52A1\u5668\u7AEF\u5BF9\u4E8E<code>CORS</code>\u7684\u652F\u6301\uFF0C\u4E3B\u8981\u5C31\u662F\u901A\u8FC7\u8BBE\u7F6E<code>Access-Control-Allow-Origin</code>\u6765\u8FDB\u884C\u7684\u3002\u5982\u679C\u6D4F\u89C8\u5668\u68C0\u6D4B\u5230\u76F8\u5E94\u7684\u8BBE\u7F6E\uFF0C\u5C31\u53EF\u4EE5\u5141\u8BB8<code>Ajax</code>\u8FDB\u884C\u8DE8\u57DF\u7684\u8BBF\u95EE</li></ul><p><strong>\u901A\u8FC7\u4FEE\u6539document.domain\u6765\u8DE8\u5B50\u57DF</strong></p><ul><li>\u5C06\u5B50\u57DF\u548C\u4E3B\u57DF\u7684<code>document.domain</code>\u8BBE\u4E3A\u540C\u4E00\u4E2A\u4E3B\u57DF.\u524D\u63D0\u6761\u4EF6\uFF1A\u8FD9\u4E24\u4E2A\u57DF\u540D\u5FC5\u987B\u5C5E\u4E8E\u540C\u4E00\u4E2A\u57FA\u7840\u57DF\u540D!\u800C\u4E14\u6240\u7528\u7684\u534F\u8BAE\uFF0C\u7AEF\u53E3\u90FD\u8981\u4E00\u81F4\uFF0C\u5426\u5219\u65E0\u6CD5\u5229\u7528<code>document.domain</code>\u8FDB\u884C\u8DE8\u57DF\u3002\u4E3B\u57DF\u76F8\u540C\u7684\u4F7F\u7528<code>document.domain</code></li></ul><p><strong>\u4F7F\u7528window.name\u6765\u8FDB\u884C\u8DE8\u57DF</strong></p><ul><li><code>window</code>\u5BF9\u8C61\u6709\u4E2Aname\u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6709\u4E2A\u7279\u5F81\uFF1A\u5373\u5728\u4E00\u4E2A\u7A97\u53E3(<code>window</code>)\u7684\u751F\u547D\u5468\u671F\u5185,\u7A97\u53E3\u8F7D\u5165\u7684\u6240\u6709\u7684\u9875\u9762\u90FD\u662F\u5171\u4EAB\u4E00\u4E2A<code>window.name</code>\u7684\uFF0C\u6BCF\u4E2A\u9875\u9762\u5BF9window.name\u90FD\u6709\u8BFB\u5199\u7684\u6743\u9650\uFF0C<code>window.name</code>\u662F\u6301\u4E45\u5B58\u5728\u4E00\u4E2A\u7A97\u53E3\u8F7D\u5165\u8FC7\u7684\u6240\u6709\u9875\u9762\u4E2D\u7684</li></ul><p><strong>\u4F7F\u7528HTML5\u4E2D\u65B0\u5F15\u8FDB\u7684window.postMessage\u65B9\u6CD5\u6765\u8DE8\u57DF\u4F20\u9001\u6570\u636E</strong></p><ul><li>\u8FD8\u6709<code>flash</code>\u3001\u5728\u670D\u52A1\u5668\u4E0A\u8BBE\u7F6E\u4EE3\u7406\u9875\u9762\u7B49\u8DE8\u57DF\u65B9\u5F0F\u3002\u4E2A\u4EBA\u8BA4\u4E3A<code>window.name</code>\u7684\u65B9\u6CD5\u65E2\u4E0D\u590D\u6742\uFF0C\u4E5F\u80FD\u517C\u5BB9\u5230\u51E0\u4E4E\u6240\u6709\u6D4F\u89C8\u5668\uFF0C\u8FD9\u771F\u662F\u6781\u597D\u7684\u4E00\u79CD\u8DE8\u57DF\u65B9\u6CD5</li></ul><p><strong>\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898?</strong></p><ul><li><p><code>jsonp</code>\u3001 <code>iframe</code>\u3001<code>window.name</code>\u3001<code>window.postMessage</code>\u3001\u670D\u52A1\u5668\u4E0A\u8BBE\u7F6E\u4EE3\u7406\u9875\u9762</p></li><li><p>\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898?</p><ul><li><code>document.domain + iframe</code>\uFF1A\u8981\u6C42\u4E3B\u57DF\u540D\u76F8\u540C //\u53EA\u80FD\u8DE8\u5B50\u57DF</li><li><code>JSONP(JSON with Padding)\`\`\uFF1A</code>response: callback(data)\`\` //\u53EA\u652F\u6301 GET \u8BF7\u6C42</li><li>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB<code>CORS(XHR2)\`\`\uFF1A</code>Access-Control-Allow\` //\u517C\u5BB9\u6027 IE10+</li><li>\u8DE8\u6587\u6863\u6D88\u606F\u4F20\u8F93(HTML5)\uFF1A<code>postMessage + onmessage</code> //\u517C\u5BB9\u6027 IE8+</li><li><code>WebSocket(HTML5)\uFF1Anew WebSocket(url) + onmessage</code> //\u517C\u5BB9\u6027 IE10+</li><li>\u670D\u52A1\u5668\u7AEF\u8BBE\u7F6E\u4EE3\u7406\u8BF7\u6C42\uFF1A\u670D\u52A1\u5668\u7AEF\u4E0D\u53D7\u540C\u6E90\u7B56\u7565\u9650\u5236</li></ul></li></ul>`,15);function o(p,c){return e}var l=n(a,[["render",o],["__file","cross-domain.html.vue"]]);export{l as default};
