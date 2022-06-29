import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { StoreProvider } from '../providers';
import { LayoutProvider, ThemeProvider } from '@tilt-school/providers';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <ThemeProvider>
          <LayoutProvider>
            <Head>
              <title>Welcome to tilt-school-landing!</title>
            </Head>
            <main className='app'>
              <Component {...pageProps} />
            </main>
          </LayoutProvider>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default CustomApp;
