import projectConfig from '/pagic_template_docs/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
import Ga from '/pagic_template_docs/_ga.js';
import Gitalk from '/pagic_template_docs/_gitalk.js';
export default {
    'prev': {
        "text": "Front matter test",
        "link": "test_pages/front_matter_test.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "test_pages/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            branch: 'main',
            description: 'Use this template to create a Pagic site with the docs theme',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'LICENSE',
                'dist'
            ],
            ga: {
                id: 'UA-45256157-17'
            },
            gitalk: {
                admin: [
                    'xcatliu'
                ],
                clientID: '29aa4941759fc887ed4f',
                clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
                owner: 'xcatliu',
                pagerDirection: 'first',
                repo: 'pagic_template_docs'
            },
            github: 'https://github.com/xcatliu/pagic_template_docs',
            include: undefined,
            nav: [
                {
                    link: '/pagic_template_docs/introduction/index.html',
                    text: 'Docs'
                },
                {
                    align: 'right',
                    link: '/about/index.html',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next',
                'ga',
                'gitalk'
            ],
            port: 8000,
            root: '/pagic_template_docs/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/README.md',
                    {
                        children: [
                            'test_pages/markdown_test.md',
                            'test_pages/front_matter.md',
                            'test_pages/react_hooks_test.tsx'
                        ],
                        link: 'test_pages/README.md'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'Pagic template docs',
            tools: {
                backToTop: true,
                editOnGitHub: true
            },
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-17" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "text": "Test pages",
            "pagePath": "test_pages/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "test_pages/react_hooks_test.html", owner: "xcatliu", pagerDirection: "first", repo: "pagic_template_docs", title: "React hooks test" })
};
