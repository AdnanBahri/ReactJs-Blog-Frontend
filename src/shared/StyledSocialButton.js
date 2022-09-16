import React from 'react'
import styled from "styled-components";

const MainWrapper = styled.div`
    display: block;
    margin-top: 1.2rem;
    border: .1rem solid var(--color-grey-light);
    border-radius: 2.4rem;
    background-color: var(--color-white);
    cursor: pointer;

    :hover{
        border: .1rem solid var(--color-grey);
    }
`

const Button = styled.a`
    width: 21.2rem;
    height: 4rem;
    color: var(--color-grey);
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: left;
    display: inline-block;
    padding: .6rem 1.2rem .8rem 1.6rem;
`



const StyledSocialButton = ({link, children}) => {
  return (
    <MainWrapper>
        <Button href={link}>
            {children}
        </Button>
    </MainWrapper>
  )
}

export default StyledSocialButton