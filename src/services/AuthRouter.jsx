import React from "react";
import { Route, Routes } from "react-router-dom";

import Error from "../pages/Error";
import Login from "../pages/Login";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;
