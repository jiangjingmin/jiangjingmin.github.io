import{_ as a,c as e}from"./app.b778d435.js";const i={},r=e('<h1 id="\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u4E86\u89E3\u7684js\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u5B98-\u8BF4\u8BF4\u4F60\u4E86\u89E3\u7684js\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u4E86\u89E3\u7684js\u6570\u636E\u7ED3\u6784\uFF1F</h1><h2 id="\u4EC0\u4E48\u662F\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6570\u636E\u7ED3\u6784\uFF1F</h2><p>\u6570\u636E\u7ED3\u6784\u662F\u8BA1\u7B97\u673A\u5B58\u50A8\u3001\u7EC4\u7EC7\u6570\u636E\u7684\u65B9\u5F0F\u3002 \u6570\u636E\u7ED3\u6784\u610F\u5473\u7740\u63A5\u53E3\u6216\u5C01\u88C5\uFF1A\u4E00\u4E2A\u6570\u636E\u7ED3\u6784\u53EF\u88AB\u89C6\u4E3A\u4E24\u4E2A\u51FD\u6570\u4E4B\u95F4\u7684\u63A5\u53E3\uFF0C\u6216\u8005\u662F\u7531\u6570\u636E\u7C7B\u578B\u8054\u5408\u7EC4\u6210\u7684\u5B58\u50A8\u5185\u5BB9\u7684\u8BBF\u95EE\u65B9\u6CD5\u5C01\u88C5\u3002</p><p>\u6211\u4EEC\u6BCF\u5929\u7684\u7F16\u7801\u4E2D\u90FD\u4F1A\u7528\u5230\u6570\u636E\u7ED3\u6784 \u6570\u7EC4\u662F\u6700\u7B80\u5355\u7684\u5185\u5B58\u6570\u636E\u7ED3\u6784 \u4E0B\u9762\u662F\u5E38\u89C1\u7684\u6570\u636E\u7ED3\u6784\uFF1A</p><ol><li>\u6570\u7EC4\uFF08Array\uFF09</li><li>\u6808\uFF08Stack\uFF09</li><li>\u961F\u5217\uFF08Queue\uFF09</li><li>\u94FE\u8868\uFF08Linked List\uFF09</li><li>\u5B57\u5178</li><li>\u6563\u5217\u8868\uFF08Hash table\uFF09</li><li>\u6811\uFF08Tree\uFF09</li><li>\u56FE\uFF08Graph\uFF09</li><li>\u5806\uFF08Heap\uFF09</li></ol><h2 id="\u6570\u7EC4-array" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-array" aria-hidden="true">#</a> \u6570\u7EC4\uFF08Array\uFF09</h2><p>\u6570\u7EC4\u662F\u6700\u6700\u57FA\u672C\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5F88\u591A\u8BED\u8A00\u90FD\u5185\u7F6E\u652F\u6301\u6570\u7EC4\u3002 \u6570\u7EC4\u662F\u4F7F\u7528\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\u4FDD\u5B58\u6570\u636E\uFF0C\u4FDD\u5B58\u7684\u6570\u636E\u7684\u4E2A\u6570\u5728\u5206\u914D\u5185\u5B58\u7684\u65F6\u5019\u5C31\u662F\u786E\u5B9A\u7684\u3002</p><p>\u5728\u65E5\u5E38\u751F\u6D3B\u4E2D\uFF0C\u4EBA\u4EEC\u7ECF\u5E38\u4F7F\u7528\u5217\u8868\uFF1A\u5F85\u529E\u4E8B\u9879\u5217\u8868\u3001\u8D2D\u7269\u6E05\u5355\u7B49\u3002</p><p>\u800C\u8BA1\u7B97\u673A\u7A0B\u5E8F\u4E5F\u5728\u4F7F\u7528\u5217\u8868\uFF0C\u5728\u4E0B\u9762\u7684\u6761\u4EF6\u4E0B\uFF0C\u9009\u62E9\u5217\u8868\u4F5C\u4E3A\u6570\u636E\u7ED3\u6784\u5C31\u663E\u5F97\u5C24\u4E3A\u6709\u7528\uFF1A \u6570\u636E\u7ED3\u6784\u8F83\u4E3A\u7B80\u5355 \u4E0D\u9700\u8981\u5728\u4E00\u4E2A\u957F\u5E8F\u5217\u4E2D\u67E5\u627E\u5143\u7D20\uFF0C\u6216\u8005\u5BF9\u5176\u8FDB\u884C\u6392\u5E8F \u53CD\u4E4B\uFF0C\u5982\u679C\u6570\u636E\u7ED3\u6784\u975E\u5E38\u590D\u6742\uFF0C\u5217\u8868\u7684\u4F5C\u7528\u5C31\u6CA1\u6709\u90A3\u4E48\u5927\u4E86\u3002</p><h2 id="\u6808-stack" tabindex="-1"><a class="header-anchor" href="#\u6808-stack" aria-hidden="true">#</a> \u6808\uFF08Stack\uFF09</h2><p>\u6808\u662F\u4E00\u79CD\u9075\u5FAA\u540E\u8FDB\u5148\u51FA\uFF08LIFO\uFF09\u539F\u5219\u7684\u6709\u5E8F\u96C6\u5408 \u5728\u6808\u91CC\uFF0C\u65B0\u5143\u7D20\u90FD\u63A5\u8FD1\u6808\u9876\uFF0C\u65E7\u5143\u7D20\u90FD\u63A5\u8FD1\u6808\u5E95\u3002 \u6BCF\u6B21\u52A0\u5165\u65B0\u7684\u5143\u7D20\u548C\u62FF\u8D70\u5143\u7D20\u90FD\u5728\u9876\u90E8\u64CD\u4F5C <img src="https://upload-images.jianshu.io/upload_images/13253432-ddcb884374470d2c?imageMogr2/auto-orient/strip|imageView2/2/format/webp" alt=""></p><h2 id="\u961F\u5217-queue" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217-queue" aria-hidden="true">#</a> \u961F\u5217\uFF08Queue\uFF09</h2><p>\u961F\u5217\u662F\u9075\u5FAA\u5148\u8FDB\u5148\u51FA\uFF08FIFO\uFF0C\u4E5F\u79F0\u4E3A\u5148\u6765\u5148\u670D\u52A1\uFF09\u539F\u5219\u7684\u4E00\u7EC4\u6709\u5E8F\u7684\u9879 \u961F\u5217\u5728\u5C3E\u90E8\u6DFB\u52A0\u65B0\u5143\u7D20\uFF0C\u5E76\u4ECE\u9876\u90E8\u79FB\u9664\u5143\u7D20 \u6700\u65B0\u6DFB\u52A0\u7684\u5143\u7D20\u5FC5\u987B\u6392\u5728\u961F\u5217\u7684\u672B\u5C3E <img src="https://upload-images.jianshu.io/upload_images/13253432-55ad7c7db40d3796?imageMogr2/auto-orient/strip|imageView2/2/format/webp" alt=""></p><h2 id="\u94FE\u8868-linked-list" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868-linked-list" aria-hidden="true">#</a> \u94FE\u8868\uFF08Linked List\uFF09</h2><p>\u94FE\u8868\u4E5F\u662F\u4E00\u79CD\u5217\u8868\uFF0C\u5DF2\u7ECF\u8BBE\u8BA1\u4E86\u6570\u7EC4\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u9700\u8981\u94FE\u8868\u5462\uFF1F JavaScript\u4E2D\u6570\u7EC4\u7684\u4E3B\u8981\u95EE\u9898\u65F6\uFF0C\u5B83\u4EEC\u88AB\u5B9E\u73B0\u6210\u4E86\u5BF9\u8C61\uFF0C \u4E0E\u5176\u4ED6\u8BED\u8A00\uFF08\u6BD4\u5982C++\u548CJava\uFF09\u7684\u6570\u7EC4\u76F8\u5BF9\uFF0C\u6548\u7387\u5F88\u4F4E\u3002 \u5982\u679C\u4F60\u53D1\u73B0\u6570\u7EC4\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u5F88\u6162\uFF0C\u5C31\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u94FE\u8868\u6765\u4EE3\u66FF\u5B83\u3002</p><p>\u4F7F\u7528\u6761\u4EF6\uFF1A \u94FE\u8868\u51E0\u4E4E\u53EF\u4EE5\u7528\u5728\u4EFB\u4F55\u53EF\u4EE5\u4F7F\u7528\u4E00\u7EF4\u6570\u7EC4\u7684\u60C5\u51B5\u4E2D\u3002 \u5982\u679C\u9700\u8981\u968F\u673A\u8BBF\u95EE\uFF0C\u6570\u7EC4\u4ECD\u7136\u662F\u66F4\u597D\u7684\u9009\u62E9\u3002 <img src="https://raw.githubusercontent.com/zoro-web/blog/master/img/lian.jpg" alt=""></p><h2 id="\u5B57\u5178" tabindex="-1"><a class="header-anchor" href="#\u5B57\u5178" aria-hidden="true">#</a> \u5B57\u5178</h2><p>\u5B57\u5178\u662F\u4E00\u79CD\u4EE5\u952E-\u503C\u5BF9\u5B58\u50A8\u6570\u636E\u7684\u6570\u636E\u7ED3\u6784\uFF0Cjs\u4E2D\u7684Object\u7C7B\u5C31\u662F\u4EE5\u5B57\u5178\u7684\u5F62\u5F0F\u8BBE\u8BA1\u7684\u3002JavaScript\u53EF\u4EE5\u901A\u8FC7\u5B9E\u73B0\u5B57\u5178\u7C7B\uFF0C\u8BA9\u8FD9\u79CD\u5B57\u5178\u7C7B\u578B\u7684\u5BF9\u8C61\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u7B80\u5355\uFF0C\u5B57\u5178\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u8C61\u62E5\u6709\u7684\u5E38\u89C1\u529F\u80FD\uFF0C\u5E76\u76F8\u5E94\u62D3\u5C55\u81EA\u5DF1\u60F3\u8981\u7684\u529F\u80FD\uFF0C\u800C\u5BF9\u8C61\u5728JavaScript\u7F16\u5199\u4E2D\u968F\u5904\u53EF\u89C1\uFF0C\u6240\u4EE5\u5B57\u5178\u7684\u4F5C\u7528\u4E5F\u5F02\u5E38\u660E\u663E\u4E86\u3002</p><h2 id="\u6563\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6563\u5217\u8868" aria-hidden="true">#</a> \u6563\u5217\u8868</h2><p>\u4E5F\u79F0\u4E3A\u54C8\u5E0C\u8868\uFF0C\u7279\u70B9\u662F\u5728\u6563\u5217\u8868\u4E0A\u63D2\u5165\u3001\u5220\u9664\u548C\u53D6\u7528\u6570\u636E\u90FD\u975E\u5E38\u5FEB\u3002 \u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u5462\uFF1F \u7528\u6570\u7EC4\u6216\u94FE\u8868\u5B58\u50A8\u6570\u636E\uFF0C\u5982\u679C\u60F3\u8981\u627E\u5230\u5176\u4E2D\u4E00\u4E2A\u6570\u636E\uFF0C\u9700\u8981\u4ECE\u5934\u8FDB\u884C\u904D\u5386\uFF0C\u56E0\u4E3A\u4E0D\u77E5\u9053\u8FD9\u4E2A\u6570\u636E\u5B58\u50A8\u5230\u4E86\u6570\u7EC4\u7684\u54EA\u4E2A\u4F4D\u7F6E\u3002</p><p>\u6563\u5217\u8868\u5728JavaScript\u4E2D\u53EF\u4EE5\u57FA\u7840\u6570\u7EC4\u53BB\u8FDB\u884C\u8BBE\u8BA1\u3002 \u6570\u7EC4\u7684\u957F\u5EA6\u662F\u9884\u5148\u8BBE\u5B9A\u7684\uFF0C\u6240\u6709\u5143\u7D20\u6839\u636E\u548C\u8BE5\u5143\u7D20\u5BF9\u5E94\u7684\u952E\uFF0C\u4FDD\u5B58\u5728\u6570\u7EC4\u7684\u7279\u5B9A\u4F4D\u7F6E\uFF0C\u8FD9\u91CC\u7684\u952E\u548C\u5BF9\u8C61\u7684\u952E\u662F\u7C7B\u578B\u7684\u6982\u5FF5\u3002 \u4F7F\u7528\u6563\u5217\u8868\u5B58\u50A8\u6570\u7EC4\u65F6\uFF0C\u901A\u8FC7\u4E00\u4E2A\u6563\u5217\u51FD\u6570\u5C06\u952E\u6620\u5C04\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u8FD9\u4E2A\u6570\u5B57\u7684\u8303\u56F4\u662F0\u5230\u6563\u5217\u8868\u7684\u957F\u5EA6\u3002</p><p>\u5373\u4F7F\u4F7F\u7528\u4E00\u4E2A\u9AD8\u6548\u7684\u6563\u5217\u51FD\u6570\uFF0C\u4F9D\u7136\u5B58\u5728\u5C06\u4E24\u4E2A\u952E\u6620\u5C04\u4E3A\u540C\u4E00\u4E2A\u503C\u5F97\u53EF\u80FD\uFF0C\u8FD9\u79CD\u73B0\u8C61\u53EB\u505A\u78B0\u649E\u3002\u5E38\u89C1\u78B0\u649E\u7684\u5904\u7406\u65B9\u6CD5\u6709\uFF1A\u5F00\u94FE\u6CD5\u548C\u7EBF\u6027\u63A2\u6D4B\u6CD5\uFF08\u5177\u4F53\u6982\u5FF5\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u7F51\u4E0A\u81EA\u4FE1\u4E86\u89E3\uFF09 \u4F7F\u7528\u6761\u4EF6\uFF1A \u53EF\u4EE5\u7528\u4E8E\u6570\u636E\u7684\u63D2\u5165\u3001\u5220\u9664\u548C\u53D6\u7528\uFF0C\u4E0D\u9002\u7528\u4E8E\u67E5\u627E\u6570\u636E <img src="https://raw.githubusercontent.com/zoro-web/blog/master/img/\u5FAE\u4FE1\u56FE\u7247_20170820211406.png" alt=""></p>',22);function t(h,d){return r}var c=a(i,[["render",t],["__file","js_data_structure.html.vue"]]);export{c as default};
