const { ApolloServer } = require('apollo-server');
const { schema } = require('./schema');
const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => {
        // const token = req.headers.authorization || '';
        // const user = getUser(token);
        // return { user };
    },
    tracing: true,
    cacheControl: true,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
