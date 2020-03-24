import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import basketActions from '../../../store/actions/basketActions';
import { useCookies } from 'react-cookie';

const AddProductBtn = ({ disabled }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['token']);
  const addProductFn = () => {
    console.log(cookies.token);
    dispatch(basketActions.createBasketStart({}, cookies.token));
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
