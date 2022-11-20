export default function NavBar() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="">
        Tindog
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Download
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
