import{_ as n,e as s}from"./app.2989aa3c.js";const a={},p=s(`<h1 id="\u9762\u8BD5\u5B98-super-\u548Csuper-props-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-super-\u548Csuper-props-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1Asuper()\u548Csuper(props)\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h1><p><img src="https://static.vue-js.com/618abaf0-d71c-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001es6\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001es6\u7C7B" aria-hidden="true">#</a> \u4E00\u3001ES6\u7C7B</h2><p>\u5728<code>ES6</code>\u4E2D\uFF0C\u901A\u8FC7<code>extends</code>\u5173\u952E\u5B57\u5B9E\u73B0\u7C7B\u7684\u7EE7\u627F\uFF0C\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">sup</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>

    <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">sub</span> <span class="token keyword">extends</span> <span class="token class-name">sup</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// super\u4EE3\u8868\u7684\u4E8B\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token function">printAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> jack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">sub</span><span class="token punctuation">(</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span>
jack<span class="token punctuation">.</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//\u8F93\u51FA : jack</span>
jack<span class="token punctuation">.</span><span class="token function">printAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//\u8F93\u51FA : 20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u901A\u8FC7<code>super</code>\u5173\u952E\u5B57\u5B9E\u73B0\u8C03\u7528\u7236\u7C7B\uFF0C<code>super</code>\u4EE3\u66FF\u7684\u662F\u7236\u7C7B\u7684\u6784\u5EFA\u51FD\u6570\uFF0C\u4F7F\u7528<code>super(name)</code>\u76F8\u5F53\u4E8E\u8C03\u7528<code>sup.prototype.constructor.call(this,name)</code></p><p>\u5982\u679C\u5728\u5B50\u7C7B\u4E2D\u4E0D\u4F7F\u7528<code>super</code>\uFF0C\u5173\u952E\u5B57\uFF0C\u5219\u4F1A\u5F15\u53D1\u62A5\u9519\uFF0C\u5982\u4E0B\uFF1A<img src="https://static.vue-js.com/6ab40190-d71c-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u62A5\u9519\u7684\u539F\u56E0\u662F \u5B50\u7C7B\u662F\u6CA1\u6709\u81EA\u5DF1\u7684<code>this</code>\u5BF9\u8C61\u7684\uFF0C\u5B83\u53EA\u80FD\u7EE7\u627F\u7236\u7C7B\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u7136\u540E\u5BF9\u5176\u8FDB\u884C\u52A0\u5DE5</p><p>\u800C<code>super()</code>\u5C31\u662F\u5C06\u7236\u7C7B\u4E2D\u7684<code>this</code>\u5BF9\u8C61\u7EE7\u627F\u7ED9\u5B50\u7C7B\u7684\uFF0C\u6CA1\u6709<code>super() </code>\u5B50\u7C7B\u5C31\u5F97\u4E0D\u5230<code>this</code>\u5BF9\u8C61</p><p>\u5982\u679C\u5148\u8C03\u7528<code>this</code>\uFF0C\u518D\u521D\u59CB\u5316<code>super()</code>\uFF0C\u540C\u6837\u662F\u7981\u6B62\u7684\u884C\u4E3A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">sub</span> <span class="token keyword">extends</span> <span class="token class-name">sup</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// super\u4EE3\u8868\u7684\u4E8B\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6240\u4EE5\u5728\u5B50\u7C7B<code>constructor</code>\u4E2D\uFF0C\u5FC5\u987B\u5148\u4EE3\u7528<code>super</code>\u624D\u80FD\u5F15\u7528<code>this</code></p><h2 id="\u4E8C\u3001\u7C7B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E8C\u3001\u7C7B\u7EC4\u4EF6</h2><p>\u5728<code>React</code>\u4E2D\uFF0C\u7C7B\u7EC4\u4EF6\u662F\u57FA\u4E8E<code>es6</code>\u7684\u89C4\u8303\u5B9E\u73B0\u7684\uFF0C\u7EE7\u627F<code>React.Component</code>\uFF0C\u56E0\u6B64\u5982\u679C\u7528\u5230<code>constructor</code>\u5C31\u5FC5\u987B\u5199<code>super()</code>\u624D\u521D\u59CB\u5316<code>this</code></p><p>\u8FD9\u65F6\u5019\uFF0C\u5728\u8C03\u7528<code>super()</code>\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u9700\u8981\u4F20\u5165<code>props</code>\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u4E0D\u4F20\u8FDB\u53BB\uFF0C<code>React</code>\u5185\u90E8\u4E5F\u4F1A\u5C06\u5176\u5B9A\u4E49\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// React \u5185\u90E8</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourComponent</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6240\u4EE5\u65E0\u8BBA\u6709\u6CA1\u6709<code>constructor</code>\uFF0C\u5728<code>render</code>\u4E2D<code>this.props</code>\u90FD\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\uFF0C\u8FD9\u662F<code>React</code>\u81EA\u52A8\u9644\u5E26\u7684\uFF0C\u662F\u53EF\u4EE5\u4E0D\u5199\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HelloMessage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>nice to meet you<span class="token operator">!</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F46\u662F\u4E5F\u4E0D\u5EFA\u8BAE\u4F7F\u7528<code>super()</code>\u4EE3\u66FF<code>super(props)</code></p><p>\u56E0\u4E3A\u5728<code>React</code>\u4F1A\u5728\u7C7B\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u751F\u6210\u5B9E\u4F8B\u540E\u518D\u7ED9<code>this.props</code>\u8D4B\u503C\uFF0C\u6240\u4EE5\u5728\u4E0D\u4F20\u9012<code>props</code>\u5728<code>super</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u8C03\u7528<code>this.props</code>\u4E3A<code>undefined</code>\uFF0C\u5982\u4E0B\u60C5\u51B5\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u4F20\u5165 props</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//  {}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  undefined</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u800C\u4F20\u5165<code>props</code>\u7684\u5219\u90FD\u80FD\u6B63\u5E38\u8BBF\u95EE\uFF0C\u786E\u4FDD\u4E86 <code>this.props</code> \u5728\u6784\u9020\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E4B\u524D\u5DF2\u88AB\u8D4B\u503C\uFF0C\u66F4\u7B26\u5408\u903B\u8F91\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u4F20\u5165 props</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//  {}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  {}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p>\u5728<code>React</code>\u4E2D\uFF0C\u7C7B\u7EC4\u4EF6\u57FA\u4E8E<code>ES6</code>\uFF0C\u6240\u4EE5\u5728<code>constructor</code>\u4E2D\u5FC5\u987B\u4F7F\u7528<code>super</code></p><p>\u5728\u8C03\u7528<code>super</code>\u8FC7\u7A0B\uFF0C\u65E0\u8BBA\u662F\u5426\u4F20\u5165<code>props</code>\uFF0C<code>React</code>\u5185\u90E8\u90FD\u4F1A\u5C06<code>porps</code>\u8D4B\u503C\u7ED9\u7EC4\u4EF6\u5B9E\u4F8B<code>porps</code>\u5C5E\u6027\u4E2D</p><p>\u5982\u679C\u53EA\u8C03\u7528\u4E86<code>super()</code>\uFF0C\u90A3\u4E48<code>this.props</code>\u5728<code>super()</code>\u548C\u6784\u9020\u51FD\u6570\u7ED3\u675F\u4E4B\u95F4\u4ECD\u662F<code>undefined</code></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://overreacted.io/zh-hans/why-do-we-write-super-props/</li><li>https://segmentfault.com/q/1010000008340434</li></ul>`,29);function e(c,o){return p}var l=n(a,[["render",e],["__file","super()_super(props).html.vue"]]);export{l as default};
