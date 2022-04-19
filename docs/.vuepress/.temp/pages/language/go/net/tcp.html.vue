<template><nav class="table-of-contents"><ul><li><RouterLink to="#go语言tcp-socket编程">Go语言TCP Socket编程</RouterLink><ul><li><RouterLink to="#一、模型">一、模型</RouterLink></li><li><RouterLink to="#二、tcp连接的建立">二、TCP连接的建立</RouterLink><ul><li><RouterLink to="#对于客户端而言-连接的建立会遇到如下几种情形">对于客户端而言，连接的建立会遇到如下几种情形：</RouterLink><ul><li><RouterLink to="#_1、网络不可达或对方服务未启动">1、网络不可达或对方服务未启动</RouterLink></li><li><RouterLink to="#_2、对方服务的listen-backlog满">2、对方服务的listen backlog满</RouterLink></li><li><RouterLink to="#_3、网络延迟较大-dial阻塞并超时">3、网络延迟较大，Dial阻塞并超时</RouterLink></li></ul></li></ul></li><li><RouterLink to="#三、socket读写">三、Socket读写</RouterLink><ul><li><RouterLink to="#conn-read">conn.Read</RouterLink><ul><li><RouterLink to="#_1、socket中无数据">1、Socket中无数据</RouterLink></li><li><RouterLink to="#_2、socket中有部分数据">2、Socket中有部分数据</RouterLink></li><li><RouterLink to="#_3、socket中有足够数据">3、Socket中有足够数据</RouterLink></li><li><RouterLink to="#_4、socket关闭">4、Socket关闭</RouterLink></li><li><RouterLink to="#_5、读取操作超时">5、读取操作超时</RouterLink></li></ul></li><li><RouterLink to="#conn-write">conn.Write</RouterLink><ul><li><RouterLink to="#_1、成功写">1、成功写</RouterLink></li><li><RouterLink to="#_2、写阻塞">2、写阻塞</RouterLink></li><li><RouterLink to="#_3、写入部分数据">3、写入部分数据</RouterLink></li><li><RouterLink to="#_4、写入超时">4、写入超时</RouterLink></li></ul></li><li><RouterLink to="#goroutine-safe">Goroutine safe</RouterLink></li></ul></li><li><RouterLink to="#四、socket属性">四、Socket属性</RouterLink></li><li><RouterLink to="#五、关闭连接">五、关闭连接</RouterLink><ul><li><RouterLink to="#六、小结">六、小结</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="go语言tcp-socket编程" tabindex="-1"><a class="header-anchor" href="#go语言tcp-socket编程" aria-hidden="true">#</a> Go语言TCP Socket编程</h1>
<div class="custom-container tip"><p class="custom-container-title">声明</p>
<p>本文源于<a href="https://tonybai.com/2015/11/17/tcp-programming-in-golang/" target="_blank" rel="noopener noreferrer">Go语言TCP Socket编程 | Tony Bai<ExternalLinkIcon/></a>，可能会有稍微的修改。</p>
</div>
<p><code>Golang</code>的主要 设计目标之一就是面向大规模后端服务程序，网络通信这块是服务端 程序必不可少也是至关重要的一部分。在日常应用中，我们也可以看到Go中的net以及其subdirectories下的包均是“高频+刚需”，而TCP socket则是网络编程的主流，即便您没有直接使用到net中有关TCP Socket方面的接口，但net/http总是用到了吧，http底层依旧是用tcp socket实现的。</p>
<p>网络编程方面，我们最常用的就是tcp socket编程了，在posix标准出来后，socket在各大主流OS平台上都得到了很好的支持。关于tcp programming，最好的资料莫过于<a href="http://en.wikipedia.org/wiki/W._Richard_Stevens" target="_blank" rel="noopener noreferrer">W. Richard Stevens<ExternalLinkIcon/></a> 的网络编程圣经《<a href="http://book.douban.com/subject/4859464/" target="_blank" rel="noopener noreferrer">UNIX网络 编程 卷1：套接字联网API<ExternalLinkIcon/></a>》 了，书中关于tcp socket接口的各种使用、行为模式、异常处理讲解的十分细致。Go是自带runtime的跨平台编程语言，Go中暴露给语言使用者的tcp socket api是建立OS原生tcp socket接口之上的。由于Go runtime调度的需要，golang tcp socket接口在行为特点与异常处理方面与OS原生接口有着一些差别。这篇博文的目标就是整理出关于Go tcp socket在各个场景下的使用方法、行为特点以及注意事项。</p>
<h2 id="一、模型" tabindex="-1"><a class="header-anchor" href="#一、模型" aria-hidden="true">#</a> 一、模型</h2>
<p>从tcp socket诞生后，网络编程架构模型也几经演化，大致是：“每进程一个连接” –&gt; “每线程一个连接” –&gt; “Non-Block + I/O多路复用(linux epoll/windows iocp/freebsd darwin kqueue/solaris Event Port)”。伴随着模型的演化，服务程序愈加强大，可以支持更多的连接，获得更好的处理性能。</p>
<p>目前主流web server一般均采用的都是”Non-Block + I/O多路复用”（有的也结合了多线程、多进程）。不过I/O多路复用也给使用者带来了不小的复杂度，以至于后续出现了许多高性能的I/O多路复用框架， 比如<a href="http://libevent.org/" target="_blank" rel="noopener noreferrer">libevent<ExternalLinkIcon/></a>、<a href="http://software.schmorp.de/pkg/libev.html" target="_blank" rel="noopener noreferrer">libev<ExternalLinkIcon/></a>、<a href="https://github.com/joyent/libuv" target="_blank" rel="noopener noreferrer">libuv<ExternalLinkIcon/></a>等，以帮助开发者简化开发复杂性，降低心智负担。不过Go的设计者似乎认为I/O多路复用的这种通过回调机制割裂控制流 的方式依旧复杂，且有悖于“一般逻辑”设计，为此Go语言将该“复杂性”隐藏在<code>Runtime</code>中了：Go开发者无需关注socket是否是 non-block的，也无需亲自注册文件描述符的回调，只需在每个连接对应的goroutine中以**“block I/O”**的方式对待socket处理即可，这可以说大大降低了开发人员的心智负担。一个典型的<code>Go server</code>端程序大致如下：</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/server.go</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// read from the connection</span>
        <span class="token comment">// ... ...</span>
        <span class="token comment">// write to the connection</span>
        <span class="token comment">//... ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        c<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// start a new goroutine to handle</span>
        <span class="token comment">// the new connection.</span>
        <span class="token keyword">go</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></details>
<p>用户层眼中看到的goroutine中的“block socket”，实际上是通过Go runtime中的netpoller通过Non-block socket + I/O多路复用机制“模拟”出来的，真实的underlying socket实际上是non-block的，只是runtime拦截了底层socket系统调用的错误码，并通过netpoller和goroutine 调度让goroutine“阻塞”在用户层得到的Socket fd上。比如：当用户层针对某个socket fd发起read操作时，如果该socket fd中尚无数据，那么runtime会将该socket fd加入到netpoller中监听，同时对应的goroutine被挂起，直到runtime收到socket fd 数据ready的通知，runtime才会重新唤醒等待在该socket fd上准备read的那个Goroutine。而这个过程从Goroutine的视角来看，就像是read操作一直block在那个socket fd上似的。具体实现细节在后续场景中会有补充描述。</p>
<h2 id="二、tcp连接的建立" tabindex="-1"><a class="header-anchor" href="#二、tcp连接的建立" aria-hidden="true">#</a> 二、TCP连接的建立</h2>
<p>众所周知，TCP Socket的连接的建立需要经历客户端和服务端的三次握手的过程。连接建立过程中，服务端是一个标准的Listen + Accept的结构(可参考上面的代码)，而在客户端Go语言使用<code>net.Dial</code>或<code>DialTimeout</code>进行连接建立：</p>
<p>阻塞Dial：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"google.com:80"</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">//handle error</span>
<span class="token punctuation">}</span>
<span class="token comment">// read or write on conn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>或是带上超时机制的Dial：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialTimeout</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">//handle error</span>
<span class="token punctuation">}</span>
<span class="token comment">// read or write on conn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<h3 id="对于客户端而言-连接的建立会遇到如下几种情形" tabindex="-1"><a class="header-anchor" href="#对于客户端而言-连接的建立会遇到如下几种情形" aria-hidden="true">#</a> 对于客户端而言，连接的建立会遇到如下几种情形：</h3>
<hr>
<h4 id="_1、网络不可达或对方服务未启动" tabindex="-1"><a class="header-anchor" href="#_1、网络不可达或对方服务未启动" aria-hidden="true">#</a> 1、网络不可达或对方服务未启动</h4>
<p>如果传给Dial的Addr是可以立即判断出网络不可达，或者Addr中端口对应的服务没有启动，端口未被监听，Dial会几乎立即返回错误，比如：</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/conn_establish/client1.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果本机8888端口未有服务程序监听，那么执行上面程序，Dial会很快返回错误：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$<span class="token keyword">go</span> run client1<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">37</span><span class="token punctuation">:</span><span class="token number">41</span> begin dial<span class="token operator">...</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">37</span><span class="token punctuation">:</span><span class="token number">41</span> dial <span class="token builtin">error</span><span class="token punctuation">:</span> dial tcp <span class="token punctuation">:</span><span class="token number">8888</span><span class="token punctuation">:</span> getsockopt<span class="token punctuation">:</span> connection refused
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h4 id="_2、对方服务的listen-backlog满" tabindex="-1"><a class="header-anchor" href="#_2、对方服务的listen-backlog满" aria-hidden="true">#</a> 2、对方服务的listen backlog满</h4>
<p>还有一种场景就是对方服务器很忙，瞬间有大量client端连接尝试向server建立，server端的listen backlog队列满，server accept不及时((即便不accept，那么在backlog数量范畴里面，connect都会是成功的，因为new conn已经加入到server side的listen queue中了，accept只是从queue中取出一个conn而已)，这将导致client端Dial阻塞。我们还是通过例子感受Dial的行为特点：</p>
<details class="custom-container details">
<p>服务端代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/conn_establish/server2.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"error listen:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> l<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen ok"</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> i <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        i<span class="token operator">++</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d: accept a new connection\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>客户端代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/conn_establish/client2.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">establishConn</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> net<span class="token punctuation">.</span>Conn <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d: dial error: %s"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">":connect to server ok"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> conn
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sl <span class="token punctuation">[</span><span class="token punctuation">]</span>net<span class="token punctuation">.</span>Conn
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        conn <span class="token operator">:=</span> <span class="token function">establishConn</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> conn <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            sl <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sl<span class="token punctuation">,</span> conn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>从程序可以看出，服务端在listen成功后，每隔10s钟accept一次。客户端则是串行的尝试建立连接。这两个程序在Darwin下的执行 结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$<span class="token keyword">go</span> run server2<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">41</span> listen ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">51</span> <span class="token number">1</span><span class="token punctuation">:</span> accept a <span class="token builtin">new</span> connection
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">56</span><span class="token punctuation">:</span><span class="token number">01</span> <span class="token number">2</span><span class="token punctuation">:</span> accept a <span class="token builtin">new</span> connection
<span class="token operator">...</span> <span class="token operator">...</span>

$<span class="token keyword">go</span> run client2<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">1</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">2</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">3</span> <span class="token punctuation">:</span>connect to server ok
<span class="token operator">...</span> <span class="token operator">...</span>

<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">126</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">127</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">44</span> <span class="token number">128</span> <span class="token punctuation">:</span>connect to server ok

<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">:</span><span class="token number">52</span> <span class="token number">129</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">56</span><span class="token punctuation">:</span><span class="token number">03</span> <span class="token number">130</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">21</span><span class="token punctuation">:</span><span class="token number">56</span><span class="token punctuation">:</span><span class="token number">14</span> <span class="token number">131</span> <span class="token punctuation">:</span>connect to server ok
<span class="token operator">...</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>可以看出Client初始时成功地一次性建立了128个连接，然后后续每阻塞近10s才能成功建立一条连接。也就是说在server端 backlog满时(未及时accept)，客户端将阻塞在Dial上，直到server端进行一次accept。至于为什么是128，这与darwin 下的默认设置有关：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$sysctl</span> -a<span class="token operator">|</span><span class="token function">grep</span> kern.ipc.somaxconn
kern.ipc.somaxconn: <span class="token number">128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果我在ubuntu 14.04上运行上述server程序，我们的client端初始可以成功建立499条连接。</p>
<p>如果server一直不accept，client端会一直阻塞么？我们去掉accept后的结果是：在Darwin下，client端会阻塞大 约1分多钟才会返回timeout：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">03</span><span class="token punctuation">:</span><span class="token number">31</span> <span class="token number">128</span> <span class="token punctuation">:</span>connect to server ok
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">16</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">04</span><span class="token punctuation">:</span><span class="token number">48</span> <span class="token number">129</span><span class="token punctuation">:</span> dial <span class="token builtin">error</span><span class="token punctuation">:</span> dial tcp <span class="token punctuation">:</span><span class="token number">8888</span><span class="token punctuation">:</span> getsockopt<span class="token punctuation">:</span> operation timed out
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>而如果server运行在ubuntu 14.04上，client似乎一直阻塞，我等了10多分钟依旧没有返回。 阻塞与否看来与server端的网络实现和设置有关。</p>
<blockquote>
<p>tips: 经测试，确实瞬间连接的成功量不一样，我的是201.</p>
</blockquote>
</details>
<h4 id="_3、网络延迟较大-dial阻塞并超时" tabindex="-1"><a class="header-anchor" href="#_3、网络延迟较大-dial阻塞并超时" aria-hidden="true">#</a> 3、网络延迟较大，Dial阻塞并超时</h4>
<p>如果网络延迟较大，TCP握手过程将更加艰难坎坷（各种丢包），时间消耗的自然也会更长。Dial这时会阻塞，如果长时间依旧无法建立连接，则Dial也会返回“ getsockopt: operation timed out”错误。</p>
<hr>
<p>在连接建立阶段，多数情况下，Dial是可以满足需求的，即便阻塞一小会儿。但对于某些程序而言，需要有严格的连接时间限定，如果一定时间内没能成功建立连接，程序可能会需要执行一段“异常”处理逻辑，为此我们就需要DialTimeout了。下面的例子将Dial的最长阻塞时间限制在2s内，超出这个时长，Dial将返回timeout error：</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/conn_establish/client3.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialTimeout</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"104.236.176.96:80"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>执行结果如下（需要模拟一个延迟较大的网络环境）：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$<span class="token keyword">go</span> run client3<span class="token punctuation">.</span><span class="token keyword">go</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">09</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">34</span> begin dial<span class="token operator">...</span>
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">09</span><span class="token punctuation">:</span><span class="token number">28</span><span class="token punctuation">:</span><span class="token number">36</span> dial <span class="token builtin">error</span><span class="token punctuation">:</span> dial tcp <span class="token number">104.236</span><span class="token number">.176</span><span class="token number">.96</span><span class="token punctuation">:</span><span class="token number">80</span><span class="token punctuation">:</span> i<span class="token operator">/</span>o timeout
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>经本人验证，确实是这样的结果。</p>
</blockquote>
</details>
<h2 id="三、socket读写" tabindex="-1"><a class="header-anchor" href="#三、socket读写" aria-hidden="true">#</a> 三、Socket读写</h2>
<p>连接建立起来后，我们就要在conn上进行读写，以完成业务逻辑。前面说过Go runtime隐藏了I/O多路复用的复杂性。语言使用者只需采用goroutine+Block I/O的模式即可满足大部分场景需求。Dial成功后，方法返回一个net.Conn接口类型变量值，这个接口变量的动态类型为一个<code>*TCPConn</code>：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//$GOROOT/src/net/tcpsock_posix.go</span>
<span class="token keyword">type</span> TCPConn <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>TCPConn内嵌了一个<code>unexported</code>类型：<code>conn</code>，因此TCPConn”继承”了conn的Read和Write方法，后续通过Dial返回值调用的Write和Read方法均是<code>net.conn</code>的方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//$GOROOT/src/net/net.go</span>
<span class="token keyword">type</span> conn <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    fd <span class="token operator">*</span>netFD
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>conn<span class="token punctuation">)</span> <span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> c <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> c<span class="token punctuation">.</span>fd <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">}</span>

<span class="token comment">// Implementation of the Conn interface.</span>

<span class="token comment">// Read implements the Conn Read method.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>conn<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>c<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>EINVAL
    <span class="token punctuation">}</span>
    n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> io<span class="token punctuation">.</span>EOF <span class="token punctuation">{</span>
        err <span class="token operator">=</span> <span class="token operator">&amp;</span>OpError<span class="token punctuation">{</span>Op<span class="token punctuation">:</span> <span class="token string">"read"</span><span class="token punctuation">,</span> Net<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>net<span class="token punctuation">,</span> Source<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>laddr<span class="token punctuation">,</span> Addr<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>raddr<span class="token punctuation">,</span> Err<span class="token punctuation">:</span> err<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>

<span class="token comment">// Write implements the Conn Write method.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>conn<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>c<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>EINVAL
    <span class="token punctuation">}</span>
    n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        err <span class="token operator">=</span> <span class="token operator">&amp;</span>OpError<span class="token punctuation">{</span>Op<span class="token punctuation">:</span> <span class="token string">"write"</span><span class="token punctuation">,</span> Net<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>net<span class="token punctuation">,</span> Source<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>laddr<span class="token punctuation">,</span> Addr<span class="token punctuation">:</span> c<span class="token punctuation">.</span>fd<span class="token punctuation">.</span>raddr<span class="token punctuation">,</span> Err<span class="token punctuation">:</span> err<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="conn-read" tabindex="-1"><a class="header-anchor" href="#conn-read" aria-hidden="true">#</a> <code>conn.Read</code></h3>
<p>下面我们先来通过几个场景来总结一下conn.Read的行为特点。</p>
<hr>
<h4 id="_1、socket中无数据" tabindex="-1"><a class="header-anchor" href="#_1、socket中无数据" aria-hidden="true">#</a> 1、Socket中无数据</h4>
<p>连接建立后，如果对方未发送数据到socket，接收方(Server)会阻塞在Read操作上，这和前面提到的“模型”原理是一致的。执行该Read操作的goroutine也会被挂起。runtime会监视该socket，直到其有数据才会重新
调度该socket对应的Goroutine完成read。</p>
<details class="custom-container details">
<CodeGroup>
<CodeGroupItem title='server.go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"log"</span>
	<span class="token string">"net"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>con net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> con<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">)</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin--"</span><span class="token punctuation">)</span>
		n<span class="token punctuation">,</span> err <span class="token operator">:=</span> con<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn read occur error: "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8000"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"listen occur error: "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept occur error: "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept a new connection"</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='client.go'>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"log"</span>
	<span class="token string">"net"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial begin--"</span><span class="token punctuation">)</span>
	con<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8000"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"connect occur error: "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> con<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>运行结果：</p>
<CodeGroup>
<CodeGroupItem title='server' active>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS<span class="token operator">></span> go run .<span class="token punctuation">\</span>server1.go
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:30:19 accept a new connection
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:30:19 begin--
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='client'>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>PS<span class="token operator">></span> go run .<span class="token punctuation">\</span>client1.go
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:30:19 dial begin--
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:30:19 dial ok
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>可以看到<code>server</code>的<code>process</code>协程堵塞在<code>read</code>操作。</p>
</details>
<h4 id="_2、socket中有部分数据" tabindex="-1"><a class="header-anchor" href="#_2、socket中有部分数据" aria-hidden="true">#</a> 2、Socket中有部分数据</h4>
<p>如果socket中有部分数据，且长度小于一次Read操作所期望读出的数据长度，那么Read将会成功读出这部分数据并返回，而不是等待所有期望数据全部读取后再返回。</p>
<details class="custom-container details">
<CodeGroup>
<CodeGroupItem title='client2.go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"usage: go run client2.go YOUR_CONTENT"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    data <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='server2.go'>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// read from the connection</span>
        <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"start to read from conn"</span><span class="token punctuation">)</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn read error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></CodeGroupItem>
</CodeGroup>
运行结果:
<p><img src="@source/language/go/net/pics/tcp/image-20220418235005495.png" alt="image-20220418235005495"></p>
<p>Client向socket中写入两个字节数据(“hi”)，Server端创建一个len = 10的slice，等待Read将读取的数据放入slice；Server随后读取到那两个字节：”hi”。Read成功返回，n =2 ，err = nil。</p>
</details>
<h4 id="_3、socket中有足够数据" tabindex="-1"><a class="header-anchor" href="#_3、socket中有足够数据" aria-hidden="true">#</a> 3、Socket中有足够数据</h4>
<p>如果socket中有数据，且长度大于等于一次Read操作所期望读出的数据长度，那么Read将会成功读出这部分数据并返回。这个情景是最符合我们对Read的期待的了：Read将用Socket中的数据将我们传入的slice填满后返回：n = 10, err = nil。</p>
<p>我们通过client2.go向Server2发送如下内容：<code>worldsadasda</code>，则</p>
<blockquote>
<p>client端发送的内容长度为12个字节，Server端Read buffer的长度为10，因此Server Read第一次返回时只会读取10个字节；Socket中还剩余2个字节数据，Server再次Read时会把剩余数据读出。</p>
</blockquote>
<h4 id="_4、socket关闭" tabindex="-1"><a class="header-anchor" href="#_4、socket关闭" aria-hidden="true">#</a> 4、Socket关闭</h4>
<p>如果client端主动关闭了socket，那么Server的Read将会读到什么呢？这里分为“有数据关闭”和“无数据关闭”。</p>
<p>“有数据关闭”是指在client关闭时，socket中还有server端未读取的数据，我们在<code>client3.go</code>和<code>server3.go</code>中模拟这种情况：</p>
<details class="custom-container details">
<CodeGroup>
<CodeGroupItem title='server3.go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"log"</span>
	<span class="token string">"net"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// read from the connection</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		<span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"start to read from conn"</span><span class="token punctuation">)</span>
		n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn read error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// start a new goroutine to handle</span>
		<span class="token comment">// the new connection.</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept a new connection"</span><span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='client3.go'>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"log"</span>
	<span class="token string">"net"</span>
	<span class="token string">"os"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Args<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"usage: go run client3.go YOUR_CONTENT"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
	data <span class="token operator">:=</span> os<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
	conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>输出结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> go run .<span class="token punctuation">\</span>server3.go
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:11 accept a new connection2022/04/18 <span class="token number">23</span>:56:21 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:21 <span class="token builtin class-name">read</span> <span class="token number">5</span> bytes, content is hello
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:31 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:31 conn <span class="token builtin class-name">read</span> error: EOF


<span class="token punctuation">..</span>.

<span class="token operator">></span> go run .<span class="token punctuation">\</span>client3.go hello
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:11 begin dial<span class="token punctuation">..</span>.
<span class="token number">2022</span>/04/18 <span class="token number">23</span>:56:11 dial ok



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>从输出结果来看，当client端close socket退出后，server3依旧没有开始Read，10s后第一次Read成功读出了5个字节的数据，当第二次Read时，由于client端 socket关闭，Read返回EOF error。</p>
</details>
<p>通过上面这个例子，我们也可以猜测出“无数据关闭”情形下的结果，那就是Read直接返回EOF error。</p>
<h4 id="_5、读取操作超时" tabindex="-1"><a class="header-anchor" href="#_5、读取操作超时" aria-hidden="true">#</a> 5、读取操作超时</h4>
<p>有些场合对Read的阻塞时间有严格限制，在这种情况下，Read的行为到底是什么样的呢？在返回超时错误时，是否也同时Read了一部分数据了呢？这个实验比较难于模拟，下面的测试结果也未必能反映出所有可能结果。我们编写了client4.go和server4.go来模拟这一情形。</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/read_write/client4.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>

    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">65536</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//go-tcpsock/read_write/server4.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// read from the connection</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">65536</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"start to read from conn"</span><span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">SetReadDeadline</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Microsecond <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"conn read %d bytes,  error: %s"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">if</span> nerr<span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>net<span class="token punctuation">.</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> nerr<span class="token punctuation">.</span><span class="token function">Timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>在Server端我们通过Conn的SetReadDeadline方法设置了10微秒的读超时时间，Server的执行结果如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>$<span class="token keyword">go</span> run server4<span class="token punctuation">.</span><span class="token keyword">go</span>

<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">17</span> accept a <span class="token builtin">new</span> connection
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">27</span> start to read from conn
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">27</span> conn read <span class="token number">0</span> bytes<span class="token punctuation">,</span>  <span class="token builtin">error</span><span class="token punctuation">:</span> read tcp <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8888</span><span class="token operator">-</span><span class="token operator">></span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">60970</span><span class="token punctuation">:</span> i<span class="token operator">/</span>o timeout
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">37</span> start to read from conn
<span class="token number">2015</span><span class="token operator">/</span><span class="token number">11</span><span class="token operator">/</span><span class="token number">17</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">37</span> read <span class="token number">65536</span> bytes<span class="token punctuation">,</span> content is
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>虽然每次都是10微秒超时，但结果不同，第一次Read超时，读出数据长度为0；第二次读取所有数据成功，没有超时。反复执行了多次，没能出现“读出部分数据且返回超时错误”的情况。</p>
</details>
<hr>
<h3 id="conn-write" tabindex="-1"><a class="header-anchor" href="#conn-write" aria-hidden="true">#</a> <code>conn.Write</code></h3>
<p>和读相比，Write遇到的情形一样不少，我们也逐一看一下。</p>
<hr>
<h4 id="_1、成功写" tabindex="-1"><a class="header-anchor" href="#_1、成功写" aria-hidden="true">#</a> 1、成功写</h4>
<p>前面例子着重于Read，client端在Write时并未判断Write的返回值。所谓“成功写”指的就是Write调用返回的n与预期要写入的数据长度相等，且<code>error == nil</code>。这是我们在调用Write时遇到的最常见的情形，这里不再举例了。</p>
<h4 id="_2、写阻塞" tabindex="-1"><a class="header-anchor" href="#_2、写阻塞" aria-hidden="true">#</a> 2、写阻塞</h4>
<p>TCP连接通信两端的OS都会为该连接保留数据缓冲，一端调用Write后，实际上数据是写入到OS的协议栈的数据缓冲的。TCP是全双工通信，因此每个方向都有独立的数据缓冲。当发送方将对方的接收缓冲区以及自身的发送缓冲区写满后，Write就会阻塞。我们来看一个例子：client5.go和server.go。</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/read_write/client5.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial ok"</span><span class="token punctuation">)</span>

    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">65536</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> total <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            total <span class="token operator">+=</span> n
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"write %d bytes, error:%s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        total <span class="token operator">+=</span> n
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"write %d bytes this time, %d bytes in total\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> total<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"write %d bytes in total\n"</span><span class="token punctuation">,</span> total<span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//go-tcpsock/read_write/server5.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// read from the connection</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"start to read from conn"</span><span class="token punctuation">)</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"conn read %d bytes,  error: %s"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">if</span> nerr<span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>net<span class="token punctuation">.</span>Error<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token operator">&amp;&amp;</span> nerr<span class="token punctuation">.</span><span class="token function">Timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>Server5在前10s中并不Read数据，因此当client5一直尝试写入时，写到一定量后就会发生阻塞：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$go</span> run client5.go

<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 begin dial<span class="token punctuation">..</span>.
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 dial ok
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">65536</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">131072</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">196608</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">262144</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">327680</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">393216</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">458752</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">524288</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">589824</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">14</span>:57:33 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">655360</span> bytes <span class="token keyword">in</span> total
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在Darwin上，这个size大约在679468bytes。后续当server5每隔5s进行Read时，OS socket缓冲区腾出了空间，client5就又可以写入了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$go</span> run server5.go
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:01 accept a new connection
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:16 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:16 <span class="token builtin class-name">read</span> <span class="token number">60000</span> bytes, content is
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:21 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:21 <span class="token builtin class-name">read</span> <span class="token number">60000</span> bytes, content is
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:26 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:26 <span class="token builtin class-name">read</span> <span class="token number">60000</span> bytes, content is
<span class="token punctuation">..</span><span class="token punctuation">..</span>

client端：

<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:01 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">720896</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:06 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">786432</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:16 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">851968</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:16 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">917504</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:27 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">983040</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:07:27 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">1048576</span> bytes <span class="token keyword">in</span> total
<span class="token punctuation">..</span><span class="token punctuation">..</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></details>
<h4 id="_3、写入部分数据" tabindex="-1"><a class="header-anchor" href="#_3、写入部分数据" aria-hidden="true">#</a> 3、写入部分数据</h4>
<p>Write操作存在写入部分数据的情况，比如上面例子中，当client端输出日志停留在“write 65536 bytes this time, 655360 bytes in total”时，我们杀掉server5，这时我们会看到client5输出以下日志：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">..</span>.
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:19:14 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">655360</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:19:16 <span class="token function">write</span> <span class="token number">24108</span> bytes, error:write tcp <span class="token number">127.0</span>.0.1:62245-<span class="token operator">></span><span class="token number">127.0</span>.0.1:8888: write: broken pipe
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:19:16 <span class="token function">write</span> <span class="token number">679468</span> bytes <span class="token keyword">in</span> total
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>显然Write并非在655360这个地方阻塞的，而是后续又写入24108后发生了阻塞，server端socket关闭后，我们看到Wrote返回er != nil且n = 24108，程序需要对这部分写入的24108字节做特定处理。</p>
<h4 id="_4、写入超时" tabindex="-1"><a class="header-anchor" href="#_4、写入超时" aria-hidden="true">#</a> 4、写入超时</h4>
<p>如果非要给Write增加一个期限，那我们可以调用SetWriteDeadline方法。我们copy一份client5.go，形成client6.go，在client6.go的Write之前增加一行timeout设置代码：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>conn<span class="token punctuation">.</span><span class="token function">SetWriteDeadline</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Microsecond <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动server6.go，启动client6.go，我们可以看到写入超时的情况下，Write的返回结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$go</span> run client6.go
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 begin dial<span class="token punctuation">..</span>.
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 dial ok
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">65536</span> bytes <span class="token keyword">in</span> total
<span class="token punctuation">..</span>. <span class="token punctuation">..</span>.
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 <span class="token function">write</span> <span class="token number">65536</span> bytes this time, <span class="token number">655360</span> bytes <span class="token keyword">in</span> total
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 <span class="token function">write</span> <span class="token number">24108</span> bytes, error:write tcp <span class="token number">127.0</span>.0.1:62325-<span class="token operator">></span><span class="token number">127.0</span>.0.1:8888: i/o <span class="token function">timeout</span>
<span class="token number">2015</span>/11/17 <span class="token number">15</span>:26:34 <span class="token function">write</span> <span class="token number">679468</span> bytes <span class="token keyword">in</span> total
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以看到在写入超时时，依旧存在部分数据写入的情况。</p>
<hr>
<p>综上例子，虽然Go给我们提供了阻塞I/O的便利，但在调用Read和Write时依旧要综合需要方法返回的n和err的结果，以做出正确处理。<code>net.conn</code>实现了<code>io.Reader</code>和<code>io.Writer</code>接口，因此可以试用一些wrapper包进行socket读写，比如bufio包下面的Writer和Reader、io/ioutil下的函数等。</p>
<h3 id="goroutine-safe" tabindex="-1"><a class="header-anchor" href="#goroutine-safe" aria-hidden="true">#</a> Goroutine safe</h3>
<p>基于goroutine的网络架构模型，存在在不同goroutine间共享conn的情况，那么conn的读写是否是goroutine safe的呢？在深入这个问题之前，我们先从应用意义上来看read操作和write操作的goroutine-safe必要性。</p>
<p>对于read操作而言，由于TCP是面向字节流，conn.Read无法正确区分数据的业务边界，因此多个goroutine对同一个conn进行read的意义不大，goroutine读到不完整的业务包反倒是增加了业务处理的难度。对与Write操作而言，倒是有多个goroutine并发写的情况。不过conn读写是否goroutine-safe的测试不是很好做，我们先深入一下runtime代码，先从理论上给这个问题定个性：</p>
<p><code>net.conn</code>只是<code>*netFD</code>的wrapper结构，最终Write和Read都会落在其中的fd上：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> conn <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    fd <span class="token operator">*</span>netFD
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>netFD在不同平台上有着不同的实现，我们以net/fd_unix.go中的netFD为例：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Network file descriptor.</span>
<span class="token keyword">type</span> netFD <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// locking/lifetime of sysfd + serialize access to Read and Write methods</span>
    fdmu fdMutex

    <span class="token comment">// immutable until Close</span>
    sysfd       <span class="token builtin">int</span>
    family      <span class="token builtin">int</span>
    sotype      <span class="token builtin">int</span>
    isConnected <span class="token builtin">bool</span>
    net         <span class="token builtin">string</span>
    laddr       Addr
    raddr       Addr

    <span class="token comment">// wait server</span>
    pd pollDesc
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>我们看到netFD中包含了一个runtime实现的fdMutex类型字段，从注释上来看，该fdMutex用来串行化对该netFD对应的sysfd的Write和Read操作。从这个注释上来看，所有对conn的Read和Write操作都是有fdMutex互斥的，从netFD的Read和Write方法的实现也证实了这一点：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>fd <span class="token operator">*</span>netFD<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> fd<span class="token punctuation">.</span><span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> fd<span class="token punctuation">.</span><span class="token function">readUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> fd<span class="token punctuation">.</span>pd<span class="token punctuation">.</span><span class="token function">PrepareRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> err <span class="token operator">=</span> syscall<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>fd<span class="token punctuation">.</span>sysfd<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            n <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">if</span> err <span class="token operator">==</span> syscall<span class="token punctuation">.</span>EAGAIN <span class="token punctuation">{</span>
                <span class="token keyword">if</span> err <span class="token operator">=</span> fd<span class="token punctuation">.</span>pd<span class="token punctuation">.</span><span class="token function">WaitRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        err <span class="token operator">=</span> fd<span class="token punctuation">.</span><span class="token function">eofError</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>syscall<span class="token punctuation">.</span>Errno<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
        err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">NewSyscallError</span><span class="token punctuation">(</span><span class="token string">"read"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>fd <span class="token operator">*</span>netFD<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>p <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nn <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> fd<span class="token punctuation">.</span><span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> fd<span class="token punctuation">.</span><span class="token function">writeUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> fd<span class="token punctuation">.</span>pd<span class="token punctuation">.</span><span class="token function">PrepareWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> n <span class="token builtin">int</span>
        n<span class="token punctuation">,</span> err <span class="token operator">=</span> syscall<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>fd<span class="token punctuation">.</span>sysfd<span class="token punctuation">,</span> p<span class="token punctuation">[</span>nn<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
            nn <span class="token operator">+=</span> n
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> nn <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">==</span> syscall<span class="token punctuation">.</span>EAGAIN <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">=</span> fd<span class="token punctuation">.</span>pd<span class="token punctuation">.</span><span class="token function">WaitWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            err <span class="token operator">=</span> io<span class="token punctuation">.</span>ErrUnexpectedEOF
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span>syscall<span class="token punctuation">.</span>Errno<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
        err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">NewSyscallError</span><span class="token punctuation">(</span><span class="token string">"write"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nn<span class="token punctuation">,</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>每次Write操作都是受lock保护，直到此次数据全部write完。因此在应用层面，要想保证多个goroutine在一个conn上write操作的Safe，需要一次write完整写入一个“业务包”；一旦将业务包的写入拆分为多次write，那就无法保证某个Goroutine的某“业务包”数据在conn发送的连续性。</p>
<p>同时也可以看出即便是Read操作，也是lock保护的。多个Goroutine对同一conn的并发读不会出现读出内容重叠的情况，但内容断点是依 runtime调度来随机确定的。存在一个业务包数据，1/3内容被goroutine-1读走，另外2/3被另外一个goroutine-2读 走的情况。比如一个完整包：world，当goroutine的read slice size &lt; 5时，存在可能：一个goroutine读到 “worl”,另外一个goroutine读出”d”。</p>
<h2 id="四、socket属性" tabindex="-1"><a class="header-anchor" href="#四、socket属性" aria-hidden="true">#</a> 四、Socket属性</h2>
<p>原生Socket API提供了丰富的sockopt设置接口，但Golang有自己的网络架构模型，golang提供的socket options接口也是基于上述模型的必要的属性设置。包括</p>
<ul>
<li>SetKeepAlive</li>
<li>SetKeepAlivePeriod</li>
<li>SetLinger</li>
<li>SetNoDelay （默认no delay）</li>
<li>SetWriteBuffer</li>
<li>SetReadBuffer</li>
</ul>
<p>不过上面的Method是TCPConn的，而不是Conn的，要使用上面的Method的，需要type assertion：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>tcpConn, ok := c.(*TCPConn)
if !ok {
    //error handle
}

tcpConn.SetNoDelay(true)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>对于listener socket, golang默认采用了 SO_REUSEADDR，这样当你重启 listener程序时，不会因为address in use的错误而启动失败。而listen backlog的默认值是通过获取系统的设置值得到的。不同系统不同：mac 128, linux 512等。</p>
<h2 id="五、关闭连接" tabindex="-1"><a class="header-anchor" href="#五、关闭连接" aria-hidden="true">#</a> 五、关闭连接</h2>
<p>和前面的方法相比，关闭连接算是最简单的操作了。由于socket是全双工的，client和server端在己方已关闭的socket和对方关闭的socket上操作的结果有不同。看下面例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//go-tcpsock/conn_close/client1.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"begin dial..."</span><span class="token punctuation">)</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">":8888"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"dial error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"close ok"</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
    n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read % bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"write error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"write % bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//go-tcpsock/conn_close/server1.go</span>
<span class="token operator">...</span> <span class="token operator">...</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>c net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// read from the connection</span>
    <span class="token keyword">var</span> buf <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"start to read from conn"</span><span class="token punctuation">)</span>
    n<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn read error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"read %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    n<span class="token punctuation">,</span> err <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"conn write error:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"write %d bytes, content is %s\n"</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>上述例子的执行结果如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">$go</span> run server1.go
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 accept a new connection
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 start to <span class="token builtin class-name">read</span> from conn
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 conn <span class="token builtin class-name">read</span> error: EOF
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 <span class="token function">write</span> <span class="token number">10</span> bytes, content is

<span class="token variable">$go</span> run client1.go
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 begin dial<span class="token punctuation">..</span>.
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 close ok
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 <span class="token builtin class-name">read</span> error: <span class="token builtin class-name">read</span> tcp <span class="token number">127.0</span>.0.1:64195-<span class="token operator">></span><span class="token number">127.0</span>.0.1:8888: use of closed network connection
<span class="token number">2015</span>/11/17 <span class="token number">17</span>:00:51 <span class="token function">write</span> error: <span class="token function">write</span> tcp <span class="token number">127.0</span>.0.1:64195-<span class="token operator">></span><span class="token number">127.0</span>.0.1:8888: use of closed network connection
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>从client1的结果来看，在己方已经关闭的socket上再进行read和write操作，会得到”use of closed network connection” error；
从server1的执行结果来看，在对方关闭的socket上执行read操作会得到EOF error，但write操作会成功，因为数据会成功写入己方的内核socket缓冲区中，即便最终发不到对方socket缓冲区了，因为己方socket并未关闭。因此当发现对方socket关闭后，己方应该正确合理处理自己的socket，再继续write已经无任何意义了。</p>
<h3 id="六、小结" tabindex="-1"><a class="header-anchor" href="#六、小结" aria-hidden="true">#</a> 六、小结</h3>
<p>本文比较基础，但却很重要，毕竟golang是面向大规模服务后端的，对通信环节的细节的深入理解会大有裨益。另外Go的goroutine+阻塞通信的网络通信模型降低了开发者心智负担，简化了通信的复杂性，这点尤为重要。</p>
</template>
