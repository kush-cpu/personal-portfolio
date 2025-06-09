import { themes } from "prism-react-renderer";

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kushagra Nigam, Senior Software Engineer, Game Engine Developer",
  tagline:
    "Software engineer interested in low level systems and AI tech trends.",
  url: "https://kush-cpu.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "kush-cpu",
  projectName: "website",

  customFields: {
    newsletter: {
      action:
        "https://dev.us14.list-manage.com/subscribe/post?u=4ed0fd1909674fddee53ac3e7&amp;id=dfdcae99f5&amp;f_id=004887e0f0",
      method: "post",
      emailFieldName: "EMAIL",
      firstNameFieldName: "FNAME",
      submitButtonName: "subscribe",
      tosURL: "https://mailchimp.com/legal/terms/",
      privacyPolicyURL: "https://www.intuit.com/privacy/statement/",
      serviceName: "Mailchimp",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/kush-cpu/personal-portfolio/tree/main",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Kushagra Nigam.`,
          },
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo-small.png",
    metadata: [
      {
        name: "description",
        content:
          "I am software developer interested in technology and gadgets. Game Technology, AI, and low-level systems are my main interests.",
      },
      {
        name: "keywords",
        content:
          "fullstack,frontend,backend,developer,engineer,software,programmer,web,game,technology,AI,artificial intelligence,low level systems",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: false,
      title: "Kushagra Nigam,",
      logo: {
        alt: "Kushagra Nigam Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-white.svg",
      },
      items: [
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/talks", label: "Talks", position: "left" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Connect",
          items: [
            {
              label: "Email me",
              href: "mailto:pawel@kosiec.dev",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/kushagra-nigam-a322a6162/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ironicallykushh",
            },
          ],
        },
        {
          title: "Discover",
          items: [
            {
              label: "About me",
              to: "/",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Talks",
              to: "/talks",
            },
          ],
        },
      ],
      copyright: `Copyright © 2012-${new Date().getFullYear()} Kushagra Nigam.`,
    },
    algolia: {
      appId: "5DLGGOZ8KA",
      apiKey: "67ab853aa6285e51112a649d3cb51928",
      indexName: "kush-cpu",
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
