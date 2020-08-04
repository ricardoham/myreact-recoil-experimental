import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => (
  <aside className="sidebar">
    <NavLink className="side__link" exact to="/">
      Home
    </NavLink>
    <NavLink className="side__link" to="/counter">Counter Example</NavLink>
  </aside>
)

export default Navbar;
