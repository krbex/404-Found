import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      orders {
        games {
          _id
          name
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      orders {
        games {
          _id
          name
        }
      }
    }
  }
`;

// purchaseDate in user games
export const QUERY_CHECKOUT = gql`
  query getCheckout($games: [ID]!) {
    checkout(games: $games) {
      session
    }
  }
`;

export const QUERY_GAMES = gql`
  query Query {
    games {
      _id
      name
      price
      image
      description
      youtube
      ytUrl
    }
  }
`;

