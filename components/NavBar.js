// 引入 Styled Components 套件
import styled from "styled-components";

const NavBarNav = styled.nav`
  background-color: #ff4c68;
`;

export default function NavBar() {
  return (
    <NavBarNav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Tindog
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavBarNav>
  );
}
