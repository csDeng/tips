import{_ as a,e as n}from"./app.2a7ffa2e.js";const s={},e=n(`<h1 id="java-\u7684\u7EBF\u7A0B\u5B89\u5168\u673A\u5236\u4E4Bvolatile" tabindex="-1"><a class="header-anchor" href="#java-\u7684\u7EBF\u7A0B\u5B89\u5168\u673A\u5236\u4E4Bvolatile" aria-hidden="true">#</a> Java \u7684\u7EBF\u7A0B\u5B89\u5168\u673A\u5236\u4E4B<code>volatile</code></h1><p>\u5728\u591A\u7EBF\u7A0B\u7F16\u7A0B\u8FC7\u7A0B\u4E2D\uFF0C\u7EBF\u7A0B\u5B89\u5168\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5B83\u6709\u52A9\u4E8E\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u7A0B\u5E8F\u7684\u6B63\u786E\u6027\u548C\u5065\u58EE\u6027\u3002\u5176\u4E2D\uFF0C<code>volatile</code>\u662F\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4FDD\u8BC1\u5185\u5B58\u7684\u7ACB\u9A6C\u53EF\u89C1\uFF0C\u4E0B\u9762\u5C06\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><h1 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h1><p>volatile\u662FJava\u4E2D\u7684\u4E00\u79CD\u5173\u952E\u5B57\uFF0C\u7528\u4E8E\u6807\u8BB0\u53D8\u91CF\uFF0C\u8868\u793A\u8BE5\u53D8\u91CF\u662F\u6613\u53D8\u7684\u3002\u5F53\u4E00\u4E2A\u53D8\u91CF\u88AB\u58F0\u660E\u4E3A<code>volatile</code>\u65F6\uFF0C\u5B83\u7684\u503C\u5C06\u4E0D\u4F1A\u88AB\u7F13\u5B58\u5728\u5BC4\u5B58\u5668\u3001\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u4E0D\u53EF\u89C1\u7684\u7F13\u5B58\u6216\u8005\u5176\u4ED6\u4E0D\u53EF\u89C1\u7684\u5730\u65B9\uFF0C\u800C\u662F\u88AB\u5F3A\u5236\u6027\u5730\u4FDD\u5B58\u5230\u4E3B\u5185\u5B58\u4E2D\u3002</p><h1 id="\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48</h1><p>\u591A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF\u65F6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002\u4F8B\u5982\u7EBF\u7A0BA\u4FEE\u6539\u4E86\u5171\u4EAB\u53D8\u91CF\u7684\u503C\uFF0C\u4F46\u662F\u7EBF\u7A0BB\u5E76\u6CA1\u6709\u7ACB\u5373\u770B\u5230\u8FD9\u4E2A\u4FEE\u6539\uFF0C\u800C\u662F\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u4E86\u65E7\u7684\u503C\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u51FA\u73B0\u9519\u8BEF\u3002\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u53EF\u4EE5\u9632\u6B62\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u4FDD\u8BC1\u5171\u4EAB\u53D8\u91CF\u7684\u53EF\u89C1\u6027\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\u3002</p><h1 id="\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u529E" aria-hidden="true">#</a> \u600E\u4E48\u529E</h1><p>\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li><p>1.\u5C06\u5171\u4EAB\u53D8\u91CF\u58F0\u660E\u4E3A<code>volatile</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> sharedVar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>2.\u4E0D\u8981\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u4FEE\u9970\u5F15\u7528\u7C7B\u578B</p><p>\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5185\u90E8\u7684\u5B57\u6BB5\u53EF\u80FD\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u4F1A\u89E6\u53D1<code>volatile</code>\u53D8\u91CF\u7684\u53EF\u89C1\u6027\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u4F7F\u7528\u9501\u6216\u8005\u5176\u4ED6\u7EBF\u7A0B\u5B89\u5168\u7684\u65B9\u5F0F\u6765\u4FDD\u8BC1\u5F15\u7528\u7C7B\u578B\u7684\u7EBF\u7A0B\u5B89\u5168\u3002</p></li><li><p>3.\u4E0D\u8981\u5BF9\u53D8\u91CF\u8FDB\u884C\u590D\u5408\u64CD\u4F5C</p><p>\u590D\u5408\u64CD\u4F5C\u662F\u6307\u5BF9\u53D8\u91CF\u8FDB\u884C\u4E24\u4E2A\u6216\u8005\u66F4\u591A\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982<code>i++\u3001x+=5</code>\u7B49\uFF0C\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u8FD9\u4F1A\u5BFC\u81F4\u51FA\u73B0\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u5EFA\u8BAE\u4F7F\u7528<code>AtomicInteger</code>\u7B49\u539F\u5B50\u64CD\u4F5C\u7C7B\u6765\u4EE3\u66FF\u590D\u5408\u64CD\u4F5C\u3002</p></li><li><p>4.\u4E0D\u8981\u8FC7\u5EA6\u4F9D\u8D56<code>volatile</code>\u5173\u952E\u5B57</p><p><code>volatile</code>\u5173\u952E\u5B57\u4EC5\u4FDD\u8BC1\u53D8\u91CF\u7684\u53EF\u89C1\u6027\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u53D8\u91CF\u7684\u539F\u5B50\u6027\u548C\u4E92\u65A5\u6027\uFF0C\u56E0\u6B64\u9700\u8981\u914D\u5408\u5176\u4ED6\u7EBF\u7A0B\u5B89\u5168\u7684\u673A\u5236\u4E00\u8D77\u4F7F\u7528\u3002</p></li></ul><h1 id="\u4F1A\u600E\u6837" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u600E\u6837" aria-hidden="true">#</a> \u4F1A\u600E\u6837</h1><p>\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u80FD\u591F\u4FDD\u8BC1\u5171\u4EAB\u53D8\u91CF\u7684\u53EF\u89C1\u6027\uFF0C\u907F\u514D\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002\u4F46\u662F<code>volatile</code>\u4E0D\u80FD\u4FDD\u8BC1\u64CD\u4F5C\u7684\u539F\u5B50\u6027\u548C\u4E92\u65A5\u6027\uFF0C\u56E0\u6B64\u9700\u8981\u642D\u914D\u5176\u4ED6\u7EBF\u7A0B\u5B89\u5168\u7684\u673A\u5236\u6765\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u6B63\u786E\u6027\u3002</p><h1 id="\u7EB8\u4E0A\u5F97\u6765\u7EC8\u89C9\u6D45" tabindex="-1"><a class="header-anchor" href="#\u7EB8\u4E0A\u5F97\u6765\u7EC8\u89C9\u6D45" aria-hidden="true">#</a> \u7EB8\u4E0A\u5F97\u6765\u7EC8\u89C9\u6D45</h1><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u4FDD\u8BC1\u5171\u4EAB\u53D8\u91CF\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u7684\u53EF\u89C1\u6027\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VolatileExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// do something</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Flag is true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">VolatileExample</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VolatileExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>example<span class="token operator">::</span><span class="token function">checkFlag</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        example<span class="token punctuation">.</span><span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728\u8BE5\u793A\u4F8B\u4EE3\u7801\u4E2D\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u79C1\u6709\u7684<code>volatile</code>\u53D8\u91CF<code>flag</code>\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E24\u4E2A\u65B9\u6CD5setFlag\u548CcheckFlag\u3002\u5728setFlag\u65B9\u6CD5\u4E2D\u5C06flag\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5728checkFlag\u65B9\u6CD5\u4E2D\u4E0D\u65AD\u5FAA\u73AF\u7B49\u5F85flag\u53D8\u4E3Atrue\uFF0C\u4E00\u65E6\u53D8\u4E3Atrue\uFF0C\u5C31\u6253\u5370\u51FA&quot;Flag is true&quot;\u7684\u4FE1\u606F\u3002</p><p>\u5728main\u65B9\u6CD5\u4E2D\u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B\u8C03\u7528checkFlag\u65B9\u6CD5\uFF0C\u540C\u65F6\u8BA9\u4E3B\u7EBF\u7A0B\u4F11\u77201\u79D2\u949F\u540E\u518D\u8C03\u7528setFlag\u65B9\u6CD5\u5C06flag\u53D8\u4E3Atrue\u3002\u7531\u4E8Eflag\u662Fvolatile\u53D8\u91CF\uFF0C\u5F53\u4E3B\u7EBF\u7A0B\u5C06flag\u53D8\u4E3Atrue\u65F6\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u80FD\u591F\u7ACB\u5373\u770B\u5230\u8FD9\u4E2A\u4FEE\u6539\u5E76\u7ED3\u675F\u7B49\u5F85\uFF0C\u6253\u5370\u51FA&quot;Flag is true&quot;\u7684\u4FE1\u606F\u3002\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86\u5171\u4EAB\u53D8\u91CFflag\u7684\u53EF\u89C1\u6027\uFF0C\u907F\u514D\u4E86\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002</p><h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p>\u672C\u6587\u8BE6\u7EC6\u4ECB\u7ECD\u4E86volatile\u5173\u952E\u5B57\u5728Java\u4E2D\u7684\u4F5C\u7528\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u9700\u8981\u6CE8\u610F\u7684\u51E0\u70B9\u4E8B\u9879\u3002\u4F7F\u7528volatile\u5173\u952E\u5B57\u53EF\u4EE5\u6709\u6548\u5730\u5B9E\u73B0\u7EBF\u7A0B\u5B89\u5168\uFF0C\u4F46\u662F\u9700\u8981\u6CE8\u610F\u5176\u5C40\u9650\u6027\uFF0C\u4E0D\u80FD\u8FC7\u5EA6\u4F9D\u8D56\u3002\u5728\u591A\u7EBF\u7A0B\u7F16\u7A0B\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u6839\u636E\u5177\u4F53\u60C5\u51B5\u6765\u9009\u62E9\u5408\u9002\u7684\u7EBF\u7A0B\u5B89\u5168\u673A\u5236\uFF0C\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u6B63\u786E\u6027\u548C\u5065\u58EE\u6027\u3002</p>`,18);function p(t,o){return e}var l=a(s,[["render",p],["__file","java-volatile.html.vue"]]);export{l as default};
