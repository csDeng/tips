<template><h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1>
<h2 id="_1-什么是排序" tabindex="-1"><a class="header-anchor" href="#_1-什么是排序" aria-hidden="true">#</a> 1. 什么是排序</h2>
<p><img src="@source/algorithm/pics/image-20210610162855798.png" alt="image-20210610162855798"></p>
<p><img src="@source/algorithm/pics/image-20210610160552752.png" alt="image-20210610160552752"></p>
<center><font color='red'>以下部分动图来自[CSDN](https://blog.csdn.net/king9666/article/details/87433486)</font></center>
<h1 id="_1-冒泡" tabindex="-1"><a class="header-anchor" href="#_1-冒泡" aria-hidden="true">#</a> 1. 冒泡</h1>
<ul>
<li>一个一个往上冒</li>
</ul>
<p><img src="@source/algorithm/pics/20190216102237984.gif" alt="img"></p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>k<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 从小到大</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details>
<h1 id="_2-选择" tabindex="-1"><a class="header-anchor" href="#_2-选择" aria-hidden="true">#</a> 2. 选择</h1>
<h2 id="_2-1-简单选择排序" tabindex="-1"><a class="header-anchor" href="#_2-1-简单选择排序" aria-hidden="true">#</a> 2.1 简单选择排序</h2>
<ul>
<li>选择最小的往前放</li>
<li><img src="@source/algorithm/pics/20190216102338838.gif" alt="img"></li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>	<span class="token comment">// 从小到大 </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details>
<h2 id="_2-2-堆排序" tabindex="-1"><a class="header-anchor" href="#_2-2-堆排序" aria-hidden="true">#</a> 2.2 堆排序</h2>
<p><img src="@source/algorithm/pics/1258817-20190420150936225-1441021270.gif" alt="img"></p>
<h3 id="先来了解下堆的相关概念" tabindex="-1"><a class="header-anchor" href="#先来了解下堆的相关概念" aria-hidden="true">#</a> 先来了解下堆的相关概念：</h3>
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
<p>了解了这些定义。接下来看看堆排序的基本思想及基本步骤：</p>
<h3 id="堆排序基本思想及步骤" tabindex="-1"><a class="header-anchor" href="#堆排序基本思想及步骤" aria-hidden="true">#</a> 堆排序基本思想及步骤</h3>
<p>》 基于选择排序</p>
<blockquote>
<p>堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 构建小顶堆， 大到小排序</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
  cout<span class="token operator">&lt;&lt;</span>len<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 交互a数组中的x跟y</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
  a<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
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
  <span class="token function">display</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span>len<span class="token punctuation">;</span> i<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">heapAdjust</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">display</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> n<span class="token punctuation">;</span>
  cin<span class="token operator">>></span>n<span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">heapSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  delete <span class="token punctuation">[</span><span class="token punctuation">]</span>a<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div></details>
<h1 id="_3-插入" tabindex="-1"><a class="header-anchor" href="#_3-插入" aria-hidden="true">#</a> 3. 插入</h1>
<h2 id="_3-1-直接插入" tabindex="-1"><a class="header-anchor" href="#_3-1-直接插入" aria-hidden="true">#</a> 3.1 直接插入</h2>
<p><img src="@source/algorithm/pics/20190216102357584.gif" alt="在这里插入图片描述"></p>
<ul>
<li>从后往前， 默认前面已排好序</li>
<li>假设<code>j</code>前面<code>j-1</code>的元素已经是有序的，接下来要对<code>a[j]</code> 的位置查找</li>
</ul>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>	<span class="token comment">// 从小到大</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span>i<span class="token punctuation">;</span> <span class="token punctuation">(</span>j<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&lt;</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">^=</span>arr<span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details>
<h2 id="_3-2-折半插入" tabindex="-1"><a class="header-anchor" href="#_3-2-折半插入" aria-hidden="true">#</a> 3.2 折半插入</h2>
<blockquote>
<p>从1开始，对后面的元素进行折半查找插入</p>
</blockquote>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 降序（从大到小）</span>
<span class="token keyword">void</span> <span class="token function">z_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>high <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>mid<span class="token punctuation">;</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        low<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        high<span class="token operator">=</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        temp<span class="token operator">=</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>		<span class="token comment">// 要插入的元素</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low<span class="token operator">&lt;=</span>high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mid<span class="token operator">=</span><span class="token punctuation">(</span>low<span class="token operator">+</span>high<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
            
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></details>
<h2 id="_3-3-希尔排序" tabindex="-1"><a class="header-anchor" href="#_3-3-希尔排序" aria-hidden="true">#</a> 3.3 希尔排序</h2>
<p><img src="@source/algorithm/pics/20190216102824389.gif" alt="在这里插入图片描述"></p>
<blockquote>
<p>希尔排序是把记录按下标的一定增量<code>分组</code>，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至<code>1</code>时，整个文件恰被分成一组，算法便终止。</p>
</blockquote>
<ul>
<li>
<font color='red'>重点：注意对每个子序列进行插入排序</font>
</li>
</ul>
<p><img src="@source/algorithm/pics/1024555-20161128110416068-1421707828.png" alt="img"></p>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 从小到大</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 对希尔排序中的单个组进行排序
 *
 * 参数说明：
 *     a -- 待排序的数组
 *     n -- 数组总的长度
 *     i -- 组的起始位置
 *     gap -- 组的步长
 *
 *  组是"从i开始，将相隔gap长度的数都取出"所组成的！
 *  从小到大排序
 */</span>
<span class="token keyword">void</span> <span class="token function">groupSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> gap<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> j<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i <span class="token operator">+</span> gap<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> gap<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 如果a[j] &lt; a[j-gap]，则寻找a[j]位置，并将后面数据的位置都后移。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> k <span class="token operator">=</span> j <span class="token operator">-</span> gap<span class="token punctuation">;</span>

            <span class="token comment">/*************
             * 重点部分：
             * 把比tmp大的元素都往后面放
             * 
             *************/</span> 
            <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">></span> tmp<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                a<span class="token punctuation">[</span>k <span class="token operator">+</span> gap<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
                k <span class="token operator">-=</span> gap<span class="token punctuation">;</span>           <span class="token comment">// 注意注意往前移了</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 往后移一位得到符合条件的位置插入</span>
            a<span class="token punctuation">[</span>k <span class="token operator">+</span> gap<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">shellSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">,</span>gap<span class="token punctuation">;</span>

    <span class="token comment">// gap为步长，每次减为原来的一半。</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>gap <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> gap <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 共gap个组，对每一组都执行直接插入排序</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span>i <span class="token operator">&lt;</span> gap<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token function">groupSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> n<span class="token punctuation">,</span> i<span class="token punctuation">,</span> gap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">show</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> t<span class="token punctuation">;</span>
    cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> k<span class="token punctuation">;</span>
        cin<span class="token operator">>></span>k<span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token operator">*</span>a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token punctuation">}</span>
        <span class="token function">shellSort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        delete <span class="token punctuation">[</span><span class="token punctuation">]</span>a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div></details>
<h1 id="_4-快排" tabindex="-1"><a class="header-anchor" href="#_4-快排" aria-hidden="true">#</a> 4. 快排</h1>
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
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>
<span class="token keyword">void</span> <span class="token function">q_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">// left, right 左闭右开， low、high闭区间</span>
<span class="token comment">// a[left] 即左边第一个元素为哨兵</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">>=</span> right<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> low <span class="token operator">=</span> left<span class="token punctuation">,</span> high <span class="token operator">=</span> right<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> center <span class="token operator">=</span> a<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>    
	
    <span class="token comment">// 直到low==high 确保左边的元素都比右边的小 </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></details>
<h1 id="_5-归并排序" tabindex="-1"><a class="header-anchor" href="#_5-归并排序" aria-hidden="true">#</a> 5. 归并排序</h1>
<h3 id="_1-基本思想" tabindex="-1"><a class="header-anchor" href="#_1-基本思想" aria-hidden="true">#</a> 1. 基本思想</h3>
<p>归并排序是用分治思想，分治模式在每一层==递归==上有三个步骤：</p>
<ul>
<li><strong>分解（Divide）</strong>：将n个元素分成个含n/2个元素的子序列。</li>
<li><strong>解决（Conquer）</strong>：用合并排序法对两个子序列递归的排序。</li>
<li><strong>合并（Combine）</strong>：合并两个已排序的子序列已得到排序结果。</li>
</ul>
<h3 id="_2-实现逻辑" tabindex="-1"><a class="header-anchor" href="#_2-实现逻辑" aria-hidden="true">#</a> 2. 实现逻辑</h3>
<p><strong>2.1 迭代法</strong></p>
<blockquote>
<p>① 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
② 设定两个指针，最初位置分别为两个已经排序序列的起始位置
③ 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
④ 重复步骤③直到某一指针到达序列尾
⑤ 将另一序列剩下的所有元素直接复制到合并序列尾</p>
</blockquote>
<p><strong>2.2 递归法</strong></p>
<blockquote>
<p>① 将序列每相邻两个数字进行归并操作，形成floor(n/2)个序列，排序后每个序列包含两个元素
② 将上述序列再次归并，形成floor(n/4)个序列，每个序列包含四个元素
③ 重复步骤②，直到所有元素排序完毕</p>
</blockquote>
<h3 id="_3-动图演示" tabindex="-1"><a class="header-anchor" href="#_3-动图演示" aria-hidden="true">#</a> 3. 动图演示</h3>
<p><img src="@source/algorithm/pics/v2-a29c0dd0186d1f8cef3c5ebdedf3e5a3_b.webp" alt="img"></p>
<p>归并排序演示</p>
<p>具体的我们以一组无序数列｛14，12，15，13，11，16｝为例分解说明，如下图所示：</p>
<p><img src="@source/algorithm/pics/v2-2958d4f3d9dd9156f1b5dca6788fe8a7_720w.jpg" alt="img"></p>
<p>上图中首先把一个未排序的序列从中间分割成2部分，再把2部分分成4部分，依次分割下去，直到分割成一个一个的数据，再把这些数据两两归并到一起，使之有序，不停的归并，最后成为一个排好序的序列。</p>
<h2 id="自顶向下归并-递归" tabindex="-1"><a class="header-anchor" href="#自顶向下归并-递归" aria-hidden="true">#</a> 自顶向下归并(递归)</h2>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 归并排序（C-递归版）</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdio></span></span>

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

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">merge_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d "</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></details>
<h2 id="自底向上归并-迭代" tabindex="-1"><a class="header-anchor" href="#自底向上归并-迭代" aria-hidden="true">#</a> 自底向上归并（迭代）</h2>
<details class="custom-container details"><summary>查看代码</summary>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">// 自底向上归并</span>
<span class="token comment">/****
 * 分而治之
 * 
 ***/</span> 
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstring></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;algorithm></span></span>
using namespace std<span class="token punctuation">;</span>
<span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span> string a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    cout<span class="token operator">&lt;&lt;</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">!=</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      cout<span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 治 【闭区间】</span>
<span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span>string a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> string reg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> mid<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// if( l>r || l>mid || mid>r ) return ;</span>
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
<span class="token keyword">void</span> <span class="token function">mergeSort_re</span><span class="token punctuation">(</span>string a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> string reg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 分</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> step<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> step<span class="token operator">&lt;</span>end<span class="token punctuation">;</span> step<span class="token operator">*=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> j <span class="token operator">+=</span> step<span class="token operator">*</span><span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">int</span> low <span class="token operator">=</span> j<span class="token punctuation">,</span> mid <span class="token operator">=</span> j<span class="token operator">+</span>step<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> high <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>j<span class="token operator">+</span><span class="token number">2</span><span class="token operator">*</span>step<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> end<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// cout &lt;&lt; "low=" &lt;&lt; low &lt;&lt; " mid=" &lt;&lt; mid &lt;&lt; " high=" &lt;&lt; high &lt;&lt; endl;</span>
      <span class="token comment">// void merge(string a[], string reg[],  int l, int mid, int r)</span>
       <span class="token function">merge</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> low<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> high <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">display</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>string a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span><span class="token punctuation">{</span>
  string <span class="token operator">*</span> reg <span class="token operator">=</span> new string<span class="token punctuation">[</span>len<span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">mergeSort_re</span><span class="token punctuation">(</span> a<span class="token punctuation">,</span> reg<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  delete <span class="token punctuation">[</span><span class="token punctuation">]</span>reg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> t<span class="token punctuation">;</span> cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token punctuation">;</span> cin<span class="token operator">>></span>l<span class="token punctuation">;</span>
    length <span class="token operator">=</span> l<span class="token punctuation">;</span>
    string <span class="token operator">*</span>s <span class="token operator">=</span>  new string<span class="token punctuation">[</span>l<span class="token operator">+</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cin<span class="token operator">>></span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>    
    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 注意这个bug我卡了两天</span>
      cout<span class="token operator">&lt;&lt;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    delete <span class="token punctuation">[</span><span class="token punctuation">]</span>s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div></details>
<h1 id="_6-基数排序" tabindex="-1"><a class="header-anchor" href="#_6-基数排序" aria-hidden="true">#</a> 6. 基数排序</h1>
<details class="custom-container details"><summary>查看代码</summary>
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
<span class="token keyword">void</span> <span class="token function">radixsort</span><span class="token punctuation">(</span><span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token comment">//基数排序</span>
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
          <span class="token comment">// cout&lt;&lt;"jj="&lt;&lt;jj&lt;&lt;"count[jj]="&lt;&lt;count[jj]&lt;&lt;endl;</span>
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
        <span class="token comment">/**** 看每一位的收集器
        for(int ii=0, kk=0; ii&lt;10; ii++){
          cout &lt;&lt; ii &lt;&lt;":";
          if(flag[ii]==0){
            cout &lt;&lt; "NULL"&lt;&lt;endl;
            continue;
          }
          for( int jk=flag[ii]+1; jk>0; jk-- ){
            if(jk==1){
              cout&lt;&lt;"->^"&lt;&lt;endl;
            }else{
              cout&lt;&lt;"->"&lt;&lt;tmp[kk];
              kk++;
            }
            
          }
        }
        ***/</span>
        <span class="token comment">// for( int ii=0; ii&lt;10; ii++){</span>
        <span class="token comment">//   cout&lt;&lt;"ii="&lt;&lt; ii &lt;&lt; " temp[ii]="&lt;&lt;tmp[ii]&lt;&lt;endl;</span>
        <span class="token comment">// }</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//将临时数组的内容复制到data中</span>
          data<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> ii<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> ii<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> ii<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          cout<span class="token operator">&lt;&lt;</span>data<span class="token punctuation">[</span>ii<span class="token punctuation">]</span><span class="token operator">&lt;&lt;</span><span class="token string">" "</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>   
        cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
        radix <span class="token operator">=</span> radix <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    delete<span class="token punctuation">[</span><span class="token punctuation">]</span>tmp<span class="token punctuation">;</span>
    delete<span class="token punctuation">[</span><span class="token punctuation">]</span>count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">int</span> t<span class="token punctuation">;</span>
  cin<span class="token operator">>></span>t<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>t<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> l<span class="token punctuation">;</span>
    cin <span class="token operator">>></span> l<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>a <span class="token operator">=</span> new <span class="token keyword">int</span><span class="token punctuation">[</span>l<span class="token operator">+</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      cin<span class="token operator">>></span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">radixsort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    delete <span class="token punctuation">[</span><span class="token punctuation">]</span>a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div></details>
</template>
