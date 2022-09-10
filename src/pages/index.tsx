import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { productsAPI } from '../services/productsAPI';

import { Dashboard } from '../views/Dashboard';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

interface HomeProps {
  products: Array<Product>;
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>MKS Store</title>
      </Head>

      <Dashboard products={products} />
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {
  const response = await productsAPI.get(
    `/products?page=1&rows=12&sortBy=name&orderBy=ASC`
  );

  const products = response.data;
  console.log(products);

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24 * 30, // revalidate every 30 days
  };
};
