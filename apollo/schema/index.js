const _ = require('lodash');
const path = require('path');
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const readFileSync = require('fs').readFileSync;

const users_type_defs = readFileSync(path.join(__dirname, '/users/schema.gql'), 'utf8');
const users_resolvers = require('./users/resolver');

const books_type_defs = readFileSync(path.join(__dirname, '/books/schema.gql'), 'utf8');
const books_resolvers = require('./books/resolver');

var typeDefs = '';
typeDefs = typeDefs.concat(users_type_defs, books_type_defs);

var resolvers = {};
resolvers = _.merge(users_resolvers, books_resolvers);

exports.schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
