import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><p>\u4F7F\u7528\u61D2\u60F0\u6A21\u5F0F\u7684\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F7F\u7528\u53CC\u91CD\u68C0\u67E5\u52A0\u9501\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token string">&quot;sync&quot;</span>

<span class="token comment">// Singleton \u662F\u5355\u4F8B\u6A21\u5F0F\u63A5\u53E3\uFF0C\u5BFC\u51FA\u7684</span>
<span class="token comment">// \u901A\u8FC7\u8BE5\u63A5\u53E3\u53EF\u4EE5\u907F\u514D GetInstance \u8FD4\u56DE\u4E00\u4E2A\u5305\u79C1\u6709\u7C7B\u578B\u7684\u6307\u9488</span>
<span class="token keyword">type</span> Singleton <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// singleton \u662F\u5355\u4F8B\u6A21\u5F0F\u7C7B\uFF0C\u5305\u79C1\u6709\u7684</span>
<span class="token keyword">type</span> singleton <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s singleton<span class="token punctuation">)</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	instance <span class="token operator">*</span>singleton
	once     sync<span class="token punctuation">.</span>Once
<span class="token punctuation">)</span>

<span class="token comment">//GetInstance \u7528\u4E8E\u83B7\u53D6\u5355\u4F8B\u6A21\u5F0F\u5BF9\u8C61</span>
<span class="token keyword">func</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Singleton <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		instance <span class="token operator">=</span> <span class="token operator">&amp;</span>singleton<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> instance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> singleton

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> parCount <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">func</span> <span class="token function">TestSingleton</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ins1 <span class="token operator">:=</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	ins2 <span class="token operator">:=</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> ins1 <span class="token operator">!=</span> ins2 <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;instance is not equal&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestParallelSingleton</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>parCount<span class="token punctuation">)</span>
	instances <span class="token operator">:=</span> <span class="token punctuation">[</span>parCount<span class="token punctuation">]</span>Singleton<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> parCount<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>index <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">//\u534F\u7A0B\u963B\u585E\uFF0C\u7B49\u5F85channel\u88AB\u5173\u95ED\u624D\u80FD\u7EE7\u7EED\u8FD0\u884C</span>
			<span class="token operator">&lt;-</span>start
			instances<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u5173\u95EDchannel\uFF0C\u6240\u6709\u534F\u7A0B\u540C\u65F6\u5F00\u59CB\u8FD0\u884C\uFF0C\u5B9E\u73B0\u5E76\u884C(parallel)</span>
	<span class="token function">close</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> parCount<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> instances<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> instances<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
			t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;instance is not equal&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,6);function t(e,o){return p}var l=n(a,[["render",t],["__file","singleton.html.vue"]]);export{l as default};
