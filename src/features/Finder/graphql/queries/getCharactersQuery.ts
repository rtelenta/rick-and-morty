import { gql } from "graphql-request";

const getCharactersQuery = gql`
  query getCharacters($page: Int!, $name: String!, $status: String!) {
    characters(page: $page, filter: { name: $name, status: $status }) {
      info {
        next
      }
      results {
        id
        name
        status
        image
        species
      }
    }
  }
`;

export default getCharactersQuery;
