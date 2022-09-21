import{_ as e,r as t,o,c,a as n,b as a,F as l,e as r,d as p}from"./app.7139c5e1.js";const u={},i=r(`<h1 id="vue-observable\u4F60\u6709\u4E86\u89E3\u8FC7\u5417-\u8BF4\u8BF4\u770B" tabindex="-1"><a class="header-anchor" href="#vue-observable\u4F60\u6709\u4E86\u89E3\u8FC7\u5417-\u8BF4\u8BF4\u770B" aria-hidden="true">#</a> Vue.observable\u4F60\u6709\u4E86\u89E3\u8FC7\u5417\uFF1F\u8BF4\u8BF4\u770B</h1><p><img src="https://static.vue-js.com/193782e0-3e7b-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001observable-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001observable-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001Observable \u662F\u4EC0\u4E48</h2><p><code>Observable</code> \u7FFB\u8BD1\u8FC7\u6765\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u6210<strong>\u53EF\u89C2\u5BDF\u7684</strong></p><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B\u5176\u5728<code>Vue</code>\u4E2D\u7684\u5B9A\u4E49</p><blockquote><p><code>Vue.observable</code>\uFF0C\u8BA9\u4E00\u4E2A\u5BF9\u8C61\u53D8\u6210\u54CD\u5E94\u5F0F\u6570\u636E\u3002<code>Vue</code> \u5185\u90E8\u4F1A\u7528\u5B83\u6765\u5904\u7406 <code>data</code> \u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61</p></blockquote><p>\u8FD4\u56DE\u7684\u5BF9\u8C61\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u6E32\u67D3\u51FD\u6570\u548C\u8BA1\u7B97\u5C5E\u6027\u5185\uFF0C\u5E76\u4E14\u4F1A\u5728\u53D1\u751F\u53D8\u66F4\u65F6\u89E6\u53D1\u76F8\u5E94\u7684\u66F4\u65B0\u3002\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u6700\u5C0F\u5316\u7684\u8DE8\u7EC4\u4EF6\u72B6\u6001\u5B58\u50A8\u5668</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4F5C\u7528\u7B49\u540C\u4E8E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728 <code>Vue 2.x</code> \u4E2D\uFF0C\u88AB\u4F20\u5165\u7684\u5BF9\u8C61\u4F1A\u76F4\u63A5\u88AB <code>Vue.observable</code> \u53D8\u66F4\uFF0C\u5B83\u548C\u88AB\u8FD4\u56DE\u7684\u5BF9\u8C61\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61</p><p>\u5728 <code>Vue 3.x</code> \u4E2D\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u53EF\u54CD\u5E94\u7684\u4EE3\u7406\uFF0C\u800C\u5BF9\u6E90\u5BF9\u8C61\u76F4\u63A5\u8FDB\u884C\u53D8\u66F4\u4ECD\u7136\u662F\u4E0D\u53EF\u54CD\u5E94\u7684</p><h2 id="\u4E8C\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u573A\u666F</h2><p>\u5728\u975E\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u901A\u5E38\u7684<code>bus</code>\u6216\u8005\u4F7F\u7528<code>vuex</code>\uFF0C\u4F46\u662F\u5B9E\u73B0\u7684\u529F\u80FD\u4E0D\u662F\u592A\u590D\u6742\uFF0C\u800C\u4F7F\u7528\u4E0A\u9762\u4E24\u4E2A\u53C8\u6709\u70B9\u7E41\u7410\u3002\u8FD9\u65F6\uFF0C<code>observable</code>\u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9</p><p>\u521B\u5EFA\u4E00\u4E2A<code>js</code>\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> &#39;vue
<span class="token comment">// \u521B\u5EFAstate\u5BF9\u8C61\uFF0C\u4F7F\u7528observable\u8BA9state\u5BF9\u8C61\u53EF\u54CD\u5E94</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> state <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">38</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA\u5BF9\u5E94\u7684\u65B9\u6CD5</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728<code>.vue</code>\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    \u59D3\u540D\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
    \u5E74\u9F84\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName(&#39;\u674E\u56DB&#39;)&quot;</span><span class="token operator">&gt;</span>\u6539\u53D8\u59D3\u540D<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;setAge(18)&quot;</span><span class="token operator">&gt;</span>\u6539\u53D8\u5E74\u9F84<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> mutations <span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;@<span class="token operator">/</span>store
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u62FF\u5230\u503C</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8C03\u7528mutations\u91CC\u9762\u7684\u65B9\u6CD5\uFF0C\u66F4\u65B0\u6570\u636E</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">changeName</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>changeName<span class="token punctuation">,</span>
    <span class="token literal-property property">setAge</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>setAge
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u4E09\u3001\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u4E09\u3001\u539F\u7406\u5206\u6790</h2><p>\u6E90\u7801\u4F4D\u7F6E\uFF1Asrc\\core\\observer\\index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">observe</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">asRootData</span><span class="token operator">:</span> <span class="token operator">?</span>boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> value <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728__ob__\u54CD\u5E94\u5F0F\u5C5E\u6027</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__ob__ <span class="token keyword">instanceof</span> <span class="token class-name">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob <span class="token operator">=</span> value<span class="token punctuation">.</span>__ob__
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    shouldObserve <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>value<span class="token punctuation">.</span>_isVue
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u4F8B\u5316Observer\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
    ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>asRootData <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob<span class="token punctuation">.</span>vmCount<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ob
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><code>Observer</code>\u7C7B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token literal-property property">dep</span><span class="token operator">:</span> Dep<span class="token punctuation">;</span>
    <span class="token literal-property property">vmCount</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// number of vms that have this object as root $data</span>

    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vmCount <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hasProto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">protoAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">copyAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5B9E\u4F8B\u5316\u5BF9\u8C61\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FDB\u5165walk\u65B9\u6CD5</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>walk</code>\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token comment">// \u904D\u5386key\uFF0C\u901A\u8FC7defineReactive\u521B\u5EFA\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>defineReactive</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  customSetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>
  shallow<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// cater for pre-defined getter/setters</span>
  <span class="token keyword">const</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get
  <span class="token keyword">const</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token comment">// \u63A5\u4E0B\u6765\u8C03\u7528Object.defineProperty()\u7ED9\u5BF9\u8C61\u5B9A\u4E49\u54CD\u5E94\u5F0F\u5C5E\u6027</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token comment">/* eslint-disable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* eslint-enable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> customSetter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">customSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// #7981: for accessor properties without setter</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
      <span class="token comment">// \u5BF9\u89C2\u5BDF\u8005watchers\u8FDB\u884C\u901A\u77E5,state\u5C31\u6210\u4E86\u5168\u5C40\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,28),k={href:"https://blog.csdn.net/qq_32682301/article/details/105419673",target:"_blank",rel:"noopener noreferrer"},b=p("https://blog.csdn.net/qq_32682301/article/details/105419673"),m={href:"https://wbbyouzi.com/archives/343",target:"_blank",rel:"noopener noreferrer"},d=p("https://wbbyouzi.com/archives/343");function y(v,f){const s=t("ExternalLinkIcon");return o(),c(l,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,a(s)])]),n("li",null,[n("a",m,[d,a(s)])])])],64)}var g=e(u,[["render",y],["__file","observable.html.vue"]]);export{g as default};
