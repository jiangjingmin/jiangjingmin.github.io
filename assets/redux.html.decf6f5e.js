import{_ as t,r as p,o,c,a as n,b as e,F as r,d as s,e as l}from"./app.cec2e512.js";const u={},i=n("h1",{id:"redux-\u72B6\u6001\u7BA1\u7406\u5E93",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redux-\u72B6\u6001\u7BA1\u7406\u5E93","aria-hidden":"true"},"#"),s(" Redux \u72B6\u6001\u7BA1\u7406\u5E93")],-1),d={href:"https://github.com/reduxjs/redux",target:"_blank",rel:"noopener noreferrer"},k=s("Github"),b={href:"https://redux.js.org",target:"_blank",rel:"noopener noreferrer"},m=s("\u82F1\u6587\u5B98\u7F51"),h=l(`<h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>Redux</code> \u662F <code>React</code> \u7684\u4E00\u4E2A\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u57FA\u4E8E <code>flux</code>\u3002 <code>Redux</code> \u7B80\u5316\u4E86React\u4E2D\u7684<strong>\u5355\u5411\u6570\u636E\u6D41</strong>\u3002 <code>Redux</code> \u5C06\u72B6\u6001\u7BA1\u7406\u5B8C\u5168\u4ECEReact\u4E2D\u62BD\u8C61\u51FA\u6765\u3002</p><h2 id="\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u5DE5\u4F5C\u539F\u7406</h2><p><code>redux</code> \u8981\u6C42\u6211\u4EEC\u628A\u6570\u636E\u90FD\u653E\u5728 <code>store</code> \u516C\u5171\u5B58\u50A8\u7A7A\u95F4</p><p>\u4E00\u4E2A\u7EC4\u4EF6\u6539\u53D8\u4E86 <code>store</code> \u91CC\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u5C31\u80FD\u611F\u77E5\u5230 <code>store</code>\u7684\u53D8\u5316\uFF0C\u518D\u6765\u53D6\u6570\u636E\uFF0C\u4ECE\u800C\u95F4\u63A5\u7684\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u6570\u636E\u4F20\u9012\u7684\u529F\u80FD</p><p>\u5DE5\u4F5C\u6D41\u7A0B\u56FE\u5982\u4E0B\u6240\u793A\uFF1A</p><p>\u5728React\u4E2D\uFF0C\u7EC4\u4EF6\u8FDE\u63A5\u5230 redux \uFF0C\u5982\u679C\u8981\u8BBF\u95EE redux\uFF0C\u9700\u8981\u6D3E\u51FA\u4E00\u4E2A\u5305\u542B id\u548C\u8D1F\u8F7D(payload) \u7684 action\u3002action \u4E2D\u7684 payload \u662F\u53EF\u9009\u7684\uFF0Caction \u5C06\u5176\u8F6C\u53D1\u7ED9 Reducer\u3002</p><p>\u5F53reducer\u6536\u5230action\u65F6\uFF0C\u901A\u8FC7 swithc...case \u8BED\u6CD5\u6BD4\u8F83 action \u4E2Dtype\u3002 \u5339\u914D\u65F6\uFF0C\u66F4\u65B0\u5BF9\u5E94\u7684\u5185\u5BB9\u8FD4\u56DE\u65B0\u7684 state\u3002</p><p>\u5F53Redux\u72B6\u6001\u66F4\u6539\u65F6\uFF0C\u8FDE\u63A5\u5230Redux\u7684\u7EC4\u4EF6\u5C06\u63A5\u6536\u65B0\u7684\u72B6\u6001\u4F5C\u4E3Aprops\u3002\u5F53\u7EC4\u4EF6\u63A5\u6536\u5230\u8FD9\u4E9Bprops\u65F6\uFF0C\u5B83\u5C06\u8FDB\u5165\u66F4\u65B0\u9636\u6BB5\u5E76\u91CD\u65B0\u6E32\u67D3 UI\u3002</p><h3 id="redux-\u5FAA\u73AF\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#redux-\u5FAA\u73AF\u7EC6\u8282" aria-hidden="true">#</a> Redux \u5FAA\u73AF\u7EC6\u8282</h3><p><strong>Action</strong>: Action \u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684json\u5BF9\u8C61\uFF0Ctype \u548C\u6709payload\u4F5C\u4E3A\u952E\u3002type \u662F\u5FC5\u987B\u8981\u6709\u7684\uFF0Cpayload\u662F\u53EF\u9009\u7684\u3002</p><p><strong>Action Creators</strong>\uFF1A\u8FD9\u4E9B\u662F\u521B\u5EFAActions\u7684\u51FD\u6570\uFF0C\u56E0\u6B64\u6211\u4EEC\u5728\u6D3E\u53D1action\u65F6\u4E0D\u5FC5\u5728\u7EC4\u4EF6\u4E2D\u624B\u52A8\u7F16\u5199\u6BCF\u4E2A action\u3002</p><p><strong>Reducers</strong>\uFF1AReducers \u662F\u7EAF\u51FD\u6570\uFF0C\u5B83\u5C06 action\u548C\u5F53\u524D state \u4F5C\u4E3A\u53C2\u6570,\u8BA1\u7B97\u5FC5\u8981\u7684\u903B\u8F91\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684state\u3002 \u8FD9\u4E9B Reducers \u6CA1\u6709\u4EFB\u4F55\u526F\u4F5C\u7528\u3002 \u5B83\u4E0D\u4F1A\u6539\u53D8 state \u800C\u662F\u603B\u662F\u8FD4\u56DE state \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Action</span>
<span class="token punctuation">{</span> 
  <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;SEND_EMAIL&quot;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">payload</span><span class="token operator">:</span> data
<span class="token punctuation">}</span>

<span class="token comment">// Action Creators</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sendEamil</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;SEND_EMAIL&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> data<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Reducers</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">emailReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;SEND_EMAIL&quot;</span><span class="token operator">:</span>  
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>state<span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> action<span class="token punctuation">.</span>payload
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u4E09\u3001\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u4E09\u3001\u5982\u4F55\u4F7F\u7528</h2><ol><li>\u521B\u5EFA\u4E00\u4E2A<code>store</code>\u7684\u516C\u5171\u6570\u636E\u533A\u57DF</li><li>\u8FD8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u8BB0\u5F55\u672C\u53BB\u8F85\u52A9\u7BA1\u7406\u6570\u636E\uFF0C\u4E5F\u5C31\u662F<code>reduecer</code>\uFF0C\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570<code>state</code>\uFF0C<code>action</code>\uFF0C\u8FD4\u56DE<code>state</code></li><li>\u7136\u540E\u5C31\u53EF\u4EE5\u5C06\u8BB0\u5F55\u672C\u4F20\u9012\u7ED9<code>store</code>\uFF0C\u4E24\u8005\u5EFA\u7ACB\u8FDE\u63A5\u3002</li><li>\u5982\u679C\u60F3\u8981\u83B7\u53D6<code>store</code>\u91CC\u9762\u7684\u6570\u636E\uFF0C\u5219\u901A\u8FC7<code>store.getState()</code>\u6765\u83B7\u53D6\u5F53\u524D<code>state</code></li><li>\u66F4\u6539<code>store</code>\u91CC\u9762\u6570\u636E\uFF0C\u662F\u901A\u8FC7<code>dispatch</code>\u6765\u6D3E\u53D1<code>action</code>\uFF0C\u901A\u5E38<code>action</code>\u4E2D\u90FD\u4F1A\u6709<code>type</code>\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u643A\u5E26\u5176\u4ED6\u7684\u6570\u636E</li><li>\u8FD9\u6837\u6D3E\u53D1<code>action</code>\u4E4B\u540E\uFF0C\u65E2\u53EF\u4EE5\u901A\u8FC7<code>store.subscribe</code>\u76D1\u542C<code>store</code>\u7684\u53D8\u5316</li></ol><p>\u5728<code>React</code>\u9879\u76EE\u4E2D\uFF0C\u4F1A\u642D\u914D<code>react-redux</code>\u8FDB\u884C\u4F7F\u7528\u3002\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>

<span class="token keyword">function</span> <span class="token function">counterReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;counter/incremented&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> state<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token string">&#39;counter/decremented&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> state<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A store\u3002API: { subscribe, dispatch, getState }.</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counterReducer<span class="token punctuation">)</span>

<span class="token comment">// \u53EF\u4EE5\u5728 subscribe() \u91CC\uFF0C\u66F4\u65B0 UI</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D3E\u53D1 action</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;counter/incremented&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {value: 1}</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;counter/incremented&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {value: 2}</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;counter/decremented&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {value: 1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h3><ul><li><code>createStore</code> \u53EF\u4EE5\u5E2E\u52A9\u521B\u5EFA <code>store</code></li><li><code>store.dispatch</code> \u5E2E\u52A9\u6D3E\u53D1 <code>action</code> , <code>action</code> \u4F1A\u4F20\u9012\u7ED9 store</li><li><code>store.getState</code> \u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5E2E\u52A9\u83B7\u53D6 <code>store</code> \u91CC\u8FB9\u6240\u6709\u7684\u6570\u636E\u5185\u5BB9</li><li><code>store.subscrible</code> \u65B9\u6CD5\u8BA2\u9605 <code>store</code> \u7684\u6539\u53D8\uFF0C\u53EA\u8981 <code>store</code> \u53D1\u751F\u6539\u53D8\uFF0C <code>store.subscrible</code> \u8FD9\u4E2A\u51FD\u6570\u63A5\u6536\u7684\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u5C31\u4F1A\u88AB\u6267\u884C</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,21),y={href:"https://cn.redux.js.org/docs/introduction/",target:"_blank",rel:"noopener noreferrer"},_=s("https://cn.redux.js.org/docs/introduction/"),x={href:"https://www.redux.org.cn/docs/basics/Actions.html",target:"_blank",rel:"noopener noreferrer"},g=s("https://www.redux.org.cn/docs/basics/Actions.html"),f={href:"https://lulujianglab.com/posts/",target:"_blank",rel:"noopener noreferrer"},w=s("https://lulujianglab.com/posts/"),v=s("\u5927\u767D\u8BDD\u89E3\u6790 Redux \u3001 redux-thunk \u3001redux-saga \u548C react-redux");function R(j,A){const a=p("ExternalLinkIcon");return o(),c(r,null,[i,n("ul",null,[n("li",null,[n("a",d,[k,e(a)])]),n("li",null,[n("a",b,[m,e(a)])])]),h,n("ul",null,[n("li",null,[n("a",y,[_,e(a)])]),n("li",null,[n("a",x,[g,e(a)])]),n("li",null,[n("a",f,[w,e(a)]),v])])],64)}var E=t(u,[["render",R],["__file","redux.html.vue"]]);export{E as default};
