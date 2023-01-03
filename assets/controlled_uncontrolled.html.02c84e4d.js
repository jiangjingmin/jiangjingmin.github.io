import{_ as e,r as o,o as c,c as l,a as n,b as t,F as u,e as p,d as s}from"./app.77cde27d.js";const r={},i=p(`<h1 id="\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6</h1><h2 id="\u4E00\u3001\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E00\u3001\u53D7\u63A7\u7EC4\u4EF6</h2><p>\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u6240\u6709\u8F93\u5165\u7C7B\u7684DOM\uFF0C\u968F\u7740\u8F93\u5165\u7684\u6539\u53D8\uFF0C\u5C06\u72B6\u6001\u7EF4\u62A4\u5230\u72B6\u6001\u91CC\u9762\u53BB\uFF0C\u9700\u8981\u7528\u7684\u65F6\u5019\u76F4\u63A5\u4ECE\u72B6\u6001\u91CC\u9762\u53D6\u3002\u76F8\u5F53\u4E8Evue\u4E2D\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;lindaidai&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u65F6\u5019\u5F53\u6211\u4EEC\u5728\u8F93\u5165\u6846\u8F93\u5165\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u4F1A\u53D1\u73B0\u8F93\u5165\u7684\u5185\u5BB9\u5E76\u65E0\u6CD5\u663E\u793A\u51FA\u6765\uFF0C\u4E5F\u5C31\u662F<code>input</code>\u6807\u7B7E\u662F\u4E00\u4E2A\u53EF\u8BFB\u7684\u72B6\u6001</p><p>\u8FD9\u662F\u56E0\u4E3A<code>value</code>\u88AB<code>this.state.username</code>\u6240\u63A7\u5236\u4F4F\u3002\u5F53\u7528\u6237\u8F93\u5165\u65B0\u7684\u5185\u5BB9\u65F6\uFF0C<code>this.state.username</code>\u5E76\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u8FD9\u6837\u7684\u8BDD<code>input</code>\u5185\u7684\u5185\u5BB9\u4E5F\u5C31\u4E0D\u4F1A\u53D8\u4E86</p><p>\u5982\u679C\u60F3\u8981\u89E3\u9664\u88AB\u63A7\u5236\uFF0C\u53EF\u4EE5\u4E3A<code>input</code>\u6807\u7B7E\u8BBE\u7F6E<code>onChange</code>\u4E8B\u4EF6\uFF0C\u8F93\u5165\u7684\u65F6\u5019\u89E6\u53D1\u4E8B\u4EF6\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u5B9E\u73B0<code>state</code>\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u5BFC\u81F4<code>input</code>\u6846\u7684\u5185\u5BB9\u9875\u53D1\u73B0\u6539\u53D8</p><p>\u56E0\u6B64\uFF0C\u53D7\u63A7\u7EC4\u4EF6\u6211\u4EEC\u4E00\u822C\u9700\u8981\u521D\u59CB\u72B6\u6001\u548C\u4E00\u4E2A\u72B6\u6001\u66F4\u65B0\u4E8B\u4EF6\u51FD\u6570</p><h2 id="\u4E8C\u3001\u975E\u53D7\u63A7\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u975E\u53D7\u63A7\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E8C\u3001\u975E\u53D7\u63A7\u7EC4\u4EF6</h2><p>\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u6240\u6709\u8F93\u5165\u7C7B\u7684DOM\uFF0C\u73B0\u7528\u73B0\u53D6\uFF08\u901A\u8FC7ref\u7B49\u65B9\u5F0F\u83B7\u53D6\uFF09\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u662F\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u63A5\u53D7\u5916\u90E8\u6570\u636E\uFF0C\u7136\u540E\u81EA\u5DF1\u5728\u5185\u90E8\u5B58\u50A8\u5176\u81EA\u8EAB\u72B6\u6001</p><p>\u5F53\u9700\u8981\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>ref</code> \u67E5\u8BE2 <code>DOM</code>\u5E76\u67E5\u627E\u5176\u5F53\u524D\u503C\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UnControll</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u4EEC\u53EF\u4EE5\u83B7\u5F97input\u5185\u7684\u503C\u4E3A&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lindaidai<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u4EA4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,14),k=s("\u5173\u4E8E"),d=n("code",null,"refs",-1),m=s("\u7684\u8BE6\u60C5\u4F7F\u7528\u53EF\u4EE5\u53C2\u8003"),b={href:"https://mp.weixin.qq.com/s/ZBKWcslVBi0IKQgz7lYzbA",target:"_blank",rel:"noopener noreferrer"},h=s("\u4E4B\u524D\u6587\u7AE0"),g=p('<h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u5927\u90E8\u5206\u65F6\u5019\u63A8\u8350\u4F7F\u7528\u53D7\u63A7\u7EC4\u4EF6\u6765\u5B9E\u73B0\u8868\u5355\uFF0C\u56E0\u4E3A\u5728\u53D7\u63A7\u7EC4\u4EF6\u4E2D\uFF0C\u8868\u5355\u6570\u636E\u7531<code>React</code>\u7EC4\u4EF6\u8D1F\u8D23\u5904\u7406</p><p>\u5982\u679C\u9009\u62E9\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u63A7\u5236\u80FD\u529B\u8F83\u5F31\uFF0C\u8868\u5355\u6570\u636E\u5C31\u7531<code>DOM</code>\u672C\u8EAB\u5904\u7406\uFF0C\u4F46\u66F4\u52A0\u65B9\u4FBF\u5FEB\u6377\uFF0C\u4EE3\u7801\u91CF\u5C11</p><p>\u9488\u5BF9\u4E24\u8005\u7684\u533A\u522B\uFF0C\u5176\u5E94\u7528\u573A\u666F\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/f28aed20-df2f-11eb-ab90-d9ae814b240d.png" alt="01"></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',6),f={href:"http://meloguo.com/2018/10/08/%E5%8F%97%E6%8E%A7%E4%B8%8E%E9%9D%9E%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6/",target:"_blank",rel:"noopener noreferrer"},_=s("http://meloguo.com/2018/10/08/\u53D7\u63A7\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6/"),v={href:"https://zhuanlan.zhihu.com/p/37579677",target:"_blank",rel:"noopener noreferrer"},x=s("https://zhuanlan.zhihu.com/p/37579677");function y(w,E){const a=o("ExternalLinkIcon");return c(),l(u,null,[i,n("p",null,[k,d,m,n("a",b,[h,t(a)])]),g,n("ul",null,[n("li",null,[n("a",f,[_,t(a)])]),n("li",null,[n("a",v,[x,t(a)])])])],64)}var B=e(r,[["render",y],["__file","controlled_uncontrolled.html.vue"]]);export{B as default};
