import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { productsAPI } from '../services/productsAPI';

import { Dashboard } from '../views/Dashboard';

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface HomeProps {
  products: IProduct[];
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

  const products = response.data.products;
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, // revalidate every 24 hours
  };
};
