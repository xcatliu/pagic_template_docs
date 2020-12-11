import projectConfig from '/pagic_template_docs/pagic.config.js';
import Ga from '/pagic_template_docs/_ga.js';
import Gitalk from '/pagic_template_docs/_gitalk.js';
export default {
    'prev': null,
    'next': null,
    config: { "root": "/", ...projectConfig },
    'pagePath': "test_pages/front_matter.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/front_matter_test.html",
    'title': "Front matter test",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-17" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>This is a front matter test page.</p>\n<h2 id="the-front-matter-content">The front matter content<a class="anchor" href="#the-front-matter-content">§</a></h2>\n<pre class="language-yml"><code class="language-yml"><span class="token key atrule">outputPath</span><span class="token punctuation">:</span> test_pages/front_matter_test.html\n<span class="token key atrule">title</span><span class="token punctuation">:</span> Front matter\n<span class="token key atrule">toc</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">next</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-11T11:31:49.000Z",
    'updated': null,
    'excerpt': "This is a front matter test page. The front matter content outputPath: test_pages/front_matter_test.html title: Front matter toc: null prev: null next: null ",
    'cover': undefined,
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "text": "Test pages",
            "pagePath": "test_pages/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "d5690cdd53ff6a9fc9df", clientSecret: "d026c52e779c6e70963eca753e21d2f53f8d1342", id: "test_pages/front_matter_test.html", owner: "xcatliu", pagerDirection: "first", repo: "pagic_template_docs", title: "Front matter test" })
};
