const  {
    themeConfig,
    markdown,
    plugins
} = require('./config/index')


module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'CSJerry',
    description: '重学CS',
    dst: `../../dist`,
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig:themeConfig,
    markdown,
    plugins
}
