import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-wrapper">
    <NavLink className="nav-title" to="/">
      BookStore CMS
    </NavLink>
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink className="nav-item" activeStyle={{ color: 'blue' }} to="/">
          BOOKS
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink className="nav-item" activeStyle={{ color: 'blue' }} to="/category">
          CATEGORY
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Navbar;
