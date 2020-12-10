import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic template docs",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic template docs</h1>\n<p>Pagic template docs</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic template docs"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Pagic template docs</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:18:25.000Z",
    'updated': "2020-12-10T09:54:22.000Z",
    'excerpt': "Pagic template docs",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
