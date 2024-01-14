import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/image-20220516155257383.7ef82514.png",p="/assets/image-20220516161125694.00603074.png";const e={},t=s(`<h1 id="_1-runtime\u5305" tabindex="-1"><a class="header-anchor" href="#_1-runtime\u5305" aria-hidden="true">#</a> 1. runtime\u5305</h1><blockquote><p>Package runtime contains operations that interact with Go&#39;s runtime system, such as functions to control goroutines. It also includes the low-level type information used by the reflect package; see reflect&#39;s documentation for the programmable interface to the run-time type system.</p></blockquote><h2 id="_1-1-runtime-gosched" tabindex="-1"><a class="header-anchor" href="#_1-1-runtime-gosched" aria-hidden="true">#</a> 1.1. runtime.Gosched()</h2><p>\u8BA9\u51FACPU\u65F6\u95F4\u7247\uFF0C\u91CD\u65B0\u7B49\u5F85\u5B89\u6392\u4EFB\u52A1(\u5927\u6982\u610F\u601D\u5C31\u662F\u672C\u6765\u8BA1\u5212\u7684\u597D\u597D\u7684\u5468\u672B\u51FA\u53BB\u70E7\u70E4\uFF0C\u4F46\u662F\u4F60\u5988\u8BA9\u4F60\u53BB\u76F8\u4EB2,\u4E24\u79CD\u60C5\u51B5\u7B2C\u4E00\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u89C1\u9762\u5C31\u9EC4\u4E0D\u803D\u8BEF\u4F60\u7EE7\u7EED\u70E7\u70E4\uFF0C\u7B2C\u4E8C\u79CD\u60C5\u51B5\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u7279\u522B\u6162\uFF0C\u89C1\u9762\u5C31\u662F\u4F60\u4FAC\u6211\u4FAC\u7684\uFF0C\u803D\u8BEF\u4E86\u70E7\u70E4\uFF0C\u4F46\u662F\u8FD8\u998B\uFF0C\u5C31\u662F\u803D\u8BEF\u4E86\u70E7\u70E4\u4F60\u8FD8\u5F97\u53BB\u70E7\u70E4)</p><details class="custom-container details"><summary>\u5305\u4E2D\u6CE8\u91CA</summary><p>Gosched yields the processor, allowing other goroutines to run. It does not suspend the current goroutine, so execution resumes automatically.</p></details><details class="custom-container details"><ul><li>\u4F8B\u4E00</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token comment">/**
		* Gosched yields the processor, allowing other goroutines to run.
		It does not suspend the current goroutine, so execution resumes automatically.
		**/</span>
		runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;should exit, but sleep&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>world <span class="token number">0</span>
world <span class="token number">1</span>
world <span class="token number">2</span>
world <span class="token number">3</span>
world <span class="token number">4</span>
hello <span class="token number">0</span>
hello <span class="token number">1</span>
should exit, but <span class="token function">sleep</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u53EF\u4EE5\u770B\u5230\u8C03\u7528<code>runtime.Gosched()</code>\uFF0C\u534F\u7A0B\u5148\u8FD0\u884C\u4E86</p></blockquote><p>\u4E3A\u4E86\u5BF9\u6BD4\uFF0C\u6211\u4EEC\u628A<code>runtime.Gosched()</code>\u6CE8\u91CA\u4E4B\u540E\u8FD0\u884C\uFF0C\u53EF\u4EE5\u83B7\u5F97\u4EE5\u4E0B\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hello <span class="token number">0</span>
hello <span class="token number">1</span>
should exit, but <span class="token function">sleep</span>
world <span class="token number">0</span>
world <span class="token number">1</span>
world <span class="token number">2</span>
world <span class="token number">3</span>
world <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>\u53EF\u4EE5\u770B\u5230\u6CA1\u6709\u8C03\u7528<code>runtime.Gosched()</code>\u7684\u65F6\u5019\uFF0C\u534F\u7A0B\u7684\u8FD0\u884C\u7ED3\u679C\u662F\u5728<code>sleep</code>\u4E4B\u540E\u624D\u6253\u5370\u7684\u3002</p></blockquote><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u518D\u6CE8\u91CA\u6389<code>sleep</code>\uFF0C\u4F1A\u5F97\u5230\u4EE5\u4E0B\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hello <span class="token number">0</span>
hello <span class="token number">1</span>
should exit, but <span class="token function">sleep</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u53EF\u4EE5\u770B\u5230\u534F\u7A0B\u7684\u7ED3\u679C\u6CA1\u6709\u6253\u5370\uFF0C\u5C31\u5DF2\u7ECF\u7ED3\u675F\u4E86\u3002</p></blockquote><p>\u901A\u8FC7\u63A7\u5236\u53D8\u91CF\u6CD5\uFF0C\u6211\u4EEC\u53D1\u73B0\uFF0C<code>runtime.Gosched</code>\u786E\u5B9E\u53EF\u4EE5\u8BA9\u51FA\u65F6\u95F4\u7247\uFF0C\u4F46\u662F\u8C03\u7528\u4E00\u6B21\uFF0C\u8BA9\u51FA\u591A\u5C11\u6B21\u5462\uFF1F\u6211\u4EEC\u7528\u4F8B\u4E8C\u6765\u63A2\u8BA8\u4E00\u4E0B\u3002</p><ul><li>\u4F8B\u4E8C</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;f1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;f2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;f3&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main exit&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C</p><p><img src="`+a+`" alt="image-20220516155257383"></p><blockquote><p>\u591A\u6B21\u8FD0\u884C\uFF0C\u53D1\u73B0\u7ED3\u679C\u4E0D\u4E00\u81F4\uFF0C\u8BF4\u660E\uFF0C\u8C03\u7528<code>runtime.Gosched()</code>\uFF0C\u8BC1\u660E\u4E86\u5B98\u65B9\u7684\u6CE8\u91CA\uFF0C\u201DGosched\u8BA9\u51FA\u5904\u7406\u5668\uFF0C\u5141\u8BB8\u8FD0\u884C\u5176\u4ED6goroutines\u3002\u5B83\u4E0D\u4F1A\u6302\u8D77\u5F53\u524D\u7684goroutine\uFF0C\u56E0\u6B64\u4F1A\u81EA\u52A8\u7EE7\u7EED\u6267\u884C\u3002\u201C\uFF0C\u5BFC\u81F4\u8FD0\u884C\u7ED3\u679C\u4E0D\u4E00\u81F4\u3002</p></blockquote></details><h2 id="_1-2-runtime-goexit" tabindex="-1"><a class="header-anchor" href="#_1-2-runtime-goexit" aria-hidden="true">#</a> 1.2. runtime.Goexit()</h2><p>\u9000\u51FA\u5F53\u524D\u534F\u7A0B(\u4E00\u8FB9\u70E7\u70E4\u4E00\u8FB9\u76F8\u4EB2\uFF0C\u7A81\u7136\u53D1\u73B0\u76F8\u4EB2\u5BF9\u8C61\u592A\u4E11\u5F71\u54CD\u70E7\u70E4\uFF0C\u679C\u65AD\u8BA9\u5979\u6EDA\u86CB\uFF0C\u7136\u540E\u4E5F\u5C31\u6CA1\u6709\u7136\u540E\u4E86)</p><details class="custom-container details"><summary>\u5305\u4E2D\u6CE8\u91CA</summary><blockquote><p>Goexit terminates the goroutine that calls it. No other goroutine is affected. Goexit runs all deferred calls before terminating the goroutine. Because Goexit is not a panic, any recover calls in those deferred functions will return nil.</p><p>Calling Goexit from the main goroutine terminates that goroutine without func main returning. Since func main has not returned, the program continues execution of other goroutines. If all other goroutines exit, the program crashes.</p></blockquote></details><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A.defer&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B.defer&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// \u7ED3\u675F\u534F\u7A0B</span>
            runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C.defer&quot;</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>B.defer
A.defer
<span class="token builtin class-name">exit</span> status 0xc000013a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u4E0D\u77E5\u9053\u5927\u4F19\u6709\u6CA1\u6709\u6CE8\u610F\u5230<code>A</code>\u6CA1\u6709\u88AB\u6253\u5370\uFF1F</p><p><code>A</code> \u4E0D\u6253\u5370\u662F\u56E0\u4E3A\u5728\u51FD\u6570\u7684<code>IIFE(immediately Invoked Function Expression)</code>\u6267\u884C\u65F6\uFF0C\u8C03\u7528\u4E86<code>runtime.Goexit()</code>\uFF0C\u76F4\u63A5\u9000\u51FA\u4E86\uFF0C\u5F53\u524D\u534F\u7A0B</p></blockquote><p>\u6211\u4EEC\u7ED9<code>iife</code>\u5F00\u542F\u4E00\u4E2A\u534F\u7A0B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A.defer&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B.defer&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// \u7ED3\u675F\u534F\u7A0B</span>
			runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C.defer&quot;</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main exit, but sleep&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF0C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>main exit, but <span class="token function">sleep</span>
A
A.defer
B.defer
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h2 id="_1-3-runtime-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#_1-3-runtime-gomaxprocs" aria-hidden="true">#</a> 1.3. runtime.GOMAXPROCS</h2><details class="custom-container details"><summary>\u5305\u4E2D\u6CE8\u91CA</summary><p>GOMAXPROCS sets the maximum number of CPUs that can be executing simultaneously and returns the previous setting. It defaults to the value of runtime.NumCPU. If n &lt; 1, it does not change the current setting. This call will go away when the scheduler improves.</p></details><p>Go\u8FD0\u884C\u65F6\u7684\u8C03\u5EA6\u5668\u4F7F\u7528<code>GOMAXPROCS</code>\u53C2\u6570\u6765\u786E\u5B9A\u9700\u8981\u4F7F\u7528\u591A\u5C11\u4E2AOS\u7EBF\u7A0B\u6765\u540C\u65F6\u6267\u884CGo\u4EE3\u7801\u3002\u9ED8\u8BA4\u503C\u662F\u673A\u5668\u4E0A\u7684CPU\u6838\u5FC3\u6570\u3002\u4F8B\u5982\u5728\u4E00\u4E2A8\u6838\u5FC3\u7684\u673A\u5668\u4E0A\uFF0C\u8C03\u5EA6\u5668\u4F1A\u628AGo\u4EE3\u7801\u540C\u65F6\u8C03\u5EA6\u52308\u4E2AOS\u7EBF\u7A0B\u4E0A\uFF08GOMAXPROCS\u662Fm:n\u8C03\u5EA6\u4E2D\u7684n\uFF09\u3002</p><p>Go\u8BED\u8A00\u4E2D\u53EF\u4EE5\u901A\u8FC7<code>runtime.GOMAXPROCS()</code>\u51FD\u6570\u8BBE\u7F6E\u5F53\u524D\u7A0B\u5E8F\u5E76\u53D1\u65F6\u5360\u7528\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>Go1.5\u7248\u672C\u4E4B\u524D\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u5355\u6838\u5FC3\u6267\u884C\u3002Go1.5\u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u5168\u90E8\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u4EFB\u52A1\u5206\u914D\u5230\u4E0D\u540C\u7684CPU\u903B\u8F91\u6838\u5FC3\u4E0A\u5B9E\u73B0\u5E76\u884C\u7684\u6548\u679C\uFF0C\u8FD9\u91CC\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><details class="custom-container details"><summary>\u8F93\u51FA</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>B: <span class="token number">1</span>
B: <span class="token number">2</span>
B: <span class="token number">3</span>
B: <span class="token number">4</span>
B: <span class="token number">5</span>
B: <span class="token number">6</span>
B: <span class="token number">7</span>
B: <span class="token number">8</span>
B: <span class="token number">9</span>
A: <span class="token number">1</span>
A: <span class="token number">2</span>
A: <span class="token number">3</span>
A: <span class="token number">4</span>
A: <span class="token number">5</span>
A: <span class="token number">6</span>
A: <span class="token number">7</span>
A: <span class="token number">8</span>
A: <span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details><p>\u4E24\u4E2A\u4EFB\u52A1\u53EA\u6709\u4E00\u4E2A\u903B\u8F91\u6838\u5FC3\uFF0C\u6B64\u65F6\u662F\u505A\u5B8C\u4E00\u4E2A\u4EFB\u52A1\u518D\u505A\u53E6\u4E00\u4E2A\u4EFB\u52A1\u3002 \u5C06\u903B\u8F91\u6838\u5FC3\u6570\u8BBE\u4E3A2\uFF0C\u6B64\u65F6\u4E24\u4E2A\u4EFB\u52A1\u5E76\u884C\u6267\u884C\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><details class="custom-container details"><summary>\u8F93\u51FA</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>A: <span class="token number">1</span>
A: <span class="token number">2</span>
A: <span class="token number">3</span>
A: <span class="token number">4</span>
A: <span class="token number">5</span>
A: <span class="token number">6</span>
A: <span class="token number">7</span>
A: <span class="token number">8</span>
A: <span class="token number">9</span>
B: <span class="token number">1</span>
B: <span class="token number">2</span>
B: <span class="token number">3</span>
B: <span class="token number">4</span>
B: <span class="token number">5</span>
B: <span class="token number">6</span>
B: <span class="token number">7</span>
B: <span class="token number">8</span>
B: <span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u6D4B\u8BD5\uFF0C\u53D1\u73B0\u7ED3\u679C\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4(\u56E0\u4E3A\u662F\u6709\u4E24\u4E2Aos\u7EBF\u7A0B\u5E76\u884C\uFF0C\u6240\u4EE5\u7ED3\u679C\u4F1A\u51FA\u73B0\u4E0D\u4E00\u81F4)</li></ul><p><img src="`+p+'" alt="image-20220516161125694"></p></details><p>Go\u8BED\u8A00\u4E2D\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u548Cgoroutine\u7684\u5173\u7CFB\uFF1A</p><ul><li>1.\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u5BF9\u5E94\u7528\u6237\u6001\u591A\u4E2Agoroutine\u3002</li><li>2.go\u7A0B\u5E8F\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u3002</li><li>3.goroutine\u548COS\u7EBF\u7A0B\u662F\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u5373m:n\u3002</li></ul>',23);function o(c,l){return t}var i=n(e,[["render",o],["__file","runtime.html.vue"]]);export{i as default};
