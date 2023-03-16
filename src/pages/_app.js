import Head from 'next/head';
import AppStore from '../utils/context';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
        />
        <script>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </script>

        <title>Nesine Case</title>
      </Head>
      <AppStore>
        <Component {...pageProps} />
      </AppStore>
    </>
  );
}

export default App;
