import{_ as t,r as e,o,c,a as n,b as p,F as u,d as s,e as l}from"./app.26a788a0.js";const r={},i=n("h1",{id:"\u524D\u7AEF\u5E76\u53D1\u8BF7\u6C42\u63A7\u5236-\u4E00\u6B21\u6700\u591A\u5E76\u53D13\u4E2A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7AEF\u5E76\u53D1\u8BF7\u6C42\u63A7\u5236-\u4E00\u6B21\u6700\u591A\u5E76\u53D13\u4E2A","aria-hidden":"true"},"#"),s(" \u524D\u7AEF\u5E76\u53D1\u8BF7\u6C42\u63A7\u5236\uFF0C\u4E00\u6B21\u6700\u591A\u5E76\u53D13\u4E2A")],-1),k={href:"https://codesandbox.io/s/nifty-goldstine-01o29?file=/src/index.js",target:"_blank",rel:"noopener noreferrer"},b=s("Ajax\u5E76\u53D1\u8BF7\u6C42\u63A7\u5236 - [codesandbox]"),m={href:"https://zhuanlan.zhihu.com/p/422284702",target:"_blank",rel:"noopener noreferrer"},d=s("\u5B9E\u73B0\u65E0\u611F\u5237\u65B0token\uFF0C\u6211\u662F\u8FD9\u6837\u505A\u7684"),f=l(`<p>screens \u76D1\u63A7\u8BE6\u60C5\u9875\u9762\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u591A\u4E2A\u56FE\u8868\uFF0C\u5F53\u52A0\u8F7D\u9875\u9762\u65F6\uFF0C\u4E00\u6B21\u53EF\u80FD\u540C\u65F6\u52A0\u8F7D100\u4E2A\u56FE\u8868\uFF0C\u5C31\u81F3\u5C11\u8BF7\u6C42100\u4E2A\u63A5\u53E3\uFF0C\u6B64\u65F6\u6709\u4E9B\u670D\u52A1\u53EF\u80FD\u5C31\u4F1A\u8BF7\u6C42\u4E0D\u6210\u529F\u800C\u62A5\u9519\u3002</p><p>\u5206\u6790\u539F\u56E0\uFF1A\u4E00\u6B21\u8BF7\u6C42\u8FC7\u591A\u63A5\u53E3\u65F6\uFF0C\u670D\u52A1\u5668\u627F\u53D7\u4E0D\u4F4F\u5C31\u4F1A\u5931\u8D25</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u524D\u7AEF\u63A7\u5236\u4E00\u6B21\u6700\u591A\u8BF7\u6C423\u4E2A\u63A5\u53E3\uFF0C\u518D\u4EE5\u6B64\u8BF7\u6C42\u540E\u9762\u7684\u63A5\u53E3</p><p>concurrent.js - \u5C01\u88C5\u8BF7\u6C42\u62E6\u622A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// fake request</span>
<span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">request &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; si finished</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// function promisify</span>
<span class="token keyword">const</span> <span class="token function-variable function">toPromise</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">req</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> resolve<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// multiple requests</span>
<span class="token keyword">const</span> <span class="token function-variable function">concurrent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// transform the requests to a queue of runners</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> urls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">toPromise</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// slice to two queues</span>
  <span class="token keyword">const</span> init <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rest <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// construct a composer</span>
  <span class="token keyword">const</span> <span class="token function-variable function">executor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">runner<span class="token punctuation">,</span> rest</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">runner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// handle request result</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// arrange those requests</span>
      <span class="token comment">// the next request is initiated only if one request is completed,</span>
      <span class="token comment">// so it can be judged that only a certain number of requests are in a concurrent state</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rest<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> runner <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">executor</span><span class="token punctuation">(</span>runner<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  init<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">runner</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">executor</span><span class="token punctuation">(</span>runner<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;url 1&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 2&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 3&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 4&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 5&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 6&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 7&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 8&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url 9&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">concurrent</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42100\u4E2A\u56FE\u8868\u63A5\u53E3-\u63A7\u5236\u6700\u591A\u5E76\u53D13\u4E2A\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42100\u4E2A\u56FE\u8868\u63A5\u53E3-\u63A7\u5236\u6700\u591A\u5E76\u53D13\u4E2A\u8BF7\u6C42" aria-hidden="true">#</a> \u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42100\u4E2A\u56FE\u8868\u63A5\u53E3\uFF0C\u63A7\u5236\u6700\u591A\u5E76\u53D13\u4E2A\u8BF7\u6C42</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u63A7\u5236\u5E76\u53D1\u8BF7\u6C42
 * \u9700\u6C42\uFF1A\u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42100\u4E2A\u56FE\u8868\u63A5\u53E3\uFF0C\u63A7\u5236\u6700\u591A\u5E76\u53D13\u4E2A\u8BF7\u6C42
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">limitRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> limit <span class="token operator">=</span> max<span class="token punctuation">;</span>
  <span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> currentSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token operator">++</span>currentSum<span class="token punctuation">;</span>
      <span class="token keyword">const</span> fn <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token operator">--</span>currentSum<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>requests<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">reqFn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reqFn <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span>reqFn <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u8BF7\u6C42\u4E0D\u662F\u4E00\u4E2AFunction&quot;</span><span class="token punctuation">,</span> reqFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    requests<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>reqFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentSum <span class="token operator">&lt;</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> newRequest <span class="token operator">=</span> <span class="token function">limitRequest</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">newRequest</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,7);function q(g,h){const a=e("ExternalLinkIcon");return o(),c(u,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,p(a)])]),n("li",null,[n("a",m,[d,p(a)])])]),f],64)}var y=t(r,[["render",q],["__file","concurrent.html.vue"]]);export{y as default};
