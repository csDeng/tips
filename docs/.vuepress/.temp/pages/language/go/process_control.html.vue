<template><nav class="table-of-contents"><ul><li><RouterLink to="#流程控制">流程控制</RouterLink><ul><li><RouterLink to="#_1-select">1.select</RouterLink><ul><li><RouterLink to="#_1-1-select-语句">1.1. select 语句</RouterLink><ul><li><RouterLink to="#语法">语法</RouterLink></li></ul></li><li><RouterLink to="#_1-2-golang-select的使用及典型用法">1.2. Golang select的使用及典型用法</RouterLink><ul><li><RouterLink to="#基本使用">基本使用</RouterLink></li></ul></li><li><RouterLink to="#_1-3-典型用法">1.3. 典型用法</RouterLink><ul><li><RouterLink to="#_1-超时判断">1.超时判断</RouterLink></li><li><RouterLink to="#_2-退出">2.退出</RouterLink></li><li><RouterLink to="#_3-判断channel是否阻塞">3.判断channel是否阻塞</RouterLink></li></ul></li></ul></li></ul></li></ul></nav>
<h1 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h1>
<div class="custom-container tip"><p class="custom-container-title">主要要以下内容</p>
<ul>
<li>条件语句<code>if</code></li>
<li>条件语句<code>switch</code></li>
<li>条件语句<code>select</code></li>
<li>循环语句<code>for</code></li>
<li>循环语句<code>range</code></li>
<li>循环控制语句<code>goto</code>,<code>break</code>,<code>continue</code></li>
</ul>
</div>
<h2 id="_1-select" tabindex="-1"><a class="header-anchor" href="#_1-select" aria-hidden="true">#</a> 1.<code>select</code></h2>
<h3 id="_1-1-select-语句" tabindex="-1"><a class="header-anchor" href="#_1-1-select-语句" aria-hidden="true">#</a> 1.1. select 语句</h3>
<p>select 语句类似于 switch 语句，但是select会<strong>随机</strong>执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。</p>
<p>select 是Go中的一个控制结构，类似于用于通信的switch语句。每个case必须是一个通信操作，要么是发送要么是接收。 select 随机执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。一个默认的子句应该总是可运行的。</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<p>Go 编程语言中 select 语句的语法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>      
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 你可以定义任意数量的 case */</span>
    <span class="token keyword">default</span> <span class="token punctuation">:</span> <span class="token comment">/* 可选 */</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>以下描述了 select 语句的语法：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    每个case都必须是一个通信
    所有channel表达式都会被求值
    所有被发送的表达式都会被求值
    如果任意某个通信可以进行，它就执行；其他被忽略。
    如果有多个case都可以运行，Select会随机公平地选出一个执行。其他不会执行。
    否则：
    如果有default子句，则执行该语句。
    如果没有default字句，select将阻塞，直到某个通信可以运行；Go不会重新对channel或值进行求值。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><details class="custom-container details"><summary>实例：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> c3 <span class="token keyword">chan</span> <span class="token builtin">int</span>
   <span class="token keyword">var</span> i1<span class="token punctuation">,</span> i2 <span class="token builtin">int</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> i1 <span class="token operator">=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> <span class="token string">" from c1\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> c2 <span class="token operator">&lt;-</span> i2<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sent "</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> <span class="token string">" to c2\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> i3<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span>c3<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">// same as: i3, ok := &lt;-c3</span>
         <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i3<span class="token punctuation">,</span> <span class="token string">" from c3\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"c3 is closed\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"no communication\n"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>以上代码执行结果为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    no communication
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<p>select可以监听channel的数据流动</p>
<p>select的用法与switch语法非常类似，由select开始的一个新的选择块，每个选择条件由case语句来描述</p>
<p>与switch语句可以选择任何使用相等比较的条件相比，select有比较多的限制，其中最大的一条限制就是每个case语句里必须是一个IO操作</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">select</span> <span class="token punctuation">{</span> <span class="token comment">//不停的在这里检测</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>chanl <span class="token punctuation">:</span> <span class="token comment">//检测有没有数据可以读</span>
    <span class="token comment">//如果chanl成功读取到数据，则进行该case处理语句</span>
    <span class="token keyword">case</span> chan2 <span class="token operator">&lt;-</span> <span class="token number">1</span> <span class="token punctuation">:</span> <span class="token comment">//检测有没有可以写</span>
    <span class="token comment">//如果成功向chan2写入数据，则进行该case处理语句</span>


    <span class="token comment">//假如没有default，那么在以上两个条件都不成立的情况下，就会在此阻塞//一般default会不写在里面，select中的default子句总是可运行的，因为会很消耗CPU资源</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">//如果以上都没有符合条件，那么则进行default处理流程</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在一个select语句中，Go会按顺序从头到尾评估每一个发送和接收的语句。</p>
<p>如果其中的任意一个语句可以继续执行（即没有被阻塞），那么就从那些可以执行的语句中任意选择一条来使用。</p>
<hr>
<p>如果没有任意一条语句可以执行（即所有的通道都被阻塞），那么有两种可能的情况：</p>
<p>①如果给出了default语句，那么就会执行default的流程，同时程序的执行会从select语句后的语句中恢复。</p>
<p>②如果没有default语句，那么select语句将被阻塞，直到至少有一个case可以进行下去。</p>
<h3 id="_1-2-golang-select的使用及典型用法" tabindex="-1"><a class="header-anchor" href="#_1-2-golang-select的使用及典型用法" aria-hidden="true">#</a> 1.2. Golang select的使用及典型用法</h3>
<h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4>
<p>select是Go中的一个控制结构，类似于switch语句，用于处理异步IO操作。select会监听case语句中channel的读写操作，当case中channel读写操作为非阻塞状态（即能读写）时，将会触发相应的动作。 select中的case语句必须是一个channel操作</p>
<p>select中的default子句总是可运行的。</p>
<p>如果有多个case都可以运行，select会随机公平地选出一个执行，其他不会执行。</p>
<p>如果没有可运行的case语句，且有default语句，那么就会执行default的动作。</p>
<p>如果没有可运行的case语句，且没有default语句，select将阻塞，直到某个case通信可以运行</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> c3 <span class="token keyword">chan</span> <span class="token builtin">int</span>
   <span class="token keyword">var</span> i1<span class="token punctuation">,</span> i2 <span class="token builtin">int</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> i1 <span class="token operator">=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> <span class="token string">" from c1\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> c2 <span class="token operator">&lt;-</span> i2<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sent "</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> <span class="token string">" to c2\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> i3<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span>c3<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">// same as: i3, ok := &lt;-c3</span>
         <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i3<span class="token punctuation">,</span> <span class="token string">" from c3\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"c3 is closed\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"no communication\n"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>

<span class="token comment">//输出：no communication</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>
<h3 id="_1-3-典型用法" tabindex="-1"><a class="header-anchor" href="#_1-3-典型用法" aria-hidden="true">#</a> 1.3. 典型用法</h3>
<h4 id="_1-超时判断" tabindex="-1"><a class="header-anchor" href="#_1-超时判断" aria-hidden="true">#</a> 1.超时判断</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//比如在下面的场景中，使用全局resChan来接受response，如果时间超过3S,resChan中还没有数据返回，则第二条case将执行</span>
<span class="token keyword">var</span> resChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// do request</span>
<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> data <span class="token operator">:=</span> <span class="token operator">&lt;-</span>resChan<span class="token punctuation">:</span>
        <span class="token function">doData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"request time out"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">doData</span><span class="token punctuation">(</span>data <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="_2-退出" tabindex="-1"><a class="header-anchor" href="#_2-退出" aria-hidden="true">#</a> 2.退出</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//主线程（协程）中如下：</span>
<span class="token keyword">var</span> shouldQuit<span class="token operator">=</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
fun <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//loop</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//...out of the loop</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>c<span class="token punctuation">.</span>shouldQuit<span class="token punctuation">:</span>
            <span class="token function">cleanUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token punctuation">}</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token comment">//再另外一个协程中，如果运行遇到非法操作或不可处理的错误，就向shouldQuit发送数据通知程序停止运行</span>
<span class="token function">close</span><span class="token punctuation">(</span>shouldQuit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="_3-判断channel是否阻塞" tabindex="-1"><a class="header-anchor" href="#_3-判断channel是否阻塞" aria-hidden="true">#</a> 3.判断channel是否阻塞</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//在某些情况下是存在不希望channel缓存满了的需求的，可以用如下方法判断</span>
ch <span class="token operator">:=</span> <span class="token builtin">make</span> <span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">//...</span>
data：<span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> data<span class="token punctuation">:</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    <span class="token comment">//做相应操作，比如丢弃data。视需求而定</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
