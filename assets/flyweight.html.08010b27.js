import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u4EAB\u5143\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EAB\u5143\u6A21\u5F0F" aria-hidden="true">#</a> \u4EAB\u5143\u6A21\u5F0F</h1><p>\u4EAB\u5143\u6A21\u5F0F\u4ECE\u5BF9\u8C61\u4E2D\u5265\u79BB\u51FA\u4E0D\u53D1\u751F\u6539\u53D8\u4E14\u591A\u4E2A\u5B9E\u4F8B\u9700\u8981\u7684\u91CD\u590D\u6570\u636E\uFF0C\u72EC\u7ACB\u51FA\u4E00\u4E2A\u4EAB\u5143\uFF0C\u4F7F\u591A\u4E2A\u5BF9\u8C61\u5171\u4EAB\uFF0C\u4ECE\u800C\u8282\u7701\u5185\u5B58\u4EE5\u53CA\u51CF\u5C11\u5BF9\u8C61\u6570\u91CF\u3002</p><h4 id="flyweight-go" tabindex="-1"><a class="header-anchor" href="#flyweight-go" aria-hidden="true">#</a> flyweight.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> flyweight

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> ImageFlyweightFactory <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    maps <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>ImageFlyweight
<span class="token punctuation">}</span>

<span class="token keyword">var</span> imageFactory <span class="token operator">*</span>ImageFlyweightFactory

<span class="token keyword">func</span> <span class="token function">GetImageFlyweightFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>ImageFlyweightFactory <span class="token punctuation">{</span>
    <span class="token keyword">if</span> imageFactory <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        imageFactory <span class="token operator">=</span> <span class="token operator">&amp;</span>ImageFlyweightFactory<span class="token punctuation">{</span>
            maps<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>ImageFlyweight<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> imageFactory
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>f <span class="token operator">*</span>ImageFlyweightFactory<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>ImageFlyweight <span class="token punctuation">{</span>
    image <span class="token operator">:=</span> f<span class="token punctuation">.</span>maps<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>
    <span class="token keyword">if</span> image <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        image <span class="token operator">=</span> <span class="token function">NewImageFlyweight</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
        f<span class="token punctuation">.</span>maps<span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> image
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> image
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ImageFlyweight <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    data <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewImageFlyweight</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>ImageFlyweight <span class="token punctuation">{</span>
    <span class="token comment">// Load image file</span>
    data <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;image data %s&quot;</span><span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ImageFlyweight<span class="token punctuation">{</span>
        data<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>ImageFlyweight<span class="token punctuation">)</span> <span class="token function">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">.</span>data
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ImageViewer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>ImageFlyweight
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewImageViewer</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>ImageViewer <span class="token punctuation">{</span>
    image <span class="token operator">:=</span> <span class="token function">GetImageFlyweightFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ImageViewer<span class="token punctuation">{</span>
        ImageFlyweight<span class="token punctuation">:</span> image<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>ImageViewer<span class="token punctuation">)</span> <span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Display: %s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">.</span><span class="token function">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h4 id="flyweight-test-go" tabindex="-1"><a class="header-anchor" href="#flyweight-test-go" aria-hidden="true">#</a> flyweight_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> flyweight

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">ExampleFlyweight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewer <span class="token operator">:=</span> <span class="token function">NewImageViewer</span><span class="token punctuation">(</span><span class="token string">&quot;image1.png&quot;</span><span class="token punctuation">)</span>
    viewer<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// Display: image data image1.png</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestFlyweight</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    viewer1 <span class="token operator">:=</span> <span class="token function">NewImageViewer</span><span class="token punctuation">(</span><span class="token string">&quot;image1.png&quot;</span><span class="token punctuation">)</span>
    viewer2 <span class="token operator">:=</span> <span class="token function">NewImageViewer</span><span class="token punctuation">(</span><span class="token string">&quot;image1.png&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> viewer1<span class="token punctuation">.</span>ImageFlyweight <span class="token operator">!=</span> viewer2<span class="token punctuation">.</span>ImageFlyweight <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,6);function e(t,o){return p}var l=n(a,[["render",e],["__file","flyweight.html.vue"]]);export{l as default};
