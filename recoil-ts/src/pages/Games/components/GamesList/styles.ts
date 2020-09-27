import styled from 'styled-components';

export const List: any = styled.ul`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.2);
  padding: 18px;
`;

List.Item = styled.li`
  display: flex;
  align-items: center;
  padding: 18px 10px;
  border-bottom: 1px solid #E1E1E1;
  &:last-child {
    border-bottom: none;
  }
`;

List.Icon = styled.img`
  width: 1.3rem;
  margin: 0 auto 0 10px;
`;
