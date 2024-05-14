import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --very-dark-magenta: hsl(300, 43%, 22%);
        --dark-magenta: hsl(303, 10%, 53%);
        --light-magenta: hsl(300, 24%, 96%);
        --pink: hsl(333, 80%, 67%);
        --white: hsl(0, 0%, 100%);

        
    }

    body {
        font-family: "League Spartan", sans-serif;
        font-size: 15px; // Weights to use -- 400 -- 500 -- 700
        color: var(--very-dark-magenta);
    }

    html, 
    body,
    h1, 
    p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;
