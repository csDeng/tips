import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u8FED\u4EE3\u5668\u6A21\u5F0F</h1><p>\u9001\u4EE3\u5668\u6A21\u5F0F\u7528\u4E8E\u4F7F\u7528\u76F8\u540C\u65B9\u5F0F\u9001\u4EE3\u4E0D\u540C\u7C7B\u578B\u96C6\u5408\u6216\u8005\u9690\u85CF\u96C6\u5408\u7C7B\u578B\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528\u9001\u4EE3\u5668\u6A21\u5F0F\u4F7F\u904D\u5386\u540C\u65F6\u5E94\u7528\u9001\u4EE3\u7B56\u7565\uFF0C\u5982\u8BF7\u6C42\u65B0\u5BF9\u8C61\u3001\u8FC7\u6EE4\u3001\u5904\u7406\u5BF9\u8C61\u7B49\u3002</p><h4 id="iterator-go" tabindex="-1"><a class="header-anchor" href="#iterator-go" aria-hidden="true">#</a> iterator.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> iterator

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Aggregate <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Iterator
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Iterator <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">IsDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
    <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Numbers <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    start<span class="token punctuation">,</span> end <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewNumbers</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Numbers <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Numbers<span class="token punctuation">{</span>
        start<span class="token punctuation">:</span> start<span class="token punctuation">,</span>
        end<span class="token punctuation">:</span>   end<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>Numbers<span class="token punctuation">)</span> <span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Iterator <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>NumbersIterator<span class="token punctuation">{</span>
        numbers<span class="token punctuation">:</span> n<span class="token punctuation">,</span>
        next<span class="token punctuation">:</span>    n<span class="token punctuation">.</span>start<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> NumbersIterator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    numbers <span class="token operator">*</span>Numbers
    next    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>NumbersIterator<span class="token punctuation">)</span> <span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i<span class="token punctuation">.</span>next <span class="token operator">=</span> i<span class="token punctuation">.</span>numbers<span class="token punctuation">.</span>start
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>NumbersIterator<span class="token punctuation">)</span> <span class="token function">IsDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">.</span>next <span class="token operator">&gt;</span> i<span class="token punctuation">.</span>numbers<span class="token punctuation">.</span>end
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>i <span class="token operator">*</span>NumbersIterator<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>i<span class="token punctuation">.</span><span class="token function">IsDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">:=</span> i<span class="token punctuation">.</span>next
        i<span class="token punctuation">.</span>next<span class="token operator">++</span>
        <span class="token keyword">return</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">IteratorPrint</span><span class="token punctuation">(</span>i Iterator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>i<span class="token punctuation">.</span><span class="token function">IsDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">{</span>
        c <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h4 id="iterator-test-go" tabindex="-1"><a class="header-anchor" href="#iterator-test-go" aria-hidden="true">#</a> iterator_test.go</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> iterator

<span class="token keyword">func</span> <span class="token function">ExampleIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> aggregate Aggregate
    aggregate <span class="token operator">=</span> <span class="token function">NewNumbers</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

    <span class="token function">IteratorPrint</span><span class="token punctuation">(</span>aggregate<span class="token punctuation">.</span><span class="token function">Iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// Output:</span>
    <span class="token comment">// 1</span>
    <span class="token comment">// 2</span>
    <span class="token comment">// 3</span>
    <span class="token comment">// 4</span>
    <span class="token comment">// 5</span>
    <span class="token comment">// 6</span>
    <span class="token comment">// 7</span>
    <span class="token comment">// 8</span>
    <span class="token comment">// 9</span>
    <span class="token comment">// 10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,7);function t(e,o){return p}var l=n(a,[["render",t],["__file","iterator.html.vue"]]);export{l as default};
