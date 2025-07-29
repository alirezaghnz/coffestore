import { createSlice } from "@reduxjs/toolkit";
import type { CartItemsType } from "../../types/cart";
import type { RootState } from "../../store";

interface CartState {
  cart: CartItemsType[];
}
const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;
export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCart = (state: RootState) => state.cart.cart;
