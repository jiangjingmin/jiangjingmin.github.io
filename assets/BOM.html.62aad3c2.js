import{_ as e,r as o,o as t,c as p,a as n,b as c,F as l,e as s,d as r}from"./app.6e1280c8.js";const i={},d=s(`<h1 id="bom" tabindex="-1"><a class="header-anchor" href="#bom" aria-hidden="true">#</a> BOM</h1><p><img src="https://static.vue-js.com/3e191c40-8089-11eb-85f6-6fac77c0c9b3.png" alt="00"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>BOM</code> (Browser Object Model)\uFF0C\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B\uFF0C\u63D0\u4F9B\u4E86\u72EC\u7ACB\u4E8E\u5185\u5BB9\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u4EA4\u4E92\u7684\u5BF9\u8C61</p><p>\u5176\u4F5C\u7528\u5C31\u662F\u8DDF\u6D4F\u89C8\u5668\u505A\u4E00\u4E9B\u4EA4\u4E92\u6548\u679C,\u6BD4\u5982\u5982\u4F55\u8FDB\u884C\u9875\u9762\u7684\u540E\u9000\uFF0C\u524D\u8FDB\uFF0C\u5237\u65B0\uFF0C\u6D4F\u89C8\u5668\u7684\u7A97\u53E3\u53D1\u751F\u53D8\u5316\uFF0C\u6EDA\u52A8\u6761\u7684\u6EDA\u52A8\uFF0C\u4EE5\u53CA\u83B7\u53D6\u5BA2\u6237\u7684\u4E00\u4E9B\u4FE1\u606F\u5982\uFF1A\u6D4F\u89C8\u5668\u54C1\u724C\u7248\u672C\uFF0C\u5C4F\u5E55\u5206\u8FA8\u7387</p><p>\u6D4F\u89C8\u5668\u7684\u5168\u90E8\u5185\u5BB9\u53EF\u4EE5\u770B\u6210<code>DOM</code>\uFF0C\u6574\u4E2A\u6D4F\u89C8\u5668\u53EF\u4EE5\u770B\u6210<code>BOM</code>\u3002\u533A\u522B\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/482f33e0-8089-11eb-85f6-6fac77c0c9b3.png" alt="01"></p><h2 id="\u4E8C\u3001window" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001window" aria-hidden="true">#</a> \u4E8C\u3001window</h2><p><code>Bom</code>\u7684\u6838\u5FC3\u5BF9\u8C61\u662F<code>window</code>\uFF0C\u5B83\u8868\u793A\u6D4F\u89C8\u5668\u7684\u4E00\u4E2A\u5B9E\u4F8B</p><p>\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C<code>window</code>\u5BF9\u8C61\u6709\u53CC\u91CD\u89D2\u8272\uFF0C\u5373\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u4E00\u4E2A\u63A5\u53E3\uFF0C\u53C8\u662F\u5168\u5C40\u5BF9\u8C61</p><p>\u56E0\u6B64\u6240\u6709\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\u3001\u51FD\u6570\u90FD\u4F1A\u53D8\u6210<code>window</code>\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;js\u6BCF\u65E5\u4E00\u9898&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">lookName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//js\u6BCF\u65E5\u4E00\u9898</span>
<span class="token function">lookName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">//js\u6BCF\u65E5\u4E00\u9898</span>
window<span class="token punctuation">.</span><span class="token function">lookName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">//js\u6BCF\u65E5\u4E00\u9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5173\u4E8E\u7A97\u53E3\u63A7\u5236\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><ul><li><code>moveBy(x,y)</code>\uFF1A\u4ECE\u5F53\u524D\u4F4D\u7F6E\u6C34\u5E73\u79FB\u52A8\u7A97\u4F53x\u4E2A\u50CF\u7D20\uFF0C\u5782\u76F4\u79FB\u52A8\u7A97\u4F53y\u4E2A\u50CF\u7D20\uFF0Cx\u4E3A\u8D1F\u6570\uFF0C\u5C06\u5411\u5DE6\u79FB\u52A8\u7A97\u4F53\uFF0Cy\u4E3A\u8D1F\u6570\uFF0C\u5C06\u5411\u4E0A\u79FB\u52A8\u7A97\u4F53</li><li><code>moveTo(x,y)</code>\uFF1A\u79FB\u52A8\u7A97\u4F53\u5DE6\u4E0A\u89D2\u5230\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5DE6\u4E0A\u89D2\u7684(x,y)\u70B9</li><li><code>resizeBy(w,h)</code>\uFF1A\u76F8\u5BF9\u7A97\u4F53\u5F53\u524D\u7684\u5927\u5C0F\uFF0C\u5BBD\u5EA6\u8C03\u6574w\u4E2A\u50CF\u7D20\uFF0C\u9AD8\u5EA6\u8C03\u6574h\u4E2A\u50CF\u7D20\u3002\u5982\u679C\u53C2\u6570\u4E3A\u8D1F\u503C\uFF0C\u5C06\u7F29\u5C0F\u7A97\u4F53\uFF0C\u53CD\u4E4B\u6269\u5927\u7A97\u4F53</li><li><code>resizeTo(w,h)</code>\uFF1A\u628A\u7A97\u4F53\u5BBD\u5EA6\u8C03\u6574\u4E3Aw\u4E2A\u50CF\u7D20\uFF0C\u9AD8\u5EA6\u8C03\u6574\u4E3Ah\u4E2A\u50CF\u7D20</li><li><code>scrollTo(x,y)</code>\uFF1A\u5982\u679C\u6709\u6EDA\u52A8\u6761\uFF0C\u5C06\u6A2A\u5411\u6EDA\u52A8\u6761\u79FB\u52A8\u5230\u76F8\u5BF9\u4E8E\u7A97\u4F53\u5BBD\u5EA6\u4E3Ax\u4E2A\u50CF\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5C06\u7EB5\u5411\u6EDA\u52A8\u6761\u79FB\u52A8\u5230\u76F8\u5BF9\u4E8E\u7A97\u4F53\u9AD8\u5EA6\u4E3Ay\u4E2A\u50CF\u7D20\u7684\u4F4D\u7F6E</li><li><code>scrollBy(x,y)</code>\uFF1A \u5982\u679C\u6709\u6EDA\u52A8\u6761\uFF0C\u5C06\u6A2A\u5411\u6EDA\u52A8\u6761\u5411\u5DE6\u79FB\u52A8x\u4E2A\u50CF\u7D20\uFF0C\u5C06\u7EB5\u5411\u6EDA\u52A8\u6761\u5411\u4E0B\u79FB\u52A8y\u4E2A\u50CF\u7D20</li></ul><p><code>window.open()</code> \u65E2\u53EF\u4EE5\u5BFC\u822A\u5230\u4E00\u4E2A\u7279\u5B9A\u7684<code>url</code>\uFF0C\u4E5F\u53EF\u4EE5\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u6D4F\u89C8\u5668\u7A97\u53E3</p><p>\u5982\u679C <code>window.open()</code> \u4F20\u9012\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4E14\u8BE5\u53C2\u6570\u662F\u5DF2\u6709\u7A97\u53E3\u6216\u8005\u6846\u67B6\u7684\u540D\u79F0\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5728\u76EE\u6807\u7A97\u53E3\u52A0\u8F7D\u7B2C\u4E00\u4E2A\u53C2\u6570\u6307\u5B9A\u7684URL</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;htttp://www.vue3js.cn&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;topFrame&#39;</span><span class="token punctuation">)</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span> a href<span class="token operator">=</span><span class="token string">&quot; &quot;</span> target<span class="token operator">=</span><span class="token string">&quot;topFrame&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span> a<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>window.open()</code> \u4F1A\u8FD4\u56DE\u65B0\u7A97\u53E3\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u65B0\u7A97\u53E3\u7684 <code>window</code> \u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> myWin <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.vue3js.cn&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;myWin&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>window.close()</code> \u4EC5\u7528\u4E8E\u901A\u8FC7 <code>window.open()</code> \u6253\u5F00\u7684\u7A97\u53E3</p><p>\u65B0\u521B\u5EFA\u7684 <code>window</code> \u5BF9\u8C61\u6709\u4E00\u4E2A <code>opener</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u6307\u5411\u6253\u5F00\u4ED6\u7684\u539F\u59CB\u7A97\u53E3\u5BF9\u8C61</p><h2 id="\u4E09\u3001location" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001location" aria-hidden="true">#</a> \u4E09\u3001location</h2><p><code>url</code>\u5730\u5740\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>foouser<span class="token operator">:</span>barpassword@www<span class="token punctuation">.</span>wrox<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">80</span><span class="token operator">/</span>WileyCDA<span class="token operator">/</span><span class="token operator">?</span>q<span class="token operator">=</span>javascript#contents
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>location</code>\u5C5E\u6027\u63CF\u8FF0\u5982\u4E0B\uFF1A</p>`,25),u=n("thead",null,[n("tr",null,[n("th",null,"\u5C5E\u6027\u540D"),n("th",null,"\u4F8B\u5B50"),n("th",null,"\u8BF4\u660E")])],-1),h=n("tr",null,[n("td",null,"hash"),n("td",null,'"#contents"'),n("td",null,"utl\u4E2D#\u540E\u9762\u7684\u5B57\u7B26\uFF0C\u6CA1\u6709\u5219\u8FD4\u56DE\u7A7A\u4E32")],-1),k=n("tr",null,[n("td",null,"host"),n("td",null,"www.wrox.com:80"),n("td",null,"\u670D\u52A1\u5668\u540D\u79F0\u548C\u7AEF\u53E3\u53F7")],-1),m=n("tr",null,[n("td",null,"hostname"),n("td",null,"www.wrox.com"),n("td",null,"\u57DF\u540D\uFF0C\u4E0D\u5E26\u7AEF\u53E3\u53F7")],-1),b=n("td",null,"href",-1),w={href:"http://www.wrox.com:80/WileyCDA/?q=javascript#contents",target:"_blank",rel:"noopener noreferrer"},g=r("http://www.wrox.com:80/WileyCDA/?q=javascript#contents"),v=n("td",null,"\u5B8C\u6574url",-1),_=n("tr",null,[n("td",null,"pathname"),n("td",null,'"/WileyCDA/"'),n("td",null,"\u670D\u52A1\u5668\u4E0B\u9762\u7684\u6587\u4EF6\u8DEF\u5F84")],-1),f=n("tr",null,[n("td",null,"port"),n("td",null,"80"),n("td",null,"url\u7684\u7AEF\u53E3\u53F7\uFF0C\u6CA1\u6709\u5219\u4E3A\u7A7A")],-1),y=n("tr",null,[n("td",null,"protocol"),n("td",null,"http:"),n("td",null,"\u4F7F\u7528\u7684\u534F\u8BAE")],-1),j=n("tr",null,[n("td",null,"search"),n("td",null,"?q=javascript"),n("td",null,"url\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u4E3A\uFF1F\u540E\u9762\u7684\u5185\u5BB9")],-1),x=s(`<p>\u9664\u4E86 <code>hash</code>\u4E4B\u5916\uFF0C\u53EA\u8981\u4FEE\u6539<code>location</code>\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u9875\u9762\u91CD\u65B0\u52A0\u8F7D\u65B0<code>URL</code></p><p><code>location.reload()</code>\uFF0C\u6B64\u65B9\u6CD5\u53EF\u4EE5\u91CD\u65B0\u5237\u65B0\u5F53\u524D\u9875\u9762\u3002\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u6839\u636E\u6700\u6709\u6548\u7684\u65B9\u5F0F\u5237\u65B0\u9875\u9762\uFF0C\u5982\u679C\u9875\u9762\u81EA\u4E0A\u4E00\u6B21\u8BF7\u6C42\u4EE5\u6765\u6CA1\u6709\u6539\u53D8\u8FC7\uFF0C\u9875\u9762\u5C31\u4F1A\u4ECE\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u91CD\u65B0\u52A0\u8F7D</p><p>\u5982\u679C\u8981\u5F3A\u5236\u4ECE\u670D\u52A1\u5668\u4E2D\u91CD\u65B0\u52A0\u8F7D\uFF0C\u4F20\u9012\u4E00\u4E2A\u53C2\u6570<code>true</code>\u5373\u53EF</p><h2 id="\u56DB\u3001navigator" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001navigator" aria-hidden="true">#</a> \u56DB\u3001navigator</h2><p><code>navigator</code> \u5BF9\u8C61\u4E3B\u8981\u7528\u6765\u83B7\u53D6\u6D4F\u89C8\u5668\u7684\u5C5E\u6027\uFF0C\u533A\u5206\u6D4F\u89C8\u5668\u7C7B\u578B\u3002\u5C5E\u6027\u8F83\u591A\uFF0C\u4E14\u517C\u5BB9\u6027\u6BD4\u8F83\u590D\u6742</p><p>\u4E0B\u8868\u5217\u51FA\u4E86<code>navigator</code>\u5BF9\u8C61\u63A5\u53E3\u5B9A\u4E49\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1A</p><p><img src="https://static.vue-js.com/6797ab40-8089-11eb-ab90-d9ae814b240d.png" alt="02"></p><p><img src="https://static.vue-js.com/74096620-8089-11eb-ab90-d9ae814b240d.png" alt="03"></p><h2 id="\u4E94\u3001screen" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001screen" aria-hidden="true">#</a> \u4E94\u3001screen</h2><p>\u4FDD\u5B58\u7684\u7EAF\u7CB9\u662F\u5BA2\u6237\u7AEF\u80FD\u529B\u4FE1\u606F\uFF0C\u4E5F\u5C31\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u5916\u9762\u7684\u5BA2\u6237\u7AEF\u663E\u793A\u5668\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u50CF\u7D20\u5BBD\u5EA6\u548C\u50CF\u7D20\u9AD8\u5EA6</p><p><img src="https://static.vue-js.com/7d6b21e0-8089-11eb-85f6-6fac77c0c9b3.png" alt="04"></p><h2 id="\u516D\u3001history" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001history" aria-hidden="true">#</a> \u516D\u3001history</h2><p><code>history</code>\u5BF9\u8C61\u4E3B\u8981\u7528\u6765\u64CD\u4F5C\u6D4F\u89C8\u5668<code>URL</code>\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u5411\u524D\uFF0C\u5411\u540E\uFF0C\u6216\u8005\u5411\u6307\u5B9A<code>URL</code>\u8DF3\u8F6C</p><p>\u5E38\u7528\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A</p><ul><li><code>history.go()</code></li></ul><p>\u63A5\u6536\u4E00\u4E2A\u6574\u6570\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32\u53C2\u6570\uFF1A\u5411\u6700\u8FD1\u7684\u4E00\u4E2A\u8BB0\u5F55\u4E2D\u5305\u542B\u6307\u5B9A\u5B57\u7B26\u4E32\u7684\u9875\u9762\u8DF3\u8F6C\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token string">&#39;maixaofei.com&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u53C2\u6570\u4E3A\u6574\u6570\u6570\u5B57\u7684\u65F6\u5019\uFF0C\u6B63\u6570\u8868\u793A\u5411\u524D\u8DF3\u8F6C\u6307\u5B9A\u7684\u9875\u9762\uFF0C\u8D1F\u6570\u4E3A\u5411\u540E\u8DF3\u8F6C\u6307\u5B9A\u7684\u9875\u9762</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">//\u5411\u524D\u8DF3\u8F6C\u4E09\u4E2A\u8BB0\u5F55</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//\u5411\u540E\u8DF3\u8F6C\u4E00\u4E2A\u8BB0\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>history.forward()</code>\uFF1A\u5411\u524D\u8DF3\u8F6C\u4E00\u4E2A\u9875\u9762</li><li><code>history.back()</code>\uFF1A\u5411\u540E\u8DF3\u8F6C\u4E00\u4E2A\u9875\u9762</li><li><code>history.length</code>\uFF1A\u83B7\u53D6\u5386\u53F2\u8BB0\u5F55\u6570</li></ul>`,20);function B(q,M){const a=o("ExternalLinkIcon");return t(),p(l,null,[d,n("table",null,[u,n("tbody",null,[h,k,m,n("tr",null,[b,n("td",null,[n("a",w,[g,c(a)])]),v]),_,f,y,j])]),x],64)}var O=e(i,[["render",B],["__file","BOM.html.vue"]]);export{O as default};
