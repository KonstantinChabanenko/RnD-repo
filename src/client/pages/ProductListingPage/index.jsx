import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTilesGrid from '../../components/ProductTilesGrid';
import RefinementBar from '../../components/RefinementBar';
import { Col, Row, Container } from 'react-bootstrap';
import Loader from '../../components/Loader';
import { getProducts } from '../../services/productAPI';;

const ProductListingPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState({ items: null, loaded: false });
  const [filters, setFilters] = useState({ items: null, loaded: false });
  const [selectedRefinements, setSelectedRefinements] = useState({ categoryId });

  useEffect(() => {
    const params = {};
    Object.keys(selectedRefinements).forEach((key, index) => {
      if (key !== "categoryId") {
        switch (key) {
          case 'colors':
            params[`refine_${index}`] = `c_refinementColor=${selectedRefinements[key].join('|')}`;
          default:
            return null;
        }
      }
    });
    console.log(params);

    setProducts(prevState => ({ ...prevState, loaded: false }));
    setFilters(prevState => ({ ...prevState, loaded: false }));
    getProducts(selectedRefinements.categoryId, params).then(res => {
      setProducts({ items: res.products, loaded: true });
      setFilters({ items: res.refinements, loaded: true });
    });
  }, [categoryId, selectedRefinements]);

  return products.items && filters.items ? (
    <Container>
      <Row>
        <Col md={3}><RefinementBar
          filters={filters.items}
          selectedRefinements={selectedRefinements}
          setSelectedRefinements={setSelectedRefinements}
        />
        </Col>
        <Col md={9}><ProductTilesGrid products={products.items} /></Col>
      </Row>
      {products.loaded && filters.loaded ? null : <Loader />}
    </Container>
  ) :
  (<Loader />)
}


export default ProductListingPage;
