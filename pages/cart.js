import Head from 'next/head';
import Image from 'next/image';
import { getProducts } from '../database/products';

export default function Cart(props) {
  return (
    <div>
      <Head>
        <title>Your Shopping Cart</title>
        <meta name="description" content="Cart Contents" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h3> Shopping Cart</h3>
      {props.products.map((product) => {
        return (
          <div key={`product-div-${product.name}`}>
            {product.name} {product.amount}
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const parsedCookies = context.req.cookies.amount
    ? JSON.parse(context.req.cookies.amount)
    : [];
  const products = await getProducts();
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
