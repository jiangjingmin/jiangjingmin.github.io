import{_ as e,e as n}from"./app.f6b3af9d.js";const a={},s=n(`<h2 id="\u4EC0\u4E48\u662Fmvvm" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fmvvm" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fmvvm\uFF1F</h2><blockquote><p>MVVM\u662FModel-View-ViewModel\u7684\u7F29\u5199\u3002mvvm\u662F\u4E00\u79CD\u8BBE\u8BA1\u601D\u60F3\u3002Model \u5C42\u4EE3\u8868\u6570\u636E\u6A21\u578B\uFF0C\u4E5F\u53EF\u4EE5\u5728Model\u4E2D\u5B9A\u4E49\u6570\u636E\u4FEE\u6539\u548C\u64CD\u4F5C\u7684\u4E1A\u52A1\u903B\u8F91\uFF1BView \u4EE3\u8868UI \u7EC4\u4EF6\uFF0C\u5B83\u8D1F\u8D23\u5C06\u6570\u636E\u6A21\u578B\u8F6C\u5316\u6210UI \u5C55\u73B0\u51FA\u6765\uFF0CViewModel \u662F\u4E00\u4E2A\u540C\u6B65View \u548C Model\u7684\u5BF9\u8C61</p></blockquote><ul><li>\u5728MVVM\u67B6\u6784\u4E0B\uFF0CView \u548C Model \u4E4B\u95F4\u5E76\u6CA1\u6709\u76F4\u63A5\u7684\u8054\u7CFB\uFF0C\u800C\u662F\u901A\u8FC7ViewModel\u8FDB\u884C\u4EA4\u4E92\uFF0CModel \u548C ViewModel \u4E4B\u95F4\u7684\u4EA4\u4E92\u662F\u53CC\u5411\u7684\uFF0C \u56E0\u6B64View \u6570\u636E\u7684\u53D8\u5316\u4F1A\u540C\u6B65\u5230Model\u4E2D\uFF0C\u800CModel \u6570\u636E\u7684\u53D8\u5316\u4E5F\u4F1A\u7ACB\u5373\u53CD\u5E94\u5230View \u4E0A\u3002</li><li>ViewModel \u901A\u8FC7\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\u628A View \u5C42\u548C Model \u5C42\u8FDE\u63A5\u4E86\u8D77\u6765\uFF0C\u800CView \u548C Model \u4E4B\u95F4\u7684\u540C\u6B65\u5DE5\u4F5C\u5B8C\u5168\u662F\u81EA\u52A8\u7684\uFF0C\u65E0\u9700\u4EBA\u4E3A\u5E72\u6D89\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u53EA\u9700\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u64CD\u4F5CDOM, \u4E0D\u9700\u8981\u5173\u6CE8\u6570\u636E\u72B6\u6001\u7684\u540C\u6B65\u95EE\u9898\uFF0C\u590D\u6742\u7684\u6570\u636E\u72B6\u6001\u7EF4\u62A4\u5B8C\u5168\u7531 MVVM \u6765\u7EDF\u4E00\u7BA1\u7406</li></ul><h2 id="vue\u7684\u4F18\u70B9\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u4F18\u70B9\u662F\u4EC0\u4E48" aria-hidden="true">#</a> vue\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F</h2><ul><li>\u4F4E\u8026\u5408\u3002\u89C6\u56FE\uFF08View\uFF09\u53EF\u4EE5\u72EC\u7ACB\u4E8EModel\u53D8\u5316\u548C\u4FEE\u6539\uFF0C\u4E00\u4E2AViewModel\u53EF\u4EE5\u7ED1\u5B9A\u5230\u4E0D\u540C\u7684&quot;View&quot;\u4E0A\uFF0C\u5F53View\u53D8\u5316\u7684\u65F6\u5019Model\u53EF\u4EE5\u4E0D\u53D8\uFF0C\u5F53Model\u53D8\u5316\u7684\u65F6\u5019View\u4E5F\u53EF\u4EE5\u4E0D\u53D8</li><li>\u53EF\u91CD\u7528\u6027\u3002\u4F60\u53EF\u4EE5\u628A\u4E00\u4E9B\u89C6\u56FE\u903B\u8F91\u653E\u5728\u4E00\u4E2AViewModel\u91CC\u9762\uFF0C\u8BA9\u5F88\u591Aview\u91CD\u7528\u8FD9\u6BB5\u89C6\u56FE\u903B\u8F91</li><li>\u53EF\u6D4B\u8BD5\u3002\u754C\u9762\u7D20\u6765\u662F\u6BD4\u8F83\u96BE\u4E8E\u6D4B\u8BD5\u7684\uFF0C\u800C\u73B0\u5728\u6D4B\u8BD5\u53EF\u4EE5\u9488\u5BF9ViewModel\u6765\u5199</li></ul><h2 id="\u8BF7\u8BE6\u7EC6\u8BF4\u4E0B\u4F60\u5BF9vue\u751F\u547D\u5468\u671F\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u8BE6\u7EC6\u8BF4\u4E0B\u4F60\u5BF9vue\u751F\u547D\u5468\u671F\u7684\u7406\u89E3" aria-hidden="true">#</a> \u8BF7\u8BE6\u7EC6\u8BF4\u4E0B\u4F60\u5BF9vue\u751F\u547D\u5468\u671F\u7684\u7406\u89E3</h2><blockquote><p>\u7B54\uFF1A\u603B\u5171\u5206\u4E3A8\u4E2A\u9636\u6BB5\u521B\u5EFA\u524D/\u540E\uFF0C\u8F7D\u5165\u524D/\u540E\uFF0C\u66F4\u65B0\u524D/\u540E\uFF0C\u9500\u6BC1\u524D/\u540E</p></blockquote><ul><li>\u521B\u5EFA\u524D/\u540E\uFF1A \u5728beforeCreate\u9636\u6BB5\uFF0Cvue\u5B9E\u4F8B\u7684\u6302\u8F7D\u5143\u7D20el\u548C\u6570\u636E\u5BF9\u8C61data\u90FD\u4E3Aundefined\uFF0C\u8FD8\u672A\u521D\u59CB\u5316\u3002\u5728created\u9636\u6BB5\uFF0Cvue\u5B9E\u4F8B\u7684\u6570\u636E\u5BF9\u8C61data\u6709\u4E86\uFF0Cel\u8FD8\u6CA1\u6709</li><li>\u8F7D\u5165\u524D/\u540E\uFF1A\u5728beforeMount\u9636\u6BB5\uFF0Cvue\u5B9E\u4F8B\u7684$el\u548Cdata\u90FD\u521D\u59CB\u5316\u4E86\uFF0C\u4F46\u8FD8\u662F\u6302\u8F7D\u4E4B\u524D\u4E3A\u865A\u62DF\u7684dom\u8282\u70B9\uFF0Cdata.message\u8FD8\u672A\u66FF\u6362\u3002\u5728mounted\u9636\u6BB5\uFF0Cvue\u5B9E\u4F8B\u6302\u8F7D\u5B8C\u6210\uFF0Cdata.message\u6210\u529F\u6E32\u67D3\u3002</li><li>\u66F4\u65B0\u524D/\u540E\uFF1A\u5F53data\u53D8\u5316\u65F6\uFF0C\u4F1A\u89E6\u53D1beforeUpdate\u548Cupdated\u65B9\u6CD5</li><li>\u9500\u6BC1\u524D/\u540E\uFF1A\u5728\u6267\u884Cdestroy\u65B9\u6CD5\u540E\uFF0C\u5BF9data\u7684\u6539\u53D8\u4E0D\u4F1A\u518D\u89E6\u53D1\u5468\u671F\u51FD\u6570\uFF0C\u8BF4\u660E\u6B64\u65F6vue\u5B9E\u4F8B\u5DF2\u7ECF\u89E3\u9664\u4E86\u4E8B\u4EF6\u76D1\u542C\u4EE5\u53CA\u548Cdom\u7684\u7ED1\u5B9A\uFF0C\u4F46\u662Fdom\u7ED3\u6784\u4F9D\u7136\u5B58\u5728</li></ul><h2 id="\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u503C" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u503C\uFF1F</h2><p><strong>\u7236\u7EC4\u4EF6\u4E0E\u5B50\u7EC4\u4EF6\u4F20\u503C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u7236\u7EC4\u4EF6\u901A\u8FC7\u6807\u7B7E\u4E0A\u9762\u5B9A\u4E49\u4F20\u503C
&lt;template&gt;
    &lt;Main :obj=&quot;data&quot;&gt;&lt;/Main&gt;
&lt;/template&gt;
&lt;script&gt;
    //\u5F15\u5165\u5B50\u7EC4\u4EF6
    import Main form &quot;./main&quot;
    
    exprot default{
        name:&quot;parent&quot;,
        data(){
            return {
                data:&quot;\u6211\u8981\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E&quot;
            }
        },
        //\u521D\u59CB\u5316\u7EC4\u4EF6
        components:{
            Main
        }
    }
&lt;/script&gt;


//\u5B50\u7EC4\u4EF6\u901A\u8FC7props\u65B9\u6CD5\u63A5\u53D7\u6570\u636E

&lt;template&gt;
    &lt;div&gt;{{data}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    exprot default{
        name:&quot;son&quot;,
        //\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u503C
        props:[&quot;data&quot;]
    }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p><strong>\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5B50\u7EC4\u4EF6\u901A\u8FC7$emit\u65B9\u6CD5\u4F20\u9012\u53C2\u6570
&lt;template&gt;
   &lt;div v-on:click=&quot;events&quot;&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    //\u5F15\u5165\u5B50\u7EC4\u4EF6
    import Main form &quot;./main&quot;
    
    exprot default{
        methods:{
            events:function(){
                
            }
        }
    }
&lt;/script&gt;


//

&lt;template&gt;
    &lt;div&gt;{{data}}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
    exprot default{
        name:&quot;son&quot;,
        //\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u503C
        props:[&quot;data&quot;]
    }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u8DEF\u7531\u4E4B\u95F4\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4E4B\u95F4\u8DF3\u8F6C" aria-hidden="true">#</a> \u8DEF\u7531\u4E4B\u95F4\u8DF3\u8F6C\uFF1F</h2><p><strong>\u58F0\u660E\u5F0F\uFF08\u6807\u7B7E\u8DF3\u8F6C\uFF09</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link :to=&quot;index&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u7F16\u7A0B\u5F0F\uFF08 js\u8DF3\u8F6C\uFF09</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>router.push(&#39;index&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vuex\u662F\u4EC0\u4E48-\u600E\u4E48\u4F7F\u7528-\u54EA\u79CD\u529F\u80FD\u573A\u666F\u4F7F\u7528\u5B83" tabindex="-1"><a class="header-anchor" href="#vuex\u662F\u4EC0\u4E48-\u600E\u4E48\u4F7F\u7528-\u54EA\u79CD\u529F\u80FD\u573A\u666F\u4F7F\u7528\u5B83" aria-hidden="true">#</a> vuex\u662F\u4EC0\u4E48\uFF1F\u600E\u4E48\u4F7F\u7528\uFF1F\u54EA\u79CD\u529F\u80FD\u573A\u666F\u4F7F\u7528\u5B83\uFF1F</h2><blockquote><p>vue\u6846\u67B6\u4E2D\u72B6\u6001\u7BA1\u7406\u3002\u5728main.js\u5F15\u5165store\uFF0C\u6CE8\u5165\u3002\u65B0\u5EFA\u4E86\u4E00\u4E2A\u76EE\u5F55<code>store</code>\uFF0C\u2026.. <code>export</code> \u3002\u573A\u666F\u6709\uFF1A\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u7EC4\u4EF6\u4E4B\u95F4\u7684\u72B6\u6001\u3002\u97F3\u4E50\u64AD\u653E\u3001\u767B\u5F55\u72B6\u6001\u3001\u52A0\u5165\u8D2D\u7269\u8F66</p></blockquote><h2 id="\u5B9E\u73B0-vue-ssr" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-vue-ssr" aria-hidden="true">#</a> \u5B9E\u73B0 Vue SSR</h2><p><img src="http://7xq6al.com1.z0.glb.clouddn.com/vue-ssr.jpg" alt="image"></p><p><strong>\u5176\u57FA\u672C\u5B9E\u73B0\u539F\u7406</strong></p><ul><li>app.js \u4F5C\u4E3A\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u516C\u7528\u5165\u53E3\uFF0C\u5BFC\u51FA Vue \u6839\u5B9E\u4F8B\uFF0C\u4F9B\u5BA2\u6237\u7AEF entry \u4E0E\u670D\u52A1\u7AEF entry \u4F7F\u7528\u3002\u5BA2\u6237\u7AEF entry \u4E3B\u8981\u4F5C\u7528\u6302\u8F7D\u5230 DOM \u4E0A\uFF0C\u670D\u52A1\u7AEF entry \u9664\u4E86\u521B\u5EFA\u548C\u8FD4\u56DE\u5B9E\u4F8B\uFF0C\u8FD8\u8FDB\u884C\u8DEF\u7531\u5339\u914D\u4E0E\u6570\u636E\u9884\u83B7\u53D6\u3002</li><li>webpack \u4E3A\u5BA2\u670D\u7AEF\u6253\u5305\u4E00\u4E2A Client Bundle \uFF0C\u4E3A\u670D\u52A1\u7AEF\u6253\u5305\u4E00\u4E2A Server Bundle \u3002</li><li>\u670D\u52A1\u5668\u63A5\u6536\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u6839\u636E url\uFF0C\u52A0\u8F7D\u76F8\u5E94\u7EC4\u4EF6\uFF0C\u83B7\u53D6\u548C\u89E3\u6790\u5F02\u6B65\u6570\u636E\uFF0C\u521B\u5EFA\u4E00\u4E2A\u8BFB\u53D6 Server Bundle \u7684 BundleRenderer\uFF0C\u7136\u540E\u751F\u6210 html \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5BA2\u6237\u7AEF\u6DF7\u5408\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u4ECE\u670D\u52A1\u7AEF\u4F20\u6765\u7684 DOM \u4E0E\u81EA\u5DF1\u7684\u751F\u6210\u7684 DOM \u8FDB\u884C\u5BF9\u6BD4\uFF0C\u628A\u4E0D\u76F8\u540C\u7684 DOM \u6FC0\u6D3B\uFF0C\u4F7F\u5176\u53EF\u4EE5\u80FD\u591F\u54CD\u5E94\u540E\u7EED\u53D8\u5316\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u5BA2\u6237\u7AEF\u6FC0\u6D3B \u3002\u4E3A\u786E\u4FDD\u6DF7\u5408\u6210\u529F\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u7AEF\u9700\u8981\u5171\u4EAB\u540C\u4E00\u5957\u6570\u636E\u3002\u5728\u670D\u52A1\u7AEF\uFF0C\u53EF\u4EE5\u5728\u6E32\u67D3\u4E4B\u524D\u83B7\u53D6\u6570\u636E\uFF0C\u586B\u5145\u5230 stroe \u91CC\uFF0C\u8FD9\u6837\uFF0C\u5728\u5BA2\u6237\u7AEF\u6302\u8F7D\u5230 DOM \u4E4B\u524D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECE store \u91CC\u53D6\u6570\u636E\u3002\u9996\u5C4F\u7684\u52A8\u6001\u6570\u636E\u901A\u8FC7 <code>window.__INITIAL_STATE__</code>\u53D1\u9001\u5230\u5BA2\u6237\u7AEF</li></ul><blockquote><p>Vue SSR \u7684\u5B9E\u73B0\uFF0C\u4E3B\u8981\u5C31\u662F\u628A Vue \u7684\u7EC4\u4EF6\u8F93\u51FA\u6210\u4E00\u4E2A\u5B8C\u6574 HTML, vue-server-renderer \u5C31\u662F\u5E72\u8FD9\u4E8B\u7684</p></blockquote><ul><li><code>Vue SSR</code>\u9700\u8981\u505A\u7684\u4E8B\u591A\u70B9\uFF08\u8F93\u51FA\u5B8C\u6574 HTML\uFF09\uFF0C\u9664\u4E86<code>complier -&gt; vnode</code>\uFF0C\u8FD8\u9700\u5982\u6570\u636E\u83B7\u53D6\u586B\u5145\u81F3 HTML\u3001\u5BA2\u6237\u7AEF\u6DF7\u5408\uFF08hydration\uFF09\u3001\u7F13\u5B58\u7B49\u7B49\u3002 \u76F8\u6BD4\u4E8E\u5176\u4ED6\u6A21\u677F\u5F15\u64CE\uFF08ejs, jade \u7B49\uFF09\uFF0C\u6700\u7EC8\u8981\u5B9E\u73B0\u7684\u76EE\u7684\u662F\u4E00\u6837\u7684\uFF0C\u6027\u80FD\u4E0A\u53EF\u80FD\u8981\u5DEE\u70B9</li></ul><h2 id="vue-\u7EC4\u4EF6-data-\u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6-data-\u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u51FD\u6570" aria-hidden="true">#</a> Vue \u7EC4\u4EF6 data \u4E3A\u4EC0\u4E48\u5FC5\u987B\u662F\u51FD\u6570</h2><ul><li>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u662F Vue \u7684\u5B9E\u4F8B\u3002</li><li>\u7EC4\u4EF6\u5171\u4EAB data \u5C5E\u6027\uFF0C\u5F53 data \u7684\u503C\u662F\u540C\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u503C\u65F6\uFF0C\u6539\u53D8\u5176\u4E2D\u4E00\u4E2A\u4F1A\u5F71\u54CD\u5176\u4ED6</li></ul><h2 id="vue-computed-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-computed-\u5B9E\u73B0" aria-hidden="true">#</a> Vue computed \u5B9E\u73B0</h2><ul><li>\u5EFA\u7ACB\u4E0E\u5176\u4ED6\u5C5E\u6027\uFF08\u5982\uFF1Adata\u3001 Store\uFF09\u7684\u8054\u7CFB\uFF1B</li><li>\u5C5E\u6027\u6539\u53D8\u540E\uFF0C\u901A\u77E5\u8BA1\u7B97\u5C5E\u6027\u91CD\u65B0\u8BA1\u7B97</li></ul><blockquote><p>\u5B9E\u73B0\u65F6\uFF0C\u4E3B\u8981\u5982\u4E0B</p></blockquote><ul><li>\u521D\u59CB\u5316 data\uFF0C \u4F7F\u7528 <code>Object.defineProperty</code> \u628A\u8FD9\u4E9B\u5C5E\u6027\u5168\u90E8\u8F6C\u4E3A <code>getter/setter</code>\u3002</li><li>\u521D\u59CB\u5316 <code>computed</code>, \u904D\u5386 <code>computed</code> \u91CC\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0C\u6BCF\u4E2A computed \u5C5E\u6027\u90FD\u662F\u4E00\u4E2A watch \u5B9E\u4F8B\u3002\u6BCF\u4E2A\u5C5E\u6027\u63D0\u4F9B\u7684\u51FD\u6570\u4F5C\u4E3A\u5C5E\u6027\u7684 getter\uFF0C\u4F7F\u7528 Object.defineProperty \u8F6C\u5316\u3002</li><li><code>Object.defineProperty getter</code> \u4F9D\u8D56\u6536\u96C6\u3002\u7528\u4E8E\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u89E6\u53D1\u5C5E\u6027\u91CD\u65B0\u8BA1\u7B97\u3002</li><li>\u82E5\u51FA\u73B0\u5F53\u524D computed \u8BA1\u7B97\u5C5E\u6027\u5D4C\u5957\u5176\u4ED6 computed \u8BA1\u7B97\u5C5E\u6027\u65F6\uFF0C\u5148\u8FDB\u884C\u5176\u4ED6\u7684\u4F9D\u8D56\u6536\u96C6</li></ul><h2 id="vue-complier-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-complier-\u5B9E\u73B0" aria-hidden="true">#</a> Vue complier \u5B9E\u73B0</h2><ul><li>\u6A21\u677F\u89E3\u6790\u8FD9\u79CD\u4E8B\uFF0C\u672C\u8D28\u662F\u5C06\u6570\u636E\u8F6C\u5316\u4E3A\u4E00\u6BB5 html \uFF0C\u6700\u5F00\u59CB\u51FA\u73B0\u5728\u540E\u7AEF\uFF0C\u7ECF\u8FC7\u5404\u79CD\u5904\u7406\u5410\u7ED9\u524D\u7AEF\u3002\u968F\u7740\u5404\u79CD mv* \u7684\u5174\u8D77\uFF0C\u6A21\u677F\u89E3\u6790\u4EA4\u7531\u524D\u7AEF\u5904\u7406\u3002</li><li>\u603B\u7684\u6765\u8BF4\uFF0CVue complier \u662F\u5C06 template \u8F6C\u5316\u6210\u4E00\u4E2A render \u5B57\u7B26\u4E32\u3002</li></ul><blockquote><p>\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u6210\u4EE5\u4E0B\u6B65\u9AA4\uFF1A</p></blockquote><ul><li>parse \u8FC7\u7A0B\uFF0C\u5C06 template \u5229\u7528\u6B63\u5219\u8F6C\u5316\u6210 AST \u62BD\u8C61\u8BED\u6CD5\u6811\u3002</li><li>optimize \u8FC7\u7A0B\uFF0C\u6807\u8BB0\u9759\u6001\u8282\u70B9\uFF0C\u540E diff \u8FC7\u7A0B\u8DF3\u8FC7\u9759\u6001\u8282\u70B9\uFF0C\u63D0\u5347\u6027\u80FD\u3002</li><li>generate \u8FC7\u7A0B\uFF0C\u751F\u6210 render \u5B57\u7B26\u4E32</li></ul><h2 id="\u600E\u4E48\u5FEB\u901F\u5B9A\u4F4D\u54EA\u4E2A\u7EC4\u4EF6\u51FA\u73B0\u6027\u80FD\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u5FEB\u901F\u5B9A\u4F4D\u54EA\u4E2A\u7EC4\u4EF6\u51FA\u73B0\u6027\u80FD\u95EE\u9898" aria-hidden="true">#</a> \u600E\u4E48\u5FEB\u901F\u5B9A\u4F4D\u54EA\u4E2A\u7EC4\u4EF6\u51FA\u73B0\u6027\u80FD\u95EE\u9898</h2><blockquote><p>\u7528 timeline \u5DE5\u5177\u3002 \u5927\u610F\u662F\u901A\u8FC7 timeline \u6765\u67E5\u770B\u6BCF\u4E2A\u51FD\u6570\u7684\u8C03\u7528\u65F6\u5E38\uFF0C\u5B9A\u4F4D\u51FA\u54EA\u4E2A\u51FD\u6570\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u80FD\u5224\u65AD\u54EA\u4E2A\u7EC4\u4EF6\u51FA\u4E86\u95EE\u9898</p></blockquote>`,38);function l(r,t){return s}var p=e(a,[["render",l],["__file","vue.html.vue"]]);export{p as default};
