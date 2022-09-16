import styled from "styled-components";
import StyledSocialButton from "../../shared/StyledSocialButton";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80rem;
  height: 68rem;
  box-shadow: 0 0.5rem 1.6rem rgba(0, 0, 0, 0.2);
  background: var(--color-white);
  color: var(--color-black);
  z-index: 10;
  border-radius: 1rem;
`;

const StyledTitle = styled.h2`
  color: var(--color-black);
  margin: 8rem auto;
  font-size: 2.5rem;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const Modal = ({ isLive, setIsLive }) => {
  return (
    <>
      {isLive ? (
        <MainWrapper>
          <Wrapper>
            <StyledTitle>Join Medium.</StyledTitle>
          </Wrapper>
        </MainWrapper>
      ) : null}
    </>
  );
};

export default Modal;
