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

export default function Testimonials(props) {
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
              {props.testimonialsContentOne}
            </h2>
            <Image
              src="/images/testimonials/dog-img.webp"
              alt="dog-profile"
              width={100}
              height={100}
              className="rounded-circle m-3"
            />
            <em>{props.testimonialsNameOne}</em>
          </CarouselItem>
          {/* 第二個見證 */}
          <CarouselItem className="carousel-item">
            <h2 className="fs-1 fw-bold lh-base">
              {props.testimonialsContentTwo}
            </h2>
            <Image
              src="/images/testimonials/lady-img.webp"
              alt="lady-profile"
              width={100}
              height={100}
              className="rounded-circle m-3"
            />
            <em>{props.testimonialsNameTwo}</em>
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
