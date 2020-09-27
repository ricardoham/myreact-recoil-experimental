import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBar: any = styled.aside`
  display: flex;
  flex-direction: column;
  margin: 12px 18px;
  background-color: #fff;
  padding: 18px 12px;
  border: 1px solid #E1E1E1;
`;

SideBar.Link = styled(NavLink)`
  color: #222;
  text-decoration: none;
  padding: .5rem;
  font-weight: 500;
  margin-bottom: 18px;

  &.active {
    background: #48dbfb;
    border-radius: 4px;
  }
`;
