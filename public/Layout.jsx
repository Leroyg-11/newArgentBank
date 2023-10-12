import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
