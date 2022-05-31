import{_ as n,c as s}from"./app.a7f79250.js";const a={},p=s(`<h1 id="\u9632\u6296\u548C\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296\u548C\u8282\u6D41" aria-hidden="true">#</a> \u9632\u6296\u548C\u8282\u6D41</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u672C\u8D28\u4E0A\u662F\u4F18\u5316\u9AD8\u9891\u7387\u6267\u884C\u4EE3\u7801\u7684\u4E00\u79CD\u624B\u6BB5</p><p>\u5982\uFF1A\u6D4F\u89C8\u5668\u7684 <code>resize</code>\u3001<code>scroll</code>\u3001<code>keypress</code>\u3001<code>mousemove</code> \u7B49\u4E8B\u4EF6\u5728\u89E6\u53D1\u65F6\uFF0C\u4F1A\u4E0D\u65AD\u5730\u8C03\u7528\u7ED1\u5B9A\u5728\u4E8B\u4EF6\u4E0A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6781\u5927\u5730\u6D6A\u8D39\u8D44\u6E90\uFF0C\u964D\u4F4E\u524D\u7AEF\u6027\u80FD</p><p>\u4E3A\u4E86\u4F18\u5316\u4F53\u9A8C\uFF0C\u9700\u8981\u5BF9\u8FD9\u7C7B\u4E8B\u4EF6\u8FDB\u884C\u8C03\u7528\u6B21\u6570\u7684\u9650\u5236\uFF0C\u5BF9\u6B64\u6211\u4EEC\u5C31\u53EF\u4EE5\u91C7\u7528<code>throttle</code>\uFF08\u8282\u6D41\uFF09\u548C<code>debounce</code>\uFF08\u9632\u6296\uFF09\u7684\u65B9\u5F0F\u6765\u51CF\u5C11\u8C03\u7528\u9891\u7387</p><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><ul><li>\u9632\u6296: \u89E6\u53D1\u9AD8\u9891\u4E8B\u4EF6\u540E n \u79D2\u540E\u51FD\u6570\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u82E5\u5728 n \u79D2\u5185\u88AB\u91CD\u590D\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6</li><li>\u8282\u6D41: \u9AD8\u9891\u4E8B\u4EF6\u89E6\u53D1\uFF0Cn \u79D2\u5185\u53EA\u8FD0\u884C\u4E00\u6B21\uFF0C\u82E5\u5728 n \u79D2\u5185\u91CD\u590D\u89E6\u53D1\uFF0C\u53EA\u6709\u7B2C\u4E00\u6B21\u751F\u6548\uFF0C\u6240\u4EE5\u8282\u6D41\u4F1A\u7A00\u91CA\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\u3002</li></ul><p>\u4E00\u4E2A\u7ECF\u5178\u7684\u6BD4\u55BB:</p><p>\u60F3\u8C61\u6BCF\u5929\u4E0A\u73ED\u5927\u53A6\u5E95\u4E0B\u7684\u7535\u68AF\u3002\u628A\u7535\u68AF\u5B8C\u6210\u4E00\u6B21\u8FD0\u9001\uFF0C\u7C7B\u6BD4\u4E3A\u4E00\u6B21\u51FD\u6570\u7684\u6267\u884C\u548C\u54CD\u5E94</p><p>\u5047\u8BBE\u7535\u68AF\u6709\u4E24\u79CD\u8FD0\u884C\u7B56\u7565 <code>debounce</code> \u548C <code>throttle</code>\uFF0C\u8D85\u65F6\u8BBE\u5B9A\u4E3A15\u79D2\uFF0C\u4E0D\u8003\u8651\u5BB9\u91CF\u9650\u5236</p><p>\u7535\u68AF\u7B2C\u4E00\u4E2A\u4EBA\u8FDB\u6765\u540E\uFF0C15\u79D2\u540E\u51C6\u65F6\u8FD0\u9001\u4E00\u6B21\uFF0C\u8FD9\u662F\u8282\u6D41</p><p>\u7535\u68AF\u7B2C\u4E00\u4E2A\u4EBA\u8FDB\u6765\u540E\uFF0C\u7B49\u5F8515\u79D2\u3002\u5982\u679C\u8FC7\u7A0B\u4E2D\u53C8\u6709\u4EBA\u8FDB\u6765\uFF0C15\u79D2\u7B49\u5F85\u91CD\u65B0\u8BA1\u65F6\uFF0C\u76F4\u523015\u79D2\u540E\u5F00\u59CB\u8FD0\u9001\uFF0C\u8FD9\u662F\u9632\u6296</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><h3 id="\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41" aria-hidden="true">#</a> \u8282\u6D41</h3><p>\u5B8C\u6210\u8282\u6D41\u53EF\u4EE5\u4F7F\u7528\u65F6\u95F4\u6233\u4E0E\u5B9A\u65F6\u5668\u7684\u5199\u6CD5</p><p>\u4F7F\u7528\u65F6\u95F4\u6233\u5199\u6CD5\uFF0C\u4E8B\u4EF6\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u505C\u6B62\u89E6\u53D1\u540E\u6CA1\u6709\u529E\u6CD5\u518D\u6B21\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttled1</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> oldtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newtime <span class="token operator">-</span> oldtime <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            oldtime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F7F\u7528\u5B9A\u65F6\u5668\u5199\u6CD5\uFF0C<code>delay</code>\u6BEB\u79D2\u540E\u7B2C\u4E00\u6B21\u6267\u884C\uFF0C\u7B2C\u4E8C\u6B21\u4E8B\u4EF6\u505C\u6B62\u89E6\u53D1\u540E\u4F9D\u7136\u4F1A\u518D\u4E00\u6B21\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttled2</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
                timer <span class="token operator">=</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53EF\u4EE5\u5C06\u65F6\u95F4\u6233\u5199\u6CD5\u7684\u7279\u6027\u4E0E\u5B9A\u65F6\u5668\u5199\u6CD5\u7684\u7279\u6027\u76F8\u7ED3\u5408\uFF0C\u5B9E\u73B0\u4E00\u4E2A\u66F4\u52A0\u7CBE\u786E\u7684\u8282\u6D41\u3002\u5B9E\u73B0\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttled</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> starttime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> curTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5F53\u524D\u65F6\u95F4</span>
        <span class="token keyword">let</span> remaining <span class="token operator">=</span> delay <span class="token operator">-</span> <span class="token punctuation">(</span>curTime <span class="token operator">-</span> starttime<span class="token punctuation">)</span>  <span class="token comment">// \u4ECE\u4E0A\u4E00\u6B21\u5230\u73B0\u5728\uFF0C\u8FD8\u5269\u4E0B\u591A\u5C11\u591A\u4F59\u65F6\u95F4</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            starttime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u9632\u6296" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a> \u9632\u6296</h3><p>\u7B80\u5355\u7248\u672C\u7684\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timeout<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u5B58this\u6307\u5411</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span> <span class="token comment">// \u62FF\u5230event\u5BF9\u8C61</span>

        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9632\u6296\u5982\u679C\u9700\u8981\u7ACB\u5373\u6267\u884C\uFF0C\u53EF\u52A0\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570\u7528\u4E8E\u5224\u65AD\uFF0C\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> timeout<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// timeout \u4E0D\u4E3Anull</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span> <span class="token comment">// \u7B2C\u4E00\u6B21\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u4EE5\u540E\u53EA\u6709\u4E8B\u4EF6\u6267\u884C\u540E\u624D\u4F1A\u518D\u6B21\u89E6\u53D1</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u4E8C\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u533A\u522B</h2><p>\u76F8\u540C\u70B9\uFF1A</p><ul><li>\u90FD\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>setTimeout</code> \u5B9E\u73B0</li><li>\u76EE\u7684\u90FD\u662F\uFF0C\u964D\u4F4E\u56DE\u8C03\u6267\u884C\u9891\u7387\u3002\u8282\u7701\u8BA1\u7B97\u8D44\u6E90</li></ul><p>\u4E0D\u540C\u70B9\uFF1A</p><ul><li>\u51FD\u6570\u9632\u6296\uFF0C\u5728\u4E00\u6BB5\u8FDE\u7EED\u64CD\u4F5C\u7ED3\u675F\u540E\uFF0C\u5904\u7406\u56DE\u8C03\uFF0C\u5229\u7528<code>clearTimeout</code>\u548C <code>setTimeout</code>\u5B9E\u73B0\u3002\u51FD\u6570\u8282\u6D41\uFF0C\u5728\u4E00\u6BB5\u8FDE\u7EED\u64CD\u4F5C\u4E2D\uFF0C\u6BCF\u4E00\u6BB5\u65F6\u95F4\u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u9891\u7387\u8F83\u9AD8\u7684\u4E8B\u4EF6\u4E2D\u4F7F\u7528\u6765\u63D0\u9AD8\u6027\u80FD</li><li>\u51FD\u6570\u9632\u6296\u5173\u6CE8\u4E00\u5B9A\u65F6\u95F4\u8FDE\u7EED\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u53EA\u5728\u6700\u540E\u6267\u884C\u4E00\u6B21\uFF0C\u800C\u51FD\u6570\u8282\u6D41\u4E00\u6BB5\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21</li></ul><p>\u4F8B\u5982\uFF0C\u90FD\u8BBE\u7F6E\u65F6\u95F4\u9891\u7387\u4E3A500ms\uFF0C\u57282\u79D2\u65F6\u95F4\u5185\uFF0C\u9891\u7E41\u89E6\u53D1\u51FD\u6570\uFF0C\u8282\u6D41\uFF0C\u6BCF\u9694 500ms \u5C31\u6267\u884C\u4E00\u6B21\u3002\u9632\u6296\uFF0C\u5219\u4E0D\u7BA1\u8C03\u52A8\u591A\u5C11\u6B21\u65B9\u6CD5\uFF0C\u57282s\u540E\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u6B21</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/a2c81b50-8787-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u9632\u6296\u5728\u8FDE\u7EED\u7684\u4E8B\u4EF6\uFF0C\u53EA\u9700\u89E6\u53D1\u4E00\u6B21\u56DE\u8C03\u7684\u573A\u666F\u6709\uFF1A</p><ul><li>\u641C\u7D22\u6846\u641C\u7D22\u8F93\u5165\u3002\u53EA\u9700\u7528\u6237\u6700\u540E\u4E00\u6B21\u8F93\u5165\u5B8C\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42</li><li>\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u9A8C\u8BC1\u8F93\u5165\u68C0\u6D4B</li><li>\u7A97\u53E3\u5927\u5C0F<code>resize</code>\u3002\u53EA\u9700\u7A97\u53E3\u8C03\u6574\u5B8C\u6210\u540E\uFF0C\u8BA1\u7B97\u7A97\u53E3\u5927\u5C0F\u3002\u9632\u6B62\u91CD\u590D\u6E32\u67D3\u3002</li></ul><p>\u8282\u6D41\u5728\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u7684\u573A\u666F\u6709\uFF1A</p><ul><li>\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u66F4\u591A\u6216\u6EDA\u5230\u5E95\u90E8\u76D1\u542C</li><li>\u641C\u7D22\u6846\uFF0C\u641C\u7D22\u8054\u60F3\u529F\u80FD</li></ul>`,39);function t(e,o){return p}var l=n(a,[["render",t],["__file","debounce_throttle.html.vue"]]);export{l as default};
