import{_ as e,r as o,o as c,c as l,b as s,a as p,F as u,e as t,d as n}from"./app.2a7ffa2e.js";var r="/assets/m_7a3fd62eebab50a962857bf9a421495a_r.db4db71b.png";const i={},k=t('<h1 id="socket-\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#socket-\u7F16\u7A0B" aria-hidden="true">#</a> socket \u7F16\u7A0B</h1><p><code>Socket</code>\u662FBSD UNIX\u7684\u8FDB\u7A0B\u901A\u4FE1\u673A\u5236\uFF0C\u901A\u5E38\u4E5F\u79F0\u4F5C\u201D\u5957\u63A5\u5B57\u201D\uFF0C\u7528\u4E8E\u63CF\u8FF0IP\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u662F\u4E00\u4E2A\u901A\u4FE1\u94FE\u7684\u53E5\u67C4\u3002<code>Socket</code>\u53EF\u4EE5\u7406\u89E3\u4E3ATCP/IP\u7F51\u7EDC\u7684API\uFF0C\u5B83\u5B9A\u4E49\u4E86\u8BB8\u591A\u51FD\u6570\u6216\u4F8B\u7A0B\uFF0C\u7A0B\u5E8F\u5458\u53EF\u4EE5\u7528\u5B83\u4EEC\u6765\u5F00\u53D1TCP/IP\u7F51\u7EDC\u4E0A\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u7535\u8111\u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u901A\u8FC7\u201D\u5957\u63A5\u5B57\u201D\u5411\u7F51\u7EDC\u53D1\u51FA\u8BF7\u6C42\u6216\u8005\u5E94\u7B54\u7F51\u7EDC\u8BF7\u6C42\u3002</p><h2 id="_1-socket\u56FE\u89E3" tabindex="-1"><a class="header-anchor" href="#_1-socket\u56FE\u89E3" aria-hidden="true">#</a> 1. socket\u56FE\u89E3</h2><p>Socket\u662F\u5E94\u7528\u5C42\u4E0ETCP/IP\u534F\u8BAE\u65CF\u901A\u4FE1\u7684\u4E2D\u95F4\u8F6F\u4EF6\u62BD\u8C61\u5C42\u3002\u5728\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\uFF0CSocket\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u95E8\u9762\u6A21\u5F0F\uFF0C\u5B83\u628A\u590D\u6742\u7684TCP/IP\u534F\u8BAE\u65CF\u9690\u85CF\u5728Socket\u540E\u9762\uFF0C\u5BF9\u7528\u6237\u6765\u8BF4\u53EA\u9700\u8981\u8C03\u7528Socket\u89C4\u5B9A\u7684\u76F8\u5173\u51FD\u6570\uFF0C\u8BA9Socket\u53BB\u7EC4\u7EC7\u7B26\u5408\u6307\u5B9A\u7684\u534F\u8BAE\u6570\u636E\u7136\u540E\u8FDB\u884C\u901A\u4FE1\u3002</p><p><img src="'+r+`" alt="null"></p><ul><li>Socket\u53C8\u79F0\u201C\u5957\u63A5\u5B57\u201D\uFF0C\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u901A\u8FC7\u201C\u5957\u63A5\u5B57\u201D\u5411\u7F51\u7EDC\u53D1\u51FA\u8BF7\u6C42\u6216\u8005\u5E94\u7B54\u7F51\u7EDC\u8BF7\u6C42</li><li>\u5E38\u7528\u7684Socket\u7C7B\u578B\u6709\u4E24\u79CD\uFF1A\u6D41\u5F0FSocket\u548C\u6570\u636E\u62A5\u5F0FSocket\uFF0C\u6D41\u5F0F\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\u7684Socket\uFF0C\u9488\u5BF9\u4E8E\u9762\u5411\u8FDE\u63A5\u7684TCP\u670D\u52A1\u5E94\u7528\uFF0C\u6570\u636E\u62A5\u5F0FSocket\u662F\u4E00\u79CD\u65E0\u8FDE\u63A5\u7684Socket\uFF0C\u9488\u5BF9\u4E8E\u65E0\u8FDE\u63A5\u7684UDP\u670D\u52A1\u5E94\u7528</li><li>TCP\uFF1A\u6BD4\u8F83\u9760\u8C31\uFF0C\u9762\u5411\u8FDE\u63A5\uFF0C\u6BD4\u8F83\u6162</li><li>UDP\uFF1A\u4E0D\u662F\u592A\u9760\u8C31\uFF0C\u6BD4\u8F83\u5FEB</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1ATCP\u5C31\u50CF\u8D27\u5230\u4ED8\u6B3E\u7684\u5FEB\u9012\uFF0C\u9001\u5230\u5BB6\u8FD8\u5FC5\u987B\u89C1\u5230\u4F60\u4EBA\u624D\u7B97\u4E00\u6574\u5957\u6D41\u7A0B\u3002UDP\u5C31\u50CF\u67D0\u5FEB\u9012\u5FEB\u9012\u67DC\u4E00\u6254\u5C31\u8D70\u7BA1\u4F60\u6536\u5230\u6536\u4E0D\u5230\uFF0C\u4E00\u822C\u76F4\u64AD\u7528UDP\u3002</p><h2 id="_2-tcp-\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-tcp-\u7F16\u7A0B" aria-hidden="true">#</a> 2. TCP \u7F16\u7A0B</h2><p>TCP/IP(Transmission Control Protocol/Internet Protocol) \u5373\u4F20\u8F93\u63A7\u5236\u534F\u8BAE/\u7F51\u9645\u534F\u8BAE\uFF0C\u662F\u4E00\u79CD\u9762\u5411\u8FDE\u63A5\uFF08\u8FDE\u63A5\u5BFC\u5411\uFF09\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684\u4F20\u8F93\u5C42\uFF08Transport layer\uFF09\u901A\u4FE1\u534F\u8BAE\uFF0C\u56E0\u4E3A\u662F\u9762\u5411\u8FDE\u63A5\u7684\u534F\u8BAE\uFF0C\u6570\u636E\u50CF\u6C34\u6D41\u4E00\u6837\u4F20\u8F93\uFF0C\u4F1A\u5B58\u5728\u9ECF\u5305\u95EE\u9898\u3002</p><h3 id="tcp\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#tcp\u670D\u52A1\u7AEF" aria-hidden="true">#</a> TCP\u670D\u52A1\u7AEF</h3><p>\u4E00\u4E2ATCP\u670D\u52A1\u7AEF\u53EF\u4EE5\u540C\u65F6\u8FDE\u63A5\u5F88\u591A\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u4F8B\u5982\u4E16\u754C\u5404\u5730\u7684\u7528\u6237\u4F7F\u7528\u81EA\u5DF1\u7535\u8111\u4E0A\u7684\u6D4F\u89C8\u5668\u8BBF\u95EE\u6DD8\u5B9D\u7F51\u3002\u56E0\u4E3AGo\u8BED\u8A00\u4E2D\u521B\u5EFA\u591A\u4E2Agoroutine\u5B9E\u73B0\u5E76\u53D1\u975E\u5E38\u65B9\u4FBF\u548C\u9AD8\u6548\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u6BCF\u5EFA\u7ACB\u4E00\u6B21\u94FE\u63A5\u5C31\u521B\u5EFA\u4E00\u4E2Agoroutine\u53BB\u5904\u7406\u3002</p><p>TCP\u670D\u52A1\u7AEF\u7A0B\u5E8F\u7684\u5904\u7406\u6D41\u7A0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1.\u76D1\u542C\u7AEF\u53E3
    2.\u63A5\u6536\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5EFA\u7ACB\u94FE\u63A5
    3.\u521B\u5EFAgoroutine\u5904\u7406\u94FE\u63A5\u3002   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u4F7F\u7528Go\u8BED\u8A00\u7684net\u5305\u5B9E\u73B0\u7684TCP\u670D\u52A1\u7AEF\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// tcp/server/main.go</span>

<span class="token comment">// TCP server\u7AEF</span>

<span class="token comment">// \u5904\u7406\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
        <span class="token keyword">var</span> buf <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u8BFB\u53D6\u6570\u636E</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read from client failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        recvStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6536\u5230client\u7AEF\u53D1\u6765\u7684\u6570\u636E\uFF1A&quot;</span><span class="token punctuation">,</span> recvStr<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>recvStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u53D1\u9001\u6570\u636E</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:20000&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;listen failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5EFA\u7ACB\u8FDE\u63A5</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;accept failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8\u4E00\u4E2Agoroutine\u5904\u7406\u8FDE\u63A5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u4FDD\u5B58\u4E4B\u540E\u7F16\u8BD1\u6210server\u6216server.exe\u53EF\u6267\u884C\u6587\u4EF6\u3002</p><h3 id="tcp\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#tcp\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> TCP\u5BA2\u6237\u7AEF</h3><p>\u4E00\u4E2ATCP\u5BA2\u6237\u7AEF\u8FDB\u884CTCP\u901A\u4FE1\u7684\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1.\u5EFA\u7ACB\u4E0E\u670D\u52A1\u7AEF\u7684\u94FE\u63A5
    2.\u8FDB\u884C\u6570\u636E\u6536\u53D1
    3.\u5173\u95ED\u94FE\u63A5   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528Go\u8BED\u8A00\u7684net\u5305\u5B9E\u73B0\u7684TCP\u5BA2\u6237\u7AEF\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// tcp/client/main.go</span>

<span class="token comment">// \u5BA2\u6237\u7AEF</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:20000&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err :&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5173\u95ED\u8FDE\u63A5</span>
    inputReader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> inputReader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BFB\u53D6\u7528\u6237\u8F93\u5165</span>
        inputInfo <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u8F93\u5165q\u5C31\u9000\u51FA</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u53D1\u9001\u6570\u636E</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        buf <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">512</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recv failed, err:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u7F16\u8BD1\u6210client\u6216client.exe\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u5148\u542F\u52A8server\u7AEF\u518D\u542F\u52A8client\u7AEF\uFF0C\u5728client\u7AEF\u8F93\u5165\u4EFB\u610F\u5185\u5BB9\u56DE\u8F66\u4E4B\u540E\u5C31\u80FD\u591F\u5728server\u7AEF\u770B\u5230client\u7AEF\u53D1\u9001\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u5B9E\u73B0TCP\u901A\u4FE1\u3002</p><h2 id="_3-udp\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-udp\u7F16\u7A0B" aria-hidden="true">#</a> 3.UDP\u7F16\u7A0B</h2><p>UDP\u534F\u8BAE\uFF08User Datagram Protocol\uFF09\u4E2D\u6587\u540D\u79F0\u662F\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE\uFF0C\u662FOSI\uFF08Open System Interconnection\uFF0C\u5F00\u653E\u5F0F\u7CFB\u7EDF\u4E92\u8054\uFF09\u53C2\u8003\u6A21\u578B\u4E2D\u4E00\u79CD\u65E0\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u4E0D\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\u5C31\u80FD\u76F4\u63A5\u8FDB\u884C\u6570\u636E\u53D1\u9001\u548C\u63A5\u6536\uFF0C\u5C5E\u4E8E\u4E0D\u53EF\u9760\u7684\u3001\u6CA1\u6709\u65F6\u5E8F\u7684\u901A\u4FE1\uFF0C\u4F46\u662FUDP\u534F\u8BAE\u7684\u5B9E\u65F6\u6027\u6BD4\u8F83\u597D\uFF0C\u901A\u5E38\u7528\u4E8E\u89C6\u9891\u76F4\u64AD\u76F8\u5173\u9886\u57DF\u3002</p><h3 id="udp\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#udp\u670D\u52A1\u7AEF" aria-hidden="true">#</a> UDP\u670D\u52A1\u7AEF</h3><p>\u4F7F\u7528Go\u8BED\u8A00\u7684net\u5305\u5B9E\u73B0\u7684UDP\u670D\u52A1\u7AEF\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenUDP</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
		IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;listen occurs error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> listen<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> data <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">byte</span>

		n<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;read from udp occurs error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;read from %v , content is %s, length = %d&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>

		<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> listen<span class="token punctuation">.</span><span class="token function">WriteToUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>

		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;write occurs error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="udp\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#udp\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> UDP\u5BA2\u6237\u7AEF</h3><p>\u4F7F\u7528Go\u8BED\u8A00\u7684net\u5305\u5B9E\u73B0\u7684UDP\u5BA2\u6237\u7AEF\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> Size <span class="token builtin">int16</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	Size <span class="token operator">=</span> <span class="token number">1024</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;size = &quot;</span><span class="token punctuation">,</span> Size<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	socket<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialUDP</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
		IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		Port<span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;udp dial occurs error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> socket<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	sendData <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>sendData<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;write occurs error: &quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> Size<span class="token punctuation">)</span>
	n<span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> socket<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;read from %v occurs error: %v\\r\\n&quot;</span><span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;recv:%s addr:%v length:%d&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> n<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_4-\u5B9E\u73B0\u4E00\u4E2A\u5168\u53CC\u5DE5\u7684\u7B80\u6613\u804A\u5929\u5BA4" tabindex="-1"><a class="header-anchor" href="#_4-\u5B9E\u73B0\u4E00\u4E2A\u5168\u53CC\u5DE5\u7684\u7B80\u6613\u804A\u5929\u5BA4" aria-hidden="true">#</a> 4. \u5B9E\u73B0\u4E00\u4E2A\u5168\u53CC\u5DE5\u7684\u7B80\u6613\u804A\u5929\u5BA4</h2>`,31),b=s("strong",null,"\u5168\u53CC\u5DE5",-1),d=n("\uFF08"),m=s("strong",null,"full-duplex",-1),f=n("\uFF09\u7684\u7CFB\u7EDF\u5141\u8BB8\u4E8C\u53F0\u8BBE\u5907\u95F4\u540C\u65F6\u8FDB\u884C\u53CC\u5411\u8D44\u6599\u4F20\u8F93\u3002\u5168\u53CC\u5DE5\u7684\u7CFB\u7EDF\u53EF\u4EE5\u7528"),h={href:"https://zh.wikipedia.org/wiki/%E5%A4%8D%E7%BA%BF%E9%93%81%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"},g=n("\u590D\u7EBF\u94C1\u8DEF"),_=n("\u7C7B\u6BD4\u3002\u4E24\u4E2A\u65B9\u5411\u7684\u8F66\u8F86\u56E0\u4F7F\u7528\u4E0D\u540C\u7684\u8F68\u9053\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u4E92\u76F8\u5F71\u54CD\u3002"),P=n("\u4E00\u822C\u7684"),q={href:"https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%A9%B1",target:"_blank",rel:"noopener noreferrer"},w=n("\u7535\u8BDD"),y=n("\u3001"),v={href:"https://zh.wikipedia.org/wiki/%E6%89%8B%E6%A9%9F",target:"_blank",rel:"noopener noreferrer"},x=n("\u624B\u673A"),S=n("\u5C31\u662F\u5168\u53CC\u5DE5\u7684\u7CFB\u7EDF\uFF0C\u56E0\u4E3A\u5728\u8BB2\u8BDD\u65F6\u540C\u65F6\u4E5F\u53EF\u4EE5\u542C\u5230\u5BF9\u65B9\u7684\u58F0\u97F3\u3002"),C=t('<h3 id="\u9700\u6C42\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a> \u9700\u6C42\u5206\u6790</h3><ol><li>\u670D\u52A1\u7AEF\u53EF\u4EE5\u65F6\u523B\u6536\u53D1\u4FE1\u606F</li><li>\u5BA2\u6237\u7AEF\u4E5F\u53EF\u4EE5\u65F6\u523B\u6536\u53D1\u4FE1\u606F</li></ol><h3 id="\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u670D\u52A1\u7AEF</h3><h3 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h3><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',5),D={href:"https://www.topgoer.cn/docs/golang/chapter08",target:"_blank",rel:"noopener noreferrer"},T=n("\u7F51\u7EDC\u7F16\u7A0B - \u5730\u9F20\u6587\u6863 (topgoer.cn)");function U(I,A){const a=o("ExternalLinkIcon");return c(),l(u,null,[k,s("p",null,[b,d,m,f,s("a",h,[g,p(a)]),_]),s("p",null,[P,s("a",q,[w,p(a)]),y,s("a",v,[x,p(a)]),S]),C,s("p",null,[s("a",D,[T,p(a)])])],64)}var E=e(i,[["render",U],["__file","socket.html.vue"]]);export{E as default};
