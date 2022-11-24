// 引入 Font Awesome 的 Apple 與 Google Play icon
import { FaApple, FaGooglePlay } from "react-icons/fa";

// 引入 NavBar 元件
import NavBar from "../components/NavBar";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ff4c68;
  color: #ffffff;
`;

const ContainerFluid = styled.div`
  padding: 3% 15% 7%;
`;

const TitleH1 = styled.h1`
  font-size: 3.5rem;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CtaButton = styled.button`
  margin: 5% 3% 5% 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleImg = styled.img`
  width: 60%;
  transform: rotate(25deg);
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(15deg);
  }
  @media (max-width: 768px) {
    width: 100%;
    transform: rotate(0deg);
    &:hover {
      transform: rotate(0deg);
    }
  }
`;

export default function Title(props) {
  return (
    <StyledSection id="title">
      <ContainerFluid className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-12 col-md-6">
            <TitleH1 className="fw-bolder lh-base">{props.headingText}</TitleH1>
            <CtaButton type="button" className="btn btn-dark btn-lg">
              <FaApple />
              &nbsp;
              {props.cta}
            </CtaButton>
            <CtaButton type="button" className="btn btn-outline-light btn-lg">
              <FaGooglePlay />
              &nbsp;
              {props.cta}
            </CtaButton>
          </div>
          <div className="col-12 col-md-6 my-3">
            <TitleImg
              src="/images/hero/iphone6.webp"
              alt="iphone-mockup"
              className="d-block mx-auto"
            />
          </div>
        </div>
      </ContainerFluid>
    </StyledSection>
  );
}
