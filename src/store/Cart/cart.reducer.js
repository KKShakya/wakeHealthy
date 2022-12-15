// import * as types from "./cart.types";

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  UPDATE_CART,
} from "./cart.types";

const initialState = {
  CART: [],
  TOTAL: 0,
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
        TOTAL: +payload.price,
      };
    }
    case UPDATE_CART: {
      let updated = state.CART.map((el) => {
        if (el.id == payload.id) {
          return payload;
        }
        return el;
      });
      return {
        ...state,
        CART: updated,
      };
    }
    case DELETE_FROM_CART: {
      let updated = state.CART.filter((el) => {
        if (el.id !== payload) {
          return el;
        }
      });
      return {
        ...state,
        CART: updated,
      };
    }
    default:
      return state;
  }
};
