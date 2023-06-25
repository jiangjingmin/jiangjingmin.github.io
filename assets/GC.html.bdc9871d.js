import{_ as r,r as o,o as t,c as n,a as l,b as a,F as s,d as e,e as c}from"./app.f6b3af9d.js";const u={},d=l("h1",{id:"js-\u7684\u5185\u5B58\u7BA1\u7406\u8DDF\u5783\u573E\u56DE\u6536\u673A\u5236",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#js-\u7684\u5185\u5B58\u7BA1\u7406\u8DDF\u5783\u573E\u56DE\u6536\u673A\u5236","aria-hidden":"true"},"#"),e(" Js \u7684\u5185\u5B58\u7BA1\u7406\u8DDF\u5783\u573E\u56DE\u6536\u673A\u5236")],-1),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_management",target:"_blank",rel:"noopener noreferrer"},p=e("\u5185\u5B58\u7BA1\u7406 - MDN"),_={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Garbage_collection",target:"_blank",rel:"noopener noreferrer"},f=e("\u5783\u573E\u56DE\u6536 - MDN"),m=c('<p>\u9996\u5148\u5206\u4E24\u79CD\u60C5\u51B5\uFF1AV8 \u5C06\u5185\u5B58\u5206\u6210 <strong>\u65B0\u751F\u4EE3\u7A7A\u95F4</strong> \u548C <strong>\u8001\u751F\u4EE3\u7A7A\u95F4</strong></p><ul><li>\u65B0\u751F\u4EE3\u7A7A\u95F4: \u7528\u4E8E\u5B58\u6D3B\u8F83\u77ED\u7684\u5BF9\u8C61 <ul><li>\u53C8\u5206\u6210\u4E24\u4E2A\u7A7A\u95F4: from \u7A7A\u95F4 \u4E0E to \u7A7A\u95F4</li><li>Scavenge GC \u7B97\u6CD5: \u5F53 from \u7A7A\u95F4\u88AB\u5360\u6EE1\u65F6\uFF0C\u542F\u52A8 GC \u7B97\u6CD5 <ul><li>\u5B58\u6D3B\u7684\u5BF9\u8C61\u4ECE from space \u8F6C\u79FB\u5230 to space</li><li>\u6E05\u7A7A from space</li><li>from space \u4E0E to space \u4E92\u6362</li><li>\u5B8C\u6210\u4E00\u6B21\u65B0\u751F\u4EE3 GC</li></ul></li></ul></li><li>\u8001\u751F\u4EE3\u7A7A\u95F4: \u7528\u4E8E\u5B58\u6D3B\u65F6\u95F4\u8F83\u957F\u7684\u5BF9\u8C61 <ul><li>\u4ECE \u65B0\u751F\u4EE3\u7A7A\u95F4 \u8F6C\u79FB\u5230 \u8001\u751F\u4EE3\u7A7A\u95F4 \u7684\u6761\u4EF6\uFF08\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u5BF9\u8C61\u664B\u5347\uFF09 <ul><li>\u7ECF\u5386\u8FC7\u4E00\u6B21\u4EE5\u4E0A Scavenge GC \u7684\u5BF9\u8C61</li><li>\u5F53 to space \u4F53\u79EF\u8D85\u8FC7 25%</li></ul></li><li>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\uFF1A\u6807\u8BB0\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u672A\u88AB\u6807\u8BB0\u7684\u5219\u88AB\u91CA\u653E <ul><li>\u589E\u91CF\u6807\u8BB0\uFF1A\u5C0F\u6A21\u5757\u6807\u8BB0\uFF0C\u5728\u4EE3\u7801\u6267\u884C\u95F4\u9699\u6267\uFF0CGC \u4F1A\u5F71\u54CD\u6027\u80FD</li><li>\u5E76\u53D1\u6807\u8BB0\uFF1A\u4E0D\u963B\u585E js \u6267\u884C</li></ul></li></ul></li></ul><h2 id="\u5185\u5B58\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u7BA1\u7406" aria-hidden="true">#</a> \u5185\u5B58\u7BA1\u7406</h2><p>JavaScript \u662F\u5728\u521B\u5EFA\u53D8\u91CF\uFF08\u5BF9\u8C61\uFF0C\u5B57\u7B26\u4E32\u7B49\uFF09\u65F6\u81EA\u52A8\u8FDB\u884C\u4E86\u5206\u914D\u5185\u5B58\uFF0C\u5E76\u4E14\u5728\u4E0D\u4F7F\u7528\u5B83\u4EEC\u65F6\u201C\u81EA\u52A8\u201D\u91CA\u653E\u3002\u91CA\u653E\u7684\u8FC7\u7A0B\u79F0\u4E3A\u5783\u573E\u56DE\u6536</p><h3 id="\u5185\u5B58\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u5185\u5B58\u751F\u547D\u5468\u671F</h3><p>\u4E0D\u7BA1\u4EC0\u4E48\u7A0B\u5E8F\u8BED\u8A00\uFF0C\u5185\u5B58\u751F\u547D\u5468\u671F\u57FA\u672C\u662F\u4E00\u81F4\u7684\uFF1A</p><p>\u5206\u914D\u4F60\u6240\u9700\u8981\u7684\u5185\u5B58 \u4F7F\u7528\u5206\u914D\u5230\u7684\u5185\u5B58\uFF08\u8BFB\u3001\u5199\uFF09 \u4E0D\u9700\u8981\u65F6\u5C06\u5176\u91CA\u653E\\\u5F52\u8FD8</p><ul><li>JavaScript \u7684\u5185\u5B58\u5206\u914D <ul><li>\u503C\u7684\u521D\u59CB\u5316 <ul><li>\u4E3A\u4E86\u4E0D\u8BA9\u7A0B\u5E8F\u5458\u8D39\u5FC3\u5206\u914D\u5185\u5B58\uFF0CJavaScript \u5728\u5B9A\u4E49\u53D8\u91CF\u65F6\u5C31\u5B8C\u6210\u4E86\u5185\u5B58\u5206\u914D\u3002</li></ul></li><li>\u901A\u8FC7\u51FD\u6570\u8C03\u7528\u5206\u914D\u5185\u5B58 <ul><li>\u6709\u4E9B\u51FD\u6570\u8C03\u7528\u7ED3\u679C\u662F\u5206\u914D\u5BF9\u8C61\u5185\u5B58</li><li>\u6709\u4E9B\u65B9\u6CD5\u5206\u914D\u65B0\u53D8\u91CF\u6216\u8005\u65B0\u5BF9\u8C61</li></ul></li></ul></li><li>\u4F7F\u7528\u503C <ul><li>\u4F7F\u7528\u503C\u7684\u8FC7\u7A0B\u5B9E\u9645\u4E0A\u662F\u5BF9\u5206\u914D\u5185\u5B58\u8FDB\u884C\u8BFB\u53D6\u4E0E\u5199\u5165\u7684\u64CD\u4F5C\u3002\u8BFB\u53D6\u4E0E\u5199\u5165\u53EF\u80FD\u662F\u5199\u5165\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\uFF0C\u751A\u81F3\u4F20\u9012\u51FD\u6570\u7684\u53C2\u6570\u3002</li></ul></li><li>\u5F53\u5185\u5B58\u4E0D\u518D\u9700\u8981\u4F7F\u7528\u65F6\u91CA\u653E <ul><li>\u5927\u591A\u6570\u5185\u5B58\u7BA1\u7406\u7684\u95EE\u9898\u90FD\u5728\u8FD9\u4E2A\u9636\u6BB5\u3002\u5728\u8FD9\u91CC\u6700\u8270\u96BE\u7684\u4EFB\u52A1\u662F\u627E\u5230\u201C\u54EA\u4E9B\u88AB\u5206\u914D\u7684\u5185\u5B58\u786E\u5B9E\u5DF2\u7ECF\u4E0D\u518D\u9700\u8981\u4E86\u201D\u3002</li></ul></li></ul><h2 id="\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536</h2><p>\u5982\u4E0A\u6587\u6240\u8FF0\u81EA\u52A8\u5BFB\u627E\u662F\u5426\u4E00\u4E9B\u5185\u5B58\u201C\u4E0D\u518D\u9700\u8981\u201D\u7684\u95EE\u9898\u662F\u65E0\u6CD5\u5224\u5B9A\u7684\u3002\u56E0\u6B64\uFF0C\u5783\u573E\u56DE\u6536\u5B9E\u73B0\u53EA\u80FD\u6709\u9650\u5236\u7684\u89E3\u51B3\u4E00\u822C\u95EE\u9898\u3002</p><ul><li>\u5F15\u7528</li><li>\u5F15\u7528\u8BA1\u6570\u5783\u573E\u6536\u96C6</li><li>\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5</li></ul>',11);function g(v,x){const i=o("ExternalLinkIcon");return t(),n(s,null,[d,l("ul",null,[l("li",null,[l("a",h,[p,a(i)])]),l("li",null,[l("a",_,[f,a(i)])])]),m],64)}var b=r(u,[["render",g],["__file","GC.html.vue"]]);export{b as default};
