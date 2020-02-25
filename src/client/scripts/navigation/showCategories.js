import React from 'react';
import NavItem from '../../components/Header/NavItem';
import DropdownItem from '../../components/Header/DropdownItem';

const showCategories = (categories) => {
    const newarr = [];
    categories.forEach(category => {
        if (category.c_showInMenu) {
            if (category.parent_category_id === "root") {
                if (category.categories) {
                    newarr.push(
                        <NavItem
                            key={category.id}
                            linkTo={`/${category.id}`}
                            catName={category.name}
                        >
                            {showCategories(category.categories)}
                        </NavItem>
                    )
                } else {
                    newarr.push(
                        <NavItem
                            key={category.id}
                            linkTo={`/${category.id}`}
                            catName={category.name}
                        />
                    )
                }
            } else {
                if (category.categories) {
                    newarr.push(
                        <DropdownItem
                            key={category.id}
                            linkTo={`/${category.parent_category_id}/${category.id}`}
                            catName={category.name}
                        >
                            {showCategories(category.categories)}
                        </DropdownItem>
                    )
                } else {
                    newarr.push(
                        <DropdownItem
                            key={category.id}
                            linkTo={`/${category.parent_category_id}/${category.id}`}
                            catName={category.name}
                        />
                    )
                }
            }
        }
    })

    if (newarr.length > 0) {
        return newarr;
    }
}

export default showCategories;
