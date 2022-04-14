<template><nav class="table-of-contents"><ul><li><RouterLink to="#map">Map</RouterLink><ul><li><RouterLink to="#_1-map的基本使用">1. map的基本使用</RouterLink><ul><li><RouterLink to="#_1-1-map定义">1.1. map定义</RouterLink></li><li><RouterLink to="#_1-2-map基本使用">1.2. map基本使用</RouterLink></li><li><RouterLink to="#_1-3-判断某个键是否存在">1.3. 判断某个键是否存在</RouterLink></li><li><RouterLink to="#_1-4-map的遍历">1.4. map的遍历</RouterLink></li><li><RouterLink to="#_1-5-使用delete-函数删除键值对">1.5. 使用delete()函数删除键值对</RouterLink></li><li><RouterLink to="#_1-6-按照指定顺序遍历map">1.6. 按照指定顺序遍历map</RouterLink></li><li><RouterLink to="#_1-7-元素为map类型的切片">1.7. 元素为map类型的切片</RouterLink></li><li><RouterLink to="#_1-8-值为切片类型的map">1.8. 值为切片类型的map</RouterLink></li></ul></li><li><RouterLink to="#_2-map的实现原理">2. map的实现原理</RouterLink><ul><li><RouterLink to="#_2-1-什么是map">2.1. 什么是Map</RouterLink><ul><li><RouterLink to="#key-value存储">key，value存储</RouterLink></li><li><RouterLink to="#hash冲突">hash冲突</RouterLink></li></ul></li><li><RouterLink to="#_2-2-go中map的使用">2.2. Go中Map的使用</RouterLink></li><li><RouterLink to="#_2-3-go中map的实现原理">2.3. Go中Map的实现原理</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h1>
<p>map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。</p>
<h2 id="_1-map的基本使用" tabindex="-1"><a class="header-anchor" href="#_1-map的基本使用" aria-hidden="true">#</a> 1. map的基本使用</h2>
<h3 id="_1-1-map定义" tabindex="-1"><a class="header-anchor" href="#_1-1-map定义" aria-hidden="true">#</a> 1.1. map定义</h3>
<p>Go语言中 map的定义语法如下</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">map</span><span class="token punctuation">[</span>KeyType<span class="token punctuation">]</span>ValueType
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中，</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    KeyType:表示键的类型。

    ValueType:表示键对应的值的类型。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>map类型的变量默认初始值为nil，需要使用make()函数来分配内存。语法为：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>KeyType<span class="token punctuation">]</span>ValueType<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token builtin">cap</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中cap表示map的容量，该参数虽然不是必须的，<strong>但是我们应该在初始化map的时候就为其指定一个合适的容量。</strong></p>
<h3 id="_1-2-map基本使用" tabindex="-1"><a class="header-anchor" href="#_1-2-map基本使用" aria-hidden="true">#</a> 1.2. map基本使用</h3>
<p>map中的数据都是成对出现的，map的基本使用示例代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of a:%T\n"</span><span class="token punctuation">,</span> scoreMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    map<span class="token punctuation">[</span>小明:100 张三:90<span class="token punctuation">]</span>
    <span class="token number">100</span>
    <span class="token builtin class-name">type</span> of a:map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>int
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>map也支持在声明的时候填充元素，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    userInfo <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
        <span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span> <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_1-3-判断某个键是否存在" tabindex="-1"><a class="header-anchor" href="#_1-3-判断某个键是否存在" aria-hidden="true">#</a> 1.3. 判断某个键是否存在</h3>
<p>Go语言中有个判断map中键是否存在的特殊写法，格式如下:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><details class="custom-container details"><summary>举个例子：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token comment">// 如果key存在ok为true,v为对应的值；不存在ok为false,v为值类型的零值</span>
    v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查无此人"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
<h3 id="_1-4-map的遍历" tabindex="-1"><a class="header-anchor" href="#_1-4-map的遍历" aria-hidden="true">#</a> 1.4. map的遍历</h3>
<p>Go语言中使用for range遍历map。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>但我们只想遍历key的时候，可以按下面的写法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>注意： 遍历map时的元素顺序与添加键值对的顺序无关。</p>
<h3 id="_1-5-使用delete-函数删除键值对" tabindex="-1"><a class="header-anchor" href="#_1-5-使用delete-函数删除键值对" aria-hidden="true">#</a> 1.5. 使用delete()函数删除键值对</h3>
<p>使用delete()内建函数从map中删除一组键值对，delete()函数的格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中，</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    map:表示要删除键值对的map

    key:表示要删除的键值对的键
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="custom-container details"><summary>示例代码如下：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">,</span> <span class="token string">"小明"</span><span class="token punctuation">)</span><span class="token comment">//将小明:100从map中删除</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<ul>
<li>那么如何判断一个元素是否被成功删除呢</li>
</ul>
<blockquote>
<p>在<code>Go</code>的底层，如果删除元素不在<code>map</code>中，那么将是一个<code>no-op</code>（即什么都不做）。</p>
<p>那么如果我们想要强制实现呢？</p>
<p>也不是没有办法，毕竟<code>Go</code>天生适合造轮子，我们可以通过判断<code>map</code>的长度是否发生变化来判断。</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">MapDel</span><span class="token punctuation">(</span>m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	reg <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
	<span class="token keyword">return</span> reg <span class="token operator">!=</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		m<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token function">MapDel</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"after del => map = "</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>map<span class="token punctuation">[</span><span class="token number">0</span>:0 <span class="token number">1</span>:1 <span class="token number">2</span>:2<span class="token punctuation">]</span>
after del <span class="token operator">=</span><span class="token operator">></span> map <span class="token operator">=</span>  map<span class="token punctuation">[</span><span class="token number">0</span>:0 <span class="token number">2</span>:2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="_1-6-按照指定顺序遍历map" tabindex="-1"><a class="header-anchor" href="#_1-6-按照指定顺序遍历map" aria-hidden="true">#</a> 1.6. 按照指定顺序遍历map</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code> <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//初始化随机数种子</span>

    <span class="token keyword">var</span> scoreMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        key <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"stu%02d"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">//生成stu开头的字符串</span>
        value <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>          <span class="token comment">//生成0~99的随机整数</span>
        scoreMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
    <span class="token comment">//取出map中的所有key存入切片keys</span>
    <span class="token keyword">var</span> keys <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        keys <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对切片进行排序</span>
    sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>
    <span class="token comment">//按照排序后的key遍历map</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> scoreMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_1-7-元素为map类型的切片" tabindex="-1"><a class="header-anchor" href="#_1-7-元素为map类型的切片" aria-hidden="true">#</a> 1.7. 元素为map类型的切片</h3>
<p>下面的代码演示了切片中的元素为map类型时的操作：</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> mapSlice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"index:%d value:%v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"after init"</span><span class="token punctuation">)</span>
    <span class="token comment">// 对切片中的map元素进行初始化</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"王五"</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"123456"</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"address"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"红旗大街"</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"index:%d value:%v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>index:0 value:map<span class="token punctuation">[</span><span class="token punctuation">]</span>
index:1 value:map<span class="token punctuation">[</span><span class="token punctuation">]</span>
index:2 value:map<span class="token punctuation">[</span><span class="token punctuation">]</span>
after init
index:0 value:map<span class="token punctuation">[</span>address:红旗大街 name:王五 password:123456<span class="token punctuation">]</span>
index:1 value:map<span class="token punctuation">[</span><span class="token punctuation">]</span>
index:2 value:map<span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<h3 id="_1-8-值为切片类型的map" tabindex="-1"><a class="header-anchor" href="#_1-8-值为切片类型的map" aria-hidden="true">#</a> 1.8. 值为切片类型的map</h3>
<p>下面的代码演示了map中值为切片类型的操作：</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sliceMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"after init"</span><span class="token punctuation">)</span>
    key <span class="token operator">:=</span> <span class="token string">"中国"</span>
    value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    value <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">"北京"</span><span class="token punctuation">,</span> <span class="token string">"上海"</span><span class="token punctuation">)</span>
    sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>map[]
after init
map[中国:[北京 上海]]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h2 id="_2-map的实现原理" tabindex="-1"><a class="header-anchor" href="#_2-map的实现原理" aria-hidden="true">#</a> 2. map的实现原理</h2>
<h3 id="_2-1-什么是map" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是map" aria-hidden="true">#</a> 2.1. 什么是Map</h3>
<h4 id="key-value存储" tabindex="-1"><a class="header-anchor" href="#key-value存储" aria-hidden="true">#</a> key，value存储</h4>
<p>最通俗的话说Map是一种通过key来获取value的一个数据结构，其底层存储方式为数组，在存储时key不能重复，当key重复时，value进行覆盖，我们通过key进行hash运算（可以简单理解为把key转化为一个整形数字）然后对数组的长度取余，得到key存储在数组的哪个下标位置，最后将key和value组装为一个结构体，放入数组下标处，看下图：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    length <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">4</span>
    hashkey1 <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">4</span>
    index1  <span class="token operator">=</span> hashkey1<span class="token operator">%</span> length<span class="token operator">=</span> <span class="token number">0</span>
    hashkey2 <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>xiaoli<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">6</span>
    index2  <span class="token operator">=</span> hashkey2<span class="token operator">%</span> length<span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/language/go/pics/map/1.png" alt="img"></p>
<h4 id="hash冲突" tabindex="-1"><a class="header-anchor" href="#hash冲突" aria-hidden="true">#</a> hash冲突</h4>
<p>如上图所示，数组一个下标处只能存储一个元素，也就是说一个数组下标只能存储一对key，value, hashkey(xiaoming)=4占用了下标0的位置，假设我们遇到另一个key，hashkey(xiaowang)也是4，这就是hash冲突（不同的key经过hash之后得到的值一样），那么key=xiaowang的怎么存储？ hash冲突的常见解决方法</p>
<p>开放定址法：也就是说当我们存储一个key，value时，发现hashkey(key)的下标已经被别key占用，那我们在这个数组中空间中重新找一个没被占用的存储这个冲突的key，那么没被占用的有很多，找哪个好呢？常见的有线性探测法，线性补偿探测法，随机探测法，这里我们主要说一下线性探测法</p>
<p>线性探测，字面意思就是按照顺序来，从冲突的下标处开始往后探测，到达数组末尾时，从数组开始处探测，直到找到一个空位置存储这个key，当数组都找不到的情况下回扩容（事实上当数组容量快满的时候就会扩容了）；查找某一个key的时候，找到key对应的下标，比较key是否相等，如果相等直接取出来，否则按照顺寻探测直到碰到一个空位置，说明key不存在。如下图：首先存储key=xiaoming在下标0处，当存储key=xiaowang时，hash冲突了，按照线性探测，存储在下标1处，（红色的线是冲突或者下标已经被占用了） 再者key=xiaozhao存储在下标4处，当存储key=xiaoliu是，hash冲突了，按照线性探测，从头开始，存储在下标2处 （黄色的是冲突或者下标已经被占用了）</p>
<p><img src="@source/language/go/pics/map/2.png" alt="img"></p>
<p>拉链法：何为拉链，简单理解为链表，当key的hash冲突时，我们在冲突位置的元素上形成一个链表，通过指针互连接，当查找时，发现key冲突，顺着链表一直往下找，直到链表的尾节点，找不到则返回空，如下图：</p>
<p><img src="pics/map/3.png" alt="img"></p>
<p>开放定址（线性探测）和拉链的优缺点</p>
<ul>
<li>由上面可以看出拉链法比线性探测处理简单</li>
<li>线性探测查找是会被拉链法会更消耗时间</li>
<li>线性探测会更加容易导致扩容，而拉链不会</li>
<li>拉链存储了指针，所以空间上会比线性探测占用多一点</li>
<li>拉链是动态申请存储空间的，所以更适合链长不确定的</li>
</ul>
<h3 id="_2-2-go中map的使用" tabindex="-1"><a class="header-anchor" href="#_2-2-go中map的使用" aria-hidden="true">#</a> 2.2. Go中Map的使用</h3>
<details class="custom-container details"><summary>直接用代码描述，直观，简单，易理解</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//直接创建初始化一个mao</span>
<span class="token keyword">var</span> mapInit <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token string">"xiaoli"</span><span class="token punctuation">:</span><span class="token string">"湖南"</span><span class="token punctuation">,</span> <span class="token string">"xiaoliu"</span><span class="token punctuation">:</span><span class="token string">"天津"</span><span class="token punctuation">}</span>

<span class="token comment">//声明一个map类型变量,</span>
<span class="token comment">//map的key的类型是string，value的类型是string</span>
<span class="token keyword">var</span> mapTemp <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token comment">//使用make函数初始化这个变量,并指定大小(也可以不指定)</span>
mapTemp <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>


<span class="token comment">//存储key ，value</span>
mapTemp<span class="token punctuation">[</span><span class="token string">"xiaoming"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"北京"</span>
mapTemp<span class="token punctuation">[</span><span class="token string">"xiaowang"</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">"河北"</span>


<span class="token comment">//根据key获取value,</span>
<span class="token comment">//如果key存在，则ok是true，否则是flase</span>

<span class="token comment">//v1用来接收key对应的value,当ok是false时，v1是nil</span>
v1<span class="token punctuation">,</span>ok <span class="token operator">:=</span> mapTemp<span class="token punctuation">[</span><span class="token string">"xiaoming"</span><span class="token punctuation">]</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ok<span class="token punctuation">,</span>v1<span class="token punctuation">)</span>

<span class="token comment">//当key=xiaowang存在时打印value</span>
<span class="token keyword">if</span> v2<span class="token punctuation">,</span>ok <span class="token operator">:=</span> mapTemp<span class="token punctuation">[</span><span class="token string">"xiaowang"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok<span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//遍历map,打印key和value</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> mapTemp<span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//删除map中的key</span>
<span class="token function">delete</span><span class="token punctuation">(</span>mapTemp<span class="token punctuation">,</span><span class="token string">"xiaoming"</span><span class="token punctuation">)</span>
<span class="token comment">//获取map的大小</span>
l <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>mapTemp<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></details>
<p>看了上面的map创建，初始化，增删改查等操作，我们发现go的api其实挺简单易学的</p>
<h3 id="_2-3-go中map的实现原理" tabindex="-1"><a class="header-anchor" href="#_2-3-go中map的实现原理" aria-hidden="true">#</a> 2.3. Go中Map的实现原理</h3>
<p>知其然，更得知其所以然，会使用map了，多问问为什么，go底层map到底怎么存储呢?接下来我们一探究竟。map的源码位于 <code>src/runtime/map.go</code>中 笔者go的版本是1.12在go中，map同样也是数组存储的的，每个数组下标处存储的是一个bucket,这个bucket的类型见下面代码，每个bucket中可以存储8个kv键值对，当每个bucket存储的kv对到达8个之后，会通过overflow指针指向一个新的bucket，从而形成一个链表,看bmap的结构，我想大家应该很纳闷，没看见kv的结构和overflow指针啊，事实上，这两个结构体并没有显示定义，是通过指针运算进行访问的。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//bucket结构体定义 b就是bucket</span>
<span class="token keyword">type</span> bmap<span class="token punctuation">{</span>
    <span class="token comment">// tophash generally contains the top byte of the hash value</span>
    <span class="token comment">// for each key  in this bucket. If tophash[0] &lt; minTopHash,</span>
    <span class="token comment">// tophash[0] is a bucket               evacuation state instead.</span>
    <span class="token comment">//翻译：top hash通常包含该bucket中每个键的hash值的高八位。</span>
    如果tophash<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>小于mintophash，则tophash<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>为桶疏散状态    <span class="token comment">//bucketCnt 的初始值是8</span>
    tophash <span class="token punctuation">[</span>bucketCnt<span class="token punctuation">]</span><span class="token builtin">uint8</span>
    <span class="token comment">// Followed by bucketCnt keys and then bucketCnt values.</span>
    <span class="token comment">// NOTE: packing all the keys together and then all the values together makes the    // code a bit more complicated than alternating key/value/key/value/... but it allows    // us to eliminate padding which would be needed for, e.g., map[int64]int8.// Followed by an overflow pointer.    //翻译：接下来是bucketcnt键，然后是bucketcnt值。</span>
    注意：将所有键打包在一起，然后将所有值打包在一起，    使得代码比交替键<span class="token operator">/</span>值<span class="token operator">/</span>键<span class="token operator">/</span>值<span class="token operator">/</span>更复杂。但它允许<span class="token comment">//我们消除可能需要的填充，    例如map[int64]int8./后面跟一个溢出指针}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>看上面代码以及注释，我们能得到bucket中存储的kv是这样的，tophash用来快速查找key值是否在该bucket中，而不同每次都通过真值进行比较；还有kv的存放，为什么不是k1v1，k2v2..... 而是k1k2...v1v2...，我们看上面的注释说的 map[int64]int8,key是int64（8个字节），value是int8（一个字节），kv的长度不同，如果按照kv格式存放，则考虑内存对齐v也会占用int64，而按照后者存储时，8个v刚好占用一个int64,从这个就可以看出go的map设计之巧妙。</p>
<p><img src="@source/language/go/pics/map/4.png" alt="img"></p>
<p>最后我们分析一下go的整体内存结构，阅读一下map存储的源码，如下图所示，当往map中存储一个kv对时，通过k获取hash值，hash值的低八位和bucket数组长度取余，定位到在数组中的那个下标，hash值的高八位存储在bucket中的tophash中，用来快速判断key是否存在，key和value的具体值则通过指针运算存储，当一个bucket满时，通过overfolw指针链接到下一个bucket。</p>
<p><img src="@source/language/go/pics/map/5.png" alt="img"></p>
<details class="custom-container details"><summary>go的map存储源码如下，省略了一些无关紧要的代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">mapassign</span><span class="token punctuation">(</span>t <span class="token operator">*</span>maptype<span class="token punctuation">,</span> h <span class="token operator">*</span>hmap<span class="token punctuation">,</span> key unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">)</span> unsafe<span class="token punctuation">.</span>Pointer <span class="token punctuation">{</span>
    <span class="token comment">//获取hash算法</span>
    alg <span class="token operator">:=</span> t<span class="token punctuation">.</span>key<span class="token punctuation">.</span>alg
    <span class="token comment">//计算hash值</span>
    hash <span class="token operator">:=</span> alg<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token function">uintptr</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>hash0<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//如果bucket数组一开始为空，则初始化</span>
    <span class="token keyword">if</span> h<span class="token punctuation">.</span>buckets <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        h<span class="token punctuation">.</span>buckets <span class="token operator">=</span> <span class="token function">newobject</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>bucket<span class="token punctuation">)</span> <span class="token comment">// newarray(t.bucket, 1)</span>
    <span class="token punctuation">}</span>
again<span class="token punctuation">:</span>
    <span class="token comment">// 定位存储在哪一个bucket中</span>
    bucket <span class="token operator">:=</span> hash <span class="token operator">&amp;</span> <span class="token function">bucketMask</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>B<span class="token punctuation">)</span>
    <span class="token comment">//得到bucket的结构体</span>
    b <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>bmap<span class="token punctuation">)</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token function">uintptr</span><span class="token punctuation">(</span>h<span class="token punctuation">.</span>buckets<span class="token punctuation">)</span> <span class="token operator">+</span>bucket<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>bucketsize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//获取高八位hash值</span>
    top <span class="token operator">:=</span> <span class="token function">tophash</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span>
    <span class="token keyword">var</span> inserti <span class="token operator">*</span><span class="token builtin">uint8</span>
    <span class="token keyword">var</span> insertk unsafe<span class="token punctuation">.</span>Pointer
    <span class="token keyword">var</span> val unsafe<span class="token punctuation">.</span>Pointer
bucketloop<span class="token punctuation">:</span>
    <span class="token comment">//死循环</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">//循环bucket中的tophash数组</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token function">uintptr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> bucketCnt<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果hash不相等</span>
            <span class="token keyword">if</span> b<span class="token punctuation">.</span>tophash<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> top <span class="token punctuation">{</span>
             <span class="token comment">//判断是否为空，为空则插入</span>
                <span class="token keyword">if</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>tophash<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> inserti <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                    inserti <span class="token operator">=</span> <span class="token operator">&amp;</span>b<span class="token punctuation">.</span>tophash<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    insertk <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> dataOffset<span class="token operator">+</span>i<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>keysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    val <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> 
                    dataOffset<span class="token operator">+</span>bucketCnt<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>keysize<span class="token punctuation">)</span><span class="token operator">+</span>i<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>valuesize<span class="token punctuation">)</span> <span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
              <span class="token comment">//插入成功，终止最外层循环</span>
                <span class="token keyword">if</span> b<span class="token punctuation">.</span>tophash<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> emptyRest <span class="token punctuation">{</span>
                    <span class="token keyword">break</span> bucketloop
                <span class="token punctuation">}</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//到这里说明高八位hash一样，获取已存在的key</span>
            k <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> dataOffset<span class="token operator">+</span>i<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>keysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">indirectkey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                k <span class="token operator">=</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">)</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//判断两个key是否相等，不相等就循环下一个</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>alg<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 如果相等则更新</span>
            <span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">needkeyupdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">typedmemmove</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>key<span class="token punctuation">,</span> k<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//获取已存在的value</span>
            val <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> dataOffset<span class="token operator">+</span>bucketCnt<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>keysize<span class="token punctuation">)</span><span class="token operator">+</span>i<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>valuesize<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">goto</span> done
        <span class="token punctuation">}</span>
        <span class="token comment">//如果上一个bucket没能插入，则通过overflow获取链表上的下一个bucket</span>
        ovf <span class="token operator">:=</span> b<span class="token punctuation">.</span><span class="token function">overflow</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        <span class="token keyword">if</span> ovf <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        b <span class="token operator">=</span> ovf
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> inserti <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// all current buckets are full, allocate a new one.</span>
        newb <span class="token operator">:=</span> h<span class="token punctuation">.</span><span class="token function">newoverflow</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
        inserti <span class="token operator">=</span> <span class="token operator">&amp;</span>newb<span class="token punctuation">.</span>tophash<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        insertk <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>newb<span class="token punctuation">)</span><span class="token punctuation">,</span> dataOffset<span class="token punctuation">)</span>
        val <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>insertk<span class="token punctuation">,</span> bucketCnt<span class="token operator">*</span><span class="token function">uintptr</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>keysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// store new key/value at insert position</span>
    <span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">indirectkey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        kmem <span class="token operator">:=</span> <span class="token function">newobject</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
        <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">)</span><span class="token punctuation">(</span>insertk<span class="token punctuation">)</span> <span class="token operator">=</span> kmem
        insertk <span class="token operator">=</span> kmem
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> t<span class="token punctuation">.</span><span class="token function">indirectvalue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vmem <span class="token operator">:=</span> <span class="token function">newobject</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>elem<span class="token punctuation">)</span>
        <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>unsafe<span class="token punctuation">.</span>Pointer<span class="token punctuation">)</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span> vmem
    <span class="token punctuation">}</span>
    <span class="token function">typedmemmove</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>key<span class="token punctuation">,</span> insertk<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token comment">//将高八位hash值存储</span>
    <span class="token operator">*</span>inserti <span class="token operator">=</span> top
    h<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token keyword">return</span> val
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div></details>
</template>
