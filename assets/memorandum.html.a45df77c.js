import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u5907\u5FD8\u5F55\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5907\u5FD8\u5F55\u6A21\u5F0F" aria-hidden="true">#</a> \u5907\u5FD8\u5F55\u6A21\u5F0F</h1><p>\u5907\u5FD8\u5F55\u6A21\u5F0F\u7528\u4E8E\u4FDD\u5B58\u7A0B\u5E8F\u5185\u90E8\u72B6\u6001\u5230\u5916\u90E8\uFF0C\u53C8\u4E0D\u5E0C\u671B\u66B4\u9732\u5185\u90E8\u72B6\u6001\u7684\u60C5\u5F62\u3002</p><p>\u7A0B\u5E8F\u5185\u90E8\u72B6\u6001\u4F7F\u7528\u7A84\u63A5\u53E3\u8239\u4F53\u7ED9\u5916\u90E8\u8FDB\u884C\u5B58\u50A8\uFF0C\u4ECE\u800C\u4E0D\u66B4\u9732\u7A0B\u5E8F\u5B9E\u73B0\u7EC6\u8282\u3002</p><p>\u5907\u5FD8\u5F55\u6A21\u5F0F\u540C\u65F6\u53EF\u4EE5\u79BB\u7EBF\u4FDD\u5B58\u5185\u90E8\u72B6\u6001\uFF0C\u5982\u4FDD\u5B58\u5230\u6570\u636E\u5E93\uFF0C\u6587\u4EF6\u7B49\u3002</p><h4 id="memento-go" tabindex="-1"><a class="header-anchor" href="#memento-go" aria-hidden="true">#</a> memento.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> memento

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Memento <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> Game <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    hp<span class="token punctuation">,</span> mp <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> gameMemento <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    hp<span class="token punctuation">,</span> mp <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Game<span class="token punctuation">)</span> <span class="token function">Play</span><span class="token punctuation">(</span>mpDelta<span class="token punctuation">,</span> hpDelta <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    g<span class="token punctuation">.</span>mp <span class="token operator">+=</span> mpDelta
    g<span class="token punctuation">.</span>hp <span class="token operator">+=</span> hpDelta
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Game<span class="token punctuation">)</span> <span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Memento <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>gameMemento<span class="token punctuation">{</span>
        hp<span class="token punctuation">:</span> g<span class="token punctuation">.</span>hp<span class="token punctuation">,</span>
        mp<span class="token punctuation">:</span> g<span class="token punctuation">.</span>mp<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Game<span class="token punctuation">)</span> <span class="token function">Load</span><span class="token punctuation">(</span>m Memento<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    gm <span class="token operator">:=</span> m<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>gameMemento<span class="token punctuation">)</span>
    g<span class="token punctuation">.</span>mp <span class="token operator">=</span> gm<span class="token punctuation">.</span>mp
    g<span class="token punctuation">.</span>hp <span class="token operator">=</span> gm<span class="token punctuation">.</span>hp
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>Game<span class="token punctuation">)</span> <span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Current HP:%d, MP:%d\\n&quot;</span><span class="token punctuation">,</span> g<span class="token punctuation">.</span>hp<span class="token punctuation">,</span> g<span class="token punctuation">.</span>mp<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h4 id="memento-test-go" tabindex="-1"><a class="header-anchor" href="#memento-test-go" aria-hidden="true">#</a> memento_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> memento

<span class="token keyword">func</span> <span class="token function">ExampleGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    game <span class="token operator">:=</span> <span class="token operator">&amp;</span>Game<span class="token punctuation">{</span>
        hp<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        mp<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    game<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    progress <span class="token operator">:=</span> game<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    game<span class="token punctuation">.</span><span class="token function">Play</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
    game<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    game<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span>
    game<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// Output:</span>
    <span class="token comment">// Current HP:10, MP:10</span>
    <span class="token comment">// Current HP:7, MP:8</span>
    <span class="token comment">// Current HP:10, MP:10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,8);function t(e,o){return p}var u=n(a,[["render",t],["__file","memorandum.html.vue"]]);export{u as default};
