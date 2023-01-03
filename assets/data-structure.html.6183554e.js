import{_ as n,e as s}from"./app.77cde27d.js";const a={},p=s(`<p><strong>\u6808\u548C\u961F\u5217\u7684\u533A\u522B?</strong></p><ul><li>\u6808\u7684\u63D2\u5165\u548C\u5220\u9664\u64CD\u4F5C\u90FD\u662F\u5728\u4E00\u7AEF\u8FDB\u884C\u7684\uFF0C\u800C\u961F\u5217\u7684\u64CD\u4F5C\u5374\u662F\u5728\u4E24\u7AEF\u8FDB\u884C\u7684\u3002</li><li>\u961F\u5217\u5148\u8FDB\u5148\u51FA\uFF0C\u6808\u5148\u8FDB\u540E\u51FA\u3002</li><li>\u6808\u53EA\u5141\u8BB8\u5728\u8868\u5C3E\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664\uFF0C\u800C\u961F\u5217\u53EA\u5141\u8BB8\u5728\u8868\u5C3E\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\uFF0C\u5728\u8868\u5934\u4E00\u7AEF\u8FDB\u884C\u5220\u9664</li></ul><p><strong>\u6808\u548C\u5806\u7684\u533A\u522B\uFF1F</strong></p><ul><li>\u6808\u533A\uFF08stack\uFF09\u2014 \u7531\u7F16\u8BD1\u5668\u81EA\u52A8\u5206\u914D\u91CA\u653E \uFF0C\u5B58\u653E\u51FD\u6570\u7684\u53C2\u6570\u503C\uFF0C\u5C40\u90E8\u53D8\u91CF\u7684\u503C\u7B49\u3002</li><li>\u5806\u533A\uFF08heap\uFF09 \u2014 \u4E00\u822C\u7531\u7A0B\u5E8F\u5458\u5206\u914D\u91CA\u653E\uFF0C \u82E5\u7A0B\u5E8F\u5458\u4E0D\u91CA\u653E\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u65F6\u53EF\u80FD\u7531OS\u56DE\u6536\u3002</li><li>\u5806\uFF08\u6570\u636E\u7ED3\u6784\uFF09\uFF1A\u5806\u53EF\u4EE5\u88AB\u770B\u6210\u662F\u4E00\u68F5\u6811\uFF0C\u5982\uFF1A\u5806\u6392\u5E8F\uFF1B</li><li>\u6808\uFF08\u6570\u636E\u7ED3\u6784\uFF09\uFF1A\u4E00\u79CD\u5148\u8FDB\u540E\u51FA\u7684\u6570\u636E\u7ED3\u6784</li></ul><p><strong>\u5FEB\u901F \u6392\u5E8F\u7684\u601D\u60F3\u5E76\u5B9E\u73B0\u4E00\u4E2A\u5FEB\u6392\uFF1F</strong></p><p>&quot;\u5FEB\u901F\u6392\u5E8F&quot;\u7684\u601D\u60F3\u5F88\u7B80\u5355\uFF0C\u6574\u4E2A\u6392\u5E8F\u8FC7\u7A0B\u53EA\u9700\u8981\u4E09\u6B65\uFF1A</p><ul><li>\uFF081\uFF09\u5728\u6570\u636E\u96C6\u4E4B\u4E2D\uFF0C\u627E\u4E00\u4E2A\u57FA\u51C6\u70B9</li><li>\uFF082\uFF09\u5EFA\u7ACB\u4E24\u4E2A\u6570\u7EC4\uFF0C\u5206\u522B\u5B58\u50A8\u5DE6\u8FB9\u548C\u53F3\u8FB9\u7684\u6570\u7EC4</li><li>\uFF083\uFF09\u5229\u7528\u9012\u5F52\u8FDB\u884C\u4E0B\u6B21\u6BD4\u8F83</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token operator">&lt;=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> arr<span class="token punctuation">;</span><span class="token comment">//\u5982\u679C\u6570\u7EC4\u53EA\u6709\u4E00\u4E2A\u6570\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF1B</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u627E\u5230\u4E2D\u95F4\u6570\u7684\u7D22\u5F15\u503C\uFF0C\u5982\u679C\u662F\u6D6E\u70B9\u6570\uFF0C\u5219\u5411\u4E0B\u53D6\u6574</span>

    <span class="token keyword">var</span> numValue <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u627E\u5230\u4E2D\u95F4\u6570\u7684\u503C</span>
    <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>numValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u57FA\u51C6\u70B9\u7684\u5DE6\u8FB9\u7684\u6570\u4F20\u5230\u5DE6\u8FB9\u6570\u7EC4</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
           right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u57FA\u51C6\u70B9\u7684\u53F3\u8FB9\u7684\u6570\u4F20\u5230\u53F3\u8FB9\u6570\u7EC4</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">quickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>numValue<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token function">quickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u9012\u5F52\u4E0D\u65AD\u91CD\u590D\u6BD4\u8F83</span>
<span class="token punctuation">}</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5F39\u51FA\u201C2,16,32,37,45,87\u201D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,8);function t(o,c){return p}var u=n(a,[["render",t],["__file","data-structure.html.vue"]]);export{u as default};
