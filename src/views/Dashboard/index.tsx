import React from 'react';

import { Product } from '../../pages';

import { ProductList } from './styles';

interface DashboardProps {
  products: Product[];
}

export function Dashboard({ products }: DashboardProps) {
  function handleAddProduct(id: number) {
    // addProduct(id);
  }

  return (
    <ProductList>
      {products.map(product => {
        return (
          <li key={product.id}>
            <img src={product.brand} alt={product.name} />
            <strong>{product.name}</strong>
            <span>{product.price}</span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => handleAddProduct(product.id)}
            >
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        )
      })}
    </ProductList>
  );
};
