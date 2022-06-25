import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { StoreProvider } from '../providers';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <Head>
          <title>Welcome to tilt-school!</title>
        </Head>
        <main className='app'>
          <Component {...pageProps} />
        </main>
      </StoreProvider>
    </>
  );
}

export default CustomApp;
