import { useReducer } from "react";
import {
  UPDATE_GAMES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case UPDATE_GAMES:
      return {
        ...state,
        games: [action.games],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.games],
      };

    case REMOVE_FROM_CART:
      let newState = state.games.filter((game) => {
        return game._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
