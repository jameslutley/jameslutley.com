module.exports = {
  siteMetadata: {
    title: `James Lutley`,
    siteUrl: `https://jameslutley.com`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 912,
              backgroundColor: `#f5f7fa`,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          `gatsby-remark-copy-linked-files`,
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0779fa`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
  ],
}
