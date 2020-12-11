import projectConfig from '/pagic_template_docs/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic template docs",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic template docs</h1>\n<p>Use this template to create a <a href="https://pagic.org">Pagic</a> site with the <em>docs</em> theme.</p>\n<h2 id="1-click-the-use-this-template-button-in-this-repo">1. Click the <em>Use this template</em> button in <a href="https://github.com/xcatliu/pagic_template_docs">this repo</a><a class="anchor" href="#1-click-the-use-this-template-button-in-this-repo">§</a></h2>\n<p><img src="./assets/1.png" alt="Step 1"></p>\n<h2 id="2-enter-the-repository-name-and-click-the-create-repository-from-template-button">2. Enter the <em>Repository name</em> and click the <em>Create repository from template</em> button<a class="anchor" href="#2-enter-the-repository-name-and-click-the-create-repository-from-template-button">§</a></h2>\n<p><img src="./assets/2.png" alt="Step 2"></p>\n<h2 id="3-edit-pagicconfigts-file-replace-pagic_template_docs-by-the-repository-name">3. Edit <code>pagic.config.ts</code> file, replace <code>pagic_template_docs</code> by the <em>Repository name</em><a class="anchor" href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-by-the-repository-name">§</a></h2>\n<p><img src="./assets/3.png" alt="Step 3"></p>\n<h2 id="4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to <em>Settings</em> &gt; <em>Options</em> &gt; <em>GitHub Pages</em> and set Branch to gh-pages<a class="anchor" href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">§</a></h2>\n<p><img src="./assets/4.png" alt="Step 4"></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic template docs"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Use this template to create a <a href="https://pagic.org">Pagic</a> site with the <em>docs</em> theme.</p>\n<h2 id="1-click-the-use-this-template-button-in-this-repo">1. Click the <em>Use this template</em> button in <a href="https://github.com/xcatliu/pagic_template_docs">this repo</a><a class="anchor" href="#1-click-the-use-this-template-button-in-this-repo">§</a></h2>\n<p><img src="./assets/1.png" alt="Step 1"></p>\n<h2 id="2-enter-the-repository-name-and-click-the-create-repository-from-template-button">2. Enter the <em>Repository name</em> and click the <em>Create repository from template</em> button<a class="anchor" href="#2-enter-the-repository-name-and-click-the-create-repository-from-template-button">§</a></h2>\n<p><img src="./assets/2.png" alt="Step 2"></p>\n<h2 id="3-edit-pagicconfigts-file-replace-pagic_template_docs-by-the-repository-name">3. Edit <code>pagic.config.ts</code> file, replace <code>pagic_template_docs</code> by the <em>Repository name</em><a class="anchor" href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-by-the-repository-name">§</a></h2>\n<p><img src="./assets/3.png" alt="Step 3"></p>\n<h2 id="4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to <em>Settings</em> &gt; <em>Options</em> &gt; <em>GitHub Pages</em> and set Branch to gh-pages<a class="anchor" href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">§</a></h2>\n<p><img src="./assets/4.png" alt="Step 4"></p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#1-click-the-use-this-template-button-in-this-repo">1. Click the Use this template button in this repo</a></li><li><a href="#2-enter-the-repository-name-and-click-the-create-repository-from-template-button">2. Enter the Repository name and click the Create repository from template button</a></li><li><a href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-by-the-repository-name">3. Edit pagic.config.ts file, replace pagic_template_docs by the Repository name</a></li><li><a href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to Settings &gt; Options &gt; GitHub Pages and set Branch to gh-pages</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:18:25.000Z",
    'updated': "2020-12-11T14:00:02.000Z",
    'excerpt': "Use this template to create a Pagic site with the docs theme. 1. Click the Use this template button in this repo 2. Enter the Repository name and click the Create repository from template button 3. Edit pagic.c...",
    'cover': "./assets/1.png",
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
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ]
};
