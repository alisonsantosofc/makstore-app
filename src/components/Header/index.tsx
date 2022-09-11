import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProducts, setIsOpenCart } from '../../features/cart/cartSlice';

import { Container } from './styles';

export function Header() {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const cartSize = products.length;

  function handleOpenCart() {
    dispatch(setIsOpenCart(true));
  }

  return (
    <Container>
      <div>
        <strong>MKS</strong>
        <span>Sistemas</span>
      </div>

      <button type="button" onClick={() => handleOpenCart()}>
        <img src="/images/cart.svg" alt="cart" />
        <span data-testid="cart-size">{cartSize}</span>
      </button>
    </Container>
  );
}
