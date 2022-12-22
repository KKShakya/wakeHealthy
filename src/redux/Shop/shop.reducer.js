// import * as types from "./shop.types";

import {
  ADD_TO_SHOP,
  DELETE_FROM_SHOP,
  GET_SHOP,
  ITEM_EXIST,
  UPDATE_SHOP,
} from "./shop.types";

const initialState = {
  item_exist: false,
  SHOP: [],
  item_deleted: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOP: {
      return {
        ...state,
        SHOP: payload,
      };
    }
    case ADD_TO_SHOP: {
      return {
        ...state,
        SHOP: [...state.SHOP, payload],
      };
    }
    case ITEM_EXIST: {
      return {
        ...state,
        item_exist: true,
      };
    }
    case UPDATE_SHOP: {
      let updated = state.SHOP.map((el) => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });
      return {
        ...state,
        SHOP: updated,
      };
    }
    case DELETE_FROM_SHOP: {
      let updated = state.SHOP.filter((el) => {
        if (el.id !== payload) {
          return el;
        }
      });
      return {
        ...state,
        SHOP: updated,
        item_deleted: true,
      };
    }
    default:
      return state;
  }
};
