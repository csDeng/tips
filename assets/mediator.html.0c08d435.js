import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u4E2D\u4ECB\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u4E2D\u4ECB\u8005\u6A21\u5F0F</h1><p>\u4E2D\u4ECB\u8005\u6A21\u5F0F\u5C01\u88C5\u5BF9\u8C61\u4E4B\u95F4\u4E92\u4EA4\uFF0C\u4F7F\u4F9D\u8D56\u53D8\u7684\u7B80\u5355\uFF0C\u5E76\u4E14\u4F7F\u590D\u6742\u4E92\u4EA4\u7B80\u5355\u5316\uFF0C\u5C01\u88C5\u5728\u4E2D\u4ECB\u8005\u4E2D\u3002</p><p>\u4F8B\u5B50\u4E2D\u7684\u4E2D\u4ECB\u8005\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u751F\u6210\u4E2D\u4ECB\u8005\u3002</p><p>\u4E2D\u4ECB\u8005\u7684change\u4F7F\u7528switch\u5224\u65AD\u7C7B\u578B\u3002</p><h4 id="mediator-go" tabindex="-1"><a class="header-anchor" href="#mediator-go" aria-hidden="true">#</a> mediator.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> mediator

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> CDDriver <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Data <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CDDriver<span class="token punctuation">)</span> <span class="token function">ReadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token string">&quot;music,image&quot;</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;CDDriver: reading data %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CPU <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Video <span class="token builtin">string</span>
    Sound <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CPU<span class="token punctuation">)</span> <span class="token function">Process</span><span class="token punctuation">(</span>data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sp <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span>Sound <span class="token operator">=</span> sp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    c<span class="token punctuation">.</span>Video <span class="token operator">=</span> sp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;CPU: split data with Sound %s, Video %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Sound<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Video<span class="token punctuation">)</span>
    <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> VideoCard <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Data <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>v <span class="token operator">*</span>VideoCard<span class="token punctuation">)</span> <span class="token function">Display</span><span class="token punctuation">(</span>data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    v<span class="token punctuation">.</span>Data <span class="token operator">=</span> data
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;VideoCard: display %s\\n&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> SoundCard <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Data <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>SoundCard<span class="token punctuation">)</span> <span class="token function">Play</span><span class="token punctuation">(</span>data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span>Data <span class="token operator">=</span> data
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;SoundCard: play %s\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Mediator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    CD    <span class="token operator">*</span>CDDriver
    CPU   <span class="token operator">*</span>CPU
    Video <span class="token operator">*</span>VideoCard
    Sound <span class="token operator">*</span>SoundCard
<span class="token punctuation">}</span>

<span class="token keyword">var</span> mediator <span class="token operator">*</span>Mediator

<span class="token keyword">func</span> <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Mediator <span class="token punctuation">{</span>
    <span class="token keyword">if</span> mediator <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        mediator <span class="token operator">=</span> <span class="token operator">&amp;</span>Mediator<span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> mediator
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Mediator<span class="token punctuation">)</span> <span class="token function">changed</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> inst <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>CDDriver<span class="token punctuation">:</span>
        m<span class="token punctuation">.</span>CPU<span class="token punctuation">.</span><span class="token function">Process</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>CPU<span class="token punctuation">:</span>
        m<span class="token punctuation">.</span>Sound<span class="token punctuation">.</span><span class="token function">Play</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>Sound<span class="token punctuation">)</span>
        m<span class="token punctuation">.</span>Video<span class="token punctuation">.</span><span class="token function">Display</span><span class="token punctuation">(</span>inst<span class="token punctuation">.</span>Video<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h4 id="mediator-test-go" tabindex="-1"><a class="header-anchor" href="#mediator-test-go" aria-hidden="true">#</a> mediator_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> mediator

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">TestMediator</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mediator <span class="token operator">:=</span> <span class="token function">GetMediatorInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    mediator<span class="token punctuation">.</span>CD <span class="token operator">=</span> <span class="token operator">&amp;</span>CDDriver<span class="token punctuation">{</span><span class="token punctuation">}</span>
    mediator<span class="token punctuation">.</span>CPU <span class="token operator">=</span> <span class="token operator">&amp;</span>CPU<span class="token punctuation">{</span><span class="token punctuation">}</span>
    mediator<span class="token punctuation">.</span>Video <span class="token operator">=</span> <span class="token operator">&amp;</span>VideoCard<span class="token punctuation">{</span><span class="token punctuation">}</span>
    mediator<span class="token punctuation">.</span>Sound <span class="token operator">=</span> <span class="token operator">&amp;</span>SoundCard<span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">//Tiggle</span>
    mediator<span class="token punctuation">.</span>CD<span class="token punctuation">.</span><span class="token function">ReadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> mediator<span class="token punctuation">.</span>CD<span class="token punctuation">.</span>Data <span class="token operator">!=</span> <span class="token string">&quot;music,image&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;CD unexpect data %s&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">.</span>CD<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> mediator<span class="token punctuation">.</span>CPU<span class="token punctuation">.</span>Sound <span class="token operator">!=</span> <span class="token string">&quot;music&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;CPU unexpect sound data %s&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">.</span>CPU<span class="token punctuation">.</span>Sound<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> mediator<span class="token punctuation">.</span>CPU<span class="token punctuation">.</span>Video <span class="token operator">!=</span> <span class="token string">&quot;image&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;CPU unexpect video data %s&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">.</span>CPU<span class="token punctuation">.</span>Video<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> mediator<span class="token punctuation">.</span>Video<span class="token punctuation">.</span>Data <span class="token operator">!=</span> <span class="token string">&quot;image&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;VidoeCard unexpect data %s&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">.</span>Video<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> mediator<span class="token punctuation">.</span>Sound<span class="token punctuation">.</span>Data <span class="token operator">!=</span> <span class="token string">&quot;music&quot;</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;SoundCard unexpect data %s&quot;</span><span class="token punctuation">,</span> mediator<span class="token punctuation">.</span>Sound<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,8);function t(o,e){return p}var u=n(a,[["render",t],["__file","mediator.html.vue"]]);export{u as default};
