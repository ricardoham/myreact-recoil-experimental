import styled from 'styled-components';

interface StyledProps {
  activeTab: any;
}

export const StyledTab = styled.div<StyledProps>`
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
        border-bottom: 4px solid #48dbfb;
        font-weight: 600;
        `
    }
  }};
`;
