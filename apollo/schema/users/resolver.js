const { getUser } = require('../../api/users');

const resolver = {
    Query: {
        user: async (root, args, context) => getUser(),
    },
};

module.exports = resolver;
