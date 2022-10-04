import { css, Global } from '@emotion/react';
import CookieBanner from '../components/CookieBanner';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;

            margin: 0;

            a {
              text-decoration: none;
            }
            a:visited {
              text-decoration: none;
              color: blue;
            }
          }
          header {
            // background-color: yellowgreen;
            padding: 10px;
            border-radius: 0px 0px 6px 6px;
            display: flexbox;
            justify-content: space-between;
            a {
              text-decoration: none;
            }
            a:visited {
              text-decoration: none;
              color: blue;
            }
            a + a {
              margin: 20px;
            }

            /* footer {
              background-color: yellowgreen;
              padding: 10px;
              border-radius: 6px;
            } */
          }
        `}
      />
      <CookieBanner />
      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
