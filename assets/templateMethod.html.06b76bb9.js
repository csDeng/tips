import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a> \u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F</h1><p>\u6A21\u7248\u65B9\u6CD5\u6A21\u5F0F\u4F7F\u7528\u7EE7\u627F\u673A\u5236\uFF0C\u628A\u901A\u7528\u6B65\u9AA4\u548C\u901A\u7528\u65B9\u6CD5\u653E\u5230\u7236\u7C7B\u4E2D\uFF0C\u628A\u5177\u4F53\u5B9E\u73B0\u5EF6\u8FDF\u5230\u5B50\u7C7B\u4E2D\u5B9E\u73B0\u3002\u4F7F\u5F97\u5B9E\u73B0\u7B26\u5408\u5F00\u95ED\u539F\u5219\u3002</p><p>\u5982\u5B9E\u4F8B\u4EE3\u7801\u4E2D\u901A\u7528\u6B65\u9AA4\u5728\u7236\u7C7B\u4E2D\u5B9E\u73B0\uFF08<code>\u51C6\u5907</code>\u3001<code>\u4E0B\u8F7D</code>\u3001<code>\u4FDD\u5B58</code>\u3001<code>\u6536\u5C3E</code>\uFF09\u4E0B\u8F7D\u548C\u4FDD\u5B58\u7684\u5177\u4F53\u5B9E\u73B0\u7559\u5230\u5B50\u7C7B\u4E2D\uFF0C\u5E76\u4E14\u63D0\u4F9B <code>\u4FDD\u5B58</code>\u65B9\u6CD5\u7684\u9ED8\u8BA4\u5B9E\u73B0\u3002</p><p>\u56E0\u4E3AGolang\u4E0D\u63D0\u4F9B\u7EE7\u627F\u673A\u5236\uFF0C\u9700\u8981\u4F7F\u7528\u533F\u540D\u7EC4\u5408\u6A21\u62DF\u5B9E\u73B0\u7EE7\u627F\u3002</p><p>\u6B64\u5904\u9700\u8981\u6CE8\u610F\uFF1A\u56E0\u4E3A\u7236\u7C7B\u9700\u8981\u8C03\u7528\u5B50\u7C7B\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5B50\u7C7B\u9700\u8981\u533F\u540D\u7EC4\u5408\u7236\u7C7B\u7684\u540C\u65F6\uFF0C\u7236\u7C7B\u9700\u8981\u6301\u6709\u5B50\u7C7B\u7684\u5F15\u7528\u3002</p><h4 id="templatemethod-go" tabindex="-1"><a class="header-anchor" href="#templatemethod-go" aria-hidden="true">#</a> templatemethod.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> templatemethod

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Downloader <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Download</span><span class="token punctuation">(</span>uri <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> template <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    implement
    uri <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> implement <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">newTemplate</span><span class="token punctuation">(</span>impl implement<span class="token punctuation">)</span> <span class="token operator">*</span>template <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>template<span class="token punctuation">{</span>
        implement<span class="token punctuation">:</span> impl<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>template<span class="token punctuation">)</span> <span class="token function">Download</span><span class="token punctuation">(</span>uri <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t<span class="token punctuation">.</span>uri <span class="token operator">=</span> uri
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;prepare downloading\\n&quot;</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>implement<span class="token punctuation">.</span><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>implement<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;finish downloading\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>template<span class="token punctuation">)</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;default save\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> HTTPDownloader <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>template
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHTTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Downloader <span class="token punctuation">{</span>
    downloader <span class="token operator">:=</span> <span class="token operator">&amp;</span>HTTPDownloader<span class="token punctuation">{</span><span class="token punctuation">}</span>
    template <span class="token operator">:=</span> <span class="token function">newTemplate</span><span class="token punctuation">(</span>downloader<span class="token punctuation">)</span>
    downloader<span class="token punctuation">.</span>template <span class="token operator">=</span> template
    <span class="token keyword">return</span> downloader
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>HTTPDownloader<span class="token punctuation">)</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;download %s via http\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>uri<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>HTTPDownloader<span class="token punctuation">)</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;http save\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> FTPDownloader <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>template
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewFTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Downloader <span class="token punctuation">{</span>
    downloader <span class="token operator">:=</span> <span class="token operator">&amp;</span>FTPDownloader<span class="token punctuation">{</span><span class="token punctuation">}</span>
    template <span class="token operator">:=</span> <span class="token function">newTemplate</span><span class="token punctuation">(</span>downloader<span class="token punctuation">)</span>
    downloader<span class="token punctuation">.</span>template <span class="token operator">=</span> template
    <span class="token keyword">return</span> downloader
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>FTPDownloader<span class="token punctuation">)</span> <span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;download %s via ftp\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>uri<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><h4 id="templatemethod-test-go" tabindex="-1"><a class="header-anchor" href="#templatemethod-test-go" aria-hidden="true">#</a> templatemethod_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> templatemethod

<span class="token keyword">func</span> <span class="token function">ExampleHTTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> downloader Downloader <span class="token operator">=</span> <span class="token function">NewHTTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    downloader<span class="token punctuation">.</span><span class="token function">Download</span><span class="token punctuation">(</span><span class="token string">&quot;http://example.com/abc.zip&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// prepare downloading</span>
    <span class="token comment">// download http://example.com/abc.zip via http</span>
    <span class="token comment">// http save</span>
    <span class="token comment">// finish downloading</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleFTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> downloader Downloader <span class="token operator">=</span> <span class="token function">NewFTPDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    downloader<span class="token punctuation">.</span><span class="token function">Download</span><span class="token punctuation">(</span><span class="token string">&quot;ftp://example.com/abc.zip&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// prepare downloading</span>
    <span class="token comment">// download ftp://example.com/abc.zip via ftp</span>
    <span class="token comment">// default save</span>
    <span class="token comment">// finish downloading</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,9);function t(e,o){return p}var l=n(a,[["render",t],["__file","templateMethod.html.vue"]]);export{l as default};
