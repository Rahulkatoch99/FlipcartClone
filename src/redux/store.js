import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer.js";

const reducer = combineReducers({
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
