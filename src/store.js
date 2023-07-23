import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(
  {
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
  },
  composeWithDevTools(),
);

export default store;
