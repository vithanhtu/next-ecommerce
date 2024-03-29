import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    dataProducts: [],
    products: [],
    newProducts: [],
    statusShop: true,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
      state.dataProducts = [...action.payload];
    },

    filterNewProducts: (state) => {
      state.newProducts = state.products.filter(
        (product) => product.newProduct === true
      );
    },

    filterCategories: (state, action) => {
      state.newProducts =
        action.payload === "All"
          ? state.products.filter((product) => product.newProduct === true)
          : state.products.filter(
              (product) => product.category === action.payload
            );
    },

    filterProducts: (state, action) => {
      if (action.payload == "Accessories" || "Cosmetic") {
        state.products = state.dataProducts.filter(
          (prod) => prod.category === action.payload
        );
      }
      const categoriesProducts = state.dataProducts.filter(
        (prod) =>
          prod.category === action.payload.cate &&
          prod.info === action.payload.item
      );
      if (categoriesProducts) {
        state.products = categoriesProducts;
      }
    },

    searchProducts: (state, action) => {
      if (action.payload) {
        state.products = state.dataProducts.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      } else {
        state.products = [...state.dataProducts];
      }
    },

    statusProducts: (state) => {
      state.newProducts = [...state.dataProducts];
    },
  },
});

export const {
  setProducts,
  filterNewProducts,
  filterCategories,
  filterProducts,
  searchProducts,
  statusProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
