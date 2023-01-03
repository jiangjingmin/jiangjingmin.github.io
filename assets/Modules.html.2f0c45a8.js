import{_ as n,e as s}from"./app.77cde27d.js";const e={},a=s(`<p><strong>\u8BF4\u8BF4\u4F60\u5BF9AMD\u548CCommonjs\u7684\u7406\u89E3</strong></p><ul><li>CommonJS\u662F\u670D\u52A1\u5668\u7AEF\u6A21\u5757\u7684\u89C4\u8303\uFF0CNode.js\u91C7\u7528\u4E86\u8FD9\u4E2A\u89C4\u8303\u3002CommonJS\u89C4\u8303\u52A0\u8F7D\u6A21\u5757\u662F\u540C\u6B65\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709\u52A0\u8F7D\u5B8C\u6210\uFF0C\u624D\u80FD\u6267\u884C\u540E\u9762\u7684\u64CD\u4F5C\u3002AMD\u89C4\u8303\u5219\u662F\u975E\u540C\u6B65\u52A0\u8F7D\u6A21\u5757\uFF0C\u5141\u8BB8\u6307\u5B9A\u56DE\u8C03\u51FD\u6570</li><li>AMD\u63A8\u8350\u7684\u98CE\u683C\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u505A\u4E3A\u6A21\u5757\u5BF9\u8C61\uFF0CCommonJS\u7684\u98CE\u683C\u901A\u8FC7\u5BF9module.exports\u6216exports\u7684\u5C5E\u6027\u8D4B\u503C\u6765\u8FBE\u5230\u66B4\u9732\u6A21\u5757\u5BF9\u8C61\u7684\u76EE\u7684</li></ul><p><strong>\u6A21\u5757\u5316\u5F00\u53D1\u600E\u4E48\u505A\uFF1F</strong></p><ul><li>\u7ACB\u5373\u6267\u884C\u51FD\u6570,\u4E0D\u66B4\u9732\u79C1\u6709\u6210\u5458</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var module1 = (function(){
\u3000\u3000\u3000\u3000var _count = 0;
\u3000\u3000\u3000\u3000var m1 = function(){
\u3000\u3000\u3000\u3000\u3000\u3000//...
\u3000\u3000\u3000\u3000};
\u3000\u3000\u3000\u3000var m2 = function(){
\u3000\u3000\u3000\u3000\u3000\u3000//...
\u3000\u3000\u3000\u3000};
\u3000\u3000\u3000\u3000return {
\u3000\u3000\u3000\u3000\u3000\u3000m1 : m1,
\u3000\u3000\u3000\u3000\u3000\u3000m2 : m2
\u3000\u3000\u3000\u3000};
\u3000\u3000})();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>AMD\uFF08Modules/Asynchronous-Definition\uFF09\u3001CMD\uFF08Common Module Definition\uFF09\u89C4\u8303\u533A\u522B\uFF1F</strong></p><ul><li>Asynchronous Module Definition\uFF0C\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49\uFF0C\u6240\u6709\u7684\u6A21\u5757\u5C06\u88AB\u5F02\u6B65\u52A0\u8F7D\uFF0C\u6A21\u5757\u52A0\u8F7D\u4E0D\u5F71\u54CD\u540E\u9762\u8BED\u53E5\u8FD0\u884C\u3002\u6240\u6709\u4F9D\u8D56\u67D0\u4E9B\u6A21\u5757\u7684\u8BED\u53E5\u5747\u653E\u7F6E\u5728\u56DE\u8C03\u51FD\u6570\u4E2D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// CMD
define(function(require, exports, module) {
    var a = require(&#39;./a&#39;)
    a.doSomething()
    // \u6B64\u5904\u7565\u53BB 100 \u884C
    var b = require(&#39;./b&#39;) // \u4F9D\u8D56\u53EF\u4EE5\u5C31\u8FD1\u4E66\u5199
    b.doSomething()
    // ...
})

// AMD \u9ED8\u8BA4\u63A8\u8350
define([&#39;./a&#39;, &#39;./b&#39;], function(a, b) { // \u4F9D\u8D56\u5FC5\u987B\u4E00\u5F00\u59CB\u5C31\u5199\u597D
    a.doSomething()
    // \u6B64\u5904\u7565\u53BB 100 \u884C
    b.doSomething()
    // ...
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>\u5BF9\u524D\u7AEF\u6A21\u5757\u5316\u7684\u8BA4\u8BC6</strong></p><ul><li>AMD \u662F RequireJS \u5728\u63A8\u5E7F\u8FC7\u7A0B\u4E2D\u5BF9\u6A21\u5757\u5B9A\u4E49\u7684\u89C4\u8303\u5316\u4EA7\u51FA</li><li>CMD \u662F SeaJS \u5728\u63A8\u5E7F\u8FC7\u7A0B\u4E2D\u5BF9\u6A21\u5757\u5B9A\u4E49\u7684\u89C4\u8303\u5316\u4EA7\u51FA</li><li>AMD \u662F\u63D0\u524D\u6267\u884C\uFF0CCMD \u662F\u5EF6\u8FDF\u6267\u884C</li><li>AMD\u63A8\u8350\u7684\u98CE\u683C\u901A\u8FC7\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u505A\u4E3A\u6A21\u5757\u5BF9\u8C61\uFF0CCommonJS\u7684\u98CE\u683C\u901A\u8FC7\u5BF9module.exports\u6216exports\u7684\u5C5E\u6027\u8D4B\u503C\u6765\u8FBE\u5230\u66B4\u9732\u6A21\u5757\u5BF9\u8C61\u7684\u76EE\u7684</li></ul>`,10);function r(l,i){return a}var u=n(e,[["render",r],["__file","Modules.html.vue"]]);export{u as default};
