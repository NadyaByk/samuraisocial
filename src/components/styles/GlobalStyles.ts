import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    min-width: 360px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }

    button {
        font: inherit;
        cursor: pointer;
        border: none;
        background-color: ${theme.colors.bgBlock};
        color: ${theme.colors.font};

    }
    ul {
        list-style-type: none;
    }

`