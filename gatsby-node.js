const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            cms {
                books {
                    title
                    author
                }
            }
        }
    `);
    let index = 0;
    data.cms.books.forEach(book => {
        actions.createPage({
            path: 'Page' + index++,
            component: path.resolve(`./src/component/book.js`),
            context: {
                bookTitle: book.title,
            },
        });
    });
};

// exports.createResolvers = ({ actions, cache, createNodeId, createResolvers, store }) => {
//     const { createNode } = actions;
//     createResolvers({
//         GraphCMS_BlogPost: {
//             createdAt: {
//                 type: `String`,
//                 resolve(source, args, context, info) {
//                     return dateformat(source.date, `fullDate`);
//                 },
//             },
//             post: {
//                 resolve(source, args, context, info) {
//                     return remark()
//                         .use(html)
//                         .processSync(source.post).contents;
//                 },
//             },
//         },
//         GraphCMS_Asset: {
//             imageFile: {
//                 type: `File`,
//                 // projection: { url: true },
//                 resolve(source, args, context, info) {
//                     return createRemoteFileNode({
//                         url: source.url,
//                         store,
//                         cache,
//                         createNode,
//                         createNodeId,
//                     });
//                 },
//             },
//         },
//     });
// };
