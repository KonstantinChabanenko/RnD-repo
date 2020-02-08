import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sizes from './Sizes';
import Swatches from './Swatches';
import Quantity from './Quantity';
import Promotions from './Promotions';

const Details = ({ product, setSelectedSize, setSelectedColor }) => (
    <div>
        <h1>{product.title}</h1>
        <div className="product-number">Item No. {product.id}</div>
        <div className="attributes">
            <Swatches
                swatches={product.swatches}
                setSelectedColor={setSelectedColor}
            />
            <Row>
                <Col xs={8}>
                    <Sizes
                        sizes={product.sizes}
                        setSelectedSize={setSelectedSize}
                    />
                </Col>
                <Col xs={4}>
                    {product.stockLevel ? <Quantity stockLevel={product.stockLevel} /> : null}
                </Col>
            </Row>
            <Promotions promotions={product.product_promotions} />
        </div>
    </div>

)

export default Details;
