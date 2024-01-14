import{_ as e,e as a}from"./app.2a7ffa2e.js";var i="/assets/image-20220402111606279.b66daf3d.png",n="/assets/diff_pkg_2022-04-05_02-16-08.8555fc63.png",c="/assets/image-20220402111013182.95143902.png",o="/assets/image-20220402110855357.18206bc0.png",d="/assets/no_res_2022-04-05_02-24-45.57916914.png";const s={},t=a('<h1 id="init\u51FD\u6570\u4E0Emain\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#init\u51FD\u6570\u4E0Emain\u51FD\u6570" aria-hidden="true">#</a> init\u51FD\u6570\u4E0Emain\u51FD\u6570</h1><h2 id="init\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#init\u51FD\u6570" aria-hidden="true">#</a> init\u51FD\u6570</h2><p><code>go</code>\u8BED\u8A00\u4E2D<code>init</code>\u51FD\u6570\u7528\u4E8E\u5305<code>(package)</code>\u7684\u521D\u59CB\u5316\uFF0C\u8BE5\u51FD\u6570\u662F<code>go</code>\u8BED\u8A00\u7684\u4E00\u4E2A\u91CD\u8981\u7279\u6027\u3002</p><p>\u6709\u4E0B\u9762\u7684\u7279\u5F81\uFF1A</p><ul><li><p><code>init</code>\u51FD\u6570\u662F\u7528\u4E8E\u7A0B\u5E8F\u6267\u884C\u524D\u505A\u5305\u7684\u521D\u59CB\u5316\u7684\u51FD\u6570\uFF0C\u6BD4\u5982\u521D\u59CB\u5316\u5305\u91CC\u7684\u53D8\u91CF\u7B49</p></li><li><p>\u6BCF\u4E2A\u5305\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A<code>init</code>\u51FD\u6570</p></li><li><p>\u5305\u7684\u6BCF\u4E2A\u6E90\u6587\u4EF6\u4E5F\u53EF\u4EE5\u62E5\u6709\u591A\u4E2A<code>init</code>\u51FD\u6570</p></li><li><p>\u540C\u4E00\u4E2A\u5305\u4E2D\u591A\u4E2A<code>init</code>\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F<code>go</code>\u8BED\u8A00\u6CA1\u6709\u660E\u786E\u7684\u5B9A\u4E49(\u8BF4\u660E)</p></li></ul><blockquote><p>\u7ECF\u6D4B\u8BD5\uFF0C\u540C\u4E00\u4E2A\u5305\u5185\u7684<code>init</code>\u51FD\u6570\u4F1A\u88AB\u6309\u987A\u5E8F\u8C03\u7528\uFF01\uFF01\uFF01</p><details class="custom-container details"><summary>\u6D4B\u8BD5\u4EE3\u7801</summary><p><img src="'+i+'" alt="image-20220402111606279"></p></details></blockquote><ul><li>\u4E0D\u540C\u5305\u7684<code>init</code>\u51FD\u6570\u6309\u7167\u5305\u5BFC\u5165\u7684\u4F9D\u8D56\u5173\u7CFB\u51B3\u5B9A\u8BE5\u521D\u59CB\u5316\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F</li></ul><blockquote><details class="custom-container details"><summary>\u6D4B\u8BD5\u7ED3\u679C</summary><p><img src="'+n+`" alt="\u4E0D\u540C\u5305\u7684\u5BFC\u5165"></p></details></blockquote><ul><li><code>init</code>\u51FD\u6570\u4E0D\u80FD\u88AB\u5176\u4ED6\u51FD\u6570\u8C03\u7528\uFF0C\u800C\u662F\u5728<code>main</code>\u51FD\u6570\u6267\u884C\u4E4B\u524D\uFF0C\u81EA\u52A8\u88AB\u8C03\u7528</li></ul><h2 id="main\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#main\u51FD\u6570" aria-hidden="true">#</a> main\u51FD\u6570</h2><p>Go\u8BED\u8A00\u7A0B\u5E8F\u7684\u9ED8\u8BA4\u5165\u53E3\u51FD\u6570(\u4E3B\u51FD\u6570)\uFF1Afunc main() \u51FD\u6570\u4F53\u7528\uFF5B\uFF5D\u4E00\u5BF9\u62EC\u53F7\u5305\u88F9\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u51FD\u6570\u4F53</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>main</code>\u53EA\u80FD\u5728<code>main</code>\u5305\u4E2D\u88AB\u7CFB\u7EDF\u81EA\u52A8\u8C03\u7528\uFF0C\u5728\u5176\u4ED6\u5305\u5B9A\u4E49\u6CA1\u6709\u4F5C\u7528\u54E6\uFF01\uFF01\uFF01</p><ul><li>\u539F\u56E0\uFF1A</li></ul><blockquote><p>\u56E0\u4E3A\u4E0D\u662F<code>main</code>\u5305\u7684<code>main</code>\u51FD\u6570\uFF08\u79C1\u6709\u51FD\u6570\uFF09\u4E0D\u80FD\u88AB<code>main</code>\u5305\u8C03\u7528\uFF0C\u800C\u4E14\u4E0D\u662F<code>main</code>\u5305\u53C8\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884C\u3002</p></blockquote></div><ul><li>\u5728\u5176\u4ED6\u5305\u5B9A\u4E49main\u51FD\u6570\u65F6</li></ul><p><img src="`+c+'" alt="image-20220402111013182"></p><ul><li>\u5728<code>main</code>\u5305\u5B9A\u4E49\u65F6</li></ul><p><img src="'+o+'" alt="image-20220402110855357"></p><h2 id="init\u51FD\u6570\u548Cmain\u51FD\u6570\u7684\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#init\u51FD\u6570\u548Cmain\u51FD\u6570\u7684\u5F02\u540C" aria-hidden="true">#</a> init\u51FD\u6570\u548Cmain\u51FD\u6570\u7684\u5F02\u540C</h2><h3 id="\u76F8\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u70B9" aria-hidden="true">#</a> \u76F8\u540C\u70B9\uFF1A</h3><p>\u4E24\u4E2A\u51FD\u6570\u5728\u5B9A\u4E49\u65F6\u4E0D\u80FD\u6709\u4EFB\u4F55\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\uFF0C\u4E14Go\u7A0B\u5E8F\u81EA\u52A8\u8C03\u7528\u3002</p><details class="custom-container details"><summary>vscode\u6D4B\u8BD5\u7ED3\u679C</summary><p><img src="'+d+'" alt="no_return"></p></details><h3 id="\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u70B9" aria-hidden="true">#</a> \u4E0D\u540C\u70B9\uFF1A</h3><p><code>init</code>\u53EF\u4EE5\u5E94\u7528\u4E8E\u4EFB\u610F\u5305\u4E2D\uFF0C\u4E14\u53EF\u4EE5\u91CD\u590D\u5B9A\u4E49\u591A\u4E2A\u3002 <code>main</code>\u51FD\u6570\u53EA\u80FD\u7528\u4E8E<code>main</code>\u5305\u4E2D\uFF0C\u4E14\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u3002</p><h3 id="\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F\uFF1A</h3><p>\u5BF9\u540C\u4E00\u4E2A<code>go</code>\u6587\u4EF6\u7684<code>init()</code>\u8C03\u7528\u987A\u5E8F\u662F\u4ECE\u4E0A\u5230\u4E0B\u7684\u3002</p><p>\u5BF9\u540C\u4E00\u4E2A<code>package</code>\u4E2D\u4E0D\u540C\u6587\u4EF6\u662F\u6309\u6587\u4EF6\u540D\u5B57\u7B26\u4E32\u6BD4\u8F83\u201C\u4ECE\u5C0F\u5230\u5927\u201D\u987A\u5E8F\u8C03\u7528\u5404\u6587\u4EF6\u4E2D\u7684<code>init()</code>\u51FD\u6570\u3002</p><p>\u5BF9\u4E8E\u4E0D\u540C\u7684<code>package</code>\uFF0C\u5982\u679C\u4E0D\u76F8\u4E92\u4F9D\u8D56\u7684\u8BDD\uFF0C\u6309\u7167main\u5305\u4E2D\u201D\u5148import\u7684\u540E\u8C03\u7528\u201D\u7684\u987A\u5E8F\u8C03\u7528\u5176\u5305\u4E2D\u7684<code>init()</code>\uFF0C\u5982\u679C<code>package</code>\u5B58\u5728\u4F9D\u8D56\uFF0C\u5219\u5148\u8C03\u7528\u6700\u65E9\u88AB\u4F9D\u8D56\u7684<code>package</code>\u4E2D\u7684<code>init()</code>\uFF0C\u6700\u540E\u8C03\u7528<code>main</code>\u51FD\u6570\u3002</p><p>\u5982\u679C<code>init</code>\u51FD\u6570\u4E2D\u4F7F\u7528\u4E86<code>println()</code>\u6216\u8005<code>print()</code>\u4F60\u4F1A\u53D1\u73B0\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u8FD9\u4E24\u4E2A\u4E0D\u4F1A\u6309\u7167\u4F60\u60F3\u8C61\u4E2D\u7684\u987A\u5E8F\u6267\u884C\u3002\u8FD9\u4E24\u4E2A\u51FD\u6570\u5B98\u65B9\u53EA\u63A8\u8350\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5BF9\u4E8E\u6B63\u5F0F\u73AF\u5883\u4E0D\u8981\u4F7F\u7528\u3002</p>',28);function p(r,l){return t}var u=e(s,[["render",p],["__file","init_main.html.vue"]]);export{u as default};
