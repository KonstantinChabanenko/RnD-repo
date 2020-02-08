import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

const Quantity = ({ stockLevel }) => {
    const countQuantity = (num => {
        let items = [];
        for (let i = 0; i < num; i++) {
            items.push(<option key={i} value={i + 1}>{i + 1}</option>)
        }

        return items;
    });

    return (
        <Fragment>
            <label>Quantity</label>
            <FormControl
                as="select"
            >
                {stockLevel >= 10 ? countQuantity(10) : countQuantity(stockLevel)}
            </FormControl>
        </Fragment>
    )
}

export default Quantity;
