import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { products } from '../../database/products';

const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 20px;

  & + & {
    margin-top: 25px;
  }
`;

export default function productsPage(props) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of available jackalopes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <h1>Available Jackalopes</h1>

      {props.products.map((product) => {
        return (
          <div key={`product-div-${product.id}`} css={productStyles}>
            <h3>
              <a href={`/products/${product.id}`}> {product.name}</a>
            </h3>

            <Image
              src={`/${product.id}-${product.type}.png`}
              alt={product.alt}
              width="400"
              height="400"
            />
            <p>{product.alt}</p>
          </div>
        );
      })}
    </>
  );
}

export function getServerSideProps(context) {
  const parsedCookies = context.req.cookies.amount
    ? JSON.parse(context.req.cookies.amount)
    : [];
  const productsWithAmount = products.map((singleProduct) => {
    return {
      ...singleProduct,
      amount:
        parsedCookies.find(
          (cookieProductObject) => singleProduct.id === cookieProductObject.id,
        )?.amount || 0,
    };
  });

  return {
    props: {
      products: productsWithAmount,
    },
  };
}
