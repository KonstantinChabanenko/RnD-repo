import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import basketActions from '../../../store/actions/basketActions';

const AddProductBtn = ({ disabled }) => {
  const dispatch = useDispatch();
  const addProductFn = () => {
    dispatch(basketActions.createBasketStart({}));
  }

  return (
    <div className="add-product text-center my-3">
      <Button
        variant="primary"
        disabled={disabled}
        onClick={addProductFn}
      >
        <i className="fas fa-shopping-bag"></i> Add Product
      </Button>
    </div>
  )
}

export default AddProductBtn;
