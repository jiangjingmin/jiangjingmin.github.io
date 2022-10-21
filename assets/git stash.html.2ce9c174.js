import{_ as a,e as s}from"./app.6e1280c8.js";const t={},e=s('<h1 id="\u8BF4\u8BF4\u4F60\u5BF9git-stash-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4F60\u5BF9git-stash-\u7684\u7406\u89E3-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u8BF4\u8BF4\u4F60\u5BF9git stash \u7684\u7406\u89E3\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><p><img src="https://static.vue-js.com/83ddf210-fd6f-11eb-bc6f-3f06e1491664.png" alt="image"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>stash\uFF0C\u8BD1\u4E3A\u5B58\u653E\uFF0C\u5728 git \u4E2D\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4FDD\u5B58\u5F53\u524D\u5DE5\u4F5C\u8FDB\u5EA6\uFF0C\u4F1A\u628A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u6539\u52A8\u8FDB\u884C\u4FDD\u5B58\uFF0C\u8FD9\u4E9B\u4FEE\u6539\u4F1A\u4FDD\u5B58\u5728\u4E00\u4E2A\u6808\u4E0A</p><p>\u540E\u7EED\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u4EFB\u4F55\u5206\u652F\u91CD\u65B0\u5C06\u67D0\u6B21\u7684\u4FEE\u6539\u63A8\u51FA\u6765\uFF0C\u91CD\u65B0\u5E94\u7528\u8FD9\u4E9B\u66F4\u6539\u7684\u4EE3\u7801</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>git stash</code>\u4F1A\u7F13\u5B58\u4E0B\u5217\u72B6\u6001\u7684\u6587\u4EF6\uFF1A</p><ul><li>\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u7684\u4FEE\u6539\uFF08staged changes\uFF09</li><li>Git\u8DDF\u8E2A\u7684\u4F46\u5E76\u672A\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u7684\u4FEE\u6539\uFF08unstaged changes\uFF09</li></ul><p>\u4F46\u4EE5\u4E0B\u72B6\u6001\u7684\u6587\u4EF6\u4E0D\u4F1A\u7F13\u5B58\uFF1A</p><ul><li>\u5728\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u65B0\u7684\u6587\u4EF6\uFF08untracked files\uFF09</li><li>\u88AB\u5FFD\u7565\u7684\u6587\u4EF6\uFF08ignored files\uFF09</li></ul><p>\u5982\u679C\u60F3\u8981\u4E0A\u8FF0\u7684\u6587\u4EF6\u90FD\u88AB\u7F13\u5B58\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>-u</code>\u6216\u8005<code>--include-untracked</code>\u53EF\u4EE5\u5DE5\u4F5C\u76EE\u5F55\u65B0\u7684\u6587\u4EF6\uFF0C\u4F7F\u7528<code>-a</code>\u6216\u8005<code>--all</code>\u547D\u4EE4\u53EF\u4EE5\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u4FEE\u6539</p><h2 id="\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u5982\u4F55\u4F7F\u7528</h2><p>\u5173\u4E8E<code>git stash</code>\u5E38\u89C1\u7684\u547D\u4EE4\u5982\u4E0B\uFF1A</p><ul><li><p>git stash</p></li><li><p>git stash save</p></li><li><p>git stash list</p></li><li><p>git stash pop</p></li><li><p>git stash apply</p></li><li><p>git stash show</p></li><li><p>git stash drop</p></li><li><p>git stash clear</p></li></ul><h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3><p>\u4FDD\u5B58\u5F53\u524D\u5DE5\u4F5C\u8FDB\u5EA6\uFF0C\u4F1A\u628A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u6539\u52A8\u4FDD\u5B58\u8D77\u6765</p><h3 id="git-stash-save" tabindex="-1"><a class="header-anchor" href="#git-stash-save" aria-hidden="true">#</a> git stash save</h3><p><code>git stash save</code>\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u4FEE\u6539.\u5E76\u4E14\u5C06<code>git</code>\u7684\u5DE5\u4F5C\u72B6\u6001\u5207\u56DE\u5230<code>HEAD</code>\u4E5F\u5C31\u662F\u4E0A\u4E00\u6B21\u5408\u6CD5\u63D0\u4EA4\u4E0A</p><p>\u5982\u679C\u7ED9\u5B9A\u5177\u4F53\u7684\u6587\u4EF6\u8DEF\u5F84,<code>git stash</code>\u53EA\u4F1A\u5904\u7406\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6.\u5176\u4ED6\u7684\u6587\u4EF6\u4E0D\u4F1A\u88AB\u5B58\u50A8\uFF0C\u5176\u5B58\u5728\u4E00\u4E9B\u53C2\u6570\uFF1A</p><ul><li><p>--keep-index \u6216\u8005 -k \u53EA\u4F1A\u5B58\u50A8\u4E3A\u52A0\u5165 git \u7BA1\u7406\u7684\u6587\u4EF6</p></li><li><p>--include-untracked \u4E3A\u8FFD\u8E2A\u7684\u6587\u4EF6\u4E5F\u4F1A\u88AB\u7F13\u5B58,\u5F53\u524D\u7684\u5DE5\u4F5C\u7A7A\u95F4\u4F1A\u88AB\u6062\u590D\u4E3A\u5B8C\u5168\u6E05\u7A7A\u7684\u72B6\u6001</p></li><li><p>-a \u6216\u8005 --all \u547D\u4EE4\u53EF\u4EE5\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u4FEE\u6539\uFF0C\u5305\u62EC\u88AB git \u5FFD\u7565\u7684\u6587\u4EF6</p></li></ul><h3 id="git-stash-list" tabindex="-1"><a class="header-anchor" href="#git-stash-list" aria-hidden="true">#</a> git stash list</h3><p>\u663E\u793A\u4FDD\u5B58\u8FDB\u5EA6\u7684\u5217\u8868\u3002\u4E5F\u5C31\u610F\u5473\u7740\uFF0C<code>git stash</code>\u547D\u4EE4\u53EF\u4EE5\u591A\u6B21\u6267\u884C\uFF0C\u5F53\u591A\u6B21\u4F7F\u7528<code>git stash</code>\u547D\u4EE4\u540E\uFF0C\u6808\u91CC\u4F1A\u5145\u6EE1\u672A\u63D0\u4EA4\u7684\u4EE3\u7801\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/50216dd0-fccf-11eb-bc6f-3f06e1491664.png" alt="image"></p><p>\u5176\u4E2D\uFF0C<code>stash@{0}</code>\u3001<code>stash@{1}</code>\u5C31\u662F\u5F53\u524D<code>stash</code>\u7684\u540D\u79F0</p><h3 id="git-stash-pop" tabindex="-1"><a class="header-anchor" href="#git-stash-pop" aria-hidden="true">#</a> git stash pop</h3><p><code>git stash pop</code> \u4ECE\u6808\u4E2D\u8BFB\u53D6\u6700\u8FD1\u4E00\u6B21\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u6808\u9876\u7684<code>stash</code>\u4F1A\u6062\u590D\u5230\u5DE5\u4F5C\u533A</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>git stash pop</code> + <code>stash</code>\u540D\u5B57\u6267\u884C\u6062\u590D\u54EA\u4E2A<code>stash</code>\u6062\u590D\u5230\u5F53\u524D\u76EE\u5F55</p><p>\u5982\u679C\u4ECE<code>stash</code>\u4E2D\u6062\u590D\u7684\u5185\u5BB9\u548C\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u5185\u5BB9\u53D1\u751F\u4E86\u51B2\u7A81\uFF0C\u5219\u9700\u8981\u624B\u52A8\u4FEE\u590D\u51B2\u7A81\u6216\u8005\u521B\u5EFA\u65B0\u7684\u5206\u652F\u6765\u89E3\u51B3\u51B2\u7A81</p><h3 id="git-stash-apply" tabindex="-1"><a class="header-anchor" href="#git-stash-apply" aria-hidden="true">#</a> git stash apply</h3><p>\u5C06\u5806\u6808\u4E2D\u7684\u5185\u5BB9\u5E94\u7528\u5230\u5F53\u524D\u76EE\u5F55\uFF0C\u4E0D\u540C\u4E8E<code>git stash pop</code>\uFF0C\u8BE5\u547D\u4EE4\u4E0D\u4F1A\u5C06\u5185\u5BB9\u4ECE\u5806\u6808\u4E2D\u5220\u9664</p><p>\u4E5F\u5C31\u8BF4\u8BE5\u547D\u4EE4\u80FD\u591F\u5C06\u5806\u6808\u7684\u5185\u5BB9\u591A\u6B21\u5E94\u7528\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E2D\uFF0C\u9002\u5E94\u4E8E\u591A\u4E2A\u5206\u652F\u7684\u60C5\u51B5</p><p>\u540C\u6837\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>git stash apply</code> + <code>stash</code>\u540D\u5B57\u6267\u884C\u6062\u590D\u54EA\u4E2A<code>stash</code>\u6062\u590D\u5230\u5F53\u524D\u76EE\u5F55</p><h3 id="git-stash-show" tabindex="-1"><a class="header-anchor" href="#git-stash-show" aria-hidden="true">#</a> git stash show</h3><p>\u67E5\u770B\u5806\u6808\u4E2D\u6700\u65B0\u4FDD\u5B58\u7684<code>stash</code>\u548C\u5F53\u524D\u76EE\u5F55\u7684\u5DEE\u5F02</p><p>\u901A\u8FC7\u4F7F\u7528<code>git stash show -p</code>\u67E5\u770B\u8BE6\u7EC6\u7684\u4E0D\u540C</p><p>\u901A\u8FC7\u4F7F\u7528<code>git stash show stash@{1}</code>\u67E5\u770B\u6307\u5B9A\u7684<code>stash</code>\u548C\u5F53\u524D\u76EE\u5F55\u5DEE\u5F02</p><p><img src="https://static.vue-js.com/458620a0-fccf-11eb-bc6f-3f06e1491664.png" alt="image"></p><h3 id="git-stash-drop" tabindex="-1"><a class="header-anchor" href="#git-stash-drop" aria-hidden="true">#</a> git stash drop</h3><p><code>git stash drop</code> + <code>stash</code>\u540D\u79F0\u8868\u793A\u4ECE\u5806\u6808\u4E2D\u79FB\u9664\u67D0\u4E2A\u6307\u5B9A\u7684stash</p><h3 id="git-stash-clear" tabindex="-1"><a class="header-anchor" href="#git-stash-clear" aria-hidden="true">#</a> git stash clear</h3><p>\u5220\u9664\u6240\u6709\u5B58\u50A8\u7684\u8FDB\u5EA6</p><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u5F53\u4F60\u5728\u9879\u76EE\u7684\u4E00\u90E8\u5206\u4E0A\u5DF2\u7ECF\u5DE5\u4F5C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u6240\u6709\u4E1C\u897F\u90FD\u8FDB\u5165\u4E86\u6DF7\u4E71\u7684\u72B6\u6001\uFF0C \u800C\u8FD9\u65F6\u4F60\u60F3\u8981\u5207\u6362\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u6216\u8005\u62C9\u4E0B\u8FDC\u7AEF\u7684\u4EE3\u7801\u53BB\u505A\u4E00\u70B9\u522B\u7684\u4E8B\u60C5</p><p>\u4F46\u662F\u4F60\u521B\u5EFA\u4E00\u6B21\u672A\u5B8C\u6210\u7684\u4EE3\u7801\u7684<code>commit</code>\u63D0\u4EA4\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528<code>git stash</code></p><p>\u4F8B\u5982\u4EE5\u4E0B\u573A\u666F\uFF1A</p><p>\u5F53\u4F60\u7684\u5F00\u53D1\u8FDB\u884C\u5230\u4E00\u534A,\u4F46\u662F\u4EE3\u7801\u8FD8\u4E0D\u60F3\u8FDB\u884C\u63D0\u4EA4 ,\u7136\u540E\u9700\u8981\u540C\u6B65\u53BB\u5173\u8054\u8FDC\u7AEF\u4EE3\u7801\u65F6.\u5982\u679C\u4F60\u672C\u5730\u7684\u4EE3\u7801\u548C\u8FDC\u7AEF\u4EE3\u7801\u6CA1\u6709\u51B2\u7A81\u65F6,\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7<code>git pull</code>\u89E3\u51B3</p><p>\u4F46\u662F\u5982\u679C\u53EF\u80FD\u53D1\u751F\u51B2\u7A81\u600E\u4E48\u529E.\u76F4\u63A5<code>git pull</code>\u4F1A\u62D2\u7EDD\u8986\u76D6\u5F53\u524D\u7684\u4FEE\u6539\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F9D\u6B21\u4F7F\u7528\u4E0B\u8FF0\u7684\u547D\u4EE4\uFF1A</p><ul><li>git stash</li><li>git pull</li><li>git stash pop</li></ul><p>\u6216\u8005\u5F53\u4F60\u5F00\u53D1\u5230\u4E00\u534A\uFF0C\u73B0\u5728\u8981\u4FEE\u6539\u522B\u7684\u5206\u652F\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>git stash</code>\u7F13\u5B58\u5F53\u524D\u533A\u57DF\u7684\u4EE3\u7801</p><ul><li>git stash\uFF1A\u4FDD\u5B58\u5F00\u53D1\u5230\u4E00\u534A\u7684\u4EE3\u7801</li><li>git commit -m &#39;\u4FEE\u6539\u95EE\u9898&#39;</li><li>git stash pop\uFF1A\u5C06\u4EE3\u7801\u8FFD\u52A0\u5230\u6700\u65B0\u7684\u63D0\u4EA4\u4E4B\u540E</li></ul>',49);function i(h,d){return e}var p=a(t,[["render",i],["__file","git stash.html.vue"]]);export{p as default};
