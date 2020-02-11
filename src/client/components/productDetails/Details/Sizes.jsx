import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import applyAttribute from '../../../pages/ProductDetailsPage/applyAttribute';

const Sizes = ({ sizes, selectedSize, setSelectedSize, setProduct }) => {
    const selectAttrHandler = (e) => {
        const sizeValue = e.currentTarget.value;
        if (!sizeValue) {
            setSelectedSize(null);
            setProduct(prevState => {
                const prevProduct = {...prevState};
                prevProduct.colors.values = prevState.colors.values.map(color => ({...color, orderable: true}));
                return prevProduct;
            });
        } else if (sizeValue !== selectedSize) {
            setSelectedSize(sizeValue);
            setProduct(prevState => {
                const prevProduct = {...prevState};
                applyAttribute(prevProduct, 'colors', 'c_size', 'c_color', sizeValue);
                return prevProduct;
            });
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
