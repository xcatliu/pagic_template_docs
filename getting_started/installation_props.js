import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "link": "getting_started/index.html",
        "text": "Getting Started"
    },
    'next': {
        "text": "Set up your environment",
        "link": "getting_started/setup_your_environment.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/installation.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/installation.html",
    'title': "Installation",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Installation</h1>\n<p>Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It\nhas no external dependencies.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Installation"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It\nhas no external dependencies.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': "2020-12-10T10:05:10.000Z",
    'excerpt': "Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It has no external dependencies.",
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
