import{_ as n,c as s}from"./app.f060585c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-react\u4E2D\u7684key\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-react\u4E2D\u7684key\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1AReact\u4E2D\u7684key\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h1><p><img src="https://static.vue-js.com/31677360-dd69-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u9996\u5148\uFF0C\u5148\u7ED9\u51FA<code>react</code>\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u5217\u8868\u6E32\u67D3\u7684\u4E00\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;def&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ghi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;jkl&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ListItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ListItem</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ListItem</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u7136\u540E\u5728\u8F93\u51FA\u5C31\u53EF\u4EE5\u770B\u5230<code>react</code>\u6240\u63D0\u793A\u7684\u8B66\u544A\u4FE1\u606F\uFF1A</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>Each child in a list should have a unique &quot;key&quot; prop.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6839\u636E\u610F\u601D\u5C31\u53EF\u4EE5\u5F97\u5230\u6E32\u67D3\u5217\u8868\u7684\u6BCF\u4E00\u4E2A\u5B50\u5143\u7D20\u90FD\u5E94\u8BE5\u9700\u8981\u4E00\u4E2A\u552F\u4E00\u7684<code>key</code>\u503C</p><p>\u5728\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528\u5217\u8868\u7684<code>id</code>\u5C5E\u6027\u4F5C\u4E3A<code>key</code>\u503C\u4EE5\u89E3\u51B3\u4E0A\u9762\u8FD9\u4E2A\u8B66\u544A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">List</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ListItem</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ListItem</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4E8C\u3001\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F5C\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u4F5C\u7528</h2><p>\u8DDF<code>Vue</code>\u4E00\u6837\uFF0C<code>React</code> \u4E5F\u5B58\u5728 <code>Diff</code>\u7B97\u6CD5\uFF0C\u800C\u5143\u7D20<code>key</code>\u5C5E\u6027\u7684\u4F5C\u7528\u662F\u7528\u4E8E\u5224\u65AD\u5143\u7D20\u662F\u65B0\u521B\u5EFA\u7684\u8FD8\u662F\u88AB\u79FB\u52A8\u7684\u5143\u7D20\uFF0C\u4ECE\u800C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5143\u7D20\u6E32\u67D3</p><p>\u56E0\u6B64<code>key</code>\u7684\u503C\u9700\u8981\u4E3A\u6BCF\u4E00\u4E2A\u5143\u7D20\u8D4B\u4E88\u4E00\u4E2A\u786E\u5B9A\u7684\u6807\u8BC6</p><p>\u5982\u679C\u5217\u8868\u6570\u636E\u6E32\u67D3\u4E2D\uFF0C\u5728\u6570\u636E\u540E\u9762\u63D2\u5165\u4E00\u6761\u6570\u636E\uFF0C<code>key</code>\u4F5C\u7528\u5E76\u4E0D\u5927\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">222</span><span class="token punctuation">,</span><span class="token number">333</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token function">insertMovie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newMovies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>numbers<span class="token punctuation">,</span> <span class="token number">444</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">movies</span><span class="token operator">:</span> newMovies
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u524D\u9762\u7684\u5143\u7D20\u5728<code>diff</code>\u7B97\u6CD5\u4E2D\uFF0C\u524D\u9762\u7684\u5143\u7D20\u7531\u4E8E\u662F\u5B8C\u5168\u76F8\u540C\u7684\uFF0C\u5E76\u4E0D\u4F1A\u4EA7\u751F\u5220\u9664\u521B\u5EFA\u64CD\u4F5C\uFF0C\u5728\u6700\u540E\u4E00\u4E2A\u6BD4\u8F83\u7684\u65F6\u5019\uFF0C\u5219\u9700\u8981\u63D2\u5165\u5230\u65B0\u7684<code>DOM</code>\u6811\u4E2D</p><p>\u56E0\u6B64\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5143\u7D20\u6709\u65E0<code>key</code>\u5C5E\u6027\u610F\u4E49\u5E76\u4E0D\u5927</p><p>\u4E0B\u9762\u518D\u6765\u770B\u770B\u5728\u524D\u9762\u63D2\u5165\u6570\u636E\u65F6\uFF0C\u4F7F\u7528<code>key</code>\u4E0E\u4E0D\u4F7F\u7528<code>key</code>\u7684\u533A\u522B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">insertMovie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newMovies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">000</span> <span class="token punctuation">,</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>numbers<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">movies</span><span class="token operator">:</span> newMovies
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5F53\u62E5\u6709<code>key</code>\u7684\u65F6\u5019\uFF0C<code>react</code>\u6839\u636E<code>key</code>\u5C5E\u6027\u5339\u914D\u539F\u6709\u6811\u4E0A\u7684\u5B50\u5143\u7D20\u4EE5\u53CA\u6700\u65B0\u6811\u4E0A\u7684\u5B50\u5143\u7D20\uFF0C\u50CF\u4E0A\u8FF0\u60C5\u51B5\u53EA\u9700\u8981\u5C06000\u5143\u7D20\u63D2\u5165\u5230\u6700\u524D\u9762\u4F4D\u7F6E</p><p>\u5F53\u6CA1\u6709<code>key</code>\u7684\u65F6\u5019\uFF0C\u6240\u6709\u7684<code>li</code>\u6807\u7B7E\u90FD\u9700\u8981\u8FDB\u884C\u4FEE\u6539</p><p>\u540C\u6837\uFF0C\u5E76\u4E0D\u662F\u62E5\u6709<code>key</code>\u503C\u4EE3\u8868\u6027\u80FD\u8D8A\u9AD8\uFF0C\u5982\u679C\u8BF4\u53EA\u662F\u6587\u672C\u5185\u5BB9\u6539\u53D8\u4E86\uFF0C\u4E0D\u5199<code>key</code>\u53CD\u800C\u6027\u80FD\u548C\u6548\u7387\u66F4\u9AD8</p><p>\u4E3B\u8981\u662F\u56E0\u4E3A\u4E0D\u5199<code>key</code>\u662F\u5C06\u6240\u6709\u7684\u6587\u672C\u5185\u5BB9\u66FF\u6362\u4E00\u4E0B\uFF0C\u8282\u70B9\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316</p><p>\u800C\u5199<code>key</code>\u5219\u6D89\u53CA\u5230\u4E86\u8282\u70B9\u7684\u589E\u548C\u5220\uFF0C\u53D1\u73B0\u65E7<code>key</code>\u4E0D\u5B58\u5728\u4E86\uFF0C\u5219\u5C06\u5176\u5220\u9664\uFF0C\u65B0<code>key</code>\u5728\u4E4B\u524D\u6CA1\u6709\uFF0C\u5219\u63D2\u5165\uFF0C\u8FD9\u5C31\u589E\u52A0\u6027\u80FD\u7684\u5F00\u9500</p><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u826F\u597D\u4F7F\u7528<code>key</code>\u5C5E\u6027\u662F\u6027\u80FD\u4F18\u5316\u7684\u975E\u5E38\u5173\u952E\u7684\u4E00\u6B65\uFF0C\u6CE8\u610F\u4E8B\u9879\u4E3A\uFF1A</p><ul><li><p>key \u5E94\u8BE5\u662F\u552F\u4E00\u7684</p></li><li><p>key\u4E0D\u8981\u4F7F\u7528\u968F\u673A\u503C\uFF08\u968F\u673A\u6570\u5728\u4E0B\u4E00\u6B21 render \u65F6\uFF0C\u4F1A\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u6570\u5B57\uFF09</p></li><li><p>\u4F7F\u7528 index \u4F5C\u4E3A key\u503C\uFF0C\u5BF9\u6027\u80FD\u6CA1\u6709\u4F18\u5316</p></li></ul><p><code>react</code>\u5224\u65AD<code>key</code>\u7684\u6D41\u7A0B\u5177\u4F53\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/3b9afe10-dd69-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://zh-hans.reactjs.org/docs/lists-and-keys.html#gatsby-focus-wrapper</li><li>https://segmentfault.com/a/1190000017511836</li></ul>`,31);function t(e,o){return p}var l=n(a,[["render",t],["__file","key.html.vue"]]);export{l as default};
