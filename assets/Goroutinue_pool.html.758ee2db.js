import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="_1-goroutine\u6C60" tabindex="-1"><a class="header-anchor" href="#_1-goroutine\u6C60" aria-hidden="true">#</a> 1. Goroutine\u6C60</h1><h3 id="_1-1-1-worker-pool-goroutine\u6C60" tabindex="-1"><a class="header-anchor" href="#_1-1-1-worker-pool-goroutine\u6C60" aria-hidden="true">#</a> 1.1.1. worker pool\uFF08goroutine\u6C60\uFF09</h3><ul><li>\u672C\u8D28\u4E0A\u662F\u751F\u4EA7\u8005\u6D88\u8D39\u8005\u6A21\u578B</li><li>\u53EF\u4EE5\u6709\u6548\u63A7\u5236goroutine\u6570\u91CF\uFF0C\u9632\u6B62\u66B4\u6DA8</li><li>\u9700\u6C42\uFF1A <ul><li>\u8BA1\u7B97\u4E00\u4E2A\u6570\u5B57\u7684\u5404\u4E2A\u4F4D\u6570\u4E4B\u548C\uFF0C\u4F8B\u5982\u6570\u5B57123\uFF0C\u7ED3\u679C\u4E3A1+2+3=6</li><li>\u968F\u673A\u751F\u6210\u6570\u5B57\u8FDB\u884C\u8BA1\u7B97</li></ul></li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Job <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// id</span>
	Id <span class="token builtin">int</span>
	<span class="token comment">// \u9700\u8981\u8BA1\u7B97\u7684\u968F\u673A\u6570</span>
	RandNum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Result <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FD9\u91CC\u5FC5\u987B\u4F20\u5BF9\u8C61\u5B9E\u4F8B</span>
	job <span class="token operator">*</span>Job
	<span class="token comment">// \u6C42\u548C</span>
	sum <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	POOLSIZE <span class="token operator">=</span> <span class="token number">60</span>
	CHANSIZE <span class="token operator">=</span> <span class="token number">128</span>
	FORSIZE  <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9700\u89812\u4E2A\u7BA1\u9053</span>
	<span class="token comment">// 1.job\u7BA1\u9053</span>
	jobChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> CHANSIZE<span class="token punctuation">)</span>
	<span class="token comment">// 2.\u7ED3\u679C\u7BA1\u9053</span>
	resultChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">,</span> CHANSIZE<span class="token punctuation">)</span>
	<span class="token comment">// 3.\u521B\u5EFA\u5DE5\u4F5C\u6C60</span>
	<span class="token function">createPool</span><span class="token punctuation">(</span>POOLSIZE<span class="token punctuation">,</span> jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
	<span class="token comment">// 4.\u5F00\u4E2A\u6253\u5370\u7684\u534F\u7A0B</span>
	<span class="token keyword">go</span> <span class="token function">print</span><span class="token punctuation">(</span>resultChan<span class="token punctuation">)</span>

	<span class="token keyword">var</span> id <span class="token builtin">int</span>
	<span class="token comment">// \u5FAA\u73AF\u521B\u5EFAjob\uFF0C\u8F93\u5165\u5230\u7BA1\u9053</span>
	<span class="token keyword">for</span> id <span class="token operator">&lt;</span> FORSIZE <span class="token punctuation">{</span>
		id<span class="token operator">++</span>
		<span class="token comment">// \u751F\u6210\u968F\u673A\u6570</span>
		r_num <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		job <span class="token operator">:=</span> <span class="token operator">&amp;</span>Job<span class="token punctuation">{</span>
			Id<span class="token punctuation">:</span>      id<span class="token punctuation">,</span>
			RandNum<span class="token punctuation">:</span> r_num<span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
		jobChan <span class="token operator">&lt;-</span> job
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main should exit, but sleep&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">print</span><span class="token punctuation">(</span>resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u904D\u5386\u7ED3\u679C\u7BA1\u9053\u6253\u5370</span>
	<span class="token keyword">for</span> result <span class="token operator">:=</span> <span class="token keyword">range</span> resultChan <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;job id:%v randnum:%v result:%d\\n&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>
			result<span class="token punctuation">.</span>job<span class="token punctuation">.</span>RandNum<span class="token punctuation">,</span> result<span class="token punctuation">.</span>sum<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFA\u5DE5\u4F5C\u6C60</span>
<span class="token comment">// \u53C2\u65701\uFF1A\u5F00\u51E0\u4E2A\u534F\u7A0B</span>
<span class="token keyword">func</span> <span class="token function">createPool</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">,</span> jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u6839\u636E\u5F00\u534F\u7A0B\u4E2A\u6570\uFF0C\u53BB\u8DD1\u8FD0\u884C</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>jobChan <span class="token keyword">chan</span> <span class="token operator">*</span>Job<span class="token punctuation">,</span> resultChan <span class="token keyword">chan</span> <span class="token operator">*</span>Result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u6267\u884C\u8FD0\u7B97</span>
			<span class="token comment">// \u904D\u5386job\u7BA1\u9053\u6240\u6709\u6570\u636E\uFF0C\u8FDB\u884C\u76F8\u52A0</span>
			<span class="token keyword">for</span> job <span class="token operator">:=</span> <span class="token keyword">range</span> jobChan <span class="token punctuation">{</span>
				<span class="token comment">// \u968F\u673A\u6570\u63A5\u8FC7\u6765</span>
				r_num <span class="token operator">:=</span> job<span class="token punctuation">.</span>RandNum
				<span class="token comment">// \u968F\u673A\u6570\u6BCF\u4E00\u4F4D\u76F8\u52A0</span>
				<span class="token comment">// \u5B9A\u4E49\u8FD4\u56DE\u503C</span>
				<span class="token keyword">var</span> sum <span class="token builtin">int</span>
				<span class="token keyword">for</span> r_num <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
					tmp <span class="token operator">:=</span> r_num <span class="token operator">%</span> <span class="token number">10</span>
					sum <span class="token operator">+=</span> tmp
					r_num <span class="token operator">/=</span> <span class="token number">10</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// \u60F3\u8981\u7684\u7ED3\u679C\u662FResult</span>
				r <span class="token operator">:=</span> <span class="token operator">&amp;</span>Result<span class="token punctuation">{</span>
					job<span class="token punctuation">:</span> job<span class="token punctuation">,</span>
					sum<span class="token punctuation">:</span> sum<span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
				<span class="token comment">//\u8FD0\u7B97\u7ED3\u679C\u6254\u5230\u7BA1\u9053</span>
				resultChan <span class="token operator">&lt;-</span> r
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>jobChan<span class="token punctuation">,</span> resultChan<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br></div></div><p>\u8F93\u51FA</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>main should exit<span class="token punctuation">,</span> but sleep
job id<span class="token punctuation">:</span><span class="token number">43</span> randnum<span class="token punctuation">:</span><span class="token number">5018949295715050020</span> result<span class="token punctuation">:</span><span class="token number">72</span>
job id<span class="token punctuation">:</span><span class="token number">44</span> randnum<span class="token punctuation">:</span><span class="token number">2568779411109623071</span> result<span class="token punctuation">:</span><span class="token number">79</span>
job id<span class="token punctuation">:</span><span class="token number">45</span> randnum<span class="token punctuation">:</span><span class="token number">3902890183311134652</span> result<span class="token punctuation">:</span><span class="token number">69</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
job id<span class="token punctuation">:</span><span class="token number">33</span> randnum<span class="token punctuation">:</span><span class="token number">1460320609597786623</span> result<span class="token punctuation">:</span><span class="token number">84</span>
job id<span class="token punctuation">:</span><span class="token number">34</span> randnum<span class="token punctuation">:</span><span class="token number">5600924393587988459</span> result<span class="token punctuation">:</span><span class="token number">104</span>
job id<span class="token punctuation">:</span><span class="token number">40</span> randnum<span class="token punctuation">:</span><span class="token number">2781055864473387780</span> result<span class="token punctuation">:</span><span class="token number">93</span>
job id<span class="token punctuation">:</span><span class="token number">39</span> randnum<span class="token punctuation">:</span><span class="token number">6382800227808658932</span> result<span class="token punctuation">:</span><span class="token number">87</span>
job id<span class="token punctuation">:</span><span class="token number">36</span> randnum<span class="token punctuation">:</span><span class="token number">732830328053361739</span> result<span class="token punctuation">:</span><span class="token number">73</span>
job id<span class="token punctuation">:</span><span class="token number">37</span> randnum<span class="token punctuation">:</span><span class="token number">5486140987150761883</span> result<span class="token punctuation">:</span><span class="token number">91</span>
job id<span class="token punctuation">:</span><span class="token number">41</span> randnum<span class="token punctuation">:</span><span class="token number">1598098976185383115</span> result<span class="token punctuation">:</span><span class="token number">97</span>
job id<span class="token punctuation">:</span><span class="token number">38</span> randnum<span class="token punctuation">:</span><span class="token number">545291762129038907</span> result<span class="token punctuation">:</span><span class="token number">80</span>
job id<span class="token punctuation">:</span><span class="token number">42</span> randnum<span class="token punctuation">:</span><span class="token number">4990765271833742716</span> result<span class="token punctuation">:</span><span class="token number">91</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>`,4);function t(e,o){return p}var l=n(a,[["render",t],["__file","Goroutinue_pool.html.vue"]]);export{l as default};
