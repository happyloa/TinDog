// 引入 Styled Components 套件
import styled from "styled-components";

// 引入 Font Awesome 的 Apple 與 Google Play icon
import { FaApple, FaGooglePlay } from "react-icons/fa";

// 引入 NavBar 元件
import NavBar from "../components/NavBar";

const StyledSection = styled.section`
  background-color: #ff4c68;
  color: #ffffff;
`;

const ContainerFluid = styled.div`
  padding: 3% 15%;
`;

const TitleH1 = styled.h1`
  font-size: 3.5rem;
`;

const CtaButton = styled.button`
  margin: 5% 3% 5% 0;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const TitleImg = styled.img`
  width: 60%;
  transform: rotate(25deg);
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
          <div className="col-12 col-md-6">
            <TitleImg src="/iphone6.webp" alt="iphone-mockup" />
          </div>
        </div>
      </ContainerFluid>
    </StyledSection>
  );
}
