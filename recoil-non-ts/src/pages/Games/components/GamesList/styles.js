import styled from 'styled-components';

export const List = styled.ul`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.2);
`;

List.Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
  border-bottom: 1px solid #E1E1E1;
`;

List.Icon = styled.img`
  width: 1.3rem;
  margin: 0 auto 0 10px;
`;
