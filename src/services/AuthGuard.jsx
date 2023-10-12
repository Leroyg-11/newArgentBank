import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const userToken = useSelector((state) => state.user.user);

  if (userToken === null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthGuard;
