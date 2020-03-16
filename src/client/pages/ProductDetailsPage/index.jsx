import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../../components/productDetails/Slider';
import Details from '../../components/productDetails/Details';
import DescriptionAndDetails from '../../components/productDetails/DescriptionAndDetails';
import Loader from '../../components/Loader';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import productActions from '../../store/actions/productActions';
import PageLayout from '../../layouts/PageLayout';
import { Link } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productReducer.currentProduct);
  const isLoading = useSelector(state => state.productReducer.isLoading);

  useEffect(() => {
    dispatch(productActions.getProductByIdStart(productId));
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loader />
  }

  return product ? (
    <PageLayout>
      <div className="product-details pt-4">
        <Container>
          <Row>
            <Col sm={6}>
              <Slider />
            </Col>
            <Col sm={6}>
              <Details />
            </Col>
          </Row>
          <DescriptionAndDetails />
          <Link to="/cart">Cart</Link>
        </Container>
      </div>
    </PageLayout>
  ) : (
      <div>The product wasn't found</div>
    )
}

export default ProductDetailsPage;
