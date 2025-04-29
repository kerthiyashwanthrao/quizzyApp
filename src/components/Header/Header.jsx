import React, { useState } from "react";

//importing css
import "./Header.css";

import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [navShow, setNavShow] = useState(true);
  const [maxScroll, setMaxScroll] = useState(0);
  const highScore = useSelector((state)=>state.quiz?.highScore)

  console.log(highScore);
  

  const handleScroll = () => {
    const scrollposition = window.scrollY;
    if (scrollposition > maxScroll) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
    setMaxScroll(scrollposition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={navShow === false ? "navbar navbar-hide" : "navbar"}>
      <div>
        <Link className="menuItem" to="/">
          HOME
        </Link>
      </div>
      <div className="navIcon">
        <Link className="menuItem" >
          High score {highScore}
        </Link>
      </div>
    </div>
  );
}
