export default {
    srcDir: '.',
    root: '/pagic_template_docs/',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next', 'blog', 'ga'],
    title: 'Pagic template docs',
    description: 'Pagic template docs',
    github: 'https://github.com/xcatliu/pagic_template_docs',
    nav: [
        {
            text: 'Docs',
            link: '/pagic_template_docs/docs/introduction.html',
        },
    ],
    sidebar: {
        '/': [
            'introduction/README.md',
            {
                link: 'getting_started/README.md',
                children: [
                    'getting_started/installation.md',
                    'getting_started/setup_your_environment.md',
                    'getting_started/first_steps.md'
                ]
            },
            {
                link: 'the_runtime/README.md',
                children: [
                    'the_runtime/stability.md'
                ]
            }
        ],
    },
    tools: {
        editOnGitHub: true,
        backToTop: true
    },
};
