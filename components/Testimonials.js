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
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="true"
        data-bs-pause="hover">
        <div className="carousel-inner">
          {/* 第一個見證 */}
          <div className="carousel-item active">
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
          </div>
          {/* 第二個見證 */}
          <div className="carousel-item">
            <TitleH2 className="fw-bold lh-base">
              My dog used to be so lonely, but with TinDog&apos;s help,
              they&apos;ve found the love of their life. I think.
            </TitleH2>
            <TestimonialsImg
              src="/images/testimonials/lady-img.webp"
              alt="lady-profile"
              className="rounded-circle"
            />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </StyledSection>
  );
}
