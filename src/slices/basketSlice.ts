"use client";
import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [] as ProductProps[],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItems) => basketItems.id === action.payload.id
      );

      const newBasket = [...state.items];

      if (index >= 0) {
        // The item exists in the basket
        newBasket.splice(index, 1);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: { basket: { items: any } }) =>
  state.basket.items;
export const selectTotal = (state: { basket: { items: any[] } }) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
