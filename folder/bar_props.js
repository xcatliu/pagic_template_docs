import projectConfig from '/pagic_template_docs/pagic.config.js';
import Ga from '/pagic_template_docs/_ga.js';
import Gitalk from '/pagic_template_docs/_gitalk.js';
export default {
    'prev': {
        "text": "Foo",
        "link": "folder/foo.html"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "folder/bar.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "folder/bar.html",
    'title': "Bar",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Bar</h1>\n<p>The bar page.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-17" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Bar"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The bar page.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-11T12:41:15.000Z",
    'updated': null,
    'excerpt': "The bar page.",
    'cover': undefined,
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
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "d5690cdd53ff6a9fc9df", clientSecret: "d026c52e779c6e70963eca753e21d2f53f8d1342", id: "folder/bar.html", owner: "xcatliu", pagerDirection: "first", repo: "pagic_template_docs", title: "Bar" })
};
