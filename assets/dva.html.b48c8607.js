import{_ as t,r as e,o,c,a as n,b as p,F as l,d as s,e as r}from"./app.77cde27d.js";const u={},i=n("h1",{id:"dvajs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dvajs","aria-hidden":"true"},"#"),s(" DvaJS")],-1),k={href:"https://dvajs.com/",target:"_blank",rel:"noopener noreferrer"},d=s("DvaJS \u5B98\u7F51"),b={href:"https://dvajs.com/knowledgemap",target:"_blank",rel:"noopener noreferrer"},m=s("\u77E5\u8BC6\u5730\u56FE"),h=s(": \u7B80\u5355\u63CF\u8FF0\u7528\u5230\u7684\u5404\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u5EFA\u8BAE\u5148\u6D4F\u89C8"),f=n("li",null,[n("p",null,[s("\u8DEF\u7531\uFF1A"),n("code",null,"React-Router")])],-1),y=n("li",null,[n("p",null,[s("\u67B6\u6784\uFF1A"),n("code",null,"Redux")])],-1),g=n("li",null,[n("p",null,[s("\u5F02\u6B65\u64CD\u4F5C\uFF1A"),n("code",null,"Redux-saga")])],-1),_=r(`<p>dva = React-Router + Redux + Redux-saga</p><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h2><h3 id="\u5173\u952E\u5B57-yield" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57-yield" aria-hidden="true">#</a> \u5173\u952E\u5B57 yield</h3><h3 id="function-\u751F\u6210\u5668\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#function-\u751F\u6210\u5668\u51FD\u6570" aria-hidden="true">#</a> function* \u751F\u6210\u5668\u51FD\u6570</h3><p><code>function*</code> \u8FD9\u79CD\u58F0\u660E\u65B9\u5F0F(<code>function</code>\u5173\u952E\u5B57\u540E\u8DDF\u4E00\u4E2A\u661F\u53F7\uFF09\u4F1A\u5B9A\u4E49\u4E00\u4E2A\u751F\u6210\u5668\u51FD\u6570 (<code>generator function</code>)\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A <code>Generator</code> \u5BF9\u8C61\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><h3 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> Effect</h3><ul><li>put: \u7528\u4E8E\u89E6\u53D1 action \u3002\u76F8\u5F53\u4E8E <code>dispatch</code></li><li>call: \u7528\u4E8E\u8C03\u7528\u5F02\u6B65\u903B\u8F91\uFF0C\u652F\u6301 promise \u3002</li><li>select: \u7528\u4E8E\u4ECE state \u91CC\u83B7\u53D6\u6570\u636E\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;todos&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span><span class="token function">addRemote</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> todo <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> put<span class="token punctuation">,</span> call<span class="token punctuation">,</span> select <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>fetch<span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;todos/add&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> result <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8BA1\u7B97\u5668\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dva<span class="token punctuation">,</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;dva&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 1. Initialize</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Model</span>
app<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">add</span>  <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">minus</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">TestError</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// throw new Error(&#39;a&#39;);</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>TestError<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. View</span>
<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  count
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>TestError <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button key<span class="token operator">=</span><span class="token string">&quot;add&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;count/add&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button key<span class="token operator">=</span><span class="token string">&quot;minus&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> props<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;count/minus&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">-</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. Router</span>
app<span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. Start</span>
app<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,11);function v(w,x){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[d,p(a)])])]),n("li",null,[n("p",null,[n("a",b,[m,p(a)]),h])]),f,y,g]),_],64)}var j=t(u,[["render",v],["__file","dva.html.vue"]]);export{j as default};
