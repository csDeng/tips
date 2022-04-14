<template><h1 id="socket-编程" tabindex="-1"><a class="header-anchor" href="#socket-编程" aria-hidden="true">#</a> socket 编程</h1>
<p><code>Socket</code>是BSD UNIX的进程通信机制，通常也称作”套接字”，用于描述IP地址和端口，是一个通信链的句柄。<code>Socket</code>可以理解为TCP/IP网络的API，它定义了许多函数或例程，程序员可以用它们来开发TCP/IP网络上的应用程序。电脑上运行的应用程序通常通过”套接字”向网络发出请求或者应答网络请求。</p>
<h2 id="_1-socket图解" tabindex="-1"><a class="header-anchor" href="#_1-socket图解" aria-hidden="true">#</a> 1. socket图解</h2>
<p>Socket是应用层与TCP/IP协议族通信的中间软件抽象层。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket后面，对用户来说只需要调用Socket规定的相关函数，让Socket去组织符合指定的协议数据然后进行通信。</p>
<p><img src="@source/language/go/net/pics/socket/m_7a3fd62eebab50a962857bf9a421495a_r.png" alt="null"></p>
<ul>
<li>Socket又称“套接字”，应用程序通常通过“套接字”向网络发出请求或者应答网络请求</li>
<li>常用的Socket类型有两种：流式Socket和数据报式Socket，流式是一种面向连接的Socket，针对于面向连接的TCP服务应用，数据报式Socket是一种无连接的Socket，针对于无连接的UDP服务应用</li>
<li>TCP：比较靠谱，面向连接，比较慢</li>
<li>UDP：不是太靠谱，比较快</li>
</ul>
<p>举个例子：TCP就像货到付款的快递，送到家还必须见到你人才算一整套流程。UDP就像某快递快递柜一扔就走管你收到收不到，一般直播用UDP。</p>
<h2 id="_2-tcp-编程" tabindex="-1"><a class="header-anchor" href="#_2-tcp-编程" aria-hidden="true">#</a> 2. TCP 编程</h2>
<p>TCP/IP(Transmission Control Protocol/Internet Protocol) 即传输控制协议/网际协议，是一种面向连接（连接导向）的、可靠的、基于字节流的传输层（Transport layer）通信协议，因为是面向连接的协议，数据像水流一样传输，会存在黏包问题。</p>
<h3 id="tcp服务端" tabindex="-1"><a class="header-anchor" href="#tcp服务端" aria-hidden="true">#</a> TCP服务端</h3>
<p>一个TCP服务端可以同时连接很多个客户端，例如世界各地的用户使用自己电脑上的浏览器访问淘宝网。因为Go语言中创建多个goroutine实现并发非常方便和高效，所以我们可以每建立一次链接就创建一个goroutine去处理。</p>
<p>TCP服务端程序的处理流程：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.监听端口
    2.接收客户端请求建立链接
    3.创建goroutine处理链接。   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们使用Go语言的net包实现的TCP服务端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// tcp/server/main.go</span>

<span class="token comment">// TCP server端</span>

<span class="token comment">// 处理函数</span>
<span class="token keyword">func</span> <span class="token function">process</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭连接</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        reader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
        <span class="token keyword">var</span> buf <span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> reader<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 读取数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read from client failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        recvStr <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"收到client端发来的数据："</span><span class="token punctuation">,</span> recvStr<span class="token punctuation">)</span>
        conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>recvStr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:20000"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 建立连接</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"accept failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token function">process</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token comment">// 启动一个goroutine处理连接</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>将上面的代码保存之后编译成server或server.exe可执行文件。</p>
<h3 id="tcp客户端" tabindex="-1"><a class="header-anchor" href="#tcp客户端" aria-hidden="true">#</a> TCP客户端</h3>
<p>一个TCP客户端进行TCP通信的流程如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.建立与服务端的链接
    2.进行数据收发
    3.关闭链接   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用Go语言的net包实现的TCP客户端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// tcp/client/main.go</span>

<span class="token comment">// 客户端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> <span class="token string">"127.0.0.1:20000"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"err :"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭连接</span>
    inputReader <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> inputReader<span class="token punctuation">.</span><span class="token function">ReadString</span><span class="token punctuation">(</span><span class="token char">'\n'</span><span class="token punctuation">)</span> <span class="token comment">// 读取用户输入</span>
        inputInfo <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token string">"\r\n"</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">ToUpper</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">"Q"</span> <span class="token punctuation">{</span> <span class="token comment">// 如果输入q就退出</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>inputInfo<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        buf <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">512</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"recv failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>将上面的代码编译成client或client.exe可执行文件，先启动server端再启动client端，在client端输入任意内容回车之后就能够在server端看到client端发送的数据，从而实现TCP通信。</p>
<h2 id="_3-udp编程" tabindex="-1"><a class="header-anchor" href="#_3-udp编程" aria-hidden="true">#</a> 3.UDP编程</h2>
<p>UDP协议（User Datagram Protocol）中文名称是用户数据报协议，是OSI（Open System Interconnection，开放式系统互联）参考模型中一种无连接的传输层协议，不需要建立连接就能直接进行数据发送和接收，属于不可靠的、没有时序的通信，但是UDP协议的实时性比较好，通常用于视频直播相关领域。</p>
<h3 id="udp服务端" tabindex="-1"><a class="header-anchor" href="#udp服务端" aria-hidden="true">#</a> UDP服务端</h3>
<p>使用Go语言的net包实现的UDP服务端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UDP/server/main.go</span>

<span class="token comment">// UDP server端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    listen<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenUDP</span><span class="token punctuation">(</span><span class="token string">"udp"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
        IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Port<span class="token punctuation">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"listen failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> listen<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
        n<span class="token punctuation">,</span> addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> listen<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 接收数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"read udp failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"data:%v addr:%v count:%v\n"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> listen<span class="token punctuation">.</span><span class="token function">WriteToUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"write to udp failed, err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="udp客户端" tabindex="-1"><a class="header-anchor" href="#udp客户端" aria-hidden="true">#</a> UDP客户端</h3>
<p>使用Go语言的net包实现的UDP客户端代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// UDP 客户端</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    socket<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">DialUDP</span><span class="token punctuation">(</span><span class="token string">"udp"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>UDPAddr<span class="token punctuation">{</span>
        IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">IPv4</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Port<span class="token punctuation">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"连接服务端失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> socket<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    sendData <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"Hello server"</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> socket<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>sendData<span class="token punctuation">)</span> <span class="token comment">// 发送数据</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"发送数据失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">4096</span><span class="token punctuation">)</span>
    n<span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> err <span class="token operator">:=</span> socket<span class="token punctuation">.</span><span class="token function">ReadFromUDP</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 接收数据</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"接收数据失败，err:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"recv:%v addr:%v count:%v\n"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> remoteAddr<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_4-实现一个全双工的简易聊天室" tabindex="-1"><a class="header-anchor" href="#_4-实现一个全双工的简易聊天室" aria-hidden="true">#</a> 4. 实现一个全双工的简易聊天室</h2>
<p><strong>全双工</strong>（<strong>full-duplex</strong>）的系统允许二台设备间同时进行双向资料传输。全双工的系统可以用<a href="https://zh.wikipedia.org/wiki/%E5%A4%8D%E7%BA%BF%E9%93%81%E8%B7%AF" target="_blank" rel="noopener noreferrer">复线铁路<ExternalLinkIcon/></a>类比。两个方向的车辆因使用不同的轨道，因此不会互相影响。</p>
<p>一般的<a href="https://zh.wikipedia.org/wiki/%E9%9B%BB%E8%A9%B1" target="_blank" rel="noopener noreferrer">电话<ExternalLinkIcon/></a>、<a href="https://zh.wikipedia.org/wiki/%E6%89%8B%E6%A9%9F" target="_blank" rel="noopener noreferrer">手机<ExternalLinkIcon/></a>就是全双工的系统，因为在讲话时同时也可以听到对方的声音。</p>
<h3 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h3>
<ol>
<li>服务端可以时刻收发信息</li>
<li>客户端也可以时刻手法信息</li>
</ol>
</template>
