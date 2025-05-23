import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";

const Layout = () => {
  const quizStarted = useSelector((state) => state.quiz.quizStarted)  

  return (
    <div style={{ margin: "0px" }}>
      {!quizStarted ? <Header /> : null}
      <Outlet />
      {!quizStarted ? <Footer /> : null}
    </div>
  );
};

export default Layout;
