import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "text": "Set up your environment",
        "link": "getting_started/setup_your_environment.html"
    },
    'next': {
        "link": "the_runtime/index.html",
        "text": "Runtime"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/first_steps.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/first_steps.html",
    'title': "First steps",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>First steps</h1>\n<p>This page contains some examples to teach you about the fundamentals of Deno.</p>\n<p>This document assumes that you have some prior knowledge of JavaScript,\nespecially about <code>async</code>/<code>await</code>. If you have no prior knowledge of JavaScript,\nyou might want to follow a guide\n<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">on the basics of JavaScript</a>\nbefore attempting to start with Deno.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "First steps"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This page contains some examples to teach you about the fundamentals of Deno.</p>\n<p>This document assumes that you have some prior knowledge of JavaScript,\nespecially about <code>async</code>/<code>await</code>. If you have no prior knowledge of JavaScript,\nyou might want to follow a guide\n<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">on the basics of JavaScript</a>\nbefore attempting to start with Deno.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': "2020-12-10T10:05:10.000Z",
    'excerpt': "This page contains some examples to teach you about the fundamentals of Deno. This document assumes that you have some prior knowledge of JavaScript, especially about async/await. If you have no prior knowledge...",
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
            "text": "Runtime",
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
