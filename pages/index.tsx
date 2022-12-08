import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ihsen Association</title>
        <meta property="title" content="Ihsen Association" />
        <meta
          name="description"
          content="help make a difference in an orphan's life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-teal-400 text-4xl">Hello</h1>
    </div>
  );
}
