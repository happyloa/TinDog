// 引入 Font Awesome 的 Apple 與 Google Play icon
import { FaApple, FaGooglePlay } from "react-icons/fa";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 90px 0;
  }
`;

const CtaButton = styled.button`
  margin: 5% 3% 5% 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export default function CalltoAction() {
  return (
    <StyledSection id="cta">
      <div className="container text-center">
        <h3>Find the True Love of Your Dog&apos;s Life Today.</h3>
        <CtaButton type="button" className="btn btn-dark btn-lg">
          <FaApple />
          &nbsp;Download
        </CtaButton>
        <CtaButton type="button" className="btn btn-outline-dark btn-lg">
          <FaGooglePlay />
          &nbsp;Download
        </CtaButton>
      </div>
    </StyledSection>
  );
}
