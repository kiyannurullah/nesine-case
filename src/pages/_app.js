import Head from 'next/head';
import CouponContext from '../core/context/context';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
        />
        <title>Nesine Case</title>
      </Head>
      <CouponContext>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </CouponContext>
    </>
  );
}

export default App;
