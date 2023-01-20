const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Game {
    _id: ID
    name: String
    description: String    
    image: String    
    price: Float
    quantity: Int
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
    username: String
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
    games(name: String): [Game]
    game(_id: ID!): Game
    user: User
    order(_id: ID!): Order
    checkout(games: [ID!]): Checkout

    merch(_id: ID!): Merch

    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addUser (username: String!, email: String!, password: String!): Auth
    addOrder(games: [ID!]): Order
    updateUser(username: String, email: String, password: String): User
    updateGame(_id: ID!, quantity: Int!): Game
    login(email:String!, password: String!): Auth

    addProfile(name: String!): Profile
    addWish(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeWish(profileId: ID!, skill: String!): Profile
  }
`;
// add and remove wish for potential wishlist for games
module.exports = typeDefs;
