import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u7EC4\u5408\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a> \u7EC4\u5408\u6A21\u5F0F</h1><p>\u7EC4\u5408\u6A21\u5F0F\u7EDF\u4E00\u5BF9\u8C61\u548C\u5BF9\u8C61\u96C6\uFF0C\u4F7F\u5F97\u4F7F\u7528\u76F8\u540C\u63A5\u53E3\u4F7F\u7528\u5BF9\u8C61\u548C\u5BF9\u8C61\u96C6\u3002</p><p>\u7EC4\u5408\u6A21\u5F0F\u5E38\u7528\u4E8E\u6811\u72B6\u7ED3\u6784\uFF0C\u7528\u4E8E\u7EDF\u4E00\u53F6\u5B50\u8282\u70B9\u548C\u6811\u8282\u70B9\u7684\u8BBF\u95EE\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7528\u4E8E\u5E94\u7528\u67D0\u4E00\u64CD\u4F5C\u5230\u6240\u6709\u5B50\u8282\u70B9\u3002</p><h4 id="composite-go" tabindex="-1"><a class="header-anchor" href="#composite-go" aria-hidden="true">#</a> composite.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> composite

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Component <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Component
    <span class="token function">SetParent</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span>
    <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token function">SetName</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token function">AddChild</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span>
    <span class="token function">Print</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    LeafNode <span class="token operator">=</span> <span class="token boolean">iota</span>
    CompositeNode
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>kind <span class="token builtin">int</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">var</span> c Component
    <span class="token keyword">switch</span> kind <span class="token punctuation">{</span>
    <span class="token keyword">case</span> LeafNode<span class="token punctuation">:</span>
        c <span class="token operator">=</span> <span class="token function">NewLeaf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> CompositeNode<span class="token punctuation">:</span>
        c <span class="token operator">=</span> <span class="token function">NewComposite</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    c<span class="token punctuation">.</span><span class="token function">SetName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token keyword">type</span> component <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    parent Component
    name   <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Component <span class="token punctuation">{</span>
    <span class="token keyword">return</span> c<span class="token punctuation">.</span>parent
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">SetParent</span><span class="token punctuation">(</span>parent Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>parent <span class="token operator">=</span> parent
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> c<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">SetName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">AddChild</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>component<span class="token punctuation">)</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> Leaf <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    component
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewLeaf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Leaf <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Leaf<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Leaf<span class="token punctuation">)</span> <span class="token function">Print</span><span class="token punctuation">(</span>pre <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s-%s\\n&quot;</span><span class="token punctuation">,</span> pre<span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Composite <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    component
    childs <span class="token punctuation">[</span><span class="token punctuation">]</span>Component
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewComposite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Composite <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Composite<span class="token punctuation">{</span>
        childs<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>Component<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">AddChild</span><span class="token punctuation">(</span>child Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    child<span class="token punctuation">.</span><span class="token function">SetParent</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    c<span class="token punctuation">.</span>childs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>childs<span class="token punctuation">,</span> child<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Composite<span class="token punctuation">)</span> <span class="token function">Print</span><span class="token punctuation">(</span>pre <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s+%s\\n&quot;</span><span class="token punctuation">,</span> pre<span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    pre <span class="token operator">+=</span> <span class="token string">&quot; &quot;</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> comp <span class="token operator">:=</span> <span class="token keyword">range</span> c<span class="token punctuation">.</span>childs <span class="token punctuation">{</span>
        comp<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>pre<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h4 id="composite-test-go" tabindex="-1"><a class="header-anchor" href="#composite-test-go" aria-hidden="true">#</a> composite_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> composite

<span class="token keyword">func</span> <span class="token function">ExampleComposite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>CompositeNode<span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
    c1 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>CompositeNode<span class="token punctuation">,</span> <span class="token string">&quot;c1&quot;</span><span class="token punctuation">)</span>
    c2 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>CompositeNode<span class="token punctuation">,</span> <span class="token string">&quot;c2&quot;</span><span class="token punctuation">)</span>
    c3 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>CompositeNode<span class="token punctuation">,</span> <span class="token string">&quot;c3&quot;</span><span class="token punctuation">)</span>

    l1 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>LeafNode<span class="token punctuation">,</span> <span class="token string">&quot;l1&quot;</span><span class="token punctuation">)</span>
    l2 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>LeafNode<span class="token punctuation">,</span> <span class="token string">&quot;l2&quot;</span><span class="token punctuation">)</span>
    l3 <span class="token operator">:=</span> <span class="token function">NewComponent</span><span class="token punctuation">(</span>LeafNode<span class="token punctuation">,</span> <span class="token string">&quot;l3&quot;</span><span class="token punctuation">)</span>

    root<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span>
    c1<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span>
    c1<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span>
    c2<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span>
    c2<span class="token punctuation">.</span><span class="token function">AddChild</span><span class="token punctuation">(</span>l3<span class="token punctuation">)</span>

    root<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// +root</span>
    <span class="token comment">//  +c1</span>
    <span class="token comment">//   +c3</span>
    <span class="token comment">//   -l1</span>
    <span class="token comment">//  +c2</span>
    <span class="token comment">//   -l2</span>
    <span class="token comment">//   -l3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,7);function t(o,e){return p}var l=n(a,[["render",t],["__file","composite.html.vue"]]);export{l as default};
