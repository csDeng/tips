<template><h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1>
<p><img src="@source/algorithm/sort/pics/1398630-20201122232129828-1213636791.png" alt="img"></p>
<h2 id="什么是排序" tabindex="-1"><a class="header-anchor" href="#什么是排序" aria-hidden="true">#</a> 什么是排序</h2>
<p><img src="@source/algorithm/pics/image-20210610162855798.png" alt="image-20210610162855798"></p>
<p><img src="@source/algorithm/pics/image-20210610160552752.png" alt="image-20210610160552752"></p>
<p>以下部分动图来自<a href="https://blog.csdn.net/king9666/article/details/87433486" target="_blank" rel="noopener noreferrer">CSDN<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">稳定性的概念</p>
<p>定义：能保证两个相等的数，经过排序之后，其在序列的前后位置顺序不变。（A1=A2，排序前A1在A2前面，排序后A1还在A2前面）</p>
<p>意义：稳定性本质是维持具有相同属性的数据的插入顺序，如果后面需要使用该插入顺序排序，则稳定性排序可以避免这次排序。</p>
</div>
<h2 id="排序的分类" tabindex="-1"><a class="header-anchor" href="#排序的分类" aria-hidden="true">#</a> 排序的分类</h2>
<h3 id="_1-冒泡" tabindex="-1"><a class="header-anchor" href="#_1-冒泡" aria-hidden="true">#</a> 1. 冒泡</h3>
<h4 id="_1-1-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_1-1-冒泡排序" aria-hidden="true">#</a> 1.1 冒泡排序</h4>
<ul>
<li>一个一个往上冒</li>
</ul>
<p><img src="@source/algorithm/pics/20190216102237984.gif" alt="img"></p>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
  <CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BubbleSort</span><span class="token punctuation">(</span>arr <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>k<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 从小到大</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</details>
<h4 id="_1-2-快速排序" tabindex="-1"><a class="header-anchor" href="#_1-2-快速排序" aria-hidden="true">#</a> 1.2. 快速排序</h4>
<ul>
<li>升级版冒泡（<code>递归</code>）</li>
</ul>
<p><img src="@source/algorithm/pics/20190216103254673.gif" alt="在这里插入图片描述"></p>
<ul>
<li>基本思想</li>
</ul>
<blockquote>
<p>通过一趟排序将待排的数据分割成两部分，其中一部分的数据均比另一部分的数据要小，对两组数据进行排序。</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go借助其他切片（数组）版 | ' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	left <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	right <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	guard <span class="token operator">:=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> guard <span class="token punctuation">{</span>
			left <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 比哨兵小入左队</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 其他入大队</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	left<span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">QuickSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
	res <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token function">append</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> guard<span class="token punctuation">)</span><span class="token punctuation">,</span> right<span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='Go不使用其他切片 | ' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 左闭右开</span>
<span class="token keyword">func</span> <span class="token function">QuickSort1</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> left <span class="token operator">>=</span> right<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	low <span class="token operator">:=</span> left
	high <span class="token operator">:=</span> right <span class="token operator">-</span> <span class="token number">1</span>
	guard <span class="token operator">:=</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span>

	<span class="token keyword">for</span> low <span class="token operator">&lt;</span> high <span class="token punctuation">{</span>
		<span class="token comment">/*
			小的往左，大的往右
		*/</span>
		<span class="token keyword">for</span> low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">>=</span> guard <span class="token punctuation">{</span>
			high<span class="token operator">--</span>
		<span class="token punctuation">}</span>
		a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>high<span class="token punctuation">]</span>

		<span class="token keyword">for</span> low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> guard <span class="token punctuation">{</span>
			low<span class="token operator">++</span>
		<span class="token punctuation">}</span>
		a<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> guard

	<span class="token function">QuickSort1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> left<span class="token punctuation">,</span> low<span class="token punctuation">)</span>
	<span class="token function">QuickSort1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> low<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>
<span class="token keyword">void</span> <span class="token function">q_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">// left, right 左闭右开， low、high闭区间</span>
<span class="token comment">// a[left] 即左边第一个元素为哨兵</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">>=</span> right<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> left<span class="token punctuation">,</span> high <span class="token operator">=</span> right<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> center <span class="token operator">=</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 直到low==high 确保左边的元素都比右边的小</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span> low <span class="token operator">&lt;</span> high <span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token comment">// 从右边开始往回搜索，找到第一个比哨兵小的元素,比哨兵大则跳过</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span> low<span class="token operator">&lt;</span>high <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">>=</span> center <span class="token punctuation">)</span> high <span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token comment">// 将比哨兵小的元素移动到左边</span>
        a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 从左边往右边搜索， 找到第一个比哨兵大的元素，比哨兵小则跳过</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span> low<span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> center<span class="token punctuation">)</span> low<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 将比哨兵大的元素移动到右边</span>
        a<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把哨兵存入分界线位置</span>
    a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> center<span class="token punctuation">;</span>			<span class="token comment">// == a[high] = center;</span>
    <span class="token comment">// 开始递归快排</span>
    <span class="token function">q_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> left<span class="token punctuation">,</span> low<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// 左边</span>
    <span class="token function">q_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> low<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> right <span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 右边</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>快排优化版的简单示意图(以 <code>3 5 2 1 6</code>作为局部数组为例)</p>
<p><img src="@source/algorithm/pics/sort/image-20220410215637085.png" alt="image-20220410215637085"></p>
</details>
<h3 id="_2-选择" tabindex="-1"><a class="header-anchor" href="#_2-选择" aria-hidden="true">#</a> 2. 选择</h3>
<h4 id="_2-1-简单选择排序" tabindex="-1"><a class="header-anchor" href="#_2-1-简单选择排序" aria-hidden="true">#</a> 2.1 简单选择排序</h4>
<ul>
<li>选择最小的往前放</li>
<li><img src="@source/algorithm/pics/20190216102338838.gif" alt="img"></li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
  <CodeGroupItem title="Go">
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">SelectSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		minIndex <span class="token operator">:=</span> i
		<span class="token keyword">for</span> j <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				minIndex <span class="token operator">=</span> j
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> minIndex <span class="token operator">!=</span> i <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> a
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem  title="C++">
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 从小到大 </span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    minIndex<span class="token operator">=</span>i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>length<span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> minIndex<span class="token operator">=</span>j<span class="token punctuation">;</span> <span class="token comment">// 选择最小的元素的下标</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> minIndex <span class="token operator">!=</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">^=</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">^=</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<ul>
<li>这里有一个小小的优化技巧</li>
</ul>
<blockquote>
<p>在搜索最小数下标的时候，同时搜索最大数的下标，可以使得复杂度减半。</p>
</blockquote>
</details>
<h4 id="_2-2-堆排序" tabindex="-1"><a class="header-anchor" href="#_2-2-堆排序" aria-hidden="true">#</a> 2.2 堆排序</h4>
<p><img src="@source/algorithm/pics/1258817-20190420150936225-1441021270.gif" alt="img"></p>
<details class="custom-container details"><summary>先来了解下堆的相关概念：</summary>
<p>堆是具有以下性质的完全二叉树：</p>
<blockquote>
<p>每个结点的值都大于或等于其左右孩子结点的值，称为<code>大顶堆</code>；</p>
<p>或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。</p>
</blockquote>
<p>如下图：</p>
<p><img src="@source/algorithm/pics/1024555-20161217182750011-675658660.png" alt="img"></p>
<p>同时，我们对堆中的结点按层进行编号，将这种逻辑结构映射到数组中就是下面这个样子</p>
<p><img src="@source/algorithm/pics/1024555-20161217182857323-2092264199.png" alt="img"></p>
<p>该数组从逻辑上讲就是一个堆结构，我们用简单的公式来描述一下堆的定义就是：</p>
<p><strong>大顶堆：arr[i] &gt;= arr[2i+1] &amp;&amp; arr[i] &gt;= arr[2i+2]</strong>  (小到大排序)</p>
<p><strong>小顶堆：arr[i] &lt;= arr[2i+1] &amp;&amp; arr[i] &lt;= arr[2i+2]</strong>  （大到小排序）</p>
</details>
<details class="custom-container details"><summary>堆的百度百科</summary>
<p>堆（heap）是计算机科学中一类特殊的数据结构的统称。堆通常是一个可以被看做一棵树的数组对象。</p>
<p>堆总是满足下列性质：</p>
<ul>
<li>堆中某个结点的值总是不大于或不小于其父结点的值；</li>
<li>堆总是一棵完全二叉树。</li>
</ul>
<details class="custom-container details"><summary>完全二叉树</summary>
<ul>
<li>完全二叉树的特点：
<ul>
<li>叶子结点只能出现在最下层和次下层，且最下层的叶子结点集中在树的左部。</li>
</ul>
</li>
</ul>
<p>需要注意的是，满二叉树肯定是完全二叉树，而完全二叉树不一定是满二叉树</p>
<ul>
<li>判断一棵树是否是完全二叉树的思路</li>
</ul>
<blockquote>
<p>1&gt;如果树为空，则直接返回错<br/>
2&gt;如果树不为空：层序遍历二叉树<br/>
2.1&gt;如果一个结点左右孩子都不为空，则pop该节点，将其左右孩子入队列；<br/>
2.1&gt;如果遇到一个结点，左孩子为空，右孩子不为空，则该树一定不是完全二叉树；<br/>
2.2&gt;如果遇到一个结点，左孩子不为空，右孩子为空；或者左右孩子都为空，且则该节点之后的队列中的结点都为叶子节点，该树才是完全二叉树，否则就不是完全二叉树.</p>
</blockquote>
</details>
</details>
<p>了解了这些定义。接下来看看堆排序的基本思想及基本步骤：</p>
<ul>
<li>堆排序基本思想及步骤</li>
</ul>
<p>基于选择排序</p>
<blockquote>
<p>堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go' active>
</CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 构建小顶堆， 大到小排序</span>

<span class="token comment">// 交互a数组中的x跟y</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
  a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">^=</span> a<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">^=</span> a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">^=</span> a<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调整堆</span>
<span class="token keyword">void</span> <span class="token function">heapAdjust</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> flag <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">2</span><span class="token operator">*</span>i<span class="token punctuation">;</span> j<span class="token operator">&lt;=</span>len<span class="token punctuation">;</span> j<span class="token operator">*=</span><span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> j<span class="token operator">&lt;</span>len <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>a<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token operator">++</span>j<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span> flag <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">=</span>j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 堆排序</span>
<span class="token keyword">void</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>len<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">heapAdjust</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>len<span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">heapAdjust</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h3 id="_3-插入" tabindex="-1"><a class="header-anchor" href="#_3-插入" aria-hidden="true">#</a> 3. 插入</h3>
<div class="custom-container tip"><p class="custom-container-title">与现实场景的联系</p>
<p>存在一个已经排好的队伍（从矮到高），这时，来了个还没排的家伙，他需要去找他需要站的位置。</p>
</div>
<h4 id="_3-1-直接插入" tabindex="-1"><a class="header-anchor" href="#_3-1-直接插入" aria-hidden="true">#</a> 3.1 直接插入</h4>
<p><img src="@source/algorithm/pics/20190216102357584.gif" alt="在这里插入图片描述"></p>
<ul>
<li>从后往前， 默认前面已排好序</li>
<li>假设<code>j</code>前面<code>j-1</code>的元素已经是有序的，接下来要对<code>a[j]</code> 的位置查找</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
  <CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token punctuation">;</span> j <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 从小到大</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token punctuation">;</span> <span class="token punctuation">(</span>j<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
          arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</details>
<h4 id="_3-2-折半插入" tabindex="-1"><a class="header-anchor" href="#_3-2-折半插入" aria-hidden="true">#</a> 3.2 折半插入</h4>
<blockquote>
<p>从1开始，对后面的元素进行折半查找插入</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
  <CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">BinarySearchInsertSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">var</span> low<span class="token punctuation">,</span> high<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> reg <span class="token builtin">int</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		low <span class="token operator">=</span> <span class="token number">0</span>
		high <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
		reg <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		<span class="token keyword">for</span> low <span class="token operator">&lt;=</span> high <span class="token punctuation">{</span>
			mid <span class="token operator">=</span> <span class="token punctuation">(</span>low <span class="token operator">+</span> high<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span>
			<span class="token keyword">if</span> reg <span class="token operator">></span> a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">/*
			low是还没排序的元素应该去的位置，所以low后面已排序的元素都要往后站
		*/</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token punctuation">;</span> j <span class="token operator">></span> low<span class="token punctuation">;</span> j<span class="token operator">--</span> <span class="token punctuation">{</span>
			a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
		a<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> reg

	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 降序（从大到小）</span>
<span class="token keyword">void</span> <span class="token function">z_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>high <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>mid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        low<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        high<span class="token operator">=</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        temp<span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>		<span class="token comment">// 要插入的元素</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low<span class="token operator">&lt;=</span>high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mid<span class="token operator">=</span><span class="token punctuation">(</span>low<span class="token operator">+</span>high<span class="token punctuation">)</span><span class="token operator">>></span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">// 决定顺序的位置</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">&lt;</span>temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                high<span class="token operator">=</span>mid<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                low<span class="token operator">=</span>mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 把元素后移</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token punctuation">;</span> j<span class="token operator">></span>low<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>a<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        a<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token operator">=</span>temp<span class="token punctuation">;</span><span class="token comment">//插入元素</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</details>
<h4 id="_3-3-希尔排序" tabindex="-1"><a class="header-anchor" href="#_3-3-希尔排序" aria-hidden="true">#</a> 3.3 希尔排序</h4>
<div class="custom-container tip"><p class="custom-container-title">百度百科</p>
<p>希尔排序(Shell's Sort)是插入排序的一种又称“缩小增量排序”（Diminishing Increment Sort），是直接插入排序算法的一种更高效的改进版本。希尔排序是非稳定排序算法。该方法因 D.L.Shell 于 1959 年提出而得名。
希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。</p>
<hr>
<p>希尔排序是基于插入排序的以下两点性质而提出改进方法的：</p>
<ul>
<li>插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。</li>
<li>但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。</li>
</ul>
</div>
<p><img src="@source/algorithm/pics/20190216102824389.gif" alt="在这里插入图片描述"></p>
<blockquote>
<p>希尔排序是把记录按下标的一定增量<code>分组</code>，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至<code>1</code>时，整个文件恰被分成一组，算法便终止。</p>
</blockquote>
<ul>
<li>重点：注意对每个子序列进行插入排序</li>
</ul>
<p><img src="@source/algorithm/pics/1024555-20161128110416068-1421707828.png" alt="img"></p>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">shellSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token comment">/*
		@gap: 增量每次减半
	*/</span>
	<span class="token keyword">for</span> gap <span class="token operator">:=</span> n <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">;</span> gap <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">;</span> gap <span class="token operator">>>=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i <span class="token operator">+=</span> gap <span class="token punctuation">{</span>
			<span class="token keyword">for</span> j <span class="token operator">:=</span> i<span class="token punctuation">;</span> j <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span><span class="token punctuation">;</span> j <span class="token operator">-=</span> gap <span class="token punctuation">{</span>
				a<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">shellSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span>gap<span class="token punctuation">,</span>j<span class="token punctuation">;</span>

    <span class="token comment">// gap为步长，每次减为原来的一半。</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>gap <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> gap <span class="token operator">>=</span><span class="token number">1</span> <span class="token punctuation">;</span> gap <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 组内排序</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> gap <span class="token punctuation">;</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">+=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j<span class="token operator">></span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">-=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h3 id="_4-归并排序" tabindex="-1"><a class="header-anchor" href="#_4-归并排序" aria-hidden="true">#</a> 4. 归并排序</h3>
<ul>
<li>基本思想</li>
</ul>
<p>归并排序是用分治思想，分治模式在每一层<strong>递归</strong>上有三个步骤：</p>
<ul>
<li><strong>分解（Divide）</strong>：将n个元素分成个含n/2个元素的子序列。</li>
<li><strong>解决（Conquer）</strong>：用合并排序法对两个子序列递归的排序。</li>
<li><strong>合并（Combine）</strong>：合并两个已排序的子序列已得到排序结果。</li>
</ul>
<ul>
<li>实现逻辑</li>
</ul>
<p><strong>2.1 迭代法</strong></p>
<blockquote>
<p>① 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列<br/>
② 设定两个指针，最初位置分别为两个已经排序序列的起始位置<br/>
③ 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置<br/>
④ 重复步骤③直到某一指针到达序列尾<br/>
⑤ 将另一序列剩下的所有元素直接复制到合并序列尾</p>
</blockquote>
<p><strong>2.2 递归法</strong></p>
<blockquote>
<p>① 将序列每相邻两个数字进行归并操作，形成floor(n/2)个序列，排序后每个序列包含两个元素<br/>
② 将上述序列再次归并，形成floor(n/4)个序列，每个序列包含四个元素<br/>
③ 重复步骤②，直到所有元素排序完毕</p>
</blockquote>
<ul>
<li>动图演示</li>
</ul>
<p><img src="@source/algorithm/pics/v2-a29c0dd0186d1f8cef3c5ebdedf3e5a3_b.webp" alt="img"></p>
<ul>
<li>归并排序演示</li>
</ul>
<p>具体的我们以一组无序数列｛14，12，15，13，11，16｝为例分解说明，如下图所示：</p>
<p><img src="@source/algorithm/pics/v2-2958d4f3d9dd9156f1b5dca6788fe8a7_720w.jpg" alt="img"></p>
<p>上图中首先把一个未排序的序列从中间分割成2部分，再把2部分分成4部分，依次分割下去，直到分割成一个一个的数据，再把这些数据两两归并到一起，使之有序，不停的归并，最后成为一个排好序的序列。</p>
<ul>
<li>文字版</li>
</ul>
<details class="custom-container details">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>有序数组A：<span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：<span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> 表示比较的范围。

因为 <span class="token number">1</span> <span class="token operator">&lt;</span> <span class="token number">3</span>，所以 <span class="token number">1</span> 加入辅助数组
有序数组A：<span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1

因为 <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token number">5</span>，所以 <span class="token number">3</span> 加入辅助数组
有序数组A：3 <span class="token punctuation">[</span><span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span>

因为 <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">8</span>，所以 <span class="token number">5</span> 加入辅助数组
有序数组A：3 <span class="token punctuation">[</span><span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">8</span> <span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span>
因为 <span class="token number">8</span> <span class="token operator">==</span> <span class="token number">8</span>，所以 两个数都 加入辅助数组

有序数组A：3 <span class="token number">8</span> <span class="token punctuation">[</span><span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token number">5</span> <span class="token number">8</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span>
因为 <span class="token number">9</span> <span class="token operator">&lt;</span> <span class="token number">10</span>，所以 <span class="token number">9</span> 加入辅助数组

有序数组A：3 <span class="token number">8</span> <span class="token number">9</span> <span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token number">5</span> <span class="token number">8</span> <span class="token punctuation">[</span><span class="token number">10</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">9</span>

因为 <span class="token number">10</span> <span class="token operator">&lt;</span> <span class="token number">11</span>，所以 <span class="token number">10</span> 加入辅助数组
有序数组A：3 <span class="token number">8</span> <span class="token number">9</span> <span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>

因为 <span class="token number">11</span> <span class="token operator">&lt;</span> <span class="token number">17</span>，所以 <span class="token number">11</span> 加入辅助数组
有序数组A：3 <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span>
有序数组B：1 <span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span>

因为 <span class="token number">13</span> <span class="token operator">&lt;</span> <span class="token number">17</span>，所以 <span class="token number">13</span> 加入辅助数组
有序数组A：3 <span class="token number">8</span> <span class="token number">9</span> <span class="token number">11</span> <span class="token number">13</span>
有序数组B：1 <span class="token number">5</span> <span class="token number">8</span> <span class="token number">10</span> <span class="token punctuation">[</span><span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span><span class="token punctuation">]</span> 
辅助数组：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">13</span>

因为数组A已经没有比较元素，将数组B剩下的元素拼接在辅助数组后面。
结果：1 <span class="token number">3</span> <span class="token number">5</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span> <span class="token number">13</span> <span class="token number">17</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></details>
<h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4>
<ul>
<li>自顶向下归并(递归)</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token comment">// 二路归并</span>
<span class="token keyword">func</span> <span class="token function">MergeSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	<span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a
	<span class="token punctuation">}</span>
	mid <span class="token operator">:=</span> n <span class="token operator">>></span> <span class="token number">1</span>
	left<span class="token punctuation">,</span> right <span class="token operator">:=</span> <span class="token function">MergeSort</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token punctuation">:</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MergeSort</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>mid<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>res <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	l<span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
	len_l<span class="token punctuation">,</span> len_r <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
	<span class="token keyword">for</span> l <span class="token operator">&lt;</span> len_l <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> len_r <span class="token punctuation">{</span>
		<span class="token keyword">if</span> left<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;</span> right<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> left<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">)</span>
			l<span class="token operator">++</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> right<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span>
			r<span class="token operator">++</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 把两个子切片的剩余元素直接入队</span>
	res <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token function">append</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> left<span class="token punctuation">[</span>l<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">,</span> right<span class="token punctuation">[</span>r<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 归并排序（C-递归版）</span>

<span class="token keyword">void</span> <span class="token function">merge_sort_recursive</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> reg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">>=</span> end<span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> end <span class="token operator">-</span> start<span class="token punctuation">,</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> start<span class="token punctuation">;</span>
    <span class="token keyword">int</span> start1 <span class="token operator">=</span> start<span class="token punctuation">,</span> end1 <span class="token operator">=</span> mid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> start2 <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end2 <span class="token operator">=</span> end<span class="token punctuation">;</span>
    <span class="token function">merge_sort_recursive</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> start1<span class="token punctuation">,</span> end1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">merge_sort_recursive</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> start2<span class="token punctuation">,</span> end2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> k <span class="token operator">=</span> start<span class="token punctuation">;</span>

    <span class="token comment">// 决定是降序还是升序</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start1 <span class="token operator">&lt;=</span> end1 <span class="token operator">&amp;&amp;</span> start2 <span class="token operator">&lt;=</span> end2<span class="token punctuation">)</span>
        reg<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start1<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>start2<span class="token punctuation">]</span> <span class="token operator">?</span> arr<span class="token punctuation">[</span>start1<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">:</span> arr<span class="token punctuation">[</span>start2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start1 <span class="token operator">&lt;=</span> end1<span class="token punctuation">)</span>
        reg<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start1<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start2 <span class="token operator">&lt;=</span> end2<span class="token punctuation">)</span>
        reg<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>start2<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>k <span class="token operator">=</span> start<span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span>
        arr<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> reg<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">merge_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>reg <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">merge_sort_recursive</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    delete<span class="token punctuation">[</span><span class="token punctuation">]</span> reg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<ul>
<li>自底向上归并（迭代）</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">MergeSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> begin<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	step <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token comment">// 步数为1开始，step长度的数组表示一个有序的数组</span>
	<span class="token comment">// 1 -> 2 -> 4 -> 8</span>
	<span class="token keyword">for</span> end<span class="token operator">-</span>begin <span class="token operator">></span> step <span class="token punctuation">{</span>
		<span class="token comment">// 从头到尾对数组进行归并操作</span>
		<span class="token comment">// step &lt;&lt; 1 = 2 * step 表示偏移到后两个有序数组将它们进行归并</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> begin<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> i <span class="token operator">+=</span> step <span class="token operator">&lt;&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			low <span class="token operator">:=</span> i
			mid <span class="token operator">:=</span> low <span class="token operator">+</span> step
			high <span class="token operator">:=</span> low <span class="token operator">+</span> <span class="token punctuation">(</span>step <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>

			<span class="token comment">// 不存在第二个数组，直接返回</span>
			<span class="token keyword">if</span> mid <span class="token operator">></span> end <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 第二个数组长度不够</span>
			<span class="token keyword">if</span> high <span class="token operator">></span> end <span class="token punctuation">{</span>
				high <span class="token operator">=</span> end
			<span class="token punctuation">}</span>
			<span class="token comment">// 合并两个有序的数组</span>
			<span class="token function">merge</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		step <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">merge</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> begin<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> end <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	leftSize <span class="token operator">:=</span> mid <span class="token operator">-</span> begin
	rightSize <span class="token operator">:=</span> end <span class="token operator">-</span> mid
	newSize <span class="token operator">:=</span> leftSize <span class="token operator">+</span> rightSize
	result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newSize<span class="token punctuation">)</span>

	l<span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>

	<span class="token keyword">for</span> l <span class="token operator">&lt;</span> leftSize <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> rightSize <span class="token punctuation">{</span>
		lval <span class="token operator">:=</span> a<span class="token punctuation">[</span>begin<span class="token operator">+</span>l<span class="token punctuation">]</span>
		rval <span class="token operator">:=</span> a<span class="token punctuation">[</span>mid<span class="token operator">+</span>r<span class="token punctuation">]</span>

		<span class="token keyword">if</span> lval <span class="token operator">&lt;</span> rval <span class="token punctuation">{</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> lval<span class="token punctuation">)</span>
			l<span class="token operator">++</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> rval<span class="token punctuation">)</span>
			r<span class="token operator">++</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> a<span class="token punctuation">[</span>begin<span class="token operator">+</span>l<span class="token punctuation">:</span>mid<span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
	result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> a<span class="token punctuation">[</span>mid<span class="token operator">+</span>r<span class="token punctuation">:</span>end<span class="token punctuation">]</span><span class="token operator">...</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newSize<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		a<span class="token punctuation">[</span>begin<span class="token operator">+</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> reg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 分</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> step<span class="token operator">&lt;</span>end<span class="token punctuation">;</span> step<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> j <span class="token operator">+=</span> step<span class="token operator">*</span><span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      	<span class="token keyword">int</span> low <span class="token operator">=</span> j<span class="token punctuation">,</span> mid <span class="token operator">=</span> j<span class="token operator">+</span>step<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> high <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span>step<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> end<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       	<span class="token function">merge</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> high <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> reg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> mid<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> start <span class="token operator">=</span> l<span class="token punctuation">;</span>
  <span class="token keyword">int</span> end <span class="token operator">=</span> r<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> mid<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> l<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span> i<span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span>  j<span class="token operator">&lt;=</span> r <span class="token punctuation">)</span><span class="token punctuation">{</span>
          reg<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">>=</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span>   <span class="token operator">?</span> a<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">:</span> a<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span>mid<span class="token punctuation">)</span> reg<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>j<span class="token operator">&lt;=</span>r<span class="token punctuation">)</span> reg<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> ii<span class="token operator">=</span>start<span class="token punctuation">;</span> ii<span class="token operator">&lt;=</span>end<span class="token punctuation">;</span> ii<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a<span class="token punctuation">[</span>ii<span class="token punctuation">]</span> <span class="token operator">=</span> reg<span class="token punctuation">[</span>ii<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h3 id="_5-基数排序" tabindex="-1"><a class="header-anchor" href="#_5-基数排序" aria-hidden="true">#</a> 5. 基数排序</h3>
<details class="custom-container details"><summary>查看代码</summary>
<CodeGroup>
<CodeGroupItem title='Go' active>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getbits</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	max_num <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		<span class="token keyword">if</span> v <span class="token operator">></span> max_num <span class="token punctuation">{</span>
			max_num <span class="token operator">=</span> v
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	res <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">if</span> max_num <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> max_num <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>
		max_num <span class="token operator">/=</span> <span class="token number">10</span>
		res<span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">radixSort</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	n <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	step <span class="token operator">:=</span> <span class="token function">getbits</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	radix <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token keyword">var</span> num<span class="token punctuation">,</span> tail <span class="token builtin">int</span>

	reg <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> step<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		radix <span class="token operator">*=</span> <span class="token number">10</span>

		<span class="token comment">// 每一轮都要清空桶</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			reg<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			num <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> radix
			tail <span class="token operator">=</span> num <span class="token operator">/</span> <span class="token punctuation">(</span>radix <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
			reg<span class="token punctuation">[</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>reg<span class="token punctuation">[</span>tail<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		index <span class="token operator">:=</span> <span class="token number">0</span>
		<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> k<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> reg<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				a<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> v
				index<span class="token operator">++</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div></CodeGroupItem>
<CodeGroupItem title='C++'>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">maxbit</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token comment">//辅助函数，求数据的最大位数</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//保存最大的位数</span>
    <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">>=</span> p<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            p <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            <span class="token operator">++</span>d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">radixSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token comment">//基数排序</span>
<span class="token punctuation">{</span>
    <span class="token comment">// d 位</span>
    <span class="token keyword">int</span> d <span class="token operator">=</span> <span class="token function">maxbit</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>tmp <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token operator">*</span>count <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//计数器 --> 排序桶</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>flag <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k<span class="token punctuation">;</span>
    <span class="token keyword">int</span> radix <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> d<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">//进行d次排序</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          count<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//每次分配前清空计数器（清桶）</span>
          tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
          flag<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// k 是当前数字位置中的数字</span>
            k <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">/</span> radix<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">//统计每个桶中的记录数</span>
            count<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> jj<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> jj<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> jj<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          flag<span class="token punctuation">[</span>jj<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">[</span>jj<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
            count<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> count<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//将tmp中的位置依次分配给每个桶</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token comment">//将所有桶中记录依次收集到tmp中</span>
        <span class="token punctuation">{</span>
            k <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">/</span> radix<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            tmp<span class="token punctuation">[</span>count<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            count<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//将临时数组的内容复制到data中</span>
          data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        radix <span class="token operator">=</span> radix <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    delete<span class="token punctuation">[</span><span class="token punctuation">]</span>tmp<span class="token punctuation">;</span>
    delete<span class="token punctuation">[</span><span class="token punctuation">]</span>count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
</template>
