import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const quizStarted = useSelector((state) => state.quiz.quizStarted)
  console.log(quizStarted,"quizStarted");
  

  return (
    <div style={{ margin: "0px" }}>
      {!quizStarted ? <Header /> : null}
      <Outlet />
      {!quizStarted ? <Footer /> : null}
    </div>
  );
};

export default Layout;
