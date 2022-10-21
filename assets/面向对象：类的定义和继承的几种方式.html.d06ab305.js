import{_ as n,e as s}from"./app.6e1280c8.js";const a={},p=s(`<h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1 \u524D\u8A00</h2><blockquote><p>\u7C7B\u4E0E\u5B9E\u4F8B\uFF1A</p></blockquote><ul><li>\u7C7B\u7684\u58F0\u660E</li><li>\u751F\u6210\u5B9E\u4F8B</li></ul><p><strong>\u7C7B\u4E0E\u7EE7\u627F\uFF1A</strong></p><ul><li>\u5982\u4F55\u5B9E\u73B0\u7EE7\u627F\uFF1A\u7EE7\u627F\u7684\u672C\u8D28\u5C31\u662F\u539F\u578B\u94FE</li><li>\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F</li></ul><h2 id="_2-\u7C7B\u7684\u5B9A\u4E49\u3001\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u7684\u5B9A\u4E49\u3001\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 2 \u7C7B\u7684\u5B9A\u4E49\u3001\u5B9E\u4F8B\u5316</h2><h3 id="_2-1-\u7C7B\u7684\u5B9A\u4E49-\u7C7B\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7C7B\u7684\u5B9A\u4E49-\u7C7B\u7684\u58F0\u660E" aria-hidden="true">#</a> 2.1 \u7C7B\u7684\u5B9A\u4E49/\u7C7B\u7684\u58F0\u660E</h3><p><strong>\u65B9\u5F0F\u4E00</strong>\uFF1A\u7528\u6784\u9020\u51FD\u6570\u6A21\u62DF\u7C7B\uFF08\u4F20\u7EDF\u5199\u6CD5\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Animal1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;smyhvae&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u901A\u8FC7this\uFF0C\u8868\u660E\u8FD9\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u65B9\u5F0F\u4E8C</strong>\uFF1A\u7528 class \u58F0\u660E\uFF08<code>ES6</code>\u7684\u5199\u6CD5\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal2</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u53EF\u4EE5\u5728\u6784\u9020\u51FD\u6570\u91CC\u5199\u5C5E\u6027</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u63A7\u5236\u53F0\u7684\u6548\u679C\uFF1A</p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_0957.png" alt="image"></p><h3 id="_2-2-\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 2.2 \u5B9E\u4F8B\u5316</h3><p>\u7C7B\u7684\u5B9E\u4F8B\u5316\u5F88\u7B80\u5355\uFF0C\u76F4\u63A5 <code>new</code> \u51FA\u6765\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Animal1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Animal2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5B9E\u4F8B\u5316\u3002\u5982\u679C\u62EC\u53F7\u91CC\u6CA1\u6709\u53C2\u6570\uFF0C\u5219\u62EC\u53F7\u53EF\u4EE5\u7701\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_1000.png" alt="image"></p><h2 id="_3-\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 3 \u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F</h2><blockquote><p>\u7EE7\u627F\u7684\u672C\u8D28\u5C31\u662F\u539F\u578B\u94FE\u3002</p></blockquote><p><strong>\u7EE7\u627F\u7684\u65B9\u5F0F\u6709\u51E0\u79CD\uFF1F\u6BCF\u79CD\u5F62\u5F0F\u7684\u4F18\u7F3A\u70B9\u662F</strong>\uFF1F\u8FD9\u4E9B\u95EE\u9898\u5FC5\u95EE\u7684\u3002\u5176\u5B9E\u5C31\u662F\u8003\u5BDF\u4F60\u5BF9\u539F\u578B\u94FE\u7684\u638C\u63E1\u7A0B\u5EA6\u3002</p><h3 id="_3-1-\u65B9\u5F0F\u4E00-\u501F\u52A9\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-1-\u65B9\u5F0F\u4E00-\u501F\u52A9\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 3.1 \u65B9\u5F0F\u4E00\uFF1A\u501F\u52A9\u6784\u9020\u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;parent1 \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Parent1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//\u3010\u91CD\u8981\u3011\u6B64\u5904\u7528 call \u6216 apply \u90FD\u884C\uFF1A\u6539\u53D8 this \u7684\u6307\u5411</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;child1 \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Child1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u3010\u91CD\u8981\u3011\u4E0A\u65B9\u4EE3\u7801\u4E2D\uFF0C\u6700\u91CD\u8981\u7684\u90A3\u884C\u4EE3\u7801\uFF1A\u5728\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u91CC\u5199\u4E86<code>Parent1.call(this);</code>\uFF0C\u610F\u601D\u662F\uFF1A<strong>\u8BA9Parent\u7684\u6784\u9020\u51FD\u6570\u5728child\u7684\u6784\u9020\u51FD\u6570\u4E2D\u6267\u884C</strong>\u3002\u53D1\u751F\u7684\u53D8\u5316\u662F\uFF1A<strong>\u6539\u53D8this\u7684\u6307\u5411</strong>\uFF0Cparent\u7684\u5B9E\u4F8B --&gt; \u6539\u4E3A\u6307\u5411child\u7684\u5B9E\u4F8B\u3002\u5BFC\u81F4 parent\u7684\u5B9E\u4F8B\u7684\u5C5E\u6027\u6302\u5728\u5230\u4E86child\u7684\u5B9E\u4F8B\u4E0A\uFF0C\u8FD9\u5C31\u5B9E\u73B0\u4E86\u7EE7\u627F\u3002</p></blockquote><p>\u6253\u5370\u7ED3\u679C\uFF1A</p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_1015.png" alt="image"></p><blockquote><p>\u4E0A\u65B9\u7ED3\u679C\u8868\u660E\uFF1A<code>child</code>\u5148\u6709\u4E86 <code>parent</code> \u5B9E\u4F8B\u7684\u5C5E\u6027\uFF08\u7EE7\u627F\u5F97\u4EE5\u5B9E\u73B0\uFF09\uFF0C\u518D\u6709\u4E86<code>child</code> \u5B9E\u4F8B\u7684\u5C5E\u6027\u3002</p></blockquote><p><strong>\u5206\u6790</strong>\uFF1A</p><blockquote><p>\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u867D\u7136\u6539\u53D8\u4E86 <code>this</code> \u7684\u6307\u5411\uFF0C\u4F46\u662F\uFF0C<strong>Child1 \u65E0\u6CD5\u7EE7\u627F <code>Parent1</code> \u7684\u539F\u578B</strong>\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u6211\u7ED9 <code>Parent1</code> \u7684\u539F\u578B\u589E\u52A0\u4E00\u4E2A\u65B9\u6CD5\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Parent1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4E0A\u9762\u8FD9\u4E2A\u65B9\u6CD5\u662F\u65E0\u6CD5\u88AB <code>Child1</code> \u7EE7\u627F\u7684\u3002\u5982\u4E0B\uFF1A</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_1030.png" alt="image"></p><h3 id="_3-2-\u65B9\u6CD5\u4E8C-\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B9\u6CD5\u4E8C-\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F" aria-hidden="true">#</a> 3.2 \u65B9\u6CD5\u4E8C\uFF1A\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F
 */</span>
<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Parent \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;Child \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u3010\u91CD\u8981\u3011</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6253\u5370\u7ED3\u679C\uFF1A</p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_1109.png" alt="image"></p><blockquote><p>\u3010\u91CD\u8981\u3011\u4E0A\u65B9\u4EE3\u7801\u4E2D\uFF0C\u6700\u91CD\u8981\u7684\u90A3\u884C\uFF1A\u6BCF\u4E2A\u51FD\u6570\u90FD\u6709<code>prototype</code>\u5C5E\u6027\uFF0C\u4E8E\u662F\uFF0C\u6784\u9020\u51FD\u6570\u4E5F\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u73B0\u5728\uFF0C<strong>\u6211\u4EEC\u628A<code>Parent</code>\u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9\u4E86<code>Child</code>\u7684<code>prototye</code></strong>\uFF0C\u4ECE\u800C\u5B9E\u73B0<strong>\u7EE7\u627F</strong>\u3002\u6B64\u65F6\uFF0C<code>Child</code>\u6784\u9020\u51FD\u6570\u3001<code>Parent</code>\u7684\u5B9E\u4F8B\u3001<code>Child</code>\u7684\u5B9E\u4F8B\u6784\u6210\u4E00\u4E2A\u4E09\u89D2\u5173\u7CFB\u3002\u4E8E\u662F\uFF1A</p></blockquote><ul><li><code>new Child.__proto__ === new Parent()</code>\u7684\u7ED3\u679C\u4E3A<code>true</code></li></ul><p><strong>\u5206\u6790\uFF1A</strong></p><ul><li>\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\uFF0C<strong>Child \u53EF\u4EE5\u7EE7\u627F Parent \u7684\u539F\u578B</strong>\uFF0C\u4F46\u6709\u4E2A\u7F3A\u70B9\uFF1A</li></ul><blockquote><p>\u7F3A\u70B9\u662F\uFF1A<strong>\u5982\u679C\u4FEE\u6539 child1\u5B9E\u4F8B\u7684name\u5C5E\u6027\uFF0Cchild2\u5B9E\u4F8B\u4E2D\u7684name\u5C5E\u6027\u4E5F\u4F1A\u8DDF\u7740\u6539\u53D8</strong>\u3002</p></blockquote><p>\u5982\u4E0B\uFF1A</p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180307_1123.png" alt="image"></p><blockquote><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C <code>child1</code>\u4FEE\u6539\u4E86<code>arr</code>\u5C5E\u6027\uFF0C\u5374\u53D1\u73B0\uFF0C<code>child2</code>\u7684<code>arr</code>\u5C5E\u6027\u4E5F\u8DDF\u7740\u6539\u53D8\u4E86\u3002\u8FD9\u663E\u7136\u4E0D\u592A\u597D\uFF0C\u5728\u4E1A\u52A1\u4E2D\uFF0C\u4E24\u4E2A\u5B50\u6A21\u5757\u5E94\u8BE5\u9694\u79BB\u624D\u5BF9\u3002\u5982\u679C\u6539\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53E6\u4E00\u4E2A\u5BF9\u8C61\u5374\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u5C31\u4E0D\u592A\u597D\u3002</p></blockquote><blockquote><p>\u9020\u6210\u8FD9\u79CD\u7F3A\u70B9\u7684\u539F\u56E0\u662F\uFF1A<code>child1</code>\u548C<code>child2</code>\u5171\u7528\u539F\u578B\u3002\u5373\uFF1A<code>chi1d1.__proto__ === child2__proto__</code>\u662F\u4E25\u683C\u76F8\u540C\u3002\u800C arr\u65B9\u6CD5\u662F\u5728 Parent \u7684\u5B9E\u4F8B\u4E0A\uFF08\u5373 Child\u5B9E\u4F8B\u7684\u539F\u578B\uFF09\u7684\u3002</p></blockquote><h3 id="_3-3-\u65B9\u5F0F\u4E09-\u7EC4\u5408\u7684\u65B9\u5F0F-\u6784\u9020\u51FD\u6570-\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#_3-3-\u65B9\u5F0F\u4E09-\u7EC4\u5408\u7684\u65B9\u5F0F-\u6784\u9020\u51FD\u6570-\u539F\u578B\u94FE" aria-hidden="true">#</a> 3.3 \u65B9\u5F0F\u4E09\uFF1A\u7EC4\u5408\u7684\u65B9\u5F0F\uFF1A\u6784\u9020\u51FD\u6570 + \u539F\u578B\u94FE</h3><p>\u5C31\u662F\u628A\u4E0A\u9762\u7684\u4E24\u79CD\u65B9\u5F0F\u7EC4\u5408\u8D77\u6765\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
\u7EC4\u5408\u65B9\u5F0F\u5B9E\u73B0\u7EE7\u627F\uFF1A\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u94FE
 */</span>
<span class="token keyword">function</span> <span class="token function">Parent3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Parent \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Parent3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u3010\u91CD\u89811\u3011\u6267\u884C parent\u65B9\u6CD5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;Child \u7684\u5C5E\u6027&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Child3</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u3010\u91CD\u89812\u3011\u7B2C\u4E8C\u6B21\u6267\u884Cparent\u65B9\u6CD5</span>

<span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u80FD\u89E3\u51B3\u4E4B\u524D\u4E24\u79CD\u65B9\u5F0F\u7684\u95EE\u9898\uFF1A\u65E2\u53EF\u4EE5\u7EE7\u627F\u7236\u7C7B\u539F\u578B\u7684\u5185\u5BB9\uFF0C\u4E5F\u4E0D\u4F1A\u9020\u6210\u539F\u578B\u91CC\u5C5E\u6027\u7684\u4FEE\u6539\u3002</li><li>\u8FD9\u79CD\u65B9\u5F0F\u7684\u7F3A\u70B9\u662F\uFF1A\u8BA9\u7236\u4EB2<code>Parent</code>\u7684\u6784\u9020\u65B9\u6CD5\u6267\u884C\u4E86\u4E24\u6B21\u3002</li><li><code>ES6</code>\u4E2D\u7684\u7EE7\u627F\u65B9\u5F0F\uFF0C\u4E00\u5E26\u800C\u8FC7\u5373\u53EF\uFF0C\u91CD\u70B9\u662F\u8981\u638C\u63E1<code>ES5</code>\u4E2D\u7684\u7EE7\u627F\u3002</li></ul>`,48);function e(t,c){return p}var l=n(a,[["render",e],["__file","\u9762\u5411\u5BF9\u8C61\uFF1A\u7C7B\u7684\u5B9A\u4E49\u548C\u7EE7\u627F\u7684\u51E0\u79CD\u65B9\u5F0F.html.vue"]]);export{l as default};
