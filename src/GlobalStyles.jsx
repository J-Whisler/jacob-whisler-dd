import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .bg-dark {
    background-color: rgb(0, 0, 0);
  }
  .bg-medium {
    background-color: rgb(31, 40, 51);
  }

.primary-text-color {
  color: rgb(255, 255, 255);
}
.secondary-text-color {
  color: rgb(116, 115, 115);
}

.main-font {
  font-family: "Josefin Sans", sans-serif;
}
`;
export default GlobalStyle;
