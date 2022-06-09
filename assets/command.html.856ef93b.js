import{_ as a,r as c,o,a as n,b as i,e as t,F as s,c as r,d as l}from"./app.8c5ff8f0.js";const d={},h=r(`<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4git\u5E38\u7528\u7684\u547D\u4EE4\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4git\u5E38\u7528\u7684\u547D\u4EE4\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4Git\u5E38\u7528\u7684\u547D\u4EE4\u6709\u54EA\u4E9B\uFF1F</h1><blockquote><p>\u66F4\u65B0\uFF1A2021-12-13</p></blockquote><p><img src="https://static.vue-js.com/f66b3290-f7af-11eb-bc6f-3f06e1491664.png" alt="\u524D\u8A00"></p><h2 id="\u4E00\u3001\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a> \u4E00\u3001\u524D\u8A00</h2><p><code>git</code>\u7684\u64CD\u4F5C\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u7684\u5F62\u5F0F\u5982\u6267\u884C\uFF0C\u65E5\u5E38\u4F7F\u7528\u5C31\u5982\u4E0B\u56FE6\u4E2A\u547D\u4EE4\u5373\u53EF</p><p><img src="https://static.vue-js.com/fe150520-f7af-11eb-991d-334fd31f0201.png" alt="git\u6D41\u7A0B"></p><p>\u5B9E\u9645\u4E0A\uFF0C\u5982\u679C\u60F3\u8981\u719F\u7EC3\u4F7F\u7528\uFF0C\u8D85\u8FC760\u591A\u4E2A\u547D\u4EE4\u9700\u8981\u4E86\u89E3\uFF0C\u4E0B\u9762\u5219\u4ECB\u7ECD\u4E0B\u5E38\u89C1\u7684\u7684<code>git</code>\u547D\u4EE4</p><h2 id="\u4E8C\u3001\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u4E8C\u3001\u6709\u54EA\u4E9B</h2><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p><code>Git</code>\u81EA\u5E26\u4E00\u4E2A <code>git config</code> \u7684\u5DE5\u5177\u6765\u5E2E\u52A9\u8BBE\u7F6E\u63A7\u5236 <code>Git</code>\u5916\u89C2\u548C\u884C\u4E3A\u7684\u914D\u7F6E\u53D8\u91CF\uFF0C\u5728\u6211\u4EEC\u5B89\u88C5\u5B8C<code>git</code>\u4E4B\u540E\uFF0C\u7B2C\u4E00\u4EF6\u4E8B\u5C31\u662F\u8BBE\u7F6E\u4F60\u7684\u7528\u6237\u540D\u548C\u90AE\u4EF6\u5730\u5740</p><p>\u540E\u7EED\u6BCF\u4E00\u4E2A\u63D0\u4EA4\u90FD\u4F1A\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u5B83\u4EEC\u4F1A\u5199\u5165\u5230\u4F60\u7684\u6BCF\u4E00\u6B21\u63D0\u4EA4\u4E2D\uFF0C\u4E0D\u53EF\u66F4\u6539</p><p>\u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h3><p>\u4E00\u4E2A<code>git</code>\u9879\u76EE\u7684\u521D\u59CB\u6709\u4E24\u4E2A\u9014\u5F84\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li><code>git init [project-name]</code>\uFF1A\u521B\u5EFA\u6216\u5728\u5F53\u524D\u76EE\u5F55\u521D\u59CB\u5316\u4E00\u4E2Agit\u4EE3\u7801\u5E93</li><li><code>git clone url</code>\uFF1A\u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</li></ul><h3 id="\u65E5\u5E38\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5E38\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u65E5\u5E38\u57FA\u672C\u64CD\u4F5C</h3><p>\u5728\u65E5\u5E38\u5DE5\u4F5C\u4E2D\uFF0C\u4EE3\u7801\u5E38\u7528\u7684\u57FA\u672C\u64CD\u4F5C\u5982\u4E0B\uFF1A</p><ul><li><code>git init</code> \u521D\u59CB\u5316\u4ED3\u5E93\uFF0C\u9ED8\u8BA4\u4E3A master \u5206\u652F</li><li><code>git add .</code> \u63D0\u4EA4\u5168\u90E8\u6587\u4EF6\u4FEE\u6539\u5230\u7F13\u5B58\u533A</li><li><code>git add</code> &lt;\u5177\u4F53\u67D0\u4E2A\u6587\u4EF6\u8DEF\u5F84+\u5168\u540D&gt; \u63D0\u4EA4\u67D0\u4E9B\u6587\u4EF6\u5230\u7F13\u5B58\u533A</li><li><code>git diff</code> \u67E5\u770B\u5F53\u524D\u4EE3\u7801 add\u540E\uFF0C\u4F1A add \u54EA\u4E9B\u5185\u5BB9</li><li><code>git diff --staged</code> \u67E5\u770B\u73B0\u5728 commit \u63D0\u4EA4\u540E\uFF0C\u4F1A\u63D0\u4EA4\u54EA\u4E9B\u5185\u5BB9</li><li><code>git status</code> \u67E5\u770B\u5F53\u524D\u5206\u652F\u72B6\u6001</li><li><code>git pull &lt;\u8FDC\u7A0B\u4ED3\u5E93\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;</code> \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\u4E0E\u672C\u5730\u5F53\u524D\u5206\u652F\u5408\u5E76</li><li><code>git pull &lt;\u8FDC\u7A0B\u4ED3\u5E93\u540D&gt; &lt;\u8FDC\u7A0B\u5206\u652F\u540D&gt;:&lt;\u672C\u5730\u5206\u652F\u540D&gt;</code> \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\u4E0E\u672C\u5730\u67D0\u4E2A\u5206\u652F\u5408\u5E76</li><li><code>git commit -m &quot;fix: \u6CE8\u91CA&quot;</code> \u63D0\u4EA4\u4EE3\u7801\u5230\u672C\u5730\u4ED3\u5E93\uFF0C\u5E76\u5199\u63D0\u4EA4\u6CE8\u91CA</li><li><code>git commit -v</code> \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</li><li><code>git commit --amend [file1] [file2]</code> \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</li></ul><p>\u5173\u4E8E\u63D0\u4EA4\u4FE1\u606F\u7684\u683C\u5F0F\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u7684\u89C4\u5219\uFF1A</p><ul><li>feat: \u65B0\u7279\u6027\uFF0C\u6DFB\u52A0\u529F\u80FD</li><li>fix: \u4FEE\u6539 bug</li><li>refactor: \u4EE3\u7801\u91CD\u6784</li><li>docs: \u6587\u6863\u4FEE\u6539</li><li>style: \u4EE3\u7801\u683C\u5F0F\u4FEE\u6539, \u6CE8\u610F\u4E0D\u662F css \u4FEE\u6539</li><li>test: \u6D4B\u8BD5\u7528\u4F8B\u4FEE\u6539</li><li>chore: \u5176\u4ED6\u4FEE\u6539, \u6BD4\u5982\u6784\u5EFA\u6D41\u7A0B, \u4F9D\u8D56\u7BA1\u7406</li></ul><h3 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h3><ul><li>git branch \u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F</li><li>git branch -r \u67E5\u770B\u8FDC\u7A0B\u6240\u6709\u5206\u652F</li><li>git branch -a \u67E5\u770B\u672C\u5730\u548C\u8FDC\u7A0B\u6240\u6709\u5206\u652F</li><li>git merge &lt;\u5206\u652F\u540D&gt; \u5408\u5E76\u5206\u652F</li><li>git merge --abort \u5408\u5E76\u5206\u652F\u51FA\u73B0\u51B2\u7A81\u65F6\uFF0C\u53D6\u6D88\u5408\u5E76\uFF0C\u4E00\u5207\u56DE\u5230\u5408\u5E76\u524D\u7684\u72B6\u6001</li><li>git branch &lt;\u65B0\u5206\u652F\u540D&gt; \u57FA\u4E8E\u5F53\u524D\u5206\u652F\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F</li><li>git checkout --orphan &lt;\u65B0\u5206\u652F\u540D&gt; \u65B0\u5EFA\u4E00\u4E2A\u7A7A\u5206\u652F\uFF08\u4F1A\u4FDD\u7559\u4E4B\u524D\u5206\u652F\u7684\u6240\u6709\u6587\u4EF6\uFF09</li><li>git branch -D &lt;\u5206\u652F\u540D&gt; \u5220\u9664\u672C\u5730\u67D0\u4E2A\u5206\u652F</li><li>git push &lt;\u8FDC\u7A0B\u5E93\u540D&gt; :&lt;\u5206\u652F\u540D&gt; \u5220\u9664\u8FDC\u7A0B\u67D0\u4E2A\u5206\u652F</li><li>git branch &lt;\u65B0\u5206\u652F\u540D\u79F0&gt; &lt;\u63D0\u4EA4ID&gt; \u4ECE\u63D0\u4EA4\u5386\u53F2\u6062\u590D\u67D0\u4E2A\u5220\u6389\u7684\u67D0\u4E2A\u5206\u652F</li><li>git branch -m &lt;\u539F\u5206\u652F\u540D&gt; &lt;\u65B0\u5206\u652F\u540D&gt; \u5206\u652F\u66F4\u540D</li><li>git checkout &lt;\u5206\u652F\u540D&gt; \u5207\u6362\u5230\u672C\u5730\u67D0\u4E2A\u5206\u652F</li><li>git checkout &lt;\u8FDC\u7A0B\u5E93\u540D&gt;/&lt;\u5206\u652F\u540D&gt; \u5207\u6362\u5230\u7EBF\u4E0A\u67D0\u4E2A\u5206\u652F</li><li>git checkout -b &lt;\u65B0\u5206\u652F\u540D&gt; \u628A\u57FA\u4E8E\u5F53\u524D\u5206\u652F\u65B0\u5EFA\u5206\u652F\uFF0C\u5E76\u5207\u6362\u4E3A\u8FD9\u4E2A\u5206\u652F</li></ul><h3 id="\u8FDC\u7A0B\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a> \u8FDC\u7A0B\u540C\u6B65</h3><p>\u8FDC\u7A0B\u64CD\u4F5C\u5E38\u89C1\u7684\u547D\u4EE4\uFF1A</p><ul><li>git fetch [remote] \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</li><li>git remote -v \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</li><li>git pull [remote] [branch] \u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5206\u652F\u4E0E\u672C\u5730\u5F53\u524D\u5206\u652F\u5408\u5E76</li><li>git fetch \u83B7\u53D6\u7EBF\u4E0A\u6700\u65B0\u7248\u4FE1\u606F\u8BB0\u5F55\uFF0C\u4E0D\u5408\u5E76</li><li>git push [remote] [branch] \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</li><li>git push [remote] --force \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</li><li>git push [remote] --all \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</li></ul><h3 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h3><ul><li><p>git checkout [file] \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</p></li><li><p>git checkout [commit] [file] \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</p></li><li><p>git checkout . \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</p></li><li><p>git reset [commit] \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</p></li><li><p>git reset --hard \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4</p></li><li><p>git reset [file] \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</p></li><li><p>git revert [commit] \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</p></li></ul><blockquote><p><code>reset</code>\uFF1A\u771F\u5B9E\u786C\u6027\u56DE\u6EDA\uFF0C\u76EE\u6807\u7248\u672C\u540E\u9762\u7684\u63D0\u4EA4\u8BB0\u5F55\u5168\u90E8\u4E22\u5931\u4E86</p><p><code>revert</code>\uFF1A\u540C\u6837\u56DE\u6EDA\uFF0C\u8FD9\u4E2A\u56DE\u6EDA\u64CD\u4F5C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u63D0\u4EF7\uFF0C\u76EE\u6807\u7248\u672C\u540E\u9762\u7684\u63D0\u4EA4\u8BB0\u5F55\u4E5F\u5168\u90E8\u90FD\u6709</p></blockquote><h3 id="\u5B58\u50A8\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u64CD\u4F5C" aria-hidden="true">#</a> \u5B58\u50A8\u64CD\u4F5C</h3><p>\u4F60\u6B63\u5728\u8FDB\u884C\u9879\u76EE\u4E2D\u67D0\u4E00\u90E8\u5206\u7684\u5DE5\u4F5C\uFF0C\u91CC\u9762\u7684\u4E1C\u897F\u5904\u4E8E\u4E00\u4E2A\u6BD4\u8F83\u6742\u4E71\u7684\u72B6\u6001\uFF0C\u800C\u4F60\u60F3\u8F6C\u5230\u5176\u4ED6\u5206\u652F\u4E0A\u8FDB\u884C\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u4F46\u53C8\u4E0D\u60F3\u63D0\u4EA4\u8FD9\u4E9B\u6742\u4E71\u7684\u4EE3\u7801\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u5C06\u4EE3\u7801\u8FDB\u884C\u5B58\u50A8</p><ul><li><p>git stash \u6682\u65F6\u5C06\u672A\u63D0\u4EA4\u7684\u53D8\u5316\u79FB\u9664</p></li><li><p>git stash pop \u53D6\u51FA\u50A8\u85CF\u4E2D\u6700\u540E\u5B58\u5165\u7684\u5DE5\u4F5C\u72B6\u6001\u8FDB\u884C\u6062\u590D\uFF0C\u4F1A\u5220\u9664\u50A8\u85CF</p></li><li><p>git stash list \u67E5\u770B\u6240\u6709\u50A8\u85CF\u4E2D\u7684\u5DE5\u4F5C</p></li><li><p>git stash apply &lt;\u50A8\u85CF\u7684\u540D\u79F0&gt; \u53D6\u51FA\u50A8\u85CF\u4E2D\u5BF9\u5E94\u7684\u5DE5\u4F5C\u72B6\u6001\u8FDB\u884C\u6062\u590D\uFF0C\u4E0D\u4F1A\u5220\u9664\u50A8\u85CF</p></li><li><p>git stash clear \u6E05\u7A7A\u6240\u6709\u50A8\u85CF\u4E2D\u7684\u5DE5\u4F5C</p></li><li><p>git stash drop &lt;\u50A8\u85CF\u7684\u540D\u79F0&gt; \u5220\u9664\u5BF9\u5E94\u7684\u67D0\u4E2A\u50A8\u85CF</p></li></ul><h2 id="\u4E09\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u4E09\u3001\u603B\u7ED3</h2><p><code>git</code>\u5E38\u7528\u547D\u4EE4\u901F\u67E5\u8868\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png" alt="\u901F\u67E5\u8868"></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,36),p={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},g=l("git-cheat-sheet"),u={href:"https://segmentfault.com/a/1190000017875714",target:"_blank",rel:"noopener noreferrer"},m=l("Git \u5E38\u7528\u547D\u4EE4\u96C6");function f(b,_){const e=c("ExternalLinkIcon");return o(),n(s,null,[h,i("ul",null,[i("li",null,[i("a",p,[g,t(e)])]),i("li",null,[i("a",u,[m,t(e)])])])],64)}var x=a(d,[["render",f],["__file","command.html.vue"]]);export{x as default};
