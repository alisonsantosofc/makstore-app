import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';
import AxiosMock from 'axios-mock-adapter';
import { Provider } from 'react-redux';

import { makeStore } from '../../../app/store';
import { productsAPI } from '../../../services/productsAPI';
import { Cart } from './';

const apiMock = new AxiosMock(productsAPI);

test('renders the Cart component', () => {
  const store = makeStore();

  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const textElement = screen.queryByText('Carrinho');

  expect(textElement).toBeDefined();
});

test('should be able to increment a product', () => {
  const store = makeStore();

  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  const textElement = screen.queryByTestId('increment-product');

  expect(textElement).toBeDefined();
});
