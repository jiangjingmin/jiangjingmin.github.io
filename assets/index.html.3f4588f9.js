import{_ as t,r as c,o,a as l,b as a,e as s,F as r,c as p,d as n}from"./app.a7f79250.js";const i={},d=p('<h1 id="\u5BF9webpack\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5BF9webpack\u7684\u7406\u89E3-\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> \u5BF9webpack\u7684\u7406\u89E3\uFF1F\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F</h1><p><img src="https://static.vue-js.com/898ed570-a578-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="_1-webpack" tabindex="-1"><a class="header-anchor" href="#_1-webpack" aria-hidden="true">#</a> 1. Webpack</h3>',3),u={href:"https://juejin.im/post/6844903588607557639",target:"_blank",rel:"noopener noreferrer"},h=n("\u5E26\u4F60\u8D70\u8FDBwebpack\u4E16\u754C\uFF0C\u6210\u4E3Awebpack\u5934\u53F7\u73A9\u5BB6\u3002"),k={href:"https://juejin.im/post/6844903853905674248",target:"_blank",rel:"noopener noreferrer"},b=n("\u5173\u4E8Ewebpack4\u768414\u4E2A\u77E5\u8BC6\u70B9,\u7AE5\u53DF\u65E0\u6B3A"),m=p('<p>\u53EF\u4EE5\u770B\u505A\u4E00\u4E2A\u6A21\u5757\u5316\u6253\u5305\u673A\uFF0C\u5206\u6790\u9879\u76EE\u7ED3\u6784\uFF0C\u5904\u7406\u6A21\u5757\u5316\u4F9D\u8D56\uFF0C\u8F6C\u6362\u6210\u4E3A\u6D4F\u89C8\u5668\u53EF\u8FD0\u884C\u7684\u4EE3\u7801\u3002</p><ul><li>\u4EE3\u7801\u8F6C\u6362: TypeScript \u7F16\u8BD1\u6210 JavaScript\u3001SCSS,LESS \u7F16\u8BD1\u6210 CSS.</li><li>\u6587\u4EF6\u4F18\u5316\uFF1A\u538B\u7F29 JavaScript\u3001CSS\u3001HTML \u4EE3\u7801\uFF0C\u538B\u7F29\u5408\u5E76\u56FE\u7247\u3002</li><li>\u4EE3\u7801\u5206\u5272\uFF1A\u63D0\u53D6\u591A\u4E2A\u9875\u9762\u7684\u516C\u5171\u4EE3\u7801\u3001\u63D0\u53D6\u9996\u5C4F\u4E0D\u9700\u8981\u6267\u884C\u90E8\u5206\u7684\u4EE3\u7801\u8BA9\u5176\u5F02\u6B65\u52A0\u8F7D\u3002</li><li>\u6A21\u5757\u5408\u5E76\uFF1A\u5728\u91C7\u7528\u6A21\u5757\u5316\u7684\u9879\u76EE\u91CC\u4F1A\u6709\u5F88\u591A\u4E2A\u6A21\u5757\u548C\u6587\u4EF6\uFF0C\u9700\u8981\u6784\u5EFA\u529F\u80FD\u628A\u6A21\u5757\u5206\u7C7B\u5408\u5E76\u6210\u4E00\u4E2A\u6587\u4EF6\u3002</li><li>\u81EA\u52A8\u5237\u65B0\uFF1A\u76D1\u542C\u672C\u5730\u6E90\u4EE3\u7801\u7684\u53D8\u5316\uFF0C\u81EA\u52A8\u91CD\u65B0\u6784\u5EFA\u3001\u5237\u65B0\u6D4F\u89C8\u5668\u3002</li></ul><p>\u6784\u5EFA\u628A\u4E00\u7CFB\u5217\u524D\u7AEF\u4EE3\u7801\u81EA\u52A8\u5316\u53BB\u5904\u7406\u590D\u6742\u7684\u6D41\u7A0B\uFF0C\u89E3\u653E\u751F\u4EA7\u529B\u3002</p><h4 id="_1-1-webpack\u914D\u7F6Eentry\u6709\u51E0\u4E2A" tabindex="-1"><a class="header-anchor" href="#_1-1-webpack\u914D\u7F6Eentry\u6709\u51E0\u4E2A" aria-hidden="true">#</a> 1.1 webpack\u914D\u7F6Eentry\u6709\u51E0\u4E2A</h4><h4 id="_1-2-webpack\u7684\u6784\u5EFA\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-2-webpack\u7684\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a> 1.2 webpack\u7684\u6784\u5EFA\u6D41\u7A0B</h4><p>webpack\u7684\u6784\u5EFA\u6D41\u7A0B\u5305\u62ECcompile\u3001make\u3001build\u3001seal\u3001emit\u9636\u6BB5\u3002</p><ul><li>\u521D\u59CB\u5316\u53C2\u6570: \u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u53C2\u6570\u3002</li><li>\u5F00\u59CB\u7F16\u8BD1: \u6839\u636E\u6211\u4EEC\u7684webpack\u914D\u7F6E\u6CE8\u518C\u597D\u5BF9\u5E94\u7684\u63D2\u4EF6\u8C03\u7528 compile.run \u8FDB\u5165\u7F16\u8BD1\u9636\u6BB5,\u5728\u7F16\u8BD1\u7684\u7B2C\u4E00\u9636\u6BB5\u662F compilation\uFF0C\u4ED6\u4F1A\u6CE8\u518C\u597D\u4E0D\u540C\u7C7B\u578B\u7684module\u5BF9\u5E94\u7684 factory\uFF0C\u4E0D\u7136\u540E\u9762\u78B0\u5230\u4E86\u5C31\u4E0D\u77E5\u9053\u5982\u4F55\u5904\u7406\u4E86\u3002</li><li>\u7F16\u8BD1\u6A21\u5757: \u8FDB\u5165 make \u9636\u6BB5\uFF0C\u4F1A\u4ECE entry \u5F00\u59CB\u8FDB\u884C\u4E24\u6B65\u64CD\u4F5C\uFF1A\u7B2C\u4E00\u6B65\u662F\u8C03\u7528 loaders \u5BF9\u6A21\u5757\u7684\u539F\u59CB\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8F6C\u6362\u6210\u6807\u51C6\u7684JS\u4EE3\u7801, \u7B2C\u4E8C\u6B65\u662F\u8C03\u7528 acorn \u5BF9JS\u4EE3\u7801\u8FDB\u884C\u8BED\u6CD5\u5206\u6790\uFF0C\u7136\u540E\u6536\u96C6\u5176\u4E2D\u7684\u4F9D\u8D56\u5173\u7CFB\u3002\u6BCF\u4E2A\u6A21\u5757\u90FD\u4F1A\u8BB0\u5F55\u81EA\u5DF1\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4ECE\u800C\u5F62\u6210\u4E00\u9897\u5173\u7CFB\u6811\u3002</li><li>\u8F93\u51FA\u8D44\u6E90\uFF1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868\uFF0C\u8FD9\u6B65\u662F\u53EF\u4EE5\u4FEE\u6539\u8F93\u51FA\u5185\u5BB9\u7684\u6700\u540E\u673A\u4F1A\u3002</li><li>\u8F93\u51FA\u5B8C\u6210\uFF1A\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF\u3002</li></ul><h4 id="_1-3-webpack\u548Crollup\u6709\u4EC0\u4E48\u76F8\u540C\u548C\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-3-webpack\u548Crollup\u6709\u4EC0\u4E48\u76F8\u540C\u548C\u4E0D\u540C\u70B9" aria-hidden="true">#</a> 1.3 webpack\u548Crollup\u6709\u4EC0\u4E48\u76F8\u540C\u548C\u4E0D\u540C\u70B9\uFF1F</h4><h4 id="_1-4-\u4ECB\u7ECD\u4E00\u4E0Bloader" tabindex="-1"><a class="header-anchor" href="#_1-4-\u4ECB\u7ECD\u4E00\u4E0Bloader" aria-hidden="true">#</a> 1.4 \u4ECB\u7ECD\u4E00\u4E0BLoader</h4>',9),_={href:"https://github.com/axuebin/articles/issues/38",target:"_blank",rel:"noopener noreferrer"},g=n("\u524D\u7AEF\u5DE5\u7A0B\u5E08\u90FD\u5F97\u638C\u63E1\u7684 webpack Loader"),w=n(" Loader \u7684\u4F5C\u7528\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5904\u7406\u4EFB\u610F\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u5B83\u4EEC\u8F6C\u6362\u6210\u4E00\u4E2A\u8BA9 webpack \u53EF\u4EE5\u5904\u7406\u7684\u6709\u6548\u6A21\u5757\u3002"),f=p('<p>\u5E38\u7528\u7684Loader\u6709\uFF1Ajs-<code>babel-loader</code>\u3001css-<code>style-loader``css-loader</code>\u3001``</p><p>Loader \u53EF\u4EE5\u5728 webpack.config.js \u91CC\u914D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u5728 require \u8BED\u53E5\u91CC\u5185\u8054\uFF1B</p><h5 id="_1-4-1-\u5728config\u91CC\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-4-1-\u5728config\u91CC\u914D\u7F6E" aria-hidden="true">#</a> 1.4.1 \u5728config\u91CC\u914D\u7F6E</h5><p>Loader \u53EF\u4EE5\u5728 webpack.config.js\u91CC\u914D\u7F6E\uFF0C\u8FD9\u4E5F\u662F\u63A8\u8350\u7684\u505A\u6CD5\uFF0C\u5B9A\u4E49\u5728 module.rules \u91CC\u3002</p><p>\u6BCF\u4E00\u6761 rule \u4F1A\u5305\u542B\u4E24\u4E2A\u5C5E\u6027\uFF1Atest \u548C use\uFF0C\u6BD4\u5982 { test: /.js$/, use: &#39;babel-loader&#39; } \u610F\u601D\u5C31\u662F\uFF1A\u5F53 webpack \u9047\u5230\u6269\u5C55\u540D\u4E3A js \u7684\u6587\u4EF6\u65F6\uFF0C\u5148\u7528 babel-loader \u5904\u7406\u4E00\u4E0B\uFF0C\u7136\u540E\u518D\u6253\u5305\u5B83\u3002</p><h5 id="_1-4-2-loader-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-4-2-loader-\u7C7B\u578B" aria-hidden="true">#</a> 1.4.2 Loader \u7C7B\u578B</h5><ol><li>\u540C\u6B65Loader\uFF1Athis.callback()</li><li>\u5F02\u6B65Loader\uFF1Athis.async()</li><li>Pitching Loader\uFF1A</li><li>Raw Loader\uFF1A</li></ol><h4 id="_1-5-\u4ECB\u7ECD\u4E00\u4E0Bplugin" tabindex="-1"><a class="header-anchor" href="#_1-5-\u4ECB\u7ECD\u4E00\u4E0Bplugin" aria-hidden="true">#</a> 1.5 \u4ECB\u7ECD\u4E00\u4E0BPlugin</h4><p>\u901A\u8FC7\u63D2\u4EF6\uFF0C\u6269\u5C55 webpack\uFF0C\u52A0\u5165\u81EA\u5B9A\u4E49\u7684\u6784\u5EFA\u884C\u4E3A\uFF0C\u4F7F webpack \u53EF\u4EE5\u6267\u884C\u66F4\u5E7F\u6CDB\u7684\u4EFB\u52A1\uFF0C\u62E5\u6709\u66F4\u5F3A\u7684\u6784\u5EFA\u80FD\u529B\u3002</p><h4 id="_1-6-webpack-\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u5B9E\u73B0\u7684" tabindex="-1"><a class="header-anchor" href="#_1-6-webpack-\u70ED\u66F4\u65B0\u662F\u5982\u4F55\u5B9E\u73B0\u7684" aria-hidden="true">#</a> 1.6 webpack \u70ED\u66F4\u65B0\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F</h4>',10),v={href:"https://juejin.im/post/6844904008432222215",target:"_blank",rel:"noopener noreferrer"},j=n("\u8F7B\u677E\u7406\u89E3webpack\u70ED\u66F4\u65B0\u539F\u7406"),x=p(`<p>Hot Module Replacement\uFF0C\u7B80\u79F0HMR\uFF0C\u65E0\u9700\u5B8C\u5168\u5237\u65B0\u6574\u4E2A\u9875\u9762\u7684\u540C\u65F6\uFF0C\u66F4\u65B0\u6A21\u5757\u3002HMR\u7684\u597D\u5904\uFF0C\u5728\u65E5\u5E38\u5F00\u53D1\u5DE5\u4F5C\u4E2D\u4F53\u4F1A\u9887\u6DF1\uFF1A\u8282\u7701\u5B9D\u8D35\u7684\u5F00\u53D1\u65F6\u95F4\u3001\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C\u3002</p><ol><li>webpack-dev-server\u542F\u52A8\u672C\u5730\u670D\u52A1\uFF1A\u6211\u4EEC\u6839\u636Ewebpack-dev-server\u7684package.json\u4E2D\u7684bin\u547D\u4EE4\uFF0C\u53EF\u4EE5\u627E\u5230\u547D\u4EE4\u7684\u5165\u53E3\u6587\u4EF6bin/webpack-dev-server.js\u3002</li><li>\u4FEE\u6539webpack.config.js\u7684entry\u914D\u7F6E</li><li>\u76D1\u542Cwebpack\u7F16\u8BD1\u7ED3\u675F</li><li>webpack\u76D1\u542C\u6587\u4EF6\u53D8\u5316</li><li>\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u70ED\u66F4\u65B0\u7684\u901A\u77E5</li><li>HotModuleReplacementPlugin \u6216 --hot</li><li>moudle.hot.check \u5F00\u59CB\u70ED\u66F4\u65B0</li><li>hotApply \u70ED\u66F4\u65B0\u6A21\u5757\u66FF\u6362 <ul><li>\u5220\u9664\u8FC7\u671F\u7684\u6A21\u5757\uFF0C\u5C31\u662F\u9700\u8981\u66FF\u6362\u7684\u6A21\u5757</li><li>\u5C06\u65B0\u7684\u6A21\u5757\u6DFB\u52A0\u5230 modules \u4E2D</li><li>\u901A\u8FC7__webpack_require__\u6267\u884C\u76F8\u5173\u6A21\u5757\u7684\u4EE3\u7801</li></ul></li></ol><h4 id="_1-7-webpack-\u5C42\u9762\u5982\u4F55\u505A\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_1-7-webpack-\u5C42\u9762\u5982\u4F55\u505A\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> 1.7 webpack \u5C42\u9762\u5982\u4F55\u505A\u6027\u80FD\u4F18\u5316</h4><h4 id="_1-8-\u4ECB\u7ECD\u4E00\u4E0B-webpack-\u7684-dll" tabindex="-1"><a class="header-anchor" href="#_1-8-\u4ECB\u7ECD\u4E00\u4E0B-webpack-\u7684-dll" aria-hidden="true">#</a> 1.8 \u4ECB\u7ECD\u4E00\u4E0B webpack \u7684 dll</h4><p>DLL\u52A8\u6001\u94FE\u63A5</p><p>\u7B2C\u4E09\u5E93\u4E0D\u662F\u7ECF\u5E38\u66F4\u65B0\uFF0C\u6253\u5305\u7684\u65F6\u5019\u5E0C\u671B\u5206\u5F00\u6253\u5305\uFF0C\u6765\u63D0\u5347\u6253\u5305\u901F\u5EA6\u3002\u6253\u5305dll\u9700\u8981\u65B0\u5EFA\u4E00\u4E2Awebpack\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u6253\u5305dll\u7684\u65F6\u5019\uFF0Cwebpack\u505A\u4E00\u4E2A\u7D22\u5F15\uFF0C\u5199\u5728manifest\u6587\u4EF6\u4E2D\u3002\u7136\u540E\u6253\u5305\u9879\u76EE\u6587\u4EF6\u65F6\u53EA\u9700\u8981\u8BFB\u53D6manifest\u6587\u4EF6\u3002</p><h4 id="_1-9-\u4ECB\u7ECD\u4E00\u4E0B-webpack-\u7684-tree-shaking" tabindex="-1"><a class="header-anchor" href="#_1-9-\u4ECB\u7ECD\u4E00\u4E0B-webpack-\u7684-tree-shaking" aria-hidden="true">#</a> 1.9 \u4ECB\u7ECD\u4E00\u4E0B webpack \u7684 tree-shaking</h4><p>webpack 4 \u53EA\u9700\u8981\u914D\u7F6Emode\u4E3A <code>production</code>\u5373\u53EF</p><h2 id="\u4E00\u3001\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u80CC\u666F" aria-hidden="true">#</a> \u4E00\u3001\u80CC\u666F</h2><p><code>Webpack</code> \u6700\u521D\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u524D\u7AEF\u9879\u76EE\u7684\u6A21\u5757\u5316\uFF0C\u65E8\u5728\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u7EF4\u62A4\u9879\u76EE\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8D44\u6E90</p><h4 id="\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a> \u6A21\u5757\u5316</h4><p>\u6700\u65E9\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7\u6587\u4EF6\u5212\u5206\u7684\u5F62\u5F0F\u5B9E\u73B0\u6A21\u5757\u5316\uFF0C\u4E5F\u5C31\u662F\u5C06\u6BCF\u4E2A\u529F\u80FD\u53CA\u5176\u76F8\u5173\u72B6\u6001\u6570\u636E\u5404\u81EA\u5355\u72EC\u653E\u5230\u4E0D\u540C\u7684<code>JS</code> \u6587\u4EF6\u4E2D</p><p>\u7EA6\u5B9A\u6BCF\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6A21\u5757\uFF0C\u7136\u540E\u518D\u5C06\u8FD9\u4E9B<code>js</code>\u6587\u4EF6\u5F15\u5165\u5230\u9875\u9762\uFF0C\u4E00\u4E2A<code>script</code>\u6807\u7B7E\u5BF9\u5E94\u4E00\u4E2A\u6A21\u5757\uFF0C\u7136\u540E\u8C03\u7528\u6A21\u5757\u5316\u7684\u6210\u5458</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module-a.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module-b.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F46\u8FD9\u79CD\u6A21\u5757\u5F0A\u7AEF\u5341\u5206\u7684\u660E\u663E\uFF0C\u6A21\u5757\u90FD\u662F\u5728\u5168\u5C40\u4E2D\u5DE5\u4F5C\uFF0C\u5927\u91CF\u6A21\u5757\u6210\u5458\u6C61\u67D3\u4E86\u73AF\u5883\uFF0C\u6A21\u5757\u4E0E\u6A21\u5757\u4E4B\u95F4\u5E76\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\u3001\u7EF4\u62A4\u56F0\u96BE\u3001\u6CA1\u6709\u79C1\u6709\u7A7A\u95F4\u7B49\u95EE\u9898</p><p>\u9879\u76EE\u4E00\u65E6\u53D8\u5927\uFF0C\u4E0A\u8FF0\u95EE\u9898\u4F1A\u5C24\u5176\u660E\u663E</p><p>\u968F\u540E\uFF0C\u5C31\u51FA\u73B0\u4E86\u547D\u540D\u7A7A\u95F4\u65B9\u5F0F\uFF0C\u89C4\u5B9A\u6BCF\u4E2A\u6A21\u5757\u53EA\u66B4\u9732\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C\u7136\u540E\u6A21\u5757\u7684\u5185\u5BB9\u90FD\u6302\u8F7D\u5230\u8FD9\u4E2A\u5BF9\u8C61\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA#method1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u5E76\u6CA1\u6709\u89E3\u51B3\u7B2C\u4E00\u79CD\u65B9\u5F0F\u7684\u4F9D\u8D56\u7B49\u95EE\u9898</p><p>\u518D\u540E\u6765\uFF0C\u6211\u4EEC\u4F7F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u4E3A\u6A21\u5757\u63D0\u4F9B\u79C1\u6709\u7A7A\u95F4\uFF0C\u901A\u8FC7\u53C2\u6570\u7684\u5F62\u5F0F\u4F5C\u4E3A\u4F9D\u8D56\u58F0\u660E\uFF0C\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// module-a.js</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;module-a&#39;</span>

  <span class="token keyword">function</span> <span class="token function">method1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&#39;#method1&#39;</span><span class="token punctuation">)</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  window<span class="token punctuation">.</span>moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method1</span><span class="token operator">:</span> method1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0A\u8FF0\u7684\u65B9\u5F0F\u90FD\u662F\u65E9\u671F\u89E3\u51B3\u6A21\u5757\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u4ECD\u7136\u5B58\u5728\u4E00\u4E9B\u6CA1\u6709\u89E3\u51B3\u7684\u95EE\u9898\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u662F\u7528\u8FC7<code>script</code>\u6807\u7B7E\u5728\u9875\u9762\u5F15\u5165\u8FD9\u4E9B\u6A21\u5757\u7684\uFF0C\u8FD9\u4E9B\u6A21\u5757\u7684\u52A0\u8F7D\u5E76\u4E0D\u53D7\u4EE3\u7801\u7684\u63A7\u5236\uFF0C\u65F6\u95F4\u4E00\u4E45\u7EF4\u62A4\u8D77\u6765\u4E5F\u5341\u5206\u7684\u9EBB\u70E6</p><p>\u7406\u60F3\u7684\u89E3\u51B3\u65B9\u5F0F\u662F\uFF0C\u5728\u9875\u9762\u4E2D\u5F15\u5165\u4E00\u4E2A<code>JS</code>\u5165\u53E3\u6587\u4EF6\uFF0C\u5176\u4F59\u7528\u5230\u7684\u6A21\u5757\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\uFF0C\u6309\u9700\u52A0\u8F7D\u8FDB\u6765</p><p>\u9664\u4E86\u6A21\u5757\u52A0\u8F7D\u7684\u95EE\u9898\u4EE5\u5916\uFF0C\u8FD8\u9700\u8981\u89C4\u5B9A\u6A21\u5757\u5316\u7684\u89C4\u8303\uFF0C\u5982\u4ECA\u6D41\u884C\u7684\u5219\u662F<code>CommonJS</code>\u3001<code>ES Modules</code></p><h2 id="\u4E8C\u3001\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u95EE\u9898" aria-hidden="true">#</a> \u4E8C\u3001\u95EE\u9898</h2><p>\u4ECE\u540E\u7AEF\u6E32\u67D3\u7684<code>JSP</code>\u3001<code>PHP</code>\uFF0C\u5230\u524D\u7AEF\u539F\u751F<code>JavaScript</code>\uFF0C\u518D\u5230<code>jQuery</code>\u5F00\u53D1\uFF0C\u518D\u5230\u76EE\u524D\u7684\u4E09\u5927\u6846\u67B6<code>Vue</code>\u3001<code>React</code>\u3001<code>Angular</code></p><p>\u5F00\u53D1\u65B9\u5F0F\uFF0C\u4E5F\u4ECE<code>javascript</code>\u5230\u540E\u9762\u7684<code>es5</code>\u3001<code>es6\u30017\u30018\u30019\u300110</code>\uFF0C\u518D\u5230<code>typescript</code>\uFF0C\u5305\u62EC\u7F16\u5199<code>CSS</code>\u7684\u9884\u5904\u7406\u5668<code>less</code>\u3001<code>scss</code>\u7B49</p><p>\u73B0\u4EE3\u524D\u7AEF\u5F00\u53D1\u5DF2\u7ECF\u53D8\u5F97\u5341\u5206\u7684\u590D\u6742\uFF0C\u6240\u4EE5\u6211\u4EEC\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F1A\u9047\u5230\u5982\u4E0B\u7684\u95EE\u9898\uFF1A</p><ul><li>\u9700\u8981\u901A\u8FC7\u6A21\u5757\u5316\u7684\u65B9\u5F0F\u6765\u5F00\u53D1</li><li>\u4F7F\u7528\u4E00\u4E9B\u9AD8\u7EA7\u7684\u7279\u6027\u6765\u52A0\u5FEB\u6211\u4EEC\u7684\u5F00\u53D1\u6548\u7387\u6216\u8005\u5B89\u5168\u6027\uFF0C\u6BD4\u5982\u901A\u8FC7ES6+\u3001TypeScript\u5F00\u53D1\u811A\u672C\u903B\u8F91\uFF0C\u901A\u8FC7sass\u3001less\u7B49\u65B9\u5F0F\u6765\u7F16\u5199css\u6837\u5F0F\u4EE3\u7801</li><li>\u76D1\u542C\u6587\u4EF6\u7684\u53D8\u5316\u6765\u5E76\u4E14\u53CD\u6620\u5230\u6D4F\u89C8\u5668\u4E0A\uFF0C\u63D0\u9AD8\u5F00\u53D1\u7684\u6548\u7387</li><li>JavaScript \u4EE3\u7801\u9700\u8981\u6A21\u5757\u5316\uFF0CHTML \u548C CSS \u8FD9\u4E9B\u8D44\u6E90\u6587\u4EF6\u4E5F\u4F1A\u9762\u4E34\u9700\u8981\u88AB\u6A21\u5757\u5316\u7684\u95EE\u9898</li><li>\u5F00\u53D1\u5B8C\u6210\u540E\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u4EE3\u7801\u8FDB\u884C\u538B\u7F29\u3001\u5408\u5E76\u4EE5\u53CA\u5176\u4ED6\u76F8\u5173\u7684\u4F18\u5316</li></ul><p>\u800C<code>webpack</code>\u6070\u5DE7\u53EF\u4EE5\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898</p><h2 id="\u4E09\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E09\u3001\u662F\u4EC0\u4E48</h2><p><code>webpack</code> \u662F\u4E00\u4E2A\u7528\u4E8E\u73B0\u4EE3<code>JavaScript</code>\u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u6A21\u5757\u6253\u5305\u5DE5\u5177</p><ul><li>\u9759\u6001\u6A21\u5757</li></ul><p>\u8FD9\u91CC\u7684\u9759\u6001\u6A21\u5757\u6307\u7684\u662F\u5F00\u53D1\u9636\u6BB5\uFF0C\u53EF\u4EE5\u88AB <code>webpack</code> \u76F4\u63A5\u5F15\u7528\u7684\u8D44\u6E90\uFF08\u53EF\u4EE5\u76F4\u63A5\u88AB\u83B7\u53D6\u6253\u5305\u8FDB<code>bundle.js</code>\u7684\u8D44\u6E90\uFF09</p><p>\u5F53 <code>webpack</code>\u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u5728\u5185\u90E8\u6784\u5EFA\u4E00\u4E2A\u4F9D\u8D56\u56FE\uFF0C\u6B64\u4F9D\u8D56\u56FE\u5BF9\u5E94\u6620\u5C04\u5230\u9879\u76EE\u6240\u9700\u7684\u6BCF\u4E2A\u6A21\u5757\uFF08\u4E0D\u518D\u5C40\u9650<code>js</code>\u6587\u4EF6\uFF09\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A\u6216\u591A\u4E2A <code>bundle</code></p><p><img src="https://static.vue-js.com/9ce194a0-a578-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h4 id="webpack\u7684\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#webpack\u7684\u80FD\u529B" aria-hidden="true">#</a> <code>webpack</code>\u7684\u80FD\u529B</h4><p><strong>\u7F16\u8BD1\u4EE3\u7801\u80FD\u529B</strong>\uFF0C\u63D0\u9AD8\u6548\u7387\uFF0C\u89E3\u51B3\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898 <img src="https://static.vue-js.com/c5c2d360-a592-11eb-ab90-d9ae814b240d.png" alt=""><strong>\u6A21\u5757\u6574\u5408\u80FD\u529B</strong>\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF0C\u53EF\u7EF4\u62A4\u6027\uFF0C\u89E3\u51B3\u6D4F\u89C8\u5668\u9891\u7E41\u8BF7\u6C42\u6587\u4EF6\u7684\u95EE\u9898 <img src="https://static.vue-js.com/d306d260-a592-11eb-ab90-d9ae814b240d.png" alt=""><strong>\u4E07\u7269\u7686\u53EF\u6A21\u5757\u80FD\u529B</strong>\uFF0C\u9879\u76EE\u7EF4\u62A4\u6027\u589E\u5F3A\uFF0C\u652F\u6301\u4E0D\u540C\u79CD\u7C7B\u7684\u524D\u7AEF\u6A21\u5757\u7C7B\u578B\uFF0C\u7EDF\u4E00\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u6240\u6709\u8D44\u6E90\u6587\u4EF6\u7684\u52A0\u8F7D\u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u63A7\u5236 <img src="https://static.vue-js.com/e3c5a040-a592-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>`,39),S={href:"https://webpack.docschina.org/concepts/",target:"_blank",rel:"noopener noreferrer"},y=n("https://webpack.docschina.org/concepts/"),L={href:"https://zhuanlan.zhihu.com/p/267875652",target:"_blank",rel:"noopener noreferrer"},J=n("https://zhuanlan.zhihu.com/p/267875652"),C={href:"https://juejin.cn/post/6844903966849892359",target:"_blank",rel:"noopener noreferrer"},q=n("\u4ECE 0 \u5230 1 \u5B9E\u73B0\u4E00\u6B3E\u7B80\u6613\u7248 Webpack"),H={href:"https://juejin.cn/post/6844904023791796237",target:"_blank",rel:"noopener noreferrer"},M=n("Webpack \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u8BEF\u533A");function E(P,R){const e=c("ExternalLinkIcon");return o(),l(r,null,[d,a("ul",null,[a("li",null,[a("a",u,[h,s(e)])]),a("li",null,[a("a",k,[b,s(e)])])]),m,a("p",null,[a("a",_,[g,s(e)]),w]),f,a("p",null,[a("a",v,[j,s(e)])]),x,a("ul",null,[a("li",null,[a("a",S,[y,s(e)])]),a("li",null,[a("a",L,[J,s(e)])]),a("li",null,[a("strong",null,[a("a",C,[q,s(e)])])]),a("li",null,[a("strong",null,[a("a",H,[M,s(e)])])])])],64)}var T=t(i,[["render",E],["__file","index.html.vue"]]);export{T as default};