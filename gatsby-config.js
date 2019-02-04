module.exports = {
    siteMetadata: {
        title: `Touraj Vaziri | Full Stack Developer`,
        siteUrl: `http://www.tourajvaziri.info`,
        description: `Touraj Vaziri's Personal Website`,
    },
    plugins: [
        'gatsby-plugin-typescript',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography`,
          },
        }
    ]
}