import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as appReducer } from "./App/app.reducer";
import { reducer as authReducer } from "./Auth/auth.reducer";
import { reducer as cartReducer } from "./Cart/cart.reducer";
import { reducer as shopReducer } from "./Shop/shop.reducer";

import thunk from "redux-thunk";

const root_reducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  cart: cartReducer,
  shop: shopReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
