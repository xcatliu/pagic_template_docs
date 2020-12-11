import projectConfig from '/pagic_template_docs/pagic.config.js';
import Ga from '/pagic_template_docs/_ga.js';
import Gitalk from '/pagic_template_docs/_gitalk.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic template docs",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic template docs</h1>\n<p>Use this template to create a Pagic site with the docs theme.</p>\n<ol>\n<li>Click the <strong>Use this template</strong> button</li>\n<li>Enter your <strong>Repository name</strong> and click the <strong>Create repository from template</strong> button</li>\n<li>Edit <code>pagic.config.ts</code> file and replace <code>root</code>, <code>github</code>, <code>nav[0].link</code> options</li>\n<li>Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages</li>\n</ol>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-17" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic template docs"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Use this template to create a Pagic site with the docs theme.</p>\n<ol>\n<li>Click the <strong>Use this template</strong> button</li>\n<li>Enter your <strong>Repository name</strong> and click the <strong>Create repository from template</strong> button</li>\n<li>Edit <code>pagic.config.ts</code> file and replace <code>root</code>, <code>github</code>, <code>nav[0].link</code> options</li>\n<li>Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages</li>\n</ol>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:18:25.000Z",
    'updated': "2020-12-11T11:31:49.000Z",
    'excerpt': "Use this template to create a Pagic site with the docs theme. 1. Click the Use this template button 2. Enter your Repository name and click the Create repository from template button 3. Edit pagic.config.ts fil...",
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
        ], clientID: "d5690cdd53ff6a9fc9df", clientSecret: "d026c52e779c6e70963eca753e21d2f53f8d1342", id: "index.html", owner: "xcatliu", pagerDirection: "first", repo: "pagic_template_docs", title: "Pagic template docs" })
};
