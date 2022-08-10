// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Reactive Button',
  tagline: '3D animated react button component with progress bar',
  url: 'https://arifszn.github.io',
  baseUrl: '/reactive-button/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arifszn',
  projectName: 'reactive-button',
  trailingSlash: false,
  customFields: {
    description:
      'Reactive Button is a 3D animated react component to replace the traditional boring buttons. Change your button style without adding any UI framework. Comes with progress bar and the goal is to let the users visualize what is happening after a button click.',
  },
  themeConfig: {
    navbar: {
      title: 'Reactive Button',
      hideOnScroll: false,
      logo: {
        alt: 'Logo',
        src: 'img/logo/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/arifszn/reactive-button',
          position: 'right',
          'aria-label': 'GitHub repository',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/arifszn" target="_blank">Ariful Alam</a>`,
    },
    metadata: [
      {
        name: 'Reactive Button',
        content: '3D animated react button component with progress bar.',
      },
    ],
    image: 'img/logo/logo.png',
    announcementBar: {
      id: 'reactive_button_support_us',
      content:
        '⭐️ If you like this project, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arifszn/reactive-button">GitHub</a> ⭐️',
      //   backgroundColor: "#fafbfc", // Defaults to `#fff`.
      //   textColor: "#091E42", // Defaults to `#000`.
      //   isCloseable: true, // Defaults to `true`.
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: '2EH3VSS6EB',
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-plugin-sass')],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],
};
