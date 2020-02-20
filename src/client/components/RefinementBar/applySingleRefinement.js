import productActions from '../../store/actions/productActions';

const applySingleRefinement = (e, dispatch, selectedRefinements, keyValue, selectedSortingOption) => {
    e.stopPropagation();
    const selectedRefinement = e.currentTarget.dataset.filterValue;
    if (selectedRefinement !== selectedRefinements[keyValue]) {
        dispatch(productActions.selectRefinement(keyValue, selectedRefinement, selectedRefinements, selectedSortingOption));
    }
}

export default applySingleRefinement;
