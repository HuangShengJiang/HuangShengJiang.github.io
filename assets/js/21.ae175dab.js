(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{259:function(e,n,s){"use strict";s.r(n);var t=s(2),a=Object(t.a)({},function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[e._v("VuePress 由两部分组成：一个以 Vue 驱动的主题系统的简约静态网站生成工具，和一个为编写技术文档而优化的默认主题。它是为了支持 Vue 子项目的文档需求而创建的。")])]),e._v(" "),s("h2",{attrs:{id:"写在前面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在前面","aria-hidden":"true"}},[e._v("#")]),e._v(" 写在前面")]),e._v(" "),s("p",[e._v("之前用过WordPress和Hexo建过个人博客，个人还是觉得还是VuePress最容易上手，直接上来就可以写，需要配置的地方很少，所以写一篇文章来记录一下。")]),e._v(" "),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 简单使用")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 安装\nyarn global add vuepress # 或者：npm install -g vuepress\n\n# 新增一个文件夹用于操作\nmkdir demo  # 或者也可以在你原有项目文件夹里直接进行操作。\ncd demo\n\n# 将 VuePress 作为一个本地依赖安装\nyarn add -D vuepress # 或者：npm install -D vuepress\n\n# 在当前文件夹中  新建一个 docs 文件夹 用于 存放文章\nmkdir docs\n\n# 在docs 文件夹中 新建一个 markdown 文件\necho '# Hello VuePress!' > docs/README.md\n\n# 运行一下试试\nvuepress dev docs\n> VuePress dev server listening at http://localhost:8080/\n")])])]),s("p",[e._v("点开网址会发现页面上出现了"),s("code",[e._v("Hello VuePress!")]),e._v("。\n"),s("img",{attrs:{src:"/img/library/vuepress/helloWorld.png",alt:"第一次运行"}})]),e._v(" "),s("p",[e._v("接下来在"),s("code",[e._v("package.json")]),e._v("中添加节点"),s("code",[e._v("scripts")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "devDependencies": {\n    "vuepress": "^0.14.11"\n  },\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs",\n  }\n}\n')])])]),s("p",[e._v("然后我们就可以愉快的使用"),s("code",[e._v("npm run dev")]),e._v("和"),s("code",[e._v("npm run build")]),e._v("来运行和构建项目了。")]),e._v(" "),s("p",[e._v("接下来我们再给这个原始的博客做一些配置，下来要说到最重要的配置文件"),s("code",[e._v("config.js")]),e._v("了")]),e._v(" "),s("p",[e._v("在之前创建的"),s("code",[e._v("docs")]),e._v("文件中新增一个"),s("code",[e._v(".vuepress")]),e._v("文件夹，并在里面新建一个"),s("code",[e._v("config.js")]),e._v("文件")]),e._v(" "),s("p",[e._v("做完上面的操作后，咱们博客的目录会像下面一样：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),s("p",[e._v("可以把下面的配置复制去做修改"),s("code",[e._v("config.js")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n    title: '网站标题',\n    description: '网站说明',\n    markdown: {\n        lineNumbers: false, // 代码块显示行号\n    },\n    themeConfig: {\n        author: 'Ray',\n        nav:[\n            // 导航栏配置（这里的地址都是基于‘docs’文件夹的，也就是说你的所有文章都必须放在docs文件夹下）\n            { text: \"Home\", link: \"/\"},\n            { text: 'Categories',\n                 items: [\n                     { text: '分类一', link: '/demo1/' }, //默认会链接到 该文件下的 index.md 或者README.md 文件\n                     { text: '分类二', link: '/demo2/' },\n                     { text: '分类三', link: '/demo3/' },\n                 ]\n            },\n            {text: 'GitHub', link: 'https://github.com/'} //可以跳转到别的页面\n        ],\n        //定义页面的显示的侧边栏\n        //(!!!注意：这里要和文件目录的相对位置相同，譬如下面的 article1.md 文件要放在 demo1 文件下等等)\n        sidebar:  {\n            '/demo1/': [\n                'article1'\n            ],\n            '/demo2/': [\n                'article2'\n            ],\n            '/demo3/':[\n               'article3'\n            ]\n        },\n        search: false,\n        searchMaxSuggestions: 10,\n    }\n}\n")])])]),s("p",[e._v("当你运行"),s("code",[e._v("npm run dev")]),e._v("时，会看到下面界面\n"),s("img",{attrs:{src:"/img/library/vuepress/show1.png",alt:"应用配置"}})]),e._v(" "),s("p",[e._v("但是点击所有页面都会出现404错误，那是因为你还没有对应位置的文章让应用链接到，\n让我们来完善目录，在"),s("code",[e._v("docs")]),e._v("文件下分别创建"),s("code",[e._v("demo1")]),e._v("、"),s("code",[e._v("demo2")]),e._v("和"),s("code",[e._v("demo3")]),e._v("三个文件夹，并新建默认的页面 README.md")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─ docs\n│  ├─ README.md\n│  ├─demo1\n│  │ └─ README.md\n│  ├─demo2\n│  │ └─ README.md\n│  ├─demo3\n│  │ └─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),s("p",[e._v("/demo1/README.md 可以随便写些内容进去。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("我是 demo1 的默认首页\n")])])]),s("p",[e._v("重新运行程序"),s("code",[e._v("npm run dev")]),e._v(",会看到已经可以从页面菜单进行跳转了。\n"),s("img",{attrs:{src:"/img/library/vuepress/show2.png",alt:"菜单跳转"}})]),e._v(" "),s("p",[e._v("当然这个时候你会发现侧边栏都是空白的，这是因为应用找不到对应的文件article1.md，来完善一下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─ docs\n│  ├─ README.md\n│  ├─demo1\n│  │ ├─ README.md\n│  │ └─ article1.md\n│  ├─demo2\n│  │ ├─ README.md\n│  │ └─ article1.md\n│  ├─demo3\n│  │ ├─ README.md\n│  │ └─ article1.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),s("p",[e._v("并为每篇文章指定一个标题，这里会用到 YAML front matter 语法，/demo1/article1.md:")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" demo1 的第一篇文章\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n    demo1 的第一篇文章\n")])])]),s("p",[e._v("定义好后，我们会看到侧边栏出现了第一篇文章\n"),s("img",{attrs:{src:"/img/library/vuepress/show3.png",alt:"定义侧边栏"}})]),e._v(" "),s("h2",{attrs:{id:"进阶使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 进阶使用")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("使用插件\n使用应用自带的插件可以丰富博客的内容，只要下载好对应的依赖，在配置文件"),s("code",[e._v("config.js")]),e._v("中启用即可。")]),e._v(" "),s("p",[e._v("下载依赖：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("yarn add -D @vuepress/plugin-active-header-links@next @vuepress/plugin-back-to-top@next @vuepress/plugin-google-analytics@next @vuepress/plugin-medium-zoom@next @vuepress/plugin-nprogress@next moment\n\n# OR npm install -D @vuepress/plugin-active-header-links@next @vuepress/plugin-back-to-top@next @vuepress/plugin-google-analytics@next @vuepress/plugin-medium-zoom@next @vuepress/plugin-nprogress@next moment\n")])])]),s("p",[e._v("修改配置文件"),s("code",[e._v("config.js")]),e._v(" ：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("module.exports = {\n    title: '网站标题',\n    description: '网站说明',\n    markdown: {\n        lineNumbers: false, // 代码块显示行号\n    },\n    themeConfig: {\n        author: '全局作者名称',\n        nav:[\n            // 导航栏配置\n            { text: \"Home\", link: \"/\"},\n            { text: 'Categories',\n                 items: [\n                     { text: '分类一', link: '/demo1/' },\n                     { text: '分类二', link: '/demo2/' },\n                     { text: '分类三', link: '/demo3/' },\n                 ]\n            },\n            {text: 'About', link: '/about/'},\n            {text: 'GitHub', link: 'https://github.com/'}\n        ],\n        //定义页面的显示的侧边栏(!!!注意：这里)\n        sidebar:  {\n            '/demo1/': [\n                'article1'\n            ],\n            '/demo2/': [\n                'article1'\n            ],\n            '/demo3/':[\n               'article1'\n            ]\n        },\n        search: false,\n        searchMaxSuggestions: 10,\n    },\n    plugins:{\n        //返回顶部插件\n        '@vuepress/back-to-top':{},\n        //滚动标题插件\n        '@vuepress/active-header-links':{},\n        //谷歌分析插件\n        '@vuepress/google-analytics':{\n            'ga': ''\n        },\n        //最近更新显示插件\n        '@vuepress/last-updated':{\n\n            transformer: (timestamp, lang) => {\n                    const moment = require('moment');\n                    //暂时默认使用中文\n                    moment.locale('zh-cn');\n                    return moment(timestamp).fromNow()\n                }\n        },\n        //图片点击浏览插件\n        '@vuepress/medium-zoom':{},\n        //进度条插件\n        '@vuepress/nprogress':{}\n    }\n}\n")])])])]),e._v(" "),s("li",[s("p",[e._v("使用主题\n修改主题很简单，只要去修改配置文件"),s("code",[e._v("config.js")]),e._v("中的"),s("code",[e._v("theme")]),e._v("节点，即可简单应用，个性化配置则需要修改"),s("code",[e._v("themeConfig")]),e._v("节点，具体要看主题的需求。")])])]),e._v(" "),s("h2",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),s("p",[e._v("VuePress官网给出各种部署的方式，详情可以看 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress-部署"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress官网"),s("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=a.exports}}]);