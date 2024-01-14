import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},p=s(`<h1 id="_1-goroutine" tabindex="-1"><a class="header-anchor" href="#_1-goroutine" aria-hidden="true">#</a> 1. Goroutine</h1><p>\u5728java/c++\u4E2D\u6211\u4EEC\u8981\u5B9E\u73B0\u5E76\u53D1\u7F16\u7A0B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u901A\u5E38\u9700\u8981\u81EA\u5DF1\u7EF4\u62A4\u4E00\u4E2A\u7EBF\u7A0B\u6C60\uFF0C\u5E76\u4E14\u9700\u8981\u81EA\u5DF1\u53BB\u5305\u88C5\u4E00\u4E2A\u53C8\u4E00\u4E2A\u7684\u4EFB\u52A1\uFF0C\u540C\u65F6\u9700\u8981\u81EA\u5DF1\u53BB\u8C03\u5EA6\u7EBF\u7A0B\u6267\u884C\u4EFB\u52A1\u5E76\u7EF4\u62A4\u4E0A\u4E0B\u6587\u5207\u6362\uFF0C\u8FD9\u4E00\u5207\u901A\u5E38\u4F1A\u8017\u8D39\u7A0B\u5E8F\u5458\u5927\u91CF\u7684\u5FC3\u667A\u3002\u90A3\u4E48\u80FD\u4E0D\u80FD\u6709\u4E00\u79CD\u673A\u5236\uFF0C\u7A0B\u5E8F\u5458\u53EA\u9700\u8981\u5B9A\u4E49\u5F88\u591A\u4E2A\u4EFB\u52A1\uFF0C\u8BA9\u7CFB\u7EDF\u53BB\u5E2E\u52A9\u6211\u4EEC\u628A\u8FD9\u4E9B\u4EFB\u52A1\u5206\u914D\u5230CPU\u4E0A\u5B9E\u73B0\u5E76\u53D1\u6267\u884C\u5462\uFF1F</p><p>Go\u8BED\u8A00\u4E2D\u7684goroutine\u5C31\u662F\u8FD9\u6837\u4E00\u79CD\u673A\u5236\uFF0Cgoroutine\u7684\u6982\u5FF5\u7C7B\u4F3C\u4E8E\u7EBF\u7A0B\uFF0C\u4F46 goroutine\u662F\u7531Go\u7684\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u8C03\u5EA6\u548C\u7BA1\u7406\u7684\u3002Go\u7A0B\u5E8F\u4F1A\u667A\u80FD\u5730\u5C06 goroutine \u4E2D\u7684\u4EFB\u52A1\u5408\u7406\u5730\u5206\u914D\u7ED9\u6BCF\u4E2ACPU\u3002Go\u8BED\u8A00\u4E4B\u6240\u4EE5\u88AB\u79F0\u4E3A\u73B0\u4EE3\u5316\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5C31\u662F\u56E0\u4E3A\u5B83\u5728\u8BED\u8A00\u5C42\u9762\u5DF2\u7ECF\u5185\u7F6E\u4E86\u8C03\u5EA6\u548C\u4E0A\u4E0B\u6587\u5207\u6362\u7684\u673A\u5236\u3002</p><p>\u5728Go\u8BED\u8A00\u7F16\u7A0B\u4E2D\u4F60\u4E0D\u9700\u8981\u53BB\u81EA\u5DF1\u5199\u8FDB\u7A0B\u3001\u7EBF\u7A0B\u3001\u534F\u7A0B\uFF0C\u4F60\u7684\u6280\u80FD\u5305\u91CC\u53EA\u6709\u4E00\u4E2A\u6280\u80FD\u2013goroutine\uFF0C\u5F53\u4F60\u9700\u8981\u8BA9\u67D0\u4E2A\u4EFB\u52A1\u5E76\u53D1\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4F60\u53EA\u9700\u8981\u628A\u8FD9\u4E2A\u4EFB\u52A1\u5305\u88C5\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F00\u542F\u4E00\u4E2Agoroutine\u53BB\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5C31\u662F\u8FD9\u4E48\u7B80\u5355\u7C97\u66B4\u3002</p><h2 id="\u4F7F\u7528goroutine" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528goroutine" aria-hidden="true">#</a> \u4F7F\u7528goroutine</h2><p>Go\u8BED\u8A00\u4E2D\u4F7F\u7528goroutine\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u8C03\u7528\u51FD\u6570\u7684\u65F6\u5019\u5728\u524D\u9762\u52A0\u4E0Ago\u5173\u952E\u5B57\uFF0C\u5C31\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u51FD\u6570\u521B\u5EFA\u4E00\u4E2Agoroutine\u3002</p><p>\u4E00\u4E2Agoroutine\u5FC5\u5B9A\u5BF9\u5E94\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2Agoroutine\u53BB\u6267\u884C\u76F8\u540C\u7684\u51FD\u6570\u3002</p><h2 id="\u542F\u52A8\u5355\u4E2Agoroutine" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5355\u4E2Agoroutine" aria-hidden="true">#</a> \u542F\u52A8\u5355\u4E2Agoroutine</h2><p>\u542F\u52A8goroutine\u7684\u65B9\u5F0F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u8C03\u7528\u7684\u51FD\u6570\uFF08\u666E\u901A\u51FD\u6570\u548C\u533F\u540D\u51FD\u6570\uFF09\u524D\u9762\u52A0\u4E0A\u4E00\u4E2Ago\u5173\u952E\u5B57\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u4E2A\u793A\u4F8B\u4E2Dhello\u51FD\u6570\u548C\u4E0B\u9762\u7684\u8BED\u53E5\u662F\u4E32\u884C\u7684\uFF0C\u6267\u884C\u7684\u7ED3\u679C\u662F\u6253\u5370\u5B8CHello Goroutine!\u540E\u6253\u5370main goroutine done!\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5728\u8C03\u7528hello\u51FD\u6570\u524D\u9762\u52A0\u4E0A\u5173\u952E\u5B57go\uFF0C\u4E5F\u5C31\u662F\u542F\u52A8\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u8FD9\u4E2A\u51FD\u6570\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u53E6\u5916\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u51FD\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8FD9\u4E00\u6B21\u7684\u6267\u884C\u7ED3\u679C\u53EA\u6253\u5370\u4E86main goroutine done!\uFF0C\u5E76\u6CA1\u6709\u6253\u5370Hello Goroutine!\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u5728\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0CGo\u7A0B\u5E8F\u5C31\u4F1A\u4E3Amain()\u51FD\u6570\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u7684goroutine\u3002</p><p>\u5F53main()\u51FD\u6570\u8FD4\u56DE\u7684\u65F6\u5019\u8BE5goroutine\u5C31\u7ED3\u675F\u4E86\uFF0C\u6240\u6709\u5728main()\u51FD\u6570\u4E2D\u542F\u52A8\u7684goroutine\u4F1A\u4E00\u540C\u7ED3\u675F\uFF0Cmain\u51FD\u6570\u6240\u5728\u7684goroutine\u5C31\u50CF\u662F\u6743\u5229\u7684\u6E38\u620F\u4E2D\u7684\u591C\u738B\uFF0C\u5176\u4ED6\u7684goroutine\u90FD\u662F\u5F02\u9B3C\uFF0C\u591C\u738B\u4E00\u6B7B\u5B83\u8F6C\u5316\u7684\u90A3\u4E9B\u5F02\u9B3C\u4E5F\u5C31\u5168\u90E8GG\u4E86\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u8981\u60F3\u529E\u6CD5\u8BA9main\u51FD\u6570\u7B49\u4E00\u7B49hello\u51FD\u6570\uFF0C\u6700\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u5F0F\u5C31\u662Ftime.Sleep\u4E86\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u53E6\u5916\u4E00\u4E2Agoroutine\u53BB\u6267\u884Chello\u51FD\u6570</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine done!&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\u4F60\u4F1A\u53D1\u73B0\uFF0C\u8FD9\u4E00\u6B21\u5148\u6253\u5370main goroutine done!\uFF0C\u7136\u540E\u7D27\u63A5\u7740\u6253\u5370Hello Goroutine!\u3002</p><p>\u9996\u5148\u4E3A\u4EC0\u4E48\u4F1A\u5148\u6253\u5370main goroutine done!\u662F\u56E0\u4E3A\u6211\u4EEC\u5728\u521B\u5EFA\u65B0\u7684goroutine\u7684\u65F6\u5019\u9700\u8981\u82B1\u8D39\u4E00\u4E9B\u65F6\u95F4\uFF0C\u800C\u6B64\u65F6main\u51FD\u6570\u6240\u5728\u7684goroutine\u662F\u7EE7\u7EED\u6267\u884C\u7684\u3002</p><h2 id="\u542F\u52A8\u591A\u4E2Agoroutine" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u591A\u4E2Agoroutine" aria-hidden="true">#</a> \u542F\u52A8\u591A\u4E2Agoroutine</h2><p>\u5728Go\u8BED\u8A00\u4E2D\u5B9E\u73B0\u5E76\u53D1\u5C31\u662F\u8FD9\u6837\u7B80\u5355\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u542F\u52A8\u591A\u4E2Agoroutine\u3002\u8BA9\u6211\u4EEC\u518D\u6765\u4E00\u4E2A\u4F8B\u5B50\uFF1A \uFF08\u8FD9\u91CC\u4F7F\u7528\u4E86sync.WaitGroup\u6765\u5B9E\u73B0goroutine\u7684\u540C\u6B65\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">hello</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// goroutine\u7ED3\u675F\u5C31\u767B\u8BB0-1</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Goroutine!&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u4E00\u4E2Agoroutine\u5C31\u767B\u8BB0+1</span>
        <span class="token keyword">go</span> <span class="token function">hello</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u7B49\u5F85\u6240\u6709\u767B\u8BB0\u7684goroutine\u90FD\u7ED3\u675F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u591A\u6B21\u6267\u884C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u4F1A\u53D1\u73B0\u6BCF\u6B21\u6253\u5370\u7684\u6570\u5B57\u7684\u987A\u5E8F\u90FD\u4E0D\u4E00\u81F4\u3002\u8FD9\u662F\u56E0\u4E3A10\u4E2Agoroutine\u662F\u5E76\u53D1\u6267\u884C\u7684\uFF0C\u800Cgoroutine\u7684\u8C03\u5EA6\u662F\u968F\u673A\u7684\u3002</p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><ul><li>\u5982\u679C\u4E3B\u534F\u7A0B\u9000\u51FA\u4E86\uFF0C\u5176\u4ED6\u4EFB\u52A1\u8FD8\u6267\u884C\u5417\uFF08\u8FD0\u884C\u4E0B\u9762\u7684\u4EE3\u7801\u6D4B\u8BD5\u4E00\u4E0B\u5427\uFF09</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5408\u8D77\u6765\u5199</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">:=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            i<span class="token operator">++</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;new goroutine: i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine: i = %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>main goroutine: i <span class="token operator">=</span> <span class="token number">1</span>
new goroutine: i <span class="token operator">=</span> <span class="token number">1</span>
new goroutine: i <span class="token operator">=</span> <span class="token number">2</span>
main goroutine: i <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u53EF\u4EE5\u8BC1\u5B9E\uFF0C\u4E3B\u534F\u7A0B\u9000\u51FA\u4E4B\u540E\uFF0C\u5176\u4ED6\u4EFB\u52A1\u4E5F\u4E00\u5E76\u5173\u95ED\u3002</p></blockquote><h2 id="goroutine\u4E0E\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#goroutine\u4E0E\u7EBF\u7A0B" aria-hidden="true">#</a> goroutine\u4E0E\u7EBF\u7A0B</h2><h3 id="\u53EF\u589E\u957F\u7684\u6808" tabindex="-1"><a class="header-anchor" href="#\u53EF\u589E\u957F\u7684\u6808" aria-hidden="true">#</a> \u53EF\u589E\u957F\u7684\u6808</h3><p>OS\u7EBF\u7A0B\uFF08\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\uFF09\u4E00\u822C\u90FD\u6709\u56FA\u5B9A\u7684\u6808\u5185\u5B58\uFF08\u901A\u5E38\u4E3A2MB\uFF09,\u4E00\u4E2Agoroutine\u7684\u6808\u5728\u5176\u751F\u547D\u5468\u671F\u5F00\u59CB\u65F6\u53EA\u6709\u5F88\u5C0F\u7684\u6808\uFF08\u5178\u578B\u60C5\u51B5\u4E0B2KB\uFF09\uFF0Cgoroutine\u7684\u6808\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u4ED6\u53EF\u4EE5\u6309\u9700\u589E\u5927\u548C\u7F29\u5C0F\uFF0Cgoroutine\u7684\u6808\u5927\u5C0F\u9650\u5236\u53EF\u4EE5\u8FBE\u52301GB\uFF0C\u867D\u7136\u6781\u5C11\u4F1A\u7528\u5230\u8FD9\u4E2A\u5927\u3002\u6240\u4EE5\u5728Go\u8BED\u8A00\u4E2D\u4E00\u6B21\u521B\u5EFA\u5341\u4E07\u5DE6\u53F3\u7684goroutine\u4E5F\u662F\u53EF\u4EE5\u7684\u3002</p><h3 id="goroutine\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#goroutine\u8C03\u5EA6" aria-hidden="true">#</a> goroutine\u8C03\u5EA6</h3><p>GPM\u662FGo\u8BED\u8A00\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u5C42\u9762\u7684\u5B9E\u73B0\uFF0C\u662Fgo\u8BED\u8A00\u81EA\u5DF1\u5B9E\u73B0\u7684\u4E00\u5957\u8C03\u5EA6\u7CFB\u7EDF\u3002\u533A\u522B\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u8C03\u5EA6OS\u7EBF\u7A0B\u3002</p><p>\u5355\u4ECE\u7EBF\u7A0B\u8C03\u5EA6\u8BB2\uFF0CGo\u8BED\u8A00\u76F8\u6BD4\u8D77\u5176\u4ED6\u8BED\u8A00\u7684\u4F18\u52BF\u5728\u4E8EOS\u7EBF\u7A0B\u662F\u7531OS\u5185\u6838\u6765\u8C03\u5EA6\u7684\uFF0C\u800Cgoroutine\u5219\u662F\u7531Go\u8FD0\u884C\u65F6\uFF08runtime\uFF09\u81EA\u5DF1\u7684\u8C03\u5EA6\u5668\u8C03\u5EA6\u7684\uFF0C\u8FD9\u4E2A\u8C03\u5EA6\u5668\u4F7F\u7528\u4E00\u4E2A\u79F0\u4E3Am:n\u8C03\u5EA6\u7684\u6280\u672F\uFF08\u590D\u7528/\u8C03\u5EA6m\u4E2Agoroutine\u5230n\u4E2AOS\u7EBF\u7A0B\uFF09\u3002 \u5176\u4E00\u5927\u7279\u70B9\u662Fgoroutine\u7684\u8C03\u5EA6\u662F\u5728\u7528\u6237\u6001\u4E0B\u5B8C\u6210\u7684\uFF0C \u4E0D\u6D89\u53CA\u5185\u6838\u6001\u4E0E\u7528\u6237\u6001\u4E4B\u95F4\u7684\u9891\u7E41\u5207\u6362\uFF0C\u5305\u62EC\u5185\u5B58\u7684\u5206\u914D\u4E0E\u91CA\u653E\uFF0C\u90FD\u662F\u5728\u7528\u6237\u6001\u7EF4\u62A4\u7740\u4E00\u5757\u5927\u7684\u5185\u5B58\u6C60\uFF0C \u4E0D\u76F4\u63A5\u8C03\u7528\u7CFB\u7EDF\u7684malloc\u51FD\u6570\uFF08\u9664\u975E\u5185\u5B58\u6C60\u9700\u8981\u6539\u53D8\uFF09\uFF0C\u6210\u672C\u6BD4\u8C03\u5EA6OS\u7EBF\u7A0B\u4F4E\u5F88\u591A\u3002 \u53E6\u4E00\u65B9\u9762\u5145\u5206\u5229\u7528\u4E86\u591A\u6838\u7684\u786C\u4EF6\u8D44\u6E90\uFF0C\u8FD1\u4F3C\u7684\u628A\u82E5\u5E72goroutine\u5747\u5206\u5728\u7269\u7406\u7EBF\u7A0B\u4E0A\uFF0C \u518D\u52A0\u4E0A\u672C\u8EABgoroutine\u7684\u8D85\u8F7B\u91CF\uFF0C\u4EE5\u4E0A\u79CD\u79CD\u4FDD\u8BC1\u4E86go\u8C03\u5EA6\u65B9\u9762\u7684\u6027\u80FD\u3002</p>`,37);function o(e,t){return p}var u=n(a,[["render",o],["__file","Goroutine.html.vue"]]);export{u as default};
