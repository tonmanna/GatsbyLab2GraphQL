import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
    {
        books {
            title
            author
        }
    }
`;

export default () => {
    return (
        <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
            <Query query={APOLLO_QUERY}>
                {({ data, loading, error }) => {
                    if (loading) return <p>Loading pupper...</p>;
                    if (error) return <p>Error: ${error.message}</p>;
                    return (
                        <div>
                            {data.books.map(book => (
                                <div>{book.title}</div>
                            ))}
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};
