// 引入 Styled Components 套件
import styled from "styled-components";

// 引入 Font Awesome 的 Heart 與 Check Circle icon
import { FaHeart, FaCheckCircle } from "react-icons/fa";
// 引入 Feather 的 Target icon
import { FiTarget } from "react-icons/fi";

const StyledSection = styled.section`
  background-color: #8f8f8fe6;
  background-image: url("/images/background_images/feature-background-image.webp");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
  padding: 7% 15%;
`;

const FeatureWrap = styled.div`
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-radius: 15px;
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
      <div className="row">
        <FeatureWrap className="col-12 col-md-4 p-3">
          <IconWrap>
            <FaCheckCircle size={56} className="mb-2" />
          </IconWrap>
          <h3 className="fw-bold">{props.headingOne}</h3>
          <p>{props.paragraphOne}</p>
        </FeatureWrap>
        <FeatureWrap className="col-12 col-md-4 p-3">
          <IconWrap>
            <FiTarget size={56} className="mb-2" />
          </IconWrap>
          <h3 className="fw-bold">{props.headingTwo}</h3>
          <p>{props.paragraphTwo}</p>
        </FeatureWrap>
        <FeatureWrap className="col-12 col-md-4 p-3">
          <IconWrap>
            <FaHeart size={56} className="mb-2" />
          </IconWrap>
          <h3 className="fw-bold">{props.headingThree}</h3>
          <p>{props.paragraphThree}</p>
        </FeatureWrap>
      </div>
    </StyledSection>
  );
}
