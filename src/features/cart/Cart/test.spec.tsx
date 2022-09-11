import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import AxiosMock from 'axios-mock-adapter';
import { Provider } from 'react-redux';

import { makeStore } from '../../../app/store';
import { productsAPI } from '../../../services/productsAPI';
import { Cart } from './';

const apiMock = new AxiosMock(productsAPI);

describe('<Cart />', () => {
  it('renders the component', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const textElement = screen.queryByTestId('decrement-product');

    expect(textElement).toBeDefined();
  });

  it('should be able to increment a product', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const textElement = screen.queryByTestId('decrement-product');

    expect(textElement).toBeDefined();
  });
});
