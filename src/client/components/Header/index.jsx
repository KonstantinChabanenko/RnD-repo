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
        console.log('ZASHLO')
        return (
          <NavDropdown title={category.name} id="basic-nav-dropdown" show={true}>
            {showCategories(category.categories)}
          </NavDropdown>
        );
      }

      if(category.parent_category_id !== 'root'){
        return (
        <NavDropdown.Item href="#link">{category.name}</NavDropdown.Item>
        )
      } else {
      return (
      <Nav.Link href="#link">{category.name}</Nav.Link>
      );}
    });

    return newarr;
  };

  return categories ? (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {showCategories(categories)}
          {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown> */}
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
