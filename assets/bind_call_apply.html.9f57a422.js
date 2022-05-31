import{_ as n,c as s}from"./app.a7f79250.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-bind\u3001call\u3001apply-\u533A\u522B-\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2Abind" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-bind\u3001call\u3001apply-\u533A\u522B-\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2Abind" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1Abind\u3001call\u3001apply \u533A\u522B\uFF1F\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2Abind?</h1><p><img src="https://static.vue-js.com/a900e460-7be4-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4F5C\u7528" aria-hidden="true">#</a> \u4E00\u3001\u4F5C\u7528</h2><p><code>call </code>\u3001<code>apply </code>\u3001<code>bind </code>\u4F5C\u7528\u662F\u6539\u53D8\u51FD\u6570\u6267\u884C\u65F6\u7684\u4E0A\u4E0B\u6587\uFF0C\u7B80\u800C\u8A00\u4E4B\u5C31\u662F\u6539\u53D8\u51FD\u6570\u8FD0\u884C\u65F6\u7684<code>this</code>\u6307\u5411</p><p>\u90A3\u4E48\u4EC0\u4E48\u60C5\u51B5\u4E0B\u9700\u8981\u6539\u53D8<code>this</code>\u7684\u6307\u5411\u5462\uFF1F\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name<span class="token operator">=</span><span class="token string">&quot;lucy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;martin&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">say</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//martin\uFF0Cthis\u6307\u5411obj\u5BF9\u8C61</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>say<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//lucy\uFF0Cthis\u6307\u5411window\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u6B63\u5E38\u60C5\u51B5<code>say</code>\u65B9\u6CD5\u8F93\u51FA<code>martin</code></p><p>\u4F46\u662F\u6211\u4EEC\u628A<code>say</code>\u653E\u5728<code>setTimeout</code>\u65B9\u6CD5\u4E2D\uFF0C\u5728\u5B9A\u65F6\u5668\u4E2D\u662F\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u6765\u6267\u884C\u7684\uFF0C\u56E0\u6B64\u56DE\u5230\u4E3B\u6808\u6267\u884C\u65F6\u662F\u5728\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u73AF\u5883\u4E2D\u6267\u884C\u7684\uFF0C\u8FD9\u65F6\u5019<code>this</code>\u6307\u5411<code>window</code>\uFF0C\u6240\u4EE5\u8F93\u51FA<code>lucy</code></p><p>\u6211\u4EEC\u5B9E\u9645\u9700\u8981\u7684\u662F<code>this</code>\u6307\u5411<code>obj</code>\u5BF9\u8C61\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u8BE5\u6539\u53D8<code>this</code>\u6307\u5411\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//martin\uFF0Cthis\u6307\u5411obj\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u533A\u522B</h2><p>\u4E0B\u9762\u518D\u6765\u770B\u770B<code>apply</code>\u3001<code>call</code>\u3001<code>bind</code>\u7684\u4F7F\u7528</p><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h3><p><code>apply</code>\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F<code>this</code>\u7684\u6307\u5411\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570\u63A5\u53D7\u7684\u53C2\u6570\uFF0C\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u4F20\u5165</p><p>\u6539\u53D8<code>this</code>\u6307\u5411\u540E\u539F\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u4E14\u6B64\u65B9\u6CD5\u53EA\u662F\u4E34\u65F6\u6539\u53D8<code>this</code>\u6307\u5411\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myname</span><span class="token operator">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u4F1A\u53D8\u6210\u4F20\u5165\u7684obj\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u7EC4\uFF1B</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// this\u6307\u5411window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5F53\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A<code>null</code>\u3001<code>undefined</code>\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u6307\u5411<code>window</code>(\u5728\u6D4F\u89C8\u5668\u4E2D)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u6307\u5411window</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u6307\u5411window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h3><p><code>call</code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E5F\u662F<code>this</code>\u7684\u6307\u5411\uFF0C\u540E\u9762\u4F20\u5165\u7684\u662F\u4E00\u4E2A\u53C2\u6570\u5217\u8868</p><p>\u8DDF<code>apply</code>\u4E00\u6837\uFF0C\u6539\u53D8<code>this</code>\u6307\u5411\u540E\u539F\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u4E14\u6B64\u65B9\u6CD5\u53EA\u662F\u4E34\u65F6\u6539\u53D8<code>this</code>\u6307\u5411\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myname</span><span class="token operator">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u4F1A\u53D8\u6210\u4F20\u5165\u7684obj\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u7EC4\uFF1B</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// this\u6307\u5411window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u540C\u6837\u7684\uFF0C\u5F53\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A<code>null</code>\u3001<code>undefined</code>\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u6307\u5411<code>window</code>(\u5728\u6D4F\u89C8\u5668\u4E2D)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u6307\u5411window</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this\u6307\u5411window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h3><p>bind\u65B9\u6CD5\u548Ccall\u5F88\u76F8\u4F3C\uFF0C\u7B2C\u4E00\u53C2\u6570\u4E5F\u662F<code>this</code>\u7684\u6307\u5411\uFF0C\u540E\u9762\u4F20\u5165\u7684\u4E5F\u662F\u4E00\u4E2A\u53C2\u6570\u5217\u8868(\u4F46\u662F\u8FD9\u4E2A\u53C2\u6570\u5217\u8868\u53EF\u4EE5\u5206\u591A\u6B21\u4F20\u5165)</p><p>\u6539\u53D8<code>this</code>\u6307\u5411\u540E\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u800C\u662F\u8FD4\u56DE\u4E00\u4E2A\u6C38\u4E45\u6539\u53D8<code>this</code>\u6307\u5411\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myname</span><span class="token operator">:</span><span class="token string">&quot;\u5F20\u4E09&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bindFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this \u4E5F\u4F1A\u53D8\u6210\u4F20\u5165\u7684obj \uFF0Cbind\u4E0D\u662F\u7ACB\u5373\u6267\u884C\u9700\u8981\u6267\u884C\u4E00\u6B21</span>
<span class="token function">bindFn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// this\u6307\u5411obj</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// this\u6307\u5411window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C<code>apply</code>\u3001<code>call</code>\u3001<code>bind</code>\u4E09\u8005\u7684\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>\u4E09\u8005\u90FD\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u7684<code>this</code>\u5BF9\u8C61\u6307\u5411</li><li>\u4E09\u8005\u7B2C\u4E00\u4E2A\u53C2\u6570\u90FD\u662F<code>this</code>\u8981\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u53C2\u6570\u6216\u53C2\u6570\u4E3A<code>undefined</code>\u6216<code>null</code>\uFF0C\u5219\u9ED8\u8BA4\u6307\u5411\u5168\u5C40<code>window</code></li><li>\u4E09\u8005\u90FD\u53EF\u4EE5\u4F20\u53C2\uFF0C\u4F46\u662F<code>apply</code>\u662F\u6570\u7EC4\uFF0C\u800C<code>call</code>\u662F\u53C2\u6570\u5217\u8868\uFF0C\u4E14<code>apply</code>\u548C<code>call</code>\u662F\u4E00\u6B21\u6027\u4F20\u5165\u53C2\u6570\uFF0C\u800C<code>bind</code>\u53EF\u4EE5\u5206\u4E3A\u591A\u6B21\u4F20\u5165</li><li><code>bind </code>\u662F\u8FD4\u56DE\u7ED1\u5B9Athis\u4E4B\u540E\u7684\u51FD\u6570\uFF0C<code>apply </code>\u3001<code>call</code> \u5219\u662F\u7ACB\u5373\u6267\u884C</li></ul><h2 id="\u4E09\u3001\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5B9E\u73B0" aria-hidden="true">#</a> \u4E09\u3001\u5B9E\u73B0</h2><p>\u5B9E\u73B0<code>bind</code>\u7684\u6B65\u9AA4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u89E3\u6210\u4E3A\u4E09\u90E8\u5206\uFF1A</p><ul><li>\u4FEE\u6539<code>this</code>\u6307\u5411</li><li>\u52A8\u6001\u4F20\u9012\u53C2\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u5F0F\u4E00\uFF1A\u53EA\u5728bind\u4E2D\u4F20\u9012\u51FD\u6570\u53C2\u6570</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A\u5728bind\u4E2D\u4F20\u9012\u51FD\u6570\u53C2\u6570\uFF0C\u4E5F\u5728\u8FD4\u56DE\u51FD\u6570\u4E2D\u4F20\u9012\u53C2\u6570</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u517C\u5BB9<code>new</code>\u5173\u952E\u5B57</li></ul><p>\u6574\u4F53\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u8C03\u7528\u5BF9\u8C61\u662F\u5426\u4E3A\u51FD\u6570</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u83B7\u53D6\u53C2\u6570</span>
    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// \u6839\u636E\u8C03\u7528\u65B9\u5F0F\uFF0C\u4F20\u5165\u4E0D\u540C\u7ED1\u5B9A\u503C</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Fn</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span> <span class="token operator">:</span> context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,38);function t(e,o){return p}var l=n(a,[["render",t],["__file","bind_call_apply.html.vue"]]);export{l as default};
