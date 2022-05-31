import{_ as l,r,o as n,a as t,b as e,e as s,F as o,c as i,d}from"./app.a7f79250.js";const h={},u=i(`<h1 id="\u7B80\u5386\u848B\u656C\u654F\u7248-\u9488\u5BF9\u4E2D\u5C0F\u516C\u53F8" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5386\u848B\u656C\u654F\u7248-\u9488\u5BF9\u4E2D\u5C0F\u516C\u53F8" aria-hidden="true">#</a> \u7B80\u5386\u848B\u656C\u654F\u7248 - \u9488\u5BF9\u4E2D\u5C0F\u516C\u53F8</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  2021-04-15
  jiangjingmin
  \u7ED3\u6784\u6E05\u6670\uFF0C\u77E5\u8BC6\u70B9\u660E\u786E\uFF0C\u5185\u5BB9\u51CF\u5C11
  Vue\u6280\u672F\u6808\u7684\u5DE5\u4F5C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E00\u3001\u4E13\u4E1A\u6280\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E13\u4E1A\u6280\u80FD" aria-hidden="true">#</a> \u4E00\u3001\u4E13\u4E1A\u6280\u80FD</h2><ul><li>\u6280\u672F\u5168\u9762\uFF0C\u5BF9 HTML\u3001CSS\u3001JS\u3001HTTP \u6709\u8F83\u597D\u638C\u63E1\uFF0C\u6709\u591A\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF1B</li><li>\u4E3B\u8981\u4F7F\u7528 Vue \u6280\u672F\u6808\uFF0C\u5BF9 Angular\u3001React \u8F83\u4E3A\u719F\u6089\uFF0C\u5BF9 Hybrid \u5F00\u53D1\u53CA\u6253\u5305\u6709\u4E30\u5BCC\u7ECF\u9A8C\uFF1B</li><li>\u719F\u7EC3\u638C\u63E1 Nuxtjs\uFF0C\u4E86\u89E3 SSR \u670D\u52A1\u7AEF\u6E32\u67D3\u548C BFF \u67B6\u6784\uFF0C\u4E86\u89E3 PM2 \u7B49\u5DE5\u5177\u4F7F\u7528\uFF1B</li><li>\u719F\u7EC3\u638C\u63E1 Sass\uFF0C\u719F\u6089 Bootstrap4 \u6E90\u7801\uFF0C\u5BF9\u54CD\u5E94\u5F0F\u5E03\u5C40\u6709\u6DF1\u5165\u4E86\u89E3\uFF1B</li><li>\u719F\u7EC3\u638C\u63E1 Webpack\u3001Gulp\u3001Babel\u3001ESLint \u7B49\u524D\u7AEF\u5DE5\u5177\uFF0C\u4E86\u89E3 Nodejs\uFF0C\u6709 Koa2 \u63A5\u53E3\u5F00\u53D1\u7ECF\u9A8C\u3002</li></ul><h2 id="\u4E8C\u3001\u5DE5\u4F5C\u7ECF\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5DE5\u4F5C\u7ECF\u5386" aria-hidden="true">#</a> \u4E8C\u3001\u5DE5\u4F5C\u7ECF\u5386</h2><h3 id="_3-1-\u5317\u4EAC\u4E2D\u767E\u4FE1\u8F6F\u4EF6\u6280\u672F\u6709\u9650\u516C\u53F8-\u4E92\u8054\u7F51-\u524D\u7AEF\u5F00\u53D1-2015-10-\u2013-2021-01" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5317\u4EAC\u4E2D\u767E\u4FE1\u8F6F\u4EF6\u6280\u672F\u6709\u9650\u516C\u53F8-\u4E92\u8054\u7F51-\u524D\u7AEF\u5F00\u53D1-2015-10-\u2013-2021-01" aria-hidden="true">#</a> 3.1 \u5317\u4EAC\u4E2D\u767E\u4FE1\u8F6F\u4EF6\u6280\u672F\u6709\u9650\u516C\u53F8 / \u4E92\u8054\u7F51 \u524D\u7AEF\u5F00\u53D1 \uFF082015.10 \u2013 2021.01\uFF09</h3><ul><li>\u8D1F\u8D23\u7814\u53D1\u4E2D\u5FC3\u7684\u524D\u7AEF\u6280\u672F\u9009\u578B\uFF0C\u57FA\u7840\u67B6\u6784\u5EFA\u8BBE\u548C\u5F00\u53D1\u89C4\u8303\u5B9A\u5236</li><li>\u8D1F\u8D23\u7591\u96BE\u95EE\u9898\u653B\u514B\uFF0C\u534F\u52A9\u4E8B\u4E1A\u90E8\u89E3\u51B3\u524D\u7AEF\u95EE\u9898</li><li>\u8D1F\u8D23\u6838\u5FC3\u4EA7\u54C1\u300A\u7384\u6B66\u5E93\u300B\u7684\u524D\u7AEF\u5F00\u53D1\uFF0C\u5F00\u53D1\u4E86 zbxUI \u5E93\u4EE5\u89E3\u51B3\u9875\u9762\u5E03\u5C40\u95EE\u9898\u3001\u5F00\u53D1\u4E86 Vue \u540E\u53F0\u7BA1\u7406\u6846\u67B6\u53CA\u7528\u4E8E\u4EE3\u7801\u751F\u6210\u5668\u7684 Vue \u6A21\u677F</li><li>\u57FA\u4E8E Vue \u5168\u5BB6\u6876\u548C UniApp \u72EC\u7ACB\u5B8C\u6210\u300A\u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0\u300BPC \u7AEF\u548C APP \u7AEF\u5F00\u53D1</li><li>\u57FA\u4E8E Nuxtjs \u72EC\u7ACB\u5B8C\u6210\u5BF9\u300A\u6743\u76CA\u4E91\u300B\u7F51\u7AD9\u6539\u7248</li><li>\u57FA\u4E8E Ionic5\uFF0C\u5E95\u5C42\u662F Angular8 \u548C Cordova\uFF0C\u72EC\u7ACB\u5B8C\u6210\u300A\u6C11\u653F\u90E8\u300BAPP \u5F00\u53D1\u548C\u4E0A\u67B6</li><li>\u5F00\u53D1 uni-preset-vue-zbx \u9879\u76EE\u6A21\u677F\uFF0C\u65B9\u4FBF\u5176\u4ED6\u540C\u4E8B\u5FEB\u901F\u751F\u6210 UniApp \u9879\u76EE\u57FA\u7840\u4EE3\u7801</li></ul><h3 id="_3-2-\u5317\u4EAC\u6821\u56ED\u4E4B\u661F\u79D1\u6280\u6709\u9650\u516C\u53F8-\u7F51\u7EDC\u6559\u80B2-\u7F51\u9875\u8BBE\u8BA1\u4E0E\u5236\u4F5C-2014-05-\u2013-2015-09" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5317\u4EAC\u6821\u56ED\u4E4B\u661F\u79D1\u6280\u6709\u9650\u516C\u53F8-\u7F51\u7EDC\u6559\u80B2-\u7F51\u9875\u8BBE\u8BA1\u4E0E\u5236\u4F5C-2014-05-\u2013-2015-09" aria-hidden="true">#</a> 3.2 \u5317\u4EAC\u6821\u56ED\u4E4B\u661F\u79D1\u6280\u6709\u9650\u516C\u53F8 / \u7F51\u7EDC\u6559\u80B2 \u7F51\u9875\u8BBE\u8BA1\u4E0E\u5236\u4F5C\uFF082014.05 \u2013 2015.09\uFF09</h3><ul><li>\u8D1F\u8D23\u4E2D\u804C\u8D44\u6E90\u7F51\u5F00\u53D1\u3001\u54CD\u5E94\u5F0F\u6539\u7248\u3001\u624B\u673A\u7248\u5F00\u53D1\uFF0C\u53CA\u5404\u79CD\u4E13\u9898\u6D3B\u52A8\u9875\u5F00\u53D1</li><li>\u8D1F\u8D23\u804C\u4E1A\u9662\u6821\u8D44\u6E90\u7F51\u4E2A\u6027\u5316\u5B9A\u5236\u5F00\u53D1</li></ul><h2 id="\u4E09\u3001\u9879\u76EE\u7ECF\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9879\u76EE\u7ECF\u9A8C" aria-hidden="true">#</a> \u4E09\u3001\u9879\u76EE\u7ECF\u9A8C</h2><h3 id="\u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0-pc-app-2020-09-2020-12" tabindex="-1"><a class="header-anchor" href="#\u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0-pc-app-2020-09-2020-12" aria-hidden="true">#</a> \u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0\uFF08PC+APP\uFF09\uFF082020-09 ~ 2020-12\uFF09</h3><p>\u4E3A\u4EA4\u6613\u6240\u5F00\u53D1\u7684\u4E00\u5957\u95E8\u6237\u7AD9\u7FA4\u7CFB\u7EDF\uFF0C\u652F\u6301\u6A21\u5757\u5316\uFF0C\u652F\u6301\u7AD9\u70B9\u914D\u7F6E\uFF0C\u540E\u7AEF\u7531\u5FAE\u670D\u52A1\u7384\u6B66\u5E93\u652F\u6301\u3002\u672C\u4EBA\u72EC\u7ACB\u8D1F\u8D23\u8BE5\u9879\u76EE\u7684 PC \u548C APP \u9875\u9762\u548C\u529F\u80FD\u5F00\u53D1\uFF0C\u4EE5\u53CA\u4E3B\u5206\u652F\u300A\u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0\u300B\u5F00\u53D1\uFF0C\u5E26\u9886\u4E8B\u4E1A\u90E8\u540C\u4E8B\u719F\u6089\u4EE3\u7801\u5E76\u5F00\u53D1\u5E7F\u897F\u548C\u6D77\u5357\u5206\u652F\u3002</p>`,12),c={href:"http://www.hnnccqjy.com/",target:"_blank",rel:"noopener noreferrer"},p=d("\u6E56\u5357\u519C\u6751\u4EA7\u6743\u4EA4\u6613\u5E73\u53F0"),x=i('<ul><li>\u57FA\u4E8E Vue \u5168\u5BB6\u6876\u548C ElementUI \u5B9E\u73B0\u7EC4\u4EF6\u7F16\u5199\u548C\u9875\u9762\u5E03\u5C40\uFF0C\u4F7F\u7528 Iconfont \u505A\u56FE\u6807\u663E\u793A\uFF1B</li><li>\u4F7F\u7528 Axios \u5B9E\u73B0\u524D\u540E\u53F0\u6570\u636E\u4EA4\u4E92\uFF0C\u5C01\u88C5 HTTP \u53CA API \u7EDF\u4E00\u7BA1\u7406\uFF0C\u5904\u7406 token \u8FC7\u671F\uFF1B</li><li>\u4F7F\u7528 VueRouter \u5B9E\u73B0\u8DEF\u7531\u8DF3\u8F6C\u3001\u8DEF\u7531\u62C6\u5206\uFF0C\u65B9\u4FBF\u5BF9\u63A5\u540E\u53F0\u5FAE\u670D\u52A1\uFF1B</li><li>\u4F7F\u7528 Vuex \u5B9E\u73B0</li><li>\u4F7F\u7528 filter \u505A\u6570\u636E\u5B57\u5178\u53CD\u663E</li><li>\u4F7F\u7528 GeoJSON \u548C ECharts \u5B9E\u73B0\u5730\u56FE\u663E\u793A</li><li>\u5B9E\u73B0\u4E86\u5B9E\u65F6\u68C0\u7D22\u3001\u6761\u4EF6\u7B5B\u9009\u3001\u4E8C\u7EA7\u5BFC\u822A\u5438\u9876\u4E14\u53EF\u5B9A\u4F4D</li><li>\u4F7F\u7528 json-server \u6A21\u62DF\u540E\u53F0\u6570\u636E\uFF0C\u52A0\u5FEB\u524D\u7AEF\u5F00\u53D1\u901F\u5EA6\uFF0C\u8282\u7701\u7A7A\u6321\u65F6\u95F4\uFF1B</li><li>\u914D\u5408\u540E\u53F0\u5B9E\u73B0 WebSocket \u6570\u636E\u63A8\u9001\uFF0C\u66FF\u6362\u65E9\u671F\u8F6E\u8BE2\u65B9\u5F0F\u8FDB\u884C\u62A5\u4EF7</li></ul><h3 id="\u6743\u76CA\u4E91\u4EA4\u6613\u5E73\u53F0-pc-2020-09-2020-12" tabindex="-1"><a class="header-anchor" href="#\u6743\u76CA\u4E91\u4EA4\u6613\u5E73\u53F0-pc-2020-09-2020-12" aria-hidden="true">#</a> \u6743\u76CA\u4E91\u4EA4\u6613\u5E73\u53F0\uFF08PC\uFF09\uFF082020-09 ~ 2020-12\uFF09</h3><p>\u8BE5\u9879\u76EE\u662F\u6743\u76CA\u4E91\u4EA4\u6613\u5E73\u53F0\u7684 Nuxtjs \u91CD\u6784\u7248\u672C\uFF0C\u672A\u4E0A\u7EBF\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u7814\u7A76 Vue \u5728 SSR \u65B9\u9762\u7684 XX\uFF0C\u5E76\u4E14\u6DF1\u5165\u4E86\u89E3 Nuxtjs \u5F00\u53D1\u3002\u672C\u4EBA\u72EC\u7ACB\u8D1F\u8D23\u8BE5\u9879\u76EE\u7684\u9875\u9762\u548C\u529F\u80FD\u5F00\u53D1\u4EE5\u53CA\u90E8\u7F72\u8FD0\u884C\u3002</p><ul><li>\u57FA\u4E8E BootstrapVue \u548C sass \u5B9E\u73B0\u9875\u9762\u5E03\u5C40\uFF0C\u90E8\u5206\u56FE\u6807\u4F7F\u7528 iconfont</li><li>\u57FA\u4E8E vue-awesome-swiper \u5B9E\u73B0\u8F6E\u64AD\u56FE\u7EC4\u4EF6</li><li>\u57FA\u4E8E jwt-decode\uFF0C\u4ECE token \u91CC\u89E3\u6790\u51FA\u7528\u6237\u4FE1\u606F</li><li>asyncData \u7684\u4F7F\u7528\u5BB9\u9519\u5904\u7406\uFF0Casync\xA0 \u548C \xA0await\xA0 \u7684\u4F7F\u7528</li><li>\u4F7F\u7528 \xA0watch \u6765\u76D1\u542C\u8DEF\u7531\u53D8\u5316 $route(to,\xA0from)\xA0{}</li><li>app.router.beforeEach\xA0 \u62E6\u622A token\xA0 \u662F\u5426\u8FC7\u671F\uFF0C\u53CA\u83B7\u53D6\u7528\u6237\u4FE1\u606F app.store.dispatch(&#39;user/getInfo&#39;)</li><li>\u4F7F\u7528 \xA0pm2\xA0 \u90E8\u7F72\uFF0C\u4F7F\u7528 nginx\xA0 \u57DF\u540D\u4EE3\u7406\u4EE3\u7406</li><li>this.$nextTick\xA0\u5904\u7406\xA0this.$nuxt.$loading.start()\xA0\u548C\xA0this.$nuxt.$loading.finish()</li><li>proxy\xA0 \u8DE8\u57DF</li></ul><h3 id="\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6C11\u653F\u90E8-app-2019-12-2020-02" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6C11\u653F\u90E8-app-2019-12-2020-02" aria-hidden="true">#</a> \u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6C11\u653F\u90E8 APP\uFF082019-12 ~ 2020-02\uFF09</h3><p>\u8BE5\u9879\u76EE\u662F\u7ED9\u6C11\u653F\u90E8\u505A\u7684\u4E00\u6B3E\u65B0\u95FB\u7C7B APP\u3002\u4E3B\u8981\u91C7\u7528 Ionic + Angular + Typescript + Cordova + Sass \u7B49\u6280\u672F\uFF0C\u672C\u4EBA\u8D1F\u8D23\u8BE5\u9879\u76EE\u7684 xxxx\u3002</p><ul><li>\u72EC\u7ACB\u5B8C\u6210\u5168\u90E8\u9875\u9762\u548C\u529F\u80FD\u5B9E\u73B0</li><li>\u901A\u8FC7 @Input \u548C @Output \u53CA ng-content \u5B9E\u73B0\u7EC4\u4EF6\u5F00\u53D1</li><li>\u5B9E\u73B0\u7C7B\u4F3C vuex \u7684\u6570\u636E\u5171\u4EAB\u5DE5\u5177\u7C7B\uFF0C\u6301\u4E45\u5316\u7528\u7684\u662F localstorage\uFF0C\u65B9\u4FBF\u9875\u9762\u95F4\u7684\u6570\u636E\u5171\u4EAB</li><li>\u57FA\u4E8E ion-segment \u548C ion-slide \u5B9E\u73B0\u9996\u9875\u5DE6\u53F3\u6ED1\u52A8\u6548\u679C\uFF0C\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C</li><li>\u57FA\u4E8E themeablebrowser \u63D2\u4EF6\u5B9E\u73B0 ionic \u9875\u9762\u5185\u5D4C h5 \u9875\u9762\u5E76\u901A\u4FE1\uFF0C\u5229\u7528 executeScript \u4F20\u9012\u5546\u5B9A\u597D\u7684\u4E8B\u4EF6\u540D\uFF0C\u89E3\u51B3\u4E86\u6587\u7AE0\u9875\u5B57\u53F7\u5927\u5C0F\u96BE\u63A7\u5236\u3001\u5FAE\u4FE1\u5206\u4EAB\u65E0\u6CD5\u83B7\u53D6 H5 \u6587\u7AE0\u4FE1\u606F\u7B49\u95EE\u9898</li><li>\u57FA\u4E8E sanitizer.bypassSecurityTrustHtml \u5C01\u88C5\u4E86 html \u7BA1\u9053\uFF0C\u7ED3\u5408 innerHTML \u5B9E\u73B0\u4E86\u6587\u7AE0\u9875\u5185\u5BB9\u5C55\u793A\uFF0C\u9632\u6B62\u4E86\u6837\u5F0F\u88AB\u8FC7\u6EE4\u6389\uFF0C\u6709\u6548\u963B\u6B62 XSS \u8DE8\u7AD9\u811A\u672C\u653B\u51FB</li><li>\u5F00\u53D1\u4E86\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0\u529F\u80FD\uFF0C\u5E94\u7528\u672A\u4E0A\u67B6\u4E4B\u524D\u65B9\u4FBF\u6D4B\u8BD5\u4EBA\u5458\u5347\u7EA7\u65B0\u7248\u672C</li></ul><p>\u5C01\u88C5 Service \u5C42\uFF0C\u5305\u62EC API \u63A5\u53E3\u3001\u539F\u751F\u529F\u80FD\u3001\u6570\u636E\u5171\u4EAB\u3001\u81EA\u52A8\u5347\u7EA7 \u96C6\u6210 QQ \u548C\u5FAE\u4FE1\u5206\u4EAB Android\xA0 \u7B7E\u540D\uFF0CiOS\xA0 \u5F00\u53D1\u8005\u8BC1\u4E66\u914D\u7F6E\uFF0C\u4E0A\u67B6 \xA0Appstore</p><h3 id="\u4E2D\u767E\u4FE1\u57FA\u7840-ui-\u5E93-zbxui-2019-02-2019-12" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u767E\u4FE1\u57FA\u7840-ui-\u5E93-zbxui-2019-02-2019-12" aria-hidden="true">#</a> \u4E2D\u767E\u4FE1\u57FA\u7840 UI \u5E93\uFF08zbxUI\uFF09\uFF082019-02 ~ 2019-12\uFF09</h3><p>\u57FA\u4E8E Webpack4 + Sass + Bootstrap4 + font-awesome \u7ED9\u516C\u53F8\u642D\u5EFA\u7684\u4E00\u5957\u524D\u7AEF UI \u5E93\uFF0C\u5305\u62EC 5 \u79CD\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u5E03\u5C40\u300111 \u79CD\u53EF\u9009\u80A4\u8272\u3001\u53CA\u591A\u79CD\u5E38\u7528\u7EC4\u4EF6\uFF0C\u670D\u52A1\u4E8E\u516C\u53F8\u7684\u7384\u6B66\u5E93\u7CFB\u7EDF\uFF0C\u8BE5\u7CFB\u7EDF\u8363\u83B7\u201C2020 \u4E2D\u56FD\u79D1\u6280\u521B\u65B0\u5E74\u5EA6\u8D21\u732E\u54C1\u724C\u201D\u5956</p><ul><li>\u72EC\u7ACB\u5B8C\u6210\u5168\u90E8\u9875\u9762\u548C\u529F\u80FD\u5B9E\u73B0</li><li>\u5C01\u88C5\u591A\u79CD\u516C\u7528\u57FA\u7840\u7EC4\u4EF6\uFF0C\u5982\u5217\u8868\u3001\u5361\u7247\u3001\u5F39\u51FA\u6846\u3001\u9009\u9879\u5361\u3001\u5F00\u5173\u7B49\uFF0Cjs \u65B9\u6CD5\u5C01\u88C5\u5927\u7EA6 4 \u5343\u884C</li><li>\u5F00\u53D1\u4E86\u66F4\u9002\u5408\u653F\u5E9C\u7F51\u7AD9\u7684\u6362\u80A4\u7CFB\u7EDF\uFF0C\u5229\u7528 Sass \u7684 mixin \u65B9\u6CD5\u5B9E\u73B0\u7EC4\u4EF6\u5316\u5F00\u53D1\uFF0C\u652F\u6301\u9ED8\u8BA4\u989C\u8272\u548C\u81EA\u5B9A\u4E49\u989C\u8272\uFF0C\u589E\u5F3A\u4E86\u7CFB\u7EDF\u7684\u53EF\u62D3\u5C55\u6027\u548C\u591A\u6837\u6027\uFF0C\u6EE1\u8DB3\u4E86\u5404\u79CD\u5E94\u7528\u573A\u666F</li><li>\u5F00\u53D1\u4E86\u591A\u529F\u80FD\u578B\u83DC\u5355\uFF0C\u5DE6\u83DC\u5355\u3001\u9876\u83DC\u5355\u3001\u9876\u54CD\u5E94\u5F0F\u83DC\u5355\uFF0C\u4E14\u652F\u6301\u7CBE\u7075\u56FE\u548C\u5B57\u4F53\u56FE\u6807\uFF0C\u65B9\u4FBF\u4E86\u83DC\u5355\u95F4\u7684\u79FB\u52A8</li><li>\u57FA\u4E8E jQuery \u5F00\u53D1\u4E86 industryPicker \u884C\u4E1A\u9009\u62E9\u5668\u63D2\u4EF6\uFF0C\u7528\u524D\u7AEF\u6765\u505A\u6570\u636E\u5B57\u5178\u7684\u8D4B\u503C\u548C\u53CD\u663E\uFF0C\u6448\u5F03\u4E86\u4F20\u7EDF\u7684 ajax \u9891\u7E41\u8BF7\u6C42\u540E\u7AEF\u63A5\u53E3\u7684\u65B9\u5F0F\uFF0C\u51CF\u8F7B\u670D\u52A1\u5668\u538B\u529B</li><li>\u57FA\u4E8E Gulp4 \u5B9E\u73B0\u4E86\u8F7B\u91CF\u7EA7\u7684\u540C\u6B3E\u5207\u56FE\u5DE5\u5177\uFF0C\u5DF2\u4E3A jquery-steps \u63D2\u4EF6\u5F00\u53D1\u4E86\u4E00\u5957\u6837\u5F0F\u4E3B\u9898</li></ul><h3 id="\u4E2D\u767E\u4FE1\u5FAE\u670D\u52A1\u8F6F\u4EF6\u5DE5\u5382-20xx-xx-20xx-xx" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u767E\u4FE1\u5FAE\u670D\u52A1\u8F6F\u4EF6\u5DE5\u5382-20xx-xx-20xx-xx" aria-hidden="true">#</a> \u4E2D\u767E\u4FE1\u5FAE\u670D\u52A1\u8F6F\u4EF6\u5DE5\u5382\uFF0820xx-xx ~ 20xx-xx\uFF09</h3><p>\u8BE5\u9879\u76EE\u662F\u7384\u6B66\u5E93\u7684 vue \u7248\u672C\uFF0C\u901A\u8FC7\u5B9E\u73B0\u4E00\u4E2A\u7A7A\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u518D\u96C6\u6210\u7531\u4EE3\u7801\u751F\u6210\u5668\u751F\u6210\u7684\u589E\u5220\u67E5\u6539\u6A21\u5757\u3002\u672C\u4EBA\u72EC\u7ACB\u8D1F\u8D23\u8BE5\u9879\u76EE\u7684 xxx \u524D\u7AEF\u5F00\u53D1\uFF0C\u6A21\u677F\u7F16\u5199\u548C\u8C03\u8BD5</p><p>\u6280\u672F\u6808\uFF1Avue \u5168\u5BB6\u6876</p><ul><li>vue-template-admin \u7684\u529F\u80FD</li><li>\u6A21\u5757\u529F\u80FD</li></ul><h2 id="\u56DB\u3001\u6559\u80B2\u7ECF\u5386" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6559\u80B2\u7ECF\u5386" aria-hidden="true">#</a> \u56DB\u3001\u6559\u80B2\u7ECF\u5386</h2><p>\u9ED1\u9F99\u6C5F\u5927\u5B66 \u6570\u5B66\u4E0E\u5E94\u7528\u6570\u5B66 | \u672C\u79D1 2010.09 \u2013 2014.07</p>',17);function b(m,f){const a=r("ExternalLinkIcon");return n(),t(o,null,[u,e("p",null,[e("a",c,[p,s(a)])]),x],64)}var P=l(h,[["render",b],["__file","my-resume-jjm.html.vue"]]);export{P as default};
