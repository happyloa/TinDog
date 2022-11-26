import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

import { useTranslation } from "next-i18next";

// 引入 NavBar 元件
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Press from "../components/Press";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Home() {
  // 宣告 t 常數，並使用 public/locales 資料夾裡面的 common.json 作為翻譯字串的來源。
  // 備註：如果有多於一個頁面元件（page-level components）的話，可以在不同的頁面宣告 t 常數，並指定不同名稱的 json 檔案
  const { t } = useTranslation("common");
  return (
    <div>
      {/* 用 props 的方式來將翻譯字串傳遞給各個元件 */}
      <Head>
        <title>tindog - Meet new and interesting dogs nearby</title>
      </Head>
      <NavBar
        featuresLink={t("NavBar.featuresLink")}
        pricingLink={t("NavBar.pricingLink")}
        downloadLink={t("NavBar.downloadLink")}
      />
      <Title
        titleHeading={t("Title.titleHeading")}
        titleCta={t("Title.titleCta")}
      />
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <Faq />
      <CalltoAction />
      <Footer />
    </div>
  );
}
