import { createGlobalStyle } from "styled-components";

import "react-circular-progressbar/dist/styles.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: linear-gradient(135deg, #0079c1 60%, #00b8ff);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
  }
`;
