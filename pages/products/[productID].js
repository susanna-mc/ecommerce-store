import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 20px;

  & + & {
    margin-top: 25px;
  }
`;

export default function productPage(props) {
  if (props.error) {
    return (
      <div>
        <Head>
          <title>Jackalope not found</title>
          <meta name="description" content="Jackalope not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, please go look for a friendly, jackalope on the{' '}
        <Link href="/products">products page</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{props.product.name}</title>
        <meta
          name="description"
          content={`${props.product.name} product page`}
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>{`${props.product.name} for sale!`}</h1>

      <div key={`product-${props.product.id}`} css={productStyles}>
        <h3>{props.product.name}</h3>
        <Image
          src={`/${props.product.id}-${props.product.type}.png`}
          alt={props.product.alt}
          width="400"
          height="400"
        />
        <p>{props.product.alt}</p>
        <p>Price: </p>
        <div>
          Add to Cart
          <button
            onClick={() => {
              const currentCookieValue = getParsedCookie('amount');
              if (!currentCookieValue) {
                setStringifiedCookie('amount', [
                  { id: props.product.id, amount: -1 },
                ]);
              } else {
                const foundCookie = currentCookieValue.find(
                  (cookieProductObject) =>
                    cookieProductObject.id === props.product.id,
                );

                if (!foundCookie) {
                  currentCookieValue.push({
                    id: props.product.id,
                    amount: -1,
                  });
                } else {
                  foundCookie.amount--;
                }
                setStringifiedCookie('amount', currentCookieValue);
              }
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              const currentCookieValue = getParsedCookie('amount');
              if (!currentCookieValue) {
                setStringifiedCookie('amount', [
                  { id: props.product.id, amount: 1 },
                ]);
              } else {
                const foundCookie = currentCookieValue.find(
                  (cookieProductObject) =>
                    cookieProductObject.id === props.product.id,
                );

                if (!foundCookie) {
                  currentCookieValue.push({
                    id: props.product.id,
                    amount: 1,
                  });
                } else {
                  foundCookie.amount++;
                }
                setStringifiedCookie('amount', currentCookieValue);
              }
            }}
          >
            +
          </button>{' '}
        </div>{' '}
      </div>
    </>
  );
}

export function Product(props) {
  return <div> product id: {props.products.id} </div>;
}

export function getServerSideProps(context) {
  const productId = parseInt(context.query.productID);

  const foundProduct = products.find((products) => {
    return products.id === productId;
  });
  if (typeof foundProduct === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Jackalope not found :(',
      },
    };
  }

  return {
    props: {
      product: foundProduct,
    },
  };
}
