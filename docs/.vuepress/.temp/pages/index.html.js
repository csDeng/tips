export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "https://blog-1302546775.cos.ap-guangzhou.myqcloud.com/2021%2F12%2Flogo.jpg",
    "sidebar": false,
    "features": [
      {
        "title": "数据结构与算法",
        "details": "学习数据结构与算法的奇思妙想，练就CS的基本功"
      },
      {
        "title": "计算机语言",
        "details": "以 Java 为核心，学习计算机知识"
      },
      {
        "title": "操作系统",
        "details": "去了解计算机操作系统的实现以及构成，加深对计算机的了解"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present CSJerry"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "写过Hello等于我学会了",
      "slug": "写过hello等于我学会了",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1694011390000,
    "contributors": [
      {
        "name": "CSJerry",
        "email": "553537528@qq.com",
        "commits": 4
      },
      {
        "name": "CSJerry",
        "email": "m16698000915@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
