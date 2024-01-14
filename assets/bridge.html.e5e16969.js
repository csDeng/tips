import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u88C5\u9970\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u6A21\u5F0F" aria-hidden="true">#</a> \u88C5\u9970\u6A21\u5F0F</h1><p>\u88C5\u9970\u6A21\u5F0F\u4F7F\u7528\u5BF9\u8C61\u7EC4\u5408\u7684\u65B9\u5F0F\u52A8\u6001\u6539\u53D8\u6216\u589E\u52A0\u5BF9\u8C61\u884C\u4E3A\u3002</p><p>Go\u8BED\u8A00\u501F\u52A9\u4E8E\u533F\u540D\u7EC4\u5408\u548C\u975E\u5165\u4FB5\u5F0F\u63A5\u53E3\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5B9E\u73B0\u88C5\u9970\u6A21\u5F0F\u3002</p><p>\u4F7F\u7528\u533F\u540D\u7EC4\u5408\uFF0C\u5728\u88C5\u9970\u5668\u4E2D\u4E0D\u5FC5\u663E\u5F0F\u5B9A\u4E49\u8F6C\u8C03\u539F\u5BF9\u8C61\u65B9\u6CD5\u3002</p><h4 id="decorator-go" tabindex="-1"><a class="header-anchor" href="#decorator-go" aria-hidden="true">#</a> decorator.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> decorator

<span class="token keyword">type</span> Component <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ConcreteComponent <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ConcreteComponent<span class="token punctuation">)</span> <span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MulDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Component
    num <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WarpMulDecorator</span><span class="token punctuation">(</span>c Component<span class="token punctuation">,</span> num <span class="token builtin">int</span><span class="token punctuation">)</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>MulDecorator<span class="token punctuation">{</span>
        Component<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
        num<span class="token punctuation">:</span>       num<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>MulDecorator<span class="token punctuation">)</span> <span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> d<span class="token punctuation">.</span>Component<span class="token punctuation">.</span><span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> d<span class="token punctuation">.</span>num
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AddDecorator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Component
    num <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WarpAddDecorator</span><span class="token punctuation">(</span>c Component<span class="token punctuation">,</span> num <span class="token builtin">int</span><span class="token punctuation">)</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>AddDecorator<span class="token punctuation">{</span>
        Component<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
        num<span class="token punctuation">:</span>       num<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>AddDecorator<span class="token punctuation">)</span> <span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> d<span class="token punctuation">.</span>Component<span class="token punctuation">.</span><span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> d<span class="token punctuation">.</span>num
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h4 id="decorator-test-go" tabindex="-1"><a class="header-anchor" href="#decorator-test-go" aria-hidden="true">#</a> decorator_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> decorator

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">ExampleDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> c Component <span class="token operator">=</span> <span class="token operator">&amp;</span>ConcreteComponent<span class="token punctuation">{</span><span class="token punctuation">}</span>
    c <span class="token operator">=</span> <span class="token function">WarpAddDecorator</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    c <span class="token operator">=</span> <span class="token function">WarpMulDecorator</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
    res <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Calc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;res %d\\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// res 80</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,8);function t(e,o){return p}var l=n(a,[["render",t],["__file","bridge.html.vue"]]);export{l as default};
