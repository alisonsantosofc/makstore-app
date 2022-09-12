import React from 'react';
import { MdAdd, MdClose, MdRemove } from 'react-icons/md';

import {
  buyProducts,
  Product,
  removeProduct,
  selectIsOpenCart,
  selectProducts,
  setIsOpenCart,
  updateProductAmount,
} from '../cartSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { Container, ProductsInCart } from './styles';
import { toast } from 'react-toastify';
import { Toast } from '../../../components/Toast';

export function Cart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isOpen = useAppSelector(selectIsOpenCart);

  const productsFormatted = products.map((product) => ({
    ...product,
    subTotal: product.amount * Number(product.price),
  }));

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

  function handleBuy() {
    dispatch(buyProducts());
    dispatch(setIsOpenCart(false));
    toast.success(
      <Toast
        title="Pedido Recebido"
        message={`Sua compra no valor de R$${total.toLocaleString('pt-BR')} foi realizada com sucesso!`}
        type="success"
      />
    );
  }

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <div>
        <h2>
          Carrinho <br /> de compras
        </h2>

        <MdClose role="close-cart" onClick={() => handleCloseCart()} />
      </div>

      <ProductsInCart>
        {productsFormatted.map((product) => (
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
                role="decrement-product"
                disabled={product.amount <= 1}
                onClick={() => handleProductDecrement(product)}
              >
                <MdRemove />
              </button>
              <span role="product-amount">{product.amount}</span>
              <button
                type="button"
                role="increment-product"
                onClick={() => handleProductIncrement(product)}
              >
                <MdAdd />
              </button>
            </div>

            <span>R${Number(product.subTotal).toLocaleString('pt-BR')}</span>

            <MdClose
              role="remove-product"
              onClick={() => handleRemoveProduct(product.id)}
            />
          </li>
        ))}
      </ProductsInCart>

      <p>
        <span>Total:</span>
        <span>R${total.toLocaleString('pt-BR')}</span>
      </p>

      <button type="button" onClick={() => handleBuy()}>
        Finalizar Compra
      </button>
    </Container>
  );
}
