import React, { useEffect, useState } from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  Container,
} from "react-bootstrap";
import { getCategories } from "../../services/categoryAPI";
import NavItem from './NavItem';
import DropdownItem from './DropdownItem';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories("root", { levels: 5 }).then(response => {
      setCategories(response);
    });
  }, []);

  const showCategories = (categories) => {
    const newarr = [];

    categories.forEach(category => {
      if (category.c_showInMenu) {
        if (category.parent_category_id === "root") {
          if (category.categories) {
            newarr.push(
              <NavItem
                key={category.id}
                linkTo={`/${category.id}`}
                catName={category.name}
              >
                {showCategories(category.categories)}
              </NavItem>
            )
          } else {
            newarr.push(
              <NavItem
                key={category.id}
                linkTo={`/${category.id}`}
                catName={category.name}
              />
            )
          }
        } else {
          if (category.categories) {
            newarr.push(
              <DropdownItem
                key={category.id}
                linkTo={`/${category.parent_category_id}/${category.id}`}
                catName={category.name}
              >
                {showCategories(category.categories)}
              </DropdownItem>
            )
          } else {
            newarr.push(
              <DropdownItem
                key={category.id}
                linkTo={`/${category.parent_category_id}/${category.id}`}
                catName={category.name}
              />
            )
          }
        }
      }
    })

    if (newarr.length > 0) {
      return newarr;
    }
  }

  return categories.length > 0 ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{showCategories(categories)}</Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : null;
};

export default Header;
