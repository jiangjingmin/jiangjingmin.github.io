import{_ as n,e as s}from"./app.6e1280c8.js";const a={},p=s(`<h1 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h1><ul><li><p>[ ] \u57FA\u672C\u6982\u5FF5\uFF1A<code>DOM</code>\u4E8B\u4EF6\u7684\u7EA7\u522B</p><blockquote><p>\u9762\u8BD5\u4E0D\u4F1A\u76F4\u63A5\u95EE\u4F60\uFF0CDOM \u6709\u51E0\u4E2A\u7EA7\u522B\u3002\u4F46\u4F1A\u5728\u9898\u76EE\u4E2D\u4F53\u73B0\uFF1A\u201C\u8BF7\u7528<code>DOM2</code> ....\u201D\u3002</p></blockquote></li><li><p>[ ] <code>DOM</code>\u4E8B\u4EF6\u6A21\u578B\u3001<code>DOM</code>\u4E8B\u4EF6\u6D41</p><blockquote><p>\u9762\u8BD5\u5B98\u5982\u679C\u95EE\u4F60\u201C<strong>DOM \u4E8B\u4EF6\u6A21\u578B</strong>\u201D\uFF0C\u4F60\u4E0D\u4E00\u5B9A\u77E5\u9053\u600E\u4E48\u56DE\u4E8B\u3002\u5176\u5B9E\u8BF4\u7684\u5C31\u662F <strong>\u6355\u83B7\u548C\u5192\u6CE1</strong>\u3002</p><p><strong>DOM \u4E8B\u4EF6\u6D41</strong>\uFF0C\u6307\u7684\u662F\u4E8B\u4EF6\u4F20\u9012\u7684<strong>\u4E09\u4E2A\u9636\u6BB5</strong>\u3002</p></blockquote></li><li><p>[ ] \u63CF\u8FF0<code>DOM</code>\u4E8B\u4EF6\u6355\u83B7\u7684\u5177\u4F53\u6D41\u7A0B</p><blockquote><p>\u8BB2\u7684\u662F\u4E8B\u4EF6\u7684\u4F20\u9012\u987A\u5E8F\u3002\u53C2\u6570\u4E3A<code>false</code>\uFF08\u9ED8\u8BA4\uFF09\u3001\u53C2\u6570\u4E3A<code>true</code>\uFF0C\u5404\u81EA\u4EE3\u8868\u4E8B\u4EF6\u5728\u4EC0\u4E48\u9636\u6BB5\u89E6\u53D1\u3002</p><p>\u80FD\u56DE\u7B54\u51FA\u6765\u7684\u4EBA\uFF0C\u5BE5\u5BE5\u65E0\u51E0\u3002\u4E5F\u8BB8\u6709\u4E9B\u4EBA\u53EF\u4EE5\u8BF4\u51FA\u4E00\u5927\u534A\uFF0C\u4F46\u662F\u4E00\u5B57\u4E0D\u843D\u7684\u4EBA\uFF0C\u6781\u5C11\u3002</p></blockquote></li><li><p>[ ] <code>Event</code>\u5BF9\u8C61\u7684\u5E38\u89C1\u5E94\u7528\uFF08<code>Event</code>\u7684\u5E38\u7528<code>api</code>\u65B9\u6CD5\uFF09</p><blockquote><p><code>DOM</code>\u4E8B\u4EF6\u7684\u77E5\u8BC6\u70B9</p><p>\u4E00\u65B9\u9762\u5305\u62EC\u4E8B\u4EF6\u7684\u6D41\u7A0B\uFF1B</p><p>\u53E6\u4E00\u65B9\u9762\u5C31\u662F\uFF1A\u600E\u4E48\u53BB\u6CE8\u518C\u4E8B\u4EF6\uFF0C\u4E5F\u5C31\u662F\u76D1\u542C\u7528\u6237\u7684\u4EA4\u4E92\u884C\u4E3A\uFF1B</p><p>\u7B2C\u4E09\u70B9\uFF1A\u5728\u54CD\u5E94\u65F6\uFF0C<code>Event</code>\u5BF9\u8C61\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002</p></blockquote></li><li><p>[ ] <strong>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF08\u975E\u5E38\u91CD\u8981\uFF09</strong></p><blockquote><p>\u4E00\u822C\u4EBA\u53EF\u4EE5\u8BB2\u51FA\u4E8B\u4EF6\u548C\u6CE8\u518C\u4E8B\u4EF6\uFF0C\u4F46\u662F\u5982\u679C\u8BA9\u4F60\u8BB2<strong>\u81EA\u5B9A\u4E49\u4E8B\u4EF6</strong>\uFF0C\u80FD\u77E5\u9053\u7684\u4EBA\uFF0C\u5C31\u66F4\u5C11\u4E86\u3002</p></blockquote></li></ul><h2 id="\u4E00\u3001dom-\u4E8B\u4EF6\u7684\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001dom-\u4E8B\u4EF6\u7684\u7EA7\u522B" aria-hidden="true">#</a> \u4E00\u3001DOM \u4E8B\u4EF6\u7684\u7EA7\u522B</h2><p><code>DOM</code>\u4E8B\u4EF6\u7684\u7EA7\u522B\uFF0C\u51C6\u786E\u6765\u8BF4\uFF0C\u662F<strong>DOM \u6807\u51C6</strong>\u5B9A\u4E49\u7684\u7EA7\u522B\u3002\u5305\u62EC\uFF1A</p><p><strong>DOM0 \u7684\u5199\u6CD5\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u662F\u5728 <code>js</code> \u4E2D\u7684\u5199\u6CD5\uFF1B\u5982\u679C\u8981\u5728<code>html</code>\u4E2D\u5199\uFF0C\u5199\u6CD5\u662F\uFF1A\u5728<code>onclick</code>\u5C5E\u6027\u4E2D\uFF0C\u52A0 <code>js</code> \u8BED\u53E5\u3002</p><p><strong>DOM2 \u7684\u5199\u6CD5\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u3010\u91CD\u8981\u3011\u4E0A\u9762\u7684\u7B2C\u4E09\u53C2\u6570\u4E2D\uFF0C<strong>true</strong>\u8868\u793A\u4E8B\u4EF6\u5728<strong>\u6355\u83B7\u9636\u6BB5</strong>\u89E6\u53D1\uFF0C<strong>false</strong>\u8868\u793A\u4E8B\u4EF6\u5728<strong>\u5192\u6CE1\u9636\u6BB5</strong>\u89E6\u53D1\uFF08\u9ED8\u8BA4\uFF09\u3002\u5982\u679C\u4E0D\u5199\uFF0C\u5219\u9ED8\u8BA4\u4E3A false\u3002</p><p><strong>DOM3 \u7684\u5199\u6CD5\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>DOM3</code>\u4E2D\uFF0C\u589E\u52A0\u4E86\u5F88\u591A\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u6BD4\u5982\u9F20\u6807\u4E8B\u4EF6\u3001\u952E\u76D8\u4E8B\u4EF6\u7B49\u3002</p><blockquote><p>PS\uFF1A\u4E3A\u4F55\u4E8B\u4EF6\u6CA1\u6709<code>DOM1</code>\u7684\u5199\u6CD5\u5462\uFF1F\u56E0\u4E3A\uFF0C<code>DOM1</code>\u6807\u51C6\u5236\u5B9A\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u6D89\u53CA\u4E0E\u4E8B\u4EF6\u76F8\u5173\u7684\u5185\u5BB9\u3002</p></blockquote><p><strong>\u603B\u7ED3</strong>\uFF1A\u5173\u4E8E\u201CDOM \u4E8B\u4EF6\u7684\u7EA7\u522B\u201D\uFF0C\u80FD\u56DE\u7B54\u51FA\u4EE5\u4E0A\u5185\u5BB9\u5373\u53EF\uFF0C\u4E0D\u4F1A\u51FA\u9898\u76EE\u8BA9\u4F60\u505A\u3002</p><h2 id="\u4E8C\u3001dom-\u4E8B\u4EF6\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001dom-\u4E8B\u4EF6\u6A21\u578B" aria-hidden="true">#</a> \u4E8C\u3001DOM \u4E8B\u4EF6\u6A21\u578B</h2><p><code>DOM</code>\u4E8B\u4EF6\u6A21\u578B\u8BB2\u7684\u5C31\u662F<strong>\u6355\u83B7\u548C\u5192\u6CE1</strong>\uFF0C\u4E00\u822C\u4EBA\u90FD\u80FD\u56DE\u7B54\u51FA\u6765\u3002</p><ul><li>\u6355\u83B7\uFF1A\u4ECE\u4E0A\u5F80\u4E0B\u3002</li><li>\u5192\u6CE1\uFF1A\u4ECE\u4E0B\uFF08\u76EE\u6807\u5143\u7D20\uFF09\u5F80\u4E0A\u3002</li></ul><h2 id="\u4E09\u3001dom-\u4E8B\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001dom-\u4E8B\u4EF6\u6D41" aria-hidden="true">#</a> \u4E09\u3001DOM \u4E8B\u4EF6\u6D41</h2><p><code>DOM</code>\u4E8B\u4EF6\u6D41\u8BB2\u7684\u5C31\u662F\uFF1A\u6D4F\u89C8\u5668\u5728\u4E0E\u5F53\u524D\u9875\u9762\u505A\u4EA4\u4E92\u65F6\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u662F\u600E\u4E48\u4F20\u9012\u5230\u9875\u9762\u4E0A\u7684\u3002</p><p>\u5B8C\u6574\u7684\u4E8B\u4EF6\u6D41\uFF0C\u5206\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ol><li>\u6355\u83B7\uFF1A\u4ECE <code>window</code> \u5BF9\u8C61\u4F20\u5230 \u76EE\u6807\u5143\u7D20\u3002</li><li>\u76EE\u6807\u9636\u6BB5\uFF1A\u4E8B\u4EF6\u901A\u8FC7\u6355\u83B7\uFF0C\u5230\u8FBE\u76EE\u6807\u5143\u7D20\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u5C31\u662F\u76EE\u6807\u9636\u6BB5\u3002</li><li>\u5192\u6CE1\uFF1A\u4ECE<strong>\u76EE\u6807\u5143\u7D20</strong>\u4F20\u5230 <code>Window</code> \u5BF9\u8C61\u3002</li></ol><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1058.png" alt="20180306_1058"></p><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180204_1218.jpg" alt="20180204_1218"></p><h2 id="\u56DB\u3001\u63CF\u8FF0-dom-\u4E8B\u4EF6\u6355\u83B7\u7684\u5177\u4F53\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u63CF\u8FF0-dom-\u4E8B\u4EF6\u6355\u83B7\u7684\u5177\u4F53\u6D41\u7A0B" aria-hidden="true">#</a> \u56DB\u3001\u63CF\u8FF0 DOM \u4E8B\u4EF6\u6355\u83B7\u7684\u5177\u4F53\u6D41\u7A0B</h2><p>\u5F88\u5C11\u6709\u4EBA\u80FD\u8BF4\u5B8C\u6574\u3002</p><h3 id="_4-1-\u6355\u83B7\u7684\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6355\u83B7\u7684\u6D41\u7A0B" aria-hidden="true">#</a> 4.1 \u6355\u83B7\u7684\u6D41\u7A0B</h3><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1103.png" alt="20180306_1103"></p><p><strong>\u8BF4\u660E</strong>\uFF1A\u6355\u83B7\u9636\u6BB5\uFF0C\u4E8B\u4EF6\u4F9D\u6B21\u4F20\u9012\u7684\u987A\u5E8F\u662F\uFF1A<code>window</code> --&gt; <code>document</code> --&gt; <code>html</code>--&gt; <code>body</code> --&gt; \u7236\u5143\u7D20\u3001\u5B50\u5143\u7D20\u3001\u76EE\u6807\u5143\u7D20\u3002</p><ul><li>PS1\uFF1A\u7B2C\u4E00\u4E2A\u63A5\u6536\u5230\u4E8B\u4EF6\u7684\u5BF9\u8C61\u662F <strong>window</strong>\uFF08\u6709\u4EBA\u4F1A\u8BF4<code>body</code>\uFF0C\u6709\u4EBA\u4F1A\u8BF4<code>html</code>\uFF0C\u8FD9\u90FD\u662F\u9519\u8BEF\u7684\uFF09\u3002</li><li>PS2\uFF1A<code>JS</code>\u4E2D\u6D89\u53CA\u5230<code>DOM</code>\u5BF9\u8C61\u65F6\uFF0C\u6709\u4E24\u4E2A\u5BF9\u8C61\u6700\u5E38\u7528\uFF1A<code>window</code>\u3001<code>doucument</code>\u3002\u5B83\u4EEC\u4FE9\u4E5F\u662F\u6700\u5148\u83B7\u53D6\u5230\u4E8B\u4EF6\u7684\u3002</li></ul><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 window&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 document&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

fatherBox<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 father&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

childBox<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7 child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p><strong>\u8865\u5145\u4E00\u4E2A\u77E5\u8BC6\u70B9\uFF1A</strong></p><p>\u5728 <code>js</code>\u4E2D\uFF1A</p><ul><li>\u5982\u679C\u60F3\u83B7\u53D6 <code>body</code> \u8282\u70B9\uFF0C\u65B9\u6CD5\u662F\uFF1A<code>document.body</code>\uFF1B</li><li>\u4F46\u662F\uFF0C\u5982\u679C\u60F3\u83B7\u53D6 <code>html</code>\u8282\u70B9\uFF0C\u65B9\u6CD5\u662F<code>document.documentElement</code>\u3002</li></ul><h2 id="_4-2-\u5192\u6CE1\u7684\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5192\u6CE1\u7684\u6D41\u7A0B" aria-hidden="true">#</a> 4.2 \u5192\u6CE1\u7684\u6D41\u7A0B</h2><p>\u4E0E\u6355\u83B7\u7684\u6D41\u7A0B\u76F8\u53CD</p><h2 id="\u4E94\u3001event-\u5BF9\u8C61\u7684\u5E38\u89C1-api-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001event-\u5BF9\u8C61\u7684\u5E38\u89C1-api-\u65B9\u6CD5" aria-hidden="true">#</a> \u4E94\u3001Event \u5BF9\u8C61\u7684\u5E38\u89C1 api \u65B9\u6CD5</h2><p>\u7528\u6237\u505A\u7684\u662F\u4EC0\u4E48\u64CD\u4F5C\uFF08\u6BD4\u5982\uFF0C\u662F\u6572\u952E\u76D8\u4E86\uFF0C\u8FD8\u662F\u70B9\u51FB\u9F20\u6807\u4E86\uFF09\uFF0C\u8FD9\u4E9B\u4E8B\u4EF6\u57FA\u672C\u90FD\u662F\u901A\u8FC7<code>Event</code>\u5BF9\u8C61\u62FF\u5230\u7684\u3002\u8FD9\u4E9B\u90FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u5C31\u4E0D\u8BB2\u4E86\u3002\u6211\u4EEC\u6765\u770B\u770B\u4E0B\u9762\u8FD9\u51E0\u4E2A\u65B9\u6CD5\uFF1A</p><p><strong>\u65B9\u6CD5\u4E00</strong>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u89E3\u91CA\uFF1A\u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6\u3002</li><li>\u6BD4\u5982\uFF0C\u5DF2\u77E5<code>&lt;a&gt;</code>\u6807\u7B7E\u7ED1\u5B9A\u4E86 click \u4E8B\u4EF6\uFF0C\u6B64\u65F6\uFF0C\u5982\u679C\u7ED9<code>&lt;a&gt;</code>\u8BBE\u7F6E\u4E86\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5C31\u963B\u6B62\u4E86\u94FE\u63A5\u7684\u9ED8\u8BA4\u8DF3\u8F6C\u3002</li></ul><p><strong>\u65B9\u6CD5\u4E8C</strong>\uFF1A\u963B\u6B62\u5192\u6CE1</p><p>\u8FD9\u4E2A\u5728\u4E1A\u52A1\u4E2D\u5F88\u5E38\u89C1\u3002</p><p>\u6709\u7684\u65F6\u5019\uFF0C\u4E1A\u52A1\u4E2D\u4E0D\u9700\u8981\u4E8B\u4EF6\u8FDB\u884C\u5192\u6CE1\u3002\u6BD4\u5982\u8BF4\uFF0C\u4E1A\u52A1\u8FD9\u6837\u8981\u6C42\uFF1A\u5355\u51FB\u5B50\u5143\u7D20\u505A\u4E8B\u4EF6<code>A</code>\uFF0C\u5355\u51FB\u7236\u5143\u7D20\u505A\u4E8B\u4EF6 B\uFF0C\u5982\u679C\u4E0D\u963B\u6B62\u5192\u6CE1\u7684\u8BDD\uFF0C\u51FA\u73B0\u7684\u95EE\u9898\u662F\uFF1A\u5355\u51FB\u5B50\u5143\u7D20\u65F6\uFF0C\u5B50\u5143\u7D20\u548C\u7236\u5143\u7D20\u90FD\u4F1A\u505A\u4E8B\u4EF6<code>A</code>\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u5C31\u8981\u7528\u5230\u963B\u6B62\u5192\u6CE1\u4E86\u3002</p><blockquote><p><code>w3c</code>\u7684\u65B9\u6CD5\uFF1A\uFF08\u706B\u72D0\u3001\u8C37\u6B4C\u3001<code>IE11</code>\uFF09</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// /\u02CCpr\u0251\u02D0p\u0259\u02C8\u0261e\u026A\u0283n/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><code>IE10</code>\u4EE5\u4E0B\u5219\u662F\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u517C\u5BB9\u4EE3\u7801\u5982\u4E0B\uFF1A</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>box3<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u963B\u6B62\u5192\u6CE1</span>
  event <span class="token operator">=</span> event <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>stopPropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>cancelBubble <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u4E0A\u65B9\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5BF9<code>box3</code>\u8FDB\u884C\u4E86\u963B\u6B62\u5192\u6CE1\uFF0C\u4EA7\u751F\u7684\u6548\u679C\u662F\uFF1A\u4E8B\u4EF6\u4E0D\u4F1A\u7EE7\u7EED\u4F20\u9012\u5230 <code>father</code>\u3001<code>grandfather</code>\u3001<code>body</code>\u4E86\u3002</p></blockquote><p><strong>\u65B9\u6CD5\u4E09</strong>\uFF1A\u8BBE\u7F6E\u4E8B\u4EF6\u4F18\u5148\u7EA7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u5E76\u4E14\u963B\u6B62\u8BE5\u5143\u7D20\u4E0A\u540C\u4E8B\u4EF6\u7C7B\u578B\u7684\u76D1\u542C\u5668\u88AB\u89E6\u53D1</span>
<span class="token comment">// /\u026A\u02C8mi\u02D0di\u0259t/ \u56E0\u7C73\u8FEA\u5C14\u7279 \uFF08\u7ACB\u5373\u7684\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u6BD4\u8F83\u957F\uFF0C\u4E00\u822C\u4EBA\u6CA1\u542C\u8BF4\u8FC7\u3002\u89E3\u91CA\u5982\u4E0B\uFF1A</p><p>\u6BD4\u5982\u8BF4\uFF0C\u6211\u7528<code>addEventListener</code>\u7ED9\u67D0\u6309\u94AE\u540C\u65F6\u6CE8\u518C\u4E86\u4E8B\u4EF6<code>A</code>\u3001\u4E8B\u4EF6<code>B</code>\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u6211\u5355\u51FB\u6309\u94AE\uFF0C\u5C31\u4F1A\u4F9D\u6B21\u6267\u884C\u4E8B\u4EF6 A \u548C\u4E8B\u4EF6<code>B</code>\u3002\u73B0\u5728\u8981\u6C42\uFF1A\u5355\u51FB\u6309\u94AE\u65F6\uFF0C\u53EA\u6267\u884C\u4E8B\u4EF6 A\uFF0C\u4E0D\u6267\u884C\u4E8B\u4EF6<code>B</code>\u3002\u8BE5\u600E\u4E48\u505A\u5462\uFF1F\u8FD9\u662F\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u7528\u5230<code>stopImmediatePropagation</code>\u65B9\u6CD5\u4E86\u3002\u505A\u6CD5\u662F\uFF1A\u5728\u4E8B\u4EF6 A \u7684\u54CD\u5E94\u51FD\u6570\u4E2D\u52A0\u5165\u8FD9\u53E5\u8BDD\u3002</p><blockquote><p>\u5927\u5BB6\u8981\u8BB0\u4F4F <code>event</code> \u6709\u8FD9\u4E2A\u65B9\u6CD5\u3002</p></blockquote><p><strong>\u5C5E\u6027 4\u3001\u5C5E\u6027 5\uFF08\u4E8B\u4EF6\u59D4\u6258\u4E2D\u7528\u5230\uFF09</strong>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u6240\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u5BF9\u8C61\u3002\u5728\u4E8B\u4EF6\u59D4\u6258\u4E2D\uFF0C\u6307\u7684\u662F\u3010\u7236\u5143\u7D20\u3011\u3002</span>
event<span class="token punctuation">.</span>target<span class="token punctuation">;</span> <span class="token comment">// \u5F53\u524D\u88AB\u70B9\u51FB\u7684\u5143\u7D20\u3002\u5728\u4E8B\u4EF6\u59D4\u6258\u4E2D\uFF0C\u6307\u7684\u662F\u3010\u5B50\u5143\u7D20\u3011\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u5728\u4E8B\u4EF6\u59D4\u6258\u4E2D\u7ECF\u5E38\u7528\u5230\u3002</p><blockquote><p><strong>\u603B\u7ED3</strong>\uFF1A\u4E0A\u9762\u8FD9\u51E0\u9879\uFF0C\u975E\u5E38\u91CD\u8981\uFF0C\u4F46\u662F\u5BB9\u6613\u5F04\u6DF7\u6DC6\u3002</p></blockquote><h2 id="\u516D\u3001\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u516D\u3001\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h2><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;clickTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;clickTest&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;smyhvae&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5143\u7D20\u6CE8\u518C\u4E8B\u4EF6</span>
element<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>myEvent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6CE8\u610F\uFF0C\u53C2\u6570\u662F\u5199\u4E8B\u4EF6\u5BF9\u8C61 myEvent\uFF0C\u4E0D\u662F\u5199 \u4E8B\u4EF6\u540D clickTest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u8FD9\u4E2A\u4E8B\u4EF6\u662F\u5B9A\u4E49\u5B8C\u4E86\u4E4B\u540E\uFF0C\u5C31\u76F4\u63A5\u81EA\u52A8\u89E6\u53D1\u4E86\u3002\u5728\u6B63\u5E38\u7684\u4E1A\u52A1\u4E2D\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u4E00\u822C\u662F\u548C\u522B\u7684\u4E8B\u4EF6\u7ED3\u5408\u7528\u7684\u3002\u6BD4\u5982\u5EF6\u65F6\u5668\u8BBE\u7F6E\u6309\u94AE\u7684\u52A8\u4F5C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;clickTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;clickTest&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;smyhvae&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>myEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,66);function t(e,o){return p}var l=n(a,[["render",t],["__file","DOM\u4E8B\u4EF6\u7684\u603B\u7ED3.html.vue"]]);export{l as default};
