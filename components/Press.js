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
      <PressLogos src="/press_logos/TechCrunch.webp" alt="tc-logo" />
      <PressLogos src="/press_logos/tnw.webp" alt="tnw-logo" />
      <PressLogos src="/press_logos/bizinsider.webp" alt="biz-insider-logo" />
      <PressLogos src="/press_logos/mashable.webp" alt="mashable-logo" />
    </StyledSection>
  );
}
