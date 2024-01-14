import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/image-20220505234248828.10a98a79.png";const p={},t=s(`<h1 id="\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h1><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u7528\u4E8E\u751F\u6210\u4EA7\u54C1\u65CF\u7684\u5DE5\u5382\uFF0C\u6240\u751F\u6210\u7684\u5BF9\u8C61\u662F\u6709\u5173\u8054\u7684\u3002</p><p>\u5982\u679C\u62BD\u8C61\u5DE5\u5382\u9000\u5316\u6210\u751F\u6210\u7684\u5BF9\u8C61\u65E0\u5173\u8054\u5219\u6210\u4E3A\u5DE5\u5382\u51FD\u6570\u6A21\u5F0F\u3002</p><p>\u6BD4\u5982\u672C\u4F8B\u5B50\u4E2D\u4F7F\u7528RDB\u548CXML\u5B58\u50A8\u8BA2\u5355\u4FE1\u606F\uFF0C\u62BD\u8C61\u5DE5\u5382\u5206\u522B\u80FD\u751F\u6210\u76F8\u5173\u7684\u4E3B\u8BA2\u5355\u4FE1\u606F\u548C\u8BA2\u5355\u8BE6\u60C5\u4FE1\u606F\u3002 \u5982\u679C\u4E1A\u52A1\u903B\u8F91\u4E2D\u9700\u8981\u66FF\u6362\u4F7F\u7528\u7684\u65F6\u5019\u53EA\u9700\u8981\u6539\u52A8\u5DE5\u5382\u51FD\u6570\u76F8\u5173\u7684\u7C7B\u5C31\u80FD\u66FF\u6362\u4F7F\u7528\u4E0D\u540C\u7684\u5B58\u50A8\u65B9\u5F0F\u4E86\u3002</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> abstractfactory

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//OrderMainDAO \u4E3A\u8BA2\u5355\u4E3B\u8BB0\u5F55</span>
<span class="token keyword">type</span> OrderMainDAO <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SaveOrderMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//OrderDetailDAO \u4E3A\u8BA2\u5355\u8BE6\u60C5\u7EAA\u5F55</span>
<span class="token keyword">type</span> OrderDetailDAO <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">SaveOrderDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//DAOFactory DAO \u62BD\u8C61\u6A21\u5F0F\u5DE5\u5382\u63A5\u53E3</span>
<span class="token keyword">type</span> DAOFactory <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">CreateOrderMainDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderMainDAO
	<span class="token function">CreateOrderDetailDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderDetailDAO
<span class="token punctuation">}</span>

<span class="token comment">//RDBMainDAP \u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684OrderMainDAO\u5B9E\u73B0</span>
<span class="token keyword">type</span> RDBMainDAO <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//SaveOrderMain ...</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>RDBMainDAO<span class="token punctuation">)</span> <span class="token function">SaveOrderMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;rdb main save\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//RDBDetailDAO \u4E3A\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684OrderDetailDAO\u5B9E\u73B0</span>
<span class="token keyword">type</span> RDBDetailDAO <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// SaveOrderDetail ...</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>RDBDetailDAO<span class="token punctuation">)</span> <span class="token function">SaveOrderDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;rdb detail save\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//RDBDAOFactory DAO\u62BD\u8C61\u5DE5\u5382\u5B9E\u73B0</span>
<span class="token keyword">type</span> RDBDAOFactory <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>RDBDAOFactory<span class="token punctuation">)</span> <span class="token function">CreateOrderMainDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderMainDAO <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>RDBMainDAO<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>RDBDAOFactory<span class="token punctuation">)</span> <span class="token function">CreateOrderDetailDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderDetailDAO <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>RDBDetailDAO<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//XMLMainDAO XML\u5B58\u50A8</span>
<span class="token keyword">type</span> XMLMainDAO <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//SaveOrderMain ...</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>XMLMainDAO<span class="token punctuation">)</span> <span class="token function">SaveOrderMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;xml main save\\n&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//XMLDetailDAO XML\u5B58\u50A8</span>
<span class="token keyword">type</span> XMLDetailDAO <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// SaveOrderDetail ...</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>XMLDetailDAO<span class="token punctuation">)</span> <span class="token function">SaveOrderDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;xml detail save&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//XMLDAOFactory DAO\u62BD\u8C61\u5DE5\u5382\u5B9E\u73B0</span>
<span class="token keyword">type</span> XMLDAOFactory <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>XMLDAOFactory<span class="token punctuation">)</span> <span class="token function">CreateOrderMainDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderMainDAO <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>XMLMainDAO<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>XMLDAOFactory<span class="token punctuation">)</span> <span class="token function">CreateOrderDetailDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span> OrderDetailDAO <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>XMLDetailDAO<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p><img src="`+a+`" alt="image-20220505234248828"></p><h2 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a> \u5355\u5143\u6D4B\u8BD5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> abstractfactory

<span class="token keyword">func</span> <span class="token function">getMainAndDetail</span><span class="token punctuation">(</span>factory DAOFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	factory<span class="token punctuation">.</span><span class="token function">CreateOrderMainDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SaveOrderMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	factory<span class="token punctuation">.</span><span class="token function">CreateOrderDetailDAO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SaveOrderDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleRdbFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory DAOFactory
	factory <span class="token operator">=</span> <span class="token operator">&amp;</span>RDBDAOFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getMainAndDetail</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// rdb main save</span>
	<span class="token comment">// rdb detail save</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">ExampleXmlFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> factory DAOFactory
	factory <span class="token operator">=</span> <span class="token operator">&amp;</span>XMLDAOFactory<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">getMainAndDetail</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span>
	<span class="token comment">// Output:</span>
	<span class="token comment">// xml main save</span>
	<span class="token comment">// xml detail save</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u6D4B\u8BD5\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7ED3\u679C" aria-hidden="true">#</a> \u6D4B\u8BD5\u7ED3\u679C</h2>`,10);function e(c,o){return t}var r=n(p,[["render",e],["__file","abstract_factory.html.vue"]]);export{r as default};
