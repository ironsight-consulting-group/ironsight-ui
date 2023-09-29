module.exports = {
  siteMetadata: {
    title: `Ironsight Consulting Group`,
    description: `Automate your pharmaceutical consulting needs.`,
    author: `michaelplazek`,
    links: [
      {
        path: "/",
        label: "Home",
      },
      {
        path: "/contact",
        label: "Contact Us",
      },
      {
        path: "/about",
        label: "About",
      },
      {
        path: "/services",
        label: "Services",
        subPaths: [
          {
            path: "/services/health-informatics",
            label: "Health Informatics Solutions",
            live: true,
          },
          {
            path: "/services/commercialization-support",
            label: "Commercialization Support",
            live: true,
          },
          {
            path: "/services/competitive-insights",
            label: "Competitive Insights",
            live: true,
          },
        ],
      },
    ],
    footer: {
      links: [
        {
          layer: "TERMS_AND_CONDITIONS",
          label: "Terms & Conditions",
        },
        {
          layer: "COOKIE_POLICY",
          label: "Cookie Policy",
        },
      ],
      copyright: "© 2020 Ironsight Consulting Group. All Rights Reserved.",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/app/App`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
  ],
}
