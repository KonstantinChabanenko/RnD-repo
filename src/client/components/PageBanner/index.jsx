import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

const PageBanner = ({ banner }) => {
    const { categoryId } = useParams();
    const navBarCategoriesReducer = useSelector(state => state.navBarCategoriesReducer);
    const { categories, isLoading } = navBarCategoriesReducer;
    const BreakException = new Error();
    let pageBanner = null;

    const findCategory = (categories) => {
        try {
            categories.forEach((category) => {
                if (category.id === categoryId) {
                    pageBanner = {
                        imageSrc: category.c_slotBannerImage || category.image,
                        title: category.name,
                    }
                    throw BreakException;
                } else if (category.categories) {
                    return findCategory(category.categories);
                }
            })
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    }

    const getPageBanner = (categories) => {
        findCategory(categories);
        return pageBanner;
    }


    return isLoading ? <Loader /> : categories ? (
        <div
            className="page-banner position-relative"
            style={{ backgroundImage: `url(${banner ? banner.imageSrc : getPageBanner(categories).imageSrc})` }}
        >
            <h1 className="page-banner__title position-absolute m-0">{banner ? banner.title : pageBanner.title}</h1>
        </div>
    ) : null
}

export default PageBanner;
