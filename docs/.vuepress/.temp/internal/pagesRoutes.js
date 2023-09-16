import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-c172a7a4","/AI/prompt-change.html",{"title":"掌握AI助手的魔法工具：解密Prompt（提示）在AIGC时代的应用「中篇」"},["/AI/prompt-change","/AI/prompt-change.md"]],
  ["v-57c7fb78","/AI/prompt-introduction.html",{"title":"掌握AI助手的魔法工具：解密Prompt（提示）在AIGC时代的应用「上篇」"},["/AI/prompt-introduction","/AI/prompt-introduction.md"]],
  ["v-0b067674","/AI/prompt-sample.html",{"title":"掌握AI助手的魔法工具：解密Prompt（提示）在AIGC时代的应用（下篇）"},["/AI/prompt-sample","/AI/prompt-sample.md"]],
  ["v-2d09fb6e","/AI/",{"title":"AIGC"},["/AI/index.html","/AI/readme.md"]],
  ["v-2424415c","/WeChat/CDN.html",{"title":""},["/WeChat/CDN","/WeChat/CDN.md"]],
  ["v-c2f12f48","/WeChat/bit.html",{"title":"位、字节、字符与字（字母跟汉字）的爱恨情仇"},["/WeChat/bit","/WeChat/bit.md"]],
  ["v-70bc2959","/algorithm/",{"title":"简介"},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-1739c35a","/algorithm/basic_struct.html",{"title":"基本数据结构"},["/algorithm/basic_struct","/algorithm/basic_struct.md"]],
  ["v-4ffc68c2","/algorithm/sort.html",{"title":"排序"},["/algorithm/sort","/algorithm/sort.md"]],
  ["v-71b3ae87","/interview/",{"title":"八股文"},["/interview/index.html","/interview/readme.md"]],
  ["v-31987621","/leetcode/",{"title":"刷题吧"},["/leetcode/index.html","/leetcode/Readme.md"]],
  ["v-647b5f01","/leetcode/array.html",{"title":"数组"},["/leetcode/array","/leetcode/array.md"]],
  ["v-e3c74214","/leetcode/backtrack.html",{"title":"回溯"},["/leetcode/backtrack","/leetcode/backtrack.md"]],
  ["v-673dc8b9","/leetcode/binaryTree.html",{"title":"二叉树"},["/leetcode/binaryTree","/leetcode/binaryTree.md"]],
  ["v-44112734","/leetcode/diffArray.html",{"title":"差分数组"},["/leetcode/diffArray","/leetcode/diffArray.md"]],
  ["v-70d392ae","/leetcode/double_pointer.html",{"title":""},["/leetcode/double_pointer","/leetcode/double_pointer.md"]],
  ["v-fe7e50ec","/leetcode/hash.html",{"title":"哈希表"},["/leetcode/hash","/leetcode/hash.md"]],
  ["v-255621fa","/leetcode/list.html",{"title":"链表"},["/leetcode/list","/leetcode/list.md"]],
  ["v-24ce72fe","/leetcode/prefixSum.html",{"title":"前缀和"},["/leetcode/prefixSum","/leetcode/prefixSum.md"]],
  ["v-3a6b42b2","/leetcode/string.html",{"title":"字符串"},["/leetcode/string","/leetcode/string.md"]],
  ["v-e4cb1150","/other/",{"title":"其他"},["/other/index.html","/other/Readme.md"]],
  ["v-e95b895e","/other/company_info.html",{"title":"一些公司的春招信息"},["/other/company_info","/other/company_info.md"]],
  ["v-b950286e","/other/interviewContent.html",{"title":""},["/other/interviewContent","/other/interviewContent.md"]],
  ["v-29dfd9f0","/database/MySQL/",{"title":"MYSQL"},["/database/MySQL/index.html","/database/MySQL/Readme.md"]],
  ["v-1af2dda2","/database/Redis/",{"title":"redis"},["/database/Redis/index.html","/database/Redis/Readme.md"]],
  ["v-5776ff57","/interview/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",{"title":"链表"},["/interview/algorithm/数据结构.html","/interview/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84","/interview/algorithm/数据结构.md","/interview/algorithm/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],
  ["v-4bba3a36","/interview/c/C_CPP.html",{"title":"基础知识"},["/interview/c/C_CPP","/interview/c/C_CPP.md"]],
  ["v-3599f071","/interview/go/Go.html",{"title":"基础"},["/interview/go/Go","/interview/go/Go.md"]],
  ["v-6f705d1d","/interview/java/java-interview.html",{"title":"基础"},["/interview/java/java-interview","/interview/java/java-interview.md"]],
  ["v-b7e5d65c","/interview/middleware/Elasticsearch.html",{"title":"为什么要使用 Elasticsearch？"},["/interview/middleware/Elasticsearch","/interview/middleware/Elasticsearch.md"]],
  ["v-0b8edb57","/interview/middleware/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html",{"title":"Kafka"},["/interview/middleware/消息队列.html","/interview/middleware/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97","/interview/middleware/消息队列.md","/interview/middleware/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.md"]],
  ["v-01d45c6a","/interview/mysql/MySQL.html",{"title":""},["/interview/mysql/MySQL","/interview/mysql/MySQL.md"]],
  ["v-82a33880","/interview/net/Docker.html",{"title":"基础相关"},["/interview/net/Docker","/interview/net/Docker.md"]],
  ["v-4a6227a8","/interview/net/K8S.html",{"title":"基础概念"},["/interview/net/K8S","/interview/net/K8S.md"]],
  ["v-52c11ac0","/interview/net/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.html",{"title":"一、HTTP"},["/interview/net/计算机网络.html","/interview/net/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C","/interview/net/计算机网络.md","/interview/net/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.md"]],
  ["v-61398f03","/interview/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{"title":""},["/interview/os/操作系统.html","/interview/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F","/interview/os/操作系统.md","/interview/os/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.md"]],
  ["v-35bc6df9","/interview/redis/Redis.html",{"title":""},["/interview/redis/Redis","/interview/redis/Redis.md"]],
  ["v-2b122822","/language/Java/",{"title":"Java"},["/language/Java/index.html","/language/Java/README.md"]],
  ["v-5449bfce","/language/Java/java-annotation.html",{"title":"从入门到精通：Java注解详解"},["/language/Java/java-annotation","/language/Java/java-annotation.md"]],
  ["v-5a63fd34","/language/Java/java-functionalProgram.html",{"title":"Java 函数式编程"},["/language/Java/java-functionalProgram","/language/Java/java-functionalProgram.md"]],
  ["v-65a36747","/language/Java/java-reentrantReadLock.html",{"title":"Java 并发基础之ReentrantReadLock"},["/language/Java/java-reentrantReadLock","/language/Java/java-reentrantReadLock.md"]],
  ["v-08855754","/language/Java/java-reentrantReadWriteLock.html",{"title":""},["/language/Java/java-reentrantReadWriteLock","/language/Java/java-reentrantReadWriteLock.md"]],
  ["v-19036c09","/language/Java/java-synchronized.html",{"title":"Java 的线程安全机制之`synchronized`"},["/language/Java/java-synchronized","/language/Java/java-synchronized.md"]],
  ["v-02308a81","/language/Java/java-volatile.html",{"title":"Java 的线程安全机制之volatile"},["/language/Java/java-volatile","/language/Java/java-volatile.md"]],
  ["v-b1fd4aee","/language/go/",{"title":"计算机语言"},["/language/go/index.html","/language/go/README.md"]],
  ["v-74fc0e94","/language/go/array_slice.html",{"title":"数组和切片"},["/language/go/array_slice","/language/go/array_slice.md"]],
  ["v-c9400b4e","/language/go/dependence.html",{"title":"Go语言之依赖管理"},["/language/go/dependence","/language/go/dependence.md"]],
  ["v-a02f428c","/language/go/function_method.html",{"title":"函数与方法"},["/language/go/function_method","/language/go/function_method.md"]],
  ["v-605ce91a","/language/go/init_main.html",{"title":"init函数与main函数"},["/language/go/init_main","/language/go/init_main.md"]],
  ["v-7b2833ee","/language/go/interface.html",{"title":"1. 接口"},["/language/go/interface","/language/go/interface.md"]],
  ["v-f4c952f4","/language/go/map.html",{"title":"Map"},["/language/go/map","/language/go/map.md"]],
  ["v-8436a7ea","/language/go/panic.html",{"title":"异常处理"},["/language/go/panic","/language/go/panic.md"]],
  ["v-6c7135c5","/language/go/pointer.html",{"title":"1. 指针"},["/language/go/pointer","/language/go/pointer.md"]],
  ["v-27963d16","/language/go/process_control.html",{"title":"流程控制"},["/language/go/process_control","/language/go/process_control.md"]],
  ["v-faa2900a","/language/go/struct.html",{"title":"1. 结构体"},["/language/go/struct","/language/go/struct.md"]],
  ["v-6fac3808","/other/Docker/01.docker%E6%A6%82%E8%BF%B0.html",{"title":"Docker为什么出现"},["/other/Docker/01.docker概述.html","/other/Docker/01.docker%E6%A6%82%E8%BF%B0","/other/Docker/01.docker概述.md","/other/Docker/01.docker%E6%A6%82%E8%BF%B0.md"]],
  ["v-8e2014da","/other/Docker/02.Docker%E5%8E%86%E5%8F%B2.html",{"title":""},["/other/Docker/02.Docker历史.html","/other/Docker/02.Docker%E5%8E%86%E5%8F%B2","/other/Docker/02.Docker历史.md","/other/Docker/02.Docker%E5%8E%86%E5%8F%B2.md"]],
  ["v-2b974b74","/other/Docker/03.Docker%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%90%8D%E8%AF%8D.html",{"title":"Docker的基本名词"},["/other/Docker/03.Docker的基本名词.html","/other/Docker/03.Docker%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%90%8D%E8%AF%8D","/other/Docker/03.Docker的基本名词.md","/other/Docker/03.Docker%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%90%8D%E8%AF%8D.md"]],
  ["v-6df93100","/other/Docker/04.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",{"title":"Docker的常用命令"},["/other/Docker/04.Docker常用命令.html","/other/Docker/04.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4","/other/Docker/04.Docker常用命令.md","/other/Docker/04.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md"]],
  ["v-ccb29dfe","/other/Docker/05.%E9%83%A8%E7%BD%B2Nginx.html",{"title":"后台启动nginx, 宿主机端口为3344, 容器端口为80"},["/other/Docker/05.部署Nginx.html","/other/Docker/05.%E9%83%A8%E7%BD%B2Nginx","/other/Docker/05.部署Nginx.md","/other/Docker/05.%E9%83%A8%E7%BD%B2Nginx.md"]],
  ["v-7e72e1b7","/other/Docker/06.Docker%E9%95%9C%E5%83%8F%E8%AE%B2%E8%A7%A3.html",{"title":"Docker镜像讲解"},["/other/Docker/06.Docker镜像讲解.html","/other/Docker/06.Docker%E9%95%9C%E5%83%8F%E8%AE%B2%E8%A7%A3","/other/Docker/06.Docker镜像讲解.md","/other/Docker/06.Docker%E9%95%9C%E5%83%8F%E8%AE%B2%E8%A7%A3.md"]],
  ["v-1dc0cf95","/other/Docker/07.Docker%E5%AE%B9%E5%99%A8%E6%95%B0%E6%8D%AE%E5%8D%B7.html",{"title":"1、 什么是容器卷"},["/other/Docker/07.Docker容器数据卷.html","/other/Docker/07.Docker%E5%AE%B9%E5%99%A8%E6%95%B0%E6%8D%AE%E5%8D%B7","/other/Docker/07.Docker容器数据卷.md","/other/Docker/07.Docker%E5%AE%B9%E5%99%A8%E6%95%B0%E6%8D%AE%E5%8D%B7.md"]],
  ["v-3edf3324","/other/Docker/08.DockerFile.html",{"title":"什么是 Dockerfile？"},["/other/Docker/08.DockerFile","/other/Docker/08.DockerFile.md"]],
  ["v-30ebfa06","/other/Docker/09.docker-compose.html",{"title":""},["/other/Docker/09.docker-compose","/other/Docker/09.docker-compose.md"]],
  ["v-47023cad","/other/Docker/10.Docker%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F.html",{"title":"镜像加速器"},["/other/Docker/10.Docker镜像加速.html","/other/Docker/10.Docker%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F","/other/Docker/10.Docker镜像加速.md","/other/Docker/10.Docker%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F.md"]],
  ["v-431ba1de","/other/Docker/99.docker%E5%B8%B8%E8%A7%81%E7%9A%84%E9%94%99%E8%AF%AF.html",{"title":"1、ot permission denied while trying to connect to the Docker daemon socket at unix:"},["/other/Docker/99.docker常见的错误.html","/other/Docker/99.docker%E5%B8%B8%E8%A7%81%E7%9A%84%E9%94%99%E8%AF%AF","/other/Docker/99.docker常见的错误.md","/other/Docker/99.docker%E5%B8%B8%E8%A7%81%E7%9A%84%E9%94%99%E8%AF%AF.md"]],
  ["v-02a00397","/other/Docker/",{"title":"Docker"},["/other/Docker/index.html","/other/Docker/readme.md"]],
  ["v-31c0714d","/other/Nginx/",{"title":"1、什么是Nginx"},["/other/Nginx/index.html","/other/Nginx/readme.md"]],
  ["v-3b73db5d","/other/study/http_api_design.html",{"title":"HTTP API 设计指南"},["/other/study/http_api_design","/other/study/http_api_design.md"]],
  ["v-434176a0","/database/MySQL/basic/count_how_work.html",{"title":"MySQL的COUNT是怎么执行的"},["/database/MySQL/basic/count_how_work","/database/MySQL/basic/count_how_work.md"]],
  ["v-1f696dda","/database/MySQL/basic/process.html",{"title":"MySQL的执行顺序"},["/database/MySQL/basic/process","/database/MySQL/basic/process.md"]],
  ["v-1220958f","/database/MySQL/index/count.html",{"title":"count(*) 和 count(1) 有什么区别？哪个性能最好？"},["/database/MySQL/index/count","/database/MySQL/index/count.md"]],
  ["v-005c2849","/database/MySQL/index/data_btree.html",{"title":"从数据页的角度看 B+ 树"},["/database/MySQL/index/data_btree","/database/MySQL/index/data_btree.md"]],
  ["v-a8d14ff0","/database/MySQL/index/index_issure.html",{"title":"MySQL 使用 like “%x“，索引一定会失效吗？"},["/database/MySQL/index/index_issure","/database/MySQL/index/index_issure.md"]],
  ["v-ec18e5c8","/database/MySQL/index/index_no_work.html",{"title":"索引失效有哪些？"},["/database/MySQL/index/index_no_work","/database/MySQL/index/index_no_work.md"]],
  ["v-04c72495","/database/MySQL/index/why_btree.html",{"title":"为什么 MySQL 采用 B+ 树作为索引？"},["/database/MySQL/index/why_btree","/database/MySQL/index/why_btree.md"]],
  ["v-1f9174a4","/database/MySQL/lock/has_some_lock.html",{"title":"MySQL 有哪些锁？"},["/database/MySQL/lock/has_some_lock","/database/MySQL/lock/has_some_lock.md"]],
  ["v-b8bcbcbc","/database/MySQL/optimize/division.html",{"title":"分库分表"},["/database/MySQL/optimize/division","/database/MySQL/optimize/division.md"]],
  ["v-52d7f4bc","/database/MySQL/transaction/how.html",{"title":"事务隔离级别是怎么实现的？"},["/database/MySQL/transaction/how","/database/MySQL/transaction/how.md"]],
  ["v-4e4cc0ef","/database/MySQL/transaction/how_to_solve_illusory_read.html",{"title":"幻读是怎么被解决的？"},["/database/MySQL/transaction/how_to_solve_illusory_read","/database/MySQL/transaction/how_to_solve_illusory_read.md"]],
  ["v-44200f69","/database/Redis/architecture/data_consistency.html",{"title":"数据库和缓存如何保证一致性？"},["/database/Redis/architecture/data_consistency","/database/Redis/architecture/data_consistency.md"]],
  ["v-9e9da312","/database/Redis/data_persistence/aof.html",{"title":"AOF 持久化是怎么实现的？"},["/database/Redis/data_persistence/aof","/database/Redis/data_persistence/aof.md"]],
  ["v-49ed3aff","/database/Redis/data_persistence/rdb.html",{"title":"RDB 快照是怎么实现的？"},["/database/Redis/data_persistence/rdb","/database/Redis/data_persistence/rdb.md"]],
  ["v-c4b57c26","/database/Redis/data_structure/data.html",{"title":"Redis 数据结构"},["/database/Redis/data_structure/data","/database/Redis/data_structure/data.md"]],
  ["v-d9c3a514","/language/go/concurrence/Goroutine.html",{"title":"1. Goroutine"},["/language/go/concurrence/Goroutine","/language/go/concurrence/Goroutine.md"]],
  ["v-4d9118a0","/language/go/concurrence/Goroutinue_pool.html",{"title":"1. Goroutine池"},["/language/go/concurrence/Goroutinue_pool","/language/go/concurrence/Goroutinue_pool.md"]],
  ["v-53ffc5cf","/language/go/concurrence/channel.html",{"title":"1. Channel"},["/language/go/concurrence/channel","/language/go/concurrence/channel.md"]],
  ["v-0ccb48f3","/language/go/concurrence/introduce.html",{"title":"1. 并发介绍"},["/language/go/concurrence/introduce","/language/go/concurrence/introduce.md"]],
  ["v-67961fcc","/language/go/concurrence/runtime.html",{"title":"1. runtime包"},["/language/go/concurrence/runtime","/language/go/concurrence/runtime.md"]],
  ["v-6356870d","/language/go/concurrence/timer.html",{"title":"定时器"},["/language/go/concurrence/timer","/language/go/concurrence/timer.md"]],
  ["v-51b4a38b","/language/go/micro/details.html",{"title":"1. 微服务详解"},["/language/go/micro/details","/language/go/micro/details.md"]],
  ["v-3a236b87","/language/go/micro/ecology.html",{"title":"1. 微服务生态"},["/language/go/micro/ecology","/language/go/micro/ecology.md"]],
  ["v-70c71952","/language/go/micro/realize.html",{"title":"1. 认识微服务"},["/language/go/micro/realize","/language/go/micro/realize.md"]],
  ["v-ee5fb870","/language/go/micro/rpc.html",{"title":"1. RPC"},["/language/go/micro/rpc","/language/go/micro/rpc.md"]],
  ["v-39b1e776","/language/go/net/http.html",{"title":""},["/language/go/net/http","/language/go/net/http.md"]],
  ["v-794513aa","/language/go/net/socket.html",{"title":"socket 编程"},["/language/go/net/socket","/language/go/net/socket.md"]],
  ["v-213952d3","/language/go/net/tcp.html",{"title":"Go语言TCP Socket编程"},["/language/go/net/tcp","/language/go/net/tcp.md"]],
  ["v-4fe4d797","/language/go/net/tcp_sticky.html",{"title":"TCP粘包"},["/language/go/net/tcp_sticky","/language/go/net/tcp_sticky.md"]],
  ["v-7fd75e6d","/language/go/net/websocket.html",{"title":"Websocket 编程"},["/language/go/net/websocket","/language/go/net/websocket.md"]],
  ["v-0a939f3b","/language/go/other/package.html",{"title":"Go包"},["/language/go/other/package","/language/go/other/package.md"]],
  ["v-520b6570","/language/go/design/behavior/chainOfResponsibility.html",{"title":"职责链模式"},["/language/go/design/behavior/chainOfResponsibility","/language/go/design/behavior/chainOfResponsibility.md"]],
  ["v-adf59afa","/language/go/design/behavior/command.html",{"title":"观察者模式"},["/language/go/design/behavior/command","/language/go/design/behavior/command.md"]],
  ["v-86f02398","/language/go/design/behavior/interpreter.html",{"title":"解释器模式"},["/language/go/design/behavior/interpreter","/language/go/design/behavior/interpreter.md"]],
  ["v-797395b6","/language/go/design/behavior/iterator.html",{"title":"迭代器模式"},["/language/go/design/behavior/iterator","/language/go/design/behavior/iterator.md"]],
  ["v-d6c55b5e","/language/go/design/behavior/mediator.html",{"title":"中介者模式"},["/language/go/design/behavior/mediator","/language/go/design/behavior/mediator.md"]],
  ["v-b9f65466","/language/go/design/behavior/memorandum.html",{"title":"备忘录模式"},["/language/go/design/behavior/memorandum","/language/go/design/behavior/memorandum.md"]],
  ["v-4bc2e764","/language/go/design/behavior/observer.html",{"title":""},["/language/go/design/behavior/observer","/language/go/design/behavior/observer.md"]],
  ["v-6a0c2a3d","/language/go/design/behavior/state.html",{"title":"状态模式"},["/language/go/design/behavior/state","/language/go/design/behavior/state.md"]],
  ["v-70f115d1","/language/go/design/behavior/strategy.html",{"title":"策略模式"},["/language/go/design/behavior/strategy","/language/go/design/behavior/strategy.md"]],
  ["v-575f17ee","/language/go/design/behavior/templateMethod.html",{"title":"模板方法模式"},["/language/go/design/behavior/templateMethod","/language/go/design/behavior/templateMethod.md"]],
  ["v-28ff9b40","/language/go/design/behavior/visitor.html",{"title":"访问者模式"},["/language/go/design/behavior/visitor","/language/go/design/behavior/visitor.md"]],
  ["v-a6362c7e","/language/go/design/create/abstract_factory.html",{"title":"抽象工厂模式"},["/language/go/design/create/abstract_factory","/language/go/design/create/abstract_factory.md"]],
  ["v-b018f06e","/language/go/design/create/builder.html",{"title":"建造者者模式"},["/language/go/design/create/builder","/language/go/design/create/builder.md"]],
  ["v-59f6d0d8","/language/go/design/create/factory_method.html",{"title":"工厂方法模式"},["/language/go/design/create/factory_method","/language/go/design/create/factory_method.md"]],
  ["v-7dcaefe2","/language/go/design/create/prototype.html",{"title":"原型模式"},["/language/go/design/create/prototype","/language/go/design/create/prototype.md"]],
  ["v-84b6491e","/language/go/design/create/simple_factory.html",{"title":"简单工厂模式"},["/language/go/design/create/simple_factory","/language/go/design/create/simple_factory.md"]],
  ["v-6fab0699","/language/go/design/create/singleton.html",{"title":"单例模式"},["/language/go/design/create/singleton","/language/go/design/create/singleton.md"]],
  ["v-46fa178e","/language/go/design/structure/adapter.html",{"title":"适配器模式"},["/language/go/design/structure/adapter","/language/go/design/structure/adapter.md"]],
  ["v-9e41f468","/language/go/design/structure/bridge.html",{"title":"装饰模式"},["/language/go/design/structure/bridge","/language/go/design/structure/bridge.md"]],
  ["v-243f1b54","/language/go/design/structure/composite.html",{"title":"组合模式"},["/language/go/design/structure/composite","/language/go/design/structure/composite.md"]],
  ["v-dd97c5bc","/language/go/design/structure/decorator.html",{"title":"装饰模式"},["/language/go/design/structure/decorator","/language/go/design/structure/decorator.md"]],
  ["v-7ba07b5b","/language/go/design/structure/facade.html",{"title":"外观模式"},["/language/go/design/structure/facade","/language/go/design/structure/facade.md"]],
  ["v-9ff3a29c","/language/go/design/structure/flyweight.html",{"title":"享元模式"},["/language/go/design/structure/flyweight","/language/go/design/structure/flyweight.md"]],
  ["v-278d64cf","/language/go/design/structure/proxy.html",{"title":"代理模式"},["/language/go/design/structure/proxy","/language/go/design/structure/proxy.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
