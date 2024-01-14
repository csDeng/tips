import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h1><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u7528\u4E8E\u89E6\u53D1\u8054\u52A8\u3002</p><p>\u4E00\u4E2A\u5BF9\u8C61\u7684\u6539\u53D8\u4F1A\u89E6\u53D1\u5176\u5B83\u89C2\u5BDF\u8005\u7684\u76F8\u5173\u52A8\u4F5C\uFF0C\u800C\u6B64\u5BF9\u8C61\u65E0\u9700\u5173\u5FC3\u8FDE\u52A8\u5BF9\u8C61\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p><h4 id="obserser-go" tabindex="-1"><a class="header-anchor" href="#obserser-go" aria-hidden="true">#</a> obserser.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> observer

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Subject <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    observers <span class="token punctuation">[</span><span class="token punctuation">]</span>Observer
    context   <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Subject <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Subject<span class="token punctuation">{</span>
        observers<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Observer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">Attach</span><span class="token punctuation">(</span>o Observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>observers<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> o <span class="token operator">:=</span> <span class="token keyword">range</span> s<span class="token punctuation">.</span>observers <span class="token punctuation">{</span>
        o<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token function">UpdateContext</span><span class="token punctuation">(</span>context <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span>context <span class="token operator">=</span> context
    s<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Observer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Update</span><span class="token punctuation">(</span><span class="token operator">*</span>Subject<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Reader <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewReader</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Reader <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Reader<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Reader<span class="token punctuation">)</span> <span class="token function">Update</span><span class="token punctuation">(</span>s <span class="token operator">*</span>Subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s receive %s\\n&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>context<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h4 id="obserser-test-go" tabindex="-1"><a class="header-anchor" href="#obserser-test-go" aria-hidden="true">#</a> obserser_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> observer

<span class="token keyword">func</span> <span class="token function">ExampleObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    subject <span class="token operator">:=</span> <span class="token function">NewSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    reader1 <span class="token operator">:=</span> <span class="token function">NewReader</span><span class="token punctuation">(</span><span class="token string">&quot;reader1&quot;</span><span class="token punctuation">)</span>
    reader2 <span class="token operator">:=</span> <span class="token function">NewReader</span><span class="token punctuation">(</span><span class="token string">&quot;reader2&quot;</span><span class="token punctuation">)</span>
    reader3 <span class="token operator">:=</span> <span class="token function">NewReader</span><span class="token punctuation">(</span><span class="token string">&quot;reader3&quot;</span><span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>reader1<span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>reader2<span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">Attach</span><span class="token punctuation">(</span>reader3<span class="token punctuation">)</span>

    subject<span class="token punctuation">.</span><span class="token function">UpdateContext</span><span class="token punctuation">(</span><span class="token string">&quot;observer mode&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// reader1 receive observer mode</span>
    <span class="token comment">// reader2 receive observer mode</span>
    <span class="token comment">// reader3 receive observer mode</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,7);function e(t,o){return p}var u=n(a,[["render",e],["__file","command.html.vue"]]);export{u as default};
