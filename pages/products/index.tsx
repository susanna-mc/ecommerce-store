import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { getProducts } from '../../database/products';

const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 20px;

  & + & {
    margin-top: 25px;
  }
`;

type Props = {
  products: Product[];
};

export default function productsPage(props: Props) {
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
          <div
            data-test-id={`products-type-${product.type}`}
            key={`product-${product.id}`}
            css={productStyles}
          >
            <h3>
              <a href={`/products/${product.id}`}> {product.name}</a>
            </h3>

            <Image
              data-test-id="product-image"
              src={`/${product.id}-${product.type}.png`}
              alt={product.alt}
              width="400"
              height="400"
            />
            <p>{product.description}</p>
          </div>
        );
      })}
    </>
  );
}

/* export function getServerSideProps(context) {
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
  */

export async function getServerSideProps() {
  const connectProducts = await getProducts();

  return {
    props: {
      products: connectProducts,
    },
  };
}

// export async function getServerSideProps(): Promise<
//   GetServerSidePropsResult<Props>
// > {
//   const connectProducts = await getProducts();
//   return {
//     props: {
//       products: connectProducts,
//     },
//   };
// }
