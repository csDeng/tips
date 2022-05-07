import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-1739c35a","/algorithm/basic_struct.html",{"title":"基本数据结构"},["/algorithm/basic_struct","/algorithm/basic_struct.md"]],
  ["v-70bc2959","/algorithm/",{"title":"简介"},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-4ffc68c2","/algorithm/sort.html",{"title":"排序"},["/algorithm/sort","/algorithm/sort.md"]],
  ["v-58f42cfe","/language/",{"title":"计算机语言"},["/language/index.html","/language/README.md"]],
  ["v-31987621","/leetcode/",{"title":"刷题吧"},["/leetcode/index.html","/leetcode/Readme.md"]],
  ["v-24f2d5ba","/network/",{"title":"简介"},["/network/index.html","/network/README.md"]],
  ["v-50e5196d","/os/memoryShare.html",{"title":"进程间通信 共享内存"},["/os/memoryShare","/os/memoryShare.md"]],
  ["v-2d0aad32","/os/",{"title":"简介"},["/os/index.html","/os/README.md"]],
  ["v-e95b895e","/other/company_info.html",{"title":"一些公司的春招信息"},["/other/company_info","/other/company_info.md"]],
  ["v-b950286e","/other/interviewContent.html",{"title":""},["/other/interviewContent","/other/interviewContent.md"]],
  ["v-e4cb1150","/other/",{"title":"其他"},["/other/index.html","/other/Readme.md"]],
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
  ["v-29dfd9f0","/database/MySQL/",{"title":"MYSQL"},["/database/MySQL/index.html","/database/MySQL/Readme.md"]],
  ["v-1af2dda2","/database/Redis/",{"title":"redis"},["/database/Redis/index.html","/database/Redis/Readme.md"]],
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
  ["v-d9c3a514","/language/go/concurrence/Goroutine.html",{"title":"1. Goroutine"},["/language/go/concurrence/Goroutine","/language/go/concurrence/Goroutine.md"]],
  ["v-0ccb48f3","/language/go/concurrence/introduce.html",{"title":"1. 并发介绍"},["/language/go/concurrence/introduce","/language/go/concurrence/introduce.md"]],
  ["v-67961fcc","/language/go/concurrence/runtime.html",{"title":"1. runtime包"},["/language/go/concurrence/runtime","/language/go/concurrence/runtime.md"]],
  ["v-39b1e776","/language/go/net/http.html",{"title":""},["/language/go/net/http","/language/go/net/http.md"]],
  ["v-794513aa","/language/go/net/socket.html",{"title":"socket 编程"},["/language/go/net/socket","/language/go/net/socket.md"]],
  ["v-213952d3","/language/go/net/tcp.html",{"title":"Go语言TCP Socket编程"},["/language/go/net/tcp","/language/go/net/tcp.md"]],
  ["v-4fe4d797","/language/go/net/tcp_sticky.html",{"title":"TCP粘包"},["/language/go/net/tcp_sticky","/language/go/net/tcp_sticky.md"]],
  ["v-7fd75e6d","/language/go/net/websocket.html",{"title":"Websocket 编程"},["/language/go/net/websocket","/language/go/net/websocket.md"]],
  ["v-0a939f3b","/language/go/other/package.html",{"title":"Go包"},["/language/go/other/package","/language/go/other/package.md"]],
  ["v-005c2849","/database/MySQL/index/data_btree.html",{"title":"从数据页的角度看 B+ 树"},["/database/MySQL/index/data_btree","/database/MySQL/index/data_btree.md"]],
  ["v-ec18e5c8","/database/MySQL/index/index_no_work.html",{"title":"索引失效有哪些？"},["/database/MySQL/index/index_no_work","/database/MySQL/index/index_no_work.md"]],
  ["v-04c72495","/database/MySQL/index/why_btree.html",{"title":"为什么 MySQL 采用 B+ 树作为索引？"},["/database/MySQL/index/why_btree","/database/MySQL/index/why_btree.md"]],
  ["v-52d7f4bc","/database/MySQL/transaction/how.html",{"title":"事务隔离级别是怎么实现的？"},["/database/MySQL/transaction/how","/database/MySQL/transaction/how.md"]],
  ["v-44200f69","/database/Redis/architecture/data_consistency.html",{"title":"数据库和缓存如何保证一致性？"},["/database/Redis/architecture/data_consistency","/database/Redis/architecture/data_consistency.md"]],
  ["v-9e9da312","/database/Redis/data_persistence/aof.html",{"title":"AOF 持久化是怎么实现的？"},["/database/Redis/data_persistence/aof","/database/Redis/data_persistence/aof.md"]],
  ["v-49ed3aff","/database/Redis/data_persistence/rdb.html",{"title":"RDB 快照是怎么实现的？"},["/database/Redis/data_persistence/rdb","/database/Redis/data_persistence/rdb.md"]],
  ["v-c4b57c26","/database/Redis/data_structure/data.html",{"title":"Redis 数据结构"},["/database/Redis/data_structure/data","/database/Redis/data_structure/data.md"]],
  ["v-a6362c7e","/language/go/design/create/abstract_factory.html",{"title":"抽象工厂模式"},["/language/go/design/create/abstract_factory","/language/go/design/create/abstract_factory.md"]],
  ["v-59f6d0d8","/language/go/design/create/factory_method.html",{"title":"工厂方法模式"},["/language/go/design/create/factory_method","/language/go/design/create/factory_method.md"]],
  ["v-84b6491e","/language/go/design/create/simple_factory.html",{"title":"简单工厂模式"},["/language/go/design/create/simple_factory","/language/go/design/create/simple_factory.md"]],
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
