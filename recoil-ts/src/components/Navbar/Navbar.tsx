import React from 'react';
import { SideBar } from './styles';

const Navbar = () => (
  <SideBar>
    <SideBar.Link exact to="/">
      Home
    </SideBar.Link>
    <SideBar.Link to="/counter">Counter Example</SideBar.Link>
    <SideBar.Link to="/more">More Examples</SideBar.Link>
  </SideBar>
)

export default Navbar;
