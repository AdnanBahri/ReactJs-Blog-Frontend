import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`

    :root{
        --color-black: #060707;
        --color-grey: #7E7E81;
        --color-grey-light: #BFBDBE;
        --color-gey-lighter: #E6E6E7;
        --color-white: #ffffff;
        --color-brown: #9A705E;
        --color-brown-dark: #50372D;

    }

    *{
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6 ;
        min-height: 100vh;
        background-color: var(--color-gey-lighter);
    }

    a{
        text-decoration: none;
    }
`