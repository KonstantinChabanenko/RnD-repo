import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Dropdown,
  ButtonGroup
} from "react-bootstrap";
import { getCategories } from "../../services/categoryAPI";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories("root", {levels: 5}).then(response => {
      setCategories(response);
      console.log(response)
    });
  }, []);

  const showCategories = (categories) => {
    const newarr = categories.map(category => {
      if (category.categories) {
        return (
          <li
            key={category.name}
            className="value"
            data-filter-value={category.name}
            onClick={(e) => {}}
          >
            <span className="category-name">{category.name}</span>
            <ul className="refinement__values">{showCategories(category.categories)}</ul>
          </li>
        )
      }

      return (
        <li
          key={category.name}
          className="value"
          data-filter-value={category.name}
          onClick={(e) => {}}
        >
          <span className="category-name">{category.name}</span>
        </li>
      )
    });

    return newarr;
  };

  return categories.length > 0 ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {showCategories(categories)}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  ) : null;
};

export default Header;
