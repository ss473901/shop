import { createSlice } from "@reduxjs/toolkit";

export const productsslice = createSlice({
  name: "products",
  initialState: {
    selectedCategory: "全て",
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.products.selectedCategory;

export const { filterCategory } = productsslice.actions;

export default productsslice.reducer;
