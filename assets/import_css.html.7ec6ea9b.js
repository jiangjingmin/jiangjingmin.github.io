import{_ as e,r as o,o as c,c as l,a as s,b as a,F as r,e as t,d as p}from"./app.6e1280c8.js";const u={},i=t(`<h1 id="react\u5F15\u5165css\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#react\u5F15\u5165css\u7684\u65B9\u5F0F" aria-hidden="true">#</a> react\u5F15\u5165css\u7684\u65B9\u5F0F</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u7EC4\u4EF6\u5F0F\u5F00\u53D1\u9009\u62E9\u5408\u9002\u7684<code>css</code>\u89E3\u51B3\u65B9\u6848\u5C24\u4E3A\u91CD\u8981</p><p>\u901A\u5E38\u4F1A\u9075\u5FAA\u4EE5\u4E0B\u89C4\u5219\uFF1A</p><ul><li>\u53EF\u4EE5\u7F16\u5199\u5C40\u90E8css\uFF0C\u4E0D\u4F1A\u968F\u610F\u6C61\u67D3\u5176\u4ED6\u7EC4\u4EF6\u5185\u7684\u539F\u751F\uFF1B</li><li>\u53EF\u4EE5\u7F16\u5199\u52A8\u6001\u7684css\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u7684\u4E00\u4E9B\u72B6\u6001\uFF0C\u6839\u636E\u72B6\u6001\u7684\u53D8\u5316\u751F\u6210\u4E0D\u540C\u7684css\u6837\u5F0F\uFF1B</li><li>\u652F\u6301\u6240\u6709\u7684css\u7279\u6027\uFF1A\u4F2A\u7C7B\u3001\u52A8\u753B\u3001\u5A92\u4F53\u67E5\u8BE2\u7B49\uFF1B</li><li>\u7F16\u5199\u8D77\u6765\u7B80\u6D01\u65B9\u4FBF\u3001\u6700\u597D\u7B26\u5408\u4E00\u8D2F\u7684css\u98CE\u683C\u7279\u70B9</li></ul><p>\u5728\u8FD9\u4E00\u65B9\u9762\uFF0C<code>vue</code>\u4F7F\u7528<code>css</code>\u8D77\u6765\u66F4\u4E3A\u7B80\u6D01\uFF1A</p><ul><li>\u901A\u8FC7 style \u6807\u7B7E\u7F16\u5199\u6837\u5F0F</li><li>scoped \u5C5E\u6027\u51B3\u5B9A\u7F16\u5199\u7684\u6837\u5F0F\u662F\u5426\u5C40\u90E8\u6709\u6548</li><li>lang \u5C5E\u6027\u8BBE\u7F6E\u9884\u5904\u7406\u5668</li><li>\u5185\u8054\u6837\u5F0F\u98CE\u683C\u7684\u65B9\u5F0F\u6765\u6839\u636E\u6700\u65B0\u72B6\u6001\u8BBE\u7F6E\u548C\u6539\u53D8css</li></ul><p>\u800C\u5728<code>react</code>\u4E2D\uFF0C\u5F15\u5165<code>CSS</code>\u5C31\u4E0D\u5982<code>Vue</code>\u65B9\u4FBF\u7B80\u6D01\uFF0C\u5176\u5F15\u5165<code>css</code>\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF0C\u5404\u6709\u5229\u5F0A</p><h2 id="\u4E8C\u3001\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8C\u3001\u65B9\u5F0F</h2><p>\u5E38\u89C1\u7684<code>CSS</code>\u5F15\u5165\u65B9\u5F0F\u6709\u4EE5\u4E0B\uFF1A</p><ul><li>\u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528</li><li>\u7EC4\u4EF6\u4E2D\u5F15\u5165 .css \u6587\u4EF6</li><li>\u7EC4\u4EF6\u4E2D\u5F15\u5165 .module.css \u6587\u4EF6</li><li>CSS in JS</li></ul><h3 id="\u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528</h3><p>\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E2D\u4E66\u5199<code>css</code>\u6837\u5F0F\uFF0C\u901A\u8FC7<code>style</code>\u5C5E\u6027\u76F4\u63A5\u5F15\u5165\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> div1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&quot;30px auto&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&quot;#44014C&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u9A7C\u5CF0\u6CD5</span>
  <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boxSizing</span><span class="token operator">:</span> <span class="token string">&quot;border-box&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>div1<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token number">123</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C<code>css</code>\u5C5E\u6027\u9700\u8981\u8F6C\u6362\u6210\u9A7C\u5CF0\u5199\u6CD5</p><p>\u8FD9\u79CD\u65B9\u5F0F\u4F18\u70B9\uFF1A</p><ul><li>\u5185\u8054\u6837\u5F0F, \u6837\u5F0F\u4E4B\u95F4\u4E0D\u4F1A\u6709\u51B2\u7A81</li><li>\u53EF\u4EE5\u52A8\u6001\u83B7\u53D6\u5F53\u524Dstate\u4E2D\u7684\u72B6\u6001</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li><p>\u5199\u6CD5\u4E0A\u90FD\u9700\u8981\u4F7F\u7528\u9A7C\u5CF0\u6807\u8BC6</p></li><li><p>\u67D0\u4E9B\u6837\u5F0F\u6CA1\u6709\u63D0\u793A</p></li><li><p>\u5927\u91CF\u7684\u6837\u5F0F, \u4EE3\u7801\u6DF7\u4E71</p></li><li><p>\u67D0\u4E9B\u6837\u5F0F\u65E0\u6CD5\u7F16\u5199(\u6BD4\u5982\u4F2A\u7C7B/\u4F2A\u5143\u7D20)</p></li></ul><h3 id="\u7EC4\u4EF6\u4E2D\u5F15\u5165css\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E2D\u5F15\u5165css\u6587\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E2D\u5F15\u5165css\u6587\u4EF6</h3><p>\u5C06<code>css</code>\u5355\u72EC\u5199\u5728\u4E00\u4E2A<code>css</code>\u6587\u4EF6\u4E2D\uFF0C\u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u5F15\u5165</p><p><code>App.css</code>\u6587\u4EF6\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.desc</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7EC4\u4EF6\u4E2D\u5F15\u5165\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span>\u6211\u662FApp\u7684\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;desc&quot;</span><span class="token operator">&gt;</span>\u6211\u662FApp\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57\u63CF\u8FF0<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Home<span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u5B58\u5728\u4E0D\u597D\u7684\u5730\u65B9\u5728\u4E8E\u6837\u5F0F\u662F\u5168\u5C40\u751F\u6548\uFF0C\u6837\u5F0F\u4E4B\u95F4\u4F1A\u4E92\u76F8\u5F71\u54CD</p><h3 id="\u7EC4\u4EF6\u4E2D\u5F15\u5165-module-css-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E2D\u5F15\u5165-module-css-\u6587\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E2D\u5F15\u5165 .module.css \u6587\u4EF6</h3><p>\u5C06<code>css</code>\u6587\u4EF6\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u5757\u5F15\u5165\uFF0C\u8FD9\u4E2A\u6A21\u5757\u4E2D\u7684\u6240\u6709<code>css</code>\uFF0C\u53EA\u4F5C\u7528\u4E8E\u5F53\u524D\u7EC4\u4EF6\u3002\u4E0D\u4F1A\u5F71\u54CD\u5F53\u524D\u7EC4\u4EF6\u7684\u540E\u4EE3\u7EC4\u4EF6</p><p>\u8FD9\u79CD\u65B9\u5F0F\u662F<code>webpack</code>\u7279\u5DE5\u7684\u65B9\u6848\uFF0C\u53EA\u9700\u8981\u914D\u7F6E<code>webpack</code>\u914D\u7F6E\u6587\u4EF6\u4E2D<code>modules:true</code>\u5373\u53EF</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./Home&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./App.module.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u6211\u662FApp\u7684\u6807\u9898</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u6211\u662FApp\u4E2D\u7684\u4E00\u6BB5\u6587\u5B57\u63CF\u8FF0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u80FD\u591F\u89E3\u51B3\u5C40\u90E8\u4F5C\u7528\u57DF\u95EE\u9898\uFF0C\u4F46\u4E5F\u6709\u4E00\u5B9A\u7684\u7F3A\u9677\uFF1A</p><ul><li>\u5F15\u7528\u7684\u7C7B\u540D\uFF0C\u4E0D\u80FD\u4F7F\u7528\u8FDE\u63A5\u7B26(.xxx-xx)\uFF0C\u5728 JavaScript \u4E2D\u662F\u4E0D\u8BC6\u522B\u7684</li><li>\u6240\u6709\u7684 className \u90FD\u5FC5\u987B\u4F7F\u7528 {style.className} \u7684\u5F62\u5F0F\u6765\u7F16\u5199</li><li>\u4E0D\u65B9\u4FBF\u52A8\u6001\u6765\u4FEE\u6539\u67D0\u4E9B\u6837\u5F0F\uFF0C\u4F9D\u7136\u9700\u8981\u4F7F\u7528\u5185\u8054\u6837\u5F0F\u7684\u65B9\u5F0F\uFF1B</li></ul><h3 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS in JS</h3><p>CSS-in-JS\uFF0C \u662F\u6307\u4E00\u79CD\u6A21\u5F0F\uFF0C\u5176\u4E2D<code>CSS</code>\u7531 <code>JavaScript</code>\u751F\u6210\u800C\u4E0D\u662F\u5728\u5916\u90E8\u6587\u4EF6\u4E2D\u5B9A\u4E49</p><p>\u6B64\u529F\u80FD\u5E76\u4E0D\u662F React \u7684\u4E00\u90E8\u5206\uFF0C\u800C\u662F\u7531\u7B2C\u4E09\u65B9\u5E93\u63D0\u4F9B\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>styled-components</li><li>emotion</li><li>glamorous</li></ul><p>\u4E0B\u9762\u4E3B\u8981\u770B\u770B<code>styled-components</code>\u7684\u57FA\u672C\u4F7F\u7528</p><p>\u672C\u8D28\u662F\u901A\u8FC7\u51FD\u6570\u7684\u8C03\u7528\uFF0C\u6700\u7EC8\u521B\u5EFA\u51FA\u4E00\u4E2A\u7EC4\u4EF6\uFF1A</p><ul><li>\u8FD9\u4E2A\u7EC4\u4EF6\u4F1A\u88AB\u81EA\u52A8\u6DFB\u52A0\u4E0A\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684class</li><li>styled-components\u4F1A\u7ED9\u8BE5class\u6DFB\u52A0\u76F8\u5173\u7684\u6837\u5F0F</li></ul><p>\u57FA\u672C\u4F7F\u7528\u5982\u4E0B\uFF1A</p><p>\u521B\u5EFA\u4E00\u4E2A<code>style.js</code>\u6587\u4EF6\u7528\u4E8E\u5B58\u653E\u6837\u5F0F\u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> SelfLink <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  height: 50px;
  border: 1px solid red;
  color: yellow;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SelfButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  height: 150px;
  width: 150px;
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  background-image: url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token parameter">props</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);
  background-size: 150px 150px;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5F15\u5165\u6837\u5F0F\u7EC4\u4EF6\u4E5F\u5F88\u7B80\u5355\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SelfLink<span class="token punctuation">,</span> SelfButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./style&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>  
 
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelfLink</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>People<span class="token punctuation">&#39;</span>s Republic of China<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">app.js</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelfLink</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelfButton</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>palevioletred<span class="token punctuation">&quot;</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>fist<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          SelfButton
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelfButton</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u901A\u8FC7\u4E0A\u9762\u56DB\u79CD\u6837\u5F0F\u7684\u5F15\u5165\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A</p><ul><li><p>\u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528<code>css</code>\u8BE5\u65B9\u5F0F\u7F16\u5199\u65B9\u4FBF\uFF0C\u5BB9\u6613\u80FD\u591F\u6839\u636E\u72B6\u6001\u4FEE\u6539\u6837\u5F0F\u5C5E\u6027\uFF0C\u4F46\u662F\u5927\u91CF\u7684\u6F14\u793A\u7F16\u5199\u5BB9\u6613\u5BFC\u81F4\u4EE3\u7801\u6DF7\u4E71</p></li><li><p>\u7EC4\u4EF6\u4E2D\u5F15\u5165 .css \u6587\u4EF6\u7B26\u5408\u6211\u4EEC\u65E5\u5E38\u7684\u7F16\u5199\u4E60\u60EF\uFF0C\u4F46\u662F\u4F5C\u7528\u57DF\u662F\u5168\u5C40\u7684\uFF0C\u6837\u5F0F\u4E4B\u95F4\u4F1A\u5C42\u53E0</p></li><li><p>\u5F15\u5165.module.css \u6587\u4EF6\u80FD\u591F\u89E3\u51B3\u5C40\u90E8\u4F5C\u7528\u57DF\u95EE\u9898\uFF0C\u4F46\u662F\u4E0D\u65B9\u4FBF\u52A8\u6001\u4FEE\u6539\u6837\u5F0F\uFF0C\u9700\u8981\u4F7F\u7528\u5185\u8054\u7684\u65B9\u5F0F\u8FDB\u884C\u6837\u5F0F\u7684\u7F16\u5199</p></li><li><p>\u901A\u8FC7css in js \u8FD9\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u573A\u666F\u7684\u5E94\u7528\uFF0C\u53EF\u4EE5\u7C7B\u4F3C\u4E8E\u9884\u5904\u7406\u5668\u4E00\u6837\u6837\u5F0F\u5D4C\u5957\u3001\u5B9A\u4E49\u3001\u4FEE\u6539\u72B6\u6001\u7B49</p></li></ul><p>\u81F3\u4E8E\u4F7F\u7528<code>react</code>\u7528\u54EA\u79CD\u65B9\u6848\u5F15\u5165<code>css</code>\uFF0C\u5E76\u6CA1\u6709\u4E00\u4E2A\u7EDD\u5BF9\u7684\u7B54\u6848\uFF0C\u53EF\u4EE5\u6839\u636E\u5404\u81EA\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u65B9\u6848</p><h2 id="\u56DB\u3001\u8BBE\u7F6E\u591A\u4E2Aclassname" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8BBE\u7F6E\u591A\u4E2Aclassname" aria-hidden="true">#</a> \u56DB\u3001\u8BBE\u7F6E\u591A\u4E2AclassName</h2>`,49),k={href:"https://www.cnblogs.com/mmykdbc/p/9505621.html",target:"_blank",rel:"noopener noreferrer"},d=p("react\u8BBE\u7F6E\u591A\u4E2AclassName"),b=t(`<div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;../index.less&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>alarmSlide <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> styles<span class="token punctuation">.</span>slide1<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      ...
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,2),m={href:"https://zh-hans.reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper",target:"_blank",rel:"noopener noreferrer"},g=p("https://zh-hans.reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper"),h={href:"https://mp.weixin.qq.com/s/oywTpNKEikMXn8QTBgITow",target:"_blank",rel:"noopener noreferrer"},y=p("https://mp.weixin.qq.com/s/oywTpNKEikMXn8QTBgITow");function x(v,w){const n=o("ExternalLinkIcon");return c(),l(r,null,[i,s("ul",null,[s("li",null,[s("a",k,[d,a(n)])])]),b,s("ul",null,[s("li",null,[s("a",m,[g,a(n)])]),s("li",null,[s("a",h,[y,a(n)])])])],64)}var q=e(u,[["render",x],["__file","import_css.html.vue"]]);export{q as default};
