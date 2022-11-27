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
      <Head>
        <title>{t("bookmarkTitle")}</title>
      </Head>
      {/* 用 props 的方式來將翻譯字串傳遞給各個元件 */}
      <NavBar
        featuresLink={t("NavBar.featuresLink")}
        pricingLink={t("NavBar.pricingLink")}
        downloadLink={t("NavBar.downloadLink")}
      />
      <Title
        titleHeading={t("Title.titleHeading")}
        titleCta={t("Title.titleCta")}
      />
      <Features
        featureTitleOne={t("Features.featureTitleOne")}
        featureParagraphOne={t("Features.featureParagraphOne")}
        featureTitleTwo={t("Features.featureTitleTwo")}
        featureParagraphTwo={t("Features.featureParagraphTwo")}
        featureTitleThree={t("Features.featureTitleThree")}
        featureParagraphThree={t("Features.featureParagraphThree")}
      />
      <Testimonials
        testimonialsContentOne={t("Testimonials.testimonialsContentOne")}
        testimonialsNameOne={t("Testimonials.testimonialsNameOne")}
        testimonialsContentTwo={t("Testimonials.testimonialsContentTwo")}
        testimonialsNameTwo={t("Testimonials.testimonialsNameTwo")}
      />
      <Press />
      <Pricing
        sectionHeading={t("Pricing.sectionHeading")}
        sectionSubHeading={t("Pricing.sectionSubHeading")}
        cardOneHeading={t("Pricing.cardOneHeading")}
        cardOneFee={t("Pricing.cardOneFee")}
        cardOneFeatureOne={t("Pricing.cardOneFeatureOne")}
        cardOneFeatureTwo={t("Pricing.cardOneFeatureTwo")}
        cardOneFeatureThree={t("Pricing.cardOneFeatureThree")}
        cardTwoHeading={t("Pricing.cardTwoHeading")}
        cardTwoFee={t("Pricing.cardTwoFee")}
        cardTwoPeriod={t("Pricing.cardTwoPeriod")}
        cardTwoFeatureOne={t("Pricing.cardOneFeatureOne")}
        cardTwoFeatureTwo={t("Pricing.cardTwoFeatureTwo")}
        cardTwoFeatureThree={t("Pricing.cardTwoFeatureThree")}
        cardThreeHeading={t("Pricing.cardThreeHeading")}
        cardThreeFee={t("Pricing.cardThreeFee")}
        cardThreePeriod={t("Pricing.cardThreePeriod")}
        cardThreeFeatureOne={t("Pricing.cardThreeFeatureOne")}
        cardThreeFeatureTwo={t("Pricing.cardThreeFeatureTwo")}
        cardThreeFeatureThree={t("Pricing.cardThreeFeatureThree")}
        cardThreeFeatureFour={t("Pricing.cardThreeFeatureFour")}
        cardCta={t("Pricing.cardCta")}
      />
      <Faq
        FaqHeading={t("Faq.FaqHeading")}
        FaqSubHeading={t("Faq.FaqSubHeading")}
      />
      <CalltoAction
        ctaHeading={t("Cta.ctaHeading")}
        ctaDownload={t("Cta.ctaDownload")}
      />
      <Footer />
    </div>
  );
}
