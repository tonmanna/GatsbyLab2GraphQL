const { getBooks } = require('../../api/books');

const resolver = {
    Query: {
        books: async (root, args, context) => getBooks(),
    },
};

module.exports = resolver;
