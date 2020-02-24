import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import navBarCategoriesActions from '../../store/actions/navBarCategoriesActions';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import PageBanner from '../../components/PageBanner';

const PageLayout = ({ children }) => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const navBarCategoriesReducer = useSelector(state => state.navBarCategoriesReducer);
  const { categories, isLoading } = navBarCategoriesReducer;
  const BreakException = new Error();
  let pageBanner = null;

  const findCategory = (categories) => {
    try {
      categories.forEach((category) => {
          if (category.id === categoryId) {
            pageBanner = {
              imageSrc: category.c_slotBannerImage,
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

  useEffect(() => {
    dispatch(navBarCategoriesActions.getCategoriesStart());
  }, [dispatch]);

  return isLoading ? <Loader /> : categories ? (
    <Fragment>
      <Header navCategories={categories} />
      <PageBanner banner={getPageBanner(categories)} />
      <div role="main" id="maincontent">
        {children}
      </div>
    </Fragment>
  ) : (
      <div>Categories were not found</div>
    )
}

export default PageLayout;
