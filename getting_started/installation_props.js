import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/installation.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/installation.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="installation">Installation<a class="anchor" href="#installation">§</a></h2>\n<p>Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It\nhas no external dependencies.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="installation">Installation<a class="anchor" href="#installation">§</a></h2>\n<p>Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It\nhas no external dependencies.</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#installation">Installation</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "Installation Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It has no external dependencies.",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
