import React, { useState, useEffect } from 'react';
import ProductTilesGrid from '../../components/ProductTilesGrid';
import RefinementBar from '../../components/RefinementBar';
import { Col, Row, Container } from 'react-bootstrap';
import Loader from '../../components/Loader';
import { getProducts } from '../../services/productAPI';;

const ProductListingPage = () => {
  const [products, setProducts] = useState({ items: [], loaded: false });
  const [filters, setFilters] = useState({ items: [], loaded: true }); // loaded will be changed to false

  useEffect(() => {
    setProducts({ items: [], loaded: false });
    getProducts("womens-clothing-tops").then(res => {
      setProducts({ items: res, loaded: true });
    });
  }, []);

  return products.loaded && filters.loaded ? (
    <Container>
      <Row>
        <Col md={3}><RefinementBar filter={filters.items} /></Col>
        <Col md={9}><ProductTilesGrid products={products.items} /></Col>
      </Row>
    </Container>
  ) :
  (<Loader />)
}


export default ProductListingPage;
