import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <div className="nav-wrapper">
    <div>
      <NavLink className="nav-title" to="/">
        BookStore CMS
      </NavLink>
    </div>

    <div>
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

    <div className="icon">
      <FontAwesomeIcon icon={faUser} />
    </div>
  </div>
);
export default Navbar;
