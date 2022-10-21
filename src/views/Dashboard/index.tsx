import React, { useState } from 'react';

import { IProduct } from '../../pages';
import { Cart } from '../../features/cart/Cart';

import { ProductsList } from './styles';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import Image from 'next/image';

interface DashboardProps {
  products: IProduct[];
}

export function Dashboard({ products }: DashboardProps) {
  const dispatch = useAppDispatch();

  const [isOpenCart, setIsOpenCart] = useState(false);

  function handleAddProduct(product: IProduct) {
    dispatch(addProduct(product));
  }

  return (
    <>
      <ProductsList>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <picture>
                  <img src={product.photo} alt={product.name} />
                </picture>

                <p>
                  <strong>{`${product.brand} ${product.name}`}</strong>
                  <span>R${Number(product.price).toLocaleString('pt-BR')}</span>
                </p>

                <p>{product.description}</p>

                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => handleAddProduct(product)}
                >
                  <Image width={18} height={18} src="/images/shopping-bag.svg" alt="shopping-bag" />

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
