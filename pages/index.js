import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../database/products';

const productStyles = css`
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 20px;

  & + & {
    margin-top: 25px;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Susanna's Jackalope Shop" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <h1> Welcome to Susanna's Jackalope Shop!</h1>
        <h2>
          "Have a furry (and spikey) friend shipped to your home at the click of
          a button!"
        </h2>
        <h3>Avaliable Jackalopes</h3>
        {products.map((product) => {
          return (
            <div key={`product-${product.id}`} css={productStyles}>
              <h3>{product.listing}</h3>

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
        {/* <div>
          <div>
            <Image
              src="/1-baby.png"
              alt="A baby jackalope."
              width="200"
              height="200"
            />
            <Link href="/product1">Baby Jackalope</Link>
          </div>
          <div>
            <Image
              src="/2-adolescent.png"
              alt="An adolescent jackalope."
              width="200"
              height="200"
            />
            <Link href="/product2">Adolescent Jackalope</Link>
          </div>
          <div>
            <Image
              src="/3-adult.png"
              alt="An adult jackalope."
              width="200"
              height="200"
            />
            <Link href="/product3">Adult Jackalope</Link>
          </div>
          <div>
            <Image
              src="/4-warrior.png"
              alt="A warrior jackalop jumping"
              width="200"
              height="200"
            />
            <Link href="/product4">Warrior Jackalope</Link>
          </div>
        </div> */}
      </div>
      <footer>
        {' '}
        <strong>
          {' '}
          (Don’t worry about shipping & handling, they’re mythical anyways){' '}
        </strong>
      </footer>
    </div>
  );
}
