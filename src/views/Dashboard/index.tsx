import React, { useState } from 'react';

import { IProduct } from '../../pages';
import { Cart } from '../../features/cart/Cart';

import { ProductsList } from './styles';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';

interface DashboardProps {
  products: IProduct[];
}

export function Dashboard({ products }: DashboardProps) {
  const dispatch = useAppDispatch();

  const [isOpenCart, setIsOpenCart] = useState(false);

  function handleAddProduct(product: IProduct) {
    dispatch(addProduct(product))
  }

  return (
    <>
      <ProductsList>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.photo} alt={product.name} />
                <strong>{`${product.brand} ${product.name}`}</strong>
                <span>R${Number(product.price).toLocaleString('pt-BR')}</span>
                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => handleAddProduct(product)}
                >
                  <img src="/images/shopping-bag.svg" alt="shopping-bag" />
                  <span>comprar</span>
                </button>
              </li>
            );
          })}
        </ul>
      </ProductsList>

      <Cart />
    </>
  );
}
