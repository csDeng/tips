module.exports = {
    navbar: [
        {
            text: '驿站',
            link: '/',
        },
        {
            text: '数据结构与算法',
            children: [
                { text: '数据结构与算法', link: '/algorithm/' },
                { text: 'leet code', link: '/leetcode/' }
            ],

        },
        {
            text: '计算机语言',
            children: [
                { text: 'Java', link: '/language/Java' },
                { text: 'Golang', link: '/language/go'},
            ]
        },
        {
            text: '数据库',
            children: [
                { text: 'MySQL', link: '/database/MySQL/' },
                { text: 'Redis', link: '/database/Redis/' }],
        },
        {
            text: "其他",
            children: [
                {
                    text: "nginx",
                    link: "/other/Nginx"
                },
                {
                    text: "docker",
                    link: "/other/Docker/"
                },
                {
                    text: "AIGC",
                    link: "/AI/"
                },
                {
                    text: "other",
                    link: "/other/"
                }
            ]
        },
        {
            text: '面试神器~八股',
            link: '/interview/',
        },
        {
            text: '关于',
            link: '/about'
        }
        // // NavbarGroup
        // {
        // text: 'Group',
        // children: ['/group/foo.md', '/group/bar.md'],
        // },
        // // 字符串 - 页面文件路径
        // '/bar/README.md',
    ],
    logo: 'https://blog-1302546775.cos.ap-guangzhou.myqcloud.com/2021%2F12%2Flogo.jpg',
    repo: 'https://github.com/csDeng/tips',
}
