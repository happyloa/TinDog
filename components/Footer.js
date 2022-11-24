import Image from "next/image";

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
        <a
          href="https://github.com/happyloa/TinDog"
          target="_blank"
          rel="noreferrer">
          <Image
            src={"/images/github-logo.webp"}
            alt={"GitHub icon"}
            width={50}
            height={50}
          />
        </a>
      </div>
    </StyledFooter>
  );
}
