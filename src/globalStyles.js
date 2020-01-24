import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
    * {
        margin: 0;
        padding: 0;
    }

    html,body,#root,.App {
        height: 100%;
    }

    body {
        background-color: tomato;
        font-family: 'Lato', sans-serif;
    }
`