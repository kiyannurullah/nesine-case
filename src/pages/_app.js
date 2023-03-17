import Head from 'next/head';
import CouponContext from '../utils/context';
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
        <Component {...pageProps} />
      </CouponContext>
    </>
  );
}

export default App;
