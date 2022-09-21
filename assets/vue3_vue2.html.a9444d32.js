import{_ as e,r as t,o as p,c as o,a,b as c,F as l,e as i,d as u}from"./app.7139c5e1.js";var n="/images/fe/vue3/04.png",r="/images/fe/vue3/05.png",d="/images/fe/vue3/06.png",k="/images/fe/vue3/07.png",h="/images/fe/vue3/08.png",m="/images/fe/vue3/09.png",b="/images/fe/vue3/10.png",g="/images/fe/vue3/11.png",v="/images/fe/vue3/12.png",f="/images/fe/vue3/14.png",_="/images/fe/vue3/15.png",x="/images/fe/vue3/16.png";const y={},q=i('<h1 id="vue3-\u4E0E-vue2-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vue3-\u4E0E-vue2-\u533A\u522B" aria-hidden="true">#</a> vue3 \u4E0E vue2 \u533A\u522B</h1><p><img src="'+n+'" alt="04"></p><h2 id="\u4E00\u3001vue3-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001vue3-\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00\u3001Vue3 \u4ECB\u7ECD</h2><p>\u5173\u4E8E<code>vue3</code>\u7684\u91CD\u6784\u80CC\u666F\uFF0C\u5C24\u5927\u662F\u8FD9\u6837\u8BF4\u7684\uFF1A</p><p>\u300CVue \u65B0\u7248\u672C\u7684\u7406\u5FF5\u6210\u578B\u4E8E 2018 \u5E74\u672B\uFF0C\u5F53\u65F6 Vue 2 \u7684\u4EE3\u7801\u5E93\u5DF2\u7ECF\u6709\u4E24\u5C81\u534A\u4E86\u3002\u6BD4\u8D77\u901A\u7528\u8F6F\u4EF6\u7684\u751F\u547D\u5468\u671F\u6765\u8FD9\u597D\u50CF\u4E5F\u6CA1\u90A3\u4E48\u4E45\uFF0C\u4F46\u5728\u8FD9\u6BB5\u65F6\u671F\uFF0C\u524D\u7AEF\u4E16\u754C\u5DF2\u7ECF\u4ECA\u6614\u975E\u6BD4\u4E86</p><p>\u5728\u6211\u4EEC\u66F4\u65B0\uFF08\u548C\u91CD\u5199\uFF09Vue \u7684\u4E3B\u8981\u7248\u672C\u65F6\uFF0C\u4E3B\u8981\u8003\u8651\u4E24\u70B9\u56E0\u7D20\uFF1A\u9996\u5148\u662F\u65B0\u7684 JavaScript \u8BED\u8A00\u7279\u6027\u5728\u4E3B\u6D41\u6D4F\u89C8\u5668\u4E2D\u7684\u53D7\u652F\u6301\u6C34\u5E73\uFF1B\u5176\u6B21\u662F\u5F53\u524D\u4EE3\u7801\u5E93\u4E2D\u968F\u65F6\u95F4\u63A8\u79FB\u800C\u9010\u6E10\u66B4\u9732\u51FA\u6765\u7684\u4E00\u4E9B\u8BBE\u8BA1\u548C\u67B6\u6784\u95EE\u9898\u300D</p><p>\u7B80\u8981\u5C31\u662F\uFF1A</p><ul><li>\u5229\u7528\u65B0\u7684\u8BED\u8A00\u7279\u6027(es6)</li><li>\u89E3\u51B3\u67B6\u6784\u95EE\u9898</li></ul><h3 id="\u54EA\u4E9B\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u54EA\u4E9B\u53D8\u5316" aria-hidden="true">#</a> \u54EA\u4E9B\u53D8\u5316</h3><p><img src="'+r+'" alt="05"></p><p>\u4ECE\u4E0A\u56FE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6982\u89C8<code>Vue3</code>\u7684\u65B0\u7279\u6027\uFF0C\u5982\u4E0B\uFF1A</p><ul><li>\u901F\u5EA6\u66F4\u5FEB</li><li>\u4F53\u79EF\u51CF\u5C11</li><li>\u66F4\u6613\u7EF4\u62A4</li><li>\u66F4\u63A5\u8FD1\u539F\u751F</li><li>\u66F4\u6613\u4F7F\u7528</li></ul><h4 id="\u901F\u5EA6\u66F4\u5FEB" tabindex="-1"><a class="header-anchor" href="#\u901F\u5EA6\u66F4\u5FEB" aria-hidden="true">#</a> \u901F\u5EA6\u66F4\u5FEB</h4><p><code>vue3</code>\u76F8\u6BD4<code>vue2</code></p><ul><li>\u91CD\u5199\u4E86\u865A\u62DF<code>Dom</code>\u5B9E\u73B0</li><li>\u7F16\u8BD1\u6A21\u677F\u7684\u4F18\u5316</li><li>\u66F4\u9AD8\u6548\u7684\u7EC4\u4EF6\u521D\u59CB\u5316</li><li><code>undate</code>\u6027\u80FD\u63D0\u9AD8 1.3~2 \u500D</li><li><code>SSR</code>\u901F\u5EA6\u63D0\u9AD8\u4E86 2~3 \u500D</li></ul><p><img src="'+d+'" alt="06"></p><h4 id="\u4F53\u79EF\u66F4\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u4F53\u79EF\u66F4\u5C0F" aria-hidden="true">#</a> \u4F53\u79EF\u66F4\u5C0F</h4><p>\u901A\u8FC7<code>webpack</code>\u7684<code>tree-shaking</code>\u529F\u80FD\uFF0C\u53EF\u4EE5\u5C06\u65E0\u7528\u6A21\u5757\u201C\u526A\u8F91\u201D\uFF0C\u4EC5\u6253\u5305\u9700\u8981\u7684</p><p>\u80FD\u591F<code>tree-shaking</code>\uFF0C\u6709\u4E24\u5927\u597D\u5904\uFF1A</p><ul><li>\u5BF9\u5F00\u53D1\u4EBA\u5458\uFF0C\u80FD\u591F\u5BF9<code>vue</code>\u5B9E\u73B0\u66F4\u591A\u5176\u4ED6\u7684\u529F\u80FD\uFF0C\u800C\u4E0D\u5FC5\u62C5\u5FE7\u6574\u4F53\u4F53\u79EF\u8FC7\u5927</li><li>\u5BF9\u4F7F\u7528\u8005\uFF0C\u6253\u5305\u51FA\u6765\u7684\u5305\u4F53\u79EF\u53D8\u5C0F\u4E86</li></ul><p><code>vue</code>\u53EF\u4EE5\u5F00\u53D1\u51FA\u66F4\u591A\u5176\u4ED6\u7684\u529F\u80FD\uFF0C\u800C\u4E0D\u5FC5\u62C5\u5FE7<code>vue</code>\u6253\u5305\u51FA\u6765\u7684\u6574\u4F53\u4F53\u79EF\u8FC7\u591A</p><p><img src="'+k+'" alt="07"></p><h4 id="\u66F4\u6613\u7EF4\u62A4" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6613\u7EF4\u62A4" aria-hidden="true">#</a> \u66F4\u6613\u7EF4\u62A4</h4><h4 id="compositon-api" tabindex="-1"><a class="header-anchor" href="#compositon-api" aria-hidden="true">#</a> compositon Api</h4><ul><li>\u53EF\u4E0E\u73B0\u6709\u7684<code>Options API</code>\u4E00\u8D77\u4F7F\u7528</li><li>\u7075\u6D3B\u7684\u903B\u8F91\u7EC4\u5408\u4E0E\u590D\u7528</li><li><code>Vue3</code>\u6A21\u5757\u53EF\u4EE5\u548C\u5176\u4ED6\u6846\u67B6\u642D\u914D\u4F7F\u7528</li></ul><p><img src="'+h+'" alt="08"></p><h4 id="\u66F4\u597D\u7684-typescript-\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u66F4\u597D\u7684-typescript-\u652F\u6301" aria-hidden="true">#</a> \u66F4\u597D\u7684 Typescript \u652F\u6301</h4><p><code>VUE3</code>\u662F\u57FA\u4E8E<code>typescipt</code>\u7F16\u5199\u7684\uFF0C\u53EF\u4EE5\u4EAB\u53D7\u5230\u81EA\u52A8\u7684\u7C7B\u578B\u5B9A\u4E49\u63D0\u793A</p><p><img src="'+m+'" alt="09"></p><h4 id="\u7F16\u8BD1\u5668\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5668\u91CD\u5199" aria-hidden="true">#</a> \u7F16\u8BD1\u5668\u91CD\u5199</h4><p><img src="'+b+'" alt="10"></p><h4 id="\u66F4\u63A5\u8FD1\u539F\u751F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u63A5\u8FD1\u539F\u751F" aria-hidden="true">#</a> \u66F4\u63A5\u8FD1\u539F\u751F</h4><p>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6E32\u67D3 API</p><p><img src="'+g+'" alt="11"></p><h4 id="\u66F4\u6613\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6613\u4F7F\u7528" aria-hidden="true">#</a> \u66F4\u6613\u4F7F\u7528</h4><p>\u54CD\u5E94\u5F0F <code>Api</code> \u66B4\u9732\u51FA\u6765</p><p><img src="'+v+'" alt="12"></p><p>\u8F7B\u677E\u8BC6\u522B\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u539F\u56E0</p><p><img src="'+n+`" alt="13"></p><h2 id="\u4E8C\u3001vue3-\u65B0\u589E\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001vue3-\u65B0\u589E\u7279\u6027" aria-hidden="true">#</a> \u4E8C\u3001Vue3 \u65B0\u589E\u7279\u6027</h2><p>Vue 3 \u4E2D\u9700\u8981\u5173\u6CE8\u7684\u4E00\u4E9B\u65B0\u529F\u80FD\u5305\u62EC\uFF1A</p><ul><li>framents</li><li>Teleport</li><li>composition Api</li><li>createRenderer</li></ul><h3 id="framents" tabindex="-1"><a class="header-anchor" href="#framents" aria-hidden="true">#</a> framents</h3><p>\u5728 <code>Vue3.x</code> \u4E2D\uFF0C\u7EC4\u4EF6\u73B0\u5728\u652F\u6301\u6709\u591A\u4E2A\u6839\u8282\u70B9</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- Layout.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h3><p><code>Teleport</code> \u662F\u4E00\u79CD\u80FD\u591F\u5C06\u6211\u4EEC\u7684\u6A21\u677F\u79FB\u52A8\u5230 <code>DOM</code> \u4E2D <code>Vue app</code> \u4E4B\u5916\u7684\u5176\u4ED6\u4F4D\u7F6E\u7684\u6280\u672F\uFF0C\u5C31\u6709\u70B9\u50CF\u54C6\u5566 A \u68A6\u7684\u201C\u4EFB\u610F\u95E8\u201D\uFF0C\u5178\u578B\u4F8B\u5B50\u2014\u2014\u5F39\u7A97\u5904\u7406</p><p>\u5728<code>vue2</code>\u4E2D\uFF0C\u50CF <code>modals</code>,<code>toast</code> \u7B49\u8FD9\u6837\u7684\u5143\u7D20\uFF0C\u5982\u679C\u6211\u4EEC\u5D4C\u5957\u5728 <code>Vue</code> \u7684\u67D0\u4E2A\u7EC4\u4EF6\u5185\u90E8\uFF0C\u90A3\u4E48\u5904\u7406\u5D4C\u5957\u7EC4\u4EF6\u7684\u5B9A\u4F4D\u3001<code>z-index</code> \u548C\u6837\u5F0F\u5C31\u4F1A\u53D8\u5F97\u5F88\u56F0\u96BE</p><p>\u901A\u8FC7<code>Teleport</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u7684\u903B\u8F91\u4F4D\u7F6E\u5199\u6A21\u677F\u4EE3\u7801\uFF0C\u7136\u540E\u5728 <code>Vue</code> \u5E94\u7528\u8303\u56F4\u4E4B\u5916\u6E32\u67D3\u5B83</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showToast<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6253\u5F00 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- to \u5C5E\u6027\u5C31\u662F\u76EE\u6807\u4F4D\u7F6E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#teleport-target<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toast-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toast-msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u4E00\u4E2A Toast \u6587\u6848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="createrenderer" tabindex="-1"><a class="header-anchor" href="#createrenderer" aria-hidden="true">#</a> createRenderer</h3><p>\u901A\u8FC7<code>createRenderer</code>\uFF0C\u6211\u4EEC\u80FD\u591F\u6784\u5EFA\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\uFF0C\u6211\u4EEC\u80FD\u591F\u5C06 <code>vue</code> \u7684\u5F00\u53D1\u6A21\u578B\u6269\u5C55\u5230\u5176\u4ED6\u5E73\u53F0</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u751F\u6210\u5728<code>canvas</code>\u753B\u5E03\u4E0A</p><p><img src="`+f+`" alt="14"></p><p>\u5173\u4E8E<code>createRenderer</code>\uFF0C\u6211\u4EEC\u4E86\u89E3\u4E0B\u57FA\u672C\u4F7F\u7528\uFF0C\u5C31\u4E0D\u5C55\u5F00\u8BB2\u8FF0\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/runtime-core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  patchProp<span class="token punctuation">,</span>
  insert<span class="token punctuation">,</span>
  remove<span class="token punctuation">,</span>
  createElement
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> createApp <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/runtime-core&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> composition Api</h3><p>composition Api\uFF0C\u4E5F\u5C31\u662F\u7EC4\u5408\u5F0F<code>api</code>\uFF0C\u901A\u8FC7\u8FD9\u79CD\u5F62\u5F0F\uFF0C\u6211\u4EEC\u80FD\u591F\u66F4\u52A0\u5BB9\u6613\u7EF4\u62A4\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u5C06\u76F8\u540C\u529F\u80FD\u7684\u53D8\u91CF\u8FDB\u884C\u4E00\u4E2A\u96C6\u4E2D\u5F0F\u7684\u7BA1\u7406</p><p><img src="`+_+'" alt="15"></p><p>\u5173\u4E8E<code>compositon api</code>\u7684\u4F7F\u7528\uFF0C\u8FD9\u91CC\u4EE5\u4E0B\u56FE\u5C55\u5F00</p><p><img src="'+x+`" alt="16"></p><p>\u7B80\u5355\u4F7F\u7528:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;component mounted!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      double<span class="token punctuation">,</span>
      increment
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4E09\u3001\u975E\u517C\u5BB9\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u975E\u517C\u5BB9\u53D8\u66F4" aria-hidden="true">#</a> \u4E09\u3001\u975E\u517C\u5BB9\u53D8\u66F4</h2><h3 id="global-api" tabindex="-1"><a class="header-anchor" href="#global-api" aria-hidden="true">#</a> Global API</h3><ul><li>\u5168\u5C40 <code>Vue API</code> \u5DF2\u66F4\u6539\u4E3A\u4F7F\u7528\u5E94\u7528\u7A0B\u5E8F\u5B9E\u4F8B</li><li>\u5168\u5C40\u548C\u5185\u90E8 <code>API</code> \u5DF2\u7ECF\u88AB\u91CD\u6784\u4E3A\u53EF <code>tree-shakable</code></li></ul><h3 id="\u6A21\u677F\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u6307\u4EE4" aria-hidden="true">#</a> \u6A21\u677F\u6307\u4EE4</h3><ul><li>\u7EC4\u4EF6\u4E0A <code>v-model</code> \u7528\u6CD5\u5DF2\u66F4\u6539</li><li><code>&lt;template v-for&gt;</code>\u548C \u975E <code>v-for</code>\u8282\u70B9\u4E0A<code>key</code>\u7528\u6CD5\u5DF2\u66F4\u6539</li><li>\u5728\u540C\u4E00\u5143\u7D20\u4E0A\u4F7F\u7528\u7684 <code>v-if</code> \u548C <code>v-for</code> \u4F18\u5148\u7EA7\u5DF2\u66F4\u6539</li><li><code>v-bind=&quot;object&quot;</code> \u73B0\u5728\u6392\u5E8F\u654F\u611F</li><li><code>v-for</code> \u4E2D\u7684 <code>ref</code> \u4E0D\u518D\u6CE8\u518C <code>ref</code> \u6570\u7EC4</li></ul><h3 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h3><ul><li>\u53EA\u80FD\u4F7F\u7528\u666E\u901A\u51FD\u6570\u521B\u5EFA\u529F\u80FD\u7EC4\u4EF6</li><li><code>functional</code> \u5C5E\u6027\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6 <code>(SFC)</code></li><li>\u5F02\u6B65\u7EC4\u4EF6\u73B0\u5728\u9700\u8981 <code>defineAsyncComponent</code> \u65B9\u6CD5\u6765\u521B\u5EFA</li></ul><h3 id="\u6E32\u67D3\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u51FD\u6570" aria-hidden="true">#</a> \u6E32\u67D3\u51FD\u6570</h3><ul><li>\u6E32\u67D3\u51FD\u6570<code>API</code>\u6539\u53D8</li><li><code>$scopedSlots</code> property \u5DF2\u5220\u9664\uFF0C\u6240\u6709\u63D2\u69FD\u90FD\u901A\u8FC7 <code>$slots</code> \u4F5C\u4E3A\u51FD\u6570\u66B4\u9732</li><li>\u81EA\u5B9A\u4E49\u6307\u4EE4 API \u5DF2\u66F4\u6539\u4E3A\u4E0E\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4E00\u81F4</li><li>\u4E00\u4E9B\u8F6C\u6362 <code>class</code> \u88AB\u91CD\u547D\u540D\u4E86\uFF1A <ul><li><code>v-enter</code> -&gt; <code>v-enter-from</code></li><li><code>v-leave</code> -&gt; <code>v-leave-from</code></li></ul></li><li>\u7EC4\u4EF6 <code>watch</code> \u9009\u9879\u548C\u5B9E\u4F8B\u65B9\u6CD5 <code>$watch</code>\u4E0D\u518D\u652F\u6301\u70B9\u5206\u9694\u5B57\u7B26\u4E32\u8DEF\u5F84\uFF0C\u8BF7\u6539\u7528\u8BA1\u7B97\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</li><li>\u5728 <code>Vue 2.x</code> \u4E2D\uFF0C\u5E94\u7528\u6839\u5BB9\u5668\u7684 <code>outerHTML</code> \u5C06\u66FF\u6362\u4E3A\u6839\u7EC4\u4EF6\u6A21\u677F (\u5982\u679C\u6839\u7EC4\u4EF6\u6CA1\u6709\u6A21\u677F/\u6E32\u67D3\u9009\u9879\uFF0C\u5219\u6700\u7EC8\u7F16\u8BD1\u4E3A\u6A21\u677F)\u3002<code>VUE3.x</code> \u73B0\u5728\u4F7F\u7528\u5E94\u7528\u7A0B\u5E8F\u5BB9\u5668\u7684 <code>innerHTML</code>\u3002</li></ul><h3 id="\u5176\u4ED6\u5C0F\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5C0F\u6539\u53D8" aria-hidden="true">#</a> \u5176\u4ED6\u5C0F\u6539\u53D8</h3><ul><li><code>destroyed</code> \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A <code>unmounted</code></li><li><code>beforeDestroy</code> \u751F\u547D\u5468\u671F\u9009\u9879\u88AB\u91CD\u547D\u540D\u4E3A <code>beforeUnmount</code></li><li><code>[prop default</code>\u5DE5\u5382\u51FD\u6570\u4E0D\u518D\u6709\u6743\u8BBF\u95EE <code>this</code> \u662F\u4E0A\u4E0B\u6587</li><li>\u81EA\u5B9A\u4E49\u6307\u4EE4 API \u5DF2\u66F4\u6539\u4E3A\u4E0E\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4E00\u81F4</li><li><code>data</code> \u5E94\u59CB\u7EC8\u58F0\u660E\u4E3A\u51FD\u6570</li><li>\u6765\u81EA <code>mixin</code> \u7684 <code>data</code> \u9009\u9879\u73B0\u5728\u53EF\u7B80\u5355\u5730\u5408\u5E76</li><li><code>attribute</code> \u5F3A\u5236\u7B56\u7565\u5DF2\u66F4\u6539</li><li>\u4E00\u4E9B\u8FC7\u6E21 <code>class</code> \u88AB\u91CD\u547D\u540D</li><li>\u7EC4\u5EFA watch \u9009\u9879\u548C\u5B9E\u4F8B\u65B9\u6CD5 <code>$watch</code>\u4E0D\u518D\u652F\u6301\u4EE5\u70B9\u5206\u9694\u7684\u5B57\u7B26\u4E32\u8DEF\u5F84\u3002\u8BF7\u6539\u7528\u8BA1\u7B97\u5C5E\u6027\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u3002</li><li><code>&lt;template&gt;</code> \u6CA1\u6709\u7279\u6B8A\u6307\u4EE4\u7684\u6807\u8BB0 (<code>v-if/else-if/else</code>\u3001<code>v-for</code> \u6216 <code>v-slot</code>) \u73B0\u5728\u88AB\u89C6\u4E3A\u666E\u901A\u5143\u7D20\uFF0C\u5E76\u5C06\u751F\u6210\u539F\u751F\u7684 <code>&lt;template&gt;</code> \u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u6E32\u67D3\u5176\u5185\u90E8\u5185\u5BB9\u3002</li><li>\u5728<code>Vue 2.x</code> \u4E2D\uFF0C\u5E94\u7528\u6839\u5BB9\u5668\u7684 <code>outerHTML</code> \u5C06\u66FF\u6362\u4E3A\u6839\u7EC4\u4EF6\u6A21\u677F (\u5982\u679C\u6839\u7EC4\u4EF6\u6CA1\u6709\u6A21\u677F/\u6E32\u67D3\u9009\u9879\uFF0C\u5219\u6700\u7EC8\u7F16\u8BD1\u4E3A\u6A21\u677F)\u3002<code>Vue 3.x</code> \u73B0\u5728\u4F7F\u7528\u5E94\u7528\u5BB9\u5668\u7684 <code>innerHTML</code>\uFF0C\u8FD9\u610F\u5473\u7740\u5BB9\u5668\u672C\u8EAB\u4E0D\u518D\u88AB\u89C6\u4E3A\u6A21\u677F\u7684\u4E00\u90E8\u5206\u3002</li></ul><h3 id="\u79FB\u9664-api" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664-api" aria-hidden="true">#</a> \u79FB\u9664 API</h3><ul><li><code>keyCode</code> \u652F\u6301\u4F5C\u4E3A <code>v-on</code> \u7684\u4FEE\u9970\u7B26</li><li><code>$on</code>\uFF0C<code>$off</code>\u548C<code>$once</code> \u5B9E\u4F8B\u65B9\u6CD5</li><li>\u8FC7\u6EE4<code>filter</code></li><li>\u5185\u8054\u6A21\u677F <code>attribute</code></li><li><code>$destroy</code> \u5B9E\u4F8B\u65B9\u6CD5\u3002\u7528\u6237\u4E0D\u5E94\u518D\u624B\u52A8\u7BA1\u7406\u5355\u4E2A<code>Vue</code> \u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,77),V={href:"https://v3.cn.vuejs.org/guide/introduction.html",target:"_blank",rel:"noopener noreferrer"},w=u("vue3 \u4E2D\u6587\u7F51");function A(T,I){const s=t("ExternalLinkIcon");return p(),o(l,null,[q,a("ul",null,[a("li",null,[a("a",V,[w,c(s)])])])],64)}var $=e(y,[["render",A],["__file","vue3_vue2.html.vue"]]);export{$ as default};
