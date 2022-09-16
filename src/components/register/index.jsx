import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../shared/StyledButton";
import { StyledInput } from "../../shared/StyledInput";
import Axios from "axios";
import { useAuth } from "../../store/useAuth";
import { login, register } from "../../store/auth";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 45rem;
  padding: 2rem 3rem;
  background-color: var(--color-white);
  border-radius: 1rem;
`;

const StyledText = styled.div`
  color: var(--color-black);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await register(
      username,
      first_name,
      last_name,
      email,
      password
    );
    if (!response) console.log("Registration Failed");
    else if (response.request.status === 201) {
      console.log("User Created");
      navigate("/login");
    }
  };

  return (
    <MainWrapper>
      <Wrapper>
        <StyledText>Create Account</StyledText>
        <StyledInput
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          placeholder="First Name"
          type="text"
          name="firstname"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <StyledInput
          placeholder="Last Name"
          type="text"
          name="lastname"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <StyledInput
          placeholder="example@xyz.com"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          placeholder="Password"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton onClick={handleRegister}>Submit</StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default Register;
