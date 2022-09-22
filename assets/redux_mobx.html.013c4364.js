import{_ as a,r as c,o as i,c as n,a as e,b as t,F as l,e as r,d}from"./app.26a788a0.js";var s="/images/fe/react/redux_mobx_01.png",h="/images/fe/react/redux_mobx_02.png";const x={},u=r('<h1 id="redux-vs-mobx" tabindex="-1"><a class="header-anchor" href="#redux-vs-mobx" aria-hidden="true">#</a> Redux VS MobX</h1><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E00\u3001\u662F\u4EC0\u4E48</h2><p><code>Mobx</code> \u548C <code>Redux</code> \u90FD\u662F <code>JavaScript</code> \u5E94\u7528\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u90FD\u9002\u7528\u4E8E <code>React</code>\uFF0C<code>Angular</code>\uFF0C<code>VueJs</code> \u7B49\u6846\u67B6\u6216\u5E93\uFF0C\u800C\u4E0D\u662F\u5C40\u9650\u4E8E\u67D0\u4E00\u7279\u5B9A <code>UI</code> \u5E93\u3002</p><h3 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h3><p>\u8981\u4ECB\u7ECD <code>Redux</code>\uFF0C\u6211\u4EEC\u5C31\u4E0D\u5F97\u4E0D\u8C08\u5230 <code>Flux</code> \u4E86:</p><blockquote><p>Flux is the application architecture that Facebook uses for building client-side web applications.It&#39;s more of a pattern rather than a formal framework Flux\u662FFacebook\u7528\u6765\u5F00\u53D1\u5BA2\u6237\u7AEF-\u670D\u52A1\u7AEFweb\u5E94\u7528\u7A0B\u5E8F\u7684\u5E94\u7528\u67B6\u6784\uFF0C\u5B83\u66F4\u591A\u662F\u4E00\u79CD\u67B6\u6784\u6A21\u5F0F\uFF0C\u800C\u975E\u4E00\u4E2A\u7279\u5B9A\u6846\u67B6\u3002\u8BE6\u89E3Flux\u3002</p></blockquote><p>\u800C <code>Redux</code> \u66F4\u591A\u7684\u662F\u9075\u5FAA <code>Flux</code> \u6A21\u5F0F\u7684\u4E00\u79CD\u5B9E\u73B0\uFF0C\u662F\u4E00\u4E2A <code>JavaScript</code> \u5E93\uFF0C\u5B83\u5173\u6CE8\u70B9\u4E3B\u8981\u662F\u4EE5\u4E0B\u51E0\u65B9\u9762\uFF1A</p><ol><li><strong>Action</strong>\uFF1A\u4E00\u4E2A <code>JavaScript</code> \u5BF9\u8C61\uFF0C\u63CF\u8FF0\u52A8\u4F5C\u76F8\u5173\u4FE1\u606F\uFF0C\u4E3B\u8981\u5305\u542B\u5C5E\u6027 <code>type</code>: <code>action</code> \u7C7B\u578B\u548C <code>payload</code>: \u8D1F\u8F7D\u6570\u636E</li><li><strong>Reducer</strong>\uFF1A\u5B9A\u4E49\u5E94\u7528\u72B6\u6001\u5982\u4F55\u54CD\u5E94\u4E0D\u540C\u52A8\u4F5C\uFF08<code>action</code>\uFF09\uFF0C\u5982\u4F55\u66F4\u65B0\u72B6\u6001\uFF1B</li><li><strong>Store</strong>\uFF1A\u7BA1\u7406 <code>action</code> \u548C <code>reducer</code> \u53CA\u5176\u5173\u7CFB\u7684\u5BF9\u8C61\uFF0C\u4E3B\u8981\u63D0\u4F9B\u4EE5\u4E0B\u529F\u80FD\uFF1A <ol><li>\u7EF4\u62A4\u5E94\u7528\u72B6\u6001\u5E76\u652F\u6301\u8BBF\u95EE\u72B6\u6001\uFF08<code>getState()</code>\uFF09\uFF1B</li><li>\u652F\u6301\u76D1\u542C <code>action</code> \u7684\u5206\u53D1\uFF0C\u66F4\u65B0\u72B6\u6001\uFF08<code>dispatch(action)</code>\uFF09\uFF1B</li><li>\u652F\u6301\u8BA2\u9605 <code>store</code> \u7684\u53D8\u66F4\uFF08<code>subscribe(listener)</code>\uFF09\uFF1B</li></ol></li><li><strong>\u5F02\u6B65\u6D41</strong>\uFF1A\u7531\u4E8E <code>Redux</code> \u6240\u6709\u5BF9store\u72B6\u6001\u7684\u53D8\u66F4\uFF0C\u90FD\u5E94\u8BE5\u901A\u8FC7action\u89E6\u53D1\uFF0C\u5F02\u6B65\u4EFB\u52A1\uFF08\u901A\u5E38\u90FD\u662F\u4E1A\u52A1\u6216\u83B7\u53D6\u6570\u636E\u4EFB\u52A1\uFF09\u4E5F\u4E0D\u4F8B\u5916\uFF0C\u800C\u4E3A\u4E86\u4E0D\u5C06\u4E1A\u52A1\u6216\u6570\u636E\u76F8\u5173\u7684\u4EFB\u52A1\u6DF7\u5165React\u7EC4\u4EF6\u4E2D\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u6846\u67B6\u914D\u5408\u7BA1\u7406\u5F02\u6B65\u4EFB\u52A1\u6D41\u7A0B\uFF0C\u5982 <code>redux-thunk</code>\uFF0C<code>redux-saga</code> \u7B49</li></ol><h3 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx" aria-hidden="true">#</a> MobX</h3>',9),b={href:"https://github.com/mobxjs/mobx",target:"_blank",rel:"noopener noreferrer"},p=d("Github"),_={href:"https://zh.mobx.js.org/",target:"_blank",rel:"noopener noreferrer"},g=d("\u4E2D\u6587\u5B98\u7F51"),m=r('<p><code>Mobx</code> \u662F\u4E00\u4E2A\u7B80\u5355\uFF0C\u53EF\u6269\u5C55\u7684\u72B6\u6001\u7BA1\u7406\u5E93\u3002\u5B83\u901A\u8FC7\u8FD0\u7528\u900F\u660E\u7684\u51FD\u6570\u5F0F\u54CD\u5E94\u7F16\u7A0B\uFF08Transparent Functional Reactive Programming\uFF0CTFRP\uFF09\u4F7F\u72B6\u6001\u7BA1\u7406\u53D8\u5F97\u7B80\u5355\u548C\u53EF\u6269\u5C55\u3002</p><p><img src="'+s+'" alt="01"></p><p><code>Mobx</code> \u4F7F\u7528\u5355\u5411\u6570\u636E\u6D41\uFF0C\u5229\u7528 action \u6539\u53D8 state \uFF0C\u8FDB\u800C\u66F4\u65B0\u6240\u6709\u53D7\u5F71\u54CD\u7684 view</p><p><img src="'+h+'" alt="02"></p><ol><li>Action\uFF1A\u5B9A\u4E49\u6539\u53D8\u72B6\u6001\u7684\u52A8\u4F5C\u51FD\u6570\uFF0C\u5305\u62EC\u5982\u4F55\u53D8\u66F4\u72B6\u6001\uFF1B</li><li>Store\uFF1A\u96C6\u4E2D\u7BA1\u7406\u6A21\u5757\u72B6\u6001\uFF08State\uFF09\u548C\u52A8\u4F5C\uFF08action\uFF09\uFF1B</li><li>Derivation\uFF08\u6D3E\u751F\uFF09\uFF1A\u4ECE\u5E94\u7528\u72B6\u6001\u4E2D\u6D3E\u751F\u800C\u51FA\uFF0C\u4E14\u6CA1\u6709\u4EFB\u4F55\u5176\u4ED6\u5F71\u54CD\u7684\u6570\u636E\uFF0C\u6211\u4EEC\u79F0\u4E3Aderivation\uFF08\u6D3E\u751F\uFF09\uFF0C\u6D3E\u751F\u5728\u4EE5\u4E0B\u60C5\u51B5\u4E0B\u5B58\u5728\uFF1A <ol><li>\u7528\u6237\u754C\u9762\uFF1B</li><li>\u6D3E\u751F\u6570\u636E\uFF1B\u6D3E\u751F\u4E3B\u8981\u6709\u4E24\u79CD\uFF1A <ol><li><code>Computed Values</code>\uFF08\u8BA1\u7B97\u503C\uFF09\uFF1A\u8BA1\u7B97\u503C\u603B\u662F\u53EF\u4EE5\u4F7F\u7528\u7EAF\u51FD\u6570\uFF08<code>pure function</code>\uFF09\u4ECE\u5F53\u524D\u53EF\u89C2\u5BDF\u72B6\u6001\u4E2D\u83B7\u53D6\uFF1B</li><li><code>Reactions</code>\uFF08\u53CD\u5E94\uFF09\uFF1A\u53CD\u5E94\u6307\u72B6\u6001\u53D8\u66F4\u65F6\u9700\u8981\u81EA\u52A8\u53D1\u751F\u7684\u526F\u4F5C\u7528\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u5176\u8BFB\u5199\u64CD\u4F5C\uFF1B</li></ol></li></ol></li></ol><h2 id="\u4E8C\u3001\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u533A\u522B" aria-hidden="true">#</a> \u4E8C\u3001\u533A\u522B</h2><table><thead><tr><th>\u6BD4\u8F83\u9879</th><th>Redux</th><th>Mobx</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>\u53EF\u7EF4\u62A4\u6027</td><td>Facebook\u51FA\u54C1</td><td>\u793E\u533A\u51FA\u54C1</td><td>mobx \u66F4\u81EA\u7531</td></tr><tr><td>\u8BBE\u8BA1\u601D\u60F3</td><td>\u51FD\u6570\u5F0F\u7F16\u7A0B</td><td>\u9762\u5411\u5BF9\u8C61</td><td>mobx \u4E5F\u652F\u6301\u51FD\u6570\u5F0F\u7F16\u7A0B</td></tr><tr><td>\u6570\u636E\u7BA1\u7406</td><td>\u5355\u4E00store</td><td>\u591A\u6A21\u5757\u72EC\u7ACBstore</td><td>\u4E00\u4E2A tree \u548C\u591A\u4E2Atree \u7684\u533A\u522B</td></tr><tr><td>\u6570\u636E\u5B58\u50A8</td><td>JavaScript \u539F\u751F\u5BF9\u8C61</td><td>\u53EF\u89C2\u5BDF\u5BF9\u8C61</td><td></td></tr><tr><td>\u72B6\u6001\u5BF9\u8C61</td><td>\u4E0D\u53EF\u53D8\uFF08Immutable\uFF09</td><td>\u53EF\u53D8\uFF08Mutable\uFF09</td><td></td></tr><tr><td>React \u63D2\u4EF6\u5E93</td><td>react-redux</td><td>mobx-react</td><td></td></tr></tbody></table><h2 id="\u4E09\u3001\u9009\u62E9-or-\u4E0D\u9009-mobx-\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u9009\u62E9-or-\u4E0D\u9009-mobx-\u7684\u539F\u56E0" aria-hidden="true">#</a> \u4E09\u3001\u9009\u62E9 OR \u4E0D\u9009 MobX \u7684\u539F\u56E0</h2><p>\u9009\u62E9 <code>MobX</code> \u7684\u539F\u56E0\uFF1A</p><ol><li><strong>\u5B66\u4E60\u6210\u672C\u5C11</strong>\uFF1AMobx\u57FA\u7840\u77E5\u8BC6\u5F88\u7B80\u5355\uFF0C\u5B66\u4E60\u4E86\u534A\u5C0F\u65F6\u5B98\u65B9\u6587\u6863\u548C\u793A\u4F8B\u4EE3\u7801\u5C31\u642D\u5EFA\u4E86\u65B0\u9879\u76EE\u5B9E\u4F8B\uFF1B\u800CRedux\u786E\u8F83\u7E41\u7410\uFF0C\u6D41\u7A0B\u8F83\u591A\uFF0C\u9700\u8981\u914D\u7F6E\uFF0C\u521B\u5EFAstore\uFF0C\u7F16\u5199reducer\uFF0Caction\uFF0C\u5982\u679C\u6D89\u53CA\u5F02\u6B65\u4EFB\u52A1\uFF0C\u8FD8\u9700\u8981\u5F15\u5165redux-thunk\u6216redux-saga\u7F16\u5199\u989D\u5916\u4EE3\u7801\uFF0CMobx\u6D41\u7A0B\u76F8\u6BD4\u5C31\u7B80\u5355\u5F88\u591A\uFF0C\u5E76\u4E14\u4E0D\u9700\u8981\u989D\u5916\u5F02\u6B65\u5904\u7406\u5E93\uFF1B</li><li><strong>\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</strong>\uFF1AMobx\u652F\u6301\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528@observable and @observer\uFF0C\u4EE5\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u65B9\u5F0F\u4F7F\u5F97JavaScript\u5BF9\u8C61\u5177\u6709\u54CD\u5E94\u5F0F\u80FD\u529B\uFF1B\u800CRedux\u6700\u63A8\u8350\u9075\u5FAA\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF0C\u5F53\u7136Mobx\u4E5F\u652F\u6301\u51FD\u6570\u5F0F\u7F16\u7A0B\uFF1B</li><li><strong>\u6A21\u7248\u4EE3\u7801\u5C11</strong>\uFF1A\u76F8\u5BF9\u4E8ERedux\u7684\u5404\u79CD\u6A21\u7248\u4EE3\u7801\uFF0C\u5982\uFF0CactionCreater\uFF0Creducer\uFF0Csaga\uFF0Fthunk\u7B49\uFF0CMobx\u5219\u4E0D\u9700\u8981\u7F16\u5199\u8FD9\u7C7B\u6A21\u677F\u4EE3\u7801\uFF1B</li></ol><p>\u4E0D\u9009 <code>MobX</code> \u7684\u539F\u56E0\uFF1A</p><ol><li><strong>\u8FC7\u4E8E\u81EA\u7531</strong>\uFF1AMobx\u63D0\u4F9B\u7684\u7EA6\u5B9A\u53CA\u6A21\u7248\u4EE3\u7801\u5F88\u5C11\uFF0C\u8FD9\u5BFC\u81F4\u5F00\u53D1\u4EE3\u7801\u7F16\u5199\u5F88\u81EA\u7531\uFF0C\u5982\u679C\u4E0D\u505A\u4E00\u4E9B\u7EA6\u5B9A\uFF0C\u6BD4\u8F83\u5BB9\u6613\u5BFC\u81F4\u56E2\u961F\u4EE3\u7801\u98CE\u683C\u4E0D\u7EDF\u4E00\uFF0C\u6240\u4EE5\u5F53\u56E2\u961F\u6210\u5458\u8F83\u591A\u65F6\uFF0C\u786E\u5B9E\u9700\u8981\u6DFB\u52A0\u4E00\u4E9B\u7EA6\u5B9A\uFF1B</li><li><strong>\u53EF\u62D3\u5C55\uFF0C\u53EF\u7EF4\u62A4\u6027</strong>\uFF1A\u4E5F\u8BB8\u4F60\u4F1A\u62C5\u5FC3Mobx\u80FD\u4E0D\u80FD\u9002\u5E94\u540E\u671F\u9879\u76EE\u53D1\u5C55\u58EE\u5927\u5462\uFF1F\u786E\u5B9EMobx\u66F4\u9002\u5408\u7528\u5728\u4E2D\u5C0F\u578B\u9879\u76EE\u4E2D\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u8868\u793A\u5176\u4E0D\u80FD\u652F\u6491\u5927\u578B\u9879\u76EE\uFF0C\u5173\u952E\u5728\u4E8E\u5927\u578B\u9879\u76EE\u901A\u5E38\u9700\u8981\u7279\u522B\u6CE8\u610F\u53EF\u62D3\u5C55\u6027\uFF0C\u53EF\u7EF4\u62A4\u6027\uFF0C\u76F8\u6BD4\u800C\u8A00\uFF0C\u89C4\u8303\u7684Redux\u66F4\u6709\u4F18\u52BF\uFF0C\u800CMobx\u66F4\u81EA\u7531\uFF0C\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u5236\u5B9A\u4E00\u4E9B\u89C4\u5219\u6765\u786E\u4FDD\u9879\u76EE\u540E\u671F\u62D3\u5C55\uFF0C\u7EF4\u62A4\u96BE\u6613\u7A0B\u5EA6\uFF1B</li></ol><h2 id="\u56DB\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u603B\u7ED3" aria-hidden="true">#</a> \u56DB\u3001\u603B\u7ED3</h2><p>Mobx\u5229\u7528getter\u548Csetter\u6765\u6536\u96C6\u7EC4\u4EF6\u7684\u6570\u636E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4ECE\u800C\u5728\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\u7CBE\u786E\u77E5\u9053\u54EA\u4E9B\u7EC4\u4EF6\u9700\u8981\u91CD\u7ED8\uFF0C\u5728\u754C\u9762\u7684\u89C4\u6A21\u53D8\u5927\u7684\u65F6\u5019\uFF0C\u5F80\u5F80\u4F1A\u6709\u5F88\u591A\u7EC6\u7C92\u5EA6\u66F4\u65B0\uFF0C\u867D\u7136\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u4F1A\u6709\u989D\u5916\u7684\u5F00\u9500\uFF0C\u5728\u754C\u9762\u89C4\u6A21\u5927\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u5F00\u9500\u662F\u8FDC\u6BD4\u5BF9\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u505A\u810F\u68C0\u67E5\u5C0F\u7684\uFF0C\u56E0\u6B64\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0BMobx\u4F1A\u5F88\u5BB9\u6613\u5F97\u5230\u6BD4Redux\u66F4\u597D\u7684\u6027\u80FD\u3002\u800C\u5728\u6570\u636E\u5168\u90E8\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u57FA\u4E8E\u810F\u68C0\u67E5\u7684\u5B9E\u73B0\u4F1A\u6BD4Mobx\u8FD9\u7C7B\u54CD\u5E94\u5F0F\u6709\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u4F46\u8FD9\u7C7B\u60C5\u51B5\u5F88\u5C11\u3002</p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>',15),f={href:"https://juejin.cn/post/6844903517488939021",target:"_blank",rel:"noopener noreferrer"},M=d("\u6211\u4E3A\u4EC0\u4E48\u4ECERedux\u8FC1\u79FB\u5230\u4E86Mobx - \u6398\u91D1[\u6709\u8D5E\u524D\u7AEF]"),R={href:"https://juejin.cn/post/6844903562095362056",target:"_blank",rel:"noopener noreferrer"},v=d("\u4F60\u9700\u8981Mobx\u8FD8\u662FRedux\uFF1F");function k(F,S){const o=c("ExternalLinkIcon");return i(),n(l,null,[u,e("ul",null,[e("li",null,[e("a",b,[p,t(o)])]),e("li",null,[e("a",_,[g,t(o)])])]),m,e("ul",null,[e("li",null,[e("a",f,[M,t(o)])]),e("li",null,[e("a",R,[v,t(o)])])])],64)}var j=a(x,[["render",k],["__file","redux_mobx.html.vue"]]);export{j as default};
