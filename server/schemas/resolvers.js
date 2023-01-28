const { AuthenticationError } = require("apollo-server-express");
const { User, Game, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    games: async (parent, { name }) => {
      const params = {};

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      console.log(params);
      return await Game.find(params);
    },

    game: async (parent, { _id }) => {
      console.log(_id);
      return await Game.findById(_id);
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        console.log(user);

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        console.log(user.orders.id(_id));

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addOrder: async (parent, { games }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ games });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        console.log(order);
        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log(token);

      return { token, user };
    },
  },
};

module.exports = resolvers;
