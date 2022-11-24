import Image from "next/image";

// 引入 Styled Components 套件
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: #ef8172;
  padding: 0 0 3%;
  @media (max-width: 768px) {
    padding: 0 0 5%;
  }
`;

export default function Press() {
  return (
    <StyledSection id="press">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <Image
            src="/images/press_logos/TechCrunch.webp"
            alt="tc-logo"
            width={300}
            height={50}
            className="col-12 col-md-6 col-lg-3 mb-4"
          />
          <Image
            src="/images/press_logos/tnw.webp"
            alt="tnw-logo"
            width={300}
            height={125}
            className="col-12 col-md-6 col-lg-3 mb-4"
          />
          <Image
            src="/images/press_logos/bizinsider.webp"
            alt="biz-insider-logo"
            width={300}
            height={50}
            className="col-12 col-md-6 col-lg-3 mb-4"
          />
          <Image
            src="/images/press_logos/mashable.webp"
            alt="mashable-logo"
            width={300}
            height={50}
            className="col-12 col-md-6 col-lg-3 mb-4"
          />
        </div>
      </div>
    </StyledSection>
  );
}
