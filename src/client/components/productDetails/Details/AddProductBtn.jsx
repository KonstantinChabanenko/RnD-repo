import React from 'react';
import { Button } from 'react-bootstrap';

const AddProductBtn = ({ disabled }) => (
    <div>
        <Button variant="primary" disabled={disabled}><i className="fas fa-shopping-bag"></i> Add Product</Button>
    </div>
)

export default AddProductBtn;
