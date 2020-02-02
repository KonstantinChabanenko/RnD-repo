import React from 'react';
import ProductTilesGrid from '../../components/ProductTilesGrid';
import RefinementBar from '../../components/RefinementBar';
import { Col, Row, Container } from 'react-bootstrap';

const ProductListingPage = () => (
  <Container>
    <Row>
      <Col md={3}><RefinementBar /></Col>
      <Col md={9}><ProductTilesGrid /></Col>
    </Row>
  </Container>
)


export default ProductListingPage;
