import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "link": "getting_started/installation.html"
    },
    'next': {
        "link": "getting_started/first_steps.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "getting_started/setup_your_environment.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "getting_started/setup_your_environment.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="set-up-your-environment">Set up your environment<a class="anchor" href="#set-up-your-environment">§</a></h2>\n<p>To productively get going with Deno you should set up your environment. This\nmeans setting up shell autocomplete, environmental variables and your editor or\nIDE of choice.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="set-up-your-environment">Set up your environment<a class="anchor" href="#set-up-your-environment">§</a></h2>\n<p>To productively get going with Deno you should set up your environment. This\nmeans setting up shell autocomplete, environmental variables and your editor or\nIDE of choice.</p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#set-up-your-environment">Set up your environment</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "Set up your environment To productively get going with Deno you should set up your environment. This means setting up shell autocomplete, environmental variables and your editor or IDE of choice.",
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
