import{_ as t,o as e,c as o,a as n,t as c,F as l,e as a,d as s}from"./app.6e1280c8.js";const u={},r=a(`<h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h2><p><strong>MVVM \u7531\u4EE5\u4E0B\u4E09\u4E2A\u5185\u5BB9\u7EC4\u6210</strong></p><ul><li><code>View</code>\uFF1A\u754C\u9762</li><li><code>Model</code>\uFF1A\u6570\u636E\u6A21\u578B</li><li><code>ViewModel</code>\uFF1A\u4F5C\u4E3A\u6865\u6881\u8D1F\u8D23\u6C9F\u901A <code>View</code> \u548C <code>Model</code></li></ul><blockquote><ul><li>\u5728 JQuery \u65F6\u671F\uFF0C\u5982\u679C\u9700\u8981\u5237\u65B0 UI \u65F6\uFF0C\u9700\u8981\u5148\u53D6\u5230\u5BF9\u5E94\u7684 DOM \u518D\u66F4\u65B0 UI\uFF0C\u8FD9\u6837\u6570\u636E\u548C\u4E1A\u52A1\u7684\u903B\u8F91\u5C31\u548C\u9875\u9762\u6709\u5F3A\u8026\u5408</li><li>\u5728 MVVM \u4E2D\uFF0CUI \u662F\u901A\u8FC7\u6570\u636E\u9A71\u52A8\u7684\uFF0C\u6570\u636E\u4E00\u65E6\u6539\u53D8\u5C31\u4F1A\u76F8\u5E94\u7684\u5237\u65B0\u5BF9\u5E94\u7684 UI\uFF0CUI \u5982\u679C\u6539\u53D8\uFF0C\u4E5F\u4F1A\u6539\u53D8\u5BF9\u5E94\u7684\u6570\u636E\u3002\u8FD9\u79CD\u65B9\u5F0F\u5C31\u53EF\u4EE5\u5728\u4E1A\u52A1\u5904\u7406\u4E2D\u53EA\u5173\u5FC3\u6570\u636E\u7684\u6D41\u8F6C\uFF0C\u800C\u65E0\u9700\u76F4\u63A5\u548C\u9875\u9762\u6253\u4EA4\u9053\u3002ViewModel \u53EA\u5173\u5FC3\u6570\u636E\u548C\u4E1A\u52A1\u7684\u5904\u7406\uFF0C\u4E0D\u5173\u5FC3 View \u5982\u4F55\u5904\u7406\u6570\u636E\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CView \u548C Model \u90FD\u53EF\u4EE5\u72EC\u7ACB\u51FA\u6765\uFF0C\u4EFB\u4F55\u4E00\u65B9\u6539\u53D8\u4E86\u4E5F\u4E0D\u4E00\u5B9A\u9700\u8981\u6539\u53D8\u53E6\u4E00\u65B9\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5C06\u4E00\u4E9B\u53EF\u590D\u7528\u7684\u903B\u8F91\u653E\u5728\u4E00\u4E2A ViewModel \u4E2D\uFF0C\u8BA9\u591A\u4E2A View \u590D\u7528\u8FD9\u4E2A ViewModel</li></ul></blockquote><ul><li>\u5728 MVVM \u4E2D\uFF0C\u6700\u6838\u5FC3\u7684\u4E5F\u5C31\u662F\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\uFF0C\u4F8B\u5982 Angluar \u7684\u810F\u6570\u636E\u68C0\u6D4B\uFF0CVue \u4E2D\u7684\u6570\u636E\u52AB\u6301</li></ul><p><strong>\u810F\u6570\u636E\u68C0\u6D4B</strong></p><ul><li>\u5F53\u89E6\u53D1\u4E86\u6307\u5B9A\u4E8B\u4EF6\u540E\u4F1A\u8FDB\u5165\u810F\u6570\u636E\u68C0\u6D4B\uFF0C\u8FD9\u65F6\u4F1A\u8C03\u7528 $digest \u5FAA\u73AF\u904D\u5386\u6240\u6709\u7684\u6570\u636E\u89C2\u5BDF\u8005\uFF0C\u5224\u65AD\u5F53\u524D\u503C\u662F\u5426\u548C\u5148\u524D\u7684\u503C\u6709\u533A\u522B\uFF0C\u5982\u679C\u68C0\u6D4B\u5230\u53D8\u5316\u7684\u8BDD\uFF0C\u4F1A\u8C03\u7528 $watch \u51FD\u6570\uFF0C\u7136\u540E\u518D\u6B21\u8C03\u7528 $digest \u5FAA\u73AF\u76F4\u5230\u53D1\u73B0\u6CA1\u6709\u53D8\u5316\u3002\u5FAA\u73AF\u81F3\u5C11\u4E3A\u4E8C\u6B21 \uFF0C\u81F3\u591A\u4E3A\u5341\u6B21</li><li>\u810F\u6570\u636E\u68C0\u6D4B\u867D\u7136\u5B58\u5728\u4F4E\u6548\u7684\u95EE\u9898\uFF0C\u4F46\u662F\u4E0D\u5173\u5FC3\u6570\u636E\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u6539\u53D8\u7684\uFF0C\u90FD\u53EF\u4EE5\u5B8C\u6210\u4EFB\u52A1\uFF0C\u4F46\u662F\u8FD9\u5728 Vue \u4E2D\u7684\u53CC\u5411\u7ED1\u5B9A\u662F\u5B58\u5728\u95EE\u9898\u7684\u3002\u5E76\u4E14\u810F\u6570\u636E\u68C0\u6D4B\u53EF\u4EE5\u5B9E\u73B0\u6279\u91CF\u68C0\u6D4B\u51FA\u66F4\u65B0\u7684\u503C\uFF0C\u518D\u53BB\u7EDF\u4E00\u66F4\u65B0 UI\uFF0C\u5927\u5927\u51CF\u5C11\u4E86\u64CD\u4F5C DOM \u7684\u6B21\u6570</li></ul><p><strong>\u6570\u636E\u52AB\u6301</strong></p><ul><li><code>Vue</code> \u5185\u90E8\u4F7F\u7528\u4E86 <code>Obeject.defineProperty()</code> \u6765\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u76D1\u542C\u5230 <code>set</code> \u548C <code>get </code>\u7684\u4E8B\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yck&#39;</span> <span class="token punctuation">}</span>
<span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> data<span class="token punctuation">.</span>name <span class="token comment">// -&gt; get value</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span> <span class="token comment">// -&gt; change value</span>

<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u7C7B\u578B</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9012\u5F52\u5B50\u5C5E\u6027</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get value&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change value&#39;</span><span class="token punctuation">)</span>
      val <span class="token operator">=</span> newVal
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><blockquote><p>\u4EE5\u4E0A\u4EE3\u7801\u7B80\u5355\u7684\u5B9E\u73B0\u4E86\u5982\u4F55\u76D1\u542C\u6570\u636E\u7684 set \u548C get \u7684\u4E8B\u4EF6\uFF0C\u4F46\u662F\u4EC5\u4EC5\u5982\u6B64\u662F\u4E0D\u591F\u7684\uFF0C\u8FD8\u9700\u8981\u5728\u9002\u5F53\u7684\u65F6\u5019\u7ED9\u5C5E\u6027\u6DFB\u52A0\u53D1\u5E03\u8BA2\u9605</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{name}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12),i=s("\u5728\u89E3\u6790\u5982\u4E0A\u6A21\u677F\u4EE3\u7801\u65F6\uFF0C\u9047\u5230 "),k=s(" \u5C31\u4F1A\u7ED9\u5C5E\u6027 "),b=n("code",null,"name",-1),m=s(" \u6DFB\u52A0\u53D1\u5E03\u8BA2\u9605"),d=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u901A\u8FC7 Dep \u89E3\u8026</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// sub \u662F Watcher \u5B9E\u4F8B</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">sub</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      sub<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5168\u5C40\u5C5E\u6027\uFF0C\u901A\u8FC7\u8BE5\u5C5E\u6027\u914D\u7F6E Watcher</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> value
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 Dep.target \u6307\u5411\u81EA\u5DF1</span>
    <span class="token comment">// \u7136\u540E\u89E6\u53D1\u5C5E\u6027\u7684 getter \u6DFB\u52A0\u76D1\u542C</span>
    <span class="token comment">// \u6700\u540E\u5C06 Dep.target \u7F6E\u7A7A</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb
    <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> obj
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u5F97\u65B0\u503C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">]</span>
    <span class="token comment">// \u8C03\u7528 update \u65B9\u6CD5\u66F4\u65B0 Dom</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;yck&#39;</span> <span class="token punctuation">}</span>
<span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment">// \u6A21\u62DF\u89E3\u6790\u5230 \`{{name}}\` \u89E6\u53D1\u7684\u64CD\u4F5C</span>
<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> update<span class="token punctuation">)</span>
<span class="token comment">// update Dom innerText</span>
data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><blockquote><p>\u63A5\u4E0B\u6765,\u5BF9 defineReactive \u51FD\u6570\u8FDB\u884C\u6539\u9020</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9012\u5F52\u5B50\u5C5E\u6027</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get value&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// \u5C06 Watcher \u6DFB\u52A0\u5230\u8BA2\u9605</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change value&#39;</span><span class="token punctuation">)</span>
      val <span class="token operator">=</span> newVal
      <span class="token comment">// \u6267\u884C watcher \u7684 update \u65B9\u6CD5</span>
      dp<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u4EE5\u4E0A\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u6613\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6838\u5FC3\u601D\u8DEF\u5C31\u662F\u624B\u52A8\u89E6\u53D1\u4E00\u6B21\u5C5E\u6027\u7684 getter \u6765\u5B9E\u73B0\u53D1\u5E03\u8BA2\u9605\u7684\u6DFB\u52A0</p></blockquote><p><strong>Proxy \u4E0E Obeject.defineProperty \u5BF9\u6BD4</strong></p><ul><li><code>Obeject.defineProperty</code> \u867D\u7136\u5DF2\u7ECF\u80FD\u591F\u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\u4E86\uFF0C\u4F46\u662F\u4ED6\u8FD8\u662F\u6709\u7F3A\u9677\u7684\u3002 <ul><li>\u53EA\u80FD\u5BF9\u5C5E\u6027\u8FDB\u884C\u6570\u636E\u52AB\u6301\uFF0C\u6240\u4EE5\u9700\u8981\u6DF1\u5EA6\u904D\u5386\u6574\u4E2A\u5BF9\u8C61</li><li>\u5BF9\u4E8E\u6570\u7EC4\u4E0D\u80FD\u76D1\u542C\u5230\u6570\u636E\u7684\u53D8\u5316</li></ul></li></ul><blockquote><p>\u867D\u7136 <code>Vue</code> \u4E2D\u786E\u5B9E\u80FD\u68C0\u6D4B\u5230\u6570\u7EC4\u6570\u636E\u7684\u53D8\u5316\uFF0C\u4F46\u662F\u5176\u5B9E\u662F\u4F7F\u7528\u4E86 <code>hack</code> \u7684\u529E\u6CD5\uFF0C\u5E76\u4E14\u4E5F\u662F\u6709\u7F3A\u9677\u7684</p></blockquote>`,7);function y(p,f){return e(),o(l,null,[r,n("blockquote",null,[n("p",null,[i,n("code",null,c(p.name),1),k,b,m])]),d],64)}var v=t(u,[["render",y],["__file","MVVM.html.vue"]]);export{v as default};
