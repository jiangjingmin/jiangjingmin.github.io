import{_ as u,r as t,o as v,c as a,a as i,b as r,F as n,d as l,e as o}from"./app.cec2e512.js";const s={},c=i("h1",{id:"vue-220-\u4E2A\u77E5\u8BC6\u70B9-\u9762\u8BD5\u9898-\u4E3A\u4F60\u4FDD\u9A7E\u62A4\u822A",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#vue-220-\u4E2A\u77E5\u8BC6\u70B9-\u9762\u8BD5\u9898-\u4E3A\u4F60\u4FDD\u9A7E\u62A4\u822A","aria-hidden":"true"},"#"),l(" vue 220+\u4E2A\u77E5\u8BC6\u70B9\uFF08\u9762\u8BD5\u9898\uFF09\u4E3A\u4F60\u4FDD\u9A7E\u62A4\u822A")],-1),d=i("p",null,"\u30102019.07.02\u3011",-1),h=l("\u7EBF\u4E0A\uFF1A"),m={href:"https://juejin.im/post/5d153267e51d4510624f9809#heading-7",target:"_blank",rel:"noopener noreferrer"},x=l("https://juejin.im/post/5d153267e51d4510624f9809#heading-7"),p=o(`<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h2><ul><li>vue\u6E32\u67D3\u6A21\u677F\u65F6\u600E\u4E48\u4FDD\u7559\u6A21\u677F\u4E2D\u7684HTML\u6CE8\u91CA\u5462\uFF1F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template comments&gt;...&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Vue.observable\u4F60\u6709\u4E86\u89E3\u8FC7\u5417\uFF1F\u8BF4\u8BF4\u770B</li><li>\u4F60\u77E5\u9053style\u52A0scoped\u5C5E\u6027\u7684\u7528\u9014\u548C\u539F\u7406\u5417\uFF1F</li><li>\u4F60\u671F\u5F85vue3.0\u6709\u4EC0\u4E48\u529F\u80FD\u6216\u8005\u6539\u8FDB\u7684\u5730\u65B9\uFF1F</li><li>vue\u8FB9\u754C\u60C5\u51B5\u6709\u54EA\u4E9B\uFF1F</li><li>\u5982\u4F55\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8BBF\u95EE\u7236\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>watch\u7684\u5C5E\u6027\u7528\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u7ED3\u679C\u4F1A\u600E\u4E48\u6837\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u9879\u76EE\u4E2D\u5982\u679Cmethods\u7684\u65B9\u6CD5\u7528\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u7ED3\u679C\u4F1A\u600E\u4E48\u6837\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u9879\u76EE\u4E2D\u5982\u4F55\u914D\u7F6Efavicon\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4F7F\u7528\u8FC7babel-polyfill\u6A21\u5757\u5417\uFF1F\u4E3B\u8981\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7684\u9519\u8BEF\u5904\u7406\u7684\u4E86\u89E3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u4E8B\u4EF6\u4E2D\u4F20\u5165$event\uFF0C\u4F7F\u7528e.target\u548Ce.currentTarget\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728.vue\u6587\u4EF6\u4E2Dstyle\u662F\u5FC5\u987B\u7684\u5417\uFF1F\u90A3script\u662F\u5FC5\u987B\u7684\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u600E\u4E48\u5B9E\u73B0\u5F3A\u5236\u5237\u65B0\u7EC4\u4EF6\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4E2D\u7236\u7EC4\u4EF6\u600E\u4E48\u63A5\u6536\u5B50\u7EC4\u4EF6\u7684\u591A\u4E2A\u53C2\u6570\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u4F60\u603B\u7ED3\u7684vue\u6700\u4F73\u5B9E\u8DF5\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u65E0\u6548\u600E\u4E48\u89E3\u51B3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7684\u5C5E\u6027\u540D\u79F0\u4E0Emethod\u7684\u65B9\u6CD5\u540D\u79F0\u4E00\u6837\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u53D8\u91CF\u540D\u5982\u679C\u4EE5_\u3001$\u5F00\u5934\u7684\u5C5E\u6027\u4F1A\u53D1\u751F\u4EC0\u4E48\u95EE\u9898\uFF1F\u600E\u4E48\u8BBF\u95EE\u5230\u5B83\u4EEC\u7684\u503C\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u4F7F\u7528v-for\u904D\u5386\u5BF9\u8C61\u65F6\uFF0C\u662F\u6309\u4EC0\u4E48\u987A\u5E8F\u904D\u5386\u7684\uFF1F\u5982\u4F55\u4FDD\u8BC1\u987A\u5E8F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5982\u679C\u60F3\u6269\u5C55\u67D0\u4E2A\u73B0\u6709\u7684\u7EC4\u4EF6\u65F6\uFF0C\u600E\u4E48\u505A\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u4E0B$attrs\u548C$listeners\u7684\u4F7F\u7528\u573A\u666F [\u6211\u6765\u6311\u6218]</li><li>\u5206\u6790\u4E0Bvue\u9879\u76EE\u672C\u5730\u5F00\u53D1\u5B8C\u6210\u540E\u90E8\u7F72\u5230\u670D\u52A1\u5668\u540E\u62A5404\u662F\u4EC0\u4E48\u539F\u56E0\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-once\u7684\u4F7F\u7528\u573A\u666F\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7684\u8868\u5355\u4FEE\u9970\u7B26.lazy\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>vue\u4E3A\u4EC0\u4E48\u8981\u6C42\u7EC4\u4EF6\u6A21\u677F\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u5143\u7D20\uFF1F [\u6211\u6765\u6311\u6218]</li><li>EventBus\u6CE8\u518C\u5728\u5168\u5C40\u4E0A\u65F6\uFF0C\u8DEF\u7531\u5207\u6362\u65F6\u4F1A\u91CD\u590D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u5982\u4F55\u89E3\u51B3\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u4FEE\u6539vue\u6253\u5305\u540E\u751F\u6210\u6587\u4EF6\u8DEF\u5F84\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4F7F\u7528\u505A\u8FC7vue\u4E0E\u539F\u751Fapp\u4EA4\u4E92\u5417\uFF1F\u8BF4\u8BF4vue\u4E0Eap\u4EA4\u4E92\u7684\u65B9\u6CD5 [\u6211\u6765\u6311\u6218]</li><li>\u4F7F\u7528vue\u5199\u4E00\u4E2Atab\u5207\u6362 [\u6211\u6765\u6311\u6218]</li><li>vue\u4E2D\u4EC0\u4E48\u662F\u9012\u5F52\u7EC4\u4EF6\uFF1F\u4E3E\u4E2A\u4F8B\u5B50\u8BF4\u660E\u4E0B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u8BBF\u95EE\u5230\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u6216\u8005\u5B50\u5143\u7D20\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728\u5B50\u7EC4\u4EF6\u4E2D\u600E\u4E48\u8BBF\u95EE\u5230\u7236\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728\u7EC4\u4EF6\u4E2D\u600E\u4E48\u8BBF\u95EE\u5230\u6839\u5B9E\u4F8B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9Object.defineProperty\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>vue\u7EC4\u4EF6\u91CC\u5199\u7684\u539F\u751FaddEventListeners\u76D1\u542C\u4E8B\u4EF6\uFF0C\u8981\u624B\u52A8\u53BB\u9500\u6BC1\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7EC4\u4EF6\u91CC\u7684\u5B9A\u65F6\u5668\u8981\u600E\u4E48\u9500\u6BC1\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7EC4\u4EF6\u4F1A\u5728\u4EC0\u4E48\u65F6\u5019\u4E0B\u88AB\u9500\u6BC1\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F7F\u7528vue\u6E32\u67D3\u5927\u91CF\u6570\u636E\u65F6\u5E94\u8BE5\u600E\u4E48\u4F18\u5316\uFF1F\u8BF4\u4E0B\u4F60\u7684\u601D\u8DEF\uFF01 [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u4E2D\u4F7F\u7528this\u5E94\u8BE5\u6CE8\u610F\u54EA\u4E9B\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4F7F\u7528\u8FC7JSX\u5417\uFF1F\u8BF4\u8BF4\u4F60\u5BF9JSX\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u7EC4\u4EF6\u7684\u547D\u540D\u89C4\u8303 [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u914D\u7F6E\u4F7Fvue2.0+\u652F\u6301TypeScript\u5199\u6CD5\uFF1F [\u6211\u6765\u6311\u6218]</li><li><template></template>\u6709\u4EC0\u4E48\u7528\uFF1F [\u6211\u6765\u6311\u6218] </li><li>vue\u7684is\u8FD9\u4E2A\u7279\u6027\u4F60\u6709\u7528\u8FC7\u5417\uFF1F\u4E3B\u8981\u7528\u5728\u54EA\u4E9B\u65B9\u9762\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7684:class\u548C:style\u6709\u51E0\u79CD\u8868\u793A\u65B9\u5F0F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u4E86\u89E3\u4EC0\u4E48\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u600E\u4E48\u6539\u53D8\u63D2\u5165\u6A21\u677F\u7684\u5206\u9694\u7B26\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u7EC4\u4EF6\u4E2D\u5199name\u9009\u9879\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9provide\u548Cinject\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6709\u4F7F\u7528\u8FC7devtools\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9slot\u7684\u7406\u89E3\u6709\u591A\u5C11\uFF1Fslot\u4F7F\u7528\u573A\u666F\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4F7F\u7528\u8FC7\u52A8\u6001\u7EC4\u4EF6\u5417\uFF1F\u8BF4\u8BF4\u4F60\u5BF9\u5B83\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>prop\u9A8C\u8BC1\u7684type\u7C7B\u578B\u6709\u54EA\u51E0\u79CD\uFF1F [\u6211\u6765\u6311\u6218]</li><li>prop\u662F\u600E\u4E48\u505A\u9A8C\u8BC1\u7684\uFF1F\u53EF\u4EE5\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u7F13\u5B58\u5F53\u524D\u6253\u5F00\u7684\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u7F13\u5B58\u540E\u60F3\u66F4\u65B0\u5F53\u524D\u7EC4\u4EF6\u600E\u4E48\u529E\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7EC4\u4EF6\u7684\u8BBE\u8BA1\u539F\u5219\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u4E86\u89E3vue\u7684diff\u7B97\u6CD5\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5982\u4F55\u4F18\u5316\u9996\u9875\u7684\u52A0\u8F7D\u901F\u5EA6\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u6253\u5305\u6210\u6700\u7EC8\u7684\u6587\u4EF6\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>ajax\u3001fetch\u3001axios\u8FD9\u4E09\u90FD\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u80FD\u76D1\u542C\u5230\u6570\u7EC4\u53D8\u5316\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F\u4E3A\u4EC0\u4E48\u8FD9\u4E9B\u65B9\u6CD5\u80FD\u76D1\u542C\u5230\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u4E2D\u662F\u5982\u4F55\u4F7F\u7528event\u5BF9\u8C61\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u9996\u9875\u767D\u5C4F\u662F\u4EC0\u4E48\u95EE\u9898\u5F15\u8D77\u7684\uFF1F\u5982\u4F55\u89E3\u51B3\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9\u5355\u5411\u6570\u636E\u6D41\u548C\u53CC\u5411\u6570\u636E\u6D41\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u79FB\u52A8\u7AEFui\u4F60\u7528\u7684\u662F\u54EA\u4E2Aui\u5E93\uFF1F\u6709\u9047\u5230\u8FC7\u4EC0\u4E48\u95EE\u9898\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u77E5\u9053nextTick\u7684\u539F\u7406\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9v-clock\u548Cv-pre\u6307\u4EE4\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u5199\u51FA\u4F60\u77E5\u9053\u7684\u8868\u5355\u4FEE\u9970\u7B26\u548C\u4E8B\u4EF6\u4FEE\u9970\u7B26 [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9proxy\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u81EA\u5DF1\u7528vue\u5199\u8FC7UI\u7EC4\u4EF6\u5E93\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u7528vue\u600E\u4E48\u5B9E\u73B0\u4E00\u4E2A\u6362\u80A4\u7684\u529F\u80FD\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u6709\u5728vue\u4E2D\u4F7F\u7528\u8FC7echarts\u5417\uFF1F\u8E29\u8FC7\u54EA\u4E9B\u5751\uFF1F\u5982\u4F55\u89E3\u51B3\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u679C\u8BA9\u4F60\u6559\u4E00\u4E2A2-3\u5E74\u7ECF\u9A8C\u524D\u7AEF\u7ECF\u9A8C\u7684\u540C\u4E8B\u4F7F\u7528vue\uFF0C\u4F60\u8BE5\u600E\u4E48\u6559\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u6027\u80FD\u7684\u4F18\u5316\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>SSR\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F\u6709\u505A\u8FC7SSR\u5417\uFF1F\u4F60\u662F\u600E\u4E48\u505A\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u89C9\u5F97\u8BA4\u4E3A\u7684vue\u5F00\u53D1\u89C4\u8303\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u90E8\u7F72\u4E0A\u7EBF\u524D\u9700\u8981\u505A\u54EA\u4E9B\u51C6\u5907\u5DE5\u4F5C\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u8FC7\u6E21\u52A8\u753B\u5B9E\u73B0\u7684\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5728created\u548Cmounted\u8FD9\u4E24\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u8BF7\u6C42\u6570\u636E\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7236\u5B50\u7EC4\u4EF6\u53CC\u5411\u7ED1\u5B9A\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u600E\u4E48\u83B7\u53D6DOM\u8282\u70B9\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u9879\u76EE\u6709\u505A\u8FC7\u5355\u5143\u6D4B\u8BD5\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u9879\u76EE\u6709\u4F7F\u7528\u8FC7npm run build --report\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u4F55\u89E3\u51B3vue\u6253\u5305vendor\u8FC7\u5927\u7684\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>webpack\u6253\u5305vue\u901F\u5EA6\u592A\u6162\u600E\u4E48\u529E\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u8981\u540C\u65F6\u8DDFN\u4E2A\u4E0D\u540C\u7684\u540E\u7AEF\u4EBA\u5458\u8054\u8C03\u63A5\u53E3\uFF08\u8BF7\u6C42\u7684url\u4E0D\u4E00\u6837\uFF09\u65F6\u4F60\u8BE5\u600E\u4E48\u529E\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u8981\u505A\u6743\u9650\u7BA1\u7406\u8BE5\u600E\u4E48\u505A\uFF1F\u5982\u679C\u63A7\u5236\u5230\u6309\u94AE\u7EA7\u522B\u7684\u6743\u9650\u600E\u4E48\u505A\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u4E0B\u4F60\u7684vue\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u5982\u679C\u662F\u5927\u578B\u9879\u76EE\u4F60\u8BE5\u600E\u4E48\u5212\u5206\u7ED3\u6784\u548C\u5212\u5206\u7EC4\u4EF6\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728\u79FB\u52A8\u7AEF\u4F7F\u7528vue\uFF0C\u4F60\u89C9\u5F97\u6700\u4F73\u5B9E\u8DF5\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u4EEC\u9879\u76EE\u4E3A\u4EC0\u4E48\u4F1A\u9009vue\u800C\u4E0D\u9009\u62E9\u5176\u5B83\u7684\u6846\u67B6\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5BF9\u4E8E\u5373\u5C06\u5230\u6765\u7684vue3.0\u7279\u6027\u4F60\u6709\u4EC0\u4E48\u4E86\u89E3\u7684\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4F60\u6709\u4F7F\u7528\u4EC0\u4E48\u8F85\u52A9\u5DE5\u5177\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u548C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5199\u6CD5\u4E0A\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u7F13\u5B58\u5F53\u524D\u7684\u7EC4\u4EF6\uFF1F\u7F13\u5B58\u540E\u600E\u4E48\u66F4\u65B0\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u4E86\u89E3\u4EC0\u4E48\u662F\u9AD8\u9636\u7EC4\u4EF6\u5417\uFF1F\u53EF\u5426\u4E3E\u4E2A\u4F8B\u5B50\u8BF4\u660E\u4E0B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5199\u7EC4\u4EF6\u7684\u65F6\u5019\u53EF\u4EE5\u5199\u5728.vue\u91CC\u5462\uFF1F\u53EF\u4EE5\u662F\u522B\u7684\u6587\u4EF6\u540D\u540E\u7F00\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-loader\u662F\u4EC0\u4E48\uFF1F\u5B83\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7684extend\uFF08\u6784\u9020\u5668\uFF09\u7684\u7406\u89E3\uFF0C\u5B83\u4E3B\u8981\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u679C\u5C06axios\u5F02\u6B65\u8BF7\u6C42\u540C\u6B65\u5316\u5904\u7406\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u6355\u83B7\u7EC4\u4EF6vue\u7684\u9519\u8BEF\u4FE1\u606F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4E3A\u4EC0\u4E48vue\u4F7F\u7528\u5F02\u6B65\u66F4\u65B0\u7EC4\u4EF6\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u4F55\u5B9E\u73B0\u4E00\u4E2A\u865A\u62DFDOM\uFF1F\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF [\u6211\u6765\u6311\u6218]</li><li>\u5199\u51FA\u591A\u79CD\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u7684\u65B9\u6CD5 [\u6211\u6765\u6311\u6218]</li><li>SPA\u5355\u9875\u9762\u7684\u5B9E\u73B0\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9SPA\u5355\u9875\u9762\u7684\u7406\u89E3\uFF0C\u5B83\u7684\u4F18\u7F3A\u70B9\u5206\u522B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u90FD\u7528vue\u505A\u8FC7\u54EA\u4E9B\u7C7B\u578B\u7684\u9879\u76EE\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u9879\u76EE\u4E2D\u5982\u4F55\u5F15\u5165\u7B2C\u4E09\u65B9\u5E93\uFF08\u6BD4\u5982jQuery\uFF09\uFF1F\u6709\u54EA\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u505A\u5230\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F7F\u7528vue\u624B\u5199\u4E00\u4E2A\u8FC7\u6EE4\u5668 [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4F7F\u7528\u8FC7render\u51FD\u6570\u5417\uFF1F\u6709\u4EC0\u4E48\u597D\u5904\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5199\u51FA\u4F60\u5E38\u7528\u7684\u6307\u4EE4\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u624B\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6307\u4EE4\u53CA\u5199\u51FA\u5982\u4F55\u8C03\u7528 [\u6211\u6765\u6311\u6218]</li><li>\u7EC4\u4EF6\u8FDB\u6765\u8BF7\u6C42\u63A5\u53E3\u65F6\u4F60\u662F\u653E\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\uFF1F\u4E3A\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u7528\u8FC7\u4E8B\u4EF6\u603B\u7EBF(EventBus)\u5417\uFF1F\u8BF4\u8BF4\u4F60\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4vue\u7684\u4F18\u7F3A\u70B9\u5206\u522B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>DOM\u6E32\u67D3\u5728\u54EA\u4E2A\u5468\u671F\u4E2D\u5C31\u5DF2\u7ECF\u5B8C\u6210\u4E86\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u7B2C\u4E00\u6B21\u52A0\u8F7D\u9875\u9762\u65F6\u4F1A\u89E6\u53D1\u54EA\u51E0\u4E2A\u94A9\u5B50\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u751F\u547D\u5468\u671F\u603B\u5171\u6709\u51E0\u4E2A\u9636\u6BB5\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u751F\u547D\u5468\u671F\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u548Cangular\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u4F55\u5F15\u5165scss\uFF1F\u5F15\u5165\u540E\u5982\u4F55\u4F7F\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F7F\u7528vue\u5F00\u53D1\u8FC7\u7A0B\u4F60\u662F\u600E\u4E48\u505A\u63A5\u53E3\u7BA1\u7406\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4E3A\u4F55\u5B98\u65B9\u63A8\u8350\u4F7F\u7528axios\u800C\u4E0D\u7528vue-resource\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u4E86\u89E3axios\u7684\u539F\u7406\u5417\uFF1F\u6709\u770B\u8FC7\u5B83\u7684\u6E90\u7801\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u5C01\u88C5\u8FC7axios\u5417\uFF1F\u4E3B\u8981\u662F\u5C01\u88C5\u54EA\u65B9\u9762\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u4F55\u4E2D\u65ADaxios\u7684\u8BF7\u6C42\uFF1F [\u6211\u6765\u6311\u6218]</li><li>axios\u662F\u4EC0\u4E48\uFF1F\u600E\u6837\u4F7F\u7528\u5B83\uFF1F\u600E\u4E48\u89E3\u51B3\u8DE8\u57DF\u7684\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7684template\u7F16\u8BD1\u7684\u7406\u89E3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-on\u53EF\u4EE5\u7ED1\u5B9A\u591A\u4E2A\u65B9\u6CD5\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5E38\u7528\u7684\u4FEE\u9970\u7B26\u6709\u54EA\u4E9B\uFF1F\u5217\u4E3E\u5E76\u8BF4\u660E [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u8BA4\u4E3Avue\u7684\u6838\u5FC3\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-model\u662F\u4EC0\u4E48\uFF1F\u6709\u4EC0\u4E48\u7528\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9vue\u7684mixin\u7684\u7406\u89E3\uFF0C\u6709\u4EC0\u4E48\u5E94\u7528\u573A\u666F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>SPA\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u6162\u7684\u600E\u4E48\u89E3\u51B3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5220\u9664\u6570\u7EC4\u7528delete\u548CVue.delete\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u52A8\u6001\u7ED9vue\u7684data\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\u65F6\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F\u600E\u6837\u89E3\u51B3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u7EC4\u4EF6\u548C\u63D2\u4EF6\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u4F7F\u7528vue\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898\uFF08\u5751\uFF09\u6709\u54EA\u4E9B\uFF0C\u4F60\u662F\u600E\u4E48\u89E3\u51B3\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9\u9009\u9879el,template,render\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>vue\u5B9E\u4F8B\u6302\u8F7D\u7684\u8FC7\u7A0B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165\u63D2\u4EF6\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-if\u548Cv-for\u7684\u4F18\u5148\u7EA7\u662F\u4EC0\u4E48\uFF1F\u5982\u679C\u8FD9\u4E24\u4E2A\u540C\u65F6\u51FA\u73B0\u65F6\uFF0C\u90A3\u5E94\u8BE5\u600E\u4E48\u4F18\u5316\u624D\u80FD\u5F97\u5230\u66F4\u597D\u7684\u6027\u80FD\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5206\u522B\u8BF4\u8BF4vue\u80FD\u76D1\u542C\u5230\u6570\u7EC4\u6216\u5BF9\u8C61\u53D8\u5316\u7684\u573A\u666F\uFF0C\u8FD8\u6709\u54EA\u4E9B\u573A\u666F\u662F\u76D1\u542C\u4E0D\u5230\u7684\uFF1F\u65E0\u6CD5\u76D1\u542C\u65F6\u6709\u4EC0\u4E48\u89E3\u51B3\u65B9\u6848\uFF1F [\u6211\u6765\u6311\u6218]</li><li>$nextTick\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4E3A\u4EC0\u4E48data\u5C5E\u6027\u5FC5\u987B\u58F0\u660E\u4E3A\u8FD4\u56DE\u4E00\u4E2A\u521D\u59CB\u6570\u636E\u5BF9\u5E94\u7684\u51FD\u6570\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u5728watch\u76D1\u542C\u5F00\u59CB\u4E4B\u540E\u7ACB\u5373\u88AB\u8C03\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>watch\u600E\u4E48\u6DF1\u5EA6\u76D1\u542C\u5BF9\u8C61\u53D8\u5316\uFF1F [\u6211\u6765\u6311\u6218]</li><li>watch\u548C\u8BA1\u7B97\u5C5E\u6027\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u5982\u4F55\u76D1\u542C\u952E\u76D8\u4E8B\u4EF6\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-for\u5FAA\u73AF\u4E2Dkey\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u5728vue\u4E2D\u4F7F\u7528\u63D2\u4EF6\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u5199\u8FC7\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9keep-alive\u7684\u7406\u89E3\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u4F7Fcss\u6837\u5F0F\u53EA\u5728\u5F53\u524D\u7EC4\u4EF6\u4E2D\u751F\u6548\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u770B\u8FC7vue\u7684\u6E90\u7801\u5417\uFF1F\u5982\u679C\u6709\u90A3\u5C31\u8BF4\u8BF4\u770B [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u5199\u8FC7\u81EA\u5B9A\u4E49\u6307\u4EE4\u5417\uFF1F\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u751F\u547D\u5468\u671F\uFF08\u94A9\u5B50\u51FD\u6570\uFF09\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>v-show\u548Cv-if\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u4F7F\u7528\u573A\u666F\u5206\u522B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9MVC\u3001MVP\u3001MVVM\u6A21\u5F0F\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u4E0B\u4F60\u5BF9\u6307\u4EE4\u7684\u7406\u89E3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF7\u63CF\u8FF0\u4E0Bvue\u7684\u751F\u547D\u5468\u671F\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u90FD\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4EC0\u4E48\u662F\u865A\u62DFDOM\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4EC0\u4E48\u662F\u53CC\u5411\u7ED1\u5B9A\uFF1F\u539F\u7406\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue\u548Creact\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u4F7F\u7528\u573A\u666F\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4vue\u7684\u4F18\u7F3A\u70B9 [\u6211\u6765\u6311\u6218]</li><li>\u6709\u4F7F\u7528\u8FC7vue\u5417\uFF1F\u8BF4\u8BF4\u4F60\u5BF9vue\u7684\u7406\u89E3 [\u6211\u6765\u6311\u6218]</li></ul><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli</h2><ul><li>vue-cli\u751F\u6210\u7684\u9879\u76EE\u53EF\u4EE5\u4F7F\u7528es6\u3001es7\u7684\u8BED\u6CD5\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-cli\u600E\u4E48\u89E3\u51B3\u8DE8\u57DF\u7684\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-cli\u4E2D\u4F60\u7ECF\u5E38\u7684\u52A0\u8F7D\u5668\u6709\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u77E5\u9053\u4EC0\u4E48\u662F\u811A\u624B\u67B6\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u4E0B\u4F60\u4E86\u89E3\u7684vue-cli\u539F\u7406\uFF1F\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5B9E\u73B0\u4E2A\u7C7Bvue-cli\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u4F7F\u7528vue-cli3\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-cli3\u4F60\u6709\u4F7F\u7528\u8FC7\u5417\uFF1F\u5B83\u548C2.x\u7248\u672C\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-cli\u9ED8\u8BA4\u662F\u5355\u9875\u9762\u7684\uFF0C\u90A3\u8981\u5F04\u6210\u591A\u9875\u9762\u8BE5\u600E\u4E48\u529E\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4E0D\u7528vue-cli\uFF0C\u4F60\u81EA\u5DF1\u6709\u642D\u5EFA\u8FC7vue\u7684\u5F00\u53D1\u73AF\u5883\u5417\uFF1F\u6D41\u7A0B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li></ul><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h2><ul><li>vue-router\u600E\u4E48\u91CD\u5B9A\u5411\u9875\u9762\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-router\u600E\u4E48\u914D\u7F6E404\u9875\u9762\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5207\u6362\u8DEF\u7531\u65F6\uFF0C\u9700\u8981\u4FDD\u5B58\u8349\u7A3F\u7684\u529F\u80FD\uFF0C\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-router\u8DEF\u7531\u6709\u51E0\u79CD\u6A21\u5F0F\uFF1F\u8BF4\u8BF4\u5B83\u4EEC\u7684\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-router\u6709\u54EA\u51E0\u79CD\u5BFC\u822A\u94A9\u5B50\uFF08 \u5BFC\u822A\u5B88\u536B \uFF09\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4\u4F60\u5BF9router-link\u7684\u4E86\u89E3 [\u6211\u6765\u6311\u6218]</li><li>vue-router\u5982\u4F55\u54CD\u5E94\u8DEF\u7531\u53C2\u6570\u7684\u53D8\u5316\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u770B\u8FC7vue-router\u7684\u6E90\u7801\u5417\uFF1F\u8BF4\u8BF4\u770B [\u6211\u6765\u6311\u6218]</li><li>\u5207\u6362\u5230\u65B0\u8DEF\u7531\u65F6\uFF0C\u9875\u9762\u8981\u6EDA\u52A8\u5230\u9876\u90E8\u6216\u4FDD\u6301\u539F\u5148\u7684\u6EDA\u52A8\u4F4D\u7F6E\u600E\u4E48\u505A\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728\u4EC0\u4E48\u573A\u666F\u4E0B\u4F1A\u7528\u5230\u5D4C\u5957\u8DEF\u7531\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u4F55\u83B7\u53D6\u8DEF\u7531\u4F20\u8FC7\u6765\u7684\u53C2\u6570\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4active-class\u662F\u54EA\u4E2A\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5728vue\u7EC4\u4EF6\u4E2D\u600E\u4E48\u83B7\u53D6\u5230\u5F53\u524D\u7684\u8DEF\u7531\u4FE1\u606F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vur-router\u600E\u4E48\u91CD\u5B9A\u5411\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u6837\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u5B9E\u73B0\u8DEF\u7531\u61D2\u52A0\u8F7D\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u679C\u8BA9\u4F60\u4ECE\u96F6\u5F00\u59CB\u5199\u4E00\u4E2Avue\u8DEF\u7531\uFF0C\u8BF4\u8BF4\u4F60\u7684\u601D\u8DEF [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u8BF4vue-router\u5B8C\u6574\u7684\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8DEF\u7531\u4E4B\u95F4\u662F\u600E\u4E48\u8DF3\u8F6C\u7684\uFF1F\u6709\u54EA\u4E9B\u65B9\u5F0F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u5982\u679Cvue-router\u4F7F\u7528history\u6A21\u5F0F\uFF0C\u90E8\u7F72\u65F6\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>route\u548Crouter\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-router\u94A9\u5B50\u51FD\u6570\u6709\u54EA\u4E9B\uFF1F\u90FD\u6709\u54EA\u4E9B\u53C2\u6570\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vue-router\u662F\u7528\u6765\u505A\u4EC0\u4E48\u7684\uFF1F\u5B83\u6709\u54EA\u4E9B\u7EC4\u4EF6\uFF1F [\u6211\u6765\u6311\u6218]</li></ul><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h2><ul><li>vuex\u4F7F\u7528actions\u65F6\u4E0D\u652F\u6301\u591A\u53C2\u6570\u4F20\u9012\u600E\u4E48\u529E\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u89C9\u5F97vuex\u6709\u4EC0\u4E48\u7F3A\u70B9\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u89C9\u5F97\u8981\u662F\u4E0D\u7528vuex\u7684\u8BDD\u4F1A\u5E26\u6765\u54EA\u4E9B\u95EE\u9898\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vuex\u600E\u4E48\u77E5\u9053state\u662F\u901A\u8FC7mutation\u4FEE\u6539\u8FD8\u662F\u5916\u90E8\u76F4\u63A5\u4FEE\u6539\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF7\u6C42\u6570\u636E\u662F\u5199\u5728\u7EC4\u4EF6\u7684methods\u4E2D\u8FD8\u662F\u5728vuex\u7684action\u4E2D\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u600E\u4E48\u76D1\u542Cvuex\u6570\u636E\u7684\u53D8\u5316\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vuex\u7684action\u548Cmutation\u7684\u7279\u6027\u662F\u4EC0\u4E48\uFF1F\u6709\u4EC0\u4E48\u533A\u522B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u9875\u9762\u5237\u65B0\u540Evuex\u7684state\u6570\u636E\u4E22\u5931\u600E\u4E48\u89E3\u51B3\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vuex\u7684state\u3001getter\u3001mutation\u3001action\u3001module\u7279\u6027\u5206\u522B\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>vuex\u7684store\u6709\u51E0\u4E2A\u5C5E\u6027\u503C\uFF1F\u5206\u522B\u8BB2\u8BB2\u5B83\u4EEC\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u7406\u89E3\u7684vuex\u662F\u4EC0\u4E48\u5462\uFF1F\u54EA\u4E9B\u573A\u666F\u4F1A\u7528\u5230\uFF1F\u4E0D\u7528\u4F1A\u6709\u95EE\u9898\u5417\uFF1F\u6709\u54EA\u4E9B\u7279\u6027\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F7F\u7528vuex\u7684\u4F18\u52BF\u662F\u4EC0\u4E48\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u6709\u7528\u8FC7vuex\u5417\uFF1F\u5B83\u4E3B\u8981\u89E3\u51B3\u7684\u662F\u4EC0\u4E48\u95EE\u9898\uFF1F\u63A8\u8350\u5728\u54EA\u4E9B\u573A\u666F\u7528\uFF1F [\u6211\u6765\u6311\u6218]</li></ul><h2 id="elementui" tabindex="-1"><a class="header-anchor" href="#elementui" aria-hidden="true">#</a> ElementUI</h2><ul><li>ElementUI\u662F\u600E\u4E48\u505A\u8868\u5355\u9A8C\u8BC1\u7684\uFF1F\u5728\u5FAA\u73AF\u91CC\u5BF9\u6BCF\u4E2Ainput\u9A8C\u8BC1\u600E\u4E48\u505A\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u4F60\u6709\u4E8C\u6B21\u5C01\u88C5\u8FC7ElementUI\u7EC4\u4EF6\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>ElementUI\u600E\u4E48\u4FEE\u6539\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF1F [\u6211\u6765\u6311\u6218]</li><li>ElementUI\u7684\u7A7F\u68AD\u7EC4\u4EF6\u5982\u679C\u6570\u636E\u91CF\u5927\u4F1A\u53D8\u5361\u600E\u4E48\u89E3\u51B3\u4E0D\u5361\u7684\u95EE\u9898\u5462\uFF1F [\u6211\u6765\u6311\u6218]</li><li>ElementUI\u8868\u683C\u7EC4\u4EF6\u5982\u4F55\u5B9E\u73B0\u52A8\u6001\u8868\u5934\uFF1F [\u6211\u6765\u6311\u6218]</li><li>ElementUI\u4F7F\u7528\u8868\u683C\u7EC4\u4EF6\u65F6\u6709\u9047\u5230\u8FC7\u95EE\u9898\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u6709\u9605\u8BFB\u8FC7ElementUI\u7684\u6E90\u7801\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u9879\u76EE\u4E2D\u6709\u4F7F\u7528\u8FC7ElementUI\u5417\uFF1F\u6709\u9047\u5230\u8FC7\u54EA\u4E9B\u95EE\u9898\uFF1F\u5B83\u7684\u4F7F\u7528\u573A\u666F\u4E3B\u8981\u662F\u54EA\u4E9B\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u6709\u7528\u8FC7\u54EA\u4E9Bvue\u7684ui\uFF1F\u8BF4\u8BF4\u5B83\u4EEC\u7684\u4F18\u7F3A\u70B9\uFF1F [\u6211\u6765\u6311\u6218]</li></ul><h2 id="mint-ui" tabindex="-1"><a class="header-anchor" href="#mint-ui" aria-hidden="true">#</a> mint-ui</h2><ul><li>mint-ui\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u6709\u6CA1\u6709\u9047\u5230\u4EC0\u4E48\u5751\uFF1F\u600E\u4E48\u89E3\u51B3\u7684\uFF1F [\u6211\u6765\u6311\u6218]</li><li>\u8BF4\u51FA\u51E0\u4E2Amint-ui\u5E38\u7528\u7684\u7EC4\u4EF6 [\u6211\u6765\u6311\u6218]</li><li>mint-ui\u662F\u4EC0\u4E48\uFF1F\u4F60\u6709\u4F7F\u7528\u8FC7\u5417\uFF1F [\u6211\u6765\u6311\u6218]</li></ul>`,14);function _(f,b){const e=t("ExternalLinkIcon");return v(),a(n,null,[c,d,i("p",null,[h,i("a",m,[x,r(e)])]),p],64)}var g=u(s,[["render",_],["__file","220+\u4E2A\u77E5\u8BC6\u70B9\uFF08\u9762\u8BD5\u9898\uFF09\u4E3A\u4F60\u4FDD\u9A7E\u62A4\u822A.html.vue"]]);export{g as default};
