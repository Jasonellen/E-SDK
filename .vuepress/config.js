module.exports = {
    // base: '/docs/',
    base:'/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            // {
            //     text: '版本1.0.0',
            //     items: [
            //         { text: '1.0.0', link: '/language/chinese' },
            //         { text: '1.0.1', link: '/language/japanese' }
            //     ]
            // }
        ],
        sidebar: [
            {
                title: '项目启动',
                collapsable: false, //是否展开
                children: [
                    '../user/login',
                  ]
            },
            {
                title: 'App方法',
                collapsable: false, //是否展开
                children: [
                    '../bar/app',
                    '../bar/four',
                  ]
            },
            {
                title: 'Eobj方法',
                collapsable: false, //是否展开
                children: [
                    '../apis/ready',
                    '../apis/setUser',
                    '../apis/setShowChat',
                    '../apis/setMapData',
                    '../apis/setThemeColor',
                    '../apis/startRequestWithText',
                  ]
            },
            {
                title: '渲染模版',
                collapsable: true,
                children: [
                      '../list/Person',      
                  ]
            },
        ]
    },
    title: '小E-SDK文档',
    description: '语音接入指南'
}