import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="navbar">
    <div class="navbar-item">
    <Link to={`/admin`} className="link">Register</Link>
      {/* <a class="link" href="./register.html">Register</a> */}
    </div>
    <div class="navbar-item">
    <Link to={`/manage`} className="link">Manage</Link>
      {/* <a class="link" href="./manage.html">Manage</a> */}
    </div>
  </div>
  );
};

export default Navbar;
