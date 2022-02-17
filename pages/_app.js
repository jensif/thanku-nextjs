import Head from "next/head";

import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" httpEquiv="width=device-width, initial-scale=1" />
        <title>Jen Arevalo</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
