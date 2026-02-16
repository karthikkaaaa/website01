

import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("ee_admin"));

  if (!admin) return <Navigate to="/admin/login" replace />;

  return children;
};

export default AdminRoute;
