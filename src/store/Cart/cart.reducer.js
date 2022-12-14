// import * as types from "./cart.types";

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  UPDATE_CART,
} from "./cart.types";

const initialState = {
  CART: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART: {
      return {
        ...state,
        CART: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        CART: [...state.CART, payload],
      };
    }
    case UPDATE_CART: {
      return {
        ...state,
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
