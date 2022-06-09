import{_ as n,c as s}from"./app.8c5ff8f0.js";var a="/images/fe/event_loop.png",p="/images/fe/event_loop_process.png",e="/images/fe/event_loop_relationship.png";const t={},c=s('<h1 id="\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236</h1><p><img src="'+a+'" alt="event_loop"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u9996\u5148\uFF0C<code>JavaScript</code> \u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u610F\u5473\u7740\u540C\u4E00\u65F6\u95F4\u5185\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u5355\u7EBF\u7A0B\u5C31\u662F\u963B\u585E\uFF0C\u800C\u5B9E\u73B0\u5355\u7EBF\u7A0B\u975E\u963B\u585E\u7684\u65B9\u6CD5\u5C31\u662F\u4E8B\u4EF6\u5FAA\u73AF</p><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u53EF\u4EE5\u5206\u4E3A</p><ul><li><p>\u540C\u6B65\u4EFB\u52A1\uFF1A\u7ACB\u5373\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u540C\u6B65\u4EFB\u52A1\u4E00\u822C\u4F1A\u76F4\u63A5\u8FDB\u5165\u5230\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C</p></li><li><p>\u5F02\u6B65\u4EFB\u52A1\uFF1A\u5F02\u6B65\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982<code>ajax</code>\u7F51\u7EDC\u8BF7\u6C42\uFF0C<code>setTimeout</code> \u5B9A\u65F6\u51FD\u6570\u7B49</p></li></ul><p>\u540C\u6B65\u4EFB\u52A1\u4E0E\u5F02\u6B65\u4EFB\u52A1\u7684\u8FD0\u884C\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p><p><img src="'+p+`" alt="event_loop_process"></p><p>\u4ECE\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u540C\u6B65\u4EFB\u52A1\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u6267\u884C\u6808\uFF0C\u5F02\u6B65\u4EFB\u52A1\u8FDB\u5165\u4EFB\u52A1\u961F\u5217\uFF0C\u4E3B\u7EBF\u7A0B\u5185\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4E3A\u7A7A\uFF0C\u4F1A\u53BB\u4EFB\u52A1\u961F\u5217\u8BFB\u53D6\u5BF9\u5E94\u7684\u4EFB\u52A1\uFF0C\u63A8\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002\u4E0A\u8FF0\u8FC7\u7A0B\u7684\u4E0D\u65AD\u91CD\u590D\u5C31\u4E8B\u4EF6\u5FAA\u73AF</p><h2 id="\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u4E8C\u3001\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1</h2><p>\u5982\u679C\u5C06\u4EFB\u52A1\u5212\u5206\u4E3A\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u51C6\u786E\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new Promise&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u679C\u6309\u7167\u4E0A\u9762\u6D41\u7A0B\u56FE\u6765\u5206\u6790\u4EE3\u7801\uFF0C\u6211\u4EEC\u4F1A\u5F97\u5230\u4E0B\u9762\u7684\u6267\u884C\u6B65\u9AA4\uFF1A</p><ul><li><code>console.log(1)</code>\uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u4E2D\u6267\u884C</li><li><code>setTimeout()</code> \uFF0C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u653E\u5230 <code>Event Table</code>\uFF0C0 \u6BEB\u79D2\u540E<code>console.log(2)</code> \u56DE\u8C03\u63A8\u5165 <code>Event Queue</code> \u4E2D</li><li><code>new Promise</code> \uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u76F4\u63A5\u6267\u884C</li><li><code>.then</code> \uFF0C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u653E\u5230 <code>Event Table</code></li><li><code>console.log(3)</code>\uFF0C\u540C\u6B65\u4EFB\u52A1\uFF0C\u4E3B\u7EBF\u7A0B\u6267\u884C</li></ul><p>\u6240\u4EE5\u6309\u7167\u5206\u6790\uFF0C\u5B83\u7684\u7ED3\u679C\u5E94\u8BE5\u662F <code>1</code> =&gt; <code>&#39;new Promise&#39;</code> =&gt; <code>3</code> =&gt; <code>2</code> =&gt; <code>&#39;then&#39;</code></p><p>\u4F46\u662F\u5B9E\u9645\u7ED3\u679C\u662F\uFF1A<code>1</code>=&gt;<code>&#39;new Promise&#39;</code>=&gt; <code>3</code> =&gt; <code>&#39;then&#39;</code> =&gt; <code>2</code></p><p>\u51FA\u73B0\u5206\u6B67\u7684\u539F\u56E0\u5728\u4E8E\u5F02\u6B65\u4EFB\u52A1\u6267\u884C\u987A\u5E8F\uFF0C\u4E8B\u4EF6\u961F\u5217\u5176\u5B9E\u662F\u4E00\u4E2A\u201C\u5148\u8FDB\u5148\u51FA\u201D\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6392\u5728\u524D\u9762\u7684\u4E8B\u4EF6\u4F1A\u4F18\u5148\u88AB\u4E3B\u7EBF\u7A0B\u8BFB\u53D6</p><p>\u4F8B\u5B50\u4E2D <code>setTimeout</code>\u56DE\u8C03\u4E8B\u4EF6\u662F\u5148\u8FDB\u5165\u961F\u5217\u4E2D\u7684\uFF0C\u6309\u7406\u8BF4\u5E94\u8BE5\u5148\u4E8E <code>.then</code> \u4E2D\u7684\u6267\u884C\uFF0C\u4F46\u662F\u7ED3\u679C\u5374\u504F\u504F\u76F8\u53CD</p><p>\u539F\u56E0\u5728\u4E8E\u5F02\u6B65\u4EFB\u52A1\u8FD8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1</p><h3 id="\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u5FAE\u4EFB\u52A1</h3><p>\u4E00\u4E2A\u9700\u8981\u5F02\u6B65\u6267\u884C\u7684\u51FD\u6570\uFF0C\u6267\u884C\u65F6\u673A\u662F\u5728\u4E3B\u51FD\u6570\u6267\u884C\u7ED3\u675F\u4E4B\u540E\u3001\u5F53\u524D\u5B8F\u4EFB\u52A1\u7ED3\u675F\u4E4B\u524D</p><p>\u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1\u6709\uFF1A</p><ul><li><p>Promise.then</p></li><li><p>MutaionObserver</p></li><li><p>Object.observe\uFF08\u5DF2\u5E9F\u5F03\uFF1BProxy \u5BF9\u8C61\u66FF\u4EE3\uFF09</p></li><li><p>process.nextTick\uFF08Node.js\uFF09</p></li></ul><h3 id="\u5B8F\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5B8F\u4EFB\u52A1" aria-hidden="true">#</a> \u5B8F\u4EFB\u52A1</h3><p>\u5B8F\u4EFB\u52A1\u7684\u65F6\u95F4\u7C92\u5EA6\u6BD4\u8F83\u5927\uFF0C\u6267\u884C\u7684\u65F6\u95F4\u95F4\u9694\u662F\u4E0D\u80FD\u7CBE\u786E\u63A7\u5236\u7684\uFF0C\u5BF9\u4E00\u4E9B\u9AD8\u5B9E\u65F6\u6027\u7684\u9700\u6C42\u5C31\u4E0D\u592A\u7B26\u5408</p><p>\u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1\u6709\uFF1A</p><ul><li>script (\u53EF\u4EE5\u7406\u89E3\u4E3A\u5916\u5C42\u540C\u6B65\u4EE3\u7801)</li><li>setTimeout/setInterval</li><li>UI rendering/UI\u4E8B\u4EF6</li><li>postMessage\u3001MessageChannel</li><li>setImmediate\u3001I/O\uFF08Node.js\uFF09</li></ul><p>\u8FD9\u65F6\u5019\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5B8F\u4EFB\u52A1\uFF0C\u5FAE\u4EFB\u52A1\u7684\u5173\u7CFB\u5982\u56FE\u6240\u793A</p><p><img src="`+e+`" alt="event_loop_relationship"></p><p>\u6309\u7167\u8FD9\u4E2A\u6D41\u7A0B\uFF0C\u5B83\u7684\u6267\u884C\u673A\u5236\u662F\uFF1A</p><ul><li>\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5982\u679C\u9047\u5230\u5FAE\u4EFB\u52A1\u5C31\u5C06\u5B83\u653E\u5230\u5FAE\u4EFB\u52A1\u7684\u4E8B\u4EF6\u961F\u5217\u4E2D</li><li>\u5F53\u524D\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u67E5\u770B\u5FAE\u4EFB\u52A1\u7684\u4E8B\u4EF6\u961F\u5217\uFF0C\u7136\u540E\u5C06\u91CC\u9762\u7684\u6240\u6709\u5FAE\u4EFB\u52A1\u4F9D\u6B21\u6267\u884C\u5B8C</li></ul><p>\u56DE\u5230\u4E0A\u9762\u7684\u9898\u76EE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new Promise&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6D41\u7A0B\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9047\u5230 console.log(1) \uFF0C\u76F4\u63A5\u6253\u5370 1</span>
<span class="token comment">// \u9047\u5230\u5B9A\u65F6\u5668\uFF0C\u5C5E\u4E8E\u65B0\u7684\u5B8F\u4EFB\u52A1\uFF0C\u7559\u7740\u540E\u9762\u6267\u884C</span>
<span class="token comment">// \u9047\u5230 new Promise\uFF0C\u8FD9\u4E2A\u662F\u76F4\u63A5\u6267\u884C\u7684\uFF0C\u6253\u5370 &#39;new Promise&#39;</span>
<span class="token comment">// .then \u5C5E\u4E8E\u5FAE\u4EFB\u52A1\uFF0C\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u540E\u9762\u518D\u6267\u884C</span>
<span class="token comment">// \u9047\u5230 console.log(3) \u76F4\u63A5\u6253\u5370 3</span>
<span class="token comment">// \u597D\u4E86\u672C\u8F6E\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u73B0\u5728\u53BB\u5FAE\u4EFB\u52A1\u5217\u8868\u67E5\u770B\u662F\u5426\u6709\u5FAE\u4EFB\u52A1\uFF0C\u53D1\u73B0 .then \u7684\u56DE\u8C03\uFF0C\u6267\u884C\u5B83\uFF0C\u6253\u5370 &#39;then&#39;</span>
<span class="token comment">// \u5F53\u4E00\u6B21\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\uFF0C\u518D\u53BB\u6267\u884C\u65B0\u7684\u5B8F\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u5C31\u5269\u4E00\u4E2A\u5B9A\u65F6\u5668\u7684\u5B8F\u4EFB\u52A1\u4E86\uFF0C\u6267\u884C\u5B83\uFF0C\u6253\u5370 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4E09\u3001async\u4E0Eawait" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001async\u4E0Eawait" aria-hidden="true">#</a> \u4E09\u3001async\u4E0Eawait</h2><p><code>async</code> \u662F\u5F02\u6B65\u7684\u610F\u601D\uFF0C<code>await</code> \u5219\u53EF\u4EE5\u7406\u89E3\u4E3A <code>async wait</code>\u3002\u6240\u4EE5\u53EF\u4EE5\u7406\u89E3<code>async</code>\u5C31\u662F\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\uFF0C\u800C <code>await</code> \u662F\u7528\u6765\u7B49\u5F85\u5F02\u6B65\u65B9\u6CD5\u6267\u884C</p><h3 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h3><p><code>async</code>\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A<code>promise</code>\u5BF9\u8C61\uFF0C\u4E0B\u9762\u4E24\u79CD\u65B9\u6CD5\u662F\u7B49\u6548\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;TEST&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// asyncF is equivalent to f!</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;TEST&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> await</h3><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C<code>await</code>\u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u7684\u7ED3\u679C\u3002\u5982\u679C\u4E0D\u662F <code>Promise</code> \u5BF9\u8C61\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\u5BF9\u5E94\u7684\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u7B49\u540C\u4E8E</span>
    <span class="token comment">// return 123</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token number">123</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0D\u7BA1<code>await</code>\u540E\u9762\u8DDF\u7740\u7684\u662F\u4EC0\u4E48\uFF0C<code>await</code>\u90FD\u4F1A\u963B\u585E\u540E\u9762\u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u963B\u585E</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C<code>await</code> \u4F1A\u963B\u585E\u4E0B\u9762\u7684\u4EE3\u7801\uFF08\u5373\u52A0\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF09\uFF0C\u5148\u6267\u884C <code>async</code> \u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\uFF0C\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\uFF0C\u518D\u56DE\u5230 <code>async</code> \u51FD\u6570\u4E2D\uFF0C\u518D\u6267\u884C\u4E4B\u524D\u963B\u585E\u7684\u4EE3\u7801</p><p>\u6240\u4EE5\u4E0A\u8FF0\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A<code>1</code>\uFF0C<code>fn2</code>\uFF0C<code>3</code>\uFF0C<code>2</code></p><h2 id="\u56DB\u3001\u6D41\u7A0B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6D41\u7A0B\u5206\u6790" aria-hidden="true">#</a> \u56DB\u3001\u6D41\u7A0B\u5206\u6790</h2><p>\u901A\u8FC7\u5BF9\u4E0A\u9762\u7684\u4E86\u89E3\uFF0C\u6211\u4EEC\u5BF9<code>JavaScript</code>\u5BF9\u5404\u79CD\u573A\u666F\u7684\u6267\u884C\u987A\u5E8F\u6709\u4E86\u5927\u81F4\u7684\u4E86\u89E3</p><p>\u8FD9\u91CC\u76F4\u63A5\u4E0A\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 start&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;settimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5206\u6790\u8FC7\u7A0B\uFF1A</p><ol><li>\u6267\u884C\u6574\u6BB5\u4EE3\u7801\uFF0C\u9047\u5230 <code>console.log(&#39;script start&#39;)</code> \u76F4\u63A5\u6253\u5370\u7ED3\u679C\uFF0C\u8F93\u51FA <code>script start</code></li><li>\u9047\u5230\u5B9A\u65F6\u5668\u4E86\uFF0C\u5B83\u662F\u5B8F\u4EFB\u52A1\uFF0C\u5148\u653E\u7740\u4E0D\u6267\u884C</li><li>\u9047\u5230 <code>async1()</code>\uFF0C\u6267\u884C <code>async1</code> \u51FD\u6570\uFF0C\u5148\u6253\u5370 <code>async1 start</code>\uFF0C\u4E0B\u9762\u9047\u5230<code>await</code>\u600E\u4E48\u529E\uFF1F\u5148\u6267\u884C <code>async2</code>\uFF0C\u6253\u5370 <code>async2</code>\uFF0C\u7136\u540E\u963B\u585E\u4E0B\u9762\u4EE3\u7801\uFF08\u5373\u52A0\u5165\u5FAE\u4EFB\u52A1\u5217\u8868\uFF09\uFF0C\u8DF3\u51FA\u53BB\u6267\u884C\u540C\u6B65\u4EE3\u7801</li><li>\u8DF3\u5230 <code>new Promise</code> \u8FD9\u91CC\uFF0C\u76F4\u63A5\u6267\u884C\uFF0C\u6253\u5370 <code>promise1</code>\uFF0C\u4E0B\u9762\u9047\u5230 <code>.then()</code>\uFF0C\u5B83\u662F\u5FAE\u4EFB\u52A1\uFF0C\u653E\u5230\u5FAE\u4EFB\u52A1\u5217\u8868\u7B49\u5F85\u6267\u884C</li><li>\u6700\u540E\u4E00\u884C\u76F4\u63A5\u6253\u5370 <code>script end</code>\uFF0C\u73B0\u5728\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u4E86\uFF0C\u5F00\u59CB\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u5373 <code>await</code> \u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6253\u5370 <code>async1 end</code></li><li>\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u5373\u6267\u884C <code>then</code> \u7684\u56DE\u8C03\uFF0C\u6253\u5370 <code>promise2</code></li><li>\u4E0A\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6240\u6709\u4E8B\u90FD\u505A\u5B8C\u4E86\uFF0C\u5F00\u59CB\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5C31\u662F\u5B9A\u65F6\u5668\uFF0C\u6253\u5370 <code>settimeout</code></li></ol><p>\u6240\u4EE5\u6700\u540E\u7684\u7ED3\u679C\u662F\uFF1A<code>script start</code>\u3001<code>async1 start</code>\u3001<code>async2</code>\u3001<code>promise1</code>\u3001<code>script end</code>\u3001<code>async1 end</code>\u3001<code>promise2</code>\u3001<code>settimeout</code></p>`,54);function o(l,u){return c}var r=n(t,[["render",o],["__file","event_loop.html.vue"]]);export{r as default};
