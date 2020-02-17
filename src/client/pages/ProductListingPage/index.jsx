import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductTilesGrid from '../../components/ProductTilesGrid';
import RefinementBar from '../../components/RefinementBar';
import { Col, Row, Container, Button } from 'react-bootstrap';
import Loader from '../../components/Loader';
import GridHeader from '../../components/GridHeader';
import { getProducts } from '../../services/productAPI';
import PageLayout from '../../layouts/PageLayout';

const ProductListingPage = () => {
  const { categoryId } = useParams();
  const initProductsState = { items: null, loaded: false };
  const initFiltersState = { items: null, loaded: false };
  const initSortingOptions = { items: null, loaded: false };
  const initSelectedSortingOption = "best-matches";
  const initSelectedRefinements = { categoryId, isNew: false };
  const [products, setProducts] = useState(initProductsState);
  const [filters, setFilters] = useState(initFiltersState);
  const [sortingOptions, setSortingOptions] = useState(initSortingOptions);
  const [selectedRefinements, setSelectedRefinements] = useState(initSelectedRefinements);
  const [selectedSortingOption, setSelectedSortingOption] = useState(initSelectedSortingOption);

  const resetFilters = () => {
    setSelectedRefinements(initSelectedRefinements);
    setSelectedSortingOption(initSelectedSortingOption);
  }

  useEffect(() => {
    const params = {};
    Object.keys(selectedRefinements).forEach((key, index) => {
      if (key !== "categoryId") {
        switch (key) {
          case 'colors':
            params[`refine_${index}`] = `c_refinementColor=${selectedRefinements[key].join('|')}`;
            break;
          case 'isNew':
            if (selectedRefinements.isNew) {
              params[`refine_${index}`] = `c_isNew`;
            }
            break;
          case 'sizes':
            params[`refine_${index}`] = `c_size=${selectedRefinements[key].join('|')}`;
            break;
          case 'price':
            params[`refine_${index}`] = `price=${selectedRefinements[key]}`;
            break;
          default:
            return null;
        }
      }
    });

    if (selectedSortingOption) {
      params.sort = selectedSortingOption;
    }

    setProducts(prevState => ({ ...prevState, loaded: false }));
    setFilters(prevState => ({ ...prevState, loaded: false }));
    getProducts(selectedRefinements.categoryId, params).then(res => {
      setProducts({ items: res.products, loaded: true });
      setFilters({ items: res.refinements, loaded: true });
      setSortingOptions({ items: res.sortingOptions, loaded: true });
    });
  }, [categoryId, selectedRefinements, selectedSortingOption]);

  return products.items && filters.items && sortingOptions.items ? (
    <PageLayout>
      <Container>
        <GridHeader
          sortingOptions={sortingOptions.items}
          selectedSortingOption={selectedSortingOption}
          setSelectedSortingOption={setSelectedSortingOption}
        />
        <Row>
          <Col md={3}>
          <div className="refinement-bar">
            <Button
              variant="outline-primary"
              className="reset-btn w-100 mb-4"
              onClick={resetFilters}
            >
              Reset
            </Button>
            <RefinementBar
              filters={filters.items}
              selectedRefinements={selectedRefinements}
              setSelectedRefinements={setSelectedRefinements}
            />
          </div>
          </Col>
          <Col md={9}><ProductTilesGrid products={products.items} /></Col>
        </Row>
        {products.loaded && filters.loaded && sortingOptions.loaded ? null : <Loader />}
      </Container>
    </PageLayout>
  ) :
  (<Loader />)
}


export default ProductListingPage;
