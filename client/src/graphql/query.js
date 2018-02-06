import gql from "graphql-tag";

export const photoGraphQLQuery = count => gql`

fragment PhotoItem on photos {
    id
    name
    link
    description
}

query {
  photos (count: ${count}) {
    ...PhotoItem
  }
}`;