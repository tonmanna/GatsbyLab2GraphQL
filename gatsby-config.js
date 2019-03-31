module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.org`,
        description: `Blazing fast modern site generator for React`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GraphQLCMS',
                fieldName: 'cms',
                url: 'http://localhost:4000/',
                refetchInterval: 60,
            },
        },
    ],
};
