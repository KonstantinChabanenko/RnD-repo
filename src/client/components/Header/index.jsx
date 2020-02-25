import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import SearchField from './SearchField';
import Loader from '../Loader';
import showCategories from '../../scripts/navigation/showCategories';
import navBarCategoriesActions from '../../store/actions/navBarCategoriesActions';

const Header = () => {
  const dispatch = useDispatch();
  const navBarCategoriesReducer = useSelector(state => state.navBarCategoriesReducer);
  const { categories, isLoading } = navBarCategoriesReducer;

  useEffect(() => {
    dispatch(navBarCategoriesActions.getCategoriesStart());
  }, [dispatch]);

  return isLoading ? <Loader /> : categories ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{showCategories(categories)}</Nav>
          <SearchField />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <div>Categories were not found</div>
  )
};

export default Header;
