import{_ as a,r as p,o as t,c as e,a as n,b as o,F as c,e as l,d as u}from"./app.6e1280c8.js";const r={},i=l(`<h1 id="\u4E3E\u4F8B\u8BF4\u660E\u4F60\u5BF9\u5C3E\u9012\u5F52\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B\u8BF4\u660E\u4F60\u5BF9\u5C3E\u9012\u5F52\u7684\u7406\u89E3-\u6709\u54EA\u4E9B\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E3E\u4F8B\u8BF4\u660E\u4F60\u5BF9\u5C3E\u9012\u5F52\u7684\u7406\u89E3\uFF0C\u6709\u54EA\u4E9B\u5E94\u7528\u573A\u666F</h1><p><img src="https://static.vue-js.com/74db8fe0-815d-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><h2 id="\u4E00\u3001\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u9012\u5F52" aria-hidden="true">#</a> \u4E00\u3001\u9012\u5F52</h2><p>\u9012\u5F52\uFF08\u82F1\u8BED\uFF1ARecursion\uFF09</p><p>\u5728\u6570\u5B66\u4E0E\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\uFF0C\u662F\u6307\u5728\u51FD\u6570\u7684\u5B9A\u4E49\u4E2D\u4F7F\u7528\u51FD\u6570\u81EA\u8EAB\u7684\u65B9\u6CD5</p><p>\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u53EF\u4EE5\u8C03\u7528\u5176\u4ED6\u51FD\u6570\u3002\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5728\u5185\u90E8\u8C03\u7528\u81EA\u8EAB\u672C\u8EAB\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5C31\u662F\u9012\u5F52\u51FD\u6570</p><p>\u5176\u6838\u5FC3\u601D\u60F3\u662F\u628A\u4E00\u4E2A\u5927\u578B\u590D\u6742\u7684\u95EE\u9898\u5C42\u5C42\u8F6C\u5316\u4E3A\u4E00\u4E2A\u4E0E\u539F\u95EE\u9898\u76F8\u4F3C\u7684\u89C4\u6A21\u8F83\u5C0F\u7684\u95EE\u9898\u6765\u6C42\u89E3</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u9012\u5F52\u9700\u8981\u6709\u8FB9\u754C\u6761\u4EF6\u3001\u9012\u5F52\u524D\u8FDB\u9636\u6BB5\u548C\u9012\u5F52\u8FD4\u56DE\u9636\u6BB5\u3002\u5F53\u8FB9\u754C\u6761\u4EF6\u4E0D\u6EE1\u8DB3\u65F6\uFF0C\u9012\u5F52\u524D\u8FDB\uFF1B\u5F53\u8FB9\u754C\u6761\u4EF6\u6EE1\u8DB3\u65F6\uFF0C\u9012\u5F52\u8FD4\u56DE</p><p>\u4E0B\u9762\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570 <code>pow(x, n)</code>\uFF0C\u5B83\u53EF\u4EE5\u8BA1\u7B97 <code>x</code> \u7684 <code>n</code> \u6B21\u65B9</p><p>\u4F7F\u7528\u8FED\u4EE3\u7684\u65B9\u5F0F\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// \u518D\u5FAA\u73AF\u4E2D\uFF0C\u7528 x \u4E58\u4EE5 result n \u6B21</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">*=</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F7F\u7528\u9012\u5F52\u7684\u65B9\u5F0F\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>pow(x, n)</code> \u88AB\u8C03\u7528\u65F6\uFF0C\u6267\u884C\u5206\u4E3A\u4E24\u4E2A\u5206\u652F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>             <span class="token keyword">if</span> n<span class="token operator">==</span><span class="token number">1</span>  <span class="token operator">=</span> x
             <span class="token operator">/</span>
<span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">=</span>
             \\
              <span class="token keyword">else</span>     <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4<code>pow</code> \u9012\u5F52\u5730\u8C03\u7528\u81EA\u8EAB \u76F4\u5230 <code>n == 1</code></p><p><img src="https://static.vue-js.com/8002c960-815d-11eb-ab90-d9ae814b240d.png" alt="image"></p><p>\u4E3A\u4E86\u8BA1\u7B97 <code>pow(2, 4)</code>\uFF0C\u9012\u5F52\u53D8\u4F53\u7ECF\u8FC7\u4E86\u4E0B\u9762\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li><code>pow(2, 4) = 2 * pow(2, 3)</code></li><li><code>pow(2, 3) = 2 * pow(2, 2)</code></li><li><code>pow(2, 2) = 2 * pow(2, 1)</code></li><li><code>pow(2, 1) = 2</code></li></ol><p>\u56E0\u6B64\uFF0C\u9012\u5F52\u5C06\u51FD\u6570\u8C03\u7528\u7B80\u5316\u4E3A\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u51FD\u6570\u8C03\u7528\uFF0C\u7136\u540E\u518D\u5C06\u5176\u7B80\u5316\u4E3A\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u51FD\u6570\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u7ED3\u679C</p><h2 id="\u4E8C\u3001\u5C3E\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5C3E\u9012\u5F52" aria-hidden="true">#</a> \u4E8C\u3001\u5C3E\u9012\u5F52</h2><p>\u5C3E\u9012\u5F52\uFF0C\u5373\u5728\u51FD\u6570\u5C3E\u4F4D\u7F6E\u8C03\u7528\u81EA\u8EAB\uFF08\u6216\u662F\u4E00\u4E2A\u5C3E\u8C03\u7528\u672C\u8EAB\u7684\u5176\u4ED6\u51FD\u6570\u7B49\u7B49\uFF09\u3002\u5C3E\u9012\u5F52\u4E5F\u662F\u9012\u5F52\u7684\u4E00\u79CD\u7279\u6B8A\u60C5\u5F62\u3002\u5C3E\u9012\u5F52\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5C3E\u8C03\u7528\uFF0C\u5373\u5728\u5C3E\u90E8\u76F4\u63A5\u8C03\u7528\u81EA\u8EAB\u7684\u9012\u5F52\u51FD\u6570</p><p>\u5C3E\u9012\u5F52\u5728\u666E\u901A\u5C3E\u8C03\u7528\u7684\u57FA\u7840\u4E0A\uFF0C\u591A\u51FA\u4E862\u4E2A\u7279\u5F81\uFF1A</p><ul><li>\u5728\u5C3E\u90E8\u8C03\u7528\u7684\u662F\u51FD\u6570\u81EA\u8EAB</li><li>\u53EF\u901A\u8FC7\u4F18\u5316\uFF0C\u4F7F\u5F97\u8BA1\u7B97\u4EC5\u5360\u7528\u5E38\u91CF\u6808\u7A7A\u95F4</li></ul><p>\u5728\u9012\u5F52\u8C03\u7528\u7684\u8FC7\u7A0B\u5F53\u4E2D\u7CFB\u7EDF\u4E3A\u6BCF\u4E00\u5C42\u7684\u8FD4\u56DE\u70B9\u3001\u5C40\u90E8\u91CF\u7B49\u5F00\u8F9F\u4E86\u6808\u6765\u5B58\u50A8\uFF0C\u9012\u5F52\u6B21\u6570\u8FC7\u591A\u5BB9\u6613\u9020\u6210\u6808\u6EA2\u51FA</p><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u5C3E\u9012\u5F52\uFF0C\u5373\u4E00\u4E2A\u51FD\u6570\u4E2D\u6240\u6709\u9012\u5F52\u5F62\u5F0F\u7684\u8C03\u7528\u90FD\u51FA\u73B0\u5728\u51FD\u6570\u7684\u672B\u5C3E\uFF0C\u5BF9\u4E8E\u5C3E\u9012\u5F52\u6765\u8BF4\uFF0C\u7531\u4E8E\u53EA\u5B58\u5728\u4E00\u4E2A\u8C03\u7528\u8BB0\u5F55\uFF0C\u6240\u4EE5\u6C38\u8FDC\u4E0D\u4F1A\u53D1\u751F&quot;\u6808\u6EA2\u51FA&quot;\u9519\u8BEF</p><p>\u5B9E\u73B0\u4E00\u4E0B\u9636\u4E58\uFF0C\u5982\u679C\u7528\u666E\u901A\u7684\u9012\u5F52\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C<code>n</code>\u7B49\u4E8E5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u8981\u6267\u884C5\u6B21\uFF0C\u624D\u8FD4\u56DE\u6700\u7EC8\u7684\u8BA1\u7B97\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u6837\u6BCF\u6B21\u90FD\u8981\u4FDD\u5B58\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5C31\u5BB9\u6613\u9020\u6210\u6808\u6EA2\u51FA\uFF0C\u590D\u6742\u5EA6\u4E3A<code>O(n)</code></p><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u5C3E\u9012\u5F52\uFF0C\u5219\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">*</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u4E00\u6B21\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u4E0D\u5E26\u4E0A\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u50A8\u5B58\u4E0A\u4E00\u4E2A\u51FD\u6570\u4E86\u3002\u5C3E\u9012\u5F52\u53EA\u9700\u8981\u4FDD\u5B58\u4E00\u4E2A\u8C03\u7528\u6808\uFF0C\u590D\u6742\u5EA6 O(1)</p><h2 id="\u4E8C\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E8C\u3001\u5E94\u7528\u573A\u666F</h2><p>\u6570\u7EC4\u6C42\u548C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sumArray</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> total</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> total
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> total <span class="token operator">+</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528\u5C3E\u9012\u5F52\u4F18\u5316\u6C42\u6590\u6CE2\u90A3\u5951\u6570\u5217</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorial2</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> total
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">factorial2</span> <span class="token punctuation">(</span>n <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> total<span class="token punctuation">,</span> total <span class="token operator">+</span> start<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6570\u7EC4\u6241\u5E73\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">// \u53D8\u6210</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">// \u5177\u4F53\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">flat</span><span class="token punctuation">(</span><span class="token parameter">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">flat</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6570\u7EC4\u5BF9\u8C61\u683C\u5F0F\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
        <span class="token constant">D</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token constant">E</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8F6C\u5316\u4E3A\u5982\u4E0B\uFF1A</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EE3\u7801\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">keysLower</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&quot;([A-Z]+)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> temp <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5C06\u4FEE\u6539\u540E\u7684\u5C5E\u6027\u540D\u91CD\u65B0\u8D4B\u503C\u7ED9temp\uFF0C\u5E76\u5728\u5BF9\u8C61obj\u5185\u6DFB\u52A0\u4E00\u4E2A\u8F6C\u6362\u540E\u7684\u5C5E\u6027</span>
                temp <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">// \u5C06\u4E4B\u524D\u5927\u5199\u7684\u952E\u5C5E\u6027\u5220\u9664</span>
                <span class="token keyword">delete</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5982\u679C\u5C5E\u6027\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\uFF0C\u91CD\u65B0\u6267\u884C\u51FD\u6570</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> temp <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Array]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">keysLower</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,42),k={href:"https://zh.wikipedia.org/wiki/%E5%B0%BE%E8%B0%83%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},b=u("https://zh.wikipedia.org/wiki/\u5C3E\u8C03\u7528");function m(d,y){const s=p("ExternalLinkIcon");return t(),e(c,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,o(s)])])])],64)}var w=a(r,[["render",m],["__file","tail_recursion.html.vue"]]);export{w as default};
