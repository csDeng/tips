import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/image-20220505230207486.f2d922a0.png";const p={},t=s(`<h1 id="\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F</h1><p>\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u4F7F\u7528\u5B50\u7C7B\u7684\u65B9\u5F0F\u5EF6\u8FDF\u751F\u6210\u5BF9\u8C61\u5230\u5B50\u7C7B\u4E2D\u5B9E\u73B0\u3002</p><p>Go\u4E2D\u4E0D\u5B58\u5728\u7EE7\u627F \u6240\u4EE5\u4F7F\u7528\u533F\u540D\u7EC4\u5408\u6765\u5B9E\u73B0</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> factorymethod

<span class="token comment">//Operator \u662F\u88AB\u5C01\u88C5\u7684\u5B9E\u9645\u7C7B\u63A5\u53E3</span>
<span class="token keyword">type</span> Operator <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SetA</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token function">SetB</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//OperatorFactory \u662F\u5DE5\u5382\u63A5\u53E3</span>
<span class="token keyword">type</span> OperatorFactory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Operator
<span class="token punctuation">}</span>

<span class="token comment">//OperatorBase \u662FOperator \u63A5\u53E3\u5B9E\u73B0\u7684\u57FA\u7C7B\uFF0C\u5C01\u88C5\u516C\u7528\u65B9\u6CD5</span>
<span class="token keyword">type</span> OperatorBase <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">,</span> b <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">//SetA \u8BBE\u7F6E A</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>OperatorBase<span class="token punctuation">)</span> <span class="token function">SetA</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	o<span class="token punctuation">.</span>a <span class="token operator">=</span> a
<span class="token punctuation">}</span>

<span class="token comment">//SetB \u8BBE\u7F6E B</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>o <span class="token operator">*</span>OperatorBase<span class="token punctuation">)</span> <span class="token function">SetB</span><span class="token punctuation">(</span>b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	o<span class="token punctuation">.</span>b <span class="token operator">=</span> b
<span class="token punctuation">}</span>

<span class="token comment">//PlusOperatorFactory \u662F PlusOperator \u7684\u5DE5\u5382\u7C7B</span>
<span class="token keyword">type</span> PlusOperatorFactory <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>PlusOperatorFactory<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Operator <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>PlusOperator<span class="token punctuation">{</span>
		OperatorBase<span class="token punctuation">:</span> <span class="token operator">&amp;</span>OperatorBase<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//PlusOperator Operator \u7684\u5B9E\u9645\u52A0\u6CD5\u5B9E\u73B0</span>
<span class="token keyword">type</span> PlusOperator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>OperatorBase
<span class="token punctuation">}</span>

<span class="token comment">//Result \u83B7\u53D6\u7ED3\u679C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>o PlusOperator<span class="token punctuation">)</span> <span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> o<span class="token punctuation">.</span>a <span class="token operator">+</span> o<span class="token punctuation">.</span>b
<span class="token punctuation">}</span>

<span class="token comment">//MinusOperatorFactory \u662F MinusOperator \u7684\u5DE5\u5382\u7C7B</span>
<span class="token keyword">type</span> MinusOperatorFactory <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>MinusOperatorFactory<span class="token punctuation">)</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Operator <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>MinusOperator<span class="token punctuation">{</span>
		OperatorBase<span class="token punctuation">:</span> <span class="token operator">&amp;</span>OperatorBase<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//MinusOperator Operator \u7684\u5B9E\u9645\u51CF\u6CD5\u5B9E\u73B0</span>
<span class="token keyword">type</span> MinusOperator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>OperatorBase
<span class="token punctuation">}</span>

<span class="token comment">//Result \u83B7\u53D6\u7ED3\u679C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>o MinusOperator<span class="token punctuation">)</span> <span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> o<span class="token punctuation">.</span>a <span class="token operator">-</span> o<span class="token punctuation">.</span>b
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> factorymethod

<span class="token keyword">import</span> <span class="token string">&quot;testing&quot;</span>

<span class="token keyword">func</span> <span class="token function">compute</span><span class="token punctuation">(</span>factory OperatorFactory<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	op <span class="token operator">:=</span> factory<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	op<span class="token punctuation">.</span><span class="token function">SetA</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	op<span class="token punctuation">.</span><span class="token function">SetB</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	<span class="token keyword">return</span> op<span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestOperator</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> <span class="token punctuation">(</span>
		factory OperatorFactory
	<span class="token punctuation">)</span>

	factory <span class="token operator">=</span> PlusOperatorFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token function">compute</span><span class="token punctuation">(</span>factory<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;error with factory method pattern&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	factory <span class="token operator">=</span> MinusOperatorFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token function">compute</span><span class="token punctuation">(</span>factory<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;error with factory method pattern&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u6D4B\u8BD5\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7ED3\u679C" aria-hidden="true">#</a> \u6D4B\u8BD5\u7ED3\u679C</h2><p><img src="`+a+'" alt="image-20220505230207486"></p>',9);function e(o,c){return t}var r=n(p,[["render",e],["__file","factory_method.html.vue"]]);export{r as default};
