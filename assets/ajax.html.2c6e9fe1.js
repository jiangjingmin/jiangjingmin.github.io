import{_ as n,c as s}from"./app.f060585c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-ajax\u539F\u7406\u662F\u4EC0\u4E48-\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-ajax\u539F\u7406\u662F\u4EC0\u4E48-\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1Aajax\u539F\u7406\u662F\u4EC0\u4E48\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F</h1><p><img src="https://static.vue-js.com/a35a2950-7b2a-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>AJAX </code>\u5168\u79F0(Async Javascript and XML)</p><p>\u5373\u5F02\u6B65\u7684<code> JavaScript</code> \u548C<code> XML</code>\uFF0C\u662F\u4E00\u79CD\u521B\u5EFA\u4EA4\u4E92\u5F0F\u7F51\u9875\u5E94\u7528\u7684\u7F51\u9875\u5F00\u53D1\u6280\u672F\uFF0C\u53EF\u4EE5\u5728\u4E0D\u91CD\u65B0\u52A0\u8F7D\u6574\u4E2A\u7F51\u9875\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0E\u670D\u52A1\u5668\u4EA4\u6362\u6570\u636E\uFF0C\u5E76\u4E14\u66F4\u65B0\u90E8\u5206\u7F51\u9875</p><p><code>Ajax</code>\u7684\u539F\u7406\u7B80\u5355\u6765\u8BF4\u901A\u8FC7<code>XmlHttpRequest</code>\u5BF9\u8C61\u6765\u5411\u670D\u52A1\u5668\u53D1\u5F02\u6B65\u8BF7\u6C42\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u5F97\u6570\u636E\uFF0C\u7136\u540E\u7528<code>JavaScript</code>\u6765\u64CD\u4F5C<code>DOM</code>\u800C\u66F4\u65B0\u9875\u9762</p><p>\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/af42de10-7b2a-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u9886\u5BFC\u60F3\u627E\u5C0F\u674E\u6C47\u62A5\u4E00\u4E0B\u5DE5\u4F5C\uFF0C\u5C31\u59D4\u6258\u79D8\u4E66\u53BB\u53EB\u5C0F\u674E\uFF0C\u81EA\u5DF1\u5C31\u63A5\u7740\u505A\u5176\u4ED6\u4E8B\u60C5\uFF0C\u76F4\u5230\u79D8\u4E66\u544A\u8BC9\u4ED6\u5C0F\u674E\u5DF2\u7ECF\u5230\u4E86\uFF0C\u6700\u540E\u5C0F\u674E\u8DDF\u9886\u5BFC\u6C47\u62A5\u5DE5\u4F5C</p><p><code>Ajax</code>\u8BF7\u6C42\u6570\u636E\u6D41\u7A0B\u4E0E\u201C\u9886\u5BFC\u60F3\u627E\u5C0F\u674E\u6C47\u62A5\u4E00\u4E0B\u5DE5\u4F5C\u201D\u7C7B\u4F3C\uFF0C\u4E0A\u8FF0\u79D8\u4E66\u5C31\u76F8\u5F53\u4E8E<code>XMLHttpRequest</code>\u5BF9\u8C61\uFF0C\u9886\u5BFC\u76F8\u5F53\u4E8E\u6D4F\u89C8\u5668\uFF0C\u54CD\u5E94\u6570\u636E\u76F8\u5F53\u4E8E\u5C0F\u674E</p><p>\u6D4F\u89C8\u5668\u53EF\u4EE5\u53D1\u9001<code>HTTP</code>\u8BF7\u6C42\u540E\uFF0C\u63A5\u7740\u505A\u5176\u4ED6\u4E8B\u60C5\uFF0C\u7B49\u6536\u5230<code>XHR</code>\u8FD4\u56DE\u6765\u7684\u6570\u636E\u518D\u8FDB\u884C\u64CD\u4F5C</p><h2 id="\u4E8C\u3001\u5B9E\u73B0\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u8FC7\u7A0B" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u73B0\u8FC7\u7A0B</h2><p>\u5B9E\u73B0 <code>Ajax </code>\u5F02\u6B65\u4EA4\u4E92\u9700\u8981\u670D\u52A1\u5668\u903B\u8F91\u8FDB\u884C\u914D\u5408\uFF0C\u9700\u8981\u5B8C\u6210\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p><ul><li><p>\u521B\u5EFA <code>Ajax </code>\u7684\u6838\u5FC3\u5BF9\u8C61 <code>XMLHttpRequest </code>\u5BF9\u8C61</p></li><li><p>\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>open()</code> \u65B9\u6CD5\u4E0E\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8FDE\u63A5</p></li><li><p>\u6784\u5EFA\u8BF7\u6C42\u6240\u9700\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u5E76\u901A\u8FC7<code> XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>send()</code> \u65B9\u6CD5\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7AEF</p></li><li><p>\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u63D0\u4F9B\u7684 <code>onreadystatechange</code> \u4E8B\u4EF6\u76D1\u542C\u670D\u52A1\u5668\u7AEF\u4F60\u7684\u901A\u4FE1\u72B6\u6001</p></li><li><p>\u63A5\u53D7\u5E76\u5904\u7406\u670D\u52A1\u7AEF\u5411\u5BA2\u6237\u7AEF\u54CD\u5E94\u7684\u6570\u636E\u7ED3\u679C</p></li><li><p>\u5C06\u5904\u7406\u7ED3\u679C\u66F4\u65B0\u5230 <code>HTML </code>\u9875\u9762\u4E2D</p></li></ul><h3 id="\u521B\u5EFAxmlhttprequest\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAxmlhttprequest\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFAXMLHttpRequest\u5BF9\u8C61</h3><p>\u901A\u8FC7<code>XMLHttpRequest()</code> \u6784\u9020\u51FD\u6570\u7528\u4E8E\u521D\u59CB\u5316\u4E00\u4E2A <code>XMLHttpRequest</code> \u5B9E\u4F8B\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5" aria-hidden="true">#</a> \u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5</h3><p>\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>open()</code> \u65B9\u6CD5\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token punctuation">[</span>async<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span> password<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><p><code>method</code>\uFF1A\u8868\u793A\u5F53\u524D\u7684\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u5E38\u89C1\u7684\u6709<code>GET</code>\u3001<code>POST</code></p></li><li><p><code>url</code>\uFF1A\u670D\u52A1\u7AEF\u5730\u5740</p></li><li><p><code>async</code>\uFF1A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u5F02\u6B65\u6267\u884C\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code></p></li><li><p><code>user</code>: \u53EF\u9009\u7684\u7528\u6237\u540D\u7528\u4E8E\u8BA4\u8BC1\u7528\u9014\uFF1B\u9ED8\u8BA4\u4E3A\`null</p></li><li><p><code>password</code>: \u53EF\u9009\u7684\u5BC6\u7801\u7528\u4E8E\u8BA4\u8BC1\u7528\u9014\uFF0C\u9ED8\u8BA4\u4E3A\`null</p></li></ul><h3 id="\u7ED9\u670D\u52A1\u7AEF\u53D1\u9001\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u670D\u52A1\u7AEF\u53D1\u9001\u6570\u636E" aria-hidden="true">#</a> \u7ED9\u670D\u52A1\u7AEF\u53D1\u9001\u6570\u636E</h3><p>\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>send()</code> \u65B9\u6CD5\uFF0C\u5C06\u5BA2\u6237\u7AEF\u9875\u9762\u7684\u6570\u636E\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span>body<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>body</code>: \u5728 <code>XHR</code> \u8BF7\u6C42\u4E2D\u8981\u53D1\u9001\u7684\u6570\u636E\u4F53\uFF0C\u5982\u679C\u4E0D\u4F20\u9012\u6570\u636E\u5219\u4E3A <code>null</code></p><p>\u5982\u679C\u4F7F\u7528<code>GET</code>\u8BF7\u6C42\u53D1\u9001\u6570\u636E\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u5982\u4E0B\uFF1A</p><ul><li>\u5C06\u8BF7\u6C42\u6570\u636E\u6DFB\u52A0\u5230<code>open()</code>\u65B9\u6CD5\u4E2D\u7684<code>url</code>\u5730\u5740\u4E2D</li><li>\u53D1\u9001\u8BF7\u6C42\u6570\u636E\u4E2D\u7684<code>send()</code>\u65B9\u6CD5\u4E2D\u53C2\u6570\u8BBE\u7F6E\u4E3A<code>null</code></li></ul><h3 id="\u7ED1\u5B9Aonreadystatechange\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9Aonreadystatechange\u4E8B\u4EF6" aria-hidden="true">#</a> \u7ED1\u5B9Aonreadystatechange\u4E8B\u4EF6</h3><p><code>onreadystatechange</code> \u4E8B\u4EF6\u7528\u4E8E\u76D1\u542C\u670D\u52A1\u5668\u7AEF\u7684\u901A\u4FE1\u72B6\u6001\uFF0C\u4E3B\u8981\u76D1\u542C\u7684\u5C5E\u6027\u4E3A<code>XMLHttpRequest.readyState</code> ,</p><p>\u5173\u4E8E<code>XMLHttpRequest.readyState</code>\u5C5E\u6027\u6709\u4E94\u4E2A\u72B6\u6001\uFF0C\u5982\u4E0B\u56FE\u663E\u793A</p><p><img src="https://static.vue-js.com/9782fc90-7b31-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u53EA\u8981 <code>readyState </code>\u5C5E\u6027\u503C\u4E00\u53D8\u5316\uFF0C\u5C31\u4F1A\u89E6\u53D1\u4E00\u6B21 <code>readystatechange</code> \u4E8B\u4EF6</p><p><code>XMLHttpRequest.responseText</code>\u5C5E\u6027\u7528\u4E8E\u63A5\u6536\u670D\u52A1\u5668\u7AEF\u7684\u54CD\u5E94\u7ED3\u679C</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u6574\u4E2A\u8BF7\u6C42\u8FC7\u7A0B\u5B8C\u6BD5</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>status <span class="token operator">&lt;=</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span> <span class="token comment">// \u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u7ED3\u679C</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u9519\u8BEF\u4FE1\u606F\uFF1A&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>status<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
request<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;http://xxxx&#39;</span><span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u4E09\u3001\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5C01\u88C5" aria-hidden="true">#</a> \u4E09\u3001\u5C01\u88C5</h2><p>\u901A\u8FC7\u4E0A\u9762\u5BF9<code>XMLHttpRequest </code>\u5BF9\u8C61\u7684\u4E86\u89E3\uFF0C\u4E0B\u9762\u6765\u5C01\u88C5\u4E00\u4E2A\u7B80\u5355\u7684<code>ajax</code>\u8BF7\u6C42</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5C01\u88C5\u4E00\u4E2Aajax\u8BF7\u6C42</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFAXMLHttpRequest\u5BF9\u8C61</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token comment">//\u521D\u59CB\u5316\u53C2\u6570\u7684\u5185\u5BB9</span>
    options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    options<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    options<span class="token punctuation">.</span>dataType <span class="token operator">=</span> options<span class="token punctuation">.</span>dataType <span class="token operator">||</span> <span class="token string">&#39;json&#39;</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> options<span class="token punctuation">.</span>data

    <span class="token comment">//\u53D1\u9001\u8BF7\u6C42</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url <span class="token operator">+</span> <span class="token string">&#39;?&#39;</span> <span class="token operator">+</span> params<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>

    <span class="token comment">//\u63A5\u6536\u8BF7\u6C42</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> status <span class="token operator">=</span> xhr<span class="token punctuation">.</span>status
            <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>responseXML<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>fail <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span>xml</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u8BF7\u6C42\u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">////\u8BF7\u6C42\u5931\u8D25\u540E\u7684\u56DE\u8C03\u51FD\u6570</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,42);function t(e,o){return p}var l=n(a,[["render",t],["__file","ajax.html.vue"]]);export{l as default};
