import { gql } from '@apollo/client';


export const QUERY_CHECKOUT = gql`
  query getCheckout($games: [ID]!) {
    checkout(games: $games) {
      session
    }
  }
`;

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//       orders
//     }
//   }
// `;
// not sure what to call games owned