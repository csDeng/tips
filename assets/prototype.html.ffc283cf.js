import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u539F\u578B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a> \u539F\u578B\u6A21\u5F0F</h1><p>\u539F\u578B\u6A21\u5F0F\u4F7F\u5BF9\u8C61\u80FD\u590D\u5236\u81EA\u8EAB\uFF0C\u5E76\u4E14\u66B4\u9732\u5230\u63A5\u53E3\u4E2D\uFF0C\u4F7F\u5BA2\u6237\u7AEF\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u65F6\uFF0C\u4E0D\u77E5\u9053\u63A5\u53E3\u5B9E\u9645\u5BF9\u8C61\u7684\u60C5\u51B5\u4E0B\u751F\u6210\u65B0\u7684\u5BF9\u8C61\u3002</p><p>\u539F\u578B\u6A21\u5F0F\u914D\u5408\u539F\u578B\u7BA1\u7406\u5668\u4F7F\u7528\uFF0C\u4F7F\u5F97\u5BA2\u6237\u7AEF\u5728\u4E0D\u77E5\u9053\u5177\u4F53\u7C7B\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u63A5\u53E3\u7BA1\u7406\u5668\u5F97\u5230\u65B0\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u5305\u542B\u90E8\u5206\u9884\u8BBE\u5B9A\u914D\u7F6E\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> prototype

<span class="token comment">//Cloneable \u662F\u539F\u578B\u5BF9\u8C61\u9700\u8981\u5B9E\u73B0\u7684\u63A5\u53E3</span>
<span class="token keyword">type</span> Cloneable <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Cloneable
<span class="token punctuation">}</span>

<span class="token keyword">type</span> PrototypeManager <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	prototypes <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Cloneable
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPrototypeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>PrototypeManager <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>PrototypeManager<span class="token punctuation">{</span>
		prototypes<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>Cloneable<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PrototypeManager<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> Cloneable <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>prototypes<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PrototypeManager<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> prototype Cloneable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>prototypes<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> prototype
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> prototype

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">var</span> manager <span class="token operator">*</span>PrototypeManager

<span class="token keyword">type</span> Type1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Type1<span class="token punctuation">)</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Cloneable <span class="token punctuation">{</span>
	tc <span class="token operator">:=</span> <span class="token operator">*</span>t
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>tc
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Type2 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Type2<span class="token punctuation">)</span> <span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Cloneable <span class="token punctuation">{</span>
	tc <span class="token operator">:=</span> <span class="token operator">*</span>t
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>tc
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestClone</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	t1 <span class="token operator">:=</span> manager<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;t1&quot;</span><span class="token punctuation">)</span>

	t2 <span class="token operator">:=</span> t1<span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> t1 <span class="token operator">==</span> t2 <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;error! get clone not working&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestCloneFromManager</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> manager<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;t1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	t1 <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Type1<span class="token punctuation">)</span>
	<span class="token keyword">if</span> t1<span class="token punctuation">.</span>name <span class="token operator">!=</span> <span class="token string">&quot;type1&quot;</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	manager <span class="token operator">=</span> <span class="token function">NewPrototypeManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	t1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Type1<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;type1&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	manager<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;t1&quot;</span><span class="token punctuation">,</span> t1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>`,7);function t(e,o){return p}var l=n(a,[["render",t],["__file","prototype.html.vue"]]);export{l as default};
