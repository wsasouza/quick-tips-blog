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
    background-color: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  body, input-security, textarea, button, h1, span {
    font-family: ${(props) => props.theme.fonts['1']};
    font-size: 1rem;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;    
  }

`
