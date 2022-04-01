import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-70bc2959","/algorithm/",{"title":"简介"},["/algorithm/index.html","/algorithm/README.md"]],
  ["v-4ffc68c2","/algorithm/sort.html",{"title":"概述"},["/algorithm/sort","/algorithm/sort.md"]],
  ["v-6c40c044","/algorithm/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",{"title":"基本数据结构"},["/algorithm/基本数据结构.html","/algorithm/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84","/algorithm/基本数据结构.md","/algorithm/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],
  ["v-2e25198a","/database/",{"title":"简介"},["/database/index.html","/database/README.md"]],
  ["v-58f42cfe","/language/",{"title":"简介"},["/language/index.html","/language/README.md"]],
  ["v-2d0aad32","/os/",{"title":"简介"},["/os/index.html","/os/README.md"]],
  ["v-24f2d5ba","/network/",{"title":"简介"},["/network/index.html","/network/README.md"]],
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
