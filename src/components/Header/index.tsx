import React from 'react';

import { Container } from './styles';

export function Header() {
  const cartSize = 2;

  return (
    <Container>
      <div>
        <strong>MKS</strong>
        <span>Sistemas</span>
      </div>

      <button type="button">
        <img src="/images/cart.svg" alt="cart" />
        <span data-testid="cart-size">{cartSize}</span>
      </button>
    </Container>
  );
}
