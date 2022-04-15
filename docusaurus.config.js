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
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ObslyHost', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
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
        title: 'Obsly.docs',
        logo: {
          alt: 'Obsly',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/billing',
            position: 'left',
            label: 'Billing',
          },
          {
            to:'/beepanel',
            position: 'left',
            label: 'BeePanel',
          },
          {
            to:'/game',
            position: 'left',
            label: 'Game',
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
                label: 'Billing',
                to: '/billing',
              },
              {
                label: 'BeePanel',
                to: '/beepanel',
              },
              {
                label: 'Game',
                to: '/game',
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
        en: {
          label: 'English',
          direction: 'ltr',
          htmlLang: 'en-US',
        },
      },
    },
    
  };

module.exports = config;
