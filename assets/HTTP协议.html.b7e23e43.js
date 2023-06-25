import{_ as e,e as o}from"./app.cec2e512.js";const t={},i=o(`<h1 id="http-\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#http-\u534F\u8BAE" aria-hidden="true">#</a> HTTP \u534F\u8BAE</h1><p>\u4E00\u9762\u4E2D\uFF0C\u5982\u679C\u6709\u7B14\u8BD5\uFF0C\u8003 HTTP \u534F\u8BAE\u7684\u53EF\u80FD\u6027\u8F83\u5927\u3002</p><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1. \u524D\u8A00</h2><p>\u4E00\u9762\u8981\u8BB2\u7684\u5185\u5BB9\uFF1A</p><ul><li><code>HTTP</code>\u534F\u8BAE\u7684\u4E3B\u8981\u7279\u70B9</li><li><code>HTTP</code>\u62A5\u6587\u7684\u7EC4\u6210\u90E8\u5206</li><li><code>HTTP</code>\u65B9\u6CD5</li><li><code>get</code> \u548C <code>post</code>\u7684\u533A\u522B</li><li><code>HTTP</code>\u72B6\u6001\u7801</li><li>\u4EC0\u4E48\u662F\u6301\u4E45\u8FDE\u63A5</li><li>\u4EC0\u4E48\u662F\u7BA1\u7EBF\u5316</li></ul><p>\u4E8C\u9762\u8981\u8BB2\u7684\u5185\u5BB9\uFF1A</p><ul><li>\u7F13\u5B58</li><li><code>CSRF</code>\u653B\u51FB</li></ul><h2 id="_2-http-\u534F\u8BAE\u7684\u4E3B\u8981\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-http-\u534F\u8BAE\u7684\u4E3B\u8981\u7279\u70B9" aria-hidden="true">#</a> 2. HTTP \u534F\u8BAE\u7684\u4E3B\u8981\u7279\u70B9</h2><ul><li>\u7B80\u5355\u5FEB\u901F</li><li>\u7075\u6D3B</li><li><strong>\u65E0\u8FDE\u63A5</strong></li><li><strong>\u65E0\u72B6\u6001</strong></li></ul><blockquote><p>\u901A\u5E38\u6211\u4EEC\u8981\u7B54\u51FA\u4EE5\u4E0A\u56DB\u4E2A\u5185\u5BB9\u3002\u5982\u679C\u5B9E\u5728\u8BB0\u4E0D\u4F4F\uFF0C\u4E00\u5B9A\u8981\u8BB0\u5F97\u540E\u9762\u7684\u4E24\u4E2A\uFF1A<strong>\u65E0\u8FDE\u63A5\u3001\u65E0\u72B6\u6001</strong>\u3002</p></blockquote><p>\u6211\u4EEC\u5206\u522B\u6765\u89E3\u91CA\u4E00\u4E0B\u3002</p><h3 id="_2-1-\u7B80\u5355\u5FEB\u901F" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7B80\u5355\u5FEB\u901F" aria-hidden="true">#</a> 2.1 \u7B80\u5355\u5FEB\u901F</h3><blockquote><p><strong>\u7B80\u5355</strong>\uFF1A\u6BCF\u4E2A\u8D44\u6E90\uFF08\u6BD4\u5982\u56FE\u7247\u3001\u9875\u9762\uFF09\u90FD\u901A\u8FC7 url \u6765\u5B9A\u4F4D\u3002\u8FD9\u90FD\u662F\u56FA\u5B9A\u7684\uFF0C\u5728<code>http</code>\u534F\u8BAE\u4E2D\uFF0C\u5904\u7406\u8D77\u6765\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u60F3\u8BBF\u95EE\u4EC0\u4E48\u8D44\u6E90\uFF0C\u76F4\u63A5\u8F93\u5165 url \u5373\u53EF\u3002</p></blockquote><h3 id="_2-2-\u7075\u6D3B" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7075\u6D3B" aria-hidden="true">#</a> 2.2 \u7075\u6D3B</h3><blockquote><p><code>http</code>\u534F\u8BAE\u7684\u5934\u90E8\u6709\u4E00\u4E2A<code>\u6570\u636E\u7C7B\u578B</code>\uFF0C\u901A\u8FC7<code>http</code>\u534F\u8BAE\uFF0C\u5C31\u53EF\u4EE5\u5B8C\u6210\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684\u4F20\u8F93\u3002</p></blockquote><h3 id="_2-3-\u65E0\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-3-\u65E0\u8FDE\u63A5" aria-hidden="true">#</a> 2.3 \u65E0\u8FDE\u63A5</h3><blockquote><p>\u8FDE\u63A5\u4E00\u6B21\uFF0C\u5C31\u4F1A\u65AD\u5F00\uFF0C\u4E0D\u4F1A\u7EE7\u7EED\u4FDD\u6301\u8FDE\u63A5\u3002</p></blockquote><h3 id="_2-4-\u65E0\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-4-\u65E0\u72B6\u6001" aria-hidden="true">#</a> 2.4 \u65E0\u72B6\u6001</h3><blockquote><p>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u662F\u4E24\u79CD\u8EAB\u4EFD\u3002\u7B2C\u4E00\u6B21\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u5C31\u65AD\u5F00\u4E86\uFF0C\u7B2C\u4E8C\u6B21\u8BF7\u6C42\u65F6\uFF0C<strong>\u670D\u52A1\u5668\u7AEF\u5E76\u6CA1\u6709\u8BB0\u4F4F\u4E4B\u524D\u7684\u72B6\u6001</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u670D\u52A1\u5668\u7AEF\u65E0\u6CD5\u533A\u5206\u5BA2\u6237\u7AEF\u662F\u5426\u4E3A\u540C\u4E00\u4E2A\u4EBA\u3001\u540C\u4E00\u4E2A\u8EAB\u4EFD\u3002</p><p>\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BBF\u95EE\u7F51\u7AD9\u65F6\uFF0C\u7F51\u7AD9\u80FD\u8BB0\u4F4F\u6211\u4EEC\u7684\u8D26\u53F7\uFF0C\u8FD9\u4E2A\u662F\u901A\u8FC7\u5176\u4ED6\u7684\u624B\u6BB5\uFF08\u6BD4\u5982 <code>session</code>\uFF09\u505A\u5230\u7684\uFF0C\u5E76\u4E0D\u662F<code>http</code>\u534F\u8BAE\u80FD\u505A\u5230\u7684\u3002</p></blockquote><h2 id="_3-http-\u62A5\u6587\u7684\u7EC4\u6210\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_3-http-\u62A5\u6587\u7684\u7EC4\u6210\u90E8\u5206" aria-hidden="true">#</a> 3 HTTP \u62A5\u6587\u7684\u7EC4\u6210\u90E8\u5206</h2><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1400.png" alt="20180306_1400"></p><blockquote><p>\u5728\u56DE\u7B54\u6B64\u95EE\u9898\u65F6\uFF0C\u6211\u4EEC\u8981\u6309\u7167\u987A\u5E8F\u56DE\u7B54\uFF1A</p></blockquote><ul><li>\u5148\u56DE\u7B54\u7684\u662F\uFF0C<code>http</code>\u62A5\u6587\u5305\u62EC\uFF1A<strong>\u8BF7\u6C42\u62A5\u6587</strong>\u548C<strong>\u54CD\u5E94\u62A5\u6587</strong>\u3002</li><li>\u518D\u56DE\u7B54\u7684\u662F\uFF0C\u6BCF\u4E2A\u62A5\u6587\u5305\u542B\u4EC0\u4E48\u90E8\u5206\u3002</li><li>\u6700\u540E\u56DE\u7B54\uFF0C\u6BCF\u4E2A\u90E8\u5206\u7684\u5185\u5BB9\u662F\u4EC0\u4E48</li></ul><h3 id="_3-1-\u8BF7\u6C42\u62A5\u6587\u5305\u62EC" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BF7\u6C42\u62A5\u6587\u5305\u62EC" aria-hidden="true">#</a> 3.1 \u8BF7\u6C42\u62A5\u6587\u5305\u62EC</h3><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180228_1505.jpg" alt="20180228_1505"></p><ul><li>\u8BF7\u6C42\u884C\uFF1A\u5305\u62EC\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u7684<code>url</code>\u3001<code>http</code>\u534F\u8BAE\u53CA\u7248\u672C\u3002</li><li>\u8BF7\u6C42\u5934\uFF1A\u4E00\u5927\u5806\u7684\u952E\u503C\u5BF9\u3002</li><li><strong>\u7A7A\u884C</strong>\u6307\u7684\u662F\uFF1A\u5F53\u670D\u52A1\u5668\u5728\u89E3\u6790\u8BF7\u6C42\u5934\u7684\u65F6\u5019\uFF0C\u5982\u679C\u9047\u5230\u4E86\u7A7A\u884C\uFF0C\u5219\u8868\u660E\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u662F\u8BF7\u6C42\u4F53</li><li>\u8BF7\u6C42\u4F53\uFF1A\u6570\u636E\u90E8\u5206\u3002</li></ul><h3 id="_3-2-\u54CD\u5E94\u62A5\u6587\u5305\u62EC" tabindex="-1"><a class="header-anchor" href="#_3-2-\u54CD\u5E94\u62A5\u6587\u5305\u62EC" aria-hidden="true">#</a> 3.2 \u54CD\u5E94\u62A5\u6587\u5305\u62EC</h3><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180228_1510.jpg" alt="20180228_1510"></p><ul><li>\u72B6\u6001\u884C\uFF1A<code>http</code>\u534F\u8BAE\u53CA\u7248\u672C\u3001\u72B6\u6001\u7801\u53CA\u72B6\u6001\u63CF\u8FF0\u3002</li><li>\u54CD\u5E94\u5934</li><li>\u7A7A\u884C</li><li>\u54CD\u5E94\u4F53</li></ul><h2 id="_4-http-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-http-\u65B9\u6CD5" aria-hidden="true">#</a> 4 HTTP \u65B9\u6CD5</h2><p>\u5305\u62EC\uFF1A</p><ul><li><code>GET</code>\uFF1A\u83B7\u53D6\u8D44\u6E90</li><li><code>POST</code>\uFF1A\u4F20\u8F93\u8D44\u6E90</li><li><code>put</code>\uFF1A\u66F4\u65B0\u8D44\u6E90</li><li><code>DELETE</code>\uFF1A\u5220\u9664\u8D44\u6E90</li><li><code>HEAD</code>\uFF1A\u83B7\u5F97\u62A5\u6587\u9996\u90E8</li></ul><blockquote><p><code>HTTP</code>\u65B9\u6CD5\u6709\u5F88\u591A\uFF0C\u4F46\u662F\u4E0A\u9762\u8FD9\u4E94\u4E2A\u65B9\u6CD5\uFF0C\u8981\u6C42\u5728\u9762\u8BD5\u65F6\u5168\u90E8\u8BF4\u51FA\u6765\uFF0C\u4E0D\u8981\u6F0F\u6389\u3002</p></blockquote><ul><li><code>get</code> \u548C <code>post</code> \u6BD4\u8F83\u5E38\u89C1\u3002</li><li><code>put</code> \u548C <code>delete</code> \u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u7528\u7684\u5F88\u5C11\u3002\u51B5\u4E14\uFF0C\u4E1A\u52A1\u4E2D\uFF0C\u4E00\u822C\u4E0D\u5220\u9664\u670D\u52A1\u5668\u7AEF\u7684\u8D44\u6E90\u3002</li><li><code>head</code> \u53EF\u80FD\u5076\u5C14\u7528\u7684\u5230\u3002</li></ul><h2 id="_5-get-\u548C-post-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_5-get-\u548C-post-\u7684\u533A\u522B" aria-hidden="true">#</a> 5 get \u548C post \u7684\u533A\u522B</h2><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1415.png" alt="20180306_1415"></p><ul><li>\u533A\u522B\u6709\u5F88\u591A\uFF0C\u5982\u679C\u8BB0\u4E0D\u4F4F\uFF0C\u9762\u8BD5\u65F6\uFF0C\u81F3\u5C11\u8981\u4EFB\u610F\u7B54\u51FA\u5176\u4E2D\u7684\u4E09\u56DB\u6761\u3002</li><li>\u6709\u4E00\u70B9\u8981\u5F3A\u8C03\uFF0C<strong>get \u662F\u76F8\u5BF9\u4E0D\u9690\u79C1\u7684\uFF0C\u800C post \u662F\u76F8\u5BF9\u9690\u79C1\u7684</strong>\u3002</li></ul><blockquote><p>\u6211\u4EEC\u5927\u6982\u8981\u8BB0\u4F4F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p></blockquote><ol><li>\u6D4F\u89C8\u5668\u5728\u56DE\u9000\u65F6\uFF0C<code>get</code> <strong>\u4E0D\u4F1A\u91CD\u65B0\u8BF7\u6C42</strong>\uFF0C\u4F46\u662F<code>post</code>\u4F1A\u91CD\u65B0\u8BF7\u6C42\u3002\u3010\u91CD\u8981\u3011</li><li><code>get</code>\u8BF7\u6C42\u4F1A\u88AB\u6D4F\u89C8\u5668<strong>\u4E3B\u52A8\u7F13\u5B58</strong>\uFF0C\u800C<code>post</code>\u4E0D\u4F1A\u3002\u3010\u91CD\u8981\u3011</li><li><code>get</code>\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u4F1A<strong>\u4FDD\u7559</strong>\u5728\u6D4F\u89C8\u5668\u7684<strong>\u5386\u53F2\u8BB0\u5F55</strong>\u91CC\uFF0C\u800C<code>post</code>\u4E0D\u4F1A\u3002\u505A\u4E1A\u52A1\u65F6\u8981\u6CE8\u610F\u3002\u4E3A\u4E86\u9632\u6B62<code>CSRF</code>\u653B\u51FB\uFF0C\u5F88\u591A\u516C\u53F8\u628A<code>get</code>\u7EDF\u4E00\u6539\u6210\u4E86<code>post</code>\u3002</li><li><code>get</code>\u8BF7\u6C42\u5728<code>url</code>\u4E2D\u4F20\u9012\u7684\u53C2\u6570\u6709\u5927\u5C0F\u9650\u5236\uFF0C\u57FA\u672C\u662F<code>2kb</code>\uFF0C\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u7565\u6709\u4E0D\u540C\u3002\u800C post \u6CA1\u6709\u6CE8\u610F\u3002</li><li><code>get</code>\u7684\u53C2\u6570\u662F\u76F4\u63A5\u66B4\u9732\u5728<code>url</code>\u4E0A\u7684\uFF0C\u76F8\u5BF9\u4E0D\u5B89\u5168\u3002\u800C<code>post</code>\u662F\u653E\u5728\u8BF7\u6C42\u4F53\u4E2D\u7684\u3002</li></ol><h2 id="_6-http-\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#_6-http-\u72B6\u6001\u7801" aria-hidden="true">#</a> 6 http \u72B6\u6001\u7801</h2><blockquote><p><code>http</code>\u72B6\u6001\u7801\u5206\u7C7B\uFF1A</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1430.png" alt="20180306_1430"></p><blockquote><p>\u5E38\u89C1\u7684<code>http</code>\u72B6\u6001\u7801\uFF1A</p></blockquote><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1431.png" alt="20180306_1431"></p><p><strong>\u90E8\u5206\u89E3\u91CA</strong>\uFF1A</p><ul><li><code>206</code>\u7684\u5E94\u7528\uFF1A<code>range</code>\u6307\u7684\u662F\u8BF7\u6C42\u7684\u8303\u56F4\uFF0C\u5BA2\u6237\u7AEF\u53EA\u8BF7\u6C42\u67D0\u4E2A\u5927\u6587\u4EF6\u91CC\u7684\u4E00\u90E8\u5206\u5185\u5BB9\u3002\u6BD4\u5982\u8BF4\uFF0C\u5982\u679C\u64AD\u653E\u89C6\u9891\u5730\u5740\u6216\u97F3\u9891\u5730\u5740\u7684\u524D\u9762\u4E00\u90E8\u5206\uFF0C\u53EF\u4EE5\u7528\u5230<code>206</code>\u3002</li><li><code>301</code>\uFF1A\u91CD\u5B9A\u5411\uFF08\u6C38\u4E45\uFF09\u3002</li><li><code>302</code>\uFF1A\u91CD\u5B9A\u5411\uFF08\u4E34\u65F6\uFF09\u3002</li><li><code>304</code>\uFF1A\u6211\u8FD9\u4E2A\u670D\u52A1\u5668\u544A\u8BC9\u5BA2\u6237\u7AEF\uFF0C\u4F60\u5DF2\u7ECF\u6709\u7F13\u5B58\u4E86\uFF0C\u4E0D\u9700\u8981\u4ECE\u6211\u8FD9\u91CC\u53D6\u4E86\u3002</li></ul><p><img src="https://gitee.com/jiangjingmin/picbed/raw/master/kyxiao/interview/20180306_1440.png" alt="20180306_1440"></p><ul><li><code>400</code>\u548C<code>401</code>\u7528\u7684\u4E0D\u591A\uFF0C\u672A\u6388\u6743\u3002<code>403</code>\u6307\u7684\u662F\u8BF7\u6C42\u88AB\u62D2\u7EDD\u3002<code>404</code>\u6307\u7684\u662F\u8D44\u6E90\u4E0D\u5B58\u5728\u3002</li></ul><h2 id="_7-\u6301\u4E45\u94FE\u63A5-http-\u957F\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_7-\u6301\u4E45\u94FE\u63A5-http-\u957F\u8FDE\u63A5" aria-hidden="true">#</a> 7 \u6301\u4E45\u94FE\u63A5/http \u957F\u8FDE\u63A5</h2><blockquote><p>\u5982\u679C\u4F60\u80FD\u7B54\u51FA\u6301\u4E45\u94FE\u63A5\uFF0C\u8FD9\u662F\u9762\u8BD5\u5B98\u5F88\u60F3\u77E5\u9053\u7684\u4E00\u4E2A\u70B9\u3002</p></blockquote><ul><li><strong>\u8F6E\u8BE2</strong>\uFF1A<code>http1.0</code>\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u9694\u5F88\u77ED\u7684\u65F6\u95F4\uFF0C\u90FD\u4F1A\u5BF9\u670D\u52A1\u5668\u53D1\u51FA\u8BF7\u6C42\uFF0C\u67E5\u770B\u662F\u5426\u6709\u65B0\u7684\u6D88\u606F\uFF0C\u53EA\u8981\u8F6E\u8BE2\u901F\u5EA6\u8DB3\u591F\u5FEB\uFF0C\u4F8B\u5982<code>1</code>\u79D2\uFF0C\u5C31\u80FD\u7ED9\u4EBA\u9020\u6210\u4EA4\u4E92\u662F\u5B9E\u65F6\u8FDB\u884C\u7684\u5370\u8C61\u3002\u8FD9\u79CD\u505A\u6CD5\u662F\u65E0\u5948\u4E4B\u4E3E\uFF0C\u5B9E\u9645\u4E0A\u5BF9\u670D\u52A1\u5668\u3001\u5BA2\u6237\u7AEF\u53CC\u65B9\u90FD\u9020\u6210\u4E86\u5927\u91CF\u7684\u6027\u80FD\u6D6A\u8D39\u3002</li><li><strong>\u957F\u8FDE\u63A5</strong>\uFF1A<code>HTTP1.1</code>\u4E2D\uFF0C\u901A\u8FC7\u4F7F\u7528<code>Connection:keep-alive</code>\u8FDB\u884C\u957F\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u53EA\u8BF7\u6C42\u4E00\u6B21\uFF0C\u4F46\u662F\u670D\u52A1\u5668\u4F1A\u5C06\u7EE7\u7EED\u4FDD\u6301\u8FDE\u63A5\uFF0C\u5F53\u518D\u6B21\u8BF7\u6C42\u65F6\uFF0C\u907F\u514D\u4E86\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u3002</li></ul><blockquote><p>\u6CE8\u610F\uFF0C<code>HTTP 1.1</code>\u9ED8\u8BA4\u8FDB\u884C\u6301\u4E45\u8FDE\u63A5\u3002\u5728\u4E00\u6B21 <code>TCP</code> \u8FDE\u63A5\u4E2D\u53EF\u4EE5\u5B8C\u6210\u591A\u4E2A <code>HTTP</code> \u8BF7\u6C42\uFF0C\u4F46\u662F\u5BF9<strong>\u6BCF\u4E2A\u8BF7\u6C42\u4ECD\u7136\u8981\u5355\u72EC\u53D1 header</strong>\uFF0C<code>Keep-Alive</code>\u4E0D\u4F1A\u6C38\u4E45\u4FDD\u6301\u8FDE\u63A5\uFF0C\u5B83\u6709\u4E00\u4E2A\u4FDD\u6301\u65F6\u95F4\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u670D\u52A1\u5668\u8F6F\u4EF6\uFF08\u5982<code>Apache</code>\uFF09\u4E2D\u8BBE\u5B9A\u8FD9\u4E2A\u65F6\u95F4\u3002</p></blockquote><h2 id="_8-\u957F\u8FDE\u63A5\u4E2D\u7684\u7BA1\u7EBF\u5316" tabindex="-1"><a class="header-anchor" href="#_8-\u957F\u8FDE\u63A5\u4E2D\u7684\u7BA1\u7EBF\u5316" aria-hidden="true">#</a> 8 \u957F\u8FDE\u63A5\u4E2D\u7684\u7BA1\u7EBF\u5316</h2><blockquote><p>\u5982\u679C\u80FD\u7B54\u51FA<strong>\u7BA1\u7EBF\u5316</strong>\uFF0C\u5219\u5C5E\u4E8E\u52A0\u5206\u9879\u3002</p></blockquote><h3 id="_8-1-\u7BA1\u7EBF\u5316\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_8-1-\u7BA1\u7EBF\u5316\u7684\u539F\u7406" aria-hidden="true">#</a> 8.1 \u7BA1\u7EBF\u5316\u7684\u539F\u7406</h3><blockquote><p>\u957F\u8FDE\u63A5\u65F6\uFF0C<strong>\u9ED8\u8BA4</strong>\u7684\u8BF7\u6C42\u8FD9\u6837\u7684\uFF1A</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BF7\u6C421 --&gt; \u54CD\u5E941 --&gt;\u8BF7\u6C422 --&gt; \u54CD\u5E942 --&gt; \u8BF7\u6C423 --&gt; \u54CD\u5E943
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u7BA1\u7EBF\u5316\u5C31\u662F\uFF0C\u6211\u628A\u73B0\u5728\u7684\u8BF7\u6C42\u6253\u5305\uFF0C\u4E00\u6B21\u6027\u53D1\u8FC7\u53BB\uFF0C\u4F60\u4E5F\u7ED9\u6211\u4E00\u6B21\u54CD\u5E94\u56DE\u6765\u3002</p></blockquote><h3 id="_8-2-\u7BA1\u7EBF\u5316\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_8-2-\u7BA1\u7EBF\u5316\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 8.2 \u7BA1\u7EBF\u5316\u7684\u6CE8\u610F\u4E8B\u9879</h3><blockquote><p>\u9762\u8BD5\u65F6\uFF0C\u4E0D\u4F1A\u6DF1\u7A76\u7BA1\u7EBF\u5316\u3002\u5982\u679C\u771F\u8981\u95EE\u4F60\uFF0C\u5C31\u56DE\u7B54\uFF1A\u201C\u6211\u6CA1\u600E\u4E48\u7814\u7A76\u8FC7\uFF0C\u51C6\u5907\u56DE\u53BB\u770B\u770B~\u201D</p></blockquote>`,60);function d(c,a){return i}var r=e(t,[["render",d],["__file","HTTP\u534F\u8BAE.html.vue"]]);export{r as default};
