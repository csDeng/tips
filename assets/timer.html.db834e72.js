import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},e=s(`<h1 id="\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u5B9A\u65F6\u5668</h1><ul><li>Timer\uFF1A\u65F6\u95F4\u5230\u4E86\uFF0C\u6267\u884C\u53EA\u6267\u884C1\u6B21</li><li>Ticker\uFF1A\u65F6\u95F4\u5230\u4E86\uFF0C\u591A\u6B21\u6267\u884C</li></ul><h2 id="timer" tabindex="-1"><a class="header-anchor" href="#timer" aria-hidden="true">#</a> Timer</h2><ul><li>\u57FA\u672C\u4F7F\u7528</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	* 1. \u521B\u5EFA\u5B9A\u65F6\u5668
	**/</span>
	<span class="token comment">/**
	NewTimer creates a new Timer that will send the current time on its channel
	after at least duration d
	*/</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T : %v \\r\\n&quot;</span><span class="token punctuation">,</span> timer<span class="token punctuation">,</span> timer<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>/05/17 <span class="token number">14</span>:16:23 <span class="token number">2022</span>-05-17 <span class="token number">14</span>:16:23.9679315 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+0.001999701
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:16:25.9945183 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+2.028580001
*time.Timer <span class="token builtin class-name">:</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span>0xc000048060 <span class="token punctuation">{</span><span class="token number">0</span> <span class="token number">1053841046621200</span> <span class="token number">0</span> 0x9c6520 0xc000048060 <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span> 
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:16:25 <span class="token number">2022</span>-05-17 <span class="token number">14</span>:16:25.9953948 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+2.029456501
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><ul><li>timer\u53EA\u80FD\u7528\u4E00\u6B21</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u65F6\u95F4\u5230&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// fmt.Println(&lt;-timer.C)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main exit&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>-05-17 <span class="token number">14</span>:17:32.8901259 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+1.014617701
\u65F6\u95F4\u5230
main <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u628A\u6CE8\u91CA\u6253\u5F00\u518D\u8FD0\u884C\u7684\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>-05-17 <span class="token number">14</span>:18:28.2956576 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+1.006551901
\u65F6\u95F4\u5230
fatal error: all goroutines are asleep - deadlock<span class="token operator">!</span>

goroutine <span class="token number">1</span> <span class="token punctuation">[</span>chan receive<span class="token punctuation">]</span>:
main.main<span class="token punctuation">(</span><span class="token punctuation">)</span>
        one.go:14 +0xfa
<span class="token builtin class-name">exit</span> status <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><ul><li>\u5EF6\u65F6</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1. sleep</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sleep&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;--------sleep-------&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 2. &lt;- time.C</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;-time.C&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;-------- &lt;-timer.C -------&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 3. &lt;- time.After</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;- time.After&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;--------after-------&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:21 <span class="token function">sleep</span> <span class="token number">2022</span>-05-17 <span class="token number">14</span>:19:21.6913174 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+0.002678801
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:23 --------sleep-------
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:23 <span class="token operator">&lt;</span>-time.C <span class="token number">2022</span>-05-17 <span class="token number">14</span>:19:23.7048594 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+2.016214301
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:25 -------- <span class="token operator">&lt;</span>-timer.C -------
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:25 <span class="token operator">&lt;</span>- time.After <span class="token number">2022</span>-05-17 <span class="token number">14</span>:19:25.7141672 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+4.025515701
<span class="token number">2022</span>/05/17 <span class="token number">14</span>:19:27 --------after-------
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><ul><li>Reset</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 5.\u91CD\u7F6E\u5B9A\u65F6\u5668</span>
	timer5 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	timer5<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>timer5<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">2022</span>-05-17 <span class="token number">14</span>:20:40.9176901 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+0.002613601
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:20:50.928108 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+10.013010401
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details><ul><li>Stop</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 4.\u505C\u6B62\u5B9A\u65F6\u5668</span>
	timer4 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u5668\u5F00\u59CB\u6267\u884C&quot;</span><span class="token punctuation">)</span>
		<span class="token operator">&lt;-</span>timer4<span class="token punctuation">.</span>C
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u65F6\u5668\u6267\u884C\u5B8C\u6BD5&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	b <span class="token operator">:=</span> timer4<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> b <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;timer4\u5DF2\u7ECF\u5173\u95ED&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>timer4\u5DF2\u7ECF\u5173\u95ED
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><h2 id="ticker" tabindex="-1"><a class="header-anchor" href="#ticker" aria-hidden="true">#</a> Ticker</h2><ul><li>\u8DDFtimer\u7684\u7528\u6CD5\u5DEE\u4E0D\u591A</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u83B7\u53D6ticker\u5BF9\u8C61</span>
	ticker <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTicker</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	i <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token comment">// \u5B50\u534F\u7A0B</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token comment">//&lt;-ticker.C</span>
			i<span class="token operator">++</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ticker<span class="token punctuation">.</span>C<span class="token punctuation">)</span>
			<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
				<span class="token comment">//\u505C\u6B62</span>
				ticker<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main should exit, but sleep&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>main should exit, but <span class="token function">sleep</span>
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:21:43.6481633 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+2.009463901
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:21:45.6518969 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+4.013193301
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:21:47.6512444 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+6.012536601
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:21:49.6423737 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+8.003661701
<span class="token number">2022</span>-05-17 <span class="token number">14</span>:21:51.656046 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+10.017329801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h2 id="\u5B9A\u65F6\u5668\u7684\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5668\u7684\u6E90\u7801" aria-hidden="true">#</a> \u5B9A\u65F6\u5668\u7684\u6E90\u7801</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>\u73AF\u5883</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token operator">&gt;</span> <span class="token keyword">go</span> version
<span class="token keyword">go</span> version go1<span class="token punctuation">.</span><span class="token number">17.7</span> windows<span class="token operator">/</span>amd64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h3 id="timer-1" tabindex="-1"><a class="header-anchor" href="#timer-1" aria-hidden="true">#</a> timer</h3><details class="custom-container details"><ul><li>\u90E8\u5206\u5176\u4ED6\u5305\u7684\u51FD\u6570</li></ul><blockquote><ul><li>runtimeNano : runtimeNano returns the current value of the runtime clock in nanoseconds.</li></ul></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Copyright 2009 The Go Authors. All rights reserved.</span>
<span class="token comment">// Use of this source code is governed by a BSD-style</span>
<span class="token comment">// license that can be found in the LICENSE file.</span>

<span class="token keyword">package</span> time

<span class="token comment">// Sleep pauses the current goroutine for at least the duration d.</span>
<span class="token comment">// A negative or zero duration causes Sleep to return immediately.</span>
<span class="token keyword">func</span> <span class="token function">Sleep</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span>

<span class="token comment">// Interface to timers implemented in package runtime.</span>
<span class="token comment">// Must be in sync with ../runtime/time.go:/^type timer</span>
<span class="token keyword">type</span> runtimeTimer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	pp       <span class="token builtin">uintptr</span>
	when     <span class="token builtin">int64</span>
	period   <span class="token builtin">int64</span>
	f        <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token comment">// NOTE: must not be closure</span>
	arg      <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	seq      <span class="token builtin">uintptr</span>
	nextwhen <span class="token builtin">int64</span>
	status   <span class="token builtin">uint32</span>
<span class="token punctuation">}</span>

<span class="token comment">// when is a helper function for setting the &#39;when&#39; field of a runtimeTimer.</span>
<span class="token comment">// It returns what the time will be, in nanoseconds, Duration d in the future.</span>
<span class="token comment">// If d is negative, it is ignored. If the returned value would be less than</span>
<span class="token comment">// zero because of an overflow, MaxInt64 is returned.</span>
<span class="token keyword">func</span> <span class="token function">when</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token builtin">int64</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> d <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">runtimeNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	t <span class="token operator">:=</span> <span class="token function">runtimeNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">int64</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	<span class="token keyword">if</span> t <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// N.B. runtimeNano() and d are always positive, so addition</span>
		<span class="token comment">// (including overflow) will never result in t == 0.</span>
		t <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">63</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// math.MaxInt64</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token operator">*</span>runtimeTimer<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">stopTimer</span><span class="token punctuation">(</span><span class="token operator">*</span>runtimeTimer<span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token keyword">func</span> <span class="token function">resetTimer</span><span class="token punctuation">(</span><span class="token operator">*</span>runtimeTimer<span class="token punctuation">,</span> <span class="token builtin">int64</span><span class="token punctuation">)</span> <span class="token builtin">bool</span>
<span class="token keyword">func</span> <span class="token function">modTimer</span><span class="token punctuation">(</span>t <span class="token operator">*</span>runtimeTimer<span class="token punctuation">,</span> when<span class="token punctuation">,</span> period <span class="token builtin">int64</span><span class="token punctuation">,</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">uintptr</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> seq <span class="token builtin">uintptr</span><span class="token punctuation">)</span>

<span class="token comment">// The Timer type represents a single event.</span>
<span class="token comment">// When the Timer expires, the current time will be sent on C,</span>
<span class="token comment">// unless the Timer was created by AfterFunc.</span>
<span class="token comment">// A Timer must be created with NewTimer or AfterFunc.</span>
<span class="token keyword">type</span> Timer <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	C <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time
	r runtimeTimer
<span class="token punctuation">}</span>

<span class="token comment">// Stop prevents the Timer from firing.</span>
<span class="token comment">// It returns true if the call stops the timer, false if the timer has already expired or been stopped.</span>
<span class="token comment">// Stop does not close the channel, to prevent a read from the channel succeeding incorrectly.</span>
<span class="token comment">//</span>
<span class="token comment">// To ensure the channel is empty after a call to Stop, check the</span>
<span class="token comment">// return value and drain the channel.</span>
<span class="token comment">// For example, assuming the program has not received from t.C already:</span>
<span class="token comment">//</span>
<span class="token comment">// 	if !t.Stop() {</span>
<span class="token comment">// 		&lt;-t.C</span>
<span class="token comment">// 	}</span>
<span class="token comment">//</span>
<span class="token comment">// This cannot be done concurrent to other receives from the Timer&#39;s channel or other calls to the Timer&#39;s Stop method.</span>
<span class="token comment">//</span>
<span class="token comment">// For a timer created with AfterFunc(d, f), if t.Stop returns false, then the timer</span>
<span class="token comment">// has already expired and the function f has been started in its own goroutine;</span>
<span class="token comment">// Stop does not wait for f to complete before returning.</span>
<span class="token comment">// If the caller needs to know whether f is completed, it must coordinate</span>
<span class="token comment">// with f explicitly.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Timer<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>f <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;time: Stop called on uninitialized Timer&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">stopTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewTimer creates a new Timer that will send</span>
<span class="token comment">// the current time on its channel after at least duration d.</span>
<span class="token keyword">func</span> <span class="token function">NewTimer</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Timer <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Time<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Timer<span class="token punctuation">{</span>
		C<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
		r<span class="token punctuation">:</span> runtimeTimer<span class="token punctuation">{</span>
			when<span class="token punctuation">:</span> <span class="token function">when</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span>
			f<span class="token punctuation">:</span>    sendTime<span class="token punctuation">,</span>
			arg<span class="token punctuation">:</span>  c<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token comment">// Reset changes the timer to expire after duration d.</span>
<span class="token comment">// It returns true if the timer had been active, false if the timer had</span>
<span class="token comment">// expired or been stopped.</span>
<span class="token comment">//</span>
<span class="token comment">// For a Timer created with NewTimer, Reset should be invoked only on</span>
<span class="token comment">// stopped or expired timers with drained channels.</span>
<span class="token comment">//</span>
<span class="token comment">// If a program has already received a value from t.C, the timer is known</span>
<span class="token comment">// to have expired and the channel drained, so t.Reset can be used directly.</span>
<span class="token comment">// If a program has not yet received a value from t.C, however,</span>
<span class="token comment">// the timer must be stopped and\u2014if Stop reports that the timer expired</span>
<span class="token comment">// before being stopped\u2014the channel explicitly drained:</span>
<span class="token comment">//</span>
<span class="token comment">// 	if !t.Stop() {</span>
<span class="token comment">// 		&lt;-t.C</span>
<span class="token comment">// 	}</span>
<span class="token comment">// 	t.Reset(d)</span>
<span class="token comment">//</span>
<span class="token comment">// This should not be done concurrent to other receives from the Timer&#39;s</span>
<span class="token comment">// channel.</span>
<span class="token comment">//</span>
<span class="token comment">// Note that it is not possible to use Reset&#39;s return value correctly, as there</span>
<span class="token comment">// is a race condition between draining the channel and the new timer expiring.</span>
<span class="token comment">// Reset should always be invoked on stopped or expired channels, as described above.</span>
<span class="token comment">// The return value exists to preserve compatibility with existing programs.</span>
<span class="token comment">//</span>
<span class="token comment">// For a Timer created with AfterFunc(d, f), Reset either reschedules</span>
<span class="token comment">// when f will run, in which case Reset returns true, or schedules f</span>
<span class="token comment">// to run again, in which case it returns false.</span>
<span class="token comment">// When Reset returns false, Reset neither waits for the prior f to</span>
<span class="token comment">// complete before returning nor does it guarantee that the subsequent</span>
<span class="token comment">// goroutine running f does not run concurrently with the prior</span>
<span class="token comment">// one. If the caller needs to know whether the prior execution of</span>
<span class="token comment">// f is completed, it must coordinate with f explicitly.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Timer<span class="token punctuation">)</span> <span class="token function">Reset</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>f <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;time: Reset called on uninitialized Timer&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	w <span class="token operator">:=</span> <span class="token function">when</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token function">resetTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">,</span> w<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sendTime</span><span class="token punctuation">(</span>c <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> seq <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Non-blocking send of time on c.</span>
	<span class="token comment">// Used in NewTimer, it cannot block anyway (buffer).</span>
	<span class="token comment">// Used in NewTicker, dropping sends on the floor is</span>
	<span class="token comment">// the desired behavior when the reader gets behind,</span>
	<span class="token comment">// because the sends are periodic.</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> c<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Time<span class="token punctuation">)</span> <span class="token operator">&lt;-</span> <span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// After waits for the duration to elapse and then sends the current time</span>
<span class="token comment">// on the returned channel.</span>
<span class="token comment">// It is equivalent to NewTimer(d).C.</span>
<span class="token comment">// The underlying Timer is not recovered by the garbage collector</span>
<span class="token comment">// until the timer fires. If efficiency is a concern, use NewTimer</span>
<span class="token comment">// instead and call Timer.Stop if the timer is no longer needed.</span>
<span class="token keyword">func</span> <span class="token function">After</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">NewTimer</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">.</span>C
<span class="token punctuation">}</span>

<span class="token comment">// AfterFunc waits for the duration to elapse and then calls f</span>
<span class="token comment">// in its own goroutine. It returns a Timer that can</span>
<span class="token comment">// be used to cancel the call using its Stop method.</span>
<span class="token keyword">func</span> <span class="token function">AfterFunc</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">,</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span>Timer <span class="token punctuation">{</span>
	t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Timer<span class="token punctuation">{</span>
		r<span class="token punctuation">:</span> runtimeTimer<span class="token punctuation">{</span>
			when<span class="token punctuation">:</span> <span class="token function">when</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span>
			f<span class="token punctuation">:</span>    goFunc<span class="token punctuation">,</span>
			arg<span class="token punctuation">:</span>  f<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">goFunc</span><span class="token punctuation">(</span>arg <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> seq <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> arg<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br></div></div></details><h3 id="ticker-1" tabindex="-1"><a class="header-anchor" href="#ticker-1" aria-hidden="true">#</a> ticker</h3><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// Copyright 2009 The Go Authors. All rights reserved.</span>
<span class="token comment">// Use of this source code is governed by a BSD-style</span>
<span class="token comment">// license that can be found in the LICENSE file.</span>

<span class="token keyword">package</span> time

<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>

<span class="token comment">// A Ticker holds a channel that delivers \`\`ticks&#39;&#39; of a clock</span>
<span class="token comment">// at intervals.</span>
<span class="token keyword">type</span> Ticker <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	C <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token comment">// The channel on which the ticks are delivered.</span>
	r runtimeTimer
<span class="token punctuation">}</span>

<span class="token comment">// NewTicker returns a new Ticker containing a channel that will send</span>
<span class="token comment">// the time on the channel after each tick. The period of the ticks is</span>
<span class="token comment">// specified by the duration argument. The ticker will adjust the time</span>
<span class="token comment">// interval or drop ticks to make up for slow receivers.</span>
<span class="token comment">// The duration d must be greater than zero; if not, NewTicker will</span>
<span class="token comment">// panic. Stop the ticker to release associated resources.</span>
<span class="token keyword">func</span> <span class="token function">NewTicker</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Ticker <span class="token punctuation">{</span>
	<span class="token keyword">if</span> d <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;non-positive interval for NewTicker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// Give the channel a 1-element time buffer.</span>
	<span class="token comment">// If the client falls behind while reading, we drop ticks</span>
	<span class="token comment">// on the floor until the client catches up.</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> Time<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	t <span class="token operator">:=</span> <span class="token operator">&amp;</span>Ticker<span class="token punctuation">{</span>
		C<span class="token punctuation">:</span> c<span class="token punctuation">,</span>
		r<span class="token punctuation">:</span> runtimeTimer<span class="token punctuation">{</span>
			when<span class="token punctuation">:</span>   <span class="token function">when</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span>
			period<span class="token punctuation">:</span> <span class="token function">int64</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span>
			f<span class="token punctuation">:</span>      sendTime<span class="token punctuation">,</span>
			arg<span class="token punctuation">:</span>    c<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">startTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> t
<span class="token punctuation">}</span>

<span class="token comment">// Stop turns off a ticker. After Stop, no more ticks will be sent.</span>
<span class="token comment">// Stop does not close the channel, to prevent a concurrent goroutine</span>
<span class="token comment">// reading from the channel from seeing an erroneous &quot;tick&quot;.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Ticker<span class="token punctuation">)</span> <span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">stopTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Reset stops a ticker and resets its period to the specified duration.</span>
<span class="token comment">// The next tick will arrive after the new period elapses.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Ticker<span class="token punctuation">)</span> <span class="token function">Reset</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>f <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;time: Reset called on uninitialized Ticker&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token function">modTimer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>t<span class="token punctuation">.</span>r<span class="token punctuation">,</span> <span class="token function">when</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">int64</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>f<span class="token punctuation">,</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>arg<span class="token punctuation">,</span> t<span class="token punctuation">.</span>r<span class="token punctuation">.</span>seq<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Tick is a convenience wrapper for NewTicker providing access to the ticking</span>
<span class="token comment">// channel only. While Tick is useful for clients that have no need to shut down</span>
<span class="token comment">// the Ticker, be aware that without a way to shut it down the underlying</span>
<span class="token comment">// Ticker cannot be recovered by the garbage collector; it &quot;leaks&quot;.</span>
<span class="token comment">// Unlike NewTicker, Tick will return nil if d &lt;= 0.</span>
<span class="token keyword">func</span> <span class="token function">Tick</span><span class="token punctuation">(</span>d Duration<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> Time <span class="token punctuation">{</span>
	<span class="token keyword">if</span> d <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">NewTicker</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">.</span>C
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div></details>`,22);function p(t,o){return e}var l=n(a,[["render",p],["__file","timer.html.vue"]]);export{l as default};
