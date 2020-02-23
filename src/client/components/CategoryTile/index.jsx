import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTile = ({ category }) => (
    <div className="category-tile position-relative">
        <Link to={`/${category.parent_category_id}/${category.id}`}>
            <img className="category-tile__image w-100" src={category.c_slotBannerImage} alt={category.name} />
            <h1 className="category-tile__title position-absolute">{category.name}</h1>
        </Link>
    </div>
)

export default CategoryTile;
