// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar";

// const MainLayout = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false); 
//       } else {
//         setShowNavbar(true); 
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Navbar
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//         showNavbar={showNavbar}
//       />
//       <Outlet />
//     </div>
//   );
// };

// export default MainLayout;
