import React from 'react';
import { AppProps } from '../../node_modules/next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={5000} toastClassName="toast-container" />
      <Header />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
