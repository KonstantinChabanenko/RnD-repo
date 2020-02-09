import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sizes from './Sizes';
import Swatches from './Swatches';
import Quantity from './Quantity';
import Promotions from './Promotions';
import Prices from '../../Price';
import AddProductBtn from './AddProductBtn';
import SocialIcons from './SocialIcons';

const Details = ({ product, setSelectedSize, setSelectedColor, selectedSize, selectedColor }) => (
    <div>
        <h1 className="product-details__title">{product.title}</h1>
        <div className="product-details__number mb-4">Item No. {product.id}</div>
        <div className="product-details__attributes">
            <Swatches
                colors={product.colors}
                swatches={product.swatches}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <Row className="mb-3">
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
            <Prices
                priceMax={product.priceMax}
                priceMin={product.priceMin}
                currency={product.currency}
                listPrice={product.listPrice}
                product_type={product.product_type}
            />
            <AddProductBtn disabled={!selectedSize || !selectedColor} />
            <SocialIcons />
        </div>
    </div>

)

export default Details;
