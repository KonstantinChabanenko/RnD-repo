const applyAttribute = (productObj, productAttrKey, attrKey1, attrKey2, attrValue) => {
    productObj.variants.forEach(variant => {
        const productAttr = productObj[productAttrKey].values.find(value => value.value === variant[attrKey2]);
        if (variant[attrKey1] === attrValue && !variant.inventory.orderable) {
            productAttr.orderable = false;
        } else if (variant[attrKey1] === attrValue) {
            productAttr.orderable = true;
        }
    });
}

export default applyAttribute;
