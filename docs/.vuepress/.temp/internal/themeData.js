export const themeData = {
  "navbar": [
    {
      "text": "驿站",
      "link": "/"
    },
    {
      "text": "数据结构与算法",
      "link": "/algorithm/"
    },
    {
      "text": "计算机语言",
      "link": "/language/"
    },
    {
      "text": "操作系统",
      "link": "/os/"
    },
    {
      "text": "计算机网络",
      "link": "/network/"
    }
  ],
  "logo": "https://blog-1302546775.cos.ap-guangzhou.myqcloud.com/2021%2F12%2Flogo.jpg",
  "repo": "https://github.com/csDeng/tips",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
