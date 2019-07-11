require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `thought flow`,
    description: `personal journaling app`,
    author: "@carlbarrdahl"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thought flow`,
        short_name: `thought flow`,
        start_url: `/`,
        background_color: `#2e5090`,
        theme_color: `#2e5090`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: [ "src/style/index.css" ]
      }
    },
    "gatsby-plugin-offline"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // {
    //   resolve: "gatsby-plugin-offline",
    //   options: {
    //     importScripts: [ `./sw-extension.js` ],
    //     cacheId: `sunnycrest-offline`
    //   }
    // }
  ]
}
