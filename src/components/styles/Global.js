import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.montserrat};
        background: ${({ theme }) => theme.colors.primaryBG};
        color: #fff;   
        overflow-x: hidden;
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
    
    section,
    footer {
        margin: 1.5rem 0;
        padding: 1.5rem 0;
    }
`;
