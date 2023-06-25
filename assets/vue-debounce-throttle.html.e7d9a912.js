import{_ as t,r as p,o,c,a as n,b as a,F as l,e as r,d as e}from"./app.cec2e512.js";const u={},i=r(`<h1 id="vue\u9632\u6296\u8C03\u7814" tabindex="-1"><a class="header-anchor" href="#vue\u9632\u6296\u8C03\u7814" aria-hidden="true">#</a> vue\u9632\u6296\u8C03\u7814</h1><blockquote><p>\u66F4\u65B0\uFF1A2021-12-14</p></blockquote><h2 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u9632\u6296, \u6267\u884C\u6700\u540E\u4E00\u6B21, \u5E38\u7528\u4E8E\u641C\u7D22\u6846, \u7A97\u53E3\u7F29\u653E\u7B49
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> \u5904\u7406\u51FD\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">wait</span> \u5EF6\u8FDF\u65F6\u95F4
 * <span class="token keyword">@returns</span> Function
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u8282\u6D41, \u6267\u884C\u7B2C\u4E00\u6B21, \u5E38\u7528\u4E8E\u8868\u5355\u9632\u91CD\u590D\u63D0\u4EA4\u7B49
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> \u5904\u7406\u51FD\u6570
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">wait</span> \u5EF6\u8FDF\u65F6\u95F4
 * <span class="token keyword">@returns</span> Function
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u5B98\u65B9\u63A8\u8350\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u63A8\u8350\u5199\u6CD5" aria-hidden="true">#</a> \u5B98\u65B9\u63A8\u8350\u5199\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://v3.cn.vuejs.org/guide/data-methods.html#\u9632\u6296\u548C\u8282\u6D41
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u8D70\u8FC7\u7684\u5F2F\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u8D70\u8FC7\u7684\u5F2F\u8DEF" aria-hidden="true">#</a> \u8D70\u8FC7\u7684\u5F2F\u8DEF</h2><ol><li>debounce \u5B9A\u4E49\u5728\u4E86 methods \u91CC\u9762</li><li><code>&lt;input @change=&quot;debounce(submit(xxx), 500)&quot;&gt;</code></li><li>methods \u5192\u53F7\u5199\u6CD5</li><li>lodash \u7684\u7B2C\u56DB\u4E2A\u53C2\u6570 { trailing: false } \u5FC5\u987B\u5199</li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,11),k={href:"https://dmitripavlutin.com/vue-debounce-throttle/",target:"_blank",rel:"noopener noreferrer"},d=e("vue-debounce-throttle"),b={href:"https://juejin.cn/post/6921532337029283854",target:"_blank",rel:"noopener noreferrer"},m=e("\u5728vue\u7528throttle\u5C45\u7136\u8FD9\u4E48\u9ED1\u76D2");function h(f,v){const s=p("ExternalLinkIcon");return o(),c(l,null,[i,n("ol",null,[n("li",null,[n("a",k,[d,a(s)])]),n("li",null,[n("a",b,[m,a(s)])])])],64)}var g=t(u,[["render",h],["__file","vue-debounce-throttle.html.vue"]]);export{g as default};
