import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import categoryActions from '../../store/actions/categoryActions';
import Loader from '../Loader';
import CategoryTile from '../CategoryTile';

const CategoryTilesGrid = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const categoryReducer = useSelector(state => state.categoryReducer);
    const { categories, isLoading } = categoryReducer;

    useEffect(() => {
        dispatch(categoryActions.getCategoriesStart(categoryId));
    }, [dispatch, categoryId]);

    return isLoading ? (<Loader />) : (
        categories ? (
            <div className="category-tiles">
                <Container>
                    <Row>
                        {categories.map(category => (
                            <Col sm={6} md={4}>
                                <CategoryTile category={category} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        ) : (<p>Categories were not found :D</p>)
    );
}

export default CategoryTilesGrid;
