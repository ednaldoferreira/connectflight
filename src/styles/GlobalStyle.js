import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Open Sans', sans-serif;
    color: ${theme.text};
    background: #fff;
    line-height: 1.6;
  }
  strong { color: ${theme.dark}; font-weight: 700; }
  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 2px solid ${theme.accent};
    outline-offset: 3px;
  }
`
