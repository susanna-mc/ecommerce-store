import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { getProducts } from '../database/products';

export default function Cart(props) {
  function handleRemove(id) {
    const newCart = props.cart.filter((item) => item.id !== id);
    props.setCart(newCart);
  }

  const productCart = props.cart?.map((cart) => {
    return {
      ...cart,
      name: props.product?.find((product) => cart.id === product.id)?.name,
      price: props.product?.find((product) => cart.id === product.id)?.price,
    };
  });
  const totalPrice = () => {
    return productCart?.reduce((product) => product.cart * product.price, 0);
  };
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
            {product.name} {product.amount} Price: {product.price}{' '}
            {product.cart}
          </div>
        );
      })}
      {/* <button onClick={handleRemove}> Remove </button> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const parsedCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];

  const products = await getProducts();
  const productsWithAmount = products.map((singleProduct) => {
    return {
      ...singleProduct,
      amount:
        parsedCookies.find(
          (cookieProductObject) => singleProduct.id === cookieProductObject.id,
        )?.cart || 0,
    };
  });

  return {
    props: {
      products: productsWithAmount,
    },
  };
}
