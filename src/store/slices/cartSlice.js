import { createSlice } from "@reduxjs/toolkit";
import sessionstorage from "sessionstorage";

const cartlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      cartItems: sessionstorage.getItem("cartItems")
        ? JSON.parse(sessionstorage.getItem("cartItems"))
        : [],
      shipping: sessionstorage.getItem("shipping")
        ? JSON.parse(sessionstorage.getItem("shipping"))
        : {},
      paymentMethod: sessionstorage.getItem("paymentMethod")
        ? sessionstorage.getItem("paymentMethod")
        : "",
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItems = action.payload;
      const duplicate = state.cart.cartItems.find(
        (item) => item._id === cartItems._id
      );
      if (duplicate) {
        state.cart.cartItems = state.cart.cartItems.map((item) => {
          return item._id === cartItems._id
            ? { ...duplicate, qty: duplicate.qty + 1 }
            : item;
        });
      } else {
        state.cart.cartItems = [
          ...state.cart.cartItems,
          { ...cartItems, qty: 1 },
        ];
      }

      sessionstorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
    },

    itemsCart: (state, action) => {
      const duplicateProd = state.cart.cartItems.find(
        (item) => item._id === action.payload
      );
      if (duplicateProd.qty > 1) {
        state.cart.cartItems = state.cart.cartItems.map((item) => {
          return item._id === action.payload
            ? { ...duplicateProd, qty: duplicateProd.qty - 1 }
            : item;
        });
      } else {
        state.cart.cartItems = state.cart.cartItems.map((item) => {
          return item._id === action.payload
            ? { ...duplicateProd, qty: (duplicateProd.qty = 1) }
            : item;
        });
      }

      sessionstorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
    },

    productStock: (state, action) => {
      const idProduct = action.payload.id;
      const num = action.payload.qtyStock;

      const productStock = state.cart.cartItems.find(
        (item) => item._id === idProduct
      );
      if (productStock) {
        state.cart.cartItems = state.cart.cartItems.map((item) => {
          return item._id === idProduct ? { ...productStock, qty: num } : item;
        });
      }
    },

    removeItemCart: (state, action) => {
      state.cart.cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload
      );

      sessionstorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
    },

    setShipping: (state, action) => {
      state.cart.shipping = { ...action.payload };
      sessionstorage.setItem("shipping", JSON.stringify(state.cart.shipping));
    },

    removeCart: (state, action) => {
      state.cart = {
        cartItems: [],
        shipping: {},
        paymentMethod: "",
      };
    },
  },
});

export const {
  statusCart,
  addToCart,
  itemsCart,
  removeItemCart,
  productStock,
  setShipping,
  removeCart,
} = cartlice.actions;

export default cartlice.reducer;
