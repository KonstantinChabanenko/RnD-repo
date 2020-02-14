export const applyAttribute = (productObj, productAttrKey, attrKey1, attrKey2, attrValue) => {
    productObj.variants.forEach(variant => {
        const productAttr = productObj[productAttrKey].values.find(value => value.value === variant[attrKey2]);
        if (variant[attrKey1] === attrValue && !variant.inventory.orderable) {
            productAttr.orderable = false;
        } else if (variant[attrKey1] === attrValue) {
            productAttr.orderable = true;
        } else if (!attrValue) {
            productAttr.orderable = true;
        }
    });
}

export const setSelectedVariant = (product) => {
    const selectedVariant = product.variants.find(variant => variant.c_color === product.selectedColor && variant.c_size === product.selectedSize);

    return {
        id: selectedVariant.id,
        title: selectedVariant.page_title,
        long_description: selectedVariant.long_description,
        short_description: selectedVariant.short_description,
        priceMin: selectedVariant.price,
        listPrice: selectedVariant.prices ? Math.max(...Object.values(selectedVariant.prices)).toString() + '.00' : null,
        priceMax: selectedVariant.price_max,
        stockLevel: selectedVariant.inventory.ats,
        currency: selectedVariant.currency,
        product_type: 'variation',
    }
}
