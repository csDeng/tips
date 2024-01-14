import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u89E3\u91CA\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F</h1><p>\u89E3\u91CA\u5668\u6A21\u5F0F\u5B9A\u4E49\u4E00\u5957\u8BED\u8A00\u6587\u6CD5\uFF0C\u5E76\u8BBE\u8BA1\u8BE5\u8BED\u8A00\u89E3\u91CA\u5668\uFF0C\u4F7F\u7528\u6237\u80FD\u4F7F\u7528\u7279\u5B9A\u6587\u6CD5\u63A7\u5236\u89E3\u91CA\u5668\u884C\u4E3A\u3002</p><p>\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u5B83\u5206\u79BB\u591A\u79CD\u590D\u6742\u529F\u80FD\u7684\u5B9E\u73B0\uFF0C\u6BCF\u4E2A\u529F\u80FD\u53EA\u9700\u5173\u6CE8\u81EA\u8EAB\u7684\u89E3\u91CA\u3002</p><p>\u5BF9\u4E8E\u8C03\u7528\u8005\u4E0D\u7528\u5173\u5FC3\u5185\u90E8\u7684\u89E3\u91CA\u5668\u7684\u5DE5\u4F5C\uFF0C\u53EA\u9700\u8981\u7528\u7B80\u5355\u7684\u65B9\u5F0F\u7EC4\u5408\u547D\u4EE4\u5C31\u53EF\u4EE5\u3002</p><h4 id="interpreter-go" tabindex="-1"><a class="header-anchor" href="#interpreter-go" aria-hidden="true">#</a> interpreter.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> interpreter

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;strconv&quot;</span>
    <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Node <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ValNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    val <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>ValNode<span class="token punctuation">)</span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">.</span>val
<span class="token punctuation">}</span>

<span class="token keyword">type</span> AddNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">,</span> right Node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>AddNode<span class="token punctuation">)</span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> n<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MinNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">,</span> right Node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>MinNode<span class="token punctuation">)</span> <span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n<span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> n<span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Parser <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    exp   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    index <span class="token builtin">int</span>
    prev  Node
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Parser<span class="token punctuation">)</span> <span class="token function">Parse</span><span class="token punctuation">(</span>exp <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>exp <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>exp<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> p<span class="token punctuation">.</span>index <span class="token operator">&gt;=</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>exp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">switch</span> p<span class="token punctuation">.</span>exp<span class="token punctuation">[</span>p<span class="token punctuation">.</span>index<span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;+&quot;</span><span class="token punctuation">:</span>
            p<span class="token punctuation">.</span>prev <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">newAddNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">:</span>
            p<span class="token punctuation">.</span>prev <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">newMinNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            p<span class="token punctuation">.</span>prev <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">newValNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Parser<span class="token punctuation">)</span> <span class="token function">newAddNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Node <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>index<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>AddNode<span class="token punctuation">{</span>
        left<span class="token punctuation">:</span>  p<span class="token punctuation">.</span>prev<span class="token punctuation">,</span>
        right<span class="token punctuation">:</span> p<span class="token punctuation">.</span><span class="token function">newValNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Parser<span class="token punctuation">)</span> <span class="token function">newMinNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Node <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>index<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>MinNode<span class="token punctuation">{</span>
        left<span class="token punctuation">:</span>  p<span class="token punctuation">.</span>prev<span class="token punctuation">,</span>
        right<span class="token punctuation">:</span> p<span class="token punctuation">.</span><span class="token function">newValNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Parser<span class="token punctuation">)</span> <span class="token function">newValNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Node <span class="token punctuation">{</span>
    v<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>exp<span class="token punctuation">[</span>p<span class="token punctuation">.</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>index<span class="token operator">++</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>ValNode<span class="token punctuation">{</span>
        val<span class="token punctuation">:</span> v<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Parser<span class="token punctuation">)</span> <span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Node <span class="token punctuation">{</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>prev
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br></div></div><h4 id="interpreter-test-go" tabindex="-1"><a class="header-anchor" href="#interpreter-test-go" aria-hidden="true">#</a> interpreter_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> interpreter

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">TestInterpreter</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>Parser<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;1 + 2 + 3 - 4 + 5 - 6&quot;</span><span class="token punctuation">)</span>
    res <span class="token operator">:=</span> p<span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Interpret</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    expect <span class="token operator">:=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> res <span class="token operator">!=</span> expect <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;expect %d got %d&quot;</span><span class="token punctuation">,</span> expect<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8);function t(e,o){return p}var u=n(a,[["render",t],["__file","interpreter.html.vue"]]);export{u as default};
