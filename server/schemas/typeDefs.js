const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Game {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    youtube: String
    ytUrl: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    games: [Game]
  }

  type Profile {
    _id: ID
    name: String
    email: String

  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]

    # password:
    # boughtGame1: Boolean
    # boughtGame2: Boolean
    # boughtGame3: Boolean
    # boughtGame4: Boolean
    # boughtGame5: Boolean
    # boughtGame6: Boolean
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Merch {
    _id: ID
    name: String
    price: Float
    description: String
    image: String
  }

  type Query {
    games: [Game]
    game(_id: ID!): Game
    user: User
    order(_id: ID!): Order
    checkout(games: [ID!]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(games: [ID!]): Order
    updateUser(email: String, password: String): User

    updateGame(_id: ID!, quantity: Int!): Game
    login(email: String!, password: String!): Auth
  }
`;
// add and remove wish for potential wishlist for games
module.exports = typeDefs;
