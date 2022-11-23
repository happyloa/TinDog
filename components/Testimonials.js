import Image from "next/image";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ef8172;
`;

const CarouselItem = styled.div`
  padding: 7% 15%;
  @media (max-width: 768px) {
    padding: 7% 5%;
  }
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
          <CarouselItem className="carousel-item active">
            <h2 className="fs-1 fw-bold lh-base">
              I no longer have to sniff other dogs for love. I&apos;ve found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <Image
              src="/images/testimonials/dog-img.webp"
              alt="dog-profile"
              width={100}
              height={100}
              className="rounded-circle m-3"
            />
            <em>Pebbles, New York</em>
          </CarouselItem>
          {/* 第二個見證 */}
          <CarouselItem className="carousel-item">
            <h2 className="fs-1 fw-bold lh-base">
              My dog used to be so lonely, but with TinDog&apos;s help,
              they&apos;ve found the love of their life. I think.
            </h2>
            <Image
              src="/images/testimonials/lady-img.webp"
              alt="lady-profile"
              width={100}
              height={100}
              className="rounded-circle m-3"
            />
            <em>Beverly, Illinois</em>
          </CarouselItem>
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
