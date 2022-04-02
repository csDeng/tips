<template><h1 id="init函数与main函数" tabindex="-1"><a class="header-anchor" href="#init函数与main函数" aria-hidden="true">#</a> init函数与main函数</h1>
<h2 id="init函数" tabindex="-1"><a class="header-anchor" href="#init函数" aria-hidden="true">#</a> init函数</h2>
<p><code>go</code>语言中<code>init</code>函数用于包<code>(package)</code>的初始化，该函数是<code>go</code>语言的一个重要特性。</p>
<p>有下面的特征：</p>
<ul>
<li>
<p><code>init</code>函数是用于程序执行前做包的初始化的函数，比如初始化包里的变量等</p>
</li>
<li>
<p>每个包可以拥有多个<code>init</code>函数</p>
</li>
<li>
<p>包的每个源文件也可以拥有多个<code>init</code>函数</p>
</li>
<li>
<p>同一个包中多个<code>init</code>函数的执行顺序<code>go</code>语言没有明确的定义(说明)</p>
</li>
</ul>
<blockquote>
<p>经测试，同一个包内的<code>init</code>函数会被按顺序调用！！！</p>
<details class="custom-container details"><summary>测试代码</summary>
<p><img src="@source/language/go/pics/init_main/image-20220402111606279.png" alt="image-20220402111606279"></p>
</details>
</blockquote>
<ul>
<li>
<p>不同包的<code>init</code>函数按照包导入的依赖关系决定该初始化函数的执行顺序</p>
</li>
<li>
<p><code>init</code>函数不能被其他函数调用，而是在<code>main</code>函数执行之前，自动被调用</p>
</li>
</ul>
<h2 id="main函数" tabindex="-1"><a class="header-anchor" href="#main函数" aria-hidden="true">#</a> main函数</h2>
<p>Go语言程序的默认入口函数(主函数)：func main()
函数体用｛｝一对括号包裹。</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//函数体</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code>main</code>只能在<code>main</code>包中被系统自动调用，在其他包定义没有作用哦！！！</p>
<ul>
<li>原因：</li>
</ul>
<blockquote>
<p>因为不是<code>main</code>包的<code>main</code>函数（私有函数）不能被<code>main</code>包调用，而且不是<code>main</code>包又不能直接运行。</p>
</blockquote>
</div>
<ul>
<li>在其他包定义main函数时</li>
</ul>
<p><img src="@source/language/go/pics/init_main/image-20220402111013182.png" alt="image-20220402111013182"></p>
<ul>
<li>在<code>main</code>包定义时</li>
</ul>
<p><img src="@source/language/go/pics/init_main/image-20220402110855357.png" alt="image-20220402110855357"></p>
<h2 id="init函数和main函数的异同" tabindex="-1"><a class="header-anchor" href="#init函数和main函数的异同" aria-hidden="true">#</a> init函数和main函数的异同</h2>
<h3 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点：</h3>
<p>两个函数在定义时不能有任何的参数和返回值，且Go程序自动调用。</p>
<h3 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点：</h3>
<p><code>init</code>可以应用于任意包中，且可以重复定义多个。
<code>main</code>函数只能用于<code>main</code>包中，且只能定义一个。</p>
<h3 id="两个函数的执行顺序" tabindex="-1"><a class="header-anchor" href="#两个函数的执行顺序" aria-hidden="true">#</a> 两个函数的执行顺序：</h3>
<p>对同一个<code>go</code>文件的<code>init()</code>调用顺序是从上到下的。</p>
<p>对同一个<code>package</code>中不同文件是按文件名字符串比较“从小到大”顺序调用各文件中的<code>init()</code>函数。</p>
<p>对于不同的<code>package</code>，如果不相互依赖的话，按照main包中”先import的后调用”的顺序调用其包中的<code>init()</code>，如果<code>package</code>存在依赖，则先调用最早被依赖的<code>package</code>中的<code>init()</code>，最后调用<code>main</code>函数。</p>
<p>如果<code>init</code>函数中使用了<code>println()</code>或者<code>print()</code>你会发现在执行过程中这两个不会按照你想象中的顺序执行。这两个函数官方只推荐在测试环境中使用，对于正式环境不要使用。</p>
</template>
