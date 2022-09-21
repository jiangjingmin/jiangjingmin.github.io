import{_ as n,e as s}from"./app.7139c5e1.js";const a={},p=s(`<h1 id="vue\u9879\u76EE\u4E2D\u4F60\u662F\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u7684\u5462" tabindex="-1"><a class="header-anchor" href="#vue\u9879\u76EE\u4E2D\u4F60\u662F\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u7684\u5462" aria-hidden="true">#</a> Vue\u9879\u76EE\u4E2D\u4F60\u662F\u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u7684\u5462\uFF1F</h1><p><img src="https://static.vue-js.com/db3045b0-4e31-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u8DE8\u57DF\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u8DE8\u57DF\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u8DE8\u57DF\u662F\u4EC0\u4E48</h2><p>\u8DE8\u57DF\u672C\u8D28\u662F\u6D4F\u89C8\u5668\u57FA\u4E8E<strong>\u540C\u6E90\u7B56\u7565</strong>\u7684\u4E00\u79CD\u5B89\u5168\u624B\u6BB5</p><p>\u540C\u6E90\u7B56\u7565\uFF08Sameoriginpolicy\uFF09\uFF0C\u662F\u4E00\u79CD\u7EA6\u5B9A\uFF0C\u5B83\u662F\u6D4F\u89C8\u5668\u6700\u6838\u5FC3\u4E5F\u6700\u57FA\u672C\u7684\u5B89\u5168\u529F\u80FD</p><p>\u6240\u8C13\u540C\u6E90\uFF08\u5373\u6307\u5728\u540C\u4E00\u4E2A\u57DF\uFF09\u5177\u6709\u4EE5\u4E0B\u4E09\u4E2A\u76F8\u540C\u70B9</p><ul><li>\u534F\u8BAE\u76F8\u540C\uFF08protocol\uFF09</li><li>\u4E3B\u673A\u76F8\u540C\uFF08host\uFF09</li><li>\u7AEF\u53E3\u76F8\u540C\uFF08port\uFF09</li></ul><p>\u53CD\u4E4B\u975E\u540C\u6E90\u8BF7\u6C42\uFF0C\u4E5F\u5C31\u662F\u534F\u8BAE\u3001\u7AEF\u53E3\u3001\u4E3B\u673A\u5176\u4E2D\u4E00\u9879\u4E0D\u76F8\u540C\u7684\u65F6\u5019\uFF0C\u8FD9\u65F6\u5019\u5C31\u4F1A\u4EA7\u751F\u8DE8\u57DF</p><blockquote><p>\u4E00\u5B9A\u8981\u6CE8\u610F\u8DE8\u57DF\u662F\u6D4F\u89C8\u5668\u7684\u9650\u5236\uFF0C\u4F60\u7528\u6293\u5305\u5DE5\u5177\u6293\u53D6\u63A5\u53E3\u6570\u636E\uFF0C\u662F\u53EF\u4EE5\u770B\u5230\u63A5\u53E3\u5DF2\u7ECF\u628A\u6570\u636E\u8FD4\u56DE\u56DE\u6765\u4E86\uFF0C\u53EA\u662F\u6D4F\u89C8\u5668\u7684\u9650\u5236\uFF0C\u4F60\u83B7\u53D6\u4E0D\u5230\u6570\u636E\u3002\u7528postman\u8BF7\u6C42\u63A5\u53E3\u80FD\u591F\u8BF7\u6C42\u5230\u6570\u636E\u3002\u8FD9\u4E9B\u518D\u6B21\u5370\u8BC1\u4E86\u8DE8\u57DF\u662F\u6D4F\u89C8\u5668\u7684\u9650\u5236\u3002</p></blockquote><h2 id="\u4E8C\u3001\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u89E3\u51B3</h2><p>\u89E3\u51B3\u8DE8\u57DF\u7684\u65B9\u6CD5\u6709\u5F88\u591A\uFF0C\u4E0B\u9762\u5217\u4E3E\u4E86\u4E09\u79CD\uFF1A</p><ul><li>JSONP</li><li>CORS</li><li>Proxy</li></ul><p>\u800C\u5728<code>vue</code>\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u4E3B\u8981\u9488\u5BF9<code>CORS</code>\u6216<code>Proxy</code>\u8FD9\u4E24\u79CD\u65B9\u6848\u8FDB\u884C\u5C55\u5F00</p><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS \uFF08Cross-Origin Resource Sharing\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u662F\u4E00\u4E2A\u7CFB\u7EDF\uFF0C\u5B83\u7531\u4E00\u7CFB\u5217\u4F20\u8F93\u7684HTTP\u5934\u7EC4\u6210\uFF0C\u8FD9\u4E9BHTTP\u5934\u51B3\u5B9A\u6D4F\u89C8\u5668\u662F\u5426\u963B\u6B62\u524D\u7AEF JavaScript \u4EE3\u7801\u83B7\u53D6\u8DE8\u57DF\u8BF7\u6C42\u7684\u54CD\u5E94</p><p><code>CORS</code> \u5B9E\u73B0\u8D77\u6765\u975E\u5E38\u65B9\u4FBF\uFF0C\u53EA\u9700\u8981\u589E\u52A0\u4E00\u4E9B <code>HTTP</code> \u5934\uFF0C\u8BA9\u670D\u52A1\u5668\u80FD\u58F0\u660E\u5141\u8BB8\u7684\u8BBF\u95EE\u6765\u6E90</p><p>\u53EA\u8981\u540E\u7AEF\u5B9E\u73B0\u4E86 <code>CORS</code>\uFF0C\u5C31\u5B9E\u73B0\u4E86\u8DE8\u57DF</p><p><img src="https://static.vue-js.com/140deb80-4e32-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u4EE5<code>koa</code>\u6846\u67B6\u4E3E\u4F8B</p><p>\u6DFB\u52A0\u4E2D\u95F4\u4EF6\uFF0C\u76F4\u63A5\u8BBE\u7F6E<code>Access-Control-Allow-Origin</code>\u54CD\u5E94\u5934</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT, POST, GET, DELETE, OPTIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>ps: <code>Access-Control-Allow-Origin</code> \u8BBE\u7F6E\u4E3A*\u5176\u5B9E\u610F\u4E49\u4E0D\u5927\uFF0C\u53EF\u4EE5\u8BF4\u662F\u5F62\u540C\u865A\u8BBE\uFF0C\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u4E0A\u7EBF\u524D\u6211\u4EEC\u4F1A\u5C06<code>Access-Control-Allow-Origin</code> \u503C\u8BBE\u4E3A\u6211\u4EEC\u76EE\u6807<code>host</code></p><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h3><p>\u4EE3\u7406\uFF08Proxy\uFF09\u4E5F\u79F0\u7F51\u7EDC\u4EE3\u7406\uFF0C\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u5141\u8BB8\u4E00\u4E2A\uFF08\u4E00\u822C\u4E3A\u5BA2\u6237\u7AEF\uFF09\u901A\u8FC7\u8FD9\u4E2A\u670D\u52A1\u4E0E\u53E6\u4E00\u4E2A\u7F51\u7EDC\u7EC8\u7AEF\uFF08\u4E00\u822C\u4E3A\u670D\u52A1\u5668\uFF09\u8FDB\u884C\u975E\u76F4\u63A5\u7684\u8FDE\u63A5\u3002\u4E00\u4E9B\u7F51\u5173\u3001\u8DEF\u7531\u5668\u7B49\u7F51\u7EDC\u8BBE\u5907\u5177\u5907\u7F51\u7EDC\u4EE3\u7406\u529F\u80FD\u3002\u4E00\u822C\u8BA4\u4E3A\u4EE3\u7406\u670D\u52A1\u6709\u5229\u4E8E\u4FDD\u969C\u7F51\u7EDC\u7EC8\u7AEF\u7684\u9690\u79C1\u6216\u5B89\u5168\uFF0C\u9632\u6B62\u653B\u51FB</p><p><strong>\u65B9\u6848\u4E00</strong></p><p>\u5982\u679C\u662F\u901A\u8FC7<code>vue-cli</code>\u811A\u624B\u67B6\u5DE5\u5177\u642D\u5EFA\u9879\u76EE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>webpack</code>\u4E3A\u6211\u4EEC\u8D77\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u5668\u4F5C\u4E3A\u8BF7\u6C42\u7684\u4EE3\u7406\u5BF9\u8C61</p><p>\u901A\u8FC7\u8BE5\u670D\u52A1\u5668\u8F6C\u53D1\u8BF7\u6C42\u81F3\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u5F97\u5230\u7ED3\u679C\u518D\u8F6C\u53D1\u7ED9\u524D\u7AEF\uFF0C\u4F46\u662F\u6700\u7EC8\u53D1\u5E03\u4E0A\u7EBF\u65F6\u5982\u679Cweb\u5E94\u7528\u548C\u63A5\u53E3\u670D\u52A1\u5668\u4E0D\u5728\u4E00\u8D77\u4ECD\u4F1A\u8DE8\u57DF</p><p>\u5728<code>vue.config.js</code>\u6587\u4EF6\uFF0C\u65B0\u589E\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>amodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8084</span><span class="token punctuation">,</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// vue\u9879\u76EE\u542F\u52A8\u65F6\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// &#39;/api&#39;\u662F\u4EE3\u7406\u6807\u8BC6\uFF0C\u7528\u4E8E\u544A\u8BC9node\uFF0Curl\u524D\u9762\u662F/api\u7684\u5C31\u662F\u4F7F\u7528\u4EE3\u7406\u7684</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://xxx.xxx.xx.xx:8080&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u76EE\u6807\u5730\u5740\uFF0C\u4E00\u822C\u662F\u6307\u540E\u53F0\u670D\u52A1\u5668\u5730\u5740</span>
                <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u662F\u5426\u8DE8\u57DF</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// pathRewrite \u7684\u4F5C\u7528\u662F\u628A\u5B9E\u9645Request Url\u4E2D\u7684&#39;/api&#39;\u7528&quot;&quot;\u4EE3\u66FF</span>
                    <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> 
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u901A\u8FC7<code>axios</code>\u53D1\u9001\u8BF7\u6C42\u4E2D\uFF0C\u914D\u7F6E\u8BF7\u6C42\u7684\u6839\u8DEF\u5F84</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/api&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u65B9\u6848\u4E8C</strong></p><p>\u6B64\u5916\uFF0C\u8FD8\u53EF\u901A\u8FC7\u670D\u52A1\u7AEF\u5B9E\u73B0\u4EE3\u7406\u8BF7\u6C42\u8F6C\u53D1</p><p>\u4EE5<code>express</code>\u6846\u67B6\u4E3A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">false</span>
                      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> app
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u65B9\u6848\u4E09</strong></p><p>\u901A\u8FC7\u914D\u7F6E<code>nginx</code>\u5B9E\u73B0\u4EE3\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen    <span class="token number">80</span><span class="token punctuation">;</span>
    # server_name www<span class="token punctuation">.</span>josephxia<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        root  <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token punctuation">;</span>
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>api <span class="token punctuation">{</span>
        proxy_pass  http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">;</span>
        proxy_redirect   off<span class="token punctuation">;</span>
        proxy_set_header  Host       $host<span class="token punctuation">;</span>
        proxy_set_header  <span class="token constant">X</span><span class="token operator">-</span>Real<span class="token operator">-</span><span class="token constant">IP</span>     $remote_addr<span class="token punctuation">;</span>
        proxy_set_header  <span class="token constant">X</span><span class="token operator">-</span>Forwarded<span class="token operator">-</span>For  $proxy_add_x_forwarded_for<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,38);function e(t,o){return p}var r=n(a,[["render",e],["__file","cors.html.vue"]]);export{r as default};
