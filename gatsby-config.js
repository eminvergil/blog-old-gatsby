module.exports = {
  pathPrefix: "/blog",
  plugins: [
    `gatsby-theme-blog-darkmode`,
    {
      resolve: `gatsby-theme-blog`,
      options: { prismPreset: `prism-okaidia` },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `BLOG`,
    author: `Emin Vergil`,
    description: `A personal blog about software and other stuff.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/eminvergil`,
      },
      {
        name: `github`,
        url: `https://github.com/eminvergil`,
      },
    ],
  },
}
