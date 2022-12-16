import * as types from "./shop.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
