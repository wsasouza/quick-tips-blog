import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
}

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  body, input-security, textarea, button {
    font: 400 1rem 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

`