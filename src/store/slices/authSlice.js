import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { getUser } = authSlice.actions;

export default authSlice.reducer;
