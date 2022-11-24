// 引入 Styled Components 套件
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #ff4c68;
  color: #ffffff;
  padding: 25px 0;
`;

export default function Footer() {
  return (
    <StyledFooter id="footer">
      <div className="container text-center">
        <p>© Copyright Wolfpack</p>
      </div>
    </StyledFooter>
  );
}
