import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from '../../node_modules/next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import store from '../app/store';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer
        autoClose={5000}
        className="react-toastfy-container"
        toastClassName="react-toastfy-content"
        icon={false}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
