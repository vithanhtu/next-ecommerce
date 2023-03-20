import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: { productsReducer, cartReducer, authReducer },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
