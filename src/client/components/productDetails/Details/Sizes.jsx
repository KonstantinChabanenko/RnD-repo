import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

const Sizes = ({ sizes, selectedSize, setSelectedSize }) => {
    const selectAttrHandler = (e) => {
        const sizeValue = e.currentTarget.value;
        if (sizeValue !== selectedSize) {
            setSelectedSize(sizeValue);
        }
    }

    return (
        <Fragment>
            <label>Select Size</label>
            <FormControl
                as="select"
                defaultValue=""
                onChange={e => selectAttrHandler(e)}
            >
                <option value="">Select Size</option>
                {sizes ? sizes.values.map(size => (
                    <option
                        key={size.value}
                        value={size.value}
                        disabled={!size.orderable}
                    >
                        {size.name}
                    </option>
                )) : null}
            </FormControl>
        </Fragment>
    )
}

export default Sizes;
