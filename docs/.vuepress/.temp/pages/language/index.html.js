export const data = {
  "key": "v-58f42cfe",
  "path": "/language/",
  "title": "计算机语言",
  "lang": "zh-CN",
  "frontmatter": {
    "sidebar": false
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Go",
      "slug": "go",
      "children": [
        {
          "level": 3,
          "title": "Go基础",
          "slug": "go基础",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1648829257000,
    "contributors": [
      {
        "name": "CSJerry",
        "email": "553537528@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "language/README.md"
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
