const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        boughtGame1: Boolean
        boughtGame2: Boolean
        boughtGame3: Boolean
        boughtGame4: Boolean
        boughtGame5: Boolean
        boughtGame6: Boolean
    }
    type Game {
        _id: ID
        name: String
        price: Float
        description: String
        image: String
    }
    type Merch {
        _id: ID
        name: String
        price: Float
        description: String
        image: String
    }
`;

module.exports = typeDefs;
