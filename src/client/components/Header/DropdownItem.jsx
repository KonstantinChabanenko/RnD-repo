import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownItem = ({ children, linkTo, catName }) => {
  const [show, setShow] = useState(false);

  return (
    <li className={`nav-item${children ? ' dropdown' : ''}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Link to={linkTo}>{catName} {children ? <i class="fas fa-caret-right"></i> : null}</Link>
      {children ? (
        <ul className={`dropdown-menu${show ? ' show' : ''}`}>{children}</ul>
      ) : (
          null
        )}
    </li>
  )
}

export default DropdownItem;
