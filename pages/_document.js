import Document, { Html, Head, Main } from "next/document";
import React from 'react';
import clsx from "clsx";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
          />

        </Head>
        <body>
          <Main />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
