import{_ as a,r as p,o as e,c as t,a as n,b as c,F as o,e as l,d as r}from"./app.cec2e512.js";const u={},i=l(`<h1 id="decorator-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#decorator-\u88C5\u9970\u5668" aria-hidden="true">#</a> Decorator \u88C5\u9970\u5668</h1><h2 id="\u4E00\u3001\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00\u3001\u4ECB\u7ECD</h2><p>Decorator\uFF0C\u5373\u88C5\u9970\u5668\uFF0C\u4ECE\u540D\u5B57\u4E0A\u5F88\u5BB9\u6613\u8BA9\u6211\u4EEC\u8054\u60F3\u5230\u88C5\u9970\u8005\u6A21\u5F0F</p><p>\u7B80\u5355\u6765\u8BB2\uFF0C\u88C5\u9970\u8005\u6A21\u5F0F\u5C31\u662F\u4E00\u79CD\u5728\u4E0D\u6539\u53D8\u539F\u7C7B\u548C\u4F7F\u7528\u7EE7\u627F\u7684\u60C5\u51B5\u4E0B\uFF0C\u52A8\u6001\u5730\u6269\u5C55\u5BF9\u8C61\u529F\u80FD\u7684\u8BBE\u8BA1\u7406\u8BBA\u3002</p><p><code>ES6</code>\u4E2D<code>Decorator</code>\u529F\u80FD\u4EA6\u5982\u6B64\uFF0C\u5176\u672C\u8D28\u4E5F\u4E0D\u662F\u4EC0\u4E48\u9AD8\u5927\u4E0A\u7684\u7ED3\u6784\uFF0C\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u7528\u4E8E\u6269\u5C55\u7C7B\u5C5E\u6027\u548C\u7C7B\u65B9\u6CD5</p><p>\u8FD9\u91CC\u5B9A\u4E49\u4E00\u4E2A\u58EB\u5175\uFF0C\u8FD9\u65F6\u5019\u4ED6\u4EC0\u4E48\u88C5\u5907\u90FD\u6CA1\u6709</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">soldier</span><span class="token punctuation">{</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5B9A\u4E49\u4E00\u4E2A\u5F97\u5230 AK \u88C5\u5907\u7684\u51FD\u6570\uFF0C\u5373\u88C5\u9970\u5668</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strong</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    target<span class="token punctuation">.</span><span class="token constant">AK</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u8BE5\u88C5\u9970\u5668\u5BF9\u58EB\u5175\u8FDB\u884C\u589E\u5F3A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@strong
<span class="token keyword">class</span> <span class="token class-name">soldier</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u65F6\u5019\u58EB\u5175\u5C31\u6709\u6B66\u5668\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>soldier<span class="token punctuation">.</span><span class="token constant">AK</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u867D\u7136\u7B80\u5355\uFF0C\u4F46\u4E5F\u80FD\u591F\u6E05\u6670\u770B\u5230\u4E86\u4F7F\u7528<code>Decorator</code>\u4E24\u5927\u4F18\u70B9\uFF1A</p><ul><li>\u4EE3\u7801\u53EF\u8BFB\u6027\u53D8\u5F3A\u4E86\uFF0C\u88C5\u9970\u5668\u547D\u540D\u76F8\u5F53\u4E8E\u4E00\u4E2A\u6CE8\u91CA</li><li>\u5728\u4E0D\u6539\u53D8\u539F\u6709\u4EE3\u7801\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u539F\u6765\u529F\u80FD\u8FDB\u884C\u6269\u5C55</li></ul><h2 id="\u4E8C\u3001\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7528\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001\u7528\u6CD5</h2><p><code>Docorator</code>\u4FEE\u9970\u5BF9\u8C61\u4E3A\u4E0B\u9762\u4E24\u79CD\uFF1A</p><ul><li>\u7C7B\u7684\u88C5\u9970</li><li>\u7C7B\u5C5E\u6027\u7684\u88C5\u9970</li></ul><h3 id="\u7C7B\u7684\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u88C5\u9970" aria-hidden="true">#</a> \u7C7B\u7684\u88C5\u9970</h3><p>\u5F53\u5BF9\u7C7B\u672C\u8EAB\u8FDB\u884C\u88C5\u9970\u7684\u65F6\u5019\uFF0C\u80FD\u591F\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u5373\u7C7B\u672C\u8EAB</p><p>\u5C06\u88C5\u9970\u5668\u884C\u4E3A\u8FDB\u884C\u5206\u89E3\uFF0C\u5927\u5BB6\u80FD\u591F\u6709\u4E2A\u66F4\u6DF1\u5165\u7684\u4E86\u89E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@decorator
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token constant">A</span> <span class="token operator">=</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">A</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0B\u9762<code>@testable</code>\u5C31\u662F\u4E00\u4E2A\u88C5\u9970\u5668\uFF0C<code>target</code>\u5C31\u662F\u4F20\u5165\u7684\u7C7B\uFF0C\u5373<code>MyTestableClass</code>\uFF0C\u5B9E\u73B0\u4E86\u4E3A\u7C7B\u6DFB\u52A0\u9759\u6001\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5982\u679C\u60F3\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u53EF\u4EE5\u5728\u88C5\u9970\u5668\u5916\u5C42\u518D\u5C01\u88C5\u4E00\u5C42\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">isTestable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> isTestable<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyClass<span class="token punctuation">.</span>isTestable <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u7C7B\u5C5E\u6027\u7684\u88C5\u9970" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5C5E\u6027\u7684\u88C5\u9970" aria-hidden="true">#</a> \u7C7B\u5C5E\u6027\u7684\u88C5\u9970</h3><p>\u5F53\u5BF9\u7C7B\u5C5E\u6027\u8FDB\u884C\u88C5\u9970\u7684\u65F6\u5019\uFF0C\u80FD\u591F\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A</p><ul><li>\u7C7B\u7684\u539F\u578B\u5BF9\u8C61</li><li>\u9700\u8981\u88C5\u9970\u7684\u5C5E\u6027\u540D</li><li>\u88C5\u9970\u5C5E\u6027\u540D\u7684\u63CF\u8FF0\u5BF9\u8C61</li></ul><p>\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A<code>readonly</code>\u88C5\u9970\u5668</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u53EF\u5199\u5C5E\u6027\u8BBE\u4E3Afalse</span>
  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F7F\u7528<code>readonly</code>\u88C5\u9970\u7C7B\u7684<code>name</code>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @readonly
  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u76F8\u5F53\u4E8E\u4EE5\u4E0B\u8C03\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">readonly</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E00\u4E2A\u65B9\u6CD5\u6709\u591A\u4E2A\u88C5\u9970\u5668\uFF0C\u5C31\u50CF\u6D0B\u8471\u4E00\u6837\uFF0C\u5148\u4ECE\u5916\u5230\u5185\u8FDB\u5165\uFF0C\u518D\u7531\u5185\u5230\u5916\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;evaluated&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;executed&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// evaluated 1</span>
<span class="token comment">// evaluated 2</span>
<span class="token comment">// executed 2</span>
<span class="token comment">// executed 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5916\u5C42\u88C5\u9970\u5668<code>@dec(1)</code>\u5148\u8FDB\u5165\uFF0C\u4F46\u662F\u5185\u5C42\u88C5\u9970\u5668<code>@dec(2)</code>\u5148\u6267\u884C</p><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><p>\u88C5\u9970\u5668\u4E0D\u80FD\u7528\u4E8E\u4FEE\u9970\u51FD\u6570\uFF0C\u56E0\u4E3A\u51FD\u6570\u5B58\u5728\u53D8\u91CF\u58F0\u660E\u60C5\u51B5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7F16\u8BD1\u9636\u6BB5\uFF0C\u53D8\u6210\u4E0B\u9762</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> counter<span class="token punctuation">;</span>
<span class="token keyword">var</span> add<span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u610F\u56FE\u662F\u6267\u884C\u540E<code>counter</code>\u7B49\u4E8E 1\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u7ED3\u679C\u662F<code>counter</code>\u7B49\u4E8E 0</p><h2 id="\u4E09\u3001\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u4F7F\u7528\u573A\u666F</h2><p>\u57FA\u4E8E<code>Decorator</code>\u5F3A\u5927\u7684\u4F5C\u7528\uFF0C\u6211\u4EEC\u80FD\u591F\u5B8C\u6210\u5404\u79CD\u573A\u666F\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u7B80\u5355\u5217\u4E3E\u51E0\u79CD\uFF1A</p><p>\u4F7F\u7528<code>react-redux</code>\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5199\u6210\u4E0B\u9762\u8FD9\u79CD\u5F62\u5F0F\uFF0C\u65E2\u4E0D\u96C5\u89C2\u4E5F\u5F88\u9EBB\u70E6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyReactComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u88C5\u9970\u5668\u5C31\u53D8\u5F97\u7B80\u6D01\u591A\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5C06<code>mixins</code>\uFF0C\u4E5F\u53EF\u4EE5\u5199\u6210\u88C5\u9970\u5668\uFF0C\u8BA9\u4F7F\u7528\u66F4\u4E3A\u7B80\u6D01\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">mixins</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0B\u9762\u518D\u8BB2\u8BB2<code>core-decorators.js</code>\u51E0\u4E2A\u5E38\u89C1\u7684\u88C5\u9970\u5668</p><h4 id="antobind" tabindex="-1"><a class="header-anchor" href="#antobind" aria-hidden="true">#</a> @antobind</h4><p><code>autobind</code>\u88C5\u9970\u5668\u4F7F\u5F97\u65B9\u6CD5\u4E2D\u7684<code>this</code>\u5BF9\u8C61\uFF0C\u7ED1\u5B9A\u539F\u59CB\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> autobind <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @autobind
  <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> getPerson <span class="token operator">=</span> person<span class="token punctuation">.</span>getPerson<span class="token punctuation">;</span>

<span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> @readonly</h4><p><code>readonly</code>\u88C5\u9970\u5668\u4F7F\u5F97\u5C5E\u6027\u6216\u65B9\u6CD5\u4E0D\u53EF\u5199</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Meal</span> <span class="token punctuation">{</span>
  @readonly
  entree <span class="token operator">=</span> <span class="token string">&#39;steak&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> dinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dinner<span class="token punctuation">.</span>entree <span class="token operator">=</span> <span class="token string">&#39;salmon&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot assign to read only property &#39;entree&#39; of [object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="deprecate" tabindex="-1"><a class="header-anchor" href="#deprecate" aria-hidden="true">#</a> @deprecate</h4><p><code>deprecate</code>\u6216<code>deprecated</code>\u88C5\u9970\u5668\u5728\u63A7\u5236\u53F0\u663E\u793A\u4E00\u6761\u8B66\u544A\uFF0C\u8868\u793A\u8BE5\u65B9\u6CD5\u5C06\u5E9F\u9664</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> deprecate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @deprecate
  <span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;\u529F\u80FD\u5E9F\u9664\u4E86&#39;</span><span class="token punctuation">)</span>
  <span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalm: This function will be removed in future versions.</span>

person<span class="token punctuation">.</span><span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalmHard: \u529F\u80FD\u5E9F\u9664\u4E86</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,63),k={href:"https://es6.ruanyifeng.com/#docs/decorator",target:"_blank",rel:"noopener noreferrer"},d=r("https://es6.ruanyifeng.com/#docs/decorator");function b(m,v){const s=p("ExternalLinkIcon");return e(),t(o,null,[i,n("ul",null,[n("li",null,[n("a",k,[d,c(s)])])])],64)}var h=a(u,[["render",b],["__file","decorator.html.vue"]]);export{h as default};
