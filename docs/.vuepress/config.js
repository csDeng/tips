const  {
    themeConfig,
    markdown,
    plugins
} = require('./config/index')


module.exports = {
    // 站点配置
    base: '/a/',
    lang: 'zh-CN',
    title: 'CSJerry',
    description: '弱小与无知不是生存的障碍，傲慢才是',
    dst: `../../dist`,
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig:themeConfig,
    markdown,
    plugins
}
