import{_ as o,e as l}from"./app.cec2e512.js";const e={},i=l("<p><strong>\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8</strong></p><ul><li>\u5728\u8F83\u9AD8\u7248\u672C\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0Cjs\u63D0\u4F9B\u4E86sessionStorage\u548CglobalStorage\u3002\u5728HTML5\u4E2D\u63D0\u4F9B\u4E86localStorage\u6765\u53D6\u4EE3globalStorage</li><li>html5\u4E2D\u7684Web Storage\u5305\u62EC\u4E86\u4E24\u79CD\u5B58\u50A8\u65B9\u5F0F\uFF1AsessionStorage\u548ClocalStorage</li><li>sessionStorage\u7528\u4E8E\u672C\u5730\u5B58\u50A8\u4E00\u4E2A\u4F1A\u8BDD\uFF08session\uFF09\u4E2D\u7684\u6570\u636E\uFF0C\u8FD9\u4E9B\u6570\u636E\u53EA\u6709\u5728\u540C\u4E00\u4E2A\u4F1A\u8BDD\u4E2D\u7684\u9875\u9762\u624D\u80FD\u8BBF\u95EE\u5E76\u4E14\u5F53\u4F1A\u8BDD\u7ED3\u675F\u540E\u6570\u636E\u4E5F\u968F\u4E4B\u9500\u6BC1\u3002\u56E0\u6B64sessionStorage\u4E0D\u662F\u4E00\u79CD\u6301\u4E45\u5316\u7684\u672C\u5730\u5B58\u50A8\uFF0C\u4EC5\u4EC5\u662F\u4F1A\u8BDD\u7EA7\u522B\u7684\u5B58\u50A8</li><li>\u800ClocalStorage\u7528\u4E8E\u6301\u4E45\u5316\u7684\u672C\u5730\u5B58\u50A8\uFF0C\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E\uFF0C\u5426\u5219\u6570\u636E\u662F\u6C38\u8FDC\u4E0D\u4F1A\u8FC7\u671F\u7684</li></ul><p><strong>web storage\u548Ccookie\u7684\u533A\u522B</strong></p><ul><li>Web Storage\u7684\u6982\u5FF5\u548Ccookie\u76F8\u4F3C\uFF0C\u533A\u522B\u662F\u5B83\u662F\u4E3A\u4E86\u66F4\u5927\u5BB9\u91CF\u5B58\u50A8\u8BBE\u8BA1\u7684\u3002Cookie\u7684\u5927\u5C0F\u662F\u53D7\u9650\u7684\uFF0C\u5E76\u4E14\u6BCF\u6B21\u4F60\u8BF7\u6C42\u4E00\u4E2A\u65B0\u7684\u9875\u9762\u7684\u65F6\u5019Cookie\u90FD\u4F1A\u88AB\u53D1\u9001\u8FC7\u53BB\uFF0C\u8FD9\u6837\u65E0\u5F62\u4E2D\u6D6A\u8D39\u4E86\u5E26\u5BBD\uFF0C\u53E6\u5916cookie\u8FD8\u9700\u8981\u6307\u5B9A\u4F5C\u7528\u57DF\uFF0C\u4E0D\u53EF\u4EE5\u8DE8\u57DF\u8C03\u7528</li><li>\u9664\u6B64\u4E4B\u5916\uFF0CWebStorage\u62E5\u6709setItem,getItem,removeItem,clear\u7B49\u65B9\u6CD5\uFF0C\u4E0D\u50CFcookie\u9700\u8981\u524D\u7AEF\u5F00\u53D1\u8005\u81EA\u5DF1\u5C01\u88C5setCookie\uFF0CgetCookie</li><li>\u4F46\u662Fcookie\u4E5F\u662F\u4E0D\u53EF\u4EE5\u6216\u7F3A\u7684\uFF1Acookie\u7684\u4F5C\u7528\u662F\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u4EA4\u4E92\uFF0C\u4F5C\u4E3AHTTP\u89C4\u8303\u7684\u4E00\u90E8\u5206\u800C\u5B58\u5728 \uFF0C\u800CWeb Storage\u4EC5\u4EC5\u662F\u4E3A\u4E86\u5728\u672C\u5730\u201C\u5B58\u50A8\u201D\u6570\u636E\u800C\u751F</li><li>\u6D4F\u89C8\u5668\u7684\u652F\u6301\u9664\u4E86IE\uFF17\u53CA\u4EE5\u4E0B\u4E0D\u652F\u6301\u5916\uFF0C\u5176\u4ED6\u6807\u51C6\u6D4F\u89C8\u5668\u90FD\u5B8C\u5168\u652F\u6301(ie\u53CAFF\u9700\u5728web\u670D\u52A1\u5668\u91CC\u8FD0\u884C)\uFF0C\u503C\u5F97\u4E00\u63D0\u7684\u662FIE\u603B\u662F\u529E\u597D\u4E8B\uFF0C\u4F8B\u5982IE7\u3001IE6\u4E2D\u7684userData\u5176\u5B9E\u5C31\u662Fjavascript\u672C\u5730\u5B58\u50A8\u7684\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7\u7B80\u5355\u7684\u4EE3\u7801\u5C01\u88C5\u53EF\u4EE5\u7EDF\u4E00\u5230\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301web storage</li><li>localStorage\u548CsessionStorage\u90FD\u5177\u6709\u76F8\u540C\u7684\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u4F8B\u5982setItem\u3001getItem\u548CremoveItem\u7B49</li></ul><p><strong>cookie \u548Csession \u7684\u533A\u522B\uFF1A</strong></p><ul><li><p>1\u3001cookie\u6570\u636E\u5B58\u653E\u5728\u5BA2\u6237\u7684\u6D4F\u89C8\u5668\u4E0A\uFF0Csession\u6570\u636E\u653E\u5728\u670D\u52A1\u5668\u4E0A\u3002</p></li><li><p>2\u3001cookie\u4E0D\u662F\u5F88\u5B89\u5168\uFF0C\u522B\u4EBA\u53EF\u4EE5\u5206\u6790\u5B58\u653E\u5728\u672C\u5730\u7684COOKIE\u5E76\u8FDB\u884CCOOKIE\u6B3A\u9A97</p><ul><li>\u8003\u8651\u5230\u5B89\u5168\u5E94\u5F53\u4F7F\u7528session\u3002</li></ul></li><li><p>3\u3001session\u4F1A\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u4FDD\u5B58\u5728\u670D\u52A1\u5668\u4E0A\u3002\u5F53\u8BBF\u95EE\u589E\u591A\uFF0C\u4F1A\u6BD4\u8F83\u5360\u7528\u4F60\u670D\u52A1\u5668\u7684\u6027\u80FD</p><ul><li>\u8003\u8651\u5230\u51CF\u8F7B\u670D\u52A1\u5668\u6027\u80FD\u65B9\u9762\uFF0C\u5E94\u5F53\u4F7F\u7528COOKIE\u3002</li></ul></li><li><p>4\u3001\u5355\u4E2Acookie\u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC74K\uFF0C\u5F88\u591A\u6D4F\u89C8\u5668\u90FD\u9650\u5236\u4E00\u4E2A\u7AD9\u70B9\u6700\u591A\u4FDD\u5B5820\u4E2Acookie\u3002</p></li><li><p>5\u3001\u6240\u4EE5\u4E2A\u4EBA\u5EFA\u8BAE\uFF1A</p><ul><li><p>\u5C06\u767B\u9646\u4FE1\u606F\u7B49\u91CD\u8981\u4FE1\u606F\u5B58\u653E\u4E3ASESSION</p></li><li><p>\u5176\u4ED6\u4FE1\u606F\u5982\u679C\u9700\u8981\u4FDD\u7559\uFF0C\u53EF\u4EE5\u653E\u5728COOKIE\u4E2D</p></li></ul></li></ul><p><strong>\u63CF\u8FF0 cookies\u3001sessionStorage \u548C localStorage \u7684\u533A\u522B\uFF1F</strong></p><ul><li><p>\u4E0E\u670D\u52A1\u5668\u4EA4\u4E92\uFF1A</p><ul><li>cookie \u662F\u7F51\u7AD9\u4E3A\u4E86\u6807\u793A\u7528\u6237\u8EAB\u4EFD\u800C\u50A8\u5B58\u5728\u7528\u6237\u672C\u5730\u7EC8\u7AEF\u4E0A\u7684\u6570\u636E\uFF08\u901A\u5E38\u7ECF\u8FC7\u52A0\u5BC6\uFF09</li><li>cookie \u59CB\u7EC8\u4F1A\u5728\u540C\u6E90 http \u8BF7\u6C42\u5934\u4E2D\u643A\u5E26\uFF08\u5373\u4F7F\u4E0D\u9700\u8981\uFF09\uFF0C\u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u95F4\u6765\u56DE\u4F20\u9012</li><li>sessionStorage \u548C localStorage \u4E0D\u4F1A\u81EA\u52A8\u628A\u6570\u636E\u53D1\u7ED9\u670D\u52A1\u5668\uFF0C\u4EC5\u5728\u672C\u5730\u4FDD\u5B58</li></ul></li><li><p>\u5B58\u50A8\u5927\u5C0F\uFF1A</p></li></ul><ul><li>cookie \u6570\u636E\u6839\u636E\u4E0D\u540C\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u5927\u5C0F\u4E00\u822C\u4E0D\u80FD\u8D85\u8FC7 4k</li><li>sessionStorage \u548C localStorage \u867D\u7136\u4E5F\u6709\u5B58\u50A8\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u4F46\u6BD4cookie\u5927\u5F97\u591A\uFF0C\u53EF\u4EE5\u8FBE\u52305M\u6216\u66F4\u5927</li></ul><ul><li>\u6709\u671F\u65F6\u95F4\uFF1A <ul><li>localStorage \u5B58\u50A8\u6301\u4E45\u6570\u636E\uFF0C\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u6570\u636E\u4E0D\u4E22\u5931\u9664\u975E\u4E3B\u52A8\u5220\u9664\u6570\u636E</li><li>sessionStorage \u6570\u636E\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u5173\u95ED\u540E\u81EA\u52A8\u5220\u9664</li><li>cookie \u8BBE\u7F6E\u7684cookie\u8FC7\u671F\u65F6\u95F4\u4E4B\u524D\u4E00\u76F4\u6709\u6548\uFF0C\u4E0E\u6D4F\u89C8\u5668\u662F\u5426\u5173\u95ED\u65E0\u5173</li></ul></li></ul>",10);function s(t,a){return i}var c=o(e,[["render",s],["__file","localStorage.html.vue"]]);export{c as default};
