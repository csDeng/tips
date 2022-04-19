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
      "title": "Go基础",
      "slug": "go基础",
      "children": []
    },
    {
      "level": 2,
      "title": "网络编程",
      "slug": "网络编程",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649694761000,
    "contributors": [
      {
        "name": "CSJerry",
        "email": "553537528@qq.com",
        "commits": 3
      },
      {
        "name": "v_beckdeng",
        "email": "v_beckdeng@tencent.com",
        "commits": 2
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
