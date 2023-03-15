import Head from 'next/head';
import AppStore from "../utils/context";

function App({ Component, pageProps }) {
    return (<>
        <Head>
            <meta name='viewport'
                  content='user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width' />

            <title>Nesine Case</title>
        </Head>
        <AppStore>
            <Component {...pageProps} />
        </AppStore>
    </>);
}

export default App;
