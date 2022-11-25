// 引入 Font Awesome 的 Heart 與 Check Circle icon
import { FaHeart, FaCheckCircle } from "react-icons/fa";
// 引入 Feather 的 Target icon
import { FiTarget } from "react-icons/fi";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #8f8f8fe6;
  background-image: url("/images/background_images/feature-background-image.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
  padding: 100px 0;
  margin: -300px 0 0 0;
  position: relative;
  z-index: 1;
  @media (max-width: 1200px) {
    margin: -100px 0 0 0;
  }
  @media (max-width: 992px) {
    margin: -50px 0 0 0;
  }
  @media (max-width: 768px) {
    padding: 90px 0;
    margin: 0;
  }
`;

const FeatureWrap = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrap = styled.span`
  color: #ef8172;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #ff4c68;
  }
`;

export default function Features(props) {
  return (
    <StyledSection id="features" className="text-center text-white">
      <div className="container">
        <div className="row">
          <FeatureWrap className="col-12 col-md-4 p-3">
            <IconWrap>
              <FaCheckCircle size={56} className="mb-2" />
            </IconWrap>
            <h3 className="fw-bold">Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </FeatureWrap>
          <FeatureWrap className="col-12 col-md-4 p-3">
            <IconWrap>
              <FiTarget size={56} className="mb-2" />
            </IconWrap>
            <h3 className="fw-bold">Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </FeatureWrap>
          <FeatureWrap className="col-12 col-md-4 p-3">
            <IconWrap>
              <FaHeart size={56} className="mb-2" />
            </IconWrap>
            <h3 className="fw-bold">Guaranteed to work.</h3>
            <p>Find the love of your dog&apos;s life or your money back.</p>
          </FeatureWrap>
        </div>
      </div>
    </StyledSection>
  );
}
