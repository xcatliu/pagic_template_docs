import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': {
        "link": "the_runtime/index.html",
        "text": "The Runtime"
    },
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "the_runtime/stability.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "the_runtime/stability.html",
    'title': "Stability",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Stability</h1>\n<p>As of Deno 1.0.0, the <code>Deno</code> namespace APIs are stable. That means we will\nstrive to make code working under 1.0.0 continue to work in future versions.</p>\n<p>However, not all of Deno\'s features are ready for production yet. Features which\nare not ready, because they are still in draft phase, are locked behind the\n<code>--unstable</code> command line flag.</p>\n<pre class="language-shell"><code class="language-shell">deno run --unstable mod_which_uses_unstable_stuff.ts\n</code></pre>\n<p>Passing this flag does a few things:</p>\n<ul>\n<li>It enables the use of unstable APIs during runtime.</li>\n<li>It adds the\n<a href="https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/master/cli/dts/lib.deno.unstable.d.ts"><code>lib.deno.unstable.d.ts</code></a>\nfile to the list of TypeScript definitions that are used for type checking.\nThis includes the output of <code>deno types</code>.</li>\n</ul>\n<p>You should be aware that many unstable APIs have <strong>not undergone a security\nreview</strong>, are likely to have <strong>breaking API changes</strong> in the future, and are\n<strong>not ready for production</strong>.</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Stability"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>As of Deno 1.0.0, the <code>Deno</code> namespace APIs are stable. That means we will\nstrive to make code working under 1.0.0 continue to work in future versions.</p>\n<p>However, not all of Deno\'s features are ready for production yet. Features which\nare not ready, because they are still in draft phase, are locked behind the\n<code>--unstable</code> command line flag.</p>\n<pre class="language-shell"><code class="language-shell">deno run --unstable mod_which_uses_unstable_stuff.ts\n</code></pre>\n<p>Passing this flag does a few things:</p>\n<ul>\n<li>It enables the use of unstable APIs during runtime.</li>\n<li>It adds the\n<a href="https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/master/cli/dts/lib.deno.unstable.d.ts"><code>lib.deno.unstable.d.ts</code></a>\nfile to the list of TypeScript definitions that are used for type checking.\nThis includes the output of <code>deno types</code>.</li>\n</ul>\n<p>You should be aware that many unstable APIs have <strong>not undergone a security\nreview</strong>, are likely to have <strong>breaking API changes</strong> in the future, and are\n<strong>not ready for production</strong>.</p>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "As of Deno 1.0.0, the Deno namespace APIs are stable. That means we will strive to make code working under 1.0.0 continue to work in future versions. However, not all of Deno's features are ready for production...",
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
