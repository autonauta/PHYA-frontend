import React from "react";
import { Link, withRouter } from "react-router-dom";

import { isAuthenticated, logout } from "../apiCore";
import logo from "../img/LOGO_PHYA.png";
import logoText from "../img/logo_PHYA_TEXT.png";

const Navbar = ({ history }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logobox">
          <img src={logo} alt="Logotipo" className="navbar__logo" />
        </Link>
        <Link to="/" className="navbar__logobox2">
          <img src={logoText} alt="Logotipo" className="navbar__logo2" />
        </Link>
        {isAuthenticated() && (
          <Link
            to="/login"
            onClick={() =>
              logout(() => {
                history.push("/login");
              })
            }
            className="navbar__link"
          >
            Logout
          </Link>
        )}
      </nav>
    </>
  );
};

export default withRouter(Navbar);
