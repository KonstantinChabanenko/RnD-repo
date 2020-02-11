import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getProductDetails } from '../../services/productAPI';
import Slider from '../../components/productDetails/Slider';
import Details from '../../components/productDetails/Details';
import DescriptionAndDetails from '../../components/productDetails/DescriptionAndDetails';
import Loader from '../../components/Loader';
import { Container, Row, Col } from 'react-bootstrap';
import applyAttribute from './applyAttribute';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const location = useLocation();
    const defaultColor = location.query ? location.query['color'] : null;
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [product, setProduct] = useState(null);

    const memoizedGetProductDetails = useMemo(() => getProductDetails(productId), [productId]);

    // useEffect(() => {
    //     if (defaultColor && !selectedColor) {
    //         memoizedGetProductDetails.then(res => {
    //             if (res.variants) {
    //                 applyAttribute(res, 'sizes', 'c_color', 'c_size', defaultColor);
    //             }
    //             setProduct(res);
    //             setSelectedColor(defaultColor);
    //         });
    //     } else if (selectedColor && !selectedSize) {
    //         setProduct(prevState => {
    //             const prevProduct = {...prevState};
    //             applyAttribute(prevProduct, 'sizes', 'c_color', 'c_size', selectedColor);
    //             return prevProduct;
    //         });
    //     } else if (!selectedColor && selectedSize) {
    //         setProduct(prevState => {
    //             const prevProduct = {...prevState};
    //             applyAttribute(prevProduct, 'colors', 'c_size', 'c_color', selectedSize);
    //             return prevProduct;
    //         });
    //     } else if(selectedColor && selectedSize) {
    //         setProduct(prevState => {
    //             const prevProduct = {...prevState};
    //             applyAttribute(prevProduct, 'sizes', 'c_color', 'c_size', selectedColor);
    //             applyAttribute(prevProduct, 'colors', 'c_size', 'c_color', selectedSize);
    //             const selectedVariant = prevProduct.variants.find(variant => variant.c_color === selectedColor && variant.c_size === selectedSize);
    //             prevProduct.id = selectedVariant.id;
    //             prevProduct.title = selectedVariant.page_title;
    //             prevProduct.long_description = selectedVariant.long_description;
    //             prevProduct.short_description = selectedVariant.short_description;
    //             prevProduct.priceMin = selectedVariant.price;
    //             prevProduct.listPrice = selectedVariant.prices ? Math.max(...Object.values(selectedVariant.prices)) : null;
    //             prevProduct.priceMax = selectedVariant.price_max;
    //             prevProduct.images = selectedVariant.image_groups[0].images;
    //             prevProduct.stockLevel = selectedVariant.inventory.ats;

    //             return prevProduct;
    //         });
    //     } else {
    //         memoizedGetProductDetails.then(res => setProduct(res));
    //     }
    // }, [memoizedGetProductDetails, selectedColor, selectedSize, defaultColor]);

    useEffect(() => {
        console.log('test');
        if (defaultColor && !selectedColor && !product) {
            memoizedGetProductDetails.then(res => {
                if (res.variants) {
                    applyAttribute(res, 'sizes', 'c_color', 'c_size', defaultColor);
                }
                setProduct(res);
                setSelectedColor(defaultColor);
            });
            console.log('test1');
        } else if (!product) {
            memoizedGetProductDetails.then(res => setProduct(res));
            console.log('test2');
        }
    }, [defaultColor, memoizedGetProductDetails, selectedColor, product]);

    return product ? (
        <div className="product-details">
            <Container>
                <Row>
                    <Col sm={6}>
                        <Slider defaultImages={product.images} variants={product.variants} />
                    </Col>
                    <Col sm={6}>
                        <Details
                            product={product}
                            setSelectedSize={setSelectedSize}
                            setSelectedColor={setSelectedColor}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            setProduct={setProduct}
                        />
                    </Col>
                </Row>
                <DescriptionAndDetails
                    shortDescription={product.short_description}
                    longDescription={product.long_description}
                />
            </Container>
        </div>
    ) : (
            <Loader />
        )
}

export default ProductDetailsPage;
