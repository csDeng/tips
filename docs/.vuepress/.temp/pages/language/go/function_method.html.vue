<template><nav class="table-of-contents"><ul><li><RouterLink to="#函数与方法">函数与方法</RouterLink><ul><li><RouterLink to="#_1-函数">1. 函数</RouterLink><ul><li><RouterLink to="#_1-1-golang函数特点">1.1 golang函数特点：</RouterLink></li><li><RouterLink to="#_1-2-函数声明">1.2 函数声明：</RouterLink></li><li><RouterLink to="#_1-3-函数参数">1.3 函数参数</RouterLink></li><li><RouterLink to="#_1-4-函数返回值">1.4 函数返回值</RouterLink></li><li><RouterLink to="#_1-5-匿名函数">1.5  匿名函数</RouterLink></li><li><RouterLink to="#_1-6-闭包">1.6 闭包</RouterLink><ul><li><RouterLink to="#go的闭包">Go的闭包</RouterLink></li></ul></li><li><RouterLink to="#_1-7-go-语言递归函数">1.7 Go 语言递归函数</RouterLink></li><li><RouterLink to="#_1-8-golang延迟调用">1.8 Golang延迟调用：</RouterLink><ul><li><RouterLink to="#go语言-defer">go语言 defer</RouterLink></li><li><RouterLink to="#defer-碰上闭包">defer 碰上闭包</RouterLink></li><li><RouterLink to="#defer-f-close">defer f.Close</RouterLink></li></ul></li><li><RouterLink to="#_1-9-defer陷阱">1.9 defer陷阱</RouterLink><ul><li><RouterLink to="#defer-与-closure">defer 与 closure</RouterLink></li><li><RouterLink to="#defer-与-return">defer 与 return</RouterLink></li><li><RouterLink to="#defer-nil-函数">defer nil 函数</RouterLink></li><li><RouterLink to="#在错误的位置使用-defer">在错误的位置使用 defer</RouterLink></li><li><RouterLink to="#解决方案">解决方案</RouterLink></li><li><RouterLink to="#不检查错误">不检查错误</RouterLink></li></ul></li></ul></li><li><RouterLink to="#_2-方法">2. 方法</RouterLink><ul><li><RouterLink to="#_2-1-方法定义">2.1. 方法定义</RouterLink></li></ul></li><li><RouterLink to="#_3-普通函数与方法的区别">3. 普通函数与方法的区别</RouterLink></li><li><RouterLink to="#_4-扩展">4. 扩展</RouterLink><ul><li><RouterLink to="#_4-1-表达式">4.1. 表达式</RouterLink></li><li><RouterLink to="#_4-2-自定义error">4.2 自定义error</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="函数与方法" tabindex="-1"><a class="header-anchor" href="#函数与方法" aria-hidden="true">#</a> 函数与方法</h1>
<h2 id="_1-函数" tabindex="-1"><a class="header-anchor" href="#_1-函数" aria-hidden="true">#</a> 1. 函数</h2>
<h3 id="_1-1-golang函数特点" tabindex="-1"><a class="header-anchor" href="#_1-1-golang函数特点" aria-hidden="true">#</a> 1.1 golang函数特点：</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>• 无需声明原型。</p>
<p>• 支持不定 变参。</p>
<p>• 支持多返回值。</p>
<p>• 支持命名返回参数。</p>
<p>• 支持匿名函数和闭包。</p>
<p>• 函数也是一种类型，一个函数可以赋值给变量。</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>• 不支持 嵌套 (nested) 一个包不能有两个名字一样的函数。</p>
<p>• 不支持 重载 (overload)</p>
<p>• 不支持 默认参数 (default parameter)。</p>
</div>
<h3 id="_1-2-函数声明" tabindex="-1"><a class="header-anchor" href="#_1-2-函数声明" aria-hidden="true">#</a> 1.2 函数声明：</h3>
<p>函数声明包含一个函数名，参数列表， 返回值列表和函数体。如果函数没有返回值，则返回列表可以省略。函数从第一条语句开始执行，直到执行return语句或者执行函数的最后一条语句。</p>
<p>函数可以没有参数或接受多个参数。</p>
<p>注意类型在变量名之后 。</p>
<p>当两个或多个连续的函数命名参数是同一类型，则除了最后一个类型之外，其他都可以省略。</p>
<p>函数可以返回任意数量的返回值。</p>
<p>使用关键字 <code>func </code>定义函数，左大括号依旧不能另起一行。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类型相同的相邻参数，参数类型可合并。 多返回值必须用括号。</span>
    n <span class="token operator">:=</span> x <span class="token operator">+</span> y          
    <span class="token keyword">return</span> n<span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>函数是第一类对象，可作为参数传递。建议将复杂签名定义为函数类型，以便于阅读。</p>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义函数类型。</span>
<span class="token keyword">type</span> FormatFunc <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> 

<span class="token keyword">func</span> <span class="token function">format</span><span class="token punctuation">(</span>fn FormatFunc<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 直接将匿名函数当参数。</span>

    s2 <span class="token operator">:=</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"%d, %d"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">100</span> <span class="token number">10</span>, <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<p>有返回值的函数，必须有明确的终止语句，否则会引发编译错误。</p>
<p>你可能会偶尔遇到没有函数体的函数声明，这表示该函数不是以Go实现的。这样的声明定义了函数标识符。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package math

func Sin(x float64) float //implemented in assembly language
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-3-函数参数" tabindex="-1"><a class="header-anchor" href="#_1-3-函数参数" aria-hidden="true">#</a> 1.3 函数参数</h3>
<p>函数定义时指出，函数定义时有参数，该变量可称为函数的形参。形参就像定义在函数体内的局部变量。</p>
<p>但当调用函数，传递过来的变量就是函数的实参，函数可以通过两种方式来传递参数：</p>
<p>值传递：指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
       <span class="token operator">...</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>引用传递：是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">/* 定义相互交换值的函数 */</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> temp <span class="token builtin">int</span>

    temp <span class="token operator">=</span> <span class="token operator">*</span>x <span class="token comment">/* 保存 x 的值 */</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y   <span class="token comment">/* 将 y 值赋给 x */</span>
    <span class="token operator">*</span>y <span class="token operator">=</span> temp <span class="token comment">/* 将 temp 值赋给 y*/</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    <span class="token comment">/*
        调用 swap() 函数
        &amp;a 指向 a 指针，a 变量的地址
        &amp;b 指向 b 指针，b 变量的地址
    */</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<p>在默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>注意1：无论是值传递，还是引用传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。</p>
<p>注意2：map、slice、chan、指针、interface默认以<strong>引用</strong>的方式传递。</p>
</div>
<p>不定参数传值 就是函数的参数不是固定的，后面的类型是固定的。（可变参数）</p>
<p>Golang 可变参数本质上就是 <code>slice</code>。只能有一个，且必须是最后一个。</p>
<p>在参数赋值时可以不用用一个一个的赋值，可以直接传递一个数组或者切片，特别注意的是在参数后加上“<code>…</code>”即可。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">//0个或多个参数</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> args…<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//1个或多个参数</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">,</span> args…<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//2个或多个参数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注意：其中<code>args</code>是一个<code>slice</code>，我们可以通过<code>args[index]</code>依次访问所有参数,通过<code>len(arg)</code>来判断传递参数的个数.</p>
<p>任意类型的不定参数： 就是函数的参数和每个参数的类型都不是固定的。</p>
<p>用<code>interface{}</code>传递任意类型数据是Go语言的惯例用法，而且<code>interface{}</code>是类型安全的。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><details class="custom-container details"><summary>代码：</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"sum: %d"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>输出结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>sum<span class="token punctuation">:</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 slice 对象做变参时，必须展开。<code>（slice...）</code></p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    res <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"sum: %d"</span><span class="token punctuation">,</span> s<span class="token operator">...</span><span class="token punctuation">)</span>    <span class="token comment">// slice... 展开slice</span>
    <span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details>
<h3 id="_1-4-函数返回值" tabindex="-1"><a class="header-anchor" href="#_1-4-函数返回值" aria-hidden="true">#</a> 1.4 函数返回值</h3>
<p><code>&quot;_&quot;</code>标识符，用来忽略函数的某个返回值</p>
<p>Go 的返回值可以被命名，并且就像在函数体开头声明的变量那样使用。</p>
<p>返回值的名称应当具有一定的意义，可以作为文档使用。</p>
<hr>
<ol>
<li>
<p>没有参数的 return 语句返回各个返回变量的当前值。这种用法被称作“裸”返回。</p>
</li>
<li>
<p>直接返回语句仅应当用在像下面这样的短函数中。在长的函数中它们会影响代码的可读性。</p>
</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>c <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> a <span class="token operator">+</span> b
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calc</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum <span class="token builtin">int</span><span class="token punctuation">,</span> avg <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> a <span class="token operator">+</span> b
    avg <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    c <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    sum<span class="token punctuation">,</span> avg <span class="token operator">:=</span> <span class="token function">calc</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> avg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ol start="3">
<li>Golang返回值不能用容器对象接收多返回值。只能用多个变量，或 <code>&quot;_&quot;</code> 忽略。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// s := make([]int, 2)</span>
    <span class="token comment">// s = test()   // Error: multiple-value test() in single-value context</span>

    x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ol start="4">
<li>多返回值可直接作为其他函数调用实参。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">3</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<ol start="5">
<li>命名返回参数可看做与形参类似的局部变量，最后由 return 隐式返回。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ol start="6">
<li>命名返回参数可被同名局部变量遮蔽，此时需要显式返回。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span> <span class="token comment">// 不能在一个级别，引发 "z redeclared in this block" 错误。</span>
        <span class="token keyword">var</span> z <span class="token operator">=</span> x <span class="token operator">+</span> y
        <span class="token comment">// return   // Error: z is shadowed during return</span>
        <span class="token keyword">return</span> z <span class="token comment">// 必须显式返回。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details>
<ol start="7">
<li>命名返回参数允许 defer 延迟调用通过闭包读取和修改。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        z <span class="token operator">+=</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token number">103</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ol start="8">
<li>显式 return 返回前，会先修改命名返回参数。</li>
</ol>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token comment">// 输出: 203</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span> z <span class="token operator">+</span> <span class="token number">200</span> <span class="token comment">// 执行顺序: (z = z + 200) -> (call defer) -> (return)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 输出: 203</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>203
203
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="_1-5-匿名函数" tabindex="-1"><a class="header-anchor" href="#_1-5-匿名函数" aria-hidden="true">#</a> 1.5  匿名函数</h3>
<p>匿名函数是指不需要定义函数名的一种函数实现方式。1958年LISP首先采用匿名函数。</p>
<p>在Go里面，函数可以像普通变量一样被传递或使用，Go语言支持随时在代码里定义匿名函数。</p>
<p>匿名函数由一个不带函数名的函数声明和函数体组成。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getSqrt <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">getSqrt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>上面先定义了一个名为getSqrt 的变量，初始化该变量时和之前的变量初始化有些不同，使用了func，func是定义函数的，可是这个函数和上面说的函数最大不同就是没有函数名，也就是匿名函数。这里将一个函数当做一个变量一样的操作。</p>
<p>Golang匿名函数可赋值给变量，做为结构字段，或者在 channel 里传送。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// --- function variable ---</span>
    fn <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// --- function collection ---</span>
    fns <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>fns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// --- function as field ---</span>
    d <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        fn<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// --- channel of function ---</span>
    fc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fc <span class="token operator">&lt;-</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span> <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>fc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    Hello, World!
    101
    Hello, World!
    Hello, World!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>
<h3 id="_1-6-闭包" tabindex="-1"><a class="header-anchor" href="#_1-6-闭包" aria-hidden="true">#</a> 1.6 闭包</h3>
<p>闭包的应该都听过，但到底什么是闭包呢？</p>
<p>闭包是由函数及其相关引用环境组合而成的实体(即：闭包=函数+引用环境)。</p>
<details class="custom-container details"><summary>又臭又长不想看</summary>
<p>“官方”的解释是：所谓“闭包”，指的是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。</p>
<p>维基百科讲，闭包（Closure），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。</p>
<p>看着上面的描述，会发现闭包和匿名函数似乎有些像。可是可能还是有些云里雾里的。因为跳过闭包的创建过程直接理解闭包的定义是非常困难的。目前在<code>JavaScript、Go、PHP、Scala、Scheme、Common Lisp、Smalltalk、Groovy、Ruby、 Python、Lua、objective c、Swift </code>以及<code>Java8</code>以上等语言中都能找到对闭包不同程度的支持。通过支持闭包的语法可以发现一个特点，他们都有垃圾回收(<code>GC</code>)机制。 javascript应该是普及度比较高的编程语言了，通过这个来举例应该好理解写。看下面的代码，只要关注script里方法的定义和调用就可以了。</p>
</details>
<details class="custom-container details"><summary>查看代码（学过js直接跳吧）</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>"</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">"&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> c<span class="token operator">=</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//a(); //不会有信息输出</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"&lt;h1>=============&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> c2<span class="token operator">=</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">c2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>这段代码有两个特点：</p>
<p>函数b嵌套在函数a内部 函数a返回函数b 这样在执行完var c=a()后，变量c实际上是指向了函数b()，再执行函数c()后就会显示i的值，第一次为1，第二次为2，第三次为3，以此类推。 其实，这段代码就创建了一个闭包。因为函数a()外的变量c引用了函数a()内的函数b()，就是说：</p>
<p>当函数a()的内部函数b()被函数a()外的一个变量引用的时候，就创建了一个闭包。 在上面的例子中，由于闭包的存在使得函数a()返回后，a中的i始终存在，这样每次执行c()，i都是自加1后的值。 从上面可以看出闭包的作用就是在a()执行完并返回后，闭包使得Javascript的垃圾回收机制GC不会收回a()所占用的资源，因为a()的内部函数b()的执行需要依赖a()中的变量i。</p>
<p>在给定函数被多次调用的过程中，这些私有变量能够保持其持久性。变量的作用域仅限于包含它们的函数，因此无法从其它程序代码部分进行访问。不过，变量的生存期是可以很长，在一次函数调用期间所创建所生成的值在下次函数调用时仍然存在。正因为这一特点，闭包可以用来完成信息隐藏，并进而应用于需要状态表达的某些编程范型中。 下面来想象另一种情况，如果a()返回的不是函数b()，情况就完全不同了。因为a()执行完后，b()没有被返回给a()的外界，只是被a()所引用，而此时a()也只会被b()引 用，因此函数a()和b()互相引用但又不被外界打扰（被外界引用），函数a和b就会被GC回收。所以直接调用a();是页面并没有信息输出。</p>
<p>下面来说闭包的另一要素引用环境。c()跟c2()引用的是不同的环境，在调用i++时修改的不是同一个i，因此两次的输出都是1。函数a()每进入一次，就形成了一个新的环境，对应的闭包中，函数都是同一个函数，环境却是引用不同的环境。这和c()和c()的调用顺序都是无关的。</p>
</details>
<h4 id="go的闭包" tabindex="-1"><a class="header-anchor" href="#go的闭包" aria-hidden="true">#</a> Go的闭包</h4>
<p>Go语言是支持闭包的，这里只是简单地讲一下在Go语言中闭包是如何实现的。 下面我来将之前的JavaScript的闭包例子用Go来实现。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    i <span class="token operator">:=</span> <span class="token number">0</span>
    b <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        i<span class="token operator">++</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">return</span> i
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//不会输出i</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1
    2
    3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以发现，输出和之前的JavaScript的代码是一致的。具体的原因和上面的也是一样的，这说明Go语言是支持闭包的。</p>
<p>闭包复制的是原对象指针，这就很容易解释延迟引用现象。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">:=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x (%p) = %d\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x (%p) = %d\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    x (0xc42007c008) = 100
    x (0xc42007c008) = 100
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在汇编层 ，test 实际返回的是 FuncVal 对象，其中包含了匿名函数地址、闭包对象指针。当调 匿名函数时，只需以某个寄存器传递该对象即可。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    FuncVal { func_address, closure_var_pointer ... }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>外部引用函数参数局部变量</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// 外部引用函数参数局部变量</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        base <span class="token operator">+=</span> i
        <span class="token keyword">return</span> base
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp1 <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">tmp1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">tmp1</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 此时tmp1和tmp2不是一个实体了</span>
    tmp2 <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">tmp2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">tmp2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>返回2个闭包</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// 返回2个函数类型的返回值</span>
<span class="token keyword">func</span> <span class="token function">test01</span><span class="token punctuation">(</span>base <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义2个函数，并返回</span>
    <span class="token comment">// 相加</span>
    add <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        base <span class="token operator">+=</span> i
        <span class="token keyword">return</span> base
    <span class="token punctuation">}</span>
    <span class="token comment">// 相减</span>
    sub <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        base <span class="token operator">-=</span> i
        <span class="token keyword">return</span> base
    <span class="token punctuation">}</span>
    <span class="token comment">// 返回</span>
    <span class="token keyword">return</span> add<span class="token punctuation">,</span> sub
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f1<span class="token punctuation">,</span> f2 <span class="token operator">:=</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token comment">// base一直是没有消</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 此时base是9</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_1-7-go-语言递归函数" tabindex="-1"><a class="header-anchor" href="#_1-7-go-语言递归函数" aria-hidden="true">#</a> 1.7 Go 语言递归函数</h3>
<p>递归，就是在运行的过程中调用自己。 一个函数调用自己，就叫做递归函数。</p>
<p>构成递归需具备的条件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>.子问题须与原始问题为同样的事，且更为简单。
<span class="token number">2</span>.不能无限制地调用本身，须有个出口，化简为非递归状况处理。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>数字阶乘</li>
</ul>
<p>一个正整数的阶乘（factorial）是所有小于及等于该数的正整数的积，并且0的阶乘为1。自然数n的阶乘写作n!。1808年，基斯顿·卡曼引进这个表示法。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">factorial</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> i <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">7</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Factorial of %d is %d\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token function">factorial</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    Factorial of 7 is 5040
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ul>
<li>斐波那契数列(Fibonacci)</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<p>这个数列从第3项开始，每一项都等于前两项之和。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">fibonaci</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibonaci</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonaci</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%d\n"</span><span class="token punctuation">,</span> <span class="token function">fibonaci</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    0
    1
    1
    2
    3
    5
    8
    13
    21
    34
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details>
<h3 id="_1-8-golang延迟调用" tabindex="-1"><a class="header-anchor" href="#_1-8-golang延迟调用" aria-hidden="true">#</a> 1.8 Golang延迟调用：</h3>
<div class="custom-container tip"><p class="custom-container-title">defer的特性</p>
<ol>
<li>关键字 defer 用于注册延迟调用。</li>
<li>这些调用直到 return 前才被执。因此，可以用来做资源清理。</li>
<li>多个defer语句，按先进后出的方式执行。</li>
<li>defer语句中的变量，在defer声明时就决定了。</li>
</ol>
</div>
<div class="custom-container warning"><p class="custom-container-title">defer用途：</p>
<ol>
<li>关闭文件句柄</li>
<li>锁资源释放</li>
<li>数据库连接释放</li>
</ol>
</div>
<h4 id="go语言-defer" tabindex="-1"><a class="header-anchor" href="#go语言-defer" aria-hidden="true">#</a> go语言 defer</h4>
<p>go 语言的defer功能强大，对于资源管理非常方便，但是如果没用好，也会有陷阱。</p>
<p>defer 是先进后出</p>
<p>这个很自然,后面的语句会依赖前面的资源，因此如果先前面的资源先释放了，后面的语句就没法执行了。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> whatever <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> whatever <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">4</span>
<span class="token number">3</span>
<span class="token number">2</span>
<span class="token number">1</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<h4 id="defer-碰上闭包" tabindex="-1"><a class="header-anchor" href="#defer-碰上闭包" aria-hidden="true">#</a> defer 碰上闭包</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> whatever <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> whatever <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">4</span>
<span class="token number">4</span>
<span class="token number">4</span>
<span class="token number">4</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<p>其实go说的很清楚,我们一起来看看go spec如何说的</p>
<p><code>Each time a &quot;defer&quot; statement executes, the function value and parameters to the call are evaluated as usualand saved anew but the actual function is not invoked.</code></p>
<p>也就是说函数正常执行,由于闭包用到的变量 i 在执行的时候已经变成4,所以输出全都是4.</p>
<h4 id="defer-f-close" tabindex="-1"><a class="header-anchor" href="#defer-f-close" aria-hidden="true">#</a> defer f.Close</h4>
<p>这个大家用的都很频繁,但是go语言编程举了一个可能一不小心会犯错的例子.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">" closed"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ts <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Test<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"c"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> t <span class="token operator">:=</span> <span class="token keyword">range</span> ts <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> t<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>c  closed
c  closed
c  closed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个输出并不会像我们预计的输出c b a,而是输出c c c</p>
<p>可是按照前面的go spec中的说明,应该输出c b a才对啊.</p>
</details>
<p>那我们换一种方式来调用一下.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">" closed"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">Close</span><span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ts <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Test<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"c"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> t <span class="token operator">:=</span> <span class="token keyword">range</span> ts <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">Close</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    c  closed
    b  closed
    a  closed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个时候输出的就是c b a</p>
</details>
<p>当然,如果你不想多写一个函数,也很简单,可以像下面这样,同样会输出c b a</p>
<details class="custom-container details"><summary>看似多此一举的声明</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">" closed"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ts <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Test<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"c"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> t <span class="token operator">:=</span> <span class="token keyword">range</span> ts <span class="token punctuation">{</span>
        t2 <span class="token operator">:=</span> t
        <span class="token keyword">defer</span> t2<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    c  closed
    b  closed
    a  closed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<p>通过以上例子，结合</p>
<p><code>Each time a &quot;defer&quot; statement executes, the function value and parameters to the call are evaluated as usualand saved anew but the actual function is not invoked.</code></p>
<p>这句话。可以得出下面的结论：</p>
<p>defer后面的语句在执行的时候，函数调用的参数会被保存起来，但是不执行。也就是复制了一份。但是并没有说struct这里的this指针如何处理，通过这个例子可以看出go语言并没有把这个明确写出来的this指针当作参数来看待。</p>
<p>多个 defer 注册，按 FILO 次序执行 ( 先进后出 )。哪怕函数或某个延迟调用发生错误，这些调用依旧会被执行。</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span>

    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">/</span> x<span class="token punctuation">)</span> <span class="token comment">// div0 异常未被捕获，逐步往外传递，最终终止进程。</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">defer</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>c
b
a
panic: runtime error: integer divide by zero
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details>
<ul>
<li>延迟调用参数在注册时求值或复制，可用指针或闭包 &quot;延迟&quot; 读取。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>

    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"defer:"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token comment">// y 闭包引用</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// x 被复制</span>

    x <span class="token operator">+=</span> <span class="token number">10</span>
    y <span class="token operator">+=</span> <span class="token number">100</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"x ="</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> <span class="token string">"y ="</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    x = 20 y = 120
    defer: 10 120
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<ul>
<li>滥用 defer 可能会导致性能问题，尤其是在一个 &quot;大循环&quot; 里。</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"sync"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> lock sync<span class="token punctuation">.</span>Mutex

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testdefer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t1 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test elapsed: "</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t1 <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token function">testdefer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"testdefer elapsed: "</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    test elapsed:  223.162µs
    testdefer elapsed:  781.304µs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<h3 id="_1-9-defer陷阱" tabindex="-1"><a class="header-anchor" href="#_1-9-defer陷阱" aria-hidden="true">#</a> 1.9 defer陷阱</h3>
<h4 id="defer-与-closure" tabindex="-1"><a class="header-anchor" href="#defer-与-closure" aria-hidden="true">#</a> defer 与 closure</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"errors"</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"first defer err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"second defer err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"third defer err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"divided by zero!"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    i <span class="token operator">=</span> a <span class="token operator">/</span> b
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    third defer err divided by zero!
    second defer err &lt;nil>
    first defer err &lt;nil>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>解释：如果 defer 后面跟的不是一个 closure 最后执行的时候我们得到的并不是最新的值。</p>
</details>
<h4 id="defer-与-return" tabindex="-1"><a class="header-anchor" href="#defer-与-return" aria-hidden="true">#</a> defer 与 return</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>解释：在有具名返回值的函数中（这里具名返回值为 i），执行 return 2 的时候实际上已经将 i 的值重新赋值为 2。所以defer closure 输出结果为 2 而不是 1。</p>
</details>
<h4 id="defer-nil-函数" tabindex="-1"><a class="header-anchor" href="#defer-nil-函数" aria-hidden="true">#</a> defer nil 函数</h4>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> run <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">nil</span>
    <span class="token keyword">defer</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"runs"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>runs
runtime error: invalid memory address or nil pointer dereference
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解释：名为 test 的函数一直运行至结束，然后 defer 函数会被执行且会因为值为 nil 而产生 panic 异常。然而值得注意的是，run() 的声明是没有问题，因为在test函数运行完成后它才会被调用。</p>
</details>
<h4 id="在错误的位置使用-defer" tabindex="-1"><a class="header-anchor" href="#在错误的位置使用-defer" aria-hidden="true">#</a> 在错误的位置使用 defer</h4>
<p>当 http.Get 失败时会抛出异常。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"net/http"</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"http://www.google.com"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> res<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><details class="custom-container details"><summary>输出结果：</summary>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    panic: runtime error: invalid memory address or nil pointer dereference
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>因为在这里我们并没有检查我们的请求是否成功执行，当它失败的时候，我们访问了 Body 中的空变量 res ，因此会抛出异常</p>
<h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4>
<p>总是在一次成功的资源分配下面使用 defer ，对于这种情况来说意味着：当且仅当 http.Get 成功执行时才使用 defer</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"net/http"</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">"http://xxxxxxxxxx"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> res<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>在上述的代码中，当有错误的时候，err 会被返回，否则当整个函数返回的时候，会关闭 res.Body 。</p>
<p>解释：在这里，你同样需要检查 res 的值是否为 nil ，这是 http.Get 中的一个警告。通常情况下，出错的时候，返回的内容应为空并且错误会被返回，可当你获得的是一个重定向 error 时， res 的值并不会为 nil ，但其又会将错误返回。上面的代码保证了无论如何 Body 都会被关闭，如果你没有打算使用其中的数据，那么你还需要丢弃已经接收的数据。</p>
</details>
<h4 id="不检查错误" tabindex="-1"><a class="header-anchor" href="#不检查错误" aria-hidden="true">#</a> 不检查错误</h4>
<details class="custom-container details"><summary>查看详情</summary>
<p>在这里，f.Close() 可能会返回一个错误，可这个错误会被我们忽略掉</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"os"</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>改进一下</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"os"</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token comment">// log etc</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>再改进一下</p>
<p>通过命名的返回变量来返回 defer 内的错误。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"os"</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> ferr <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ferr <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                err <span class="token operator">=</span> ferr
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>释放相同的资源</p>
<p>如果你尝试使用相同的变量释放不同的资源，那么这个操作可能无法正常执行。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"defer close book.txt err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    f<span class="token punctuation">,</span> err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"another-book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"defer close another-book.txt err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>输出结果： defer close book.txt err close ./another-book.txt: file already closed</p>
<p>当延迟函数执行时，只有最后一个变量会被用到，因此，f 变量 会成为最后那个资源 (another-book.txt)。而且两个 defer 都会将这个资源作为最后的资源来关闭</p>
<p>解决方案：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"io"</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>f io<span class="token punctuation">.</span>Closer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"defer close book.txt err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ..code...</span>

    f<span class="token punctuation">,</span> err <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"another-book.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> f <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span>f io<span class="token punctuation">.</span>Closer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> err <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"defer close another-book.txt err %v\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">do</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div></details>
<h2 id="_2-方法" tabindex="-1"><a class="header-anchor" href="#_2-方法" aria-hidden="true">#</a> 2. 方法</h2>
<p>一个方法就是一个包含了接受者的函数，接受者可以是命名类型或者结构体类型的一个值或者是一个指针。</p>
<h3 id="_2-1-方法定义" tabindex="-1"><a class="header-anchor" href="#_2-1-方法定义" aria-hidden="true">#</a> 2.1. 方法定义</h3>
<p>Golang 方法总是绑定对象实例，并隐式将实例作为第一实参 (<code>receiver</code>)。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>recevier <span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token function">methodName</span><span class="token punctuation">(</span>参数列表<span class="token punctuation">)</span><span class="token punctuation">(</span>返回值列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 参数和返回值可以省略</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>• 只能为当前包内命名类型定义方法。</p>
<p>• 参数 <code>receiver</code> 可任意命名。如方法中未曾使用 ，可省略参数名。</p>
<p>• 参数 <code>receiver</code> 类型可以是<code>T</code>或<code> *T</code>。基类型<code>T</code>不能是接口或指针。</p>
<p>• 不支持方法重载，<code>receiver</code> 只是参数签名的组成部分。</p>
<p>• 可用实例 <code>value</code> 或 <code>pointer</code> 调用全部方法，编译器自动转换。</p>
</div>
<p>所有给定类型的方法属于该类型的方法集。</p>
<details class="custom-container details"><summary>方法的基础架构</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> Test <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 无参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method0</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 单参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method1</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 无参数、单返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多参数、多返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method4</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 无参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 单参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method6</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多参数、无返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method7</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 无参数、单返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method8</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// 多参数、多返回值</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method9</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div></details>
<p>下面定义一个结构体类型和该类型的一个方法：</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v : %v \n"</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 值类型调用方法</span>
    u1 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">"golang"</span><span class="token punctuation">,</span> <span class="token string">"golang@golang.com"</span><span class="token punctuation">}</span>
    u1<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 指针类型调用方法</span>
    u2 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">"go"</span><span class="token punctuation">,</span> <span class="token string">"go@go.com"</span><span class="token punctuation">}</span>
    u3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>u2
    u3<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    golang : golang@golang.com 
    go : go@go.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解释： 首先我们定义了一个叫做 User 的结构体类型，然后定义了一个该类型的方法叫做 Notify，该方法的接受者是一个 User 类型的值。要调用 Notify 方法我们需要一个 User 类型的值或者指针。</p>
<p>在这个例子中当我们使用指针时，Go 调整和解引用指针使得调用可以被执行。注意，当接受者不是一个指针时，该方法操作对应接受者的值的副本(意思就是即使你使用了指针调用函数，但是函数的接受者是值类型，所以函数内部操作还是对副本的操作，而不是指针操作。</p>
<p>我们修改 Notify 方法，让它的接受者使用指针类型：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%v : %v \n"</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 值类型调用方法</span>
    u1 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">"golang"</span><span class="token punctuation">,</span> <span class="token string">"golang@golang.com"</span><span class="token punctuation">}</span>
    u1<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 指针类型调用方法</span>
    u2 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">"go"</span><span class="token punctuation">,</span> <span class="token string">"go@go.com"</span><span class="token punctuation">}</span>
    u3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>u2
    u3<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    golang : golang@golang.com 
    go : go@go.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意：当接受者是指针时，即使用值类型调用那么函数内部也是对指针的操作。</p>
<p>方法不过是一种特殊的函数，只需将其还原，就知道 receiver T 和 <code>*T</code> 的差别。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Data <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self Data<span class="token punctuation">)</span> <span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// func ValueTest(self Data);</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Value: %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Data<span class="token punctuation">)</span> <span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// func PointerTest(self *Data);</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Pointer: %p\n"</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d <span class="token operator">:=</span> Data<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>d
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"Data: %p\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    d<span class="token punctuation">.</span><span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ValueTest(d)</span>
    d<span class="token punctuation">.</span><span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// PointerTest(&amp;d)</span>

    p<span class="token punctuation">.</span><span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ValueTest(*p)</span>
    p<span class="token punctuation">.</span><span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// PointerTest(p)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    Data: 0xc42007c008
    Value: 0xc42007c018
    Pointer: 0xc42007c008
    Value: 0xc42007c020
    Pointer: 0xc42007c008
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
<h2 id="_3-普通函数与方法的区别" tabindex="-1"><a class="header-anchor" href="#_3-普通函数与方法的区别" aria-hidden="true">#</a> 3. 普通函数与方法的区别</h2>
<p>1.对于普通函数，接收者为值类型时，不能将指针类型的数据直接传递，反之亦然。</p>
<p>2.对于方法（如struct的方法），接收者为值类型时，可以直接用指针类型的变量调用方法，反过来同样也可以。</p>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">//普通函数与方法的区别（在接收者分别为值类型和指针类型的时候）</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">//1.普通函数</span>
<span class="token comment">//接收值类型参数的函数</span>
<span class="token keyword">func</span> <span class="token function">valueIntTest</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token comment">//接收指针类型参数的函数</span>
<span class="token keyword">func</span> <span class="token function">pointerIntTest</span><span class="token punctuation">(</span>a <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span>a <span class="token operator">+</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">structTestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"valueIntTest:"</span><span class="token punctuation">,</span> <span class="token function">valueIntTest</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//函数的参数为值类型，则不能直接将指针作为参数传递</span>
    <span class="token comment">//fmt.Println("valueIntTest:", valueIntTest(&amp;a))</span>
    <span class="token comment">//compile error: cannot use &amp;a (type *int) as type int in function argument</span>

    b <span class="token operator">:=</span> <span class="token number">5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"pointerIntTest:"</span><span class="token punctuation">,</span> <span class="token function">pointerIntTest</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//同样，当函数的参数为指针类型时，也不能直接将值类型作为参数传递</span>
    <span class="token comment">//fmt.Println("pointerIntTest:", pointerIntTest(b))</span>
    <span class="token comment">//compile error:cannot use b (type int) as type *int in function argument</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.方法</span>
<span class="token keyword">type</span> PersonD <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//接收者为值类型</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p PersonD<span class="token punctuation">)</span> <span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//接收者为指针类型</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PersonD<span class="token punctuation">)</span> <span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">structTestFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//值类型调用方法</span>
    personValue <span class="token operator">:=</span> PersonD<span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">"hello world"</span><span class="token punctuation">}</span>
    personValue<span class="token punctuation">.</span><span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    personValue<span class="token punctuation">.</span><span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//指针类型调用方法</span>
    personPointer <span class="token operator">:=</span> <span class="token operator">&amp;</span>PersonD<span class="token punctuation">{</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">"hello golang"</span><span class="token punctuation">}</span>
    personPointer<span class="token punctuation">.</span><span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    personPointer<span class="token punctuation">.</span><span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//与普通函数不同，接收者为指针类型和值类型的方法，指针类型和值类型的变量均可相互调用</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">structTestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">structTestFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>valueIntTest: <span class="token number">12</span>
pointerIntTest: <span class="token number">15</span>
hello world
hello world
hello golang
hello golang
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<h2 id="_4-扩展" tabindex="-1"><a class="header-anchor" href="#_4-扩展" aria-hidden="true">#</a> 4. 扩展</h2>
<h3 id="_4-1-表达式" tabindex="-1"><a class="header-anchor" href="#_4-1-表达式" aria-hidden="true">#</a> 4.1. 表达式</h3>
<p>Golang 表达式 ：根据调用者不同，方法分为两种表现形式:</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    instance<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span>args<span class="token operator">...</span><span class="token punctuation">)</span> <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> <span class="token operator">&lt;</span><span class="token keyword">type</span><span class="token operator">></span><span class="token punctuation">.</span><span class="token keyword">func</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> args<span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>前者称为 method value，后者 method expression。</p>
<ol>
<li>两者都可像普通函数那样赋值和传参，区别在于 method value 绑定实例，而 method expression 则须显式传参。</li>
</ol>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p, %v\n"</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Tom"</span><span class="token punctuation">}</span>
    u<span class="token punctuation">.</span><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    mValue <span class="token operator">:=</span> u<span class="token punctuation">.</span>Test
    <span class="token function">mValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 隐式传递 receiver</span>

    mExpression <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>Test
    <span class="token function">mExpression</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span> <span class="token comment">// 显式传递 receiver</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出结果:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>    0xc42000a060, <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
    0xc42000a060, <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
    0xc42000a060, <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<ol start="2">
<li>需要注意，method value 会复制 receiver。</li>
</ol>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self User<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Tom"</span><span class="token punctuation">}</span>
    mValue <span class="token operator">:=</span> u<span class="token punctuation">.</span>Test <span class="token comment">// 立即复制 receiver，因为不是指针类型，不受后续修改影响。</span>

    u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"Jack"</span>
    u<span class="token punctuation">.</span><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">mValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>输出结果</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    {2 Jack}
    {1 Tom}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<ol start="3">
<li>在汇编层面，method value 和闭包的实现方式相同，实际返回 FuncVal 类型对象。</li>
</ol>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>FuncVal <span class="token punctuation">{</span> method_address<span class="token punctuation">,</span> receiver_copy <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>可依据方法集转换 method expression，注意 receiver 类型的差异。</li>
</ol>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"TestPointer: %p, %v\n"</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self User<span class="token punctuation">)</span> <span class="token function">TestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"TestValue: %p, %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Tom"</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"User: %p, %v\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> u<span class="token punctuation">)</span>

    mv <span class="token operator">:=</span> User<span class="token punctuation">.</span>TestValue
    <span class="token function">mv</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>

    mp <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>TestPointer
    <span class="token function">mp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span>

    mp2 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>TestValue <span class="token comment">// *User 方法集包含 TestValue。签名变为 func TestValue(self *User)。实际依然是 receiver value copy。</span>
    <span class="token function">mp2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>输出:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>User: 0xc42000a060, <span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
TestValue: 0xc42000a0a0, <span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
TestPointer: 0xc42000a060, <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
TestValue: 0xc42000a100, <span class="token punctuation">{</span><span class="token number">1</span> Tom<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>将方法 &quot;还原&quot; 成函数，就容易理解下面的代码了。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> Data <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>Data<span class="token punctuation">)</span> <span class="token function">TestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span> <span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">*</span>Data <span class="token operator">=</span> <span class="token boolean">nil</span>
    p<span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// method value</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>   <span class="token comment">// method expression</span>

    <span class="token comment">// p.TestValue()            // invalid memory address or nil pointer dereference</span>

    <span class="token comment">// (Data)(nil).TestValue()  // cannot convert nil to type Data</span>
    <span class="token comment">// Data.TestValue(nil)      // cannot use nil as type Data in function argument</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details>
<h3 id="_4-2-自定义error" tabindex="-1"><a class="header-anchor" href="#_4-2-自定义error" aria-hidden="true">#</a> 4.2 自定义error</h3>
<p>抛异常和处理异常</p>
<ul>
<li>系统抛</li>
</ul>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">// 系统抛</span>
<span class="token keyword">func</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
   a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
   <span class="token comment">//a[10] = 11</span>
   index <span class="token operator">:=</span> <span class="token number">10</span>
   a<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span>radius <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>area <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> radius <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      <span class="token comment">// 自己抛</span>
      <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">"半径不能为负"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token keyword">func</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 延时执行匿名函数</span>
   <span class="token comment">// 延时到何时？（1）程序正常结束   （2）发生异常时</span>
   <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// recover() 复活 恢复</span>
      <span class="token comment">// 会返回程序为什么挂了</span>
      <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"这里有没有执行"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
   <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"test04"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>半径不能为负
test04
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<ul>
<li>返回异常</li>
</ul>
<details class="custom-container details"><summary>查看示例代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"errors"</span>
	<span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span>radius <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>area <span class="token builtin">float32</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> radius <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token comment">// 构建个异常对象</span>
		err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"半径不能为负"</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	area <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	area<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"error=>"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">error</span><span class="token operator">=</span><span class="token operator">></span> 半径不能为负
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></details>
<ul>
<li>自定义error：</li>
</ul>
<p>:::查看示例代码</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"os"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> PathError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    path       <span class="token builtin">string</span>
    op         <span class="token builtin">string</span>
    createTime <span class="token builtin">string</span>
    message    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PathError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"path=%s \nop=%s \ncreateTime=%s \nmessage=%s"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
        p<span class="token punctuation">.</span>op<span class="token punctuation">,</span> p<span class="token punctuation">.</span>createTime<span class="token punctuation">,</span> p<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&amp;</span>PathError<span class="token punctuation">{</span>
            path<span class="token punctuation">:</span>       filename<span class="token punctuation">,</span>
            op<span class="token punctuation">:</span>         <span class="token string">"read"</span><span class="token punctuation">,</span>
            message<span class="token punctuation">:</span>    err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            createTime<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%v"</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    err <span class="token operator">:=</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"/Users/5lmh/Desktop/go/src/test.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> v <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>PathError<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"get path error,"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>输出结果：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>get path error, <span class="token assign-left variable">path</span><span class="token operator">=</span>/Users/pprof/Desktop/go/src/test.txt 
<span class="token assign-left variable">op</span><span class="token operator">=</span>read 
<span class="token assign-left variable">createTime</span><span class="token operator">=</span><span class="token number">2018</span>-04-05 <span class="token number">11</span>:25:17.331915 +0800 CST <span class="token assign-left variable">m</span><span class="token operator">=</span>+0.000441790 
<span class="token assign-left variable">message</span><span class="token operator">=</span>open /Users/pprof/Desktop/go/src/test.txt: no such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>:::</p>
</template>
