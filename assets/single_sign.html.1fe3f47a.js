import{_ as o,r as p,o as c,c as t,a as n,b as s,F as i,e as l,d as e}from"./app.26a788a0.js";const d={},r=l(`<h1 id="\u4EC0\u4E48\u662F\u5355\u70B9\u767B\u5F55-\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5355\u70B9\u767B\u5F55-\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5355\u70B9\u767B\u5F55\uFF1F\u5982\u4F55\u5B9E\u73B0\uFF1F</h1><p><img src="https://static.vue-js.com/8a25a760-8c83-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5355\u70B9\u767B\u5F55\uFF08Single Sign On\uFF09\uFF0C\u7B80\u79F0\u4E3A SSO\uFF0C\u662F\u76EE\u524D\u6BD4\u8F83\u6D41\u884C\u7684\u4F01\u4E1A\u4E1A\u52A1\u6574\u5408\u7684\u89E3\u51B3\u65B9\u6848\u4E4B\u4E00</p><p>SSO\u7684\u5B9A\u4E49\u662F\u5728\u591A\u4E2A\u5E94\u7528\u7CFB\u7EDF\u4E2D\uFF0C\u7528\u6237\u53EA\u9700\u8981\u767B\u5F55\u4E00\u6B21\u5C31\u53EF\u4EE5\u8BBF\u95EE\u6240\u6709\u76F8\u4E92\u4FE1\u4EFB\u7684\u5E94\u7528\u7CFB\u7EDF</p><p>SSO \u4E00\u822C\u90FD\u9700\u8981\u4E00\u4E2A\u72EC\u7ACB\u7684\u8BA4\u8BC1\u4E2D\u5FC3\uFF08passport\uFF09\uFF0C\u5B50\u7CFB\u7EDF\u7684\u767B\u5F55\u5747\u5F97\u901A\u8FC7<code>passport</code>\uFF0C\u5B50\u7CFB\u7EDF\u672C\u8EAB\u5C06\u4E0D\u53C2\u4E0E\u767B\u5F55\u64CD\u4F5C</p><p>\u5F53\u4E00\u4E2A\u7CFB\u7EDF\u6210\u529F\u767B\u5F55\u4EE5\u540E\uFF0C<code>passport</code>\u5C06\u4F1A\u9881\u53D1\u4E00\u4E2A\u4EE4\u724C\u7ED9\u5404\u4E2A\u5B50\u7CFB\u7EDF\uFF0C\u5B50\u7CFB\u7EDF\u53EF\u4EE5\u62FF\u7740\u4EE4\u724C\u4F1A\u83B7\u53D6\u5404\u81EA\u7684\u53D7\u4FDD\u62A4\u8D44\u6E90\uFF0C\u4E3A\u4E86\u51CF\u5C11\u9891\u7E41\u8BA4\u8BC1\uFF0C\u5404\u4E2A\u5B50\u7CFB\u7EDF\u5728\u88AB<code>passport</code>\u6388\u6743\u4EE5\u540E\uFF0C\u4F1A\u5EFA\u7ACB\u4E00\u4E2A\u5C40\u90E8\u4F1A\u8BDD\uFF0C\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u53EF\u4EE5\u65E0\u9700\u518D\u6B21\u5411<code>passport</code>\u53D1\u8D77\u8BA4\u8BC1</p><p><img src="https://static.vue-js.com/2b9b0e70-8c4b-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>\u4E0A\u56FE\u6709\u56DB\u4E2A\u7CFB\u7EDF\uFF0C\u5206\u522B\u662F<code>Application1</code>\u3001<code>Application2</code>\u3001<code>Application3</code>\u3001\u548C<code>SSO</code>\uFF0C\u5F53<code>Application1</code>\u3001<code>Application2</code>\u3001<code>Application3</code>\u9700\u8981\u767B\u5F55\u65F6\uFF0C\u5C06\u8DF3\u5230<code>SSO</code>\u7CFB\u7EDF\uFF0C<code>SSO</code>\u7CFB\u7EDF\u5B8C\u6210\u767B\u5F55\uFF0C\u5176\u4ED6\u7684\u5E94\u7528\u7CFB\u7EDF\u4E5F\u5C31\u968F\u4E4B\u767B\u5F55\u4E86</p><h4 id="\u4E3E\u4E2A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a> \u4E3E\u4E2A\u4F8B\u5B50</h4><p>\u6DD8\u5B9D\u3001\u5929\u732B\u90FD\u5C5E\u4E8E\u963F\u91CC\u65D7\u4E0B\uFF0C\u5F53\u7528\u6237\u767B\u5F55\u6DD8\u5B9D\u540E\uFF0C\u518D\u6253\u5F00\u5929\u732B\uFF0C\u7CFB\u7EDF\u4FBF\u81EA\u52A8\u5E2E\u7528\u6237\u767B\u5F55\u4E86\u5929\u732B\uFF0C\u8FD9\u79CD\u73B0\u8C61\u5C31\u5C5E\u4E8E\u5355\u70B9\u767B\u5F55</p><h2 id="\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u5B9E\u73B0</h2><h3 id="\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55" aria-hidden="true">#</a> \u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55</h3><p><code>cookie</code>\u7684<code>domain</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u5F53\u524D\u57DF\u7684\u7236\u57DF\uFF0C\u5E76\u4E14\u7236\u57DF\u7684<code>cookie</code>\u4F1A\u88AB\u5B50\u57DF\u6240\u5171\u4EAB\u3002<code>path</code>\u5C5E\u6027\u9ED8\u8BA4\u4E3A<code>web</code>\u5E94\u7528\u7684\u4E0A\u4E0B\u6587\u8DEF\u5F84</p><p>\u5229\u7528 <code>Cookie</code> \u7684\u8FD9\u4E2A\u7279\u70B9\uFF0C\u6CA1\u9519\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06<code>Cookie</code>\u7684<code>domain</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u7236\u57DF\u7684\u57DF\u540D\uFF08\u4E3B\u57DF\u540D\uFF09\uFF0C\u540C\u65F6\u5C06 <code>Cookie</code>\u7684<code>path</code>\u5C5E\u6027\u8BBE\u7F6E\u4E3A\u6839\u8DEF\u5F84\uFF0C\u5C06 <code>Session ID</code>\uFF08\u6216 <code>Token</code>\uFF09\u4FDD\u5B58\u5230\u7236\u57DF\u4E2D\u3002\u8FD9\u6837\u6240\u6709\u7684\u5B50\u57DF\u5E94\u7528\u5C31\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E2A<code>Cookie</code></p><p>\u4E0D\u8FC7\u8FD9\u8981\u6C42\u5E94\u7528\u7CFB\u7EDF\u7684\u57DF\u540D\u9700\u5EFA\u7ACB\u5728\u4E00\u4E2A\u5171\u540C\u7684\u4E3B\u57DF\u540D\u4E4B\u4E0B\uFF0C\u5982 <code>tieba.baidu.com</code> \u548C <code>map.baidu.com</code>\uFF0C\u5B83\u4EEC\u90FD\u5EFA\u7ACB\u5728 <code>baidu.com</code>\u8FD9\u4E2A\u4E3B\u57DF\u540D\u4E4B\u4E0B\uFF0C\u90A3\u4E48\u5B83\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u5355\u70B9\u767B\u5F55</p><h3 id="\u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55-\u4E00" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55-\u4E00" aria-hidden="true">#</a> \u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55(\u4E00)</h3><p>\u5982\u679C\u662F\u4E0D\u540C\u57DF\u7684\u60C5\u51B5\u4E0B\uFF0C<code>Cookie</code>\u662F\u4E0D\u5171\u4EAB\u7684\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u90E8\u7F72\u4E00\u4E2A\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u7528\u4E8E\u4E13\u95E8\u5904\u7406\u767B\u5F55\u8BF7\u6C42\u7684\u72EC\u7ACB\u7684 <code>Web</code>\u670D\u52A1</p><p>\u7528\u6237\u7EDF\u4E00\u5728\u8BA4\u8BC1\u4E2D\u5FC3\u8FDB\u884C\u767B\u5F55\uFF0C\u767B\u5F55\u6210\u529F\u540E\uFF0C\u8BA4\u8BC1\u4E2D\u5FC3\u8BB0\u5F55\u7528\u6237\u7684\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u5C06 <code>token</code> \u5199\u5165 <code>Cookie</code>\uFF08\u6CE8\u610F\u8FD9\u4E2A <code>Cookie</code>\u662F\u8BA4\u8BC1\u4E2D\u5FC3\u7684\uFF0C\u5E94\u7528\u7CFB\u7EDF\u662F\u8BBF\u95EE\u4E0D\u5230\u7684\uFF09</p><p>\u5E94\u7528\u7CFB\u7EDF\u68C0\u67E5\u5F53\u524D\u8BF7\u6C42\u6709\u6CA1\u6709 <code>Token</code>\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8BF4\u660E\u7528\u6237\u5728\u5F53\u524D\u7CFB\u7EDF\u4E2D\u5C1A\u672A\u767B\u5F55\uFF0C\u90A3\u4E48\u5C31\u5C06\u9875\u9762\u8DF3\u8F6C\u81F3\u8BA4\u8BC1\u4E2D\u5FC3</p><p>\u7531\u4E8E\u8FD9\u4E2A\u64CD\u4F5C\u4F1A\u5C06\u8BA4\u8BC1\u4E2D\u5FC3\u7684 <code>Cookie</code> \u81EA\u52A8\u5E26\u8FC7\u53BB\uFF0C\u56E0\u6B64\uFF0C\u8BA4\u8BC1\u4E2D\u5FC3\u80FD\u591F\u6839\u636E <code>Cookie</code> \u77E5\u9053\u7528\u6237\u662F\u5426\u5DF2\u7ECF\u767B\u5F55\u8FC7\u4E86</p><p>\u5982\u679C\u8BA4\u8BC1\u4E2D\u5FC3\u53D1\u73B0\u7528\u6237\u5C1A\u672A\u767B\u5F55\uFF0C\u5219\u8FD4\u56DE\u767B\u5F55\u9875\u9762\uFF0C\u7B49\u5F85\u7528\u6237\u767B\u5F55</p><p>\u5982\u679C\u53D1\u73B0\u7528\u6237\u5DF2\u7ECF\u767B\u5F55\u8FC7\u4E86\uFF0C\u5C31\u4E0D\u4F1A\u8BA9\u7528\u6237\u518D\u6B21\u767B\u5F55\u4E86\uFF0C\u800C\u662F\u4F1A\u8DF3\u8F6C\u56DE\u76EE\u6807 <code>URL</code>\uFF0C\u5E76\u5728\u8DF3\u8F6C\u524D\u751F\u6210\u4E00\u4E2A <code>Token</code>\uFF0C\u62FC\u63A5\u5728\u76EE\u6807<code>URL</code> \u7684\u540E\u9762\uFF0C\u56DE\u4F20\u7ED9\u76EE\u6807\u5E94\u7528\u7CFB\u7EDF</p><p>\u5E94\u7528\u7CFB\u7EDF\u62FF\u5230 <code>Token</code>\u4E4B\u540E\uFF0C\u8FD8\u9700\u8981\u5411\u8BA4\u8BC1\u4E2D\u5FC3\u786E\u8BA4\u4E0B <code>Token</code> \u7684\u5408\u6CD5\u6027\uFF0C\u9632\u6B62\u7528\u6237\u4F2A\u9020\u3002\u786E\u8BA4\u65E0\u8BEF\u540E\uFF0C\u5E94\u7528\u7CFB\u7EDF\u8BB0\u5F55\u7528\u6237\u7684\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u5C06 <code>Token</code>\u5199\u5165<code>Cookie</code>\uFF0C\u7136\u540E\u7ED9\u672C\u6B21\u8BBF\u95EE\u653E\u884C\u3002\uFF08\u6CE8\u610F\u8FD9\u4E2A <code>Cookie</code> \u662F\u5F53\u524D\u5E94\u7528\u7CFB\u7EDF\u7684\uFF09\u5F53\u7528\u6237\u518D\u6B21\u8BBF\u95EE\u5F53\u524D\u5E94\u7528\u7CFB\u7EDF\u65F6\uFF0C\u5C31\u4F1A\u81EA\u52A8\u5E26\u4E0A\u8FD9\u4E2A <code>Token</code>\uFF0C\u5E94\u7528\u7CFB\u7EDF\u9A8C\u8BC1 Token \u53D1\u73B0\u7528\u6237\u5DF2\u767B\u5F55\uFF0C\u4E8E\u662F\u5C31\u4E0D\u4F1A\u6709\u8BA4\u8BC1\u4E2D\u5FC3\u4EC0\u4E48\u4E8B\u4E86</p><p>\u6B64\u79CD\u5B9E\u73B0\u65B9\u5F0F\u76F8\u5BF9\u590D\u6742\uFF0C\u652F\u6301\u8DE8\u57DF\uFF0C\u6269\u5C55\u6027\u597D\uFF0C\u662F\u5355\u70B9\u767B\u5F55\u7684\u6807\u51C6\u505A\u6CD5</p><h3 id="\u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55-\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55-\u4E8C" aria-hidden="true">#</a> \u4E0D\u540C\u57DF\u540D\u4E0B\u7684\u5355\u70B9\u767B\u5F55(\u4E8C)</h3><p>\u53EF\u4EE5\u9009\u62E9\u5C06 <code>Session ID</code> \uFF08\u6216 <code>Token</code> \uFF09\u4FDD\u5B58\u5230\u6D4F\u89C8\u5668\u7684 <code>LocalStorage</code> \u4E2D\uFF0C\u8BA9\u524D\u7AEF\u5728\u6BCF\u6B21\u5411\u540E\u7AEF\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u4E3B\u52A8\u5C06<code>LocalStorage</code>\u7684\u6570\u636E\u4F20\u9012\u7ED9\u670D\u52A1\u7AEF</p><p>\u8FD9\u4E9B\u90FD\u662F\u7531\u524D\u7AEF\u6765\u63A7\u5236\u7684\uFF0C\u540E\u7AEF\u9700\u8981\u505A\u7684\u4EC5\u4EC5\u662F\u5728\u7528\u6237\u767B\u5F55\u6210\u529F\u540E\uFF0C\u5C06 <code>Session ID</code>\uFF08\u6216 <code>Token</code>\uFF09\u653E\u5728\u54CD\u5E94\u4F53\u4E2D\u4F20\u9012\u7ED9\u524D\u7AEF</p><p>\u5355\u70B9\u767B\u5F55\u5B8C\u5168\u53EF\u4EE5\u5728\u524D\u7AEF\u5B9E\u73B0\u3002\u524D\u7AEF\u62FF\u5230 <code>Session ID</code>\uFF08\u6216 <code>Token</code> \uFF09\u540E\uFF0C\u9664\u4E86\u5C06\u5B83\u5199\u5165\u81EA\u5DF1\u7684 <code>LocalStorage</code> \u4E2D\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u7279\u6B8A\u624B\u6BB5\u5C06\u5B83\u5199\u5165\u591A\u4E2A\u5176\u4ED6\u57DF\u4E0B\u7684 <code>LocalStorage</code> \u4E2D</p><p>\u5173\u952E\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6 token</span>
<span class="token keyword">var</span> token <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">;</span>
 
<span class="token comment">// \u52A8\u6001\u521B\u5EFA\u4E00\u4E2A\u4E0D\u53EF\u89C1\u7684iframe\uFF0C\u5728iframe\u4E2D\u52A0\u8F7D\u4E00\u4E2A\u8DE8\u57DFHTML</span>
<span class="token keyword">var</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;iframe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;http://app1.com/localstorage.html&quot;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4F7F\u7528postMessage()\u65B9\u6CD5\u5C06token\u4F20\u9012\u7ED9iframe</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> <span class="token string">&quot;http://app1.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    iframe<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u5728\u8FD9\u4E2Aiframe\u6240\u52A0\u8F7D\u7684HTML\u4E2D\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5F53\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u628A\u63A5\u6536\u5230\u7684token\u6570\u636E\u5199\u5165localStorage</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u524D\u7AEF\u901A\u8FC7 <code>iframe</code>+<code>postMessage()</code> \u65B9\u5F0F\uFF0C\u5C06\u540C\u4E00\u4EFD <code>Token</code> \u5199\u5165\u5230\u4E86\u591A\u4E2A\u57DF\u4E0B\u7684 <code>LocalStorage</code> \u4E2D\uFF0C\u524D\u7AEF\u6BCF\u6B21\u5728\u5411\u540E\u7AEF\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\uFF0C\u90FD\u4F1A\u4E3B\u52A8\u4ECE <code>LocalStorage</code> \u4E2D\u8BFB\u53D6<code>Token</code>\u5E76\u5728\u8BF7\u6C42\u4E2D\u643A\u5E26\uFF0C\u8FD9\u6837\u5C31\u5B9E\u73B0\u4E86\u540C\u4E00\u4EFD<code>Token</code> \u88AB\u591A\u4E2A\u57DF\u6240\u5171\u4EAB</p><p>\u6B64\u79CD\u5B9E\u73B0\u65B9\u5F0F\u5B8C\u5168\u7531\u524D\u7AEF\u63A7\u5236\uFF0C\u51E0\u4E4E\u4E0D\u9700\u8981\u540E\u7AEF\u53C2\u4E0E\uFF0C\u540C\u6837\u652F\u6301\u8DE8\u57DF</p><h2 id="\u4E09\u3001\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6D41\u7A0B" aria-hidden="true">#</a> \u4E09\u3001\u6D41\u7A0B</h2><p>\u5355\u70B9\u767B\u5F55\u7684\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/2422bc40-8c84-11eb-ab90-d9ae814b240d.png" alt=""></p><ul><li><p>\u7528\u6237\u8BBF\u95EE\u7CFB\u7EDF1\u7684\u53D7\u4FDD\u62A4\u8D44\u6E90\uFF0C\u7CFB\u7EDF1\u53D1\u73B0\u7528\u6237\u672A\u767B\u5F55\uFF0C\u8DF3\u8F6C\u81F3sso\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u5E76\u5C06\u81EA\u5DF1\u7684\u5730\u5740\u4F5C\u4E3A\u53C2\u6570</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u53D1\u73B0\u7528\u6237\u672A\u767B\u5F55\uFF0C\u5C06\u7528\u6237\u5F15\u5BFC\u81F3\u767B\u5F55\u9875\u9762</p></li><li><p>\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u63D0\u4EA4\u767B\u5F55\u7533\u8BF7</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u6821\u9A8C\u7528\u6237\u4FE1\u606F\uFF0C\u521B\u5EFA\u7528\u6237\u4E0Esso\u8BA4\u8BC1\u4E2D\u5FC3\u4E4B\u95F4\u7684\u4F1A\u8BDD\uFF0C\u79F0\u4E3A\u5168\u5C40\u4F1A\u8BDD\uFF0C\u540C\u65F6\u521B\u5EFA\u6388\u6743\u4EE4\u724C</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u5E26\u7740\u4EE4\u724C\u8DF3\u8F6C\u4F1A\u6700\u521D\u7684\u8BF7\u6C42\u5730\u5740\uFF08\u7CFB\u7EDF1\uFF09</p></li><li><p>\u7CFB\u7EDF1\u62FF\u5230\u4EE4\u724C\uFF0C\u53BBsso\u8BA4\u8BC1\u4E2D\u5FC3\u6821\u9A8C\u4EE4\u724C\u662F\u5426\u6709\u6548</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u6821\u9A8C\u4EE4\u724C\uFF0C\u8FD4\u56DE\u6709\u6548\uFF0C\u6CE8\u518C\u7CFB\u7EDF1</p></li><li><p>\u7CFB\u7EDF1\u4F7F\u7528\u8BE5\u4EE4\u724C\u521B\u5EFA\u4E0E\u7528\u6237\u7684\u4F1A\u8BDD\uFF0C\u79F0\u4E3A\u5C40\u90E8\u4F1A\u8BDD\uFF0C\u8FD4\u56DE\u53D7\u4FDD\u62A4\u8D44\u6E90</p></li><li><p>\u7528\u6237\u8BBF\u95EE\u7CFB\u7EDF2\u7684\u53D7\u4FDD\u62A4\u8D44\u6E90</p></li><li><p>\u7CFB\u7EDF2\u53D1\u73B0\u7528\u6237\u672A\u767B\u5F55\uFF0C\u8DF3\u8F6C\u81F3sso\u8BA4\u8BC1\u4E2D\u5FC3\uFF0C\u5E76\u5C06\u81EA\u5DF1\u7684\u5730\u5740\u4F5C\u4E3A\u53C2\u6570</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u53D1\u73B0\u7528\u6237\u5DF2\u767B\u5F55\uFF0C\u8DF3\u8F6C\u56DE\u7CFB\u7EDF2\u7684\u5730\u5740\uFF0C\u5E76\u9644\u4E0A\u4EE4\u724C</p></li><li><p>\u7CFB\u7EDF2\u62FF\u5230\u4EE4\u724C\uFF0C\u53BBsso\u8BA4\u8BC1\u4E2D\u5FC3\u6821\u9A8C\u4EE4\u724C\u662F\u5426\u6709\u6548</p></li><li><p>sso\u8BA4\u8BC1\u4E2D\u5FC3\u6821\u9A8C\u4EE4\u724C\uFF0C\u8FD4\u56DE\u6709\u6548\uFF0C\u6CE8\u518C\u7CFB\u7EDF2</p></li><li><p>\u7CFB\u7EDF2\u4F7F\u7528\u8BE5\u4EE4\u724C\u521B\u5EFA\u4E0E\u7528\u6237\u7684\u5C40\u90E8\u4F1A\u8BDD\uFF0C\u8FD4\u56DE\u53D7\u4FDD\u62A4\u8D44\u6E90</p></li></ul><p>\u7528\u6237\u767B\u5F55\u6210\u529F\u4E4B\u540E\uFF0C\u4F1A\u4E0E<code>sso</code>\u8BA4\u8BC1\u4E2D\u5FC3\u53CA\u5404\u4E2A\u5B50\u7CFB\u7EDF\u5EFA\u7ACB\u4F1A\u8BDD\uFF0C\u7528\u6237\u4E0E<code>sso</code>\u8BA4\u8BC1\u4E2D\u5FC3\u5EFA\u7ACB\u7684\u4F1A\u8BDD\u79F0\u4E3A\u5168\u5C40\u4F1A\u8BDD</p><p>\u7528\u6237\u4E0E\u5404\u4E2A\u5B50\u7CFB\u7EDF\u5EFA\u7ACB\u7684\u4F1A\u8BDD\u79F0\u4E3A\u5C40\u90E8\u4F1A\u8BDD\uFF0C\u5C40\u90E8\u4F1A\u8BDD\u5EFA\u7ACB\u4E4B\u540E\uFF0C\u7528\u6237\u8BBF\u95EE\u5B50\u7CFB\u7EDF\u53D7\u4FDD\u62A4\u8D44\u6E90\u5C06\u4E0D\u518D\u901A\u8FC7<code>sso</code>\u8BA4\u8BC1\u4E2D\u5FC3</p><p>\u5168\u5C40\u4F1A\u8BDD\u4E0E\u5C40\u90E8\u4F1A\u8BDD\u6709\u5982\u4E0B\u7EA6\u675F\u5173\u7CFB\uFF1A</p><ul><li>\u5C40\u90E8\u4F1A\u8BDD\u5B58\u5728\uFF0C\u5168\u5C40\u4F1A\u8BDD\u4E00\u5B9A\u5B58\u5728</li><li>\u5168\u5C40\u4F1A\u8BDD\u5B58\u5728\uFF0C\u5C40\u90E8\u4F1A\u8BDD\u4E0D\u4E00\u5B9A\u5B58\u5728</li><li>\u5168\u5C40\u4F1A\u8BDD\u9500\u6BC1\uFF0C\u5C40\u90E8\u4F1A\u8BDD\u5FC5\u987B\u9500\u6BC1</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,42),u={href:"https://blog.csdn.net/weixin_36380516/article/details/109006828",target:"_blank",rel:"noopener noreferrer"},k=e("https://blog.csdn.net/weixin_36380516/article/details/109006828"),h={href:"https://baike.baidu.com/item/%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},b=e("https://baike.baidu.com/item/\u5355\u70B9\u767B\u5F55"),m={href:"https://juejin.cn/post/6844903664985866253",target:"_blank",rel:"noopener noreferrer"},f=e("https://juejin.cn/post/6844903664985866253");function g(_,S){const a=p("ExternalLinkIcon");return c(),t(i,null,[r,n("ul",null,[n("li",null,[n("a",u,[k,s(a)])]),n("li",null,[n("a",h,[b,s(a)])]),n("li",null,[n("a",m,[f,s(a)])])])],64)}var v=o(d,[["render",g],["__file","single_sign.html.vue"]]);export{v as default};
