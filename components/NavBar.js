// 引入切換語系的元件
import LanguageSwitch from "/components/LanguageSwitch";

// 引入 Styled Components 套件
import styled from "styled-components";

const NavTag = styled.nav`
  background-color: #ff4c6899;
  backdrop-filter: blur(10px);
`;

const StyledAnchor = styled.a`
  font-family: "Ubuntu", sans-serif;
`;

export default function NavBar(props) {
  return (
    <NavTag className="navbar navbar-dark navbar-expand-sm py-1 sticky-top">
      <div className="container">
        <StyledAnchor className="navbar-brand fs-1 fw-bold" href="#">
          tindog
        </StyledAnchor>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item px-2">
              <a className="nav-link" href="#features">
                {props.featuresLink}
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#pricing">
                {props.pricingLink}
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#cta">
                {props.downloadLink}
              </a>
            </li>
            <LanguageSwitch />
          </ul>
        </div>
      </div>
    </NavTag>
  );
}
