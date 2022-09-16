import styled, { keyframes } from "styled-components";


const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const StyledButton = styled.button`
  min-width: 100%;
  margin-top: 4rem;
  padding: 11px 13px;
  color: var(--color-white);
  font-weight: 600;
  text-transform: uppercase;
  background: var(--color-brown);
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: var(--color-brown-dark);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;