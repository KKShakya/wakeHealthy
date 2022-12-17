import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  currentUser: "",
  isAuth: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        currentUser: payload.name,

        isAuth: true,
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        isError: true,
        currentUser: "",
        isAuth: false,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        isError: false,
        currentUser: "",
        isAuth: false,
      };
    }

    default: {
      return state;
    }
  }
};
