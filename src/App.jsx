import React, { useState } from "react";
import Navbar from "./components/header";
import Login from "./components/login";
import Modal from "./components/modal";
import Post from "./components/post";
import Register from "./components/register";
import { Layout } from "./shared/Layout";
import { StyledButton } from "./shared/StyledButton";
import GlobalStyle from "./theme/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./shared/ProtectedRoute";
import { AuthProvider } from "./store/AuthContext";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Contact />} path="/contact" />
            <Route element={<About />} path="/about" />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Layout>
      </Router>
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
