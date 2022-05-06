import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-1739c35a","/algorithm/basic_struct.html",{"title":"基本数据结构"},["/algorithm/basic_struct","/algorithm/basic_struct.md"]],
  ["v-70bc2959","/algorithm/",{"title":"简介"},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-4ffc68c2","/algorithm/sort.html",{"title":"排序"},["/algorithm/sort","/algorithm/sort.md"]],
  ["v-31987621","/leetcode/",{"title":"刷题吧"},["/leetcode/index.html","/leetcode/Readme.md"]],
  ["v-58f42cfe","/language/",{"title":"计算机语言"},["/language/index.html","/language/README.md"]],
  ["v-24f2d5ba","/network/",{"title":"简介"},["/network/index.html","/network/README.md"]],
  ["v-50e5196d","/os/memoryShare.html",{"title":"进程间通信 共享内存"},["/os/memoryShare","/os/memoryShare.md"]],
  ["v-2d0aad32","/os/",{"title":"简介"},["/os/index.html","/os/README.md"]],
  ["v-e95b895e","/other/company_info.html",{"title":"一些公司的春招信息"},["/other/company_info","/other/company_info.md"]],
  ["v-b950286e","/other/interviewContent.html",{"title":""},["/other/interviewContent","/other/interviewContent.md"]],
  ["v-e4cb1150","/other/",{"title":"其他"},["/other/index.html","/other/Readme.md"]],
  ["v-29dfd9f0","/database/MySQL/",{"title":""},["/database/MySQL/index.html","/database/MySQL/Readme.md"]],
  ["v-1af2dda2","/database/Redis/",{"title":"redis"},["/database/Redis/index.html","/database/Redis/Readme.md"]],
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
  ["v-3b73db5d","/other/study/http_api_design.html",{"title":"HTTP API 设计指南"},["/other/study/http_api_design","/other/study/http_api_design.md"]],
  ["v-44200f69","/database/Redis/architecture/data_consistency.html",{"title":"数据库和缓存如何保证一致性？"},["/database/Redis/architecture/data_consistency","/database/Redis/architecture/data_consistency.md"]],
  ["v-d9c3a514","/language/go/concurrence/Goroutine.html",{"title":"1. Goroutine"},["/language/go/concurrence/Goroutine","/language/go/concurrence/Goroutine.md"]],
  ["v-0ccb48f3","/language/go/concurrence/introduce.html",{"title":"1. 并发介绍"},["/language/go/concurrence/introduce","/language/go/concurrence/introduce.md"]],
  ["v-67961fcc","/language/go/concurrence/runtime.html",{"title":"1. runtime包"},["/language/go/concurrence/runtime","/language/go/concurrence/runtime.md"]],
  ["v-39b1e776","/language/go/net/http.html",{"title":""},["/language/go/net/http","/language/go/net/http.md"]],
  ["v-794513aa","/language/go/net/socket.html",{"title":"socket 编程"},["/language/go/net/socket","/language/go/net/socket.md"]],
  ["v-213952d3","/language/go/net/tcp.html",{"title":"Go语言TCP Socket编程"},["/language/go/net/tcp","/language/go/net/tcp.md"]],
  ["v-4fe4d797","/language/go/net/tcp_sticky.html",{"title":"TCP粘包"},["/language/go/net/tcp_sticky","/language/go/net/tcp_sticky.md"]],
  ["v-7fd75e6d","/language/go/net/websocket.html",{"title":"Websocket 编程"},["/language/go/net/websocket","/language/go/net/websocket.md"]],
  ["v-0a939f3b","/language/go/other/package.html",{"title":"Go包"},["/language/go/other/package","/language/go/other/package.md"]],
  ["v-a6362c7e","/language/go/design/create/abstract_factory.html",{"title":"抽象工厂模式"},["/language/go/design/create/abstract_factory","/language/go/design/create/abstract_factory.md"]],
  ["v-59f6d0d8","/language/go/design/create/factory_method.html",{"title":"工厂方法模式"},["/language/go/design/create/factory_method","/language/go/design/create/factory_method.md"]],
  ["v-84b6491e","/language/go/design/create/simple_factory.html",{"title":"简单工厂模式"},["/language/go/design/create/simple_factory","/language/go/design/create/simple_factory.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-c4b57c26","/database/Redis/data_structure/data.html",{"title":"Redis 数据结构"},["/database/Redis/data_structure/data","/database/Redis/data_structure/data.md"]],
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
