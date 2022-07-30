import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Tungsten';
    src: url('./fonts/Tungsten/Tungsten-Semibold.woff2') format('woff2'),
        url('./fonts/Tungsten/Tungsten-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Tungsten';
    src: url('./fonts/Tungsten/Tungsten-Bold.woff2') format('woff2'),
        url('./fonts/Tungsten/Tungsten-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      cursor: none;
}

html {
  box-sizing: border-box
}

body {
  margin: 0;
  font-family: 'Tungsten';
  color: #ffffff;
}
`

export default GlobalStyles
