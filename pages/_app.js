// 引入 Bootstrap 的樣式檔案
import "bootstrap/dist/css/bootstrap.css";
// 引入全域樣式
import "../styles/globals.css";
import NavBar from "../components/NavBar";

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
