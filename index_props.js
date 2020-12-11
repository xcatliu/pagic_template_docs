import projectConfig from '/pagic_template_docs/pagic.config.js';
import Ga from '/pagic_template_docs/_ga.js';
import Gitalk from '/pagic_template_docs/_gitalk.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Pagic template docs",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Pagic template docs</h1>\n<p>Use this template to create a Pagic site with the <em>docs</em> theme.</p>\n<h2 id="1-click-the-use-this-template-button">1. Click the <strong>Use this template</strong> button<a class="anchor" href="#1-click-the-use-this-template-button">§</a></h2>\n<p><img src="./assets/1.png" alt="Step 1"></p>\n<h2 id="2-enter-your-repository-name-and-click-the-create-repository-from-template-button">2. Enter your <strong>repository name</strong> and click the <strong>Create repository from template</strong> button<a class="anchor" href="#2-enter-your-repository-name-and-click-the-create-repository-from-template-button">§</a></h2>\n<p><img src="./assets/2.png" alt="Step 2"></p>\n<h2 id="3-edit-pagicconfigts-file-replace-pagic_template_docs-to-your-repositorys-name">3. Edit <code>pagic.config.ts</code> file, replace <code>pagic_template_docs</code> to your repository\'s name<a class="anchor" href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-to-your-repositorys-name">§</a></h2>\n<p><img src="./assets/3.png" alt="Step 3"></p>\n<h2 id="4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages<a class="anchor" href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">§</a></h2>\n<p><img src="./assets/4.png" alt="Step 4"></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-17" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/pagic_template_docs/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Pagic template docs"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Use this template to create a Pagic site with the <em>docs</em> theme.</p>\n<h2 id="1-click-the-use-this-template-button">1. Click the <strong>Use this template</strong> button<a class="anchor" href="#1-click-the-use-this-template-button">§</a></h2>\n<p><img src="./assets/1.png" alt="Step 1"></p>\n<h2 id="2-enter-your-repository-name-and-click-the-create-repository-from-template-button">2. Enter your <strong>repository name</strong> and click the <strong>Create repository from template</strong> button<a class="anchor" href="#2-enter-your-repository-name-and-click-the-create-repository-from-template-button">§</a></h2>\n<p><img src="./assets/2.png" alt="Step 2"></p>\n<h2 id="3-edit-pagicconfigts-file-replace-pagic_template_docs-to-your-repositorys-name">3. Edit <code>pagic.config.ts</code> file, replace <code>pagic_template_docs</code> to your repository\'s name<a class="anchor" href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-to-your-repositorys-name">§</a></h2>\n<p><img src="./assets/3.png" alt="Step 3"></p>\n<h2 id="4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to <strong>Settings</strong> &gt; <strong>Options</strong> &gt; <strong>GitHub Pages</strong> and set Branch to gh-pages<a class="anchor" href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">§</a></h2>\n<p><img src="./assets/4.png" alt="Step 4"></p>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#1-click-the-use-this-template-button">1. Click the Use this template button</a></li><li><a href="#2-enter-your-repository-name-and-click-the-create-repository-from-template-button">2. Enter your repository name and click the Create repository from template button</a></li><li><a href="#3-edit-pagicconfigts-file-replace-pagic_template_docs-to-your-repositorys-name">3. Edit pagic.config.ts file, replace pagic_template_docs to your repository&#39;s name</a></li><li><a href="#4-go-to-settings--options--github-pages-and-set-branch-to-gh-pages">4. Go to Settings &gt; Options &gt; GitHub Pages and set Branch to gh-pages</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu"
    ],
    'date': "2020-12-10T09:18:25.000Z",
    'updated': "2020-12-11T13:06:39.000Z",
    'excerpt': "Use this template to create a Pagic site with the docs theme. 1. Click the Use this template button 2. Enter your repository name and click the Create repository from template button 3. Edit pagic.config.ts fil...",
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
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "d5690cdd53ff6a9fc9df", clientSecret: "d026c52e779c6e70963eca753e21d2f53f8d1342", id: "index.html", owner: "xcatliu", pagerDirection: "first", repo: "pagic_template_docs", title: "Pagic template docs" })
};
