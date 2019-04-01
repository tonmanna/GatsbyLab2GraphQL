import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Img from 'gatsby-image';

export default ({ data }) => {
    const books = data.cms.books;
    console.log(data);
    return (
        <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
            {books.map((book, index) => (
                <div key={index}>{book.title}</div>
            ))}
            {data.cms.user.map((user, index) => (
                <p>
                    {user.id} {user.name}
                </p>
            ))}
            <Img fixed={data.file.childImageSharp.fixed} />
        </div>
    );
};

export const GatsbyQuery = graphql`
    query {
        cms {
            books {
                title
                author
            }
            user {
                id
                name
            }
        }
        file(name: { eq: "image" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }

    #     image : {
    #     file(name: { eq: "visual-reverse-image-search-v2_1000x560 (1).jpg" }) {
    #       childImageSharp {
    #         # Specify the image processing specifications right in the query.
    #         # Makes it trivial to update as your page's design changes.
    #         fixed(width: 125, height: 125) {
    #             ...GatsbyImageSharpFixed
    #         }
    #       }
    #     }
    #     }
    # }
`;
