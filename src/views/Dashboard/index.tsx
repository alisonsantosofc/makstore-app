import React, { useState } from 'react';

import { IProduct } from '../../pages';
import { Cart } from '../../features/cart/Cart';

import { ProductsList } from './styles';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import { toast } from 'react-toastify';
import { Toast } from '../../../components/Toast';

interface DashboardProps {
  products: IProduct[];
}

export function Dashboard({ products }: DashboardProps) {
  const dispatch = useAppDispatch();

  const [isOpenCart, setIsOpenCart] = useState(false);

  function handleAddProduct(product: IProduct) {
    dispatch(addProduct(product));

    toast.success(
        <Toast
          title="Produto Adicionado"
          message="Produto adicionado ao carrinho com sucesso, continue comprando."
          type="success"
        />
      );
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
                  <picture>
                    <img src="/images/shopping-bag.svg" alt="shopping-bag" />
                  </picture>
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
