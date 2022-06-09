import{_ as n,e as s}from"./app.2989aa3c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-buffer-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-buffer-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u5BF9 Node \u4E2D\u7684 Buffer \u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><p><img src="https://static.vue-js.com/176d02b0-c69c-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5728<code>Node</code>\u5E94\u7528\u4E2D\uFF0C\u9700\u8981\u5904\u7406\u7F51\u7EDC\u534F\u8BAE\u3001\u64CD\u4F5C\u6570\u636E\u5E93\u3001\u5904\u7406\u56FE\u7247\u3001\u63A5\u6536\u4E0A\u4F20\u6587\u4EF6\u7B49\uFF0C\u5728\u7F51\u7EDC\u6D41\u548C\u6587\u4EF6\u7684\u64CD\u4F5C\u4E2D\uFF0C\u8981\u5904\u7406\u5927\u91CF\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u800C<code>Buffer</code>\u5C31\u662F\u5728\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u7247\u533A\u57DF\uFF08\u521D\u6B21\u521D\u59CB\u5316\u4E3A8KB\uFF09\uFF0C\u7528\u6765\u5B58\u653E\u4E8C\u8FDB\u5236\u6570\u636E</p><p>\u5728\u4E0A\u8FF0\u64CD\u4F5C\u4E2D\u90FD\u4F1A\u5B58\u5728\u6570\u636E\u6D41\u52A8\uFF0C\u6BCF\u4E2A\u6570\u636E\u6D41\u52A8\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u6700\u5C0F\u6216\u6700\u5927\u6570\u636E\u91CF</p><p>\u5982\u679C\u6570\u636E\u5230\u8FBE\u7684\u901F\u5EA6\u6BD4\u8FDB\u7A0B\u6D88\u8017\u7684\u901F\u5EA6\u5FEB\uFF0C\u90A3\u4E48\u5C11\u6570\u65E9\u5230\u8FBE\u7684\u6570\u636E\u4F1A\u5904\u4E8E\u7B49\u5F85\u533A\u7B49\u5019\u88AB\u5904\u7406\u3002\u53CD\u4E4B\uFF0C\u5982\u679C\u6570\u636E\u5230\u8FBE\u7684\u901F\u5EA6\u6BD4\u8FDB\u7A0B\u6D88\u8017\u7684\u6570\u636E\u6162\uFF0C\u90A3\u4E48\u65E9\u5148\u5230\u8FBE\u7684\u6570\u636E\u9700\u8981\u7B49\u5F85\u4E00\u5B9A\u91CF\u7684\u6570\u636E\u5230\u8FBE\u4E4B\u540E\u624D\u80FD\u88AB\u5904\u7406</p><p>\u8FD9\u91CC\u7684\u7B49\u5F85\u533A\u5C31\u6307\u7684\u7F13\u51B2\u533A\uFF08Buffer\uFF09\uFF0C\u5B83\u662F\u8BA1\u7B97\u673A\u4E2D\u7684\u4E00\u4E2A\u5C0F\u7269\u7406\u5355\u4F4D\uFF0C\u901A\u5E38\u4F4D\u4E8E\u8BA1\u7B97\u673A\u7684 <code>RAM</code> \u4E2D</p><p>\u7B80\u5355\u6765\u8BB2\uFF0C<code>Nodejs</code>\u4E0D\u80FD\u63A7\u5236\u6570\u636E\u4F20\u8F93\u7684\u901F\u5EA6\u548C\u5230\u8FBE\u65F6\u95F4\uFF0C\u53EA\u80FD\u51B3\u5B9A\u4F55\u65F6\u53D1\u9001\u6570\u636E\uFF0C\u5982\u679C\u8FD8\u6CA1\u5230\u53D1\u9001\u65F6\u95F4\uFF0C\u5219\u5C06\u6570\u636E\u653E\u5728<code>Buffer</code>\u4E2D\uFF0C\u5373\u5728<code>RAM</code>\u4E2D\uFF0C\u76F4\u81F3\u5C06\u5B83\u4EEC\u53D1\u9001\u5B8C\u6BD5</p><p>\u4E0A\u9762\u8BB2\u5230\u4E86<code>Buffer</code>\u662F\u7528\u6765\u5B58\u50A8\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u5176\u7684\u5F62\u5F0F\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u9879\uFF0C\u90FD\u53EF\u4EE5\u4FDD\u5B588\u4F4D\u4E8C\u8FDB\u5236\uFF1A<code>00000000</code>\uFF0C\u4E5F\u5C31\u662F\u4E00\u4E2A\u5B57\u8282</p><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> buffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u5B58\u50A8\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/20371250-c69c-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E8C\u3001\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u65B9\u6CD5</h2><p><code>Buffer</code> \u7C7B\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\uFF0C\u65E0\u987B<code>require</code>\u5BFC\u5165</p><p>\u521B\u5EFA<code>Buffer</code>\u7684\u65B9\u6CD5\u6709\u5F88\u591A\u79CD\uFF0C\u6211\u4EEC\u8BB2\u8BB2\u4E0B\u9762\u7684\u4E24\u79CD\u5E38\u89C1\u7684\u5F62\u5F0F\uFF1A</p><ul><li><p>Buffer.from()</p></li><li><p>Buffer.alloc()</p></li></ul><h3 id="buffer-from" tabindex="-1"><a class="header-anchor" href="#buffer-from" aria-hidden="true">#</a> Buffer.from()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> b1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b3 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b4 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>b3<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b1<span class="token punctuation">,</span> b2<span class="token punctuation">,</span> b3<span class="token punctuation">,</span> b4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;Buffer 31 30&gt; &lt;Buffer 31 30&gt; &lt;Buffer 0a&gt; &lt;Buffer 0a&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="buffer-alloc" tabindex="-1"><a class="header-anchor" href="#buffer-alloc" aria-hidden="true">#</a> Buffer.alloc()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> bAlloc1 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5927\u5C0F\u4E3A 10 \u4E2A\u5B57\u8282\u7684\u7F13\u51B2\u533A</span>
<span class="token keyword">const</span> bAlloc2 <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">alloc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A 10 \u7684 Buffer,\u5176\u4E2D\u5168\u90E8\u586B\u5145\u4E86\u503C\u4E3A \`1\` \u7684\u5B57\u8282</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bAlloc1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bAlloc2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;Buffer 01 01 01 01 01 01 01 01 01 01&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u4E0A\u9762\u521B\u5EFA<code>buffer</code>\u540E\uFF0C\u5219\u80FD\u591F<code>toString</code>\u7684\u5F62\u5F0F\u8FDB\u884C\u4EA4\u4E92\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u91C7\u53D6<code>utf8</code>\u5B57\u7B26\u7F16\u7801\u5F62\u5F0F\uFF0C\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> buffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;Buffer e4 bd a0 e5 a5 bd&gt;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F60\u597D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u7F16\u7801\u4E0E\u89E3\u7801\u4E0D\u662F\u76F8\u540C\u7684\u683C\u5F0F\u5219\u4F1A\u51FA\u73B0\u4E71\u7801\u7684\u60C5\u51B5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> buffer <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;utf-8 &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;Buffer e4 bd a0 e5 a5 bd&gt;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&quot;ascii&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// d= e%=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F53\u8BBE\u5B9A\u7684\u8303\u56F4\u5BFC\u81F4\u5B57\u7B26\u4E32\u88AB\u622A\u65AD\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u5B58\u5728\u4E71\u7801\u60C5\u51B5\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> buf <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;Node.js \u6280\u672F\u6808&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>          <span class="token comment">// &lt;Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88&gt;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span>length<span class="token punctuation">)</span>   <span class="token comment">// 17</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// Node.js \uFFFD</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Node.js \u6280</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6240\u652F\u6301\u7684\u5B57\u7B26\u96C6\u6709\u5982\u4E0B\uFF1A</p><ul><li>ascii\uFF1A\u4EC5\u652F\u6301 7 \u4F4D ASCII \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u53BB\u6389\u9AD8\u4F4D\u7684\u8BDD\uFF0C\u8FD9\u79CD\u7F16\u7801\u662F\u975E\u5E38\u5FEB\u7684</li><li>utf8\uFF1A\u591A\u5B57\u8282\u7F16\u7801\u7684 Unicode \u5B57\u7B26\uFF0C\u8BB8\u591A\u7F51\u9875\u548C\u5176\u4ED6\u6587\u6863\u683C\u5F0F\u90FD\u4F7F\u7528 UTF-8</li><li>utf16le\uFF1A2 \u6216 4 \u4E2A\u5B57\u8282\uFF0C\u5C0F\u5B57\u8282\u5E8F\u7F16\u7801\u7684 Unicode \u5B57\u7B26\uFF0C\u652F\u6301\u4EE3\u7406\u5BF9\uFF08U+10000\u81F3 U+10FFFF\uFF09</li><li>ucs2\uFF0Cutf16le \u7684\u522B\u540D</li><li>base64\uFF1ABase64 \u7F16\u7801</li><li>latin\uFF1A\u4E00\u79CD\u628A Buffer \u7F16\u7801\u6210\u4E00\u5B57\u8282\u7F16\u7801\u7684\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F</li><li>binary\uFF1Alatin1 \u7684\u522B\u540D\uFF0C</li><li>hex\uFF1A\u5C06\u6BCF\u4E2A\u5B57\u8282\u7F16\u7801\u4E3A\u4E24\u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26</li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p><code>Buffer</code>\u7684\u5E94\u7528\u573A\u666F\u5E38\u5E38\u4E0E\u6D41\u7684\u6982\u5FF5\u8054\u7CFB\u5728\u4E00\u8D77\uFF0C\u4F8B\u5982\u6709\u5982\u4E0B\uFF1A</p><ul><li>I/O\u64CD\u4F5C</li><li>\u52A0\u5BC6\u89E3\u5BC6</li><li>zlib.js</li></ul><h3 id="i-o\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#i-o\u64CD\u4F5C" aria-hidden="true">#</a> I/O\u64CD\u4F5C</h3><p>\u901A\u8FC7\u6D41\u7684\u5F62\u5F0F\uFF0C\u5C06\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u8BFB\u53D6\u5230\u53E6\u5916\u4E00\u4E2A\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inputStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;input.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u53EF\u8BFB\u6D41</span>
<span class="token keyword">const</span> outputStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;output.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA\u53EF\u5199\u6D41</span>

inputStream<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>outputStream<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7BA1\u9053\u8BFB\u5199</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u52A0\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u52A0\u89E3\u5BC6" aria-hidden="true">#</a> \u52A0\u89E3\u5BC6</h3><p>\u5728\u4E00\u4E9B\u52A0\u89E3\u5BC6\u7B97\u6CD5\u4E2D\u4F1A\u9047\u5230\u4F7F\u7528 <code>Buffer</code>\uFF0C\u4F8B\u5982 <code>crypto.createCipheriv</code> \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>key</code> \u4E3A <code>string</code> \u6216 <code>Buffer</code> \u7C7B\u578B</p><h3 id="zlib-js" tabindex="-1"><a class="header-anchor" href="#zlib-js" aria-hidden="true">#</a> zlib.js</h3><p><code>zlib.js</code> \u4E3A <code>Node.js</code> \u7684\u6838\u5FC3\u5E93\u4E4B\u4E00\uFF0C\u5176\u5229\u7528\u4E86\u7F13\u51B2\u533A\uFF08<code>Buffer</code>\uFF09\u7684\u529F\u80FD\u6765\u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u6D41\uFF0C\u63D0\u4F9B\u4E86\u538B\u7F29\u6216\u89E3\u538B\u529F\u80FD</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>http://nodejs.cn/api/buffer.html</li><li>https://segmentfault.com/a/1190000019894714</li></ul>`,41);function t(e,o){return p}var u=n(a,[["render",t],["__file","buffer.html.vue"]]);export{u as default};
