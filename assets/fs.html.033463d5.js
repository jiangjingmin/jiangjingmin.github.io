import{_ as p,r as e,o,c,a as n,b as a,F as l,e as u,d as t}from"./app.6e1280c8.js";const i={},r=u(`<h1 id="\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-fs\u6A21\u5757\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u5BF9-node-\u4E2D\u7684-fs\u6A21\u5757\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u8BF4\u8BF4\u5BF9 Node \u4E2D\u7684 fs\u6A21\u5757\u7684\u7406\u89E3? \u6709\u54EA\u4E9B\u5E38\u7528\u65B9\u6CD5</h1><p><img src="https://static.vue-js.com/a141e5c0-c46a-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>fs\uFF08filesystem\uFF09\uFF0C\u8BE5\u6A21\u5757\u63D0\u4F9B\u672C\u5730\u6587\u4EF6\u7684\u8BFB\u5199\u80FD\u529B\uFF0C\u57FA\u672C\u4E0A\u662F<code>POSIX</code>\u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4\u7684\u7B80\u5355\u5305\u88C5</p><p>\u53EF\u4EE5\u8BF4\uFF0C\u6240\u6709\u4E0E\u6587\u4EF6\u7684\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7<code>fs</code>\u6838\u5FC3\u6A21\u5757\u5B9E\u73B0</p><p>\u5BFC\u5165\u6A21\u5757\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u6A21\u5757\u5BF9\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u64CD\u4F5C\u63D0\u4F9B\u5F02\u6B65\uFF08\u4E0D\u5177\u6709<code>sync</code> \u540E\u7F00\uFF09\u548C\u540C\u6B65\uFF08\u5177\u6709 <code>sync</code> \u540E\u7F00\uFF09\u4E24\u79CD\u64CD\u4F5C\u65B9\u5F0F\uFF0C\u800C\u4F9B\u5F00\u53D1\u8005\u9009\u62E9</p><h3 id="\u4E8C\u3001\u6587\u4EF6\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6587\u4EF6\u77E5\u8BC6" aria-hidden="true">#</a> \u4E8C\u3001\u6587\u4EF6\u77E5\u8BC6</h3><p>\u5728\u8BA1\u7B97\u673A\u4E2D\u6709\u5173\u4E8E\u6587\u4EF6\u7684\u77E5\u8BC6\uFF1A</p><ul><li>\u6743\u9650\u4F4D mode</li><li>\u6807\u8BC6\u4F4D flag</li><li>\u6587\u4EF6\u63CF\u8FF0\u4E3A fd</li></ul><h3 id="\u6743\u9650\u4F4D-mode" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u4F4D-mode" aria-hidden="true">#</a> \u6743\u9650\u4F4D mode</h3><p><img src="https://static.vue-js.com/4f4d41a0-c46b-11eb-ab90-d9ae814b240d.png" alt="image"></p><p>\u9488\u5BF9\u6587\u4EF6\u6240\u6709\u8005\u3001\u6587\u4EF6\u6240\u5C5E\u7EC4\u3001\u5176\u4ED6\u7528\u6237\u8FDB\u884C\u6743\u9650\u5206\u914D\uFF0C\u5176\u4E2D\u7C7B\u578B\u53C8\u5206\u6210\u8BFB\u3001\u5199\u548C\u6267\u884C\uFF0C\u5177\u5907\u6743\u9650\u4F4D4\u30012\u30011\uFF0C\u4E0D\u5177\u5907\u6743\u9650\u4E3A0</p><p>\u5982\u5728<code>linux</code>\u67E5\u770B\u6587\u4EF6\u6743\u9650\u4F4D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>drwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x\u2003<span class="token number">1</span>\u2003PandaShen\u2003<span class="token number">197121</span>\u2003<span class="token number">0</span>\u2003Jun <span class="token number">28</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">41</span>\u2003core
<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">--</span>r<span class="token operator">--</span>\u2003<span class="token number">1</span>\u2003PandaShen\u2003<span class="token number">197121</span>\u2003<span class="token number">293</span>\u2003Jun <span class="token number">23</span> <span class="token number">17</span><span class="token operator">:</span><span class="token number">44</span>\u2003index<span class="token punctuation">.</span>md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u5F00\u5934\u524D\u5341\u4F4D\u4E2D\uFF0C<code>d</code>\u4E3A\u6587\u4EF6\u5939\uFF0C<code>-</code>\u4E3A\u6587\u4EF6\uFF0C\u540E\u4E5D\u4F4D\u5C31\u4EE3\u8868\u5F53\u524D\u7528\u6237\u3001\u7528\u6237\u6240\u5C5E\u7EC4\u548C\u5176\u4ED6\u7528\u6237\u7684\u6743\u9650\u4F4D\uFF0C\u6309\u6BCF\u4E09\u4F4D\u5212\u5206\uFF0C\u5206\u522B\u4EE3\u8868\u8BFB\uFF08r\uFF09\u3001\u5199\uFF08w\uFF09\u548C\u6267\u884C\uFF08x\uFF09\uFF0C- \u4EE3\u8868\u6CA1\u6709\u5F53\u524D\u4F4D\u5BF9\u5E94\u7684\u6743\u9650</p><h3 id="\u6807\u8BC6\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BC6\u4F4D" aria-hidden="true">#</a> \u6807\u8BC6\u4F4D</h3><p>\u6807\u8BC6\u4F4D\u4EE3\u8868\u7740\u5BF9\u6587\u4EF6\u7684\u64CD\u4F5C\u65B9\u5F0F\uFF0C\u5982\u53EF\u8BFB\u3001\u53EF\u5199\u3001\u5373\u53EF\u8BFB\u53C8\u53EF\u5199\u7B49\u7B49\uFF0C\u5982\u4E0B\u8868\u6240\u793A\uFF1A</p><table><thead><tr><th>\u7B26\u53F7</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>r</td><td>\u8BFB\u53D6\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u629B\u51FA\u5F02\u5E38\u3002</td></tr><tr><td>r+</td><td>\u8BFB\u53D6\u5E76\u5199\u5165\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u629B\u51FA\u5F02\u5E38\u3002</td></tr><tr><td>rs</td><td>\u8BFB\u53D6\u5E76\u5199\u5165\u6587\u4EF6\uFF0C\u6307\u793A\u64CD\u4F5C\u7CFB\u7EDF\u7ED5\u5F00\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\u3002</td></tr><tr><td>w</td><td>\u5199\u5165\u6587\u4EF6\uFF0C\u6587\u4EF6\u4E0D\u5B58\u5728\u4F1A\u88AB\u521B\u5EFA\uFF0C\u5B58\u5728\u5219\u6E05\u7A7A\u540E\u5199\u5165\u3002</td></tr><tr><td>wx</td><td>\u5199\u5165\u6587\u4EF6\uFF0C\u6392\u5B83\u65B9\u5F0F\u6253\u5F00\u3002</td></tr><tr><td>w+</td><td>\u8BFB\u53D6\u5E76\u5199\u5165\u6587\u4EF6\uFF0C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6\uFF0C\u5B58\u5728\u5219\u6E05\u7A7A\u540E\u5199\u5165\u3002</td></tr><tr><td>wx+</td><td>\u548C w+ \u7C7B\u4F3C\uFF0C\u6392\u4ED6\u65B9\u5F0F\u6253\u5F00\u3002</td></tr><tr><td>a</td><td>\u8FFD\u52A0\u5199\u5165\uFF0C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6\u3002</td></tr><tr><td>ax</td><td>\u4E0E a \u7C7B\u4F3C\uFF0C\u6392\u4ED6\u65B9\u5F0F\u6253\u5F00\u3002</td></tr><tr><td>a+</td><td>\u8BFB\u53D6\u5E76\u8FFD\u52A0\u5199\u5165\uFF0C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002</td></tr><tr><td>ax+</td><td>\u4E0E a+ \u7C7B\u4F3C\uFF0C\u6392\u4ED6\u65B9\u5F0F\u6253\u5F00\u3002</td></tr></tbody></table><h3 id="\u6587\u4EF6\u63CF\u8FF0\u4E3A-fd" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u63CF\u8FF0\u4E3A-fd" aria-hidden="true">#</a> \u6587\u4EF6\u63CF\u8FF0\u4E3A fd</h3><p>\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u4E3A\u6BCF\u4E2A\u6253\u5F00\u7684\u6587\u4EF6\u5206\u914D\u4E00\u4E2A\u540D\u4E3A\u6587\u4EF6\u63CF\u8FF0\u7B26\u7684\u6570\u503C\u6807\u8BC6\uFF0C\u6587\u4EF6\u64CD\u4F5C\u4F7F\u7528\u8FD9\u4E9B\u6587\u4EF6\u63CF\u8FF0\u7B26\u6765\u8BC6\u522B\u4E0E\u8FFD\u8E2A\u6BCF\u4E2A\u7279\u5B9A\u7684\u6587\u4EF6</p><p><code>Window</code>\u7CFB\u7EDF\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E0D\u540C\u4F46\u6982\u5FF5\u7C7B\u4F3C\u7684\u673A\u5236\u6765\u8FFD\u8E2A\u8D44\u6E90\uFF0C\u4E3A\u65B9\u4FBF\u7528\u6237\uFF0C<code>NodeJS</code>\u62BD\u8C61\u4E86\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u95F4\u7684\u5DEE\u5F02\uFF0C\u4E3A\u6240\u6709\u6253\u5F00\u7684\u6587\u4EF6\u5206\u914D\u4E86\u6570\u503C\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26</p><p>\u5728 <code>NodeJS</code>\u4E2D\uFF0C\u6BCF\u64CD\u4F5C\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u662F\u9012\u589E\u7684\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E00\u822C\u4ECE <code>3</code> \u5F00\u59CB\uFF0C\u56E0\u4E3A\u524D\u9762\u6709 <code>0</code>\u3001<code>1</code>\u3001<code>2</code>\u4E09\u4E2A\u6BD4\u8F83\u7279\u6B8A\u7684\u63CF\u8FF0\u7B26\uFF0C\u5206\u522B\u4EE3\u8868 <code>process.stdin</code>\uFF08\u6807\u51C6\u8F93\u5165\uFF09\u3001<code>process.stdout</code>\uFF08\u6807\u51C6\u8F93\u51FA\uFF09\u548C <code>process.stderr</code>\uFF08\u9519\u8BEF\u8F93\u51FA\uFF09</p><h2 id="\u4E09\u3001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u65B9\u6CD5" aria-hidden="true">#</a> \u4E09\u3001\u65B9\u6CD5</h2><p>\u4E0B\u9762\u9488\u5BF9<code>fs</code>\u6A21\u5757\u5E38\u7528\u7684\u65B9\u6CD5\u8FDB\u884C\u5C55\u5F00\uFF1A</p><ul><li>\u6587\u4EF6\u8BFB\u53D6</li><li>\u6587\u4EF6\u5199\u5165</li><li>\u6587\u4EF6\u8FFD\u52A0\u5199\u5165</li><li>\u6587\u4EF6\u62F7\u8D1D</li><li>\u521B\u5EFA\u76EE\u5F55</li></ul><h3 id="\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> \u6587\u4EF6\u8BFB\u53D6</h3><h4 id="fs-readfilesync" tabindex="-1"><a class="header-anchor" href="#fs-readfilesync" aria-hidden="true">#</a> fs.readFileSync</h4><p>\u540C\u6B65\u8BFB\u53D6\uFF0C\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u8BFB\u53D6\u6587\u4EF6\u7684\u8DEF\u5F84\u6216\u6587\u4EF6\u63CF\u8FF0\u7B26</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A options\uFF0C\u9ED8\u8BA4\u503C\u4E3A null\uFF0C\u5176\u4E2D\u6709 encoding\uFF08\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A null\uFF09\u548C flag\uFF08\u6807\u8BC6\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A r\uFF09\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4F20\u5165 encoding</li></ul><p>\u7ED3\u679C\u4E3A\u8FD4\u56DE\u6587\u4EF6\u7684\u5185\u5BB9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> buf <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;1.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;Buffer 48 65 6c 6c 6f&gt;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="fs-readfile" tabindex="-1"><a class="header-anchor" href="#fs-readfile" aria-hidden="true">#</a> fs.readFile</h4><p>\u5F02\u6B65\u8BFB\u53D6\u65B9\u6CD5 <code>readFile</code> \u4E0E <code>readFileSync</code> \u7684\u524D\u4E24\u4E2A\u53C2\u6570\u76F8\u540C\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u51FD\u6570\u5185\u6709\u4E24\u4E2A\u53C2\u6570 <code>err</code>\uFF08\u9519\u8BEF\uFF09\u548C <code>data</code>\uFF08\u6570\u636E\uFF09\uFF0C\u8BE5\u65B9\u6CD5\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u56DE\u8C03\u51FD\u6570\u5728\u8BFB\u53D6\u6587\u4EF6\u6210\u529F\u540E\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;1.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6587\u4EF6\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5199\u5165" aria-hidden="true">#</a> \u6587\u4EF6\u5199\u5165</h3><h4 id="writefilesync" tabindex="-1"><a class="header-anchor" href="#writefilesync" aria-hidden="true">#</a> writeFileSync</h4><p>\u540C\u6B65\u5199\u5165\uFF0C\u6709\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5199\u5165\u6587\u4EF6\u7684\u8DEF\u5F84\u6216\u6587\u4EF6\u63CF\u8FF0\u7B26</p></li><li><p>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5199\u5165\u7684\u6570\u636E\uFF0C\u7C7B\u578B\u4E3A String \u6216 Buffer</p></li><li><p>\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A options\uFF0C\u9ED8\u8BA4\u503C\u4E3A null\uFF0C\u5176\u4E2D\u6709 encoding\uFF08\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A utf8\uFF09\u3001 flag\uFF08\u6807\u8BC6\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A w\uFF09\u548C mode\uFF08\u6743\u9650\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A 0o666\uFF09\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4F20\u5165 encoding</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="writefile" tabindex="-1"><a class="header-anchor" href="#writefile" aria-hidden="true">#</a> writeFile</h4><p>\u5F02\u6B65\u5199\u5165\uFF0C<code>writeFile</code> \u4E0E <code>writeFileSync</code> \u7684\u524D\u4E09\u4E2A\u53C2\u6570\u76F8\u540C\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u51FD\u6570\u5185\u6709\u4E00\u4E2A\u53C2\u6570 <code>err</code>\uFF08\u9519\u8BEF\uFF09\uFF0C\u56DE\u8C03\u51FD\u6570\u5728\u6587\u4EF6\u5199\u5165\u6570\u636E\u6210\u529F\u540E\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;2.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello world</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6587\u4EF6\u8FFD\u52A0\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8FFD\u52A0\u5199\u5165" aria-hidden="true">#</a> \u6587\u4EF6\u8FFD\u52A0\u5199\u5165</h3><h4 id="appendfilesync" tabindex="-1"><a class="header-anchor" href="#appendfilesync" aria-hidden="true">#</a> appendFileSync</h4><p>\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u5199\u5165\u6587\u4EF6\u7684\u8DEF\u5F84\u6216\u6587\u4EF6\u63CF\u8FF0\u7B26</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u5199\u5165\u7684\u6570\u636E\uFF0C\u7C7B\u578B\u4E3A String \u6216 Buffer</li><li>\u7B2C\u4E09\u4E2A\u53C2\u6570\u4E3A options\uFF0C\u9ED8\u8BA4\u503C\u4E3A null\uFF0C\u5176\u4E2D\u6709 encoding\uFF08\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A utf8\uFF09\u3001 flag\uFF08\u6807\u8BC6\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A a\uFF09\u548C mode\uFF08\u6743\u9650\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A 0o666\uFF09\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4F20\u5165 encoding</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">appendFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="appendfile" tabindex="-1"><a class="header-anchor" href="#appendfile" aria-hidden="true">#</a> appendFile</h4><p>\u5F02\u6B65\u8FFD\u52A0\u5199\u5165\u65B9\u6CD5 <code>appendFile</code> \u4E0E <code>appendFileSync</code> \u7684\u524D\u4E09\u4E2A\u53C2\u6570\u76F8\u540C\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u51FD\u6570\u5185\u6709\u4E00\u4E2A\u53C2\u6570 <code>err</code>\uFF08\u9519\u8BEF\uFF09\uFF0C\u56DE\u8C03\u51FD\u6570\u5728\u6587\u4EF6\u8FFD\u52A0\u5199\u5165\u6570\u636E\u6210\u529F\u540E\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">appendFile</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; world&quot;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello world</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u6587\u4EF6\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u62F7\u8D1D" aria-hidden="true">#</a> \u6587\u4EF6\u62F7\u8D1D</h3><h4 id="copyfilesync" tabindex="-1"><a class="header-anchor" href="#copyfilesync" aria-hidden="true">#</a> copyFileSync</h4><p>\u540C\u6B65\u62F7\u8D1D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">copyFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&quot;4.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="copyfile" tabindex="-1"><a class="header-anchor" href="#copyfile" aria-hidden="true">#</a> copyFile</h4><p>\u5F02\u6B65\u62F7\u8D1D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span><span class="token string">&quot;3.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4.txt&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&quot;4.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello world</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u76EE\u5F55</h3><h4 id="mkdirsync" tabindex="-1"><a class="header-anchor" href="#mkdirsync" aria-hidden="true">#</a> mkdirSync</h4><p>\u540C\u6B65\u521B\u5EFA\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u76EE\u5F55\u7684\u8DEF\u5F84\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u5728\u521B\u5EFA\u76EE\u5F55\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u4F20\u5165\u7684\u8DEF\u5F84\u524D\u9762\u7684\u6587\u4EF6\u76EE\u5F55\u90FD\u5B58\u5728\uFF0C\u5426\u5219\u4F1A\u629B\u51FA\u5F02\u5E38</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5047\u8BBE\u5DF2\u7ECF\u6709\u4E86 a \u6587\u4EF6\u5939\u548C a \u4E0B\u7684 b \u6587\u4EF6\u5939</span>
fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token string">&quot;a/b/c&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h4><p>\u5F02\u6B65\u521B\u5EFA\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u56DE\u8C03\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token string">&quot;a/b/c&quot;</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u521B\u5EFA\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,67),d={href:"http://nodejs.cn/api/fs.html",target:"_blank",rel:"noopener noreferrer"},k=t("http://nodejs.cn/api/fs.html"),b={href:"https://segmentfault.com/a/1190000019913303",target:"_blank",rel:"noopener noreferrer"},h=t("https://segmentfault.com/a/1190000019913303");function f(m,g){const s=e("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[n("p",null,[n("a",d,[k,a(s)])])]),n("li",null,[n("p",null,[n("a",b,[h,a(s)])])])])],64)}var v=p(i,[["render",f],["__file","fs.html.vue"]]);export{v as default};
