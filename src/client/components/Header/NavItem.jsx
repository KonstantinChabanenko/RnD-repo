import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ children, linkTo, catName }) => {
  const [show, setShow] = useState(false);

  return (
    <li className={`nav-item${children ? ' dropdown' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <NavLink
        to={linkTo}
        className={`nav-link${show ? ' show' : ''}`}
      >
        {catName} {children ? <i className="fas fa-caret-down"></i> : null}
      </NavLink>
      {children ? (
        <ul className={`dropdown-menu${show ? ' show' : ''}`}>{children}</ul>
      ) : (
          null
        )}
    </li>
  )
}

export default NavItem;
