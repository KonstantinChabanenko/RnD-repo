import React from 'react';
import { Button } from 'react-bootstrap';

const AddProductBtn = ({ disabled }) => (
  <div className="add-product text-center my-3">
    <Button variant="primary" disabled={disabled}><i className="fas fa-shopping-bag"></i> Add Product</Button>
  </div>
)

export default AddProductBtn;
