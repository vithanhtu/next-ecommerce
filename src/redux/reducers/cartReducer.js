import data from "@/utils/data";
import { createSlice } from "@reduxjs/toolkit";

const { products } = data;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItems = action.payload;
      const duplicate = state.cart.find((item) => item._id === cartItems._id);
      if (duplicate) {
        state.cart = state.cart.map((item) => {
          return item._id === cartItems._id
            ? { ...duplicate, qty: duplicate.qty + 1 }
            : item;
        });
      } else {
        state.cart = [...state.cart, { ...cartItems, qty: 1 }];
      }
    },

    itemsCart: (state, action) => {
      const duplicateProd = state.cart.find(
        (item) => item._id === action.payload
      );
      if (duplicateProd.qty > 1) {
        state.cart = state.cart.map((item) => {
          return item._id === action.payload
            ? { ...duplicateProd, qty: duplicateProd.qty - 1 }
            : item;
        });
      } else {
        state.cart = state.cart.map((item) => {
          return item._id === action.payload
            ? { ...duplicateProd, qty: (duplicateProd.qty = 1) }
            : item;
        });
      }
    },

    productStock: (state, action) => {
      const idProduct = action.payload.id;
      const num = action.payload.qtyStock;

      const productStock = state.cart.find((item) => item._id === idProduct);
      if (productStock) {
        state.cart = state.cart.map((item) => {
          return item._id === idProduct ? { ...productStock, qty: num } : item;
        });
      }
    },

    removeItemCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const {
  statusCart,
  addToCart,
  itemsCart,
  removeItemCart,
  productStock,
} = cartSlice.actions;

export default cartSlice.reducer;
