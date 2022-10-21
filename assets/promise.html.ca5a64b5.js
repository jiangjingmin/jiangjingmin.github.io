import{_ as l,r as p,o as b,c as i,a as n,b as a,F as c,d as s,e as r}from"./app.6e1280c8.js";const u={},m=n("h1",{id:"promise",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#promise","aria-hidden":"true"},"#"),s(" Promise")],-1),t={href:"https://juejin.cn/post/6945319439772434469?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},o=s("\u4ECE\u4E00\u9053\u8BA9\u6211\u5931\u7720\u7684 Promise \u9762\u8BD5\u9898\u5F00\u59CB\uFF0C\u6DF1\u5165\u5206\u6790 Promise \u5B9E\u73B0\u7EC6\u8282"),d=r(`<blockquote><p>\u8003\u5BDF\u5B8F\u5FAE\u4EFB\u52A1\u3001EventLoop \u4E4B\u7C7B</p></blockquote><p>Promise \u4F1A\u6709\u4E09\u79CD\u72B6\u6001\uFF1A</p><ul><li>Pending \u7B49\u5F85</li><li>Fulfilled \u5B8C\u6210</li><li>Rejected \u5931\u8D25</li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>Promise.resolve().then(() =&gt; {
    console.log(0);
    return Promise.resolve(4);
}).then((res) =&gt; {
    console.log(res)
})

Promise.resolve().then(() =&gt; {
    console.log(1);
}).then(() =&gt; {
    console.log(2);
}).then(() =&gt; {
    console.log(3);
}).then(() =&gt; {
    console.log(5);
}).then(() =&gt;{
    console.log(6);
})

// \u6253\u5370\u7ED3\u679C\uFF1A0\u30011\u30012\u30013\u30014\u30015\u30016 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>JS\u662F\u5355\u7EBF\u7A0B =&gt; \u9AD8\u8017\u65F6\u64CD\u4F5C\u5F15\u8D77\u8FDB\u7A0B\u963B\u585E\u95EE\u9898 =&gt; \u4E24\u79CD\u6267\u884C\u6A21\u5F0F =&gt; \u540C\u6B65\u6A21\u5F0F\uFF08Synchronous\uFF09\u548C\u5F02\u6B65\u6A21\u5F0F\uFF08Asynchronous\uFF09</p><p>\u5F02\u6B65\u4EFB\u52A1\u4E3B\u8981\u5206\u4E3A\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1\u4E24\u79CD:</p><ul><li>\u5B8F\u4EFB\u52A1\uFF08Macrotask\uFF09 \u79F0\u4E3A Task\uFF0C \u5B8F\u4EFB\u52A1\u662F\u7531\u5BBF\u4E3B\uFF08\u6D4F\u89C8\u5668\u3001Node\uFF09\u53D1\u8D77\u7684\uFF1B</li><li>\u5FAE\u4EFB\u52A1\uFF08Microtask\uFF09 \u79F0\u4E3A Jobs\uFF0C\u800C\u5FAE\u4EFB\u52A1\u7531 JS \u81EA\u8EAB\u53D1\u8D77\u3002</li></ul><p>setTimeout \u5C5E\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u800C Promise \u662F\u4E2A\u5FAE\u4EFB\u52A1</p><p>\u521B\u5EFA\u5FAE\u4EFB\u52A1\u7684\u65B9\u5F0F\uFF1Aprocess.nextTick\uFF08 Node \u7AEF \uFF09 \u4E0EMutationObserver\uFF08 \u6D4F\u89C8\u5668\u7AEF \uFF09</p>`,9),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide",target:"_blank",rel:"noopener noreferrer"},v=s("\u5728 JavaScript \u4E2D\u901A\u8FC7 queueMicrotask() \u4F7F\u7528\u5FAE\u4EFB\u52A1"),f=r(`<h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// MyPromise.js

// \u5148\u5B9A\u4E49\u4E09\u4E2A\u5E38\u91CF\u8868\u793A\u72B6\u6001
const PENDING = &#39;pending&#39;;
const FULFILLED = &#39;fulfilled&#39;;
const REJECTED = &#39;rejected&#39;;

// \u65B0\u5EFA MyPromise \u7C7B
class MyPromise {
  constructor(executor){
    // executor \u662F\u4E00\u4E2A\u6267\u884C\u5668\uFF0C\u8FDB\u5165\u4F1A\u7ACB\u5373\u6267\u884C
    // \u5E76\u4F20\u5165resolve\u548Creject\u65B9\u6CD5
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  // \u50A8\u5B58\u72B6\u6001\u7684\u53D8\u91CF\uFF0C\u521D\u59CB\u503C\u662F pending
  status = PENDING;
  // \u6210\u529F\u4E4B\u540E\u7684\u503C
  value = null;
  // \u5931\u8D25\u4E4B\u540E\u7684\u539F\u56E0
  reason = null;

  // \u5B58\u50A8\u6210\u529F\u56DE\u8C03\u51FD\u6570
  onFulfilledCallbacks = [];
  // \u5B58\u50A8\u5931\u8D25\u56DE\u8C03\u51FD\u6570
  onRejectedCallbacks = [];

  // \u66F4\u6539\u6210\u529F\u540E\u7684\u72B6\u6001
  resolve = (value) =&gt; {
    // \u53EA\u6709\u72B6\u6001\u662F\u7B49\u5F85\uFF0C\u624D\u6267\u884C\u72B6\u6001\u4FEE\u6539
    if (this.status === PENDING) {
      // \u72B6\u6001\u4FEE\u6539\u4E3A\u6210\u529F
      this.status = FULFILLED;
      // \u4FDD\u5B58\u6210\u529F\u4E4B\u540E\u7684\u503C
      this.value = value;
      // resolve\u91CC\u9762\u5C06\u6240\u6709\u6210\u529F\u7684\u56DE\u8C03\u62FF\u51FA\u6765\u6267\u884C
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() \u53D6\u51FA\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\uFF08\uFF09\u8C03\u7528\uFF0Cshift\u4E0D\u662F\u7EAF\u51FD\u6570\uFF0C\u53D6\u51FA\u540E\uFF0C\u6570\u7EC4\u5C06\u5931\u53BB\u8BE5\u5143\u7D20\uFF0C\u76F4\u5230\u6570\u7EC4\u4E3A\u7A7A
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  // \u66F4\u6539\u5931\u8D25\u540E\u7684\u72B6\u6001
  reject = (reason) =&gt; {
    // \u53EA\u6709\u72B6\u6001\u662F\u7B49\u5F85\uFF0C\u624D\u6267\u884C\u72B6\u6001\u4FEE\u6539
    if (this.status === PENDING) {
      // \u72B6\u6001\u6210\u529F\u4E3A\u5931\u8D25
      this.status = REJECTED;
      // \u4FDD\u5B58\u5931\u8D25\u540E\u7684\u539F\u56E0
      this.reason = reason;
      // resolve\u91CC\u9762\u5C06\u6240\u6709\u5931\u8D25\u7684\u56DE\u8C03\u62FF\u51FA\u6765\u6267\u884C
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    const realOnFulfilled = typeof onFulfilled === &#39;function&#39; ? onFulfilled : value =&gt; value;
    const realOnRejected = typeof onRejected === &#39;function&#39; ? onRejected : reason =&gt; {throw reason};

    // \u4E3A\u4E86\u94FE\u5F0F\u8C03\u7528\u8FD9\u91CC\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A MyPromise\uFF0C\u5E76\u5728\u540E\u9762 return \u51FA\u53BB
    const promise2 = new MyPromise((resolve, reject) =&gt; {
      const fulfilledMicrotask = () =&gt;  {
        // \u521B\u5EFA\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u7B49\u5F85 promise2 \u5B8C\u6210\u521D\u59CB\u5316
        queueMicrotask(() =&gt; {
          try {
            // \u83B7\u53D6\u6210\u529F\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C
            const x = realOnFulfilled(this.value);
            // \u4F20\u5165 resolvePromise \u96C6\u4E2D\u5904\u7406
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        })  
      }

      const rejectedMicrotask = () =&gt; { 
        // \u521B\u5EFA\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u7B49\u5F85 promise2 \u5B8C\u6210\u521D\u59CB\u5316
        queueMicrotask(() =&gt; {
          try {
            // \u8C03\u7528\u5931\u8D25\u56DE\u8C03\uFF0C\u5E76\u4E14\u628A\u539F\u56E0\u8FD4\u56DE
            const x = realOnRejected(this.reason);
            // \u4F20\u5165 resolvePromise \u96C6\u4E2D\u5904\u7406
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          } 
        }) 
      }
      // \u5224\u65AD\u72B6\u6001
      if (this.status === FULFILLED) {
        fulfilledMicrotask() 
      } else if (this.status === REJECTED) { 
        rejectedMicrotask()
      } else if (this.status === PENDING) {
        // \u7B49\u5F85
        // \u56E0\u4E3A\u4E0D\u77E5\u9053\u540E\u9762\u72B6\u6001\u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u6240\u4EE5\u5C06\u6210\u529F\u56DE\u8C03\u548C\u5931\u8D25\u56DE\u8C03\u5B58\u50A8\u8D77\u6765
        // \u7B49\u5230\u6267\u884C\u6210\u529F\u5931\u8D25\u51FD\u6570\u7684\u65F6\u5019\u518D\u4F20\u9012
        this.onFulfilledCallbacks.push(fulfilledMicrotask);
        this.onRejectedCallbacks.push(rejectedMicrotask);
      }
    }) 
    
    return promise2;
  }

  // resolve \u9759\u6001\u65B9\u6CD5
  static resolve (parameter) {
    // \u5982\u679C\u4F20\u5165 MyPromise \u5C31\u76F4\u63A5\u8FD4\u56DE
    if (parameter instanceof MyPromise) {
      return parameter;
    }

    // \u8F6C\u6210\u5E38\u89C4\u65B9\u5F0F
    return new MyPromise(resolve =&gt;  {
      resolve(parameter);
    });
  }

  // reject \u9759\u6001\u65B9\u6CD5
  static reject (reason) {
    return new MyPromise((resolve, reject) =&gt; {
      reject(reason);
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // \u5982\u679C\u76F8\u7B49\u4E86\uFF0C\u8BF4\u660Ereturn\u7684\u662F\u81EA\u5DF1\uFF0C\u629B\u51FA\u7C7B\u578B\u9519\u8BEF\u5E76\u8FD4\u56DE
  if (promise === x) {
    return reject(new TypeError(&#39;The promise and the return value are the same&#39;));
  }

  if (typeof x === &#39;object&#39; || typeof x === &#39;function&#39;) {
    // x \u4E3A null \u76F4\u63A5\u8FD4\u56DE\uFF0C\u8D70\u540E\u9762\u7684\u903B\u8F91\u4F1A\u62A5\u9519
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      // \u628A x.then \u8D4B\u503C\u7ED9 then 
      then = x.then;
    } catch (error) {
      // \u5982\u679C\u53D6 x.then \u7684\u503C\u65F6\u629B\u51FA\u9519\u8BEF error \uFF0C\u5219\u4EE5 error \u4E3A\u636E\u56E0\u62D2\u7EDD promise
      return reject(error);
    }

    // \u5982\u679C then \u662F\u51FD\u6570
    if (typeof then === &#39;function&#39;) {
      let called = false;
      try {
        then.call(
          x, // this \u6307\u5411 x
          // \u5982\u679C resolvePromise \u4EE5\u503C y \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u8FD0\u884C [[Resolve]](promise, y)
          y =&gt; {
            // \u5982\u679C resolvePromise \u548C rejectPromise \u5747\u88AB\u8C03\u7528\uFF0C
            // \u6216\u8005\u88AB\u540C\u4E00\u53C2\u6570\u8C03\u7528\u4E86\u591A\u6B21\uFF0C\u5219\u4F18\u5148\u91C7\u7528\u9996\u6B21\u8C03\u7528\u5E76\u5FFD\u7565\u5269\u4E0B\u7684\u8C03\u7528
            // \u5B9E\u73B0\u8FD9\u6761\u9700\u8981\u524D\u9762\u52A0\u4E00\u4E2A\u53D8\u91CF called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // \u5982\u679C rejectPromise \u4EE5\u636E\u56E0 r \u4E3A\u53C2\u6570\u88AB\u8C03\u7528\uFF0C\u5219\u4EE5\u636E\u56E0 r \u62D2\u7EDD promise
          r =&gt; {
            if (called) return;
            called = true;
            reject(r);
          });
      } catch (error) {
        // \u5982\u679C\u8C03\u7528 then \u65B9\u6CD5\u629B\u51FA\u4E86\u5F02\u5E38 error\uFF1A
        // \u5982\u679C resolvePromise \u6216 rejectPromise \u5DF2\u7ECF\u88AB\u8C03\u7528\uFF0C\u76F4\u63A5\u8FD4\u56DE
        if (called) return;

        // \u5426\u5219\u4EE5 error \u4E3A\u636E\u56E0\u62D2\u7EDD promise
        reject(error);
      }
    } else {
      // \u5982\u679C then \u4E0D\u662F\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570\u6267\u884C promise
      resolve(x);
    }
  } else {
    // \u5982\u679C x \u4E0D\u4E3A\u5BF9\u8C61\u6216\u8005\u51FD\u6570\uFF0C\u4EE5 x \u4E3A\u53C2\u6570\u6267\u884C promise
    resolve(x);
  }
}

module.exports = MyPromise;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br></div></div>`,2);function g(j,P){const e=p("ExternalLinkIcon");return b(),i(c,null,[m,n("ul",null,[n("li",null,[n("a",t,[o,a(e)])])]),d,n("p",null,[n("a",h,[v,a(e)])]),f],64)}var _=l(u,[["render",g],["__file","promise.html.vue"]]);export{_ as default};
