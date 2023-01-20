import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query user {
    _id
    username
    email
    orders {
      games {
        _id
        name
      }
    }
  }
`;