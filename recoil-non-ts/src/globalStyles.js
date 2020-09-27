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

  .icons {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;
  }
`;

export default StyledGlobal;
