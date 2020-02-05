import React from 'react';
import { Card } from 'react-bootstrap';

const Categories = ({ categories, selectedRefinements, setSelectedRefinements }) => {
    const applyRefinement = (e) => {
        e.stopPropagation();
        const selectedCategoryId = e.currentTarget.dataset.categoryId;
        if (selectedCategoryId !== selectedRefinements.categoryId) {
            setSelectedRefinements(prevState => ({ ...prevState, categoryId: selectedCategoryId }))
        }
    }

    const showCategories = (values) => {
        const newarr = values.map(value => {
            if (value.values) {
                return (
                    <li key={value.value} className="value" data-category-id={value.value} onClick={(e) => applyRefinement(e)}>
                        {value.value === selectedRefinements.categoryId ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
                        <span className="category-name">{value.label}</span>
                        <ul className="refinement__values">{showCategories(value.values)}</ul>
                    </li>
                )
            }

            return (
                <li key={value.value} className="value" data-category-id={value.value} onClick={(e) => applyRefinement(e)}>
                    {value.value === selectedRefinements.categoryId ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
                    <span className="category-name">{value.label}</span>
                </li>
            )
        });

        return newarr;
    }

    return (
        <Card className="refinement categories">
            <Card.Header>{categories.label}</Card.Header>
            <Card.Body>
                <ul className="refinement__values top-level">
                    {showCategories(categories.values)}
                </ul>
            </Card.Body>
        </Card>
    )
}

export default Categories;
