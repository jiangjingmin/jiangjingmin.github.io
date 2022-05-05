import{_ as e,c}from"./app.f060585c.js";const d={},i=c(`<h1 id="\u8BF4\u8BF4\u5BF9git-pull-\u548C-git-fetch-\u7684\u7406\u89E3-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u5BF9git-pull-\u548C-git-fetch-\u7684\u7406\u89E3-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u8BF4\u8BF4\u5BF9git pull \u548C git fetch \u7684\u7406\u89E3\uFF1F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h1><p><img src="https://static.vue-js.com/cc90c050-fac2-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5148\u56DE\u987E\u4E24\u4E2A\u547D\u4EE4\u7684\u5B9A\u4E49</p><ul><li>git fetch \u547D\u4EE4\u7528\u4E8E\u4ECE\u53E6\u4E00\u4E2A\u5B58\u50A8\u5E93\u4E0B\u8F7D\u5BF9\u8C61\u548C\u5F15\u7528</li><li>git pull \u547D\u4EE4\u7528\u4E8E\u4ECE\u53E6\u4E00\u4E2A\u5B58\u50A8\u5E93\u6216\u672C\u5730\u5206\u652F\u83B7\u53D6\u5E76\u96C6\u6210(\u6574\u5408)</li></ul><p>\u518D\u6765\u770B\u4E00\u6B21<code>git</code>\u7684\u5DE5\u4F5C\u6D41\u7A0B\u56FE\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/d523ba60-fac2-11eb-991d-334fd31f0201.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>git fetch</code>\u662F\u5C06\u8FDC\u7A0B\u4E3B\u673A\u7684\u6700\u65B0\u5185\u5BB9\u62C9\u5230\u672C\u5730\uFF0C\u7528\u6237\u5728\u68C0\u67E5\u4E86\u4EE5\u540E\u51B3\u5B9A\u662F\u5426\u5408\u5E76\u5230\u5DE5\u4F5C\u672C\u673A\u5206\u652F\u4E2D</p><p>\u800C<code>git pull</code> \u5219\u662F\u5C06\u8FDC\u7A0B\u4E3B\u673A\u7684\u6700\u65B0\u5185\u5BB9\u62C9\u4E0B\u6765\u540E\u76F4\u63A5\u5408\u5E76\uFF0C\u5373\uFF1A<code>git pull = git fetch + git merge</code>\uFF0C\u8FD9\u6837\u53EF\u80FD\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF0C\u9700\u8981\u624B\u52A8\u89E3\u51B3</p><p>\u5728\u6211\u4EEC\u672C\u5730\u7684<code>git</code>\u6587\u4EF6\u4E2D\u5BF9\u5E94\u4E5F\u5B58\u50A8\u4E86<code>git</code>\u672C\u5730\u4ED3\u5E93\u5206\u652F\u7684<code>commit ID </code>\u548C \u8DDF\u8E2A\u7684\u8FDC\u7A0B\u5206\u652F\u7684<code>commit ID</code>\uFF0C\u5BF9\u5E94\u6587\u4EF6\u5982\u4E0B\uFF1A</p><ul><li>.git/refs/head/[\u672C\u5730\u5206\u652F]</li><li>.git/refs/remotes/[\u6B63\u5728\u8DDF\u8E2A\u7684\u5206\u652F]</li></ul><p>\u4F7F\u7528 <code>git fetch</code>\u66F4\u65B0\u4EE3\u7801\uFF0C\u672C\u5730\u7684\u5E93\u4E2D<code>master</code>\u7684<code>commitID</code>\u4E0D\u53D8</p><p>\u4F46\u662F\u4E0E<code>git</code>\u4E0A\u9762\u5173\u8054\u7684\u90A3\u4E2A<code>orign/master</code>\u7684<code>commit ID</code>\u53D1\u751F\u6539\u53D8</p><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u672C\u5730\u76F8\u5F53\u4E8E\u5B58\u50A8\u4E86\u4E24\u4E2A\u4EE3\u7801\u7684\u7248\u672C\u53F7\uFF0C\u6211\u4EEC\u8FD8\u8981\u901A\u8FC7<code>merge</code>\u53BB\u5408\u5E76\u8FD9\u4E24\u4E2A\u4E0D\u540C\u7684\u4EE3\u7801\u7248\u672C</p><p><img src="https://static.vue-js.com/fd23ff70-fb12-11eb-bc6f-3f06e1491664.png" alt=""></p><p>\u4E5F\u5C31\u662F<code>fetch</code>\u7684\u65F6\u5019\u672C\u5730\u7684<code>master</code>\u6CA1\u6709\u53D8\u5316\uFF0C\u4F46\u662F\u4E0E\u8FDC\u7A0B\u4ED3\u5173\u8054\u7684\u90A3\u4E2A\u7248\u672C\u53F7\u88AB\u66F4\u65B0\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u5728\u672C\u5730<code>merge</code>\u5408\u5E76\u8FD9\u4E24\u4E2A\u7248\u672C\u53F7\u7684\u4EE3\u7801</p><p>\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u4F7F\u7528<code>git pull</code>\u5C31\u66F4\u52A0\u7B80\u5355\u7C97\u66B4\uFF0C\u4F1A\u5C06\u672C\u5730\u7684\u4EE3\u7801\u66F4\u65B0\u81F3\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u9762\u6700\u65B0\u7684\u4EE3\u7801\u7248\u672C\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/091b8140-fb13-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="\u4E8C\u3001\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u7528\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001\u7528\u6CD5</h2><p>\u4E00\u822C\u8FDC\u7AEF\u4ED3\u5E93\u91CC\u6709\u65B0\u7684\u5185\u5BB9\u66F4\u65B0\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u628A\u65B0\u5185\u5BB9\u4E0B\u8F7D\u7684\u65F6\u5019\uFF0C\u5C31\u4F7F\u7528\u5230<code>git pull</code>\u6216\u8005<code>git fetch</code>\u547D\u4EE4</p><h3 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h3><p>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git fetch &lt;\u8FDC\u7A0B\u4E3B\u673A\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;:&lt;\u672C\u5730\u5206\u652F\u540D&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u5982\u4ECE\u8FDC\u7A0B\u7684<code>origin</code>\u4ED3\u5E93\u7684<code>master</code>\u5206\u652F\u4E0B\u8F7D\u4EE3\u7801\u5230\u672C\u5730\u5E76\u65B0\u5EFA\u4E00\u4E2A<code>temp</code>\u5206\u652F</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git fetch origin master:temp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4E0A\u8FF0\u6CA1\u6709\u5192\u53F7\uFF0C\u5219\u8868\u793A\u5C06\u8FDC\u7A0B<code>origin</code>\u4ED3\u5E93\u7684<code>master</code>\u5206\u652F\u62C9\u53D6\u4E0B\u6765\u5230\u672C\u5730\u5F53\u524D\u5206\u652F</p><p>\u8FD9\u91CC<code>git fetch</code>\u4E0D\u4F1A\u8FDB\u884C\u5408\u5E76\uFF0C\u6267\u884C\u540E\u9700\u8981\u624B\u52A8\u6267\u884C<code>git merge</code>\u5408\u5E76\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git merge temp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> pull</h3><p>\u4E24\u8005\u7684\u7528\u6CD5\u5341\u5206\u76F8\u4F3C\uFF0C<code>pull</code>\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git pull &lt;\u8FDC\u7A0B\u4E3B\u673A\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;:&lt;\u672C\u5730\u5206\u652F\u540D&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u5982\u5C06\u8FDC\u7A0B\u4E3B\u673A<code>origin</code>\u7684<code>master</code>\u5206\u652F\u62C9\u53D6\u8FC7\u6765\uFF0C\u4E0E\u672C\u5730\u7684<code>branchtest</code>\u5206\u652F\u5408\u5E76\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git pull origin master:branchtest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u540C\u6837\u5982\u679C\u4E0A\u8FF0\u6CA1\u6709\u5192\u53F7\uFF0C\u5219\u8868\u793A\u5C06\u8FDC\u7A0B<code>origin</code>\u4ED3\u5E93\u7684<code>master</code>\u5206\u652F\u62C9\u53D6\u4E0B\u6765\u4E0E\u672C\u5730\u5F53\u524D\u5206\u652F\u5408\u5E76</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u76F8\u540C\u70B9\uFF1A</p><ul><li>\u5728\u4F5C\u7528\u4E0A\u4ED6\u4EEC\u7684\u529F\u80FD\u662F\u5927\u81F4\u76F8\u540C\u7684\uFF0C\u90FD\u662F\u8D77\u5230\u4E86\u66F4\u65B0\u4EE3\u7801\u7684\u4F5C\u7528</li></ul><p>\u4E0D\u540C\u70B9\uFF1A</p><ul><li>git pull\u662F\u76F8\u5F53\u4E8E\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u83B7\u53D6\u6700\u65B0\u7248\u672C\uFF0C\u7136\u540E\u518D\u4E0E\u672C\u5730\u5206\u652Fmerge\uFF0C\u5373git pull = git fetch + git merge</li><li>\u76F8\u6BD4\u8D77\u6765\uFF0Cgit fetch \u66F4\u5B89\u5168\u4E5F\u66F4\u7B26\u5408\u5B9E\u9645\u8981\u6C42\uFF0C\u5728 merge \u524D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u67E5\u770B\u66F4\u65B0\u60C5\u51B5\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u518D\u51B3\u5B9A\u662F\u5426\u5408\u5E76</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://zhuanlan.zhihu.com/p/123370920</li><li>https://segmentfault.com/a/1190000017030384</li><li>https://juejin.cn/post/6844903921794859021</li></ul>`,41);function t(a,l){return i}var o=e(d,[["render",t],["__file","git_pull_git_fetch.html.vue"]]);export{o as default};
