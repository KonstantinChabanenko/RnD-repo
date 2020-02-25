import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import CategoryTilesGrid from '../../components/CategoryTilesGrid';
import PageBanner from '../../components/PageBanner';

const CategoryListingPage = () => (
    <PageLayout>
        <PageBanner />
        <CategoryTilesGrid />
    </PageLayout>
)

export default CategoryListingPage;
