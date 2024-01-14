import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u8BBF\u95EE\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBF\u95EE\u8005\u6A21\u5F0F</h1><p>\u8BBF\u95EE\u8005\u6A21\u5F0F\u53EF\u4EE5\u7ED9\u4E00\u7CFB\u5217\u5BF9\u8C61\u900F\u660E\u7684\u6DFB\u52A0\u529F\u80FD\uFF0C\u5E76\u4E14\u628A\u76F8\u5173\u4EE3\u7801\u5C01\u88C5\u5230\u4E00\u4E2A\u7C7B\u4E2D\u3002</p><p>\u5BF9\u8C61\u53EA\u8981\u9884\u7559\u8BBF\u95EE\u8005\u63A5\u53E3<code>Accept</code>\u5219\u540E\u671F\u4E3A\u5BF9\u8C61\u6DFB\u52A0\u529F\u80FD\u7684\u65F6\u5019\u5C31\u4E0D\u9700\u8981\u6539\u52A8\u5BF9\u8C61\u3002</p><h4 id="visitor-go" tabindex="-1"><a class="header-anchor" href="#visitor-go" aria-hidden="true">#</a> visitor.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Customer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Accept</span><span class="token punctuation">(</span>Visitor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Visitor <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Visit</span><span class="token punctuation">(</span>Customer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> EnterpriseCustomer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CustomerCol <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    customers <span class="token punctuation">[</span><span class="token punctuation">]</span>Customer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CustomerCol<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>customer Customer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span>customers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>customers<span class="token punctuation">,</span> customer<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>CustomerCol<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> customer <span class="token operator">:=</span> <span class="token keyword">range</span> c<span class="token punctuation">.</span>customers <span class="token punctuation">{</span>
        customer<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span>visitor<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewEnterpriseCustomer</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>EnterpriseCustomer <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>EnterpriseCustomer<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>EnterpriseCustomer<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    visitor<span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> IndividualCustomer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewIndividualCustomer</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>IndividualCustomer <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>IndividualCustomer<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>IndividualCustomer<span class="token punctuation">)</span> <span class="token function">Accept</span><span class="token punctuation">(</span>visitor Visitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    visitor<span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ServiceRequestVisitor <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>ServiceRequestVisitor<span class="token punctuation">)</span> <span class="token function">Visit</span><span class="token punctuation">(</span>customer Customer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> c <span class="token operator">:=</span> customer<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>EnterpriseCustomer<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;serving enterprise customer %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>IndividualCustomer<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;serving individual customer %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// only for enterprise</span>
<span class="token keyword">type</span> AnalysisVisitor <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>AnalysisVisitor<span class="token punctuation">)</span> <span class="token function">Visit</span><span class="token punctuation">(</span>customer Customer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> c <span class="token operator">:=</span> customer<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>EnterpriseCustomer<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;analysis enterprise customer %s\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><h4 id="visitor-test-go" tabindex="-1"><a class="header-anchor" href="#visitor-test-go" aria-hidden="true">#</a> visitor_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> visitor

<span class="token keyword">func</span> <span class="token function">ExampleRequestVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token operator">&amp;</span>CustomerCol<span class="token punctuation">{</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewEnterpriseCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;A company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewEnterpriseCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;B company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewIndividualCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ServiceRequestVisitor<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// serving enterprise customer A company</span>
    <span class="token comment">// serving enterprise customer B company</span>
    <span class="token comment">// serving individual customer bob</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleAnalysis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token operator">&amp;</span>CustomerCol<span class="token punctuation">{</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewEnterpriseCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;A company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewIndividualCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">NewEnterpriseCustomer</span><span class="token punctuation">(</span><span class="token string">&quot;B company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    c<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>AnalysisVisitor<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// analysis enterprise customer A company</span>
    <span class="token comment">// analysis enterprise customer B company</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,7);function t(e,o){return p}var u=n(a,[["render",t],["__file","visitor.html.vue"]]);export{u as default};
