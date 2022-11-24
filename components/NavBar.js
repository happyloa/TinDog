// 引入 Styled Components 套件
import styled from "styled-components";

const NavTag = styled.nav`
  padding: 0 0 4.5rem;
`;

const StyledAnchor = styled.a`
  font-family: "Ubuntu", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
`;

const NavList = styled.li`
  padding: 0 18px;
`;

const NavAnchor = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
`;

export default function NavBar() {
  return (
    <NavTag className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid px-0">
        <StyledAnchor className="navbar-brand" href="#">
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
          <ul className="navbar-nav ms-auto">
            <NavList className="nav-item">
              <NavAnchor className="nav-link" href="#">
                Contact
              </NavAnchor>
            </NavList>
            <NavList className="nav-item">
              <NavAnchor className="nav-link" href="#">
                Pricing
              </NavAnchor>
            </NavList>
            <NavList className="nav-item">
              <NavAnchor className="nav-link" href="#">
                Download
              </NavAnchor>
            </NavList>
          </ul>
        </div>
      </div>
    </NavTag>
  );
}
