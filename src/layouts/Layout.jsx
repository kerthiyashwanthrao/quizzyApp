import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <div style={{margin:"0px"} }>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
