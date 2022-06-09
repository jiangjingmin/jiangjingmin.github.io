import{_ as d,r as t,o as n,c,a as e,d as a,F as l,e as o,b as i}from"./app.2989aa3c.js";var h="/images/fe/vue.png",s="/images/fe/mvvm.png";const p={},u=o('<h1 id="vue\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u7406\u89E3" aria-hidden="true">#</a> Vue\u7684\u7406\u89E3</h1><p><img src="'+h+'" alt="Vue"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p>Vue.js\uFF08/vju\u02D0/\uFF0C\u6216\u7B80\u79F0\u4E3AVue\uFF09\u662F\u4E00\u4E2A\u7528\u4E8E\u521B\u5EFA\u7528\u6237\u754C\u9762\u7684<strong>\u6E10\u8FDB\u5F0FJavaScript\u6846\u67B6</strong>\uFF0C\u4E5F\u662F\u4E00\u4E2A\u521B\u5EFA<strong>\u5355\u9875\u5E94\u7528</strong>\u7684Web\u5E94\u7528\u6846\u67B6\u3002</p><p>PS: Vue\u4F5C\u8005\u5C24\u96E8\u6EAA\u662F\u5728\u4E3AAngularJS\u5DE5\u4F5C\u4E4B\u540E\u5F00\u53D1\u51FA\u4E86\u8FD9\u4E00\u6846\u67B6\u3002\u4ED6\u58F0\u79F0\u81EA\u5DF1\u7684\u601D\u8DEF\u662F\u63D0\u53D6Angular\u4E2D\u4E3A\u81EA\u5DF1\u6240\u559C\u6B22\u7684\u90E8\u5206\uFF0C\u6784\u5EFA\u51FA\u4E00\u6B3E\u76F8\u5F53\u8F7B\u91CF\u7684\u6846\u67B6\u6700\u65E9\u53D1\u5E03\u4E8E2014\u5E742\u6708\u3002</p><h3 id="\u7B80\u5355\u8BF4\u4E0Bvue" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u8BF4\u4E0Bvue" aria-hidden="true">#</a> \u7B80\u5355\u8BF4\u4E0Bvue</h3><ol><li>vue\u662F\u6E10\u53D8\u5F0F\u6846\u67B6\uFF0C\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u6DFB\u52A0\u529F\u80FD</li><li>vue\u6570\u636E\u9A71\u52A8\u91C7\u7528mvvm\u6A21\u5F0F\uFF0Cm\u662F\u6570\u636E\u5C42\uFF0Cv\u662F\u89C6\u56FE\u5C42\uFF0Cvm\u662F\u8C03\u5EA6\u8005</li><li>SPA\u5355\u9875\u9762\u5E94\u7528\uFF0C\u53EA\u6709\u4E00\u4E2A\u9875\u9762\uFF0C\u52A0\u8F7D\u901F\u5EA6\u5FEB</li><li>\u7EC4\u4EF6\u5316\uFF0C\u590D\u7528\u6027\u5F3A</li></ol><h3 id="\u6709\u4EC0\u4E48\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6709\u4EC0\u4E48\u7F3A\u70B9" aria-hidden="true">#</a> \u6709\u4EC0\u4E48\u7F3A\u70B9</h3><ol><li>vue2\u5E95\u5C42\u57FA\u4E8EObject.defineProperty\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u8FD9\u4E2Aapi\u672C\u8EAB\u4E0D\u652F\u6301IE8\u53CA\u4EE5\u4E0B\u6D4F\u89C8\u5668</li><li>\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF08CSR\uFF09\u7684\u5148\u5929\u4E0D\u8DB3\uFF0C\u9996\u5C4F\u6027\u80FD\u95EE\u9898\uFF08\u767D\u5C4F\uFF09</li><li>\u7531\u4E8E\u767E\u5EA6\u7B49\u641C\u7D22\u5F15\u64CE\u722C\u866B\u65E0\u6CD5\u722C\u53D6js\u4E2D\u7684\u5185\u5BB9\uFF0C\u6545spa\u5148\u5929\u5C31\u5BF9seo\u4F18\u5316\u5FC3\u6709\u4F59\u529B\u4E0D\u8DB3\uFF08\u8C37\u6B4C\u7684puppeteer\u5C31\u633A\u725B\u903C\u7684\uFF0C\u5B9E\u73B0\u9884\u6E32\u67D3\u5E95\u5C42\u4E5F\u662F\u7528\u5230\u4E86\u8FD9\u4E2A\u5DE5\u5177\uFF09</li></ol><h2 id="\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u54CD\u5E94\u5F0F\u539F\u7406</h2><p><code>vue.js</code> \u662F\u91C7\u7528 <strong>\u6570\u636E\u52AB\u6301 + \u53D1\u5E03\u8005-\u8BA2\u9605\u8005\u6A21\u5F0F</strong> \u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7 <code>Object.defineProperty()</code> \u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684 <code>setter</code>\u3001<code>getter</code>\uFF0C\u5728\u6570\u636E\u53D8\u52A8\u65F6\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u89E6\u53D1\u54CD\u5E94\u7684\u76D1\u542C\u56DE\u8C03\u3002\u5728vue3.0\u4E2D\u901A\u8FC7Proxy\u4EE3\u7406\u5BF9\u8C61\u8FDB\u884C\u7C7B\u4F3C\u7684\u64CD\u4F5C\u3002</p><p>Vue \u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u4E3B\u8981\u662F\u6307\uFF1A\u6570\u636E\u53D8\u5316\u66F4\u65B0\u89C6\u56FE\uFF0C\u89C6\u56FE\u53D8\u5316\u66F4\u65B0\u6570\u636E\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+s+'" alt="mvvm"></p><p>\u5176\u4E2D\uFF0CView \u53D8\u5316\u66F4\u65B0 Data \uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E8B\u4EF6\u76D1\u542C\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF0C\u6240\u4EE5 Vue \u7684\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u7684\u5DE5\u4F5C\u4E3B\u8981\u662F\u5982\u4F55\u6839\u636E Data \u53D8\u5316\u66F4\u65B0 View\u3002</p><p>Vue \u4E3B\u8981\u901A\u8FC7\u4EE5\u4E0B 4 \u4E2A\u6B65\u9AA4\u6765\u5B9E\u73B0\u6570\u636E\u53CC\u5411\u7ED1\u5B9A\u7684\uFF1A</p><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u76D1\u542C\u5668-observer" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u76D1\u542C\u5668-observer" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u76D1\u542C\u5668 Observer</h3><p>\u5BF9\u6570\u636E\u5BF9\u8C61\u8FDB\u884C\u904D\u5386\uFF0C\u5305\u62EC\u5B50\u5C5E\u6027\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5229\u7528 Object.defineProperty() \u5BF9\u5C5E\u6027\u90FD\u52A0\u4E0A setter \u548C getter\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u7ED9\u8FD9\u4E2A\u5BF9\u8C61\u7684\u67D0\u4E2A\u503C\u8D4B\u503C\uFF0C\u5C31\u4F1A\u89E6\u53D1 setter\uFF0C\u90A3\u4E48\u5C31\u80FD\u76D1\u542C\u5230\u4E86\u6570\u636E\u53D8\u5316\u3002</p><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u89E3\u6790\u5668-compile" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u89E3\u6790\u5668-compile" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u89E3\u6790\u5668 Compile</h3><p>\u89E3\u6790 Vue \u6A21\u677F\u6307\u4EE4\uFF0C\u5C06\u6A21\u677F\u4E2D\u7684\u53D8\u91CF\u90FD\u66FF\u6362\u6210\u6570\u636E\uFF0C\u7136\u540E\u521D\u59CB\u5316\u6E32\u67D3\u9875\u9762\u89C6\u56FE\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u6307\u4EE4\u5BF9\u5E94\u7684\u8282\u70B9\u7ED1\u5B9A\u66F4\u65B0\u51FD\u6570\uFF0C\u6DFB\u52A0\u76D1\u542C\u6570\u636E\u7684\u8BA2\u9605\u8005\uFF0C\u4E00\u65E6\u6570\u636E\u6709\u53D8\u52A8\uFF0C\u6536\u5230\u901A\u77E5\uFF0C\u8C03\u7528\u66F4\u65B0\u51FD\u6570\u8FDB\u884C\u6570\u636E\u66F4\u65B0\u3002</p><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u8005-watcher" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u8005-watcher" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u8005 Watcher</h3><p>Watcher \u8BA2\u9605\u8005\u662F Observer \u548C Compile \u4E4B\u95F4\u901A\u4FE1\u7684\u6865\u6881 \uFF0C\u4E3B\u8981\u7684\u4EFB\u52A1\u662F\u8BA2\u9605 Observer \u4E2D\u7684\u5C5E\u6027\u503C\u53D8\u5316\u7684\u6D88\u606F\uFF0C\u5F53\u6536\u5230\u5C5E\u6027\u503C\u53D8\u5316\u7684\u6D88\u606F\u65F6\uFF0C\u89E6\u53D1\u89E3\u6790\u5668 Compile \u4E2D\u5BF9\u5E94\u7684\u66F4\u65B0\u51FD\u6570\u3002</p><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u5668-dep" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u5668-dep" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u8BA2\u9605\u5668 Dep</h3><p>\u8BA2\u9605\u5668\u91C7\u7528 \u53D1\u5E03-\u8BA2\u9605 \u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u7528\u6765\u6536\u96C6\u8BA2\u9605\u8005 Watcher\uFF0C\u5BF9\u76D1\u542C\u5668 Observer \u548C \u8BA2\u9605\u8005 Watcher \u8FDB\u884C\u7EDF\u4E00\u7BA1\u7406\u3002</p><h2 id="\u4E09\u3001\u6838\u5FC3\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6838\u5FC3\u7279\u6027" aria-hidden="true">#</a> \u4E09\u3001\u6838\u5FC3\u7279\u6027</h2><h3 id="\u6570\u636E\u9A71\u52A8-mvvm" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u9A71\u52A8-mvvm" aria-hidden="true">#</a> \u6570\u636E\u9A71\u52A8\uFF08MVVM)</h3><p>\u53C2\u8003\uFF1A<a href="./mvvm">MVVM \u53CC\u5411\u6570\u636E\u7ED1\u5B9A</a></p><h3 id="\u7EC4\u4EF6\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5316" aria-hidden="true">#</a> \u7EC4\u4EF6\u5316</h3><h4 id="_1-\u4EC0\u4E48\u662F\u7EC4\u4EF6\u5316" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u7EC4\u4EF6\u5316" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u7EC4\u4EF6\u5316</h4><p>\u4E00\u53E5\u8BDD\u6765\u8BF4\u5C31\u662F\u628A\u56FE\u5F62\u3001\u975E\u56FE\u5F62\u7684\u5404\u79CD\u903B\u8F91\u5747\u62BD\u8C61\u4E3A\u4E00\u4E2A\u7EDF\u4E00\u7684\u6982\u5FF5\uFF08\u7EC4\u4EF6\uFF09\u6765\u5B9E\u73B0\u5F00\u53D1\u7684\u6A21\u5F0F\uFF0C\u5728<code>Vue</code>\u4E2D\u6BCF\u4E00\u4E2A<code>.vue</code>\u6587\u4EF6\u90FD\u53EF\u4EE5\u89C6\u4E3A\u4E00\u4E2A\u7EC4\u4EF6</p><h4 id="_2-\u7EC4\u4EF6\u5316\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-\u7EC4\u4EF6\u5316\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2. \u7EC4\u4EF6\u5316\u7684\u4F18\u52BF</h4><ul><li>\u964D\u4F4E\u6574\u4E2A\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6\uFF0C\u5728\u4FDD\u6301\u63A5\u53E3\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66FF\u6362\u4E0D\u540C\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B8C\u6210\u9700\u6C42\uFF0C\u4F8B\u5982\u8F93\u5165\u6846\uFF0C\u53EF\u4EE5\u66FF\u6362\u4E3A\u65E5\u5386\u3001\u65F6\u95F4\u3001\u8303\u56F4\u7B49\u7EC4\u4EF6\u4F5C\u5177\u4F53\u7684\u5B9E\u73B0</li><li>\u8C03\u8BD5\u65B9\u4FBF\uFF0C\u7531\u4E8E\u6574\u4E2A\u7CFB\u7EDF\u662F\u901A\u8FC7\u7EC4\u4EF6\u7EC4\u5408\u8D77\u6765\u7684\uFF0C\u5728\u51FA\u73B0\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7528\u6392\u9664\u6CD5\u76F4\u63A5\u79FB\u9664\u7EC4\u4EF6\uFF0C\u6216\u8005\u6839\u636E\u62A5\u9519\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\uFF0C\u4E4B\u6240\u4EE5\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D\uFF0C\u662F\u56E0\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u4F4E\u8026\u5408\uFF0C\u804C\u8D23\u5355\u4E00\uFF0C\u6240\u4EE5\u903B\u8F91\u4F1A\u6BD4\u5206\u6790\u6574\u4E2A\u7CFB\u7EDF\u8981\u7B80\u5355</li><li>\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027\uFF0C\u7531\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u804C\u8D23\u5355\u4E00\uFF0C\u5E76\u4E14\u7EC4\u4EF6\u5728\u7CFB\u7EDF\u4E2D\u662F\u88AB\u590D\u7528\u7684\uFF0C\u6240\u4EE5\u5BF9\u4EE3\u7801\u8FDB\u884C\u4F18\u5316\u53EF\u83B7\u5F97\u7CFB\u7EDF\u7684\u6574\u4F53\u5347\u7EA7</li></ul><h3 id="\u6307\u4EE4\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u7CFB\u7EDF" aria-hidden="true">#</a> \u6307\u4EE4\u7CFB\u7EDF</h3><p>\u6307\u4EE4 (Directives) \u662F\u5E26\u6709 v- \u524D\u7F00\u7684\u7279\u6B8A\u5C5E\u6027\u4F5C\u7528\uFF1A\u5F53\u8868\u8FBE\u5F0F\u7684\u503C\u6539\u53D8\u65F6\uFF0C\u5C06\u5176\u4EA7\u751F\u7684\u8FDE\u5E26\u5F71\u54CD\uFF0C\u54CD\u5E94\u5F0F\u5730\u4F5C\u7528\u4E8E DOM</p><ul><li><p>\u5E38\u7528\u7684\u6307\u4EE4</p><ul><li>\u6761\u4EF6\u6E32\u67D3\u6307\u4EE4 <code>v-if</code></li><li>\u5217\u8868\u6E32\u67D3\u6307\u4EE4<code>v-for</code></li><li>\u5C5E\u6027\u7ED1\u5B9A\u6307\u4EE4<code>v-bind</code></li><li>\u4E8B\u4EF6\u7ED1\u5B9A\u6307\u4EE4<code>v-on</code></li><li>\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u6307\u4EE4<code>v-model</code></li></ul></li></ul><p>\u6CA1\u6709\u6307\u4EE4\u4E4B\u524D\u6211\u4EEC\u662F\u600E\u4E48\u505A\u7684\uFF1F\u662F\u4E0D\u662F\u5148\u8981\u83B7\u53D6\u5230DOM\u7136\u540E\u5728....\u5E72\u70B9\u5565</p><h2 id="\u56DB\u3001proxy-\u4E0E-object-defineproperty-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001proxy-\u4E0E-object-defineproperty-\u7684\u533A\u522B" aria-hidden="true">#</a> \u56DB\u3001Proxy \u4E0E Object.defineProperty \u7684\u533A\u522B</h2>',36),f={href:"https://juejin.im/post/6844903601416978439#heading-11",target:"_blank",rel:"noopener noreferrer"},_=i("\u9762\u8BD5\u5B98: \u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9AProxy\u6BD4defineproperty\u4F18\u52A3\u5982\u4F55?"),v=o('<p><strong>Proxy \u7684\u4F18\u52BF\u5982\u4E0B:</strong></p><ul><li>Proxy \u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\u5BF9\u8C61\u800C\u975E\u5C5E\u6027\uFF1B</li><li>Proxy \u53EF\u4EE5\u76F4\u63A5\u76D1\u542C\u6570\u7EC4\u7684\u53D8\u5316\uFF1B</li><li>Proxy \u6709\u591A\u8FBE 13 \u79CD\u62E6\u622A\u65B9\u6CD5,\u4E0D\u9650\u4E8E apply\u3001ownKeys\u3001deleteProperty\u3001has \u7B49\u7B49\u662F Object.defineProperty \u4E0D\u5177\u5907\u7684\uFF1B</li><li>Proxy \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u5BF9\u8C61,\u6211\u4EEC\u53EF\u4EE5\u53EA\u64CD\u4F5C\u65B0\u7684\u5BF9\u8C61\u8FBE\u5230\u76EE\u7684,\u800C Object.defineProperty \u53EA\u80FD\u904D\u5386\u5BF9\u8C61\u5C5E\u6027\u76F4\u63A5\u4FEE\u6539\uFF1B</li><li>Proxy \u4F5C\u4E3A\u65B0\u6807\u51C6\u5C06\u53D7\u5230\u6D4F\u89C8\u5668\u5382\u5546\u91CD\u70B9\u6301\u7EED\u7684\u6027\u80FD\u4F18\u5316\uFF0C\u4E5F\u5C31\u662F\u4F20\u8BF4\u4E2D\u7684\u65B0\u6807\u51C6\u7684\u6027\u80FD\u7EA2\u5229\uFF1B</li></ul><p><strong>Object.defineProperty :</strong></p><ul><li>\u65E0\u6CD5\u76D1\u542C\u6570\u7EC4\u53D8\u5316</li><li>\u53EA\u80FD\u52AB\u6301\u5BF9\u8C61\u7684\u5C5E\u6027</li><li>\u517C\u5BB9\u6027\u597D,\u652F\u6301IE9\u3002\u800C Proxy \u7684\u5B58\u5728\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u95EE\u9898,\u800C\u4E14\u65E0\u6CD5\u7528 polyfill \u78E8\u5E73\uFF0C\u56E0\u6B64 Vue \u7684\u4F5C\u8005\u624D\u58F0\u660E\u9700\u8981\u7B49\u5230\u4E0B\u4E2A\u5927\u7248\u672C( 3.0 )\u624D\u80FD\u7528 Proxy \u91CD\u5199\u3002</li></ul><h2 id="\u4E94\u3001vue-\u548C-react-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001vue-\u548C-react-\u533A\u522B" aria-hidden="true">#</a> \u4E94\u3001Vue \u548C React \u533A\u522B</h2>',5),b={href:"https://juejin.cn/post/6844904040564785159",target:"_blank",rel:"noopener noreferrer"},x=i("\u5173\u4E8EVue\u548CReact\u7684\u4E00\u4E9B\u5BF9\u6BD4\u53CA\u4E2A\u4EBA\u601D\u8003\uFF08\u4E0A\uFF09 - \u6398\u91D1 (juejin.cn)"),m=o('<p>\u77F3\u5DDD-\u667A\u80FD\u793E\uFF1A</p><p>Vue \u548CReact \u6CA1\u6709\u672C\u8D28\u533A\u522B\uFF1A</p><ul><li>Vue \u66F4\u6CE8\u91CD\u89C6\u56FE\u7684\u81EA\u52A8\u540C\u6B65\uFF0C\u4F7F\u7528\u4E60\u60EF\u504F\u5411\u524D\u7AEF\u4EBA\u5458</li><li>React \u66F4\u6CE8\u91CD\u7EC4\u4EF6\u53CA\u5176\u72B6\u6001\u7684\u7BA1\u7406\uFF0C\u4F7F\u7528\u4E60\u60EF\u504F\u5411\u7A0B\u5E8F\u4EBA\u5458\uFF0C\u5982\u540E\u53F0\u8F6C\u524D\u7AEF\u4EBA\u5458</li></ul><blockquote><p>\u76F8\u5BF9\u4E8EVue\uFF0CReact\u66F4\u52A0\u900F\u660E\uFF0C\u6CA1\u6709\u8FC7\u591A\u7684\u9690\u542B\u903B\u8F91\uFF08\u6BD4\u5982Vue\u7684\u6307\u4EE4\u5C31\u662F\u4E00\u79CD\u9690\u542B\u903B\u8F91\uFF09\uFF0C\u66F4\u4FBF\u4E8E\u7A0B\u5E8F\u5458\u7406\u89E3\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\uFF1B\u5F53\u7136\uFF0C\u4E5F\u66F4\u52A0\u590D\u6742\u3001\u5F3A\u5927\u3002</p></blockquote><p>\u8FD9\u91CC\u5C31\u505A\u51E0\u4E2A\u7B80\u5355\u7684\u7C7B\u6BD4\u5427\uFF0C\u5F53\u7136\u6CA1\u6709\u597D\u574F\u4E4B\u5206\uFF0C\u53EA\u662F\u4F7F\u7528\u573A\u666F\u4E0D\u540C</p><h3 id="\u76F8\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u70B9" aria-hidden="true">#</a> \u76F8\u540C\u70B9</h3><ul><li>\u90FD\u6709\u7EC4\u4EF6\u5316\u601D\u60F3</li><li>\u90FD\u652F\u6301\u670D\u52A1\u5668\u7AEF\u6E32\u67D3</li><li>\u90FD\u6709Virtual DOM\uFF08\u865A\u62DFdom\uFF09</li><li>\u6570\u636E\u9A71\u52A8\u89C6\u56FE</li><li>\u90FD\u6709\u652F\u6301native\u7684\u65B9\u6848\uFF1A<code>Vue</code>\u7684<code>weex</code>\u3001<code>React</code>\u7684<code>React native</code></li><li>\u90FD\u6709\u81EA\u5DF1\u7684\u6784\u5EFA\u5DE5\u5177\uFF1A<code>Vue</code>\u7684<code>vue-cli</code>\u3001<code>React</code>\u7684<code>Create React App</code></li></ul><h3 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h3><ul><li>\u6570\u636E\u6D41\u5411\u7684\u4E0D\u540C\u3002<code>react</code>\u4ECE\u8BDE\u751F\u5F00\u59CB\u5C31\u63A8\u5D07\u5355\u5411\u6570\u636E\u6D41\uFF0C\u800C<code>Vue</code>\u662F\u53CC\u5411\u6570\u636E\u6D41</li><li>\u6570\u636E\u53D8\u5316\u7684\u5B9E\u73B0\u539F\u7406\u4E0D\u540C\u3002<code>react</code>\u4F7F\u7528\u7684\u662F\u4E0D\u53EF\u53D8\u6570\u636E\uFF0C\u800C<code>Vue</code>\u4F7F\u7528\u7684\u662F\u53EF\u53D8\u7684\u6570\u636E</li><li>\u7EC4\u4EF6\u5316\u901A\u4FE1\u7684\u4E0D\u540C\u3002<code>react</code>\u4E2D\u6211\u4EEC\u901A\u8FC7\u4F7F\u7528\u56DE\u8C03\u51FD\u6570\u6765\u8FDB\u884C\u901A\u4FE1\u7684\uFF0C\u800C<code>Vue</code>\u4E2D\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012\u6D88\u606F\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A\u4E8B\u4EF6\u548C\u56DE\u8C03\u51FD\u6570</li><li>diff\u7B97\u6CD5\u4E0D\u540C\u3002<code>react</code>\u4E3B\u8981\u4F7F\u7528diff\u961F\u5217\u4FDD\u5B58\u9700\u8981\u66F4\u65B0\u54EA\u4E9BDOM\uFF0C\u5F97\u5230patch\u6811\uFF0C\u518D\u7EDF\u4E00\u64CD\u4F5C\u6279\u91CF\u66F4\u65B0DOM\u3002<code>Vue</code> \u4F7F\u7528\u53CC\u5411\u6307\u9488\uFF0C\u8FB9\u5BF9\u6BD4\uFF0C\u8FB9\u66F4\u65B0DOM</li></ul><h3 id="\u5982\u4F55\u9009\u62E9-\u2B50" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9-\u2B50" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9\uFF1F\u2B50</h3><p>\u90FD\u884C\u3002</p><p>\u4F60\u89C9\u5F97\u4ECE\u7528\u6237\u89D2\u5EA6\uFF0C\u80FD\u611F\u89C9\u5230\u8FD9\u4E24\u4E2A\u7684\u6027\u80FD\u5DEE\u5F02\u5417\uFF1F\u4E0D\u4F1A</p><h4 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h4>',13),V={href:"https://juejin.cn/post/6844903918753808398#heading-21",target:"_blank",rel:"noopener noreferrer"},j=i("30 \u9053 Vue \u9762\u8BD5\u9898\uFF0C\u5185\u542B\u8BE6\u7EC6\u8BB2\u89E3\uFF08\u6DB5\u76D6\u5165\u95E8\u5230\u7CBE\u901A\uFF0C\u81EA\u6D4B Vue \u638C\u63E1\u7A0B\u5EA6\uFF09 - \u6398\u91D1 (juejin.cn)"),g={href:"https://juejin.cn/post/6844903876231954446#heading-7",target:"_blank",rel:"noopener noreferrer"},y=i("vue 269\u4E2A\u77E5\u8BC6\u70B9\uFF08\u9762\u8BD5\u9898\uFF09\u4E3A\u4F60\u4FDD\u9A7E\u62A4\u822A - \u6398\u91D1 (juejin.cn)"),P={href:"https://juejin.cn/post/6850037277675454478",target:"_blank",rel:"noopener noreferrer"},O=i("\u53F2\u4E0A\u6700\u5F3Avue\u603B\u7ED3---\u9762\u8BD5\u5F00\u53D1\u5168\u9760\u5B83\u4E86 - \u6398\u91D1 (juejin.cn)"),k={href:"https://juejin.cn/post/6844904031983239181#heading-1",target:"_blank",rel:"noopener noreferrer"},D=i("12\u9053vue\u9AD8\u9891\u539F\u7406\u9762\u8BD5\u9898,\u4F60\u80FD\u7B54\u51FA\u51E0\u9053? - \u6398\u91D1 (juejin.cn)");function M(R,w){const r=t("ExternalLinkIcon");return n(),c(l,null,[u,e("p",null,[e("a",f,[_,a(r)])]),v,e("ul",null,[e("li",null,[e("a",b,[x,a(r)])])]),m,e("ul",null,[e("li",null,[e("a",V,[j,a(r)])]),e("li",null,[e("a",g,[y,a(r)])]),e("li",null,[e("a",P,[O,a(r)])]),e("li",null,[e("a",k,[D,a(r)])])])],64)}var S=d(p,[["render",M],["__file","index.html.vue"]]);export{S as default};
