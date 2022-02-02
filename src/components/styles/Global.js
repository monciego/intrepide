import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.montserrat};
        background: #111111;
        color: #fff;   
    }

    .container {
        max-width: 90%;
        width: 100%;
        margin: 0 auto;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: inherit;
    }
    
    section {
        margin: 3rem 0;
    }
`;
