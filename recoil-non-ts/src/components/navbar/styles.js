import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 1rem .8rem;
`;

SideBar.Link = styled(NavLink)`
  color: #181818;
  text-decoration: none;
  padding: .5rem;
  font-weight: 600;
  background: #ffeaa7;
  border-radius: 4px;
  margin-bottom: 5px;
`;
