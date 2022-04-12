<template><nav class="table-of-contents"><ul><li><RouterLink to="#_1-接口">1. 接口</RouterLink><ul><li><RouterLink to="#_1-1-接口">1.1. 接口</RouterLink><ul><li><RouterLink to="#_1-1-1-接口类型">1.1.1. 接口类型</RouterLink></li><li><RouterLink to="#_1-1-2-为什么要使用接口">1.1.2. 为什么要使用接口</RouterLink></li><li><RouterLink to="#_1-1-3-接口的定义">1.1.3. 接口的定义</RouterLink></li><li><RouterLink to="#_1-1-4-实现接口的条件">1.1.4. 实现接口的条件</RouterLink></li><li><RouterLink to="#_1-1-5-接口类型变量">1.1.5. 接口类型变量</RouterLink></li><li><RouterLink to="#_1-1-6-值接收者和指针接收者实现接口的区别">1.1.6. 值接收者和指针接收者实现接口的区别</RouterLink></li><li><RouterLink to="#_1-1-7-值接收者实现接口">1.1.7. 值接收者实现接口</RouterLink></li><li><RouterLink to="#_1-1-8-指针接收者实现接口">1.1.8. 指针接收者实现接口</RouterLink></li><li><RouterLink to="#_1-1-9-下面的代码是一个比较好的面试题">1.1.9. 下面的代码是一个比较好的面试题</RouterLink></li></ul></li><li><RouterLink to="#_1-2-类型与接口的关系">1.2. 类型与接口的关系</RouterLink><ul><li><RouterLink to="#_1-2-1-一个类型实现多个接口">1.2.1. 一个类型实现多个接口</RouterLink></li><li><RouterLink to="#_1-2-2-多个类型实现同一接口">1.2.2. 多个类型实现同一接口</RouterLink></li><li><RouterLink to="#_1-2-3-接口嵌套">1.2.3. 接口嵌套</RouterLink></li></ul></li><li><RouterLink to="#_1-3-空接口">1.3. 空接口</RouterLink><ul><li><RouterLink to="#_1-3-1-空接口的定义">1.3.1. 空接口的定义</RouterLink></li><li><RouterLink to="#_1-3-2-空接口的应用">1.3.2. 空接口的应用</RouterLink><ul><li><RouterLink to="#空接口作为函数的参数">空接口作为函数的参数</RouterLink></li><li><RouterLink to="#空接口作为map的值">空接口作为map的值</RouterLink></li></ul></li><li><RouterLink to="#_1-3-3-类型断言">1.3.3. 类型断言</RouterLink><ul><li><RouterLink to="#接口值">接口值</RouterLink></li></ul></li></ul></li></ul></li></ul></nav>
<h1 id="_1-接口" tabindex="-1"><a class="header-anchor" href="#_1-接口" aria-hidden="true">#</a> 1. 接口</h1>
<p>接口（<code>interface</code>）定义了一个对象的行为规范，只定义规范不实现，由具体的对象来实现规范的细节。</p>
<h2 id="_1-1-接口" tabindex="-1"><a class="header-anchor" href="#_1-1-接口" aria-hidden="true">#</a> 1.1. 接口</h2>
<h3 id="_1-1-1-接口类型" tabindex="-1"><a class="header-anchor" href="#_1-1-1-接口类型" aria-hidden="true">#</a> 1.1.1. 接口类型</h3>
<p>在Go语言中接口（interface）是一种类型，一种抽象的类型。</p>
<p>interface是一组method的集合，是<code>duck-type programming</code>的一种体现。接口做的事情就像是定义一个协议（规则），只要一台机器有洗衣服和甩干的功能，我就称它为洗衣机。不关心属性（数据），只关心行为（方法）。</p>
<p>为了保护你的Go语言职业生涯，请牢记接口（interface）是一种类型。</p>
<h3 id="_1-1-2-为什么要使用接口" tabindex="-1"><a class="header-anchor" href="#_1-1-2-为什么要使用接口" aria-hidden="true">#</a> 1.1.2. 为什么要使用接口</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c Cat<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"喵喵喵"</span> <span class="token punctuation">}</span>

<span class="token keyword">type</span> Dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d Dog<span class="token punctuation">)</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"汪汪汪"</span> <span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> Cat<span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"猫:"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    d <span class="token operator">:=</span> Dog<span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"狗:"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span><span class="token function">Say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>上面的代码中定义了猫和狗，然后它们都会叫，你会发现main函数中明显有重复的代码，如果我们后续再加上猪、青蛙等动物的话，我们的代码还会一直重复下去。那我们能不能把它们当成“能叫的动物”来处理呢？</p>
<p>像类似的例子在我们编程过程中会经常遇到：</p>
<p>比如一个网上商城可能使用支付宝、微信、银联等方式去在线支付，我们能不能把它们当成“支付方式”来处理呢？</p>
<p>比如三角形，四边形，圆形都能计算周长和面积，我们能不能把它们当成“图形”来处理呢？</p>
<p>比如销售、行政、程序员都能计算月薪，我们能不能把他们当成“员工”来处理呢？</p>
<p>Go语言中为了解决类似上面的问题，就设计了接口这个概念。接口区别于我们之前所有的具体类型，接口是一种抽象的类型。当你看到一个接口类型的值时，你不知道它是什么，唯一知道的是通过它的方法能做什么。</p>
<h3 id="_1-1-3-接口的定义" tabindex="-1"><a class="header-anchor" href="#_1-1-3-接口的定义" aria-hidden="true">#</a> 1.1.3. 接口的定义</h3>
<p>Go语言提倡面向接口编程。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>
<p>接口是一个或多个方法签名的集合。</p>
<blockquote>
<ul>
<li>任何类型的方法集中，只要拥有该接口'对应的全部方法'签名，就表示它 &quot;实现&quot; 了该接口，无须在该类型上显式声明实现了哪个接口。这称为<code>Structural Typing</code>。</li>
<li>所谓对应方法，是指有相同名称、参数列表 (不包括参数名) 以及返回值。
当然，该类型还可以有其他方法。</li>
</ul>
</blockquote>
</li>
<li>
<p>接口只有方法声明，没有实现，没有数据字段。</p>
</li>
<li>
<p>接口可以匿名嵌入其他接口，或嵌入到结构中。</p>
</li>
<li>
<p>对象赋值给接口时，会发生拷贝，而接口内部存储的是指向这个复制品的指针，既无法修改复制品的状态，也无法获取指针。
只有当接口存储的类型和对象都为<code>nil</code>时，接口才等于<code>nil</code>。</p>
</li>
<li>
<p>接口调用不会做<code>receiver</code>的自动转换。</p>
</li>
<li>
<p>接口同样支持匿名字段方法。</p>
</li>
<li>
<p>接口也可实现类似OOP中的多态。</p>
</li>
<li>
<p>空接口可以作为任何类型数据的容器。</p>
</li>
<li>
<p>一个类型可实现多个接口。</p>
</li>
<li>
<p>接口命名习惯以 er 结尾。</p>
</li>
</ol>
</div>
<p>每个接口由数个方法组成，接口的定义格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> 接口类型名 <span class="token keyword">interface</span><span class="token punctuation">{</span>
方法名<span class="token function">1</span><span class="token punctuation">(</span> 参数列表<span class="token number">1</span> <span class="token punctuation">)</span> 返回值列表<span class="token number">1</span>
方法名<span class="token function">2</span><span class="token punctuation">(</span> 参数列表<span class="token number">2</span> <span class="token punctuation">)</span> 返回值列表<span class="token number">2</span>
…
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.接口名：使用type将接口定义为自定义的类型名。Go语言的接口在命名时，一般会在单词后面添加er，如有写操作的接口叫Writer，有字符串功能的接口叫Stringer等。接口名最好要能突出该接口的类型含义。
2.方法名：当方法名首字母是大写且这个接口类型名首字母也是大写时，这个方法可以被接口所在的包（package）之外的代码访问。
3.参数列表、返回值列表：参数列表和返回值列表中的参数变量名可以省略。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> writer <span class="token keyword">interface</span><span class="token punctuation">{</span>
    <span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当你看到这个接口类型的值时，你不知道它是什么，唯一知道的就是可以通过它的Write方法来做一些事情。</p>
<h3 id="_1-1-4-实现接口的条件" tabindex="-1"><a class="header-anchor" href="#_1-1-4-实现接口的条件" aria-hidden="true">#</a> 1.1.4. 实现接口的条件</h3>
<p>一个对象只要全部实现了接口中的方法，那么就实现了这个接口。换句话说，接口就是一个需要实现的方法列表。</p>
<p>我们来定义一个Sayer接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Sayer 接口</span>
<span class="token keyword">type</span> Sayer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>定义dog和cat两个结构体：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> dog <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>因为Sayer接口里只有一个say方法，所以我们只需要给dog和cat 分别实现say方法就可以实现Sayer接口了。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// dog实现了Sayer接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"汪汪汪"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// cat实现了Sayer接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"喵喵喵"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>接口的实现就是这么简单，只要实现了接口中的所有方法，就实现了这个接口。</p>
<h3 id="_1-1-5-接口类型变量" tabindex="-1"><a class="header-anchor" href="#_1-1-5-接口类型变量" aria-hidden="true">#</a> 1.1.5. 接口类型变量</h3>
<p>那实现了接口有什么用呢？</p>
<p>接口类型变量能够存储所有实现了该接口的实例。 例如上面的示例中，Sayer类型的变量能够存储dog和cat类型的变量。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x Sayer <span class="token comment">// 声明一个Sayer类型的变量x</span>
    a <span class="token operator">:=</span> cat<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 实例化一个cat</span>
    b <span class="token operator">:=</span> dog<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 实例化一个dog</span>
    x <span class="token operator">=</span> a       <span class="token comment">// 可以把cat实例直接赋值给x</span>
    x<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// 喵喵喵</span>
    x <span class="token operator">=</span> b       <span class="token comment">// 可以把dog实例直接赋值给x</span>
    x<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// 汪汪汪</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_1-1-6-值接收者和指针接收者实现接口的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-6-值接收者和指针接收者实现接口的区别" aria-hidden="true">#</a> 1.1.6. 值接收者和指针接收者实现接口的区别</h3>
<p>使用值接收者实现接口和使用指针接收者实现接口有什么区别呢？接下来我们通过一个例子看一下其中的区别。</p>
<p>我们有一个Mover接口和一个dog结构体。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-1-7-值接收者实现接口" tabindex="-1"><a class="header-anchor" href="#_1-1-7-值接收者实现接口" aria-hidden="true">#</a> 1.1.7. 值接收者实现接口</h3>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"狗会动"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> x Mover
	<span class="token keyword">var</span> wangcai <span class="token operator">=</span> dog<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 旺财是dog类型</span>
	x <span class="token operator">=</span> wangcai         <span class="token comment">// x可以接收dog类型</span>
	x<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> fugui <span class="token operator">=</span> <span class="token operator">&amp;</span>dog<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 富贵是*dog类型</span>
	x <span class="token operator">=</span> fugui          <span class="token comment">// x可以接收*dog类型</span>
	x<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>狗会动
狗会动
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>从上面的代码中我们可以发现，使用值接收者实现接口之后，不管是dog结构体还是结构体指针<code>*dog</code>类型的变量都可以赋值给该接口变量。因为Go语言中有对指针类型变量求值的语法糖，dog指针fugui内部会自动求值<code>*fugui</code>。</p>
</details>
<h3 id="_1-1-8-指针接收者实现接口" tabindex="-1"><a class="header-anchor" href="#_1-1-8-指针接收者实现接口" aria-hidden="true">#</a> 1.1.8. 指针接收者实现接口</h3>
<p>同样的代码我们再来测试一下使用指针接收者有什么区别：</p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>dog<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"狗会动"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> x Mover
	<span class="token keyword">var</span> wangcai <span class="token operator">=</span> dog<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 旺财是dog类型</span>
	x <span class="token operator">=</span> wangcai         <span class="token comment">// x不可以接收dog类型</span>
	<span class="token keyword">var</span> fugui <span class="token operator">=</span> <span class="token operator">&amp;</span>dog<span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 富贵是*dog类型</span>
	x <span class="token operator">=</span> fugui           <span class="token comment">// x可以接收*dog类型</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># command-line-arguments</span>
.<span class="token punctuation">\</span>指针接收者.go:17:4: cannot use wangcai <span class="token punctuation">(</span>type dog<span class="token punctuation">)</span> as <span class="token builtin class-name">type</span> Mover <span class="token keyword">in</span> assignment:
        dog does not implement Mover <span class="token punctuation">(</span>move method has pointer receiver<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>此时实现Mover接口的是<code>*dog</code>类型，所以不能给x传入dog类型的wangcai，此时x只能存储<code>*dog</code>类型的值。</p>
</details>
<h3 id="_1-1-9-下面的代码是一个比较好的面试题" tabindex="-1"><a class="header-anchor" href="#_1-1-9-下面的代码是一个比较好的面试题" aria-hidden="true">#</a> 1.1.9. 下面的代码是一个比较好的面试题</h3>
<p>请问下面的代码是否能通过编译？</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> People <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">Speak</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>stu <span class="token operator">*</span>Student<span class="token punctuation">)</span> <span class="token function">Speak</span><span class="token punctuation">(</span>think <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>talk <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> think <span class="token operator">==</span> <span class="token string">"sb"</span> <span class="token punctuation">{</span>
        talk <span class="token operator">=</span> <span class="token string">"你是个大帅比"</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        talk <span class="token operator">=</span> <span class="token string">"您好"</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> peo People <span class="token operator">=</span> Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
    think <span class="token operator">:=</span> <span class="token string">"bitch"</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>peo<span class="token punctuation">.</span><span class="token function">Speak</span><span class="token punctuation">(</span>think<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>答案</p>
<blockquote>
<p><img src="@source/language/go/pics/interface/image-20220413010604063.png" alt="image-20220413010604063"></p>
</blockquote>
</details>
<h2 id="_1-2-类型与接口的关系" tabindex="-1"><a class="header-anchor" href="#_1-2-类型与接口的关系" aria-hidden="true">#</a> 1.2. 类型与接口的关系</h2>
<h3 id="_1-2-1-一个类型实现多个接口" tabindex="-1"><a class="header-anchor" href="#_1-2-1-一个类型实现多个接口" aria-hidden="true">#</a> 1.2.1. 一个类型实现多个接口</h3>
<p>一个类型可以同时实现多个接口，而接口间彼此独立，不知道对方的实现。 例如，狗可以叫，也可以动。我们就分别定义Sayer接口和Mover接口，如下： Mover接口。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Sayer 接口</span>
<span class="token keyword">type</span> Sayer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Mover 接口</span>
<span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>dog既可以实现Sayer接口，也可以实现Mover接口。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现Sayer接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s会叫汪汪汪\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现Mover接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s会动\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x Sayer
    <span class="token keyword">var</span> y Mover

    <span class="token keyword">var</span> a <span class="token operator">=</span> dog<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"旺财"</span><span class="token punctuation">}</span>
    x <span class="token operator">=</span> a
    y <span class="token operator">=</span> a
    x<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    y<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_1-2-2-多个类型实现同一接口" tabindex="-1"><a class="header-anchor" href="#_1-2-2-多个类型实现同一接口" aria-hidden="true">#</a> 1.2.2. 多个类型实现同一接口</h3>
<p>Go语言中不同的类型还可以实现同一接口 首先我们定义一个Mover接口，它要求必须由一个move方法。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Mover 接口</span>
<span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例如狗可以动，汽车也可以动，可以使用如下代码实现这个关系：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> car <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    brand <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// dog类型实现Mover接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s会跑\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// car类型实现Mover接口</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c car<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s速度70迈\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>brand<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>这个时候我们在代码中就可以把狗和汽车当成一个会动的物体来处理了，不再需要关注它们具体是什么，只需要调用它们的move方法就可以了。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x Mover
    <span class="token keyword">var</span> a <span class="token operator">=</span> dog<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"旺财"</span><span class="token punctuation">}</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> car<span class="token punctuation">{</span>brand<span class="token punctuation">:</span> <span class="token string">"保时捷"</span><span class="token punctuation">}</span>
    x <span class="token operator">=</span> a
    x<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    x <span class="token operator">=</span> b
    x<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面的代码执行结果如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    旺财会跑
    保时捷速度70迈
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>并且一个接口的方法，不一定需要由一个类型完全实现，接口的方法可以通过在类型中嵌入其他类型或者结构体来实现。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// WashingMachine 洗衣机</span>
<span class="token keyword">type</span> WashingMachine <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">wash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">dry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 甩干器</span>
<span class="token keyword">type</span> dryer <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 实现WashingMachine接口的dry()方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>d dryer<span class="token punctuation">)</span> <span class="token function">dry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"甩一甩"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 海尔洗衣机</span>
<span class="token keyword">type</span> haier <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    dryer <span class="token comment">//嵌入甩干器</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现WashingMachine接口的wash()方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h haier<span class="token punctuation">)</span> <span class="token function">wash</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"洗刷刷"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_1-2-3-接口嵌套" tabindex="-1"><a class="header-anchor" href="#_1-2-3-接口嵌套" aria-hidden="true">#</a> 1.2.3. 接口嵌套</h3>
<p>接口与接口间可以通过嵌套创造出新的接口。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// Sayer 接口</span>
<span class="token keyword">type</span> Sayer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Mover 接口</span>
<span class="token keyword">type</span> Mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口嵌套</span>
<span class="token keyword">type</span> animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    Sayer
    Mover
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>嵌套得到的接口的使用与普通接口一样，这里我们让cat实现animal接口：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"喵喵喵"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"猫会动"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x animal
    x <span class="token operator">=</span> cat<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"花花"</span><span class="token punctuation">}</span>
    x<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    x<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_1-3-空接口" tabindex="-1"><a class="header-anchor" href="#_1-3-空接口" aria-hidden="true">#</a> 1.3. 空接口</h2>
<h3 id="_1-3-1-空接口的定义" tabindex="-1"><a class="header-anchor" href="#_1-3-1-空接口的定义" aria-hidden="true">#</a> 1.3.1. 空接口的定义</h3>
<p>空接口是指没有定义任何方法的接口。因此任何类型都实现了空接口。</p>
<p>空接口类型的变量可以存储任意类型的变量。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个空接口x</span>
    <span class="token keyword">var</span> x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    s <span class="token operator">:=</span> <span class="token string">"pprof.cn"</span>
    x <span class="token operator">=</span> s
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%v\n"</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    i <span class="token operator">:=</span> <span class="token number">100</span>
    x <span class="token operator">=</span> i
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%v\n"</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    b <span class="token operator">:=</span> <span class="token boolean">true</span>
    x <span class="token operator">=</span> b
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%v\n"</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_1-3-2-空接口的应用" tabindex="-1"><a class="header-anchor" href="#_1-3-2-空接口的应用" aria-hidden="true">#</a> 1.3.2. 空接口的应用</h3>
<h4 id="空接口作为函数的参数" tabindex="-1"><a class="header-anchor" href="#空接口作为函数的参数" aria-hidden="true">#</a> 空接口作为函数的参数</h4>
<p>使用空接口实现可以接收任意类型的函数参数。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 空接口作为函数参数</span>
<span class="token keyword">func</span> <span class="token function">show</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type:%T value:%v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="空接口作为map的值" tabindex="-1"><a class="header-anchor" href="#空接口作为map的值" aria-hidden="true">#</a> 空接口作为map的值</h4>
<p>使用空接口实现可以保存任意值的字典。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 空接口作为map值</span>
    <span class="token keyword">var</span> studentInfo <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    studentInfo<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"李白"</span>
    studentInfo<span class="token punctuation">[</span><span class="token string">"age"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span>
    studentInfo<span class="token punctuation">[</span><span class="token string">"married"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>studentInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-3-3-类型断言" tabindex="-1"><a class="header-anchor" href="#_1-3-3-类型断言" aria-hidden="true">#</a> 1.3.3. 类型断言</h3>
<p>空接口可以存储任意类型的值，那我们如何获取其存储的具体数据呢？</p>
<h4 id="接口值" tabindex="-1"><a class="header-anchor" href="#接口值" aria-hidden="true">#</a> 接口值</h4>
<p>一个接口的值（简称接口值）是由一个具体类型和具体类型的值两部分组成的。这两部分分别称为接口的动态类型和动态值。</p>
<p>我们来看一个具体的例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> w io<span class="token punctuation">.</span>Writer
w <span class="token operator">=</span> os<span class="token punctuation">.</span>Stdout
w <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span>
w <span class="token operator">=</span> <span class="token boolean">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>请看下图分解：</p>
<p><img src="@source/language/go/pics/interface/1.png" alt="分解"></p>
<p>想要判断空接口中的值这个时候就可以使用类型断言，其语法格式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    x.(T)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    x：表示类型为interface{}的变量
    T：表示断言x可能是的类型。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>该语法返回两个参数，第一个参数是x转化为T类型后的变量，第二个值是一个布尔值，若为true则表示断言成功，为false则表示断言失败。</p>
<p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    x <span class="token operator">=</span> <span class="token string">"pprof.cn"</span>
    v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"类型断言失败"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面的示例中如果要断言多次就需要写多个if判断，这个时候我们可以使用switch语句来实现：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">justifyType</span><span class="token punctuation">(</span>x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> v <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x is a string，value is %v\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x is a int is %v\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x is a bool is %v\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"unsupport type！"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>因为空接口可以存储任意类型值的特点，所以空接口在Go语言中的使用十分广泛。</p>
<p>关于接口需要注意的是，只有当有两个或两个以上的具体类型必须以相同的方式进行处理时才需要定义接口。不要为了接口而写接口，那样只会增加不必要的抽象，导致不必要的运行时损耗。</p>
</template>
