<template><nav class="table-of-contents"><ul><li><RouterLink to="#_1-指针">1. 指针</RouterLink><ul><li><RouterLink to="#_1-1-go语言中的指针">1.1. Go语言中的指针</RouterLink><ul><li><RouterLink to="#_1-1-1-指针地址和指针类型">1.1.1. 指针地址和指针类型</RouterLink></li><li><RouterLink to="#_1-1-2-指针取值">1.1.2. 指针取值</RouterLink></li><li><RouterLink to="#_1-1-3-空指针">1.1.3. 空指针</RouterLink></li><li><RouterLink to="#_1-1-4-new和make">1.1.4. new和make</RouterLink></li><li><RouterLink to="#_1-1-5-new">1.1.5. new</RouterLink></li><li><RouterLink to="#_1-1-6-make">1.1.6. make</RouterLink></li><li><RouterLink to="#_1-1-7-new与make的区别">1.1.7. new与make的区别</RouterLink></li><li><RouterLink to="#_1-1-8-指针小练习">1.1.8. 指针小练习</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="_1-指针" tabindex="-1"><a class="header-anchor" href="#_1-指针" aria-hidden="true">#</a> 1. 指针</h1>
<p>区别于C/C++中的指针，Go语言中的指针不能进行偏移和运算，是安全指针。</p>
<p>要搞明白Go语言中的指针需要先知道3个概念：指针地址、指针类型和指针取值。</p>
<h2 id="_1-1-go语言中的指针" tabindex="-1"><a class="header-anchor" href="#_1-1-go语言中的指针" aria-hidden="true">#</a> 1.1. Go语言中的指针</h2>
<p>Go语言中的函数传参都是值拷贝，当我们想要修改某个变量的时候，我们可以创建一个指向该变量地址的指针变量。传递数据使用指针，而无须拷贝数据。类型指针不能进行偏移和运算。Go语言中的指针操作非常简单，只需要记住两个符号：<code>&amp;</code>（取地址）和<code>*</code>（根据地址取值）。</p>
<h3 id="_1-1-1-指针地址和指针类型" tabindex="-1"><a class="header-anchor" href="#_1-1-1-指针地址和指针类型" aria-hidden="true">#</a> 1.1.1. 指针地址和指针类型</h3>
<p>每个变量在运行时都拥有一个地址，这个地址代表变量在内存中的位置。Go语言中使用&amp;字符放在变量前面对变量进行“取地址”操作。 Go语言中的值类型<code>（int、float、bool、string、array、struct）</code>都有对应的指针类型，如：<code>*int、*int64、*string</code>等。</p>
<p>取变量指针的语法如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    ptr <span class="token operator">:=</span> <span class="token operator">&amp;</span>v    <span class="token comment">// v的类型为T</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    v:代表被取地址的变量，类型为T
    ptr:用于接收地址的变量，ptr的类型就为*T，称做T的指针类型。*代表指针。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><details class="custom-container details"><summary>举个例子：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">10</span>
    b <span class="token operator">:=</span> <span class="token operator">&amp;</span>a
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a:%d ptr:%p\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span> <span class="token comment">// a:10 ptr:0xc00001a078</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"b:%p type:%T\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// b:0xc00001a078 type:*int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span>                    <span class="token comment">// 0xc00000e018</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>我们来看一下<code>b := &amp;a</code>的图示：</p>
<p><img src="@source/language/go/pics/pointer/1.png" alt="指针"></p>
</details>
<h3 id="_1-1-2-指针取值" tabindex="-1"><a class="header-anchor" href="#_1-1-2-指针取值" aria-hidden="true">#</a> 1.1.2. 指针取值</h3>
<p>在对普通变量使用<code>&amp;</code>操作符取地址后会获得这个变量的指针，然后可以对指针使用<code>*</code>操作，也就是指针取值，代码如下。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//指针取值</span>
    a <span class="token operator">:=</span> <span class="token number">10</span>
    b <span class="token operator">:=</span> <span class="token operator">&amp;</span>a <span class="token comment">// 取变量a的地址，将指针保存到b中</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of b:%T\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token operator">*</span>b <span class="token comment">// 指针取值（根据指针去内存取值）</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of c:%T\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"value of c:%v\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>输出如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    <span class="token builtin class-name">type</span> of b:*int
    <span class="token builtin class-name">type</span> of c:int
    value of c:10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>总结： 取地址操作符&amp;和取值操作符<code>*</code>是一对互补操作符，<code>&amp;</code>取出地址，<code>*</code>根据地址取出地址指向的值。</p>
<p>变量、指针地址、指针变量、取地址、取值的相互关系和特性如下：\</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    <span class="token number">1</span>.对变量进行取地址（<span class="token operator">&amp;</span>）操作，可以获得这个变量的指针变量。
    <span class="token number">2</span>.指针变量的值是指针地址。
    <span class="token number">3</span>.对指针变量进行取值（*）操作，可以获得指针变量指向的原变量的值。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="custom-container details"><summary>指针传值示例：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">modify1</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">modify2</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">10</span>
    <span class="token function">modify1</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
    <span class="token function">modify2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 100</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details>
<h3 id="_1-1-3-空指针" tabindex="-1"><a class="header-anchor" href="#_1-1-3-空指针" aria-hidden="true">#</a> 1.1.3. 空指针</h3>
<ul>
<li>当一个指针被定义后没有分配到任何变量时，它的值为 nil</li>
<li>空指针的判断</li>
</ul>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">string</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p的值是%v\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
    <span class="token keyword">if</span> p <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"非空"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"空值"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_1-1-4-new和make" tabindex="-1"><a class="header-anchor" href="#_1-1-4-new和make" aria-hidden="true">#</a> 1.1.4. new和make</h3>
<p>我们先来看一个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">*</span><span class="token builtin">int</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span>

    <span class="token keyword">var</span> b <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    b<span class="token punctuation">[</span><span class="token string">"测试"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>执行上面的代码会引发panic，为什么呢？ 在Go语言中对于引用类型的变量，我们在使用的时候不仅要声明它，还要为它分配内存空间，否则我们的值就没办法存储。而对于值类型的声明不需要分配内存空间，是因为它们在声明的时候已经默认分配好了内存空间。要分配内存，就引出来今天的new和make。 Go语言中new和make是内建的两个函数，主要用来分配内存</p>
<h3 id="_1-1-5-new" tabindex="-1"><a class="header-anchor" href="#_1-1-5-new" aria-hidden="true">#</a> 1.1.5. new</h3>
<p>new是一个内置的函数，它的函数签名如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    func new<span class="token punctuation">(</span>Type<span class="token punctuation">)</span> *Type
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.Type表示类型，new函数只接受一个参数，这个参数是一个类型
    2.*Type表示类型指针，new函数返回一个指向该类型内存地址的指针。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>new函数不太常用，使用new函数得到的是一个类型的指针，并且该指针对应的值为该类型的零值。举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    b <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// *int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// *bool</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span>       <span class="token comment">// 0</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>b<span class="token punctuation">)</span>       <span class="token comment">// false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>本节开始的示例代码中<code>var a *int</code>只是声明了一个指针变量a但是没有初始化，指针作为引用类型需要初始化后才会拥有内存空间，才可以给它赋值。应该按照如下方式使用内置的new函数对a进行初始化之后就可以正常对其赋值了：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">*</span><span class="token builtin">int</span>
    a <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">10</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-1-6-make" tabindex="-1"><a class="header-anchor" href="#_1-1-6-make" aria-hidden="true">#</a> 1.1.6. make</h3>
<p>make也是用于内存分配的，区别于new，它只用于<code>slice</code>、<code>map</code>以及<code>chan</code>的内存创建，而且它返回的类型就是这三个类型本身，而不是他们的指针类型，因为这三种类型就是引用类型，所以就没有必要返回他们的指针了。make函数的函数签名如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>func make(t Type, size ...IntegerType) Type
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>make函数是无可替代的，我们在使用slice、map以及channel的时候，都需要使用make进行初始化，然后才可以对它们进行操作。这个我们在上一章中都有说明，关于channel我们会在后续的章节详细说明。</p>
<p>本节开始的示例中<code>var b map[string]int</code>只是声明变量b是一个map类型的变量，需要像下面的示例代码一样使用make函数进行初始化操作之后，才能对其进行键值对赋值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> b <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    b <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    b<span class="token punctuation">[</span><span class="token string">"测试"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-1-7-new与make的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-7-new与make的区别" aria-hidden="true">#</a> 1.1.7. new与make的区别</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.二者都是用来做内存分配的。
    2.make只用于slice、map以及channel的初始化，返回的还是这三个引用类型本身；
    3.而new用于类型的内存分配，并且内存对应的值为类型零值，返回的是指向类型的指针。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-1-8-指针小练习" tabindex="-1"><a class="header-anchor" href="#_1-1-8-指针小练习" aria-hidden="true">#</a> 1.1.8. 指针小练习</h3>
<ul>
<li>程序定义一个int变量num的地址并打印</li>
<li>将num的地址赋给指针ptr，并通过ptr去修改num的值</li>
</ul>
<details class="custom-container details"><summary>代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
    <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>a
    <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
</template>
