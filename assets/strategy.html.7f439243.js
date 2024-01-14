import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u7B56\u7565\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a> \u7B56\u7565\u6A21\u5F0F</h1><p>\u5B9A\u4E49\u4E00\u7CFB\u5217\u7B97\u6CD5\uFF0C\u8BA9\u8FD9\u4E9B\u7B97\u6CD5\u5728\u8FD0\u884C\u65F6\u53EF\u4EE5\u4E92\u6362\uFF0C\u4F7F\u5F97\u5206\u79BB\u7B97\u6CD5\uFF0C\u7B26\u5408\u5F00\u95ED\u539F\u5219\u3002</p><h4 id="strategy-go" tabindex="-1"><a class="header-anchor" href="#strategy-go" aria-hidden="true">#</a> strategy.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> strategy

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Payment <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    context  <span class="token operator">*</span>PaymentContext
    strategy PaymentStrategy
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PaymentContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name<span class="token punctuation">,</span> CardID <span class="token builtin">string</span>
    Money        <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPayment</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> cardid <span class="token builtin">string</span><span class="token punctuation">,</span> money <span class="token builtin">int</span><span class="token punctuation">,</span> strategy PaymentStrategy<span class="token punctuation">)</span> <span class="token operator">*</span>Payment <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Payment<span class="token punctuation">{</span>
        context<span class="token punctuation">:</span> <span class="token operator">&amp;</span>PaymentContext<span class="token punctuation">{</span>
            Name<span class="token punctuation">:</span>   name<span class="token punctuation">,</span>
            CardID<span class="token punctuation">:</span> cardid<span class="token punctuation">,</span>
            Money<span class="token punctuation">:</span>  money<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        strategy<span class="token punctuation">:</span> strategy<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Payment<span class="token punctuation">)</span> <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>context<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PaymentStrategy <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Pay</span><span class="token punctuation">(</span><span class="token operator">*</span>PaymentContext<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Cash <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Cash<span class="token punctuation">)</span> <span class="token function">Pay</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>PaymentContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Pay $%d to %s by cash&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>Money<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Bank <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Bank<span class="token punctuation">)</span> <span class="token function">Pay</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>PaymentContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Pay $%d to %s by bank account %s&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>Money<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>CardID<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h4 id="strategy-test-go" tabindex="-1"><a class="header-anchor" href="#strategy-test-go" aria-hidden="true">#</a> strategy_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> strategy

<span class="token keyword">func</span> <span class="token function">ExamplePayByCash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    payment <span class="token operator">:=</span> <span class="token function">NewPayment</span><span class="token punctuation">(</span><span class="token string">&quot;Ada&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Cash<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    payment<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// Pay $123 to Ada by cash</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExamplePayByBank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    payment <span class="token operator">:=</span> <span class="token function">NewPayment</span><span class="token punctuation">(</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0002&quot;</span><span class="token punctuation">,</span> <span class="token number">888</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Bank<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    payment<span class="token punctuation">.</span><span class="token function">Pay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// Pay $888 to Bob by bank account 0002</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,6);function t(e,c){return p}var u=n(a,[["render",t],["__file","strategy.html.vue"]]);export{u as default};
