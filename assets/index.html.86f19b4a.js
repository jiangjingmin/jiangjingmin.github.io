import{_ as n,e as a}from"./app.f6b3af9d.js";var s="/assets/etag.94df64d7.jpg";const e={},p=a(`<h1 id="\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u6027\u80FD\u4F18\u5316</h1><p>\u6D4F\u89C8\u5668 lighthouse</p><ol><li>\u6253\u5305\u4F18\u5316 <ul><li>webpack-loader\uFF0Cdll\uFF0Chappypack\uFF0C\u538B\u7F29\u4EE3\u7801\uFF0Ctree shaking\uFF0Cscope hoisting\uFF0Ccode splitting</li><li>\u56FE\u7247basee64\uFF0Ccdn</li></ul></li><li>\u7F51\u7EDC\u4F18\u5316 <ul><li>DNS\uFF0CCDN\uFF0C\u7F13\u5B58\uFF0Cpreload/prefetch/\u61D2\u52A0\u8F7D\uFF0Cssr</li></ul></li><li>\u4EE3\u7801\u4F18\u5316 <ul><li>loading/\u9AA8\u67B6\u5C4F\uFF0Cweb worker\uFF0C\u865A\u62DF\u5217\u8868\uFF0C\u61D2\u52A0\u8F7D\uFF0Cdom/style\u6279\u91CF\u66F4\u65B0\u3002\u3002\u3002</li></ul></li></ol><h2 id="\u521D\u59CB\u9636\u6BB5-\u52A0\u8F7D\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u9636\u6BB5-\u52A0\u8F7D\u4F18\u5316" aria-hidden="true">#</a> \u521D\u59CB\u9636\u6BB5 -&gt; \u52A0\u8F7D\u4F18\u5316</h2><ol><li>\u9996\u9875\u52A0\u8F7D\u6162\u7684\u4F18\u5316 <ul><li>\u5BF9\u4E8E\u56FE\u7247\u53EF\u4EE5\u61D2\u52A0\u8F7D\uFF0C\u51CF\u5C11\u9996\u5C4F\u56FE\u7247\u52A0\u8F7D\u91CF\u3002\u4EE5\u53CA\u5BF9\u4E8E\u5C0F\u56FE\u6807\u548C\u5C0F\u56FE\u7247\u5206\u522B\u4F7F\u7528 iconfont \u548C\u96EA\u78A7\u56FE\u6765\u89E3\u51B3\uFF0C\u6700\u5927\u7A0B\u5EA6\u51CF\u5C11\u9996\u5C4F\u56FE\u7247\u6570\u91CF\uFF0C\u4ECE\u800C\u63D0\u5347\u9996\u9875\u6E32\u67D3\u6027\u80FD</li><li>\u5BF9\u4E8E\u5176\u4ED6\u8D44\u6E90\u53EF\u4EE5\u901A\u8FC7\u6253\u5305\uFF08nginx combo \u6216\u8005 webpack \u6253\u5305\uFF09\u6765\u5408\u5E76\u8D44\u6E90\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7\u61D2\u52A0\u8F7D\u8DEF\u7531\u7684\u65B9\u5F0F\u6765\u51CF\u5C11\u9996\u9875 JS \u7684\u52A0\u8F7D\u91CF</li><li>\u51CF\u5C0F\u8D44\u6E90\u7684\u65B9\u5F0F\u53EF\u4EE5\u901A\u8FC7\u538B\u7F29\u548C\u6DF7\u6DC6\u52A0\u5BC6\u6765\u51CF\u5C0F\u6587\u4EF6\u4F53\u79EF\uFF0C\u56FE\u7247\u5219\u53EF\u4EE5\u4F7F\u7528\u5DE5\u5177\u538B\u7F29\u6216\u8005\u4F7F\u7528 webp \u683C\u5F0F</li><li>\u540C\u65F6\u53EF\u5728\u670D\u52A1\u5668\u7AEF\u5F00\u542F gzip \u538B\u7F29\u6765\u6700\u5927\u5316\u51CF\u5C11\u6240\u6709\u6587\u4EF6\u4F53\u79EF</li></ul></li><li>\u4F18\u5316\u56FE\u7247\u7684\u505A\u6CD5 <ul><li>\u53EF\u4EE5\u901A\u8FC7\u61D2\u52A0\u8F7D\u51CF\u5C11\u56FE\u7247\u7684\u8BF7\u6C42\uFF0C\u6216\u8005\u901A\u8FC7\u96EA\u78A7\u56FE\u6765\u5408\u5E76\u56FE\u7247\uFF0C\u4EE5\u53CA\u5C06\u5C0F\u56FE\u7247\u8F6C\u5316\u6210 base64 \u7684\u683C\u5F0F\uFF0C\u6765\u89E3\u51B3\u591A\u7684\u95EE\u9898</li><li>\u56FE\u7247\u5927\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u52A8\u5316\u538B\u7F29\u5DE5\u5177\u6765\u538B\u7F29\u56FE\u7247\uFF0C\u6216\u8005\u4F7F\u7528 webp \u683C\u5F0F\u7684\u56FE\u7247</li></ul></li><li>\u5B9E\u73B0 webpack \u6253\u5305\u4F18\u5316 <ul><li>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E mode=production \u6765\u9ED8\u8BA4\u5B9E\u73B0 webpack \u5BF9\u4EE3\u7801\u7684\u6DF7\u6DC6\u548C\u538B\u7F29\uFF0C\u4ECE\u800C\u6700\u5927\u7A0B\u5EA6\u7684\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</li><li>\u4F7F\u7528 webpack + dynamic import \u5E76\u7ED3\u5408\u8DEF\u7531\u7684\u5165\u53E3\u6587\u4EF6\u505A\u62C6\u5305\u5904\u7406</li><li>\u5E76\u4E14\u53EF\u4EE5\u8BBE\u5B9A\u4E00\u4E9B\u6253\u5305\u7B56\u7565\uFF0C\u5E76\u914D\u5408\u7F51\u7EDC\u7F13\u5B58\u505A\u6700\u7EC8\u7684\u52A0\u8F7D\u6027\u80FD\u4F18\u5316</li></ul></li><li>\u5B9E\u73B0 CDN \u52A0\u901F <ul><li>CDN \u670D\u52A1\u5668\u4E3B\u8981\u662F\u7528\u6765\u653E\u9759\u6001\u8D44\u6E90\u7684\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u7528\u6765\u52A0\u901F\u9759\u6001\u8D44\u6E90\u7684\u4E0B\u8F7D</li><li>CDN \u4E4B\u6240\u4EE5\u80FD\u591F\u52A0\u901F\uFF0C\u662F\u56E0\u4E3A\u4F1A\u5728\u5F88\u591A\u5730\u65B9\u90FD\u90E8\u7F72 CDN \u670D\u52A1\u5668\uFF0C\u5982\u679C\u7528\u6237\u9700\u8981\u4E0B\u8F7D\u9759\u6001\u8D44\u6E90\uFF0C\u4F1A\u81EA\u52A8\u9009\u62E9\u6700\u8FD1\u7684\u8282\u70B9\u4E0B\u8F7D</li><li>\u540C\u65F6\u7531\u4E8E CDN \u670D\u52A1\u5668\u7684\u5730\u5740\u4E00\u822C\u90FD\u8DDF\u4E3B\u670D\u52A1\u5668\u7684\u5730\u5740\u4E0D\u540C\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7834\u9664\u6D4F\u89C8\u5668\u5BF9\u540C\u4E00\u4E2A\u57DF\u540D\u53D1\u9001\u8BF7\u6C42\u7684\u9650\u5236</li></ul></li></ol><h2 id="\u8FD0\u884C\u9636\u6BB5-\u6E32\u67D3\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u9636\u6BB5-\u6E32\u67D3\u4F18\u5316" aria-hidden="true">#</a> \u8FD0\u884C\u9636\u6BB5 -&gt; \u6E32\u67D3\u4F18\u5316</h2><ol><li>\u6E32\u67D3\u5341\u4E07\u6761\u6570\u636E\u5982\u4F55\u4E0D\u5361\u987F <ul><li>\u53EF\u4EE5\u4F7F\u7528 document.createDocumentFragment \u521B\u5EFA\u865A\u62DF\u8282\u70B9\uFF0C\u4ECE\u800C\u907F\u514D\u5F15\u8D77\u6CA1\u6709\u5FC5\u8981\u7684\u6E32\u67D3</li><li>\u5F53\u6240\u6709\u7684 li \u90FD\u521B\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u4E00\u6B21\u6027\u628A\u865A\u62DF\u8282\u70B9\u91CC\u7684 li \u6807\u7B7E\u5168\u90E8\u6E32\u67D3\u51FA\u6765</li><li>\u53EF\u4EE5\u91C7\u53D6\u5206\u6BB5\u6E32\u67D3\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982\u4E00\u6B21\u53EA\u6E32\u67D3\u4E00\u5C4F\u7684\u6570\u636E</li><li>\u6700\u540E\u4F7F\u7528 window.requestAnimationFrame \u6765\u9010\u5E27\u6E32\u67D3</li></ul></li></ol><h2 id="\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u53EF\u4EE5\u4ECE\u6309\u51E0\u4E2A\u7EF4\u5EA6\u6216\u8005\u65B9\u9762\u8FDB\u884C\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u53EF\u4EE5\u4ECE\u6309\u51E0\u4E2A\u7EF4\u5EA6\u6216\u8005\u65B9\u9762\u8FDB\u884C\u4F18\u5316" aria-hidden="true">#</a> \u7F51\u7AD9\u6027\u80FD\u4F18\u5316\u53EF\u4EE5\u4ECE\u6309\u51E0\u4E2A\u7EF4\u5EA6\u6216\u8005\u65B9\u9762\u8FDB\u884C\u4F18\u5316\uFF1F</h2><ol><li>\u51CF\u5C11HTTP\u8BF7\u6C42\u7684\u6570\u91CF\uFF1A\u56E0\u4E3A\u4E09\u6B21\u63E1\u624B\uFF0C\u6D4F\u89C8\u5668\u8BF7\u6C42\u8D44\u6E90\u6587\u4EF6\u7684\u9650\u5236</li><li>\u63A7\u5236\u8D44\u6E90\u6587\u4EF6\u7684\u52A0\u8F7D\u4F18\u5148\u7EA7\uFF1Acss\u653E\u5728\u5934\u90E8\uFF0Cjs\u653E\u5728\u5C3E\u90E8</li><li>\u5229\u7528\u6D4F\u89C8\u5668\u7F13\u5B58\uFF1A</li></ol><h2 id="\u6253\u5305\u4F9D\u8D56\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u4F9D\u8D56\u56FE" aria-hidden="true">#</a> \u6253\u5305\u4F9D\u8D56\u56FE</h2><p>\u63D2\u4EF6 webpack-bundle-analyzer</p><h2 id="\u5982\u4F55\u8BA1\u7B97\u767D\u5C4F\u65F6\u95F4\u548C\u9996\u5C4F\u6E32\u67D3\u65F6\u95F4-\u5982\u4F55\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8BA1\u7B97\u767D\u5C4F\u65F6\u95F4\u548C\u9996\u5C4F\u6E32\u67D3\u65F6\u95F4-\u5982\u4F55\u4F18\u5316" aria-hidden="true">#</a> \u5982\u4F55\u8BA1\u7B97\u767D\u5C4F\u65F6\u95F4\u548C\u9996\u5C4F\u6E32\u67D3\u65F6\u95F4\uFF1F\u5982\u4F55\u4F18\u5316</h2><h2 id="\u5982\u679C\u9875\u9762\u51FA\u73B0\u767D\u5C4F\u5982\u4F55\u6392\u67E5" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u9875\u9762\u51FA\u73B0\u767D\u5C4F\u5982\u4F55\u6392\u67E5" aria-hidden="true">#</a> \u5982\u679C\u9875\u9762\u51FA\u73B0\u767D\u5C4F\u5982\u4F55\u6392\u67E5</h2><h2 id="cdn-\u7684\u539F\u7406-cdn-\u9009\u62E9\u6700\u8FD1\u7684\u7F13\u5B58\u670D\u52A1\u5668\u662F\u600E\u4E48\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#cdn-\u7684\u539F\u7406-cdn-\u9009\u62E9\u6700\u8FD1\u7684\u7F13\u5B58\u670D\u52A1\u5668\u662F\u600E\u4E48\u5B9E\u73B0" aria-hidden="true">#</a> CDN \u7684\u539F\u7406\uFF0CCDN \u9009\u62E9\u6700\u8FD1\u7684\u7F13\u5B58\u670D\u52A1\u5668\u662F\u600E\u4E48\u5B9E\u73B0</h2><h2 id="nginx-\u5BF9\u524D\u7AEF\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#nginx-\u5BF9\u524D\u7AEF\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> <code>nginx</code> \u5BF9\u524D\u7AEF\u7684\u6027\u80FD\u4F18\u5316</h2><p>\u5F53\u9762\u8BD5\u95EE\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u7684\u65F6\u5019\uFF0C\u5927\u591A\u6570\u662F <code>nginx</code> \u4F18\u5316\uFF0C\u800C <code>nginx</code> \u53C8\u4E0D\u5C5E\u4E8E\u524D\u7AEF\u7684\u4E1C\u897F\uFF0C\u9762\u8BD5\u5B98\u60F3\u8981\u4F60\u8BF4\u5F00\u542F <code>gzip</code>\u3001\u5F00\u542F <code>etag</code>\uFF0C\u5374\u53C8\u8BF4\u4ED6\u4EEC\u4E0D\u8003\u540E\u53F0\u7684\u77E5\u8BC6</p><h3 id="\u4E00\u3001\u5F00\u542F-gzip" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5F00\u542F-gzip" aria-hidden="true">#</a> \u4E00\u3001\u5F00\u542F gzip</h3><p><strong>\u67E5\u770B\u6709\u54EA\u4E9B\u5927\u6587\u4EF6:</strong></p><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u7F51\u7EDC <code>network</code> \u6587\u4EF6\u5217\u663E\u793A\u5927\u5C0F\u67E5\u770B</li><li>\u65B9\u5F0F\u4E8C\uFF1Anpm \u81EA\u5E26\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u4EE5\u67E5\u770B\u6253\u5305\u4F9D\u8D56\u5927\u5C0F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run analyze
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>stat: \u8F6C\u6362\u524D\u7684\u4F53\u79EF</li><li>Parsed: \u6700\u7EC8\u6253\u5305\u4F53\u79EF</li><li>Gzipped: \u4F7F\u7528gzip\u538B\u7F29\u540E\u7684\u4F53\u79EF</li></ul><p><strong>\u5F00\u542F <code>gzip</code>\uFF1A</strong></p><p>\u5F00\u542Fgzip\u9700\u8981\u524D\u7AEF\u548C\u670D\u52A1\u5668\u540C\u65F6\u914D\u5408\u5F00\u542F\u624D\u4F1A\u751F\u6548\u3002</p><p>\u67E5\u770B\u662F\u5426\u5F00\u542F <code>gzip</code>\uFF1A</p><ul><li>\u670D\u52A1\u5668: \u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u54CD\u5E94\u5934 <code>Content-Encoding: gzip</code> \u5373\u4E3A\u5F00\u542F</li><li>\u524D\u7AEF: <code>build</code> \u6253\u5305\u540E\u7684\u6587\u4EF6\u662F\u5426\u6709 <code>.gz</code> \u6587\u4EF6</li></ul><h4 id="_1-\u524D\u7AEF\u6253\u5305\u751F\u6210-gz-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u7AEF\u6253\u5305\u751F\u6210-gz-\u6587\u4EF6" aria-hidden="true">#</a> 1. \u524D\u7AEF\u6253\u5305\u751F\u6210 <code>gz</code> \u6587\u4EF6</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u5B89\u88C5\u63D2\u4EF6 <span class="token variable"><span class="token variable">\`</span>compression-webpack-plugin<span class="token variable">\`</span></span>
<span class="token function">npm</span> i -D compression-webpack-plugin
// OR
<span class="token function">yarn</span> <span class="token function">add</span> -D compression-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> CompressionPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;compression-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u538B\u7F29\u9879\u914D\u7F6E</span>
<span class="token keyword">const</span> gzipConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4 gzip\u3002\u538B\u7F29\u7B97\u6CD5</span>
   <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4 0\u300210kb\u4EE5\u4E0A\u7684\u6587\u4EF6\u624D\u8FDB\u884C\u538B\u7F29</span>
   <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(js|css|json|txt|html|svg)(\\?.*)?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token comment">// \u6B63\u5219\u5339\u914D\u7684\u6587\u4EF6\u624D\u538B\u7F29</span>
   <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4 0.8\u3002\u6700\u5C0F\u538B\u7F29\u6BD4\uFF0C\u5C0F\u4E8E\u5219\u4E0D\u538B\u7F29</span>
   <span class="token comment">// filename: &#39;[path][query].gz&#39;, // \u9ED8\u8BA4 &quot;[path][base].gz&quot;\u3002\u538B\u7F29\u6587\u4EF6\u540D</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

<span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>gzipConfig<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// config.js - antd pro</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">&#39;compression-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>gzipConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h5 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h5><blockquote><p>TypeError: Cannot read property &#39;tapPromise&#39; of undefined</p></blockquote><p>\u539F\u56E0\u662F\u7248\u672C\u95EE\u9898\u3002\u964D\u4F4E\u7248\u672C\u91CD\u65B0\u8FD0\u884C\u5373\u53EF</p><p>\u9ED8\u8BA4\u5B89\u88C5\u7684\u662F\u6700\u65B0\u7248\u672C\uFF1A</p><ul><li><code>compression-webpack-plugin</code>: &quot;^10.0.0&quot;</li><li><code>webpack</code>: &quot;^5.72.1&quot;</li></ul><p>\u800C\u9879\u76EE\u4E2D\u7528umi\u521B\u5EFA\u7684webpack\u7248\u672C\u53F7\u662F<code>4.43.0</code>\uFF0C\u5728 Github \u4E0A\u67E5\u627E\u5339\u914D\u4F4E\u7248\u672C\u7684\u662F <code>5.0.2</code>\uFF0C\u6545\u5B89\u88C5\u6B64\u7248\u672C\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D compression-webpack-plugin@5.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_2-\u670D\u52A1\u5668\u914D\u7F6E-nginx-\u652F\u6301-gzip" tabindex="-1"><a class="header-anchor" href="#_2-\u670D\u52A1\u5668\u914D\u7F6E-nginx-\u652F\u6301-gzip" aria-hidden="true">#</a> 2. \u670D\u52A1\u5668\u914D\u7F6E <code>nginx</code>\uFF0C\u652F\u6301 <code>gzip</code></h4><p>\u751F\u6210 <code>gz</code> \u6587\u4EF6\u540E\uFF0C\u8FD8\u9700\u8981 <code>nginx</code> \u652F\u6301</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>location / {
   root e:\\workgit\\abc;
   error_page 405 =200 http://$host:8085/$request_uri;

   gzip on;
   gzip_static on;
   gzip_http_version 1.1;
   gzip_comp_level 3;
   gzip_types text/plain application/json application/x-javascript application/css application/xml application/xml+rss text/javascript application/x-httpd-php image/jpeg image/gif 
   
   image/png image/x-ms-bmp;
   index  index.html index.htm;
   try_files $uri $uri/ @rewrites;
}

location @rewrites {
   rewrite ^(.*)$ /index.html last;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Ant Design Pro V5 <code>nginx.conf</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
   # gzip config
   gzip on;
   gzip_min_length 1k;
   gzip_comp_level 9;
   gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
   gzip_vary on;
   gzip_disable &quot;MSIE [1-6]\\.&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u4E8C\u3001\u5F00\u542F-etag" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F00\u542F-etag" aria-hidden="true">#</a> \u4E8C\u3001\u5F00\u542F Etag</h3><p><code>Etag</code> \u5168\u79F0 <code>EntityTags</code></p><p><img src="`+s+'" alt="Etag"></p><p>Expires(HTTP/1.0)/Cache-Control(HTTP/1.1) Header \u662F\u63A7\u5236\u6D4F\u89C8\u5668\u662F\u5426\u76F4\u63A5\u4ECE\u6D4F\u89C8\u5668\u7F13\u5B58\u53D6\u6570\u636E\u8FD8\u662F\u91CD\u65B0\u53D1\u8BF7\u6C42\u5230\u670D\u52A1\u5668\u53D6\u6570\u636E\u3002</p><p>\u53EA\u662F Cache-Control \u6BD4 Expires \u53EF\u4EE5\u63A7\u5236\u7684\u591A\u4E00\u4E9B\uFF0C \u800C\u4E14 Cache-Control \u4F1A\u91CD\u5199 Expires \u7684\u89C4\u5219\u3002</p><p>Last-Modified/If-Modified-Since \u548C ETag/If-None-Match \u662F\u6D4F\u89C8\u5668\u53D1\u9001\u8BF7\u6C42\u5230\u670D\u52A1\u5668\u540E\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5DF2\u7ECF\u4FEE\u6539\u8FC7\uFF0C\u5982\u679C\u6CA1\u6709\u4FEE\u6539\u8FC7\u5C31\u53EA\u53D1\u9001\u4E00\u4E2A 304 \u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u76F4\u63A5\u4ECE\u81EA\u5DF1\u672C\u5730\u7684\u7F13\u5B58\u53D6\u6570\u636E\uFF1B\u5982\u679C\u4FEE\u6539\u8FC7\u90A3\u5C31\u6574\u4E2A\u6570\u636E\u91CD\u65B0\u53D1\u7ED9\u6D4F\u89C8\u5668\u3002</p><h3 id="\u4E09\u3001\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684icon\u662F\u5982\u4F55\u5904\u7406\u7684" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684icon\u662F\u5982\u4F55\u5904\u7406\u7684" aria-hidden="true">#</a> \u4E09\u3001\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684icon\u662F\u5982\u4F55\u5904\u7406\u7684\uFF1F</h3><ol><li>\u672C\u5730\u56FE\u6807\uFF08\u96EA\u78A7\u56FE\uFF09\uFF1A \u653E\u5927\u5931\u771F\u3001\u9700\u8981\u8BA1\u7B97\u56FE\u6807\u4F4D\u7F6E\u3001\u53EA\u80FD\u505A\u80CC\u666F\u56FE</li><li>iconfont \u5B57\u4F53\u56FE\u6807\uFF1A\u77E2\u91CF\u56FE\u653E\u5927\u4E0D\u4F1A\u5931\u771F\u3001\u7B2C\u4E09\u65B9\u652F\u6301\u4E30\u5BCC</li><li>svg \u56FE\u6807\uFF1A\u53EF\u4EE5\u76F4\u63A5\u66FF\u4EE3img\u4F7F\u7528</li></ol><h2 id="\u6709\u4E2A\u957F\u5217\u8868\u4E0A\u4E07\u884C-\u600E\u4E48\u505A\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u6709\u4E2A\u957F\u5217\u8868\u4E0A\u4E07\u884C-\u600E\u4E48\u505A\u4F18\u5316" aria-hidden="true">#</a> \u6709\u4E2A\u957F\u5217\u8868\u4E0A\u4E07\u884C\uFF0C\u600E\u4E48\u505A\u4F18\u5316\uFF1F</h2><p>\u61D2\u52A0\u8F7D\u6216\u8005\u865A\u62DF\u6EDA\u52A8</p><h2 id="\u56FE\u7247\u8D44\u6E90\u600E\u4E48\u505A\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u8D44\u6E90\u600E\u4E48\u505A\u4F18\u5316" aria-hidden="true">#</a> \u56FE\u7247\u8D44\u6E90\u600E\u4E48\u505A\u4F18\u5316\uFF1F</h2><p>\u538B\u7F29\u3001\u96EA\u78A7\u56FE\u3001svg\u3001base64\u3001iconfont</p><p>\u9996\u5C4F\u56FE\u7247\u4F18\u5148\u52A0\u8F7D\uFF0C\u7B49\u9996\u5C4F\u56FE\u7247\u52A0\u8F7D\u5B8C\u5168\u540E\u518D\u53BB\u52A0\u8F7D\u975E\u9996\u5C4F\u56FE\u7247\u3002 \u5BF9\u5927\u90E8\u5206\u56FE\u7247\uFF0C\u7279\u522B\u662F\u8F6E\u64AD\u5E7F\u544A\u4E2D\u7684\u56FE\u7247\u8FDB\u884C\u6309\u8BBE\u5907\u5C3A\u5BF8\u88C1\u526A\uFF0C\u51CF\u5C11\u56FE\u7247\u4F53\u79EF\uFF0C\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\uFF0C\u52A0\u5FEB\u4E0B\u8F7D\u901F\u7387\u3002</p>',53);function i(l,t){return p}var c=n(e,[["render",i],["__file","index.html.vue"]]);export{c as default};
