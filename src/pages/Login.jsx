import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { profileUser } from "../store/profileSlice";

const Login = () => {
  const [profileData, setProfileData] = useState({});
  const [email, setEmail] = useState("tony@stark.com");
  const [password, setPassword] = useState("password123");

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    let userCredential = {
      email,
      password,
    };
    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        navigate("/account");
        const token = result.payload;
        dispatch(profileUser(token)).then((result) => {
          if (result.payload) {
            const dataprof = result.payload;
            setProfileData(dataprof);
          }
        });
      } else {
        setErrorMessage(
          `${result.error.message}. Please try again with a valide email and password`
        );
      }
    });
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLoginEvent}>
        <h1>Login Here</h1>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="text  "
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Press </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
