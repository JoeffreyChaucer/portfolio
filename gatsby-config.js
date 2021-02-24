module.exports = {
  siteMetadata: {
    title: 'Full Stack Developer & Web Designer',
    description:
      'I am a freelance Full Stack Web Developer and Designer. Please contact me for more information.',
    url: 'https://skillshare.com',
    image: '/src/images/hero.svg',
    twitterUsername: '@freelanceWebdev',
    author: 'JoeffreyChaucer',
  },

  plugins: [
    `gatsby-plugin-anchor-links`,
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favIcon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
