import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import productActions from '../../store/actions/productActions';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '../../components/productDetailsV2/Slider';
import Details from '../../components/productDetailsV2/Details';
import Loader from '../../components/Loader';
import DescriptionAndDetails from '../../components/productDetailsV2/DescriptionAndDetails';

const ProductDetailsPageV2 = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productReducerV2 = useSelector(state => state.productReducerV2);
  const { currentProduct, isLoading } = productReducerV2;

  useEffect(() => {
    dispatch(productActions.getProductByIdStartV2({ pid: productId }));
  }, [dispatch, productId]);

  return currentProduct ? (
    <PageLayout>
      <div className="product-details pt-4">
        <Container>
          <Row>
            <Col sm={6}>
              <Slider images={ currentProduct.product.images.large } />
            </Col>
            <Col sm={6}>
              <Details product={ currentProduct.product } />
            </Col>
          </Row>
          <DescriptionAndDetails
            longDescription={currentProduct.product.longDescription}
            shortDescription={currentProduct.product.shortDescription}
          />
        </Container>
        {isLoading ? <Loader /> : null}
      </div>
    </PageLayout>
  ) : (
    <div>The product wasn't found</div>
  )
}

export default ProductDetailsPageV2;
