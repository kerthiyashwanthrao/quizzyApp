// import React, { useState } from "react";
// import { toggleTheme } from "../../reducers/themeReducer";

// import "./Header.css";

// import { useEffect } from "react";

// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
// // import LogoutButton from "../Logout/Logout";
// import LogoutButton from "../Logout/Logout";

// export default function Header() {
//   const [navShow, setNavShow] = useState(true);
//   const [maxScroll, setMaxScroll] = useState(0);
//   const dispatch = useDispatch();

//   const handleScroll = () => {
//     const scrollposition = window.scrollY;
//     if (scrollposition > maxScroll) {
//       setNavShow(false);
//     } else {
//       setNavShow(true);
//     }
//     setMaxScroll(scrollposition);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });

//   return (
//     <div className={navShow === false ? "navbar navbar-hide" : "navbar"}>
//       <div>
//         <Link className="menuItem" to="/">
//           HOME
//         </Link>
//       </div>
//       <div className="navRight">
//         <div className="navIcon" onClick={() => dispatch(toggleTheme())}>
//           <ThemeToggler mode={mode === "dark" ? true : false} />
//         </div>
//         {user && (
//           <div className="navIcon">
//             <img className="profileImg" src={user?.photo} />
//           </div>
//         )}
//         <div className="navIcon">
//           <LogoutButton />
//         </div>
//       </div>
//     </div>
//   );
// }
