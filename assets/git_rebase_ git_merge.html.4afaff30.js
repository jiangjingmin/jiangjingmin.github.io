import{_ as c,r as s,o as t,c as i,a as e,b as r,F as o,e as n,d}from"./app.6e1280c8.js";var p="/assets/merge_rebase.88db1dc5.png",g="/assets/merge_01.7cd841be.png",h="/assets/merge_02.a4f65b6c.png",m="/assets/merge_03.16761d6f.png",l="/assets/rebase_01.fbf1218a.png",_="/assets/rebase_02.c93bd2fd.png",b="/assets/rebase_03.23c2e17d.png",u="/assets/rebase_04.655de9c8.png";const f={},x=n('<h1 id="git-rebase-vs-git-merge" tabindex="-1"><a class="header-anchor" href="#git-rebase-vs-git-merge" aria-hidden="true">#</a> git rebase VS git merge</h1><p><img src="'+p+`" alt="merge_rebase"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>\u5728\u4F7F\u7528 <code>git</code> \u8FDB\u884C\u7248\u672C\u7BA1\u7406\u7684\u9879\u76EE\u4E2D\uFF0C\u5F53\u5B8C\u6210\u4E00\u4E2A\u7279\u6027\u7684\u5F00\u53D1\u5E76\u5C06\u5176\u5408\u5E76\u5230 <code>master</code> \u5206\u652F\u65F6\uFF0C\u4F1A\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>git merge</li><li>git rebase</li></ul><p><code>git rebase</code> \u4E0E <code>git merge</code>\u90FD\u6709\u76F8\u540C\u7684\u4F5C\u7528\uFF0C\u90FD\u662F\u5C06\u4E00\u4E2A\u5206\u652F\u7684\u63D0\u4EA4\u5408\u5E76\u5230\u53E6\u4E00\u5206\u652F\u4E0A\uFF0C\u4F46\u662F\u5728\u539F\u7406\u4E0A\u5374\u4E0D\u76F8\u540C</p><p>\u7528\u6CD5\u4E0A\u4E24\u8005\u4E5F\u5341\u5206\u7684\u7B80\u5355\uFF1A</p><h3 id="_1-1-git-merge" tabindex="-1"><a class="header-anchor" href="#_1-1-git-merge" aria-hidden="true">#</a> 1.1 git merge</h3><p>\u5C06\u5F53\u524D\u5206\u652F\u5408\u5E76\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u547D\u4EE4\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git merge xxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-git-rebase" tabindex="-1"><a class="header-anchor" href="#_1-2-git-rebase" aria-hidden="true">#</a> 1.2 git rebase</h3><p>\u5C06\u5F53\u524D\u5206\u652F\u79FB\u690D\u5230\u6307\u5B9A\u5206\u652F\u6216\u6307\u5B9A<code>commit</code>\u4E4B\u4E0A\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git rebase -i &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5E38\u89C1\u7684\u53C2\u6570\u6709<code>--continue</code>\uFF0C\u7528\u4E8E\u89E3\u51B3\u51B2\u7A81\u4E4B\u540E\uFF0C\u7EE7\u7EED\u6267\u884C<code>rebase</code></p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5206\u6790" aria-hidden="true">#</a> \u4E8C\u3001\u5206\u6790</h2><h3 id="_2-1-git-merge" tabindex="-1"><a class="header-anchor" href="#_2-1-git-merge" aria-hidden="true">#</a> 2.1 git merge</h3><p>\u901A\u8FC7<code>git merge</code>\u5C06\u5F53\u524D\u5206\u652F\u4E0E<code>xxx</code>\u5206\u652F\u5408\u5E76\uFF0C\u4EA7\u751F\u7684\u65B0\u7684<code>commit</code>\u5BF9\u8C61\u6709\u4E24\u4E2A\u7236\u8282\u70B9</p><p>\u5982\u679C\u201C\u6307\u5B9A\u5206\u652F\u201D\u672C\u8EAB\u662F\u5F53\u524D\u5206\u652F\u7684\u4E00\u4E2A\u76F4\u63A5\u5B50\u8282\u70B9\uFF0C\u5219\u4F1A\u4EA7\u751F\u5FEB\u7167\u5408\u5E76</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C<code>bugfix</code>\u5206\u652F\u662F\u4ECE<code>maste</code>r \u5206\u652F\u5206\u53C9\u51FA\u6765\u7684\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="`+g+'" alt="merge_01.png"></p><p>\u5408\u5E76<code>bugfix</code>\u5206\u652F\u5230<code>master</code>\u5206\u652F\u65F6\uFF0C\u5982\u679C<code>master</code>\u5206\u652F\u7684\u72B6\u6001\u6CA1\u6709\u88AB\u66F4\u6539\u8FC7\uFF0C\u5373 <code>bugfix</code>\u5206\u652F\u7684\u5386\u53F2\u8BB0\u5F55\u5305\u542B<code>master</code>\u5206\u652F\u6240\u6709\u7684\u5386\u53F2\u8BB0\u5F55</p><p>\u6240\u4EE5\u901A\u8FC7\u628A<code>master</code>\u5206\u652F\u7684\u4F4D\u7F6E\u79FB\u52A8\u5230<code>bugfix</code>\u7684\u6700\u65B0\u5206\u652F\u4E0A\uFF0C\u5C31\u5B8C\u6210\u5408\u5E76</p><p>\u5982\u679C<code>master</code>\u5206\u652F\u7684\u5386\u53F2\u8BB0\u5F55\u5728\u521B\u5EFA<code>bugfix</code>\u5206\u652F\u540E\u53C8\u6709\u65B0\u7684\u63D0\u4EA4\uFF0C\u5982\u4E0B\u60C5\u51B5\uFF1A</p><p><img src="'+h+'" alt="merge_02.png"></p><p>\u8FD9\u65F6\u5019\u4F7F\u7528<code>git merge</code>\u7684\u65F6\u5019\uFF0C\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0C\u5E76\u4E14<code>master</code>\u5206\u652F\u7684<code>HEAD</code>\u4F1A\u79FB\u52A8\u5230\u65B0\u7684\u5206\u652F\u4E0A\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="'+m+'" alt="merge_03.png"></p><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C\u4F1A\u628A\u4E24\u4E2A\u5206\u652F\u7684\u6700\u65B0\u5FEB\u7167\u4EE5\u53CA\u4E8C\u8005\u6700\u8FD1\u7684\u5171\u540C\u7956\u5148\u8FDB\u884C\u4E09\u65B9\u5408\u5E76\uFF0C\u5408\u5E76\u7684\u7ED3\u679C\u662F\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167</p><h3 id="_2-2-git-rebase" tabindex="-1"><a class="header-anchor" href="#_2-2-git-rebase" aria-hidden="true">#</a> 2.2 git rebase</h3><p>\u540C\u6837\uFF0C<code>master</code>\u5206\u652F\u7684\u5386\u53F2\u8BB0\u5F55\u5728\u521B\u5EFA<code>bugfix</code>\u5206\u652F\u540E\u53C8\u6709\u65B0\u7684\u63D0\u4EA4\uFF0C\u5982\u4E0B\u60C5\u51B5\uFF1A</p><p><img src="'+l+'" alt="rebase_01.png"></p><p>\u901A\u8FC7<code>git rebase</code>\uFF0C\u4F1A\u53D8\u6210\u5982\u4E0B\u60C5\u51B5\uFF1A</p><p><img src="'+_+'" alt="rebase_02.png"></p><p>\u5728\u79FB\u4EA4\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u53D1\u751F\u51B2\u7A81\uFF0C\u9700\u8981\u4FEE\u6539\u5404\u81EA\u7684\u51B2\u7A81\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="'+b+'" alt="rebase_03.png"></p><p><code>rebase</code>\u4E4B\u540E\uFF0C<code>master</code>\u7684<code>HEAD</code>\u4F4D\u7F6E\u4E0D\u53D8\u3002\u56E0\u6B64\uFF0C\u8981\u5408\u5E76<code>master</code>\u5206\u652F\u548C<code>bugfix</code>\u5206\u652F</p><p><img src="'+u+'" alt="rebase_04.png"></p><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C<code>rebase</code>\u4F1A\u627E\u5230\u4E0D\u540C\u7684\u5206\u652F\u7684\u6700\u8FD1\u5171\u540C\u7956\u5148\uFF0C\u5982\u4E0A\u56FE\u7684<code>B</code></p><p>\u7136\u540E\u5BF9\u6BD4\u5F53\u524D\u5206\u652F\u76F8\u5BF9\u4E8E\u8BE5\u7956\u5148\u7684\u5386\u6B21\u63D0\u4EA4\uFF0C\u63D0\u53D6\u76F8\u5E94\u7684\u4FEE\u6539\u5E76\u5B58\u4E3A\u4E34\u65F6\u6587\u4EF6\uFF08\u8001\u7684\u63D0\u4EA4<code>X</code>\u548C<code>Y</code>\u4E5F\u6CA1\u6709\u88AB\u9500\u6BC1\uFF0C\u53EA\u662F\u7B80\u5355\u5730\u4E0D\u80FD\u518D\u88AB\u8BBF\u95EE\u6216\u8005\u4F7F\u7528\uFF09</p><p>\u7136\u540E\u5C06\u5F53\u524D\u5206\u652F\u6307\u5411\u76EE\u6807\u6700\u65B0\u4F4D\u7F6E<code>D</code>, \u7136\u540E\u5C06\u4E4B\u524D\u53E6\u5B58\u4E3A\u4E34\u65F6\u6587\u4EF6\u7684\u4FEE\u6539\u4F9D\u5E8F\u5E94\u7528</p><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E09\u3001\u533A\u522B</h2><p>\u4ECE\u4E0A\u9762\u53EF\u4EE5\u770B\u5230\uFF0C<code>merge</code>\u548C<code>rebasea</code>\u90FD\u662F\u5408\u5E76\u5386\u53F2\u8BB0\u5F55\uFF0C\u4F46\u662F\u5404\u81EA\u7279\u6027\u4E0D\u540C\uFF1A</p><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h3><p>\u901A\u8FC7<code>merge</code>\u5408\u5E76\u5206\u652F\u4F1A\u65B0\u589E\u4E00\u4E2A<code>merge commit</code>\uFF0C\u7136\u540E\u5C06\u4E24\u4E2A\u5206\u652F\u7684\u5386\u53F2\u8054\u7CFB\u8D77\u6765</p><p>\u5176\u5B9E\u662F\u4E00\u79CD\u975E\u7834\u574F\u6027\u7684\u64CD\u4F5C\uFF0C\u5BF9\u73B0\u6709\u5206\u652F\u4E0D\u4F1A\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u88AB\u66F4\u6539\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4\u5386\u53F2\u8BB0\u5F55\u76F8\u5BF9\u590D\u6742</p><h3 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h3><p><code>rebase</code> \u4F1A\u5C06\u6574\u4E2A\u5206\u652F\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u5206\u652F\u4E0A\uFF0C\u6709\u6548\u5730\u6574\u5408\u4E86\u6240\u6709\u5206\u652F\u4E0A\u7684\u63D0\u4EA4</p><p>\u4E3B\u8981\u7684\u597D\u5904\u662F\u5386\u53F2\u8BB0\u5F55\u66F4\u52A0\u6E05\u6670\uFF0C\u662F\u5728\u539F\u6709\u63D0\u4EA4\u7684\u57FA\u7840\u4E0A\u5C06\u5DEE\u5F02\u5185\u5BB9\u53CD\u6620\u8FDB\u53BB\uFF0C\u6D88\u9664\u4E86 <code>git merge</code>\u6240\u9700\u7684\u4E0D\u5FC5\u8981\u7684\u5408\u5E76\u63D0\u4EA4</p><h2 id="\u56DB\u3001\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u56DB\u3001\u53C2\u8003\u6587\u732E</h2>',49),v={href:"https://zhuanlan.zhihu.com/p/361182707",target:"_blank",rel:"noopener noreferrer"},k=d("https://zhuanlan.zhihu.com/p/361182707"),z={href:"https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing",target:"_blank",rel:"noopener noreferrer"},E=d("https://yuweijun.github.io/git-zh/1-git-branching.html#_rebasing"),V={href:"https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html",target:"_blank",rel:"noopener noreferrer"},B=d("https://backlog.com/git-tutorial/cn/stepup/stepup1_4.html");function N(D,j){const a=s("ExternalLinkIcon");return t(),i(o,null,[x,e("ul",null,[e("li",null,[e("a",v,[k,r(a)])]),e("li",null,[e("a",z,[E,r(a)])]),e("li",null,[e("a",V,[B,r(a)])])])],64)}var y=c(f,[["render",N],["__file","git_rebase_ git_merge.html.vue"]]);export{y as default};
