import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../app/store';
import { Product } from '../../pages';

export interface CartState {
  products: Product[];
  total: number;
}

const initialState: CartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product: Product = action.payload;

      state.products.push(product);
      state.total += Number(product.price);
    },
    removeProduct: (state, action) => {
      const product: Product = action.payload;

      state.products.filter((product) => product.id !== product.id);
      state.total -= Number(product.price);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectProducts = (state: AppState) => state.cart.products;

export default cartSlice.reducer;
