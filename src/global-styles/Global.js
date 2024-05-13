import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --very-dark-magenta: hsl(300, 43%, 22%);
        --dark-grayish-magenta: hsl(303, 10%, 53%);
        --light-grayish-magenta: hsl(300, 24%, 96%);
        --pink: hsl(333, 80%, 67%);
        --white: hsl(0, 0%, 100%);

        
    }

    body {
        font-family: "League Spartan", sans-serif;
        font-size: 15px; // Weights to use -- 400 -- 500 -- 700
    }
`;
