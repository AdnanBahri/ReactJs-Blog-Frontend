import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/useAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
