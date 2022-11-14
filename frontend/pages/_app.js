/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import withData from '../lib/withData';

// Loader animation
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// Boilerplate to make NextJS + Apollo work together
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // gives us access to query variables at a page level (i.e. /products)
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
