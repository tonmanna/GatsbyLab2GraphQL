import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default ({ data }) => {
    const books = data.cms.books;
    console.log(books);
    return (
        <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
            {data.cms.books.map((book, index) => (
                <div key={index}>{book.title}</div>
            ))}
        </div>
    );
};

export const GatsbyQuery = graphql`
    {
        cms {
            books {
                title
                author
            }
        }
    }
`;
