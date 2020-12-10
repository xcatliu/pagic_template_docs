import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "text": "Installation",
        "link": "getting_started/installation.html"
    },
    'next': {
        "text": "First steps",
        "link": "getting_started/first_steps.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/setup_your_environment.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/setup_your_environment.html",
    'title': "Set up your environment",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Set up your environment</h1>\n<p>To productively get going with Deno you should set up your environment. This\nmeans setting up shell autocomplete, environmental variables and your editor or\nIDE of choice.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Set up your environment"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>To productively get going with Deno you should set up your environment. This\nmeans setting up shell autocomplete, environmental variables and your editor or\nIDE of choice.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': "2020-12-10T10:05:10.000Z",
    'excerpt': "To productively get going with Deno you should set up your environment. This means setting up shell autocomplete, environmental variables and your editor or IDE of choice.",
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
