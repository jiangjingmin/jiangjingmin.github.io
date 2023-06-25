import{_ as n,e as s}from"./app.f6b3af9d.js";const a={},e=s(`<p><strong>\u624B\u5199\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF0C\u5E76\u8981\u6C42\u517C\u5BB9\u6D4F\u89C8\u5668</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var eventUtil = {
  getEvent: function(event) {
      return event || window.event;
  },

  getTarget: function(event) {
      return event.target || event.srcElement;
  },

  addListener: function(element, type, hander) {
      if (element.addEventListener) {
          element.addEventListener(type, hander, false);
      } else if (element.attachEvent) {
          element.attachEvent(&#39;on&#39; + type, hander);
      } else {
          element[&#39;on&#39; + type] = hander;
      }
  },

  removeListener: function(element, type, hander) {
      if (element.removeEventListener) {
          element.removeEventListener(type, hander, false);
      } else if (element.deattachEvent) {
          element.detachEvent(type, hander);
      } else {
          element[&#39;on&#39; + type] = null;
      }
  },

  preventDefault: function(event) {
      if (event.preventDefault) {
          event.preventDefault();
      } else {
          event.returnValue = false;
      }
  },

  stopPropagation: function(event) {
      if (event.stopPropagation) {
          event.stopPropagation();
      } else {
          event.cancelBubble = true;
      }
  }
};

// \u8C03\u7528
(function() {
  var btn = document.getElementById(&quot;btn&quot;);
  var link = document.getElementsByTagName(&quot;a&quot;)[0];

  eventUtil.addListener(btn, &quot;click&quot;, function(event) {
      var event = eventUtil.getEvent(event);
      var target = eventUtil.getTarget(event);
      alert(event.type);
      alert(target);
      eventUtil.stopPropagation(event);
  });

  eventUtil.addListener(link, &quot;click&quot;, function(event) {
      alert(&quot;prevent default event&quot;);
      var event = eventUtil.getEvent(event);
      eventUtil.preventDefault(event);
  });

  eventUtil.addListener(document.body, &quot;click&quot;, function() {
      alert(&quot;click body&quot;);
  });
})();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><p><strong>\u624B\u5199\u4E8B\u4EF6\u6A21\u578B</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var Event = (function () {
    var list = {}, bind, trigger, remove;
    bind = function (key, fn) {
        if (!list[key]) {
            list[key] = [];
        }
        list[key].push(fn);
    };
    trigger = function () {
        var key = Array.prototype.shift.call(arguments);
        var fns = list[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
    remove = function (key, fn) {
        var fns = list[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns &amp; (fns.length = 0);
        } else {
            for (var i = fns.length - 1; i &gt;= 0; i--) {
                var _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1);
                }
            }
        }
    };
    return {
        bind: bind,
        trigger: trigger,
        remove: remove
    }
})();

// \u8C03\u7528
Event.bind(&#39;Hit&#39;, function(){ console.log(&#39;bind event&#39;); }); // \u7ED1\u5B9A\u4E8B\u4EF6
Event.trigger(&quot;Hit&quot;, function(){ console.log(&#39;trigger event&#39;); }); // \u89E6\u53D1\u4E8B\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p><strong>\u624B\u5199\u4E8B\u4EF6\u4EE3\u7406\uFF0C\u5E76\u8981\u6C42\u517C\u5BB9\u6D4F\u89C8\u5668</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>function delegateEvent(parentEl, selector, type, fn) {
    var handler = function(e){
          var e = e || window.event;
          var target = e.target || e.srcElement;
          if (matchSelector(target, selector)) {
              if(fn) {
                  fn.call(target, e);
              }
          }
    };
    if(parentEl.addEventListener){
        parentEl.addEventListener(type, handler);
    }else{
        parentEl.attachEvent(&quot;on&quot; + type, handler);
    }
}
/**
 * support #id, tagName, .className
 */
function matchSelector(ele, selector) {
    // if use id
    if (selector.charAt(0) === &quot;#&quot;) {
        return ele.id === selector.slice(1);
    }
    // if use class
    if (selector.charAt(0) === &quot;.&quot;) {
        return (&quot; &quot; + ele.className + &quot; &quot;).indexOf(&quot; &quot; + selector.slice(1) + &quot; &quot;) != -1;
    }
    // if use tagName
    return ele.tagName.toLowerCase() === selector.toLowerCase();
}

// \u8C03\u7528
var box = document.getElementById(&quot;box&quot;);
delegateEvent(box, &quot;a&quot;, &quot;click&quot;, function(){
    console.log(this.href);
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><strong>\u624B\u5199\u4E8B\u4EF6\u89E6\u53D1\u5668\uFF0C\u5E76\u8981\u6C42\u517C\u5BB9\u6D4F\u89C8\u5668</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var fireEvent = function(element, event){
    if (document.createEventObject){
        var mockEvent = document.createEventObject();
        return element.fireEvent(&#39;on&#39; + event, mockEvent)
    }else{
        var mockEvent = document.createEvent(&#39;HTMLEvents&#39;);
        mockEvent.initEvent(event, true, true);
        return element.dispatchEvent(mockEvent);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u624B\u5199 Function.bind \u51FD\u6570</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== &quot;function&quot;) {
      throw new TypeError(&quot;&#39;this&#39; is not function&quot;);
    }

    // bind&#39;s default arguments, array without first element
    // first part arguments for the function
    var aBindArgs = Array.prototype.slice.call(arguments, 1);
    var fToBind = this; // the function will be binding
    var fNOP = function () {};
    var fBound = function () {
          // target this will be binding
          var oThis = this instanceof fNOP ? this : oThis || this;
          // last part arguments for the function
          var aCallArgs = Array.prototype.slice.call(arguments);
          // complete arguments for the function
          var aFuncArgs = aBindArgs.concat(aCallArgs);
          return fToBind.apply(oThis, aFuncArgs);
        };

    // fBound extends fToBind
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

// \u8C03\u7528
var add = function(a, b, c){ return a + b + c;};
var newAdd = add.bind(null, 1, 2);
var result = newAdd(3);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><strong>\u624B\u5199\u6570\u7EC4\u5FEB\u901F\u6392\u5E8F</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var quickSort = function(arr) {
    if (arr.length &lt;= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0, len = arr.length; i &lt; len; i++){
        if (arr[i] &lt; pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

// \u8C03\u7528
quickSort([9, 4, 2, 8, 1, 5, 3, 7]);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>\u624B\u5199\u6570\u7EC4\u5192\u6CE1\u6392\u5E8F</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var bubble = function(arr){
    var maxIndex = arr.length - 1, temp, flag;
    for (var i = maxIndex; i &gt; 0; i--) {
        flag = true
        for (var j = 0; j &lt; i; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if(! flag){
            break;
        }
    }
    return arr;
}
// \u8C03\u7528
var arr = bubble([13, 69, 28, 93, 55, 75, 34]);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><strong>\u624B\u5199\u6570\u7EC4\u53BB\u91CD</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>Array.prototype.unique = function() { return [...new Set(this)];};
// \u8C03\u7528
[1, 2, 3, 3, 2, 1].unique();

function unique1(arr){
    var hash = {}, result = [];
    for(var i=0, len=arr.length; i&lt;len; i++){
        if(! hash[arr[i]]){
          result.push(arr[i]);
          hash[arr[i]] = true;
        }
    }
    return result;
}
// \u8C03\u7528
unique1([1, 2, 3, 3, 2, 1]);

Array.prototype.unique2 = function(){
    this.sort();
    var result = [this[0]];
    var len = this.length;
    for(var i = 0; i &lt; len; i++){
        if(this[i] !== result[result.length - 1]){
          result.push(this[i]);
        }
    }
    return result;
}
// \u8C03\u7528
[1, 2, 3, 3, 2, 1].unique2();

function unique3(arr){
    var result = [];
    for(var i=0; i&lt;arr.length; i++){
        if(result.indexOf(arr[i]) == -1){
          result.push(arr[i]);
        }
    }
    return result;
}

// \u8C03\u7528
unique3([1, 2, 3, 3, 2, 1]);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p><strong>\u5C06url\u7684\u67E5\u8BE2\u53C2\u6570\u89E3\u6790\u6210\u5B57\u5178\u5BF9\u8C61</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>function parseQuery(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf(&quot;?&quot;) + 1);
  var hash = {};
  var reg = /([^?&amp;=]+)=([^?&amp;=]*)/g;
  search.replace(reg, function (match, $1, $2) {
      var name = decodeURIComponent($1);
      var val = decodeURIComponent($2);
      hash[name] = String(val);
      return match;
  });
  return hash;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>\u5C01\u88C5\u51FD\u6570\u8282\u6D41\u51FD\u6570</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>var throttle = function(fn, delay, mustRunDelay){
  var timer = null;
  var t_start;
  return function(){
    var context = this, args = arguments, t_curr = +new Date();
    clearTimeout(timer);
    if(!t_start){
      t_start = t_curr;
    }
    if(t_curr - t_start &gt;= mustRunDelay){
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    }
  };
};

// \u8C03\u7528\uFF08\u4E24\u6B21\u95F4\u969450ms\u5185\u8FDE\u7EED\u89E6\u53D1\u4E0D\u6267\u884C\uFF0C\u4F46\u6BCF\u7D2F\u8BA1100ms\u81F3\u5C11\u6267\u884C\u4E00\u6B21
window.onresize = throttle(myFunc, 50, 100);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><strong>\u7528JS\u5B9E\u73B0\u5343\u4F4D\u5206\u9694\u7B26</strong></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>function test1(num){
  var str = (+ num) + &#39;&#39;;
  var len = str.length;
  if(len &lt;= 3) return str;
  num = &#39;&#39;;
  while(len &gt; 3){
      len -= 3;
      num = &#39;,&#39; + str.substr(len, 3) + num;
  }
  return str.substr(0, len) + num;
}

function test2(num){
  // ?= \u6B63\u5411\u5339\u914D:\u5339\u914D\u4F4D\u7F6E
  // ?! \u6B63\u5411\u4E0D\u5339\u914D:\u6392\u9664\u4F4D\u7F6E
  var str = (+num).toString();
  var reg = /(?=(?!\\b)(\\d{3})+$)/g;
  return str.replace(reg, &#39;,&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,22);function r(l,p){return e}var i=n(a,[["render",r],["__file","Handwritten-code.html.vue"]]);export{i as default};
