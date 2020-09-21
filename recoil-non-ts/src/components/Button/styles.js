import styled from 'styled-components';

export const StyledButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.color === 'secondary' ? '#ff6b6b' : '#48dbfb'};
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  padding: 8px 16px;
  margin: 12px;
  width: 132px;
`;
