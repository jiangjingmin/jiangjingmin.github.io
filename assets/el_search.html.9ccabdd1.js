import{_ as n,e as s}from"./app.cec2e512.js";const a={},e=s(`<h1 id="\u64CD\u4F5C\u8282\u70B9\u67E5\u627Eapi" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u8282\u70B9\u67E5\u627Eapi" aria-hidden="true">#</a> \u64CD\u4F5C\u8282\u70B9\u67E5\u627EAPI</h1><h2 id="\u8282\u70B9\u67E5\u627Eapi" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u67E5\u627Eapi" aria-hidden="true">#</a> \u8282\u70B9\u67E5\u627EAPI</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>document.getElementById \uFF1A\u6839\u636EID\u67E5\u627E\u5143\u7D20\uFF0C\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u7ED3\u679C\uFF0C\u53EA\u8FD4\u56DE\u7B2C\u4E00\u4E2A\uFF1B
document.getElementsByClassName \uFF1A\u6839\u636E\u7C7B\u540D\u67E5\u627E\u5143\u7D20\uFF0C\u591A\u4E2A\u7C7B\u540D\u7528\u7A7A\u683C\u5206\u9694\uFF0C\u8FD4\u56DE\u4E00\u4E2A HTMLCollection \u3002\u6CE8\u610F\u517C\u5BB9\u6027\u4E3AIE9+\uFF08\u542B\uFF09\u3002\u53E6\u5916\uFF0C\u4E0D\u4EC5\u4EC5\u662Fdocument\uFF0C\u5176\u5B83\u5143\u7D20\u4E5F\u652F\u6301 getElementsByClassName \u65B9\u6CD5\uFF1B
document.getElementsByTagName \uFF1A\u6839\u636E\u6807\u7B7E\u67E5\u627E\u5143\u7D20\uFF0C * \u8868\u793A\u67E5\u8BE2\u6240\u6709\u6807\u7B7E\uFF0C\u8FD4\u56DE\u4E00\u4E2A HTMLCollection \u3002
document.getElementsByName \uFF1A\u6839\u636E\u5143\u7D20\u7684name\u5C5E\u6027\u67E5\u627E\uFF0C\u8FD4\u56DE\u4E00\u4E2A NodeList \u3002
document.querySelector \uFF1A\u8FD4\u56DE\u5355\u4E2ANode\uFF0CIE8+(\u542B\uFF09\uFF0C\u5982\u679C\u5339\u914D\u5230\u591A\u4E2A\u7ED3\u679C\uFF0C\u53EA\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u3002
document.querySelectorAll \uFF1A\u8FD4\u56DE\u4E00\u4E2A NodeList \uFF0CIE8+(\u542B\uFF09\u3002
document.forms \uFF1A\u83B7\u53D6\u5F53\u524D\u9875\u9762\u6240\u6709form\uFF0C\u8FD4\u56DE\u4E00\u4E2A HTMLCollection \uFF1B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u8282\u70B9\u521B\u5EFAapi" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u521B\u5EFAapi" aria-hidden="true">#</a> \u8282\u70B9\u521B\u5EFAAPI</h2><p>createElement\u521B\u5EFA\u5143\u7D20\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
elem<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;haorooms&#39;</span><span class="token punctuation">;</span>  
elem<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token string">&#39;color: red&#39;</span><span class="token punctuation">;</span>  
elem<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u6211\u662F\u65B0\u521B\u5EFA\u7684haorooms\u6D4B\u8BD5\u8282\u70B9&#39;</span><span class="token punctuation">;</span>  
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u901A\u8FC7 createElement \u521B\u5EFA\u7684\u5143\u7D20\u5E76\u4E0D\u5C5E\u4E8E document \u5BF9\u8C61\uFF0C\u5B83\u53EA\u662F\u521B\u5EFA\u51FA\u6765\uFF0C\u5E76\u672A\u6DFB\u52A0\u5230html\u6587\u6863\u4E2D\uFF0C\u8981\u8C03\u7528 appendChild \u6216 insertBefore \u7B49\u65B9\u6CD5\u5C06\u5176\u6DFB\u52A0\u5230HTML\u6587\u6863\u4E2D\u3002</p><h3 id="createtextnode\u521B\u5EFA\u6587\u672C\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#createtextnode\u521B\u5EFA\u6587\u672C\u8282\u70B9" aria-hidden="true">#</a> createTextNode\u521B\u5EFA\u6587\u672C\u8282\u70B9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u662F\u6587\u672C\u8282\u70B9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="clonenode-\u514B\u9686\u4E00\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#clonenode-\u514B\u9686\u4E00\u4E2A\u8282\u70B9" aria-hidden="true">#</a> cloneNode \u514B\u9686\u4E00\u4E2A\u8282\u70B9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>node<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">)</span> \uFF0C\u5B83\u63A5\u6536\u4E00\u4E2Abool\u53C2\u6570\uFF0C\u7528\u6765\u8868\u793A\u662F\u5426\u590D\u5236\u5B50\u5143\u7D20\u3002
<span class="token keyword">var</span> from <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token keyword">var</span> clone <span class="token operator">=</span> from<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
clone<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">;</span>  
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>clone<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u514B\u9686\u8282\u70B9\u5E76\u4E0D\u4F1A\u514B\u9686\u4E8B\u4EF6\uFF0C\u9664\u975E\u4E8B\u4EF6\u662F\u7528 \u8FD9\u79CD\u65B9\u5F0F\u7ED1\u5B9A\u7684\uFF0C\u7528 addEventListener \u548C node.onclick=xxx; \u65B9\u5F0F\u7ED1\u5B9A\u7684\u90FD\u4E0D\u4F1A\u590D\u5236\u3002</p><h3 id="createdocumentfragment" tabindex="-1"><a class="header-anchor" href="#createdocumentfragment" aria-hidden="true">#</a> createDocumentFragment</h3><p>\u672C\u65B9\u6CD5\u7528\u6765\u521B\u5EFA\u4E00\u4E2A DocumentFragment \uFF0C\u4E5F\u5C31\u662F\u6587\u6863\u788E\u7247\uFF0C\u5B83\u8868\u793A\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6587\u6863\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u5B58\u50A8\u4E34\u65F6\u8282\u70B9\uFF0C\u5927\u91CF\u64CD\u4F5CDOM\u65F6\u7528\u5B83\u53EF\u4EE5\u5927\u5927\u63D0\u5347\u6027\u80FD\u3002</p><h2 id="\u8282\u70B9\u4FEE\u6539api" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u4FEE\u6539api" aria-hidden="true">#</a> \u8282\u70B9\u4FEE\u6539API</h2><h3 id="_1\u3001appendchild" tabindex="-1"><a class="header-anchor" href="#_1\u3001appendchild" aria-hidden="true">#</a> 1\u3001appendChild</h3><p>\u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2\u3001insertbefore" tabindex="-1"><a class="header-anchor" href="#_2\u3001insertbefore" aria-hidden="true">#</a> 2\u3001insertBefore</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parentNode<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newNode<span class="token punctuation">,</span> refNode<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3\u3001insertadjacenthtml" tabindex="-1"><a class="header-anchor" href="#_3\u3001insertadjacenthtml" aria-hidden="true">#</a> 3\u3001insertAdjacentHTML</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//js\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF0C\u706B\u72D0\u6D4F\u89C8\u5668\uFF0CIE8+</span>
el<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforebegin&#39;</span><span class="token punctuation">,</span> htmlString<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> beforebegin <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> afterbegin <span class="token operator">--</span><span class="token operator">&gt;</span>
  foo
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> beforeend <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> afterend <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4\u3001element-insertadjacentelement" tabindex="-1"><a class="header-anchor" href="#_4\u3001element-insertadjacentelement" aria-hidden="true">#</a> 4\u3001Element.insertAdjacentElement()</h3><p>\u7528\u6CD5\u548C\u4E0A\u9762\u7C7B\u4F3C\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>targetElement<span class="token punctuation">.</span><span class="token function">insertAdjacentElement</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_5\u3001removechild" tabindex="-1"><a class="header-anchor" href="#_5\u3001removechild" aria-hidden="true">#</a> 5\u3001removeChild</h3><p>removeChild\u7528\u4E8E\u5220\u9664\u6307\u5B9A\u7684\u5B50\u8282\u70B9\u5E76\u8FD4\u56DE\u5B50\u8282\u70B9\uFF0C\u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> deletedChild <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>deletedChild\u6307\u5411\u88AB\u5220\u9664\u8282\u70B9\u7684\u5F15\u7528\uFF0C\u5B83\u4ECD\u7136\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0C\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\u3002\u53E6\u5916\uFF0C\u5982\u679C\u88AB\u5220\u9664\u7684\u8282\u70B9\u4E0D\u662F\u5176\u5B50\u8282\u70B9\uFF0C\u5219\u5C06\u4F1A\u62A5\u9519\u3002\u4E00\u822C\u5220\u9664\u8282\u70B9\u90FD\u662F\u8FD9\u4E48\u5220\u7684\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeNode</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span>  
<span class="token punctuation">{</span>  
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>  
    <span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span> node<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_6\u3001replacechild" tabindex="-1"><a class="header-anchor" href="#_6\u3001replacechild" aria-hidden="true">#</a> 6\u3001replaceChild</h3><p>replaceChild\u7528\u4E8E\u5C06\u4E00\u4E2A\u8282\u70B9\u66FF\u6362\u53E6\u4E00\u4E2A\u8282\u70B9\uFF0C\u8BED\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parent<span class="token punctuation">.</span><span class="token function">replaceChild</span><span class="token punctuation">(</span>newChild<span class="token punctuation">,</span> oldChild<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u8282\u70B9\u5173\u7CFBapi" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u5173\u7CFBapi" aria-hidden="true">#</a> \u8282\u70B9\u5173\u7CFBAPI</h2><p>1\u3001\u7236\u5173\u7CFBAPI parentNode \uFF1A\u6BCF\u4E2A\u8282\u70B9\u90FD\u6709\u4E00\u4E2AparentNode\u5C5E\u6027\uFF0C\u5B83\u8868\u793A\u5143\u7D20\u7684\u7236\u8282\u70B9\u3002Element\u7684\u7236\u8282\u70B9\u53EF\u80FD\u662FElement\uFF0CDocument\u6216DocumentFragment\uFF1B parentElement \uFF1A\u8FD4\u56DE\u5143\u7D20\u7684\u7236\u5143\u7D20\u8282\u70B9\uFF0C\u4E0EparentNode\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5176\u7236\u8282\u70B9\u5FC5\u987B\u662F\u4E00\u4E2AElement\u5143\u7D20\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u8FD4\u56DEnull\uFF1B 2\u3001\u5B50\u5173\u7CFBAPI children \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u65F6\u7684 HTMLCollection \uFF0C\u5B50\u8282\u70B9\u90FD\u662FElement\uFF0CIE9\u4EE5\u4E0B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF1B childNodes \uFF1A\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u65F6\u7684 NodeList \uFF0C\u8868\u793A\u5143\u7D20\u7684\u5B50\u8282\u70B9\u5217\u8868\uFF0C\u6CE8\u610F\u5B50\u8282\u70B9\u53EF\u80FD\u5305\u542B\u6587\u672C\u8282\u70B9\u3001\u6CE8\u91CA\u8282\u70B9\u7B49\uFF1B firstChild \uFF1A\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u4E0D\u5B58\u5728\u8FD4\u56DEnull\uFF0C\u4E0E\u4E4B\u76F8\u5BF9\u5E94\u7684\u8FD8\u6709\u4E00\u4E2A firstElementChild \uFF1B lastChild \uFF1A\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u4E0D\u5B58\u5728\u8FD4\u56DEnull\uFF0C\u4E0E\u4E4B\u76F8\u5BF9\u5E94\u7684\u8FD8\u6709\u4E00\u4E2A lastElementChild \uFF1B 3\u3001\u5144\u5F1F\u5173\u7CFB\u578BAPI previousSibling \uFF1A\u8282\u70B9\u7684\u524D\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u8FD4\u56DEnull\u3002\u6CE8\u610F\u6709\u53EF\u80FD\u62FF\u5230\u7684\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\u6216\u6CE8\u91CA\u8282\u70B9\uFF0C\u4E0E\u9884\u671F\u7684\u4E0D\u7B26\uFF0C\u8981\u8FDB\u884C\u5904\u7406\u4E00\u4E0B\u3002 nextSibling \uFF1A\u8282\u70B9\u7684\u540E\u4E00\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5219\u8FD4\u56DEnull\u3002\u6CE8\u610F\u6709\u53EF\u80FD\u62FF\u5230\u7684\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\uFF0C\u4E0E\u9884\u671F\u7684\u4E0D\u7B26\uFF0C\u8981\u8FDB\u884C\u5904\u7406\u4E00\u4E0B\u3002 previousElementSibling \uFF1A\u8FD4\u56DE\u524D\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\uFF0C\u524D\u4E00\u4E2A\u8282\u70B9\u5FC5\u987B\u662FElement\uFF0C\u6CE8\u610FIE9\u4EE5\u4E0B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u3002 nextElementSibling \uFF1A\u8FD4\u56DE\u540E\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\uFF0C\u540E\u4E00\u4E2A\u8282\u70B9\u5FC5\u987B\u662FElement\uFF0C\u6CE8\u610FIE9\u4EE5\u4E0B\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u3002</p><h2 id="\u5143\u7D20\u5C5E\u6027\u578Bapi" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u5C5E\u6027\u578Bapi" aria-hidden="true">#</a> \u5143\u7D20\u5C5E\u6027\u578BAPI</h2><h3 id="_1\u3001setattribute-\u7ED9\u5143\u7D20\u8BBE\u7F6E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1\u3001setattribute-\u7ED9\u5143\u7D20\u8BBE\u7F6E\u5C5E\u6027" aria-hidden="true">#</a> 1\u3001setAttribute \u7ED9\u5143\u7D20\u8BBE\u7F6E\u5C5E\u6027</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5176\u4E2Dname\u662F\u7279\u6027\u540D\uFF0Cvalue\u662F\u7279\u6027\u503C\u3002\u5982\u679C\u5143\u7D20\u4E0D\u5305\u542B\u8BE5\u7279\u6027\uFF0C\u5219\u4F1A\u521B\u5EFA\u8BE5\u7279\u6027\u5E76\u8D4B\u503C\u3002</p><h3 id="_2\u3001getattribute" tabindex="-1"><a class="header-anchor" href="#_2\u3001getattribute" aria-hidden="true">#</a> 2\u3001getAttribute</h3><p>getAttribute\u8FD4\u56DE\u6307\u5B9A\u7684\u7279\u6027\u540D\u76F8\u5E94\u7684\u7279\u6027\u503C\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DEnull\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3\u3001hasattribute" tabindex="-1"><a class="header-anchor" href="#_3\u3001hasattribute" aria-hidden="true">#</a> 3\u3001hasAttribute</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_4\u3001dataset" tabindex="-1"><a class="header-anchor" href="#_4\u3001dataset" aria-hidden="true">#</a> 4\u3001dataset</h3><p>\u83B7\u53D6html data-\u5F00\u5934\u7684\u5C5E\u6027\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;user&quot;</span> data<span class="token operator">-</span>id<span class="token operator">=</span><span class="token string">&quot;1234567890&quot;</span> data<span class="token operator">-</span>user<span class="token operator">=</span><span class="token string">&quot;johndoe&quot;</span> data<span class="token operator">-</span>date<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span>birth<span class="token operator">&gt;</span>John Doe<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token keyword">let</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// el.id == &#39;user&#39;</span>
<span class="token comment">// el.dataset.id === &#39;1234567890&#39;</span>
<span class="token comment">// el.dataset.user === &#39;johndoe&#39;</span>
<span class="token comment">// el.dataset.dateOfBirth === &#39;&#39;</span>

el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>dateOfBirth <span class="token operator">=</span> <span class="token string">&#39;1960-10-03&#39;</span><span class="token punctuation">;</span> <span class="token comment">// set the DOB.</span>

<span class="token comment">// &#39;someDataAttr&#39; in el.dataset === false</span>
el<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>someDataAttr <span class="token operator">=</span> <span class="token string">&#39;mydata&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// &#39;someDataAttr&#39; in el.dataset === true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6837\u5F0F\u76F8\u5173api" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u76F8\u5173api" aria-hidden="true">#</a> \u6837\u5F0F\u76F8\u5173API</h2><h3 id="_1\u3001\u76F4\u63A5\u4FEE\u6539\u5143\u7D20\u7684\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u76F4\u63A5\u4FEE\u6539\u5143\u7D20\u7684\u6837\u5F0F" aria-hidden="true">#</a> 1\u3001\u76F4\u63A5\u4FEE\u6539\u5143\u7D20\u7684\u6837\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>elem<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>  
elem<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;16px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
elem<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">removeProperty</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2\u3001\u52A8\u6001\u6DFB\u52A0\u6837\u5F0F\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u52A8\u6001\u6DFB\u52A0\u6837\u5F0F\u89C4\u5219" aria-hidden="true">#</a> 2\u3001\u52A8\u6001\u6DFB\u52A0\u6837\u5F0F\u89C4\u5219</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
style<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;body{color:red} #top:hover{background-color: red;color: white;}&#39;</span><span class="token punctuation">;</span>  
document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3\u3001classlist\u83B7\u53D6\u6837\u5F0Fclass" tabindex="-1"><a class="header-anchor" href="#_3\u3001classlist\u83B7\u53D6\u6837\u5F0Fclass" aria-hidden="true">#</a> 3\u3001classList\u83B7\u53D6\u6837\u5F0Fclass</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// div is an object reference to a &lt;div&gt; element with class=&quot;foo bar&quot;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;anotherclass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// if visible is set remove it, otherwise add it</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&quot;visible&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add/remove visible, depending on test conditional, i less than 10</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&quot;visible&quot;</span><span class="token punctuation">,</span> i <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add or remove multiple classes</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// add or remove multiple classes using spread syntax</span>
<span class="token keyword">let</span> cls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>cls<span class="token punctuation">)</span><span class="token punctuation">;</span> 
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token operator">...</span>cls<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// replace class &quot;foo&quot; with class &quot;bar&quot;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_4\u3001window-getcomputedstyle" tabindex="-1"><a class="header-anchor" href="#_4\u3001window-getcomputedstyle" aria-hidden="true">#</a> 4\u3001window.getComputedStyle</h3><p>\u901A\u8FC7 element.sytle.xxx \u53EA\u80FD\u83B7\u53D6\u5230\u5185\u8054\u6837\u5F0F\uFF0C\u501F\u52A9 window.getComputedStyle \u53EF\u4EE5\u83B7\u53D6\u5E94\u7528\u5230\u5143\u7D20\u4E0A\u7684\u6240\u6709\u6837\u5F0F\uFF0CIE8\u6216\u66F4\u4F4E\u7248\u672C\u4E0D\u652F\u6301\u6B64\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> style <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">[</span><span class="token punctuation">,</span> pseudoElt<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u76F8\u5173\u9AD8\u5EA6api" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u76F8\u5173\u9AD8\u5EA6api" aria-hidden="true">#</a> \u83B7\u53D6\u76F8\u5173\u9AD8\u5EA6API</h2><p>\u5173\u4E8Ejs\u7684\u9AD8\u5EA6\uFF0C\u6211\u518D\u6155\u8BFE\u7F51\u4E0A\u9762\u4E5F\u5F55\u5236\u4E86\u4E00\u4E2A\u89C6\u9891\uFF0Cjs/jquery\u5404\u79CD\u5BBD\u9AD8\u7684\u7406\u89E3\u548C\u5E94\u7528\u3002 \u8FD9\u91CC\u4E3B\u8981\u8BB2\u4E00\u4E0B\uFF1A</p><h3 id="getboundingclientrect" tabindex="-1"><a class="header-anchor" href="#getboundingclientrect" aria-hidden="true">#</a> getBoundingClientRect</h3><p>getBoundingClientRect \u7528\u6765\u8FD4\u56DE\u5143\u7D20\u7684\u5927\u5C0F\u4EE5\u53CA\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u53EF\u89C6\u7A97\u53E3\u7684\u4F4D\u7F6E\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> clientRect <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>clientRect\u662F\u4E00\u4E2A DOMRect \u5BF9\u8C61\uFF0C\u5305\u542Bwidth\u3001height\u3001left\u3001top\u3001right\u3001bottom\uFF0C\u5B83\u662F\u76F8\u5BF9\u4E8E\u7A97\u53E3\u9876\u90E8\u800C\u4E0D\u662F\u6587\u6863\u9876\u90E8\uFF0C\u6EDA\u52A8\u9875\u9762\u65F6\u5B83\u4EEC\u7684\u503C\u662F\u4F1A\u53D1\u751F\u53D8\u5316\u7684\u3002</p>`,63);function t(p,o){return e}var l=n(a,[["render",t],["__file","el_search.html.vue"]]);export{l as default};
