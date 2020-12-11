// import { React } from 'https://deno.land/x/pagic/mod.ts';

export default {
  srcDir: '.',
  exclude: ['LICENSE'],
  root: '/pagic_template_docs/',

  theme: 'docs',
  plugins: ['sidebar', 'prev_next', 'ga', 'gitalk'],
  title: 'Pagic template docs',
  description: 'Use this template to create a Pagic site with the docs theme',
  // To use jsx syntax, please rename this file to pagic.config.tsx
  // head: <>
  //   <link rel="icon" type="image/png" href="/favicon.png" />
  //   <script src="/assets/custom.js" />
  // </>,
  nav: [
    {
      text: 'Docs',
      link: '/pagic_template_docs/introduction/index.html',
    },
    {
      text: 'About',
      link: '/about/index.html',
      align: 'right',
    },
  ],
  github: 'https://github.com/xcatliu/pagic_template_docs',
  sidebar: {
    '/': [
      'introduction/README.md',
      {
        link: 'test_pages/README.md',
        children: ['test_pages/markdown_test.md', 'test_pages/front_matter.md', 'test_pages/react_hooks_test.tsx'],
      },
    ],
  },
  tools: {
    editOnGitHub: true,
    backToTop: true,
  },
  ga: {
    id: 'UA-45256157-17',
  },
  gitalk: {
    clientID: '29aa4941759fc887ed4f',
    clientSecret: '33e355efdf3a1959624506a5d88311145208471b',
    repo: 'pagic_template_docs',
    owner: 'xcatliu',
    admin: ['xcatliu'],
    pagerDirection: 'first',
  },

  port: 8000,
};
