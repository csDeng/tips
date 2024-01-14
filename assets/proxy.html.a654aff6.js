import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h1><p>\u4EE3\u7406\u6A21\u5F0F\u7528\u4E8E\u5EF6\u8FDF\u5904\u7406\u64CD\u4F5C\u6216\u8005\u5728\u8FDB\u884C\u5B9E\u9645\u64CD\u4F5C\u524D\u540E\u8FDB\u884C\u5176\u5B83\u5904\u7406\u3002</p><h5 id="\u4EE3\u7406\u6A21\u5F0F\u7684\u5E38\u89C1\u7528\u6CD5\u6709" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F\u7684\u5E38\u89C1\u7528\u6CD5\u6709" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F\u7684\u5E38\u89C1\u7528\u6CD5\u6709</h5><ul><li>\u865A\u4EE3\u7406</li><li>COW\u4EE3\u7406</li><li>\u8FDC\u7A0B\u4EE3\u7406</li><li>\u4FDD\u62A4\u4EE3\u7406</li><li>Cache \u4EE3\u7406</li><li>\u9632\u706B\u5899\u4EE3\u7406</li><li>\u540C\u6B65\u4EE3\u7406</li><li>\u667A\u80FD\u6307\u5F15</li></ul><p>\u7B49\u3002\u3002\u3002</p><h4 id="proxy-go" tabindex="-1"><a class="header-anchor" href="#proxy-go" aria-hidden="true">#</a> proxy.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> proxy

<span class="token keyword">type</span> Subject <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RealSubject <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>RealSubject<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;real&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">real</span> RealSubject
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Proxy<span class="token punctuation">)</span> <span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token builtin">string</span>

    <span class="token comment">// \u5728\u8C03\u7528\u771F\u5B9E\u5BF9\u8C61\u4E4B\u524D\u7684\u5DE5\u4F5C\uFF0C\u68C0\u67E5\u7F13\u5B58\uFF0C\u5224\u65AD\u6743\u9650\uFF0C\u5B9E\u4F8B\u5316\u771F\u5B9E\u5BF9\u8C61\u7B49\u3002\u3002</span>
    res <span class="token operator">+=</span> <span class="token string">&quot;pre:&quot;</span>

    <span class="token comment">// \u8C03\u7528\u771F\u5B9E\u5BF9\u8C61</span>
    res <span class="token operator">+=</span> p<span class="token punctuation">.</span><span class="token builtin">real</span><span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u8C03\u7528\u4E4B\u540E\u7684\u64CD\u4F5C\uFF0C\u5982\u7F13\u5B58\u7ED3\u679C\uFF0C\u5BF9\u7ED3\u679C\u8FDB\u884C\u5904\u7406\u7B49\u3002\u3002</span>
    res <span class="token operator">+=</span> <span class="token string">&quot;:after&quot;</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="proxy-test-go" tabindex="-1"><a class="header-anchor" href="#proxy-test-go" aria-hidden="true">#</a> proxy_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> proxy

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">TestProxy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sub Subject
    sub <span class="token operator">=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span>

    res <span class="token operator">:=</span> sub<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token string">&quot;pre:real:after&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,9);function e(t,o){return p}var c=n(a,[["render",e],["__file","proxy.html.vue"]]);export{c as default};
