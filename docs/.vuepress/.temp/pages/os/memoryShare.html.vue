<template><h1 id="进程间通信-共享内存" tabindex="-1"><a class="header-anchor" href="#进程间通信-共享内存" aria-hidden="true">#</a> 进程间通信 共享内存</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>本文主要参考：<a href="https://www.cnblogs.com/52php/p/5861372.html" target="_blank" rel="noopener noreferrer">Linux进程间通信（六）：共享内存 shmget()、shmat()、shmdt()、shmctl() - 52php - 博客园 (cnblogs.com)<ExternalLinkIcon/></a>，并辅以自己的验证以及部分额外知识补充。</p>
</div>
<h2 id="一、什么是共享内存" tabindex="-1"><a class="header-anchor" href="#一、什么是共享内存" aria-hidden="true">#</a> 一、什么是共享内存</h2>
<p>顾名思义，共享内存就是允许两个不相关的进程访问同一个逻辑内存。共享内存是在两个正在运行的进程之间共享和传递数据的一种非常有效的方式。不同进程之间共享的内存通常安排为同一段物理内存。进程可以将同一段共享内存连接到它们自己的地址空间中，所有进程都可以访问共享内存中的地址，就好像它们是由用C语言函数malloc()分配的内存一样。而如果某个进程向共享内存写入数据，所做的改动将立即影响到可以访问同一段共享内存的任何其他进程。</p>
<p>特别提醒：共享内存并未提供同步机制，也就是说，在第一个进程结束对共享内存的写操作之前，并无自动机制可以阻止第二个进程开始对它进行读取。所以我们通常需要用其他的机制来同步对共享内存的访问，例如信号量。</p>
<h2 id="二、共享内存的使用" tabindex="-1"><a class="header-anchor" href="#二、共享内存的使用" aria-hidden="true">#</a> 二、共享内存的使用</h2>
<p>与信号量一样，在Linux中也提供了一组函数接口用于使用共享内存，而且使用共享共存的接口还与信号量的非常相似，而且比使用信号量的接口来得简单。它们声明在头文件 <code>sys/shm.h </code>中。</p>
<p><strong>1、shmget()函数</strong></p>
<details class="custom-container details">
<p>该函数用来创建共享内存，它的原型为：</p>
<blockquote>
<p>int shmget(key_t key, size_t size, int shmflg);</p>
</blockquote>
<p>第一个参数，与信号量的semget函数一样，程序需要提供一个参数key（非0整数），它有效地为共享内存段命名，shmget()函数成功时返回一个与key相关的共享内存标识符（非负整数），用于后续的共享内存函数。调用失败返回-1.</p>
<p>不相关的进程可以通过该函数的返回值访问同一共享内存，它代表程序可能要使用的某个资源，程序对所有共享内存的访问都是间接的，程序先通过调用shmget()函数并提供一个键，再由系统生成一个相应的共享内存标识符（shmget()函数的返回值），只有shmget()函数才直接使用信号量键，所有其他的信号量函数使用由semget函数返回的信号量标识符。</p>
<p>第二个参数，size以字节为单位指定需要共享的内存容量</p>
<p>第三个参数，shmflg是权限标志，它的作用与open函数的mode参数一样，如果要想在key标识的共享内存不存在时，创建它的话，可以与IPC_CREAT做或操作。共享内存的权限标志与文件的读写权限一样，举例来说，0644,它表示允许一个进程创建的共享内存被内存创建者所拥有的进程向共享内存读取和写入数据，同时其他用户创建的进程只能读取共享内存。</p>
</details>
<p><strong>2、shmat()函数   -- at：attach</strong></p>
<details class="custom-container details">
<p>第一次创建完共享内存时，它还不能被任何进程访问，shmat()函数的作用就是用来启动对该共享内存的访问，并把共享内存连接到当前进程的地址空间。它的原型如下：</p>
<blockquote>
<p>void *shmat(int shm_id, const void *shm_addr, int shmflg);</p>
</blockquote>
<p>第一个参数，shm_id是由shmget()函数返回的共享内存标识。</p>
<p>第二个参数，shm_addr指定共享内存连接到当前进程中的地址位置，通常为空，表示让系统来选择共享内存的地址。</p>
<p>第三个参数，shm_flg是一组标志位，通常为0。</p>
<p>调用成功时返回一个指向共享内存第一个字节的指针，如果调用失败返回-1.</p>
</details>
<p><strong>3、shmdt()函数   -- dt：detach</strong></p>
<details class="custom-container details">
<p>该函数用于将共享内存从当前进程中分离。注意，将共享内存分离并不是删除它，只是使该共享内存对当前进程不再可用。它的原型如下：</p>
<blockquote>
<p>int shmdt(const void *shmaddr);</p>
</blockquote>
<p>参数shmaddr是shmat()函数返回的地址指针，调用成功时返回0，失败时返回-1.</p>
<p><strong>4、shmctl()函数   -- ctl：control</strong></p>
<p>与信号量的semctl()函数一样，用来控制共享内存，它的原型如下：</p>
<blockquote>
<p>int shmctl(int shm_id, int command, struct shmid_ds *buf);</p>
</blockquote>
<p>第一个参数，shm_id是shmget()函数返回的共享内存标识符。</p>
<p>第二个参数，command是要采取的操作，它可以取下面的三个值 ：</p>
<ul>
<li>IPC_STAT：把shmid_ds结构中的数据设置为共享内存的当前关联值，即用共享内存的当前关联值覆盖shmid_ds的值。</li>
<li>IPC_SET：如果进程有足够的权限，就把共享内存的当前关联值设置为shmid_ds结构中给出的值</li>
<li>IPC_RMID：删除共享内存段</li>
</ul>
<p>第三个参数，buf是一个结构指针，它指向共享内存模式和访问权限的结构。</p>
<p>shmid_ds结构 至少包括以下成员：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">shmid_ds</span> <span class="token punctuation">{</span>
    <span class="token class-name">uid_t</span> shm_perm<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
    <span class="token class-name">uid_t</span> shm_perm<span class="token punctuation">.</span>gid<span class="token punctuation">;</span>
    <span class="token class-name">mode_t</span> shm_perm<span class="token punctuation">.</span>mode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<h2 id="三、使用共享内存进行进程间通信" tabindex="-1"><a class="header-anchor" href="#三、使用共享内存进行进程间通信" aria-hidden="true">#</a> 三、使用共享内存进行进程间通信</h2>
<p>说了这么多，又到了实战的时候了。下面就以两个不相关的进程来说明进程间如何通过共享内存来进行通信。其中一个文件<code>shmread.c</code>创建共享内存，并读取其中的信息，另一个文件<code>shmwrite.c</code>向共享内存中写入数据。为了方便操作和数据结构的统一，为这两个文件定义了相同的数据结构，定义在文件<code>shmdata.c</code>中。结构<code>shared_use_st</code>中的<code>written</code>作为一个可读或可写的标志，非0：表示可读，0：表示可写，text则是内存中的文件。</p>
<CodeGroup>
<CodeGroupItem title='shmdata.h' active>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">_SHMDATA_H_HEADER</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">_SHMDATA_H_HEADER</span></span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">TEXT_SZ</span> <span class="token expression"><span class="token number">2048</span></span></span>
 
<span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> written<span class="token punctuation">;</span> <span class="token comment">// 作为一个标志，非0：表示可读，0：表示可写</span>
    <span class="token keyword">char</span> text<span class="token punctuation">[</span>TEXT_SZ<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 记录写入 和 读取 的文本</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='shmread.c'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stddef.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/shm.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"shmdata.h"</span></span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>argv<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>shm <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span> <span class="token operator">*</span>shared<span class="token punctuation">;</span> <span class="token comment">// 指向shm</span>
    <span class="token keyword">int</span> shmid<span class="token punctuation">;</span> <span class="token comment">// 共享内存标识符</span>
 
    <span class="token comment">// 创建共享内存</span>
    shmid <span class="token operator">=</span> <span class="token function">shmget</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">key_t</span><span class="token punctuation">)</span><span class="token number">1234</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0666</span><span class="token operator">|</span>IPC_CREAT<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shmid <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmat failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 将共享内存连接到当前进程的地址空间</span>
    shm <span class="token operator">=</span> <span class="token function">shmat</span><span class="token punctuation">(</span>shmid<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shm <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmat failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// printf("\nMemory attached at %X\n", (int)shm);</span>
 
    <span class="token comment">// 设置共享内存</span>
    shared <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span><span class="token operator">*</span><span class="token punctuation">)</span>shm<span class="token punctuation">;</span> <span class="token comment">// 注意：shm有点类似通过 malloc() 获取到的内存，所以这里需要做个 类型强制转换</span>
    shared<span class="token operator">-></span>written <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 读取共享内存中的数据</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 没有进程向内存写数据，有数据可读取</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shared<span class="token operator">-></span>written <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"You wrote: %s"</span><span class="token punctuation">,</span> shared<span class="token operator">-></span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
            <span class="token comment">// 读取完数据，设置written使共享内存段可写</span>
            shared<span class="token operator">-></span>written <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 
            <span class="token comment">// 输入了 end，退出循环（程序）</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strncmp</span><span class="token punctuation">(</span>shared<span class="token operator">-></span>text<span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token comment">// 有其他进程在写数据，不能读取数据</span>
        <span class="token punctuation">{</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 把共享内存从当前进程中分离</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shmdt</span><span class="token punctuation">(</span>shm<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmdt failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 删除共享内存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shmctl</span><span class="token punctuation">(</span>shmid<span class="token punctuation">,</span> IPC_RMID<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmctl(IPC_RMID) failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_SUCCESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='shmwrite.c'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/shm.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"shmdata.h"</span></span>
 
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span><span class="token operator">*</span>argv<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>shm <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span> <span class="token operator">*</span>shared <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> buffer<span class="token punctuation">[</span>BUFSIZ <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 用于保存输入的文本</span>
    <span class="token keyword">int</span> shmid<span class="token punctuation">;</span>
 
    <span class="token comment">// 创建共享内存</span>
    shmid <span class="token operator">=</span> <span class="token function">shmget</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">key_t</span><span class="token punctuation">)</span><span class="token number">1234</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0666</span><span class="token operator">|</span>IPC_CREAT<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shmid <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmget failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 将共享内存连接到当前的进程地址空间</span>
    shm <span class="token operator">=</span> <span class="token function">shmat</span><span class="token punctuation">(</span>shmid<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shm <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmat failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// printf("Memory attched at %X\n", (int)shm);</span>
 
    <span class="token comment">// 设置共享内存</span>
    shared <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">shared_use_st</span> <span class="token operator">*</span><span class="token punctuation">)</span>shm<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 向共享内存中写数据</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 数据还没有被读取，则等待数据被读取，不能向共享内存中写入文本</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>shared<span class="token operator">-></span>written <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Waiting...\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
        <span class="token comment">// 向共享内存中写入数据</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Enter some text: "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fgets</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> BUFSIZ<span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">strncpy</span><span class="token punctuation">(</span>shared<span class="token operator">-></span>text<span class="token punctuation">,</span> buffer<span class="token punctuation">,</span> TEXT_SZ<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 写完数据，设置written使共享内存段可读</span>
        shared<span class="token operator">-></span>written <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 输入了end，退出循环（程序）</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strncmp</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token string">"end"</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// 把共享内存从当前进程中分离</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shmdt</span><span class="token punctuation">(</span>shm<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">fprintf</span><span class="token punctuation">(</span><span class="token constant">stderr</span><span class="token punctuation">,</span> <span class="token string">"shmdt failed\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_FAILURE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">exit</span><span class="token punctuation">(</span>EXIT_SUCCESS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>将文件拖到<code>linux</code>服务器编译</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gcc -o shmwrite.exe shmwrite.c

gcc -o  shmread.exe shmread.c

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/os/pics/memoryShare/image-20220417231729523.png" alt="image-20220417231729523"></p>
<p>运行两个文件</p>
<p><img src="@source/os/pics/memoryShare/image-20220417232231522.png" alt="image-20220417232231522"></p>
<details class="custom-container details"><summary>linux jobs 命令</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 以前文用的命令为例</span>

ubuntu@VM-0-17-ubuntu:~/c$ ./shmread.exe
^Z 															<span class="token comment"># ctrl + z 将一个正在前台执行的命令放到后台，并且暂停</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 ./shmread.exe
ubuntu@VM-0-17-ubuntu:~/c$ ./shmwrite.exe
Enter some text: hello
Waiting<span class="token punctuation">..</span>.
Waiting<span class="token punctuation">..</span>.
^Z
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+  Stopped                 ./shmwrite.exe
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">jobs</span>									<span class="token comment"># 查看后台作业池</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>-  Stopped                 ./shmread.exe
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+  Stopped                 ./shmwrite.exe
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">fg</span> <span class="token number">1</span>									<span class="token comment"># 将一号作业切换到前台运行</span>
./shmread.exe
You wrote: hello
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 ./shmread.exe
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 ./shmread.exe
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>-  Stopped                 ./shmwrite.exe
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">bg</span> <span class="token number">1</span>									<span class="token comment"># 将一号作业切换至后台运行</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ ./shmread.exe <span class="token operator">&amp;</span>
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>-  Running                 ./shmread.exe <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+  Stopped                 ./shmwrite.exe
ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">fg</span> <span class="token number">2</span>									<span class="token comment"># 将二号作业切换至前台运行</span>
./shmwrite.exe
Waiting<span class="token punctuation">..</span>.
Enter some text: hello
You wrote: hello
Waiting<span class="token punctuation">..</span>.
Waiting<span class="token punctuation">..</span>.
Enter some text: world
You wrote: world
Waiting<span class="token punctuation">..</span>.
Waiting<span class="token punctuation">..</span>.
Enter some text: end
You wrote: end
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>-  Done                    ./shmread.exe

ubuntu@VM-0-17-ubuntu:~/c$ <span class="token function">jobs</span>                 				<span class="token comment"># 输出为空，表示当前作业池内的作业已执行完毕</span>
ubuntu@VM-0-17-ubuntu:~/c$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>参考：<a href="https://www.cnblogs.com/xiaoleiel/p/8349675.html?msclkid=85804eb8be6311ecb4b9b51625cda830" target="_blank" rel="noopener noreferrer">LINUX任务(jobs)详解 - 追忆丶年华 - 博客园 (cnblogs.com)<ExternalLinkIcon/></a></p>
</details>
<p><strong>分析：</strong></p>
<p>1、程序<code>shmread</code><strong>创建共享内存，然后将它连接到自己的地址空间</strong>。在共享内存的开始处使用了一个结构<code>struct_use_st</code>。该结构中有个标志<code>written</code>，当共享内存中有其他进程向它写入数据时，共享内存中的written被设置为0，程序等待。当它不为0时，表示没有进程对共享内存写入数据，程序就从共享内存中读取数据并输出，然后重置设置共享内存中的written为0，即让其可被shmwrite进程写入数据。</p>
<p>2、程序<code>shmwrite</code><strong>取得共享内存并连接到自己的地址空间中</strong>。检查共享内存中的written，是否为0，若不是，表示共享内存中的数据还没有被完，则等待其他进程读取完成，并提示用户等待。若共享内存的written为0，表示没有其他进程对共享内存进行读取，则提示用户输入文本，并再次设置共享内存中的written为1，表示写完成，其他进程可对共享内存进行读操作。</p>
<h2 id="四、关于前面的例子的安全性讨论" tabindex="-1"><a class="header-anchor" href="#四、关于前面的例子的安全性讨论" aria-hidden="true">#</a> 四、关于前面的例子的安全性讨论</h2>
<p>这个程序是不安全的，当有多个程序同时向共享内存中读写数据时，问题就会出现。可能你会认为，可以改变一下written的使用方式，例如，只有当written为0时进程才可以向共享内存写入数据，而当一个进程只有在written不为0时才能对其进行读取，同时把written进行加1操作，读取完后进行减1操作。这就有点像文件锁中的读写锁的功能。咋看之下，它似乎能行得通。但是这都不是原子操作，所以这种做法是行不通的。试想当written为0时，如果有两个进程同时访问共享内存，它们就会发现written为0，于是两个进程都对其进行写操作，显然不行。当written为1时，有两个进程同时对共享内存进行读操作时也是如些，当这两个进程都读取完是，written就变成了-1.</p>
<p>要想让程序安全地执行，就要有一种进程同步的进制，保证在进入临界区的操作是原子操作。例如，可以使用前面所讲的信号量来进行进程的同步。因为信号量的操作都是原子性的。</p>
<h2 id="五、使用共享内存的优缺点" tabindex="-1"><a class="header-anchor" href="#五、使用共享内存的优缺点" aria-hidden="true">#</a> 五、使用共享内存的优缺点</h2>
<p>1、优点：我们可以看到使用共享内存进行进程间的通信真的是非常方便，而且函数的接口也简单，数据的共享还使进程间的数据不用传送，而是直接访问内存，也加快了程序的效率。同时，它也不像匿名管道那样要求通信的进程有一定的父子关系。</p>
<p>2、缺点：共享内存没有提供同步的机制，这使得我们在使用共享内存进行进程间通信时，往往要借助其他的手段来进行进程间的同步工作。</p>
<h2 id="六、posix共享内存api实现类似效果" tabindex="-1"><a class="header-anchor" href="#六、posix共享内存api实现类似效果" aria-hidden="true">#</a> 六、POSIX共享内存api实现类似效果</h2>
<p>参考<a href="https://man7.org/linux/man-pages/man7/shm_overview.7.html" target="_blank" rel="noopener noreferrer">shm_overview(7) - Linux manual page (man7.org)<ExternalLinkIcon/></a>以及《操作系统概念第九版》</p>
<details class="custom-container details">
<CodeGroup>
<CodeGroupItem title='producer.c' active>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;fcntl.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/shm.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/stat.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/mman.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">/* the size(how many bytes) of shared memory object */</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> SIZE <span class="token operator">=</span> <span class="token number">4096</span><span class="token punctuation">;</span>

	<span class="token comment">/* name of shared memory object*/</span>
	<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>name <span class="token operator">=</span> <span class="token string">"OS"</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>message_0 <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>message_1 <span class="token operator">=</span> <span class="token string">"World"</span><span class="token punctuation">;</span>

	<span class="token comment">/* shared memory file descriptor */</span>
	<span class="token keyword">int</span> shm_fd<span class="token punctuation">;</span>

	<span class="token comment">/* the pointer to shred memory object*/</span>
	<span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

	<span class="token comment">/* create the shared memory*/</span>
	shm_fd <span class="token operator">=</span> <span class="token function">shm_open</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> O_CREAT <span class="token operator">|</span> O_RDWR<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/* configure the size of the shared memory object*/</span>
	<span class="token function">ftruncate</span><span class="token punctuation">(</span>shm_fd<span class="token punctuation">,</span> SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/* memory map the shared memory object*/</span>
	ptr <span class="token operator">=</span> <span class="token function">mmap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>SIZE<span class="token punctuation">,</span> PROT_WRITE<span class="token punctuation">,</span> MAP_SHARED<span class="token punctuation">,</span> shm_fd<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">sprintf</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span> <span class="token string">"%s"</span><span class="token punctuation">,</span> message_0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	ptr <span class="token operator">+=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>message_0<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">sprintf</span><span class="token punctuation">(</span>ptr<span class="token punctuation">,</span><span class="token string">"%s"</span><span class="token punctuation">,</span>message_1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	ptr <span class="token operator">+=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>message_1<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='customer.c'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;fcntl.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/shm.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;sys/stat.h></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/mman.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">/* the size(how many bytes) of shared memory object */</span>
	<span class="token keyword">const</span> <span class="token keyword">int</span> SIZE <span class="token operator">=</span> <span class="token number">4096</span><span class="token punctuation">;</span>

	<span class="token comment">/* name of shared memory object*/</span>
	<span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>name <span class="token operator">=</span> <span class="token string">"OS"</span><span class="token punctuation">;</span>

	<span class="token comment">/* shared memory file descriptor */</span>
	<span class="token keyword">int</span> shm_fd<span class="token punctuation">;</span>

	<span class="token comment">/* the pointer to shred memory object*/</span>
	<span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

	<span class="token comment">/* create the shared memory*/</span>
	shm_fd <span class="token operator">=</span> <span class="token function">shm_open</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> O_RDONLY<span class="token punctuation">,</span> <span class="token number">0666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	
	<span class="token comment">/* memory map the shared memory object*/</span>
	ptr <span class="token operator">=</span> <span class="token function">mmap</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>SIZE<span class="token punctuation">,</span> PROT_READ<span class="token punctuation">,</span> MAP_SHARED<span class="token punctuation">,</span> shm_fd<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%s"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>ptr <span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">/* remove the shared memory object*/</span>
	<span class="token function">shm_unlink</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>运行结果</li>
</ul>
<p>注意先运行生产者代码（创建共享内存），在运行消费者代码（删除共享内存对象，还原为普通内存）</p>
<blockquote>
<p>编译时记得链接库<code>-lrt</code></p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
ubuntu@VM-0-17-ubuntu:~/c$ gcc -o producer.exe producer.c -lrt
ubuntu@VM-0-17-ubuntu:~/c$ gcc -o customer.exe customer.c -lrt
ubuntu@VM-0-17-ubuntu:~/c$ ./producer.exe
ubuntu@VM-0-17-ubuntu:~/c$ ./customer.exe
HelloWorldubuntu@VM-0-17-ubuntu:~/c$ ./customer.exe
Segmentation fault <span class="token punctuation">(</span>core dumped<span class="token punctuation">)</span>
ubuntu@VM-0-17-ubuntu:~/c$

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>如果先运行消费者代码会报找不到共享内存的段错误。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
ubuntu@VM-0-17-ubuntu:~/c$ ./customer.exe
Segmentation fault <span class="token punctuation">(</span>core dumped<span class="token punctuation">)</span>
ubuntu@VM-0-17-ubuntu:~/c$ ./producer.exe
ubuntu@VM-0-17-ubuntu:~/c$ ./customer.exe
HelloWorldubuntu@VM-0-17-ubuntu:~/c$

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
</template>
