import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [nav, setNav] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <FaX width={30} height={30} />
        </div>
        {user ? (
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/men">
                Men
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/women">
                Women
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/brands">
                Brands
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/profile">
                My Account
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  handleLogout();
                  openNav();
                }}
              >
                Log Out
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/men">
                Men
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/women">
                Women
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/brands">
                Brands
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* desktop */}
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="men-link" to="/men">
              Men
            </Link>
          </li>
          <li>
            {" "}
            <Link className="women-link" to="/women">
              Women
            </Link>
          </li>
          <li>
            {" "}
            <Link className="brands-link" to="/brands">
              Brands
            </Link>
          </li>
          <li>
            {" "}
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {user ? (
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/profile">
              My Account
            </Link>
            <button className="navbar__buttons__logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/login">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div>
        )}
        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <IoMenu width={30} height={30} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
