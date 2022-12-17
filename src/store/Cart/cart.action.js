import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  ITEM_EXIST,
  UPDATE_CART,
} from "./cart.types";

export const get_cart = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8080/Cart");
  dispatch({ type: GET_CART, payload: res.data });
};

export const add_to_cart = (product) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/Cart", product);
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    // dispatch({ type: ITEM_EXIST });
  }
};

export const update_cart = (id, quantity) => async (dispatch) => {
  let res = await axios.patch(`http://localhost:8080/Cart/${id}`, {
    quantity,
  });
  dispatch({ type: UPDATE_CART, payload: res.data });
};

export const delete_from_cart = (id) => async (dispatch) => {
  let res = await axios.delete(`http://localhost:8080/Cart/${id}`);
  dispatch({ type: DELETE_FROM_CART, payload: id });
};
