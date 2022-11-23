// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ef8172;
  padding: 7% 15%;
`;

const TitleH2 = styled.h2`
  font-size: 3rem;
`;

const TestimonialsImg = styled.img`
  width: 10%;
  margin: 20px;
`;

export default function Testimonials() {
  return (
    <StyledSection id="testimonials" className="text-center text-white">
      <TitleH2 className="fw-bold lh-base">
        I no longer have to sniff other dogs for love. I&apos;ve found the
        hottest Corgi on TinDog. Woof.
      </TitleH2>
      <TestimonialsImg
        src="/images/testimonials/dog-img.webp"
        alt="dog-profile"
        className="rounded-circle"
      />
      <em>Pebbles, New York</em>

      {/* <TitleH2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</TitleH2>
    <TestimonialsImg class="testimonial-image" src="/lady-img.webp" alt="lady-profile"/>
    <em>Beverly, Illinois</em> */}
    </StyledSection>
  );
}
