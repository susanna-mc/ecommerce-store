import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import CookieBanner from '../components/CookieBanner';
import Header from '../components/header';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    const getCookie = getParsedCookie('cart');
    if (getCookie) {
      setCart(getCookie);
    }
  }, []);
  useEffect(() => {
    if (typeof cart !== 'undefined') {
      setStringifiedCookie('cart', cart);
    }
  }, [cart]);
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            background-color: #fffffe;

            margin: 0;

            a {
              text-decoration: none;
              color: #272343;
            }
            a:visited {
              text-decoration: none;
              color: #272343;
            }
            a:hover {
              color: #ffd803;
              text-shadow: 3px 3px 3px #c2c2c2;
              transition: 0.5s;
            }
            h1 {
              font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype',
                'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
              font-size: 30px;
              font-style: normal;
              font-variant: normal;
              font-weight: 700;
              line-height: 26.4px;
            }
            h3 {
              font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype',
                'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
              font-size: 14px;
              font-style: normal;
              font-variant: normal;
              font-weight: 700;
              line-height: 15.4px;
            }
            p {
              font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype',
                'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
              font-size: 14px;
              font-style: normal;
              font-variant: normal;
              font-weight: 400;
              line-height: 20px;
            }
            blockquote {
              font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype',
                'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
              font-size: 21px;
              font-style: normal;
              font-variant: normal;
              font-weight: 400;
              line-height: 30px;
            }
            pre {
              font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype',
                'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif;
              font-size: 13px;
              font-style: normal;
              font-variant: normal;
              font-weight: 400;
              line-height: 18.5714px;
            }
          }
        `}
      />
      <CookieBanner />
      <Header />

      <Component {...pageProps} cart={cart} setCart={setCart} />
    </>
  );
}

export default MyApp;
