import{_ as n,e as s}from"./app.f6b3af9d.js";const a={},p=s(`<h1 id="iterator\u63A5\u53E3\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#iterator\u63A5\u53E3\u5B9E\u73B0" aria-hidden="true">#</a> Iterator\u63A5\u53E3\u5B9E\u73B0</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nextIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> nextIndex <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> array<span class="token punctuation">[</span>nextIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">idMaker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                value<span class="token operator">:</span> index<span class="token operator">++</span><span class="token punctuation">,</span>
                done<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,2);function e(t,o){return p}var r=n(a,[["render",e],["__file","Iterator.html.vue"]]);export{r as default};
