import Title from "../components/Title";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Press from "../components/Press";
import Pricing from "../components/Pricing";
import CalltoAction from "../components/CalltoAction";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>tindog - Meet new and interesting dogs nearby</title>
      </Head>
      <Title
        headingText="Meet new and interesting dogs nearby."
        cta="Download"
      />
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <CalltoAction />
      <Footer />
    </div>
  );
}
