import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u5916\u89C2\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5916\u89C2\u6A21\u5F0F" aria-hidden="true">#</a> \u5916\u89C2\u6A21\u5F0F</h1><p>API \u4E3Afacade \u6A21\u5757\u7684\u5916\u89C2\u63A5\u53E3\uFF0C\u5927\u90E8\u5206\u4EE3\u7801\u4F7F\u7528\u6B64\u63A5\u53E3\u7B80\u5316\u5BF9facade\u7C7B\u7684\u8BBF\u95EE\u3002</p><p>facade\u6A21\u5757\u540C\u65F6\u66B4\u9732\u4E86a\u548Cb \u4E24\u4E2AModule \u7684NewXXX\u548Cinterface\uFF0C\u5176\u5B83\u4EE3\u7801\u5982\u679C\u9700\u8981\u4F7F\u7528\u7EC6\u8282\u529F\u80FD\u65F6\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u3002</p><h4 id="facade-go" tabindex="-1"><a class="header-anchor" href="#facade-go" aria-hidden="true">#</a> facade.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> facade

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">NewAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> API <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>apiImpl<span class="token punctuation">{</span>
        a<span class="token punctuation">:</span> <span class="token function">NewAModuleAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        b<span class="token punctuation">:</span> <span class="token function">NewBModuleAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//API is facade interface of facade package</span>
<span class="token keyword">type</span> API <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//facade implement</span>
<span class="token keyword">type</span> apiImpl <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a AModuleAPI
    b BModuleAPI
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>apiImpl<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    aRet <span class="token operator">:=</span> a<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">TestA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bRet <span class="token operator">:=</span> a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token function">TestB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n%s&quot;</span><span class="token punctuation">,</span> aRet<span class="token punctuation">,</span> bRet<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewAModuleAPI return new AModuleAPI</span>
<span class="token keyword">func</span> <span class="token function">NewAModuleAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> AModuleAPI <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>aModuleImpl<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//AModuleAPI ...</span>
<span class="token keyword">type</span> AModuleAPI <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">TestA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> aModuleImpl <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>aModuleImpl<span class="token punctuation">)</span> <span class="token function">TestA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;A module running&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewBModuleAPI return new BModuleAPI</span>
<span class="token keyword">func</span> <span class="token function">NewBModuleAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> BModuleAPI <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>bModuleImpl<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//BModuleAPI ...</span>
<span class="token keyword">type</span> BModuleAPI <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">TestB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> bModuleImpl <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>bModuleImpl<span class="token punctuation">)</span> <span class="token function">TestB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;B module running&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h4 id="facade-test-go" tabindex="-1"><a class="header-anchor" href="#facade-test-go" aria-hidden="true">#</a> facade_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> facade

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">var</span> expect <span class="token operator">=</span> <span class="token string">&quot;A module running\\nB module running&quot;</span>

<span class="token comment">// TestFacadeAPI ...</span>
<span class="token keyword">func</span> <span class="token function">TestFacadeAPI</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    api <span class="token operator">:=</span> <span class="token function">NewAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ret <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ret <span class="token operator">!=</span> expect <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;expect %s, return %s&quot;</span><span class="token punctuation">,</span> expect<span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,7);function e(t,c){return p}var l=n(a,[["render",e],["__file","facade.html.vue"]]);export{l as default};
