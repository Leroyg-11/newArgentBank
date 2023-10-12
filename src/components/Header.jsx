import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

import logo from "../assets/NavBar/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { profileUser } from "../store/profileSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/login");
    dispatch(profileUser.pending());
  };

  const token = useSelector((state) => state.user.user);
  // console.log(token); OKKK

  const profileUserData = useSelector((state) => state.profile.user);
  // console.log(profileUserData); OKKK

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
            <p>{profileUserData ? profileUserData.firstName : ""}</p>
          </Link>

          {token === null ? (
            <Link to="/login" className="main-nav-item">
              <div className="main-nav-item">
                Sign in
                <i className="fa fa-sign-out"></i>
              </div>
            </Link>
          ) : (
            <Link
              onClick={handleLogout}
              to="/" // Assurez-vous d'avoir une route /logout pour gérer la déconnexion
              className="main-nav-item"
            >
              <div className="main-nav-item">
                Sign Out
                <i className="fa fa-sign-out"></i>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
