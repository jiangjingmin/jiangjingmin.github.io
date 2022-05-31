import{_ as e,c as a}from"./app.a7f79250.js";const c={},t=a(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4git-\u4E2D-head\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4git-\u4E2D-head\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4Git \u4E2D HEAD\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15\u4E4B\u95F4\u7684\u533A\u522B\uFF1F</h1><p><img src="https://static.vue-js.com/2de056a0-fa40-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="\u4E00\u3001head" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001head" aria-hidden="true">#</a> \u4E00\u3001HEAD</h2><p>\u5728<code>git</code>\u4E2D\uFF0C\u53EF\u4EE5\u5B58\u5728\u5F88\u591A\u5206\u652F\uFF0C\u5176\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u6307\u5411<code>commit</code>\u5BF9\u8C61\u7684\u53EF\u53D8\u6307\u9488\uFF0C\u800C<code>Head</code>\u662F\u4E00\u4E2A\u7279\u522B\u7684\u6307\u9488\uFF0C\u662F\u4E00\u4E2A\u6307\u5411\u4F60\u6B63\u5728\u5DE5\u4F5C\u4E2D\u7684\u672C\u5730\u5206\u652F\u7684\u6307\u9488</p><p>\u7B80\u5355\u6765\u8BB2\uFF0C\u5C31\u662F\u4F60\u73B0\u5728\u5728\u54EA\u513F\uFF0CHEAD \u5C31\u6307\u5411\u54EA\u513F</p><p>\u4F8B\u5982\u5F53\u524D\u6211\u4EEC\u5904\u4E8E<code>master</code>\u5206\u652F\uFF0C\u6240\u4EE5<code>HEAD</code>\u8FD9\u4E2A\u6307\u9488\u6307\u5411\u4E86<code>master</code>\u5206\u652F\u6307\u9488</p><p><img src="https://static.vue-js.com/36cb0da0-fa40-11eb-991d-334fd31f0201.png" alt=""></p><p>\u7136\u540E\u901A\u8FC7\u8C03\u7528<code>git checkout test</code>\u5207\u6362\u5230<code>test</code>\u5206\u652F\uFF0C\u90A3\u4E48<code>HEAD</code>\u5219\u6307\u5411<code>test</code>\u5206\u652F\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/3e86ba80-fa40-11eb-991d-334fd31f0201.png" alt=""></p><p>\u4F46\u6211\u4EEC\u5728<code>test</code>\u5206\u652F\u518D\u4E00\u6B21<code>commit</code>\u4FE1\u606F\u7684\u65F6\u5019\uFF0C<code>HEAD</code>\u6307\u9488\u4ECD\u7136\u6307\u5411\u4E86<code>test</code>\u5206\u652F\u6307\u9488\uFF0C\u800C<code>test</code>\u5206\u652F\u6307\u9488\u5DF2\u7ECF\u6307\u5411\u4E86\u6700\u65B0\u521B\u5EFA\u7684\u63D0\u4EA4\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static.vue-js.com/439839b0-fa66-11eb-991d-334fd31f0201.png" alt=""></p><p>\u8FD9\u4E2A<code>HEAD</code>\u5B58\u50A8\u7684\u4F4D\u7F6E\u5C31\u5728<code>.git/HEAD</code>\u76EE\u5F55\u4E2D\uFF0C\u67E5\u770B\u4FE1\u606F\u53EF\u4EE5\u770B\u5230<code>HEAD</code>\u6307\u5411\u4E86\u53E6\u4E00\u4E2A\u6587\u4EF6</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>$ cat .git/HEAD
ref: refs/heads/master

$ cat .git/refs/heads/master
7406a10efcc169bbab17827aeda189aa20376f7f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u662F\u4E00\u4E32\u54C8\u5E0C\u7801\uFF0C\u800C\u8FD9\u4E2A\u54C8\u5E0C\u7801\u6B63\u662F<code>master</code>\u5206\u652F\u4E0A\u6700\u65B0\u7684\u63D0\u4EA4\u6240\u5BF9\u5E94\u7684\u54C8\u5E0C\u7801</p><p>\u6240\u4EE5\uFF0C\u5F53\u6211\u4EEC\u5207\u6362\u5206\u652F\u7684\u65F6\u5019\uFF0C<code>HEAD</code>\u6307\u9488\u901A\u5E38\u6307\u5411\u6211\u4EEC\u6240\u5728\u7684\u5206\u652F\uFF0C\u5F53\u6211\u4EEC\u5728\u67D0\u4E2A\u5206\u652F\u4E0A\u521B\u5EFA\u65B0\u7684\u63D0\u4EA4\u65F6\uFF0C\u5206\u652F\u6307\u9488\u603B\u662F\u4F1A\u6307\u5411\u5F53\u524D\u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4</p><p>\u6240\u4EE5\uFF0CHEAD\u6307\u9488 \u2014\u2014\u2013&gt; \u5206\u652F\u6307\u9488 \u2014\u2014\u2013&gt; \u6700\u65B0\u63D0\u4EA4</p><h2 id="\u4E8C\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15" aria-hidden="true">#</a> \u4E8C\u3001\u5DE5\u4F5C\u6811\u548C\u7D22\u5F15</h2><p>\u5728<code>Git</code>\u7BA1\u7406\u4E0B\uFF0C\u5927\u5BB6\u5B9E\u9645\u64CD\u4F5C\u7684\u76EE\u5F55\u88AB\u79F0\u4E3A\u5DE5\u4F5C\u6811\uFF0C\u4E5F\u5C31\u662F\u5DE5\u4F5C\u533A\u57DF</p><p>\u5728\u6570\u636E\u5E93\u548C\u5DE5\u4F5C\u6811\u4E4B\u95F4\u6709\u7D22\u5F15\uFF0C\u7D22\u5F15\u662F\u4E3A\u4E86\u5411\u6570\u636E\u5E93\u63D0\u4EA4\u4F5C\u51C6\u5907\u7684\u533A\u57DF\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u6682\u5B58\u533A\u57DF</p><p><img src="https://static.vue-js.com/46e5ac40-fa40-11eb-bc6f-3f06e1491664.png" alt=""></p><p><code>Git</code>\u5728\u6267\u884C\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u4E0D\u662F\u76F4\u63A5\u5C06\u5DE5\u4F5C\u6811\u7684\u72B6\u6001\u4FDD\u5B58\u5230\u6570\u636E\u5E93\uFF0C\u800C\u662F\u5C06\u8BBE\u7F6E\u5728\u4E2D\u95F4\u7D22\u5F15\u533A\u57DF\u7684\u72B6\u6001\u4FDD\u5B58\u5230\u6570\u636E\u5E93</p><p>\u56E0\u6B64\uFF0C\u8981\u63D0\u4EA4\u6587\u4EF6\uFF0C\u9996\u5148\u9700\u8981\u628A\u6587\u4EF6\u52A0\u5165\u5230\u7D22\u5F15\u533A\u57DF\u4E2D\u3002</p><p>\u6240\u4EE5\uFF0C\u51ED\u501F\u4E2D\u95F4\u7684\u7D22\u5F15\uFF0C\u53EF\u4EE5\u907F\u514D\u5DE5\u4F5C\u6811\u4E2D\u4E0D\u5FC5\u8981\u7684\u6587\u4EF6\u63D0\u4EA4\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u6587\u4EF6\u4FEE\u6539\u5185\u5BB9\u7684\u4E00\u90E8\u5206\u52A0\u5165\u7D22\u5F15\u533A\u57DF\u5E76\u63D0\u4EA4</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u4ECE\u6240\u5728\u7684\u4F4D\u7F6E\u6765\u770B\uFF1A</p><ul><li><p>HEAD \u6307\u9488\u901A\u5E38\u6307\u5411\u6211\u4EEC\u6240\u5728\u7684\u5206\u652F\uFF0C\u5F53\u6211\u4EEC\u5728\u67D0\u4E2A\u5206\u652F\u4E0A\u521B\u5EFA\u65B0\u7684\u63D0\u4EA4\u65F6\uFF0C\u5206\u652F\u6307\u9488\u603B\u662F\u4F1A\u6307\u5411\u5F53\u524D\u5206\u652F\u7684\u6700\u65B0\u63D0\u4EA4</p></li><li><p>\u5DE5\u4F5C\u6811\u662F\u67E5\u770B\u548C\u7F16\u8F91\u7684\uFF08\u6E90\uFF09\u6587\u4EF6\u7684\u5B9E\u9645\u5185\u5BB9</p></li><li><p>\u7D22\u5F15\u662F\u653E\u7F6E\u4F60\u60F3\u8981\u63D0\u4EA4\u7ED9 git\u4ED3\u5E93\u6587\u4EF6\u7684\u5730\u65B9\uFF0C\u5982\u5DE5\u4F5C\u6811\u7684\u4EE3\u7801\u901A\u8FC7 git add \u5219\u6DFB\u52A0\u5230 git \u7D22\u5F15\u4E2D\uFF0C\u901A\u8FC7git commit \u5219\u5C06\u7D22\u5F15\u533A\u57DF\u7684\u6587\u4EF6\u63D0\u4EA4\u5230 git \u4ED3\u5E93\u4E2D</p></li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2><ul><li>https://backlog.com/git-tutorial/cn/intro/intro1_4.html</li><li>https://juejin.cn/post/6844903598522908686</li><li>https://www.zsythink.net/archives/3412</li></ul>`,28);function d(i,s){return t}var p=e(c,[["render",d],["__file","HEAD_tree_index.html.vue"]]);export{p as default};
