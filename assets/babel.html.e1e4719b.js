import{_ as e,e as l}from"./app.cec2e512.js";const a={},i=l('<h1 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h1><p>\u7B80\u5355\u5730\u8BF4\uFF0CBabel \u80FD\u591F\u8F6C\u8BD1 ECMAScript 2015+ \u7684\u4EE3\u7801\uFF0C\u4F7F\u5B83\u5728\u65E7\u7684\u6D4F\u89C8\u5668\u6216\u8005\u73AF\u5883\u4E2D\u4E5F\u80FD\u591F\u8FD0\u884C\u3002</p><p>Babel \u672C\u8D28\u4E0A\u5C31\u662F\u5728\u64CD\u4F5C \u62BD\u8C61\u8BED\u6CD5\u6811\uFF08Abstract Syntax Tree, AST\uFF09 \u6765\u5B8C\u6210\u4EE3\u7801\u7684\u8F6C\u8BD1\u3002</p><p>Babel \u539F\u7406\uFF1A\u9996\u5148\u5C06\u6E90\u7801\u8F6C\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u7136\u540E\u5BF9\u8BED\u6CD5\u6811\u8FDB\u884C\u5904\u7406\u751F\u6210\u65B0\u7684\u8BED\u6CD5\u6811\uFF0C\u6700\u540E\u5C06\u65B0\u8BED\u6CD5\u6811\u751F\u6210\u65B0\u7684 JS \u4EE3\u7801\uFF0C\u6574\u4E2A\u7F16\u8BD1\u8FC7\u7A0B\u53EF\u4EE5\u5206\u4E3A 3 \u4E2A\u9636\u6BB5 parsing (\u89E3\u6790)\u3001transforming (\u8F6C\u6362)\u3001generating (\u751F\u6210)</p><h3 id="_3-\u6A21\u677F\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_3-\u6A21\u677F\u5F15\u64CE" aria-hidden="true">#</a> 3. \u6A21\u677F\u5F15\u64CE</h3><p>\u4E00\u4E2A\u6A21\u677F\u5F15\u64CE\u5C31\u662F\u628A\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF\u7528model\u7684\u53D8\u91CF\u66FF\u6362\u6389\u3002</p><p>\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u6700\u7B80\u6A21\u677F\u5F15\u64CE</p><ol><li>\u6B63\u5219\u62A0\u51FA\u8981\u5339\u914D\u7684\u5185\u5BB9</li><li>\u88C5\u5165\u6570\u7EC4</li><li>\u5206\u8FA8js\u903B\u8F91\u90E8\u5206</li><li>\u5F15\u64CE\u51FD\u6570</li><li>\u628Adata\u6254\u8FDB\u53BB</li></ol><p>Vue \u6A21\u677F\u7F16\u8BD1\u539F\u7406</p><ul><li>\u7B2C\u4E00\u6B65\u662F\u5C06 \u6A21\u677F\u5B57\u7B26\u4E32 \u8F6C\u6362\u6210 element ASTs\uFF08\u89E3\u6790\u5668\uFF09</li><li>\u7B2C\u4E8C\u6B65\u662F\u5BF9 AST \u8FDB\u884C\u9759\u6001\u8282\u70B9\u6807\u8BB0\uFF0C\u4E3B\u8981\u7528\u6765\u505A\u865A\u62DFDOM\u7684\u6E32\u67D3\u4F18\u5316\uFF08\u4F18\u5316\u5668\uFF09</li><li>\u7B2C\u4E09\u6B65\u662F \u4F7F\u7528 element ASTs \u751F\u6210 render \u51FD\u6570\u4EE3\u7801\u5B57\u7B26\u4E32\uFF08\u4EE3\u7801\u751F\u6210\u5668\uFF09</li></ul><p>Vue \u6A21\u677F\u7F16\u8BD1\u8FC7\u7A0B</p><ul><li>\u89E3\u6790<strong>\u5F00\u59CB\u6807\u7B7E</strong>\uFF1A\u8FD9\u6BB5\u6A21\u677F\u5B57\u7B26\u4E32\u4F1A\u6254\u5230 while \u4E2D\u53BB\u5FAA\u73AF\uFF0C\u7136\u540E \u4E00\u6BB5\u4E00\u6BB5 \u7684\u622A\u53D6\uFF0C\u628A\u622A\u53D6\u5230\u7684 \u6BCF\u4E00\u5C0F\u6BB5\u5B57\u7B26\u4E32 \u8FDB\u884C\u89E3\u6790\uFF0C\u76F4\u5230\u6700\u540E\u622A\u6CA1\u4E86\uFF0C\u4E5F\u5C31\u89E3\u6790\u5B8C\u4E86\u3002</li><li>\u7EF4\u62A4stack\uFF1A\u7528\u6B63\u5219\u628A \u5F00\u59CB\u6807\u7B7E \u4E2D\u5305\u542B\u7684\u6570\u636E\uFF08attrs, tagName \u7B49\uFF09\u89E3\u6790\u51FA\u6765\u4E4B\u540E\u8FD8\u8981\u505A\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u4E8B\uFF0C\u5C31\u662F\u8981\u7EF4\u62A4\u4E00\u4E2A stack\u3002\u8FD9\u4E2A stack \u662F\u7528\u6765\u8BB0\u5F55\u4E00\u4E2A\u5C42\u7EA7\u5173\u7CFB\u7684\uFF0C\u7528\u6765\u8BB0\u5F55DOM\u7684\u6DF1\u5EA6\u3002</li><li>\u622A\u53D6\u6587\u672C\uFF1A\u7EE7\u7EED\u4E0A\u9762\u7684\u4F8B\u5B50\u89E3\u6790\u5269\u4F59\u7684\u6A21\u677F\u5B57\u7B26\u4E32</li><li>\u89E3\u6790\u6587\u672C\uFF1A</li><li>\u5904\u7406\u7ED3\u675F\u6807\u7B7E\uFF0Cpop\u51FA\u6765</li></ul>',12);function t(r,n){return i}var p=e(a,[["render",t],["__file","babel.html.vue"]]);export{p as default};
