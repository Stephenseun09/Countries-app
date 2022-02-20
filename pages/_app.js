import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Router from 'next/router';

import NProgress from 'nprogress';

import store from "../store/index";


import Layout from "../components/layout/Layout";
import "../styles/globals.css";

import "../styles/nprogress.css";

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 500,
    showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
