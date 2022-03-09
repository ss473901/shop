import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      alert(action.payload);
    },
  },
});

export const { addItemToCart } = cartslice.actions;

export default cartslice.reducer;
