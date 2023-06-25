import{_ as d,r as c,o as i,c as p,a as e,b as o,F as r,e as h,d as t}from"./app.cec2e512.js";var n="/assets/http_pc_server.630b5c76.png",l="/assets/http_01.255c582d.png",s="/assets/http_02.83f8a801.png",T="/assets/http_03.82578a7c.png",_="/assets/http_04.3520e7d6.png";const u={},m=h('<h1 id="http-1-0-1-1-2-0" tabindex="-1"><a class="header-anchor" href="#http-1-0-1-1-2-0" aria-hidden="true">#</a> HTTP 1.0/1.1/2.0</h1><h2 id="\u4E00\u3001http1-0" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001http1-0" aria-hidden="true">#</a> \u4E00\u3001HTTP1.0</h2><p><code>HTTP</code>\u534F\u8BAE\u7684\u7B2C\u4E8C\u4E2A\u7248\u672C\uFF0C\u7B2C\u4E00\u4E2A\u5728\u901A\u8BAF\u4E2D\u6307\u5B9A\u7248\u672C\u53F7\u7684 HTTP \u534F\u8BAE\u7248\u672C</p><p><code>HTTP 1.0</code> \u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u53EA\u4FDD\u6301\u77ED\u6682\u7684\u8FDE\u63A5\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u9700\u8981\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u4E00\u4E2A<code>TCP</code>\u8FDE\u63A5</p><p>\u670D\u52A1\u5668\u5B8C\u6210\u8BF7\u6C42\u5904\u7406\u540E\u7ACB\u5373\u65AD\u5F00<code>TCP</code>\u8FDE\u63A5\uFF0C\u670D\u52A1\u5668\u4E0D\u8DDF\u8E2A\u6BCF\u4E2A\u5BA2\u6237\u4E5F\u4E0D\u8BB0\u5F55\u8FC7\u53BB\u7684\u8BF7\u6C42</p><p>\u7B80\u5355\u6765\u8BB2\uFF0C\u6BCF\u6B21\u4E0E\u670D\u52A1\u5668\u4EA4\u4E92\uFF0C\u90FD\u9700\u8981\u65B0\u5F00\u4E00\u4E2A\u8FDE\u63A5</p><p><img src="'+n+'" alt="image"></p><p>\u4F8B\u5982\uFF0C\u89E3\u6790<code>html</code>\u6587\u4EF6\uFF0C\u5F53\u53D1\u73B0\u6587\u4EF6\u4E2D\u5B58\u5728\u8D44\u6E90\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u8FD9\u65F6\u5019\u53C8\u521B\u5EFA\u5355\u72EC\u7684\u94FE\u63A5</p><p>\u6700\u7EC8\u5BFC\u81F4\uFF0C\u4E00\u4E2A<code>html</code>\u6587\u4EF6\u7684\u8BBF\u95EE\u5305\u542B\u4E86\u591A\u6B21\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u9700\u8981\u521B\u5EFA\u8FDE\u63A5\u3001\u5173\u7CFB\u8FDE\u63A5</p><p>\u8FD9\u79CD\u5F62\u5F0F\u660E\u663E\u9020\u6210\u4E86\u6027\u80FD\u4E0A\u7684\u7F3A\u9677</p><p>\u5982\u679C\u9700\u8981\u5EFA\u7ACB\u957F\u8FDE\u63A5\uFF0C\u9700\u8981\u8BBE\u7F6E\u4E00\u4E2A\u975E\u6807\u51C6\u7684 Connection \u5B57\u6BB5 <code>Connection: keep-alive</code></p><h2 id="\u4E8C\u3001http1-1" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001http1-1" aria-hidden="true">#</a> \u4E8C\u3001HTTP1.1</h2><p>\u5728<code>HTTP1.1</code>\u4E2D\uFF0C\u9ED8\u8BA4\u652F\u6301\u957F\u8FDE\u63A5\uFF08<code>Connection: keep-alive</code>\uFF09\uFF0C\u5373\u5728\u4E00\u4E2A TCP \u8FDE\u63A5\u4E0A\u53EF\u4EE5\u4F20\u9001\u591A\u4E2A<code>HTTP</code>\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u51CF\u5C11\u4E86\u5EFA\u7ACB\u548C\u5173\u95ED\u8FDE\u63A5\u7684\u6D88\u8017\u548C\u5EF6\u8FDF</p><p>\u5EFA\u7ACB\u4E00\u6B21\u8FDE\u63A5\uFF0C\u591A\u6B21\u8BF7\u6C42\u5747\u7531\u8FD9\u4E2A\u8FDE\u63A5\u5B8C\u6210</p><p><img src="'+l+'" alt="image"></p><p>\u8FD9\u6837\uFF0C\u5728\u52A0\u8F7D<code>html</code>\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u6587\u4EF6\u4E2D\u591A\u4E2A\u8BF7\u6C42\u548C\u54CD\u5E94\u5C31\u53EF\u4EE5\u5728\u4E00\u4E2A\u8FDE\u63A5\u4E2D\u4F20\u8F93</p><p>\u540C\u65F6\uFF0C<code>HTTP 1.1</code>\u8FD8\u5141\u8BB8\u5BA2\u6237\u7AEF\u4E0D\u7528\u7B49\u5F85\u4E0A\u4E00\u6B21\u8BF7\u6C42\u7ED3\u679C\u8FD4\u56DE\uFF0C\u5C31\u53EF\u4EE5\u53D1\u51FA\u4E0B\u4E00\u6B21\u8BF7\u6C42\uFF0C\u4F46\u670D\u52A1\u5668\u7AEF\u5FC5\u987B\u6309\u7167\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5148\u540E\u987A\u5E8F\u4F9D\u6B21\u56DE\u9001\u54CD\u5E94\u7ED3\u679C\uFF0C\u4EE5\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u80FD\u591F\u533A\u5206\u51FA\u6BCF\u6B21\u8BF7\u6C42\u7684\u54CD\u5E94\u5185\u5BB9\uFF0C\u8FD9\u6837\u4E5F\u663E\u8457\u5730\u51CF\u5C11\u4E86\u6574\u4E2A\u4E0B\u8F7D\u8FC7\u7A0B\u6240\u9700\u8981\u7684\u65F6\u95F4</p><p>\u540C\u65F6\uFF0C<code>HTTP1.1</code>\u5728<code>HTTP1.0</code>\u7684\u57FA\u7840\u4E0A\uFF0C\u589E\u52A0\u66F4\u591A\u7684\u8BF7\u6C42\u5934\u548C\u54CD\u5E94\u5934\u6765\u5B8C\u5584\u7684\u529F\u80FD\uFF0C\u5982\u4E0B\uFF1A</p><ul><li>\u5F15\u5165\u4E86\u66F4\u591A\u7684\u7F13\u5B58\u63A7\u5236\u7B56\u7565\uFF0C\u5982 If-Unmodified-Since, If-Match, If-None-Match \u7B49\u7F13\u5B58\u5934\u6765\u63A7\u5236\u7F13\u5B58\u7B56\u7565</li><li>\u5F15\u5165 range\uFF0C\u5141\u8BB8\u503C\u8BF7\u6C42\u8D44\u6E90\u67D0\u4E2A\u90E8\u5206</li><li>\u5F15\u5165 host\uFF0C\u5B9E\u73B0\u4E86\u5728\u4E00\u53F0 WEB \u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\u4E0A\u4F7F\u7528\u4E0D\u540C\u7684\u4E3B\u673A\u540D\u6765\u521B\u5EFA\u591A\u4E2A\u865A\u62DF WEB \u7AD9\u70B9</li></ul><p>\u5E76\u4E14\u8FD8\u6DFB\u52A0\u4E86\u5176\u4ED6\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF1A<code>put</code>\u3001<code>delete</code>\u3001<code>options</code>...</p><h2 id="\u4E09\u3001http2-0" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001http2-0" aria-hidden="true">#</a> \u4E09\u3001HTTP2.0</h2><p>\u800C<code>HTTP2.0</code>\u5728\u76F8\u6BD4\u4E4B\u524D\u7248\u672C\uFF0C\u6027\u80FD\u4E0A\u6709\u5F88\u5927\u7684\u63D0\u5347\uFF0C\u5982\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7279\u6027\uFF1A</p><ul><li>\u591A\u8DEF\u590D\u7528</li><li>\u4E8C\u8FDB\u5236\u5206\u5E27</li><li>\u9996\u90E8\u538B\u7F29</li><li>\u670D\u52A1\u5668\u63A8\u9001</li></ul><h3 id="\u591A\u8DEF\u590D\u7528" tabindex="-1"><a class="header-anchor" href="#\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a> \u591A\u8DEF\u590D\u7528</h3><p><code>HTTP/2</code> \u590D\u7528<code>TCP</code>\u8FDE\u63A5\uFF0C\u5728\u4E00\u4E2A\u8FDE\u63A5\u91CC\uFF0C\u5BA2\u6237\u7AEF\u548C\u6D4F\u89C8\u5668\u90FD\u53EF\u4EE5<strong>\u540C\u65F6</strong>\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42\u6216\u56DE\u5E94\uFF0C\u800C\u4E14\u4E0D\u7528\u6309\u7167\u987A\u5E8F\u4E00\u4E00\u5BF9\u5E94\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u4E86\u201D\u961F\u5934\u5835\u585E\u201D</p><p><img src="'+s+'" alt="image"></p><p>\u4E0A\u56FE\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u7B2C\u56DB\u6B65\u4E2D<code>css</code>\u3001<code>js</code>\u8D44\u6E90\u662F\u540C\u65F6\u53D1\u9001\u5230\u670D\u52A1\u7AEF</p><h3 id="\u4E8C\u8FDB\u5236\u5206\u5E27" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5206\u5E27" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u5206\u5E27</h3><p>\u5E27\u662F<code>HTTP2</code>\u901A\u4FE1\u4E2D\u6700\u5C0F\u5355\u4F4D\u4FE1\u606F</p><p><code>HTTP/2</code> \u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u4F20\u8F93\u6570\u636E\uFF0C\u800C\u975E <code>HTTP 1.x</code>\u7684\u6587\u672C\u683C\u5F0F\uFF0C\u89E3\u6790\u8D77\u6765\u66F4\u9AD8\u6548</p><p>\u5C06\u8BF7\u6C42\u548C\u54CD\u5E94\u6570\u636E\u5206\u5272\u4E3A\u66F4\u5C0F\u7684\u5E27\uFF0C\u5E76\u4E14\u5B83\u4EEC\u91C7\u7528\u4E8C\u8FDB\u5236\u7F16\u7801</p><p><code>HTTP2</code>\u4E2D\uFF0C\u540C\u57DF\u540D\u4E0B\u6240\u6709\u901A\u4FE1\u90FD\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u5B8C\u6210\uFF0C\u8BE5\u8FDE\u63A5\u53EF\u4EE5\u627F\u8F7D\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41</p><p>\u6BCF\u4E2A\u6570\u636E\u6D41\u90FD\u4EE5\u6D88\u606F\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u800C\u6D88\u606F\u53C8\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\u3002\u591A\u4E2A\u5E27\u4E4B\u95F4\u53EF\u4EE5\u4E71\u5E8F\u53D1\u9001\uFF0C\u6839\u636E\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u53EF\u4EE5\u91CD\u65B0\u7EC4\u88C5\uFF0C\u8FD9\u4E5F\u662F\u591A\u8DEF\u590D\u7528\u540C\u65F6\u53D1\u9001\u6570\u636E\u7684\u5B9E\u73B0\u6761\u4EF6</p><h3 id="\u9996\u90E8\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u9996\u90E8\u538B\u7F29" aria-hidden="true">#</a> \u9996\u90E8\u538B\u7F29</h3><p><code>HTTP/2</code>\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u4F7F\u7528\u201C\u9996\u90E8\u8868\u201D\u6765\u8DDF\u8E2A\u548C\u5B58\u50A8\u4E4B\u524D\u53D1\u9001\u7684\u952E\u503C\u5BF9\uFF0C\u5BF9\u4E8E\u76F8\u540C\u7684\u6570\u636E\uFF0C\u4E0D\u518D\u901A\u8FC7\u6BCF\u6B21\u8BF7\u6C42\u548C\u54CD\u5E94\u53D1\u9001</p><p>\u9996\u90E8\u8868\u5728<code>HTTP/2</code>\u7684\u8FDE\u63A5\u5B58\u7EED\u671F\u5185\u59CB\u7EC8\u5B58\u5728\uFF0C\u7531\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5171\u540C\u6E10\u8FDB\u5730\u66F4\u65B0</p><p>\u4F8B\u5982\uFF1A\u4E0B\u56FE\u4E2D\u7684\u4E24\u4E2A\u8BF7\u6C42\uFF0C \u8BF7\u6C42\u4E00\u53D1\u9001\u4E86\u6240\u6709\u7684\u5934\u90E8\u5B57\u6BB5\uFF0C\u7B2C\u4E8C\u4E2A\u8BF7\u6C42\u5219\u53EA\u9700\u8981\u53D1\u9001\u5DEE\u5F02\u6570\u636E\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u5197\u4F59\u6570\u636E\uFF0C\u964D\u4F4E\u5F00\u9500</p><p><img src="'+T+'" alt="image"></p><h3 id="\u670D\u52A1\u5668\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u63A8\u9001" aria-hidden="true">#</a> \u670D\u52A1\u5668\u63A8\u9001</h3><p><code>HTTP2</code>\u5F15\u5165\u670D\u52A1\u5668\u63A8\u9001\uFF0C\u5141\u8BB8\u670D\u52A1\u7AEF\u63A8\u9001\u8D44\u6E90\u7ED9\u5BA2\u6237\u7AEF</p><p>\u670D\u52A1\u5668\u4F1A\u987A\u4FBF\u628A\u4E00\u4E9B\u5BA2\u6237\u7AEF\u9700\u8981\u7684\u8D44\u6E90\u4E00\u8D77\u63A8\u9001\u5230\u5BA2\u6237\u7AEF\uFF0C\u5982\u5728\u54CD\u5E94\u4E00\u4E2A\u9875\u9762\u8BF7\u6C42\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u968F\u540C\u9875\u9762\u7684\u5176\u5B83\u8D44\u6E90</p><p>\u514D\u5F97\u5BA2\u6237\u7AEF\u518D\u6B21\u521B\u5EFA\u8FDE\u63A5\u53D1\u9001\u8BF7\u6C42\u5230\u670D\u52A1\u5668\u7AEF\u83B7\u53D6</p><p>\u8FD9\u79CD\u65B9\u5F0F\u975E\u5E38\u5408\u9002\u52A0\u8F7D\u9759\u6001\u8D44\u6E90</p><p><img src="'+_+'" alt="image"></p><h2 id="\u56DB\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u56DB\u3001\u603B\u7ED3</h2><p>HTTP1.0\uFF1A</p><ul><li>\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u53EA\u4FDD\u6301\u77ED\u6682\u7684\u8FDE\u63A5\uFF0C\u6D4F\u89C8\u5668\u7684\u6BCF\u6B21\u8BF7\u6C42\u90FD\u9700\u8981\u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u4E00\u4E2A TCP \u8FDE\u63A5</li></ul><p>HTTP1.1\uFF1A</p><ul><li>\u5F15\u5165\u4E86\u6301\u4E45\u8FDE\u63A5\uFF0C\u5373 TCP \u8FDE\u63A5\u9ED8\u8BA4\u4E0D\u5173\u95ED\uFF0C\u53EF\u4EE5\u88AB\u591A\u4E2A\u8BF7\u6C42\u590D\u7528</li><li>\u5728\u540C\u4E00\u4E2A TCP \u8FDE\u63A5\u91CC\u9762\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u540C\u65F6\u53D1\u9001\u591A\u4E2A\u8BF7\u6C42</li><li>\u867D\u7136\u5141\u8BB8\u590D\u7528 TCP \u8FDE\u63A5\uFF0C\u4F46\u662F\u540C\u4E00\u4E2A TCP \u8FDE\u63A5\u91CC\u9762\uFF0C\u6240\u6709\u7684\u6570\u636E\u901A\u4FE1\u662F\u6309\u6B21\u5E8F\u8FDB\u884C\u7684\uFF0C\u670D\u52A1\u5668\u53EA\u6709\u5904\u7406\u5B8C\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u624D\u4F1A\u63A5\u7740\u5904\u7406\u4E0B\u4E00\u4E2A\u8BF7\u6C42\u3002\u5982\u679C\u524D\u9762\u7684\u5904\u7406\u7279\u522B\u6162\uFF0C\u540E\u9762\u5C31\u4F1A\u6709\u8BB8\u591A\u8BF7\u6C42\u6392\u961F\u7B49\u7740</li><li>\u65B0\u589E\u4E86\u4E00\u4E9B\u8BF7\u6C42\u65B9\u6CD5</li><li>\u65B0\u589E\u4E86\u4E00\u4E9B\u8BF7\u6C42\u5934\u548C\u54CD\u5E94\u5934</li></ul><p>HTTP2.0\uFF1A</p><ul><li>\u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u800C\u975E\u6587\u672C\u683C\u5F0F</li><li>\u5B8C\u5168\u591A\u8DEF\u590D\u7528\uFF0C\u800C\u975E\u6709\u5E8F\u5E76\u963B\u585E\u7684\u3001\u53EA\u9700\u4E00\u4E2A\u8FDE\u63A5\u5373\u53EF\u5B9E\u73B0\u5E76\u884C</li><li>\u4F7F\u7528\u62A5\u5934\u538B\u7F29\uFF0C\u964D\u4F4E\u5F00\u9500</li><li>\u670D\u52A1\u5668\u63A8\u9001</li></ul><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',52),P={href:"https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE#HTTP/1.0",target:"_blank",rel:"noopener noreferrer"},f=t("https://zh.wikipedia.org/wiki/\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE#HTTP/1.0"),g={href:"https://www.jianshu.com/p/52d86558ca57",target:"_blank",rel:"noopener noreferrer"},H=t("https://www.jianshu.com/p/52d86558ca57"),x={href:"https://segmentfault.com/a/1190000016496448",target:"_blank",rel:"noopener noreferrer"},b=t("https://segmentfault.com/a/1190000016496448"),C={href:"https://zhuanlan.zhihu.com/p/26559480",target:"_blank",rel:"noopener noreferrer"},E=t("https://zhuanlan.zhihu.com/p/26559480");function k(v,w){const a=c("ExternalLinkIcon");return i(),p(r,null,[m,e("ul",null,[e("li",null,[e("a",P,[f,o(a)])]),e("li",null,[e("a",g,[H,o(a)])]),e("li",null,[e("a",x,[b,o(a)])]),e("li",null,[e("a",C,[E,o(a)])])])],64)}var z=d(u,[["render",k],["__file","1.0_1.1_2.0.html.vue"]]);export{z as default};
