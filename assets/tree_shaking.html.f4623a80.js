import{_ as a,r as p,o as e,c as t,a as n,b as o,F as c,e as l,d as u}from"./app.77cde27d.js";var r="/assets/26.e4588b89.png",i="/assets/27.00ab49b9.png",k="/assets/28.db75ab93.png",d="/assets/29.559ae51b.png",b="/assets/30.edfa59cd.png";const m={},h=l('<h1 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> tree shaking</h1><p><img src="'+r+`" alt="26"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>tree shaking</code> \u662F\u4E00\u79CD\u901A\u8FC7\u6E05\u9664\u591A\u4F59\u4EE3\u7801\u65B9\u5F0F\u6765\u4F18\u5316\u9879\u76EE\u6253\u5305\u4F53\u79EF\u7684\u6280\u672F\uFF0C\u4E13\u4E1A\u672F\u8BED\u53EB <code>Dead code elimination</code></p><p>\u7B80\u5355\u6765\u8BB2\uFF0C\u5C31\u662F\u5728\u4FDD\u6301\u4EE3\u7801\u8FD0\u884C\u7ED3\u679C\u4E0D\u53D8\u7684\u524D\u63D0\u4E0B\uFF0C\u53BB\u9664\u65E0\u7528\u7684\u4EE3\u7801</p><p>\u5982\u679C\u628A\u4EE3\u7801\u6253\u5305\u6BD4\u4F5C\u5236\u4F5C\u86CB\u7CD5\uFF0C\u4F20\u7EDF\u7684\u65B9\u5F0F\u662F\u628A\u9E21\u86CB\uFF08\u5E26\u58F3\uFF09\u5168\u90E8\u4E22\u8FDB\u53BB\u6405\u62CC\uFF0C\u7136\u540E\u653E\u5165\u70E4\u7BB1\uFF0C\u6700\u540E\u628A\uFF08\u6CA1\u6709\u7528\u7684\uFF09\u86CB\u58F3\u5168\u90E8\u6311\u9009\u5E76\u5254\u9664\u51FA\u53BB</p><p>\u800C<code>tree shaking</code>\u5219\u662F\u4E00\u5F00\u59CB\u5C31\u628A\u6709\u7528\u7684\u86CB\u767D\u86CB\u9EC4\uFF08import\uFF09\u653E\u5165\u6405\u62CC\uFF0C\u6700\u540E\u76F4\u63A5\u4F5C\u51FA\u86CB\u7CD5</p><p>\u4E5F\u5C31\u662F\u8BF4 \uFF0C<code>tree shaking</code> \u5176\u5B9E\u662F\u627E\u51FA\u4F7F\u7528\u7684\u4EE3\u7801</p><p>\u5728<code>Vue2</code>\u4E2D\uFF0C\u65E0\u8BBA\u6211\u4EEC\u4F7F\u7528\u4EC0\u4E48\u529F\u80FD\uFF0C\u5B83\u4EEC\u6700\u7EC8\u90FD\u4F1A\u51FA\u73B0\u5728\u751F\u4EA7\u4EE3\u7801\u4E2D\u3002\u4E3B\u8981\u539F\u56E0\u662F<code>Vue</code>\u5B9E\u4F8B\u5728\u9879\u76EE\u4E2D\u662F\u5355\u4F8B\u7684\uFF0C\u6346\u7ED1\u7A0B\u5E8F\u65E0\u6CD5\u68C0\u6D4B\u5230\u8BE5\u5BF9\u8C61\u7684\u54EA\u4E9B\u5C5E\u6027\u5728\u4EE3\u7801\u4E2D\u88AB\u4F7F\u7528\u5230</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u800C<code>Vue3</code>\u6E90\u7801\u5F15\u5165<code>tree shaking</code>\u7279\u6027\uFF0C\u5C06\u5168\u5C40 API \u8FDB\u884C\u5206\u5757\u3002\u5982\u679C\u60A8\u4E0D\u4F7F\u7528\u5176\u67D0\u4E9B\u529F\u80FD\uFF0C\u5B83\u4EEC\u5C06\u4E0D\u4F1A\u5305\u542B\u5728\u60A8\u7684\u57FA\u7840\u5305\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick<span class="token punctuation">,</span> observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E8C\u3001\u5982\u4F55\u505A" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u505A" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u505A</h2><p><code>Tree shaking</code>\u662F\u57FA\u4E8E<code>ES6</code>\u6A21\u677F\u8BED\u6CD5\uFF08<code>import</code>\u4E0E<code>exports</code>\uFF09\uFF0C\u4E3B\u8981\u662F\u501F\u52A9<code>ES6</code>\u6A21\u5757\u7684\u9759\u6001\u7F16\u8BD1\u601D\u60F3\uFF0C\u5728\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF</p><p><code>Tree shaking</code>\u65E0\u975E\u5C31\u662F\u505A\u4E86\u4E24\u4EF6\u4E8B\uFF1A</p><ul><li>\u7F16\u8BD1\u9636\u6BB5\u5229\u7528<code>ES6 Module</code>\u5224\u65AD\u54EA\u4E9B\u6A21\u5757\u5DF2\u7ECF\u52A0\u8F7D</li><li>\u5224\u65AD\u90A3\u4E9B\u6A21\u5757\u548C\u53D8\u91CF\u672A\u88AB\u4F7F\u7528\u6216\u8005\u5F15\u7528\uFF0C\u8FDB\u800C\u5220\u9664\u5BF9\u5E94\u4EE3\u7801</li></ul><p>\u4E0B\u9762\u5C31\u6765\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><p>\u901A\u8FC7\u811A\u624B\u67B6<code>vue-cli</code>\u5B89\u88C5<code>Vue2</code>\u4E0E<code>Vue3</code>\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue create vue-demo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="vue2-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue2-\u9879\u76EE" aria-hidden="true">#</a> Vue2 \u9879\u76EE</h3><p>\u7EC4\u4EF6\u4E2D\u4F7F\u7528<code>data</code>\u5C5E\u6027</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5BF9\u9879\u76EE\u8FDB\u884C\u6253\u5305\uFF0C\u4F53\u79EF\u5982\u4E0B\u56FE</p><p><img src="`+i+`" alt="27"></p><p>\u4E3A\u7EC4\u4EF6\u8BBE\u7F6E\u5176\u4ED6\u5C5E\u6027\uFF08<code>compted</code>\u3001<code>watch</code>\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">question</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">double</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">question</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newQuestion<span class="token punctuation">,</span> oldQuestion</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token string">&#39;xxxx&#39;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u518D\u4E00\u6B21\u6253\u5305\uFF0C\u53D1\u73B0\u6253\u5305\u51FA\u6765\u7684\u4F53\u79EF\u5E76\u6CA1\u6709\u53D8\u5316</p><p><img src="`+k+`" alt="28"></p><h3 id="vue3-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue3-\u9879\u76EE" aria-hidden="true">#</a> Vue3 \u9879\u76EE</h3><p>\u7EC4\u4EF6\u4E2D\u7B80\u5355\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5C06\u9879\u76EE\u8FDB\u884C\u6253\u5305</p><p><img src="`+d+`" alt="29"></p><p>\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165<code>computed</code>\u548C<code>watch</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> preCount</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>preCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      double
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u518D\u6B21\u5BF9\u9879\u76EE\u8FDB\u884C\u6253\u5305\uFF0C\u53EF\u4EE5\u770B\u5230\u5728\u5F15\u5165<code>computer</code>\u548C<code>watch</code>\u4E4B\u540E\uFF0C\u9879\u76EE\u6574\u4F53\u4F53\u79EF\u53D8\u5927\u4E86</p><p><img src="`+b+'" alt="30"></p><h2 id="\u4E09\u3001\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F5C\u7528" aria-hidden="true">#</a> \u4E09\u3001\u4F5C\u7528</h2><p>\u901A\u8FC7<code>Tree shaking</code>\uFF0C<code>Vue3</code>\u7ED9\u6211\u4EEC\u5E26\u6765\u7684\u597D\u5904\u662F\uFF1A</p><ul><li>\u51CF\u5C11\u7A0B\u5E8F\u4F53\u79EF\uFF08\u66F4\u5C0F\uFF09</li><li>\u51CF\u5C11\u7A0B\u5E8F\u6267\u884C\u65F6\u95F4\uFF08\u66F4\u5FEB\uFF09</li><li>\u4FBF\u4E8E\u5C06\u6765\u5BF9\u7A0B\u5E8F\u67B6\u6784\u8FDB\u884C\u4F18\u5316\uFF08\u66F4\u53CB\u597D\uFF09</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',41),g={href:"https://segmentfault.com/a/1190000038962700",target:"_blank",rel:"noopener noreferrer"},v=u("https://segmentfault.com/a/1190000038962700");function f(y,w){const s=p("ExternalLinkIcon");return e(),t(c,null,[h,n("ul",null,[n("li",null,[n("a",g,[v,o(s)])])])],64)}var x=a(m,[["render",f],["__file","tree_shaking.html.vue"]]);export{x as default};
