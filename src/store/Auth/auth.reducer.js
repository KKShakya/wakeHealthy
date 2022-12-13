import * as types from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
