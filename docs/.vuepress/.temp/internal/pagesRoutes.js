import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-1739c35a","/algorithm/basic_struct.html",{"title":"基本数据结构"},["/algorithm/basic_struct","/algorithm/basic_struct.md"]],
  ["v-70bc2959","/algorithm/",{"title":"简介"},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-4ffc68c2","/algorithm/sort.html",{"title":"排序"},["/algorithm/sort","/algorithm/sort.md"]],
  ["v-2e25198a","/database/",{"title":"简介"},["/database/index.html","/database/README.md"]],
  ["v-58f42cfe","/language/",{"title":"计算机语言"},["/language/index.html","/language/README.md"]],
  ["v-24f2d5ba","/network/",{"title":"简介"},["/network/index.html","/network/README.md"]],
  ["v-2d0aad32","/os/",{"title":"简介"},["/os/index.html","/os/README.md"]],
  ["v-74fc0e94","/language/go/array_slice.html",{"title":"数组和切片"},["/language/go/array_slice","/language/go/array_slice.md"]],
  ["v-605ce91a","/language/go/init_main.html",{"title":"init函数与main函数"},["/language/go/init_main","/language/go/init_main.md"]],
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
