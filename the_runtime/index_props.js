import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "link": "getting_started/first_steps.html"
    },
    'next': {
        "text": "Stability",
        "link": "the_runtime/stability.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "the_runtime/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "the_runtime/index.html",
    'title': "Runtime",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Runtime</h1>\n<p>Documentation for all runtime functions (Web APIs + <code>Deno</code> global) can be found\non\n<a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts"><code>doc.deno.land</code></a>.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Runtime"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Documentation for all runtime functions (Web APIs + <code>Deno</code> global) can be found\non\n<a href="https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts"><code>doc.deno.land</code></a>.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "Documentation for all runtime functions (Web APIs + Deno global) can be found on doc.deno.land.",
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
                    "link": "getting_started/installation.html",
                    "pagePath": "getting_started/installation.md"
                },
                {
                    "link": "getting_started/setup_your_environment.html",
                    "pagePath": "getting_started/setup_your_environment.md"
                },
                {
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
