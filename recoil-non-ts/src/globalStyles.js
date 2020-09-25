import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  body {
    background-color: #F4F7FC;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export default StyledGlobal;
