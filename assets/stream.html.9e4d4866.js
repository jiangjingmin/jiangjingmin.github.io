import{_ as p,r as t,o as c,c as o,a as n,b as a,F as l,e as r,d as e}from"./app.7139c5e1.js";const u={},i=r(`<h1 id="\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-stream-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-stream-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u8BF4\u8BF4\u5BF9 Node \u4E2D\u7684 Stream \u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><p><img src="https://static.vue-js.com/a5df3c60-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u6D41\uFF08Stream\uFF09\uFF0C\u662F\u4E00\u4E2A\u6570\u636E\u4F20\u8F93\u624B\u6BB5\uFF0C\u662F\u7AEF\u5230\u7AEF\u4FE1\u606F\u4EA4\u6362\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u800C\u4E14\u662F\u6709\u987A\u5E8F\u7684,\u662F\u9010\u5757\u8BFB\u53D6\u6570\u636E\u3001\u5904\u7406\u5185\u5BB9\uFF0C\u7528\u4E8E\u987A\u5E8F\u8BFB\u53D6\u8F93\u5165\u6216\u5199\u5165\u8F93\u51FA</p><p><code>Node.js</code>\u4E2D\u5F88\u591A\u5BF9\u8C61\u90FD\u5B9E\u73B0\u4E86\u6D41\uFF0C\u603B\u4E4B\u5B83\u662F\u4F1A\u5192\u6570\u636E\uFF08\u4EE5 <code>Buffer</code> \u4E3A\u5355\u4F4D\uFF09</p><p>\u5B83\u7684\u72EC\u7279\u4E4B\u5904\u5728\u4E8E\uFF0C\u5B83\u4E0D\u50CF\u4F20\u7EDF\u7684\u7A0B\u5E8F\u90A3\u6837\u4E00\u6B21\u5C06\u4E00\u4E2A\u6587\u4EF6\u8BFB\u5165\u5185\u5B58\uFF0C\u800C\u662F\u9010\u5757\u8BFB\u53D6\u6570\u636E\u3001\u5904\u7406\u5176\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u5C06\u5176\u5168\u90E8\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D</p><p>\u6D41\u53EF\u4EE5\u5206\u6210\u4E09\u90E8\u5206\uFF1A<code>source</code>\u3001<code>dest</code>\u3001<code>pipe</code></p><p>\u5728<code>source</code>\u548C<code>dest</code>\u4E4B\u95F4\u6709\u4E00\u4E2A\u8FDE\u63A5\u7684\u7BA1\u9053<code>pipe</code>,\u5B83\u7684\u57FA\u672C\u8BED\u6CD5\u662F<code>source.pipe(dest)</code>\uFF0C<code>source</code>\u548C<code>dest</code>\u5C31\u662F\u901A\u8FC7pipe\u8FDE\u63A5\uFF0C\u8BA9\u6570\u636E\u4ECE<code>source</code>\u6D41\u5411\u4E86<code>dest</code>\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/aec05670-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E8C\u3001\u79CD\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u79CD\u7C7B" aria-hidden="true">#</a> \u4E8C\u3001\u79CD\u7C7B</h2><p>\u5728<code>NodeJS</code>\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u5730\u65B9\u90FD\u4F7F\u7528\u5230\u4E86\u6D41\u7684\u6982\u5FF5\uFF0C\u5206\u6210\u56DB\u4E2A\u79CD\u7C7B\uFF1A</p><ul><li><p>\u53EF\u5199\u6D41\uFF1A\u53EF\u5199\u5165\u6570\u636E\u7684\u6D41\u3002\u4F8B\u5982 fs.createWriteStream() \u53EF\u4EE5\u4F7F\u7528\u6D41\u5C06\u6570\u636E\u5199\u5165\u6587\u4EF6</p></li><li><p>\u53EF\u8BFB\u6D41\uFF1A \u53EF\u8BFB\u53D6\u6570\u636E\u7684\u6D41\u3002\u4F8B\u5982fs.createReadStream() \u53EF\u4EE5\u4ECE\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9</p></li><li><p>\u53CC\u5DE5\u6D41\uFF1A \u65E2\u53EF\u8BFB\u53C8\u53EF\u5199\u7684\u6D41\u3002\u4F8B\u5982 net.Socket</p></li><li><p>\u8F6C\u6362\u6D41\uFF1A \u53EF\u4EE5\u5728\u6570\u636E\u5199\u5165\u548C\u8BFB\u53D6\u65F6\u4FEE\u6539\u6216\u8F6C\u6362\u6570\u636E\u7684\u6D41\u3002\u4F8B\u5982\uFF0C\u5728\u6587\u4EF6\u538B\u7F29\u64CD\u4F5C\u4E2D\uFF0C\u53EF\u4EE5\u5411\u6587\u4EF6\u5199\u5165\u538B\u7F29\u6570\u636E\uFF0C\u5E76\u4ECE\u6587\u4EF6\u4E2D\u8BFB\u53D6\u89E3\u538B\u6570\u636E</p></li></ul><p>\u5728<code>NodeJS</code>\u4E2D<code>HTTP</code>\u670D\u52A1\u5668\u6A21\u5757\u4E2D\uFF0C<code>request</code> \u662F\u53EF\u8BFB\u6D41\uFF0C<code>response</code> \u662F\u53EF\u5199\u6D41\u3002\u8FD8\u6709<code>fs</code> \u6A21\u5757\uFF0C\u80FD\u540C\u65F6\u5904\u7406\u53EF\u8BFB\u548C\u53EF\u5199\u6587\u4EF6\u6D41</p><p>\u53EF\u8BFB\u6D41\u548C\u53EF\u5199\u6D41\u90FD\u662F\u5355\u5411\u7684\uFF0C\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0C\u800C\u53E6\u5916\u4E24\u4E2A\u662F\u53CC\u5411\u7684</p><h3 id="\u53CC\u5DE5\u6D41" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5DE5\u6D41" aria-hidden="true">#</a> \u53CC\u5DE5\u6D41</h3><p>\u4E4B\u524D\u4E86\u89E3\u8FC7<code>websocket</code>\u901A\u4FE1\uFF0C\u662F\u4E00\u4E2A\u5168\u53CC\u5DE5\u901A\u4FE1\uFF0C\u53D1\u9001\u65B9\u548C\u63A5\u53D7\u65B9\u90FD\u662F\u5404\u81EA\u72EC\u7ACB\u7684\u65B9\u6CD5\uFF0C\u53D1\u9001\u548C\u63A5\u6536\u90FD\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/b7ac6d00-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u57FA\u672C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Duplex <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;stream&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myDuplex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Duplex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">read</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">write</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u53CC\u5DE5\u6D41-1" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5DE5\u6D41-1" aria-hidden="true">#</a> \u53CC\u5DE5\u6D41</h3><p>\u53CC\u5DE5\u6D41\u7684\u6F14\u793A\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/c02883b0-c76f-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u9664\u4E86\u4E0A\u8FF0\u538B\u7F29\u5305\u7684\u4F8B\u5B50\uFF0C\u8FD8\u6BD4\u5982\u4E00\u4E2A <code>babel</code>\uFF0C\u628A<code>es6</code>\u8F6C\u6362\u4E3A\uFF0C\u6211\u4EEC\u5728\u5DE6\u8FB9\u5199\u5165 <code>es6</code>\uFF0C\u4ECE\u53F3\u8FB9\u8BFB\u53D6 <code>es5</code></p><p>\u57FA\u672C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Transform <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;stream&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myTransform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Transform</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p><code>stream</code>\u7684\u5E94\u7528\u573A\u666F\u4E3B\u8981\u5C31\u662F\u5904\u7406<code>IO</code>\u64CD\u4F5C\uFF0C\u800C<code>http</code>\u8BF7\u6C42\u548C\u6587\u4EF6\u64CD\u4F5C\u90FD\u5C5E\u4E8E<code>IO</code>\u64CD\u4F5C</p><p>\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C\u4E00\u6B21<code>IO</code>\u64CD\u4F5C\u8FC7\u5927\uFF0C\u786C\u4EF6\u7684\u5F00\u9500\u5C31\u8FC7\u5927\uFF0C\u800C\u5C06\u6B64\u6B21\u5927\u7684<code>IO</code>\u64CD\u4F5C\u8FDB\u884C\u5206\u6BB5\u64CD\u4F5C\uFF0C\u8BA9\u6570\u636E\u50CF\u6C34\u7BA1\u4E00\u6837\u6D41\u52A8\uFF0C\u76F4\u5230\u6D41\u52A8\u5B8C\u6210</p><p>\u5E38\u89C1\u7684\u573A\u666F\u6709\uFF1A</p><ul><li>get\u8BF7\u6C42\u8FD4\u56DE\u6587\u4EF6\u7ED9\u5BA2\u6237\u7AEF</li><li>\u6587\u4EF6\u64CD\u4F5C</li><li>\u4E00\u4E9B\u6253\u5305\u5DE5\u5177\u7684\u5E95\u5C42\u64CD\u4F5C</li></ul><h3 id="get\u8BF7\u6C42\u8FD4\u56DE\u6587\u4EF6\u7ED9\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#get\u8BF7\u6C42\u8FD4\u56DE\u6587\u4EF6\u7ED9\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> get\u8BF7\u6C42\u8FD4\u56DE\u6587\u4EF6\u7ED9\u5BA2\u6237\u7AEF</h3><p>\u4F7F\u7528<code>stream</code>\u6D41\u8FD4\u56DE\u6587\u4EF6\uFF0C<code>res</code>\u4E5F\u662F\u4E00\u4E2A<code>stream</code>\u5BF9\u8C61\uFF0C\u901A\u8FC7<code>pipe</code>\u7BA1\u9053\u5C06\u6587\u4EF6\u6570\u636E\u8FD4\u56DE</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u65B9\u6CD5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// get \u8BF7\u6C42</span>
        <span class="token keyword">const</span> fileName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> stream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        stream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 res \u4F5C\u4E3A stream \u7684 dest</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h3><p>\u521B\u5EFA\u4E00\u4E2A\u53EF\u8BFB\u6570\u636E\u6D41<code>readStream</code>\uFF0C\u4E00\u4E2A\u53EF\u5199\u6570\u636E\u6D41<code>writeStream</code>\uFF0C\u901A\u8FC7<code>pipe</code>\u7BA1\u9053\u628A\u6570\u636E\u6D41\u8F6C\u8FC7\u53BB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E24\u4E2A\u6587\u4EF6\u540D</span>
<span class="token keyword">const</span> fileName1 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data.txt&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fileName2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;data-bak.txt&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BFB\u53D6\u6587\u4EF6\u7684 stream \u5BF9\u8C61</span>
<span class="token keyword">const</span> readStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>fileName1<span class="token punctuation">)</span>
<span class="token comment">// \u5199\u5165\u6587\u4EF6\u7684 stream \u5BF9\u8C61</span>
<span class="token keyword">const</span> writeStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>fileName2<span class="token punctuation">)</span>
<span class="token comment">// \u901A\u8FC7 pipe\u6267\u884C\u62F7\u8D1D\uFF0C\u6570\u636E\u6D41\u8F6C</span>
readStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>writeStream<span class="token punctuation">)</span>
<span class="token comment">// \u6570\u636E\u8BFB\u53D6\u5B8C\u6210\u76D1\u542C\uFF0C\u5373\u62F7\u8D1D\u5B8C\u6210</span>
readStream<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u62F7\u8D1D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u4E00\u4E9B\u6253\u5305\u5DE5\u5177\u7684\u5E95\u5C42\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u6253\u5305\u5DE5\u5177\u7684\u5E95\u5C42\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u4E9B\u6253\u5305\u5DE5\u5177\u7684\u5E95\u5C42\u64CD\u4F5C</h3><p>\u76EE\u524D\u4E00\u4E9B\u6BD4\u8F83\u706B\u7684\u524D\u7AEF\u6253\u5305\u6784\u5EFA\u5DE5\u5177\uFF0C\u90FD\u662F\u901A\u8FC7<code>node.js</code>\u7F16\u5199\u7684\uFF0C\u6253\u5305\u548C\u6784\u5EFA\u7684\u8FC7\u7A0B\u80AF\u5B9A\u662F\u6587\u4EF6\u9891\u7E41\u64CD\u4F5C\u7684\u8FC7\u7A0B\uFF0C\u79BB\u4E0D\u6765<code>stream</code>\uFF0C\u5982<code>gulp</code></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,40),d={href:"https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa",target:"_blank",rel:"noopener noreferrer"},k=e("https://xie.infoq.cn/article/1a9695020828460eb3c4ff1fa"),m={href:"https://juejin.cn/post/6844903891083984910",target:"_blank",rel:"noopener noreferrer"},b=e("https://juejin.cn/post/6844903891083984910");function h(f,g){const s=t("ExternalLinkIcon");return c(),o(l,null,[i,n("ul",null,[n("li",null,[n("a",d,[k,a(s)])]),n("li",null,[n("a",m,[b,a(s)])])])],64)}var _=p(u,[["render",h],["__file","stream.html.vue"]]);export{_ as default};
