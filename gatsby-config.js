const languages = {
    langs: ['en', 'pt'],
    defaultLangKey: 'en'
  };

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    languages,
    menu: [
        {label: 'home', slug: '/'},
        {label: 'posts', slug: '/blog/'},
        {label: 'tags', slug: '/tags/'},
        {label: 'about', slug: '/about/'},
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Unbroken",
          short_name: "Unbroken",
          start_url: "/",
          background_color: "#2980b9",
          theme_color: "#2980b9",
          display: "standalone",
          icon: "src/images/gatsby-icon.png",
          orientation: "portrait"
        }
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-sitemap`,
      "gatsby-plugin-offline"
],
}
