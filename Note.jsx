import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

import logo from "../assets/NavBar/argentBankLogo.png";

const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="account-header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>

        <div className="nav-logged-container">
          <Link className="nav-info-user main-nav-item" to="/account">
            <i className="fa fa-user-circle"></i>
            <p></p>
          </Link>
          <Link to="/login" className="main-nav-item">
            <div className="main-nav-item">
              Sign in
              <i className="fa fa-sign-out"></i>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
