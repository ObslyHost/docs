// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Obsly Host',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.obsly.host',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebarsBilling.js'),
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
        id: 'gameservers',
        path: 'gameservers',
        routeBasePath: 'gameservers',
        sidebarPath: require.resolve('./sidebarsGameservers.js'),
        // ... other options
      },
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
  
      navbar: {
        title: 'Docs Obsly Host',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/billing',
            position: 'left',
            label: 'Facturación',
          },
          {
            to:'/gameservers',
            position: 'left',
            label: 'Servidores Game',
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
                label: 'Facturación',
                to: '/billing',
              },
              {
                label: 'Servidores Game',
                to: '/gameservers',
              },
            ],
          },
          {
            title: 'Sitios',
            items: [
              {
                label: 'Principal',
                href: 'https://obsly.host',
              },
              {
                label: 'Facturación',
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
        copyright: `© ${new Date().getFullYear()} Obsly Host`,
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
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
        },
      },
    },
    
  };

module.exports = config;
