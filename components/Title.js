// 引入 Styled Components 套件
import styled from "styled-components";

const TitleSection = styled.section`
  background-color: #ff4c68;
`;

const TitleH1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.5;
`;

export default function Title(props) {
  return (
    <TitleSection id="title">
      <div className="row">
        <div className="col-12 col-md-6">
          <TitleH1>{props.headingText}</TitleH1>
          <button type="button">{props.cta}</button>
          <button type="button">{props.cta}</button>
        </div>
        <div className="col-12 col-md-6">
          <img src="/iphone6.png" alt="iphone-mockup" />
        </div>
      </div>
    </TitleSection>
  );
}
