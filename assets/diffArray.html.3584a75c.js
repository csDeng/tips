import{_ as n,e as s}from"./app.2a7ffa2e.js";const a={},e=s(`<h1 id="\u5DEE\u5206\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5DEE\u5206\u6570\u7EC4" aria-hidden="true">#</a> \u5DEE\u5206\u6570\u7EC4</h1><h2 id="\u62FC\u8F66-m" tabindex="-1"><a class="header-anchor" href="#\u62FC\u8F66-m" aria-hidden="true">#</a> \u62FC\u8F66 M</h2><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u8F66\u4E0A\u6700\u521D\u6709 capacity \u4E2A\u7A7A\u5EA7\u4F4D\u3002\u8F66 \u53EA\u80FD \u5411\u4E00\u4E2A\u65B9\u5411\u884C\u9A76\uFF08\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u5141\u8BB8\u6389\u5934\u6216\u6539\u53D8\u65B9\u5411\uFF09

\u7ED9\u5B9A\u6574\u6570 capacity \u548C\u4E00\u4E2A\u6570\u7EC4 trips ,  trip<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>numPassengersi, fromi, toi<span class="token punctuation">]</span> \u8868\u793A\u7B2C i \u6B21\u65C5\u884C\u6709 numPassengersi \u4E58\u5BA2\uFF0C\u63A5\u4ED6\u4EEC\u548C\u653E\u4ED6\u4EEC\u7684\u4F4D\u7F6E\u5206\u522B\u662F fromi \u548C toi \u3002\u8FD9\u4E9B\u4F4D\u7F6E\u662F\u4ECE\u6C7D\u8F66\u7684\u521D\u59CB\u4F4D\u7F6E\u5411\u4E1C\u7684\u516C\u91CC\u6570\u3002

\u5F53\u4E14\u4EC5\u5F53\u4F60\u53EF\u4EE5\u5728\u6240\u6709\u7ED9\u5B9A\u7684\u884C\u7A0B\u4E2D\u63A5\u9001\u6240\u6709\u4E58\u5BA2\u65F6\uFF0C\u8FD4\u56DE true\uFF0C\u5426\u5219\u8BF7\u8FD4\u56DE false\u3002

 

\u793A\u4F8B <span class="token number">1</span>\uFF1A

\u8F93\u5165\uFF1Atrips <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2,1</span>,5<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,3</span>,7<span class="token punctuation">]</span><span class="token punctuation">]</span>, capacity <span class="token operator">=</span> <span class="token number">4</span>
\u8F93\u51FA\uFF1Afalse
\u793A\u4F8B <span class="token number">2</span>\uFF1A

\u8F93\u5165\uFF1Atrips <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2,1</span>,5<span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token number">3,3</span>,7<span class="token punctuation">]</span><span class="token punctuation">]</span>, capacity <span class="token operator">=</span> <span class="token number">5</span>
\u8F93\u51FA\uFF1Atrue
 

\u63D0\u793A\uFF1A

<span class="token number">1</span> <span class="token operator">&lt;=</span> trips.length <span class="token operator">&lt;=</span> <span class="token number">1000</span>
trips<span class="token punctuation">[</span>i<span class="token punctuation">]</span>.length <span class="token operator">==</span> <span class="token number">3</span>
<span class="token number">1</span> <span class="token operator">&lt;=</span> numPassengersi <span class="token operator">&lt;=</span> <span class="token number">100</span>
<span class="token number">0</span> <span class="token operator">&lt;=</span> fromi <span class="token operator">&lt;</span> toi <span class="token operator">&lt;=</span> <span class="token number">1000</span>
<span class="token number">1</span> <span class="token operator">&lt;=</span> capacity <span class="token operator">&lt;=</span> <span class="token number">105</span>

\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
\u94FE\u63A5\uFF1Ahttps://leetcode.cn/problems/car-pooling
\u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="csjerry-\u5DEE\u5206\u6570\u7EC4-\u524D\u7F00\u548C-go" tabindex="-1"><a class="header-anchor" href="#csjerry-\u5DEE\u5206\u6570\u7EC4-\u524D\u7F00\u548C-go" aria-hidden="true">#</a> <strong>CSJerry_\u5DEE\u5206\u6570\u7EC4_\u524D\u7F00\u548C_go</strong></h3><ul><li>\u601D\u8DEF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BA1\u7B97\u8DEF\u7A0B\u4E2D\u6BCF\u4E00\u6BB5\u7684\u4EBA\u6570
\u518D\u8BA1\u7B97\u524D\u7F00\u548C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var (
    people = 0
    from = 1
    to = 2
    maxLength = 1001
)




func carPooling(trips [][]int, capacity int) bool {
// \u5EFA\u7ACB\u5DEE\u5206\u6570\u7EC4
    diff := []int{}
    for i := 0; i &lt; maxLength; i++ {
        diff = append(diff, 0)
    }
    for _, trip := range trips {
        diff[trip[from]] += trip[people]
        diff[trip[to]] -= trip[people]
    }


    // \u8BA1\u7B97\u524D\u7F00\u548C
    var preSum int = 0
    for i := 0; i &lt; maxLength; i++ {
        preSum += diff[i]
        if preSum &gt; capacity {
            return false
        }
    }
    return true


}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></details>`,3);function p(r,l){return e}var c=n(a,[["render",p],["__file","diffArray.html.vue"]]);export{c as default};
