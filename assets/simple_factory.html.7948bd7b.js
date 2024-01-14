import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/image-20220505225428572.e05c5975.png";const p={},t=s(`<h1 id="\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</h1><p>go \u8BED\u8A00\u6CA1\u6709\u6784\u9020\u51FD\u6570\u4E00\u8BF4\uFF0C\u6240\u4EE5\u4E00\u822C\u4F1A\u5B9A\u4E49NewXXX\u51FD\u6570\u6765\u521D\u59CB\u5316\u76F8\u5173\u7C7B\u3002 NewXXX \u51FD\u6570\u8FD4\u56DE\u63A5\u53E3\u65F6\u5C31\u662F\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4Golang\u7684\u4E00\u822C\u63A8\u8350\u505A\u6CD5\u5C31\u662F\u7B80\u5355\u5DE5\u5382\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> simplefactory

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//API is interface</span>
<span class="token keyword">type</span> API <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewAPI return Api instance by type</span>
<span class="token keyword">func</span> <span class="token function">NewAPI</span><span class="token punctuation">(</span>t <span class="token builtin">int</span><span class="token punctuation">)</span> API <span class="token punctuation">{</span>
	<span class="token keyword">if</span> t <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>hiAPI<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> t <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>helloAPI<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">//hiAPI is one of API implement</span>
<span class="token keyword">type</span> hiAPI <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//Say hi to name</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>hiAPI<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Hi, %s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//HelloAPI is another API implement</span>
<span class="token keyword">type</span> helloAPI <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//Say hello to name</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>helloAPI<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, %s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> simplefactory

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token comment">//TestType1 test get hiapi with factory</span>
<span class="token keyword">func</span> <span class="token function">TestType1</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	api <span class="token operator">:=</span> <span class="token function">NewAPI</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	s <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> s <span class="token operator">!=</span> <span class="token string">&quot;Hi, Tom&quot;</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Type1 test fail&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestType2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	api <span class="token operator">:=</span> <span class="token function">NewAPI</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	s <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> s <span class="token operator">!=</span> <span class="token string">&quot;Hello, Tom&quot;</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;Type2 test fail&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u6D4B\u8BD5\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7ED3\u679C" aria-hidden="true">#</a> \u6D4B\u8BD5\u7ED3\u679C</h2><p><img src="`+a+'" alt="image-20220505225428572"></p>',8);function e(o,c){return t}var u=n(p,[["render",e],["__file","simple_factory.html.vue"]]);export{u as default};
