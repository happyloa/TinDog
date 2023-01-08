// 引入 Font Awesome 的 Apple 與 Google Play icon
import { FaApple, FaGooglePlay } from "react-icons/fa";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #fff;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 90px 0;
  }
`;

const CtaButton = styled.button`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export default function CalltoAction(props) {
  return (
    <StyledSection id="cta">
      <div className="container text-center">
        <h3 className="mb-5">{props.ctaHeading}</h3>
        <CtaButton type="button" className="btn btn-dark btn-lg m-2">
          <FaApple />
          &nbsp;{props.ctaDownload}
        </CtaButton>
        <CtaButton type="button" className="btn btn-outline-dark btn-lg m-2">
          <FaGooglePlay />
          &nbsp;{props.ctaDownload}
        </CtaButton>
      </div>
    </StyledSection>
  );
}
