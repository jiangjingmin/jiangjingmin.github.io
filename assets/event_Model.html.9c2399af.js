import{_ as n,e as s}from"./app.f6b3af9d.js";const a={},p=s(`<h1 id="\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> \u4E8B\u4EF6\u6A21\u578B</h1><p><img src="https://static.vue-js.com/32a182f0-74cf-11eb-85f6-6fac77c0c9b3.png" alt="00"></p><h2 id="\u4E00\u3001\u4E8B\u4EF6\u4E0E\u4E8B\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E8B\u4EF6\u4E0E\u4E8B\u4EF6\u6D41" aria-hidden="true">#</a> \u4E00\u3001\u4E8B\u4EF6\u4E0E\u4E8B\u4EF6\u6D41</h2><p><code>javascript</code>\u4E2D\u7684\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7406\u89E3\u5C31\u662F\u5728<code>HTML</code>\u6587\u6863\u6216\u8005\u6D4F\u89C8\u5668\u4E2D\u53D1\u751F\u7684\u4E00\u79CD\u4EA4\u4E92\u64CD\u4F5C\uFF0C\u4F7F\u5F97\u7F51\u9875\u5177\u5907\u4E92\u52A8\u6027\uFF0C \u5E38\u89C1\u7684\u6709\u52A0\u8F7D\u4E8B\u4EF6\u3001\u9F20\u6807\u4E8B\u4EF6\u3001\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7B49</p><p>\u7531\u4E8E<code>DOM</code>\u662F\u4E00\u4E2A\u6811\u7ED3\u6784\uFF0C\u5982\u679C\u5728\u7236\u5B50\u8282\u70B9\u7ED1\u5B9A\u4E8B\u4EF6\u65F6\u5019\uFF0C\u5F53\u89E6\u53D1\u5B50\u8282\u70B9\u7684\u65F6\u5019\uFF0C\u5C31\u5B58\u5728\u4E00\u4E2A\u987A\u5E8F\u95EE\u9898\uFF0C\u8FD9\u5C31\u6D89\u53CA\u5230\u4E86\u4E8B\u4EF6\u6D41\u7684\u6982\u5FF5</p><p>\u4E8B\u4EF6\u6D41\u90FD\u4F1A\u7ECF\u5386\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5(capture phase)</li><li>\u5904\u4E8E\u76EE\u6807\u9636\u6BB5(target phase)</li><li>\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5(bubbling phase)</li></ul><p><img src="https://static.vue-js.com/3e9a6450-74cf-11eb-85f6-6fac77c0c9b3.png" alt="01"></p><p>\u4E8B\u4EF6\u5192\u6CE1\u662F\u4E00\u79CD\u4ECE\u4E0B\u5F80\u4E0A\u7684\u4F20\u64AD\u65B9\u5F0F\uFF0C\u7531\u6700\u5177\u4F53\u7684\u5143\u7D20\uFF08\u89E6\u53D1\u8282\u70B9\uFF09\u7136\u540E\u9010\u6E10\u5411\u4E0A\u4F20\u64AD\u5230\u6700\u4E0D\u5177\u4F53\u7684\u90A3\u4E2A\u8282\u70B9\uFF0C\u4E5F\u5C31\u662F<code>DOM</code>\u4E2D\u6700\u9AD8\u5C42\u7684\u7236\u8282\u70B9</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Event Bubbling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clickMe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u7ED9<code>button</code>\u548C\u5B83\u7684\u7236\u5143\u7D20\uFF0C\u52A0\u5165\u70B9\u51FB\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;clickMe&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1.Button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2.body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3.document&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;4.window&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u70B9\u51FB\u6309\u94AE\uFF0C\u8F93\u51FA\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">.</span>button
<span class="token number">2</span><span class="token punctuation">.</span>body
<span class="token number">3</span><span class="token punctuation">.</span>document
<span class="token number">4</span><span class="token punctuation">.</span>window
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u70B9\u51FB\u4E8B\u4EF6\u9996\u5148\u5728<code>button</code>\u5143\u7D20\u4E0A\u53D1\u751F\uFF0C\u7136\u540E\u9010\u7EA7\u5411\u4E0A\u4F20\u64AD</p><p>\u4E8B\u4EF6\u6355\u83B7\u4E0E\u4E8B\u4EF6\u5192\u6CE1\u76F8\u53CD\uFF0C\u4E8B\u4EF6\u6700\u5F00\u59CB\u7531\u4E0D\u592A\u5177\u4F53\u7684\u8282\u70B9\u6700\u65E9\u63A5\u53D7\u4E8B\u4EF6, \u800C\u6700\u5177\u4F53\u7684\u8282\u70B9\uFF08\u89E6\u53D1\u8282\u70B9\uFF09\u6700\u540E\u63A5\u53D7\u4E8B\u4EF6</p><h2 id="\u4E8C\u3001\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> \u4E8C\u3001\u4E8B\u4EF6\u6A21\u578B</h2><p>\u4E8B\u4EF6\u6A21\u578B\u53EF\u4EE5\u5206\u4E3A\u4E09\u79CD\uFF1A</p><ul><li>\u539F\u59CB\u4E8B\u4EF6\u6A21\u578B\uFF08DOM0\u7EA7\uFF09</li><li>\u6807\u51C6\u4E8B\u4EF6\u6A21\u578B\uFF08DOM2\u7EA7\uFF09</li><li>IE\u4E8B\u4EF6\u6A21\u578B\uFF08\u57FA\u672C\u4E0D\u7528\uFF09</li></ul><h3 id="\u539F\u59CB\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> \u539F\u59CB\u4E8B\u4EF6\u6A21\u578B</h3><p>\u4E8B\u4EF6\u7ED1\u5B9A\u76D1\u542C\u51FD\u6570\u6BD4\u8F83\u7B80\u5355, \u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>HTML\u4EE3\u7801\u4E2D\u76F4\u63A5\u7ED1\u5B9A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> onclick<span class="token operator">=</span><span class="token string">&quot;fun()&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u901A\u8FC7<code>JS</code>\u4EE3\u7801\u7ED1\u5B9A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fun<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h4><ul><li>\u7ED1\u5B9A\u901F\u5EA6\u5FEB</li></ul><p><code>DOM0</code>\u7EA7\u4E8B\u4EF6\u5177\u6709\u5F88\u597D\u7684\u8DE8\u6D4F\u89C8\u5668\u4F18\u52BF\uFF0C\u4F1A\u4EE5\u6700\u5FEB\u7684\u901F\u5EA6\u7ED1\u5B9A\uFF0C\u4F46\u7531\u4E8E\u7ED1\u5B9A\u901F\u5EA6\u592A\u5FEB\uFF0C\u53EF\u80FD\u9875\u9762\u8FD8\u672A\u5B8C\u5168\u52A0\u8F7D\u51FA\u6765\uFF0C\u4EE5\u81F3\u4E8E\u4E8B\u4EF6\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C</p><ul><li><p>\u53EA\u652F\u6301\u5192\u6CE1\uFF0C\u4E0D\u652F\u6301\u6355\u83B7</p></li><li><p>\u540C\u4E00\u4E2A\u7C7B\u578B\u7684\u4E8B\u4EF6\u53EA\u80FD\u7ED1\u5B9A\u4E00\u6B21</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span> onclick<span class="token operator">=</span><span class="token string">&quot;fun1()&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fun2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u4E0A\uFF0C\u5F53\u5E0C\u671B\u4E3A\u540C\u4E00\u4E2A\u5143\u7D20\u7ED1\u5B9A\u591A\u4E2A\u540C\u7C7B\u578B\u4E8B\u4EF6\u7684\u65F6\u5019\uFF08\u4E0A\u9762\u7684\u8FD9\u4E2A<code>btn</code>\u5143\u7D20\u7ED1\u5B9A2\u4E2A\u70B9\u51FB\u4E8B\u4EF6\uFF09\uFF0C\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\uFF0C\u540E\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u4F1A\u8986\u76D6\u4E4B\u524D\u7684\u4E8B\u4EF6</p><p>\u5220\u9664 <code>DOM0</code> \u7EA7\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u53EA\u8981\u5C06\u5BF9\u5E94\u4E8B\u4EF6\u5C5E\u6027\u7F6E\u4E3A<code>null</code>\u5373\u53EF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6807\u51C6\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> \u6807\u51C6\u4E8B\u4EF6\u6A21\u578B</h3><p>\u5728\u8BE5\u4E8B\u4EF6\u6A21\u578B\u4E2D\uFF0C\u4E00\u6B21\u4E8B\u4EF6\u5171\u6709\u4E09\u4E2A\u8FC7\u7A0B:</p><ul><li>\u4E8B\u4EF6\u6355\u83B7\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u4ECE<code>document</code>\u4E00\u76F4\u5411\u4E0B\u4F20\u64AD\u5230\u76EE\u6807\u5143\u7D20, \u4F9D\u6B21\u68C0\u67E5\u7ECF\u8FC7\u7684\u8282\u70B9\u662F\u5426\u7ED1\u5B9A\u4E86\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u5982\u679C\u6709\u5219\u6267\u884C</li><li>\u4E8B\u4EF6\u5904\u7406\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u5230\u8FBE\u76EE\u6807\u5143\u7D20, \u89E6\u53D1\u76EE\u6807\u5143\u7D20\u7684\u76D1\u542C\u51FD\u6570</li><li>\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u4ECE\u76EE\u6807\u5143\u7D20\u5192\u6CE1\u5230<code>document</code>, \u4F9D\u6B21\u68C0\u67E5\u7ECF\u8FC7\u7684\u8282\u70B9\u662F\u5426\u7ED1\u5B9A\u4E86\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u5982\u679C\u6709\u5219\u6267\u884C</li></ul><p>\u4E8B\u4EF6\u7ED1\u5B9A\u76D1\u542C\u51FD\u6570\u7684\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E8B\u4EF6\u79FB\u9664\u76D1\u542C\u51FD\u6570\u7684\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">removeEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li><code>eventType</code>\u6307\u5B9A\u4E8B\u4EF6\u7C7B\u578B(\u4E0D\u8981\u52A0on)</li><li><code>handler</code>\u662F\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</li><li><code>useCapture</code>\u662F\u4E00\u4E2A<code>boolean</code>\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u5728\u6355\u83B7\u9636\u6BB5\u8FDB\u884C\u5904\u7406\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3A<code>false</code>\u4E0EIE\u6D4F\u89C8\u5668\u4FDD\u6301\u4E00\u81F4</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\u2018click\u2019<span class="token punctuation">,</span> showMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>\u2018click\u2019<span class="token punctuation">,</span> showMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u7279\u6027-1" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027-1" aria-hidden="true">#</a> \u7279\u6027</h4><ul><li>\u53EF\u4EE5\u5728\u4E00\u4E2A<code>DOM</code>\u5143\u7D20\u4E0A\u7ED1\u5B9A\u591A\u4E2A\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u5404\u81EA\u5E76\u4E0D\u4F1A\u51B2\u7A81</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\u2018click\u2019<span class="token punctuation">,</span> showMessage1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\u2018click\u2019<span class="token punctuation">,</span> showMessage2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\u2018click\u2019<span class="token punctuation">,</span> showMessage3<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6267\u884C\u65F6\u673A</li></ul><p>\u5F53\u7B2C\u4E09\u4E2A\u53C2\u6570(<code>useCapture</code>)\u8BBE\u7F6E\u4E3A<code>true</code>\u5C31\u5728\u6355\u83B7\u8FC7\u7A0B\u4E2D\u6267\u884C\uFF0C\u53CD\u4E4B\u5728\u5192\u6CE1\u8FC7\u7A0B\u4E2D\u6267\u884C\u5904\u7406\u51FD\u6570</p><p>\u4E0B\u9762\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&#39;div&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&#39;p&#39;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">&#39;span&#39;</span><span class="token operator">&gt;</span>Click Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BBE\u7F6E\u70B9\u51FB\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">onClickFn</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tagName <span class="token operator">=</span> event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span>
    <span class="token keyword">var</span> phase <span class="token operator">=</span> event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tagName<span class="token punctuation">,</span> phase<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u8FF0\u4F7F\u7528\u4E86<code>eventPhase</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u4EE3\u8868\u5F53\u524D\u6267\u884C\u9636\u6BB5\u7684\u6574\u6570\u503C\u30021\u4E3A\u6355\u83B7\u9636\u6BB5\u30012\u4E3A\u4E8B\u4EF6\u5BF9\u8C61\u89E6\u53D1\u9636\u6BB5\u30013\u4E3A\u5192\u6CE1\u9636\u6BB5</p><p>\u70B9\u51FB<code>Click Me!</code>\uFF0C\u8F93\u51FA\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">P</span> <span class="token number">3</span>
<span class="token constant">DIV</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>p</code>\u548C<code>div</code>\u90FD\u662F\u5728\u5192\u6CE1\u9636\u6BB5\u54CD\u5E94\u4E86\u4E8B\u4EF6\uFF0C\u7531\u4E8E\u5192\u6CE1\u7684\u7279\u6027\uFF0C\u88F9\u5728\u91CC\u5C42\u7684<code>p</code>\u7387\u5148\u505A\u51FA\u54CD\u5E94</p><p>\u5982\u679C\u628A\u7B2C\u4E09\u4E2A\u53C2\u6570\u90FD\u6539\u4E3A<code>true</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u51FA\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">DIV</span> <span class="token number">1</span>
<span class="token constant">P</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E24\u8005\u90FD\u662F\u5728\u6355\u83B7\u9636\u6BB5\u54CD\u5E94\u4E8B\u4EF6\uFF0C\u6240\u4EE5<code>div</code>\u6BD4<code>p</code>\u6807\u7B7E\u5148\u505A\u51FA\u54CD\u5E94</p><h3 id="ie\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#ie\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> IE\u4E8B\u4EF6\u6A21\u578B</h3><p>IE\u4E8B\u4EF6\u6A21\u578B\u5171\u6709\u4E24\u4E2A\u8FC7\u7A0B:</p><ul><li>\u4E8B\u4EF6\u5904\u7406\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u5230\u8FBE\u76EE\u6807\u5143\u7D20, \u89E6\u53D1\u76EE\u6807\u5143\u7D20\u7684\u76D1\u542C\u51FD\u6570\u3002</li><li>\u4E8B\u4EF6\u5192\u6CE1\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u4ECE\u76EE\u6807\u5143\u7D20\u5192\u6CE1\u5230<code>document</code>, \u4F9D\u6B21\u68C0\u67E5\u7ECF\u8FC7\u7684\u8282\u70B9\u662F\u5426\u7ED1\u5B9A\u4E86\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u5982\u679C\u6709\u5219\u6267\u884C</li></ul><p>\u4E8B\u4EF6\u7ED1\u5B9A\u76D1\u542C\u51FD\u6570\u7684\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">attachEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E8B\u4EF6\u79FB\u9664\u76D1\u542C\u51FD\u6570\u7684\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">detachEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;.btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span>\u2018onclick\u2019<span class="token punctuation">,</span> showMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span>\u2018onclick\u2019<span class="token punctuation">,</span> showMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,71);function t(e,c){return p}var l=n(a,[["render",t],["__file","event_Model.html.vue"]]);export{l as default};
