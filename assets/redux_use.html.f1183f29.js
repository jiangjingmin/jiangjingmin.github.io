import{_ as p,r as t,o,c,a as n,b as a,F as r,e as l,d as e}from"./app.cec2e512.js";const i={},u=l(`<h1 id="react-\u4F7F\u7528-redux" tabindex="-1"><a class="header-anchor" href="#react-\u4F7F\u7528-redux" aria-hidden="true">#</a> React \u4F7F\u7528 Redux</h1><h2 id="\u4E00\u3001\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u80CC\u666F" aria-hidden="true">#</a> \u4E00\u3001\u80CC\u666F</h2><p>\u5728\u524D\u9762\u6587\u7AE0\u4E86\u89E3\u4E2D\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230<code>redux</code>\u662F\u7528\u4E8E\u6570\u636E\u72B6\u6001\u7BA1\u7406\uFF0C\u800C<code>react</code>\u662F\u4E00\u4E2A\u89C6\u56FE\u5C42\u9762\u7684\u5E93</p><p>\u5982\u679C\u5C06\u4E24\u8005\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B98\u65B9\u63A8\u8350<code>react-redux</code>\u5E93\uFF0C\u5176\u5177\u6709\u9AD8\u6548\u4E14\u7075\u6D3B\u7684\u7279\u6027</p><p><code>react-redux</code>\u5C06\u7EC4\u4EF6\u5206\u6210\uFF1A</p><ul><li>\u5BB9\u5668\u7EC4\u4EF6\uFF1A\u5B58\u5728\u903B\u8F91\u5904\u7406</li><li>UI \u7EC4\u4EF6\uFF1A\u53EA\u8D1F\u8D23\u73B0\u663E\u793A\u548C\u4EA4\u4E92\uFF0C\u5185\u90E8\u4E0D\u5904\u7406\u903B\u8F91\uFF0C\u72B6\u6001\u7531\u5916\u90E8\u63A7\u5236</li></ul><p>\u901A\u8FC7<code>redux</code>\u5C06\u6574\u4E2A\u5E94\u7528\u72B6\u6001\u5B58\u50A8\u5230<code>store</code>\u4E2D\uFF0C\u7EC4\u4EF6\u53EF\u4EE5\u6D3E\u53D1<code>dispatch</code>\u884C\u4E3A<code>action</code>\u7ED9<code>store</code></p><p>\u5176\u4ED6\u7EC4\u4EF6\u901A\u8FC7\u8BA2\u9605<code>store</code>\u4E2D\u7684\u72B6\u6001<code>state</code>\u6765\u66F4\u65B0\u81EA\u8EAB\u7684\u89C6\u56FE</p><h2 id="\u4E8C\u3001\u5982\u4F55\u505A" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u505A" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u505A</h2><p>\u4F7F\u7528<code>react-redux</code>\u5206\u6210\u4E86\u4E24\u5927\u6838\u5FC3\uFF1A</p><ul><li>Provider</li><li>connection</li></ul><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider" aria-hidden="true">#</a> Provider</h3><p>\u5728<code>redux</code>\u4E2D\u5B58\u5728\u4E00\u4E2A<code>store</code>\u7528\u4E8E\u5B58\u50A8<code>state</code>\uFF0C\u5982\u679C\u5C06\u8FD9\u4E2A<code>store</code>\u5B58\u653E\u5728\u9876\u5C42\u5143\u7D20\u4E2D\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u90FD\u88AB\u5305\u88F9\u5728\u9876\u5C42\u5143\u7D20\u4E4B\u4E0A</p><p>\u90A3\u4E48\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u80FD\u591F\u53D7\u5230<code>redux</code>\u7684\u63A7\u5236\uFF0C\u90FD\u80FD\u591F\u83B7\u53D6\u5230<code>redux</code>\u4E2D\u7684\u6570\u636E</p><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Provider store <span class="token operator">=</span> <span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Provider<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> connection</h3><p><code>connect</code>\u65B9\u6CD5\u5C06<code>store</code>\u4E0A\u7684<code>getState</code>\u548C <code>dispatch</code>\u5305\u88C5\u6210\u7EC4\u4EF6\u7684<code>props</code></p><p>\u5BFC\u5165<code>conect</code>\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-redux&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u4F20\u9012\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li><p>mapStateToProps</p></li><li><p>mapDispatchToProps</p></li></ul><h3 id="mapstatetoprops" tabindex="-1"><a class="header-anchor" href="#mapstatetoprops" aria-hidden="true">#</a> mapStateToProps</h3><p>\u628A<code>redux</code>\u4E2D\u7684\u6570\u636E\u6620\u5C04\u5230<code>react</code>\u4E2D\u7684<code>props</code>\u4E2D\u53BB</p><p>\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// prop : state.xxx  | \u610F\u601D\u662F\u5C06state\u4E2D\u7684\u67D0\u4E2A\u6570\u636E\u6620\u5C04\u5230props\u4E2D</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>bar
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7EC4\u4EF6\u5185\u90E8\u5C31\u80FD\u591F\u901A\u8FC7<code>props</code>\u83B7\u53D6\u5230<code>store</code>\u4E2D\u7684\u6570\u636E</p><div class="language-cons ext-cons line-numbers-mode"><pre class="language-cons"><code>class Foo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
         // \u8FD9\u6837\u5B50\u6E32\u67D3\u7684\u5176\u5B9E\u5C31\u662Fstate.bar\u7684\u6570\u636E\u4E86
            &lt;div&gt;this.props.foo&lt;/div&gt;
        )
    }
}
Foo = connect()(Foo)
export default Foo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="mapdispatchtoprops" tabindex="-1"><a class="header-anchor" href="#mapdispatchtoprops" aria-hidden="true">#</a> mapDispatchToProps</h3><p>\u5C06<code>redux</code>\u4E2D\u7684<code>dispatch</code>\u6620\u5C04\u5230\u7EC4\u4EF6\u5185\u90E8\u7684<code>props</code>\u4E2D</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\u5C31\u662Fdispatch</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increatment&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
         
             <span class="token operator">&lt;</span>button onClick <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u70B9\u51FBincrease<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Foo <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><p>\u6574\u4F53\u6D41\u7A0B\u56FE\u5927\u81F4\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png" alt="01"></p><h2 id="\u4E09\u3001\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u4E09\u3001\u9879\u76EE\u7ED3\u6784</h2><p>\u53EF\u4EE5\u6839\u636E\u9879\u76EE\u5177\u4F53\u60C5\u51B5\u8FDB\u884C\u9009\u62E9\uFF0C\u4EE5\u4E0B\u5217\u51FA\u4E24\u79CD\u5E38\u89C1\u7684\u7EC4\u7EC7\u7ED3\u6784</p><h3 id="\u6309\u89D2\u8272\u7EC4\u7EC7-mvc" tabindex="-1"><a class="header-anchor" href="#\u6309\u89D2\u8272\u7EC4\u7EC7-mvc" aria-hidden="true">#</a> \u6309\u89D2\u8272\u7EC4\u7EC7\uFF08MVC\uFF09</h3><p>\u89D2\u8272\u5982\u4E0B\uFF1A</p><ul><li>reducers</li><li>actions</li><li>components</li><li>containers</li></ul><p>\u53C2\u8003\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>reducers<span class="token operator">/</span>
  todoReducer<span class="token punctuation">.</span>js
  filterReducer<span class="token punctuation">.</span>js
actions<span class="token operator">/</span>
  todoAction<span class="token punctuation">.</span>js
  filterActions<span class="token punctuation">.</span>js
components<span class="token operator">/</span>
  todoList<span class="token punctuation">.</span>js
  todoItem<span class="token punctuation">.</span>js
  filter<span class="token punctuation">.</span>js
containers<span class="token operator">/</span>
  todoListContainer<span class="token punctuation">.</span>js
  todoItemContainer<span class="token punctuation">.</span>js
  filterContainer<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="\u6309\u529F\u80FD\u7EC4\u7EC7" tabindex="-1"><a class="header-anchor" href="#\u6309\u529F\u80FD\u7EC4\u7EC7" aria-hidden="true">#</a> \u6309\u529F\u80FD\u7EC4\u7EC7</h4><p>\u4F7F\u7528<code>redux</code>\u4F7F\u7528\u529F\u80FD\u7EC4\u7EC7\u9879\u76EE\uFF0C\u4E5F\u5C31\u662F\u628A\u5B8C\u6210\u540C\u4E00\u5E94\u7528\u529F\u80FD\u7684\u4EE3\u7801\u653E\u5728\u4E00\u4E2A\u76EE\u5F55\u4E0B\uFF0C\u4E00\u4E2A\u5E94\u7528\u529F\u80FD\u5305\u542B\u591A\u4E2A\u89D2\u8272\u7684\u4EE3\u7801</p><p><code>Redux</code>\u4E2D\uFF0C\u4E0D\u540C\u7684\u89D2\u8272\u5C31\u662F<code>reducer</code>\u3001<code>actions</code>\u548C\u89C6\u56FE\uFF0C\u800C\u5E94\u7528\u529F\u80FD\u5BF9\u5E94\u7684\u5C31\u662F\u7528\u6237\u754C\u9762\u7684\u4EA4\u4E92\u6A21\u5757</p><p>\u53C2\u8003\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>todoList<span class="token operator">/</span>
  actions<span class="token punctuation">.</span>js
  actionTypes<span class="token punctuation">.</span>js
  index<span class="token punctuation">.</span>js
  reducer<span class="token punctuation">.</span>js
  views<span class="token operator">/</span>
    components<span class="token punctuation">.</span>js
    containers<span class="token punctuation">.</span>js
filter<span class="token operator">/</span>
  actions<span class="token punctuation">.</span>js
  actionTypes<span class="token punctuation">.</span>js
  index<span class="token punctuation">.</span>js
  reducer<span class="token punctuation">.</span>js
  views<span class="token operator">/</span>
    components<span class="token punctuation">.</span>js
    container<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6BCF\u4E2A\u529F\u80FD\u6A21\u5757\u5BF9\u5E94\u4E00\u4E2A\u76EE\u5F55\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u4E0B\u5305\u542B\u540C\u6837\u7684\u89D2\u8272\u6587\u4EF6\uFF1A</p><ul><li>actionTypes.js \u5B9A\u4E49action\u7C7B\u578B</li><li>actions.js \u5B9A\u4E49action\u6784\u9020\u51FD\u6570</li><li>reducer.js \u5B9A\u4E49\u8FD9\u4E2A\u529F\u80FD\u6A21\u5757\u5982\u679C\u54CD\u5E94actions.js\u5B9A\u4E49\u7684\u52A8\u4F5C</li><li>views \u5305\u542B\u529F\u80FD\u6A21\u5757\u4E2D\u6240\u6709\u7684React\u7EC4\u4EF6\uFF0C\u5305\u62EC\u5C55\u793A\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6</li><li>index.js \u628A\u6240\u6709\u7684\u89D2\u8272\u5BFC\u5165\uFF0C\u7EDF\u4E00\u5BFC\u51FA</li></ul><p>\u5176\u4E2D<code>index</code>\u6A21\u5757\u7528\u4E8E\u5BFC\u51FA\u5BF9\u5916\u7684\u63A5\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> view <span class="token keyword">from</span> <span class="token string">&#39;./views/container.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5BFC\u5165\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token keyword">as</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,56),d={href:"https://www.redux.org.cn/docs/basics/UsageWithReact.html",target:"_blank",rel:"noopener noreferrer"},b=e("https://www.redux.org.cn/docs/basics/UsageWithReact.html"),k={href:"https://segmentfault.com/a/1190000010384268",target:"_blank",rel:"noopener noreferrer"},m=e("https://segmentfault.com/a/1190000010384268");function h(v,g){const s=t("ExternalLinkIcon");return o(),c(r,null,[u,n("ul",null,[n("li",null,[n("a",d,[b,a(s)])]),n("li",null,[n("a",k,[m,a(s)])])])],64)}var j=p(i,[["render",h],["__file","redux_use.html.vue"]]);export{j as default};
