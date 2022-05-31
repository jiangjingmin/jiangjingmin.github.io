import{_ as n,c as s}from"./app.a7f79250.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4-react\u4E2D\u7684setstate\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4-react\u4E2D\u7684setstate\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4 React\u4E2D\u7684setState\u6267\u884C\u673A\u5236</h1><p><img src="https://static.vue-js.com/3acb8ca0-d825-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u4E00\u4E2A\u7EC4\u4EF6\u7684\u663E\u793A\u5F62\u6001\u53EF\u4EE5\u7531\u6570\u636E\u72B6\u6001\u548C\u5916\u90E8\u53C2\u6570\u6240\u51B3\u5B9A\uFF0C\u800C\u6570\u636E\u72B6\u6001\u5C31\u662F<code>state</code></p><p>\u5F53\u9700\u8981\u4FEE\u6539\u91CC\u9762\u7684\u503C\u7684\u72B6\u6001\u9700\u8981\u901A\u8FC7\u8C03\u7528<code>setState</code>\u6765\u6539\u53D8\uFF0C\u4ECE\u800C\u8FBE\u5230\u66F4\u65B0\u7EC4\u4EF6\u5185\u90E8\u6570\u636E\u7684\u4F5C\u7528</p><p>\u5982\u4E0B\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u9762\u8BD5\u5B98\u7CFB\u5217</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;JS\u6BCF\u65E5\u4E00\u9898&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\u89E6\u53D1<code>onclick</code>\u4E8B\u4EF6\uFF0C\u6267\u884C<code>this.setState</code>\u65B9\u6CD5\u66F4\u65B0<code>state</code>\u72B6\u6001\uFF0C\u7136\u540E\u91CD\u65B0\u6267\u884C<code>render</code>\u51FD\u6570\uFF0C\u4ECE\u800C\u5BFC\u81F4\u9875\u9762\u7684\u89C6\u56FE\u66F4\u65B0</p><p>\u5982\u679C\u76F4\u63A5\u4FEE\u6539<code>state</code>\u7684\u72B6\u6001\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u597D\u554A,\u674E\u94F6\u6CB3&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u4F1A\u53D1\u73B0\u9875\u9762\u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u53CD\u5E94\uFF0C\u4F46\u662F<code>state</code>\u7684\u72B6\u6001\u662F\u5DF2\u7ECF\u53D1\u751F\u4E86\u6539\u53D8</p><p>\u8FD9\u662F\u56E0\u4E3A<code>React</code>\u5E76\u4E0D\u50CF<code>vue2</code>\u4E2D\u8C03\u7528<code>Object.defineProperty</code>\u6570\u636E\u54CD\u5E94\u5F0F\u6216\u8005<code>Vue3</code>\u8C03\u7528<code>Proxy</code>\u76D1\u542C\u6570\u636E\u7684\u53D8\u5316</p><p>\u5FC5\u987B\u901A\u8FC7<code>setState</code>\u65B9\u6CD5\u6765\u544A\u77E5<code>react</code>\u7EC4\u4EF6<code>state</code>\u5DF2\u7ECF\u53D1\u751F\u4E86\u6539\u53D8</p><p>\u5173\u4E8E<code>state</code>\u65B9\u6CD5\u7684\u5B9A\u4E49\u662F\u4ECE<code>React.Component</code>\u4E2D\u7EE7\u627F\uFF0C\u5B9A\u4E49\u7684\u6E90\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">partialState<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span>
      <span class="token keyword">typeof</span> partialState <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
      partialState <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&#39;setState(...): takes an object of state variables to update or a &#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;function which returns an object of state variables.&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">enqueueSetState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> partialState<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token string">&#39;setState&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230<code>setState</code>\u7B2C\u4E00\u4E2A\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u800C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7528\u4E8E\u53EF\u4EE5\u5B9E\u65F6\u7684\u83B7\u53D6\u5230\u66F4\u65B0\u4E4B\u540E\u7684\u6570\u636E</p><h2 id="\u4E8C\u3001\u66F4\u65B0\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u66F4\u65B0\u7C7B\u578B" aria-hidden="true">#</a> \u4E8C\u3001\u66F4\u65B0\u7C7B\u578B</h2><p>\u5728\u4F7F\u7528<code>setState</code>\u66F4\u65B0\u6570\u636E\u7684\u65F6\u5019\uFF0C<code>setState</code>\u7684\u66F4\u65B0\u7C7B\u578B\u5206\u6210\uFF1A</p><ul><li>\u5F02\u6B65\u66F4\u65B0</li><li>\u540C\u6B65\u66F4\u65B0</li></ul><h3 id="\u5F02\u6B65\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u66F4\u65B0" aria-hidden="true">#</a> \u5F02\u6B65\u66F4\u65B0</h3><p>\u5148\u4E3E\u51FA\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\u554A&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello World</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u7EC8\u6253\u5370\u7ED3\u679C\u4E3A<code>Hello world</code>\uFF0C\u5E76\u4E0D\u80FD\u5728\u6267\u884C\u5B8C<code>setState</code>\u4E4B\u540E\u7ACB\u9A6C\u62FF\u5230\u6700\u65B0\u7684<code>state</code>\u7684\u7ED3\u679C</p><p>\u5982\u679C\u60F3\u8981\u7ACB\u523B\u83B7\u53D6\u66F4\u65B0\u540E\u7684\u503C\uFF0C\u5728\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u56DE\u8C03\u4E2D\u66F4\u65B0\u540E\u4F1A\u6267\u884C</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\u554A&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F60\u597D\u554A</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u540C\u6B65\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u66F4\u65B0" aria-hidden="true">#</a> \u540C\u6B65\u66F4\u65B0</h3><p>\u540C\u6837\u5148\u7ED9\u51FA\u4E00\u4E2A\u5728<code>setTimeout</code>\u4E2D\u66F4\u65B0\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> &quot;\u4F60\u597D\u554A
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F60\u597D\u554A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u66F4\u65B0\u662F\u540C\u6B65</p><p>\u518D\u6765\u4E3E\u4E00\u4E2A\u539F\u751F<code>DOM</code>\u4E8B\u4EF6\u7684\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> btnEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  btnEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\u554A,\u674E\u94F6\u6CB3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F60\u597D\u554A,\u674E\u94F6\u6CB3</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><ul><li>\u5728\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6216React\u5408\u6210\u4E8B\u4EF6\u4E2D\uFF0CsetState\u662F\u5F02\u6B65</li><li>\u5728setTimeout\u6216\u8005\u539F\u751Fdom\u4E8B\u4EF6\u4E2D\uFF0CsetState\u662F\u540C\u6B65</li></ul><h3 id="\u4E09\u3001\u6279\u91CF\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6279\u91CF\u66F4\u65B0" aria-hidden="true">#</a> \u4E09\u3001\u6279\u91CF\u66F4\u65B0</h3><p>\u540C\u6837\u5148\u7ED9\u51FA\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u6253\u5370\u7684\u90FD\u662F 1\uFF0C\u9875\u9762\u663E\u793A <code>count</code> \u7684\u503C\u4E3A 2</p><p>\u5BF9\u540C\u4E00\u4E2A\u503C\u8FDB\u884C\u591A\u6B21 <code>setState </code>\uFF0C <code>setState</code> \u7684\u6279\u91CF\u66F4\u65B0\u7B56\u7565\u4F1A\u5BF9\u5176\u8FDB\u884C\u8986\u76D6\uFF0C\u53D6\u6700\u540E\u4E00\u6B21\u7684\u6267\u884C\u7ED3\u679C</p><p>\u4E0A\u8FF0\u7684\u4F8B\u5B50\uFF0C\u5B9E\u9645\u7B49\u4EF7\u4E8E\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
  previousState<span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">index</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">index</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7531\u4E8E\u540E\u9762\u7684\u6570\u636E\u4F1A\u8986\u76D6\u524D\u9762\u7684\u66F4\u6539\uFF0C\u6240\u4EE5\u6700\u7EC8\u53EA\u52A0\u4E86\u4E00\u6B21</p><p>\u5982\u679C\u662F\u4E0B\u4E00\u4E2A<code>state</code>\u4F9D\u8D56\u524D\u4E00\u4E2A<code>state</code>\u7684\u8BDD\uFF0C\u63A8\u8350\u7ED9<code>setState</code>\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\u4E00\u4E2A<code>function</code>\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevState<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> prevState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevState<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span> prevState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u800C\u5728<code>setTimeout</code>\u6216\u8005\u539F\u751F<code>dom</code>\u4E8B\u4EF6\u4E2D\uFF0C\u7531\u4E8E\u662F\u540C\u6B65\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u5E76\u4E0D\u4F1A\u8FDB\u884C\u8986\u76D6\u73B0\u8C61</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://juejin.cn/post/6844903667426918408</li><li>https://juejin.cn/post/6844903636749778958</li><li>https://segmentfault.com/a/1190000039077904</li></ul>`,46);function t(e,o){return p}var l=n(a,[["render",t],["__file","setState.html.vue"]]);export{l as default};
