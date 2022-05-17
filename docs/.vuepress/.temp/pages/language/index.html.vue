<template><h1 id="计算机语言" tabindex="-1"><a class="header-anchor" href="#计算机语言" aria-hidden="true">#</a> 计算机语言</h1>
<p>主要是Go的学习记录。</p>
<div class="custom-container tip"><p class="custom-container-title">声明</p>
<p>该部分内容大部分来源是</p>
<ul>
<li><a href="https://golang.google.cn/doc/" target="_blank" rel="noopener noreferrer">Documentation - The Go Programming Language (google.cn)<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/golang/go/wiki" target="_blank" rel="noopener noreferrer">Home · golang/go Wiki (github.com)<ExternalLinkIcon/></a></li>
<li><a href="https://www.topgoer.cn/docs/golang/chapter24" target="_blank" rel="noopener noreferrer">go语言中文文档<ExternalLinkIcon/></a></li>
<li><a href="https://www.liwenzhou.com/?fr=topgoer" target="_blank" rel="noopener noreferrer">李文周的博客<ExternalLinkIcon/></a></li>
<li><a href="https://lailin.xyz/" target="_blank" rel="noopener noreferrer">Mohuishou (lailin.xyz)<ExternalLinkIcon/></a></li>
<li><a href="https://qcrao.com/" target="_blank" rel="noopener noreferrer">qcrao | 码农桃花源<ExternalLinkIcon/></a></li>
<li><a href="https://learnku.com/go" target="_blank" rel="noopener noreferrer">Go 技术论坛 | Golang / Go 语言中国知识社区 (learnku.com)<ExternalLinkIcon/></a></li>
<li><a href="https://go.dev/" target="_blank" rel="noopener noreferrer">The Go Programming Language<ExternalLinkIcon/></a></li>
</ul>
<p>辅以个人学习感悟并编码验证。</p>
</div>
<h2 id="go基础" tabindex="-1"><a class="header-anchor" href="#go基础" aria-hidden="true">#</a> Go基础</h2>
<ol>
<li><RouterLink to="/language/go/init_main.html"><code>init</code>与<code>main</code>函数</RouterLink></li>
<li><RouterLink to="/language/go/array_slice.html">数组<code>array</code>与切片<code>slice</code></RouterLink></li>
<li><RouterLink to="/language/go/pointer.html">指针</RouterLink></li>
<li><RouterLink to="/language/go/map.html"><code>map</code></RouterLink></li>
<li><RouterLink to="/language/go/struct.html">结构体</RouterLink></li>
<li><RouterLink to="/language/go/interface.html">接口</RouterLink></li>
<li><RouterLink to="/language/go/process_control.html">流程控制</RouterLink></li>
<li><RouterLink to="/language/go/function_method.html">函数与方法</RouterLink></li>
<li><RouterLink to="/language/go/panic.html">异常处理</RouterLink></li>
<li><RouterLink to="/language/go/dependence.html">依赖管理</RouterLink></li>
</ol>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<h2 id="网络编程" tabindex="-1"><a class="header-anchor" href="#网络编程" aria-hidden="true">#</a> 网络编程</h2>
<ol>
<li><RouterLink to="/language/go/net/socket.html">初窥Goland的<code>socket</code></RouterLink></li>
<li><RouterLink to="/language/go/net/tcp.html"><code>TCP</code> Socket编程</RouterLink></li>
<li><RouterLink to="/language/go/net/tcp_sticky.html">TCP粘包</RouterLink></li>
<li><RouterLink to="/language/go/net/http.html">TCP - HTTP 1.x</RouterLink></li>
<li><RouterLink to="/language/go/net/websocket.html">WebSocket</RouterLink></li>
</ol>
<h2 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程" aria-hidden="true">#</a> 并发编程</h2>
<ol>
<li><RouterLink to="/language/go/concurrence/introduce.html">并发介绍</RouterLink></li>
<li><RouterLink to="/language/go/concurrence/Goroutine.html"><code>GoRoutine</code></RouterLink></li>
<li><RouterLink to="/language/go/concurrence/runtime.html"><code>runtime</code>包</RouterLink></li>
<li><RouterLink to="/language/go/concurrence/channel.html">channel</RouterLink></li>
<li><RouterLink to="/language/go/concurrence/Goroutinue_pool.html">GoRoutinue_pool</RouterLink></li>
<li><RouterLink to="/language/go/concurrence/timer.html">定时器</RouterLink></li>
<li></li>
</ol>
<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2>
<details class="custom-container details"><summary>主要参考</summary>
<ul>
<li><a href="https://github.com/senghoo/golang-design-pattern" target="_blank" rel="noopener noreferrer">senghoo/golang-design-pattern: 设计模式 Golang实现－《研磨设计模式》读书笔记 (github.com)<ExternalLinkIcon/></a></li>
<li><a href="https://lailin.xyz/post/go-design-pattern.html" target="_blank" rel="noopener noreferrer">Go设计模式24-总结(更新完毕) - Mohuishou (lailin.xyz)<ExternalLinkIcon/></a></li>
<li><a href="https://www.runoob.com/design-pattern/design-pattern-tutorial.html" target="_blank" rel="noopener noreferrer">设计模式 | 菜鸟教程 (runoob.com)<ExternalLinkIcon/></a></li>
<li><a href="https://learnku.com/docs/99-software-pattern" target="_blank" rel="noopener noreferrer">《99+种软件模式》 | Laravel China 社区 (learnku.com)<ExternalLinkIcon/></a></li>
</ul>
</details>
<h3 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h3>
<ol>
<li><RouterLink to="/language/go/design/create/simple_factory.html">简单工厂模式</RouterLink></li>
<li><RouterLink to="/language/go/design/create/factory_method.html">工厂方法模式</RouterLink></li>
<li><RouterLink to="/language/go/design/create/abstract_factory.html">抽象工厂模式</RouterLink></li>
<li><RouterLink to="/language/design/create/builder.html">建造者模式</RouterLink></li>
<li><RouterLink to="/language/create/prototype.html">原型模式</RouterLink></li>
<li><RouterLink to="/language/create/singleton.html">单例模式</RouterLink></li>
</ol>
<h3 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h3>
<h3 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h3>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<ol>
<li><RouterLink to="/language/go/other/package.html">常用的包</RouterLink></li>
</ol>
</template>
