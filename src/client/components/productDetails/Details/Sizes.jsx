import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

const Sizes = ({ sizes, setSelectedSize }) => {
    const selectAttrHandler = (e) => {
        const sizeValue = e.currentTarget.value;
        setSelectedSize(sizeValue);
    }

    return (
        <Fragment>
            <label>Select Size</label>
            <FormControl
                as="select"
                onChange={e => selectAttrHandler(e)}
            >
                <option value={null}>Select Size</option>
                {sizes ? sizes.values.map(size => {
                    console.log(size)
                    return (
                        size.orderable ? <option key={size.value} value={size.value}>{size.name}</option> : null
                    )
                }) : null}
            </FormControl>
        </Fragment>
    )
}

export default Sizes;
