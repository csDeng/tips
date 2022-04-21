export const data = {
  "key": "v-213952d3",
  "path": "/language/go/net/tcp.html",
  "title": "Go语言TCP Socket编程",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "一、模型",
      "slug": "一、模型",
      "children": []
    },
    {
      "level": 2,
      "title": "二、TCP连接的建立",
      "slug": "二、tcp连接的建立",
      "children": [
        {
          "level": 3,
          "title": "对于客户端而言，连接的建立会遇到如下几种情形：",
          "slug": "对于客户端而言-连接的建立会遇到如下几种情形",
          "children": [
            {
              "level": 4,
              "title": "1、网络不可达或对方服务未启动",
              "slug": "_1、网络不可达或对方服务未启动",
              "children": []
            },
            {
              "level": 4,
              "title": "2、对方服务的listen backlog满",
              "slug": "_2、对方服务的listen-backlog满",
              "children": []
            },
            {
              "level": 4,
              "title": "3、网络延迟较大，Dial阻塞并超时",
              "slug": "_3、网络延迟较大-dial阻塞并超时",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "level": 2,
      "title": "三、Socket读写",
      "slug": "三、socket读写",
      "children": [
        {
          "level": 3,
          "title": "conn.Read",
          "slug": "conn-read",
          "children": [
            {
              "level": 4,
              "title": "1、Socket中无数据",
              "slug": "_1、socket中无数据",
              "children": []
            },
            {
              "level": 4,
              "title": "2、Socket中有部分数据",
              "slug": "_2、socket中有部分数据",
              "children": []
            },
            {
              "level": 4,
              "title": "3、Socket中有足够数据",
              "slug": "_3、socket中有足够数据",
              "children": []
            },
            {
              "level": 4,
              "title": "4、Socket关闭",
              "slug": "_4、socket关闭",
              "children": []
            },
            {
              "level": 4,
              "title": "5、读取操作超时",
              "slug": "_5、读取操作超时",
              "children": []
            }
          ]
        },
        {
          "level": 3,
          "title": "conn.Write",
          "slug": "conn-write",
          "children": [
            {
              "level": 4,
              "title": "1、成功写",
              "slug": "_1、成功写",
              "children": []
            },
            {
              "level": 4,
              "title": "2、写阻塞",
              "slug": "_2、写阻塞",
              "children": []
            },
            {
              "level": 4,
              "title": "3、写入部分数据",
              "slug": "_3、写入部分数据",
              "children": []
            },
            {
              "level": 4,
              "title": "4、写入超时",
              "slug": "_4、写入超时",
              "children": []
            }
          ]
        },
        {
          "level": 3,
          "title": "Goroutine safe",
          "slug": "goroutine-safe",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "四、Socket属性",
      "slug": "四、socket属性",
      "children": []
    },
    {
      "level": 2,
      "title": "五、关闭连接",
      "slug": "五、关闭连接",
      "children": []
    },
    {
      "level": 2,
      "title": "六、小结",
      "slug": "六、小结",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650474273000,
    "contributors": [
      {
        "name": "CSJerry",
        "email": "553537528@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "language/go/net/tcp.md"
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
