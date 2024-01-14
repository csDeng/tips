import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u5EFA\u9020\u8005\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u9020\u8005\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u5EFA\u9020\u8005\u8005\u6A21\u5F0F</h1><p>\u5EFA\u9020\u8005\u6A21\u5F0F\uFF08Builder Pattern\uFF09\u4F7F\u7528\u591A\u4E2A\u7B80\u5355\u7684\u5BF9\u8C61\u4E00\u6B65\u4E00\u6B65\u6784\u5EFA\u6210\u4E00\u4E2A\u590D\u6742\u7684\u5BF9\u8C61\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u521B\u5EFA\u578B\u6A21\u5F0F\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u521B\u5EFA\u5BF9\u8C61\u7684\u6700\u4F73\u65B9\u5F0F\u3002</p><p>\u4E00\u4E2A Builder \u7C7B\u4F1A\u4E00\u6B65\u4E00\u6B65\u6784\u9020\u6700\u7EC8\u7684\u5BF9\u8C61\u3002\u8BE5 Builder \u7C7B\u662F\u72EC\u7ACB\u4E8E\u5176\u4ED6\u5BF9\u8C61\u7684\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> builder

<span class="token comment">//Builder \u662F\u751F\u6210\u5668\u63A5\u53E3</span>
<span class="token keyword">type</span> Builder <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Part1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Part2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Part3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Director <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	builder Builder
<span class="token punctuation">}</span>

<span class="token comment">// NewDirector ...</span>
<span class="token keyword">func</span> <span class="token function">NewDirector</span><span class="token punctuation">(</span>builder Builder<span class="token punctuation">)</span> <span class="token operator">*</span>Director <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Director<span class="token punctuation">{</span>
		builder<span class="token punctuation">:</span> builder<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Construct Product</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Director<span class="token punctuation">)</span> <span class="token function">Construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">Part1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">Part2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	d<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">Part3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Builder1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	result <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder1<span class="token punctuation">)</span> <span class="token function">Part1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token string">&quot;1&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder1<span class="token punctuation">)</span> <span class="token function">Part2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token string">&quot;2&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder1<span class="token punctuation">)</span> <span class="token function">Part3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder1<span class="token punctuation">)</span> <span class="token function">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Builder2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	result <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder2<span class="token punctuation">)</span> <span class="token function">Part1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder2<span class="token punctuation">)</span> <span class="token function">Part2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder2<span class="token punctuation">)</span> <span class="token function">Part3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b<span class="token punctuation">.</span>result <span class="token operator">+=</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder2<span class="token punctuation">)</span> <span class="token function">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> b<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> builder

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">TestBuilder1</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	builder <span class="token operator">:=</span> <span class="token operator">&amp;</span>Builder1<span class="token punctuation">{</span><span class="token punctuation">}</span>
	director <span class="token operator">:=</span> <span class="token function">NewDirector</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>
	director<span class="token punctuation">.</span><span class="token function">Construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	res <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token string">&quot;123&quot;</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;Builder1 fail expect 123 acture %s&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestBuilder2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	builder <span class="token operator">:=</span> <span class="token operator">&amp;</span>Builder2<span class="token punctuation">{</span><span class="token punctuation">}</span>
	director <span class="token operator">:=</span> <span class="token function">NewDirector</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span>
	director<span class="token punctuation">.</span><span class="token function">Construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	res <span class="token operator">:=</span> builder<span class="token punctuation">.</span><span class="token function">GetResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token number">6</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;Builder2 fail expect 6 acture %d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,7);function t(e,c){return p}var u=n(a,[["render",t],["__file","builder.html.vue"]]);export{u as default};
