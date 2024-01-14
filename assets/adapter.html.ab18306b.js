import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u9002\u914D\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9002\u914D\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u9002\u914D\u5668\u6A21\u5F0F</h1><p>\u9002\u914D\u5668\u6A21\u5F0F\u7528\u4E8E\u8F6C\u6362\u4E00\u79CD\u63A5\u53E3\u9002\u914D\u53E6\u4E00\u79CD\u63A5\u53E3\u3002</p><p>\u5B9E\u9645\u4F7F\u7528\u4E2DAdaptee\u4E00\u822C\u4E3A\u63A5\u53E3\uFF0C\u5E76\u4E14\u4F7F\u7528\u5DE5\u5382\u51FD\u6570\u751F\u6210\u5B9E\u4F8B\u3002</p><p>\u5728Adapter\u4E2D\u533F\u540D\u7EC4\u5408Adaptee\u63A5\u53E3\uFF0C\u6240\u4EE5Adapter\u7C7B\u4E5F\u62E5\u6709SpecificRequest\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53C8\u56E0\u4E3AGo\u8BED\u8A00\u4E2D\u975E\u5165\u4FB5\u5F0F\u63A5\u53E3\u7279\u5F81\uFF0C\u5176\u5B9EAdapter\u4E5F\u9002\u914DAdaptee\u63A5\u53E3\u3002</p><h4 id="adapter-go" tabindex="-1"><a class="header-anchor" href="#adapter-go" aria-hidden="true">#</a> adapter.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> adapter

<span class="token comment">//Target \u662F\u9002\u914D\u7684\u76EE\u6807\u63A5\u53E3</span>
<span class="token keyword">type</span> Target <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Adaptee \u662F\u88AB\u9002\u914D\u7684\u76EE\u6807\u63A5\u53E3</span>
<span class="token keyword">type</span> Adaptee <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewAdaptee \u662F\u88AB\u9002\u914D\u63A5\u53E3\u7684\u5DE5\u5382\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">NewAdaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Adaptee <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>adapteeImpl<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//AdapteeImpl \u662F\u88AB\u9002\u914D\u7684\u76EE\u6807\u7C7B</span>
<span class="token keyword">type</span> adapteeImpl <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//SpecificRequest \u662F\u76EE\u6807\u7C7B\u7684\u4E00\u4E2A\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>adapteeImpl<span class="token punctuation">)</span> <span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;adaptee method&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewAdapter \u662FAdapter\u7684\u5DE5\u5382\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">NewAdapter</span><span class="token punctuation">(</span>adaptee Adaptee<span class="token punctuation">)</span> Target <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>adapter<span class="token punctuation">{</span>
        Adaptee<span class="token punctuation">:</span> adaptee<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Adapter \u662F\u8F6C\u6362Adaptee\u4E3ATarget\u63A5\u53E3\u7684\u9002\u914D\u5668</span>
<span class="token keyword">type</span> adapter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Adaptee
<span class="token punctuation">}</span>

<span class="token comment">//Request \u5B9E\u73B0Target\u63A5\u53E3</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>adapter<span class="token punctuation">)</span> <span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">SpecificRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h4 id="adapter-test-go" tabindex="-1"><a class="header-anchor" href="#adapter-test-go" aria-hidden="true">#</a> adapter_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> adapter

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">var</span> expect <span class="token operator">=</span> <span class="token string">&quot;adaptee method&quot;</span>

<span class="token keyword">func</span> <span class="token function">TestAdapter</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    adaptee <span class="token operator">:=</span> <span class="token function">NewAdaptee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    target <span class="token operator">:=</span> <span class="token function">NewAdapter</span><span class="token punctuation">(</span>adaptee<span class="token punctuation">)</span>
    res <span class="token operator">:=</span> target<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> res <span class="token operator">!=</span> expect <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;expect: %s, actual: %s&quot;</span><span class="token punctuation">,</span> expect<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,8);function e(t,c){return p}var l=n(a,[["render",e],["__file","adapter.html.vue"]]);export{l as default};
