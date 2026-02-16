
// import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import { useLocation } from "react-router-dom";

// const Layout = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();

//   const hideNavbarRoutes = ["/login"];

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       {!hideNavbarRoutes.includes(location.pathname) && (
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       )}
//       {children}
//     </div>
//   );
// };

// export default Layout;
