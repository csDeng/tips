<template><nav class="table-of-contents"><ul><li><RouterLink to="#数组和切片">数组和切片</RouterLink><ul><li><RouterLink to="#数组">数组</RouterLink><ul><li><RouterLink to="#数组初始化">数组初始化</RouterLink><ul><li><RouterLink to="#一维数组">一维数组：</RouterLink></li><li><RouterLink to="#多维数组">多维数组</RouterLink></li><li><RouterLink to="#多维数组遍历">多维数组遍历：</RouterLink></li></ul></li><li><RouterLink to="#数组拷贝和传参">数组拷贝和传参</RouterLink></li><li><RouterLink to="#数组练习">数组练习</RouterLink><ul><li><RouterLink to="#求数组所有元素之和">求数组所有元素之和</RouterLink></li><li><RouterLink to="#找出数组中和为给定值的两个元素的下标-例如数组-1-3-5-8-7-找出两个元素之和等于8的下标分别是-0-4-和-1-2">找出数组中和为给定值的两个元素的下标，例如数组[1,3,5,8,7]，找出两个元素之和等于8的下标分别是（0，4）和（1，2）</RouterLink></li></ul></li></ul></li><li><RouterLink to="#切片">切片</RouterLink><ul><li><RouterLink to="#创建切片的各种方式">创建切片的各种方式</RouterLink><ul><li><RouterLink to="#_1-利用数组来创建">1. 利用数组来创建</RouterLink></li><li><RouterLink to="#_2-通过make来创建">2. 通过make来创建</RouterLink></li><li><RouterLink to="#_3-直接创建-slice-对象-自动分配底层数组。">3. 直接创建 slice 对象，自动分配底层数组。</RouterLink></li></ul></li><li><RouterLink to="#切片的内存布局">切片的内存布局</RouterLink></li><li><RouterLink to="#查">查</RouterLink></li><li><RouterLink to="#改">改</RouterLink></li><li><RouterLink to="#删">删</RouterLink></li><li><RouterLink to="#增">增</RouterLink></li></ul></li><li><RouterLink to="#扩展">扩展</RouterLink><ul><li><RouterLink to="#字符串和切片-string-and-slice">字符串和切片（string and slice）</RouterLink></li><li><RouterLink to="#含有中文字符串">含有中文字符串：</RouterLink></li><li><RouterLink to="#slice-data-6-8-两个冒号的理解">slice data[:6:8] 两个冒号的理解</RouterLink></li><li><RouterLink to="#数组or切片转字符串">数组or切片转字符串：</RouterLink></li></ul></li><li><RouterLink to="#slice的源码">slice的源码</RouterLink></li><li><RouterLink to="#slice的底层实现">slice的底层实现</RouterLink><ul><li><RouterLink to="#切片和数组">切片和数组</RouterLink></li><li><RouterLink to="#切片的数据结构">切片的数据结构</RouterLink></li><li><RouterLink to="#创建切片">创建切片</RouterLink><ul><li><RouterLink to="#make-和切片字面量">make 和切片字面量</RouterLink></li><li><RouterLink to="#nil-和空切片">nil 和空切片</RouterLink></li></ul></li><li><RouterLink to="#切片扩容">切片扩容</RouterLink><ul><li><RouterLink to="#扩容策略">扩容策略</RouterLink></li><li><RouterLink to="#新数组-or-老数组">新数组 or 老数组 ？</RouterLink></li></ul></li><li><RouterLink to="#切片拷贝">切片拷贝</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="数组和切片" tabindex="-1"><a class="header-anchor" href="#数组和切片" aria-hidden="true">#</a> 数组和切片</h1>
<p>内容主要来自<a href="https://www.topgoer.cn/docs/golang/chapter03-9" target="_blank" rel="noopener noreferrer">数组Array - 地鼠文档 (topgoer.cn)<ExternalLinkIcon/></a>，<a href="https://www.topgoer.cn/docs/golang/chapter03-10" target="_blank" rel="noopener noreferrer">切片Slice - 地鼠文档 (topgoer.cn)<ExternalLinkIcon/></a>，辅以本人微微的更改。</p>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<p>Golang Array和以往认知的数组有很大不同。</p>
<ol>
<li>
<p>数组：是同一种数据类型的固定长度的序列。</p>
</li>
<li>
<p>数组定义：var a [len]int，比如：var a [5]int，数组长度必须是常量，且是类型的组成部分。一旦定义，长度不能变。</p>
</li>
<li>
<p>长度是数组类型的一部分，因此，var a[5] int和var a[10]int是不同的类型。</p>
</li>
<li>
<p>数组可以通过下标进行访问，下标是从0开始，最后一个元素下标是：<code>len-1</code>.</p>
</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5">
<li>
<p>访问越界，如果下标在数组合法范围之外，则触发访问越界，会panic</p>
</li>
<li>
<p>数组是值类型，赋值和传参会复制整个数组，而不是指针。因此改变副本的值，不会改变本身的值。
7.支持 &quot;==&quot;、&quot;!=&quot; 操作符，因为内存总是被初始化过的。
8.指针数组 [n]*T，数组指针 *[n]T。</p>
</li>
</ol>
<h3 id="数组初始化" tabindex="-1"><a class="header-anchor" href="#数组初始化" aria-hidden="true">#</a> 数组初始化</h3>
<h4 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组：</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 全局：</span>
<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">}</span>
<span class="token comment">// 局部：</span>
a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>           <span class="token comment">// 未初始化元素值为 0。</span>
b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>   <span class="token comment">// 通过初始化值确定数组长度。</span>
c <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span> <span class="token comment">// 使用索引号初始化元素。</span>
d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">uint8</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>
    <span class="token punctuation">{</span><span class="token string">"user1"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 可省略元素类型。</span>
    <span class="token punctuation">{</span><span class="token string">"user2"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 别忘了最后一行的逗号。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>           <span class="token comment">// 未初始化元素值为 0。</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>   <span class="token comment">// 通过初始化值确定数组长度。</span>
    c <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span> <span class="token comment">// 使用引号初始化元素。</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        age  <span class="token builtin">uint8</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token string">"user1"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 可省略元素类型。</span>
        <span class="token punctuation">{</span><span class="token string">"user2"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 别忘了最后一行的逗号。</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>输出结果:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>   hello world tom<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">100</span> <span class="token number">0</span> <span class="token number">200</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>user1 <span class="token number">10</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>user2 <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h4 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 全局</span>
<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">// 局部：</span>
a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// 第 2 纬度不能用 "..."。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="custom-container details"><summary>查看代码：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// 第 2 纬度不能用 "..."。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]] [[1 2 3] [7 8 9]]
[[1 2 3] [4 5 6]] [[1 1] [2 2] [3 3]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<ul>
<li>值拷贝行为会造成性能问题，通常会建议使用 slice，或数组指针。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x: %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
    x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a: %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

    <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>输出结果:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>a: 0xc42007c010
x: 0xc42007c030
<span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<ul>
<li>内置函数 len 和 cap 都返回数组长度 (元素数量)。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>2 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<h4 id="多维数组遍历" tabindex="-1"><a class="header-anchor" href="#多维数组遍历" aria-hidden="true">#</a> 多维数组遍历：</h4>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> f <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> k1<span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> f <span class="token punctuation">{</span>
        <span class="token keyword">for</span> k2<span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v1 <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"(%d,%d)=%d "</span><span class="token punctuation">,</span> k1<span class="token punctuation">,</span> k2<span class="token punctuation">,</span> v2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">(</span><span class="token number">0,0</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">0,1</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">2</span> <span class="token punctuation">(</span><span class="token number">0,2</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">3</span> 
<span class="token punctuation">(</span><span class="token number">1,0</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">7</span> <span class="token punctuation">(</span><span class="token number">1,1</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">8</span> <span class="token punctuation">(</span><span class="token number">1,2</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">9</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="数组拷贝和传参" tabindex="-1"><a class="header-anchor" href="#数组拷贝和传参" aria-hidden="true">#</a> 数组拷贝和传参</h3>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">printArr</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>输出结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">0</span> <span class="token number">10</span>
<span class="token number">1</span> <span class="token number">0</span>
<span class="token number">2</span> <span class="token number">0</span>
<span class="token number">3</span> <span class="token number">0</span>
<span class="token number">4</span> <span class="token number">0</span>
<span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token number">0</span> <span class="token number">10</span>
<span class="token number">1</span> <span class="token number">4</span>
<span class="token number">2</span> <span class="token number">6</span>
<span class="token number">3</span> <span class="token number">8</span>
<span class="token number">4</span> <span class="token number">10</span>
<span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
<h3 id="数组练习" tabindex="-1"><a class="header-anchor" href="#数组练习" aria-hidden="true">#</a> 数组练习</h3>
<h4 id="求数组所有元素之和" tabindex="-1"><a class="header-anchor" href="#求数组所有元素之和" aria-hidden="true">#</a> 求数组所有元素之和</h4>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token comment">// 求元素和</span>
<span class="token keyword">func</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 若想做一个真正的随机数，要种子</span>
    <span class="token comment">// seed()种子默认是1</span>
    <span class="token comment">//rand.Seed(1)</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// 产生一个0到1000随机数</span>
        b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sum=%d\n"</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details>
<h4 id="找出数组中和为给定值的两个元素的下标-例如数组-1-3-5-8-7-找出两个元素之和等于8的下标分别是-0-4-和-1-2" tabindex="-1"><a class="header-anchor" href="#找出数组中和为给定值的两个元素的下标-例如数组-1-3-5-8-7-找出两个元素之和等于8的下标分别是-0-4-和-1-2" aria-hidden="true">#</a> 找出数组中和为给定值的两个元素的下标，例如数组[1,3,5,8,7]，找出两个元素之和等于8的下标分别是（0，4）和（1，2）</h4>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title="原文档的代码" active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">myTest</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历数组</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        other <span class="token operator">:=</span> target <span class="token operator">-</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 继续遍历</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> other <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"(%d,%d)\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
    <span class="token function">myTest</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='我的代码'>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 需要的差值 需要该差值的索引</span>
	need <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	ans <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> num <span class="token builtin">int</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">if</span> v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> need<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
			ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			need<span class="token punctuation">[</span>target<span class="token operator">-</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> i
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
	<span class="token function">twoSum</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// map[2:1 4:0]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h2 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h2>
<p>需要说明，slice 并不是数组或数组指针。它通过内部指针和相关属性引用数组片段，以实现变长方案。</p>
<ol>
<li>切片：切片是数组的一个引用，因此切片是引用类型。但自身是结构体，值拷贝传递。</li>
<li>切片的长度可以改变，因此，切片是一个可变的数组。</li>
<li>切片遍历方式和数组一样，可以用<code>len()</code>求长度。表示可用元素数量，读写操作不能超过该限制。</li>
<li>cap可以求出slice最大扩张容量，不能超出数组限制。<code>0 &lt;= len(slice) &lt;= len(array)</code>，其中array是slice引用的数组。</li>
<li>切片的定义：<code>var 变量名 []类型</code>，比如 <code>var str []string  </code>。</li>
<li>如果 <code>slice == nil</code>，那么 len、cap 结果都等于 0。</li>
</ol>
<h3 id="创建切片的各种方式" tabindex="-1"><a class="header-anchor" href="#创建切片的各种方式" aria-hidden="true">#</a> 创建切片的各种方式</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//1.声明切片</span>
   <span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token keyword">if</span> s1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"是空"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"不是空"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 2.:=</span>
   s2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token comment">// 3.make()</span>
   <span class="token keyword">var</span> s3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
   <span class="token comment">// 4.初始化赋值</span>
   <span class="token keyword">var</span> s4 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span>
   s5 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span>
   <span class="token comment">// 5.从数组切片</span>
   arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
   <span class="token keyword">var</span> s6 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token comment">// 左闭右开</span>
   s6 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s6<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h4 id="_1-利用数组来创建" tabindex="-1"><a class="header-anchor" href="#_1-利用数组来创建" aria-hidden="true">#</a> 1. 利用数组来创建</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>全局：
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span> 
<span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>end<span class="token punctuation">]</span>        
<span class="token keyword">var</span> slice2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">:</span><span class="token punctuation">]</span>        
<span class="token keyword">var</span> slice3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span> 
<span class="token keyword">var</span> slice4 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>      <span class="token comment">//去掉切片的最后一个元素</span>
局部：
arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
slice5 <span class="token operator">:=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">:</span>end<span class="token punctuation">]</span>
slice6 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span>end<span class="token punctuation">]</span>        
slice7 <span class="token operator">:=</span> arr<span class="token punctuation">[</span>start<span class="token punctuation">:</span><span class="token punctuation">]</span>     
slice8 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>  
slice9 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//去掉切片的最后一个元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><img src="@source/language/go/pics/array_slice/m_cd5ff498ababe5a2c2ff6f2f816b383f_r.jpg" alt="null"></p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>        <span class="token comment">//可以简写为 var slice []int = arr[:end]</span>
<span class="token keyword">var</span> slice2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>       <span class="token comment">//可以简写为 var slice[]int = arr[start:]</span>
<span class="token keyword">var</span> slice3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">//var slice []int = arr[:]</span>
<span class="token keyword">var</span> slice4 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>      <span class="token comment">//去掉切片的最后一个元素</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：arr %v\n"</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice0 %v\n"</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice1 %v\n"</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice2 %v\n"</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice3 %v\n"</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice4 %v\n"</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"-----------------------------------\n"</span><span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
    slice5 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    slice6 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>         <span class="token comment">//可以简写为 slice := arr[:end]</span>
    slice7 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>        <span class="token comment">//可以简写为 slice := arr[start:]</span>
    slice8 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment">//slice := arr[:]</span>
    slice9 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//去掉切片的最后一个元素</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： arr2 %v\n"</span><span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice5 %v\n"</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice6 %v\n"</span><span class="token punctuation">,</span> slice6<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice7 %v\n"</span><span class="token punctuation">,</span> slice7<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice8 %v\n"</span><span class="token punctuation">,</span> slice8<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice9 %v\n"</span><span class="token punctuation">,</span> slice9<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>全局变量：arr <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">]</span>
全局变量：slice0 <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
全局变量：slice1 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span>
全局变量：slice2 <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">]</span>
全局变量：slice3 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">]</span>
全局变量：slice4 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span>
-----------------------------------
局部变量： arr2 <span class="token punctuation">[</span><span class="token number">9</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">6</span> <span class="token number">5</span> <span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span> <span class="token number">1</span> <span class="token number">0</span><span class="token punctuation">]</span>
局部变量： slice5 <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
局部变量： slice6 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span>
局部变量： slice7 <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">]</span>
局部变量： slice8 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span><span class="token punctuation">]</span>
局部变量： slice9 <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details>
<h4 id="_2-通过make来创建" tabindex="-1"><a class="header-anchor" href="#_2-通过make来创建" aria-hidden="true">#</a> 2. 通过make来创建</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span>
slice  <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span>
slice  <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">type</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/language/go/pics/array_slice/m_9066724e202fc1ae425d04d7fa1cd3ef_r.jpg" alt="null"></p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice0 ：%v\n"</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice1 ：%v\n"</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice2 ：%v\n"</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"--------------------------------------"</span><span class="token punctuation">)</span>
    slice3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice5 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice3 ：%v\n"</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice4 ：%v\n"</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice5 ：%v\n"</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    make全局slice0 ：[0 0 0 0 0 0 0 0 0 0]
    make全局slice1 ：[0 0 0 0 0 0 0 0 0 0]
    make全局slice2 ：[0 0 0 0 0 0 0 0 0 0]
    --------------------------------------
    make局部slice3 ：[0 0 0 0 0 0 0 0 0 0]
    make局部slice4 ：[0 0 0 0 0 0 0 0 0 0]
    make局部slice5 ：[0 0 0 0 0 0 0 0 0 0]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h4 id="_3-直接创建-slice-对象-自动分配底层数组。" tabindex="-1"><a class="header-anchor" href="#_3-直接创建-slice-对象-自动分配底层数组。" aria-hidden="true">#</a> 3. 直接创建 slice 对象，自动分配底层数组。</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span> <span class="token comment">// 通过初始化表达式构造，可使用索引号。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 使用 make 创建，指定 len 和 cap 值。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// 省略 cap，相当于 cap = len。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    [0 1 2 3 0 0 0 0 100] 9 9
    [0 0 0 0 0 0] 6 8
    [0 0 0 0 0 0] 6 6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用 make 动态创建slice，避免了数组必须用常量做长度的麻烦。还可用指针直接访问底层数组，退化成普通数组操作。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// *int, 获取底层数组元素指针。</span>
    <span class="token operator">*</span>p <span class="token operator">+=</span> <span class="token number">100</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    [0 1 102 3]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<p>至于 <code>[][]T</code>，是指元素类型为 <code>[]T</code>。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    [[1 2 3] [100 200] [11 22 33 44]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<p>可直接修改 struct array/slice 成员。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        x <span class="token builtin">int</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> d<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

    d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span>
    s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">20</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p, %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    [{0} {10} {20} {0} {0}]
    0xc4200160f0, 0xc4200160f0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="切片的内存布局" tabindex="-1"><a class="header-anchor" href="#切片的内存布局" aria-hidden="true">#</a> 切片的内存布局</h3>
<p><img src="@source/language/go/pics/array_slice/m_1bfa3d18f23b01c62058f9d62875b972_r.jpg" alt="null"></p>
<p>读写操作实际目标是底层数组，只需注意索引号的差别。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">100</span>
    s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">200</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>输出:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    <span class="token punctuation">[</span><span class="token number">102</span> <span class="token number">203</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">102</span> <span class="token number">203</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h3>
<ul>
<li>使用索引下标</li>
</ul>
<blockquote>
<p>索引下标大于切片的<code>len</code>，可以过编译，但是会报<strong>运行时错误</strong>。</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// panic: runtime error: index out of range [4] with length 4</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
<ul>
<li>检查一个元素是否在切片中</li>
</ul>
<blockquote>
<p><code>Go</code>中并没有直接提供函数判断，我们可以使用遍历操作</p>
</blockquote>
<ul>
<li>检查切片是否为空</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>ss <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<ul>
<li>slice遍历：</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"index : %v , value : %v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>index : 0 , value : 0
index : 1 , value : 1
index : 2 , value : 2
index : 3 , value : 3
index : 4 , value : 4
index : 5 , value : 5
index : 6 , value : 6
index : 7 , value : 7
index : 8 , value : 8
index : 9 , value : 9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<h3 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h3>
<ul>
<li>普通的改</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">99</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
<ul>
<li>切片resize（调整大小）</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice a : %v , len(a) : %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    b <span class="token operator">:=</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice b : %v , len(b) : %v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice c : %v , len(c) : %v\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>slice a : [1 3 4 5] , len(a) : 4
slice b : [3] , len(b) : 1
slice c : [3 4 5] , len(c) : 3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h3>
<blockquote>
<p><code>Go</code>中并没有直接提供函数删除，我们可以直接使用索引下标手动切</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

	s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token comment">// 删除索引为2的元素</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

	s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 删除最后一个元素</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

	s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token comment">// 删除第一个元素</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>
<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h3>
<ul>
<li>用append内置函数操作切片（切片追加）</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice a : %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice b : %v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice c : %v\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    d <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice d : %v\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span>
    e <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice e : %v\n"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    slice a : [1 2 3]
    slice b : [4 5 6]
    slice c : [1 2 3 4 5 6]
    slice d : [1 2 3 4 5 6 7]
    slice e : [1 2 3 4 5 6 7 8 9 10]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<ul>
<li>append ：向 slice 尾部添加数据，返回新的 slice 对象。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0xc42000a060
0xc42000a080
[] [1]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<ul>
<li>超出原 slice.cap 限制，就会重新分配底层数组，即便原数组并未填满。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len(s) = %d, cap(s) = %d, s = %v \r\n"</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

	s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// 一次 append 两个值，超出 s.cap 限制。</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> data<span class="token punctuation">)</span>         <span class="token comment">// 重新分配底层数组，与原数组无关。</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 比对底层数组起始指针。</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"len(s) = %d, cap(s) = %d, s = %v \r\n"</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[0 1 2 3 4 0 0 0 0 0 0]
len(s) = 2, cap(s) = 3, s = [0 1] 
[0 1 100 200] [0 1 2 3 4 0 0 0 0 0 0]
0xc00000a4b0 0xc00001e0c0
len(s) = 4, cap(s) = 6, s = [0 1 100 200]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>从输出结果可以看出，append 后的 s 重新分配了底层数组，并复制数据。如果只追加一个值，则不会超过 s.cap 限制，也就不会重新分配。
在大批量添加数据时，建议一次性分配足够大的空间，以减少内存分配和数据复制开销。或初始化足够长的 len 属性，改用索引号进行操作。及时释放不再使用的 slice 对象，避免持有过期数组，造成 GC 无法回收。</p>
</details>
<ul>
<li>slice中cap重新分配规律：</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> n <span class="token operator">></span> c <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"cap: %d -> %d\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            c <span class="token operator">=</span> n
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cap: 1 -> 2
cap: 2 -> 4
cap: 4 -> 8
cap: 8 -> 16
cap: 16 -> 32
cap: 32 -> 64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<ul>
<li>切片拷贝</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    s3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> s2<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"appended slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"last slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>slice s1 : [1 2 3 4 5]
slice s2 : [0 0 0 0 0 0 0 0 0 0]
copied slice s1 : [1 2 3 4 5]
copied slice s2 : [1 2 3 4 5 0 0 0 0 0]
slice s3 : [1 2 3]
appended slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0]
last slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0 4 5 6]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<ul>
<li>copy ：函数 copy 在两个 slice 间复制数据，复制长度以 len 小的为准。两个 slice 可指向同一底层数组，允许元素区间重叠。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"array data : "</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    s1 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    s2 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"last array data : "</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>array data :  [0 1 2 3 4 5 6 7 8 9]
slice s1 : [8 9]
slice s2 : [0 1 2 3 4]
copied slice s1 : [8 9]
copied slice s2 : [8 9 2 3 4]
last array data :  [8 9 2 3 4 5 6 7 8 9]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>应及时将所需数据 copy 到较小的 slice，以便释放超大号底层数组内存。</p>
</details>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<h3 id="字符串和切片-string-and-slice" tabindex="-1"><a class="header-anchor" href="#字符串和切片-string-and-slice" aria-hidden="true">#</a> 字符串和切片（string and slice）</h3>
<p>string底层就是一个byte的数组，因此，也可以进行切片操作。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"hello world"</span>
    s1 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>hello
world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<p>string本身是不可变的，因此要改变string中间字符。需要先转化为<code>[]byte</code>切片再操作。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"Hello world"</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">//中文字符需要用[]rune(str)</span>
    s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'G'</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token char">'!'</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    Hello Go!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<h3 id="含有中文字符串" tabindex="-1"><a class="header-anchor" href="#含有中文字符串" aria-hidden="true">#</a> 含有中文字符串：</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"你好，世界！hello world！"</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 
    s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'够'</span>
    s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'浪'</span>
    s<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'g'</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">14</span><span class="token punctuation">]</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>你好，够浪！hello go
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="slice-data-6-8-两个冒号的理解" tabindex="-1"><a class="header-anchor" href="#slice-data-6-8-两个冒号的理解" aria-hidden="true">#</a> slice <code>data[:6:8]</code> 两个冒号的理解</h3>
<p>常规slice , <code>data[6:8]</code>，从第6位到第8位（返回6， 7），长度len为2， 最大可扩充长度cap为4（6-9）</p>
<p>另一种写法： <code>data[:6:8]</code> 每个数字前都有个冒号， slice内容为data从0到第6位，长度len为6，最大扩充项cap设置为8</p>
<p><code>a[x:y:z]</code> 切片内容 <code>[x:y]</code> 切片长度:<code> y-x</code> 切片容量:<code>z-x</code></p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    d1 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    d2 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token number">2</span> <span class="token number">4</span>
<span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token number">6</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="数组or切片转字符串" tabindex="-1"><a class="header-anchor" href="#数组or切片转字符串" aria-hidden="true">#</a> 数组or切片转字符串：</h3>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"strings"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"[]"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>
		<span class="token comment">// func strings.Replace(s string, old string, new string, n int) string</span>
		strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>
			strings<span class="token punctuation">.</span><span class="token function">Trim</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"[]"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">" "</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token number">1</span>-2-3-4-5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h2 id="slice的源码" tabindex="-1"><a class="header-anchor" href="#slice的源码" aria-hidden="true">#</a> slice的源码</h2>
<p><a href="https://github.com/golang/go/blob/master/src/runtime/slice.go" target="_blank" rel="noopener noreferrer">go/slice.go at master · golang/go (github.com)<ExternalLinkIcon/></a></p>
<h2 id="slice的底层实现" tabindex="-1"><a class="header-anchor" href="#slice的底层实现" aria-hidden="true">#</a> slice的底层实现</h2>
<p>切片是 Go 中的一种基本的数据结构，使用这种结构可以用来管理数据集合。切片的设计想法是由动态数组概念而来，为了开发者可以更加方便的使一个数据结构可以自动增加和减少。但是切片本身并不是动态数据或者数组指针。切片常见的操作有 reslice、append、copy。与此同时，切片还具有可索引，可迭代的优秀特性。</p>
<h3 id="切片和数组" tabindex="-1"><a class="header-anchor" href="#切片和数组" aria-hidden="true">#</a> 切片和数组</h3>
<p><img src="@source/language/go/pics/array_slice/m_c237168440ffb7d9fd50f31048f2b72b_r.png" alt="null"></p>
<p>关于切片和数组怎么选择？接下来好好讨论讨论这个问题。</p>
<p>在 Go 中，与 C 数组变量隐式作为指针使用不同，Go 数组是值类型，赋值和函数传参操作都会复制整个数组数据。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arrayA <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">}</span>
    <span class="token keyword">var</span> arrayB <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span>

    arrayB <span class="token operator">=</span> arrayA

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arrayA : %p , %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arrayA<span class="token punctuation">,</span> arrayA<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arrayB : %p , %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arrayB<span class="token punctuation">,</span> arrayB<span class="token punctuation">)</span>

    <span class="token function">testArray</span><span class="token punctuation">(</span>arrayA<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testArray</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"func Array : %p , %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>打印结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    arrayA : 0xc4200bebf0 , [100 200]
    arrayB : 0xc4200bec00 , [100 200]
    func Array : 0xc4200bec30 , [100 200]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>可以看到，三个内存地址都不同，这也就验证了 Go 中数组赋值和函数传参都是<strong>值传递</strong>的。那这会导致什么问题呢？</p>
</div>
<p>假想每次传参都用数组，那么每次数组都要被复制一遍。如果数组大小有 100万，在64位机器上就需要花费大约 800W 字节，即 8MB 内存。这样会消耗掉大量的内存。于是乎有人想到，函数传参用数组的指针。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arrayA <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">}</span>
    <span class="token function">testArrayPoint</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arrayA<span class="token punctuation">)</span>   <span class="token comment">// 1.传数组指针</span>
    arrayB <span class="token operator">:=</span> arrayA<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token function">testArrayPoint</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arrayB<span class="token punctuation">)</span>   <span class="token comment">// 2.传切片</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arrayA : %p , %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arrayA<span class="token punctuation">,</span> arrayA<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testArrayPoint</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"func Array : %p , %v\n"</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token operator">*</span>x<span class="token punctuation">)</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>x<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>打印结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    func Array <span class="token builtin class-name">:</span> 0xc4200b0140 , <span class="token punctuation">[</span><span class="token number">100</span> <span class="token number">200</span><span class="token punctuation">]</span>
    func Array <span class="token builtin class-name">:</span> 0xc4200b0180 , <span class="token punctuation">[</span><span class="token number">100</span> <span class="token number">300</span><span class="token punctuation">]</span>
    arrayA <span class="token builtin class-name">:</span> 0xc4200b0140 , <span class="token punctuation">[</span><span class="token number">100</span> <span class="token number">400</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<p>这也就证明了数组指针确实到达了我们想要的效果。现在就算是传入10亿的数组，也只需要再栈上分配一个8个字节的内存给指针就可以了。这样更加高效的利用内存，性能也比之前的好。</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>不过传指针会有一个弊端，从打印结果可以看到，第一行和第三行指针地址都是同一个，万一原数组的指针指向更改了，那么函数里面的指针指向都会跟着更改。</p>
</div>
<p>切片的优势也就表现出来了。用切片传数组参数，既可以达到节约内存的目的，也可以达到合理处理好共享内存的问题。打印结果第二行就是切片，切片的指针和原来数组的指针是不同的。</p>
<ul>
<li>由此我们可以得出结论：</li>
</ul>
<blockquote>
<p>把第一个大数组传递给函数会消耗很多内存，采用切片的方式传参可以避免上述问题。切片是<strong>引用传递</strong>，所以它们不需要使用额外的内存并且比使用数组更有效率。</p>
</blockquote>
<p>但是，依旧有反例。</p>
<div class="custom-container tip"><p class="custom-container-title">性能测试的温馨提示</p>
<p><code>go benchmark</code>性能测试的文件名需要以<code>_test.go</code>结尾，且进行测试的函数名要以<code>Benchmark</code>开头。</p>
</div>
<details class="custom-container details"><summary>查看细节</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"testing"</span>

<span class="token keyword">func</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    x <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkArray</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">BenchmarkSlice</span><span class="token punctuation">(</span>b <span class="token operator">*</span>testing<span class="token punctuation">.</span>B<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>N<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>我们做一次性能测试，并且禁用内联和优化，来观察切片的堆上内存分配的情况。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>go <span class="token builtin class-name">test</span> -bench <span class="token builtin class-name">.</span> -benchmem -gcflags <span class="token string">"-N -l"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出结果比较“令人意外”：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>goos: windows
goarch: amd64
pkg: github.com/csDeng/gostudy/01_study/basic/array_slice/slice/src
cpu: Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz
BenchmarkArray-8          450879              2665 ns/op               0 B/op          0 allocs/op
BenchmarkSlice-8          275074              4085 ns/op            8192 B/op          1 allocs/op
PASS
ok      github.com/csDeng/gostudy/01_study/basic/array_slice/slice/src  3.228s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<p>解释一下上述结果，在测试 Array 的时候，用的是8核，循环次数是45_0879，平均每次执行时间是2665 ns，每次执行堆上分配内存总量是0，分配次数也是0 。</p>
<p>而切片的结果就“差”一点，同样也是用的是8核，循环次数是27_5074，平均每次执行时间是4085 ns，但是每次执行一次，堆上分配内存总量是8192，分配次数也是1 。</p>
<p>这样对比看来，并非所有时候都适合用切片代替数组，因为切片底层数组可能会在堆上分配内存，而且小数组在栈上拷贝的消耗也未必比make 消耗大。</p>
<h3 id="切片的数据结构" tabindex="-1"><a class="header-anchor" href="#切片的数据结构" aria-hidden="true">#</a> 切片的数据结构</h3>
<p>切片本身并不是动态数组或者数组指针。它内部实现的数据结构通过指针引用底层数组，设定相关属性将数据读写操作限定在指定的区域内。切片本身是一个只读对象，其工作机制类似数组指针的一种封装。</p>
<p>切片（slice）是对数组一个连续片段的引用，所以切片是一个引用类型（因此更类似于 C/C++ 中的数组类型，或者 Python 中的 list 类型）。这个片段可以是整个数组，或者是由起始和终止索引标识的一些项的子集。需要注意的是，终止索引标识的项不包括在切片内。切片提供了一个与指向数组的动态窗口。</p>
<p>给定项的切片索引可能比相关数组的相同元素的索引小。和数组不同的是，切片的长度可以在运行时修改，最小为 0 最大为相关数组的长度：切片是一个长度可变的数组。</p>
<p>Slice 的数据结构定义如下:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> slice <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    array unsafe<span class="token punctuation">.</span>Pointer
    <span class="token builtin">len</span>   <span class="token builtin">int</span>
    <span class="token builtin">cap</span>   <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/language/go/pics/array_slice/m_b7bffbf0976c474809a222748dbc42ba_r.png" alt="null"></p>
<p>切片的结构体由3部分构成，Pointer 是指向一个数组的指针，len 代表当前切片的长度，cap 是当前切片的容量。cap 总是大于等于 len 的。</p>
<p><img src="@source/language/go/pics/array_slice/m_b3ed4a54677e9c668021c12d6cac6258_r.png" alt="null"></p>
<p>如果想从 slice 中得到一块内存地址，可以这样做：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"unsafe"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	ptr <span class="token operator">:=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Value:s = %v, Address:s = %p \r\n"</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Value:ptr = %v, Address:ptr = %p \r\n"</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><details class="custom-container details"><summary>输出结果</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Value:s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span>, Address:s <span class="token operator">=</span> 0xc0000140c0 
Value:ptr <span class="token operator">=</span> 0xc0000140c0, Address:ptr <span class="token operator">=</span> 0xc0000140c0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<div class="custom-container warning"><p class="custom-container-title">不能理解部分</p>
<p>如果反过来呢？从 Go 的内存地址中构造一个 slice。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> ptr unsafe<span class="token punctuation">.</span>Pointer
<span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    addr <span class="token builtin">uintptr</span>
    <span class="token builtin">len</span> <span class="token builtin">int</span>
    <span class="token builtin">cap</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span><span class="token punctuation">{</span>ptr<span class="token punctuation">,</span> length<span class="token punctuation">,</span> length<span class="token punctuation">}</span>
s <span class="token operator">:=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>构造一个虚拟的结构体，把 slice 的数据结构拼出来。</p>
<p>当然还有更加直接的方法，在 Go 的反射中就存在一个与之对应的数据结构 SliceHeader，我们可以用它来构造一个 slice</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">var</span> o <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
    sliceHeader <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>reflect<span class="token punctuation">.</span>SliceHeader<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sliceHeader<span class="token punctuation">.</span>Cap <span class="token operator">=</span> length
    sliceHeader<span class="token punctuation">.</span>Len <span class="token operator">=</span> length
    sliceHeader<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>
<h3 id="创建切片" tabindex="-1"><a class="header-anchor" href="#创建切片" aria-hidden="true">#</a> 创建切片</h3>
<p>make 函数允许在运行期动态指定数组长度，绕开了数组类型必须使用编译期常量的限制。</p>
<p>创建切片有两种形式，make 创建切片，空切片。</p>
<h4 id="make-和切片字面量" tabindex="-1"><a class="header-anchor" href="#make-和切片字面量" aria-hidden="true">#</a> make 和切片字面量</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">makeslice</span><span class="token punctuation">(</span>et <span class="token operator">*</span>_type<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span> <span class="token builtin">int</span><span class="token punctuation">)</span> slice <span class="token punctuation">{</span>
    <span class="token comment">// 根据切片的数据类型，获取切片的最大容量</span>
    maxElements <span class="token operator">:=</span> <span class="token function">maxSliceCap</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token comment">// 比较切片的长度，长度值域应该在[0,maxElements]之间</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">></span> maxElements <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"makeslice: len out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 比较切片的容量，容量值域应该在[len,maxElements]之间</span>
    <span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span> <span class="token operator">||</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">></span> maxElements <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"makeslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 根据切片的容量申请内存</span>
    p <span class="token operator">:=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span><span class="token punctuation">,</span> et<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token comment">// 返回申请好内存的切片的首地址</span>
    <span class="token keyword">return</span> slice<span class="token punctuation">{</span>p<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>还有一个 int64 的版本：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">makeslice64</span><span class="token punctuation">(</span>et <span class="token operator">*</span>_type<span class="token punctuation">,</span> len64<span class="token punctuation">,</span> cap64 <span class="token builtin">int64</span><span class="token punctuation">)</span> slice <span class="token punctuation">{</span>
    <span class="token builtin">len</span> <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>len64<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token function">int64</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">!=</span> len64 <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"makeslice: len out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token builtin">cap</span> <span class="token operator">:=</span> <span class="token function">int</span><span class="token punctuation">(</span>cap64<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token function">int64</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">!=</span> cap64 <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"makeslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">makeslice</span><span class="token punctuation">(</span>et<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>实现原理和上面的是一样的，只不过多了把 int64 转换成 int 这一步罢了。</p>
<p><img src="@source/language/go/pics/array_slice/m_d27d00e84fbd89b3cbd30b25dc8bea61_r.png" alt="null"></p>
<p>上图是用 make 函数创建的一个 len = 4， cap = 6 的切片。内存空间申请了6个 int 类型的内存大小。由于 len = 4，所以后面2个暂时访问不到，但是容量还是在的。这时候数组里面每个变量都是0 。</p>
<p>除了 make 函数可以创建切片以外，字面量也可以创建切片。</p>
<p><img src="@source/language/go/pics/array_slice/m_d0781cd13de93cd58e55b732b513845d_r.png" alt="null"></p>
<div class="custom-container tip"><p class="custom-container-title">温馨提示</p>
<p>这里是用字面量创建的一个 len = 6，cap = 6 的切片，这时候数组里面每个元素的值都初始化完成了。需要注意的是<code>[ ]</code>里面不要写数组的容量，因为如果写了个数以后就是数组了，而不是切片了。</p>
</div>
<p><img src="@source/language/go/pics/array_slice/m_fcf28db7d94ead0043dbd92106159961_r.png" alt="null"></p>
<p>还有一种简单的字面量创建切片的方法。如上图。上图就 Slice A 创建出了一个 len = 3，cap = 3 的切片。从原数组的第二位元素(0是第一位)开始切，一直切到第四位为止(不包括第五位)。同理，Slice B 创建出了一个 len = 2，cap = 4 的切片。</p>
<div class="custom-container tip"><p class="custom-container-title">字面量创建切片的提示</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>

s <span class="token operator">:=</span> array<span class="token punctuation">[</span>low<span class="token punctuation">:</span>high<span class="token punctuation">]</span>
<span class="token comment">// len = high -low</span>

s <span class="token operator">:=</span> array<span class="token punctuation">[</span>low<span class="token punctuation">:</span>high<span class="token punctuation">:</span>max<span class="token punctuation">]</span>
<span class="token comment">// len = high-low cap = max-low</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div>
<h4 id="nil-和空切片" tabindex="-1"><a class="header-anchor" href="#nil-和空切片" aria-hidden="true">#</a> nil 和空切片</h4>
<p>nil 切片和空切片也是常用的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    var slice []int
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/language/go/pics/array_slice/m_802f29858b9d1b83ef13dd1f54f70240_r.png" alt="null"></p>
<p>nil 切片被用在很多标准库和内置函数中，描述一个不存在的切片的时候，就需要用到 nil 切片。比如函数在发生异常的时候，返回的切片就是 nil 切片。nil 切片的指针指向 nil。</p>
<p>空切片一般会用来表示一个空的集合。比如数据库查询，一条结果也没有查到，那么就可以返回一个空切片。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    silce <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/language/go/pics/array_slice/m_3adefbd66074247f94227944f0732837_r.png" alt="null"></p>
<p>空切片和 nil 切片的区别在于，空切片指向的地址不是nil，指向的是一个内存地址，但是它没有分配任何内存空间，即底层元素包含0个元素。</p>
<p>最后需要说明的一点是。不管是使用 nil 切片还是空切片，对其调用内置函数 append，len 和 cap 的效果都是一样的。</p>
<h3 id="切片扩容" tabindex="-1"><a class="header-anchor" href="#切片扩容" aria-hidden="true">#</a> 切片扩容</h3>
<div class="custom-container tip"><p class="custom-container-title">思考题来了</p>
<p>当一个切片的容量满了，就需要扩容了。怎么扩，策略是什么？</p>
</div>
<details class="custom-container details"><summary>查看答案</summary>
<ul>
<li><code>Go 1.8/1.9</code>大同小异</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// growslice handles slice growth during append.</span>
<span class="token comment">// It is passed the slice element type, the old slice, and the desired new minimum capacity,</span>
<span class="token comment">// and it returns a new slice with at least that capacity, with the old data</span>
<span class="token comment">// copied into it.</span>
<span class="token comment">// The new slice's length is set to the old slice's length,</span>
<span class="token comment">// NOT to the new requested capacity.</span>
<span class="token comment">// This is for codegen convenience. The old slice's length is used immediately</span>
<span class="token comment">// to calculate where to write new values during an append.</span>
<span class="token comment">// TODO: When the old backend is gone, reconsider this decision.</span>
<span class="token comment">// The SSA backend might prefer the new length or to return only ptr/cap and save stack space.</span>
<span class="token keyword">func</span> <span class="token function">growslice</span><span class="token punctuation">(</span>et <span class="token operator">*</span>_type<span class="token punctuation">,</span> old slice<span class="token punctuation">,</span> <span class="token builtin">cap</span> <span class="token builtin">int</span><span class="token punctuation">)</span> slice <span class="token punctuation">{</span>
    <span class="token comment">/**  
    @et：切片类型
    @old： 就切片
    @cap: 新的切片容量
    
    **/</span>
    <span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
        callerpc <span class="token operator">:=</span> <span class="token function">getcallerpc</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>et<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">racereadrangepc</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> <span class="token function">funcPC</span><span class="token punctuation">(</span>growslice<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> msanenabled <span class="token punctuation">{</span>
        <span class="token function">msanread</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">&lt;</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果新要扩容的容量比原来的容量还要小，这代表要缩容了，那么可以直接报panic了</span>
           <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"growslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> et<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前切片的大小为0，还调用了扩容方法，那么就新生成一个新的容量的切片返回。</span>
        <span class="token keyword">return</span> slice<span class="token punctuation">{</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>zerobase<span class="token punctuation">)</span><span class="token punctuation">,</span> old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token comment">// 这里就是扩容的策略</span>
    newcap <span class="token operator">:=</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span>
    doublecap <span class="token operator">:=</span> newcap <span class="token operator">+</span> newcap
    <span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">></span> doublecap <span class="token punctuation">{</span>
        newcap <span class="token operator">=</span> <span class="token builtin">cap</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> old<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">&lt;</span> <span class="token number">1024</span> <span class="token punctuation">{</span>
            newcap <span class="token operator">=</span> doublecap
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> newcap <span class="token operator">&lt;</span> <span class="token builtin">cap</span> <span class="token punctuation">{</span>
                newcap <span class="token operator">+=</span> newcap <span class="token operator">/</span> <span class="token number">4</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 计算新的切片的容量，长度。</span>
    <span class="token keyword">var</span> lenmem<span class="token punctuation">,</span> newlenmem<span class="token punctuation">,</span> capmem <span class="token builtin">uintptr</span>
    <span class="token keyword">const</span> ptrSize <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Sizeof</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> et<span class="token punctuation">.</span>size <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span>
        newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span>
        capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span><span class="token punctuation">)</span>
        newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem<span class="token punctuation">)</span>
    <span class="token keyword">case</span> ptrSize<span class="token punctuation">:</span>
        lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">*</span> ptrSize
        newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">*</span> ptrSize
        capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">*</span> ptrSize<span class="token punctuation">)</span>
        newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem <span class="token operator">/</span> ptrSize<span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">*</span> et<span class="token punctuation">.</span>size
        newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">*</span> et<span class="token punctuation">.</span>size
        capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">*</span> et<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
        newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem <span class="token operator">/</span> et<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 判断非法的值，保证容量是在增加，并且容量不超过最大容量</span>
    <span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">&lt;</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span> <span class="token operator">||</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token function">maxSliceCap</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"growslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> p unsafe<span class="token punctuation">.</span>Pointer
    
    <span class="token keyword">if</span> et<span class="token punctuation">.</span>kind<span class="token operator">&amp;</span>kindNoPointers <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在老的切片后面继续扩充容量</span>
        p <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>capmem<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token comment">// 将 lenmem 这个多个 bytes 从 old.array地址 拷贝到 p 的地址处</span>
        <span class="token function">memmove</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> lenmem<span class="token punctuation">)</span>
        <span class="token comment">// 先将 P 地址加上新的容量得到新切片容量的地址，然后将新切片容量地址后面的 capmem-newlenmem 个 bytes 这块内存初始化。为之后继续 append() 操作腾出空间。</span>
        <span class="token function">memclrNoHeapPointers</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> newlenmem<span class="token punctuation">)</span><span class="token punctuation">,</span> capmem<span class="token operator">-</span>newlenmem<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 重新申请新的数组给新切片</span>
        <span class="token comment">// 重新申请 capmen 这个大的内存地址，并且初始化为0值</span>
        p <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>capmem<span class="token punctuation">,</span> et<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token operator">!</span>writeBarrier<span class="token punctuation">.</span>enabled <span class="token punctuation">{</span>
            <span class="token comment">// 如果还不能打开写锁，那么只能把 lenmem 大小的 bytes 字节从 old.array 拷贝到 p 的地址处</span>
            <span class="token function">memmove</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> lenmem<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 循环拷贝老的切片的值</span>
            <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lenmem<span class="token punctuation">;</span> i <span class="token operator">+=</span> et<span class="token punctuation">.</span>size <span class="token punctuation">{</span>
                <span class="token function">typedmemmove</span><span class="token punctuation">(</span>et<span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回最终新切片，容量更新为最新扩容之后的容量</span>
    <span class="token keyword">return</span> slice<span class="token punctuation">{</span>p<span class="token punctuation">,</span> old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">,</span> newcap<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><ul>
<li>最新版<code>Go2</code>（2022-4-7）</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// growslice handles slice growth during append.</span>
<span class="token comment">// It is passed the slice element type, the old slice, and the desired new minimum capacity,</span>
<span class="token comment">// and it returns a new slice with at least that capacity, with the old data</span>
<span class="token comment">// copied into it.</span>
<span class="token comment">// The new slice's length is set to the old slice's length,</span>
<span class="token comment">// NOT to the new requested capacity.</span>
<span class="token comment">// This is for codegen convenience. The old slice's length is used immediately</span>
<span class="token comment">// to calculate where to write new values during an append.</span>
<span class="token comment">// TODO: When the old backend is gone, reconsider this decision.</span>
<span class="token comment">// The SSA backend might prefer the new length or to return only ptr/cap and save stack space.</span>
<span class="token keyword">func</span> <span class="token function">growslice</span><span class="token punctuation">(</span>et <span class="token operator">*</span>_type<span class="token punctuation">,</span> old slice<span class="token punctuation">,</span> <span class="token builtin">cap</span> <span class="token builtin">int</span><span class="token punctuation">)</span> slice <span class="token punctuation">{</span>
	<span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
		callerpc <span class="token operator">:=</span> <span class="token function">getcallerpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token function">racereadrangepc</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> abi<span class="token punctuation">.</span><span class="token function">FuncPCABIInternal</span><span class="token punctuation">(</span>growslice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> msanenabled <span class="token punctuation">{</span>
		<span class="token function">msanread</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> asanenabled <span class="token punctuation">{</span>
		<span class="token function">asanread</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">&lt;</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"growslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> et<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// append should not create a slice with nil pointer but non-zero len.</span>
		<span class="token comment">// We assume that append doesn't need to preserve old.array in this case.</span>
		<span class="token keyword">return</span> slice<span class="token punctuation">{</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>zerobase<span class="token punctuation">)</span><span class="token punctuation">,</span> old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">,</span> <span class="token builtin">cap</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	newcap <span class="token operator">:=</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span>
	doublecap <span class="token operator">:=</span> newcap <span class="token operator">+</span> newcap
	<span class="token keyword">if</span> <span class="token builtin">cap</span> <span class="token operator">></span> doublecap <span class="token punctuation">{</span>
		newcap <span class="token operator">=</span> <span class="token builtin">cap</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> threshold <span class="token operator">=</span> <span class="token number">256</span>
		<span class="token keyword">if</span> old<span class="token punctuation">.</span><span class="token builtin">cap</span> <span class="token operator">&lt;</span> threshold <span class="token punctuation">{</span>
			newcap <span class="token operator">=</span> doublecap
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Check 0 &lt; newcap to detect overflow</span>
			<span class="token comment">// and prevent an infinite loop.</span>
			<span class="token keyword">for</span> <span class="token number">0</span> <span class="token operator">&lt;</span> newcap <span class="token operator">&amp;&amp;</span> newcap <span class="token operator">&lt;</span> <span class="token builtin">cap</span> <span class="token punctuation">{</span>
				<span class="token comment">// Transition from growing 2x for small slices</span>
				<span class="token comment">// to growing 1.25x for large slices. This formula</span>
				<span class="token comment">// gives a smooth-ish transition between the two.</span>
                <span class="token comment">// 从小片增长2倍到大片增长1.25倍。这个公式给出了两者之间的平滑过渡。</span>
				newcap <span class="token operator">+=</span> <span class="token punctuation">(</span>newcap <span class="token operator">+</span> <span class="token number">3</span><span class="token operator">*</span>threshold<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">4</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// Set newcap to the requested cap when</span>
			<span class="token comment">// the newcap calculation overflowed.</span>
            <span class="token comment">// 当newcap计算溢出时，将newcap设置为请求的上限。</span>
			<span class="token keyword">if</span> newcap <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token punctuation">{</span>
				newcap <span class="token operator">=</span> <span class="token builtin">cap</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> overflow <span class="token builtin">bool</span>
	<span class="token keyword">var</span> lenmem<span class="token punctuation">,</span> newlenmem<span class="token punctuation">,</span> capmem <span class="token builtin">uintptr</span>
	<span class="token comment">// Specialize for common values of et.size.</span>
	<span class="token comment">// For 1 we don't need any division/multiplication.</span>
	<span class="token comment">// For goarch.PtrSize, compiler will optimize division/multiplication into a shift by a constant.</span>
	<span class="token comment">// For powers of 2, use a variable shift.</span>
	<span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> et<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
		lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span>
		newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span>
		capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span><span class="token punctuation">)</span>
		overflow <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">></span> maxAlloc
		newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem<span class="token punctuation">)</span>
	<span class="token keyword">case</span> et<span class="token punctuation">.</span>size <span class="token operator">==</span> goarch<span class="token punctuation">.</span>PtrSize<span class="token punctuation">:</span>
		lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">*</span> goarch<span class="token punctuation">.</span>PtrSize
		newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">*</span> goarch<span class="token punctuation">.</span>PtrSize
		capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">*</span> goarch<span class="token punctuation">.</span>PtrSize<span class="token punctuation">)</span>
		overflow <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">></span> maxAlloc<span class="token operator">/</span>goarch<span class="token punctuation">.</span>PtrSize
		newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem <span class="token operator">/</span> goarch<span class="token punctuation">.</span>PtrSize<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">var</span> shift <span class="token builtin">uintptr</span>
		<span class="token keyword">if</span> goarch<span class="token punctuation">.</span>PtrSize <span class="token operator">==</span> <span class="token number">8</span> <span class="token punctuation">{</span>
			<span class="token comment">// Mask shift for better code generation.</span>
			shift <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span><span class="token function">Ctz64</span><span class="token punctuation">(</span><span class="token function">uint64</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">63</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			shift <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span><span class="token function">Ctz32</span><span class="token punctuation">(</span><span class="token function">uint32</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">31</span>
		<span class="token punctuation">}</span>
		lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> shift
		newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> shift
		capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> shift<span class="token punctuation">)</span>
		overflow <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token punctuation">(</span>maxAlloc <span class="token operator">>></span> shift<span class="token punctuation">)</span>
		newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem <span class="token operator">>></span> shift<span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		lenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">)</span> <span class="token operator">*</span> et<span class="token punctuation">.</span>size
		newlenmem <span class="token operator">=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token builtin">cap</span><span class="token punctuation">)</span> <span class="token operator">*</span> et<span class="token punctuation">.</span>size
		capmem<span class="token punctuation">,</span> overflow <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">MulUintptr</span><span class="token punctuation">(</span>et<span class="token punctuation">.</span>size<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>newcap<span class="token punctuation">)</span><span class="token punctuation">)</span>
		capmem <span class="token operator">=</span> <span class="token function">roundupsize</span><span class="token punctuation">(</span>capmem<span class="token punctuation">)</span>
		newcap <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>capmem <span class="token operator">/</span> et<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// The check of overflow in addition to capmem > maxAlloc is needed</span>
	<span class="token comment">// to prevent an overflow which can be used to trigger a segfault</span>
	<span class="token comment">// on 32bit architectures with this example program:</span>
	<span class="token comment">//</span>
	<span class="token comment">// type T [1&lt;&lt;27 + 1]int64</span>
	<span class="token comment">//</span>
	<span class="token comment">// var d T</span>
	<span class="token comment">// var s []T</span>
	<span class="token comment">//</span>
	<span class="token comment">// func main() {</span>
	<span class="token comment">//   s = append(s, d, d, d, d)</span>
	<span class="token comment">//   print(len(s), "\n")</span>
	<span class="token comment">// }</span>
	<span class="token keyword">if</span> overflow <span class="token operator">||</span> capmem <span class="token operator">></span> maxAlloc <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span><span class="token function">errorString</span><span class="token punctuation">(</span><span class="token string">"growslice: cap out of range"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> p unsafe<span class="token punctuation">.</span>Pointer
	<span class="token keyword">if</span> et<span class="token punctuation">.</span>ptrdata <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// // 在老的切片后面继续扩充容量</span>
		p <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>capmem<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
		<span class="token comment">// The append() that calls growslice is going to overwrite from old.len to cap (which will be the new length).</span>
		<span class="token comment">// Only clear the part that will not be overwritten.</span>
		<span class="token function">memclrNoHeapPointers</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> newlenmem<span class="token punctuation">)</span><span class="token punctuation">,</span> capmem<span class="token operator">-</span>newlenmem<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// Note: can't use rawmem (which avoids zeroing of memory), because then GC can scan uninitialized memory.不使用rawmem(这避免了内存归零)，因为这样GC可以扫描未初始化的内存。</span>
		p <span class="token operator">=</span> <span class="token function">mallocgc</span><span class="token punctuation">(</span>capmem<span class="token punctuation">,</span> et<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> lenmem <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> writeBarrier<span class="token punctuation">.</span>enabled <span class="token punctuation">{</span>
			<span class="token comment">// Only shade the pointers in old.array since we know the destination slice p</span>
			<span class="token comment">// only contains nil pointers because it has been cleared during alloc.</span>
			<span class="token function">bulkBarrierPreWriteSrcOnly</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>old<span class="token punctuation">.</span>array<span class="token punctuation">)</span><span class="token punctuation">,</span> lenmem<span class="token operator">-</span>et<span class="token punctuation">.</span>size<span class="token operator">+</span>et<span class="token punctuation">.</span>ptrdata<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">memmove</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> old<span class="token punctuation">.</span>array<span class="token punctuation">,</span> lenmem<span class="token punctuation">)</span>

	<span class="token keyword">return</span> slice<span class="token punctuation">{</span>p<span class="token punctuation">,</span> old<span class="token punctuation">.</span><span class="token builtin">len</span><span class="token punctuation">,</span> newcap<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br></div></div><p>上述就是扩容的实现。主要需要关注的有两点，一个是扩容时候的策略，还有一个就是扩容是生成全新的内存地址还是在原来的地址后追加。</p>
</details>
<h4 id="扩容策略" tabindex="-1"><a class="header-anchor" href="#扩容策略" aria-hidden="true">#</a> 扩容策略</h4>
<p>先看看扩容策略。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	<span class="token comment">// 扩容</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init slice = %v, Pointer = %p, len = %d, cap = %d\n\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// 对新切片操作，看看会不会影响原切片</span>
	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">5</span>, cap <span class="token operator">=</span> <span class="token number">8</span>

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">30</span> <span class="token number">40</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">5</span>, cap <span class="token operator">=</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>用图表示出上述过程。</p>
<p><img src="@source/language/go/pics/array_slice/m_9a761aecc615b540c6f5346bc4c79cee_r.png" alt="null"></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>从图上我们可以很容易的看出，新的切片和之前的切片已经不同了，因为新的切片更改了一个值，并没有影响到原来的数组，新切片指向的数组是一个全新的数组。并且 cap 容量也发生了变化。这之间究竟发生了什么呢？</p>
</div>
<p>Go 中切片扩容的策略是这样的：</p>
<p>如果切片的容量小于 1024 个元素，于是扩容的时候就翻倍增加容量。上面那个例子也验证了这一情况，总容量从原来的4个翻倍到现在的8个。</p>
<p>一旦元素个数超过 1024 个元素，那么增长因子就变成 1.25 ，即每次增加原来容量的四分之一。(小tip:新旧版本基本都是这个意思，只是有点小细节不一致)</p>
<p>注意：扩容扩大的容量都是针对原来的容量而言的，而不是针对原来数组的长度而言的。</p>
<h4 id="新数组-or-老数组" tabindex="-1"><a class="header-anchor" href="#新数组-or-老数组" aria-hidden="true">#</a> 新数组 or 老数组 ？</h4>
<p>再谈谈扩容之后的数组一定是新的么？这个不一定，分两种情况。</p>
<ul>
<li>情况一：切片<code>len &lt; cap</code></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>
<span class="token comment">/** len &lt; cap**/</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"init slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init array %v \n\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before array %v \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span>

	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After array = %v\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>打印输出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Init array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096090, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span> <span class="token number">40</span><span class="token punctuation">]</span>

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096090, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">50</span> <span class="token number">40</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>把上述过程用图表示出来，如下图。</p>
<p><img src="@source/language/go/pics/array_slice/m_c32c7658df1d0dda5f944415446b11bd_r.png" alt="null"></p>
<p>通过打印的结果，我们可以看到，在这种情况下，扩容以后并没有新建一个新的数组，扩容前后的数组都是同一个，这也就导致了新的切片修改了一个值，也影响到了老的切片了。并且 <code>append() </code>操作也改变了原来数组里面的值。一个 <code>append() </code>操作影响了这么多地方，如果原数组上有多个切片，那么这些切片都会被影响！无意间就产生了莫名的 bug！</p>
<details class="custom-container details"><summary>Go中文文档的原话</summary>
<p>这种情况，由于原数组还有容量可以扩容，所以执行 <code>append()</code> 操作以后，会在原数组上直接操作，所以这种情况下，扩容以后的数组还是指向原来的数组。</p>
<p>这种情况也极容易出现在字面量创建切片时候，第三个参数 cap 传值的时候，如果用字面量创建切片，<code>cap</code> 并不等于指向数组的总容量，那么这种情况就会发生。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面这种情况非常危险，极度容易产生 bug 。</p>
</details>
<div class="custom-container tip"><p class="custom-container-title">错误更正</p>
<p>原文档中提到，“在字面量创建切片时候，第三个参数 cap 传值的时候，如果用字面量创建切片，<code>cap</code> 并不等于指向数组的总容量，那么这种情况（对新切片的修改影响底层数组）就会发生。”</p>
<blockquote>
<p>经过测试，发现是切片的<code>len&lt;cap</code>导致的，与切片跟底层数组的总容量关系无关。但是有个问题是，当<code>len&lt;cap</code>的时候，切片的增长必不会进行扩容，所以新切片的底层跟原切片的底层是一样的，只是内存内容的可见性不一致。</p>
<p>所以说，这个标题（新数组or老数组）指的应该是切片增长也就是<code>append</code>之后的返回的是新切片的底层数组是否为新。</p>
</blockquote>
</div>
<details class="custom-container details"><summary>len小于cap细节测试</summary>
<ul>
<li>slice的cap小于底层数组总容量</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"init slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After array = %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出结果</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">1</span>, cap <span class="token operator">=</span> <span class="token number">3</span>
Init array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0 

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">1</span>, cap <span class="token operator">=</span> <span class="token number">3</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">3</span>
Before array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">1</span>, cap <span class="token operator">=</span> <span class="token number">3</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span> <span class="token number">60</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">3</span>
After array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">60</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>从输出来看，<code>slice,newSlice,array</code>的地址都是不一样的。但是为什么对<code>newSlice</code>的修改会影响到<code>array</code>呢？</p>
<blockquote>
<p>思考一下，嗯。</p>
</blockquote>
<ul>
<li>slice的cap等于底层数组总容量</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"init slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After array = %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Init array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000a8080 

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096090, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000a8080

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096060, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000096090, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">50</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000a8080
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote>
<p>从输出来看，<code>slice,newSlice,array</code>的地址都是依然不一样的。但是对新切片的操作依然影响了原数组。</p>
</blockquote>
<ul>
<li>slice的cap大于底层数组总容量？</li>
</ul>
<p>对不起，这种情况是不存在的。</p>
<p>首先，从底层操作系统的角度来看，slice的底层是依靠连续数组来分配内存的，可以理解为切片仅仅是数组的一种封装而已，但是他是不具备更改底层数组的相关基本信息（地址，数组大小）的，而他的扩容的<strong>一种方式</strong>是通过新生成一个数组，然后把元素拷贝过去实现的。</p>
<p>其次，从代码的角度来看，他是会报错的。贴个图解千愁。</p>
<p><img src="@source/language/go/pics/array_slice/image-20220409012630666.png" alt="image-20220409012630666"></p>
</details>
<p>建议用字面量创建切片的时候，cap 的值一定要保持清醒，避免共享原数组导致的 bug。</p>
<ul>
<li>情况二：切片<code>len=cap</code></li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">/**
len=cap
*/</span>

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"init slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Init array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0 

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">5</span>, cap <span class="token operator">=</span> <span class="token number">8</span>
Before array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">4</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">30</span> <span class="token number">40</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">5</span>, cap <span class="token operator">=</span> <span class="token number">8</span>
After array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>情况二其实就是在扩容策略里面举的例子，在那个例子中之所以生成了新的切片，是因为原来数组的容量已经达到了最大值，再想扩容， Go 默认会先开一片内存区域，把原来的值拷贝过来，然后再执行 append() 操作。这种情况丝毫不影响原数组。</p>
<details class="custom-container details"><summary>len等于cap细节测试</summary>
<ul>
<li><code>slice cap</code>小于数组总容量</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">/**
len=cap
*/</span>

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	slice <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"init slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Init array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Before array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

	newSlice<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">10</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After slice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After newSlice = %v, Pointer = %p, len = %d, cap = %d\n"</span><span class="token punctuation">,</span> newSlice<span class="token punctuation">,</span> <span class="token operator">&amp;</span>newSlice<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>newSlice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"After array %v, Pointer = %p \r\n\r\n"</span><span class="token punctuation">,</span> array<span class="token punctuation">,</span> <span class="token operator">&amp;</span>array<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>init slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">2</span>
Init array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0 

Before slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">2</span>
Before newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
Before array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0

After slice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc000004078, len <span class="token operator">=</span> <span class="token number">2</span>, cap <span class="token operator">=</span> <span class="token number">2</span>
After newSlice <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">30</span> <span class="token number">50</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000040a8, len <span class="token operator">=</span> <span class="token number">3</span>, cap <span class="token operator">=</span> <span class="token number">4</span>
After array <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">20</span> <span class="token number">30</span> <span class="token number">40</span><span class="token punctuation">]</span>, Pointer <span class="token operator">=</span> 0xc0000121c0

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>可以看到对新切片的修改是不影响原数组的。</p>
<ul>
<li><code>slice cap</code>等于数组总容量</li>
</ul>
<blockquote>
<p>上文情况二</p>
</blockquote>
<ul>
<li><code>slice cap</code>大于数组总容量</li>
</ul>
<blockquote>
<p>不存在</p>
</blockquote>
</details>
<p>所以建议尽量避免情况一，尽量使用情况二，避免 bug 产生。</p>
<h3 id="切片拷贝" tabindex="-1"><a class="header-anchor" href="#切片拷贝" aria-hidden="true">#</a> 切片拷贝</h3>
<p>Slice 中拷贝方法有2个。</p>
<ul>
<li><code>slicecopy</code></li>
</ul>
<details class="custom-container details"><summary>查看源码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">slicecopy</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> fm slice<span class="token punctuation">,</span> width <span class="token builtin">uintptr</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果源切片或者目标切片有一个长度为0，那么就不需要拷贝，直接 return </span>
    <span class="token keyword">if</span> fm<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> to<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// n 记录下源切片或者目标切片较短的那一个的长度</span>
    n <span class="token operator">:=</span> fm<span class="token punctuation">.</span><span class="token builtin">len</span>
    <span class="token keyword">if</span> to<span class="token punctuation">.</span><span class="token builtin">len</span> <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
        n <span class="token operator">=</span> to<span class="token punctuation">.</span><span class="token builtin">len</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果入参 width = 0，也不需要拷贝了，返回较短的切片的长度</span>
    <span class="token keyword">if</span> width <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果开启了竞争检测</span>
    <span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
        callerpc <span class="token operator">:=</span> <span class="token function">getcallerpc</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span>
        pc <span class="token operator">:=</span> <span class="token function">funcPC</span><span class="token punctuation">(</span>slicecopy<span class="token punctuation">)</span>
        <span class="token function">racewriterangepc</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> pc<span class="token punctuation">)</span>
        <span class="token function">racereadrangepc</span><span class="token punctuation">(</span>fm<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> pc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果开启了 The memory sanitizer (msan)</span>
    <span class="token keyword">if</span> msanenabled <span class="token punctuation">{</span>
        <span class="token function">msanwrite</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">msanread</span><span class="token punctuation">(</span>fm<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token operator">*</span><span class="token function">int</span><span class="token punctuation">(</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    size <span class="token operator">:=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">*</span> width
    <span class="token keyword">if</span> size <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span> 
        <span class="token comment">// TODO: is this still worth it with new memmove impl?</span>
        <span class="token comment">// 如果只有一个元素，那么指针直接转换即可</span>
        <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>array<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>fm<span class="token punctuation">.</span>array<span class="token punctuation">)</span> <span class="token comment">// known to be a byte pointer</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果不止一个元素，那么就把 size 个 bytes 从 fm.array 地址开始，拷贝到 to.array 地址之后</span>
        <span class="token function">memmove</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>array<span class="token punctuation">,</span> fm<span class="token punctuation">.</span>array<span class="token punctuation">,</span> size<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></details>
<p>在这个方法中，<code>slicecopy </code>方法会把源切片值(即 fm Slice )中的元素复制到目标切片(即 to Slice )中，并返回被复制的元素个数，copy 的两个类型必须一致。slicecopy 方法最终的复制结果取决于较短的那个切片，当较短的切片复制完成，整个复制过程就全部完成了。</p>
<p><img src="@source/language/go/pics/array_slice/m_de4254a0cfe1df7843ea784eb419d91c_r.png" alt="null"></p>
<p>举个例子，比如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    n <span class="token operator">:=</span> <span class="token function">copy</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> array<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>还有一个拷贝的方法，这个方法原理和 slicecopy 方法类似，不在赘述了，注释写在代码里面了。</p>
<details class="custom-container details"><summary>查看源码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">slicestringcopy</span><span class="token punctuation">(</span>to <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> fm <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果源切片或者目标切片有一个长度为0，那么就不需要拷贝，直接 return </span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>fm<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">len</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// n 记录下源切片或者目标切片较短的那一个的长度</span>
    n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>fm<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span> <span class="token operator">&lt;</span> n <span class="token punctuation">{</span>
        n <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果开启了竞争检测</span>
    <span class="token keyword">if</span> raceenabled <span class="token punctuation">{</span>
        callerpc <span class="token operator">:=</span> <span class="token function">getcallerpc</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span>
        pc <span class="token operator">:=</span> <span class="token function">funcPC</span><span class="token punctuation">(</span>slicestringcopy<span class="token punctuation">)</span>
        <span class="token function">racewriterangepc</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>to<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> callerpc<span class="token punctuation">,</span> pc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果开启了 The memory sanitizer (msan)</span>
    <span class="token keyword">if</span> msanenabled <span class="token punctuation">{</span>
        <span class="token function">msanwrite</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>to<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 拷贝字符串至字节数组</span>
    <span class="token function">memmove</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>to<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">stringStructOf</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>fm<span class="token punctuation">)</span><span class="token punctuation">.</span>str<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>
<p>再举个例子，比如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    n <span class="token operator">:=</span> <span class="token function">copy</span><span class="token punctuation">(</span>slice<span class="token punctuation">,</span> <span class="token string">"abcdef"</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    3 [97,98,99]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>说到拷贝，切片中有一个需要注意的问题。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"value = %d , value-addr = %x , slice-addr = %x\n"</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token operator">&amp;</span>value<span class="token punctuation">,</span> <span class="token operator">&amp;</span>slice<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    value = 10 , value-addr = c4200aedf8 , slice-addr = c4200b0320
    value = 20 , value-addr = c4200aedf8 , slice-addr = c4200b0328
    value = 30 , value-addr = c4200aedf8 , slice-addr = c4200b0330
    value = 40 , value-addr = c4200aedf8 , slice-addr = c4200b0338
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>从上面结果我们可以看到，如果用 range 的方式去遍历一个切片，拿到的 Value 其实是切片里面的值拷贝。所以每次打印 Value 的地址都不变。</p>
<p><img src="@source/language/go/pics/array_slice/m_18e670ad444e7cd50c684ea50e44b27e_r.png" alt="null"></p>
<p>由于 Value 是值拷贝的，并非引用传递，所以直接改 Value 是达不到更改原切片值的目的的，需要通过 <code>&amp;slice[index]</code> 获取真实的地址。</p>
<details class="custom-container details"><summary>测试代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		v <span class="token operator">+=</span> <span class="token number">5</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token comment">/**
		for range 里面的value是一个值拷贝
	**/</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">5</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
</template>
