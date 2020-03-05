import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import productActions from '../../store/actions/productActions';

const ProductDetailsPageV2 = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(productActions.getProductByIdStart(productId));
  });

  return (
    <PageLayout>
      <div className="product-details pt-4">

      </div>
    </PageLayout>
  )
}

export default ProductDetailsPageV2;
