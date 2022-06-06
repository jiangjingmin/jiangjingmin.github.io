import{_ as n,c as s}from"./app.b778d435.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4webpack\u7684\u6784\u5EFA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4webpack\u7684\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4webpack\u7684\u6784\u5EFA\u6D41\u7A0B?</h1><p><img src="https://static.vue-js.com/96cf6840-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u8FD0\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u8FD0\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u4E00\u3001\u8FD0\u884C\u6D41\u7A0B</h2><p><code>webpack</code> \u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u5B83\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5C31\u662F\u5C06\u5404\u4E2A\u63D2\u4EF6\u4E32\u8054\u8D77\u6765</p><p>\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u5E7F\u64AD\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u53EA\u9700\u8981\u76D1\u542C\u5B83\u6240\u5173\u5FC3\u7684\u4E8B\u4EF6\uFF0C\u5C31\u80FD\u52A0\u5165\u5230\u8FD9\u6761<code>webpack</code>\u673A\u5236\u4E2D\uFF0C\u53BB\u6539\u53D8<code>webpack</code>\u7684\u8FD0\u4F5C\uFF0C\u4F7F\u5F97\u6574\u4E2A\u7CFB\u7EDF\u6269\u5C55\u6027\u826F\u597D</p><p>\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u4E09\u5927\u6B65\u9AA4\uFF1A</p><ul><li>\u521D\u59CB\u5316\u6D41\u7A0B\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C <code>Shell</code> \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5E76\u521D\u59CB\u5316\u9700\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\u548C\u914D\u7F6E\u63D2\u4EF6\u7B49\u6267\u884C\u73AF\u5883\u6240\u9700\u8981\u7684\u53C2\u6570</li><li>\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B\uFF1A\u4ECE Entry \u53D1\u51FA\uFF0C\u9488\u5BF9\u6BCF\u4E2A Module \u4E32\u884C\u8C03\u7528\u5BF9\u5E94\u7684 Loader \u53BB\u7FFB\u8BD1\u6587\u4EF6\u5185\u5BB9\uFF0C\u518D\u627E\u5230\u8BE5 Module \u4F9D\u8D56\u7684 Module\uFF0C\u9012\u5F52\u5730\u8FDB\u884C\u7F16\u8BD1\u5904\u7406</li><li>\u8F93\u51FA\u6D41\u7A0B\uFF1A\u5BF9\u7F16\u8BD1\u540E\u7684 Module \u7EC4\u5408\u6210 Chunk\uFF0C\u628A Chunk \u8F6C\u6362\u6210\u6587\u4EF6\uFF0C\u8F93\u51FA\u5230\u6587\u4EF6\u7CFB\u7EDF</li></ul><p><img src="https://static.vue-js.com/b566d400-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="\u521D\u59CB\u5316\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6D41\u7A0B" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6D41\u7A0B</h3><p>\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C <code>Shell</code> \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570</p><p>\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4E0B\u4E3A<code>webpack.config.js</code>\uFF0C\u4E5F\u6216\u8005\u901A\u8FC7\u547D\u4EE4\u7684\u5F62\u5F0F\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u7528\u4E8E\u6FC0\u6D3B<code>webpack</code>\u7684\u52A0\u8F7D\u9879\u548C\u63D2\u4EF6</p><p>\u5173\u4E8E\u6587\u4EF6\u914D\u7F6E\u5185\u5BB9\u5206\u6790\uFF0C\u5982\u4E0B\u6CE8\u91CA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> node_modules <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> pathToReact <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>node_modules<span class="token punctuation">,</span> <span class="token string">&#39;react/dist/react.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3\u6587\u4EF6\uFF0C\u662F\u6A21\u5757\u6784\u5EFA\u7684\u8D77\u70B9\uFF0C\u540C\u65F6\u6BCF\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5BF9\u5E94\u6700\u540E\u751F\u6210\u7684\u4E00\u4E2A chunk\u3002</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span>\uFF0C
  <span class="token comment">// \u6587\u4EF6\u8DEF\u5F84\u6307\u5411(\u53EF\u52A0\u5FEB\u6253\u5305\u8FC7\u7A0B)\u3002</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;react&#39;</span><span class="token operator">:</span> pathToReact
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u751F\u6210\u6587\u4EF6\uFF0C\u662F\u6A21\u5757\u6784\u5EFA\u7684\u7EC8\u70B9\uFF0C\u5305\u62EC\u8F93\u51FA\u6587\u4EF6\u4E0E\u8F93\u51FA\u8DEF\u5F84\u3002</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u91CC\u914D\u7F6E\u4E86\u5904\u7406\u5404\u6A21\u5757\u7684 loader \uFF0C\u5305\u62EC css \u9884\u5904\u7406 loader \uFF0Ces6 \u7F16\u8BD1 loader\uFF0C\u56FE\u7247\u5904\u7406 loader\u3002</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;es2015&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">noParse</span><span class="token operator">:</span> <span class="token punctuation">[</span>pathToReact<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// webpack \u5404\u63D2\u4EF6\u5BF9\u8C61\uFF0C\u5728 webpack \u7684\u4E8B\u4EF6\u6D41\u4E2D\u6267\u884C\u5BF9\u5E94\u7684\u65B9\u6CD5\u3002</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><code>webpack</code> \u5C06 <code>webpack.config.js</code> \u4E2D\u7684\u5404\u4E2A\u914D\u7F6E\u9879\u62F7\u8D1D\u5230 <code>options</code> \u5BF9\u8C61\u4E2D\uFF0C\u5E76\u52A0\u8F7D\u7528\u6237\u914D\u7F6E\u7684 <code> plugins</code></p><p>\u5B8C\u6210\u4E0A\u8FF0\u6B65\u9AA4\u4E4B\u540E\uFF0C\u5219\u5F00\u59CB\u521D\u59CB\u5316<code>Compiler</code>\u7F16\u8BD1\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u638C\u63A7\u8005<code>webpack</code>\u58F0\u660E\u5468\u671F\uFF0C\u4E0D\u6267\u884C\u5177\u4F53\u7684\u4EFB\u52A1\uFF0C\u53EA\u662F\u8FDB\u884C\u4E00\u4E9B\u8C03\u5EA6\u5DE5\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token keyword">extends</span> <span class="token class-name">Tapable</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">beforeCompile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;params&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">compile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;params&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">afterCompile</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compilation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">make</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncParallelHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compilation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">entryOption</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncBailHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;context&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;entry&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token comment">// \u5B9A\u4E49\u4E86\u5F88\u591A\u4E0D\u540C\u7C7B\u578B\u7684\u94A9\u5B50</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">webpack</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span><span class="token comment">// \u68C0\u67E5options,\u82E5watch\u5B57\u6BB5\u4E3Atrue,\u5219\u5F00\u542Fwatch\u7EBF\u7A0B</span>
  <span class="token keyword">return</span> compiler<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><code>Compiler</code> \u5BF9\u8C61\u7EE7\u627F\u81EA <code>Tapable</code>\uFF0C\u521D\u59CB\u5316\u65F6\u5B9A\u4E49\u4E86\u5F88\u591A\u94A9\u5B50\u51FD\u6570</p><h3 id="\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a> \u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B</h3><p>\u6839\u636E\u914D\u7F6E\u4E2D\u7684 <code>entry</code> \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/file.js&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u521D\u59CB\u5316\u5B8C\u6210\u540E\u4F1A\u8C03\u7528<code>Compiler</code>\u7684<code>run</code>\u6765\u771F\u6B63\u542F\u52A8<code>webpack</code>\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B\uFF0C\u4E3B\u8981\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ul><li><code>compile</code> \u5F00\u59CB\u7F16\u8BD1</li><li><code>make</code> \u4ECE\u5165\u53E3\u70B9\u5206\u6790\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u521B\u5EFA\u8FD9\u4E9B\u6A21\u5757\u5BF9\u8C61</li><li><code>build-module</code> \u6784\u5EFA\u6A21\u5757</li><li><code>seal</code> \u5C01\u88C5\u6784\u5EFA\u7ED3\u679C</li><li><code>emit</code> \u628A\u5404\u4E2Achunk\u8F93\u51FA\u5230\u7ED3\u679C\u6587\u4EF6</li></ul><h4 id="compile-\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#compile-\u7F16\u8BD1" aria-hidden="true">#</a> compile \u7F16\u8BD1</h4><p>\u6267\u884C\u4E86<code>run</code>\u65B9\u6CD5\u540E\uFF0C\u9996\u5148\u4F1A\u89E6\u53D1<code>compile</code>\uFF0C\u4E3B\u8981\u662F\u6784\u5EFA\u4E00\u4E2A<code>Compilation</code>\u5BF9\u8C61</p><p>\u8BE5\u5BF9\u8C61\u662F\u7F16\u8BD1\u9636\u6BB5\u7684\u4E3B\u8981\u6267\u884C\u8005\uFF0C\u4E3B\u8981\u4F1A\u4F9D\u6B21\u4E0B\u8FF0\u6D41\u7A0B\uFF1A\u6267\u884C\u6A21\u5757\u521B\u5EFA\u3001\u4F9D\u8D56\u6536\u96C6\u3001\u5206\u5757\u3001\u6253\u5305\u7B49\u4E3B\u8981\u4EFB\u52A1\u7684\u5BF9\u8C61</p><h4 id="make-\u7F16\u8BD1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#make-\u7F16\u8BD1\u6A21\u5757" aria-hidden="true">#</a> make \u7F16\u8BD1\u6A21\u5757</h4><p>\u5F53\u5B8C\u6210\u4E86\u4E0A\u8FF0\u7684<code>compilation</code>\u5BF9\u8C61\u540E\uFF0C\u5C31\u5F00\u59CB\u4ECE<code>Entry</code>\u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u8BFB\u53D6\uFF0C\u4E3B\u8981\u6267\u884C<code>_addModuleChain()</code>\u51FD\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">_addModuleChain</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> dependency<span class="token punctuation">,</span> onModule<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token comment">// \u6839\u636E\u4F9D\u8D56\u67E5\u627E\u5BF9\u5E94\u7684\u5DE5\u5382\u51FD\u6570</span>
   <span class="token keyword">const</span> Dep <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>DepConstructor<span class="token punctuation">}</span></span> */</span> <span class="token punctuation">(</span>dependency<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> moduleFactory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dependencyFactories<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>Dep<span class="token punctuation">)</span><span class="token punctuation">;</span>
   
   <span class="token comment">// \u8C03\u7528\u5DE5\u5382\u51FD\u6570NormalModuleFactory\u7684create\u6765\u751F\u6210\u4E00\u4E2A\u7A7A\u7684NormalModule\u5BF9\u8C61</span>
   moduleFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">dependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span>dependency<span class="token punctuation">]</span>
       <span class="token operator">...</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token operator">...</span>
       <span class="token keyword">const</span> <span class="token function-variable function">afterBuild</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">processModuleDependencies</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> module<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
       
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildModule</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
           <span class="token operator">...</span>
           <span class="token function">afterBuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p><code>_addModuleChain</code>\u4E2D\u63A5\u6536\u53C2\u6570<code>dependency</code>\u4F20\u5165\u7684\u5165\u53E3\u4F9D\u8D56\uFF0C\u4F7F\u7528\u5BF9\u5E94\u7684\u5DE5\u5382\u51FD\u6570<code>NormalModuleFactory.create</code>\u65B9\u6CD5\u751F\u6210\u4E00\u4E2A\u7A7A\u7684<code>module</code>\u5BF9\u8C61</p><p>\u56DE\u8C03\u4E2D\u4F1A\u628A\u6B64<code>module</code>\u5B58\u5165<code>compilation.modules</code>\u5BF9\u8C61\u548C<code>dependencies.module</code>\u5BF9\u8C61\u4E2D\uFF0C\u7531\u4E8E\u662F\u5165\u53E3\u6587\u4EF6\uFF0C\u4E5F\u4F1A\u5B58\u5165<code>compilation.entries</code>\u4E2D</p><p>\u968F\u540E\u6267\u884C<code>buildModule</code>\u8FDB\u5165\u771F\u6B63\u7684\u6784\u5EFA\u6A21\u5757<code>module</code>\u5185\u5BB9\u7684\u8FC7\u7A0B</p><h4 id="build-module-\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#build-module-\u5B8C\u6210\u6A21\u5757\u7F16\u8BD1" aria-hidden="true">#</a> build module \u5B8C\u6210\u6A21\u5757\u7F16\u8BD1</h4><p>\u8FD9\u91CC\u4E3B\u8981\u8C03\u7528\u914D\u7F6E\u7684<code>loaders</code>\uFF0C\u5C06\u6211\u4EEC\u7684\u6A21\u5757\u8F6C\u6210\u6807\u51C6\u7684<code>JS</code>\u6A21\u5757</p><p>\u5728\u7528<code> Loader</code> \u5BF9\u4E00\u4E2A\u6A21\u5757\u8F6C\u6362\u5B8C\u540E\uFF0C\u4F7F\u7528 <code>acorn</code> \u89E3\u6790\u8F6C\u6362\u540E\u7684\u5185\u5BB9\uFF0C\u8F93\u51FA\u5BF9\u5E94\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08<code>AST</code>\uFF09\uFF0C\u4EE5\u65B9\u4FBF <code>Webpack </code>\u540E\u9762\u5BF9\u4EE3\u7801\u7684\u5206\u6790</p><p>\u4ECE\u914D\u7F6E\u7684\u5165\u53E3\u6A21\u5757\u5F00\u59CB\uFF0C\u5206\u6790\u5176 <code>AST</code>\uFF0C\u5F53\u9047\u5230<code>require</code>\u7B49\u5BFC\u5165\u5176\u5B83\u6A21\u5757\u8BED\u53E5\u65F6\uFF0C\u4FBF\u5C06\u5176\u52A0\u5165\u5230\u4F9D\u8D56\u7684\u6A21\u5757\u5217\u8868\uFF0C\u540C\u65F6\u5BF9\u65B0\u627E\u51FA\u7684\u4F9D\u8D56\u6A21\u5757\u9012\u5F52\u5206\u6790\uFF0C\u6700\u7EC8\u641E\u6E05\u6240\u6709\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB</p><h3 id="\u8F93\u51FA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u6D41\u7A0B" aria-hidden="true">#</a> \u8F93\u51FA\u6D41\u7A0B</h3><h4 id="seal-\u8F93\u51FA\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#seal-\u8F93\u51FA\u8D44\u6E90" aria-hidden="true">#</a> seal \u8F93\u51FA\u8D44\u6E90</h4><p><code>seal</code>\u65B9\u6CD5\u4E3B\u8981\u662F\u8981\u751F\u6210<code>chunks</code>\uFF0C\u5BF9<code>chunks</code>\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u4F18\u5316\u64CD\u4F5C\uFF0C\u5E76\u751F\u6210\u8981\u8F93\u51FA\u7684\u4EE3\u7801</p><p><code>webpack</code> \u4E2D\u7684 <code>chunk</code> \uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u914D\u7F6E\u5728 <code>entry</code> \u4E2D\u7684\u6A21\u5757\uFF0C\u6216\u8005\u662F\u52A8\u6001\u5F15\u5165\u7684\u6A21\u5757</p><p>\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 <code>Chunk</code>\uFF0C\u518D\u628A\u6BCF\u4E2A <code>Chunk</code> \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868</p><h4 id="emit-\u8F93\u51FA\u5B8C\u6210" tabindex="-1"><a class="header-anchor" href="#emit-\u8F93\u51FA\u5B8C\u6210" aria-hidden="true">#</a> emit \u8F93\u51FA\u5B8C\u6210</h4><p>\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728 <code>Compiler</code> \u5F00\u59CB\u751F\u6210\u6587\u4EF6\u524D\uFF0C\u94A9\u5B50 <code>emit</code> \u4F1A\u88AB\u6267\u884C\uFF0C\u8FD9\u662F\u6211\u4EEC\u4FEE\u6539\u6700\u7EC8\u6587\u4EF6\u7684\u6700\u540E\u4E00\u4E2A\u673A\u4F1A</p><p>\u4ECE\u800C<code>webpack</code>\u6574\u4E2A\u6253\u5305\u8FC7\u7A0B\u5219\u7ED3\u675F\u4E86</p><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p><img src="https://static.vue-js.com/d77fc560-a658-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://github.com/Cosen95/blog/issues/48</li><li>https://developer.aliyun.com/article/61047</li></ul>`,50);function e(t,o){return p}var l=n(a,[["render",e],["__file","build_process.html.vue"]]);export{l as default};
