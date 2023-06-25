import{_ as t,r,o as c,c as n,a as e,b as o,F as i,e as l,d}from"./app.f6b3af9d.js";const s={},h=l('<h1 id="\u8BF4\u8BF4\u4F60\u5BF9node-js-\u7684\u7406\u89E3-\u4F18\u7F3A\u70B9-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4F60\u5BF9node-js-\u7684\u7406\u89E3-\u4F18\u7F3A\u70B9-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u8BF4\u8BF4\u4F60\u5BF9Node.js \u7684\u7406\u89E3\uFF1F\u4F18\u7F3A\u70B9\uFF1F\u5E94\u7528\u573A\u666F\uFF1F</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>Node.js</code> \u662F\u4E00\u4E2A\u5F00\u6E90\u4E0E\u8DE8\u5E73\u53F0\u7684 <code>JavaScript</code> \u8FD0\u884C\u65F6\u73AF\u5883</p><p>\u5728\u6D4F\u89C8\u5668\u5916\u8FD0\u884C V8 JavaScript \u5F15\u64CE\uFF08Google Chrome \u7684\u5185\u6838\uFF09\uFF0C\u5229\u7528\u4E8B\u4EF6\u9A71\u52A8\u3001\u975E\u963B\u585E\u548C\u5F02\u6B65\u8F93\u5165\u8F93\u51FA\u6A21\u578B\u7B49\u6280\u672F\u63D0\u9AD8\u6027\u80FD</p><p>\u53EF\u4EE5\u7406\u89E3\u4E3A <code>Node.js</code> \u5C31\u662F\u4E00\u4E2A\u670D\u52A1\u5668\u7AEF\u7684\u3001\u975E\u963B\u585E\u5F0FI/O\u7684\u3001\u4E8B\u4EF6\u9A71\u52A8\u7684<code>JavaScript</code>\u8FD0\u884C\u73AF\u5883</p><h3 id="\u975E\u963B\u585E\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#\u975E\u963B\u585E\u5F02\u6B65" aria-hidden="true">#</a> \u975E\u963B\u585E\u5F02\u6B65</h3><p><code>Nodejs</code>\u91C7\u7528\u4E86\u975E\u963B\u585E\u578B<code>I/O</code>\u673A\u5236\uFF0C\u5728\u505A<code>I/O</code>\u64CD\u4F5C\u7684\u65F6\u5019\u4E0D\u4F1A\u9020\u6210\u4EFB\u4F55\u7684\u963B\u585E\uFF0C\u5F53\u5B8C\u6210\u4E4B\u540E\uFF0C\u4EE5\u65F6\u95F4\u7684\u5F62\u5F0F\u901A\u77E5\u6267\u884C\u64CD\u4F5C</p><p>\u4F8B\u5982\u5728\u6267\u884C\u4E86\u8BBF\u95EE\u6570\u636E\u5E93\u7684\u4EE3\u7801\u4E4B\u540E\uFF0C\u5C06\u7ACB\u5373\u8F6C\u800C\u6267\u884C\u5176\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u628A\u6570\u636E\u5E93\u8FD4\u56DE\u7ED3\u679C\u7684\u5904\u7406\u4EE3\u7801\u653E\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u7A0B\u5E8F\u7684\u6267\u884C\u6548\u7387</p><h3 id="\u4E8B\u4EF6\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u9A71\u52A8" aria-hidden="true">#</a> \u4E8B\u4EF6\u9A71\u52A8</h3><p>\u4E8B\u4EF6\u9A71\u52A8\u5C31\u662F\u5F53\u8FDB\u6765\u4E00\u4E2A\u65B0\u7684\u8BF7\u6C42\u7684\u65F6\uFF0C\u8BF7\u6C42\u5C06\u4F1A\u88AB\u538B\u5165\u4E00\u4E2A\u4E8B\u4EF6\u961F\u5217\u4E2D\uFF0C\u7136\u540E\u901A\u8FC7\u4E00\u4E2A\u5FAA\u73AF\u6765\u68C0\u6D4B\u961F\u5217\u4E2D\u7684\u4E8B\u4EF6\u72B6\u6001\u53D8\u5316\uFF0C\u5982\u679C\u68C0\u6D4B\u5230\u6709\u72B6\u6001\u53D8\u5316\u7684\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u5C31\u6267\u884C\u8BE5\u4E8B\u4EF6\u5BF9\u5E94\u7684\u5904\u7406\u4EE3\u7801\uFF0C\u4E00\u822C\u90FD\u662F\u56DE\u8C03\u51FD\u6570</p><p>\u6BD4\u5982\u8BFB\u53D6\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6BD5\u540E\uFF0C\u5C31\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u72B6\u6001\uFF0C\u7136\u540E\u901A\u8FC7\u5BF9\u5E94\u7684\u56DE\u8C03\u51FD\u6570\u6765\u8FDB\u884C\u5904\u7406</p><p><img src="https://static.vue-js.com/a7729590-c1e8-11eb-ab90-d9ae814b240d.png" alt="image"></p><h2 id="\u4E8C\u3001\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4E8C\u3001\u4F18\u7F3A\u70B9</h2><p>\u4F18\u70B9\uFF1A</p><ul><li>\u5904\u7406\u9AD8\u5E76\u53D1\u573A\u666F\u6027\u80FD\u66F4\u4F73</li><li>\u9002\u5408I/O\u5BC6\u96C6\u578B\u5E94\u7528\uFF0C\u503C\u7684\u662F\u5E94\u7528\u5728\u8FD0\u884C\u6781\u9650\u65F6\uFF0CCPU\u5360\u7528\u7387\u4ECD\u7136\u6BD4\u8F83\u4F4E\uFF0C\u5927\u90E8\u5206\u65F6\u95F4\u662F\u5728\u505A I/O\u786C\u76D8\u5185\u5B58\u8BFB\u5199\u64CD\u4F5C</li></ul><p>\u56E0\u4E3A<code>Nodejs</code>\u662F\u5355\u7EBF\u7A0B\uFF0C\u5E26\u6765\u7684\u7F3A\u70B9\u6709\uFF1A</p><ul><li>\u4E0D\u9002\u5408CPU\u5BC6\u96C6\u578B\u5E94\u7528</li><li>\u53EA\u652F\u6301\u5355\u6838CPU\uFF0C\u4E0D\u80FD\u5145\u5206\u5229\u7528CPU</li><li>\u53EF\u9760\u6027\u4F4E\uFF0C\u4E00\u65E6\u4EE3\u7801\u67D0\u4E2A\u73AF\u8282\u5D29\u6E83\uFF0C\u6574\u4E2A\u7CFB\u7EDF\u90FD\u5D29\u6E83</li></ul><h2 id="\u4E09\u3001\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E09\u3001\u5E94\u7528\u573A\u666F</h2><p>\u501F\u52A9<code>Nodejs</code>\u7684\u7279\u70B9\u548C\u5F0A\u7AEF\uFF0C\u5176\u5E94\u7528\u573A\u666F\u5206\u7C7B\u5982\u4E0B\uFF1A</p><ul><li>\u5584\u4E8E<code>I/O</code>\uFF0C\u4E0D\u5584\u4E8E\u8BA1\u7B97\u3002\u56E0\u4E3ANodejs\u662F\u4E00\u4E2A\u5355\u7EBF\u7A0B\uFF0C\u5982\u679C\u8BA1\u7B97\uFF08\u540C\u6B65\uFF09\u592A\u591A\uFF0C\u5219\u4F1A\u963B\u585E\u8FD9\u4E2A\u7EBF\u7A0B</li><li>\u5927\u91CF\u5E76\u53D1\u7684I/O\uFF0C\u5E94\u7528\u7A0B\u5E8F\u5185\u90E8\u5E76\u4E0D\u9700\u8981\u8FDB\u884C\u975E\u5E38\u590D\u6742\u7684\u5904\u7406</li><li>\u4E0E websocket \u914D\u5408\uFF0C\u5F00\u53D1\u957F\u8FDE\u63A5\u7684\u5B9E\u65F6\u4EA4\u4E92\u5E94\u7528\u7A0B\u5E8F</li></ul><p>\u5177\u4F53\u573A\u666F\u53EF\u4EE5\u8868\u73B0\u4E3A\u5982\u4E0B\uFF1A</p><ul><li>\u7B2C\u4E00\u5927\u7C7B\uFF1A\u7528\u6237\u8868\u5355\u6536\u96C6\u7CFB\u7EDF\u3001\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u3001\u5B9E\u65F6\u4EA4\u4E92\u7CFB\u7EDF\u3001\u8003\u8BD5\u7CFB\u7EDF\u3001\u8054\u7F51\u8F6F\u4EF6\u3001\u9AD8\u5E76\u53D1\u91CF\u7684web\u5E94\u7528\u7A0B\u5E8F</li><li>\u7B2C\u4E8C\u5927\u7C7B\uFF1A\u57FA\u4E8Eweb\u3001canvas\u7B49\u591A\u4EBA\u8054\u7F51\u6E38\u620F</li><li>\u7B2C\u4E09\u5927\u7C7B\uFF1A\u57FA\u4E8Eweb\u7684\u591A\u4EBA\u5B9E\u65F6\u804A\u5929\u5BA2\u6237\u7AEF\u3001\u804A\u5929\u5BA4\u3001\u56FE\u6587\u76F4\u64AD</li><li>\u7B2C\u56DB\u5927\u7C7B\uFF1A\u5355\u9875\u9762\u6D4F\u89C8\u5668\u5E94\u7528\u7A0B\u5E8F</li><li>\u7B2C\u4E94\u5927\u7C7B\uFF1A\u64CD\u4F5C\u6570\u636E\u5E93\u3001\u4E3A\u524D\u7AEF\u548C\u79FB\u52A8\u7AEF\u63D0\u4F9B\u57FA\u4E8E<code>json</code>\u7684API</li></ul><p>\u5176\u5B9E\uFF0C<code>Nodejs</code>\u80FD\u5B9E\u73B0\u51E0\u4E4E\u4E00\u5207\u7684\u5E94\u7528\uFF0C\u53EA\u8003\u8651\u9002\u4E0D\u9002\u5408\u4F7F\u7528\u5B83</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',24),p={href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"},_=d("http://nodejs.cn/"),u={href:"https://segmentfault.com/a/1190000019854308",target:"_blank",rel:"noopener noreferrer"},f=d("https://segmentfault.com/a/1190000019854308"),m={href:"https://segmentfault.com/a/1190000005173218",target:"_blank",rel:"noopener noreferrer"},b=d("https://segmentfault.com/a/1190000005173218");function x(j,g){const a=r("ExternalLinkIcon");return c(),n(i,null,[h,e("ul",null,[e("li",null,[e("a",p,[_,o(a)])]),e("li",null,[e("a",u,[f,o(a)])]),e("li",null,[e("a",m,[b,o(a)])])])],64)}var I=t(s,[["render",x],["__file","index.html.vue"]]);export{I as default};
