import React from 'react';

import { Product } from '../../pages';
import { Cart } from '../../features/cart/Cart';

import { ProductList } from './styles';

interface DashboardProps {
  products: Product[];
}

export function Dashboard({ products }: DashboardProps) {
  function handleAddProduct(id: number) {
    // addProduct(id);
  }

  return (
    <>
      <ProductList>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.photo} alt={product.name} />
                <strong>{`${product.brand} ${product.name}`}</strong>
                <span>{product.price}</span>
                <button
                  type="button"
                  data-testid="add-product-button"
                  onClick={() => handleAddProduct(product.id)}
                >
                  <img src="/images/shopping-bag.svg" alt="shopping-bag" />
                  <span>comprar</span>
                </button>
              </li>
            );
          })}
        </ul>
      </ProductList>

      <Cart />
    </>
  );
}
