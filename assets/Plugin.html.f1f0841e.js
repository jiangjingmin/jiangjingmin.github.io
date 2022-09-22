import{_ as n,e as s}from"./app.26a788a0.js";const a={},p=s(`<h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h1><p><img src="https://static.vue-js.com/8d3978a0-a7c2-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>Plugin</code>\uFF08Plug-in\uFF09\u662F\u4E00\u79CD\u8BA1\u7B97\u673A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u548C\u4E3B\u5E94\u7528\u7A0B\u5E8F\u4E92\u76F8\u4EA4\u4E92\uFF0C\u4EE5\u63D0\u4F9B\u7279\u5B9A\u7684\u529F\u80FD</p><p>\u662F\u4E00\u79CD\u9075\u5FAA\u4E00\u5B9A\u89C4\u8303\u7684\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u7F16\u5199\u51FA\u6765\u7684\u7A0B\u5E8F\uFF0C\u53EA\u80FD\u8FD0\u884C\u5728\u7A0B\u5E8F\u89C4\u5B9A\u7684\u7CFB\u7EDF\u4E0B\uFF0C\u56E0\u4E3A\u5176\u9700\u8981\u8C03\u7528\u539F\u7EAF\u51C0\u7CFB\u7EDF\u63D0\u4F9B\u7684\u51FD\u6570\u5E93\u6216\u8005\u6570\u636E</p><p><code>webpack</code>\u4E2D\u7684<code>plugin</code>\u4E5F\u662F\u5982\u6B64\uFF0C<code>plugin</code>\u8D4B\u4E88\u5176\u5404\u79CD\u7075\u6D3B\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u6253\u5305\u4F18\u5316\u3001\u8D44\u6E90\u7BA1\u7406\u3001\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7B49\uFF0C\u5B83\u4EEC\u4F1A\u8FD0\u884C\u5728 <code>webpack</code> \u7684\u4E0D\u540C\u9636\u6BB5\uFF08\u94A9\u5B50 / \u751F\u547D\u5468\u671F\uFF09\uFF0C\u8D2F\u7A7F\u4E86<code>webpack</code>\u6574\u4E2A\u7F16\u8BD1\u5468\u671F</p><p><img src="https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u76EE\u7684\u5728\u4E8E\u89E3\u51B3<code>loader</code> \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B</p><h3 id="\u914D\u7F6E\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65B9\u5F0F" aria-hidden="true">#</a> \u914D\u7F6E\u65B9\u5F0F</h3><p>\u8FD9\u91CC\u8BB2\u8FF0\u6587\u4EF6\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u4E00\u822C\u60C5\u51B5\uFF0C\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5BFC\u51FA\u5BF9\u8C61\u4E2D<code>plugins</code>\u5C5E\u6027\u4F20\u5165<code>new</code>\u5B9E\u4F8B\u5BF9\u8C61\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901A\u8FC7 npm \u5B89\u88C5</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBF\u95EE\u5185\u7F6E\u7684\u63D2\u4EF6</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4E8C\u3001\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7279\u6027" aria-hidden="true">#</a> \u4E8C\u3001\u7279\u6027</h2><p>\u5176\u672C\u8D28\u662F\u4E00\u4E2A\u5177\u6709<code>apply</code>\u65B9\u6CD5<code>javascript</code>\u5BF9\u8C61</p><p><code>apply</code> \u65B9\u6CD5\u4F1A\u88AB <code>webpack compiler </code>\u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8BBF\u95EE <code>compiler </code>\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> pluginName <span class="token operator">=</span> <span class="token string">&#39;ConsoleLogOnBuildWebpackPlugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConsoleLogOnBuildWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>pluginName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;webpack \u6784\u5EFA\u8FC7\u7A0B\u5F00\u59CB\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ConsoleLogOnBuildWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>compiler hook</code> \u7684 <code>tap </code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E94\u662F\u9A7C\u5CF0\u5F0F\u547D\u540D\u7684\u63D2\u4EF6\u540D\u79F0</p><p>\u5173\u4E8E\u6574\u4E2A\u7F16\u8BD1\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u6709\u5982\u4E0B\uFF1A</p><ul><li>entry-option \uFF1A\u521D\u59CB\u5316 option</li><li>run</li><li>compile\uFF1A \u771F\u6B63\u5F00\u59CB\u7684\u7F16\u8BD1\uFF0C\u5728\u521B\u5EFA compilation \u5BF9\u8C61\u4E4B\u524D</li><li>compilation \uFF1A\u751F\u6210\u597D\u4E86 compilation \u5BF9\u8C61</li><li>make \u4ECE entry \u5F00\u59CB\u9012\u5F52\u5206\u6790\u4F9D\u8D56\uFF0C\u51C6\u5907\u5BF9\u6BCF\u4E2A\u6A21\u5757\u8FDB\u884C build</li><li>after-compile\uFF1A \u7F16\u8BD1 build \u8FC7\u7A0B\u7ED3\u675F</li><li>emit \uFF1A\u5728\u5C06\u5185\u5B58\u4E2D assets \u5185\u5BB9\u5199\u5230\u78C1\u76D8\u6587\u4EF6\u5939\u4E4B\u524D</li><li>after-emit \uFF1A\u5728\u5C06\u5185\u5B58\u4E2D assets \u5185\u5BB9\u5199\u5230\u78C1\u76D8\u6587\u4EF6\u5939\u4E4B\u540E</li><li>done\uFF1A \u5B8C\u6210\u6240\u6709\u7684\u7F16\u8BD1\u8FC7\u7A0B</li><li>failed\uFF1A \u7F16\u8BD1\u5931\u8D25\u7684\u65F6\u5019</li></ul><h2 id="\u4E09\u3001\u5E38\u89C1\u7684plugin" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E38\u89C1\u7684plugin" aria-hidden="true">#</a> \u4E09\u3001\u5E38\u89C1\u7684Plugin</h2><p>\u5E38\u89C1\u7684<code>plugin</code>\u6709\u5982\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/bd749400-a7c2-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4E0B\u9762\u4ECB\u7ECD\u51E0\u4E2A\u5E38\u7528\u7684\u63D2\u4EF6\u7528\u6CD5\uFF1A</p><h3 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> HtmlWebpackPlugin</h3><p>\u5728\u6253\u5305\u7ED3\u675F\u540E\uFF0C\u2F83\u52A8\u751F\u6210\u2F00\u4E2A <code>html</code> \u2F42\u6587\u4EF6\uFF0C\u5E76\u628A\u6253\u5305\u751F\u6210\u7684<code> js</code> \u6A21\u5757\u5F15\u2F0A\u5230\u8BE5 <code>html</code> \u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;My App&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;app.html&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/html/index.html&quot;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span> 
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--./src/html/index.html--&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%=htmlWebpackPlugin.options.title%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>html-webpack-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5728 <code>html</code> \u6A21\u677F\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>&lt;%=htmlWebpackPlugin.options.XXX%&gt;</code> \u7684\u65B9\u5F0F\u83B7\u53D6\u914D\u7F6E\u7684\u503C</p><p>\u66F4\u591A\u7684\u914D\u7F6E\u53EF\u4EE5\u81EA\u5BFB\u67E5\u627E</p><h3 id="clean-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#clean-webpack-plugin" aria-hidden="true">#</a> clean-webpack-plugin</h3><p>\u5220\u9664\uFF08\u6E05\u7406\uFF09\u6784\u5EFA\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev clean-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3><p>\u63D0\u53D6 <code>CSS</code> \u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
       <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;sass-loader&#39;</span>
        <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="defineplugin" tabindex="-1"><a class="header-anchor" href="#defineplugin" aria-hidden="true">#</a> DefinePlugin</h3><p>\u5141\u8BB8\u5728\u7F16\u8BD1\u65F6\u521B\u5EFA\u914D\u7F6E\u7684\u5168\u5C40\u5BF9\u8C61\uFF0C\u662F\u4E00\u4E2A<code>webpack</code>\u5185\u7F6E\u7684\u63D2\u4EF6\uFF0C\u4E0D\u9700\u8981\u5B89\u88C5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> DefinePlugun <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token constant">BASE_URL</span><span class="token operator">:</span><span class="token string">&#39;&quot;./&quot;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u65F6\u5019\u7F16\u8BD1<code>template</code>\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u5C31\u80FD\u901A\u8FC7\u4E0B\u8FF0\u5F62\u5F0F\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL%&gt;favicon.ico&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="copy-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#copy-webpack-plugin" aria-hidden="true">#</a> copy-webpack-plugin</h3><p>\u590D\u5236\u6587\u4EF6\u6216\u76EE\u5F55\u5230\u6267\u884C\u533A\u57DF\uFF0C\u5982<code>vue</code>\u7684\u6253\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E00\u4E9B\u6587\u4EF6\u653E\u5230<code>public</code>\u7684\u76EE\u5F55\u4E0B\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u76EE\u5F55\u4F1A\u88AB\u590D\u5236\u5230<code>dist</code>\u6587\u4EF6\u5939\u4E2D</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install copy-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">parrerns</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">globOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">ignore</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;**/index.html&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u590D\u5236\u7684\u89C4\u5219\u5728<code>patterns</code>\u5C5E\u6027\u4E2D\u8BBE\u7F6E\uFF1A</p><ul><li><p>from\uFF1A\u8BBE\u7F6E\u4ECE\u54EA\u4E00\u4E2A\u6E90\u4E2D\u5F00\u59CB\u590D\u5236</p></li><li><p>to\uFF1A\u590D\u5236\u5230\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u7701\u7565\uFF0C\u4F1A\u9ED8\u8BA4\u590D\u5236\u5230\u6253\u5305\u7684\u76EE\u5F55\u4E0B</p></li><li><p>globOptions\uFF1A\u8BBE\u7F6E\u4E00\u4E9B\u989D\u5916\u7684\u9009\u9879\uFF0C\u5176\u4E2D\u53EF\u4EE5\u7F16\u5199\u9700\u8981\u5FFD\u7565\u7684\u6587\u4EF6</p></li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://webpack.docschina.org/concepts/plugins/</li><li>https://baike.baidu.com/item/Plugin</li><li>https://segmentfault.com/a/1190000018695134</li><li>https://vue3js.cn/interview</li></ul>`,50);function e(t,c){return p}var o=n(a,[["render",e],["__file","Plugin.html.vue"]]);export{o as default};
