import{_ as o,r as i,o as d,a as l,b as e,e as s,F as a,c,d as r}from"./app.b778d435.js";const h={},n=c('<h1 id="\u95EE\u9898\u6C47\u603B" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u6C47\u603B" aria-hidden="true">#</a> \u95EE\u9898\u6C47\u603B</h1><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><ol><li>JavaScript \u4E2D this \u662F\u5982\u4F55\u5DE5\u4F5C\u7684</li><li>\u8BF7\u89E3\u91CA\u539F\u578B\u7EE7\u627F \u7684\u539F\u7406\u3002</li><li>\u4EC0\u4E48\u662F\u95ED\u5305(closure)\uFF0C\u5982\u4F55\u4F7F\u7528\u5B83\uFF0C\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5B83?</li><li>.call \u548C.apply \u7684\u533A\u522B\u662F\u4EC0\u4E48?</li><li>\u8BF7\u6307\u51FA JavaScript \u5BBF\u4E3B\u5BF9\u8C61 (host objects)\u548C\u539F\u751F\u5BF9\u8C61(native objects)\u7684\u533A\u522B?</li><li>\u8BF7\u6307\u51FA\u4EE5\u4E0B\u4EE3\u7801\u7684\u533A\u522B:function Person()\u3001var person = Person()\u3001var person = new Person()?</li><li>\u8BF7\u89E3\u91CA\u53D8\u91CF\u58F0\u660E\u63D0\u5347(hoisting)\u3002</li><li>\u4EC0\u4E48\u662F\u201Cuse strict\u201D;?\u4F7F\u7528\u5B83\u7684\u597D\u5904\u548C\u574F\u5904\u5206\u522B\u662F\u4EC0\u4E48?</li><li>\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5FAA\u73AF(event loop)?</li><li>\u8BF7\u89E3\u91CA\u540C\u6B65(synchronous) \u548C\u5F02\u6B65(asynchronous)\u51FD\u6570\u7684\u533A\u522B\u3002</li></ol><h2 id="if-else-\u548C-switch-case-\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#if-else-\u548C-switch-case-\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> <code>if...else</code> \u548C <code>switch...case</code> \u5982\u4F55\u9009\u62E9\uFF1F</h2>',4),p={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch",target:"_blank",rel:"noopener noreferrer"},f=r("switch - MDN"),_=c("<p><code>switch</code> \u6709\u70B9\u4EE5\u7A7A\u95F4\u6362\u65F6\u95F4\u7684\u610F\u601D\uFF0C\u800C\u4E8B\u5B9E\u4E0A\u4E5F\u7684\u786E\u5982\u6B64\u3002</p><ol><li><p>\u5F53\u5206\u652F\u8F83\u591A\u65F6\uFF0C\u5F53\u65F6\u7528 <code>switch</code> \u7684\u6548\u7387\u662F\u5F88\u9AD8\u7684\u3002\u56E0\u4E3A <code>switch</code> \u662F\u968F\u673A\u8BBF\u95EE\u7684\uFF0C\u5C31\u662F\u786E\u5B9A\u4E86\u9009\u62E9\u503C\u4E4B\u540E\u76F4\u63A5\u8DF3\u8F6C\u5230\u90A3\u4E2A\u7279\u5B9A\u7684\u5206\u652F\uFF0C\u4F46\u662F <code>if...else</code> \u662F\u904D\u5386\u6240\u6709\u7684\u53EF\u80FD\u503C\uFF0C\u77E5\u9053\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u5206\u652F\u3002\u5982\u6B64\u770B\u6765\uFF0C<code>switch</code> \u7684\u6548\u7387\u786E\u5B9E\u6BD4 <code>if...else</code> \u8981\u9AD8\u7684\u591A\u3002</p></li><li><p>\u7531\u6C47\u7F16\u4EE3\u7801\u53EF\u77E5\u9053\uFF0C<code>switch...case</code> \u5360\u7528\u8F83\u591A\u7684\u4EE3\u7801\u7A7A\u95F4\uFF0C\u56E0\u4E3A\u5B83\u8981\u751F\u6210\u8DF3\u8868\uFF0C\u7279\u522B\u662F\u5F53 <code>case</code> \u5E38\u91CF\u5206\u5E03\u8303\u56F4\u5F88\u5927\u4F46\u5B9E\u9645\u6709\u6548\u503C\u53C8\u6BD4\u8F83\u5C11\u7684\u60C5\u51B5\uFF0C<code>switch...case</code> \u7684\u7A7A\u95F4\u5229\u7528\u7387\u5C06\u53D8\u5F97\u5F88\u4F4E\u3002</p></li><li><p><code>switch...case</code> \u53EA\u80FD\u5904\u7406 <code>case</code> \u4E3A\u5E38\u91CF\u7684\u60C5\u51B5\uFF0C\u5BF9\u975E\u5E38\u91CF\u7684\u60C5\u51B5\u662F\u65E0\u80FD\u4E3A\u529B\u7684\u3002\u4F8B\u5982 <code>if (a &gt; 1 &amp;&amp; a &lt; 100)</code>\uFF0C\u662F\u65E0\u6CD5\u4F7F\u7528 <code>switch...case</code> \u6765\u5904\u7406\u7684\u3002\u6240\u4EE5\uFF0C<code>switch</code> \u53EA\u80FD\u662F\u5728\u5E38\u91CF\u9009\u62E9\u5206\u652F\u65F6\u6BD4<code>if...else</code> \u6548\u7387\u9AD8\uFF0C\u4F46\u662F <code>if...else</code> \u80FD\u5E94\u7528\u4E8E\u66F4\u591A\u7684\u573A\u5408\uFF0C<code>if...else</code> \u6BD4\u8F83\u7075\u6D3B\u3002</p></li><li><p>\u5728\u5DF2\u77E5\u67D0\u51E0\u79CD\u5206\u652F\u51FA\u73B0\u6982\u7387\u8F83\u9AD8\u7684\u60C5\u51B5\u4E0B,\u4F7F\u7528 <code>if...else</code>,\u5C06\u9AD8\u6982\u7387\u5206\u652F\u653E\u5230\u524D\u51E0\u4F4D,\u7531\u4E8E <code>if...else</code> \u662F\u904D\u5386\u6240\u6709\u503C,\u6240\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u7684\u6548\u7387\u8981\u6BD4 <code>switch...case</code> \u9AD8</p></li><li><p>\u5206\u652F\u51FA\u73B0\u6982\u7387\u76F8\u540C\u6216\u672A\u77E5\u7684\u60C5\u51B5\u4E0B,\u5206\u652F\u6570\u5C0F\u4E8E5 <code>if...else</code> \u7684\u6548\u7387\u6BD4 <code>switch...case</code> \u9AD8,\u53CD\u4E4B\u5206\u652F\u6570\u5927\u4E8E5, <code>switch...case</code> \u6548\u7387\u6BD4 <code>if...else</code> \u9AD8</p></li></ol><p><code>if</code> \u548C <code>switch</code> \u90FD\u53EF\u4EE5\u8BBE\u8BA1\u591A\u91CD\u5206\u652F\u7ED3\u6784\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B <code>switch</code> \u6267\u884C\u6548\u7387\u8981\u9AD8\u4E8E <code>if</code> \u8BED\u53E5\u3002\u4F46\u662F\u4E5F\u4E0D\u80FD\u4E00\u6982\u800C\u8BBA\uFF0C\u5E94\u6839\u636E\u5177\u4F53\u95EE\u9898\u5177\u4F53\u5206\u6790\u3002\u7B80\u5355\u6BD4\u8F83\u5982\u8868\u6240\u793A\u3002</p><table><thead><tr><th>\u8BED\u53E5</th><th>If \u8BED\u53E5</th><th>Switch \u8BED\u53E5</th></tr></thead><tbody><tr><td>\u7ED3\u6784</td><td>\u901A\u8FC7\u5D4C\u5957\u7ED3\u6784\u5B9E\u73B0\u591A\u91CD\u5206\u652F</td><td>\u4E13\u4E3A\u591A\u91CD\u5206\u652F\u8BBE\u8BA1</td></tr><tr><td>\u6761\u4EF6</td><td>\u53EF\u4EE5\u6D4B\u8BD5\u591A\u4E2A\u6761\u4EF6\u8868\u8FBE\u5F0F</td><td>\u4EC5\u80FD\u6D4B\u8BD5\u4E00\u4E2A\u6761\u4EF6\u8868\u8FBE\u5F0F</td></tr><tr><td>\u903B\u8F91\u5173\u7CFB</td><td>\u53EF\u4EE5\u5904\u7406\u590D\u6742\u7684\u903B\u8F91\u5173\u7CFB</td><td>\u4EC5\u80FD\u5904\u7406\u591A\u4E2A\u679A\u4E3E\u7684\u903B\u8F91\u5173\u7CFB</td></tr><tr><td>\u6570\u636E\u7C7B\u578B</td><td>\u53EF\u4EE5\u9002\u7528\u4EFB\u4F55\u6570\u636E\u7C7B\u578B</td><td>\u4EC5\u80FD\u5E94\u7528\u6574\u6570\u3001\u679A\u4E3E\u3001\u5B57\u7B26\u4E32\u7B49\u7C7B\u578B</td></tr></tbody></table><p>\u76F8\u5BF9\u800C\u8A00\uFF0C\u4E0B\u9762\u60C5\u51B5\u66F4\u4E8B\u5B9C\u9009\u7528 switch \u8BED\u53E5\u3002</p><ul><li>\u679A\u4E3E\u8868\u8FBE\u5F0F\u7684\u503C\u3002\u8FD9\u79CD\u679A\u4E3E\u662F\u53EF\u4EE5\u671F\u671B\u7684\u3001\u5E73\u884C\u7684\u903B\u8F91\u5173\u7CFB\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u5177\u6709\u79BB\u6563\u6027\uFF0C\u662F\u4E0D\u5177\u6709\u7EBF\u6027\u7684\u975E\u8FDE\u7EED\u7684\u533A\u95F4\u503C\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u662F\u56FA\u5B9A\u7684\uFF0C\u4E0D\u4F1A\u52A8\u6001\u53D8\u5316\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u662F\u6709\u9650\u7684\uFF0C\u4E0D\u662F\u65E0\u9650\u7684\uFF0C\u4E00\u822C\u5E94\u8BE5\u6BD4\u8F83\u5C11\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u4E00\u822C\u4E3A\u6574\u6570\u3001\u5B57\u7B26\u4E32\u7B49\u7B80\u5355\u7684\u503C\u3002</li></ul><p>\u4E0B\u9762\u60C5\u51B5\u66F4\u4E8B\u5B9C\u7528 if \u8BED\u53E5\u3002</p><ul><li>\u5177\u6709\u590D\u6742\u7684\u903B\u8F91\u5173\u7CFB\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u5177\u6709\u7EBF\u6027\u7279\u5F81\uFF0C\u53BB\u5BF9\u8FDE\u7EED\u7684\u533A\u95F4\u503C\u8FDB\u884C\u5224\u65AD\u3002</li><li>\u8868\u8FBE\u5F0F\u7684\u503C\u662F\u52A8\u6001\u7684\u3002</li><li>\u6D4B\u8BD5\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u3002</li></ul>",8);function w(u,m){const t=i("ExternalLinkIcon");return d(),l(a,null,[n,e("ul",null,[e("li",null,[e("a",p,[f,s(t)])])]),_],64)}var v=o(h,[["render",w],["__file","index.html.vue"]]);export{v as default};
