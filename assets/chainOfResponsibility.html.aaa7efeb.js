import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u804C\u8D23\u94FE\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u804C\u8D23\u94FE\u6A21\u5F0F" aria-hidden="true">#</a> \u804C\u8D23\u94FE\u6A21\u5F0F</h1><p>\u804C\u8D23\u94FE\u6A21\u5F0F\u7528\u4E8E\u5206\u79BB\u4E0D\u540C\u804C\u8D23\uFF0C\u5E76\u4E14\u52A8\u6001\u7EC4\u5408\u76F8\u5173\u804C\u8D23\u3002</p><p>Golang\u5B9E\u73B0\u804C\u8D23\u94FE\u6A21\u5F0F\u65F6\u5019\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7EE7\u627F\u7684\u652F\u6301\uFF0C\u4F7F\u7528\u94FE\u5BF9\u8C61\u5305\u6DB5\u804C\u8D23\u7684\u65B9\u5F0F\uFF0C\u5373\uFF1A</p><ul><li>\u94FE\u5BF9\u8C61\u5305\u542B\u5F53\u524D\u804C\u8D23\u5BF9\u8C61\u4EE5\u53CA\u4E0B\u4E00\u4E2A\u804C\u8D23\u94FE\u3002</li><li>\u804C\u8D23\u5BF9\u8C61\u63D0\u4F9B\u63A5\u53E3\u8868\u793A\u662F\u5426\u80FD\u5904\u7406\u5BF9\u5E94\u8BF7\u6C42\u3002</li><li>\u804C\u8D23\u5BF9\u8C61\u63D0\u4F9B\u5904\u7406\u51FD\u6570\u5904\u7406\u76F8\u5173\u804C\u8D23\u3002</li></ul><p>\u540C\u65F6\u53EF\u5728\u804C\u8D23\u94FE\u7C7B\u4E2D\u5B9E\u73B0\u804C\u8D23\u63A5\u53E3\u76F8\u5173\u51FD\u6570\uFF0C\u4F7F\u804C\u8D23\u94FE\u5BF9\u8C61\u53EF\u4EE5\u5F53\u505A\u4E00\u822C\u804C\u8D23\u5BF9\u8C61\u662F\u7528\u3002</p><h4 id="chain-go" tabindex="-1"><a class="header-anchor" href="#chain-go" aria-hidden="true">#</a> chain.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> chain

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Manager <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">HaveRight</span><span class="token punctuation">(</span>money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RequestChain <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Manager
    successor <span class="token operator">*</span>RequestChain
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RequestChain<span class="token punctuation">)</span> <span class="token function">SetSuccessor</span><span class="token punctuation">(</span>m <span class="token operator">*</span>RequestChain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r<span class="token punctuation">.</span>successor <span class="token operator">=</span> m
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RequestChain<span class="token punctuation">)</span> <span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>Manager<span class="token punctuation">.</span><span class="token function">HaveRight</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> r<span class="token punctuation">.</span>Manager<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>successor <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> r<span class="token punctuation">.</span>successor<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>RequestChain<span class="token punctuation">)</span> <span class="token function">HaveRight</span><span class="token punctuation">(</span>money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ProjectManager <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewProjectManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>RequestChain <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RequestChain<span class="token punctuation">{</span>
        Manager<span class="token punctuation">:</span> <span class="token operator">&amp;</span>ProjectManager<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ProjectManager<span class="token punctuation">)</span> <span class="token function">HaveRight</span><span class="token punctuation">(</span>money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> money <span class="token operator">&lt;</span> <span class="token number">500</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ProjectManager<span class="token punctuation">)</span> <span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;bob&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Project manager permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Project manager don&#39;t permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DepManager <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDepManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>RequestChain <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RequestChain<span class="token punctuation">{</span>
        Manager<span class="token punctuation">:</span> <span class="token operator">&amp;</span>DepManager<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>DepManager<span class="token punctuation">)</span> <span class="token function">HaveRight</span><span class="token punctuation">(</span>money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> money <span class="token operator">&lt;</span> <span class="token number">5000</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>DepManager<span class="token punctuation">)</span> <span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;tom&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Dep manager permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Dep manager don&#39;t permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> GeneralManager <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewGeneralManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>RequestChain <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>RequestChain<span class="token punctuation">{</span>
        Manager<span class="token punctuation">:</span> <span class="token operator">&amp;</span>GeneralManager<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>GeneralManager<span class="token punctuation">)</span> <span class="token function">HaveRight</span><span class="token punctuation">(</span>money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>GeneralManager<span class="token punctuation">)</span> <span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;ada&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;General manager permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;General manager don&#39;t permit %s %d fee request\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> money<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><h4 id="chain-test-go" tabindex="-1"><a class="header-anchor" href="#chain-test-go" aria-hidden="true">#</a> chain_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> chain

<span class="token keyword">func</span> <span class="token function">ExampleChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c1 <span class="token operator">:=</span> <span class="token function">NewProjectManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    c2 <span class="token operator">:=</span> <span class="token function">NewDepManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    c3 <span class="token operator">:=</span> <span class="token function">NewGeneralManagerChain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    c1<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span>
    c2<span class="token punctuation">.</span><span class="token function">SetSuccessor</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span>

    <span class="token keyword">var</span> c Manager <span class="token operator">=</span> c1

    c<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token number">1400</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span><span class="token string">&quot;ada&quot;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">HandleFeeRequest</span><span class="token punctuation">(</span><span class="token string">&quot;floar&quot;</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// Project manager permit bob 400 fee request</span>
    <span class="token comment">// Dep manager permit tom 1400 fee request</span>
    <span class="token comment">// General manager permit ada 10000 fee request</span>
    <span class="token comment">// Project manager don&#39;t permit floar 400 fee request</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9);function e(t,o){return p}var l=n(a,[["render",e],["__file","chainOfResponsibility.html.vue"]]);export{l as default};
