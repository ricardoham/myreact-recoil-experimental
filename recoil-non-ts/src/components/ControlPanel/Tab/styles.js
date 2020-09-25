import styled from 'styled-components';

export const StyledTab = styled.div`
  padding: 16px;
  margin-right: 5px;
  cursor: pointer;
  height: 10px;
  width: 100%;
  text-align: center;
  ${(props) => {
    if (props.activeTab && '4px solid blue') {
      return `
        opacity: 1;
        border-bottom: 4px solid blue;
        font-weight: 600;
        `
    }
  }};
`;
