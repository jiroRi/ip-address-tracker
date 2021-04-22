import { createGlobalStyle } from "styled-components";
import "sanitize.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
    }

    body > div {
        min-width: 100vw;
        height: 100vh;

    }
`;
