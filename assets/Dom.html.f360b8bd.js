import{_ as n,c as s}from"./app.b778d435.js";const a={},e=s(`<h1 id="\u9762\u8BD5\u5B98-dom\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-dom\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1ADOM\u5E38\u89C1\u7684\u64CD\u4F5C\u6709\u54EA\u4E9B\uFF1F</h1><p><img src="https://static.vue-js.com/a89c99a0-7fdc-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E00\u3001dom" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001dom" aria-hidden="true">#</a> \u4E00\u3001DOM</h2><p>\u6587\u6863\u5BF9\u8C61\u6A21\u578B (DOM) \u662F <code>HTML</code> \u548C <code>XML</code> \u6587\u6863\u7684\u7F16\u7A0B\u63A5\u53E3</p><p>\u5B83\u63D0\u4F9B\u4E86\u5BF9\u6587\u6863\u7684\u7ED3\u6784\u5316\u7684\u8868\u8FF0\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u79CD\u65B9\u5F0F\u53EF\u4EE5\u4F7F\u4ECE\u7A0B\u5E8F\u4E2D\u5BF9\u8BE5\u7ED3\u6784\u8FDB\u884C\u8BBF\u95EE\uFF0C\u4ECE\u800C\u6539\u53D8\u6587\u6863\u7684\u7ED3\u6784\uFF0C\u6837\u5F0F\u548C\u5185\u5BB9</p><p>\u4EFB\u4F55 <code>HTML </code>\u6216<code>XML</code>\u6587\u6863\u90FD\u53EF\u4EE5\u7528 <code>DOM </code>\u8868\u793A\u4E3A\u4E00\u4E2A\u7531\u8282\u70B9\u6784\u6210\u7684\u5C42\u7EA7\u7ED3\u6784</p><p>\u8282\u70B9\u5206\u5F88\u591A\u7C7B\u578B\uFF0C\u6BCF\u79CD\u7C7B\u578B\u5BF9\u5E94\u7740\u6587\u6863\u4E2D\u4E0D\u540C\u7684\u4FE1\u606F\u548C\uFF08\u6216\uFF09\u6807\u8BB0\uFF0C\u4E5F\u90FD\u6709\u81EA\u5DF1\u4E0D\u540C\u7684\u7279\u6027\u3001\u6570\u636E\u548C\u65B9\u6CD5\uFF0C\u800C\u4E14\u4E0E\u5176\u4ED6\u7C7B\u578B\u6709\u67D0\u79CD\u5173\u7CFB\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>DOM</code>\u50CF\u539F\u5B50\u5305\u542B\u7740\u4E9A\u539F\u5B50\u5FAE\u7C92\u90A3\u6837\uFF0C\u4E5F\u6709\u5F88\u591A\u7C7B\u578B\u7684<code>DOM</code>\u8282\u70B9\u5305\u542B\u7740\u5176\u4ED6\u7C7B\u578B\u7684\u8282\u70B9\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u770B\u770B\u5176\u4E2D\u7684\u4E09\u79CD\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u8FF0\u7ED3\u6784\u4E2D\uFF0C<code>div</code>\u3001<code>p</code>\u5C31\u662F\u5143\u7D20\u8282\u70B9\uFF0C<code>content</code>\u5C31\u662F\u6587\u672C\u8282\u70B9\uFF0C<code>title</code>\u5C31\u662F\u5C5E\u6027\u8282\u70B9</p><h2 id="\u4E8C\u3001\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u64CD\u4F5C" aria-hidden="true">#</a> \u4E8C\u3001\u64CD\u4F5C</h2><p>\u65E5\u5E38\u524D\u7AEF\u5F00\u53D1\uFF0C\u6211\u4EEC\u90FD\u79BB\u4E0D\u5F00<code>DOM</code>\u64CD\u4F5C</p><p>\u5728\u4EE5\u524D\uFF0C\u6211\u4EEC\u4F7F\u7528<code>Jquery</code>\uFF0C<code>zepto</code>\u7B49\u5E93\u6765\u64CD\u4F5C<code>DOM</code>\uFF0C\u4E4B\u540E\u5728<code>vue</code>\uFF0C<code>Angular</code>\uFF0C<code>React</code>\u7B49\u6846\u67B6\u51FA\u73B0\u540E\uFF0C\u6211\u4EEC\u901A\u8FC7\u64CD\u4F5C\u6570\u636E\u6765\u63A7\u5236<code>DOM</code>\uFF08\u7EDD\u5927\u591A\u6570\u65F6\u5019\uFF09\uFF0C\u8D8A\u6765\u8D8A\u5C11\u7684\u53BB\u76F4\u63A5\u64CD\u4F5C<code>DOM</code></p><p>\u4F46\u8FD9\u5E76\u4E0D\u4EE3\u8868\u539F\u751F\u64CD\u4F5C\u4E0D\u91CD\u8981\u3002\u76F8\u53CD\uFF0C<code>DOM</code>\u64CD\u4F5C\u624D\u80FD\u6709\u52A9\u4E8E\u6211\u4EEC\u7406\u89E3\u6846\u67B6\u6DF1\u5C42\u7684\u5185\u5BB9</p><p>\u4E0B\u9762\u5C31\u6765\u5206\u6790<code>DOM</code>\u5E38\u89C1\u7684\u64CD\u4F5C\uFF0C\u4E3B\u8981\u5206\u4E3A\uFF1A</p><ul><li>\u521B\u5EFA\u8282\u70B9</li><li>\u67E5\u8BE2\u8282\u70B9</li><li>\u66F4\u65B0\u8282\u70B9</li><li>\u6DFB\u52A0\u8282\u70B9</li><li>\u5220\u9664\u8282\u70B9</li></ul><h3 id="\u521B\u5EFA\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8282\u70B9" aria-hidden="true">#</a> \u521B\u5EFA\u8282\u70B9</h3><h4 id="createelement" tabindex="-1"><a class="header-anchor" href="#createelement" aria-hidden="true">#</a> createElement</h4><p>\u521B\u5EFA\u65B0\u5143\u7D20\uFF0C\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u5373\u8981\u521B\u5EFA\u5143\u7D20\u7684\u6807\u7B7E\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> divEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="createtextnode" tabindex="-1"><a class="header-anchor" href="#createtextnode" aria-hidden="true">#</a> createTextNode</h4><p>\u521B\u5EFA\u4E00\u4E2A\u6587\u672C\u8282\u70B9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> textEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="createdocumentfragment" tabindex="-1"><a class="header-anchor" href="#createdocumentfragment" aria-hidden="true">#</a> createDocumentFragment</h4><p>\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u788E\u7247\uFF0C\u5B83\u8868\u793A\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6587\u6863\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u5B58\u50A8\u4E34\u65F6\u8282\u70B9\uFF0C\u7136\u540E\u628A\u6587\u6863\u788E\u7247\u7684\u5185\u5BB9\u4E00\u6B21\u6027\u6DFB\u52A0\u5230<code>DOM</code>\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u8BF7\u6C42\u628A\u4E00\u4E2A<code>DocumentFragment</code> \u8282\u70B9\u63D2\u5165\u6587\u6863\u6811\u65F6\uFF0C\u63D2\u5165\u7684\u4E0D\u662F <code>DocumentFragment </code>\u81EA\u8EAB\uFF0C\u800C\u662F\u5B83\u7684\u6240\u6709\u5B50\u5B59\u8282\u70B9</p><h4 id="createattribute" tabindex="-1"><a class="header-anchor" href="#createattribute" aria-hidden="true">#</a> createAttribute</h4><p>\u521B\u5EFA\u5C5E\u6027\u8282\u70B9\uFF0C\u53EF\u4EE5\u662F\u81EA\u5B9A\u4E49\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> dataAttribute <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
consle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dataAttribute<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u83B7\u53D6\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8282\u70B9" aria-hidden="true">#</a> \u83B7\u53D6\u8282\u70B9</h3><h4 id="queryselector" tabindex="-1"><a class="header-anchor" href="#queryselector" aria-hidden="true">#</a> querySelector</h4><p>\u4F20\u5165\u4EFB\u4F55\u6709\u6548\u7684<code> css</code> \u9009\u62E9\u5668\uFF0C\u5373\u53EF\u9009\u4E2D\u5355\u4E2A <code>DOM </code>\u5143\u7D20\uFF08\u9996\u4E2A\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.element&#39;</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#element&#39;</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;[name=&quot;username&quot;]&#39;</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div + p &gt; span&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u9875\u9762\u4E0A\u6CA1\u6709\u6307\u5B9A\u7684\u5143\u7D20\u65F6\uFF0C\u8FD4\u56DE <code>null</code></p><h4 id="queryselectorall" tabindex="-1"><a class="header-anchor" href="#queryselectorall" aria-hidden="true">#</a> querySelectorAll</h4><p>\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u8282\u70B9\u5B50\u6811\u5185\u6240\u6709\u4E0E\u4E4B\u76F8\u5339\u914D\u7684<code>Element</code>\u8282\u70B9\u5217\u8868\uFF0C\u5982\u679C\u6CA1\u6709\u76F8\u5339\u914D\u7684\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u8282\u70B9\u5217\u8868</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> notLive <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A <code>NodeList </code>\u7684\u9759\u6001\u5B9E\u4F8B\uFF0C\u5B83\u662F\u4E00\u4E2A\u9759\u6001\u7684\u201C\u5FEB\u7167\u201D\uFF0C\u800C\u975E\u201C\u5B9E\u65F6\u201D\u7684\u67E5\u8BE2</p><p>\u5173\u4E8E\u83B7\u53D6<code>DOM</code>\u5143\u7D20\u7684\u65B9\u6CD5\u8FD8\u6709\u5982\u4E0B\uFF0C\u5C31\u4E0D\u4E00\u4E00\u8FF0\u8BF4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;id\u5C5E\u6027\u503C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u8FD4\u56DE\u62E5\u6709\u6307\u5B9Aid\u7684\u5BF9\u8C61\u7684\u5F15\u7528
document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;class\u5C5E\u6027\u503C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u8FD4\u56DE\u62E5\u6709\u6307\u5B9A<span class="token keyword">class</span>\u7684\u5BF9\u8C61\u96C6\u5408
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;\u6807\u7B7E\u540D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\u8FD4\u56DE\u62E5\u6709\u6307\u5B9A\u6807\u7B7E\u540D\u7684\u5BF9\u8C61\u96C6\u5408
document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">&#39;name\u5C5E\u6027\u503C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \u8FD4\u56DE\u62E5\u6709\u6307\u5B9A\u540D\u79F0\u7684\u5BF9\u8C61\u7ED3\u5408
document<span class="token operator">/</span>element<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;CSS\u9009\u62E9\u5668&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \u4EC5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u5143\u7D20
document<span class="token operator">/</span>element<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;CSS\u9009\u62E9\u5668&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   \u8FD4\u56DE\u6240\u6709\u5339\u914D\u7684\u5143\u7D20
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span>  \u83B7\u53D6\u9875\u9762\u4E2D\u7684<span class="token constant">HTML</span>\u6807\u7B7E
document<span class="token punctuation">.</span>body<span class="token punctuation">;</span> \u83B7\u53D6\u9875\u9762\u4E2D\u7684<span class="token constant">BODY</span>\u6807\u7B7E
document<span class="token punctuation">.</span>all<span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  \u83B7\u53D6\u9875\u9762\u4E2D\u7684\u6240\u6709\u5143\u7D20\u8282\u70B9\u7684\u5BF9\u8C61\u96C6\u5408\u578B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u6BCF\u4E2A<code>DOM</code>\u5143\u7D20\u8FD8\u6709<code>parentNode</code>\u3001<code>childNodes</code>\u3001<code>firstChild</code>\u3001<code>lastChild</code>\u3001<code>nextSibling</code>\u3001<code>previousSibling</code>\u5C5E\u6027\uFF0C\u5173\u7CFB\u56FE\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://static.vue-js.com/c100f450-7fdc-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="\u66F4\u65B0\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u8282\u70B9" aria-hidden="true">#</a> \u66F4\u65B0\u8282\u70B9</h3><h4 id="innerhtml" tabindex="-1"><a class="header-anchor" href="#innerhtml" aria-hidden="true">#</a> innerHTML</h4><p>\u4E0D\u4F46\u53EF\u4EE5\u4FEE\u6539\u4E00\u4E2A<code>DOM</code>\u8282\u70B9\u7684\u6587\u672C\u5185\u5BB9\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7<code>HTML</code>\u7247\u6BB5\u4FEE\u6539<code>DOM</code>\u8282\u70B9\u5185\u90E8\u7684\u5B50\u6811</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6&lt;p id=&quot;p&quot;&gt;...&lt;/p &gt;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BBE\u7F6E\u6587\u672C\u4E3Aabc:</span>
p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;ABC&#39;</span><span class="token punctuation">;</span> <span class="token comment">// &lt;p id=&quot;p&quot;&gt;ABC&lt;/p &gt;</span>
<span class="token comment">// \u8BBE\u7F6EHTML:</span>
p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;ABC &lt;span style=&quot;color:red&quot;&gt;RED&lt;/span&gt; XYZ&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;p&gt;...&lt;/p &gt;\u7684\u5185\u90E8\u7ED3\u6784\u5DF2\u4FEE\u6539</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="innertext\u3001textcontent" tabindex="-1"><a class="header-anchor" href="#innertext\u3001textcontent" aria-hidden="true">#</a> innerText\u3001textContent</h4><p>\u81EA\u52A8\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C<code>HTML</code>\u7F16\u7801\uFF0C\u4FDD\u8BC1\u65E0\u6CD5\u8BBE\u7F6E\u4EFB\u4F55<code>HTML</code>\u6807\u7B7E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u83B7\u53D6&lt;p id=&quot;p-id&quot;&gt;...&lt;/p &gt;
var p = document.getElementById(&#39;p-id&#39;);
// \u8BBE\u7F6E\u6587\u672C:
p.innerText = &#39;&lt;script&gt;alert(&quot;Hi&quot;)&lt;/script&gt;&#39;;
// HTML\u88AB\u81EA\u52A8\u7F16\u7801\uFF0C\u65E0\u6CD5\u8BBE\u7F6E\u4E00\u4E2A&lt;script&gt;\u8282\u70B9:
// &lt;p id=&quot;p-id&quot;&gt;&amp;lt;script&amp;gt;alert(&quot;Hi&quot;)&amp;lt;/script&amp;gt;&lt;/p &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E24\u8005\u7684\u533A\u522B\u5728\u4E8E\u8BFB\u53D6\u5C5E\u6027\u65F6\uFF0C<code>innerText</code>\u4E0D\u8FD4\u56DE\u9690\u85CF\u5143\u7D20\u7684\u6587\u672C\uFF0C\u800C<code>textContent</code>\u8FD4\u56DE\u6240\u6709\u6587\u672C</p><h4 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h4><p><code>DOM</code>\u8282\u70B9\u7684<code>style</code>\u5C5E\u6027\u5BF9\u5E94\u6240\u6709\u7684<code>CSS</code>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u6216\u8BBE\u7F6E\u3002\u9047\u5230<code>-</code>\u9700\u8981\u8F6C\u5316\u4E3A\u9A7C\u5CF0\u547D\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6&lt;p id=&quot;p-id&quot;&gt;...&lt;/p &gt;</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;p-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BBE\u7F6ECSS:</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">&#39;20px&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u9A7C\u5CF0\u547D\u540D</span>
p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>paddingTop <span class="token operator">=</span> <span class="token string">&#39;2em&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u6DFB\u52A0\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8282\u70B9" aria-hidden="true">#</a> \u6DFB\u52A0\u8282\u70B9</h3><h4 id="innerhtml-1" tabindex="-1"><a class="header-anchor" href="#innerhtml-1" aria-hidden="true">#</a> innerHTML</h4><p>\u5982\u679C\u8FD9\u4E2ADOM\u8282\u70B9\u662F\u7A7A\u7684\uFF0C\u4F8B\u5982\uFF0C<code>&lt;div&gt;&lt;/div&gt;</code>\uFF0C\u90A3\u4E48\uFF0C\u76F4\u63A5\u4F7F\u7528<code>innerHTML = &#39;&lt;span&gt;child&lt;/span&gt;&#39;</code>\u5C31\u53EF\u4EE5\u4FEE\u6539<code>DOM</code>\u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u76F8\u5F53\u4E8E\u6DFB\u52A0\u4E86\u65B0\u7684<code>DOM</code>\u8282\u70B9</p><p>\u5982\u679C\u8FD9\u4E2ADOM\u8282\u70B9\u4E0D\u662F\u7A7A\u7684\uFF0C\u90A3\u5C31\u4E0D\u80FD\u8FD9\u4E48\u505A\uFF0C\u56E0\u4E3A<code>innerHTML</code>\u4F1A\u76F4\u63A5\u66FF\u6362\u6389\u539F\u6765\u7684\u6240\u6709\u5B50\u8282\u70B9</p><h4 id="appendchild" tabindex="-1"><a class="header-anchor" href="#appendchild" aria-hidden="true">#</a> appendChild</h4><p>\u628A\u4E00\u4E2A\u5B50\u8282\u70B9\u6DFB\u52A0\u5230\u7236\u8282\u70B9\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9</p><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">HTML</span>\u7ED3\u6784 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;js&quot;</span><span class="token operator">&gt;</span>JavaScript<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;list&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;java&quot;</span><span class="token operator">&gt;</span>Java<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;python&quot;</span><span class="token operator">&gt;</span>Python<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;scheme&quot;</span><span class="token operator">&gt;</span>Scheme<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6DFB\u52A0\u4E00\u4E2A<code>p</code>\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> js <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">)</span>
js<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;JavaScript&quot;</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>js<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u73B0\u5728<code>HTML</code>\u7ED3\u6784\u53D8\u6210\u4E86\u4E0B\u9762</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">HTML</span>\u7ED3\u6784 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;list&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;java&quot;</span><span class="token operator">&gt;</span>Java<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;python&quot;</span><span class="token operator">&gt;</span>Python<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;scheme&quot;</span><span class="token operator">&gt;</span>Scheme<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">&quot;js&quot;</span><span class="token operator">&gt;</span>JavaScript<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u6DFB\u52A0\u5143\u7D20 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u662F\u83B7\u53D6<code>DOM</code>\u5143\u7D20\u540E\u518D\u8FDB\u884C\u6DFB\u52A0\u64CD\u4F5C\uFF0C\u8FD9\u4E2A<code>js</code>\u8282\u70B9\u662F\u5DF2\u7ECF\u5B58\u5728\u5F53\u524D\u6587\u6863\u6811\u4E2D\uFF0C\u56E0\u6B64\u8FD9\u4E2A\u8282\u70B9\u9996\u5148\u4F1A\u4ECE\u539F\u5148\u7684\u4F4D\u7F6E\u5220\u9664\uFF0C\u518D\u63D2\u5165\u5230\u65B0\u7684\u4F4D\u7F6E</p><p>\u5982\u679C\u52A8\u6001\u6DFB\u52A0\u65B0\u7684\u8282\u70B9\uFF0C\u5219\u5148\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8282\u70B9\uFF0C\u7136\u540E\u63D2\u5165\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">const</span> haskell <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
haskell<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;haskell&#39;</span><span class="token punctuation">;</span>
haskell<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;Haskell&#39;</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>haskell<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="insertbefore" tabindex="-1"><a class="header-anchor" href="#insertbefore" aria-hidden="true">#</a> insertBefore</h4><p>\u628A\u5B50\u8282\u70B9\u63D2\u5165\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E\uFF0C\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parentElement<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newElement<span class="token punctuation">,</span> referenceElement<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B50\u8282\u70B9\u4F1A\u63D2\u5165\u5230<code>referenceElement</code>\u4E4B\u524D</p><h4 id="setattribute" tabindex="-1"><a class="header-anchor" href="#setattribute" aria-hidden="true">#</a> setAttribute</h4><p>\u5728\u6307\u5B9A\u5143\u7D20\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\u8282\u70B9\uFF0C\u5982\u679C\u5143\u7D20\u4E2D\u5DF2\u6709\u8BE5\u5C5E\u6027\u6539\u53D8\u5C5E\u6027\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span>
div<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C5E\u6027\u540D\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5C5E\u6027\u503C\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h3><p>\u5220\u9664\u4E00\u4E2A\u8282\u70B9\uFF0C\u9996\u5148\u8981\u83B7\u5F97\u8BE5\u8282\u70B9\u672C\u8EAB\u4EE5\u53CA\u5B83\u7684\u7236\u8282\u70B9\uFF0C\u7136\u540E\uFF0C\u8C03\u7528\u7236\u8282\u70B9\u7684<code>removeChild</code>\u628A\u81EA\u5DF1\u5220\u6389</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u62FF\u5230\u5F85\u5220\u9664\u8282\u70B9:</span>
<span class="token keyword">const</span> self <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;to-be-removed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u62FF\u5230\u7236\u8282\u70B9:</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> self<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span>
<span class="token comment">// \u5220\u9664:</span>
<span class="token keyword">const</span> removed <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">;</span>
removed <span class="token operator">===</span> self<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5220\u9664\u540E\u7684\u8282\u70B9\u867D\u7136\u4E0D\u5728\u6587\u6863\u6811\u4E2D\u4E86\uFF0C\u4F46\u5176\u5B9E\u5B83\u8FD8\u5728\u5185\u5B58\u4E2D\uFF0C\u53EF\u4EE5\u968F\u65F6\u518D\u6B21\u88AB\u6DFB\u52A0\u5230\u522B\u7684\u4F4D\u7F6E</p><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a> \u76F8\u5173\u94FE\u63A5</h2><p>https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model</p>`,83);function t(p,o){return e}var l=n(a,[["render",t],["__file","Dom.html.vue"]]);export{l as default};
