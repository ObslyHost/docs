// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación',
  tagline: '',
  url: 'https://docs.obsly.host',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'ObslyHost', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // id: 'product', // omitted => default instance
          path: 'billing',
          routeBasePath: 'billing',
          sidebarPath: require.resolve('./sidebars.js'),
          // ... other options
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'beepanel',
        path: 'beepanel',
        routeBasePath: 'beepanel',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'apps',
        path: 'apps',
        routeBasePath: 'apps',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
  
      navbar: {
        title: 'OBSLY.DOCS',
        logo: {
          alt: 'Obsly',
          src: 'img/favicon.ico',
        },
        items: [
          {
            label: "📦 Apps",
            position: "left",
            to: "/apps",
            exact: true,
          },
          {
            label: "💳 Billing",
            position: "left",
            to: "/billing",
            exact: true,
          },
          {
            label: "💻 BeePanel",
            position: "left",
            to: "/beepanel",
            exact: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },  
        ],
      },
            footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Apps',
                to: '/apps',
              },
              {
                label: 'Billing',
                to: '/billing',
              },
              {
                label: 'BeePanel',
                to: '/beepanel',
              },
            ],
          },
          {
            title: 'Sitios',
            items: [
              {
                label: 'Web',
                href: 'https://obsly.host',
              },
              {
                label: 'Billing',
                href: 'https://billing.obsly.host',
              },
              {
                label: 'Panel',
                href: 'https://panel.obsly.host',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.obsly.host',
              },
              {
                label: 'Estado',
                href: 'https://status.obsly.host',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Obsly.host`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      localeConfigs: {
        es: {
          label: 'Español',
          direction: 'ltr',
          htmlLang: 'es-ES',
        },
/*         en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
        }, */
      },
    },
    
  };

module.exports = config;
