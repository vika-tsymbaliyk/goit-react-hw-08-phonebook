import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'


export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ theme }) => theme.colors.bg};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content:center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  list-style:none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`