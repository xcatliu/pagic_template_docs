import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': {
        "link": "getting_started/index.html",
        "text": "Getting Started"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "introduction/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "introduction/index.html",
    'title': "Introduction",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Introduction</h1>\n<p>Deno is a JavaScript/TypeScript runtime with secure defaults and a great\ndeveloper experience.</p>\n<p>It\'s built on V8, Rust, and Tokio.</p>\n<h2 id="feature-highlights">Feature Highlights<a class="anchor" href="#feature-highlights">§</a></h2>\n<ul>\n<li>Secure by default. No file, network, or environment access (unless explicitly\nenabled).</li>\n<li>Supports TypeScript out of the box.</li>\n<li>Ships a single executable (<code>deno</code>).</li>\n<li>Has built-in utilities like a dependency inspector (<code>deno info</code>) and a code\nformatter (<code>deno fmt</code>).</li>\n<li>Has\n<a href="https://github.com/denoland/deno/tree/master/std">a set of reviewed (audited) standard\nmodules</a> that are guaranteed\nto work with Deno.</li>\n<li>Scripts can be bundled into a single JavaScript file.</li>\n</ul>\n<h2 id="philosophy">Philosophy<a class="anchor" href="#philosophy">§</a></h2>\n<p>Deno aims to be a productive and secure scripting environment for the modern\nprogrammer.</p>\n<p>Deno will always be distributed as a single executable. Given a URL to a Deno\nprogram, it is runnable with nothing more than\n<a href="https://github.com/denoland/deno/releases">the ~15 megabyte zipped executable</a>.\nDeno explicitly takes on the role of both runtime and package manager. It uses a\nstandard browser-compatible protocol for loading modules: URLs.</p>\n<p>Among other things, Deno is a great replacement for utility scripts that may\nhave been historically written with bash or python.</p>\n<h2 id="goals">Goals<a class="anchor" href="#goals">§</a></h2>\n<ul>\n<li>Only ship a single executable (<code>deno</code>).</li>\n<li>Provide Secure Defaults.\n<ul>\n<li>Unless specifically allowed, scripts can\'t access files, the environment, or\nthe network.</li>\n</ul>\n</li>\n<li>Browser compatible: The subset of Deno programs which are written completely\nin JavaScript and do not use the global <code>Deno</code> namespace (or feature test for\nit), ought to also be able to be run in a modern web browser without change.</li>\n<li>Provide built-in tooling like unit testing, code formatting, and linting to\nimprove developer experience.</li>\n<li>Does not leak V8 concepts into user land.</li>\n<li>Be able to serve HTTP efficiently.</li>\n</ul>\n<h2 id="comparison-to-nodejs">Comparison to Node.js<a class="anchor" href="#comparison-to-nodejs">§</a></h2>\n<ul>\n<li>\n<p>Deno does not use <code>npm</code>.</p>\n<ul>\n<li>It uses modules referenced as URLs or file paths.</li>\n</ul>\n</li>\n<li>\n<p>Deno does not use <code>package.json</code> in its module resolution algorithm.</p>\n</li>\n<li>\n<p>All async actions in Deno return a promise. Thus Deno provides different APIs\nthan Node.</p>\n</li>\n<li>\n<p>Deno requires explicit permissions for file, network, and environment access.</p>\n</li>\n<li>\n<p>Deno always dies on uncaught errors.</p>\n</li>\n<li>\n<p>Uses &quot;ES Modules&quot; and does not support <code>require()</code>. Third party modules are\nimported via URLs:</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">import</span> <span class="token imports"><span class="token operator">*</span> <span class="token keyword module">as</span> log</span> <span class="token keyword module">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@">https://deno.land/std@</a>$STD_VERSION/log/mod.ts"</span><span class="token punctuation">;</span>\n</code></pre>\n</li>\n</ul>\n<h2 id="other-key-behaviors">Other key behaviors<a class="anchor" href="#other-key-behaviors">§</a></h2>\n<ul>\n<li>Remote code is fetched and cached on first execution, and never updated until\nthe code is run with the <code>--reload</code> flag. (So, this will still work on an\nairplane.)</li>\n<li>Modules/files loaded from remote URLs are intended to be immutable and\ncacheable.</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Introduction"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Deno is a JavaScript/TypeScript runtime with secure defaults and a great\ndeveloper experience.</p>\n<p>It\'s built on V8, Rust, and Tokio.</p>\n<h2 id="feature-highlights">Feature Highlights<a class="anchor" href="#feature-highlights">§</a></h2>\n<ul>\n<li>Secure by default. No file, network, or environment access (unless explicitly\nenabled).</li>\n<li>Supports TypeScript out of the box.</li>\n<li>Ships a single executable (<code>deno</code>).</li>\n<li>Has built-in utilities like a dependency inspector (<code>deno info</code>) and a code\nformatter (<code>deno fmt</code>).</li>\n<li>Has\n<a href="https://github.com/denoland/deno/tree/master/std">a set of reviewed (audited) standard\nmodules</a> that are guaranteed\nto work with Deno.</li>\n<li>Scripts can be bundled into a single JavaScript file.</li>\n</ul>\n<h2 id="philosophy">Philosophy<a class="anchor" href="#philosophy">§</a></h2>\n<p>Deno aims to be a productive and secure scripting environment for the modern\nprogrammer.</p>\n<p>Deno will always be distributed as a single executable. Given a URL to a Deno\nprogram, it is runnable with nothing more than\n<a href="https://github.com/denoland/deno/releases">the ~15 megabyte zipped executable</a>.\nDeno explicitly takes on the role of both runtime and package manager. It uses a\nstandard browser-compatible protocol for loading modules: URLs.</p>\n<p>Among other things, Deno is a great replacement for utility scripts that may\nhave been historically written with bash or python.</p>\n<h2 id="goals">Goals<a class="anchor" href="#goals">§</a></h2>\n<ul>\n<li>Only ship a single executable (<code>deno</code>).</li>\n<li>Provide Secure Defaults.\n<ul>\n<li>Unless specifically allowed, scripts can\'t access files, the environment, or\nthe network.</li>\n</ul>\n</li>\n<li>Browser compatible: The subset of Deno programs which are written completely\nin JavaScript and do not use the global <code>Deno</code> namespace (or feature test for\nit), ought to also be able to be run in a modern web browser without change.</li>\n<li>Provide built-in tooling like unit testing, code formatting, and linting to\nimprove developer experience.</li>\n<li>Does not leak V8 concepts into user land.</li>\n<li>Be able to serve HTTP efficiently.</li>\n</ul>\n<h2 id="comparison-to-nodejs">Comparison to Node.js<a class="anchor" href="#comparison-to-nodejs">§</a></h2>\n<ul>\n<li>\n<p>Deno does not use <code>npm</code>.</p>\n<ul>\n<li>It uses modules referenced as URLs or file paths.</li>\n</ul>\n</li>\n<li>\n<p>Deno does not use <code>package.json</code> in its module resolution algorithm.</p>\n</li>\n<li>\n<p>All async actions in Deno return a promise. Thus Deno provides different APIs\nthan Node.</p>\n</li>\n<li>\n<p>Deno requires explicit permissions for file, network, and environment access.</p>\n</li>\n<li>\n<p>Deno always dies on uncaught errors.</p>\n</li>\n<li>\n<p>Uses &quot;ES Modules&quot; and does not support <code>require()</code>. Third party modules are\nimported via URLs:</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword module">import</span> <span class="token imports"><span class="token operator">*</span> <span class="token keyword module">as</span> log</span> <span class="token keyword module">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std@">https://deno.land/std@</a>$STD_VERSION/log/mod.ts"</span><span class="token punctuation">;</span>\n</code></pre>\n</li>\n</ul>\n<h2 id="other-key-behaviors">Other key behaviors<a class="anchor" href="#other-key-behaviors">§</a></h2>\n<ul>\n<li>Remote code is fetched and cached on first execution, and never updated until\nthe code is run with the <code>--reload</code> flag. (So, this will still work on an\nairplane.)</li>\n<li>Modules/files loaded from remote URLs are intended to be immutable and\ncacheable.</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#feature-highlights">Feature Highlights</a></li><li><a href="#philosophy">Philosophy</a></li><li><a href="#goals">Goals</a></li><li><a href="#comparison-to-nodejs">Comparison to Node.js</a></li><li><a href="#other-key-behaviors">Other key behaviors</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:54:22.000Z",
    'updated': null,
    'excerpt': "Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience. It's built on V8, Rust, and Tokio. Feature Highlights - Secure by default. No file, network, or environment access ...",
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
