import Head from "next/head";

import Nav from "./Nav";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Page({
  children,
  disableContact = false,
  title = "Jen Arevalo UI/X Designer & Developer",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />

      <main>
        {children}
        {!disableContact && <Contact />}
      </main>

      <Footer />
    </>
  );
}
