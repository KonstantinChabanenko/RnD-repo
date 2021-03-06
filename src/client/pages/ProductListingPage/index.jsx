import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductTilesGrid from '../../components/ProductTilesGrid';
import RefinementBar from '../../components/RefinementBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Loader from '../../components/Loader';
import GridHeader from '../../components/GridHeader';
import PageLayout from '../../layouts/PageLayout';
import productActions from '../../store/actions/productActions';
import PageBanner from '../../components/PageBanner';

const ProductListingPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const productsReducer = useSelector(state => state.productsReducer);
  const { products, refinements, sortingOptions, isLoading } = productsReducer;
  const reset = useCallback(() => {
    dispatch(productActions.resetFilters());
    dispatch(productActions.selectRefinement('categoryId', categoryId, {}, "best-matches"));
  }, [dispatch, categoryId]);

  useEffect(() => {
    reset();
  }, [reset]);

  return products && refinements && sortingOptions ? (
    <PageLayout>
      <PageBanner />
      <Container>
        <GridHeader />
        <Row>
          <Col md={3}>
          <div className="refinement-bar">
            <Button
              variant="outline-primary"
              className="reset-btn w-100 mb-4"
              onClick={reset}
            >
              Reset
            </Button>
            <RefinementBar />
          </div>
          </Col>
          <Col md={9}><ProductTilesGrid /></Col>
        </Row>
        {isLoading ? <Loader /> : null}
      </Container>
    </PageLayout>
  ) :
  (<Loader />)
}


export default ProductListingPage;
