import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/index.html",
    'title': "Getting Started",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Getting Started</h1>\n<p>In this chapter we\'ll discuss:</p>\n<ul>\n<li><a href="./installation.html">Installing Deno</a></li>\n<li><a href="./setup_your_environment.html">Setting up your environment</a></li>\n<li><a href="./first_steps.html">Running a <code>Hello World</code> script</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Getting Started"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>In this chapter we\'ll discuss:</p>\n<ul>\n<li><a href="./installation.html">Installing Deno</a></li>\n<li><a href="./setup_your_environment.html">Setting up your environment</a></li>\n<li><a href="./first_steps.html">Running a <code>Hello World</code> script</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "In this chapter we'll discuss: - Installing Deno - Setting up your environment - Running a Hello World script",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [],
        "categories": [],
        "tags": []
    }
};
