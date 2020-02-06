const applySingleRefinement = (e, state, setState, keyValue) => {
    e.stopPropagation();
    const selectedFilterValue = e.currentTarget.dataset.filterValue;
    if (selectedFilterValue !== state[keyValue]) {
        setState(prevState => ({ ...prevState, [keyValue]: selectedFilterValue }))
    }
}

export default applySingleRefinement;