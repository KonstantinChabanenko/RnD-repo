import productActions from '../../store/actions/productActions';

const applyRefinement = (e, dispatch, selectedRefinements, keyValue, selectedSortingOption) => {
    e.stopPropagation();
    const selectedRefinementValue = e.currentTarget.dataset.filterValue;
    const selectedRefinement = selectedRefinements[keyValue] ? selectedRefinements[keyValue].find(filterValue => filterValue === selectedRefinementValue) : null;
    let updatedRefinementValues;
    if (!selectedRefinement) {
        updatedRefinementValues = selectedRefinements[keyValue] || [];
        updatedRefinementValues.push(selectedRefinementValue);
    } else {
        updatedRefinementValues = selectedRefinements[keyValue];
        const selectedRefinementIndex = updatedRefinementValues.indexOf(selectedRefinement);
        updatedRefinementValues.splice(selectedRefinementIndex, 1);
    }

    dispatch(productActions.selectRefinement(keyValue, updatedRefinementValues, selectedRefinements, selectedSortingOption));
}

export default applyRefinement;
