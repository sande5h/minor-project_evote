import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark pt-3" data-bs-theme="dark">
      <div className="container-fluid justify-content-center" >
        <a className="navbar-brand" href="#">
          BLOCKCHAIN BASED E-VOTING SYSTEM
        </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink to="/register" className="nav-link active" aria-current="page">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">Display</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/vote" className="nav-link active" aria-current="page">Vote</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
