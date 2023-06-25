import{_ as p,r as t,o,c as l,a as n,b as a,F as r,e as c,d as e}from"./app.cec2e512.js";var i="/assets/webpack_00.55fdaeef.png";const u={},k=c('<h1 id="webpack-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#webpack-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> Webpack \u6027\u80FD\u4F18\u5316</h1><p><img src="'+i+`" alt="00"></p><h2 id="\u4E00\u3001\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u80CC\u666F" aria-hidden="true">#</a> \u4E00\u3001\u80CC\u666F</h2><p>\u968F\u7740\u524D\u7AEF\u7684\u9879\u76EE\u9010\u6E10\u6269\u5927\uFF0C\u5FC5\u7136\u4F1A\u5E26\u6765\u7684\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u6027\u80FD</p><p>\u5C24\u5176\u5728\u5927\u578B\u590D\u6742\u7684\u9879\u76EE\u4E2D\uFF0C\u524D\u7AEF\u4E1A\u52A1\u53EF\u80FD\u56E0\u4E3A\u4E00\u4E2A\u5C0F\u5C0F\u7684\u6570\u636E\u4F9D\u8D56\uFF0C\u5BFC\u81F4\u6574\u4E2A\u9875\u9762\u5361\u987F\u751A\u81F3\u5954\u6E83</p><p>\u4E00\u822C\u9879\u76EE\u5728\u5B8C\u6210\u540E\uFF0C\u4F1A\u901A\u8FC7<code>webpack</code>\u8FDB\u884C\u6253\u5305\uFF0C\u5229\u7528<code>webpack</code>\u5BF9\u524D\u7AEF\u9879\u76EE\u6027\u80FD\u4F18\u5316\u662F\u4E00\u4E2A\u5341\u5206\u91CD\u8981\u7684\u73AF\u8282</p><h2 id="\u4E8C\u3001\u5982\u4F55\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u4F18\u5316" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u4F18\u5316</h2><p>\u901A\u8FC7<code>webpack</code>\u4F18\u5316\u524D\u7AEF\u7684\u624B\u6BB5\u6709\uFF1A</p><ul><li>JS\u4EE3\u7801\u538B\u7F29</li><li>CSS\u4EE3\u7801\u538B\u7F29</li><li>Html\u6587\u4EF6\u4EE3\u7801\u538B\u7F29</li><li>\u6587\u4EF6\u5927\u5C0F\u538B\u7F29</li><li>\u56FE\u7247\u538B\u7F29</li><li>Tree Shaking</li><li>\u4EE3\u7801\u5206\u79BB</li><li>\u5185\u8054 chunk</li></ul><p>// TODO: \u5F85\u7814\u7A76\uFF1Awebpack \u6253\u5305\u4F53\u79EF\u4F18\u5316</p><ul><li>\u63D0\u53D6\u516C\u5171\u8D44\u6E90</li><li>scope-hoisting</li><li>\u52A8\u6001Polyfill</li></ul><p>\u6700\u96BE\u914D\u7F6E\u7684\u6709\u54EA\u4E9B\uFF1F\u591A\u5165\u53E3\u6253\u5305\u3001loader\u914D\u7F6E\u3001external\u3001tree-shaking\u7B49\u8BF4\u51E0\u4E2A</p><h3 id="js\u4EE3\u7801\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#js\u4EE3\u7801\u538B\u7F29" aria-hidden="true">#</a> JS\u4EE3\u7801\u538B\u7F29</h3><p><code>terser</code>\u662F\u4E00\u4E2A<code>JavaScript</code>\u7684\u89E3\u91CA\u3001\u7EDE\u8089\u673A\u3001\u538B\u7F29\u673A\u7684\u5DE5\u5177\u96C6\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u538B\u7F29\u3001\u4E11\u5316\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u8BA9<code>bundle</code>\u66F4\u5C0F</p><p>\u5728<code>production</code>\u6A21\u5F0F\u4E0B\uFF0C<code>webpack</code> \u9ED8\u8BA4\u5C31\u662F\u4F7F\u7528 <code>TerserPlugin</code> \u6765\u5904\u7406\u6211\u4EEC\u7684\u4EE3\u7801\u7684\u3002\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u914D\u7F6E\u5B83\uFF0C\u914D\u7F6E\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u7535\u8111cpu\u6838\u6570-1</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5C5E\u6027\u4ECB\u7ECD\u5982\u4E0B\uFF1A</p><ul><li>extractComments\uFF1A\u9ED8\u8BA4\u503C\u4E3Atrue\uFF0C\u8868\u793A\u4F1A\u5C06\u6CE8\u91CA\u62BD\u53D6\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E2D\uFF0C\u5F00\u53D1\u9636\u6BB5\uFF0C\u6211\u4EEC\u53EF\u8BBE\u7F6E\u4E3A false \uFF0C\u4E0D\u4FDD\u7559\u6CE8\u91CA</li><li>parallel\uFF1A\u4F7F\u7528\u591A\u8FDB\u7A0B\u5E76\u53D1\u8FD0\u884C\u63D0\u9AD8\u6784\u5EFA\u7684\u901F\u5EA6\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue\uFF0C\u5E76\u53D1\u8FD0\u884C\u7684\u9ED8\u8BA4\u6570\u91CF\uFF1A os.cpus().length - 1</li><li>terserOptions\uFF1A\u8BBE\u7F6E\u6211\u4EEC\u7684terser\u76F8\u5173\u7684\u914D\u7F6E\uFF1A</li><li>compress\uFF1A\u8BBE\u7F6E\u538B\u7F29\u76F8\u5173\u7684\u9009\u9879\uFF0Cmangle\uFF1A\u8BBE\u7F6E\u4E11\u5316\u76F8\u5173\u7684\u9009\u9879\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3Atrue</li><li>mangle\uFF1A\u8BBE\u7F6E\u4E11\u5316\u76F8\u5173\u7684\u9009\u9879\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u4E3Atrue</li><li>toplevel\uFF1A\u5E95\u5C42\u53D8\u91CF\u662F\u5426\u8FDB\u884C\u8F6C\u6362</li><li>keep_classnames\uFF1A\u4FDD\u7559\u7C7B\u7684\u540D\u79F0</li><li>keep_fnames\uFF1A\u4FDD\u7559\u51FD\u6570\u7684\u540D\u79F0</li></ul><h3 id="css\u4EE3\u7801\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#css\u4EE3\u7801\u538B\u7F29" aria-hidden="true">#</a> CSS\u4EE3\u7801\u538B\u7F29</h3><p><code>CSS</code>\u538B\u7F29\u901A\u5E38\u662F\u53BB\u9664\u65E0\u7528\u7684\u7A7A\u683C\u7B49\uFF0C\u56E0\u4E3A\u5F88\u96BE\u53BB\u4FEE\u6539\u9009\u62E9\u5668\u3001\u5C5E\u6027\u7684\u540D\u79F0\u3001\u503C\u7B49</p><p>CSS\u7684\u538B\u7F29\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u63D2\u4EF6\uFF1A<code>css-minimizer-webpack-plugin</code></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install css-minimizer-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> CssMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;css-minimizer-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">minimize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">CssMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="html\u6587\u4EF6\u4EE3\u7801\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#html\u6587\u4EF6\u4EE3\u7801\u538B\u7F29" aria-hidden="true">#</a> Html\u6587\u4EF6\u4EE3\u7801\u538B\u7F29</h3><p>\u4F7F\u7528<code>HtmlWebpackPlugin</code>\u63D2\u4EF6\u6765\u751F\u6210<code>HTML</code>\u7684\u6A21\u677F\u65F6\u5019\uFF0C\u901A\u8FC7\u914D\u7F6E\u5C5E\u6027<code>minify</code>\u8FDB\u884C<code>html</code>\u4F18\u5316</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">plugin</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>
            <span class="token literal-property property">minify</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">minifyCSS</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u538B\u7F29css</span>
                <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u6298\u53E0\u7A7A\u683C</span>
                <span class="token literal-property property">removeComments</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token comment">// \u662F\u5426\u79FB\u9664\u6CE8\u91CA</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8BBE\u7F6E\u4E86<code>minify</code>\uFF0C\u5B9E\u9645\u4F1A\u4F7F\u7528\u53E6\u4E00\u4E2A\u63D2\u4EF6<code>html-minifier-terser</code></p><h3 id="\u6587\u4EF6\u5927\u5C0F\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5927\u5C0F\u538B\u7F29" aria-hidden="true">#</a> \u6587\u4EF6\u5927\u5C0F\u538B\u7F29</h3><p>\u5BF9\u6587\u4EF6\u7684\u5927\u5C0F\u8FDB\u884C\u538B\u7F29\uFF0C\u51CF\u5C11<code>http</code>\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5BBD\u5E26\u7684\u635F\u8017</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install compression<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">ComepressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(css|js)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>  <span class="token comment">// \u54EA\u4E9B\u6587\u4EF6\u9700\u8981\u538B\u7F29</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u591A\u5927\u5F00\u59CB\u538B\u7F29</span>
    <span class="token literal-property property">minRatio</span><span class="token operator">:</span><span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token comment">// \u81F3\u5C11\u538B\u7F29\u7684\u6BD4\u4F8B</span>
    <span class="token literal-property property">algorithm</span><span class="token operator">:</span><span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u91C7\u7528\u7684\u538B\u7F29\u7B97\u6CD5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u56FE\u7247\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u538B\u7F29" aria-hidden="true">#</a> \u56FE\u7247\u538B\u7F29</h3><p>\u4E00\u822C\u6765\u8BF4\u5728\u6253\u5305\u4E4B\u540E\uFF0C\u4E00\u4E9B\u56FE\u7247\u6587\u4EF6\u7684\u5927\u5C0F\u662F\u8FDC\u8FDC\u8981\u6BD4 <code>js</code> \u6216\u8005 <code>css</code> \u6587\u4EF6\u8981\u6765\u7684\u5927\uFF0C\u6240\u4EE5\u56FE\u7247\u538B\u7F29\u8F83\u4E3A\u91CD\u8981</p><p>\u914D\u7F6E\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]_[hash].[ext]&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;images/&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;image-webpack-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u538B\u7F29 jpeg \u7684\u914D\u7F6E</span>
            <span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">progressive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">65</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u4F7F\u7528 imagemin**-optipng \u538B\u7F29 png\uFF0Cenable: false \u4E3A\u5173\u95ED</span>
            <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u4F7F\u7528 imagemin-pngquant \u538B\u7F29 png</span>
            <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token string">&#39;65-90&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u538B\u7F29 gif \u7684\u914D\u7F6E</span>
            <span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// \u5F00\u542F webp\uFF0C\u4F1A\u628A jpg \u548C png \u56FE\u7247\u538B\u7F29\u4E3A webp \u683C\u5F0F</span>
            <span class="token literal-property property">webp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">75</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h3><p><code>Tree Shaking</code> \u662F\u4E00\u4E2A\u672F\u8BED\uFF0C\u5728\u8BA1\u7B97\u673A\u4E2D\u8868\u793A\u6D88\u9664\u6B7B\u4EE3\u7801\uFF0C\u4F9D\u8D56\u4E8E<code>ES Module</code>\u7684\u9759\u6001\u8BED\u6CD5\u5206\u6790\uFF08\u4E0D\u6267\u884C\u4EFB\u4F55\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u660E\u786E\u77E5\u9053\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF09</p><p>\u5728<code>webpack</code>\u5B9E\u73B0<code>Tree Shaking</code>\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u65B9\u6848\uFF1A</p><ul><li>usedExports\uFF1A\u901A\u8FC7\u6807\u8BB0\u67D0\u4E9B\u51FD\u6570\u662F\u5426\u88AB\u4F7F\u7528\uFF0C\u4E4B\u540E\u901A\u8FC7Terser\u6765\u8FDB\u884C\u4F18\u5316\u7684</li><li>sideEffects\uFF1A\u8DF3\u8FC7\u6574\u4E2A\u6A21\u5757/\u6587\u4EF6\uFF0C\u76F4\u63A5\u67E5\u770B\u8BE5\u6587\u4EF6\u662F\u5426\u6709\u526F\u4F5C\u7528</li></ul><p>\u4E24\u79CD\u4E0D\u540C\u7684\u914D\u7F6E\u65B9\u6848\uFF0C \u6709\u4E0D\u540C\u7684\u6548\u679C</p><h4 id="_1-usedexports" tabindex="-1"><a class="header-anchor" href="#_1-usedexports" aria-hidden="true">#</a> 1. usedExports</h4><p>\u914D\u7F6E\u65B9\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5C06<code>usedExports</code>\u8BBE\u4E3A<code>true</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
        usedExports
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528\u4E4B\u540E\uFF0C\u6CA1\u88AB\u7528\u4E0A\u7684\u4EE3\u7801\u5728<code>webpack</code>\u6253\u5305\u4E2D\u4F1A\u52A0\u5165<code>unused harmony export mul</code>\u6CE8\u91CA\uFF0C\u7528\u6765\u544A\u77E5 <code>Terser</code> \u5728\u4F18\u5316\u65F6\uFF0C\u53EF\u4EE5\u5220\u9664\u6389\u8FD9\u6BB5\u4EE3\u7801</p><p>\u5982\u4E0B\u9762<code>sum</code>\u51FD\u6570\u6CA1\u88AB\u7528\u5230\uFF0C<code>webpack</code>\u6253\u5305\u4F1A\u6DFB\u52A0\u6CE8\u91CA\uFF0C<code>terser</code>\u5728\u4F18\u5316\u65F6\uFF0C\u5219\u5C06\u8BE5\u51FD\u6570\u53BB\u6389</p><p><img src="https://static.vue-js.com/21b2e200-aee4-11eb-85f6-6fac77c0c9b3.png" alt="image"></p><h4 id="_2-sideeffects" tabindex="-1"><a class="header-anchor" href="#_2-sideeffects" aria-hidden="true">#</a> 2. sideEffects</h4><p><code>sideEffects</code>\u7528\u4E8E\u544A\u77E5<code>webpack compiler</code>\u54EA\u4E9B\u6A21\u5757\u65F6\u6709\u526F\u4F5C\u7528\uFF0C\u914D\u7F6E\u65B9\u6CD5\u662F\u5728<code>package.json</code>\u4E2D\u8BBE\u7F6E<code>sideEffects</code>\u5C5E\u6027</p><p>\u5982\u679C<code>sideEffects</code>\u8BBE\u7F6E\u4E3Afalse\uFF0C\u5C31\u662F\u544A\u77E5<code>webpack</code>\u53EF\u4EE5\u5B89\u5168\u7684\u5220\u9664\u672A\u7528\u5230\u7684<code>exports</code></p><p>\u5982\u679C\u6709\u4E9B\u6587\u4EF6\u9700\u8981\u4FDD\u7559\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u6570\u7EC4\u7684\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;sideEffecis&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;./src/util/format.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.css&quot;</span> <span class="token comment">// \u6240\u6709\u7684css\u6587\u4EF6</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u8FF0\u90FD\u662F\u5173\u4E8E<code>javascript</code>\u7684<code>tree shaking</code>\uFF0C<code>css</code>\u540C\u6837\u4E5F\u80FD\u591F\u5B9E\u73B0<code>tree shaking</code></p><h4 id="_3-css-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_3-css-tree-shaking" aria-hidden="true">#</a> 3. css tree shaking</h4><p><code>css</code>\u8FDB\u884C<code>tree shaking</code>\u4F18\u5316\u53EF\u4EE5\u5B89\u88C5<code>PurgeCss</code>\u63D2\u4EF6</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>npm install purgecss-plugin-webpack -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> PurgeCssPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;purgecss-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">PurgeCssPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span>glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/**/*</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">nodir</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token comment">// src\u91CC\u9762\u7684\u6240\u6709\u6587\u4EF6</span>
            <span class="token function-variable function">satelist</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">standard</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>paths\uFF1A\u8868\u793A\u8981\u68C0\u6D4B\u54EA\u4E9B\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u9700\u8981\u88AB\u5206\u6790\uFF0C\u914D\u5408\u4F7F\u7528glob</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CPurgecss\u4F1A\u5C06\u6211\u4EEC\u7684html\u6807\u7B7E\u7684\u6837\u5F0F\u79FB\u9664\u6389\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u4FDD\u7559\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2Asafelist\u7684\u5C5E\u6027</li></ul><h3 id="\u4EE3\u7801\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5206\u79BB" aria-hidden="true">#</a> \u4EE3\u7801\u5206\u79BB</h3><p>\u5C06\u4EE3\u7801\u5206\u79BB\u5230\u4E0D\u540C\u7684<code>bundle</code>\u4E2D\uFF0C\u4E4B\u540E\u6211\u4EEC\u53EF\u4EE5\u6309\u9700\u52A0\u8F7D\uFF0C\u6216\u8005\u5E76\u884C\u52A0\u8F7D\u8FD9\u4E9B\u6587\u4EF6</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u7684<code>JavaScript</code>\u4EE3\u7801\uFF08\u4E1A\u52A1\u4EE3\u7801\u3001\u7B2C\u4E09\u65B9\u4F9D\u8D56\u3001\u6682\u65F6\u6CA1\u6709\u7528\u5230\u7684\u6A21\u5757\uFF09\u5728\u9996\u9875\u5168\u90E8\u90FD\u52A0\u8F7D\uFF0C\u5C31\u4F1A\u5F71\u54CD\u9996\u9875\u7684\u52A0\u8F7D\u901F\u5EA6</p><p>\u4EE3\u7801\u5206\u79BB\u53EF\u4EE5\u5206\u51FA\u6765\u66F4\u5C0F\u7684<code>bundle</code>\uFF0C\u4EE5\u53CA\u63A7\u5236\u8D44\u6E90\u52A0\u8F7D\u4F18\u5148\u7EA7\uFF0C\u63D0\u4F9B\u4EE3\u7801\u7684\u52A0\u8F7D\u6027\u80FD</p><p>\u8FD9\u91CC\u901A\u8FC7<code>splitChunksPlugin</code>\u6765\u5B9E\u73B0\uFF0C\u8BE5\u63D2\u4EF6<code>webpack</code>\u5DF2\u7ECF\u9ED8\u8BA4\u5B89\u88C5\u548C\u96C6\u6210\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u5373\u53EF</p><p>\u9ED8\u8BA4\u914D\u7F6E\u4E2D\uFF0Cchunks\u4EC5\u4EC5\u9488\u5BF9\u4E8E\u5F02\u6B65\uFF08async\uFF09\u8BF7\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u4E3Ainitial\u6216\u8005all</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">splitChunks</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">chunks</span><span class="token operator">:</span><span class="token string">&quot;all&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>splitChunks</code>\u4E3B\u8981\u5C5E\u6027\u6709\u5982\u4E0B\uFF1A</p><ul><li>Chunks\uFF0C\u5BF9\u540C\u6B65\u4EE3\u7801\u8FD8\u662F\u5F02\u6B65\u4EE3\u7801\u8FDB\u884C\u5904\u7406</li><li>minSize\uFF1A \u62C6\u5206\u5305\u7684\u5927\u5C0F, \u81F3\u5C11\u4E3AminSize\uFF0C\u5982\u4F55\u5305\u7684\u5927\u5C0F\u4E0D\u8D85\u8FC7minSize\uFF0C\u8FD9\u4E2A\u5305\u4E0D\u4F1A\u62C6\u5206</li><li>maxSize\uFF1A \u5C06\u5927\u4E8EmaxSize\u7684\u5305\uFF0C\u62C6\u5206\u4E3A\u4E0D\u5C0F\u4E8EminSize\u7684\u5305</li><li>minChunks\uFF1A\u88AB\u5F15\u5165\u7684\u6B21\u6570\uFF0C\u9ED8\u8BA4\u662F1</li></ul><h3 id="\u5185\u8054chunk" tabindex="-1"><a class="header-anchor" href="#\u5185\u8054chunk" aria-hidden="true">#</a> \u5185\u8054chunk</h3><p>\u53EF\u4EE5\u901A\u8FC7<code>InlineChunkHtmlPlugin</code>\u63D2\u4EF6\u5C06\u4E00\u4E9B<code>chunk</code>\u7684\u6A21\u5757\u5185\u8054\u5230<code>html</code>\uFF0C\u5982<code>runtime</code>\u7684\u4EE3\u7801\uFF08\u5BF9\u6A21\u5757\u8FDB\u884C\u89E3\u6790\u3001\u52A0\u8F7D\u3001\u6A21\u5757\u4FE1\u606F\u76F8\u5173\u7684\u4EE3\u7801\uFF09\uFF0C\u4EE3\u7801\u91CF\u5E76\u4E0D\u5927\uFF0C\u4F46\u662F\u5FC5\u987B\u52A0\u8F7D\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> InlineChunkHtmlPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;react-dev-utils/InlineChunkHtmlPlugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">plugin</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">InlineChunkHtmlPlugin</span><span class="token punctuation">(</span>HtmlWebpackPlugin<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">runtime.+\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u5173\u4E8E<code>webpack</code>\u5BF9\u524D\u7AEF\u6027\u80FD\u7684\u4F18\u5316\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6587\u4EF6\u4F53\u79EF\u5927\u5C0F\u5165\u624B\uFF0C\u5176\u6B21\u8FD8\u53EF\u901A\u8FC7\u5206\u5305\u7684\u5F62\u5F0F\u3001\u51CF\u5C11http\u8BF7\u6C42\u6B21\u6570\u7B49\u65B9\u5F0F\uFF0C\u5B9E\u73B0\u5BF9\u524D\u7AEF\u6027\u80FD\u7684\u4F18\u5316</p><h4 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h4>`,73),d={href:"https://zhuanlan.zhihu.com/p/139498741",target:"_blank",rel:"noopener noreferrer"},b=e("https://zhuanlan.zhihu.com/p/139498741"),m={href:"https://vue3js.cn/interview/",target:"_blank",rel:"noopener noreferrer"},h=e("https://vue3js.cn/interview/");function g(y,v){const s=t("ExternalLinkIcon");return o(),l(r,null,[k,n("ul",null,[n("li",null,[n("a",d,[b,a(s)])]),n("li",null,[n("a",m,[h,a(s)])])])],64)}var x=p(u,[["render",g],["__file","performance.html.vue"]]);export{x as default};
