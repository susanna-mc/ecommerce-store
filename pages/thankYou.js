import Head from 'next/head';

export default function thankYou() {
  return (
    <div>
      <Head>
        <title>Thanks for Shopping!</title>
        <meta
          name="description"
          content="Thanking Customers for their purchase"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      Thank you for your purchase!
    </div>
  );
}
