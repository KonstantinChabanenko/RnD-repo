const applyRefinement = (e, state, setState, keyValue) => {
    e.stopPropagation();
    const selectedFilterValue = e.currentTarget.dataset.filterValue;
    const selectedFilter = state[keyValue] ? state[keyValue].find(filterValue => filterValue === selectedFilterValue) : null;
    if (!selectedFilter) {
        setState(prevState => {
            const updatedFilterValues = prevState[keyValue] ? prevState[keyValue] : [];
            updatedFilterValues.push(selectedFilterValue);

            return ({
                ...prevState,
                [keyValue]: updatedFilterValues
            })
        });
    } else {
        setState(prevState => {
            const updatedFilterValues = prevState[keyValue];
            const selectedFilterIndex = updatedFilterValues.indexOf(selectedFilter);
            updatedFilterValues.splice(selectedFilterIndex, 1);

            return ({
                ...prevState,
                [keyValue]: updatedFilterValues
            })
        });
    }
}

export default applyRefinement;
