import styled from 'styled-components';

export const StyledButton = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.color === 'secondary' ? '#ff6b6b' : '#48dbfb'};
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  padding: 8px 16px;
  width: 132px;
  margin-bottom: 8px;
`;
