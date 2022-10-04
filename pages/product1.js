import Head from 'next/head';

export default function product1() {
  return (
    <div>
      <Head>
        <title>Baby Jackalope</title>
        <meta name="description" content="Baby Jackalope Product page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <img src="/1-baby.png" alt="A baby jackalope." />
      </div>
      <h1>Baby Jackalope</h1>
      <p> Price:</p>
      <p> Quantity</p>
      <form>
        <button>Add to Cart</button>
      </form>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        malesuada massa sapien, id condimentum sem ornare sit amet. Donec at
        libero ac odio ullamcorper tristique. Vestibulum ac elementum est, et
        tincidunt nunc. Maecenas gravida ultricies risus, id vulputate purus
        porttitor ultricies. Sed dapibus feugiat cursus. Ut quis ligula vel
        massa feugiat mollis et et augue.{' '}
      </p>
    </div>
  );
}
