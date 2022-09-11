import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import type { AppState } from '../../app/store';
import { IProduct } from '../../pages';

export interface Product extends IProduct {
  amount: number;
}

export interface CartState {
  products: Product[];
  isOpen: boolean,
}

const initialState: CartState = {
  products: [],
  isOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsOpenCart: (state, action) => {
      state.isOpen = action.payload;
    },
    addProduct: (state, action) => {
      let product: Product = action.payload;

      const productExists = state.products.find(
        (productFind) => productFind.id === product.id
      );

      if (!productExists) {
        Object.assign(product, {
          amount: 1,
        });
  
        state.products.push(product);
      } else {
        productExists.amount = productExists.amount + 1;
      }
    },
    updateProductAmount: (state, action) => {
      const { productId, amount } = action.payload;

      if (amount <= 0) {
        return;
      }

      const productExists = state.products.find(
        (product) => product.id === productId
      );

      if (productExists) {
        productExists.amount = amount;
      } else {
        throw Error();
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      } else {
        throw Error();
      }
    },
  },
});

export const { setIsOpenCart, addProduct, updateProductAmount, removeProduct } =
  cartSlice.actions;

export const selectProducts = (state: AppState) => state.cart.products;
export const selectIsOpenCart = (state: AppState) => state.cart.isOpen;

export default cartSlice.reducer;
