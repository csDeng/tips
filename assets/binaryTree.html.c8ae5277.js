import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/image-20220516000757927.43da886a.png",e="/assets/image-20220517000107288.aaf6dbe1.png";const p={},t=s('<h1 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h1><h2 id="_1-\u5DE6\u53F6\u5B50\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#_1-\u5DE6\u53F6\u5B50\u4E4B\u548C" aria-hidden="true">#</a> 1. \u5DE6\u53F6\u5B50\u4E4B\u548C</h2><details class="custom-container details"><blockquote><p>\u7ED9\u5B9A\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u8FD4\u56DE\u6240\u6709\u5DE6\u53F6\u5B50\u4E4B\u548C\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><p><img src="'+a+`" alt="image-20220516000757927"></p><p>\u8F93\u5165: root = [3,9,20,null,null,15,7] \u8F93\u51FA: 24 \u89E3\u91CA: \u5728\u8FD9\u4E2A\u4E8C\u53C9\u6811\u4E2D\uFF0C\u6709\u4E24\u4E2A\u5DE6\u53F6\u5B50\uFF0C\u5206\u522B\u662F 9 \u548C 15\uFF0C\u6240\u4EE5\u8FD4\u56DE 24 \u793A\u4F8B 2:</p><p>\u8F93\u5165: root = [1] \u8F93\u51FA: 0</p><p>\u63D0\u793A:</p><p>\u8282\u70B9\u6570\u5728 [1, 1000] \u8303\u56F4\u5185 -1000 &lt;= Node.val &lt;= 1000</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1Ahttps://leetcode.cn/problems/sum-of-left-leaves \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    left <span class="token operator">:=</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    right <span class="token operator">:=</span> <span class="token function">sumOfLeftLeaves</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
    mid <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> root<span class="token punctuation">.</span>Left <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Left <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Right <span class="token operator">==</span> <span class="token boolean">nil</span>  <span class="token punctuation">{</span>
        <span class="token comment">// \u53F6\u5B50</span>
        mid <span class="token operator">=</span> root<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Val
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> left <span class="token operator">+</span> right <span class="token operator">+</span> mid

<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details><h2 id="_2-\u7FFB\u8F6C\u4E8C\u53C9\u6811-e" tabindex="-1"><a class="header-anchor" href="#_2-\u7FFB\u8F6C\u4E8C\u53C9\u6811-e" aria-hidden="true">#</a> 2. \u7FFB\u8F6C\u4E8C\u53C9\u6811 E</h2><details class="custom-container details"><blockquote><p>\u7ED9\u4F60\u4E00\u68F5\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 root \uFF0C\u7FFB\u8F6C\u8FD9\u68F5\u4E8C\u53C9\u6811\uFF0C\u5E76\u8FD4\u56DE\u5176\u6839\u8282\u70B9\u3002</p><p><img src="`+e+`" alt="image-20220517000107288"></p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [4,2,7,1,3,6,9] \u8F93\u51FA\uFF1A[4,7,2,9,6,3,1] \u793A\u4F8B 2\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [2,1,3] \u8F93\u51FA\uFF1A[2,3,1] \u793A\u4F8B 3\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [] \u8F93\u51FA\uFF1A[]</p><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1Ahttps://leetcode.cn/problems/invert-binary-tree \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */</span>
<span class="token keyword">func</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token operator">*</span>TreeNode <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root <span class="token operator">*</span>TreeNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    reg <span class="token operator">:=</span> root<span class="token punctuation">.</span>Left
    root<span class="token punctuation">.</span>Left <span class="token operator">=</span> root<span class="token punctuation">.</span>Right
    root<span class="token punctuation">.</span>Right <span class="token operator">=</span> reg
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Left<span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>Right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details>`,5);function o(r,l){return t}var i=n(p,[["render",o],["__file","binaryTree.html.vue"]]);export{i as default};
