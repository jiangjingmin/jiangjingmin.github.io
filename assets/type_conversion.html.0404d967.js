import{_ as n,c as s}from"./app.8c5ff8f0.js";const a={},e=s(`<h1 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u578B\u8F6C\u6362</h1><p><img src="https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png" alt="111"></p><h2 id="\u4E00\u3001\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6982\u8FF0" aria-hidden="true">#</a> \u4E00\u3001\u6982\u8FF0</h2><p>\u524D\u9762\u6211\u4EEC\u8BB2\u5230\uFF0C<code>JS</code>\u4E2D\u6709\u516D\u79CD\u7B80\u5355\u6570\u636E\u7C7B\u578B\uFF1A<code>undefined</code>\u3001<code>null</code>\u3001<code>boolean</code>\u3001<code>string</code>\u3001<code>number</code>\u3001<code>symbol</code>\uFF0C\u4EE5\u53CA\u5F15\u7528\u7C7B\u578B\uFF1A<code>object</code></p><p>\u4F46\u662F\u6211\u4EEC\u5728\u58F0\u660E\u7684\u65F6\u5019\u53EA\u6709\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u53EA\u6709\u5230\u8FD0\u884C\u671F\u95F4\u624D\u4F1A\u786E\u5B9A\u5F53\u524D\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> y <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>x</code>\u7684\u503C\u5728\u7F16\u8BD1\u9636\u6BB5\u662F\u65E0\u6CD5\u83B7\u53D6\u7684\uFF0C\u53EA\u6709\u7B49\u5230\u7A0B\u5E8F\u8FD0\u884C\u65F6\u624D\u80FD\u77E5\u9053</p><p>\u867D\u7136\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u4F46\u662F\u5404\u79CD\u8FD0\u7B97\u7B26\u5BF9\u6570\u636E\u7C7B\u578B\u662F\u6709\u8981\u6C42\u7684\uFF0C\u5982\u679C\u8FD0\u7B97\u5B50\u7684\u7C7B\u578B\u4E0E\u9884\u671F\u4E0D\u7B26\u5408\uFF0C\u5C31\u4F1A\u89E6\u53D1\u7C7B\u578B\u8F6C\u6362\u673A\u5236</p><p>\u5E38\u89C1\u7684\u7C7B\u578B\u8F6C\u6362\u6709\uFF1A</p><ul><li>\u5F3A\u5236\u8F6C\u6362\uFF08\u663E\u793A\u8F6C\u6362\uFF09</li><li>\u81EA\u52A8\u8F6C\u6362\uFF08\u9690\u5F0F\u8F6C\u6362\uFF09</li></ul><h2 id="\u4E8C\u3001\u663E\u793A\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u663E\u793A\u8F6C\u6362" aria-hidden="true">#</a> \u4E8C\u3001\u663E\u793A\u8F6C\u6362</h2><p>\u663E\u793A\u8F6C\u6362\uFF0C\u5373\u6211\u4EEC\u5F88\u6E05\u695A\u53EF\u4EE5\u770B\u5230\u8FD9\u91CC\u53D1\u751F\u4E86\u7C7B\u578B\u7684\u8F6C\u53D8\uFF0C\u5E38\u89C1\u7684\u65B9\u6CD5\u6709\uFF1A</p><ul><li>Number()</li><li>parseInt()</li><li>String()</li><li>Boolean()</li></ul><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number()</h3><p>\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u8F6C\u5316\u4E3A\u6570\u503C</p><p>\u5148\u7ED9\u51FA\u7C7B\u578B\u8F6C\u6362\u89C4\u5219\uFF1A</p><p><img src="https://static.vue-js.com/915b7300-6692-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5B9E\u8DF5\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">324</span><span class="token punctuation">)</span> <span class="token comment">// 324</span>

<span class="token comment">// \u5B57\u7B26\u4E32\uFF1A\u5982\u679C\u53EF\u4EE5\u88AB\u89E3\u6790\u4E3A\u6570\u503C\uFF0C\u5219\u8F6C\u6362\u4E3A\u76F8\u5E94\u7684\u6570\u503C</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;324&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 324</span>

<span class="token comment">// \u5B57\u7B26\u4E32\uFF1A\u5982\u679C\u4E0D\u53EF\u4EE5\u88AB\u89E3\u6790\u4E3A\u6570\u503C\uFF0C\u8FD4\u56DE NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;324abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>

<span class="token comment">// \u7A7A\u5B57\u7B26\u4E32\u8F6C\u4E3A0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// \u5E03\u5C14\u503C\uFF1Atrue \u8F6C\u6210 1\uFF0Cfalse \u8F6C\u6210 0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// undefined\uFF1A\u8F6C\u6210 NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>

<span class="token comment">// null\uFF1A\u8F6C\u62100</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// \u5BF9\u8C61\uFF1A\u901A\u5E38\u8F6C\u6362\u6210NaN(\u9664\u4E86\u53EA\u5305\u542B\u5355\u4E2A\u6570\u503C\u7684\u6570\u7EC4)</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C<code>Number</code>\u8F6C\u6362\u7684\u65F6\u5019\u662F\u5F88\u4E25\u683C\u7684\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u5B57\u7B26\u65E0\u6CD5\u8F6C\u6210\u6570\u503C\uFF0C\u6574\u4E2A\u5B57\u7B26\u4E32\u5C31\u4F1A\u88AB\u8F6C\u4E3A<code>NaN</code></p><h3 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt()</h3><p><code>parseInt</code>\u76F8\u6BD4<code>Number</code>\uFF0C\u5C31\u6CA1\u90A3\u4E48\u4E25\u683C\u4E86\uFF0C<code>parseInt</code>\u51FD\u6570\u9010\u4E2A\u89E3\u6790\u5B57\u7B26\uFF0C\u9047\u5230\u4E0D\u80FD\u8F6C\u6362\u7684\u5B57\u7B26\u5C31\u505C\u4E0B\u6765</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;32a3&#39;</span><span class="token punctuation">)</span> <span class="token comment">//32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String()</h3><p>\u53EF\u4EE5\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u8F6C\u5316\u6210\u5B57\u7B26\u4E32</p><p>\u7ED9\u51FA\u8F6C\u6362\u89C4\u5219\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/48dd8eb0-6692-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u5B9E\u8DF5\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u503C\uFF1A\u8F6C\u4E3A\u76F8\u5E94\u7684\u5B57\u7B26\u4E32</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// &quot;1&quot;</span>

<span class="token comment">//\u5B57\u7B26\u4E32\uFF1A\u8F6C\u6362\u540E\u8FD8\u662F\u539F\u6765\u7684\u503C</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;a&quot;</span>

<span class="token comment">//\u5E03\u5C14\u503C\uFF1Atrue\u8F6C\u4E3A\u5B57\u7B26\u4E32&quot;true&quot;\uFF0Cfalse\u8F6C\u4E3A\u5B57\u7B26\u4E32&quot;false&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;true&quot;</span>

<span class="token comment">//undefined\uFF1A\u8F6C\u4E3A\u5B57\u7B26\u4E32&quot;undefined&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot;</span>

<span class="token comment">//null\uFF1A\u8F6C\u4E3A\u5B57\u7B26\u4E32&quot;null&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;null&quot;</span>

<span class="token comment">//\u5BF9\u8C61</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;1,2,3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean()</h3><p>\u53EF\u4EE5\u5C06\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u8F6C\u6362\u89C4\u5219\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/53bdad10-6692-11eb-ab90-d9ae814b240d.png" alt=""></p><p>\u5B9E\u8DF5\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4E09\u3001\u9690\u5F0F\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9690\u5F0F\u8F6C\u6362" aria-hidden="true">#</a> \u4E09\u3001\u9690\u5F0F\u8F6C\u6362</h2><p>\u5728\u9690\u5F0F\u8F6C\u6362\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u6700\u5927\u7684\u7591\u60D1\u662F \uFF1A\u4F55\u65F6\u53D1\u751F\u9690\u5F0F\u8F6C\u6362\uFF1F</p><p>\u6211\u4EEC\u8FD9\u91CC\u53EF\u4EE5\u5F52\u7EB3\u4E3A\u4E24\u79CD\u60C5\u51B5\u53D1\u751F\u9690\u5F0F\u8F6C\u6362\u7684\u573A\u666F\uFF1A</p><ul><li>\u6BD4\u8F83\u8FD0\u7B97\uFF08<code>==</code>\u3001<code>!=</code>\u3001<code>&gt;</code>\u3001<code>&lt;</code>\uFF09\u3001<code>if</code>\u3001<code>while</code>\u9700\u8981\u5E03\u5C14\u503C\u5730\u65B9</li><li>\u7B97\u672F\u8FD0\u7B97\uFF08<code>+</code>\u3001<code>-</code>\u3001<code>*</code>\u3001<code>/</code>\u3001<code>%</code>\uFF09</li></ul><p>\u9664\u4E86\u4E0A\u9762\u7684\u573A\u666F\uFF0C\u8FD8\u8981\u6C42\u8FD0\u7B97\u7B26\u4E24\u8FB9\u7684\u64CD\u4F5C\u6570\u4E0D\u662F\u540C\u4E00\u7C7B\u578B</p><h3 id="\u81EA\u52A8\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C" aria-hidden="true">#</a> \u81EA\u52A8\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C</h3><p>\u5728\u9700\u8981\u5E03\u5C14\u503C\u7684\u5730\u65B9\uFF0C\u5C31\u4F1A\u5C06\u975E\u5E03\u5C14\u503C\u7684\u53C2\u6570\u81EA\u52A8\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u7CFB\u7EDF\u5185\u90E8\u4F1A\u8C03\u7528<code>Boolean</code>\u51FD\u6570</p><p>\u53EF\u4EE5\u5F97\u51FA\u4E2A\u5C0F\u7ED3\uFF1A</p><ul><li>undefined</li><li>null</li><li>false</li><li>+0</li><li>-0</li><li>NaN</li><li>&quot;&quot;</li></ul><p>\u9664\u4E86\u4E0A\u9762\u51E0\u79CD\u4F1A\u88AB\u8F6C\u5316\u6210<code>false</code>\uFF0C\u5176\u4ED6\u90FD\u6362\u88AB\u8F6C\u5316\u6210<code>true</code></p><h3 id="\u81EA\u52A8\u8F6C\u6362\u6210\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8F6C\u6362\u6210\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u81EA\u52A8\u8F6C\u6362\u6210\u5B57\u7B26\u4E32</h3><p>\u9047\u5230\u9884\u671F\u4E3A\u5B57\u7B26\u4E32\u7684\u5730\u65B9\uFF0C\u5C31\u4F1A\u5C06\u975E\u5B57\u7B26\u4E32\u7684\u503C\u81EA\u52A8\u8F6C\u4E3A\u5B57\u7B26\u4E32</p><p>\u5177\u4F53\u89C4\u5219\u662F\uFF1A\u5148\u5C06\u590D\u5408\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u518D\u5C06\u539F\u59CB\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u5B57\u7B26\u4E32</p><p>\u5E38\u53D1\u751F\u5728<code>+</code>\u8FD0\u7B97\u4E2D\uFF0C\u4E00\u65E6\u5B58\u5728\u5B57\u7B26\u4E32\uFF0C\u5219\u4F1A\u8FDB\u884C\u5B57\u7B26\u4E32\u62FC\u63A5\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// &#39;51&#39;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// &quot;5true&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token boolean">false</span> <span class="token comment">// &quot;5false&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;5[object Object]&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &quot;5&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;5function (){}&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">undefined</span> <span class="token comment">// &quot;5undefined&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">null</span> <span class="token comment">// &quot;5null&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u81EA\u52A8\u8F6C\u6362\u6210\u6570\u503C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8F6C\u6362\u6210\u6570\u503C" aria-hidden="true">#</a> \u81EA\u52A8\u8F6C\u6362\u6210\u6570\u503C</h3><p>\u9664\u4E86<code>+</code>\u6709\u53EF\u80FD\u628A\u8FD0\u7B97\u5B50\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5176\u4ED6\u8FD0\u7B97\u7B26\u90FD\u4F1A\u628A\u8FD0\u7B97\u5B50\u81EA\u52A8\u8F6C\u6210\u6570\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;5&#39;</span> <span class="token operator">-</span> <span class="token string">&#39;2&#39;</span> <span class="token comment">// 3</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">*</span> <span class="token string">&#39;2&#39;</span> <span class="token comment">// 10</span>
<span class="token boolean">true</span> <span class="token operator">-</span> <span class="token number">1</span>  <span class="token comment">// 0</span>
<span class="token boolean">false</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// -1</span>
<span class="token string">&#39;1&#39;</span> <span class="token operator">-</span> <span class="token number">1</span>   <span class="token comment">// 0</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>    <span class="token comment">// 0</span>
<span class="token boolean">false</span> <span class="token operator">/</span> <span class="token string">&#39;5&#39;</span> <span class="token comment">// 0</span>
<span class="token string">&#39;abc&#39;</span> <span class="token operator">-</span> <span class="token number">1</span>   <span class="token comment">// NaN</span>
<span class="token keyword">null</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 1</span>
<span class="token keyword">undefined</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>null</code>\u8F6C\u4E3A\u6570\u503C\u65F6\uFF0C\u503C\u4E3A<code>0</code> \u3002<code>undefined</code>\u8F6C\u4E3A\u6570\u503C\u65F6\uFF0C\u503C\u4E3A<code>NaN</code></p><h2 id="\u56DB\u3001\u5E38\u89C1\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u5E38\u89C1\u8F6C\u6362" aria-hidden="true">#</a> \u56DB\u3001\u5E38\u89C1\u8F6C\u6362</h2><blockquote><p>\u9996\u5148\u6211\u4EEC\u8981\u77E5\u9053\uFF0C\u5728 <code>JS</code> \u4E2D\u7C7B\u578B\u8F6C\u6362\u53EA\u6709\u4E09\u79CD\u60C5\u51B5\uFF0C\u5206\u522B\u662F\uFF1A</p></blockquote><ul><li>\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C</li><li>\u8F6C\u6362\u4E3A\u6570\u5B57</li><li>\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li></ul><p><img src="https://poetries1.gitee.io/img-repo/2020/07/1.png" alt="img"></p><h3 id="\u8F6Cboolean" tabindex="-1"><a class="header-anchor" href="#\u8F6Cboolean" aria-hidden="true">#</a> \u8F6CBoolean</h3><blockquote><p>\u5728\u6761\u4EF6\u5224\u65AD\u65F6\uFF0C\u9664\u4E86 <code>undefined</code>\uFF0C<code>null</code>\uFF0C <code>false</code>\uFF0C <code>NaN</code>\uFF0C <code>&#39;&#39;</code>\uFF0C <code>0</code>\uFF0C <code>-0</code>\uFF0C\u5176\u4ED6\u6240\u6709\u503C\u90FD\u8F6C\u4E3A <code>true</code>\uFF0C\u5305\u62EC\u6240\u6709\u5BF9\u8C61</p></blockquote><h3 id="\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B" aria-hidden="true">#</a> \u5BF9\u8C61\u8F6C\u539F\u59CB\u7C7B\u578B</h3><blockquote><p>\u5BF9\u8C61\u5728\u8F6C\u6362\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u4F1A\u8C03\u7528\u5185\u7F6E\u7684 <code>[[ToPrimitive]]</code> \u51FD\u6570\uFF0C\u5BF9\u4E8E\u8BE5\u51FD\u6570\u6765\u8BF4\uFF0C\u7B97\u6CD5\u903B\u8F91\u4E00\u822C\u6765\u8BF4\u5982\u4E0B</p></blockquote><ul><li>\u5982\u679C\u5DF2\u7ECF\u662F\u539F\u59CB\u7C7B\u578B\u4E86\uFF0C\u90A3\u5C31\u4E0D\u9700\u8981\u8F6C\u6362\u4E86</li><li>\u8C03\u7528 <code>x.valueOf()</code>\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8F6C\u6362\u7684\u503C</li><li>\u8C03\u7528 <code>x.toString()</code>\uFF0C\u5982\u679C\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8F6C\u6362\u7684\u503C</li><li>\u5982\u679C\u90FD\u6CA1\u6709\u8FD4\u56DE\u539F\u59CB\u7C7B\u578B\uFF0C\u5C31\u4F1A\u62A5\u9519</li></ul><blockquote><p>\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u91CD\u5199 <code>Symbol.toPrimitive</code>\uFF0C\u8BE5\u65B9\u6CD5\u5728\u8F6C\u539F\u59CB\u7C7B\u578B\u65F6\u8C03\u7528\u4F18\u5148\u7EA7\u6700\u9AD8\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token number">1</span> <span class="token operator">+</span> a <span class="token comment">// =&gt; 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u56DB\u5219\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u56DB\u5219\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u56DB\u5219\u8FD0\u7B97\u7B26</h3><blockquote><p>\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9\uFF1A</p></blockquote><ul><li>\u8FD0\u7B97\u4E2D\u5176\u4E2D\u4E00\u65B9\u4E3A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u5C31\u4F1A\u628A\u53E6\u4E00\u65B9\u4E5F\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li><li>\u5982\u679C\u4E00\u65B9\u4E0D\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u5B57\uFF0C\u90A3\u4E48\u4F1A\u5C06\u5B83\u8F6C\u6362\u4E3A\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// &#39;11&#39;</span>
<span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// 2</span>
<span class="token number">4</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// &quot;41,2,3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u5BF9\u4E8E\u7B2C\u4E00\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E00\uFF0C\u6240\u4EE5\u5C06\u6570\u5B57 <code>1</code> \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5F97\u5230\u7ED3\u679C <code>&#39;11&#39;</code></li><li>\u5BF9\u4E8E\u7B2C\u4E8C\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06 <code>true</code> \u8F6C\u4E3A\u6570\u5B57 <code>1</code></li><li>\u5BF9\u4E8E\u7B2C\u4E09\u884C\u4EE3\u7801\u6765\u8BF4\uFF0C\u89E6\u53D1\u7279\u70B9\u4E8C\uFF0C\u6240\u4EE5\u5C06\u6570\u7EC4\u901A\u8FC7 <code>toString</code>\u8F6C\u4E3A\u5B57\u7B26\u4E32 <code>1,2,3</code>\uFF0C\u5F97\u5230\u7ED3\u679C <code>41,2,3</code></li></ul><blockquote><p>\u53E6\u5916\u5BF9\u4E8E\u52A0\u6CD5\u8FD8\u9700\u8981\u6CE8\u610F\u8FD9\u4E2A\u8868\u8FBE\u5F0F <code>&#39;a&#39; + + &#39;b&#39;</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;a&#39; + + &#39;b&#39; // -&gt; &quot;aNaN&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u56E0\u4E3A <code>+ &#39;b&#39;</code> \u7B49\u4E8E <code>NaN</code>\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A <code>&quot;aNaN&quot;</code>\uFF0C\u4F60\u53EF\u80FD\u4E5F\u4F1A\u5728\u4E00\u4E9B\u4EE3\u7801\u4E2D\u770B\u5230\u8FC7 <code>+ &#39;1&#39;</code>\u7684\u5F62\u5F0F\u6765\u5FEB\u901F\u83B7\u53D6 <code>number</code> \u7C7B\u578B\u3002</li><li>\u90A3\u4E48\u5BF9\u4E8E\u9664\u4E86\u52A0\u6CD5\u7684\u8FD0\u7B97\u7B26\u6765\u8BF4\uFF0C\u53EA\u8981\u5176\u4E2D\u4E00\u65B9\u662F\u6570\u5B57\uFF0C\u90A3\u4E48\u53E6\u4E00\u65B9\u5C31\u4F1A\u88AB\u8F6C\u4E3A\u6570\u5B57</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">*</span> <span class="token string">&#39;3&#39;</span> <span class="token comment">// 12</span>
<span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 0</span>
<span class="token number">4</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26</h3><ul><li>\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u5C31\u901A\u8FC7 <code>toPrimitive</code> \u8F6C\u6362\u5BF9\u8C61</li><li>\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u5C31\u901A\u8FC7 <code>unicode</code> \u5B57\u7B26\u7D22\u5F15\u6765\u6BD4\u8F83</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
a <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u5728\u4EE5\u4E0A\u4EE3\u7801\u4E2D\uFF0C\u56E0\u4E3A <code>a</code> \u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4F1A\u901A\u8FC7 <code>valueOf</code> \u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\u518D\u6BD4\u8F83\u503C\u3002</p></blockquote>`,77);function p(t,o){return e}var l=n(a,[["render",p],["__file","type_conversion.html.vue"]]);export{l as default};