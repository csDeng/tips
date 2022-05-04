module.exports =  {
    navbar: [
        {
            text: '驿站',
            link: '/',
        },
        {
            text: '数据结构与算法',
            children: [
                {text:'数据结构与算法', link:'/algorithm/'},
                {text:'leet code', link:'/leetcode/'}
            ],

        },
        {
            text: '计算机语言',
            link: '/language/',
        },
        {
            text: '操作系统',
            link: '/os/',
        },
        {
            text: '计算机网络',
            link: '/network/',
        },
        {
        text: '数据库',
        children: [
            {text:'MySQL', link:'/database/MySQL/'},
            {text:'Redis', link:'/database/Redis/'}],
        },
        {
            text:'其他',
            link:'/other/'
        }
        // // NavbarGroup
        // {
        // text: 'Group',
        // children: ['/group/foo.md', '/group/bar.md'],
        // },
        // // 字符串 - 页面文件路径
        // '/bar/README.md',
    ],
    logo:'https://blog-1302546775.cos.ap-guangzhou.myqcloud.com/2021%2F12%2Flogo.jpg',
    repo: 'https://github.com/csDeng/tips',
}
