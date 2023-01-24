import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    body {   
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Raleway', sans-serif;       
    }

    @media (max-width: 1024px) {
        *, body {
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        *, body {
            font-size: 12px;
        }
    }

    @media (max-width: 600px) {
        *, body{
            font-size: 10px;
        }
    }
`;


