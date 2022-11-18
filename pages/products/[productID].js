import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductById } from '../../database/products';

const h1Styles = css`
  margin-left: 30px;
`;

const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;

  margin-top: 25px;
`;

const textStyles = css`
  padding: 20px;
  display: flex;
  align-items: center;

  flex-direction: row;
`;

const imageStyles = css`
  display: flexbox;
  margin-left: 300px;

  border: 10px black;

  border-radius: 25px;
`;

const buttonStyles = css`
    border: none;
    background-color: #ffd803;
    border-radius: 25%;
    color: 272343;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }
`;

export default function ProductPage(props) {
  const [count, setCount] = useState(0);
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
      <div css={productStyles} key={`product-${props.product.id}`}>
        <h1 css={h1Styles}> {`${props.product.name} for sale!`}</h1>
        <Image
          css={imageStyles}
          src={`/${props.product.id}-${props.product.type}.png`}
          alt={props.product.alt}
          width="400"
          height="400"
        />
        <div css={textStyles}>
          <p>{props.product.description}</p>
          <p>
            {' '}
            <strong> Price: </strong>
            {props.product.price}
          </p>
          <div>
            Quantity:
            <button
              css={buttonStyles}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              {' '}
              -{' '}
            </button>
            {count}
            <button
              css={buttonStyles}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {' '}
              +{' '}
            </button>
            {/* <button
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
          </button>{' '} */}
            <button
              css={buttonStyles}
              onClick={() => {
                if (!props.cart) {
                  props.setCart([{ id: props.product.id, cart: count }]);
                  return;
                }

                const foundCookie = props.cart.find(
                  (cookieProductObject) =>
                    cookieProductObject?.id === props.product.it,
                );
                if (foundCookie !== undefined) {
                  console.log(foundCookie.id);
                }
                if (!foundCookie) {
                  props.cart.push({
                    id: props.product.id,
                    cart: count,
                  });
                } else {
                  foundCookie.cart = foundCookie.cart + count;
                }
                const newQuantity = [...props.cart];
                props.setCart(newQuantity);
              }}
            >
              {' '}
              Add to Cart
            </button>
          </div>
        </div>{' '}
      </div>
    </>
  );
}

export function Product(props) {
  return <div> product id: {props.products.id} </div>;
}

export async function getServerSideProps(context) {
  const productId = parseInt(context.query.productID);

  const foundProduct = await getProductById(productId);

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
