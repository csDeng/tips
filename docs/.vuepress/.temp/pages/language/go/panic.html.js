export const data = {
  "key": "v-8436a7ea",
  "path": "/language/go/panic.html",
  "title": "异常处理",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "panic：",
      "slug": "panic",
      "children": []
    },
    {
      "level": 2,
      "title": "recover：",
      "slug": "recover",
      "children": [
        {
          "level": 3,
          "title": "注意:",
          "slug": "注意",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "由于 panic、recover 参数类型为 interface{}，因此可抛出任何类型对象。",
      "slug": "由于-panic、recover-参数类型为-interface-因此可抛出任何类型对象。",
      "children": [
        {
          "level": 3,
          "title": "向已关闭的通道发送数据会引发panic",
          "slug": "向已关闭的通道发送数据会引发panic",
          "children": []
        },
        {
          "level": 3,
          "title": "延迟调用中引发的错误，可被后续延迟调用捕获，但仅最后一个错误可被捕获。",
          "slug": "延迟调用中引发的错误-可被后续延迟调用捕获-但仅最后一个错误可被捕获。",
          "children": []
        },
        {
          "level": 3,
          "title": "捕获函数 recover 只有在延迟调用内直接调用才会终止错误，否则总是返回 nil。任何未捕获的错误都会沿调用堆栈向外传递。",
          "slug": "捕获函数-recover-只有在延迟调用内直接调用才会终止错误-否则总是返回-nil。任何未捕获的错误都会沿调用堆栈向外传递。",
          "children": []
        },
        {
          "level": 3,
          "title": "使用延迟匿名函数或下面这样都是有效的。",
          "slug": "使用延迟匿名函数或下面这样都是有效的。",
          "children": []
        },
        {
          "level": 3,
          "title": "如果需要保护代码段，可将代码块重构成匿名函数，如此可确保后续代码被执 。",
          "slug": "如果需要保护代码段-可将代码块重构成匿名函数-如此可确保后续代码被执-。",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "除用 panic 引发中断性错误外，还可返回 error 类型错误对象来表示函数调用状态。",
      "slug": "除用-panic-引发中断性错误外-还可返回-error-类型错误对象来表示函数调用状态。",
      "children": []
    },
    {
      "level": 2,
      "title": "如何区别使用 panic 和 error 两种方式?",
      "slug": "如何区别使用-panic-和-error-两种方式",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1652697773000,
    "contributors": [
      {
        "name": "CSJerry",
        "email": "553537528@qq.com",
        "commits": 2
      },
      {
        "name": "csDeng",
        "email": "553537528@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "language/go/panic.md"
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
