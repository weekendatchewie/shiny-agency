import { createGlobalStyle } from "styled-components";

import { useContext } from 'react'
import { ThemeContext } from "../context";

const StyledGlobalStyle = createGlobalStyle`

  * {
    font-family: 'Space Grotesk', 'Trebuchet MS', sans-serif;
    
    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#2F2E41" : "white")};
    min-height: 100vh;
    //margin: 0;
  }

`;

function GlobalStyle() {

  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
