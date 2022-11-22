// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ef8172;
  text-align: center;
  padding-bottom: 3%;
`;

const PressLogos = styled.img`
  width: 15%;
  margin: 20px 20px 50px;
`;

export default function Press() {
  return (
    <StyledSection id="press">
      <PressLogos src="/techcrunch.png" alt="tc-logo" />
      <PressLogos src="/tnw.png" alt="tnw-logo" />
      <PressLogos src="/bizinsider.png" alt="biz-insider-logo" />
      <PressLogos src="/mashable.png" alt="mashable-logo" />
    </StyledSection>
  );
}
