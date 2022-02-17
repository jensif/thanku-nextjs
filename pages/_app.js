import Head from "next/head";
import Script from 'next/script';

import "./styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" httpEquiv="width=device-width, initial-scale=1" />
        <title>Jen Arevalo UI/X Designer & Developer</title>
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-90347905-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-90347905-1');
        `}
      </Script>
    </>
  );
}
