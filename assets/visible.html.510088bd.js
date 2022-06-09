import{_ as n,e as s}from"./app.2989aa3c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF\u4E2D" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF\u4E2D\uFF1F</h1><p><img src="https://static.vue-js.com/d848c790-8a05-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7528\u9014" aria-hidden="true">#</a> \u4E00\u3001\u7528\u9014</h2><p>\u53EF\u89C6\u533A\u57DF\u5373\u6211\u4EEC\u6D4F\u89C8\u7F51\u9875\u7684\u8BBE\u5907\u8089\u773C\u53EF\u89C1\u7684\u533A\u57DF\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://static.vue-js.com/9c5bbb10-8a56-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u5224\u65AD\u76EE\u6807\u5143\u7D20\u662F\u5426\u5728\u89C6\u7A97\u4E4B\u5185\u6216\u8005\u548C\u89C6\u7A97\u7684\u8DDD\u79BB\u5C0F\u4E8E\u4E00\u4E2A\u503C\uFF08\u4F8B\u5982 100 px\uFF09\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E00\u4E9B\u5E38\u7528\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u56FE\u7247\u7684\u61D2\u52A0\u8F7D</li><li>\u5217\u8868\u7684\u65E0\u9650\u6EDA\u52A8</li><li>\u8BA1\u7B97\u5E7F\u544A\u5143\u7D20\u7684\u66DD\u5149\u60C5\u51B5</li><li>\u53EF\u70B9\u51FB\u94FE\u63A5\u7684\u9884\u52A0\u8F7D</li></ul><h2 id="\u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u73B0\u65B9\u5F0F</h2><p>\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF\uFF0C\u6211\u4EEC\u5E38\u7528\u7684\u6709\u4E09\u79CD\u529E\u6CD5\uFF1A</p><ul><li><p>offsetTop\u3001scrollTop</p></li><li><p>getBoundingClientRect</p></li><li><p>Intersection Observer</p></li></ul><h3 id="offsettop\u3001scrolltop" tabindex="-1"><a class="header-anchor" href="#offsettop\u3001scrolltop" aria-hidden="true">#</a> offsetTop\u3001scrollTop</h3><p><code>offsetTop</code>\uFF0C\u5143\u7D20\u7684\u4E0A\u5916\u8FB9\u6846\u81F3\u5305\u542B\u5143\u7D20\u7684\u4E0A\u5185\u8FB9\u6846\u4E4B\u95F4\u7684\u50CF\u7D20\u8DDD\u79BB\uFF0C\u5176\u4ED6<code>offset</code>\u5C5E\u6027\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/b4b63ca0-8a54-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4E0B\u9762\u518D\u6765\u4E86\u89E3\u4E0B<code>clientWidth</code>\u3001<code>clientHeight</code>\uFF1A</p><ul><li><code>clientWidth</code>\uFF1A\u5143\u7D20\u5185\u5BB9\u533A\u5BBD\u5EA6\u52A0\u4E0A\u5DE6\u53F3\u5185\u8FB9\u8DDD\u5BBD\u5EA6\uFF0C\u5373<code>clientWidth = content + padding</code></li><li><code>clientHeight</code>\uFF1A\u5143\u7D20\u5185\u5BB9\u533A\u9AD8\u5EA6\u52A0\u4E0A\u4E0A\u4E0B\u5185\u8FB9\u8DDD\u9AD8\u5EA6\uFF0C\u5373<code>clientHeight = content + padding</code></li></ul><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230<code>client</code>\u5143\u7D20\u90FD\u4E0D\u5305\u62EC\u5916\u8FB9\u8DDD</p><p>\u6700\u540E\uFF0C\u5173\u4E8E<code>scroll</code>\u7CFB\u5217\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><ul><li><p><code>scrollWidth</code> \u548C <code>scrollHeight</code> \u4E3B\u8981\u7528\u4E8E\u786E\u5B9A\u5143\u7D20\u5185\u5BB9\u7684\u5B9E\u9645\u5927\u5C0F</p></li><li><p><code>scrollLeft</code> \u548C <code>scrollTop</code> \u5C5E\u6027\u65E2\u53EF\u4EE5\u786E\u5B9A\u5143\u7D20\u5F53\u524D\u6EDA\u52A8\u7684\u72B6\u6001\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5143\u7D20\u7684\u6EDA\u52A8\u4F4D\u7F6E</p></li><li><ul><li>\u5782\u76F4\u6EDA\u52A8 <code>scrollTop &gt; 0</code></li><li>\u6C34\u5E73\u6EDA\u52A8 <code>scrollLeft &gt; 0</code></li></ul></li><li><p>\u5C06\u5143\u7D20\u7684 <code>scrollLeft</code> \u548C <code>scrollTop</code> \u8BBE\u7F6E\u4E3A 0\uFF0C\u53EF\u4EE5\u91CD\u7F6E\u5143\u7D20\u7684\u6EDA\u52A8\u4F4D\u7F6E</p></li></ul><h4 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h4><ul><li>\u4E0A\u8FF0\u5C5E\u6027\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u6BCF\u6B21\u8BBF\u95EE\u90FD\u8981\u91CD\u65B0\u5F00\u59CB</li></ul><p>\u4E0B\u9762\u518D\u770B\u770B\u5982\u4F55\u5B9E\u73B0\u5224\u65AD\uFF1A</p><p>\u516C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>el<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">&lt;=</span> viewPortHeight
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE3\u7801\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPortOfOne</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// viewPortHeight \u517C\u5BB9\u6240\u6709\u6D4F\u89C8\u5668\u5199\u6CD5</span>
    <span class="token keyword">const</span> viewPortHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight 
    <span class="token keyword">const</span> offsetTop <span class="token operator">=</span> el<span class="token punctuation">.</span>offsetTop
    <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop
    <span class="token keyword">const</span> top <span class="token operator">=</span> offsetTop <span class="token operator">-</span> scrollTop
    <span class="token keyword">return</span> top <span class="token operator">&lt;=</span> viewPortHeight
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect" aria-hidden="true">#</a> getBoundingClientRect</h3><p>\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A <code>DOMRect</code>\u5BF9\u8C61\uFF0C\u62E5\u6709<code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>x</code>, <code>y</code>, <code>width</code>, \u548C <code>height</code>\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.target&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> clientRect <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>clientRect<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//   bottom: 556.21875,</span>
<span class="token comment">//   height: 393.59375,</span>
<span class="token comment">//   left: 333,</span>
<span class="token comment">//   right: 1017,</span>
<span class="token comment">//   top: 162.625,</span>
<span class="token comment">//   width: 684</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5C5E\u6027\u5BF9\u5E94\u7684\u5173\u7CFB\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/e34ac5d0-8a05-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5F53\u9875\u9762\u53D1\u751F\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C<code>top</code>\u4E0E<code>left</code>\u5C5E\u6027\u503C\u90FD\u4F1A\u968F\u4E4B\u6539\u53D8</p><p>\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u5728\u89C6\u7A97\u4E4B\u5185\u7684\u8BDD\uFF0C\u90A3\u4E48\u5B83\u4E00\u5B9A\u6EE1\u8DB3\u4E0B\u9762\u56DB\u4E2A\u6761\u4EF6\uFF1A</p><ul><li>top \u5927\u4E8E\u7B49\u4E8E 0</li><li>left \u5927\u4E8E\u7B49\u4E8E 0</li><li>bottom \u5C0F\u4E8E\u7B49\u4E8E\u89C6\u7A97\u9AD8\u5EA6</li><li>right \u5C0F\u4E8E\u7B49\u4E8E\u89C6\u7A97\u5BBD\u5EA6</li></ul><p>\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPort</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> viewWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
  <span class="token keyword">const</span> viewHeight <span class="token operator">=</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    top<span class="token punctuation">,</span>
    right<span class="token punctuation">,</span>
    bottom<span class="token punctuation">,</span>
    left<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    right <span class="token operator">&lt;=</span> viewWidth <span class="token operator">&amp;&amp;</span>
    bottom <span class="token operator">&lt;=</span> viewHeight
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="intersection-observer" tabindex="-1"><a class="header-anchor" href="#intersection-observer" aria-hidden="true">#</a> Intersection Observer</h3><p><code>Intersection Observer</code> \u5373\u91CD\u53E0\u89C2\u5BDF\u8005\uFF0C\u4ECE\u8FD9\u4E2A\u547D\u540D\u5C31\u53EF\u4EE5\u770B\u51FA\u5B83\u7528\u4E8E\u5224\u65AD\u4E24\u4E2A\u5143\u7D20\u662F\u5426\u91CD\u53E0\uFF0C\u56E0\u4E3A\u4E0D\u7528\u8FDB\u884C\u4E8B\u4EF6\u7684\u76D1\u542C\uFF0C\u6027\u80FD\u65B9\u9762\u76F8\u6BD4<code>getBoundingClientRect </code>\u4F1A\u597D\u5F88\u591A</p><p>\u4F7F\u7528\u6B65\u9AA4\u4E3B\u8981\u5206\u4E3A\u4E24\u6B65\uFF1A\u521B\u5EFA\u89C2\u5BDF\u8005\u548C\u4F20\u5165\u88AB\u89C2\u5BDF\u8005</p><h4 id="\u521B\u5EFA\u89C2\u5BDF\u8005" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89C2\u5BDF\u8005" aria-hidden="true">#</a> \u521B\u5EFA\u89C2\u5BDF\u8005</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8868\u793A\u91CD\u53E0\u9762\u79EF\u5360\u88AB\u89C2\u5BDF\u8005\u7684\u6BD4\u4F8B\uFF0C\u4ECE 0 - 1 \u53D6\u503C\uFF0C</span>
  <span class="token comment">// 1 \u8868\u793A\u5B8C\u5168\u88AB\u5305\u542B</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">root</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#scrollArea&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5FC5\u987B\u662F\u76EE\u6807\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u901A\u8FC7<code>new IntersectionObserver</code>\u521B\u5EFA\u4E86\u89C2\u5BDF\u8005 <code>observer</code>\uFF0C\u4F20\u5165\u7684\u53C2\u6570 <code>callback</code> \u5728\u91CD\u53E0\u6BD4\u4F8B\u8D85\u8FC7 <code>threshold</code> \u65F6\u4F1A\u88AB\u6267\u884C\`</p><p>\u5173\u4E8E<code>callback</code>\u56DE\u8C03\u51FD\u6570\u5E38\u7528\u5C5E\u6027\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0A\u6BB5\u4EE3\u7801\u4E2D\u88AB\u7701\u7565\u7684 callback</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        entry<span class="token punctuation">.</span>time<span class="token punctuation">;</span>               <span class="token comment">// \u89E6\u53D1\u7684\u65F6\u95F4</span>
        entry<span class="token punctuation">.</span>rootBounds<span class="token punctuation">;</span>         <span class="token comment">// \u6839\u5143\u7D20\u7684\u4F4D\u7F6E\u77E9\u5F62\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E3A\u89C6\u7A97\u4F4D\u7F6E</span>
        entry<span class="token punctuation">.</span>boundingClientRect<span class="token punctuation">;</span> <span class="token comment">// \u88AB\u89C2\u5BDF\u8005\u7684\u4F4D\u7F6E\u4E3E\u884C</span>
        entry<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span>   <span class="token comment">// \u91CD\u53E0\u533A\u57DF\u7684\u4F4D\u7F6E\u77E9\u5F62</span>
        entry<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span>  <span class="token comment">// \u91CD\u53E0\u533A\u57DF\u5360\u88AB\u89C2\u5BDF\u8005\u9762\u79EF\u7684\u6BD4\u4F8B\uFF08\u88AB\u89C2\u5BDF\u8005\u4E0D\u662F\u77E9\u5F62\u65F6\u4E5F\u6309\u7167\u77E9\u5F62\u8BA1\u7B97\uFF09</span>
        entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span>             <span class="token comment">// \u88AB\u89C2\u5BDF\u8005</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u4F20\u5165\u88AB\u89C2\u5BDF\u8005" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u88AB\u89C2\u5BDF\u8005" aria-hidden="true">#</a> \u4F20\u5165\u88AB\u89C2\u5BDF\u8005</h4><p>\u901A\u8FC7 <code>observer.observe(target)</code> \u8FD9\u4E00\u884C\u4EE3\u7801\u5373\u53EF\u7B80\u5355\u7684\u6CE8\u518C\u88AB\u89C2\u5BDF\u8005</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.target&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E09\u3001\u6848\u4F8B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6848\u4F8B\u5206\u6790" aria-hidden="true">#</a> \u4E09\u3001\u6848\u4F8B\u5206\u6790</h3><p>\u5B9E\u73B0\uFF1A\u521B\u5EFA\u4E86\u4E00\u4E2A\u5341\u4E07\u4E2A\u8282\u70B9\u7684\u957F\u5217\u8868\uFF0C\u5F53\u8282\u70B9\u6EDA\u5165\u5230\u89C6\u7A97\u4E2D\u65F6\uFF0C\u80CC\u666F\u5C31\u4F1A\u4ECE\u7EA2\u8272\u53D8\u4E3A\u9EC4\u8272</p><p><code>Html</code>\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>css</code>\u6837\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.target</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F80<code>container</code>\u63D2\u51651000\u4E2A\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> $container <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u63D2\u5165 100000 \u4E2A &lt;div class=&quot;target&quot;&gt;&lt;/div&gt;</span>
<span class="token keyword">function</span> <span class="token function">createTargets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> htmlString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;div class=&quot;target&quot;&gt;&lt;/div&gt;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  $container<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>htmlString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u9996\u5148\u4F7F\u7528<code>getBoundingClientRect </code>\u65B9\u6CD5\u8FDB\u884C\u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u53EF\u89C6\u533A\u57DF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isInViewPort</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> viewWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
    <span class="token keyword">const</span> viewHeight <span class="token operator">=</span>
          window<span class="token punctuation">.</span>innerHeight <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> top<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> left <span class="token punctuation">}</span> <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> top <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;=</span> viewWidth <span class="token operator">&amp;&amp;</span> bottom <span class="token operator">&lt;=</span> viewHeight<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7136\u540E\u5F00\u59CB\u76D1\u542C<code>scroll</code>\u4E8B\u4EF6\uFF0C\u5224\u65AD\u9875\u9762\u4E0A\u54EA\u4E9B\u5143\u7D20\u5728\u53EF\u89C6\u533A\u57DF\u4E2D\uFF0C\u5982\u679C\u5728\u53EF\u89C6\u533A\u57DF\u4E2D\u5219\u5C06\u80CC\u666F\u989C\u8272\u8BBE\u7F6E\u4E3A<code>yellow</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;scroll !&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $targets<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isInViewPort</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">$</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u901A\u8FC7\u4E0A\u8FF0\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u770B\u5230\u53EF\u89C6\u533A\u57DF\u989C\u8272\u4F1A\u53D8\u6210\u9EC4\u8272\u4E86\uFF0C\u4F46\u662F\u53EF\u4EE5\u660E\u663E\u770B\u5230\u6709\u5361\u987F\u7684\u73B0\u8C61\uFF0C\u539F\u56E0\u5728\u4E8E\u6211\u4EEC\u7ED1\u5B9A\u4E86<code>scroll</code>\u4E8B\u4EF6\uFF0C<code>scroll</code>\u4E8B\u4EF6\u4F34\u968F\u4E86\u5927\u91CF\u7684\u8BA1\u7B97\uFF0C\u4F1A\u9020\u6210\u8D44\u6E90\u65B9\u9762\u7684\u6D6A\u8D39</p><p>\u4E0B\u9762\u901A\u8FC7<code>Intersection Observer</code>\u7684\u5F62\u5F0F\u540C\u6837\u5B9E\u73B0\u76F8\u540C\u7684\u529F\u80FD</p><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u89C2\u5BDF\u8005</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>getYellow<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>getYellow</code>\u56DE\u8C03\u51FD\u6570\u5B9E\u73B0\u5BF9\u80CC\u666F\u989C\u8272\u6539\u53D8\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getYellow</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;background-color&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6700\u540E\u4F20\u5165\u89C2\u5BDF\u8005\uFF0C\u5373<code>.target</code>\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$targets<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u529F\u80FD\u540C\u6837\u5B8C\u6210\uFF0C\u5E76\u4E14\u9875\u9762\u4E0D\u4F1A\u51FA\u73B0\u5361\u987F\u7684\u60C5\u51B5</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect</li><li>https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API</li></ul>`,69);function e(t,o){return p}var l=n(a,[["render",e],["__file","visible.html.vue"]]);export{l as default};
