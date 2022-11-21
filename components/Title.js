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
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.5;
`;

export default function Title(props) {
  return (
    <StyledSection id="title">
      <ContainerFluid className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-12 col-md-6">
            <TitleH1>{props.headingText}</TitleH1>
            <button type="button" className="btn btn-dark btn-lg">
              <FaApple />
              &nbsp;
              {props.cta}
            </button>
            <button type="button" className="btn btn-outline-light btn-lg">
              <FaGooglePlay />
              &nbsp;
              {props.cta}
            </button>
          </div>
          <div className="col-12 col-md-6">
            <img src="/iphone6.png" alt="iphone-mockup" />
          </div>
        </div>
      </ContainerFluid>
    </StyledSection>
  );
}
