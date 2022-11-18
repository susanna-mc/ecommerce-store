import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { getProducts } from '../../database/products';

const divStyles = css`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 15px;
`;
const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;

  width: 400px;

  background-color: #e3f6f5;
  box-shadow: 19px 19px 42px 0px #c2c2c2;

  margin-top: 25px;

  a:hover {
  }
`;

const imageStyles = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin: 0px;

  border-radius: 25px;
`;

const h1Styles = css`
  margin-left: 30px;
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

      <h1 css={h1Styles}>Available Jackalopes</h1>
      <div css={divStyles}>
        {props.products.map((product) => {
          return (
            <div
              data-test-id={`products-type-${product.type}`}
              key={`product-${product.id}`}
              css={productStyles}
            >
              <h2>
                <a href={`/products/${product.id}`}> {product.name}</a>
              </h2>

              <div>
                <Image
                  css={imageStyles}
                  data-test-id="product-image"
                  src={`/${product.id}-${product.type}.png`}
                  alt={product.alt}
                  width="400"
                  height="400"
                />
              </div>

              <p>
                {' '}
                <strong> Price: </strong>
                {product.price}
              </p>
              <p>{product.description}</p>
            </div>
          );
        })}
      </div>
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
