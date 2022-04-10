<template><nav class="table-of-contents"><ul><li><RouterLink to="#_1-结构体">1. 结构体</RouterLink><ul><li><RouterLink to="#_1-1-类型别名和自定义类型">1.1. 类型别名和自定义类型</RouterLink><ul><li><RouterLink to="#_1-1-1-自定义类型">1.1.1. 自定义类型</RouterLink></li><li><RouterLink to="#_1-1-2-类型别名">1.1.2. 类型别名</RouterLink></li><li><RouterLink to="#_1-1-3-类型定义和类型别名的区别">1.1.3. 类型定义和类型别名的区别</RouterLink></li></ul></li><li><RouterLink to="#_1-2-结构体">1.2. 结构体</RouterLink><ul><li><RouterLink to="#_1-2-1-结构体的定义">1.2.1. 结构体的定义</RouterLink></li><li><RouterLink to="#_1-2-2-结构体实例化">1.2.2. 结构体实例化</RouterLink></li><li><RouterLink to="#_1-2-3-基本实例化">1.2.3. 基本实例化</RouterLink></li></ul></li><li><RouterLink to="#_1-3-匿名结构体">1.3. 匿名结构体</RouterLink><ul><li><RouterLink to="#_1-3-1-创建指针类型结构体">1.3.1. 创建指针类型结构体</RouterLink></li><li><RouterLink to="#_1-3-2-取结构体的地址实例化">1.3.2. 取结构体的地址实例化</RouterLink></li><li><RouterLink to="#_1-3-3-结构体初始化">1.3.3. 结构体初始化</RouterLink></li><li><RouterLink to="#_1-3-4-使用键值对初始化">1.3.4. 使用键值对初始化</RouterLink></li><li><RouterLink to="#_1-3-5-使用值的列表初始化">1.3.5. 使用值的列表初始化</RouterLink></li><li><RouterLink to="#_1-3-6-结构体内存布局">1.3.6. 结构体内存布局</RouterLink></li><li><RouterLink to="#_1-3-7-面试题">1.3.7. 面试题</RouterLink></li><li><RouterLink to="#_1-3-8-构造函数">1.3.8. 构造函数</RouterLink></li><li><RouterLink to="#_1-3-9-方法和接收者">1.3.9. 方法和接收者</RouterLink></li><li><RouterLink to="#_1-3-10-指针类型的接收者">1.3.10. 指针类型的接收者</RouterLink></li><li><RouterLink to="#_1-3-11-值类型的接收者">1.3.11. 值类型的接收者</RouterLink></li><li><RouterLink to="#_1-3-12-什么时候应该使用指针类型接收者">1.3.12. 什么时候应该使用指针类型接收者</RouterLink></li><li><RouterLink to="#_1-3-13-任意类型添加方法">1.3.13. 任意类型添加方法</RouterLink></li><li><RouterLink to="#_1-3-14-结构体的匿名字段">1.3.14. 结构体的匿名字段</RouterLink></li><li><RouterLink to="#_1-3-15-嵌套结构体">1.3.15. 嵌套结构体</RouterLink></li><li><RouterLink to="#_1-3-16-嵌套匿名结构体">1.3.16. 嵌套匿名结构体</RouterLink></li><li><RouterLink to="#_1-3-17-嵌套结构体的字段名冲突">1.3.17. 嵌套结构体的字段名冲突</RouterLink></li><li><RouterLink to="#_1-3-18-结构体的-继承">1.3.18. 结构体的“继承”</RouterLink></li><li><RouterLink to="#_1-3-19-结构体字段的可见性">1.3.19. 结构体字段的可见性</RouterLink></li><li><RouterLink to="#_1-3-20-结构体与json序列化">1.3.20. 结构体与JSON序列化</RouterLink></li><li><RouterLink to="#_1-3-21-结构体标签-tag">1.3.21. 结构体标签（Tag）</RouterLink></li><li><RouterLink to="#_1-3-22-小练习">1.3.22. 小练习：</RouterLink></li><li><RouterLink to="#_1-3-23-删除map类型的结构体">1.3.23. 删除map类型的结构体</RouterLink></li><li><RouterLink to="#_1-3-24-实现map有序输出">1.3.24. 实现map有序输出</RouterLink></li></ul></li></ul></li></ul></nav>
<h1 id="_1-结构体" tabindex="-1"><a class="header-anchor" href="#_1-结构体" aria-hidden="true">#</a> 1. 结构体</h1>
<p>Go语言中没有“类”的概念，也不支持“类”的继承等面向对象的概念。Go语言中通过结构体的内嵌再配合接口比面向对象具有更高的扩展性和灵活性。</p>
<h2 id="_1-1-类型别名和自定义类型" tabindex="-1"><a class="header-anchor" href="#_1-1-类型别名和自定义类型" aria-hidden="true">#</a> 1.1. 类型别名和自定义类型</h2>
<h3 id="_1-1-1-自定义类型" tabindex="-1"><a class="header-anchor" href="#_1-1-1-自定义类型" aria-hidden="true">#</a> 1.1.1. 自定义类型</h3>
<p>在Go语言中有一些基本的数据类型，如string、整型、浮点型、布尔等数据类型，Go语言中可以使用type关键字来定义自定义类型。</p>
<p>自定义类型是定义了一个全新的类型。我们可以基于内置的基本类型定义，也可以通过struct定义。例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token comment">//将MyInt定义为int类型</span>
    <span class="token keyword">type</span> MyInt <span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>通过Type关键字的定义，MyInt就是一种新的类型，它具有int的特性。</p>
<h3 id="_1-1-2-类型别名" tabindex="-1"><a class="header-anchor" href="#_1-1-2-类型别名" aria-hidden="true">#</a> 1.1.2. 类型别名</h3>
<p>类型别名是Go1.9版本添加的新功能。</p>
<p>类型别名规定：TypeAlias只是Type的别名，本质上TypeAlias与Type是同一个类型。就像一个孩子小时候有小名、乳名，上学后用学名，英语老师又会给他起英文名，但这些名字都指的是他本人。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">type</span> TypeAlias <span class="token operator">=</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们之前见过的rune和byte就是类型别名，他们的定义如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">type</span> <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token builtin">uint8</span>
    <span class="token keyword">type</span> <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token builtin">int32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-1-3-类型定义和类型别名的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-3-类型定义和类型别名的区别" aria-hidden="true">#</a> 1.1.3. 类型定义和类型别名的区别</h3>
<p>类型别名与类型定义表面上看只有一个等号的差异，我们通过下面的这段代码来理解它们之间的区别。</p>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//类型定义</span>
<span class="token keyword">type</span> NewInt <span class="token builtin">int</span>

<span class="token comment">//类型别名</span>
<span class="token keyword">type</span> MyInt <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a NewInt
    <span class="token keyword">var</span> b MyInt

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of a:%T\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//type of a:main.NewInt</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of b:%T\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">//type of b:int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> of a<span class="token punctuation">:</span>main<span class="token punctuation">.</span>NewInt
<span class="token keyword">type</span> of b<span class="token punctuation">:</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></details>
<p>结果显示a的类型是<code>main.NewInt</code>，表示main包下定义的NewInt类型。b的类型是int。MyInt类型只会在代码中存在，编译完成时并不会有MyInt类型。</p>
<h2 id="_1-2-结构体" tabindex="-1"><a class="header-anchor" href="#_1-2-结构体" aria-hidden="true">#</a> 1.2. 结构体</h2>
<p>Go语言中的基础数据类型可以表示一些事物的基本属性，但是当我们想表达一个事物的全部或部分属性时，这时候再用单一的基本数据类型明显就无法满足需求了，Go语言提供了一种自定义数据类型，可以封装多个基本数据类型，这种数据类型叫结构体，英文名称struct。 也就是我们可以通过struct来定义自己的类型了。</p>
<p>Go语言中通过struct来实现面向对象。</p>
<h3 id="_1-2-1-结构体的定义" tabindex="-1"><a class="header-anchor" href="#_1-2-1-结构体的定义" aria-hidden="true">#</a> 1.2.1. 结构体的定义</h3>
<p>使用type和struct关键字来定义结构体，具体代码格式如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">type</span> 类型名 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        字段名 字段类型
        字段名 字段类型
        …
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.类型名：标识自定义结构体的名称，在同一个包内不能重复。
    2.字段名：表示结构体字段名。结构体中的字段名必须唯一。
    3.字段类型：表示结构体字段的具体类型。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>举个例子，我们定义一个Person（人）结构体，代码如下：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        city <span class="token builtin">string</span>
        age  <span class="token builtin">int8</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>同样类型的字段也可以写在一行，</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">type</span> person1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span> city <span class="token builtin">string</span>
        age        <span class="token builtin">int8</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样我们就拥有了一个person的自定义类型，它有name、city、age三个字段，分别表示姓名、城市和年龄。这样我们使用这个person结构体就能够很方便的在程序中表示和存储人信息了。</p>
<p>语言内置的基础数据类型是用来描述一个值的，而结构体是用来描述一组值的。比如一个人有名字、年龄和居住城市等，本质上是一种聚合型的数据类型</p>
<h3 id="_1-2-2-结构体实例化" tabindex="-1"><a class="header-anchor" href="#_1-2-2-结构体实例化" aria-hidden="true">#</a> 1.2.2. 结构体实例化</h3>
<p>只有当结构体实例化时，才会真正地分配内存。也就是必须实例化后才能使用结构体的字段。</p>
<p>结构体本身也是一种类型，我们可以像声明内置类型一样使用var关键字声明结构体类型。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>    <span class="token keyword">var</span> 结构体实例 结构体类型
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-3-基本实例化" tabindex="-1"><a class="header-anchor" href="#_1-2-3-基本实例化" aria-hidden="true">#</a> 1.2.3. 基本实例化</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    city <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p1 person
    p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"pprof.cn"</span>
    p1<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">"北京"</span>
    p1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p1=%v\n"</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>  <span class="token comment">//p1={pprof.cn 北京 18}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p1=%#v\n"</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span> <span class="token comment">//p1=main.person{name:"pprof.cn", city:"北京", age:18}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>我们通过.来访问结构体的字段（成员变量）,例如p1.name和p1.age等。</p>
<h2 id="_1-3-匿名结构体" tabindex="-1"><a class="header-anchor" href="#_1-3-匿名结构体" aria-hidden="true">#</a> 1.3. 匿名结构体</h2>
<p>在定义一些临时数据结构等场景下还可以使用匿名结构体。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user <span class="token keyword">struct</span><span class="token punctuation">{</span>Name <span class="token builtin">string</span><span class="token punctuation">;</span> Age <span class="token builtin">int</span><span class="token punctuation">}</span>
    user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"pprof.cn"</span>
    user<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_1-3-1-创建指针类型结构体" tabindex="-1"><a class="header-anchor" href="#_1-3-1-创建指针类型结构体" aria-hidden="true">#</a> 1.3.1. 创建指针类型结构体</h3>
<p>我们还可以通过使用new关键字对结构体进行实例化，得到的是结构体的地址。 格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    var p2 = new(person)
    fmt.Printf("%T\n", p2)     //*main.person
    fmt.Printf("p2=%#v\n", p2) //p2=&amp;main.person{name:"", city:"", age:0}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>从打印的结果中我们可以看出p2是一个结构体指针。</p>
<p>需要注意的是在Go语言中支持对结构体指针直接使用<code>.</code>来访问结构体的成员。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
p2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"测试"</span>
p2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
p2<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">"北京"</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p2=%#v\n"</span><span class="token punctuation">,</span> p2<span class="token punctuation">)</span> <span class="token comment">//p2=&amp;main.person{name:"测试", city:"北京", age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_1-3-2-取结构体的地址实例化" tabindex="-1"><a class="header-anchor" href="#_1-3-2-取结构体的地址实例化" aria-hidden="true">#</a> 1.3.2. 取结构体的地址实例化</h3>
<p>使用&amp;对结构体进行取地址操作相当于对该结构体类型进行了一次new实例化操作。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T\n"</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span>     <span class="token comment">//*main.person</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p3=%#v\n"</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">//p3=&amp;main.person{name:"", city:"", age:0}</span>
p3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"博客"</span>
p3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
p3<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">"成都"</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p3=%#v\n"</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">//p3=&amp;main.person{name:"博客", city:"成都", age:30}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>p3.name = &quot;博客&quot;其实在底层是(*p3).name = &quot;博客&quot;，这是Go语言帮我们实现的语法糖。</p>
<h3 id="_1-3-3-结构体初始化" tabindex="-1"><a class="header-anchor" href="#_1-3-3-结构体初始化" aria-hidden="true">#</a> 1.3.3. 结构体初始化</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    city <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p4 person
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p4=%#v\n"</span><span class="token punctuation">,</span> p4<span class="token punctuation">)</span> <span class="token comment">//p4=main.person{name:"", city:"", age:0}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_1-3-4-使用键值对初始化" tabindex="-1"><a class="header-anchor" href="#_1-3-4-使用键值对初始化" aria-hidden="true">#</a> 1.3.4. 使用键值对初始化</h3>
<p>使用键值对对结构体进行初始化时，键对应结构体的字段，值对应该字段的初始值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p5 <span class="token operator">:=</span> person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">"北京"</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p5=%#v\n"</span><span class="token punctuation">,</span> p5<span class="token punctuation">)</span> <span class="token comment">//p5=main.person{name:"pprof.cn", city:"北京", age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>也可以对结构体指针进行键值对初始化，例如：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p6 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">"北京"</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p6=%#v\n"</span><span class="token punctuation">,</span> p6<span class="token punctuation">)</span> <span class="token comment">//p6=&amp;main.person{name:"pprof.cn", city:"北京", age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当某些字段没有初始值的时候，该字段可以不写。此时，没有指定初始值的字段的值就是该字段类型的零值。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p7 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    city<span class="token punctuation">:</span> <span class="token string">"北京"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p7=%#v\n"</span><span class="token punctuation">,</span> p7<span class="token punctuation">)</span> <span class="token comment">//p7=&amp;main.person{name:"", city:"北京", age:0}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-3-5-使用值的列表初始化" tabindex="-1"><a class="header-anchor" href="#_1-3-5-使用值的列表初始化" aria-hidden="true">#</a> 1.3.5. 使用值的列表初始化</h3>
<p>初始化结构体的时候可以简写，也就是初始化的时候不写键，直接写值：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p8 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
    <span class="token string">"北京"</span><span class="token punctuation">,</span>
    <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"p8=%#v\n"</span><span class="token punctuation">,</span> p8<span class="token punctuation">)</span> <span class="token comment">//p8=&amp;main.person{name:"pprof.cn", city:"北京", age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用这种格式初始化时，需要注意：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.必须初始化结构体的所有字段。
    2.初始值的填充顺序必须与字段在结构体中的声明顺序一致。
    3.该方式不能和键值初始化方式混用。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-3-6-结构体内存布局" tabindex="-1"><a class="header-anchor" href="#_1-3-6-结构体内存布局" aria-hidden="true">#</a> 1.3.6. 结构体内存布局</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a <span class="token builtin">int8</span>
    b <span class="token builtin">int8</span>
    c <span class="token builtin">int8</span>
    d <span class="token builtin">int8</span>
<span class="token punctuation">}</span>
n <span class="token operator">:=</span> test<span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n.a %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n.b %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n.c %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"n.d %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    n.a 0xc0000a0060
    n.b 0xc0000a0061
    n.c 0xc0000a0062
    n.d 0xc0000a0063
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-3-7-面试题" tabindex="-1"><a class="header-anchor" href="#_1-3-7-面试题" aria-hidden="true">#</a> 1.3.7. 面试题</h3>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>student<span class="token punctuation">)</span>
    stus <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">"博客"</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> stu <span class="token operator">:=</span> <span class="token keyword">range</span> stus <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>stu
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">"=>"</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>输出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pprof.cn => 博客
测试 => 博客
博客 => 博客
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details>
<h3 id="_1-3-8-构造函数" tabindex="-1"><a class="header-anchor" href="#_1-3-8-构造函数" aria-hidden="true">#</a> 1.3.8. 构造函数</h3>
<p>Go语言的结构体没有构造函数，我们可以自己实现。 例如，下方的代码就实现了一个person的构造函数。 因为struct是值类型，如果结构体比较复杂的话，值拷贝性能开销会比较大，所以该构造函数返回的是结构体指针类型。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">newPerson</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> city <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
        city<span class="token punctuation">:</span> city<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>调用构造函数</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>p9 <span class="token operator">:=</span> <span class="token function">newPerson</span><span class="token punctuation">(</span><span class="token string">"pprof.cn"</span><span class="token punctuation">,</span> <span class="token string">"测试"</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> p9<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-3-9-方法和接收者" tabindex="-1"><a class="header-anchor" href="#_1-3-9-方法和接收者" aria-hidden="true">#</a> 1.3.9. 方法和接收者</h3>
<p>Go语言中的方法（Method）是一种作用于特定类型变量的函数。这种特定类型变量叫做接收者（Receiver）。接收者的概念就类似于其他语言中的this或者 self。</p>
<p>方法的定义格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    func (接收者变量 接收者类型) 方法名(参数列表) (返回参数) {
        函数体
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>其中，</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.接收者变量：接收者中的参数变量名在命名时，官方建议使用接收者类型名的第一个小写字母，而不是self、this之类的命名。例如，Person类型的接收者变量应该命名为 p，Connector类型的接收者变量应该命名为c等。
    2.接收者类型：接收者类型和参数类似，可以是指针类型和非指针类型。
    3.方法名、参数列表、返回参数：具体格式与函数定义相同。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>举个例子：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Person 结构体</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewPerson 构造函数</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Dream Person做梦的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s的梦想是学好Go语言！\n"</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">"测试"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>方法与函数的区别是，函数不属于任何类型，方法属于特定的类型。</p>
<h3 id="_1-3-10-指针类型的接收者" tabindex="-1"><a class="header-anchor" href="#_1-3-10-指针类型的接收者" aria-hidden="true">#</a> 1.3.10. 指针类型的接收者</h3>
<p>指针类型的接收者由一个结构体的指针组成，由于指针的特性，调用方法时修改接收者指针的任意成员变量，在方法结束后，修改都是有效的。这种方式就十分接近于其他语言中面向对象中的this或者self。 例如我们为Person添加一个SetAge方法，来修改实例变量的年龄。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    // SetAge 设置p的年龄
    // 使用指针接收者
    func (p *Person) SetAge(newAge int8) {
        p.age = newAge
    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>调用该方法：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">"测试"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
    p1<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_1-3-11-值类型的接收者" tabindex="-1"><a class="header-anchor" href="#_1-3-11-值类型的接收者" aria-hidden="true">#</a> 1.3.11. 值类型的接收者</h3>
<p>当方法作用于值类型接收者时，Go语言会在代码运行时将接收者的值复制一份。在值类型接收者的方法中可以获取接收者的成员值，但修改操作只是针对副本，无法修改接收者变量本身。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// SetAge2 设置p的年龄</span>
<span class="token comment">// 使用值接收者</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">SetAge2</span><span class="token punctuation">(</span>newAge <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> newAge
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">"测试"</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
    p1<span class="token punctuation">.</span><span class="token function">SetAge2</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// (*p1).SetAge2(30)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_1-3-12-什么时候应该使用指针类型接收者" tabindex="-1"><a class="header-anchor" href="#_1-3-12-什么时候应该使用指针类型接收者" aria-hidden="true">#</a> 1.3.12. 什么时候应该使用指针类型接收者</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1.需要修改接收者中的值
    2.接收者是拷贝代价比较大的大对象
    3.保证一致性，如果有某个方法使用了指针接收者，那么其他的方法也应该使用指针接收者。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-3-13-任意类型添加方法" tabindex="-1"><a class="header-anchor" href="#_1-3-13-任意类型添加方法" aria-hidden="true">#</a> 1.3.13. 任意类型添加方法</h3>
<p>在Go语言中，接收者的类型可以是任何类型，不仅仅是结构体，任何类型都可以拥有方法。 举个例子，我们基于内置的int类型使用type关键字可以定义新的自定义类型，然后为我们的自定义类型添加方法。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//MyInt 将int定义为自定义MyInt类型</span>
<span class="token keyword">type</span> MyInt <span class="token builtin">int</span>

<span class="token comment">//SayHello 为MyInt添加一个SayHello的方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m MyInt<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello, 我是一个int。"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> m1 MyInt
    m1<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Hello, 我是一个int。</span>
    m1 <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v  %T\n"</span><span class="token punctuation">,</span> m1<span class="token punctuation">,</span> m1<span class="token punctuation">)</span> <span class="token comment">//100  main.MyInt</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>注意事项： 非本地类型不能定义方法，也就是说我们不能给别的包的类型定义方法。</p>
<h3 id="_1-3-14-结构体的匿名字段" tabindex="-1"><a class="header-anchor" href="#_1-3-14-结构体的匿名字段" aria-hidden="true">#</a> 1.3.14. 结构体的匿名字段</h3>
<p>结构体允许其成员字段在声明时没有字段名而只有类型，这种没有名字的字段就称为匿名字段。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Person 结构体Person类型</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>        <span class="token comment">//main.Person{string:"pprof.cn", int:18}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token builtin">string</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment">//pprof.cn 18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>匿名字段默认采用类型名作为字段名，结构体要求字段名称必须唯一，因此一个结构体中同种类型的匿名字段只能有一个。</p>
<h3 id="_1-3-15-嵌套结构体" tabindex="-1"><a class="header-anchor" href="#_1-3-15-嵌套结构体" aria-hidden="true">#</a> 1.3.15. 嵌套结构体</h3>
<p>一个结构体中可以嵌套包含另一个结构体或结构体指针。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Address 地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province <span class="token builtin">string</span>
    City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span>
    Gender  <span class="token builtin">string</span>
    Address Address
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    user1 <span class="token operator">:=</span> User<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">"pprof"</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span>
        Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span>
            Province<span class="token punctuation">:</span> <span class="token string">"黑龙江"</span><span class="token punctuation">,</span>
            City<span class="token punctuation">:</span>     <span class="token string">"哈尔滨"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"user1=%#v\n"</span><span class="token punctuation">,</span> user1<span class="token punctuation">)</span><span class="token comment">//user1=main.User{Name:"pprof", Gender:"女", Address:main.Address{Province:"黑龙江", City:"哈尔滨"}}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_1-3-16-嵌套匿名结构体" tabindex="-1"><a class="header-anchor" href="#_1-3-16-嵌套匿名结构体" aria-hidden="true">#</a> 1.3.16. 嵌套匿名结构体</h3>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Address 地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province <span class="token builtin">string</span>
    City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span>
    Gender  <span class="token builtin">string</span>
    Address <span class="token comment">//匿名结构体</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user2 User
    user2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"pprof"</span>
    user2<span class="token punctuation">.</span>Gender <span class="token operator">=</span> <span class="token string">"女"</span>
    user2<span class="token punctuation">.</span>Address<span class="token punctuation">.</span>Province <span class="token operator">=</span> <span class="token string">"黑龙江"</span>    <span class="token comment">//通过匿名结构体.字段名访问</span>
    user2<span class="token punctuation">.</span>City <span class="token operator">=</span> <span class="token string">"哈尔滨"</span>                <span class="token comment">//直接访问匿名结构体的字段名</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"user2=%#v\n"</span><span class="token punctuation">,</span> user2<span class="token punctuation">)</span> <span class="token comment">//user2=main.User{Name:"pprof", Gender:"女", Address:main.Address{Province:"黑龙江", City:"哈尔滨"}}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>当访问结构体成员时会先在结构体中查找该字段，找不到再去匿名结构体中查找。</p>
<h3 id="_1-3-17-嵌套结构体的字段名冲突" tabindex="-1"><a class="header-anchor" href="#_1-3-17-嵌套结构体的字段名冲突" aria-hidden="true">#</a> 1.3.17. 嵌套结构体的字段名冲突</h3>
<p>嵌套结构体内部可能存在相同的字段名。这个时候为了避免歧义需要指定具体的内嵌结构体的字段。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Address 地址结构体</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province   <span class="token builtin">string</span>
    City       <span class="token builtin">string</span>
    CreateTime <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Email 邮箱结构体</span>
<span class="token keyword">type</span> Email <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Account    <span class="token builtin">string</span>
    CreateTime <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User 用户结构体</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Gender <span class="token builtin">string</span>
    Address
    Email
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user3 User
    user3<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"pprof"</span>
    user3<span class="token punctuation">.</span>Gender <span class="token operator">=</span> <span class="token string">"女"</span>
    <span class="token comment">// user3.CreateTime = "2019" //ambiguous selector user3.CreateTime</span>
    user3<span class="token punctuation">.</span>Address<span class="token punctuation">.</span>CreateTime <span class="token operator">=</span> <span class="token string">"2000"</span> <span class="token comment">//指定Address结构体中的CreateTime</span>
    user3<span class="token punctuation">.</span>Email<span class="token punctuation">.</span>CreateTime <span class="token operator">=</span> <span class="token string">"2000"</span>   <span class="token comment">//指定Email结构体中的CreateTime</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_1-3-18-结构体的-继承" tabindex="-1"><a class="header-anchor" href="#_1-3-18-结构体的-继承" aria-hidden="true">#</a> 1.3.18. 结构体的“继承”</h3>
<p>Go语言中使用结构体也可以实现其他编程语言中面向对象的继承。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Animal 动物</span>
<span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Animal<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s会动！\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Dog 狗</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Feet    <span class="token builtin">int8</span>
    <span class="token operator">*</span>Animal <span class="token comment">//通过嵌套匿名结构体实现继承</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%s会汪汪汪~\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
        Feet<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        Animal<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Animal<span class="token punctuation">{</span> <span class="token comment">//注意嵌套的是结构体指针</span>
            name<span class="token punctuation">:</span> <span class="token string">"乐乐"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    d1<span class="token punctuation">.</span><span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//乐乐会汪汪汪~</span>
    d1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//乐乐会动！</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_1-3-19-结构体字段的可见性" tabindex="-1"><a class="header-anchor" href="#_1-3-19-结构体字段的可见性" aria-hidden="true">#</a> 1.3.19. 结构体字段的可见性</h3>
<p>结构体中字段大写开头表示可公开访问，小写表示私有（仅在定义当前结构体的包中可访问）。</p>
<h3 id="_1-3-20-结构体与json序列化" tabindex="-1"><a class="header-anchor" href="#_1-3-20-结构体与json序列化" aria-hidden="true">#</a> 1.3.20. 结构体与JSON序列化</h3>
<p>JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。JSON键值对是用来保存JS对象的一种方式，键/值对组合中的键名写在前面并用双引号&quot;&quot;包裹，使用冒号:分隔，然后紧接着值；多个键值之间使用英文,分隔。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Student 学生</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID     <span class="token builtin">int</span>
    Gender <span class="token builtin">string</span>
    Name   <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Class 班级</span>
<span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Title    <span class="token builtin">string</span>
    Students <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Student
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span>
        Title<span class="token punctuation">:</span>    <span class="token string">"101"</span><span class="token punctuation">,</span>
        Students<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Student<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        stu <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>
            Name<span class="token punctuation">:</span>   fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"stu%02d"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
            Gender<span class="token punctuation">:</span> <span class="token string">"男"</span><span class="token punctuation">,</span>
            ID<span class="token punctuation">:</span>     i<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        c<span class="token punctuation">.</span>Students <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Students<span class="token punctuation">,</span> stu<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//JSON序列化：结构体-->JSON格式的字符串</span>
    data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json marshal failed"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"json:%s\n"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment">//JSON反序列化：JSON格式的字符串-->结构体</span>
    str <span class="token operator">:=</span> <span class="token string">`{"Title":"101","Students":[{"ID":0,"Gender":"男","Name":"stu00"},{"ID":1,"Gender":"男","Name":"stu01"},{"ID":2,"Gender":"男","Name":"stu02"},{"ID":3,"Gender":"男","Name":"stu03"},{"ID":4,"Gender":"男","Name":"stu04"},{"ID":5,"Gender":"男","Name":"stu05"},{"ID":6,"Gender":"男","Name":"stu06"},{"ID":7,"Gender":"男","Name":"stu07"},{"ID":8,"Gender":"男","Name":"stu08"},{"ID":9,"Gender":"男","Name":"stu09"}]}`</span>
    c1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span><span class="token punctuation">}</span>
    err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> c1<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json unmarshal failed!"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%#v\n"</span><span class="token punctuation">,</span> c1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_1-3-21-结构体标签-tag" tabindex="-1"><a class="header-anchor" href="#_1-3-21-结构体标签-tag" aria-hidden="true">#</a> 1.3.21. 结构体标签（Tag）</h3>
<p>Tag是结构体的元信息，可以在运行的时候通过反射的机制读取出来。</p>
<p>Tag在结构体字段的后方定义，由一对反引号包裹起来，具体的格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    `key1:"value1" key2:"value2"`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>结构体标签由一个或多个键值对组成。键与值使用冒号分隔，值用双引号括起来。键值对之间使用一个空格分隔。 注意事项： 为结构体编写Tag时，必须严格遵守键值对的规则。结构体标签的解析代码的容错能力很差，一旦格式写错，编译和运行时都不会提示任何错误，通过反射也无法正确取值。例如不要在key和value之间添加空格。</p>
<p>例如我们为Student结构体的每个字段定义json序列化时使用的Tag：</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">//Student 学生</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID     <span class="token builtin">int</span>    <span class="token string">`json:"id"`</span> <span class="token comment">//通过指定tag实现json序列化该字段时的key</span>
    Gender <span class="token builtin">string</span> <span class="token comment">//json序列化是默认使用字段名作为key</span>
    name   <span class="token builtin">string</span> <span class="token comment">//私有不能被json包访问</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
        ID<span class="token punctuation">:</span>     <span class="token number">1</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span>
        name<span class="token punctuation">:</span>   <span class="token string">"pprof"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"json marshal failed!"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"json str:%s\n"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">//json str:{"id":1,"Gender":"女"}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_1-3-22-小练习" tabindex="-1"><a class="header-anchor" href="#_1-3-22-小练习" aria-hidden="true">#</a> 1.3.22. 小练习：</h3>
<p>猜一下下列代码运行的结果是什么</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">demo</span><span class="token punctuation">(</span>ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//切片是引用传递，是可以改变值的</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">999</span>
    <span class="token comment">// ce = append(ce, student{3, "xiaowang", 56})</span>
    <span class="token comment">// return ce</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student  <span class="token comment">//定义一个切片类型的结构体</span>
    ce <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"xiaoming"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"xiaozhang"</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">demo</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_1-3-23-删除map类型的结构体" tabindex="-1"><a class="header-anchor" href="#_1-3-23-删除map类型的结构体" aria-hidden="true">#</a> 1.3.23. 删除map类型的结构体</h3>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ce <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"xiaolizi"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span>
    ce<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"wang"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>ce<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></details>
<h3 id="_1-3-24-实现map有序输出" tabindex="-1"><a class="header-anchor" href="#_1-3-24-实现map有序输出" aria-hidden="true">#</a> 1.3.24. 实现map有序输出</h3>
<details class="custom-container details">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"sort"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    map1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"www.topgoer.com"</span>
    map1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"rpc.topgoer.com"</span>
    map1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"ceshi"</span>
    map1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"xiaohong"</span>
    map1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"xiaohuang"</span>
    sli <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
        sli <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sli<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>sli<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">[</span>sli<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>输出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>www.topgoer.com
rpc.topgoer.com
xiaohong
xiaohuang
ceshi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details>
</template>
