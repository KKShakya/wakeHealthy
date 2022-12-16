// import * as types from "./cart.types";

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  ITEM_EXIST,
  UPDATE_CART,
} from "./cart.types";

const initialState = {
  item_exist: false,
  CART: [],
  item_deleted: false,
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
        item_exist: false,
      };
    }
    case ITEM_EXIST: {
      return {
        ...state,
        item_exist: true,
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
        item_deleted: true,
      };
    }
    default:
      return state;
  }
};
