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
  return (
    <div>
      <Head>
        <title>tindog - Meet new and interesting dogs nearby</title>
      </Head>
      <NavBar />
      <Title
        headingText="Meet new and interesting dogs nearby."
        cta="Download"
      />
      <Features
        headingOne="Easy to use."
        paragraphOne="So easy to use, even your dog could do it."
        headingTwo="Elite Clientele"
        paragraphTwo="We have all the dogs, the greatest dogs."
        headingThree="Guaranteed to work."
        paragraphThree="Find the love of your dog's life or your money back."
      />
      <Testimonials />
      <Press />
      <Pricing />
      <Faq />
      <CalltoAction />
      <Footer />
    </div>
  );
}
