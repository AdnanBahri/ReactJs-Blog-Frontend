import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

const About = () => {
  const { auth } = useAuth();

  if (!auth) return <Navigate to="/login" />;

  return <div>About</div>;
};

export default About;
