---

sidebar: false



---


# 计算机语言
主要是Go的学习记录。

::: tip 声明
该部分内容大部分来源是

* [Documentation - The Go Programming Language (google.cn)](https://golang.google.cn/doc/)
* [Home · golang/go Wiki (github.com)](https://github.com/golang/go/wiki)
* [go语言中文文档](https://www.topgoer.cn/docs/golang/chapter24)
* [李文周的博客](https://www.liwenzhou.com/?fr=topgoer)
* [Mohuishou (lailin.xyz)](https://lailin.xyz/)
* [qcrao | 码农桃花源](https://qcrao.com/)
* [Go 技术论坛 | Golang / Go 语言中国知识社区 (learnku.com)](https://learnku.com/go)
* [The Go Programming Language](https://go.dev/)

辅以个人学习感悟并编码验证。
:::

## Go基础

1. [`init`与`main`函数](./init_main.md)
2. [数组`array`与切片`slice`](./array_slice.md)
3. [指针](./pointer.md)
4. [`map`](./map.md)
5. [结构体](./struct.md)
6. [接口](./interface.md)
6. [流程控制](./process_control.md)
7. [函数与方法](./function_method.md)
8. [异常处理](./panic.md)
9. [依赖管理](./dependence.md)



## 面向对象







## 网络编程

1. [初窥Goland的`socket`](./net/socket.md)
2. [`TCP` Socket编程](./net/tcp.md)
3. [TCP粘包](./net/tcp_sticky.md)
4. [TCP - HTTP 1.x](./net/http.md)
5. [WebSocket](./net/websocket.md)



## 并发编程
1. [并发介绍](./concurrence/introduce.md)
2. [`GoRoutine`](./concurrence/Goroutine.md)
3. [`runtime`包](./concurrence/runtime.md)
4. [channel](./concurrence/channel.md)
5. [GoRoutinue_pool](./concurrence/Goroutinue_pool.md)
6. [定时器](./concurrence/timer.md)
7. 



## 设计模式

:::details 主要参考

* [senghoo/golang-design-pattern: 设计模式 Golang实现－《研磨设计模式》读书笔记 (github.com)](https://github.com/senghoo/golang-design-pattern)
* [Go设计模式24-总结(更新完毕) - Mohuishou (lailin.xyz)](https://lailin.xyz/post/go-design-pattern.html)
* [设计模式 | 菜鸟教程 (runoob.com)](https://www.runoob.com/design-pattern/design-pattern-tutorial.html)
* [《99+种软件模式》 | Laravel China 社区 (learnku.com)](https://learnku.com/docs/99-software-pattern)

:::

### 创建型模式

1. [简单工厂模式](./design/create/simple_factory.md)
2. [工厂方法模式](./design/create/factory_method.md)
3. [抽象工厂模式](./design/create/abstract_factory.md)
4. [建造者模式](./design/create/builder.md)
5. [原型模式](./design/create/prototype.md)
6. [单例模式](./design/create/singleton.md)


### 结构型模式

1. [外观模式](./design/structure/facade.md)
2. [适配器模式](./design/structure/adapter.md)
3. [代理模式](./design/structure/proxy.md)
4. [组合模式](./design/structure/composite.md)
5. [享元模式](./design/structure/flyweight.md)
6. [装饰器模式](./design/structure/decorator.md)
7. [桥模式](./design/structure/bridge.md)




### 行为型模式

1. [中介者模式](./design/behavior/mediator.md)
2. [观察者模式](./design/behavior/observer.md)
3. [命令模式](./design/behavior/command.md)
4. [迭代器模式](./design/behavior/iterator.md)
5. [模板方法模式](./design/behavior/templateMethod.md)
6. [策略模式](./design/behavior/strategy.md)
7. [状态模式](./design/behavior/state.md)
8. [备忘录模式](./design/behavior/memorandum.md)
9. [解释器模式](./design/behavior/interpreter.md)
10. [职责链模式](./design/behavior/chainOfResponsibility.md)
11. [访问者模式](./design/behavior/visitor.md)







## 其他
1. [常用的包](./other/package.md)



