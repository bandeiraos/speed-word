import { createGlobalStyle } from "styled-components";
import COLOR from "./colors";
import Logo from "./assets/images/logo-bob.png";

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
        height: 100%;
        > .content {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            
            width: 100%;
            flex-direction: column;
        }
    }
`;
