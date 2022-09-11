import React, { useEffect } from 'react';
import { MdAdd, MdClose, MdRemove } from 'react-icons/md';

import {
  Product,
  removeProduct,
  selectIsOpenCart,
  selectProducts,
  setIsOpenCart,
  updateProductAmount,
} from '../cartSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { Container, ProductsInCart } from './styles';

export function Cart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isOpen = useAppSelector(selectIsOpenCart);

  const total = products.reduce((sumTotal, product) => {
    return (sumTotal += product.amount * Number(product.price));
  }, 0);

  function handleProductIncrement(product: Product) {
    dispatch(
      updateProductAmount({
        productId: product.id,
        amount: product.amount + 1,
      })
    );
  }

  function handleProductDecrement(product: Product) {
    dispatch(
      updateProductAmount({
        productId: product.id,
        amount: product.amount - 1,
      })
    );
  }

  function handleRemoveProduct(productId: number) {
    dispatch(removeProduct(productId));
  }

  function handleCloseCart() {
    dispatch(setIsOpenCart(false));
  }

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <div>
        <h2>
          Carrinho <br /> de compras
        </h2>

        <MdClose onClick={() => handleCloseCart()} />
      </div>

      <ProductsInCart>
        {products.map((product) => (
          <li key={product.id}>
            <picture>
              <img src={product.photo} alt={product.name} />
            </picture>

            <p>
              <span>{product.brand} </span>
              {product.name}
            </p>

            <div>
              <span>Qtd:</span>
              <button
                type="button"
                data-testid="decrement-product"
                disabled={product.amount <= 1}
                onClick={() => handleProductDecrement(product)}
              >
                <MdRemove />
              </button>
              <span data-testid="product-amount">{product.amount}</span>
              <button
                type="button"
                data-testid="increment-product"
                onClick={() => handleProductIncrement(product)}
              >
                <MdAdd />
              </button>
            </div>

            <span>R${Number(product.price).toLocaleString('pt-BR')}</span>

            <MdClose onClick={() => handleRemoveProduct(product.id)} />
          </li>
        ))}
      </ProductsInCart>

      <p>
        <span>Total:</span>
        <span>R${total.toLocaleString('pt-BR')}</span>
      </p>

      <button type="button">Finalizar Compra</button>
    </Container>
  );
}
