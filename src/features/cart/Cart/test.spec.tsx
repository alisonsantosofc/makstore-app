import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { Cart } from './';
import store, { makeStore } from '../../../app/store';
import { addProduct } from '../cartSlice';

const product = {
  id: 1,
  name: 'Apple Watch',
  brand: 'Apple',
  description: 'Relógio da marca apple.',
  photo: 'https://link-da-photo.jpeg',
  price: '190.0',
  createdAt: String(new Date()),
  updatedAt: String(new Date()),
};

describe('Cart', () => {
  it('should be able renders the Cart component', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const textElement = screen.queryByText('Carrinho');

    expect(textElement).toBeDefined();
  });

  it('should be able to increment a product', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    act(() => {
      store.dispatch(addProduct(product));
    });

    const productAmount = screen.getByRole('product-amount');
    const addButton = screen.getByRole('increment-product');

    fireEvent.click(addButton);

    expect(productAmount).toHaveTextContent('2');
  });

  it('should be able to decrement a product', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    act(() => {
      store.dispatch(addProduct(product));
    });

    const productAmount = screen.getByRole('product-amount');
    const addButton = screen.getByRole('increment-product');
    const decrementButton = screen.getByRole('decrement-product');

    fireEvent.click(addButton);
    expect(productAmount).toHaveTextContent('2');

    fireEvent.click(decrementButton);
    expect(productAmount).toHaveTextContent('1');
  });

  it('should be able to remove a product', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    act(() => {
      store.dispatch(
        addProduct(product)
      );
    });

    const removeButton = screen.getByRole('remove-product');
    fireEvent.click(removeButton);

    // get products in cart
    const products = store.getState().cart.products;

    expect(products).toEqual([]);
  });

  it('should be able to closed cart', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const closeButton = screen.getByRole('close-cart');
    fireEvent.click(closeButton);

    // get products in cart
    const isOpenCart = store.getState().cart.isOpen;

    expect(isOpenCart).toEqual(false);
  });
});
