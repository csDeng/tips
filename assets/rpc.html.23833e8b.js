import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/1.9e802760.jpg",p="/assets/image-20220517222743818.4d9d34e9.png",t="/assets/2.4a929bc3.jpg";const e={},o=s('<h1 id="_1-rpc" tabindex="-1"><a class="header-anchor" href="#_1-rpc" aria-hidden="true">#</a> 1. RPC</h1><h3 id="_1-1-1-rpc\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-1-1-rpc\u7B80\u4ECB" aria-hidden="true">#</a> 1.1.1. RPC\u7B80\u4ECB</h3><ul><li>\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\uFF08Remote Procedure Call\uFF0CRPC\uFF09\u662F\u4E00\u4E2A\u8BA1\u7B97\u673A\u901A\u4FE1\u534F\u8BAE</li><li>\u8BE5\u534F\u8BAE\u5141\u8BB8\u8FD0\u884C\u4E8E\u4E00\u53F0\u8BA1\u7B97\u673A\u7684\u7A0B\u5E8F\u8C03\u7528\u53E6\u4E00\u53F0\u8BA1\u7B97\u673A\u7684\u5B50\u7A0B\u5E8F\uFF0C\u800C\u7A0B\u5E8F\u5458\u65E0\u9700\u989D\u5916\u5730\u4E3A\u8FD9\u4E2A\u4EA4\u4E92\u4F5C\u7528\u7F16\u7A0B</li><li>\u5982\u679C\u6D89\u53CA\u7684\u8F6F\u4EF6\u91C7\u7528\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u90A3\u4E48\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\u4EA6\u53EF\u79F0\u4F5C\u8FDC\u7A0B\u8C03\u7528\u6216\u8FDC\u7A0B\u65B9\u6CD5\u8C03\u7528</li></ul><h3 id="_1-1-2-\u6D41\u884Crpc\u6846\u67B6\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6D41\u884Crpc\u6846\u67B6\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> 1.1.2. \u6D41\u884CRPC\u6846\u67B6\u7684\u5BF9\u6BD4</h3><p><img src="'+a+`" alt="img"></p><h3 id="_1-1-3-golang\u4E2D\u5982\u4F55\u5B9E\u73B0rpc" tabindex="-1"><a class="header-anchor" href="#_1-1-3-golang\u4E2D\u5982\u4F55\u5B9E\u73B0rpc" aria-hidden="true">#</a> 1.1.3. golang\u4E2D\u5982\u4F55\u5B9E\u73B0RPC</h3><ul><li>golang\u4E2D\u5B9E\u73B0RPC\u975E\u5E38\u7B80\u5355\uFF0C\u5B98\u65B9\u63D0\u4F9B\u4E86\u5C01\u88C5\u597D\u7684\u5E93\uFF0C\u8FD8\u6709\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7684\u5E93</li><li>golang\u5B98\u65B9\u7684net/rpc\u5E93\u4F7F\u7528encoding/gob\u8FDB\u884C\u7F16\u89E3\u7801\uFF0C\u652F\u6301tcp\u548Chttp\u6570\u636E\u4F20\u8F93\u65B9\u5F0F\uFF0C\u7531\u4E8E\u5176\u4ED6\u8BED\u8A00\u4E0D\u652F\u6301gob\u7F16\u89E3\u7801\u65B9\u5F0F\uFF0C\u6240\u4EE5golang\u7684RPC\u53EA\u652F\u6301golang\u5F00\u53D1\u7684\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684\u4EA4\u4E92</li><li>\u5B98\u65B9\u8FD8\u63D0\u4F9B\u4E86net/rpc/jsonrpc\u5E93\u5B9E\u73B0RPC\u65B9\u6CD5\uFF0Cjsonrpc\u91C7\u7528JSON\u8FDB\u884C\u6570\u636E\u7F16\u89E3\u7801\uFF0C\u56E0\u800C\u652F\u6301\u8DE8\u8BED\u8A00\u8C03\u7528\uFF0C\u76EE\u524Djsonrpc\u5E93\u662F\u57FA\u4E8Etcp\u534F\u8BAE\u5B9E\u73B0\u7684\uFF0C\u6682\u4E0D\u652F\u6301http\u4F20\u8F93\u65B9\u5F0F</li><li>\u4F8B\u9898\uFF1Agolang\u5B9E\u73B0RPC\u7A0B\u5E8F\uFF0C\u5B9E\u73B0\u6C42\u77E9\u5F62\u9762\u79EF\u548C\u5468\u957F</li></ul><p><strong>\u670D\u52A1\u7AEF</strong></p><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Params <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Width<span class="token punctuation">,</span> Height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Rect <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// RPC\u670D\u52A1\u7AEF\u65B9\u6CD5\uFF0C\u6C42\u77E9\u5F62\u9762\u79EF</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span>p Params<span class="token punctuation">,</span> ret <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>ret <span class="token operator">=</span> p<span class="token punctuation">.</span>Height <span class="token operator">*</span> p<span class="token punctuation">.</span>Width
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;React.Area is called. Params is %v, ret is %v&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>ret<span class="token punctuation">)</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5468\u957F</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Perimeter</span><span class="token punctuation">(</span>p Params<span class="token punctuation">,</span> ret <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>ret <span class="token operator">=</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>Height <span class="token operator">+</span> p<span class="token punctuation">.</span>Width<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;React.Perimeter is called. Params is %v, ret is %v&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>ret<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	rect <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Rect<span class="token punctuation">)</span>

	<span class="token comment">// \u6CE8\u518C\u4E00\u4E2Arect\u670D\u52A1</span>
	rpc<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>

	<span class="token comment">// \u670D\u52A1\u5904\u7406\u7ED1\u5B9A\u5230http\u534F\u8BAE\u4E0A</span>
	rpc<span class="token punctuation">.</span><span class="token function">HandleHTTP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></details><p><strong>\u5BA2\u6237\u7AEF</strong></p><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u4F20\u7684\u53C2\u6570</span>
<span class="token keyword">type</span> Params <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Width<span class="token punctuation">,</span> Height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E3B\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u8FDE\u63A5\u8FDC\u7A0Brpc\u670D\u52A1</span>
	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> rpc<span class="token punctuation">.</span><span class="token function">DialHTTP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 2.\u8C03\u7528\u65B9\u6CD5</span>
	<span class="token comment">// \u9762\u79EF</span>
	ret <span class="token operator">:=</span> <span class="token number">0</span>
	err2 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Rect.Area&quot;</span><span class="token punctuation">,</span> Params<span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ret<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9762\u79EF\uFF1A&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
	<span class="token comment">// \u5468\u957F</span>
	err3 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Rect.Perimeter&quot;</span><span class="token punctuation">,</span> Params<span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ret<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err3 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5468\u957F\uFF1A&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></details><p>\u8F93\u51FA</p><p><img src="`+p+`" alt="image-20220517222743818"></p><ul><li>golang\u5199RPC\u7A0B\u5E8F\uFF0C\u5FC5\u987B\u7B26\u54084\u4E2A\u57FA\u672C\u6761\u4EF6\uFF0C\u4E0D\u7136RPC\u7528\u4E0D\u4E86 <ul><li>\u7ED3\u6784\u4F53\u5B57\u6BB5\u9996\u5B57\u6BCD\u8981\u5927\u5199\uFF0C\u53EF\u4EE5\u522B\u4EBA\u8C03\u7528</li><li>\u51FD\u6570\u540D\u5FC5\u987B\u9996\u5B57\u6BCD\u5927\u5199</li><li>\u51FD\u6570\u7B2C\u4E00\u53C2\u6570\u662F\u63A5\u6536\u53C2\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u53C2\u6570\uFF0C\u5FC5\u987B\u662F\u6307\u9488\u7C7B\u578B</li><li>\u51FD\u6570\u8FD8\u5FC5\u987B\u6709\u4E00\u4E2A\u8FD4\u56DE\u503Cerror</li></ul></li><li>\u7EC3\u4E60\uFF1A\u6A21\u4EFF\u524D\u9762\u4F8B\u9898\uFF0C\u81EA\u5DF1\u5B9E\u73B0RPC\u7A0B\u5E8F\uFF0C\u670D\u52A1\u7AEF\u63A5\u65362\u4E2A\u53C2\u6570\uFF0C\u53EF\u4EE5\u505A\u4E58\u6CD5\u8FD0\u7B97\uFF0C\u4E5F\u53EF\u4EE5\u505A\u5546\u548C\u4F59\u6570\u7684\u8FD0\u7B97\uFF0C\u5BA2\u6237\u7AEF\u8FDB\u884C\u4F20\u53C2\u548C\u8BBF\u95EE\uFF0C\u5F97\u5230\u7ED3\u679C\u5982\u4E0B\uFF1A</li></ul><p>\u670D\u52A1\u7AEF\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;errors&quot;</span>
   <span class="token string">&quot;log&quot;</span>
   <span class="token string">&quot;net/http&quot;</span>
   <span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u7ED3\u6784\u4F53\uFF0C\u7528\u4E8E\u6CE8\u518C\u7684</span>
<span class="token keyword">type</span> Arith <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u58F0\u660E\u53C2\u6570\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> ArithRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   A<span class="token punctuation">,</span> B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u7ED3\u679C</span>
<span class="token keyword">type</span> ArithResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u4E58\u79EF</span>
   Pro <span class="token builtin">int</span>
   <span class="token comment">// \u5546</span>
   Quo <span class="token builtin">int</span>
   <span class="token comment">// \u4F59\u6570</span>
   Rem <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E58\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Arith<span class="token punctuation">)</span> <span class="token function">Multiply</span><span class="token punctuation">(</span>req ArithRequest<span class="token punctuation">,</span> res <span class="token operator">*</span>ArithResponse<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
   res<span class="token punctuation">.</span>Pro <span class="token operator">=</span> req<span class="token punctuation">.</span>A <span class="token operator">*</span> req<span class="token punctuation">.</span>B
   <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5546\u548C\u4F59\u6570</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>this <span class="token operator">*</span>Arith<span class="token punctuation">)</span> <span class="token function">Divide</span><span class="token punctuation">(</span>req ArithRequest<span class="token punctuation">,</span> res <span class="token operator">*</span>ArithResponse<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> req<span class="token punctuation">.</span>B <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;\u9664\u6570\u4E0D\u80FD\u4E3A0&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// \u9664</span>
   res<span class="token punctuation">.</span>Quo <span class="token operator">=</span> req<span class="token punctuation">.</span>A <span class="token operator">/</span> req<span class="token punctuation">.</span>B
   <span class="token comment">// \u53D6\u6A21</span>
   res<span class="token punctuation">.</span>Rem <span class="token operator">=</span> req<span class="token punctuation">.</span>A <span class="token operator">%</span> req<span class="token punctuation">.</span>B
   <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E3B\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 1.\u6CE8\u518C\u670D\u52A1</span>
   rect <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Arith<span class="token punctuation">)</span>
   <span class="token comment">// \u6CE8\u518C\u4E00\u4E2Arect\u7684\u670D\u52A1</span>
   rpc<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span>
   <span class="token comment">// 2.\u670D\u52A1\u5904\u7406\u7ED1\u5B9A\u5230http\u534F\u8BAE\u4E0A</span>
   rpc<span class="token punctuation">.</span><span class="token function">HandleHTTP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token comment">// 3.\u76D1\u542C\u670D\u52A1</span>
   err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><p>\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
   <span class="token string">&quot;log&quot;</span>
   <span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> ArithRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   A<span class="token punctuation">,</span> B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u7ED3\u679C</span>
<span class="token keyword">type</span> ArithResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u4E58\u79EF</span>
   Pro <span class="token builtin">int</span>
   <span class="token comment">// \u5546</span>
   Quo <span class="token builtin">int</span>
   <span class="token comment">// \u4F59\u6570</span>
   Rem <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> rpc<span class="token punctuation">.</span><span class="token function">DialHTTP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   req <span class="token operator">:=</span> ArithRequest<span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
   <span class="token keyword">var</span> res ArithResponse
   err2 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Arith.Multiply&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err2<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d * %d = %d\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>A<span class="token punctuation">,</span> req<span class="token punctuation">.</span>B<span class="token punctuation">,</span> res<span class="token punctuation">.</span>Pro<span class="token punctuation">)</span>
   err3 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Arith.Divide&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span>
   <span class="token keyword">if</span> err3 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d / %d \u5546 %d\uFF0C\u4F59\u6570 = %d\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>A<span class="token punctuation">,</span> req<span class="token punctuation">.</span>B<span class="token punctuation">,</span> res<span class="token punctuation">.</span>Quo<span class="token punctuation">,</span> res<span class="token punctuation">.</span>Rem<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><blockquote><blockquote><blockquote><p>\u53E6\u5916\uFF0Cnet/rpc/jsonrpc\u5E93\u901A\u8FC7json\u683C\u5F0F\u7F16\u89E3\u7801\uFF0C\u652F\u6301\u8DE8\u8BED\u8A00\u8C03\u7528</p></blockquote></blockquote></blockquote><p>\u670D\u52A1\u7AEF\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;net/rpc&quot;</span>
    <span class="token string">&quot;net/rpc/jsonrpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Params <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Width<span class="token punctuation">,</span> Height <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> Rect <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Area</span><span class="token punctuation">(</span>p Params<span class="token punctuation">,</span> ret <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>ret <span class="token operator">=</span> p<span class="token punctuation">.</span>Width <span class="token operator">*</span> p<span class="token punctuation">.</span>Height
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Rect<span class="token punctuation">)</span> <span class="token function">Perimeter</span><span class="token punctuation">(</span>p Params<span class="token punctuation">,</span> ret <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>ret <span class="token operator">=</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>Height <span class="token operator">+</span> p<span class="token punctuation">.</span>Width<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rpc<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token function">new</span><span class="token punctuation">(</span>Rect<span class="token punctuation">)</span><span class="token punctuation">)</span>
    lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> lis<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;new client&quot;</span><span class="token punctuation">)</span>
            jsonrpc<span class="token punctuation">.</span><span class="token function">ServeConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u5BA2\u6237\u7AEF\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;net/rpc/jsonrpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Params <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Width<span class="token punctuation">,</span> Height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> jsonrpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    ret <span class="token operator">:=</span> <span class="token number">0</span>
    err2 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Rect.Area&quot;</span><span class="token punctuation">,</span> Params<span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ret<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span>err2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9762\u79EF\uFF1A&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
    err3 <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;Rect.Perimeter&quot;</span><span class="token punctuation">,</span> Params<span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ret<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err3 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Panicln</span><span class="token punctuation">(</span>err3<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5468\u957F\uFF1A&quot;</span><span class="token punctuation">,</span> ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="_1-1-4-rpc\u8C03\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-4-rpc\u8C03\u7528\u6D41\u7A0B" aria-hidden="true">#</a> 1.1.4. RPC\u8C03\u7528\u6D41\u7A0B</h3><ul><li>\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u6570\u636E\u4EA4\u4E92\u4E00\u822C\u662F\u5BF9\u5185 RPC\uFF0C\u5BF9\u5916 REST</li><li>\u5C06\u4E1A\u52A1\u6309\u529F\u80FD\u6A21\u5757\u62C6\u5206\u5230\u5404\u4E2A\u5FAE\u670D\u52A1\uFF0C\u5177\u6709\u63D0\u9AD8\u9879\u76EE\u534F\u4F5C\u6548\u7387\u3001\u964D\u4F4E\u6A21\u5757\u8026\u5408\u5EA6\u3001\u63D0\u9AD8\u7CFB\u7EDF\u53EF\u7528\u6027\u7B49\u4F18\u70B9\uFF0C\u4F46\u662F\u5F00\u53D1\u95E8\u69DB\u6BD4\u8F83\u9AD8\uFF0C\u6BD4\u5982 RPC \u6846\u67B6\u7684\u4F7F\u7528\u3001\u540E\u671F\u7684\u670D\u52A1\u76D1\u63A7\u7B49\u5DE5\u4F5C</li><li>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u5C06\u529F\u80FD\u4EE3\u7801\u5728\u672C\u5730\u76F4\u63A5\u8C03\u7528\uFF0C\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u8FD9\u4E2A\u51FD\u6570\u4F5C\u4E3A\u5355\u72EC\u7684\u670D\u52A1\u8FD0\u884C\uFF0C\u5BA2\u6237\u7AEF\u901A\u8FC7\u7F51\u7EDC\u8C03\u7528</li></ul><h3 id="_1-1-5-\u7F51\u7EDC\u4F20\u8F93\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u7F51\u7EDC\u4F20\u8F93\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> 1.1.5. \u7F51\u7EDC\u4F20\u8F93\u6570\u636E\u683C\u5F0F</h3><ul><li>\u4E24\u7AEF\u8981\u7EA6\u5B9A\u597D\u6570\u636E\u5305\u7684\u683C\u5F0F</li><li>\u6210\u719F\u7684RPC\u6846\u67B6\u4F1A\u6709\u81EA\u5B9A\u4E49\u4F20\u8F93\u534F\u8BAE\uFF0C\u8FD9\u91CC\u7F51\u7EDC\u4F20\u8F93\u683C\u5F0F\u5B9A\u4E49\u5982\u4E0B\uFF0C\u524D\u9762\u662F\u56FA\u5B9A\u957F\u5EA6\u6D88\u606F\u5934\uFF0C\u540E\u9762\u662F\u53D8\u957F\u6D88\u606F\u4F53</li></ul><p><img src="`+t+`" alt="img"></p><ul><li>\u81EA\u5DF1\u5B9A\u4E49\u6570\u636E\u683C\u5F0F\u7684\u8BFB\u5199</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/binary&quot;</span>
    <span class="token string">&quot;io&quot;</span>
    <span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u6D4B\u8BD5\u7F51\u7EDC\u4E2D\u8BFB\u5199\u6570\u636E\u7684\u60C5\u51B5</span>

<span class="token comment">// \u4F1A\u8BDD\u8FDE\u63A5\u7684\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Session <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn net<span class="token punctuation">.</span>Conn
<span class="token punctuation">}</span>

<span class="token comment">// \u6784\u9020\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">NewSession</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token operator">*</span>Session <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Session<span class="token punctuation">{</span>conn<span class="token punctuation">:</span> conn<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5411\u8FDE\u63A5\u4E2D\u53BB\u5199\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Session<span class="token punctuation">)</span> <span class="token function">Write</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u5199\u6570\u636E\u7684\u683C\u5F0F</span>
    <span class="token comment">// 4\u5B57\u8282\u5934\u90E8 + \u53EF\u53D8\u4F53\u7684\u957F\u5EA6</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token operator">+</span><span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5199\u5165\u5934\u90E8\uFF0C\u8BB0\u5F55\u6570\u636E\u957F\u5EA6</span>
    binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">.</span><span class="token function">PutUint32</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">uint32</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5C06\u6574\u4E2A\u6570\u636E\uFF0C\u653E\u52304\u540E\u8FB9</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span>conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4ECE\u8FDE\u63A5\u8BFB\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Session<span class="token punctuation">)</span> <span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BFB\u53D6\u5934\u90E8\u8BB0\u5F55\u7684\u957F\u5EA6</span>
    header <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6309\u957F\u5EA6\u8BFB\u53D6\u6D88\u606F</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> io<span class="token punctuation">.</span><span class="token function">ReadFull</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> header<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8BFB\u53D6\u6570\u636E</span>
    dataLen <span class="token operator">:=</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">.</span><span class="token function">Uint32</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span>
    data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> dataLen<span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">ReadFull</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>conn<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p><strong>\u6D4B\u8BD5\u7C7B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;sync&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestSession_ReadWriter</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u5730\u5740</span>
    addr <span class="token operator">:=</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span>
    my_data <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
    <span class="token comment">// \u7B49\u5F85\u7EC4\u5B9A\u4E49</span>
    wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5199\u6570\u636E\u7684\u534F\u7A0B</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        conn<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> lis<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        s <span class="token operator">:=</span> Session<span class="token punctuation">{</span>conn<span class="token punctuation">:</span> conn<span class="token punctuation">}</span>
        err <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>my_data<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// \u8BFB\u6570\u636E\u7684\u534F\u7A0B</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        s <span class="token operator">:=</span> Session<span class="token punctuation">{</span>conn<span class="token punctuation">:</span> conn<span class="token punctuation">}</span>
        data<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6700\u540E\u4E00\u5C42\u6821\u9A8C</span>
        <span class="token keyword">if</span> <span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">!=</span> my_data <span class="token punctuation">{</span>
            t<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p><strong>\u7F16\u7801\u89E3\u7801</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;bytes&quot;</span>
    <span class="token string">&quot;encoding/gob&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49RPC\u4EA4\u4E92\u7684\u6570\u636E\u7ED3\u6784</span>
<span class="token keyword">type</span> RPCData <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8BBF\u95EE\u7684\u51FD\u6570</span>
    Name <span class="token builtin">string</span>
    <span class="token comment">// \u8BBF\u95EE\u65F6\u7684\u53C2\u6570</span>
    Args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F16\u7801</span>
<span class="token keyword">func</span> <span class="token function">encode</span><span class="token punctuation">(</span>data RPCData<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5F97\u5230\u5B57\u8282\u6570\u7EC4\u7684\u7F16\u7801\u5668</span>
    <span class="token keyword">var</span> buf bytes<span class="token punctuation">.</span>Buffer
    bufEnc <span class="token operator">:=</span> gob<span class="token punctuation">.</span><span class="token function">NewEncoder</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>buf<span class="token punctuation">)</span>
    <span class="token comment">// \u7F16\u7801\u5668\u5BF9\u6570\u636E\u7F16\u7801</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> bufEnc<span class="token punctuation">.</span><span class="token function">Encode</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> buf<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u89E3\u7801</span>
<span class="token keyword">func</span> <span class="token function">decode</span><span class="token punctuation">(</span>b <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>RPCData<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token comment">// \u5F97\u5230\u5B57\u8282\u6570\u7EC4\u89E3\u7801\u5668</span>
    bufDec <span class="token operator">:=</span> gob<span class="token punctuation">.</span><span class="token function">NewDecoder</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
    <span class="token comment">// \u89E3\u7801\u5668\u5BF9\u6570\u636E\u8282\u7801</span>
    <span class="token keyword">var</span> data RPCData
    <span class="token keyword">if</span> err <span class="token operator">:=</span> bufDec<span class="token punctuation">.</span><span class="token function">Decode</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">,</span> err
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></details><h3 id="_1-1-6-\u5B9E\u73B0rpc\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-1-6-\u5B9E\u73B0rpc\u670D\u52A1\u7AEF" aria-hidden="true">#</a> 1.1.6. \u5B9E\u73B0RPC\u670D\u52A1\u7AEF</h3><ul><li>\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684\u6570\u636E\u9700\u8981\u5305\u62EC\u4EC0\u4E48\uFF1F <ul><li>\u8C03\u7528\u7684\u51FD\u6570\u540D\u3001\u53C2\u6570\u5217\u8868\uFF0C\u8FD8\u6709\u4E00\u4E2A\u8FD4\u56DE\u503Cerror\u7C7B\u578B</li></ul></li><li>\u670D\u52A1\u7AEF\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898\u662F\u4EC0\u4E48\uFF1F <ul><li>Map\u7EF4\u62A4\u5BA2\u6237\u7AEF\u4F20\u6765\u8C03\u7528\u51FD\u6570\uFF0C\u670D\u52A1\u7AEF\u77E5\u9053\u53BB\u8C03\u8C01</li></ul></li><li>\u670D\u52A1\u7AEF\u7684\u6838\u5FC3\u529F\u80FD\u6709\u54EA\u4E9B\uFF1F <ul><li>\u7EF4\u62A4\u51FD\u6570map</li><li>\u5BA2\u6237\u7AEF\u4F20\u6765\u7684\u4E1C\u897F\u8FDB\u884C\u89E3\u6790</li><li>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u6253\u5305\uFF0C\u4F20\u7ED9\u5BA2\u6237\u7AEF</li></ul></li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u58F0\u660E\u670D\u52A1\u7AEF</span>
<span class="token keyword">type</span> Server <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5730\u5740</span>
    addr <span class="token builtin">string</span>
    <span class="token comment">// map \u7528\u4E8E\u7EF4\u62A4\u5173\u7CFB\u7684</span>
    funcs <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value
<span class="token punctuation">}</span>

<span class="token comment">// \u6784\u9020\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">NewServer</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Server <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Server<span class="token punctuation">{</span>addr<span class="token punctuation">:</span> addr<span class="token punctuation">,</span> funcs<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u670D\u52A1\u7AEF\u9700\u8981\u4E00\u4E2A\u6CE8\u518CRegister</span>
<span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\u51FD\u6570\u540D\uFF0C\u7B2C\u4E8C\u4E2A\u4F20\u5165\u771F\u6B63\u7684\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span>rpcName <span class="token builtin">string</span><span class="token punctuation">,</span> f <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7EF4\u62A4\u4E00\u4E2Amap</span>
    <span class="token comment">// \u82E5map\u5DF2\u7ECF\u6709\u952E\u4E86</span>
    <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> s<span class="token punctuation">.</span>funcs<span class="token punctuation">[</span>rpcName<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u82E5map\u4E2D\u6CA1\u503C\uFF0C\u5219\u5C06\u6620\u5C04\u52A0\u5165map\uFF0C\u7528\u4E8E\u8C03\u7528</span>
    fVal <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    s<span class="token punctuation">.</span>funcs<span class="token punctuation">[</span>rpcName<span class="token punctuation">]</span> <span class="token operator">=</span> fVal
<span class="token punctuation">}</span>

<span class="token comment">// \u670D\u52A1\u7AEF\u7B49\u5F85\u8C03\u7528\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>Server<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76D1\u542C</span>
    lis<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>addr<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u76D1\u542C %s err :%v&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>addr<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u670D\u52A1\u7AEF\u5FAA\u73AF\u7B49\u5F85\u8C03\u7528</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> lis<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        serSession <span class="token operator">:=</span> <span class="token function">NewSession</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
        <span class="token comment">// \u4F7F\u7528RPC\u65B9\u5F0F\u8BFB\u53D6\u6570\u636E</span>
        b<span class="token punctuation">,</span> err <span class="token operator">:=</span> serSession<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6570\u636E\u89E3\u7801</span>
        rpcData<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">decode</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6839\u636E\u8BFB\u5230\u7684name\uFF0C\u5F97\u5230\u8981\u8C03\u7528\u7684\u51FD\u6570</span>
        f<span class="token punctuation">,</span> ok <span class="token operator">:=</span> s<span class="token punctuation">.</span>funcs<span class="token punctuation">[</span>rpcData<span class="token punctuation">.</span>Name<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FD\u6570 %s \u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">,</span> rpcData<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u904D\u5386\u89E3\u6790\u5BA2\u6237\u7AEF\u4F20\u6765\u7684\u53C2\u6570,\u653E\u5207\u7247\u91CC</span>
        inArgs <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>rpcData<span class="token punctuation">.</span>Args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> rpcData<span class="token punctuation">.</span>Args <span class="token punctuation">{</span>
            inArgs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>inArgs<span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u53CD\u5C04\u8C03\u7528\u65B9\u6CD5</span>
        <span class="token comment">// \u8FD4\u56DEValue\u7C7B\u578B\uFF0C\u7528\u4E8E\u7ED9\u5BA2\u6237\u7AEF\u4F20\u9012\u8FD4\u56DE\u7ED3\u679C,out\u662F\u6240\u6709\u7684\u8FD4\u56DE\u7ED3\u679C</span>
        out <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span>inArgs<span class="token punctuation">)</span>
        <span class="token comment">// \u904D\u5386out \uFF0C\u7528\u4E8E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5B58\u5230\u4E00\u4E2A\u5207\u7247\u91CC</span>
        outArgs <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> o <span class="token operator">:=</span> <span class="token keyword">range</span> out <span class="token punctuation">{</span>
            outArgs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>outArgs<span class="token punctuation">,</span> o<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u6570\u636E\u7F16\u7801\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</span>
        respRPCData <span class="token operator">:=</span> RPCData<span class="token punctuation">{</span>rpcData<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> outArgs<span class="token punctuation">}</span>
        bytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">encode</span><span class="token punctuation">(</span>respRPCData<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C06\u670D\u52A1\u7AEF\u7F16\u7801\u540E\u7684\u6570\u636E\uFF0C\u5199\u51FA\u5230\u5BA2\u6237\u7AEF</span>
        err <span class="token operator">=</span> serSession<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div></details><h3 id="_1-1-7-\u5B9E\u73B0rpc\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#_1-1-7-\u5B9E\u73B0rpc\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> 1.1.7. \u5B9E\u73B0RPC\u5BA2\u6237\u7AEF</h3><ul><li>\u5BA2\u6237\u7AEF\u53EA\u6709\u51FD\u6570\u539F\u578B\uFF0C\u4F7F\u7528reflect.MakeFunc() \u53EF\u4EE5\u5B8C\u6210\u539F\u578B\u5230\u51FD\u6570\u7684\u8C03\u7528</li><li>reflect.MakeFunc()\u662FClient\u4ECE\u51FD\u6570\u539F\u578B\u5230\u7F51\u7EDC\u8C03\u7528\u7684\u5173\u952E</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;reflect&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u58F0\u660E\u670D\u52A1\u7AEF</span>
<span class="token keyword">type</span> Client <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    conn net<span class="token punctuation">.</span>Conn
<span class="token punctuation">}</span>

<span class="token comment">// \u6784\u9020\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">NewClient</span><span class="token punctuation">(</span>conn net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token operator">*</span>Client <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Client<span class="token punctuation">{</span>conn<span class="token punctuation">:</span> conn<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u901A\u7528\u7684RPC\u5BA2\u6237\u7AEF</span>
<span class="token comment">// \u4F20\u5165\u8BBF\u95EE\u7684\u51FD\u6570\u540D</span>
<span class="token comment">// fPtr\u6307\u5411\u7684\u662F\u51FD\u6570\u539F\u578B</span>
<span class="token comment">//var select fun xx(User)</span>
<span class="token comment">//cli.callRPC(&quot;selectUser&quot;,&amp;select)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Client<span class="token punctuation">)</span> <span class="token function">callRPC</span><span class="token punctuation">(</span>rpcName <span class="token builtin">string</span><span class="token punctuation">,</span> fPtr <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u901A\u8FC7\u53CD\u5C04\uFF0C\u83B7\u53D6fPtr\u672A\u521D\u59CB\u5316\u7684\u51FD\u6570\u539F\u578B</span>
    fn <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>fPtr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u9700\u8981\u53E6\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F5C\u7528\u662F\u5BF9\u7B2C\u4E00\u4E2A\u51FD\u6570\u53C2\u6570\u64CD\u4F5C</span>
    f <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406\u53C2\u6570</span>
        inArgs <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
            inArgs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>inArgs<span class="token punctuation">,</span> arg<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u8FDE\u63A5</span>
        cliSession <span class="token operator">:=</span> <span class="token function">NewSession</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>conn<span class="token punctuation">)</span>
        <span class="token comment">// \u7F16\u7801\u6570\u636E</span>
        reqRPC <span class="token operator">:=</span> RPCData<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> rpcName<span class="token punctuation">,</span> Args<span class="token punctuation">:</span> inArgs<span class="token punctuation">}</span>
        b<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">encode</span><span class="token punctuation">(</span>reqRPC<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5199\u6570\u636E</span>
        err <span class="token operator">=</span> cliSession<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u670D\u52A1\u7AEF\u53D1\u8FC7\u6765\u8FD4\u56DE\u503C\uFF0C\u6B64\u65F6\u5E94\u8BE5\u8BFB\u53D6\u548C\u89E3\u6790</span>
        respBytes<span class="token punctuation">,</span> err <span class="token operator">:=</span> cliSession<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u89E3\u7801</span>
        respRPC<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">decode</span><span class="token punctuation">(</span>respBytes<span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5904\u7406\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u6570\u636E</span>
        outArgs <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>respRPC<span class="token punctuation">.</span>Args<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> respRPC<span class="token punctuation">.</span>Args <span class="token punctuation">{</span>
            <span class="token comment">// \u5FC5\u987B\u8FDB\u884Cnil\u8F6C\u6362</span>
            <span class="token keyword">if</span> arg <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token comment">// reflect.Zero()\u4F1A\u8FD4\u56DE\u7C7B\u578B\u7684\u96F6\u503C\u7684value</span>
                <span class="token comment">// .out()\u4F1A\u8FD4\u56DE\u51FD\u6570\u8F93\u51FA\u7684\u53C2\u6570\u7C7B\u578B</span>
                outArgs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>outArgs<span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">Zero</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Out</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">continue</span>
            <span class="token punctuation">}</span>
            outArgs <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>outArgs<span class="token punctuation">,</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> outArgs
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5B8C\u6210\u539F\u578B\u5230\u51FD\u6570\u8C03\u7528\u7684\u5185\u90E8\u8F6C\u6362</span>
    <span class="token comment">// \u53C2\u65701\u662Freflect.Type</span>
    <span class="token comment">// \u53C2\u65702 f\u662F\u51FD\u6570\u7C7B\u578B\uFF0C\u662F\u5BF9\u4E8E\u53C2\u65701 fn\u51FD\u6570\u7684\u64CD\u4F5C</span>
    <span class="token comment">// fn\u662F\u5B9A\u4E49\uFF0Cf\u662F\u5177\u4F53\u64CD\u4F5C</span>
    v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">MakeFunc</span><span class="token punctuation">(</span>fn<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
    <span class="token comment">// \u4E3A\u51FD\u6570fPtr\u8D4B\u503C\uFF0C\u8FC7\u7A0B</span>
    fn<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div></details><h3 id="_1-1-8-\u5B9E\u73B0rpc\u901A\u4FE1\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_1-1-8-\u5B9E\u73B0rpc\u901A\u4FE1\u6D4B\u8BD5" aria-hidden="true">#</a> 1.1.8. \u5B9E\u73B0RPC\u901A\u4FE1\u6D4B\u8BD5</h3><ul><li>\u7ED9\u670D\u52A1\u7AEF\u6CE8\u518C\u4E00\u4E2A\u67E5\u8BE2\u7528\u6237\u7684\u65B9\u6CD5\uFF0C\u5BA2\u6237\u7AEF\u4F7F\u7528RPC\u65B9\u5F0F\u8C03\u7528</li></ul><details class="custom-container details"><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> rpc

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/gob&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net&quot;</span>
    <span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u7ED9\u670D\u52A1\u7AEF\u6CE8\u518C\u4E00\u4E2A\u67E5\u8BE2\u7528\u6237\u7684\u65B9\u6CD5\uFF0C\u5BA2\u6237\u7AEF\u4F7F\u7528RPC\u65B9\u5F0F\u8C03\u7528</span>

<span class="token comment">// \u5B9A\u4E49\u7528\u6237\u5BF9\u8C61</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
    Age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7528\u4E8E\u6D4B\u8BD5\u7528\u6237\u67E5\u8BE2\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">queryUser</span><span class="token punctuation">(</span>uid <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    user <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>User<span class="token punctuation">)</span>
    <span class="token comment">// \u5047\u6570\u636E</span>
    user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> User<span class="token punctuation">{</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
    user<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> User<span class="token punctuation">{</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">}</span>
    user<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> User<span class="token punctuation">{</span><span class="token string">&quot;ww&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span>
    <span class="token comment">// \u6A21\u62DF\u67E5\u8BE2\u7528\u6237</span>
    <span class="token keyword">if</span> u<span class="token punctuation">,</span> ok <span class="token operator">:=</span> user<span class="token punctuation">[</span>uid<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
        <span class="token keyword">return</span> u<span class="token punctuation">,</span> <span class="token boolean">nil</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;%d err&quot;</span><span class="token punctuation">,</span> uid<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestRPC</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7F16\u7801\u4E2D\u6709\u4E00\u4E2A\u5B57\u6BB5\u662Finterface{}\u65F6\uFF0C\u8981\u6CE8\u518C\u4E00\u4E0B</span>
    gob<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    addr <span class="token operator">:=</span> <span class="token string">&quot;127.0.0.1:8000&quot;</span>
    <span class="token comment">// \u521B\u5EFA\u670D\u52A1\u7AEF</span>
    srv <span class="token operator">:=</span> <span class="token function">NewServer</span><span class="token punctuation">(</span>addr<span class="token punctuation">)</span>
    <span class="token comment">// \u5C06\u670D\u52A1\u7AEF\u65B9\u6CD5\uFF0C\u6CE8\u518C\u4E00\u4E0B</span>
    srv<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;queryUser&quot;</span><span class="token punctuation">,</span> queryUser<span class="token punctuation">)</span>
    <span class="token comment">// \u670D\u52A1\u7AEF\u7B49\u5F85\u8C03\u7528</span>
    <span class="token keyword">go</span> srv<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5BA2\u6237\u7AEF\u83B7\u53D6\u8FDE\u63A5</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u521B\u5EFA\u5BA2\u6237\u7AEF\u5BF9\u8C61</span>
    cli <span class="token operator">:=</span> <span class="token function">NewClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token comment">// \u9700\u8981\u58F0\u660E\u51FD\u6570\u539F\u578B</span>
    <span class="token keyword">var</span> query <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
    cli<span class="token punctuation">.</span><span class="token function">callRPC</span><span class="token punctuation">(</span><span class="token string">&quot;queryUser&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>query<span class="token punctuation">)</span>
    <span class="token comment">// \u5F97\u5230\u67E5\u8BE2\u7ED3\u679C</span>
    u<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;err&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div></details>`,39);function c(l,u){return o}var i=n(e,[["render",c],["__file","rpc.html.vue"]]);export{i as default};
