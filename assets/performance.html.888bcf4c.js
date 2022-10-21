import{_ as e,r as o,o as c,c as l,a as n,b as t,F as u,e as p,d as s}from"./app.6e1280c8.js";const i={},r=p('<h1 id="react-\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#react-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> React \u6027\u80FD\u4F18\u5316</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>React</code>\u51ED\u501F<code>virtual DOM</code>\u548C<code>diff</code>\u7B97\u6CD5\u62E5\u6709\u9AD8\u6548\u7684\u6027\u80FD\uFF0C\u4F46\u662F\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6027\u80FD\u660E\u663E\u53EF\u4EE5\u8FDB\u4E00\u6B65\u63D0\u9AD8</p><p>\u5728\u524D\u9762\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u7C7B\u7EC4\u4EF6\u901A\u8FC7\u8C03\u7528<code>setState</code>\u65B9\u6CD5\uFF0C \u5C31\u4F1A\u5BFC\u81F4<code>render</code>\uFF0C\u7236\u7EC4\u4EF6\u4E00\u65E6\u53D1\u751F<code>render</code>\u6E32\u67D3\uFF0C\u5B50\u7EC4\u4EF6\u4E00\u5B9A\u4E5F\u4F1A\u6267\u884C<code>render</code>\u6E32\u67D3</p><p>\u5F53\u6211\u4EEC\u60F3\u8981\u66F4\u65B0\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u4E0B\u56FE\u7EFF\u8272\u90E8\u5206\uFF1A</p><p><img src="https://static.vue-js.com/b41f6f30-f270-11eb-ab90-d9ae814b240d.png" alt="01"></p><p>\u7406\u60F3\u72B6\u6001\u53EA\u8C03\u7528\u8BE5\u8DEF\u5F84\u4E0B\u7684\u7EC4\u4EF6<code>render</code>\uFF1A</p><p><img src="https://static.vue-js.com/bc0f2460-f270-11eb-85f6-6fac77c0c9b3.png" alt="02"></p><p>\u4F46\u662F<code>react</code>\u7684\u9ED8\u8BA4\u505A\u6CD5\u662F\u8C03\u7528\u6240\u6709\u7EC4\u4EF6\u7684<code>render</code>\uFF0C\u518D\u5BF9\u751F\u6210\u7684\u865A\u62DF<code>DOM</code>\u8FDB\u884C\u5BF9\u6BD4\uFF08\u9EC4\u8272\u90E8\u5206\uFF09\uFF0C\u5982\u4E0D\u53D8\u5219\u4E0D\u8FDB\u884C\u66F4\u65B0</p><p><img src="https://static.vue-js.com/c2f0c4f0-f270-11eb-85f6-6fac77c0c9b3.png" alt="03"></p><p>\u4ECE\u4E0A\u56FE\u53EF\u89C1\uFF0C\u9EC4\u8272\u90E8\u5206<code>diff</code>\u7B97\u6CD5\u5BF9\u6BD4\u662F\u660E\u663E\u7684\u6027\u80FD\u6D6A\u8D39\u7684\u60C5\u51B5</p><h2 id="\u4E8C\u3001\u5982\u4F55\u505A" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u505A" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u505A</h2>',12),k=s("\u5728"),d={href:"https://mp.weixin.qq.com/s/h4NX4Plr6TCjoIhlawiJTg",target:"_blank",rel:"noopener noreferrer"},m=s("React\u4E2D\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684render"),b=s("\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u5982\u4F55\u907F\u514D\u4E0D\u5FC5\u8981\u7684"),h=n("code",null,"render",-1),g=s("\u6765\u5E94\u4ED8\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u4E3B\u8981\u624B\u6BB5\u662F\u901A\u8FC7"),_=n("code",null,"shouldComponentUpdate",-1),f=s("\u3001"),x=n("code",null,"PureComponent",-1),v=s("\u3001"),y=n("code",null,"React.memo",-1),w=s("\uFF0C\u8FD9\u4E09\u79CD\u5F62\u5F0F\u8FD9\u91CC\u5C31\u4E0D\u518D\u590D\u8FF0"),q=p(`<p>\u9664\u6B64\u4E4B\u5916\uFF0C \u5E38\u89C1\u6027\u80FD\u4F18\u5316\u5E38\u89C1\u7684\u624B\u6BB5\u6709\u5982\u4E0B\uFF1A</p><ul><li><p>\u907F\u514D\u4F7F\u7528\u5185\u8054\u51FD\u6570</p></li><li><p>\u4F7F\u7528 React Fragments \u907F\u514D\u989D\u5916\u6807\u8BB0</p></li><li><p>\u4F7F\u7528 Immutable</p></li><li><p>\u61D2\u52A0\u8F7D\u7EC4\u4EF6</p></li><li><p>\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</p></li><li><p>\u670D\u52A1\u7AEF\u6E32\u67D3</p></li></ul><h3 id="\u907F\u514D\u4F7F\u7528\u5185\u8054\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u4F7F\u7528\u5185\u8054\u51FD\u6570" aria-hidden="true">#</a> \u907F\u514D\u4F7F\u7528\u5185\u8054\u51FD\u6570</h3><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u5185\u8054\u51FD\u6570\uFF0C\u5219\u6BCF\u6B21\u8C03\u7528<code>render</code>\u51FD\u6570\u65F6\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u5B9E\u4F8B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">InlineFunctionComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome Guest</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">inputValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click For Inline Function<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6211\u4EEC\u5E94\u8BE5\u5728\u7EC4\u4EF6\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u8BE5\u51FD\u6570\u672C\u8EAB\u3002\u8FD9\u6837\u6BCF\u6B21\u8C03\u7528 <code>render</code> \u65F6\u5C31\u4E0D\u4F1A\u521B\u5EFA\u5355\u72EC\u7684\u51FD\u6570\u5B9E\u4F8B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">InlineFunctionComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  
  <span class="token function-variable function">setNewStateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">inputValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome Guest</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setNewStateData<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click For Inline Function<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u4F7F\u7528-react-fragments-\u907F\u514D\u989D\u5916\u6807\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-react-fragments-\u907F\u514D\u989D\u5916\u6807\u8BB0" aria-hidden="true">#</a> \u4F7F\u7528 React Fragments \u907F\u514D\u989D\u5916\u6807\u8BB0</h4><p>\u7528\u6237\u521B\u5EFA\u65B0\u7EC4\u4EF6\u65F6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5E94\u5177\u6709\u5355\u4E2A\u7236\u6807\u7B7E\u3002\u7236\u7EA7\u4E0D\u80FD\u6709\u4E24\u4E2A\u6807\u7B7E\uFF0C\u6240\u4EE5\u9876\u90E8\u8981\u6709\u4E00\u4E2A\u516C\u5171\u6807\u7B7E\uFF0C\u6240\u4EE5\u6211\u4EEC\u7ECF\u5E38\u5728\u7EC4\u4EF6\u9876\u90E8\u6DFB\u52A0\u989D\u5916\u6807\u7B7E<code>div</code></p><p>\u8FD9\u4E2A\u989D\u5916\u6807\u7B7E\u9664\u4E86\u5145\u5F53\u7236\u6807\u7B7E\u4E4B\u5916\uFF0C\u5E76\u6CA1\u6709\u5176\u4ED6\u4F5C\u7528\uFF0C\u8FD9\u65F6\u5019\u5219\u53EF\u4EE5\u4F7F\u7528<code>fragement</code></p><p>\u5176\u4E0D\u4F1A\u5411\u7EC4\u4EF6\u5F15\u5165\u4EFB\u4F55\u989D\u5916\u6807\u8BB0\uFF0C\u4F46\u5B83\u53EF\u4EE5\u4F5C\u4E3A\u7236\u7EA7\u6807\u7B7E\u7684\u4F5C\u7528\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NestedRoutingComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">This is the Header Component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome To Demo Page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F</h3>`,13),j=s("\u5728"),C={href:"https://mp.weixin.qq.com/s/VfQ34ZEPXUXsimzMaJ_41A",target:"_blank",rel:"noopener noreferrer"},R=s("\u4E8B\u4EF6\u7ED1\u5B9A\u65B9\u5F0F"),M=s("\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u56DB\u79CD\u4E8B\u5047\u7ED1\u5B9A\u7684\u65B9\u5F0F"),I=p('<p>\u4ECE\u6027\u80FD\u65B9\u9762\u8003\u8651\uFF0C\u5728<code>render</code>\u65B9\u6CD5\u4E2D\u4F7F\u7528<code>bind</code>\u548C<code>render</code>\u65B9\u6CD5\u4E2D\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u8FD9\u4E24\u79CD\u5F62\u5F0F\u5728\u6BCF\u6B21\u7EC4\u4EF6<code>render</code>\u7684\u65F6\u5019\u90FD\u4F1A\u751F\u6210\u65B0\u7684\u65B9\u6CD5\u5B9E\u4F8B\uFF0C\u6027\u80FD\u6B20\u7F3A</p><p>\u800C<code>constructor</code>\u4E2D<code>bind</code>\u4E8B\u4EF6\u4E0E\u5B9A\u4E49\u9636\u6BB5\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u7ED1\u5B9A\u8FD9\u4E24\u79CD\u5F62\u5F0F\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u65B9\u6CD5\u5B9E\u4F8B\uFF0C\u6027\u80FD\u65B9\u9762\u4F1A\u6709\u6240\u6539\u5584</p><h3 id="\u4F7F\u7528-immutable" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-immutable" aria-hidden="true">#</a> \u4F7F\u7528 Immutable</h3>',3),S=s("\u5728"),P={href:"https://mp.weixin.qq.com/s/laYJ_KNa8M5JNBnIolMDAA",target:"_blank",rel:"noopener noreferrer"},N=s("\u7406\u89E3Immutable\u4E2D"),F=s("\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u4F7F\u7528 "),T=n("code",null,"Immutable",-1),D=s("\u53EF\u4EE5\u7ED9 "),z=n("code",null,"React",-1),V=s(" \u5E94\u7528\u5E26\u6765\u6027\u80FD\u7684\u4F18\u5316\uFF0C\u4E3B\u8981\u4F53\u73B0\u5728\u51CF\u5C11\u6E32\u67D3\u7684\u6B21\u6570"),E=p(`<p>\u5728\u505A<code>react</code>\u6027\u80FD\u4F18\u5316\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u907F\u514D\u91CD\u590D\u6E32\u67D3\uFF0C\u6211\u4EEC\u4F1A\u5728<code>shouldComponentUpdate()</code>\u4E2D\u505A\u5BF9\u6BD4\uFF0C\u5F53\u8FD4\u56DE<code>true</code>\u6267\u884C<code>render</code>\u65B9\u6CD5</p><p><code>Immutable</code>\u901A\u8FC7<code>is</code>\u65B9\u6CD5\u5219\u53EF\u4EE5\u5B8C\u6210\u5BF9\u6BD4\uFF0C\u800C\u65E0\u9700\u50CF\u4E00\u6837\u901A\u8FC7\u6DF1\u5EA6\u6BD4\u8F83\u7684\u65B9\u5F0F\u6BD4\u8F83</p><h3 id="\u61D2\u52A0\u8F7D\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u61D2\u52A0\u8F7D\u7EC4\u4EF6" aria-hidden="true">#</a> \u61D2\u52A0\u8F7D\u7EC4\u4EF6</h3><p>\u4ECE\u5DE5\u7A0B\u65B9\u9762\u8003\u8651\uFF0C<code>webpack</code>\u5B58\u5728\u4EE3\u7801\u62C6\u5206\u80FD\u529B\uFF0C\u53EF\u4EE5\u4E3A\u5E94\u7528\u521B\u5EFA\u591A\u4E2A\u5305\uFF0C\u5E76\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u52A0\u8F7D\uFF0C\u51CF\u5C11\u521D\u59CB\u5305\u7684\u5927\u5C0F</p><p>\u800C\u5728<code>react</code>\u4E2D\u4F7F\u7528\u5230\u4E86<code>Suspense</code>\u548C <code>lazy</code>\u7EC4\u4EF6\u5B9E\u73B0\u4EE3\u7801\u62C6\u5206\u529F\u80FD\uFF0C\u57FA\u672C\u4F7F\u7528\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> johanComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;johanComponent&quot; */</span> <span class="token string">&#39;./myAwesome.component&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">johanAsyncComponent</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Spinner</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>johanComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Suspense</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3</h3><p>\u91C7\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\u7AEF\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6237\u66F4\u5FEB\u7684\u770B\u5230\u6E32\u67D3\u5B8C\u6210\u7684\u9875\u9762</p><p>\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u9700\u8981\u8D77\u4E00\u4E2A<code>node</code>\u670D\u52A1\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>express</code>\u3001<code>koa</code>\u7B49\uFF0C\u8C03\u7528<code>react</code>\u7684<code>renderToString</code>\u65B9\u6CD5\uFF0C\u5C06\u6839\u7EC4\u4EF6\u6E32\u67D3\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u8F93\u51FA\u5230\u54CD\u5E94\u4E2D</p><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">&quot;./MyPage&quot;</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;div id=&#39;content&#39;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">renderToString</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyPage<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5BA2\u6237\u7AEF\u4F7F\u7528render\u65B9\u6CD5\u6765\u751F\u6210HTML</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">&quot;./MyPage&quot;</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyPage</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u5B58\u5728\u7684\u4F18\u5316\u624B\u6BB5\u6709\u7EC4\u4EF6\u62C6\u5206\u3001\u5408\u7406\u4F7F\u7528<code>hooks</code>\u7B49\u6027\u80FD\u4F18\u5316\u624B\u6BB5...</p><h3 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h3><p>\u901A\u8FC7\u4E0A\u9762\u521D\u6B65\u5B66\u4E60\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230<code>react</code>\u5E38\u89C1\u7684\u6027\u80FD\u4F18\u5316\u53EF\u4EE5\u5206\u6210\u4E09\u4E2A\u5C42\u9762\uFF1A</p><ul><li>\u4EE3\u7801\u5C42\u9762</li><li>\u5DE5\u7A0B\u5C42\u9762</li><li>\u6846\u67B6\u673A\u5236\u5C42\u9762</li></ul><p>\u901A\u8FC7\u8FD9\u4E09\u4E2A\u5C42\u9762\u7684\u4F18\u5316\u7ED3\u5408\uFF0C\u80FD\u591F\u4F7F\u57FA\u4E8E<code>react</code>\u9879\u76EE\u7684\u6027\u80FD\u66F4\u4E0A\u4E00\u5C42\u697C</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,20),A={href:"https://zhuanlan.zhihu.com/p/108666350",target:"_blank",rel:"noopener noreferrer"},B=s("https://zhuanlan.zhihu.com/p/108666350"),O={href:"https://segmentfault.com/a/1190000007811296",target:"_blank",rel:"noopener noreferrer"},J=s("https://segmentfault.com/a/1190000007811296");function L(U,W){const a=o("ExternalLinkIcon");return c(),l(u,null,[r,n("p",null,[k,n("a",d,[m,t(a)]),b,h,g,_,f,x,v,y,w]),q,n("p",null,[j,n("a",C,[R,t(a)]),M]),I,n("p",null,[S,n("a",P,[N,t(a)]),F,T,D,z,V]),E,n("ul",null,[n("li",null,[n("a",A,[B,t(a)])]),n("li",null,[n("a",O,[J,t(a)])])])],64)}var G=e(i,[["render",L],["__file","performance.html.vue"]]);export{G as default};
