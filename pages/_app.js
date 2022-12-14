// 引入 Bootstrap 的樣式檔案
import "bootstrap/dist/css/bootstrap.min.css";

// 引入全域樣式
import "../styles/globals.css";

import { useEffect } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  // 引入 Bootstrap 的程式碼檔案
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={t("metaDescription")} />
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* 引入 Montserrat 字型 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* 引入 Ubuntu 字型 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
