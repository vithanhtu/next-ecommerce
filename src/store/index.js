import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: { productSlice, cartSlice, authSlice },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
