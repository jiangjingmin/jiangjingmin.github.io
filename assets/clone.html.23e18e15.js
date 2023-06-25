import{_ as t,r as e,o,c,a as n,b as a,F as l,e as u,d as p}from"./app.cec2e512.js";var r="/assets/clone_00.2603d90a.png";const i={},k=u('<h1 id="\u6DF1\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u6D45\u62F7\u8D1D</h1><p><img src="'+r+`" alt="clone"></p><h2 id="\u4E00\u3001\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u7C7B\u578B</h2><p>\u6700\u65B0\u7684 ECMAScript \u6807\u51C6\u5B9A\u4E49\u4E86 8 \u79CD\u6570\u636E\u7C7B\u578B\uFF1A</p><ul><li>7\u79CD\u539F\u59CB\u7C7B\u578B\uFF08String\u3001Number\u3001Boolean\u3001Null\u3001Undefined\u3001BigInt\u3001Symbol\uFF09\uFF1A\u6808\u5185\u5B58\uFF0C\u4F7F\u7528 typeof \u8FD0\u7B97\u7B26\u68C0\u67E5\u3002\u4F46 <code>typeof null === &quot;object&quot;</code></li><li>\u5F15\u7528\u7C7B\u578B\uFF08Object\uFF09\uFF1A\u5F15\u7528\u5730\u5740-\u6808\u5185\u5B58\uFF0C\u6307\u5411\u5185\u5BB9-\u5806\u5185\u5B58\uFF0Cinstanceof</li></ul><h2 id="\u4E8C\u3001\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u4E8C\u3001\u6D45\u62F7\u8D1D</h2><p><strong>\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u662F\u53EA\u9488\u5BF9Object\u548CArray\u8FD9\u6837\u7684\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684</strong>\u3002\u6D45\u62F7\u8D1D\uFF0C\u5F15\u7528\u7C7B\u578B\u62F7\u8D1D\u7684\u5C31\u662F\u5185\u5B58\u5730\u5740\u3002\u4E0B\u9762\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A\u6D45\u62F7\u8D1D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shallowClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728<code>JavaScript</code>\u4E2D\uFF0C\u6D45\u62F7\u8D1D\u7684\u5B9E\u73B0\u65B9\u5F0F\u6709\uFF1A</p><ul><li><code>Object.assign</code></li><li><code>Array.prototype.slice()</code>, <code>Array.prototype.concat()</code></li><li>\u4F7F\u7528\u62D3\u5C55\u8FD0\u7B97\u7B26\u5B9E\u73B0\u7684\u590D\u5236</li></ul><h3 id="_1-object-assign" tabindex="-1"><a class="header-anchor" href="#_1-object-assign" aria-hidden="true">#</a> 1. Object.assign()</h3><p>Object.assign() \u65B9\u6CD5\u53EF\u4EE5\u628A\u4EFB\u610F\u591A\u4E2A\u7684\u6E90\u5BF9\u8C61\u81EA\u8EAB\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\u62F7\u8D1D\u7ED9\u76EE\u6807\u5BF9\u8C61\uFF0C\u7136\u540E\u8FD4\u56DE\u76EE\u6807\u5BF9\u8C61\u3002\u4F46\u662F Object.assign()\u8FDB\u884C\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C\u62F7\u8D1D\u7684\u662F\u5BF9\u8C61\u7684\u5C5E\u6027\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5BF9\u8C61\u672C\u8EAB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;kobe&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> initalObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
initalObj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&quot;wade&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//wade</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\uFF1A<strong>\u5F53object\u53EA\u6709\u4E00\u5C42\u7684\u65F6\u5019\uFF0C\u662F\u6DF1\u62F7\u8D1D</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;kobe&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj2<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;wade&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{username: &quot;kobe&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-slice-\u3001concat" tabindex="-1"><a class="header-anchor" href="#_2-slice-\u3001concat" aria-hidden="true">#</a> 2. slice()\u3001concat()</h3><p>\u8865\u5145\u8BF4\u660E\uFF1AArray\u7684slice\u548Cconcat\u65B9\u6CD5\u4E0D\u4FEE\u6539\u539F\u6570\u7EC4\uFF0C\u53EA\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6D45\u590D\u5236\u4E86\u539F\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u7684\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jimmy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}] // \u57FA\u7840\u7C7B\u578B\u672A\u6539\u53D8\uFF0C\u5F15\u7528\u7C7B\u578B\u7684\u503C\u6539\u53D8\u4E86</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-\u62D3\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-\u62D3\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 3. \u62D3\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jimmy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>fxArr<span class="token punctuation">]</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E09\u3001\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u4E09\u3001\u6DF1\u62F7\u8D1D</h2><p><strong>\u6DF1\u62F7\u8D1D\u4F1A\u53E6\u5916\u521B\u9020\u4E00\u4E2A\u4E00\u6A21\u4E00\u6837\u7684\u5BF9\u8C61\uFF0C\u65B0\u5BF9\u8C61\u8DDF\u539F\u5BF9\u8C61\u4E0D\u5171\u4EAB\u5185\u5B58\uFF0C\u4FEE\u6539\u65B0\u5BF9\u8C61\u4E0D\u4F1A\u6539\u5230\u539F\u5BF9\u8C61\u3002</strong></p><p>\u76EE\u524D\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u7684\u65B9\u6CD5\u4E0D\u591A\uFF0C\u4E3B\u8981\u662F\u4E24\u79CD\uFF1A</p><h3 id="_1-json-parse-json-stringify" tabindex="-1"><a class="header-anchor" href="#_1-json-parse-json-stringify" aria-hidden="true">#</a> 1. JSON.parse(JSON.stringify())</h3><p>\u539F\u7406\uFF1A \u7528JSON.stringify\u5C06\u5BF9\u8C61\u8F6C\u6210JSON\u5B57\u7B26\u4E32\uFF0C\u518D\u7528JSON.parse()\u628A\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u5BF9\u8C61\uFF0C\u4E00\u53BB\u4E00\u6765\uFF0C\u65B0\u7684\u5BF9\u8C61\u4EA7\u751F\u4E86\uFF0C\u800C\u4E14\u5BF9\u8C61\u4F1A\u5F00\u8F9F\u65B0\u7684\u6808\uFF0C\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u3002</p><p>\u4F46 <code>undefined</code>\u3001<code>function</code>\u3001<code>symbol</code>\u3001\u6B63\u5219\u3001 <code>new Date()</code>\u3001\u6570\u5B57\u5BF9\u8C61 \u4F1A\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u88AB\u5FFD\u7565\u6216\u4E0D\u597D\u4F7F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> originObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token literal-property property">d</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">dd</span><span class="token operator">:</span><span class="token string">&#39;dd&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cloneObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>originObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cloneObj <span class="token operator">===</span> originObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-\u624B\u5199\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#_2-\u624B\u5199\u9012\u5F52" aria-hidden="true">#</a> 2. \u624B\u5199\u9012\u5F52</h3><p>\u9012\u5F52\u65B9\u6CD5\u5B9E\u73B0\u6DF1\u5EA6\u514B\u9686\u539F\u7406\uFF1A<strong>\u904D\u5386\u5BF9\u8C61\u3001\u6570\u7EC4\u76F4\u5230\u91CC\u8FB9\u90FD\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u7136\u540E\u518D\u53BB\u590D\u5236\uFF0C\u5C31\u662F\u6DF1\u5EA6\u62F7\u8D1D</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9E\u73B0\u6DF1\u5EA6\u514B\u9686---\u5BF9\u8C61/\u6570\u7EC4</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316\u53D8\u91CF result \u6210\u4E3A\u6700\u7EC8\u514B\u9686\u7684\u6570\u636E\uFF1B\u5224\u65AD\u6570\u636E\u7C7B\u578B</span>
    <span class="token keyword">let</span> result<span class="token punctuation">,</span> targetType <span class="token operator">=</span> <span class="token function">checkedType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> <span class="token string">&#39;Object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> <span class="token string">&#39;Array&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u904D\u5386\u76EE\u6807\u6570\u636E</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> value <span class="token operator">=</span> target<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkedType</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Object&#39;</span> <span class="token operator">||</span> <span class="token function">checkedType</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;Array&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\u904D\u5386\u83B7\u53D6\u5230value\u503C</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9A\u4E49\u68C0\u6D4B\u6570\u636E\u7C7B\u578B\u7684\u529F\u80FD\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">checkedType</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [object Object] | [object Array]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_3-lodash-clonedeep" tabindex="-1"><a class="header-anchor" href="#_3-lodash-clonedeep" aria-hidden="true">#</a> 3. Lodash.cloneDeep()</h3><p>\u8BE5\u51FD\u6570\u5E93\u4E5F\u6709\u63D0\u4F9B_.cloneDeep\u7528\u6765\u505A Deep Copy</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f <span class="token operator">===</span> obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u56DB\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u533A\u522B" aria-hidden="true">#</a> \u56DB\u3001\u533A\u522B</h2><h3 id="\u8D4B\u503C\u4E0E\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C\u4E0E\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u8D4B\u503C\u4E0E\u6D45\u62F7\u8D1D</h3><p>\u8D4B\u503C\uFF1A<strong>\u8D4B\u7684\u5176\u5B9E\u662F\u8BE5\u5BF9\u8C61\u5728\u6808\u4E2D\u7684\u5730\u5740\uFF0C\u800C\u4E0D\u662F\u5806\u4E2D\u7684\u6570\u636E</strong>\u3002</p><p>\u6D45\u62F7\u8D1D\uFF1A\u662F\u6309\u4F4D\u62F7\u8D1D\u5BF9\u8C61\uFF0C<strong>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</strong>\uFF0C\u5BF9\u539F\u59CB\u5BF9\u8C61\u5C5E\u6027\u503C\u7684\u4E00\u4EFD\u7CBE\u786E\u62F7\u8D1D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8D4B\u503C</span>
<span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jimmy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}] // \u539F\u5BF9\u8C61\u4E00\u540C\u6539\u53D8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}]</span>

<span class="token comment">// \u6D45\u62F7\u8D1D</span>
<span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Three&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jimmy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>fxArr<span class="token punctuation">]</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;love&quot;</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bob&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}] // \u57FA\u7840\u7C7B\u578B\u672A\u6539\u53D8\uFF0C\u5F15\u7528\u7C7B\u578B\u7684\u503C\u6539\u53D8\u4E86</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;, { name: &#39;Bob&#39;}]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u4E0E\u6D45\u62F7\u8D1D</h3><p>\u5BF9\u4E8E\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u62F7\u8D1D\uFF0C\u5E76\u6CA1\u6709\u6DF1\u6D45\u62F7\u8D1D\u7684\u533A\u522B\uFF0C\u6211\u4EEC\u6240\u8BF4\u7684\u6DF1\u6D45\u62F7\u8D1D\u90FD\u662F\u5BF9\u4E8E\u5F15\u7528\u6570\u636E\u7C7B\u578B\u800C\u8A00\u7684\u3002</p><ul><li>\u6D45\u62F7\u8D1D\uFF1A\u5C31\u53EA\u662F\u590D\u5236\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5982\u679C\u62F7\u8D1D\u540E\u7684\u5BF9\u8C61\u53D1\u751F\u53D8\u5316\uFF0C\u539F\u5BF9\u8C61\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002</li><li>\u6DF1\u62F7\u8D1D\uFF1A\u5C31\u662F\u5BF9\u76EE\u6807\u7684\u5B8C\u5168\u62F7\u8D1D\uFF0C\u5F15\u7528\u548C\u503C\u90FD\u590D\u5236\u4E86\u3002\u53EA\u8981\u8FDB\u884C\u4E86\u6DF1\u62F7\u8D1D\uFF0C\u5B83\u4EEC\u8001\u6B7B\u4E0D\u76F8\u5F80\u6765\uFF0C\u8C01\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u8C01\u3002</li></ul><table><thead><tr><th>\u7C7B\u578B</th><th>\u4E0E\u539F\u6570\u636E\u662F\u5426\u6307\u5411\u540C\u4E00\u5BF9\u8C61</th><th>\u503C\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u65F6\u662F\u5426\u4E00\u540C\u6539\u53D8</th><th>\u503C\u4E3A\u5BF9\u8C61\u65F6\u662F\u5426\u4E00\u540C\u6539\u53D8</th></tr></thead><tbody><tr><td>\u8D4B\u503C</td><td>\u662F</td><td>\u53D8</td><td>\u53D8</td></tr><tr><td>\u6D45\u62F7\u8D1D</td><td>\u5426</td><td>\u4E0D\u53D8</td><td>\u53D8</td></tr><tr><td>\u6DF1\u62F7\u8D1D</td><td>\u5426</td><td>\u4E0D\u53D8</td><td>\u4E0D\u53D8</td></tr></tbody></table><h4 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h4>`,43),b={href:"https://zhuanlan.zhihu.com/p/56741046",target:"_blank",rel:"noopener noreferrer"},d=p("\u6D45\u62F7\u8D1D\u4E0E\u6DF1\u62F7\u8D1D - \u77E5\u4E4E"),m={href:"https://github.com/axuebin/articles/issues/20",target:"_blank",rel:"noopener noreferrer"},h=p("JavaScript\u57FA\u7840\u5FC3\u6CD5\u2014\u2014\u6DF1\u6D45\u62F7\u8D1D"),g={href:"https://juejin.im/post/6844903692756336653",target:"_blank",rel:"noopener noreferrer"},f=p("\u6DF1\u62F7\u8D1D\u7684\u7EC8\u6781\u63A2\u7D22\uFF0890%\u7684\u4EBA\u90FD\u4E0D\u77E5\u9053\uFF09");function y(q,v){const s=e("ExternalLinkIcon");return o(),c(l,null,[k,n("ul",null,[n("li",null,[n("a",b,[d,a(s)])]),n("li",null,[n("a",m,[h,a(s)])]),n("li",null,[n("a",g,[f,a(s)])])])],64)}var x=t(i,[["render",y],["__file","clone.html.vue"]]);export{x as default};
