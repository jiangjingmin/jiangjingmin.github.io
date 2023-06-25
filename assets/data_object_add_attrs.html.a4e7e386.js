import{_ as t,r as e,o,c,a as n,b as s,F as l,e as u,d as p}from"./app.cec2e512.js";const i={},r=u(`<h1 id="\u52A8\u6001\u7ED9vue\u7684data\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48-\u600E\u6837\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7ED9vue\u7684data\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48-\u600E\u6837\u89E3\u51B3" aria-hidden="true">#</a> \u52A8\u6001\u7ED9vue\u7684data\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u600E\u6837\u89E3\u51B3\uFF1F</h1><p><img src="https://static.vue-js.com/a502dde0-3acc-11eb-ab90-d9ae814b240d.png" alt="image.png"></p><h2 id="\u4E00\u3001\u76F4\u63A5\u6DFB\u52A0\u5C5E\u6027\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u76F4\u63A5\u6DFB\u52A0\u5C5E\u6027\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E00\u3001\u76F4\u63A5\u6DFB\u52A0\u5C5E\u6027\u7684\u95EE\u9898</h2><p>\u6211\u4EEC\u4ECE\u4E00\u4E2A\u4F8B\u5B50\u5F00\u59CB</p><p>\u5B9A\u4E49\u4E00\u4E2A<code>p</code>\u6807\u7B7E\uFF0C\u901A\u8FC7<code>v-for</code>\u6307\u4EE4\u8FDB\u884C\u904D\u5386</p><p>\u7136\u540E\u7ED9<code>botton</code>\u6807\u7B7E\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u9884\u671F\u70B9\u51FB\u6309\u94AE\u65F6\uFF0C\u6570\u636E\u65B0\u589E\u4E00\u4E2A\u5C5E\u6027\uFF0C\u754C\u9762\u4E5F \u65B0\u589E\u4E00\u884C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value,key) in item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ value }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addProperty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u52A8\u6001\u6DFB\u52A0\u65B0\u5C5E\u6027<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B9E\u4F8B\u5316\u4E00\u4E2A<code>vue</code>\u5B9E\u4F8B\uFF0C\u5B9A\u4E49<code>data</code>\u5C5E\u6027\u548C<code>methods</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">oldProperty</span><span class="token operator">:</span><span class="token string">&quot;\u65E7\u5C5E\u6027&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">addProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>newProperty <span class="token operator">=</span> <span class="token string">&quot;\u65B0\u5C5E\u6027&quot;</span>  <span class="token comment">// \u4E3Aitems\u6DFB\u52A0\u65B0\u5C5E\u6027</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">)</span>  <span class="token comment">// \u8F93\u51FA\u5E26\u6709newProperty\u7684items</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u70B9\u51FB\u6309\u94AE\uFF0C\u53D1\u73B0\u7ED3\u679C\u4E0D\u53CA\u9884\u671F\uFF0C\u6570\u636E\u867D\u7136\u66F4\u65B0\u4E86\uFF08<code>console</code>\u6253\u5370\u51FA\u4E86\u65B0\u5C5E\u6027\uFF09\uFF0C\u4F46\u9875\u9762\u5E76\u6CA1\u6709\u66F4\u65B0</p><h2 id="\u4E8C\u3001\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u4E8C\u3001\u539F\u7406\u5206\u6790</h2><p>\u4E3A\u4EC0\u4E48\u4EA7\u751F\u4E0A\u9762\u7684\u60C5\u51B5\u5462\uFF1F</p><p>\u4E0B\u9762\u6765\u5206\u6790\u4E00\u4E0B</p><p><code>vue2</code>\u662F\u7528\u8FC7<code>Object.defineProperty</code>\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">get foo:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">set foo:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                val <span class="token operator">=</span> newVal
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5F53\u6211\u4EEC\u8BBF\u95EE<code>foo</code>\u5C5E\u6027\u6216\u8005\u8BBE\u7F6E<code>foo</code>\u503C\u7684\u65F6\u5019\u90FD\u80FD\u591F\u89E6\u53D1<code>setter</code>\u4E0E<code>getter</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span>foo   
obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;new&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u662F\u6211\u4EEC\u4E3A<code>obj</code>\u6DFB\u52A0\u65B0\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5374\u65E0\u6CD5\u89E6\u53D1\u4E8B\u4EF6\u5C5E\u6027\u7684\u62E6\u622A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>obj<span class="token punctuation">.</span>bar  <span class="token operator">=</span> <span class="token string">&#39;\u65B0\u5C5E\u6027&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u539F\u56E0\u662F\u4E00\u5F00\u59CB<code>obj</code>\u7684<code>foo</code>\u5C5E\u6027\u88AB\u8BBE\u6210\u4E86\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u800C<code>bar</code>\u662F\u540E\u9762\u65B0\u589E\u7684\u5C5E\u6027\uFF0C\u5E76\u6CA1\u6709\u901A\u8FC7<code>Object.defineProperty</code>\u8BBE\u7F6E\u6210\u54CD\u5E94\u5F0F\u6570\u636E</p><h2 id="\u4E09\u3001\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u4E09\u3001\u89E3\u51B3\u65B9\u6848</h2><p><code>Vue</code> \u4E0D\u5141\u8BB8\u5728\u5DF2\u7ECF\u521B\u5EFA\u7684\u5B9E\u4F8B\u4E0A\u52A8\u6001\u6DFB\u52A0\u65B0\u7684\u54CD\u5E94\u5F0F\u5C5E\u6027</p><p>\u82E5\u60F3\u5B9E\u73B0\u6570\u636E\u4E0E\u89C6\u56FE\u540C\u6B65\u66F4\u65B0\uFF0C\u53EF\u91C7\u53D6\u4E0B\u9762\u4E09\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li>Vue.set()</li><li>Object.assign()</li><li>$forcecUpdated()</li></ul><h3 id="vue-set" tabindex="-1"><a class="header-anchor" href="#vue-set" aria-hidden="true">#</a> Vue.set()</h3><p>Vue.set( target, propertyName/index, value )</p><p>\u53C2\u6570</p><ul><li><code>{Object | Array} target</code></li><li><code>{string | number} propertyName/index</code></li><li><code>{any} value</code></li></ul><p>\u8FD4\u56DE\u503C\uFF1A\u8BBE\u7F6E\u7684\u503C</p><p>\u901A\u8FC7<code>Vue.set</code>\u5411\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u4E00\u4E2A<code>property</code>\uFF0C\u5E76\u786E\u4FDD\u8FD9\u4E2A\u65B0 <code>property</code>\u540C\u6837\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4E14\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0</p><p>\u5173\u4E8E<code>Vue.set</code>\u6E90\u7801\uFF08\u7701\u7565\u4E86\u5F88\u591A\u4E0E\u672C\u8282\u4E0D\u76F8\u5173\u7684\u4EE3\u7801\uFF09</p><p>\u6E90\u7801\u4F4D\u7F6E\uFF1A<code>src\\core\\observer\\index.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">defineReactive</span><span class="token punctuation">(</span>ob<span class="token punctuation">.</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u91CC\u65E0\u975E\u518D\u6B21\u8C03\u7528<code>defineReactive</code>\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u65B0\u589E\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F</p><p>\u5173\u4E8E<code>defineReactive</code>\u65B9\u6CD5\uFF0C\u5185\u90E8\u8FD8\u662F\u901A\u8FC7<code>Object.defineProperty</code>\u5B9E\u73B0\u5C5E\u6027\u62E6\u622A</p><p>\u5927\u81F4\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">get </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">set </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                val <span class="token operator">=</span> newVal
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign()</h3><p>\u76F4\u63A5\u4F7F\u7528<code>Object.assign()</code>\u6DFB\u52A0\u5230\u5BF9\u8C61\u7684\u65B0\u5C5E\u6027\u4E0D\u4F1A\u89E6\u53D1\u66F4\u65B0</p><p>\u5E94\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5408\u5E76\u539F\u5BF9\u8C61\u548C\u6DF7\u5165\u5BF9\u8C61\u7684\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>someObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>someObject<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">newProperty1</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">newProperty2</span><span class="token operator">:</span><span class="token number">2</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="forceupdate" tabindex="-1"><a class="header-anchor" href="#forceupdate" aria-hidden="true">#</a> $forceUpdate</h3><p>\u5982\u679C\u4F60\u53D1\u73B0\u4F60\u81EA\u5DF1\u9700\u8981\u5728 <code>Vue</code>\u4E2D\u505A\u4E00\u6B21\u5F3A\u5236\u66F4\u65B0\uFF0C99.9% \u7684\u60C5\u51B5\uFF0C\u662F\u4F60\u5728\u67D0\u4E2A\u5730\u65B9\u505A\u9519\u4E86\u4E8B</p><p><code>$forceUpdate</code>\u8FEB\u4F7F<code>Vue</code> \u5B9E\u4F8B\u91CD\u65B0\u6E32\u67D3</p><p>PS\uFF1A\u4EC5\u4EC5\u5F71\u54CD\u5B9E\u4F8B\u672C\u8EAB\u548C\u63D2\u5165\u63D2\u69FD\u5185\u5BB9\u7684\u5B50\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u6240\u6709\u5B50\u7EC4\u4EF6\u3002</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><ul><li><p>\u5982\u679C\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u5C11\u91CF\u7684\u65B0\u5C5E\u6027\uFF0C\u53EF\u4EE5\u76F4\u63A5\u91C7\u7528<code>Vue.set()</code></p></li><li><p>\u5982\u679C\u9700\u8981\u4E3A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5927\u91CF\u7684\u65B0\u5C5E\u6027\uFF0C\u5219\u901A\u8FC7<code>Object.assign()</code>\u521B\u5EFA\u65B0\u5BF9\u8C61</p></li><li><p>\u5982\u679C\u4F60\u5B9E\u5728\u4E0D\u77E5\u9053\u600E\u4E48\u64CD\u4F5C\u65F6\uFF0C\u53EF\u91C7\u53D6<code>$forceUpdate()</code>\u8FDB\u884C\u5F3A\u5236\u5237\u65B0 (\u4E0D\u5EFA\u8BAE)</p></li></ul><p>PS\uFF1A<code>vue3</code>\u662F\u7528\u8FC7<code>proxy</code>\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\u7684\uFF0C\u76F4\u63A5\u52A8\u6001\u6DFB\u52A0\u65B0\u5C5E\u6027\u4ECD\u53EF\u4EE5\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,49),k={href:"https://cn.vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"},d=p("https://cn.vuejs.org/v2/api/#Vue-set"),b={href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"},m=p("https://vue3js.cn/docs/zh");function g(v,h){const a=e("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,s(a)])]),n("li",null,[n("a",b,[m,s(a)])])])],64)}var y=t(i,[["render",g],["__file","data_object_add_attrs.html.vue"]]);export{y as default};
