import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import { useSelector } from "react-redux";
import PersistentDrawerRight from "../components/Drawer/Drawer";

// components/HeroSection.jsx
// export function HeroSection() {
//   return (
//     <section className="relative bg-cover bg-center h-[90vh] text-white" style={{ backgroundImage: "url('/images/gym-hero.jpg')" }}>
//       <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Body Today</h1>
//         <p className="text-lg md:text-xl mb-6">Join the best fitness community in your area</p>
//         <div className="space-x-4">
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-lg font-semibold transition">Join Now</button>
//           <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl text-lg font-semibold transition">Book Free Trial</button>
//         </div>
//       </div>
//     </section>
//   );
// }


const Layout = () => {
  const quizStarted = useSelector((state) => state.quiz.quizStarted)  

  return (
    <div style={{ margin: "0px" }}>
      {!quizStarted ? <PersistentDrawerRight /> : null}
      <Outlet />
      {/* <HeroSection/> */}
      {!quizStarted ? <Footer /> : null}
    </div>
  );
};

export default Layout;
