import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useAuth} from '../../store/useAuth'
import { Container } from '../../shared/Container'
import { useLocalStorage } from '../../store/useLocalStorage'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;
    border-bottom: 2px solid transparent;
    transition: ease-in .1s;
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;

    &:hover{
        border-bottom: 1px solid var(--color-black);
    }
`

const UL = styled.ul`
    display: flex;
    height: 100%;
    list-style: none;
`

const LI = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--color-grey);
    border-bottom: 1px solid transparent;
    transition: ease-in .1s;
    cursor: pointer;

    &:hover{
        color: var(--color-black);
        border-bottom: 1px solid var(--color-black);
    }

`

const Navbar = () => {
    const {auth, setAuth} = useAuth()
    const {removeData} = useLocalStorage()
    const handleLogout = () => {
        removeData("access","refresh","username")
        setAuth(null)
    }
  return (
    <Container height="60px" backColor="--color-white" color='--color-black'>
        <Wrapper>
            <Logo><Link to="/">.Medium</Link></Logo>
            <UL>
                {
                    !auth
                    ?
                    <>
                        <LI><Link to="login/">Login</Link></LI>
                        <LI><Link to="register/">Register</Link></LI>
                    </>
                    :
                    <>
                        <LI><Link to="about/">About</Link></LI>
                        <LI><Link to="contact/">Contact</Link></LI>
                        <LI onClick={handleLogout}>Logout</LI>
                    </>
                }
            </UL>
        </Wrapper>
    </Container>
  )
}

export default Navbar