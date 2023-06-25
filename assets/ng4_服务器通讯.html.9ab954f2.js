import{_ as o,r,o as a,c as _,a as s,b as n,F as i,d as t,e as c}from"./app.cec2e512.js";var l="/assets/ng4_01.718e974c.png",g="/assets/ng4_02.86710707.png",p="/assets/ng4_03.9c3046b5.png",m="/assets/ng4_04.451bcc02.png",d="/assets/ng4_05.9a4c66db.png",h="/assets/ng4_06.65034d12.png",u="/assets/ng4_07.083cea69.png",v="/assets/ng4_08.73db6ec9.png",b="/assets/ng4_09.25df41f1.png",f="/assets/ng4_10.08bdba39.png",x="/assets/ng4_11.43d4ca69.png",y="/assets/ng4_12.0cfca92d.png",k="/assets/ng4_13.c610950d.png",w="/assets/ng4_14.258d4015.png",j="/assets/ng4_15.2057a9a4.png",S="/assets/ng4_16.99557bbb.png",T="/assets/ng4_17.0fbd952c.png",E="/assets/ng4_18.3ddf2dd7.png",I="/assets/ng4_19.42c34d20.png",N="/assets/ng4_20.3538b419.png";const V={},B=s("h1",{id:"\u670D\u52A1\u5668\u901A\u8BAF",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u670D\u52A1\u5668\u901A\u8BAF","aria-hidden":"true"},"#"),t(" \u670D\u52A1\u5668\u901A\u8BAF")],-1),J=s("p",null,"[2018-2-3]",-1),L=s("p",null,"\u6155\u8BFE\u7F51 \u89C6\u9891\u6559\u7A0B--Angular 4.0\u4ECE\u5165\u95E8\u5230\u5B9E\u6218 \u6253\u9020\u5728\u7EBF\u7ADE\u62CD\u7F51\u7AD9",-1),A=t("\u53C2\u8003github\u4E0A\u5DF2\u5B8C\u6210\u9879\u76EE\uFF1A"),C={href:"https://github.com/hxhaawt/angular-mkw-project",target:"_blank",rel:"noopener noreferrer"},F=t("https://github.com/hxhaawt/angular-mkw-project"),W=t(" 1\u3001\u521B\u5EFAWeb\u670D\u52A1\u5668 2\u3001Http\u901A\u8BAF 3\u3001Websocket\u901A\u8BAF "),D=s("img",{src:l,alt:"img"},null,-1),H=t(" 1\u3001\u65B0\u5EFA\u6587\u4EF6\u5939auction-server 2\u3001\u7528npm\u521D\u59CB\u5316\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF1A npm init -y // -y\u4F1A\u81EA\u52A8\u5F15\u5165\u914D\u7F6E\u6587\u4EF6 3\u3001\u6211\u4EEC\u7528TypeScript\u8BED\u8A00\u6765\u5F00\u53D1\u6211\u4EEC\u7684\u670D\u52A1\u5668\uFF0C\u9996\u5148\u5C31\u8981\u5F15\u5165node\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6 npm i @types/node --save \u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u7684\u4F5C\u7528\uFF1A\u662F\u8BA9\u5F00\u53D1\u8005\u5728Typescript\u4E2D\u4F7F\u7528\u73B0\u5728\u5DF2\u6709\u7684JavaScript\u5199\u6210\u7684\u5E93 4\u3001node\u672C\u8EAB\u662F\u4E0D\u8BA4typescript\u7684\uFF0C\u6240\u4EE5\u8981\u628ATypescript\u53D8\u5F02\u6210JavaScript \u65B0\u5EFA\u4E00\u4E2A\u7F16\u8BD1\u6587\u4EF6( tsconfig.json )\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u662F\u5982\u4F55\u5C06Typescript\u7F16\u8BD1\u6210JavaScript \u7684"),q=s("p",null,[s("img",{src:g,alt:"img"}),t(" 5\u3001\u914D\u7F6Ewebstorm\u7684IDE\uFF0C\u5C31\u662F\u544A\u8BC9\u7F16\u8F91\u5668\u6211\u4EEC\u8981\u7528\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u6765\u7F16\u8BD1typescript")],-1),z=s("img",{src:p,alt:"img"},null,-1),G=t(" \u5230\u6B64\uFF0C\u5F00\u53D1\u73AF\u5883\u5C31\u914D\u7F6E\u597D\u4E86\u3002 6\u3001\u4E0B\u9762\u5C31\u6765\u5199\u670D\u52A1\u5668\u7684\u6587\u4EF6\uFF0C\u65B0\u5EFAhello_server.ts "),K=s("img",{src:m,alt:"img"},null,-1),M=t(" \u8BBF\u95EE\u7F51\u5740\uFF1A"),O={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},P=t("http://localhost:8000"),Q=c(' 7\u3001\u5B89\u88C5express\uFF0C\u53CA\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\uFF0C\u4EE5\u4FBF\u7528typescript\u6765\u5F00\u53D1 npm install express --save npm install @types/express --save 8\u3001\u65B0\u5EFAts\u6587\u4EF6\u2014\u2014auction_server.ts <img src="'+d+'" alt="img"> 9\u3001\u4FEE\u6539\u4EE3\u7801node\u670D\u52A1\u5668\u5FC5\u987B\u91CD\u542F\u624D\u80FD\u751F\u6548\uFF0C\u6545\u9700\u5B89\u88C5\u5DE5\u5177nodemon\uFF0C\u76D1\u63A7\u6E90\u4EE3\u7801\uFF0C\u5F53\u6E90\u4EE3\u7801 \u6539\u53D8\u65F6\u81EA\u52A8\u91CD\u542F\u670D\u52A1 npm install -g nodemon \u88C5\u597D\u4EE5\u540E\u5C31\u53EF\u4EE5\u7528\uFF1Anodemon build/auction_server.js \u6765\u542F\u52A8\u670D\u52A1\u5668 <img src="'+h+'" alt="img"> 11\u3001\u30108-3\u3011 <img src="'+u+'" alt="img"> 12\u3001\u30108-4\u3011 <img src="'+v+'" alt="img"> eg\uFF1A\u8BE5\u9879\u76EE\u4E0D\u9700\u8981\u4E00\u4E0B\u64CD\u4F5C\uFF1A \u7C7B\u4F3Cexpress\uFF0C\u5B89\u88C5ws\u4F9D\u8D56\u5E93\u53CA\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\uFF0C npm install ws --save npm install @types/ws --save-dev 13\u3001\u6539\u9020auction\uFF1A \u5148\u6539\u9020shared/product.service.ts \u5C06\u5B9A\u4E49\u7684\u4EA7\u54C1\u62FF\u5230\u670D\u52A1\u5668\u4E0A <img src="'+b+'" alt="img"><img src="'+f+'" alt="img"><img src="'+x+'" alt="img"> \u5F02\u6B65\u8BA2\u9605\uFF1A <img src="'+y+'" alt="img"><img src="'+k+'" alt="img"> 10\u3001\u6DFB\u52A0async\u5F02\u6B65\u52A0\u8F7D\u4E4B\u540E\uFF0C\u8981\u6539\u9020html\u7684\u6587\u4EF6\uFF0C\u4E0D\u7136\u4F1A\u62A5undefined',16),R=s("img",{src:w,alt:"img"},null,-1),U=t(" \u6CE8\u610F\uFF1A\u6539\u9020\u5B8C\u4E4B\u540E\uFF0C\u8981\u6539\u53D8\u670D\u52A1\u6307\u5411\u5730\u5740\u4E3A"),X={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},Y=t("http://localhost:8000"),Z=t(" \u65B0\u5EFA\u6587\u4EF6proxy.config.json\uFF0C\u5E76\u6539\u53D8\u670D\u52A1\u8BF7\u6C42\u5730\u5740"),$=s("img",{src:j,alt:"img"},null,-1),ss=s("img",{src:S,alt:"img"},null,-1),ts=t(" \u4E4B\u540E\u8981\u91CD\u542F\u670D\u52A1\u5668\u3002 \u6700\u6700\u6700\u6700\u91CD\u8981\u7684\u662F\uFF1AAngular 2 CLI \u8981\u7528npm start \u4EE3\u66FF ng serve \u6765\u542F\u52A8\u670D\u52A1 \u5668\uFF0C\u4E0D\u7136\u4F1A\u62A5\u9519\uFF01\uFF01\uFF01\uFF01\uFF01 \u8BF7\u53C2\u8003\uFF1A"),es={href:"https://github.com/angular/angularcli/blob/master/docs/documentation/stories/proxy.md",target:"_blank",rel:"noopener noreferrer"},ns=t("https://github.com/angular/angularcli/blob/master/docs/documentation/stories/proxy.md"),os=t(" \u9047\u5230\u7684\u5751\uFF1A \u8FD9\u91CC\u8981\u6BD9\u6389 "),rs=s("img",{src:T,alt:"img"},null,-1),as=s("p",null,[t("angular5 \u53D6\u6D88\u4E86map\uFF0C\u8FD9\u91CC\u8981\u53BB\u6389\uFF0C\u7136\u540E\u5728\u63A5\u6536\u7684\u5730\u65B9\u518D\u8F6C\u6362 "),s("img",{src:E,alt:"img"}),s("img",{src:I,alt:"img"}),s("img",{src:N,alt:"img"})],-1);function _s(is,cs){const e=r("ExternalLinkIcon");return a(),_(i,null,[B,J,L,s("ul",null,[s("li",null,[A,s("a",C,[F,n(e)]),W,D,H])]),q,s("p",null,[z,G,K,M,s("a",O,[P,n(e)]),Q]),s("p",null,[R,U,s("a",X,[Y,n(e)]),Z]),s("p",null,[$,ss,ts,s("a",es,[ns,n(e)]),os,rs]),as],64)}var gs=o(V,[["render",_s],["__file","ng4_\u670D\u52A1\u5668\u901A\u8BAF.html.vue"]]);export{gs as default};
