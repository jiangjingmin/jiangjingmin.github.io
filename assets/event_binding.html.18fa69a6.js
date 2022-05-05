import{_ as n,c as s}from"./app.f060585c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-react\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-react\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B-\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1AReact\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\uFF1F</h1><p><img src="https://static.vue-js.com/e21f5560-d8fa-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5728<code>react</code>\u5E94\u7528\u4E2D\uFF0C\u4E8B\u4EF6\u540D\u90FD\u662F\u7528\u5C0F\u9A7C\u5CF0\u683C\u5F0F\u8FDB\u884C\u4E66\u5199\uFF0C\u4F8B\u5982<code>onclick</code>\u8981\u6539\u5199\u6210<code>onClick</code></p><p>\u6700\u7B80\u5355\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ShowAlert</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">showAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlert<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">show</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u65B9\u6CD5\u9700\u8981\u4F7F\u7528<code>{}</code>\u5305\u4F4F</p><p>\u4E0A\u8FF0\u7684\u4EE3\u7801\u770B\u4F3C\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u5F53\u5C06\u5904\u7406\u51FD\u6570\u8F93\u51FA\u4EE3\u7801\u6362\u6210<code>console.log(this)</code>\u7684\u65F6\u5019\uFF0C\u70B9\u51FB\u6309\u94AE\uFF0C\u5219\u4F1A\u53D1\u73B0\u63A7\u5236\u53F0\u8F93\u51FA<code>undefined</code></p><h2 id="\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u7ED1\u5B9A</h2><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u9762\u6B63\u786E\u8F93\u51FA<code>this</code>\u7684\u95EE\u9898\uFF0C\u5E38\u89C1\u7684\u7ED1\u5B9A\u65B9\u5F0F\u6709\u5982\u4E0B\uFF1A</p><ul><li>render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind</li><li>render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</li><li>constructor\u4E2Dbind</li><li>\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A</li></ul><h3 id="render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind" tabindex="-1"><a class="header-anchor" href="#render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind" aria-hidden="true">#</a> render\u65B9\u6CD5\u4E2D\u4F7F\u7528bind</h3><p>\u5982\u679C\u4F7F\u7528\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\uFF0C\u5728\u5176\u4E2D\u7ED9\u67D0\u4E2A\u7EC4\u4EF6/\u5143\u7D20\u4E00\u4E2A<code>onClick</code>\u5C5E\u6027\uFF0C\u5B83\u73B0\u5728\u5E76\u4F1A\u81EA\u5B9A\u7ED1\u5B9A\u5176<code>this</code>\u5230\u5F53\u524D\u7EC4\u4EF6\uFF0C\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u65B9\u6CD5\u662F\u5728\u4E8B\u4EF6\u51FD\u6570\u540E\u4F7F\u7528<code>.bind(this)</code>\u5C06<code>this</code>\u7ED1\u5B9A\u5230\u5F53\u524D\u7EC4\u4EF6\u4E2D</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this &gt; &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u5728\u7EC4\u4EF6\u6BCF\u6B21<code>render</code>\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u91CD\u65B0\u8FDB\u884C<code>bind</code>\u7684\u64CD\u4F5C\uFF0C\u5F71\u54CD\u6027\u80FD</p><h3 id="render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> render\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</h3><p>\u901A\u8FC7<code>ES6</code>\u7684\u4E0A\u4E0B\u6587\u6765\u5C06<code>this</code>\u7684\u6307\u5411\u7ED1\u5B9A\u7ED9\u5F53\u524D\u7EC4\u4EF6\uFF0C\u540C\u6837\u518D\u6BCF\u4E00\u6B21<code>render</code>\u7684\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u65B9\u6CD5\uFF0C\u5F71\u54CD\u6027\u80FD</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this &gt; &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="constructor\u4E2Dbind" tabindex="-1"><a class="header-anchor" href="#constructor\u4E2Dbind" aria-hidden="true">#</a> constructor\u4E2Dbind</h2><p>\u5728<code>constructor</code>\u4E2D\u9884\u5148<code>bind</code>\u5F53\u524D\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u907F\u514D\u5728<code>render</code>\u64CD\u4F5C\u4E2D\u91CD\u590D\u7ED1\u5B9A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this &gt; &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A" aria-hidden="true">#</a> \u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A</h3><p>\u8DDF\u4E0A\u8FF0\u65B9\u5F0F\u4E09\u4E00\u6837\uFF0C\u80FD\u591F\u907F\u514D\u5728<code>render</code>\u64CD\u4F5C\u4E2D\u91CD\u590D\u7ED1\u5B9A\uFF0C\u5B9E\u73B0\u4E5F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this &gt; &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u4E0A\u8FF0\u56DB\u79CD\u65B9\u6CD5\u7684\u65B9\u5F0F\uFF0C\u533A\u522B\u4E3B\u8981\u5982\u4E0B\uFF1A</p><ul><li>\u7F16\u5199\u65B9\u9762\uFF1A\u65B9\u5F0F\u4E00\u3001\u65B9\u5F0F\u4E8C\u5199\u6CD5\u7B80\u5355\uFF0C\u65B9\u5F0F\u4E09\u7684\u7F16\u5199\u8FC7\u4E8E\u5197\u6742</li><li>\u6027\u80FD\u65B9\u9762\uFF1A\u65B9\u5F0F\u4E00\u548C\u65B9\u5F0F\u4E8C\u5728\u6BCF\u6B21\u7EC4\u4EF6render\u7684\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u65B9\u6CD5\u5B9E\u4F8B\uFF0C\u6027\u80FD\u95EE\u9898\u6B20\u7F3A\u3002\u82E5\u8BE5\u51FD\u6570\u4F5C\u4E3A\u5C5E\u6027\u503C\u4F20\u7ED9\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u5BFC\u81F4\u989D\u5916\u7684\u6E32\u67D3\u3002\u800C\u65B9\u5F0F\u4E09\u3001\u65B9\u5F0F\u56DB\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u65B9\u6CD5\u5B9E\u4F8B</li></ul><p>\u7EFC\u5408\u4E0A\u8FF0\uFF0C\u65B9\u5F0F\u56DB\u662F\u6700\u4F18\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://segmentfault.com/a/1190000011317515</li><li>https://vue3js.cn/interview/</li></ul>`,30);function t(e,c){return p}var l=n(a,[["render",t],["__file","event_binding.html.vue"]]);export{l as default};
