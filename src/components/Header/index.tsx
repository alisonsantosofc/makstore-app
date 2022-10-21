import Image from 'next/image';
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
        <strong>MAK</strong>
        <span>Store</span>
      </div>

      <button type="button" onClick={() => handleOpenCart()}>
        <Image width={24} height={24} src="/images/cart.svg" alt="cart" />
        <span data-testid="cart-size">{cartSize}</span>
      </button>
    </Container>
  );
}
