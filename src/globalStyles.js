import { createGlobalStyle } from "styled-components";
import COLOR from "./colors";
export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    html,body,#root {
        height: 100%;
    }

    body {
        background-color: ${COLOR.background};
    }
    
    body, input, button {
        font-family: 'Roboto', sans-serif;
    }

    .App {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-top: 5%;
        width: 100%;
    }
`;
