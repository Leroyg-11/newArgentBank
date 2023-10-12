import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
