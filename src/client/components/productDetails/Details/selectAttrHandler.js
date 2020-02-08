const selectAttrHandler = (selectedAttrValue, attrKey1, attrKey2, variants, setState, statePropKeyName) => {
    let disabledAttrs = [];
    variants.forEach(variant => {
        if (variant[attrKey1] === selectedAttrValue && !variant.inventory.orderable) {
            disabledAttrs.push(variant[attrKey2]);
        }
    });
    if (disabledAttrs.length > 0) {
        setState(prevState => {
            const attrValues = prevState[statePropKeyName];
            const updatedAttrValues = attrValues.map(attrValue => ({...attrValue, orderable: false}));

            return ({...prevState, [statePropKeyName]: updatedAttrValues});
        });
    }
}

export default selectAttrHandler;
