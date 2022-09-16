import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

const Contact = () => {
  const { auth } = useAuth();

  if (!auth) return <Navigate to="/login" />;

  return <div>Contact</div>;
};

export default Contact;
