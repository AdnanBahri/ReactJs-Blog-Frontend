import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../shared/StyledButton";
import { StyledInput } from "../../shared/StyledInput";
import { useAuth } from "../../store/useAuth";
import { Navigate } from "react-router-dom";
import { login } from "../../store/auth";
import { useLocalStorage } from "../../store/useLocalStorage";
import { StyledError } from "../../shared/StyledError";

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
  height: 35rem;
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

const Login = () => {
  const { auth, setAuth, error, setError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useLocalStorage();

  const handleLogin = async (e) => {
    const response = await login(username, password, setError);
    if (response) {
      console.log(response);
      setUserData("access", response.accessToken);
      setUserData("refresh", response.refreshToken);
      setUserData("username", username);
      setAuth(response);
    } else {
      console.log("Login Failed Null");
      console.log(response);
    }
  };

  if (auth !== null) return <Navigate to="/" replace />;

  return (
    <MainWrapper>
      <Wrapper>
        <StyledText> Login </StyledText>
        {error && <StyledError>{error}</StyledError>}
        <StyledInput
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          placeholder="Password"
          value={password}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton onClick={handleLogin}>Let Me In</StyledButton>
      </Wrapper>
    </MainWrapper>
  );
};

export default Login;
