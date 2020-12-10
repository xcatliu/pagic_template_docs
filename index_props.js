import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic template docs",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic template docs</h1>\n<ol>\n<li>Click the <strong>Use this template</strong> button</li>\n<li>Enter your <strong>Repository name</strong> and click the <strong>Create repository from template</strong> button</li>\n<li>Edit <code>pagic.config.ts</code> file and replace <code>root</code>, <code>github</code>, <code>nav[0].link</code> options</li>\n<li>Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages</li>\n</ol>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic template docs"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ol>\n<li>Click the <strong>Use this template</strong> button</li>\n<li>Enter your <strong>Repository name</strong> and click the <strong>Create repository from template</strong> button</li>\n<li>Edit <code>pagic.config.ts</code> file and replace <code>root</code>, <code>github</code>, <code>nav[0].link</code> options</li>\n<li>Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages</li>\n</ol>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:18:25.000Z",
    'updated': "2020-12-10T10:27:44.000Z",
    'excerpt': " 1. Click the Use this template button 2. Enter your Repository name and click the Create repository from template button 3. Edit pagic.config.ts file and replace root, github, nav[0].link options 4. Go to Sett...",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "getting_started/index.html",
            "children": [
                {
                    "text": "Installation",
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "text": "Set up your environment",
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
                    "text": "First steps",
                    "link": "getting_started/first_steps.html",
                    "pagePath": "getting_started/first_steps.md"
                }
            ],
            "text": "Getting Started",
            "pagePath": "getting_started/README.md"
        },
        {
            "link": "the_runtime/index.html",
            "children": [
                {
                    "text": "Stability",
                    "link": "the_runtime/stability.html",
                    "pagePath": "the_runtime/stability.md"
                }
            ],
            "text": "The Runtime",
            "pagePath": "the_runtime/README.md"
        }
    ],
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
